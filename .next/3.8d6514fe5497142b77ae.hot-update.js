webpackHotUpdate(3,{

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

            console.log('prop in loanAccount', this.props);
            var data = this.props.loans.data;

            if (data !== undefined) {
                if (!data.length == 0) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 46
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
                                lineNumber: 47
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 60
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__loanInfo__["a" /* default */], { loanData: this.state.loanData, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 61
                            }
                        })
                    );
                }
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__bindingIdForm__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                    }
                });
            }
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 67
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

var _default = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, { fetchLoan: __WEBPACK_IMPORTED_MODULE_3__redux_ducks_loan__["c" /* fetchLoan */] })(LoanAccount);

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

/***/ })

})
//# sourceMappingURL=3.8d6514fe5497142b77ae.hot-update.js.map