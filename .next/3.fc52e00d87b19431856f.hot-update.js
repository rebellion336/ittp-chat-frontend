webpackHotUpdate(3,{

/***/ "./component/chat/chatfield.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inputfield__ = __webpack_require__("./component/chat/inputfield.js");
var _jsxFileName = '/Users/admin/Desktop/bas/ittp-chat-frontend/component/chat/chatfield.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var MessageField = function (_Component) {
    _inherits(MessageField, _Component);

    function MessageField(props) {
        _classCallCheck(this, MessageField);

        var _this = _possibleConstructorReturn(this, (MessageField.__proto__ || Object.getPrototypeOf(MessageField)).call(this, props));

        _this.columns = [{
            dataIndex: 'customerMessage',
            key: 'key'
        }, {
            dataIndex: 'opratorMessage',
            key: 'key',
            align: 'right'
        }];
        return _this;
    }

    _createClass(MessageField, [{
        key: 'render',
        value: function render() {
            var dataSource = [{
                key: 1,
                customerMessage: 'HelloFromCustomer',
                opratorMessage: ''
            }, {
                key: 2,
                customerMessage: '',
                opratorMessage: 'HelloFromOprator'
            }];
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: { width: '100%' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["f" /* Table */], { dataSource: dataSource, columns: this.columns, pagination: false, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 38
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__inputfield__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                    }
                })
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return MessageField;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
    return {};
};

var _default = MessageField;
/* harmony default export */ __webpack_exports__["a"] = (_default);
// export default connect(mapStateToProps)(ChatField)

;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(MessageField, 'MessageField', '/Users/admin/Desktop/bas/ittp-chat-frontend/component/chat/chatfield.js');
    reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/admin/Desktop/bas/ittp-chat-frontend/component/chat/chatfield.js');
    reactHotLoader.register(_default, 'default', '/Users/admin/Desktop/bas/ittp-chat-frontend/component/chat/chatfield.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./component/chat/inputfield.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
var _jsxFileName = '/Users/admin/Desktop/bas/ittp-chat-frontend/component/chat/inputfield.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Inputfield = function (_Component) {
    _inherits(Inputfield, _Component);

    function Inputfield(props) {
        _classCallCheck(this, Inputfield);

        var _this = _possibleConstructorReturn(this, (Inputfield.__proto__ || Object.getPrototypeOf(Inputfield)).call(this, props));

        _this.state = {
            messageInputted: ''
        };
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        return _this;
    }

    _createClass(Inputfield, [{
        key: 'handleInputChange',
        value: function handleInputChange(event) {
            var message = event.target.value;
            this.setState({
                messageInputted: message
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: { padding: '3px', position: 'fixed', bottom: '0', width: '100%' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 21
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["e" /* Input */], { style: { width: '90%' },
                        placeholder: 'Input Message',
                        value: this.state.messageInputted,
                        onChange: this.handleInputChange,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 22
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_antd__["a" /* Button */],
                        { type: 'primary', style: { width: '10%' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 27
                            }
                        },
                        'Send'
                    )
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return Inputfield;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Inputfield;

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Inputfield, 'Inputfield', '/Users/admin/Desktop/bas/ittp-chat-frontend/component/chat/inputfield.js');
    reactHotLoader.register(_default, 'default', '/Users/admin/Desktop/bas/ittp-chat-frontend/component/chat/inputfield.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/antd/es/card/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_typeof__ = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rc_util_es_Dom_addEventListener__ = __webpack_require__("./node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_omit_js__ = __webpack_require__("./node_modules/omit.js/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Grid__ = __webpack_require__("./node_modules/antd/es/card/Grid.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Meta__ = __webpack_require__("./node_modules/antd/es/card/Meta.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tabs__ = __webpack_require__("./node_modules/antd/es/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__row__ = __webpack_require__("./node_modules/antd/es/row/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__col__ = __webpack_require__("./node_modules/antd/es/col/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__util_throttleByAnimationFrame__ = __webpack_require__("./node_modules/antd/es/_util/throttleByAnimationFrame.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__util_warning__ = __webpack_require__("./node_modules/antd/es/_util/warning.js");







var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_typeof___default()(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};












var Card = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Card, _React$Component);

    function Card() {
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Card);

        var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));

        _this.state = {
            widerPadding: false
        };
        _this.updateWiderPaddingCalled = false;
        _this.onTabChange = function (key) {
            if (_this.props.onTabChange) {
                _this.props.onTabChange(key);
            }
        };
        _this.saveRef = function (node) {
            _this.container = node;
        };
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Card, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.updateWiderPadding();
            this.resizeEvent = Object(__WEBPACK_IMPORTED_MODULE_9_rc_util_es_Dom_addEventListener__["a" /* default */])(window, 'resize', this.updateWiderPadding);
            if ('noHovering' in this.props) {
                Object(__WEBPACK_IMPORTED_MODULE_17__util_warning__["a" /* default */])(!this.props.noHovering, '`noHovering` of Card is deprecated, you can remove it safely or use `hoverable` instead.');
                Object(__WEBPACK_IMPORTED_MODULE_17__util_warning__["a" /* default */])(!!this.props.noHovering, '`noHovering={false}` of Card is deprecated, use `hoverable` instead.');
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            if (this.resizeEvent) {
                this.resizeEvent.remove();
            }
            this.updateWiderPadding.cancel();
        }
    }, {
        key: "updateWiderPadding",
        value: function updateWiderPadding() {
            var _this2 = this;

            if (!this.container) {
                return;
            }
            // 936 is a magic card width pixel number indicated by designer
            var WIDTH_BOUNDARY_PX = 936;
            if (this.container.offsetWidth >= WIDTH_BOUNDARY_PX && !this.state.widerPadding) {
                this.setState({ widerPadding: true }, function () {
                    _this2.updateWiderPaddingCalled = true; // first render without css transition
                });
            }
            if (this.container.offsetWidth < WIDTH_BOUNDARY_PX && this.state.widerPadding) {
                this.setState({ widerPadding: false }, function () {
                    _this2.updateWiderPaddingCalled = true; // first render without css transition
                });
            }
        }
    }, {
        key: "isContainGrid",
        value: function isContainGrid() {
            var containGrid = void 0;
            __WEBPACK_IMPORTED_MODULE_7_react__["Children"].forEach(this.props.children, function (element) {
                if (element && element.type && element.type === __WEBPACK_IMPORTED_MODULE_11__Grid__["a" /* default */]) {
                    containGrid = true;
                }
            });
            return containGrid;
        }
    }, {
        key: "getAction",
        value: function getAction(actions) {
            if (!actions || !actions.length) {
                return null;
            }
            var actionList = actions.map(function (action, index) {
                return __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                    "li",
                    { style: { width: 100 / actions.length + "%" }, key: "action-" + index },
                    __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                        "span",
                        null,
                        action
                    )
                );
            });
            return actionList;
        }
        // For 2.x compatible

    }, {
        key: "getCompatibleHoverable",
        value: function getCompatibleHoverable() {
            var _props = this.props,
                noHovering = _props.noHovering,
                hoverable = _props.hoverable;

            if ('noHovering' in this.props) {
                return !noHovering || hoverable;
            }
            return !!hoverable;
        }
    }, {
        key: "render",
        value: function render() {
            var _classNames;

            var _a = this.props,
                _a$prefixCls = _a.prefixCls,
                prefixCls = _a$prefixCls === undefined ? 'ant-card' : _a$prefixCls,
                className = _a.className,
                extra = _a.extra,
                _a$headStyle = _a.headStyle,
                headStyle = _a$headStyle === undefined ? {} : _a$headStyle,
                _a$bodyStyle = _a.bodyStyle,
                bodyStyle = _a$bodyStyle === undefined ? {} : _a$bodyStyle,
                noHovering = _a.noHovering,
                hoverable = _a.hoverable,
                title = _a.title,
                loading = _a.loading,
                _a$bordered = _a.bordered,
                bordered = _a$bordered === undefined ? true : _a$bordered,
                type = _a.type,
                cover = _a.cover,
                actions = _a.actions,
                tabList = _a.tabList,
                children = _a.children,
                activeTabKey = _a.activeTabKey,
                defaultActiveTabKey = _a.defaultActiveTabKey,
                others = __rest(_a, ["prefixCls", "className", "extra", "headStyle", "bodyStyle", "noHovering", "hoverable", "title", "loading", "bordered", "type", "cover", "actions", "tabList", "children", "activeTabKey", "defaultActiveTabKey"]);
            var classString = __WEBPACK_IMPORTED_MODULE_8_classnames___default()(prefixCls, className, (_classNames = {}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + "-loading", loading), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + "-bordered", bordered), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + "-hoverable", this.getCompatibleHoverable()), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + "-wider-padding", this.state.widerPadding), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + "-padding-transition", this.updateWiderPaddingCalled), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + "-contain-grid", this.isContainGrid()), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + "-contain-tabs", tabList && tabList.length), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + "-type-" + type, !!type), _classNames));
            var loadingBlockStyle = bodyStyle.padding === 0 || bodyStyle.padding === '0px' ? { padding: 24 } : undefined;
            var loadingBlock = __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                "div",
                { className: prefixCls + "-loading-content", style: loadingBlockStyle },
                __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                    __WEBPACK_IMPORTED_MODULE_14__row__["a" /* default */],
                    { gutter: 8 },
                    __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                        __WEBPACK_IMPORTED_MODULE_15__col__["a" /* default */],
                        { span: 22 },
                        __WEBPACK_IMPORTED_MODULE_7_react__["createElement"]("div", { className: prefixCls + "-loading-block" })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                    __WEBPACK_IMPORTED_MODULE_14__row__["a" /* default */],
                    { gutter: 8 },
                    __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                        __WEBPACK_IMPORTED_MODULE_15__col__["a" /* default */],
                        { span: 8 },
                        __WEBPACK_IMPORTED_MODULE_7_react__["createElement"]("div", { className: prefixCls + "-loading-block" })
                    ),
                    __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                        __WEBPACK_IMPORTED_MODULE_15__col__["a" /* default */],
                        { span: 15 },
                        __WEBPACK_IMPORTED_MODULE_7_react__["createElement"]("div", { className: prefixCls + "-loading-block" })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                    __WEBPACK_IMPORTED_MODULE_14__row__["a" /* default */],
                    { gutter: 8 },
                    __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                        __WEBPACK_IMPORTED_MODULE_15__col__["a" /* default */],
                        { span: 6 },
                        __WEBPACK_IMPORTED_MODULE_7_react__["createElement"]("div", { className: prefixCls + "-loading-block" })
                    ),
                    __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                        __WEBPACK_IMPORTED_MODULE_15__col__["a" /* default */],
                        { span: 18 },
                        __WEBPACK_IMPORTED_MODULE_7_react__["createElement"]("div", { className: prefixCls + "-loading-block" })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                    __WEBPACK_IMPORTED_MODULE_14__row__["a" /* default */],
                    { gutter: 8 },
                    __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                        __WEBPACK_IMPORTED_MODULE_15__col__["a" /* default */],
                        { span: 13 },
                        __WEBPACK_IMPORTED_MODULE_7_react__["createElement"]("div", { className: prefixCls + "-loading-block" })
                    ),
                    __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                        __WEBPACK_IMPORTED_MODULE_15__col__["a" /* default */],
                        { span: 9 },
                        __WEBPACK_IMPORTED_MODULE_7_react__["createElement"]("div", { className: prefixCls + "-loading-block" })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                    __WEBPACK_IMPORTED_MODULE_14__row__["a" /* default */],
                    { gutter: 8 },
                    __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                        __WEBPACK_IMPORTED_MODULE_15__col__["a" /* default */],
                        { span: 4 },
                        __WEBPACK_IMPORTED_MODULE_7_react__["createElement"]("div", { className: prefixCls + "-loading-block" })
                    ),
                    __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                        __WEBPACK_IMPORTED_MODULE_15__col__["a" /* default */],
                        { span: 3 },
                        __WEBPACK_IMPORTED_MODULE_7_react__["createElement"]("div", { className: prefixCls + "-loading-block" })
                    ),
                    __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                        __WEBPACK_IMPORTED_MODULE_15__col__["a" /* default */],
                        { span: 16 },
                        __WEBPACK_IMPORTED_MODULE_7_react__["createElement"]("div", { className: prefixCls + "-loading-block" })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                    __WEBPACK_IMPORTED_MODULE_14__row__["a" /* default */],
                    { gutter: 8 },
                    __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                        __WEBPACK_IMPORTED_MODULE_15__col__["a" /* default */],
                        { span: 8 },
                        __WEBPACK_IMPORTED_MODULE_7_react__["createElement"]("div", { className: prefixCls + "-loading-block" })
                    ),
                    __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                        __WEBPACK_IMPORTED_MODULE_15__col__["a" /* default */],
                        { span: 6 },
                        __WEBPACK_IMPORTED_MODULE_7_react__["createElement"]("div", { className: prefixCls + "-loading-block" })
                    ),
                    __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                        __WEBPACK_IMPORTED_MODULE_15__col__["a" /* default */],
                        { span: 8 },
                        __WEBPACK_IMPORTED_MODULE_7_react__["createElement"]("div", { className: prefixCls + "-loading-block" })
                    )
                )
            );
            var hasActiveTabKey = activeTabKey !== undefined;
            var extraProps = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()({}, hasActiveTabKey ? 'activeKey' : 'defaultActiveKey', hasActiveTabKey ? activeTabKey : defaultActiveTabKey);
            var head = void 0;
            var tabs = tabList && tabList.length ? __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                __WEBPACK_IMPORTED_MODULE_13__tabs__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, extraProps, { className: prefixCls + "-head-tabs", size: "large", onChange: this.onTabChange }),
                tabList.map(function (item) {
                    return __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](__WEBPACK_IMPORTED_MODULE_13__tabs__["a" /* default */].TabPane, { tab: item.tab, disabled: item.disabled, key: item.key });
                })
            ) : null;
            if (title || extra || tabs) {
                head = __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                    "div",
                    { className: prefixCls + "-head", style: headStyle },
                    __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                        "div",
                        { className: prefixCls + "-head-wrapper" },
                        title && __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                            "div",
                            { className: prefixCls + "-head-title" },
                            title
                        ),
                        extra && __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                            "div",
                            { className: prefixCls + "-extra" },
                            extra
                        )
                    ),
                    tabs
                );
            }
            var coverDom = cover ? __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                "div",
                { className: prefixCls + "-cover" },
                cover
            ) : null;
            var body = __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                "div",
                { className: prefixCls + "-body", style: bodyStyle },
                loading ? loadingBlock : children
            );
            var actionDom = actions && actions.length ? __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                "ul",
                { className: prefixCls + "-actions" },
                this.getAction(actions)
            ) : null;
            var divProps = Object(__WEBPACK_IMPORTED_MODULE_10_omit_js__["a" /* default */])(others, ['onTabChange']);
            return __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                "div",
                __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, divProps, { className: classString, ref: this.saveRef }),
                head,
                coverDom,
                body,
                actionDom
            );
        }
    }]);

    return Card;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Card);

Card.Grid = __WEBPACK_IMPORTED_MODULE_11__Grid__["a" /* default */];
Card.Meta = __WEBPACK_IMPORTED_MODULE_12__Meta__["a" /* default */];
__decorate([Object(__WEBPACK_IMPORTED_MODULE_16__util_throttleByAnimationFrame__["a" /* throttleByAnimationFrameDecorator */])()], Card.prototype, "updateWiderPadding", null);

/***/ }),

/***/ "./node_modules/antd/es/form/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form__ = __webpack_require__("./node_modules/antd/es/form/Form.js");

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__Form__["a" /* default */]);

/***/ }),

/***/ "./node_modules/antd/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__affix__ = __webpack_require__("./node_modules/antd/es/affix/index.js");
/* unused harmony reexport Affix */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__anchor__ = __webpack_require__("./node_modules/antd/es/anchor/index.js");
/* unused harmony reexport Anchor */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auto_complete__ = __webpack_require__("./node_modules/antd/es/auto-complete/index.js");
/* unused harmony reexport AutoComplete */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert__ = __webpack_require__("./node_modules/antd/es/alert/index.js");
/* unused harmony reexport Alert */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__avatar__ = __webpack_require__("./node_modules/antd/es/avatar/index.js");
/* unused harmony reexport Avatar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__back_top__ = __webpack_require__("./node_modules/antd/es/back-top/index.js");
/* unused harmony reexport BackTop */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__badge__ = __webpack_require__("./node_modules/antd/es/badge/index.js");
/* unused harmony reexport Badge */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__breadcrumb__ = __webpack_require__("./node_modules/antd/es/breadcrumb/index.js");
/* unused harmony reexport Breadcrumb */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__button__ = __webpack_require__("./node_modules/antd/es/button/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_8__button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__calendar__ = __webpack_require__("./node_modules/antd/es/calendar/index.js");
/* unused harmony reexport Calendar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__card__ = __webpack_require__("./node_modules/antd/es/card/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_10__card__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__collapse__ = __webpack_require__("./node_modules/antd/es/collapse/index.js");
/* unused harmony reexport Collapse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__carousel__ = __webpack_require__("./node_modules/antd/es/carousel/index.js");
/* unused harmony reexport Carousel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__cascader__ = __webpack_require__("./node_modules/antd/es/cascader/index.js");
/* unused harmony reexport Cascader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__checkbox__ = __webpack_require__("./node_modules/antd/es/checkbox/index.js");
/* unused harmony reexport Checkbox */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__col__ = __webpack_require__("./node_modules/antd/es/col/index.js");
/* unused harmony reexport Col */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__date_picker__ = __webpack_require__("./node_modules/antd/es/date-picker/index.js");
/* unused harmony reexport DatePicker */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__divider__ = __webpack_require__("./node_modules/antd/es/divider/index.js");
/* unused harmony reexport Divider */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dropdown__ = __webpack_require__("./node_modules/antd/es/dropdown/index.js");
/* unused harmony reexport Dropdown */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__drawer__ = __webpack_require__("./node_modules/antd/es/drawer/index.js");
/* unused harmony reexport Drawer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__form__ = __webpack_require__("./node_modules/antd/es/form/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_20__form__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__icon__ = __webpack_require__("./node_modules/antd/es/icon/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_21__icon__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__input__ = __webpack_require__("./node_modules/antd/es/input/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_22__input__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__input_number__ = __webpack_require__("./node_modules/antd/es/input-number/index.js");
/* unused harmony reexport InputNumber */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__layout__ = __webpack_require__("./node_modules/antd/es/layout/index.js");
/* unused harmony reexport Layout */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__list__ = __webpack_require__("./node_modules/antd/es/list/index.js");
/* unused harmony reexport List */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__locale_provider__ = __webpack_require__("./node_modules/antd/es/locale-provider/index.js");
/* unused harmony reexport LocaleProvider */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__message__ = __webpack_require__("./node_modules/antd/es/message/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_27__message__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__menu__ = __webpack_require__("./node_modules/antd/es/menu/index.js");
/* unused harmony reexport Menu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__modal__ = __webpack_require__("./node_modules/antd/es/modal/index.js");
/* unused harmony reexport Modal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__notification__ = __webpack_require__("./node_modules/antd/es/notification/index.js");
/* unused harmony reexport notification */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pagination__ = __webpack_require__("./node_modules/antd/es/pagination/index.js");
/* unused harmony reexport Pagination */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__popconfirm__ = __webpack_require__("./node_modules/antd/es/popconfirm/index.js");
/* unused harmony reexport Popconfirm */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__popover__ = __webpack_require__("./node_modules/antd/es/popover/index.js");
/* unused harmony reexport Popover */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__progress__ = __webpack_require__("./node_modules/antd/es/progress/index.js");
/* unused harmony reexport Progress */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__radio__ = __webpack_require__("./node_modules/antd/es/radio/index.js");
/* unused harmony reexport Radio */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__rate__ = __webpack_require__("./node_modules/antd/es/rate/index.js");
/* unused harmony reexport Rate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__row__ = __webpack_require__("./node_modules/antd/es/row/index.js");
/* unused harmony reexport Row */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__select__ = __webpack_require__("./node_modules/antd/es/select/index.js");
/* unused harmony reexport Select */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__slider__ = __webpack_require__("./node_modules/antd/es/slider/index.js");
/* unused harmony reexport Slider */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__spin__ = __webpack_require__("./node_modules/antd/es/spin/index.js");
/* unused harmony reexport Spin */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__steps__ = __webpack_require__("./node_modules/antd/es/steps/index.js");
/* unused harmony reexport Steps */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__switch__ = __webpack_require__("./node_modules/antd/es/switch/index.js");
/* unused harmony reexport Switch */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__table__ = __webpack_require__("./node_modules/antd/es/table/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_43__table__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__transfer__ = __webpack_require__("./node_modules/antd/es/transfer/index.js");
/* unused harmony reexport Transfer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__tree__ = __webpack_require__("./node_modules/antd/es/tree/index.js");
/* unused harmony reexport Tree */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__tree_select__ = __webpack_require__("./node_modules/antd/es/tree-select/index.js");
/* unused harmony reexport TreeSelect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__tabs__ = __webpack_require__("./node_modules/antd/es/tabs/index.js");
/* unused harmony reexport Tabs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__tag__ = __webpack_require__("./node_modules/antd/es/tag/index.js");
/* unused harmony reexport Tag */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__time_picker__ = __webpack_require__("./node_modules/antd/es/time-picker/index.js");
/* unused harmony reexport TimePicker */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__timeline__ = __webpack_require__("./node_modules/antd/es/timeline/index.js");
/* unused harmony reexport Timeline */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__tooltip__ = __webpack_require__("./node_modules/antd/es/tooltip/index.js");
/* unused harmony reexport Tooltip */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__mention__ = __webpack_require__("./node_modules/antd/es/mention/index.js");
/* unused harmony reexport Mention */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__upload__ = __webpack_require__("./node_modules/antd/es/upload/index.js");
/* unused harmony reexport Upload */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__version__ = __webpack_require__("./node_modules/antd/es/version/index.js");
/* unused harmony reexport version */
























































/***/ }),

/***/ "./node_modules/antd/es/message/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rc_notification__ = __webpack_require__("./node_modules/rc-notification/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon__ = __webpack_require__("./node_modules/antd/es/icon/index.js");
/* global Promise */



var defaultDuration = 3;
var defaultTop = void 0;
var messageInstance = void 0;
var key = 1;
var prefixCls = 'ant-message';
var transitionName = 'move-up';
var getContainer = void 0;
var maxCount = void 0;
function getMessageInstance(callback) {
    if (messageInstance) {
        callback(messageInstance);
        return;
    }
    __WEBPACK_IMPORTED_MODULE_1_rc_notification__["a" /* default */].newInstance({
        prefixCls: prefixCls,
        transitionName: transitionName,
        style: { top: defaultTop },
        getContainer: getContainer,
        maxCount: maxCount
    }, function (instance) {
        if (messageInstance) {
            callback(messageInstance);
            return;
        }
        messageInstance = instance;
        callback(instance);
    });
}
function notice(content) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDuration;
    var type = arguments[2];
    var onClose = arguments[3];

    var iconType = {
        info: 'info-circle',
        success: 'check-circle',
        error: 'cross-circle',
        warning: 'exclamation-circle',
        loading: 'loading'
    }[type];
    if (typeof duration === 'function') {
        onClose = duration;
        duration = defaultDuration;
    }
    var target = key++;
    var closePromise = new Promise(function (resolve) {
        var callback = function callback() {
            if (typeof onClose === 'function') {
                onClose();
            }
            return resolve(true);
        };
        getMessageInstance(function (instance) {
            instance.notice({
                key: target,
                duration: duration,
                style: {},
                content: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'div',
                    { className: prefixCls + '-custom-content ' + prefixCls + '-' + type },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__icon__["a" /* default */], { type: iconType }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'span',
                        null,
                        content
                    )
                ),
                onClose: callback
            });
        });
    });
    var result = function result() {
        if (messageInstance) {
            messageInstance.removeNotice(target);
        }
    };
    result.then = function (filled, rejected) {
        return closePromise.then(filled, rejected);
    };
    result.promise = closePromise;
    return result;
}
/* harmony default export */ __webpack_exports__["a"] = ({
    info: function info(content, duration, onClose) {
        return notice(content, duration, 'info', onClose);
    },
    success: function success(content, duration, onClose) {
        return notice(content, duration, 'success', onClose);
    },
    error: function error(content, duration, onClose) {
        return notice(content, duration, 'error', onClose);
    },

    // Departed usage, please use warning()
    warn: function warn(content, duration, onClose) {
        return notice(content, duration, 'warning', onClose);
    },
    warning: function warning(content, duration, onClose) {
        return notice(content, duration, 'warning', onClose);
    },
    loading: function loading(content, duration, onClose) {
        return notice(content, duration, 'loading', onClose);
    },
    config: function config(options) {
        if (options.top !== undefined) {
            defaultTop = options.top;
            messageInstance = null; // delete messageInstance for new defaultTop
        }
        if (options.duration !== undefined) {
            defaultDuration = options.duration;
        }
        if (options.prefixCls !== undefined) {
            prefixCls = options.prefixCls;
        }
        if (options.getContainer !== undefined) {
            getContainer = options.getContainer;
        }
        if (options.transitionName !== undefined) {
            transitionName = options.transitionName;
            messageInstance = null; // delete messageInstance for new transitionName
        }
        if (options.maxCount !== undefined) {
            maxCount = options.maxCount;
            messageInstance = null;
        }
    },
    destroy: function destroy() {
        if (messageInstance) {
            messageInstance.destroy();
            messageInstance = null;
        }
    }
});

/***/ }),

/***/ "./node_modules/react-redux/es/components/Provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createProvider;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__ = __webpack_require__("./node_modules/react-redux/es/utils/PropTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_warning__ = __webpack_require__("./node_modules/react-redux/es/utils/warning.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  Object(__WEBPACK_IMPORTED_MODULE_3__utils_warning__["a" /* default */])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      _classCallCheck(this, Provider);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
    };

    return Provider;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  if (true) {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired, _Provider$childContex[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["b" /* subscriptionShape */], _Provider$childContex);

  return Provider;
}

/* harmony default export */ __webpack_exports__["b"] = (createProvider());

/***/ }),

/***/ "./node_modules/react-redux/es/connect/connect.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createConnect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__ = __webpack_require__("./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__ = __webpack_require__("./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__ = __webpack_require__("./node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__ = __webpack_require__("./node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mergeProps__ = __webpack_require__("./node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectorFactory__ = __webpack_require__("./node_modules/react-redux/es/connect/selectorFactory.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__["a" /* default */] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__["a" /* default */] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__["a" /* default */] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? __WEBPACK_IMPORTED_MODULE_4__mergeProps__["a" /* default */] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? __WEBPACK_IMPORTED_MODULE_5__selectorFactory__["a" /* default */] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areMergedPropsE,
        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (createConnect());

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapDispatchToPropsIsFunction */
/* unused harmony export whenMapDispatchToPropsIsMissing */
/* unused harmony export whenMapDispatchToPropsIsObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__ = __webpack_require__("./node_modules/react-redux/es/connect/wrapMapToProps.js");



function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Provider__ = __webpack_require__("./node_modules/react-redux/es/components/Provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__ = __webpack_require__("./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connect_connect__ = __webpack_require__("./node_modules/react-redux/es/connect/connect.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createProvider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return __WEBPACK_IMPORTED_MODULE_2__connect_connect__["a"]; });






/***/ }),

/***/ "./node_modules/redux/es/applyMiddleware.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyMiddleware;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__("./node_modules/redux/es/compose.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),

/***/ "./node_modules/redux/es/combineReducers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = combineReducers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__("./node_modules/redux/es/createStore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__("./node_modules/lodash-es/isPlainObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__("./node_modules/redux/es/utils/warning.js");




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!Object(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__["a" /* default */])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

/***/ }),

/***/ "./node_modules/redux/es/createStore.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__("./node_modules/lodash-es/isPlainObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__("./node_modules/symbol-observable/es/index.js");



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_1_symbol_observable__["a" /* default */]] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_1_symbol_observable__["a" /* default */]] = observable, _ref2;
}

/***/ }),

/***/ "./node_modules/redux/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__("./node_modules/redux/es/createStore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__("./node_modules/redux/es/combineReducers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__("./node_modules/redux/es/bindActionCreators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__("./node_modules/redux/es/applyMiddleware.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__("./node_modules/redux/es/compose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__("./node_modules/redux/es/utils/warning.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return __WEBPACK_IMPORTED_MODULE_0__createStore__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return __WEBPACK_IMPORTED_MODULE_1__combineReducers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return __WEBPACK_IMPORTED_MODULE_4__compose__["a"]; });







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if ("development" !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  Object(__WEBPACK_IMPORTED_MODULE_5__utils_warning__["a" /* default */])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}



/***/ })

})
//# sourceMappingURL=3.fc52e00d87b19431856f.hot-update.js.map