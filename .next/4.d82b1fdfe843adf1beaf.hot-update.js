webpackHotUpdate(4,{

/***/ "./pages/login.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_FullPageLayout__ = __webpack_require__("./layouts/FullPageLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_loginform__ = __webpack_require__("./component/loginform.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux_store__ = __webpack_require__("./redux/store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hocs_connectI18n__ = __webpack_require__("./hocs/connectI18n.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tools_utils__ = __webpack_require__("./tools/utils.js");
var _jsxFileName = '/Users/admin/Desktop/bas/ittp-chat-frontend/pages/login.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
  }

  _createClass(Login, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.prefetch('/chat');
    }
  }, {
    key: 'render',
    value: function render() {
      var t = this.props.t;

      console.log('props::::>', this.props);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__layouts_FullPageLayout__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__component_loginform__["a" /* default */], { t: t, __source: {
            fileName: _jsxFileName,
            lineNumber: 20
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

  return Login;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Login.propTypes = {
  t: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired
};
Login.getInitialProps = function (_ref) {
  var store = _ref.store,
      res = _ref.res,
      isServer = _ref.isServer;

  var _store$getState = store.getState(),
      auth = _store$getState.auth;
  // User is already login, redirect to home page


  if (typeof auth.token !== 'undefined') {
    Object(__WEBPACK_IMPORTED_MODULE_8__tools_utils__["b" /* redirect */])('/chat', { res: res, isServer: isServer });
  }
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_1_redux__["compose"])(__WEBPACK_IMPORTED_MODULE_6__redux_store__["a" /* withReduxSaga */], Object(__WEBPACK_IMPORTED_MODULE_7__hocs_connectI18n__["a" /* connectI18n */])(['common']))(Login);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Login, 'Login', '/Users/admin/Desktop/bas/ittp-chat-frontend/pages/login.js');
  reactHotLoader.register(_default, 'default', '/Users/admin/Desktop/bas/ittp-chat-frontend/pages/login.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/login")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.d82b1fdfe843adf1beaf.hot-update.js.map