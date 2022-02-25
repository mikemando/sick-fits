self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Page; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\PC\\Desktop\\sick-fits\\frontend\\components\\Page.js";

/* eslint-disable quotes */

/* eslint-disable prettier/prettier */



var GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.createGlobalStyle)(["-@font-face{font-family:\"radnika_next\";src:url(\"static adnikanext-medium-webfont.woff2\") format(\"woff2\");font-weight:normal;font-style:normal;}html{--red:#ff0000;--black:#393939;--grey:#3A3A3A;--gray:var(--grey);--lightGrey:#e1e1e1;--lightGray:var(--lightGrey);--offWhite:#ededed;--maxWidth:1000px;--bs:0 12px 24px 0 rgba(0,0,0,0.09);box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}body{font-family:\"radnika_next\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;padding:0;margin:0;font-size:1.5em;line-height:2;}a{text-decoration:none;color:var(--black);}a:hover{text-decoration:underline;}button{font-family:\"radnika_next\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;}"]);
_c = GlobalStyles;
var InnerStyles = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "Page__InnerStyles",
  componentId: "sc-4u7a64-0"
})(["max-width:var(--maxWidth);margin:0 auto;padding:2rem;"]);
_c2 = InnerStyles;
function Page(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyles, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InnerStyles, {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 9
  }, this);
}
_c3 = Page;
Page.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)
};

var _c, _c2, _c3;

$RefreshReg$(_c, "GlobalStyles");
$RefreshReg$(_c2, "InnerStyles");
$RefreshReg$(_c3, "Page");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlLmpzIl0sIm5hbWVzIjpbIkdsb2JhbFN0eWxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiSW5uZXJTdHlsZXMiLCJzdHlsZWQiLCJQYWdlIiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLG9FQUFILGkxQkFBbEI7S0FBTUQsWTtBQWtETixJQUFNRSxXQUFXLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDZEQUFqQjtNQUFNRCxXO0FBTVMsU0FBU0UsSUFBVCxPQUE0QjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUN2QyxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUksOERBQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0ksOERBQUMsV0FBRDtBQUFBLGdCQUFjQTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU9IO01BUnVCRCxJO0FBVXhCQSxJQUFJLENBQUNFLFNBQUwsR0FBaUI7QUFDYkQsVUFBUSxFQUFFRSx1REFBYUM7QUFEVixDQUFqQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmI2N2M3NjNlZTc5N2QyNGI5NjlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBxdW90ZXMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgcHJldHRpZXIvcHJldHRpZXIgKi9cclxuaW1wb3J0IHN0eWxlZCwgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XHJcblxyXG5jb25zdCBHbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAgIC1AZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJyYWRuaWthX25leHRcIjtcclxuICAgICAgICBzcmM6IHVybChcInN0YXRpY1xccmFkbmlrYW5leHQtbWVkaXVtLXdlYmZvbnQud29mZjJcIilcclxuICAgICAgICBmb3JtYXQoXCJ3b2ZmMlwiKTtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIH1cclxuXHJcbiAgICBodG1sIHtcclxuICAgICAgICAtLXJlZDogI2ZmMDAwMDtcclxuICAgICAgICAtLWJsYWNrOiAjMzkzOTM5O1xyXG4gICAgICAgIC0tZ3JleTogIzNBM0EzQTtcclxuICAgICAgICAtLWdyYXk6IHZhcigtLWdyZXkpO1xyXG4gICAgICAgIC0tbGlnaHRHcmV5OiAjZTFlMWUxO1xyXG4gICAgICAgIC0tbGlnaHRHcmF5OiB2YXIoLS1saWdodEdyZXkpO1xyXG4gICAgICAgIC0tb2ZmV2hpdGU6ICNlZGVkZWQ7XHJcbiAgICAgICAgLS1tYXhXaWR0aDogMTAwMHB4O1xyXG4gICAgICAgIC0tYnM6IDAgMTJweCAyNHB4IDAgcmdiYSgwLDAsMCwwLjA5KTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgfVxyXG5cclxuICAgICosICo6YmVmb3JlLCAqOmFmdGVyIHtcclxuICAgICAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG4gICAgfVxyXG5cclxuICAgIGJvZHkge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcInJhZG5pa2FfbmV4dFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sXHJcbiAgICAgICAgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgfVxyXG5cclxuICAgIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIGE6aG92ZXIge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwicmFkbmlrYV9uZXh0XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbixcclxuICAgICAgICBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW5uZXJTdHlsZXMgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWF4LXdpZHRoOiB2YXIoLS1tYXhXaWR0aCk7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKHsgY2hpbGRyZW4gfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8R2xvYmFsU3R5bGVzIC8+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPElubmVyU3R5bGVzPntjaGlsZHJlbn08L0lubmVyU3R5bGVzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuUGFnZS5wcm9wVHlwZXMgPSB7XHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==