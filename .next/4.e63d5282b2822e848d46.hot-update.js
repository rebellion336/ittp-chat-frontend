webpackHotUpdate(4,{

/***/ "./component/chat/chatfield.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inputfield__ = __webpack_require__("./component/chat/inputfield.js");
var _jsxFileName = "/Users/admin/Desktop/ittp-chat-frontend/component/chat/chatfield.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var MessageField =
/*#__PURE__*/
function (_Component) {
  _inherits(MessageField, _Component);

  function MessageField(props) {
    var _this;

    _classCallCheck(this, MessageField);

    _this = _possibleConstructorReturn(this, (MessageField.__proto__ || Object.getPrototypeOf(MessageField)).call(this, props));
    _this.state = {
      customerMessage: 'HelloFromCustomer',
      opratorMessage: 'HelloFromOprator'
    };
    return _this;
  }

  _createClass(MessageField, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          width: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        style: {
          textAlign: 'left'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, "HelloFromCustomer"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        style: {
          textAlign: 'right'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, "HelloFromCA"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__inputfield__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }));
    }
  }]);

  return MessageField;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

/* harmony default export */ __webpack_exports__["a"] = (MessageField); // export default connect(mapStateToProps)(ChatField)

/***/ })

})
//# sourceMappingURL=4.e63d5282b2822e848d46.hot-update.js.map