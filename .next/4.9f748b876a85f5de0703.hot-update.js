webpackHotUpdate(4,{

/***/ "./component/loginform.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redux_duck_login__ = __webpack_require__("./redux/duck/login.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redux_duck_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__redux_duck_login__);
var _jsxFileName = "/Users/admin/Desktop/ittp-chat/component/loginform.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var FormItem = __WEBPACK_IMPORTED_MODULE_1_antd__["c" /* Form */].Item;

var NormalLoginForm =
/*#__PURE__*/
function (_Component) {
  _inherits(NormalLoginForm, _Component);

  function NormalLoginForm(props) {
    var _this;

    _classCallCheck(this, NormalLoginForm);

    _this = _possibleConstructorReturn(this, (NormalLoginForm.__proto__ || Object.getPrototypeOf(NormalLoginForm)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();

        _this.props.form.validateFields(function (err, values) {
          if (!err) {
            console.log('Received values of form: ', values);
            var email = values.email,
                password = values.password;
          }
        });
      }
    });
    return _this;
  }

  _createClass(NormalLoginForm, [{
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          margin: 'auto'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["b" /* Card */], {
        style: {
          width: "19rem"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["c" /* Form */], {
        onSubmit: this.handleSubmit,
        className: "login-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FormItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, getFieldDecorator('email', {
        rules: [{
          required: true,
          message: 'กรุณากรอก ID ของคุณ'
        }]
      })(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["e" /* Input */], {
        prefix: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["d" /* Icon */], {
          type: "user",
          style: {
            color: 'rgba(0,0,0,.25)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }),
        placeholder: "Username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FormItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, getFieldDecorator('password', {
        rules: [{
          required: true,
          message: 'กรุณาใส่รหัสผ่าน'
        }]
      })(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["e" /* Input */], {
        prefix: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["d" /* Icon */], {
          type: "lock",
          style: {
            color: 'rgba(0,0,0,.25)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }),
        type: "password",
        placeholder: "Password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FormItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["a" /* Button */], {
        type: "primary",
        htmlType: "submit",
        className: "login-form-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "Log in")))));
    }
  }]);

  return NormalLoginForm;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_antd__["c" /* Form */].create()(NormalLoginForm));

/***/ }),

/***/ "./redux/duck/login.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export reducer */
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var API_LOGIN_REQUEST = "API_LOGIN_REQUEST";
var API_LOGIN_SUCCESS = "API_LOGIN_SUCCESS";
var API_LOGIN_FAILURE = "API_LOGIN_FAILURE";
var initialState = {
  error: {},
  loading: false
};
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case API_LOGIN_REQUEST:
      return _objectSpread({}, state, {
        loading: true,
        error: false
      });

    case API_LOGIN_SUCCESS:
      return _objectSpread({}, state, {
        loading: false
      });

    case API_LOGIN_FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    default:
      return state;
  }
}

/***/ })

})
//# sourceMappingURL=4.9f748b876a85f5de0703.hot-update.js.map