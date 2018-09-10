webpackHotUpdate(3,{

/***/ "./component/loan/bindingIdForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
var _jsxFileName = '/Users/admin/Desktop/bas/ittp-chat-frontend/component/loan/bindingIdForm.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var FormItem = __WEBPACK_IMPORTED_MODULE_1_antd__["c" /* Form */].Item;

var BindingIdForm = function (_Component) {
  _inherits(BindingIdForm, _Component);

  function BindingIdForm(props) {
    _classCallCheck(this, BindingIdForm);

    return _possibleConstructorReturn(this, (BindingIdForm.__proto__ || Object.getPrototypeOf(BindingIdForm)).call(this, props));
  }

  _createClass(BindingIdForm, [{
    key: 'render',
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["c" /* Form */],
        { onSubmit: this.handleSubmit, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          FormItem,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          getFieldDecorator('citizenId', {
            rules: [{ required: true, message: 'โปรดใส่เลขบัตรประชาชนของลูกค้า' }]
          })(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["e" /* Input */], { prefix: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["d" /* Icon */], { type: 'user', style: { color: 'rgba(0,0,0,.25)' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              }
            }), placeholder: 'Username', __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          }))
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          FormItem,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["e" /* Input */], { prefix: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["d" /* Icon */], { type: 'lock', style: { color: 'rgba(0,0,0,.25)' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              }
            }), type: 'password', placeholder: 'Password', __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          }))
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["a" /* Button */],
          { type: 'primary', htmlType: 'submit', className: 'login-form-button', __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          },
          'Log in'
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
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = __WEBPACK_IMPORTED_MODULE_1_antd__["c" /* Form */].create()(BindingIdForm);

/* harmony default export */ __webpack_exports__["a"] = (_default);
// export default BindingIdForm

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
//# sourceMappingURL=3.75908622a1a7eaa9ec90.hot-update.js.map