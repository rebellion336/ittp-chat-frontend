webpackHotUpdate(4,{

/***/ "./component/loginform.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_ducks_auth__ = __webpack_require__("./redux/ducks/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_ducks_cookie__ = __webpack_require__("./redux/ducks/cookie.js");
var _jsxFileName = '/Users/admin/Desktop/bas/ittp-chat-frontend/component/loginform.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var FormItem = __WEBPACK_IMPORTED_MODULE_3_antd__["c" /* Form */].Item;

var LoginForm = function (_Component) {
  _inherits(LoginForm, _Component);

  function LoginForm(props) {
    _classCallCheck(this, LoginForm);

    var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(LoginForm, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      this.props.form.validateFields(function (err, values) {
        if (!err) {
          var email = values.email,
              password = values.password;

          _this2.props.login({ email: email, password: password });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          t = _props.t,
          loading = _props.loading,
          errorMessage = _props.errorMessage;
      var _props$form = this.props.form,
          getFieldDecorator = _props$form.getFieldDecorator,
          getFieldError = _props$form.getFieldError;

      var passwordError = getFieldError('password') || errorMessage;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { margin: 'auto' /* center div inside parent */ }, __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_antd__["b" /* Card */],
          { style: { width: '19rem' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_antd__["c" /* Form */],
            { onSubmit: this.handleSubmit, __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              FormItem,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32
                }
              },
              getFieldDecorator('email', {
                validateTrigger: 'onBlur',
                rules: [{
                  type: 'email',
                  message: t('The input is not valid E-mail!')
                }, { required: true, message: t('Please input your email!') }]
              })(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["e" /* Input */], {
                prefix: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["d" /* Icon */], { type: 'mail', style: { color: 'rgba(0,0,0,.25)' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                  }
                }),
                placeholder: t('Email'),
                disabled: loading,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 43
                }
              }))
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              FormItem,
              {
                validateStatus: passwordError ? 'error' : '',
                help: getFieldError('password') || errorMessage,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 52
                }
              },
              getFieldDecorator('password', {
                rules: [{ required: true, message: t('Please input your password!') }]
              })(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["e" /* Input */], {
                prefix: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["d" /* Icon */], { type: 'lock', style: { color: 'rgba(0,0,0,.25)' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                  }
                }),
                type: 'password',
                placeholder: t('Password'),
                disabled: loading,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 61
                }
              }))
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              FormItem,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 71
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_antd__["a" /* Button */],
                {
                  type: 'primary',
                  htmlType: 'submit',
                  style: { width: '100%' },
                  loading: loading,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                  }
                },
                loading ? '' : t('Log in')
              )
            )
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

  return LoginForm;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

LoginForm.propTypes = {
  t: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
  form: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    validateFields: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
    getFieldDecorator: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
    getFieldError: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
    getFieldsError: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired
  }).isRequired,
  // action creators
  login: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
  loading: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  errorMessage: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
};
LoginForm.defaultProps = {
  loading: false,
  errorMessage: ''
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    loading: state.auth.loading,
    errorMessage: state.auth.error.message,
    token: state.auth.token,
    email: state.auth.email
  };
};
var WrappedLoginForm = __WEBPACK_IMPORTED_MODULE_3_antd__["c" /* Form */].create()(Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, { login: __WEBPACK_IMPORTED_MODULE_4__redux_ducks_auth__["d" /* login */], setCookie: __WEBPACK_IMPORTED_MODULE_5__redux_ducks_cookie__["b" /* setCookie */] })(LoginForm));
var _default = WrappedLoginForm;
/* harmony default export */ __webpack_exports__["a"] = (_default);

// import { Component } from 'react'
// import { Form, Icon, Input, Button, Card } from 'antd';
// import React from 'react'
// import { login } from '../redux/ducks/auth'
// import { setCookie } from '../redux/ducks/auth'

// const FormItem = Form.Item;

// class NormalLoginForm extends Component {
//   constructor(props){
//     super(props)
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.form.validateFields((err, values) => {
//       if (!err) {
//         console.log('Received values of form: ', values);
//         const { email , password } = values
//       }
//     });
//   }

//   render() {
//     const { getFieldDecorator } = this.props.form;
//     return (
//       <div style={{margin: 'auto'}}>
//         <Card style={{width:"19rem"}}>
//           <Form onSubmit={this.handleSubmit} className="login-form">
//             <FormItem>
//               {getFieldDecorator('email', {
//                 rules: [{ required: true, message: 'กรุณากรอก ID ของคุณ' }],
//               })(
//                 <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
//               )}
//             </FormItem>
//             <FormItem>
//               {getFieldDecorator('password', {
//                 rules: [{ required: true, message: 'กรุณาใส่รหัสผ่าน' }],
//               })(
//                 <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
//               )}
//             </FormItem>
//             <FormItem>
//               <Button type="primary" htmlType="submit" className="login-form-button">
//                 Log in
//               </Button>
//             </FormItem>
//           </Form>
//         </Card>
//       </div>
//     );
//   }
// }
// const mapStateToProps = state => ({
//   loading: state.auth.loading,
//   errorMessage: state.auth.error.message,
//   token: state.auth.token,
//   email: state.auth.email,
// })

// export default Form.create()( NormalLoginForm )

;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FormItem, 'FormItem', '/Users/admin/Desktop/bas/ittp-chat-frontend/component/loginform.js');
  reactHotLoader.register(LoginForm, 'LoginForm', '/Users/admin/Desktop/bas/ittp-chat-frontend/component/loginform.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/admin/Desktop/bas/ittp-chat-frontend/component/loginform.js');
  reactHotLoader.register(WrappedLoginForm, 'WrappedLoginForm', '/Users/admin/Desktop/bas/ittp-chat-frontend/component/loginform.js');
  reactHotLoader.register(_default, 'default', '/Users/admin/Desktop/bas/ittp-chat-frontend/component/loginform.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

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

/***/ "./node_modules/antd/es/table/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Table__ = __webpack_require__("./node_modules/antd/es/table/Table.js");

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__Table__["a" /* default */]);

/***/ }),

/***/ "./tools/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loadAllCookies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return redirect; });
/* unused harmony export json2qs */
/* unused harmony export showError */
/* unused harmony export meta2pagination */
/* unused harmony export array2keyedObj */
/* unused harmony export caseInsensitiveMatch */
/* unused harmony export toYYYYMMDD */
/* unused harmony export toDDMMYYYY */
/* unused harmony export iso8601ToLocalTime */
/* unused harmony export iso8601ToLocalDate */
/* unused harmony export ddmmyyyyDateDiff */
/* unused harmony export removeLinebreak */
/* unused harmony export removeLinebreakFromFields */
/* unused harmony export datediff */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_cookie__ = __webpack_require__("./node_modules/universal-cookie/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_universal_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var loadAllCookies = function loadAllCookies(_ref) {
  var req = _ref.req,
      isServer = _ref.isServer;

  var cookies = void 0;
  if (isServer) {
    cookies = new __WEBPACK_IMPORTED_MODULE_1_universal_cookie___default.a(req.headers.cookie);
  } else {
    cookies = new __WEBPACK_IMPORTED_MODULE_1_universal_cookie___default.a();
  }
  return cookies.getAll();
};
var redirect = function redirect(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { res: {}, isServer: false };
  var res = options.res,
      isServer = options.isServer;

  if (isServer) {
    res.writeHead(302, {
      Location: url
    });
    res.end();
    res.finished = true;
  } else {
    __WEBPACK_IMPORTED_MODULE_0_next_router___default.a.replace(url);
  }
  return {};
};
var json2qs = function json2qs(json) {
  var qs = Object.keys(json).filter(function (key) {
    return typeof json[key] !== 'undefined';
  }).map(function (key) {
    return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
  }).join('&');

  return qs === '' ? '' : '?' + qs;
};
var showError = function showError(error) {
  var clearError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  if (isClient()) {
    if (error.message) {
      __WEBPACK_IMPORTED_MODULE_3_antd__["g" /* message */].error(error.message);
      clearError();
    }
  }
};
var meta2pagination = function meta2pagination(meta) {
  var total = 0;
  var current = 1;
  var pageSize = parseInt("10", 10);
  if (typeof meta !== 'undefined') {
    var totalrecords = meta.totalrecords,
        limit = meta.limit,
        offset = meta.offset;

    total = totalrecords || total;
    pageSize = limit || pageSize;
    current = offset / limit + 1 || current;
  }
  return {
    total: parseInt(total, 10),
    current: parseInt(current, 10),
    pageSize: parseInt(pageSize, 10)
  };
};
var array2keyedObj = function array2keyedObj(arr) {
  var keyField = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';

  // If arr is not an array return empty object
  if (typeof arr === 'undefined' || arr.constructor !== Array) {
    return {};
  }
  var obj = {};
  arr.forEach(function (item) {
    obj[item[keyField]] = item;
  });
  return obj;
};
var caseInsensitiveMatch = function caseInsensitiveMatch(inputValue, option) {
  return option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
};

// YYYY is always in christ era
var toYYYYMMDD = function toYYYYMMDD(ddmmyyyy) {
  var dd = ddmmyyyy.substring(0, 2);
  var mm = ddmmyyyy.substring(3, 5);
  var yyyy = ddmmyyyy.substring(6);
  var christYear = yyyy;
  if (yyyy > 2400) {
    christYear = Number(yyyy) - 543;
  }
  var date = __WEBPACK_IMPORTED_MODULE_2_moment___default()(christYear + '-' + mm + '-' + dd);
  if (!date.isValid()) {
    throw Error(ddmmyyyy + ' is not in mm-dd-yyyy format');
  }
  var yyyymmdd = date.format('YYYY-MM-DD');
  return yyyymmdd;
};
// YYYY is always in buddhist era
var toDDMMYYYY = function toDDMMYYYY(yyyymmdd) {
  var yyyy = yyyymmdd.substring(0, 4);
  var mm = yyyymmdd.substring(5, 7);
  var dd = yyyymmdd.substring(8, 10);
  var christYear = yyyy;
  if (yyyy > 2400) {
    christYear = Number(yyyy) - 543;
  }
  var date = __WEBPACK_IMPORTED_MODULE_2_moment___default()(christYear + '-' + mm + '-' + dd);
  if (!date.isValid()) {
    throw Error(yyyymmdd + ' is not in yyyy-mm-dd format');
  }
  var buddhistYear = Number(christYear) + 543;

  return dd + '-' + mm + '-' + buddhistYear;
};
var iso8601ToLocalTime = function iso8601ToLocalTime(dateStr) {
  return __WEBPACK_IMPORTED_MODULE_2_moment___default()(dateStr).format('YYYY-MM-DD HH:mm:ss');
};
var iso8601ToLocalDate = function iso8601ToLocalDate(dateStr) {
  return __WEBPACK_IMPORTED_MODULE_2_moment___default()(dateStr).format('YYYY-MM-DD');
};
var ddmmyyyyDateDiff = function ddmmyyyyDateDiff(ddmmyyyy1, ddmmyyyy2) {
  var yyyymmdd1 = toYYYYMMDD(ddmmyyyy1);
  var yyyymmdd2 = toYYYYMMDD(ddmmyyyy2);
  var d1 = __WEBPACK_IMPORTED_MODULE_2_moment___default()(yyyymmdd1, ['YYYY-MM-DD']);
  var d2 = __WEBPACK_IMPORTED_MODULE_2_moment___default()(yyyymmdd2, ['YYYY-MM-DD']);
  if (!d1.isValid() || !d2.isValid()) {
    throw Error('Either ' + ddmmyyyy1 + ' or ' + ddmmyyyy2 + ' is not in dd-mm-yyyy format');
  }
  return __WEBPACK_IMPORTED_MODULE_2_moment___default.a.duration(d2.diff(d1));
};
var removeLinebreak = function removeLinebreak(str) {
  if (typeof str !== 'string') {
    return str;
  }
  return str.replace(/\r?\n|\r/g, '');
};
var removeLinebreakFromFields = function removeLinebreakFromFields(obj) {
  return Object.entries(obj).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        value = _ref3[1];

    return _defineProperty({}, key, removeLinebreak(value));
  }).reduce(function (prev, current) {
    return _extends({}, prev, current);
  }, {});
};
/**
 * Return date difference calculated in timezone specified in config.defaultTimeZone (process.env.DEFAULT_TIMEZONE)
 * @param {string} d1 - A valid date string in ISO8601 format
 * @param {string} d2 - A valid date string in ISO8601 format
 * @return {number} Date difference between d1 and d2 return positve value if d1 occurred later than d2
 */
function datediff(d1, d2) {
  // Use startOf to compare only date diff ignore time component
  // Use utcOffset to fix timezone to 7 so we only compare in Bangkok timezone no matter where actual server is located
  // For instance, duration between 2018-06-05T23:59:59+0000 and 2018-06-06T00:00:00+0000 can be 1 if compared in +0 GMT timezone
  // However, it will be 0 if compared in +7 GMT timezone because startOf date of both dates will become 2018-06-06
  var d1date = __WEBPACK_IMPORTED_MODULE_2_moment___default()(d1).utcOffset("+0700").startOf('day');
  var d2date = __WEBPACK_IMPORTED_MODULE_2_moment___default()(d2).utcOffset("+0700").startOf('day');
  return d1date.diff(d2date, 'days');
}
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(loadAllCookies, 'loadAllCookies', '/Users/admin/Desktop/bas/ittp-chat-frontend/tools/utils.js');
  reactHotLoader.register(redirect, 'redirect', '/Users/admin/Desktop/bas/ittp-chat-frontend/tools/utils.js');
  reactHotLoader.register(json2qs, 'json2qs', '/Users/admin/Desktop/bas/ittp-chat-frontend/tools/utils.js');
  reactHotLoader.register(showError, 'showError', '/Users/admin/Desktop/bas/ittp-chat-frontend/tools/utils.js');
  reactHotLoader.register(meta2pagination, 'meta2pagination', '/Users/admin/Desktop/bas/ittp-chat-frontend/tools/utils.js');
  reactHotLoader.register(array2keyedObj, 'array2keyedObj', '/Users/admin/Desktop/bas/ittp-chat-frontend/tools/utils.js');
  reactHotLoader.register(caseInsensitiveMatch, 'caseInsensitiveMatch', '/Users/admin/Desktop/bas/ittp-chat-frontend/tools/utils.js');
  reactHotLoader.register(toYYYYMMDD, 'toYYYYMMDD', '/Users/admin/Desktop/bas/ittp-chat-frontend/tools/utils.js');
  reactHotLoader.register(toDDMMYYYY, 'toDDMMYYYY', '/Users/admin/Desktop/bas/ittp-chat-frontend/tools/utils.js');
  reactHotLoader.register(iso8601ToLocalTime, 'iso8601ToLocalTime', '/Users/admin/Desktop/bas/ittp-chat-frontend/tools/utils.js');
  reactHotLoader.register(iso8601ToLocalDate, 'iso8601ToLocalDate', '/Users/admin/Desktop/bas/ittp-chat-frontend/tools/utils.js');
  reactHotLoader.register(ddmmyyyyDateDiff, 'ddmmyyyyDateDiff', '/Users/admin/Desktop/bas/ittp-chat-frontend/tools/utils.js');
  reactHotLoader.register(removeLinebreak, 'removeLinebreak', '/Users/admin/Desktop/bas/ittp-chat-frontend/tools/utils.js');
  reactHotLoader.register(removeLinebreakFromFields, 'removeLinebreakFromFields', '/Users/admin/Desktop/bas/ittp-chat-frontend/tools/utils.js');
  reactHotLoader.register(datediff, 'datediff', '/Users/admin/Desktop/bas/ittp-chat-frontend/tools/utils.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.54003f1b29dde457f043.hot-update.js.map