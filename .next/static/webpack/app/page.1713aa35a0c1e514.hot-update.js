"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { push } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        push(\"/prediction/\".concat(inputValue));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-screen justify-center items-center bg-gradient-to-r from-white to-green-600\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-red-500 p-10 rounded-lg shadow-xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-left text-2xl mb-2\",\n                    children: \"Enter Your Name\"\n                }, void 0, false, {\n                    fileName: \"/home/larry/Desktop/next-pro-j/src/app/page.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    action: \"\",\n                    className: \"\",\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"text-black p-3 rounded-lg\",\n                            placeholder: \"Type Your Name\",\n                            value: inputValue,\n                            onChange: (e)=>setInputValue(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"/home/larry/Desktop/next-pro-j/src/app/page.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"ml-5 bg-gray-500 px-3 py-3 rounded-lg\",\n                            type: \"submit\",\n                            children: \"Predict Data\"\n                        }, void 0, false, {\n                            fileName: \"/home/larry/Desktop/next-pro-j/src/app/page.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/larry/Desktop/next-pro-j/src/app/page.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/larry/Desktop/next-pro-j/src/app/page.tsx\",\n            lineNumber: 19,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/larry/Desktop/next-pro-j/src/app/page.tsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"e+hpYY8FjSejgnTTT9TqZFsLcVw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFMkM7QUFDQTtBQUU1QixTQUFTRTs7SUFFcEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdKLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU0sRUFBQ0ssSUFBSSxFQUFDLEdBQUdKLDBEQUFTQTtJQUV4QixNQUFNSyxlQUFlLENBQUNDO1FBQ2xCQSxNQUFNQyxjQUFjO1FBQ3BCSCxLQUFLLGVBQTBCLE9BQVhGO0lBQ3hCO0lBRUEscUJBQ0ksOERBQUNNO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUVULDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBMEI7Ozs7Ozs4QkFDNUMsOERBQUNFO29CQUFLQyxRQUFPO29CQUFHSCxXQUFVO29CQUFHSSxVQUFVUjs7c0NBQ25DLDhEQUFDUzs0QkFBTUMsTUFBSzs0QkFBT04sV0FBVTs0QkFBNEJPLGFBQVk7NEJBQWlCQyxPQUFPZjs0QkFBWWdCLFVBQVUsQ0FBQ0MsSUFBSWhCLGNBQWNnQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OztzQ0FDcEosOERBQUNJOzRCQUFPWixXQUFVOzRCQUF3Q00sTUFBSztzQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEY7R0F2QndCZDs7UUFJTEQsc0RBQVNBOzs7S0FKSkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB7IEZvcm1FdmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUgKCl7XG5cbiAgICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gICAgY29uc3Qge3B1c2h9ID0gdXNlUm91dGVyKClcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudDpGb3JtRXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcHVzaChgL3ByZWRpY3Rpb24vJHtpbnB1dFZhbHVlfWApIFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLXNjcmVlbiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctZ3JhZGllbnQtdG8tciBmcm9tLXdoaXRlIHRvLWdyZWVuLTYwMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBwLTEwIHJvdW5kZWQtbGcgc2hhZG93LXhsXCI+XG5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHRleHQtMnhsIG1iLTJcIj5FbnRlciBZb3VyIE5hbWU8L2gxPlxuICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgY2xhc3NOYW1lPVwiXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBwLTMgcm91bmRlZC1sZ1wiIHBsYWNlaG9sZGVyPVwiVHlwZSBZb3VyIE5hbWVcIiB2YWx1ZT17aW5wdXRWYWx1ZX0gb25DaGFuZ2U9eyhlKT0+c2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9Lz4gXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtbC01IGJnLWdyYXktNTAwIHB4LTMgcHktMyByb3VuZGVkLWxnXCIgdHlwZT1cInN1Ym1pdFwiPlByZWRpY3QgRGF0YTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUm91dGVyIiwiSG9tZSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwicHVzaCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJhY3Rpb24iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});