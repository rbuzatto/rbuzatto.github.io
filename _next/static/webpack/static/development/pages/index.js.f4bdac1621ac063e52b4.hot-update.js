webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Stripes.js":
/*!*******************************!*\
  !*** ./components/Stripes.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\might\\Studies\\landing-pages\\portfolio2.0\\portfolio-project\\components\\Stripes.js";


var Stripes = function Stripes() {
  var config = {
    'line--1': '0,200 150,200 200,90 300,90',
    'line--2': '70,-10 170,180 300,180',
    'line--3': '300,200 180,200 215,120 300,120'
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "100%",
    height: "100%",
    className: "stripes",
    viewBox: "0 0 300 300",
    preserveAspectRatio: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, Object.entries(config).map(function (key, value) {
    console.log(key);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
      points: value,
      id: key,
      key: key,
      className: "stroke__line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    });
  }), "}");
};

/* harmony default export */ __webpack_exports__["default"] = (Stripes);

/***/ })

})
//# sourceMappingURL=index.js.f4bdac1621ac063e52b4.hot-update.js.map