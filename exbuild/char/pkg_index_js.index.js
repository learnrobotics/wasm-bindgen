"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["pkg_index_js"],{

/***/ "./pkg/index.js":
/*!**********************!*\
  !*** ./pkg/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Counter\": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.Counter),\n/* harmony export */   \"__wbg_log_ba93d378c95b0bd2\": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_log_ba93d378c95b0bd2),\n/* harmony export */   \"__wbg_set_wasm\": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm),\n/* harmony export */   \"__wbindgen_throw\": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_throw)\n/* harmony export */ });\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\n/* harmony import */ var _index_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.js */ \"./pkg/index_bg.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);\n_index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n(0,_index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm)(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///./pkg/index.js?");

/***/ }),

/***/ "./pkg/index_bg.js":
/*!*************************!*\
  !*** ./pkg/index_bg.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Counter\": () => (/* binding */ Counter),\n/* harmony export */   \"__wbg_log_ba93d378c95b0bd2\": () => (/* binding */ __wbg_log_ba93d378c95b0bd2),\n/* harmony export */   \"__wbg_set_wasm\": () => (/* binding */ __wbg_set_wasm),\n/* harmony export */   \"__wbindgen_throw\": () => (/* binding */ __wbindgen_throw)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* provided dependency */ var TextDecoder = __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"];\nlet wasm;\nfunction __wbg_set_wasm(val) {\n    wasm = val;\n}\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = new Uint8Array();\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nfunction logError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        let error = (function () {\n            try {\n                return e instanceof Error ? `${e.message}\\n\\nStack:\\n${e.stack}` : e.toString();\n            } catch(_) {\n                return \"<failed to stringify thrown value>\";\n            }\n        }());\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", error);\n        throw e;\n    }\n}\n\nfunction _assertNum(n) {\n    if (typeof(n) !== 'number') throw new Error('expected a number argument');\n}\n/**\n*/\nclass Counter {\n\n    constructor() {\n        throw new Error('cannot invoke `new` directly');\n    }\n\n    static __wrap(ptr) {\n        const obj = Object.create(Counter.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_counter_free(ptr);\n    }\n    /**\n    * @returns {Counter}\n    */\n    static default() {\n        const ret = wasm.counter_default();\n        return Counter.__wrap(ret);\n    }\n    /**\n    * @param {string} key\n    * @param {number} count\n    * @returns {Counter}\n    */\n    static new(key, count) {\n        _assertNum(count);\n        const ret = wasm.counter_new(key.codePointAt(0), count);\n        return Counter.__wrap(ret);\n    }\n    /**\n    * @returns {string}\n    */\n    key() {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        _assertNum(this.ptr);\n        const ret = wasm.counter_key(this.ptr);\n        return String.fromCodePoint(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    count() {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        _assertNum(this.ptr);\n        const ret = wasm.counter_count(this.ptr);\n        return ret;\n    }\n    /**\n    */\n    increment() {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        _assertNum(this.ptr);\n        wasm.counter_increment(this.ptr);\n    }\n    /**\n    * @param {string} key\n    */\n    update_key(key) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        _assertNum(this.ptr);\n        wasm.counter_update_key(this.ptr, key.codePointAt(0));\n    }\n}\n\nfunction __wbg_log_ba93d378c95b0bd2() { return logError(function (arg0, arg1) {\n    console.log(getStringFromWasm0(arg0, arg1));\n}, arguments) };\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n\n//# sourceURL=webpack:///./pkg/index_bg.js?");

/***/ }),

/***/ "./pkg/index_bg.wasm":
/*!***************************!*\
  !*** ./pkg/index_bg.wasm ***!
  \***************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./index_bg.js */ \"./pkg/index_bg.js\");\nmodule.exports = __webpack_require__.v(exports, module.id, \"1bab15b305c6dde1f05c\", {\n\t\"./index_bg.js\": {\n\t\t\"__wbg_log_ba93d378c95b0bd2\": WEBPACK_IMPORTED_MODULE_0.__wbg_log_ba93d378c95b0bd2,\n\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw\n\t}\n});\n\n//# sourceURL=webpack:///./pkg/index_bg.wasm?");

/***/ })

}]);