webpackHotUpdate(3,{

/***/ "./component/loan/bindingIdForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tools_api__ = __webpack_require__("./tools/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tools_validators__ = __webpack_require__("./tools/validators.js");

var _jsxFileName = '/Users/admin/Desktop/bas/ittp-chat-frontend/component/loan/bindingIdForm.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var FormItem = __WEBPACK_IMPORTED_MODULE_2_antd__["c" /* Form */].Item;

var BindingIdForm = function (_Component) {
    _inherits(BindingIdForm, _Component);

    function BindingIdForm(props) {
        _classCallCheck(this, BindingIdForm);

        var _this = _possibleConstructorReturn(this, (BindingIdForm.__proto__ || Object.getPrototypeOf(BindingIdForm)).call(this, props));

        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(BindingIdForm, [{
        key: 'handleSubmit',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(event) {
                var _this2 = this;

                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                this.props.form.validateFields(function (err, values) {
                                    if (!err) {
                                        try {
                                            var citizenId = values.citizenId;
                                            var _props$customerInfo = _this2.props.customerInfo,
                                                id = _props$customerInfo.id,
                                                platform = _props$customerInfo.platform;

                                            var value = {
                                                id: id,
                                                citizenId: citizenId,
                                                platform: platform
                                            };
                                            Object(__WEBPACK_IMPORTED_MODULE_3__tools_api__["c" /* postJSON */])(__WEBPACK_IMPORTED_MODULE_3__tools_api__["a" /* API_SERVER */] + '/chats/line/binding', value);
                                        } catch (error) {
                                            console.error(error);
                                        }
                                    } else {
                                        console.log('Error');
                                    }
                                });

                            case 2:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function handleSubmit(_x) {
                return _ref.apply(this, arguments);
            }

            return handleSubmit;
        }()
    }, {
        key: 'render',
        value: function render() {
            var getFieldDecorator = this.props.form.getFieldDecorator;

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_antd__["c" /* Form */],
                { onSubmit: this.handleSubmit, style: { textAlign: 'center' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 45
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 46
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 47
                        }
                    },
                    '\u0E25\u0E39\u0E01\u0E15\u0E49\u0E32\u0E44\u0E21\u0E48\u0E21\u0E35\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 48
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    FormItem,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 49
                        }
                    },
                    getFieldDecorator('citizenId', {
                        rules: [{
                            required: true,
                            message: 'โปรดใส่เลขบัตรประชาชนของลูกค้า'
                        }, {
                            validator: __WEBPACK_IMPORTED_MODULE_4__tools_validators__["a" /* validCitizenId */]
                        }]
                    })(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["e" /* Input */], { prefix: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["d" /* Icon */], { type: 'idcard', style: { color: 'rgba(0,0,0,.25)' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 61
                            }
                        }), placeholder: '\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19\u0E02\u0E2D\u0E07\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 61
                        }
                    }))
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_antd__["a" /* Button */],
                    { type: 'primary', htmlType: 'submit', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 64
                        }
                    },
                    'Binding CitizenId'
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return BindingIdForm;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = __WEBPACK_IMPORTED_MODULE_2_antd__["c" /* Form */].create()(BindingIdForm);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(FormItem, 'FormItem', '/Users/admin/Desktop/bas/ittp-chat-frontend/component/loan/bindingIdForm.js');
    reactHotLoader.register(BindingIdForm, 'BindingIdForm', '/Users/admin/Desktop/bas/ittp-chat-frontend/component/loan/bindingIdForm.js');
    reactHotLoader.register(_default, 'default', '/Users/admin/Desktop/bas/ittp-chat-frontend/component/loan/bindingIdForm.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./tools/validators.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return validCitizenId; });
/* unused harmony export validDate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var validCitizenId = function validCitizenId(rule, value, callback) {
  var i = 0;
  var sum = 0;
  var id = value;
  if (id !== undefined) {
    if (id.length < 13) callback('กรุณากรอกรหัสบัตรประชาชนให้ครบ 13 หลัก');
    for (i = 0, sum = 0; i < 12; i += 1) {
      sum += parseFloat(id.charAt(i)) * (13 - i);
    }if ((11 - sum % 11) % 10 !== parseFloat(id.charAt(12))) {
      callback('รหัสบัตรประชาชนไม่ถูกต้องกรุณากรอกใหม่อีกครั้ง');
    }
  }
  callback();
};
var validDate = function validDate(rule, value, callback) {
  // Not yet complete YYYY-MM-DD
  if (value === undefined) {
    callback();
  } else if (value.length < 10) {
    callback('กรุณากรอกวันที่เดือนปี เช่น 13-07-2526');
  } else {
    // Accept only YYYY-MM-DD
    var date = value.split('-');
    var year = (date[2] - 543) % 4;
    var birthDate = __WEBPACK_IMPORTED_MODULE_0_moment___default()(value, 'YYYY-MM-DD', true);
    if (!birthDate.isValid()) {
      // Our system will convert DD-MM-YYYY to YYYY-MM-DD
      if (date[0] > 0 && date[0] <= 29 && date[1] === '02' && year === 0) {
        callback();
      }
      callback('กรุณากรอกวันที่เดือนปี เช่น 13-07-2526');
    } else {
      var birthYear = birthDate.year();
      if (birthYear < 1900) {
        callback('กรุณากรอกปี พ.ศ.');
      }
      callback();
    }
  }
};
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(validCitizenId, 'validCitizenId', '/Users/admin/Desktop/bas/ittp-chat-frontend/tools/validators.js');
  reactHotLoader.register(validDate, 'validDate', '/Users/admin/Desktop/bas/ittp-chat-frontend/tools/validators.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.4bd6be4fec59af0b46ce.hot-update.js.map