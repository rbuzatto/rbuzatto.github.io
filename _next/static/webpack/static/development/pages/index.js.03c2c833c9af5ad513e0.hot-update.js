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


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Stripes = function Stripes() {
  var config = {
    'line--1': '0,200 150,200 200,90 300,90',
    'line--2': '100,-10 170,180 300,180',
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
      lineNumber: 9
    },
    __self: this
  }, Object.entries(config).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
      points: value,
      id: key,
      key: key,
      className: "stroke__line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Stripes);

/***/ })

})
//# sourceMappingURL=index.js.03c2c833c9af5ad513e0.hot-update.js.map