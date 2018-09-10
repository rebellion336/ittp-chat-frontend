webpackHotUpdate(3,{

/***/ "./redux/ducks/loan.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FETCH_LOAN; });
/* unused harmony export BIND_ID */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fetchLoan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return fetchLoanSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return fetchLoanFailure; });
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
        default:
            return state;
    }
};
var _default = reducer;
/* harmony default export */ __webpack_exports__["b"] = (_default);
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
    reactHotLoader.register(initialState, 'initialState', '/Users/admin/Desktop/bas/ittp-chat-frontend/redux/ducks/loan.js');
    reactHotLoader.register(reducer, 'reducer', '/Users/admin/Desktop/bas/ittp-chat-frontend/redux/ducks/loan.js');
    reactHotLoader.register(_default, 'default', '/Users/admin/Desktop/bas/ittp-chat-frontend/redux/ducks/loan.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.87218ea69828f821c0ce.hot-update.js.map