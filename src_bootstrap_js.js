"use strict";
(self["webpackChunkhost"] = self["webpackChunkhost"] || []).push([["src_bootstrap_js"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var libs_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! libs/react */ "webpack/container/remote/libs/react");
/* harmony import */ var libs_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(libs_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var libs_react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libs/react-router-dom */ "webpack/container/remote/libs/react-router-dom");
/* harmony import */ var libs_react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(libs_react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remote1_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remote1/Heading */ "webpack/container/remote/remote1/Heading");
/* harmony import */ var remote1_Heading__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remote1_Heading__WEBPACK_IMPORTED_MODULE_2__);



const Remote = libs_react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "webpack_container_remote_remote1_RemoteApp").then(__webpack_require__.t.bind(__webpack_require__, /*! remote1/RemoteApp */ "webpack/container/remote/remote1/RemoteApp", 23)));
const Button = libs_react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "webpack_container_remote_remote1_Button").then(__webpack_require__.t.bind(__webpack_require__, /*! remote1/Button */ "webpack/container/remote/remote1/Button", 23)));

const App = () => {
  return /*#__PURE__*/libs_react__WEBPACK_IMPORTED_MODULE_0___default().createElement(libs_react_router_dom__WEBPACK_IMPORTED_MODULE_1__.BrowserRouter, null, /*#__PURE__*/libs_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/libs_react__WEBPACK_IMPORTED_MODULE_0___default().createElement(libs_react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: 'loading...'
  }, /*#__PURE__*/libs_react__WEBPACK_IMPORTED_MODULE_0___default().createElement(libs_react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, /*#__PURE__*/libs_react__WEBPACK_IMPORTED_MODULE_0___default().createElement(libs_react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    path: "/button"
  }, /*#__PURE__*/libs_react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Button, null)), /*#__PURE__*/libs_react__WEBPACK_IMPORTED_MODULE_0___default().createElement(libs_react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    path: "/button"
  }, /*#__PURE__*/libs_react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Button, null)), /*#__PURE__*/libs_react__WEBPACK_IMPORTED_MODULE_0___default().createElement(libs_react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    path: "/heading"
  }, /*#__PURE__*/libs_react__WEBPACK_IMPORTED_MODULE_0___default().createElement((remote1_Heading__WEBPACK_IMPORTED_MODULE_2___default()), null)), /*#__PURE__*/libs_react__WEBPACK_IMPORTED_MODULE_0___default().createElement(libs_react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    path: "/remote"
  }, /*#__PURE__*/libs_react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Remote, null))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var libs_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libs/react */ "webpack/container/remote/libs/react");
/* harmony import */ var libs_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(libs_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var libs_react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libs/react-dom */ "webpack/container/remote/libs/react-dom");
/* harmony import */ var libs_react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(libs_react_dom__WEBPACK_IMPORTED_MODULE_2__);



libs_react_dom__WEBPACK_IMPORTED_MODULE_2___default().render( /*#__PURE__*/libs_react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_App__WEBPACK_IMPORTED_MODULE_0__["default"], null), document.getElementById('root'));

/***/ })

}]);
//# sourceMappingURL=src_bootstrap_js.js.map