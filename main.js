/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0px;\n}\n\nheader {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #272424;\n    color: #fff;\n    height: 69px;\n    font-size: 30px;\n    font-weight: bold;\n}\n\n.overlay {\n    visibility: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.main {\n    display: flex;\n    min-height: 621px;\n}\n\n#project-area {\n    width: 250px;\n    background-color: rgb(209, 207, 207);\n}\n\n#project-header {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 20px;\n    margin-bottom: 5px;\n}\n\n#project-title {\n    font-size: 30px;\n    font-weight: bold;\n    margin-bottom: 20px;\n}\n\n#new-project-button {\n    height: 50px;\n    width: 99%;\n    background-color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: bold;\n    border: 1px solid transparent;\n    border-radius: 10px;\n}\n\n#new-project-button:hover {\n    cursor: pointer;\n    border: 1px solid black;\n}\n\n#new-project-button-icon {\n    margin-left: 10px;\n    height: 25px;\n    width: 25px;\n}\n\n#project-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 40px;\n    overflow-y: auto;\n    height: 454px;\n}\n\n.project-element {\n    display: flex;\n    width: 85%;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    border-radius: 15px;\n    border: 2px solid #000;\n    margin-bottom: 20px;\n}\n\n.project-element:hover {\n    cursor: pointer;\n    background-color: rgb(180, 180, 180);\n}\n\n.project-name {\n    font-size: 20px;\n    margin-right: 50px;\n    width: 80%;\n    text-align: center;\n}\n\n.edit-project-button {\n    height: 25px;\n    width: 25px;\n    border-radius: 50%;\n    padding: 5px;\n    border: 2px solid transparent;\n}\n\n.edit-project-button:hover {\n    border: 2px solid black;\n}\n\n.delete-project-button {\n    height: 25px;\n    width: 25px;\n    border-radius: 50%;\n    padding: 5px;\n}\n\n.delete-project-button:hover {\n    background-color: rgb(255, 0, 0);\n}\n\n.active-project {\n    background-color: rgb(133, 133, 133);\n}\n\n#project-form-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#project-form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px;\n    height: 100px;\n    width: 300px;\n    background-color: white;\n    border-radius: 20px;\n}\n\n#project-form-input {\n    font-size: 20px;\n    width: 100%;\n    height: 40px;\n    border-radius: 20px;\n    border: 2px solid #000;\n}\n\n#project-form-buttons {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    width: 100%;\n    margin-top: 20px;\n}\n\n.project-form-button {\n    height: 35px;\n    width: 100px;\n    border-radius: 20px;\n    border: 2px solid black;    \n}\n\n.project-form-button:hover, .project-form-button:focus {\n    font-weight: bold;\n    cursor: pointer;\n    border: 3px solid black;\n}\n\n#project-form-confirm {\n    background-color: rgb(13, 214, 13);\n}\n\n#project-form-cancel {\n    background-color: rgb(223, 14, 14);\n}\n\n#task-area {\n    flex: 1;\n    margin: 20px;\n}\n\n#task-header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#new-task-button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 15px;\n    border: 1px solid transparent;\n    border-radius: 10px;\n    font-size: 20px;\n    font-weight: bold;\n}\n\n#new-task-button:hover {\n    cursor: pointer;\n    border: 1px solid black;\n}\n\n#new-task-button-icon {\n    margin-left: 10px;\n    height: 35px;\n    width: 35px;\n}\n\n#task-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 510px;\n    overflow-y: auto;\n}\n\n.task-element {\n    margin-top: 20px;\n    display: flex;\n    align-items: center;\n    width: 100%;\n    border-radius: 10px;\n}\n\n.task-button:hover {\n    cursor: pointer;\n}\n\n.done-task {\n    background-color: blue;\n}\n\n.task-done-button-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 40px;\n    margin-right: 25px;\n}\n\n.task-done-button {\n    width: 25px;\n    border-radius: 50%;\n    padding: 5px;\n}\n\n.task-done-button:hover {\n    border: 2px solid black;\n}\n\n.task-name {\n    display: flex;\n    align-items: center;\n    font-size: 20px;\n    width: 720px;\n    margin-right: 25px;\n    font-size: 23px;\n}\n\n.task-status-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    width: 70px;\n    margin-right: 25px;\n}\n\n.task-deadline-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 200px;\n    margin-right: 25px;\n    font-weight: bold;\n}\n\n.edit-task-button-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 40px;\n    margin-right: 25px;\n}\n\n.edit-task-button {\n    width: 25px;\n    border-radius: 50%;\n    padding: 5px;\n    border: 2px solid transparent;\n}\n\n.edit-task-button:hover {\n    border: 2px solid black;\n}\n\n.delete-task-button-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 40px;\n}\n\n.delete-task-button {\n    width: 25px;\n    border-radius: 50%;\n    padding: 5px;\n}\n\n.delete-task-button:hover {\n    background-color: rgb(255, 0, 0);\n}\n\n#task-form-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#task-form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px;\n    height: 400px;\n    width: 400px;\n    background-color: white;\n    border-radius: 20px;\n}\n\n#task-name-input-container {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100px;\n    margin-bottom: 20px;\n}\n\n#task-name-input {\n    font-size: 20px;\n    width: 100%;\n    height: 30px;\n    border-radius: 10px;\n    border: 2px solid #000;\n}\n\n#task-priority-input-container {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 50px;\n    margin-bottom: 40px;\n}\n\n#task-priority-input-label {\n    font-size: 20px;\n    font-weight: bold;\n    margin-right: 40px;\n}\n\n#task-priority-input {\n    font-size: 18px;\n    text-align: center;\n    width: 90px;\n    height: 30px;\n    border-radius: 10px;\n    border: 2px solid #000;\n}\n\n#task-date-input-container {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 50px;\n    margin-bottom: 70px;\n}\n\n#task-date-input-label {\n    font-size: 20px;\n    font-weight: bold;\n    margin-right: 30px;\n}\n\n#task-date-input {\n    font-size: 18px;\n    text-align: center;\n    width: 200px;\n    height: 30px;\n    border-radius: 10px;\n    border: 2px solid #000;\n}\n\n#task-form-buttons {\n    display: flex;\n    align-items: center;\n    width: 100%;\n}\n\n.task-form-button {\n    height: 35px;\n    width: 100px;\n    margin-left: 60px;\n    margin-right: 10px;\n    border-radius: 20px;\n    border: 2px solid black;    \n}\n\n.task-form-button:hover, .task-form-button:focus {\n    font-weight: bold;\n    cursor: pointer;\n    border: 3px solid black;\n}\n\n#task-form-confirm {\n    background-color: rgb(13, 214, 13);\n}\n\n#task-form-cancel {\n    background-color: rgb(223, 14, 14);\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #272424;\n    color: #fff;\n    height: 42px;\n    font-size: 17px;\n    font-weight: bold;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    margin: 0px;\n}\n\nheader {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #272424;\n    color: #fff;\n    height: 69px;\n    font-size: 30px;\n    font-weight: bold;\n}\n\n.overlay {\n    visibility: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.main {\n    display: flex;\n    min-height: 621px;\n}\n\n#project-area {\n    width: 250px;\n    background-color: rgb(209, 207, 207);\n}\n\n#project-header {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 20px;\n    margin-bottom: 5px;\n}\n\n#project-title {\n    font-size: 30px;\n    font-weight: bold;\n    margin-bottom: 20px;\n}\n\n#new-project-button {\n    height: 50px;\n    width: 99%;\n    background-color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: bold;\n    border: 1px solid transparent;\n    border-radius: 10px;\n}\n\n#new-project-button:hover {\n    cursor: pointer;\n    border: 1px solid black;\n}\n\n#new-project-button-icon {\n    margin-left: 10px;\n    height: 25px;\n    width: 25px;\n}\n\n#project-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 40px;\n    overflow-y: auto;\n    height: 454px;\n}\n\n.project-element {\n    display: flex;\n    width: 85%;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    border-radius: 15px;\n    border: 2px solid #000;\n    margin-bottom: 20px;\n}\n\n.project-element:hover {\n    cursor: pointer;\n    background-color: rgb(180, 180, 180);\n}\n\n.project-name {\n    font-size: 20px;\n    margin-right: 50px;\n    width: 80%;\n    text-align: center;\n}\n\n.edit-project-button {\n    height: 25px;\n    width: 25px;\n    border-radius: 50%;\n    padding: 5px;\n    border: 2px solid transparent;\n}\n\n.edit-project-button:hover {\n    border: 2px solid black;\n}\n\n.delete-project-button {\n    height: 25px;\n    width: 25px;\n    border-radius: 50%;\n    padding: 5px;\n}\n\n.delete-project-button:hover {\n    background-color: rgb(255, 0, 0);\n}\n\n.active-project {\n    background-color: rgb(133, 133, 133);\n}\n\n#project-form-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#project-form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px;\n    height: 100px;\n    width: 300px;\n    background-color: white;\n    border-radius: 20px;\n}\n\n#project-form-input {\n    font-size: 20px;\n    width: 100%;\n    height: 40px;\n    border-radius: 20px;\n    border: 2px solid #000;\n}\n\n#project-form-buttons {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    width: 100%;\n    margin-top: 20px;\n}\n\n.project-form-button {\n    height: 35px;\n    width: 100px;\n    border-radius: 20px;\n    border: 2px solid black;    \n}\n\n.project-form-button:hover, .project-form-button:focus {\n    font-weight: bold;\n    cursor: pointer;\n    border: 3px solid black;\n}\n\n#project-form-confirm {\n    background-color: rgb(13, 214, 13);\n}\n\n#project-form-cancel {\n    background-color: rgb(223, 14, 14);\n}\n\n#task-area {\n    flex: 1;\n    margin: 20px;\n}\n\n#task-header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#new-task-button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 15px;\n    border: 1px solid transparent;\n    border-radius: 10px;\n    font-size: 20px;\n    font-weight: bold;\n}\n\n#new-task-button:hover {\n    cursor: pointer;\n    border: 1px solid black;\n}\n\n#new-task-button-icon {\n    margin-left: 10px;\n    height: 35px;\n    width: 35px;\n}\n\n#task-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 510px;\n    overflow-y: auto;\n}\n\n.task-element {\n    margin-top: 20px;\n    display: flex;\n    align-items: center;\n    width: 100%;\n    border-radius: 10px;\n}\n\n.task-button:hover {\n    cursor: pointer;\n}\n\n.done-task {\n    background-color: blue;\n}\n\n.task-done-button-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 40px;\n    margin-right: 25px;\n}\n\n.task-done-button {\n    width: 25px;\n    border-radius: 50%;\n    padding: 5px;\n}\n\n.task-done-button:hover {\n    border: 2px solid black;\n}\n\n.task-name {\n    display: flex;\n    align-items: center;\n    font-size: 20px;\n    width: 720px;\n    margin-right: 25px;\n    font-size: 23px;\n}\n\n.task-status-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    width: 70px;\n    margin-right: 25px;\n}\n\n.task-deadline-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 200px;\n    margin-right: 25px;\n    font-weight: bold;\n}\n\n.edit-task-button-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 40px;\n    margin-right: 25px;\n}\n\n.edit-task-button {\n    width: 25px;\n    border-radius: 50%;\n    padding: 5px;\n    border: 2px solid transparent;\n}\n\n.edit-task-button:hover {\n    border: 2px solid black;\n}\n\n.delete-task-button-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 40px;\n}\n\n.delete-task-button {\n    width: 25px;\n    border-radius: 50%;\n    padding: 5px;\n}\n\n.delete-task-button:hover {\n    background-color: rgb(255, 0, 0);\n}\n\n#task-form-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#task-form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px;\n    height: 400px;\n    width: 400px;\n    background-color: white;\n    border-radius: 20px;\n}\n\n#task-name-input-container {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100px;\n    margin-bottom: 20px;\n}\n\n#task-name-input {\n    font-size: 20px;\n    width: 100%;\n    height: 30px;\n    border-radius: 10px;\n    border: 2px solid #000;\n}\n\n#task-priority-input-container {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 50px;\n    margin-bottom: 40px;\n}\n\n#task-priority-input-label {\n    font-size: 20px;\n    font-weight: bold;\n    margin-right: 40px;\n}\n\n#task-priority-input {\n    font-size: 18px;\n    text-align: center;\n    width: 90px;\n    height: 30px;\n    border-radius: 10px;\n    border: 2px solid #000;\n}\n\n#task-date-input-container {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 50px;\n    margin-bottom: 70px;\n}\n\n#task-date-input-label {\n    font-size: 20px;\n    font-weight: bold;\n    margin-right: 30px;\n}\n\n#task-date-input {\n    font-size: 18px;\n    text-align: center;\n    width: 200px;\n    height: 30px;\n    border-radius: 10px;\n    border: 2px solid #000;\n}\n\n#task-form-buttons {\n    display: flex;\n    align-items: center;\n    width: 100%;\n}\n\n.task-form-button {\n    height: 35px;\n    width: 100px;\n    margin-left: 60px;\n    margin-right: 10px;\n    border-radius: 20px;\n    border: 2px solid black;    \n}\n\n.task-form-button:hover, .task-form-button:focus {\n    font-weight: bold;\n    cursor: pointer;\n    border: 3px solid black;\n}\n\n#task-form-confirm {\n    background-color: rgb(13, 214, 13);\n}\n\n#task-form-cancel {\n    background-color: rgb(223, 14, 14);\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #272424;\n    color: #fff;\n    height: 42px;\n    font-size: 17px;\n    font-weight: bold;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/pubsub-js/src/pubsub.js":
/*!**********************************************!*\
  !*** ./node_modules/pubsub-js/src/pubsub.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
 * License: MIT - http://mrgnrdrck.mit-license.org
 *
 * https://github.com/mroderick/PubSubJS
 */

(function (root, factory){
    'use strict';

    var PubSub = {};

    if (root.PubSub) {
        PubSub = root.PubSub;
        console.warn("PubSub already loaded, using existing version");
    } else {
        root.PubSub = PubSub;
        factory(PubSub);
    }
    // CommonJS and Node.js module support
    if (true){
        if (module !== undefined && module.exports) {
            exports = module.exports = PubSub; // Node.js specific `module.exports`
        }
        exports.PubSub = PubSub; // CommonJS module 1.1.1 spec
        module.exports = exports = PubSub; // CommonJS
    }
    // AMD support
    /* eslint-disable no-undef */
    else {}

}(( typeof window === 'object' && window ) || this, function (PubSub){
    'use strict';

    var messages = {},
        lastUid = -1,
        ALL_SUBSCRIBING_MSG = '*';

    function hasKeys(obj){
        var key;

        for (key in obj){
            if ( Object.prototype.hasOwnProperty.call(obj, key) ){
                return true;
            }
        }
        return false;
    }

    /**
     * Returns a function that throws the passed exception, for use as argument for setTimeout
     * @alias throwException
     * @function
     * @param { Object } ex An Error object
     */
    function throwException( ex ){
        return function reThrowException(){
            throw ex;
        };
    }

    function callSubscriberWithDelayedExceptions( subscriber, message, data ){
        try {
            subscriber( message, data );
        } catch( ex ){
            setTimeout( throwException( ex ), 0);
        }
    }

    function callSubscriberWithImmediateExceptions( subscriber, message, data ){
        subscriber( message, data );
    }

    function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){
        var subscribers = messages[matchedMessage],
            callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,
            s;

        if ( !Object.prototype.hasOwnProperty.call( messages, matchedMessage ) ) {
            return;
        }

        for (s in subscribers){
            if ( Object.prototype.hasOwnProperty.call(subscribers, s)){
                callSubscriber( subscribers[s], originalMessage, data );
            }
        }
    }

    function createDeliveryFunction( message, data, immediateExceptions ){
        return function deliverNamespaced(){
            var topic = String( message ),
                position = topic.lastIndexOf( '.' );

            // deliver the message as it is now
            deliverMessage(message, message, data, immediateExceptions);

            // trim the hierarchy and deliver message to each level
            while( position !== -1 ){
                topic = topic.substr( 0, position );
                position = topic.lastIndexOf('.');
                deliverMessage( message, topic, data, immediateExceptions );
            }

            deliverMessage(message, ALL_SUBSCRIBING_MSG, data, immediateExceptions);
        };
    }

    function hasDirectSubscribersFor( message ) {
        var topic = String( message ),
            found = Boolean(Object.prototype.hasOwnProperty.call( messages, topic ) && hasKeys(messages[topic]));

        return found;
    }

    function messageHasSubscribers( message ){
        var topic = String( message ),
            found = hasDirectSubscribersFor(topic) || hasDirectSubscribersFor(ALL_SUBSCRIBING_MSG),
            position = topic.lastIndexOf( '.' );

        while ( !found && position !== -1 ){
            topic = topic.substr( 0, position );
            position = topic.lastIndexOf( '.' );
            found = hasDirectSubscribersFor(topic);
        }

        return found;
    }

    function publish( message, data, sync, immediateExceptions ){
        message = (typeof message === 'symbol') ? message.toString() : message;

        var deliver = createDeliveryFunction( message, data, immediateExceptions ),
            hasSubscribers = messageHasSubscribers( message );

        if ( !hasSubscribers ){
            return false;
        }

        if ( sync === true ){
            deliver();
        } else {
            setTimeout( deliver, 0 );
        }
        return true;
    }

    /**
     * Publishes the message, passing the data to it's subscribers
     * @function
     * @alias publish
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */
    PubSub.publish = function( message, data ){
        return publish( message, data, false, PubSub.immediateExceptions );
    };

    /**
     * Publishes the message synchronously, passing the data to it's subscribers
     * @function
     * @alias publishSync
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */
    PubSub.publishSync = function( message, data ){
        return publish( message, data, true, PubSub.immediateExceptions );
    };

    /**
     * Subscribes the passed function to the passed message. Every returned token is unique and should be stored if you need to unsubscribe
     * @function
     * @alias subscribe
     * @param { String } message The message to subscribe to
     * @param { Function } func The function to call when a new message is published
     * @return { String }
     */
    PubSub.subscribe = function( message, func ){
        if ( typeof func !== 'function'){
            return false;
        }

        message = (typeof message === 'symbol') ? message.toString() : message;

        // message is not registered yet
        if ( !Object.prototype.hasOwnProperty.call( messages, message ) ){
            messages[message] = {};
        }

        // forcing token as String, to allow for future expansions without breaking usage
        // and allow for easy use as key names for the 'messages' object
        var token = 'uid_' + String(++lastUid);
        messages[message][token] = func;

        // return token for unsubscribing
        return token;
    };

    PubSub.subscribeAll = function( func ){
        return PubSub.subscribe(ALL_SUBSCRIBING_MSG, func);
    };

    /**
     * Subscribes the passed function to the passed message once
     * @function
     * @alias subscribeOnce
     * @param { String } message The message to subscribe to
     * @param { Function } func The function to call when a new message is published
     * @return { PubSub }
     */
    PubSub.subscribeOnce = function( message, func ){
        var token = PubSub.subscribe( message, function(){
            // before func apply, unsubscribe message
            PubSub.unsubscribe( token );
            func.apply( this, arguments );
        });
        return PubSub;
    };

    /**
     * Clears all subscriptions
     * @function
     * @public
     * @alias clearAllSubscriptions
     */
    PubSub.clearAllSubscriptions = function clearAllSubscriptions(){
        messages = {};
    };

    /**
     * Clear subscriptions by the topic
     * @function
     * @public
     * @alias clearAllSubscriptions
     * @return { int }
     */
    PubSub.clearSubscriptions = function clearSubscriptions(topic){
        var m;
        for (m in messages){
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){
                delete messages[m];
            }
        }
    };

    /**
       Count subscriptions by the topic
     * @function
     * @public
     * @alias countSubscriptions
     * @return { Array }
    */
    PubSub.countSubscriptions = function countSubscriptions(topic){
        var m;
        // eslint-disable-next-line no-unused-vars
        var token;
        var count = 0;
        for (m in messages) {
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) {
                for (token in messages[m]) {
                    count++;
                }
                break;
            }
        }
        return count;
    };


    /**
       Gets subscriptions by the topic
     * @function
     * @public
     * @alias getSubscriptions
    */
    PubSub.getSubscriptions = function getSubscriptions(topic){
        var m;
        var list = [];
        for (m in messages){
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){
                list.push(m);
            }
        }
        return list;
    };

    /**
     * Removes subscriptions
     *
     * - When passed a token, removes a specific subscription.
     *
	 * - When passed a function, removes all subscriptions for that function
     *
	 * - When passed a topic, removes all subscriptions for that topic (hierarchy)
     * @function
     * @public
     * @alias subscribeOnce
     * @param { String | Function } value A token, function or topic to unsubscribe from
     * @example // Unsubscribing with a token
     * var token = PubSub.subscribe('mytopic', myFunc);
     * PubSub.unsubscribe(token);
     * @example // Unsubscribing with a function
     * PubSub.unsubscribe(myFunc);
     * @example // Unsubscribing from a topic
     * PubSub.unsubscribe('mytopic');
     */
    PubSub.unsubscribe = function(value){
        var descendantTopicExists = function(topic) {
                var m;
                for ( m in messages ){
                    if ( Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0 ){
                        // a descendant of the topic exists:
                        return true;
                    }
                }

                return false;
            },
            isTopic    = typeof value === 'string' && ( Object.prototype.hasOwnProperty.call(messages, value) || descendantTopicExists(value) ),
            isToken    = !isTopic && typeof value === 'string',
            isFunction = typeof value === 'function',
            result = false,
            m, message, t;

        if (isTopic){
            PubSub.clearSubscriptions(value);
            return;
        }

        for ( m in messages ){
            if ( Object.prototype.hasOwnProperty.call( messages, m ) ){
                message = messages[m];

                if ( isToken && message[value] ){
                    delete message[value];
                    result = value;
                    // tokens are unique, so we can just stop here
                    break;
                }

                if (isFunction) {
                    for ( t in message ){
                        if (Object.prototype.hasOwnProperty.call(message, t) && message[t] === value){
                            delete message[t];
                            result = true;
                        }
                    }
                }
            }
        }

        return result;
    };
}));


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uniqid/index.js":
/*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
/***/ ((module) => {

/* 
(The MIT License)
Copyright (c) 2014-2021 Halász Ádám <adam@aimform.com>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//  Unique Hexatridecimal ID Generator
// ================================================

//  Dependencies
// ================================================
var pid = typeof process !== 'undefined' && process.pid ? process.pid.toString(36) : '' ;
var address = '';
if(false){ var i, networkInterfaces, mac, os; } 

//  Exports
// ================================================
module.exports = module.exports["default"] = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }

//  Helpers
// ================================================
function now(){
    var time = Date.now();
    var last = now.last || time;
    return now.last = time > last ? time : last + 1;
}


/***/ }),

/***/ "./src/event-manager.js":
/*!******************************!*\
  !*** ./src/event-manager.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "subscribe": () => (/* binding */ subscribe),
/* harmony export */   "publish": () => (/* binding */ publish)
/* harmony export */ });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);


function subscribe(event, callback) {
    return pubsub_js__WEBPACK_IMPORTED_MODULE_0__.PubSub.subscribe(event, callback);
}

function publish(event, data) {
    return pubsub_js__WEBPACK_IMPORTED_MODULE_0__.PubSub.publish(event, data);
}



/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProjectList": () => (/* binding */ getProjectList)
/* harmony export */ });
/* harmony import */ var _event_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-manager.js */ "./src/event-manager.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task.js */ "./src/task.js");








function getProjectList () {
    return (0,_storage_js__WEBPACK_IMPORTED_MODULE_3__.getProjectListFromStorage)();
}

(0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.subscribe)("ADDED_PROJECT", function (event, {projectList, newProjectUID}) {
    (0,_storage_js__WEBPACK_IMPORTED_MODULE_3__.updateStorage)(projectList);
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.updateProjectContainer)();
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.switchToProject)(newProjectUID);
});

(0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.subscribe)("DELETED_PROJECT", function (event, projectList) {
    (0,_storage_js__WEBPACK_IMPORTED_MODULE_3__.updateStorage)(projectList);
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.updateProjectContainer)();
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.switchToProject)(projectList[0].UID);
});

(0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.subscribe)("RENAMED_PROJECT", function (event, {projectList, renamedProjectUID}) {
    (0,_storage_js__WEBPACK_IMPORTED_MODULE_3__.updateStorage)(projectList);
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.updateProjectContainer)();
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.switchToProject)(renamedProjectUID);
});

(0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.subscribe)("NEW_PROJECT_BUTTON_CLICKED", function (event) {
    const projectForm = document.querySelector("#project-form");
    projectForm.dataset.newProject = 'true';
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.activatePojectForm)();
});

(0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.subscribe)("PROJECT_FORM_CONFIRM_CLICKED", function (event, projectForm) {
    var result = false;

    if(projectForm.dataset.newProject === 'true') {
        result = (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.addProject)(projectForm.querySelector("#project-form-input").value);

    } else {
        const projectUID = projectForm.dataset.projectUid;
        const projectName = projectForm.querySelector("#project-form-input").value;
        result = (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.renameProject)(projectUID, projectName);
    }

    if(result) {
        (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.exitProjectForm)();
    }
});

(0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.subscribe)("PROJECT_FORM_CANCEL_CLICKED", function (event) {
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.exitProjectForm)();
});

(0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.subscribe)("SWITCH_TO_PROJECT", function (event, projectUID) {
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.setActiveProject)(projectUID);
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.updateTaskContainer)(projectUID);
});

(0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.subscribe)("PROJECT_ELEMENT_CLICKED", function (event, projectUID) {
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.switchToProject)(projectUID);
});

(0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.subscribe)("DELETE_PROJECT_BUTTON_CLICKED", function (event, projectUID) {
    (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.deleteProject)(projectUID);
});

(0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.subscribe)("EDIT_PROJECT_BUTTON_CLICKED", function (event, projectUID) {
    const projectList = getProjectList();
    const projectForm = document.querySelector("#project-form");
    projectForm.dataset.newProject = 'false';
    projectForm.dataset.projectUid = projectUID;
    projectForm.querySelector("#project-form-input").value = projectList.find(project => project.UID === projectUID).name;
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.activatePojectForm)();
});

(0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.subscribe)("ADDED_TASK", function (event, {projectList, projectUID}) {
    (0,_storage_js__WEBPACK_IMPORTED_MODULE_3__.updateStorage)(projectList);
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.updateTaskContainer)(projectUID);
});

(0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.subscribe)("DELETED_TASK", function (event, {projectList, projectUID}) {
    (0,_storage_js__WEBPACK_IMPORTED_MODULE_3__.updateStorage)(projectList);
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.updateTaskContainer)(projectUID);
});

(0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.subscribe)("UPDATED_TASK", function (event, {projectList, projectUID}) {
    (0,_storage_js__WEBPACK_IMPORTED_MODULE_3__.updateStorage)(projectList);
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.updateTaskContainer)(projectUID);
});

(0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.subscribe)("TOGGLED_TASK_DONE", function (event, {projectList, projectUID}) {
    (0,_storage_js__WEBPACK_IMPORTED_MODULE_3__.updateStorage)(projectList);
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.updateTaskContainer)(projectUID);
});

(0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.subscribe)("DONE_TASK_BUTTON_CLICKED", function (event, {projectUID, taskUID}) {
    (0,_task_js__WEBPACK_IMPORTED_MODULE_4__.toggleTaskDone)(projectUID, taskUID);
});

(0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.subscribe)("EDIT_TASK_BUTTON_CLICKED", function(event, {projectUID, taskUID}) {
    const taskForm = document.querySelector("#task-form");
    taskForm.dataset.projectUid = projectUID;
    taskForm.dataset.taskUid = taskUID;
    taskForm.dataset.newTask = 'false';
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.fillTaskForm)(projectUID, taskUID);
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.activateTaskForm)();
});

(0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.subscribe)("DELETE_TASK_BUTTON_CLICKED", function (event, {projectUID, taskUID}) {
    (0,_task_js__WEBPACK_IMPORTED_MODULE_4__.deleteTask)(projectUID, taskUID);
});

(0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.subscribe)("NEW_TASK_BUTTON_CLICKED", function (event, projectUID) {
    const taskForm = document.querySelector("#task-form");
    taskForm.dataset.projectUid = projectUID;
    taskForm.dataset.newTask = 'true';
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.activateTaskForm)();
});

(0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.subscribe)("TASK_FORM_CONFIRM_CLICKED", function (event, taskForm) {
    var result = false;

    const projectUID = taskForm.dataset.projectUid;
    const taskName = taskForm.querySelector("#task-name-input").value;
    const taskPriority = taskForm.querySelector("#task-priority-input").value;
    const taskDeadline = taskForm.querySelector("#task-date-input").value;

    if(taskForm.dataset.newTask === 'true') {
        result = (0,_task_js__WEBPACK_IMPORTED_MODULE_4__.addTask)(projectUID, taskName, taskPriority, taskDeadline);

    } else {
        const taskUID = taskForm.dataset.taskUid;
        result = (0,_task_js__WEBPACK_IMPORTED_MODULE_4__.updateTask)(projectUID, taskUID, taskName, taskPriority, taskDeadline);
    }

    if(result) {
        (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.exitTaskForm)();
    }
});

(0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.subscribe)("TASK_FORM_CANCEL_CLICKED", function (event) {
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.exitTaskForm)();
});

(0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.subscribe)("POPULATE_PROJECTS", function () {
    if(getProjectList().length === 0) {
        (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.addProject)('Default');

    } else {
        (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.updateProjectContainer)();
        (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.switchToProject)(getProjectList()[0].UID);
    }
});



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "renameProject": () => (/* binding */ renameProject)
/* harmony export */ });
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _event_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-manager.js */ "./src/event-manager.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events.js */ "./src/events.js");




function projectFactory(projectName) {
    const project = {
        UID: uniqid__WEBPACK_IMPORTED_MODULE_0___default()(),
        name: projectName,
        tasks: []
    };

    return project;
}

function addProject(projectName) {
    if(projectName === '') {
        alert('Project name cannot be empty');
        return false;
    }

    var projectList = (0,_events_js__WEBPACK_IMPORTED_MODULE_2__.getProjectList)();

    if (projectList.some(project => project.name === projectName)) {
        alert('Project ' + projectName + ' already exists');
        return false;
    }

    const newProject = projectFactory(projectName);
    projectList.push(newProject);
    (0,_event_manager_js__WEBPACK_IMPORTED_MODULE_1__.publish)('ADDED_PROJECT', {projectList, newProjectUID: newProject.UID});
    return true;
}

function deleteProject(projectUID) {
    var projectList = (0,_events_js__WEBPACK_IMPORTED_MODULE_2__.getProjectList)();

    const tryingToDeleteDefaultProject = projectList.some(project => project.name === 'Default' && project.UID === projectUID);

    if(tryingToDeleteDefaultProject) {
        alert('Cannot delete Default project');
        return;
    }

    projectList = projectList.filter(project => project.UID !== projectUID);
    (0,_event_manager_js__WEBPACK_IMPORTED_MODULE_1__.publish)('DELETED_PROJECT', projectList);
}

function renameProject(projectUID, newName) {
    var projectList = (0,_events_js__WEBPACK_IMPORTED_MODULE_2__.getProjectList)();

    const tryingToRenameDefaultProject = projectList.some(project => project.name === 'Default' && project.UID === projectUID);

    if(tryingToRenameDefaultProject) {
        alert('Cannot rename Default project');
        return false;
    }

    if(projectList.some(project => project.name === newName && project.UID !== projectUID)) {
        alert('Project ' + newName + ' already exists');
        return false;
    }

    for (let index = 0; index < projectList.length; index++) {
        if (projectList[index].UID == projectUID) {
            projectList[index].name = newName;
            break;
        }
    }

    (0,_event_manager_js__WEBPACK_IMPORTED_MODULE_1__.publish)('RENAMED_PROJECT', {projectList, renamedProjectUID : projectUID});
    return true;
}



/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateStorage": () => (/* binding */ updateStorage),
/* harmony export */   "getProjectListFromStorage": () => (/* binding */ getProjectListFromStorage)
/* harmony export */ });
function updateStorage(projectList) {
    localStorage.setItem('todo-list-projects', JSON.stringify(projectList));
}

function getProjectListFromStorage () {
    if(!localStorage.getItem('todo-list-projects')) {
        return [];

    } else {
        return JSON.parse(localStorage.getItem('todo-list-projects'));
    }
}



/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "updateTask": () => (/* binding */ updateTask),
/* harmony export */   "toggleTaskDone": () => (/* binding */ toggleTaskDone)
/* harmony export */ });
/* harmony import */ var _event_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-manager.js */ "./src/event-manager.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.js */ "./src/events.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_2__);




function taskFactory(taskName, taskPriority, taskDeadline, projectUID) {
    const task = {
        UID: uniqid__WEBPACK_IMPORTED_MODULE_2___default()(),
        name: taskName,
        priority: taskPriority,
        deadline: taskDeadline,
        done: false,
        projectUID: projectUID
    };

    return task;
}

function addTaskToProject(newTask, projectUID) {
    var projectList = (0,_events_js__WEBPACK_IMPORTED_MODULE_1__.getProjectList)();

    for (let index = 0; index < projectList.length; index++) {
        if (projectList[index].UID == projectUID) {
            projectList[index].tasks.push(newTask);
            break;
        }
    }

    (0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.publish)('ADDED_TASK', {projectList, projectUID});
}

function toggleTaskDone(projectUID, taskUID) {
    var projectList = (0,_events_js__WEBPACK_IMPORTED_MODULE_1__.getProjectList)();
    for (let index = 0; index < projectList.length; index++) {
        if (projectList[index].UID == projectUID) {
            projectList[index].tasks = projectList[index].tasks.map(task => {
                if (task.UID == taskUID) {
                    task.done = !task.done;
                }
                return task;
            });
            break;
        }
    }
    (0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.publish)('TOGGLED_TASK_DONE', {projectList, projectUID});
}

function checkValidity(taskName, taskDeadline) {
    if(taskName == '' || (new Date(taskDeadline)) == 'Invalid Date') {
        return false;

    } else {
        return true;
    }
}

function updateTask(projectUID, taskUID, taskName, taskPriority, taskDeadline) {
    if(!checkValidity(taskName, taskDeadline)) {
        alert('Task name and deadline are required!');
        return false;
    }

    var projectList = (0,_events_js__WEBPACK_IMPORTED_MODULE_1__.getProjectList)();
    for (let index = 0; index < projectList.length; index++) {
        if (projectList[index].UID == projectUID) {
            projectList[index].tasks = projectList[index].tasks.map(task => {
                if (task.UID == taskUID) {
                    task.name = taskName;
                    task.priority = taskPriority;
                    task.deadline = taskDeadline;
                }
                return task;
            });
            break;
        }
    }
    (0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.publish)('UPDATED_TASK', {projectList, projectUID});
    return true;
}

function addTask(projectUID, taskName, taskPriority, taskDeadline) {
    if (!checkValidity(taskName, taskDeadline)) {
        alert('Task name and deadline are required!');
        return false;
    }

    const newTask = taskFactory(taskName, taskPriority, taskDeadline, projectUID);
    addTaskToProject(newTask, projectUID);
    return true;
}

function deleteTask(projectUID, taskUID) {
    var projectList = (0,_events_js__WEBPACK_IMPORTED_MODULE_1__.getProjectList)();
    for (let index = 0; index < projectList.length; index++) {
        if (projectList[index].UID == projectUID) {
            projectList[index].tasks = projectList[index].tasks.filter(task => task.UID !== taskUID);
            break;
        }
    }
    (0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.publish)('DELETED_TASK', {projectList, projectUID});
}



/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectArea": () => (/* binding */ createProjectArea),
/* harmony export */   "createProjectForm": () => (/* binding */ createProjectForm),
/* harmony export */   "activatePojectForm": () => (/* binding */ activatePojectForm),
/* harmony export */   "exitProjectForm": () => (/* binding */ exitProjectForm),
/* harmony export */   "setActiveProject": () => (/* binding */ setActiveProject),
/* harmony export */   "switchToProject": () => (/* binding */ switchToProject),
/* harmony export */   "updateProjectContainer": () => (/* binding */ updateProjectContainer),
/* harmony export */   "createTaskArea": () => (/* binding */ createTaskArea),
/* harmony export */   "createTaskForm": () => (/* binding */ createTaskForm),
/* harmony export */   "activateTaskForm": () => (/* binding */ activateTaskForm),
/* harmony export */   "exitTaskForm": () => (/* binding */ exitTaskForm),
/* harmony export */   "fillTaskForm": () => (/* binding */ fillTaskForm),
/* harmony export */   "updateTaskContainer": () => (/* binding */ updateTaskContainer)
/* harmony export */ });
/* harmony import */ var _event_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-manager.js */ "./src/event-manager.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.js */ "./src/events.js");
/* harmony import */ var _images_delete_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/delete-icon.svg */ "./src/images/delete-icon.svg");
/* harmony import */ var _images_add_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/add-icon.svg */ "./src/images/add-icon.svg");
/* harmony import */ var _images_edit_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/edit-icon.svg */ "./src/images/edit-icon.svg");
/* harmony import */ var _images_done_icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/done-icon.svg */ "./src/images/done-icon.svg");







function createProjectElement(project) {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project-element');
    projectElement.dataset.projectUid = project.UID;

    const projectName = document.createElement('div');
    projectName.classList.add('project-name');
    projectName.textContent = project.name;
    projectElement.appendChild(projectName);

    const editProjectButtonContainer = document.createElement('div');
    editProjectButtonContainer.classList.add('edit-project-button-container');

    const editProjectButton = new Image();
    editProjectButton.classList.add('edit-project-button');
    editProjectButton.src = _images_edit_icon_svg__WEBPACK_IMPORTED_MODULE_4__;

    editProjectButton.addEventListener('click', () => {
        (0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.publish)('EDIT_PROJECT_BUTTON_CLICKED', project.UID);
    });

    editProjectButtonContainer.appendChild(editProjectButton);
    projectElement.appendChild(editProjectButtonContainer);

    const deleteProjectButtonContainer = document.createElement('div');
    deleteProjectButtonContainer.classList.add('delete-project-button-container');

    const deleteProjectButton = new Image();
    deleteProjectButton.classList.add('delete-project-button');
    deleteProjectButton.src = _images_delete_icon_svg__WEBPACK_IMPORTED_MODULE_2__;

    deleteProjectButton.addEventListener('click', () => {
        (0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.publish)('DELETE_PROJECT_BUTTON_CLICKED', project.UID);
    });

    deleteProjectButtonContainer.appendChild(deleteProjectButton);
    projectElement.appendChild(deleteProjectButtonContainer);

    projectElement.addEventListener('click', (e) => {
        if (e.target !== deleteProjectButton && e.target !== editProjectButton) {
            (0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.publish)('PROJECT_ELEMENT_CLICKED', project.UID);
        }
    });

    return projectElement;
}

function updateProjectContainer() {
    const projectList = (0,_events_js__WEBPACK_IMPORTED_MODULE_1__.getProjectList)();
    const projectContainer = document.querySelector('#project-container');
    projectContainer.innerHTML = '';
    projectList.forEach(project => {
        const projectElement = createProjectElement(project);
        projectContainer.appendChild(projectElement);
    });
}

function setActiveProject(projectUID) {
    const projectElements = document.querySelectorAll('.project-element');
    projectElements.forEach(projectElement => {
        if (projectElement.dataset.projectUid === projectUID) {
            projectElement.classList.add('active-project');
        } else {
            projectElement.classList.remove('active-project');
        }
    });
}

function switchToProject(projectUID) {
    const projectList = (0,_events_js__WEBPACK_IMPORTED_MODULE_1__.getProjectList)();
    const foundProject = projectList.some(project => project.UID === projectUID);

    if (!foundProject) {
        switchToProject(projectList[0].UID);
        return;
    }

    (0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.publish)('SWITCH_TO_PROJECT', projectUID);
}

function activatePojectForm() {
    const projectFormContainer = document.querySelector('#project-form-container');
    projectFormContainer.style.visibility = 'visible';
    const projectFormInput = document.querySelector('#project-form-input');
    projectFormInput.focus();
}

function exitProjectForm() {
    const projectFormContainer = document.querySelector('#project-form-container');
    projectFormContainer.style.visibility = 'hidden';
    const projectFormInput = document.querySelector('#project-form-input');
    projectFormInput.value = '';
}

function createProjectFormButtons() {
    const projectFormButtons = document.createElement('div');
    projectFormButtons.id = 'project-form-buttons';

    const projectFormConfirm = document.createElement('button');
    projectFormConfirm.id = 'project-form-confirm';
    projectFormConfirm.classList.add('project-form-button');
    projectFormConfirm.type = 'button';
    projectFormConfirm.textContent = 'Confirm';

    const projectFormCancel = document.createElement('button');
    projectFormCancel.id = 'project-form-cancel';
    projectFormCancel.classList.add('project-form-button');
    projectFormCancel.type = 'button';
    projectFormCancel.textContent = 'Cancel';

    projectFormConfirm.addEventListener('click', (e) => {
        (0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.publish)('PROJECT_FORM_CONFIRM_CLICKED', e.target.closest("#project-form"));
    });

    projectFormCancel.addEventListener('click', (e) => {
        (0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.publish)('PROJECT_FORM_CANCEL_CLICKED');
    });

    projectFormButtons.appendChild(projectFormCancel);
    projectFormButtons.appendChild(projectFormConfirm);
    return projectFormButtons;
}

function createProjectForm() {
    const projectFormContainer = document.createElement('div');
    projectFormContainer.id = 'project-form-container';
    projectFormContainer.classList.add('overlay');

    const projectForm = document.createElement('form');
    projectForm.id = 'project-form';

    const projectFormInput = document.createElement('input');
    projectFormInput.id = 'project-form-input';
    projectFormInput.type = 'text';
    projectFormInput.placeholder = 'Project name';
    projectForm.appendChild(projectFormInput);

    projectForm.append(createProjectFormButtons());
    projectFormContainer.appendChild(projectForm);

    return projectFormContainer;
}


function createNewProjectButton() {
    const newProjectButton = document.createElement('div');
    newProjectButton.id = 'new-project-button';

    const newProjectButtonText = document.createElement('div');
    newProjectButtonText.id = 'new-project-button-text';
    newProjectButtonText.innerText = 'NEW PROJECT';
    newProjectButton.appendChild(newProjectButtonText);

    const newProjectButtonIcon = new Image();
    newProjectButtonIcon.id = 'new-project-button-icon';
    newProjectButtonIcon.src = _images_add_icon_svg__WEBPACK_IMPORTED_MODULE_3__;
    newProjectButton.appendChild(newProjectButtonIcon);

    newProjectButton.addEventListener('click', () => {
        (0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.publish)('NEW_PROJECT_BUTTON_CLICKED');
    });

    return newProjectButton;
}

function createProjectTitle() {
    const projectTitle = document.createElement('div');
    projectTitle.id = 'project-title';
    projectTitle.innerText = 'Projects';
    return projectTitle;
}

function createProjectHeader() {
    const projectHeader = document.createElement('div');
    projectHeader.id = 'project-header';
    projectHeader.appendChild(createProjectTitle());
    projectHeader.appendChild(createNewProjectButton());
    return projectHeader;
}

function createProjectContainer() {
    const projectContainer = document.createElement('div');
    projectContainer.id = 'project-container';
    return projectContainer;
}

function createProjectArea() {
    const projectArea = document.createElement('div');
    projectArea.id = 'project-area';
    projectArea.appendChild(createProjectHeader());
    projectArea.appendChild(createProjectContainer());
    return projectArea;
}


function getTaskBackgroundColor(task) {
    if(task.priority === 'urgent') {
        return 'orange';

    } else if(task.priority === 'medium') {
        return 'yellow';

    } else {
        return 'cyan';
    }
}

function getTaskStatus(task) {
    const taskStatus = document.createElement('div');
    taskStatus.classList.add('task-status');
    taskStatus.style.fontWeight = 'bold';
    const deadlineDate = new Date(task.deadline + 'T23:59:59');
    const curDate = new Date();

    if(!task.done) {
        if (deadlineDate < curDate) {
            taskStatus.textContent = 'OVERDUE';
            taskStatus.style.color = 'red';

        } else if (deadlineDate - curDate <= (24 * 60 * 60 * 1000)) {
            taskStatus.textContent = 'DUE TODAY';
        }
    }

    return taskStatus;
}

function createTaskElement(task) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task-element');

    taskElement.style.backgroundColor = getTaskBackgroundColor(task);
    taskElement.dataset.taskUid = task.UID;

    const taskDoneButtonContainer = document.createElement('div');
    taskDoneButtonContainer.classList.add('task-done-button-container');
    const taskDoneButton = new Image();
    taskDoneButton.classList.add('task-done-button');
    taskDoneButton.classList.add('task-button');
    taskDoneButton.src = _images_done_icon_svg__WEBPACK_IMPORTED_MODULE_5__;

    taskDoneButton.addEventListener('click', () => {
        (0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.publish)('DONE_TASK_BUTTON_CLICKED', {projectUID: task.projectUID, taskUID: task.UID});
    });

    taskDoneButtonContainer.appendChild(taskDoneButton);
    taskElement.appendChild(taskDoneButtonContainer);

    const taskName = document.createElement('div');
    taskName.classList.add('task-name');
    taskName.textContent = task.name;
    taskElement.appendChild(taskName);

    const taskStatusContainer = document.createElement('div');
    taskStatusContainer.classList.add('task-status-container');
    taskStatusContainer.appendChild(getTaskStatus(task));
    taskElement.appendChild(taskStatusContainer);

    const dateFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const taskDeadlineContainer = document.createElement('div');
    taskDeadlineContainer.classList.add('task-deadline-container');
    const taskDeadline = document.createElement('div');
    taskDeadline.classList.add('task-deadline');
    taskDeadline.textContent = (new Date(task.deadline)).toLocaleDateString('en-US', dateFormatOptions);
    taskDeadlineContainer.appendChild(taskDeadline);
    taskElement.appendChild(taskDeadlineContainer);

    const editTaskButtonContainer = document.createElement('div');
    editTaskButtonContainer.classList.add('edit-task-button-container');
    const editTaskButton = new Image();
    editTaskButton.classList.add('edit-task-button');
    editTaskButton.classList.add('task-button');
    editTaskButton.src = _images_edit_icon_svg__WEBPACK_IMPORTED_MODULE_4__;
    editTaskButton.addEventListener('click', (e) => {
        (0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.publish)('EDIT_TASK_BUTTON_CLICKED', {projectUID: task.projectUID, taskUID: task.UID});
    });
    editTaskButtonContainer.appendChild(editTaskButton);
    taskElement.appendChild(editTaskButtonContainer);

    const deleteTaskButtonContainer = document.createElement('div');
    deleteTaskButtonContainer.classList.add('delete-task-button-container');
    const deleteTaskButton = new Image();
    deleteTaskButton.classList.add('delete-task-button');
    deleteTaskButton.classList.add('task-button');
    deleteTaskButton.src = _images_delete_icon_svg__WEBPACK_IMPORTED_MODULE_2__;
    deleteTaskButton.addEventListener("click", () => {
        (0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.publish)('DELETE_TASK_BUTTON_CLICKED', {projectUID: task.projectUID, taskUID: task.UID});
    });
    deleteTaskButtonContainer.appendChild(deleteTaskButton);
    taskElement.appendChild(deleteTaskButtonContainer);

    if (task.done) {
        taskElement.style.textDecoration = 'line-through';
        taskElement.style.color = '#ccc';
        taskDoneButton.style.backgroundColor = 'green';
    }

    return taskElement;
}

function updateTaskContainer(projectUID) {
    const projectList = (0,_events_js__WEBPACK_IMPORTED_MODULE_1__.getProjectList)();
    const taskContainer = document.querySelector('#task-container');
    taskContainer.innerHTML = '';
    taskContainer.parentElement.dataset.projectUid = projectUID;

    for (let projectIndex = 0; projectIndex < projectList.length; projectIndex++) {
        if (projectList[projectIndex].UID == projectUID) {
            projectList[projectIndex].tasks.sort(
                (task1, task2) => {
                    if(task1.done === task2.done) {
                        return new Date(task1.deadline) - new Date(task2.deadline);

                    } else if(task1.done) {
                        return 1;

                    } else {
                        return -1;

                    }
                }
            );

            for (let taskIndex = 0; taskIndex < projectList[projectIndex].tasks.length; taskIndex++) {
                const taskElement = createTaskElement(projectList[projectIndex].tasks[taskIndex]);
                taskContainer.appendChild(taskElement);
            }

            break;
        }
    }
}

function getTask(projectUID, taskUID) {
    const projectList = (0,_events_js__WEBPACK_IMPORTED_MODULE_1__.getProjectList)();
    for (let projectIndex = 0; projectIndex < projectList.length; projectIndex++) {
        if (projectList[projectIndex].UID == projectUID) {
            for (let taskIndex = 0; taskIndex < projectList[projectIndex].tasks.length; taskIndex++) {
                if (projectList[projectIndex].tasks[taskIndex].UID == taskUID) {
                    return projectList[projectIndex].tasks[taskIndex];
                }
            }
        }
    }
}

function fillTaskForm(projectUID, taskUID) {
    const task = getTask(projectUID, taskUID);
    const taskForm = document.querySelector('#task-form');
    taskForm.querySelector('#task-name-input').value = task.name;
    taskForm.querySelector('#task-priority-input').value = task.priority;
    taskForm.querySelector('#task-date-input').value = task.deadline;
}

function activateTaskForm() {
    const taskFormContainer = document.querySelector('#task-form-container');
    taskFormContainer.style.visibility = 'visible';
    const taskNameInput = document.querySelector('#task-name-input');
    taskNameInput.focus();
}

function exitTaskForm() {
    const taskFormContainer = document.querySelector('#task-form-container');
    taskFormContainer.style.visibility = 'hidden';
    const taskForm = document.querySelector('#task-form');
    taskForm.reset();
}

function createTaskFormButtons() {
    const taskFormButtons = document.createElement('div');
    taskFormButtons.id = 'task-form-buttons';

    const taskFormConfirm = document.createElement('button');
    taskFormConfirm.id = 'task-form-confirm';
    taskFormConfirm.classList.add('task-form-button');
    taskFormConfirm.type = 'button';
    taskFormConfirm.textContent = 'Confirm';

    const taskFormCancel = document.createElement('button');
    taskFormCancel.id = 'task-form-cancel';
    taskFormCancel.classList.add('task-form-button');
    taskFormCancel.type = 'button';
    taskFormCancel.textContent = 'Cancel';

    taskFormConfirm.addEventListener('click', (e) => {
        (0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.publish)('TASK_FORM_CONFIRM_CLICKED', e.target.closest("#task-form"));
    });

    taskFormCancel.addEventListener('click', (e) => {
        (0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.publish)('TASK_FORM_CANCEL_CLICKED');
    });

    taskFormButtons.appendChild(taskFormCancel);
    taskFormButtons.appendChild(taskFormConfirm);
    return taskFormButtons;
}

function createTaskForm() {
    const taskFormContainer = document.createElement('div');
    taskFormContainer.id = 'task-form-container';
    taskFormContainer.classList.add('overlay');

    const taskForm = document.createElement('form');
    taskForm.id = 'task-form';

    const taskNameInputContainer = document.createElement('div');
    taskNameInputContainer.id = 'task-name-input-container';
    const taskNameInput = document.createElement('input');
    taskNameInput.id = 'task-name-input';
    taskNameInput.type = 'text';
    taskNameInput.placeholder = 'Task name';
    taskNameInputContainer.appendChild(taskNameInput);
    taskForm.appendChild(taskNameInputContainer);

    const taskPriorityInputContainer = document.createElement('div');
    taskPriorityInputContainer.id = 'task-priority-input-container';
    const taskPriorityInputLabel = document.createElement('label');
    taskPriorityInputLabel.id = 'task-priority-input-label';
    taskPriorityInputLabel.textContent = 'Priority : ';
    taskPriorityInputContainer.appendChild(taskPriorityInputLabel);
    const taskPriorityInput = document.createElement('select');
    taskPriorityInput.id = 'task-priority-input';
    taskPriorityInput.add(new Option('low', 'low', true));
    taskPriorityInput.add(new Option('medium', 'medium'));
    taskPriorityInput.add(new Option('urgent', 'urgent'));
    taskPriorityInputContainer.appendChild(taskPriorityInput);
    taskForm.appendChild(taskPriorityInputContainer);

    const taskDateInputContainer = document.createElement('div');
    taskDateInputContainer.id = 'task-date-input-container';
    const taskDateInputLabel = document.createElement('label');
    taskDateInputLabel.id = 'task-date-input-label';
    taskDateInputLabel.textContent = 'Deadline : ';
    taskDateInputContainer.appendChild(taskDateInputLabel);
    const taskDateInput = document.createElement('input');
    taskDateInput.id = 'task-date-input';
    taskDateInput.type = 'date';
    taskDateInputContainer.appendChild(taskDateInput);
    taskForm.appendChild(taskDateInputContainer);

    taskForm.append(createTaskFormButtons());
    taskFormContainer.appendChild(taskForm);

    return taskFormContainer;
}

function createNewTaskButton() {
    const newTaskButton = document.createElement('div');
    newTaskButton.id = "new-task-button";

    const newTaskButtonText = document.createElement('div');
    newTaskButtonText.id = "new-task-button-text";
    newTaskButtonText.textContent = "NEW TASK";
    newTaskButton.appendChild(newTaskButtonText);

    const newTaskButtonIcon = new Image();
    newTaskButtonIcon.id = "new-task-button-icon";
    newTaskButtonIcon.src = _images_add_icon_svg__WEBPACK_IMPORTED_MODULE_3__;
    newTaskButton.appendChild(newTaskButtonIcon);

    newTaskButton.addEventListener("click", (e) => {
        (0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.publish)("NEW_TASK_BUTTON_CLICKED", e.target.closest('#task-area').dataset.projectUid);
    });

    return newTaskButton;
}

function createTaskHeader() {
    const taskHeader = document.createElement('div');
    taskHeader.id = "task-header";
    taskHeader.appendChild(createNewTaskButton());
    return taskHeader;
}

function createTaskContainer() {
    const taskContainer = document.createElement('div');
    taskContainer.id = "task-container";
    return taskContainer;
}

function createTaskArea() {
    const taskArea = document.createElement('div');
    taskArea.id = "task-area";
    taskArea.appendChild(createTaskHeader());
    taskArea.appendChild(createTaskContainer());
    return taskArea;
}



/***/ }),

/***/ "./src/images/add-icon.svg":
/*!*********************************!*\
  !*** ./src/images/add-icon.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c79d702846a02064745a.svg";

/***/ }),

/***/ "./src/images/delete-icon.svg":
/*!************************************!*\
  !*** ./src/images/delete-icon.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4d8383ac463268d2bbe4.svg";

/***/ }),

/***/ "./src/images/done-icon.svg":
/*!**********************************!*\
  !*** ./src/images/done-icon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a5dd14058d89313e45ed.svg";

/***/ }),

/***/ "./src/images/edit-icon.svg":
/*!**********************************!*\
  !*** ./src/images/edit-icon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f816a0eadc166b24f2c8.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _event_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-manager.js */ "./src/event-manager.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events.js */ "./src/events.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");





function createHeader() {
    const header = document.createElement('header');
    header.textContent = 'To-Do list';
    return header;
}

function createMain() {
    const main = document.createElement('div');
    main.classList.add('main');
    main.appendChild((0,_ui_js__WEBPACK_IMPORTED_MODULE_3__.createProjectArea)());
    main.appendChild((0,_ui_js__WEBPACK_IMPORTED_MODULE_3__.createTaskArea)());
    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.textContent = 'Copyright © 2022 naman1601';
    return footer;
}

function startup() {
    const content = document.querySelector('.content');
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild((0,_ui_js__WEBPACK_IMPORTED_MODULE_3__.createProjectForm)());
    content.appendChild((0,_ui_js__WEBPACK_IMPORTED_MODULE_3__.createTaskForm)());
    content.appendChild(createFooter());
    (0,_event_manager_js__WEBPACK_IMPORTED_MODULE_1__.publish)("POPULATE_PROJECTS");
}

startup();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFX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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN2VBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NKQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUN3QjtBQUN4QjtBQUMwRTs7QUFFL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIseURBQWlCO0FBQ3RDLHFCQUFxQixzREFBYztBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseURBQWlCO0FBQ3pDLHdCQUF3QixzREFBYztBQUN0QztBQUNBLElBQUksMERBQU87QUFDWDs7QUFFQSxVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9wdWJzdWItanMvc3JjL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdW5pcWlkL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ldmVudC1tYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjQyNDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGhlaWdodDogNjlweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1pbi1oZWlnaHQ6IDYyMXB4O1xcbn1cXG5cXG4jcHJvamVjdC1hcmVhIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAyMDcsIDIwNyk7XFxufVxcblxcbiNwcm9qZWN0LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbiNwcm9qZWN0LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI25ldy1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDk5JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNuZXctcHJvamVjdC1idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jbmV3LXByb2plY3QtYnV0dG9uLWljb24ge1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG59XFxuXFxuI3Byb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgaGVpZ2h0OiA0NTRweDtcXG59XFxuXFxuLnByb2plY3QtZWxlbWVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1lbGVtZW50OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgwLCAxODAsIDE4MCk7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmVkaXQtcHJvamVjdC1idXR0b246aG92ZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxufVxcblxcbi5hY3RpdmUtcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzMsIDEzMywgMTMzKTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgICAgXFxufVxcblxcbi5wcm9qZWN0LWZvcm0tYnV0dG9uOmhvdmVyLCAucHJvamVjdC1mb3JtLWJ1dHRvbjpmb2N1cyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLWNvbmZpcm0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMsIDIxNCwgMTMpO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLWNhbmNlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDE0LCAxNCk7XFxufVxcblxcbiN0YXNrLWFyZWEge1xcbiAgICBmbGV4OiAxO1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbiN0YXNrLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmV3LXRhc2stYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jbmV3LXRhc2stYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI25ldy10YXNrLWJ1dHRvbi1pY29uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDM1cHg7XFxufVxcblxcbiN0YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNTEwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi50YXNrLWVsZW1lbnQge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnRhc2stYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZG9uZS10YXNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLnRhc2stZG9uZS1idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XFxufVxcblxcbi50YXNrLWRvbmUtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4udGFzay1kb25lLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGFzay1uYW1lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB3aWR0aDogNzIwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcXG4gICAgZm9udC1zaXplOiAyM3B4O1xcbn1cXG5cXG4udGFzay1zdGF0dXMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcXG59XFxuXFxuLnRhc2stZGVhZGxpbmUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmVkaXQtdGFzay1idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XFxufVxcblxcbi5lZGl0LXRhc2stYnV0dG9uIHtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmVkaXQtdGFzay1idXR0b246aG92ZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmRlbGV0ZS10YXNrLWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDQwcHg7XFxufVxcblxcbi5kZWxldGUtdGFzay1idXR0b24ge1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5kZWxldGUtdGFzay1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG59XFxuXFxuI3Rhc2stZm9ybS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jdGFzay1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuI3Rhc2stbmFtZS1pbnB1dC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI3Rhc2stbmFtZS1pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXG59XFxuXFxuI3Rhc2stcHJpb3JpdHktaW5wdXQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuXFxuI3Rhc2stcHJpb3JpdHktaW5wdXQtbGFiZWwge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxufVxcblxcbiN0YXNrLXByaW9yaXR5LWlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA5MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxufVxcblxcbiN0YXNrLWRhdGUtaW5wdXQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDtcXG59XFxuXFxuI3Rhc2stZGF0ZS1pbnB1dC1sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcXG59XFxuXFxuI3Rhc2stZGF0ZS1pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXG59XFxuXFxuI3Rhc2stZm9ybS1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrLWZvcm0tYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAgICBcXG59XFxuXFxuLnRhc2stZm9ybS1idXR0b246aG92ZXIsIC50YXNrLWZvcm0tYnV0dG9uOmZvY3VzIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcbiN0YXNrLWZvcm0tY29uZmlybSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMywgMjE0LCAxMyk7XFxufVxcblxcbiN0YXNrLWZvcm0tY2FuY2VsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMTQsIDE0KTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI0MjQ7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBoZWlnaHQ6IDQycHg7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFD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ZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI0MjQ7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBoZWlnaHQ6IDY5cHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtaW4taGVpZ2h0OiA2MjFweDtcXG59XFxuXFxuI3Byb2plY3QtYXJlYSB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMjA3LCAyMDcpO1xcbn1cXG5cXG4jcHJvamVjdC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4jcHJvamVjdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbiNuZXctcHJvamVjdC1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA5OSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jbmV3LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI25ldy1wcm9qZWN0LWJ1dHRvbi1pY29uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxufVxcblxcbiNwcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGhlaWdodDogNDU0cHg7XFxufVxcblxcbi5wcm9qZWN0LWVsZW1lbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnByb2plY3QtZWxlbWVudDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MCwgMTgwLCAxODApO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmVkaXQtcHJvamVjdC1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5lZGl0LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbn1cXG5cXG4uYWN0aXZlLXByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMzLCAxMzMsIDEzMyk7XFxufVxcblxcbiNwcm9qZWN0LWZvcm0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3Byb2plY3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbiNwcm9qZWN0LWZvcm0taW5wdXQge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxufVxcblxcbiNwcm9qZWN0LWZvcm0tYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLnByb2plY3QtZm9ybS1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICAgIFxcbn1cXG5cXG4ucHJvamVjdC1mb3JtLWJ1dHRvbjpob3ZlciwgLnByb2plY3QtZm9ybS1idXR0b246Zm9jdXMge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1jb25maXJtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzLCAyMTQsIDEzKTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1jYW5jZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAxNCwgMTQpO1xcbn1cXG5cXG4jdGFzay1hcmVhIHtcXG4gICAgZmxleDogMTtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4jdGFzay1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI25ldy10YXNrLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI25ldy10YXNrLWJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNuZXctdGFzay1idXR0b24taWNvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAzNXB4O1xcbn1cXG5cXG4jdGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDUxMHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4udGFzay1lbGVtZW50IHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi50YXNrLWJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRvbmUtdGFzayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi50YXNrLWRvbmUtYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xcbn1cXG5cXG4udGFzay1kb25lLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnRhc2stZG9uZS1idXR0b246aG92ZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRhc2stbmFtZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgd2lkdGg6IDcyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXG59XFxuXFxuLnRhc2stc3RhdHVzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XFxufVxcblxcbi50YXNrLWRlYWRsaW5lLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5lZGl0LXRhc2stYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uZWRpdC10YXNrLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5lZGl0LXRhc2stYnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5kZWxldGUtdGFzay1idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA0MHB4O1xcbn1cXG5cXG4uZGVsZXRlLXRhc2stYnV0dG9uIHtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uZGVsZXRlLXRhc2stYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxufVxcblxcbiN0YXNrLWZvcm0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3Rhc2stZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbiN0YXNrLW5hbWUtaW5wdXQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbiN0YXNrLW5hbWUtaW5wdXQge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxufVxcblxcbiN0YXNrLXByaW9yaXR5LWlucHV0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcblxcbiN0YXNrLXByaW9yaXR5LWlucHV0LWxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcbn1cXG5cXG4jdGFzay1wcmlvcml0eS1pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogOTBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcbn1cXG5cXG4jdGFzay1kYXRlLWlucHV0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XFxufVxcblxcbiN0YXNrLWRhdGUtaW5wdXQtbGFiZWwge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxufVxcblxcbiN0YXNrLWRhdGUtaW5wdXQge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxufVxcblxcbiN0YXNrLWZvcm0tYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFzay1mb3JtLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgICAgXFxufVxcblxcbi50YXNrLWZvcm0tYnV0dG9uOmhvdmVyLCAudGFzay1mb3JtLWJ1dHRvbjpmb2N1cyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jdGFzay1mb3JtLWNvbmZpcm0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMsIDIxNCwgMTMpO1xcbn1cXG5cXG4jdGFzay1mb3JtLWNhbmNlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDE0LCAxNCk7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNDI0O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgaGVpZ2h0OiA0MnB4O1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAsMjAxMSwyMDEyLDIwMTMsMjAxNCBNb3JnYW4gUm9kZXJpY2sgaHR0cDovL3JvZGVyaWNrLmRrXG4gKiBMaWNlbnNlOiBNSVQgLSBodHRwOi8vbXJnbnJkcmNrLm1pdC1saWNlbnNlLm9yZ1xuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tcm9kZXJpY2svUHViU3ViSlNcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3Rvcnkpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBQdWJTdWIgPSB7fTtcblxuICAgIGlmIChyb290LlB1YlN1Yikge1xuICAgICAgICBQdWJTdWIgPSByb290LlB1YlN1YjtcbiAgICAgICAgY29uc29sZS53YXJuKFwiUHViU3ViIGFscmVhZHkgbG9hZGVkLCB1c2luZyBleGlzdGluZyB2ZXJzaW9uXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QuUHViU3ViID0gUHViU3ViO1xuICAgICAgICBmYWN0b3J5KFB1YlN1Yik7XG4gICAgfVxuICAgIC8vIENvbW1vbkpTIGFuZCBOb2RlLmpzIG1vZHVsZSBzdXBwb3J0XG4gICAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jyl7XG4gICAgICAgIGlmIChtb2R1bGUgIT09IHVuZGVmaW5lZCAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gUHViU3ViOyAvLyBOb2RlLmpzIHNwZWNpZmljIGBtb2R1bGUuZXhwb3J0c2BcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRzLlB1YlN1YiA9IFB1YlN1YjsgLy8gQ29tbW9uSlMgbW9kdWxlIDEuMS4xIHNwZWNcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gUHViU3ViOyAvLyBDb21tb25KU1xuICAgIH1cbiAgICAvLyBBTUQgc3VwcG9ydFxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4gICAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKXtcbiAgICAgICAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gUHViU3ViOyB9KTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby11bmRlZiAqL1xuICAgIH1cblxufSgoIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdyApIHx8IHRoaXMsIGZ1bmN0aW9uIChQdWJTdWIpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBtZXNzYWdlcyA9IHt9LFxuICAgICAgICBsYXN0VWlkID0gLTEsXG4gICAgICAgIEFMTF9TVUJTQ1JJQklOR19NU0cgPSAnKic7XG5cbiAgICBmdW5jdGlvbiBoYXNLZXlzKG9iail7XG4gICAgICAgIHZhciBrZXk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gb2JqKXtcbiAgICAgICAgICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSApe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB0aHJvd3MgdGhlIHBhc3NlZCBleGNlcHRpb24sIGZvciB1c2UgYXMgYXJndW1lbnQgZm9yIHNldFRpbWVvdXRcbiAgICAgKiBAYWxpYXMgdGhyb3dFeGNlcHRpb25cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSBleCBBbiBFcnJvciBvYmplY3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0aHJvd0V4Y2VwdGlvbiggZXggKXtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlVGhyb3dFeGNlcHRpb24oKXtcbiAgICAgICAgICAgIHRocm93IGV4O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGxTdWJzY3JpYmVyV2l0aERlbGF5ZWRFeGNlcHRpb25zKCBzdWJzY3JpYmVyLCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyKCBtZXNzYWdlLCBkYXRhICk7XG4gICAgICAgIH0gY2F0Y2goIGV4ICl7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCB0aHJvd0V4Y2VwdGlvbiggZXggKSwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxsU3Vic2NyaWJlcldpdGhJbW1lZGlhdGVFeGNlcHRpb25zKCBzdWJzY3JpYmVyLCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHN1YnNjcmliZXIoIG1lc3NhZ2UsIGRhdGEgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxpdmVyTWVzc2FnZSggb3JpZ2luYWxNZXNzYWdlLCBtYXRjaGVkTWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICB2YXIgc3Vic2NyaWJlcnMgPSBtZXNzYWdlc1ttYXRjaGVkTWVzc2FnZV0sXG4gICAgICAgICAgICBjYWxsU3Vic2NyaWJlciA9IGltbWVkaWF0ZUV4Y2VwdGlvbnMgPyBjYWxsU3Vic2NyaWJlcldpdGhJbW1lZGlhdGVFeGNlcHRpb25zIDogY2FsbFN1YnNjcmliZXJXaXRoRGVsYXllZEV4Y2VwdGlvbnMsXG4gICAgICAgICAgICBzO1xuXG4gICAgICAgIGlmICggIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggbWVzc2FnZXMsIG1hdGNoZWRNZXNzYWdlICkgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHMgaW4gc3Vic2NyaWJlcnMpe1xuICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc3Vic2NyaWJlcnMsIHMpKXtcbiAgICAgICAgICAgICAgICBjYWxsU3Vic2NyaWJlciggc3Vic2NyaWJlcnNbc10sIG9yaWdpbmFsTWVzc2FnZSwgZGF0YSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZGVsaXZlck5hbWVzcGFjZWQoKXtcbiAgICAgICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXG4gICAgICAgICAgICAvLyBkZWxpdmVyIHRoZSBtZXNzYWdlIGFzIGl0IGlzIG5vd1xuICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UobWVzc2FnZSwgbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyk7XG5cbiAgICAgICAgICAgIC8vIHRyaW0gdGhlIGhpZXJhcmNoeSBhbmQgZGVsaXZlciBtZXNzYWdlIHRvIGVhY2ggbGV2ZWxcbiAgICAgICAgICAgIHdoaWxlKCBwb3NpdGlvbiAhPT0gLTEgKXtcbiAgICAgICAgICAgICAgICB0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCcuJyk7XG4gICAgICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UoIG1lc3NhZ2UsIHRvcGljLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGl2ZXJNZXNzYWdlKG1lc3NhZ2UsIEFMTF9TVUJTQ1JJQklOR19NU0csIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhc0RpcmVjdFN1YnNjcmliZXJzRm9yKCBtZXNzYWdlICkge1xuICAgICAgICB2YXIgdG9waWMgPSBTdHJpbmcoIG1lc3NhZ2UgKSxcbiAgICAgICAgICAgIGZvdW5kID0gQm9vbGVhbihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG1lc3NhZ2VzLCB0b3BpYyApICYmIGhhc0tleXMobWVzc2FnZXNbdG9waWNdKSk7XG5cbiAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1lc3NhZ2VIYXNTdWJzY3JpYmVycyggbWVzc2FnZSApe1xuICAgICAgICB2YXIgdG9waWMgPSBTdHJpbmcoIG1lc3NhZ2UgKSxcbiAgICAgICAgICAgIGZvdW5kID0gaGFzRGlyZWN0U3Vic2NyaWJlcnNGb3IodG9waWMpIHx8IGhhc0RpcmVjdFN1YnNjcmliZXJzRm9yKEFMTF9TVUJTQ1JJQklOR19NU0cpLFxuICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG5cbiAgICAgICAgd2hpbGUgKCAhZm91bmQgJiYgcG9zaXRpb24gIT09IC0xICl7XG4gICAgICAgICAgICB0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuICAgICAgICAgICAgZm91bmQgPSBoYXNEaXJlY3RTdWJzY3JpYmVyc0Zvcih0b3BpYyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgc3luYywgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICBtZXNzYWdlID0gKHR5cGVvZiBtZXNzYWdlID09PSAnc3ltYm9sJykgPyBtZXNzYWdlLnRvU3RyaW5nKCkgOiBtZXNzYWdlO1xuXG4gICAgICAgIHZhciBkZWxpdmVyID0gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApLFxuICAgICAgICAgICAgaGFzU3Vic2NyaWJlcnMgPSBtZXNzYWdlSGFzU3Vic2NyaWJlcnMoIG1lc3NhZ2UgKTtcblxuICAgICAgICBpZiAoICFoYXNTdWJzY3JpYmVycyApe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBzeW5jID09PSB0cnVlICl7XG4gICAgICAgICAgICBkZWxpdmVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCBkZWxpdmVyLCAwICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHVibGlzaGVzIHRoZSBtZXNzYWdlLCBwYXNzaW5nIHRoZSBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgcHVibGlzaFxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gcHVibGlzaFxuICAgICAqIEBwYXJhbSB7fSBkYXRhIFRoZSBkYXRhIHRvIHBhc3MgdG8gc3Vic2NyaWJlcnNcbiAgICAgKiBAcmV0dXJuIHsgQm9vbGVhbiB9XG4gICAgICovXG4gICAgUHViU3ViLnB1Ymxpc2ggPSBmdW5jdGlvbiggbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICByZXR1cm4gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgZmFsc2UsIFB1YlN1Yi5pbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFB1Ymxpc2hlcyB0aGUgbWVzc2FnZSBzeW5jaHJvbm91c2x5LCBwYXNzaW5nIHRoZSBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgcHVibGlzaFN5bmNcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0ge30gZGF0YSBUaGUgZGF0YSB0byBwYXNzIHRvIHN1YnNjcmliZXJzXG4gICAgICogQHJldHVybiB7IEJvb2xlYW4gfVxuICAgICAqL1xuICAgIFB1YlN1Yi5wdWJsaXNoU3luYyA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCB0cnVlLCBQdWJTdWIuaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBwYXNzZWQgZnVuY3Rpb24gdG8gdGhlIHBhc3NlZCBtZXNzYWdlLiBFdmVyeSByZXR1cm5lZCB0b2tlbiBpcyB1bmlxdWUgYW5kIHNob3VsZCBiZSBzdG9yZWQgaWYgeW91IG5lZWQgdG8gdW5zdWJzY3JpYmVcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0geyBGdW5jdGlvbiB9IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBhIG5ldyBtZXNzYWdlIGlzIHB1Ymxpc2hlZFxuICAgICAqIEByZXR1cm4geyBTdHJpbmcgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUgPSBmdW5jdGlvbiggbWVzc2FnZSwgZnVuYyApe1xuICAgICAgICBpZiAoIHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lc3NhZ2UgPSAodHlwZW9mIG1lc3NhZ2UgPT09ICdzeW1ib2wnKSA/IG1lc3NhZ2UudG9TdHJpbmcoKSA6IG1lc3NhZ2U7XG5cbiAgICAgICAgLy8gbWVzc2FnZSBpcyBub3QgcmVnaXN0ZXJlZCB5ZXRcbiAgICAgICAgaWYgKCAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBtZXNzYWdlcywgbWVzc2FnZSApICl7XG4gICAgICAgICAgICBtZXNzYWdlc1ttZXNzYWdlXSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yY2luZyB0b2tlbiBhcyBTdHJpbmcsIHRvIGFsbG93IGZvciBmdXR1cmUgZXhwYW5zaW9ucyB3aXRob3V0IGJyZWFraW5nIHVzYWdlXG4gICAgICAgIC8vIGFuZCBhbGxvdyBmb3IgZWFzeSB1c2UgYXMga2V5IG5hbWVzIGZvciB0aGUgJ21lc3NhZ2VzJyBvYmplY3RcbiAgICAgICAgdmFyIHRva2VuID0gJ3VpZF8nICsgU3RyaW5nKCsrbGFzdFVpZCk7XG4gICAgICAgIG1lc3NhZ2VzW21lc3NhZ2VdW3Rva2VuXSA9IGZ1bmM7XG5cbiAgICAgICAgLy8gcmV0dXJuIHRva2VuIGZvciB1bnN1YnNjcmliaW5nXG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9O1xuXG4gICAgUHViU3ViLnN1YnNjcmliZUFsbCA9IGZ1bmN0aW9uKCBmdW5jICl7XG4gICAgICAgIHJldHVybiBQdWJTdWIuc3Vic2NyaWJlKEFMTF9TVUJTQ1JJQklOR19NU0csIGZ1bmMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBwYXNzZWQgZnVuY3Rpb24gdG8gdGhlIHBhc3NlZCBtZXNzYWdlIG9uY2VcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlT25jZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gc3Vic2NyaWJlIHRvXG4gICAgICogQHBhcmFtIHsgRnVuY3Rpb24gfSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gYSBuZXcgbWVzc2FnZSBpcyBwdWJsaXNoZWRcbiAgICAgKiBAcmV0dXJuIHsgUHViU3ViIH1cbiAgICAgKi9cbiAgICBQdWJTdWIuc3Vic2NyaWJlT25jZSA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBmdW5jICl7XG4gICAgICAgIHZhciB0b2tlbiA9IFB1YlN1Yi5zdWJzY3JpYmUoIG1lc3NhZ2UsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvLyBiZWZvcmUgZnVuYyBhcHBseSwgdW5zdWJzY3JpYmUgbWVzc2FnZVxuICAgICAgICAgICAgUHViU3ViLnVuc3Vic2NyaWJlKCB0b2tlbiApO1xuICAgICAgICAgICAgZnVuYy5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUHViU3ViO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIHN1YnNjcmlwdGlvbnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGNsZWFyQWxsU3Vic2NyaXB0aW9uc1xuICAgICAqL1xuICAgIFB1YlN1Yi5jbGVhckFsbFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjbGVhckFsbFN1YnNjcmlwdGlvbnMoKXtcbiAgICAgICAgbWVzc2FnZXMgPSB7fTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgc3Vic2NyaXB0aW9ucyBieSB0aGUgdG9waWNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGNsZWFyQWxsU3Vic2NyaXB0aW9uc1xuICAgICAqIEByZXR1cm4geyBpbnQgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5jbGVhclN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjbGVhclN1YnNjcmlwdGlvbnModG9waWMpe1xuICAgICAgICB2YXIgbTtcbiAgICAgICAgZm9yIChtIGluIG1lc3NhZ2VzKXtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDApe1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlc1ttXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgICBDb3VudCBzdWJzY3JpcHRpb25zIGJ5IHRoZSB0b3BpY1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgY291bnRTdWJzY3JpcHRpb25zXG4gICAgICogQHJldHVybiB7IEFycmF5IH1cbiAgICAqL1xuICAgIFB1YlN1Yi5jb3VudFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjb3VudFN1YnNjcmlwdGlvbnModG9waWMpe1xuICAgICAgICB2YXIgbTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChtIGluIG1lc3NhZ2VzKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCBtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yICh0b2tlbiBpbiBtZXNzYWdlc1ttXSkge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICAgR2V0cyBzdWJzY3JpcHRpb25zIGJ5IHRoZSB0b3BpY1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgZ2V0U3Vic2NyaXB0aW9uc1xuICAgICovXG4gICAgUHViU3ViLmdldFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBnZXRTdWJzY3JpcHRpb25zKHRvcGljKXtcbiAgICAgICAgdmFyIG07XG4gICAgICAgIHZhciBsaXN0ID0gW107XG4gICAgICAgIGZvciAobSBpbiBtZXNzYWdlcyl7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCBtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwKXtcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2gobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgc3Vic2NyaXB0aW9uc1xuICAgICAqXG4gICAgICogLSBXaGVuIHBhc3NlZCBhIHRva2VuLCByZW1vdmVzIGEgc3BlY2lmaWMgc3Vic2NyaXB0aW9uLlxuICAgICAqXG5cdCAqIC0gV2hlbiBwYXNzZWQgYSBmdW5jdGlvbiwgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCBmdW5jdGlvblxuICAgICAqXG5cdCAqIC0gV2hlbiBwYXNzZWQgYSB0b3BpYywgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCB0b3BpYyAoaGllcmFyY2h5KVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlT25jZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB8IEZ1bmN0aW9uIH0gdmFsdWUgQSB0b2tlbiwgZnVuY3Rpb24gb3IgdG9waWMgdG8gdW5zdWJzY3JpYmUgZnJvbVxuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgd2l0aCBhIHRva2VuXG4gICAgICogdmFyIHRva2VuID0gUHViU3ViLnN1YnNjcmliZSgnbXl0b3BpYycsIG15RnVuYyk7XG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKHRva2VuKTtcbiAgICAgKiBAZXhhbXBsZSAvLyBVbnN1YnNjcmliaW5nIHdpdGggYSBmdW5jdGlvblxuICAgICAqIFB1YlN1Yi51bnN1YnNjcmliZShteUZ1bmMpO1xuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgZnJvbSBhIHRvcGljXG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKCdteXRvcGljJyk7XG4gICAgICovXG4gICAgUHViU3ViLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICB2YXIgZGVzY2VuZGFudFRvcGljRXhpc3RzID0gZnVuY3Rpb24odG9waWMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbTtcbiAgICAgICAgICAgICAgICBmb3IgKCBtIGluIG1lc3NhZ2VzICl7XG4gICAgICAgICAgICAgICAgICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCBtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhIGRlc2NlbmRhbnQgb2YgdGhlIHRvcGljIGV4aXN0czpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzVG9waWMgICAgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCB2YWx1ZSkgfHwgZGVzY2VuZGFudFRvcGljRXhpc3RzKHZhbHVlKSApLFxuICAgICAgICAgICAgaXNUb2tlbiAgICA9ICFpc1RvcGljICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycsXG4gICAgICAgICAgICBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nLFxuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2UsXG4gICAgICAgICAgICBtLCBtZXNzYWdlLCB0O1xuXG4gICAgICAgIGlmIChpc1RvcGljKXtcbiAgICAgICAgICAgIFB1YlN1Yi5jbGVhclN1YnNjcmlwdGlvbnModmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICggbSBpbiBtZXNzYWdlcyApe1xuICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG1lc3NhZ2VzLCBtICkgKXtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZXNbbV07XG5cbiAgICAgICAgICAgICAgICBpZiAoIGlzVG9rZW4gJiYgbWVzc2FnZVt2YWx1ZV0gKXtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VbdmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9rZW5zIGFyZSB1bmlxdWUsIHNvIHdlIGNhbiBqdXN0IHN0b3AgaGVyZVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKCB0IGluIG1lc3NhZ2UgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZSwgdCkgJiYgbWVzc2FnZVt0XSA9PT0gdmFsdWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlW3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59KSk7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogXG4oVGhlIE1JVCBMaWNlbnNlKVxuQ29weXJpZ2h0IChjKSAyMDE0LTIwMjEgSGFsw6FzeiDDgWTDoW0gPGFkYW1AYWltZm9ybS5jb20+XG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vICBVbmlxdWUgSGV4YXRyaWRlY2ltYWwgSUQgR2VuZXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gIERlcGVuZGVuY2llc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG52YXIgcGlkID0gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MucGlkID8gcHJvY2Vzcy5waWQudG9TdHJpbmcoMzYpIDogJycgO1xudmFyIGFkZHJlc3MgPSAnJztcbmlmKHR5cGVvZiBfX3dlYnBhY2tfcmVxdWlyZV9fICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiByZXF1aXJlICE9PSAndW5kZWZpbmVkJyl7XG4gICAgdmFyIG1hYyA9ICcnLCBvcyA9IHJlcXVpcmUoJ29zJyk7IFxuICAgIGlmKG9zLm5ldHdvcmtJbnRlcmZhY2VzKSB2YXIgbmV0d29ya0ludGVyZmFjZXMgPSBvcy5uZXR3b3JrSW50ZXJmYWNlcygpO1xuICAgIGlmKG5ldHdvcmtJbnRlcmZhY2VzKXtcbiAgICAgICAgbG9vcDpcbiAgICAgICAgZm9yKGxldCBpbnRlcmZhY2Vfa2V5IGluIG5ldHdvcmtJbnRlcmZhY2VzKXtcbiAgICAgICAgICAgIGNvbnN0IG5ldHdvcmtJbnRlcmZhY2UgPSBuZXR3b3JrSW50ZXJmYWNlc1tpbnRlcmZhY2Vfa2V5XTtcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IG5ldHdvcmtJbnRlcmZhY2UubGVuZ3RoO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBpZihuZXR3b3JrSW50ZXJmYWNlW2ldICE9PSB1bmRlZmluZWQgJiYgbmV0d29ya0ludGVyZmFjZVtpXS5tYWMgJiYgbmV0d29ya0ludGVyZmFjZVtpXS5tYWMgIT0gJzAwOjAwOjAwOjAwOjAwOjAwJyl7XG4gICAgICAgICAgICAgICAgICAgIG1hYyA9IG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjOyBicmVhayBsb29wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhZGRyZXNzID0gbWFjID8gcGFyc2VJbnQobWFjLnJlcGxhY2UoL1xcOnxcXEQrL2dpLCAnJykpLnRvU3RyaW5nKDM2KSA6ICcnIDtcbiAgICB9XG59IFxuXG4vLyAgRXhwb3J0c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5tb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgYWRkcmVzcyArIHBpZCArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cbm1vZHVsZS5leHBvcnRzLnByb2Nlc3MgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgcGlkICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxubW9kdWxlLmV4cG9ydHMudGltZSAgICA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5cbi8vICBIZWxwZXJzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmZ1bmN0aW9uIG5vdygpe1xuICAgIHZhciB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgbGFzdCA9IG5vdy5sYXN0IHx8IHRpbWU7XG4gICAgcmV0dXJuIG5vdy5sYXN0ID0gdGltZSA+IGxhc3QgPyB0aW1lIDogbGFzdCArIDE7XG59XG4iLCJpbXBvcnQgeyBQdWJTdWIgfSBmcm9tIFwicHVic3ViLWpzXCI7XG5cbmZ1bmN0aW9uIHN1YnNjcmliZShldmVudCwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gUHViU3ViLnN1YnNjcmliZShldmVudCwgY2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiBwdWJsaXNoKGV2ZW50LCBkYXRhKSB7XG4gICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKGV2ZW50LCBkYXRhKTtcbn1cblxuZXhwb3J0IHsgc3Vic2NyaWJlLCBwdWJsaXNoIH07IiwiaW1wb3J0IHsgc3Vic2NyaWJlIH0gZnJvbSBcIi4vZXZlbnQtbWFuYWdlci5qc1wiO1xuXG5pbXBvcnQge1xuICAgIGFjdGl2YXRlUG9qZWN0Rm9ybSxcbiAgICBleGl0UHJvamVjdEZvcm0sXG4gICAgc2V0QWN0aXZlUHJvamVjdCxcbiAgICBzd2l0Y2hUb1Byb2plY3QsXG4gICAgdXBkYXRlUHJvamVjdENvbnRhaW5lcixcbiAgICB1cGRhdGVUYXNrQ29udGFpbmVyLFxuICAgIGFjdGl2YXRlVGFza0Zvcm0sXG4gICAgZXhpdFRhc2tGb3JtLFxuICAgIGZpbGxUYXNrRm9ybSB9XG5mcm9tIFwiLi91aS5qc1wiO1xuXG5pbXBvcnQgeyBhZGRQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCByZW5hbWVQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdExpc3RGcm9tU3RvcmFnZSwgdXBkYXRlU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcbmltcG9ydCB7IGFkZFRhc2ssIGRlbGV0ZVRhc2ssIHVwZGF0ZVRhc2ssIHRvZ2dsZVRhc2tEb25lIH0gZnJvbSBcIi4vdGFzay5qc1wiO1xuXG5mdW5jdGlvbiBnZXRQcm9qZWN0TGlzdCAoKSB7XG4gICAgcmV0dXJuIGdldFByb2plY3RMaXN0RnJvbVN0b3JhZ2UoKTtcbn1cblxuc3Vic2NyaWJlKFwiQURERURfUFJPSkVDVFwiLCBmdW5jdGlvbiAoZXZlbnQsIHtwcm9qZWN0TGlzdCwgbmV3UHJvamVjdFVJRH0pIHtcbiAgICB1cGRhdGVTdG9yYWdlKHByb2plY3RMaXN0KTtcbiAgICB1cGRhdGVQcm9qZWN0Q29udGFpbmVyKCk7XG4gICAgc3dpdGNoVG9Qcm9qZWN0KG5ld1Byb2plY3RVSUQpO1xufSk7XG5cbnN1YnNjcmliZShcIkRFTEVURURfUFJPSkVDVFwiLCBmdW5jdGlvbiAoZXZlbnQsIHByb2plY3RMaXN0KSB7XG4gICAgdXBkYXRlU3RvcmFnZShwcm9qZWN0TGlzdCk7XG4gICAgdXBkYXRlUHJvamVjdENvbnRhaW5lcigpO1xuICAgIHN3aXRjaFRvUHJvamVjdChwcm9qZWN0TGlzdFswXS5VSUQpO1xufSk7XG5cbnN1YnNjcmliZShcIlJFTkFNRURfUFJPSkVDVFwiLCBmdW5jdGlvbiAoZXZlbnQsIHtwcm9qZWN0TGlzdCwgcmVuYW1lZFByb2plY3RVSUR9KSB7XG4gICAgdXBkYXRlU3RvcmFnZShwcm9qZWN0TGlzdCk7XG4gICAgdXBkYXRlUHJvamVjdENvbnRhaW5lcigpO1xuICAgIHN3aXRjaFRvUHJvamVjdChyZW5hbWVkUHJvamVjdFVJRCk7XG59KTtcblxuc3Vic2NyaWJlKFwiTkVXX1BST0pFQ1RfQlVUVE9OX0NMSUNLRURcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZm9ybVwiKTtcbiAgICBwcm9qZWN0Rm9ybS5kYXRhc2V0Lm5ld1Byb2plY3QgPSAndHJ1ZSc7XG4gICAgYWN0aXZhdGVQb2plY3RGb3JtKCk7XG59KTtcblxuc3Vic2NyaWJlKFwiUFJPSkVDVF9GT1JNX0NPTkZJUk1fQ0xJQ0tFRFwiLCBmdW5jdGlvbiAoZXZlbnQsIHByb2plY3RGb3JtKSB7XG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgaWYocHJvamVjdEZvcm0uZGF0YXNldC5uZXdQcm9qZWN0ID09PSAndHJ1ZScpIHtcbiAgICAgICAgcmVzdWx0ID0gYWRkUHJvamVjdChwcm9qZWN0Rm9ybS5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZm9ybS1pbnB1dFwiKS52YWx1ZSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwcm9qZWN0VUlEID0gcHJvamVjdEZvcm0uZGF0YXNldC5wcm9qZWN0VWlkO1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3RGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1mb3JtLWlucHV0XCIpLnZhbHVlO1xuICAgICAgICByZXN1bHQgPSByZW5hbWVQcm9qZWN0KHByb2plY3RVSUQsIHByb2plY3ROYW1lKTtcbiAgICB9XG5cbiAgICBpZihyZXN1bHQpIHtcbiAgICAgICAgZXhpdFByb2plY3RGb3JtKCk7XG4gICAgfVxufSk7XG5cbnN1YnNjcmliZShcIlBST0pFQ1RfRk9STV9DQU5DRUxfQ0xJQ0tFRFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBleGl0UHJvamVjdEZvcm0oKTtcbn0pO1xuXG5zdWJzY3JpYmUoXCJTV0lUQ0hfVE9fUFJPSkVDVFwiLCBmdW5jdGlvbiAoZXZlbnQsIHByb2plY3RVSUQpIHtcbiAgICBzZXRBY3RpdmVQcm9qZWN0KHByb2plY3RVSUQpO1xuICAgIHVwZGF0ZVRhc2tDb250YWluZXIocHJvamVjdFVJRCk7XG59KTtcblxuc3Vic2NyaWJlKFwiUFJPSkVDVF9FTEVNRU5UX0NMSUNLRURcIiwgZnVuY3Rpb24gKGV2ZW50LCBwcm9qZWN0VUlEKSB7XG4gICAgc3dpdGNoVG9Qcm9qZWN0KHByb2plY3RVSUQpO1xufSk7XG5cbnN1YnNjcmliZShcIkRFTEVURV9QUk9KRUNUX0JVVFRPTl9DTElDS0VEXCIsIGZ1bmN0aW9uIChldmVudCwgcHJvamVjdFVJRCkge1xuICAgIGRlbGV0ZVByb2plY3QocHJvamVjdFVJRCk7XG59KTtcblxuc3Vic2NyaWJlKFwiRURJVF9QUk9KRUNUX0JVVFRPTl9DTElDS0VEXCIsIGZ1bmN0aW9uIChldmVudCwgcHJvamVjdFVJRCkge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZ2V0UHJvamVjdExpc3QoKTtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1mb3JtXCIpO1xuICAgIHByb2plY3RGb3JtLmRhdGFzZXQubmV3UHJvamVjdCA9ICdmYWxzZSc7XG4gICAgcHJvamVjdEZvcm0uZGF0YXNldC5wcm9qZWN0VWlkID0gcHJvamVjdFVJRDtcbiAgICBwcm9qZWN0Rm9ybS5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZm9ybS1pbnB1dFwiKS52YWx1ZSA9IHByb2plY3RMaXN0LmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LlVJRCA9PT0gcHJvamVjdFVJRCkubmFtZTtcbiAgICBhY3RpdmF0ZVBvamVjdEZvcm0oKTtcbn0pO1xuXG5zdWJzY3JpYmUoXCJBRERFRF9UQVNLXCIsIGZ1bmN0aW9uIChldmVudCwge3Byb2plY3RMaXN0LCBwcm9qZWN0VUlEfSkge1xuICAgIHVwZGF0ZVN0b3JhZ2UocHJvamVjdExpc3QpO1xuICAgIHVwZGF0ZVRhc2tDb250YWluZXIocHJvamVjdFVJRCk7XG59KTtcblxuc3Vic2NyaWJlKFwiREVMRVRFRF9UQVNLXCIsIGZ1bmN0aW9uIChldmVudCwge3Byb2plY3RMaXN0LCBwcm9qZWN0VUlEfSkge1xuICAgIHVwZGF0ZVN0b3JhZ2UocHJvamVjdExpc3QpO1xuICAgIHVwZGF0ZVRhc2tDb250YWluZXIocHJvamVjdFVJRCk7XG59KTtcblxuc3Vic2NyaWJlKFwiVVBEQVRFRF9UQVNLXCIsIGZ1bmN0aW9uIChldmVudCwge3Byb2plY3RMaXN0LCBwcm9qZWN0VUlEfSkge1xuICAgIHVwZGF0ZVN0b3JhZ2UocHJvamVjdExpc3QpO1xuICAgIHVwZGF0ZVRhc2tDb250YWluZXIocHJvamVjdFVJRCk7XG59KTtcblxuc3Vic2NyaWJlKFwiVE9HR0xFRF9UQVNLX0RPTkVcIiwgZnVuY3Rpb24gKGV2ZW50LCB7cHJvamVjdExpc3QsIHByb2plY3RVSUR9KSB7XG4gICAgdXBkYXRlU3RvcmFnZShwcm9qZWN0TGlzdCk7XG4gICAgdXBkYXRlVGFza0NvbnRhaW5lcihwcm9qZWN0VUlEKTtcbn0pO1xuXG5zdWJzY3JpYmUoXCJET05FX1RBU0tfQlVUVE9OX0NMSUNLRURcIiwgZnVuY3Rpb24gKGV2ZW50LCB7cHJvamVjdFVJRCwgdGFza1VJRH0pIHtcbiAgICB0b2dnbGVUYXNrRG9uZShwcm9qZWN0VUlELCB0YXNrVUlEKTtcbn0pO1xuXG5zdWJzY3JpYmUoXCJFRElUX1RBU0tfQlVUVE9OX0NMSUNLRURcIiwgZnVuY3Rpb24oZXZlbnQsIHtwcm9qZWN0VUlELCB0YXNrVUlEfSkge1xuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWZvcm1cIik7XG4gICAgdGFza0Zvcm0uZGF0YXNldC5wcm9qZWN0VWlkID0gcHJvamVjdFVJRDtcbiAgICB0YXNrRm9ybS5kYXRhc2V0LnRhc2tVaWQgPSB0YXNrVUlEO1xuICAgIHRhc2tGb3JtLmRhdGFzZXQubmV3VGFzayA9ICdmYWxzZSc7XG4gICAgZmlsbFRhc2tGb3JtKHByb2plY3RVSUQsIHRhc2tVSUQpO1xuICAgIGFjdGl2YXRlVGFza0Zvcm0oKTtcbn0pO1xuXG5zdWJzY3JpYmUoXCJERUxFVEVfVEFTS19CVVRUT05fQ0xJQ0tFRFwiLCBmdW5jdGlvbiAoZXZlbnQsIHtwcm9qZWN0VUlELCB0YXNrVUlEfSkge1xuICAgIGRlbGV0ZVRhc2socHJvamVjdFVJRCwgdGFza1VJRCk7XG59KTtcblxuc3Vic2NyaWJlKFwiTkVXX1RBU0tfQlVUVE9OX0NMSUNLRURcIiwgZnVuY3Rpb24gKGV2ZW50LCBwcm9qZWN0VUlEKSB7XG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZm9ybVwiKTtcbiAgICB0YXNrRm9ybS5kYXRhc2V0LnByb2plY3RVaWQgPSBwcm9qZWN0VUlEO1xuICAgIHRhc2tGb3JtLmRhdGFzZXQubmV3VGFzayA9ICd0cnVlJztcbiAgICBhY3RpdmF0ZVRhc2tGb3JtKCk7XG59KTtcblxuc3Vic2NyaWJlKFwiVEFTS19GT1JNX0NPTkZJUk1fQ0xJQ0tFRFwiLCBmdW5jdGlvbiAoZXZlbnQsIHRhc2tGb3JtKSB7XG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvamVjdFVJRCA9IHRhc2tGb3JtLmRhdGFzZXQucHJvamVjdFVpZDtcbiAgICBjb25zdCB0YXNrTmFtZSA9IHRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1uYW1lLWlucHV0XCIpLnZhbHVlO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IHRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1wcmlvcml0eS1pbnB1dFwiKS52YWx1ZTtcbiAgICBjb25zdCB0YXNrRGVhZGxpbmUgPSB0YXNrRm9ybS5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGF0ZS1pbnB1dFwiKS52YWx1ZTtcblxuICAgIGlmKHRhc2tGb3JtLmRhdGFzZXQubmV3VGFzayA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHJlc3VsdCA9IGFkZFRhc2socHJvamVjdFVJRCwgdGFza05hbWUsIHRhc2tQcmlvcml0eSwgdGFza0RlYWRsaW5lKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRhc2tVSUQgPSB0YXNrRm9ybS5kYXRhc2V0LnRhc2tVaWQ7XG4gICAgICAgIHJlc3VsdCA9IHVwZGF0ZVRhc2socHJvamVjdFVJRCwgdGFza1VJRCwgdGFza05hbWUsIHRhc2tQcmlvcml0eSwgdGFza0RlYWRsaW5lKTtcbiAgICB9XG5cbiAgICBpZihyZXN1bHQpIHtcbiAgICAgICAgZXhpdFRhc2tGb3JtKCk7XG4gICAgfVxufSk7XG5cbnN1YnNjcmliZShcIlRBU0tfRk9STV9DQU5DRUxfQ0xJQ0tFRFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBleGl0VGFza0Zvcm0oKTtcbn0pO1xuXG5zdWJzY3JpYmUoXCJQT1BVTEFURV9QUk9KRUNUU1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYoZ2V0UHJvamVjdExpc3QoKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYWRkUHJvamVjdCgnRGVmYXVsdCcpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdXBkYXRlUHJvamVjdENvbnRhaW5lcigpO1xuICAgICAgICBzd2l0Y2hUb1Byb2plY3QoZ2V0UHJvamVjdExpc3QoKVswXS5VSUQpO1xuICAgIH1cbn0pO1xuXG5leHBvcnQgeyBnZXRQcm9qZWN0TGlzdCB9OyIsImltcG9ydCB1bmlxaWQgZnJvbSAndW5pcWlkJztcbmltcG9ydCB7IHB1Ymxpc2ggfSBmcm9tICcuL2V2ZW50LW1hbmFnZXIuanMnO1xuaW1wb3J0IHsgZ2V0UHJvamVjdExpc3QgfSBmcm9tICcuL2V2ZW50cy5qcyc7XG5cbmZ1bmN0aW9uIHByb2plY3RGYWN0b3J5KHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IHtcbiAgICAgICAgVUlEOiB1bmlxaWQoKSxcbiAgICAgICAgbmFtZTogcHJvamVjdE5hbWUsXG4gICAgICAgIHRhc2tzOiBbXVxuICAgIH07XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGlmKHByb2plY3ROYW1lID09PSAnJykge1xuICAgICAgICBhbGVydCgnUHJvamVjdCBuYW1lIGNhbm5vdCBiZSBlbXB0eScpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHByb2plY3RMaXN0ID0gZ2V0UHJvamVjdExpc3QoKTtcblxuICAgIGlmIChwcm9qZWN0TGlzdC5zb21lKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBwcm9qZWN0TmFtZSkpIHtcbiAgICAgICAgYWxlcnQoJ1Byb2plY3QgJyArIHByb2plY3ROYW1lICsgJyBhbHJlYWR5IGV4aXN0cycpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHByb2plY3ROYW1lKTtcbiAgICBwcm9qZWN0TGlzdC5wdXNoKG5ld1Byb2plY3QpO1xuICAgIHB1Ymxpc2goJ0FEREVEX1BST0pFQ1QnLCB7cHJvamVjdExpc3QsIG5ld1Byb2plY3RVSUQ6IG5ld1Byb2plY3QuVUlEfSk7XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdFVJRCkge1xuICAgIHZhciBwcm9qZWN0TGlzdCA9IGdldFByb2plY3RMaXN0KCk7XG5cbiAgICBjb25zdCB0cnlpbmdUb0RlbGV0ZURlZmF1bHRQcm9qZWN0ID0gcHJvamVjdExpc3Quc29tZShwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gJ0RlZmF1bHQnICYmIHByb2plY3QuVUlEID09PSBwcm9qZWN0VUlEKTtcblxuICAgIGlmKHRyeWluZ1RvRGVsZXRlRGVmYXVsdFByb2plY3QpIHtcbiAgICAgICAgYWxlcnQoJ0Nhbm5vdCBkZWxldGUgRGVmYXVsdCBwcm9qZWN0Jyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcm9qZWN0TGlzdCA9IHByb2plY3RMaXN0LmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QuVUlEICE9PSBwcm9qZWN0VUlEKTtcbiAgICBwdWJsaXNoKCdERUxFVEVEX1BST0pFQ1QnLCBwcm9qZWN0TGlzdCk7XG59XG5cbmZ1bmN0aW9uIHJlbmFtZVByb2plY3QocHJvamVjdFVJRCwgbmV3TmFtZSkge1xuICAgIHZhciBwcm9qZWN0TGlzdCA9IGdldFByb2plY3RMaXN0KCk7XG5cbiAgICBjb25zdCB0cnlpbmdUb1JlbmFtZURlZmF1bHRQcm9qZWN0ID0gcHJvamVjdExpc3Quc29tZShwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gJ0RlZmF1bHQnICYmIHByb2plY3QuVUlEID09PSBwcm9qZWN0VUlEKTtcblxuICAgIGlmKHRyeWluZ1RvUmVuYW1lRGVmYXVsdFByb2plY3QpIHtcbiAgICAgICAgYWxlcnQoJ0Nhbm5vdCByZW5hbWUgRGVmYXVsdCBwcm9qZWN0Jyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZihwcm9qZWN0TGlzdC5zb21lKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBuZXdOYW1lICYmIHByb2plY3QuVUlEICE9PSBwcm9qZWN0VUlEKSkge1xuICAgICAgICBhbGVydCgnUHJvamVjdCAnICsgbmV3TmFtZSArICcgYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKHByb2plY3RMaXN0W2luZGV4XS5VSUQgPT0gcHJvamVjdFVJRCkge1xuICAgICAgICAgICAgcHJvamVjdExpc3RbaW5kZXhdLm5hbWUgPSBuZXdOYW1lO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaXNoKCdSRU5BTUVEX1BST0pFQ1QnLCB7cHJvamVjdExpc3QsIHJlbmFtZWRQcm9qZWN0VUlEIDogcHJvamVjdFVJRH0pO1xuICAgIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgeyBhZGRQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCByZW5hbWVQcm9qZWN0IH07IiwiZnVuY3Rpb24gdXBkYXRlU3RvcmFnZShwcm9qZWN0TGlzdCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvLWxpc3QtcHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0TGlzdEZyb21TdG9yYWdlICgpIHtcbiAgICBpZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8tbGlzdC1wcm9qZWN0cycpKSB7XG4gICAgICAgIHJldHVybiBbXTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvLWxpc3QtcHJvamVjdHMnKSk7XG4gICAgfVxufVxuXG5leHBvcnQgeyB1cGRhdGVTdG9yYWdlLCBnZXRQcm9qZWN0TGlzdEZyb21TdG9yYWdlIH07IiwiaW1wb3J0IHsgcHVibGlzaCB9IGZyb20gXCIuL2V2ZW50LW1hbmFnZXIuanNcIjtcbmltcG9ydCB7IGdldFByb2plY3RMaXN0IH0gZnJvbSBcIi4vZXZlbnRzLmpzXCI7XG5pbXBvcnQgdW5pcWlkIGZyb20gXCJ1bmlxaWRcIjtcblxuZnVuY3Rpb24gdGFza0ZhY3RvcnkodGFza05hbWUsIHRhc2tQcmlvcml0eSwgdGFza0RlYWRsaW5lLCBwcm9qZWN0VUlEKSB7XG4gICAgY29uc3QgdGFzayA9IHtcbiAgICAgICAgVUlEOiB1bmlxaWQoKSxcbiAgICAgICAgbmFtZTogdGFza05hbWUsXG4gICAgICAgIHByaW9yaXR5OiB0YXNrUHJpb3JpdHksXG4gICAgICAgIGRlYWRsaW5lOiB0YXNrRGVhZGxpbmUsXG4gICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICBwcm9qZWN0VUlEOiBwcm9qZWN0VUlEXG4gICAgfTtcblxuICAgIHJldHVybiB0YXNrO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrVG9Qcm9qZWN0KG5ld1Rhc2ssIHByb2plY3RVSUQpIHtcbiAgICB2YXIgcHJvamVjdExpc3QgPSBnZXRQcm9qZWN0TGlzdCgpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBpZiAocHJvamVjdExpc3RbaW5kZXhdLlVJRCA9PSBwcm9qZWN0VUlEKSB7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdFtpbmRleF0udGFza3MucHVzaChuZXdUYXNrKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGlzaCgnQURERURfVEFTSycsIHtwcm9qZWN0TGlzdCwgcHJvamVjdFVJRH0pO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVUYXNrRG9uZShwcm9qZWN0VUlELCB0YXNrVUlEKSB7XG4gICAgdmFyIHByb2plY3RMaXN0ID0gZ2V0UHJvamVjdExpc3QoKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJvamVjdExpc3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGlmIChwcm9qZWN0TGlzdFtpbmRleF0uVUlEID09IHByb2plY3RVSUQpIHtcbiAgICAgICAgICAgIHByb2plY3RMaXN0W2luZGV4XS50YXNrcyA9IHByb2plY3RMaXN0W2luZGV4XS50YXNrcy5tYXAodGFzayA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2suVUlEID09IHRhc2tVSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5kb25lID0gIXRhc2suZG9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1Ymxpc2goJ1RPR0dMRURfVEFTS19ET05FJywge3Byb2plY3RMaXN0LCBwcm9qZWN0VUlEfSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrVmFsaWRpdHkodGFza05hbWUsIHRhc2tEZWFkbGluZSkge1xuICAgIGlmKHRhc2tOYW1lID09ICcnIHx8IChuZXcgRGF0ZSh0YXNrRGVhZGxpbmUpKSA9PSAnSW52YWxpZCBEYXRlJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2socHJvamVjdFVJRCwgdGFza1VJRCwgdGFza05hbWUsIHRhc2tQcmlvcml0eSwgdGFza0RlYWRsaW5lKSB7XG4gICAgaWYoIWNoZWNrVmFsaWRpdHkodGFza05hbWUsIHRhc2tEZWFkbGluZSkpIHtcbiAgICAgICAgYWxlcnQoJ1Rhc2sgbmFtZSBhbmQgZGVhZGxpbmUgYXJlIHJlcXVpcmVkIScpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHByb2plY3RMaXN0ID0gZ2V0UHJvamVjdExpc3QoKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJvamVjdExpc3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGlmIChwcm9qZWN0TGlzdFtpbmRleF0uVUlEID09IHByb2plY3RVSUQpIHtcbiAgICAgICAgICAgIHByb2plY3RMaXN0W2luZGV4XS50YXNrcyA9IHByb2plY3RMaXN0W2luZGV4XS50YXNrcy5tYXAodGFzayA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2suVUlEID09IHRhc2tVSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5uYW1lID0gdGFza05hbWU7XG4gICAgICAgICAgICAgICAgICAgIHRhc2sucHJpb3JpdHkgPSB0YXNrUHJpb3JpdHk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2suZGVhZGxpbmUgPSB0YXNrRGVhZGxpbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaXNoKCdVUERBVEVEX1RBU0snLCB7cHJvamVjdExpc3QsIHByb2plY3RVSUR9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gYWRkVGFzayhwcm9qZWN0VUlELCB0YXNrTmFtZSwgdGFza1ByaW9yaXR5LCB0YXNrRGVhZGxpbmUpIHtcbiAgICBpZiAoIWNoZWNrVmFsaWRpdHkodGFza05hbWUsIHRhc2tEZWFkbGluZSkpIHtcbiAgICAgICAgYWxlcnQoJ1Rhc2sgbmFtZSBhbmQgZGVhZGxpbmUgYXJlIHJlcXVpcmVkIScpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3VGFzayA9IHRhc2tGYWN0b3J5KHRhc2tOYW1lLCB0YXNrUHJpb3JpdHksIHRhc2tEZWFkbGluZSwgcHJvamVjdFVJRCk7XG4gICAgYWRkVGFza1RvUHJvamVjdChuZXdUYXNrLCBwcm9qZWN0VUlEKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayhwcm9qZWN0VUlELCB0YXNrVUlEKSB7XG4gICAgdmFyIHByb2plY3RMaXN0ID0gZ2V0UHJvamVjdExpc3QoKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJvamVjdExpc3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGlmIChwcm9qZWN0TGlzdFtpbmRleF0uVUlEID09IHByb2plY3RVSUQpIHtcbiAgICAgICAgICAgIHByb2plY3RMaXN0W2luZGV4XS50YXNrcyA9IHByb2plY3RMaXN0W2luZGV4XS50YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLlVJRCAhPT0gdGFza1VJRCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaXNoKCdERUxFVEVEX1RBU0snLCB7cHJvamVjdExpc3QsIHByb2plY3RVSUR9KTtcbn1cblxuZXhwb3J0IHsgYWRkVGFzaywgZGVsZXRlVGFzaywgdXBkYXRlVGFzaywgdG9nZ2xlVGFza0RvbmUgfTsiLCJpbXBvcnQgeyBwdWJsaXNoIH0gZnJvbSAnLi9ldmVudC1tYW5hZ2VyLmpzJztcbmltcG9ydCB7IGdldFByb2plY3RMaXN0IH0gZnJvbSAnLi9ldmVudHMuanMnO1xuaW1wb3J0IGRlbGV0ZUltYWdlIGZyb20gJy4vaW1hZ2VzL2RlbGV0ZS1pY29uLnN2Zyc7XG5pbXBvcnQgYWRkSW1hZ2UgZnJvbSAnLi9pbWFnZXMvYWRkLWljb24uc3ZnJztcbmltcG9ydCBlZGl0SW1hZ2UgZnJvbSAnLi9pbWFnZXMvZWRpdC1pY29uLnN2Zyc7XG5pbXBvcnQgZG9uZUltYWdlIGZyb20gJy4vaW1hZ2VzL2RvbmUtaWNvbi5zdmcnO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0RWxlbWVudChwcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWVsZW1lbnQnKTtcbiAgICBwcm9qZWN0RWxlbWVudC5kYXRhc2V0LnByb2plY3RVaWQgPSBwcm9qZWN0LlVJRDtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lJyk7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgcHJvamVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuXG4gICAgY29uc3QgZWRpdFByb2plY3RCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlZGl0UHJvamVjdEJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdlZGl0LXByb2plY3QtYnV0dG9uLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgZWRpdFByb2plY3RCdXR0b24gPSBuZXcgSW1hZ2UoKTtcbiAgICBlZGl0UHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0LXByb2plY3QtYnV0dG9uJyk7XG4gICAgZWRpdFByb2plY3RCdXR0b24uc3JjID0gZWRpdEltYWdlO1xuXG4gICAgZWRpdFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHB1Ymxpc2goJ0VESVRfUFJPSkVDVF9CVVRUT05fQ0xJQ0tFRCcsIHByb2plY3QuVUlEKTtcbiAgICB9KTtcblxuICAgIGVkaXRQcm9qZWN0QnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0QnV0dG9uKTtcbiAgICBwcm9qZWN0RWxlbWVudC5hcHBlbmRDaGlsZChlZGl0UHJvamVjdEJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkZWxldGUtcHJvamVjdC1idXR0b24tY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gbmV3IEltYWdlKCk7XG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtcHJvamVjdC1idXR0b24nKTtcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLnNyYyA9IGRlbGV0ZUltYWdlO1xuXG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHVibGlzaCgnREVMRVRFX1BST0pFQ1RfQlVUVE9OX0NMSUNLRUQnLCBwcm9qZWN0LlVJRCk7XG4gICAgfSk7XG5cbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdXR0b24pO1xuICAgIHByb2plY3RFbGVtZW50LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdXR0b25Db250YWluZXIpO1xuXG4gICAgcHJvamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQgIT09IGRlbGV0ZVByb2plY3RCdXR0b24gJiYgZS50YXJnZXQgIT09IGVkaXRQcm9qZWN0QnV0dG9uKSB7XG4gICAgICAgICAgICBwdWJsaXNoKCdQUk9KRUNUX0VMRU1FTlRfQ0xJQ0tFRCcsIHByb2plY3QuVUlEKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb2plY3RFbGVtZW50O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0Q29udGFpbmVyKCkge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZ2V0UHJvamVjdExpc3QoKTtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtY29udGFpbmVyJyk7XG4gICAgcHJvamVjdENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGNyZWF0ZVByb2plY3RFbGVtZW50KHByb2plY3QpO1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0VUlEKSB7XG4gICAgY29uc3QgcHJvamVjdEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtZWxlbWVudCcpO1xuICAgIHByb2plY3RFbGVtZW50cy5mb3JFYWNoKHByb2plY3RFbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKHByb2plY3RFbGVtZW50LmRhdGFzZXQucHJvamVjdFVpZCA9PT0gcHJvamVjdFVJRCkge1xuICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXByb2plY3QnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1wcm9qZWN0Jyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc3dpdGNoVG9Qcm9qZWN0KHByb2plY3RVSUQpIHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGdldFByb2plY3RMaXN0KCk7XG4gICAgY29uc3QgZm91bmRQcm9qZWN0ID0gcHJvamVjdExpc3Quc29tZShwcm9qZWN0ID0+IHByb2plY3QuVUlEID09PSBwcm9qZWN0VUlEKTtcblxuICAgIGlmICghZm91bmRQcm9qZWN0KSB7XG4gICAgICAgIHN3aXRjaFRvUHJvamVjdChwcm9qZWN0TGlzdFswXS5VSUQpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHVibGlzaCgnU1dJVENIX1RPX1BST0pFQ1QnLCBwcm9qZWN0VUlEKTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVQb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IHByb2plY3RGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZm9ybS1jb250YWluZXInKTtcbiAgICBwcm9qZWN0Rm9ybUNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIGNvbnN0IHByb2plY3RGb3JtSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1mb3JtLWlucHV0Jyk7XG4gICAgcHJvamVjdEZvcm1JbnB1dC5mb2N1cygpO1xufVxuXG5mdW5jdGlvbiBleGl0UHJvamVjdEZvcm0oKSB7XG4gICAgY29uc3QgcHJvamVjdEZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1mb3JtLWNvbnRhaW5lcicpO1xuICAgIHByb2plY3RGb3JtQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBjb25zdCBwcm9qZWN0Rm9ybUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZm9ybS1pbnB1dCcpO1xuICAgIHByb2plY3RGb3JtSW5wdXQudmFsdWUgPSAnJztcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZvcm1CdXR0b25zKCkge1xuICAgIGNvbnN0IHByb2plY3RGb3JtQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RGb3JtQnV0dG9ucy5pZCA9ICdwcm9qZWN0LWZvcm0tYnV0dG9ucyc7XG5cbiAgICBjb25zdCBwcm9qZWN0Rm9ybUNvbmZpcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0Rm9ybUNvbmZpcm0uaWQgPSAncHJvamVjdC1mb3JtLWNvbmZpcm0nO1xuICAgIHByb2plY3RGb3JtQ29uZmlybS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWZvcm0tYnV0dG9uJyk7XG4gICAgcHJvamVjdEZvcm1Db25maXJtLnR5cGUgPSAnYnV0dG9uJztcbiAgICBwcm9qZWN0Rm9ybUNvbmZpcm0udGV4dENvbnRlbnQgPSAnQ29uZmlybSc7XG5cbiAgICBjb25zdCBwcm9qZWN0Rm9ybUNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3RGb3JtQ2FuY2VsLmlkID0gJ3Byb2plY3QtZm9ybS1jYW5jZWwnO1xuICAgIHByb2plY3RGb3JtQ2FuY2VsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZm9ybS1idXR0b24nKTtcbiAgICBwcm9qZWN0Rm9ybUNhbmNlbC50eXBlID0gJ2J1dHRvbic7XG4gICAgcHJvamVjdEZvcm1DYW5jZWwudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcblxuICAgIHByb2plY3RGb3JtQ29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHB1Ymxpc2goJ1BST0pFQ1RfRk9STV9DT05GSVJNX0NMSUNLRUQnLCBlLnRhcmdldC5jbG9zZXN0KFwiI3Byb2plY3QtZm9ybVwiKSk7XG4gICAgfSk7XG5cbiAgICBwcm9qZWN0Rm9ybUNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHB1Ymxpc2goJ1BST0pFQ1RfRk9STV9DQU5DRUxfQ0xJQ0tFRCcpO1xuICAgIH0pO1xuXG4gICAgcHJvamVjdEZvcm1CdXR0b25zLmFwcGVuZENoaWxkKHByb2plY3RGb3JtQ2FuY2VsKTtcbiAgICBwcm9qZWN0Rm9ybUJ1dHRvbnMuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm1Db25maXJtKTtcbiAgICByZXR1cm4gcHJvamVjdEZvcm1CdXR0b25zO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0Rm9ybSgpIHtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RGb3JtQ29udGFpbmVyLmlkID0gJ3Byb2plY3QtZm9ybS1jb250YWluZXInO1xuICAgIHByb2plY3RGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknKTtcblxuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHByb2plY3RGb3JtLmlkID0gJ3Byb2plY3QtZm9ybSc7XG5cbiAgICBjb25zdCBwcm9qZWN0Rm9ybUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcm9qZWN0Rm9ybUlucHV0LmlkID0gJ3Byb2plY3QtZm9ybS1pbnB1dCc7XG4gICAgcHJvamVjdEZvcm1JbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIHByb2plY3RGb3JtSW5wdXQucGxhY2Vob2xkZXIgPSAnUHJvamVjdCBuYW1lJztcbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybUlucHV0KTtcblxuICAgIHByb2plY3RGb3JtLmFwcGVuZChjcmVhdGVQcm9qZWN0Rm9ybUJ1dHRvbnMoKSk7XG4gICAgcHJvamVjdEZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0pO1xuXG4gICAgcmV0dXJuIHByb2plY3RGb3JtQ29udGFpbmVyO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3RCdXR0b24oKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Byb2plY3RCdXR0b24uaWQgPSAnbmV3LXByb2plY3QtYnV0dG9uJztcblxuICAgIGNvbnN0IG5ld1Byb2plY3RCdXR0b25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3UHJvamVjdEJ1dHRvblRleHQuaWQgPSAnbmV3LXByb2plY3QtYnV0dG9uLXRleHQnO1xuICAgIG5ld1Byb2plY3RCdXR0b25UZXh0LmlubmVyVGV4dCA9ICdORVcgUFJPSkVDVCc7XG4gICAgbmV3UHJvamVjdEJ1dHRvbi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnV0dG9uVGV4dCk7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIG5ld1Byb2plY3RCdXR0b25JY29uLmlkID0gJ25ldy1wcm9qZWN0LWJ1dHRvbi1pY29uJztcbiAgICBuZXdQcm9qZWN0QnV0dG9uSWNvbi5zcmMgPSBhZGRJbWFnZTtcbiAgICBuZXdQcm9qZWN0QnV0dG9uLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdXR0b25JY29uKTtcblxuICAgIG5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHB1Ymxpc2goJ05FV19QUk9KRUNUX0JVVFRPTl9DTElDS0VEJyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3UHJvamVjdEJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdFRpdGxlKCkge1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RUaXRsZS5pZCA9ICdwcm9qZWN0LXRpdGxlJztcbiAgICBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gJ1Byb2plY3RzJztcbiAgICByZXR1cm4gcHJvamVjdFRpdGxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0SGVhZGVyKCkge1xuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0SGVhZGVyLmlkID0gJ3Byb2plY3QtaGVhZGVyJztcbiAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RUaXRsZSgpKTtcbiAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5ld1Byb2plY3RCdXR0b24oKSk7XG4gICAgcmV0dXJuIHByb2plY3RIZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RDb250YWluZXIoKSB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RDb250YWluZXIuaWQgPSAncHJvamVjdC1jb250YWluZXInO1xuICAgIHJldHVybiBwcm9qZWN0Q29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0QXJlYSgpIHtcbiAgICBjb25zdCBwcm9qZWN0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RBcmVhLmlkID0gJ3Byb2plY3QtYXJlYSc7XG4gICAgcHJvamVjdEFyZWEuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEhlYWRlcigpKTtcbiAgICBwcm9qZWN0QXJlYS5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0Q29udGFpbmVyKCkpO1xuICAgIHJldHVybiBwcm9qZWN0QXJlYTtcbn1cblxuXG5mdW5jdGlvbiBnZXRUYXNrQmFja2dyb3VuZENvbG9yKHRhc2spIHtcbiAgICBpZih0YXNrLnByaW9yaXR5ID09PSAndXJnZW50Jykge1xuICAgICAgICByZXR1cm4gJ29yYW5nZSc7XG5cbiAgICB9IGVsc2UgaWYodGFzay5wcmlvcml0eSA9PT0gJ21lZGl1bScpIHtcbiAgICAgICAgcmV0dXJuICd5ZWxsb3cnO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdjeWFuJztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldFRhc2tTdGF0dXModGFzaykge1xuICAgIGNvbnN0IHRhc2tTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrU3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3Rhc2stc3RhdHVzJyk7XG4gICAgdGFza1N0YXR1cy5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgIGNvbnN0IGRlYWRsaW5lRGF0ZSA9IG5ldyBEYXRlKHRhc2suZGVhZGxpbmUgKyAnVDIzOjU5OjU5Jyk7XG4gICAgY29uc3QgY3VyRGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICBpZighdGFzay5kb25lKSB7XG4gICAgICAgIGlmIChkZWFkbGluZURhdGUgPCBjdXJEYXRlKSB7XG4gICAgICAgICAgICB0YXNrU3RhdHVzLnRleHRDb250ZW50ID0gJ09WRVJEVUUnO1xuICAgICAgICAgICAgdGFza1N0YXR1cy5zdHlsZS5jb2xvciA9ICdyZWQnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoZGVhZGxpbmVEYXRlIC0gY3VyRGF0ZSA8PSAoMjQgKiA2MCAqIDYwICogMTAwMCkpIHtcbiAgICAgICAgICAgIHRhc2tTdGF0dXMudGV4dENvbnRlbnQgPSAnRFVFIFRPREFZJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXNrU3RhdHVzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRWxlbWVudCh0YXNrKSB7XG4gICAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YXNrLWVsZW1lbnQnKTtcblxuICAgIHRhc2tFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGdldFRhc2tCYWNrZ3JvdW5kQ29sb3IodGFzayk7XG4gICAgdGFza0VsZW1lbnQuZGF0YXNldC50YXNrVWlkID0gdGFzay5VSUQ7XG5cbiAgICBjb25zdCB0YXNrRG9uZUJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tEb25lQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZG9uZS1idXR0b24tY29udGFpbmVyJyk7XG4gICAgY29uc3QgdGFza0RvbmVCdXR0b24gPSBuZXcgSW1hZ2UoKTtcbiAgICB0YXNrRG9uZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRvbmUtYnV0dG9uJyk7XG4gICAgdGFza0RvbmVCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFzay1idXR0b24nKTtcbiAgICB0YXNrRG9uZUJ1dHRvbi5zcmMgPSBkb25lSW1hZ2U7XG5cbiAgICB0YXNrRG9uZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHVibGlzaCgnRE9ORV9UQVNLX0JVVFRPTl9DTElDS0VEJywge3Byb2plY3RVSUQ6IHRhc2sucHJvamVjdFVJRCwgdGFza1VJRDogdGFzay5VSUR9KTtcbiAgICB9KTtcblxuICAgIHRhc2tEb25lQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEb25lQnV0dG9uKTtcbiAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrRG9uZUJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbmFtZScpO1xuICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gdGFzay5uYW1lO1xuICAgIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcblxuICAgIGNvbnN0IHRhc2tTdGF0dXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrU3RhdHVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stc3RhdHVzLWNvbnRhaW5lcicpO1xuICAgIHRhc2tTdGF0dXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0VGFza1N0YXR1cyh0YXNrKSk7XG4gICAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza1N0YXR1c0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBkYXRlRm9ybWF0T3B0aW9ucyA9IHsgd2Vla2RheTogJ2xvbmcnLCB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnIH07XG4gICAgY29uc3QgdGFza0RlYWRsaW5lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0RlYWRsaW5lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVhZGxpbmUtY29udGFpbmVyJyk7XG4gICAgY29uc3QgdGFza0RlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0RlYWRsaW5lLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVhZGxpbmUnKTtcbiAgICB0YXNrRGVhZGxpbmUudGV4dENvbnRlbnQgPSAobmV3IERhdGUodGFzay5kZWFkbGluZSkpLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCBkYXRlRm9ybWF0T3B0aW9ucyk7XG4gICAgdGFza0RlYWRsaW5lQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZWFkbGluZSk7XG4gICAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza0RlYWRsaW5lQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGVkaXRUYXNrQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWRpdFRhc2tCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZWRpdC10YXNrLWJ1dHRvbi1jb250YWluZXInKTtcbiAgICBjb25zdCBlZGl0VGFza0J1dHRvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGVkaXRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXQtdGFzay1idXR0b24nKTtcbiAgICBlZGl0VGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWJ1dHRvbicpO1xuICAgIGVkaXRUYXNrQnV0dG9uLnNyYyA9IGVkaXRJbWFnZTtcbiAgICBlZGl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHB1Ymxpc2goJ0VESVRfVEFTS19CVVRUT05fQ0xJQ0tFRCcsIHtwcm9qZWN0VUlEOiB0YXNrLnByb2plY3RVSUQsIHRhc2tVSUQ6IHRhc2suVUlEfSk7XG4gICAgfSk7XG4gICAgZWRpdFRhc2tCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdFRhc2tCdXR0b24pO1xuICAgIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKGVkaXRUYXNrQnV0dG9uQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGRlbGV0ZVRhc2tCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZWxldGVUYXNrQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS10YXNrLWJ1dHRvbi1jb250YWluZXInKTtcbiAgICBjb25zdCBkZWxldGVUYXNrQnV0dG9uID0gbmV3IEltYWdlKCk7XG4gICAgZGVsZXRlVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtdGFzay1idXR0b24nKTtcbiAgICBkZWxldGVUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stYnV0dG9uJyk7XG4gICAgZGVsZXRlVGFza0J1dHRvbi5zcmMgPSBkZWxldGVJbWFnZTtcbiAgICBkZWxldGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHB1Ymxpc2goJ0RFTEVURV9UQVNLX0JVVFRPTl9DTElDS0VEJywge3Byb2plY3RVSUQ6IHRhc2sucHJvamVjdFVJRCwgdGFza1VJRDogdGFzay5VSUR9KTtcbiAgICB9KTtcbiAgICBkZWxldGVUYXNrQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tCdXR0b24pO1xuICAgIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tCdXR0b25Db250YWluZXIpO1xuXG4gICAgaWYgKHRhc2suZG9uZSkge1xuICAgICAgICB0YXNrRWxlbWVudC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuICAgICAgICB0YXNrRWxlbWVudC5zdHlsZS5jb2xvciA9ICcjY2NjJztcbiAgICAgICAgdGFza0RvbmVCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcbiAgICB9XG5cbiAgICByZXR1cm4gdGFza0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2tDb250YWluZXIocHJvamVjdFVJRCkge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZ2V0UHJvamVjdExpc3QoKTtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stY29udGFpbmVyJyk7XG4gICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICB0YXNrQ29udGFpbmVyLnBhcmVudEVsZW1lbnQuZGF0YXNldC5wcm9qZWN0VWlkID0gcHJvamVjdFVJRDtcblxuICAgIGZvciAobGV0IHByb2plY3RJbmRleCA9IDA7IHByb2plY3RJbmRleCA8IHByb2plY3RMaXN0Lmxlbmd0aDsgcHJvamVjdEluZGV4KyspIHtcbiAgICAgICAgaWYgKHByb2plY3RMaXN0W3Byb2plY3RJbmRleF0uVUlEID09IHByb2plY3RVSUQpIHtcbiAgICAgICAgICAgIHByb2plY3RMaXN0W3Byb2plY3RJbmRleF0udGFza3Muc29ydChcbiAgICAgICAgICAgICAgICAodGFzazEsIHRhc2syKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRhc2sxLmRvbmUgPT09IHRhc2syLmRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh0YXNrMS5kZWFkbGluZSkgLSBuZXcgRGF0ZSh0YXNrMi5kZWFkbGluZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRhc2sxLmRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHRhc2tJbmRleCA9IDA7IHRhc2tJbmRleCA8IHByb2plY3RMaXN0W3Byb2plY3RJbmRleF0udGFza3MubGVuZ3RoOyB0YXNrSW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gY3JlYXRlVGFza0VsZW1lbnQocHJvamVjdExpc3RbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdKTtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldFRhc2socHJvamVjdFVJRCwgdGFza1VJRCkge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZ2V0UHJvamVjdExpc3QoKTtcbiAgICBmb3IgKGxldCBwcm9qZWN0SW5kZXggPSAwOyBwcm9qZWN0SW5kZXggPCBwcm9qZWN0TGlzdC5sZW5ndGg7IHByb2plY3RJbmRleCsrKSB7XG4gICAgICAgIGlmIChwcm9qZWN0TGlzdFtwcm9qZWN0SW5kZXhdLlVJRCA9PSBwcm9qZWN0VUlEKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB0YXNrSW5kZXggPSAwOyB0YXNrSW5kZXggPCBwcm9qZWN0TGlzdFtwcm9qZWN0SW5kZXhdLnRhc2tzLmxlbmd0aDsgdGFza0luZGV4KyspIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdExpc3RbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdLlVJRCA9PSB0YXNrVUlEKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9qZWN0TGlzdFtwcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBmaWxsVGFza0Zvcm0ocHJvamVjdFVJRCwgdGFza1VJRCkge1xuICAgIGNvbnN0IHRhc2sgPSBnZXRUYXNrKHByb2plY3RVSUQsIHRhc2tVSUQpO1xuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZm9ybScpO1xuICAgIHRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW5hbWUtaW5wdXQnKS52YWx1ZSA9IHRhc2submFtZTtcbiAgICB0YXNrRm9ybS5xdWVyeVNlbGVjdG9yKCcjdGFzay1wcmlvcml0eS1pbnB1dCcpLnZhbHVlID0gdGFzay5wcmlvcml0eTtcbiAgICB0YXNrRm9ybS5xdWVyeVNlbGVjdG9yKCcjdGFzay1kYXRlLWlucHV0JykudmFsdWUgPSB0YXNrLmRlYWRsaW5lO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZVRhc2tGb3JtKCkge1xuICAgIGNvbnN0IHRhc2tGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZm9ybS1jb250YWluZXInKTtcbiAgICB0YXNrRm9ybUNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1uYW1lLWlucHV0Jyk7XG4gICAgdGFza05hbWVJbnB1dC5mb2N1cygpO1xufVxuXG5mdW5jdGlvbiBleGl0VGFza0Zvcm0oKSB7XG4gICAgY29uc3QgdGFza0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1mb3JtLWNvbnRhaW5lcicpO1xuICAgIHRhc2tGb3JtQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWZvcm0nKTtcbiAgICB0YXNrRm9ybS5yZXNldCgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRm9ybUJ1dHRvbnMoKSB7XG4gICAgY29uc3QgdGFza0Zvcm1CdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0Zvcm1CdXR0b25zLmlkID0gJ3Rhc2stZm9ybS1idXR0b25zJztcblxuICAgIGNvbnN0IHRhc2tGb3JtQ29uZmlybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRhc2tGb3JtQ29uZmlybS5pZCA9ICd0YXNrLWZvcm0tY29uZmlybSc7XG4gICAgdGFza0Zvcm1Db25maXJtLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZm9ybS1idXR0b24nKTtcbiAgICB0YXNrRm9ybUNvbmZpcm0udHlwZSA9ICdidXR0b24nO1xuICAgIHRhc2tGb3JtQ29uZmlybS50ZXh0Q29udGVudCA9ICdDb25maXJtJztcblxuICAgIGNvbnN0IHRhc2tGb3JtQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFza0Zvcm1DYW5jZWwuaWQgPSAndGFzay1mb3JtLWNhbmNlbCc7XG4gICAgdGFza0Zvcm1DYW5jZWwuY2xhc3NMaXN0LmFkZCgndGFzay1mb3JtLWJ1dHRvbicpO1xuICAgIHRhc2tGb3JtQ2FuY2VsLnR5cGUgPSAnYnV0dG9uJztcbiAgICB0YXNrRm9ybUNhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuXG4gICAgdGFza0Zvcm1Db25maXJtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgcHVibGlzaCgnVEFTS19GT1JNX0NPTkZJUk1fQ0xJQ0tFRCcsIGUudGFyZ2V0LmNsb3Nlc3QoXCIjdGFzay1mb3JtXCIpKTtcbiAgICB9KTtcblxuICAgIHRhc2tGb3JtQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgcHVibGlzaCgnVEFTS19GT1JNX0NBTkNFTF9DTElDS0VEJyk7XG4gICAgfSk7XG5cbiAgICB0YXNrRm9ybUJ1dHRvbnMuYXBwZW5kQ2hpbGQodGFza0Zvcm1DYW5jZWwpO1xuICAgIHRhc2tGb3JtQnV0dG9ucy5hcHBlbmRDaGlsZCh0YXNrRm9ybUNvbmZpcm0pO1xuICAgIHJldHVybiB0YXNrRm9ybUJ1dHRvbnM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tGb3JtKCkge1xuICAgIGNvbnN0IHRhc2tGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0Zvcm1Db250YWluZXIuaWQgPSAndGFzay1mb3JtLWNvbnRhaW5lcic7XG4gICAgdGFza0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpO1xuXG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgdGFza0Zvcm0uaWQgPSAndGFzay1mb3JtJztcblxuICAgIGNvbnN0IHRhc2tOYW1lSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrTmFtZUlucHV0Q29udGFpbmVyLmlkID0gJ3Rhc2stbmFtZS1pbnB1dC1jb250YWluZXInO1xuICAgIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRhc2tOYW1lSW5wdXQuaWQgPSAndGFzay1uYW1lLWlucHV0JztcbiAgICB0YXNrTmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgdGFza05hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICdUYXNrIG5hbWUnO1xuICAgIHRhc2tOYW1lSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza05hbWVJbnB1dCk7XG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza05hbWVJbnB1dENvbnRhaW5lcik7XG5cbiAgICBjb25zdCB0YXNrUHJpb3JpdHlJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tQcmlvcml0eUlucHV0Q29udGFpbmVyLmlkID0gJ3Rhc2stcHJpb3JpdHktaW5wdXQtY29udGFpbmVyJztcbiAgICBjb25zdCB0YXNrUHJpb3JpdHlJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0YXNrUHJpb3JpdHlJbnB1dExhYmVsLmlkID0gJ3Rhc2stcHJpb3JpdHktaW5wdXQtbGFiZWwnO1xuICAgIHRhc2tQcmlvcml0eUlucHV0TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHkgOiAnO1xuICAgIHRhc2tQcmlvcml0eUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eUlucHV0TGFiZWwpO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgdGFza1ByaW9yaXR5SW5wdXQuaWQgPSAndGFzay1wcmlvcml0eS1pbnB1dCc7XG4gICAgdGFza1ByaW9yaXR5SW5wdXQuYWRkKG5ldyBPcHRpb24oJ2xvdycsICdsb3cnLCB0cnVlKSk7XG4gICAgdGFza1ByaW9yaXR5SW5wdXQuYWRkKG5ldyBPcHRpb24oJ21lZGl1bScsICdtZWRpdW0nKSk7XG4gICAgdGFza1ByaW9yaXR5SW5wdXQuYWRkKG5ldyBPcHRpb24oJ3VyZ2VudCcsICd1cmdlbnQnKSk7XG4gICAgdGFza1ByaW9yaXR5SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5SW5wdXQpO1xuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eUlucHV0Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IHRhc2tEYXRlSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRGF0ZUlucHV0Q29udGFpbmVyLmlkID0gJ3Rhc2stZGF0ZS1pbnB1dC1jb250YWluZXInO1xuICAgIGNvbnN0IHRhc2tEYXRlSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGFza0RhdGVJbnB1dExhYmVsLmlkID0gJ3Rhc2stZGF0ZS1pbnB1dC1sYWJlbCc7XG4gICAgdGFza0RhdGVJbnB1dExhYmVsLnRleHRDb250ZW50ID0gJ0RlYWRsaW5lIDogJztcbiAgICB0YXNrRGF0ZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEYXRlSW5wdXRMYWJlbCk7XG4gICAgY29uc3QgdGFza0RhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza0RhdGVJbnB1dC5pZCA9ICd0YXNrLWRhdGUtaW5wdXQnO1xuICAgIHRhc2tEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICB0YXNrRGF0ZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEYXRlSW5wdXQpO1xuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tEYXRlSW5wdXRDb250YWluZXIpO1xuXG4gICAgdGFza0Zvcm0uYXBwZW5kKGNyZWF0ZVRhc2tGb3JtQnV0dG9ucygpKTtcbiAgICB0YXNrRm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG5cbiAgICByZXR1cm4gdGFza0Zvcm1Db250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2tCdXR0b24oKSB7XG4gICAgY29uc3QgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Rhc2tCdXR0b24uaWQgPSBcIm5ldy10YXNrLWJ1dHRvblwiO1xuXG4gICAgY29uc3QgbmV3VGFza0J1dHRvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdUYXNrQnV0dG9uVGV4dC5pZCA9IFwibmV3LXRhc2stYnV0dG9uLXRleHRcIjtcbiAgICBuZXdUYXNrQnV0dG9uVGV4dC50ZXh0Q29udGVudCA9IFwiTkVXIFRBU0tcIjtcbiAgICBuZXdUYXNrQnV0dG9uLmFwcGVuZENoaWxkKG5ld1Rhc2tCdXR0b25UZXh0KTtcblxuICAgIGNvbnN0IG5ld1Rhc2tCdXR0b25JY29uID0gbmV3IEltYWdlKCk7XG4gICAgbmV3VGFza0J1dHRvbkljb24uaWQgPSBcIm5ldy10YXNrLWJ1dHRvbi1pY29uXCI7XG4gICAgbmV3VGFza0J1dHRvbkljb24uc3JjID0gYWRkSW1hZ2U7XG4gICAgbmV3VGFza0J1dHRvbi5hcHBlbmRDaGlsZChuZXdUYXNrQnV0dG9uSWNvbik7XG5cbiAgICBuZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBwdWJsaXNoKFwiTkVXX1RBU0tfQlVUVE9OX0NMSUNLRURcIiwgZS50YXJnZXQuY2xvc2VzdCgnI3Rhc2stYXJlYScpLmRhdGFzZXQucHJvamVjdFVpZCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3VGFza0J1dHRvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0hlYWRlcigpIHtcbiAgICBjb25zdCB0YXNrSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0hlYWRlci5pZCA9IFwidGFzay1oZWFkZXJcIjtcbiAgICB0YXNrSGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5ld1Rhc2tCdXR0b24oKSk7XG4gICAgcmV0dXJuIHRhc2tIZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tDb250YWluZXIoKSB7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tDb250YWluZXIuaWQgPSBcInRhc2stY29udGFpbmVyXCI7XG4gICAgcmV0dXJuIHRhc2tDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tBcmVhKCkge1xuICAgIGNvbnN0IHRhc2tBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0FyZWEuaWQgPSBcInRhc2stYXJlYVwiO1xuICAgIHRhc2tBcmVhLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tIZWFkZXIoKSk7XG4gICAgdGFza0FyZWEuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0NvbnRhaW5lcigpKTtcbiAgICByZXR1cm4gdGFza0FyZWE7XG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlUHJvamVjdEFyZWEsXG4gICAgY3JlYXRlUHJvamVjdEZvcm0sXG4gICAgYWN0aXZhdGVQb2plY3RGb3JtLFxuICAgIGV4aXRQcm9qZWN0Rm9ybSxcbiAgICBzZXRBY3RpdmVQcm9qZWN0LFxuICAgIHN3aXRjaFRvUHJvamVjdCxcbiAgICB1cGRhdGVQcm9qZWN0Q29udGFpbmVyLFxuICAgIGNyZWF0ZVRhc2tBcmVhLFxuICAgIGNyZWF0ZVRhc2tGb3JtLFxuICAgIGFjdGl2YXRlVGFza0Zvcm0sXG4gICAgZXhpdFRhc2tGb3JtLFxuICAgIGZpbGxUYXNrRm9ybSxcbiAgICB1cGRhdGVUYXNrQ29udGFpbmVyXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBwdWJsaXNoIH0gZnJvbSAnLi9ldmVudC1tYW5hZ2VyLmpzJztcbmltcG9ydCAnLi9ldmVudHMuanMnO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdEFyZWEsIGNyZWF0ZVByb2plY3RGb3JtLCBjcmVhdGVUYXNrQXJlYSwgY3JlYXRlVGFza0Zvcm0gfSBmcm9tICcuL3VpLmpzJztcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdUby1EbyBsaXN0JztcbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RBcmVhKCkpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0FyZWEoKSk7XG4gICAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXIudGV4dENvbnRlbnQgPSAnQ29weXJpZ2h0IMKpIDIwMjIgbmFtYW4xNjAxJztcbiAgICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiBzdGFydHVwKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RGb3JtKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0Zvcm0oKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG4gICAgcHVibGlzaChcIlBPUFVMQVRFX1BST0pFQ1RTXCIpO1xufVxuXG5zdGFydHVwKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9