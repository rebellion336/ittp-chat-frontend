'use strict';

var getLocalESLint = require('./utils/getLocalESLint');
var getESLintOptions = require('./utils/getESLintOptions');
var toTestResult = require('./utils/toTestResult');

var skip = function skip(_ref) {
  var start = _ref.start,
      end = _ref.end,
      testPath = _ref.testPath;
  return toTestResult({
    stats: {
      failures: 0,
      pending: 1,
      passes: 0,
      start,
      end
    },
    skipped: true,
    tests: [{
      duration: end - start,
      testPath
    }],
    jestTestPath: testPath
  });
};

var fail = function fail(_ref2) {
  var start = _ref2.start,
      end = _ref2.end,
      testPath = _ref2.testPath,
      errorMessage = _ref2.errorMessage;
  return toTestResult({
    errorMessage,
    stats: {
      failures: 1,
      pending: 0,
      passes: 0,
      start,
      end
    },
    tests: [{
      duration: end - start,
      testPath,
      errorMessage
    }],
    jestTestPath: testPath
  });
};

var pass = function pass(_ref3) {
  var start = _ref3.start,
      end = _ref3.end,
      testPath = _ref3.testPath;
  return toTestResult({
    stats: {
      failures: 0,
      pending: 0,
      passes: 1,
      start,
      end
    },
    tests: [{
      duration: end - start,
      testPath
    }],
    jestTestPath: testPath
  });
};

var runESLint = function runESLint(_ref4, workerCallback) {
  var testPath = _ref4.testPath,
      config = _ref4.config;

  try {
    var start = +new Date();

    if (config.setupTestFrameworkScriptFile) {
      require(config.setupTestFrameworkScriptFile);
    }

    var _getLocalESLint = getLocalESLint(config),
        CLIEngine = _getLocalESLint.CLIEngine;

    var options = getESLintOptions(config);
    var cli = new CLIEngine(options.cliOptions);
    if (cli.isPathIgnored(testPath)) {
      var end = +new Date();
      workerCallback(null, skip({ start, end, testPath }));
    } else {
      var report = cli.executeOnFiles([testPath]);

      if (options.cliOptions && options.cliOptions.fix) {
        CLIEngine.outputFixes(report);
      }

      var _end = +new Date();

      if (report.errorCount > 0) {
        var formatter = cli.getFormatter(options.cliOptions.format);
        var errorMessage = formatter(CLIEngine.getErrorResults(report.results));

        workerCallback(null, fail({ start, end: _end, testPath, errorMessage }));
      } else {
        workerCallback(null, pass({ start, end: _end, testPath }));
      }
    }
  } catch (e) {
    workerCallback(e);
  }
};

module.exports = runESLint;