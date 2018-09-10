webpackHotUpdate(3,{

/***/ "./redux/saga/loanSagas.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export fetchLoanSaga */
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
    _marked2 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(loanSagas);





function fetchLoanSaga(action) {
    var id, data, code, message;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function fetchLoanSaga$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    console.log('fetch loan saga action', action);
                    id = action.payload.id;
                    //use api to fetch data from apiV2

                    _context.prev = 2;
                    _context.next = 5;
                    return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["b" /* call */])(__WEBPACK_IMPORTED_MODULE_3__tools_api__["b" /* getJSON */], __WEBPACK_IMPORTED_MODULE_3__tools_api__["a" /* API_SERVER */] + '/chats/' + id);

                case 5:
                    data = _context.sent;
                    _context.next = 8;
                    return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["c" /* put */])(Object(__WEBPACK_IMPORTED_MODULE_2__ducks_loan__["e" /* fetchLoanSuccess */])({ data: data }));

                case 8:
                    _context.next = 15;
                    break;

                case 10:
                    _context.prev = 10;
                    _context.t0 = _context['catch'](2);
                    code = _context.t0.code, message = _context.t0.message;
                    _context.next = 15;
                    return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["c" /* put */])(Object(__WEBPACK_IMPORTED_MODULE_2__ducks_loan__["d" /* fetchLoanFailure */])({ code: code, message: message }));

                case 15:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this, [[2, 10]]);
}

function loanSagas() {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function loanSagas$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["a" /* all */])([Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["d" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_2__ducks_loan__["a" /* FETCH_LOAN */], fetchLoanSaga)]);

                case 2:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked2, this);
}
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(fetchLoanSaga, 'fetchLoanSaga', '/Users/admin/Desktop/bas/ittp-chat-frontend/redux/saga/loanSagas.js');
    reactHotLoader.register(loanSagas, 'loanSagas', '/Users/admin/Desktop/bas/ittp-chat-frontend/redux/saga/loanSagas.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.e58862781fd261c7b08e.hot-update.js.map