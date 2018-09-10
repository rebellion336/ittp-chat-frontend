webpackHotUpdate(3,{

/***/ "./component/loan/bindingIdForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tools_api__ = __webpack_require__("./tools/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tools_validators__ = __webpack_require__("./tools/validators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux_ducks_loan__ = __webpack_require__("./redux/ducks/loan.js");

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
        value: function handleSubmit(event) {
            var _this2 = this;

            event.preventDefault();
            this.props.form.validateFields(function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(err, values) {
                    var citizenId, _props$customerInfo, id, platform, value;

                    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    if (!err) {
                                        citizenId = values.citizenId;
                                        _props$customerInfo = _this2.props.customerInfo, id = _props$customerInfo.id, platform = _props$customerInfo.platform;

                                        try {
                                            value = {
                                                id: id,
                                                citizenId: citizenId,
                                                platform: platform
                                            };

                                            Object(__WEBPACK_IMPORTED_MODULE_4__tools_api__["c" /* postJSON */])(__WEBPACK_IMPORTED_MODULE_4__tools_api__["a" /* API_SERVER */] + '/chats/line/binding', value);
                                            _this2.props.fetchLoan({ id: id });
                                        } catch (error) {
                                            console.error(error);
                                        }
                                    } else {
                                        console.log('Error');
                                    }

                                case 1:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this2);
                }));

                return function (_x, _x2) {
                    return _ref.apply(this, arguments);
                };
            }());
        }
    }, {
        key: 'render',
        value: function render() {
            var getFieldDecorator = this.props.form.getFieldDecorator;

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_antd__["c" /* Form */],
                { onSubmit: this.handleSubmit, style: { textAlign: 'center' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 48
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 50
                        }
                    },
                    '\u0E25\u0E39\u0E01\u0E15\u0E49\u0E32\u0E44\u0E21\u0E48\u0E21\u0E35\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 51
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    FormItem,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 52
                        }
                    },
                    getFieldDecorator('citizenId', {
                        rules: [{
                            required: true,
                            message: 'โปรดใส่เลขบัตรประชาชนของลูกค้า'
                        }, {
                            validator: __WEBPACK_IMPORTED_MODULE_5__tools_validators__["a" /* validCitizenId */]
                        }]
                    })(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["e" /* Input */], { prefix: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["d" /* Icon */], { type: 'idcard', style: { color: 'rgba(0,0,0,.25)' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 64
                            }
                        }), placeholder: '\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19\u0E02\u0E2D\u0E07\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 64
                        }
                    }))
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_antd__["a" /* Button */],
                    { type: 'primary', htmlType: 'submit', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 67
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

var WrappedBindingIdForm = __WEBPACK_IMPORTED_MODULE_2_antd__["c" /* Form */].create()(BindingIdForm);

var _default = Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(null, { fetchLoan: __WEBPACK_IMPORTED_MODULE_6__redux_ducks_loan__["e" /* fetchLoan */] })(WrappedBindingIdForm);

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
    reactHotLoader.register(WrappedBindingIdForm, 'WrappedBindingIdForm', '/Users/admin/Desktop/bas/ittp-chat-frontend/component/loan/bindingIdForm.js');
    reactHotLoader.register(_default, 'default', '/Users/admin/Desktop/bas/ittp-chat-frontend/component/loan/bindingIdForm.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./component/loan/loanAccount.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_ducks_loan__ = __webpack_require__("./redux/ducks/loan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loanInfo__ = __webpack_require__("./component/loan/loanInfo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bindingIdForm__ = __webpack_require__("./component/loan/bindingIdForm.js");
var _jsxFileName = '/Users/admin/Desktop/bas/ittp-chat-frontend/component/loan/loanAccount.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var LoanAccount = function (_Component) {
    _inherits(LoanAccount, _Component);

    function LoanAccount(props) {
        _classCallCheck(this, LoanAccount);

        var _this = _possibleConstructorReturn(this, (LoanAccount.__proto__ || Object.getPrototypeOf(LoanAccount)).call(this, props));

        _this.columns = [{
            dataIndex: 'loanId',
            key: 'loanId',
            align: 'center'
        }, {
            render: function render(record) {
                var name = record.firstName + ' ' + record.lastName;
                return name;
            }
        }];
        _this.state = {
            loanData: ''
        };
        return _this;
    }

    _createClass(LoanAccount, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchLoan({
                id: 'Uc72aacda842257e6ae27f0bb8d80cc13'
            });
        }
    }, {
        key: 'handleClickRow',
        value: function handleClickRow(record) {
            this.setState({
                loanData: record
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var data = this.props.loans.data;

            if (data !== undefined) {
                if (!data.length == 0) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 45
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["g" /* Table */], {
                            style: { cursor: 'pointer' },
                            dataSource: data,
                            columns: this.columns,
                            pagination: false,
                            onRow: function onRow(record) {
                                return {
                                    onClick: function onClick() {
                                        _this2.handleClickRow(record);
                                    }
                                };
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 46
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 59
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__loanInfo__["a" /* default */], { loanData: this.state.loanData, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 60
                            }
                        })
                    );
                }
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__bindingIdForm__["a" /* default */], { customerInfo: this.props.chats.data.customerInfo, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64
                    }
                });
            }
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                    }
                },
                'LOADING'
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return LoanAccount;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
    return {
        loans: state.loan,
        chats: state.chat
    };
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, { fetchLoan: __WEBPACK_IMPORTED_MODULE_3__redux_ducks_loan__["e" /* fetchLoan */] })(LoanAccount);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(LoanAccount, 'LoanAccount', '/Users/admin/Desktop/bas/ittp-chat-frontend/component/loan/loanAccount.js');
    reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/admin/Desktop/bas/ittp-chat-frontend/component/loan/loanAccount.js');
    reactHotLoader.register(_default, 'default', '/Users/admin/Desktop/bas/ittp-chat-frontend/component/loan/loanAccount.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./redux/ducks/ducks.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rootReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth__ = __webpack_require__("./redux/ducks/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cookie__ = __webpack_require__("./redux/ducks/cookie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat__ = __webpack_require__("./redux/ducks/chat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loan__ = __webpack_require__("./redux/ducks/loan.js");
(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();







var rootReducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    auth: __WEBPACK_IMPORTED_MODULE_1__auth__["c" /* default */],
    cookie: __WEBPACK_IMPORTED_MODULE_2__cookie__["a" /* default */],
    chat: __WEBPACK_IMPORTED_MODULE_3__chat__["c" /* default */],
    loan: __WEBPACK_IMPORTED_MODULE_4__loan__["d" /* default */]
});

var defaultState = {};
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(rootReducer, 'rootReducer', '/Users/admin/Desktop/bas/ittp-chat-frontend/redux/ducks/ducks.js');
    reactHotLoader.register(defaultState, 'defaultState', '/Users/admin/Desktop/bas/ittp-chat-frontend/redux/ducks/ducks.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./redux/ducks/loan.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FETCH_LOAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BIND_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return fetchLoan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return fetchLoanSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return fetchLoanFailure; });
/* unused harmony export bindId */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return bindIdSuccess; });
/* unused harmony export bindIdFailure */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

var FETCH_LOAN = 'ittp-chat/chat/FETCH_LOAN';
var FETCH_LOAN_SUCCESS = 'ittp-chat/chat/FETCH_LOAN_SUCCESS';
var FETCH_LOAN_FAILURE = 'ittp-chat/chat/FETCH_LOAN_FAILURE';

var BIND_ID = 'ittp-chat/chat/BIND_ID';
var BIND_ID_SUCCESS = 'ittp-chat/chat/BIND_ID_SUCCESS';
var BIND_ID_FAILURE = 'ittp-chat/chat/BIND_ID_FAILURE';

var fetchLoan = function fetchLoan(_ref) {
    var id = _ref.id;

    return {
        type: FETCH_LOAN,
        payload: { id: id }
    };
};

var fetchLoanSuccess = function fetchLoanSuccess(_ref2) {
    var data = _ref2.data;

    return {
        type: FETCH_LOAN_SUCCESS,
        payload: { data: data }
    };
};

var fetchLoanFailure = function fetchLoanFailure() {
    return {
        type: FETCH_LOAN_FAILURE,
        payload: { code: code, message: message }
    };
};

var bindId = function bindId(_ref3) {
    var id = _ref3.id,
        citizenId = _ref3.citizenId,
        platform = _ref3.platform;
    return {
        type: BIND_ID,
        payload: { id: id, citizenId: citizenId, platform: platform }
    };
};

var bindIdSuccess = function bindIdSuccess(_ref4) {
    var data = _ref4.data;

    return {
        type: BIND_ID_SUCCESS,
        payload: { data: data }
    };
};

var bindIdFailure = function bindIdFailure(_ref5) {
    var data = _ref5.data;

    return {
        type: BIND_ID_FAILURE,
        payload: { code: code, message: message }
    };
};

var initialState = {
    error: {},
    loading: false
};

var reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case FETCH_LOAN:
            {
                console.log('fetch loan reducer', action);
                return _extends({}, state, {
                    loading: true
                });
            }
        case FETCH_LOAN_SUCCESS:
            {
                var data = action.payload.data;

                return _extends({}, state, {
                    loading: false,
                    data: data
                });
            }
        case FETCH_LOAN_FAILURE:
            {
                return _extends({}, state, {
                    loading: false,
                    error: {
                        code: action.payload.code,
                        message: action.payload.message
                    }
                });
            }
        case BIND_ID:
            {
                return _extends({}, state, {
                    loading: true
                });
            }
        case BIND_ID_SUCCESS:
            {
                var _data = action.payload.data;

                return _extends({}, state, {
                    loading: false,
                    data: _data
                });
            }
        case BIND_ID_FAILURE:
            {
                return _extends({}, state, {
                    loading: false,
                    error: {
                        code: action.payload.code,
                        message: action.payload.message
                    }
                });
            }
        default:
            return state;
    }
};
var _default = reducer;
/* harmony default export */ __webpack_exports__["d"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(FETCH_LOAN, 'FETCH_LOAN', '/Users/admin/Desktop/bas/ittp-chat-frontend/redux/ducks/loan.js');
    reactHotLoader.register(FETCH_LOAN_SUCCESS, 'FETCH_LOAN_SUCCESS', '/Users/admin/Desktop/bas/ittp-chat-frontend/redux/ducks/loan.js');
    reactHotLoader.register(FETCH_LOAN_FAILURE, 'FETCH_LOAN_FAILURE', '/Users/admin/Desktop/bas/ittp-chat-frontend/redux/ducks/loan.js');
    reactHotLoader.register(BIND_ID, 'BIND_ID', '/Users/admin/Desktop/bas/ittp-chat-frontend/redux/ducks/loan.js');
    reactHotLoader.register(BIND_ID_SUCCESS, 'BIND_ID_SUCCESS', '/Users/admin/Desktop/bas/ittp-chat-frontend/redux/ducks/loan.js');
    reactHotLoader.register(BIND_ID_FAILURE, 'BIND_ID_FAILURE', '/Users/admin/Desktop/bas/ittp-chat-frontend/redux/ducks/loan.js');
    reactHotLoader.register(fetchLoan, 'fetchLoan', '/Users/admin/Desktop/bas/ittp-chat-frontend/redux/ducks/loan.js');
    reactHotLoader.register(fetchLoanSuccess, 'fetchLoanSuccess', '/Users/admin/Desktop/bas/ittp-chat-frontend/redux/ducks/loan.js');
    reactHotLoader.register(fetchLoanFailure, 'fetchLoanFailure', '/Users/admin/Desktop/bas/ittp-chat-frontend/redux/ducks/loan.js');
    reactHotLoader.register(bindId, 'bindId', '/Users/admin/Desktop/bas/ittp-chat-frontend/redux/ducks/loan.js');
    reactHotLoader.register(bindIdSuccess, 'bindIdSuccess', '/Users/admin/Desktop/bas/ittp-chat-frontend/redux/ducks/loan.js');
    reactHotLoader.register(bindIdFailure, 'bindIdFailure', '/Users/admin/Desktop/bas/ittp-chat-frontend/redux/ducks/loan.js');
    reactHotLoader.register(initialState, 'initialState', '/Users/admin/Desktop/bas/ittp-chat-frontend/redux/ducks/loan.js');
    reactHotLoader.register(reducer, 'reducer', '/Users/admin/Desktop/bas/ittp-chat-frontend/redux/ducks/loan.js');
    reactHotLoader.register(_default, 'default', '/Users/admin/Desktop/bas/ittp-chat-frontend/redux/ducks/loan.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./redux/saga/loanSagas.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export fetchLoanSaga */
/* unused harmony export bindIdSaga */
/* harmony export (immutable) */ __webpack_exports__["a"] = loanSagas;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__("./node_modules/redux-saga/es/effects.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ducks_loan__ = __webpack_require__("./redux/ducks/loan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tools_api__ = __webpack_require__("./tools/api.js");


(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

var _marked = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(fetchLoanSaga),
    _marked2 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(bindIdSaga),
    _marked3 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(loanSagas);





function fetchLoanSaga(action) {
    var id, _data, code, message;

    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function fetchLoanSaga$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    id = action.payload.id;
                    //use api to fetch data from apiV2

                    _context.prev = 1;
                    _context.next = 4;
                    return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["b" /* call */])(__WEBPACK_IMPORTED_MODULE_3__tools_api__["b" /* getJSON */], __WEBPACK_IMPORTED_MODULE_3__tools_api__["a" /* API_SERVER */] + '/chats/' + id);

                case 4:
                    _data = _context.sent;
                    _context.next = 7;
                    return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["c" /* put */])(Object(__WEBPACK_IMPORTED_MODULE_2__ducks_loan__["g" /* fetchLoanSuccess */])({ data: _data }));

                case 7:
                    _context.next = 14;
                    break;

                case 9:
                    _context.prev = 9;
                    _context.t0 = _context['catch'](1);
                    code = _context.t0.code, message = _context.t0.message;
                    _context.next = 14;
                    return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["c" /* put */])(Object(__WEBPACK_IMPORTED_MODULE_2__ducks_loan__["f" /* fetchLoanFailure */])({ code: code, message: message }));

                case 14:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this, [[1, 9]]);
}

function bindIdSaga(action) {
    var _action$payload, id, citizenId, platform, value;

    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function bindIdSaga$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _action$payload = action.payload, id = _action$payload.id, citizenId = _action$payload.citizenId, platform = _action$payload.platform;
                    //use api to bind LINE/FACEBOOK ID with customerCitizenId

                    _context2.prev = 1;
                    value = {
                        id: id,
                        citizenId: citizenId,
                        platform: platform
                    };

                    postJSON(__WEBPACK_IMPORTED_MODULE_3__tools_api__["a" /* API_SERVER */] + '/chats/line/binding', value);
                    _context2.next = 6;
                    return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["c" /* put */])(Object(__WEBPACK_IMPORTED_MODULE_2__ducks_loan__["c" /* bindIdSuccess */])({ data: data }));

                case 6:
                    _context2.next = 8;
                    return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["c" /* put */])();

                case 8:
                    _context2.next = 13;
                    break;

                case 10:
                    _context2.prev = 10;
                    _context2.t0 = _context2['catch'](1);

                    console.error(_context2.t0);

                case 13:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked2, this, [[1, 10]]);
}

function loanSagas() {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function loanSagas$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    _context3.next = 2;
                    return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["a" /* all */])([Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["d" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_2__ducks_loan__["b" /* FETCH_LOAN */], fetchLoanSaga), Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["d" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_2__ducks_loan__["a" /* BIND_ID */], bindIdSaga)]);

                case 2:
                case 'end':
                    return _context3.stop();
            }
        }
    }, _marked3, this);
}
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(fetchLoanSaga, 'fetchLoanSaga', '/Users/admin/Desktop/bas/ittp-chat-frontend/redux/saga/loanSagas.js');
    reactHotLoader.register(bindIdSaga, 'bindIdSaga', '/Users/admin/Desktop/bas/ittp-chat-frontend/redux/saga/loanSagas.js');
    reactHotLoader.register(loanSagas, 'loanSagas', '/Users/admin/Desktop/bas/ittp-chat-frontend/redux/saga/loanSagas.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.51567e80ba01d237329a.hot-update.js.map