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
        var _this2 = this;

        _classCallCheck(this, BindingIdForm);

        var _this = _possibleConstructorReturn(this, (BindingIdForm.__proto__ || Object.getPrototypeOf(BindingIdForm)).call(this, props));

        _this.handleSubmit = function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(event) {
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.props.form.validateFields(function (err, values) {
                                    if (!err) {
                                        try {
                                            var citizenId = values.citizenId;
                                            var _this$props$customerI = _this.props.customerInfo,
                                                id = _this$props$customerI.id,
                                                platform = _this$props$customerI.platform;

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
                                        console.log('ERROR');
                                    }
                                });

                            case 2:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref.apply(this, arguments);
            };
        }();

        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(BindingIdForm, [{
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

/***/ })

})
//# sourceMappingURL=3.319278cbef02f8304e19.hot-update.js.map