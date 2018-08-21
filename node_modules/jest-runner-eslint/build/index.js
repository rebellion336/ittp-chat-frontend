'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var throat = require('throat');
var pify = require('pify');
var workerFarm = require('worker-farm');
var path = require('path');

var TEST_WORKER_PATH = path.join(__dirname, 'runESLint.js');

var CancelRun = function (_Error) {
  _inherits(CancelRun, _Error);

  function CancelRun(message) {
    _classCallCheck(this, CancelRun);

    var _this = _possibleConstructorReturn(this, (CancelRun.__proto__ || Object.getPrototypeOf(CancelRun)).call(this, message));

    _this.name = 'CancelRun';
    return _this;
  }

  return CancelRun;
}(Error);

module.exports = function () {
  function ESLintTestRunner(globalConfig) {
    _classCallCheck(this, ESLintTestRunner);

    this._globalConfig = globalConfig;
  }

  // eslint-disable-next-line


  _createClass(ESLintTestRunner, [{
    key: 'runTests',
    value: function () {
      var _ref = _asyncToGenerator(function* (tests, watcher, onStart, onResult, onFailure) {
        var _this2 = this;

        var farm = workerFarm({
          autoStart: true,
          maxConcurrentCallsPerWorker: 1,
          maxConcurrentWorkers: this._globalConfig.maxWorkers,
          maxRetries: 2 // Allow for a couple of transient errors.
        }, TEST_WORKER_PATH);

        var mutex = throat(this._globalConfig.maxWorkers);
        var worker = pify(farm);

        var runTestInWorker = function runTestInWorker(test) {
          return mutex(_asyncToGenerator(function* () {
            if (watcher.isInterrupted()) {
              throw new CancelRun();
            }
            yield onStart(test);
            return worker({
              config: test.context.config,
              globalConfig: _this2._globalConfig,
              testPath: test.path,
              rawModuleMap: watcher.isWatchMode() ? test.context.moduleMap.getRawModuleMap() : null
            });
          }));
        };

        var onError = function () {
          var _ref3 = _asyncToGenerator(function* (err, test) {
            yield onFailure(test, err);
            if (err.type === 'ProcessTerminatedError') {
              // eslint-disable-next-line no-console
              console.error('A worker process has quit unexpectedly! ' + 'Most likely this is an initialization error.');
              process.exit(1);
            }
          });

          return function onError(_x6, _x7) {
            return _ref3.apply(this, arguments);
          };
        }();

        var onInterrupt = new Promise(function (_, reject) {
          watcher.on('change', function (state) {
            if (state.interrupted) {
              reject(new CancelRun());
            }
          });
        });

        var runAllTests = Promise.all(tests.map(function (test) {
          return runTestInWorker(test).then(function (testResult) {
            return onResult(test, testResult);
          }).catch(function (error) {
            return onError(error, test);
          });
        }));

        var cleanup = function cleanup() {
          return workerFarm.end(farm);
        };

        return Promise.race([runAllTests, onInterrupt]).then(cleanup, cleanup);
      });

      function runTests(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      }

      return runTests;
    }()
  }]);

  return ESLintTestRunner;
}();