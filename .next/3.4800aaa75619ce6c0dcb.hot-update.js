webpackHotUpdate(3,{

/***/ "./component/chat/MessageField.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inputfield__ = __webpack_require__("./component/chat/inputfield.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_ducks_chat__ = __webpack_require__("./redux/ducks/chat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tools_api__ = __webpack_require__("./tools/api.js");
var _jsxFileName = '/Users/admin/Desktop/bas/ittp-chat-frontend/component/chat/MessageField.js';

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
            key: 'customerMessage'
        }, {
            dataIndex: 'operatorMessage',
            key: 'operatorMessage',
            align: 'right'
        }];
        _this.socket = __WEBPACK_IMPORTED_MODULE_5_socket_io_client___default()('http://45.77.47.114:7778');

        _this.socket.on('RECEIVE_MESSAGE', function () {
            _this.props.fetchChat({
                id: 'Uc72aacda842257e6ae27f0bb8d80cc13',
                platform: 'line'
            });
        });
        return _this;
    }

    _createClass(MessageField, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchChat({
                id: 'Uc72aacda842257e6ae27f0bb8d80cc13',
                platform: 'line'
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var chatData = '';
            if (this.props.chats.data !== undefined) {
                chatData = this.props.chats.data.chat;
            }

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: { width: '100%' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 45
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["g" /* Table */], { dataSource: chatData, columns: this.columns, pagination: false, scroll: { y: 600 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 46
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__inputfield__["a" /* default */], { chats: this.props.chats.data, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 47
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
    return {
        chats: state.chat
    };
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, { fetchChat: __WEBPACK_IMPORTED_MODULE_4__redux_ducks_chat__["d" /* fetchChat */] })(MessageField);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(MessageField, 'MessageField', '/Users/admin/Desktop/bas/ittp-chat-frontend/component/chat/MessageField.js');
    reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/admin/Desktop/bas/ittp-chat-frontend/component/chat/MessageField.js');
    reactHotLoader.register(_default, 'default', '/Users/admin/Desktop/bas/ittp-chat-frontend/component/chat/MessageField.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.4800aaa75619ce6c0dcb.hot-update.js.map