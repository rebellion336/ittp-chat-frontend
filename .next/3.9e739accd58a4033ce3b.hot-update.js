webpackHotUpdate(3,{

/***/ "./redux/saga/loanSagas.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export fetchLoanSaga */
/* unused harmony export bindIdSaga */
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
    _marked2 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(bindIdSaga),
    _marked3 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(loanSagas);





function fetchLoanSaga(action) {
    var id, data, code, message;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function fetchLoanSaga$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    id = action.payload.id;
                    //use api to fetch data from apiV2

                    _context.prev = 1;
                    _context.next = 4;
                    return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["b" /* call */])(__WEBPACK_IMPORTED_MODULE_3__tools_api__["b" /* getJSON */], __WEBPACK_IMPORTED_MODULE_3__tools_api__["a" /* API_SERVER */] + '/chats/' + id);

                case 4:
                    data = _context.sent;
                    _context.next = 7;
                    return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["c" /* put */])(Object(__WEBPACK_IMPORTED_MODULE_2__ducks_loan__["f" /* fetchLoanSuccess */])({ data: data }));

                case 7:
                    _context.next = 14;
                    break;

                case 9:
                    _context.prev = 9;
                    _context.t0 = _context['catch'](1);
                    code = _context.t0.code, message = _context.t0.message;
                    _context.next = 14;
                    return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["c" /* put */])(Object(__WEBPACK_IMPORTED_MODULE_2__ducks_loan__["e" /* fetchLoanFailure */])({ code: code, message: message }));

                case 14:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this, [[1, 9]]);
}

function bindIdSaga(action) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function bindIdSaga$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked2, this);
}

function loanSagas() {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function loanSagas$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    _context3.next = 2;
                    return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["a" /* all */])([Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["d" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_2__ducks_loan__["b" /* FETCH_LOAN */], fetchLoanSaga), Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["d" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_2__ducks_loan__["a" /* BIND_ID */], bindIdSaga)]);

                case 2:
                case 'end':
                    return _context3.stop();
            }
        }
    }, _marked3, this);
}
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(fetchLoanSaga, 'fetchLoanSaga', '/Users/admin/Desktop/bas/ittp-chat-frontend/redux/saga/loanSagas.js');
    reactHotLoader.register(bindIdSaga, 'bindIdSaga', '/Users/admin/Desktop/bas/ittp-chat-frontend/redux/saga/loanSagas.js');
    reactHotLoader.register(loanSagas, 'loanSagas', '/Users/admin/Desktop/bas/ittp-chat-frontend/redux/saga/loanSagas.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.9e739accd58a4033ce3b.hot-update.js.map