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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0px;\n}\n\nheader {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #272424;\n    color: #fff;\n    height: 69px;\n    font-size: 30px;\n    font-weight: bold;\n}\n\n.overlay {\n    visibility: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.main {\n    display: flex;\n    min-height: 621px;\n}\n\n#project-area {\n    width: 250px;\n    background-color: rgb(209, 207, 207);\n}\n\n#project-header {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 20px;\n    margin-bottom: 5px;\n}\n\n#project-title {\n    font-size: 30px;\n    font-weight: bold;\n    margin-bottom: 20px;\n}\n\n#new-project-button {\n    height: 50px;\n    width: 99%;\n    background-color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: bold;\n    border: 1px solid transparent;\n    border-radius: 10px;\n}\n\n#new-project-button:hover {\n    cursor: pointer;\n    border: 1px solid black;\n}\n\n#new-project-button-icon {\n    margin-left: 10px;\n    height: 25px;\n    width: 25px;\n}\n\n#project-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 40px;\n    overflow-y: auto;\n    height: 454px;\n}\n\n.project-element {\n    display: flex;\n    width: 85%;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    border-radius: 15px;\n    border: 2px solid #000;\n    margin-bottom: 20px;\n}\n\n.project-element:hover {\n    cursor: pointer;\n    background-color: rgb(180, 180, 180);\n}\n\n.project-name {\n    font-size: 20px;\n    margin-right: 50px;\n    width: 80%;\n    text-align: center;\n}\n\n.edit-project-button {\n    height: 25px;\n    width: 25px;\n    border-radius: 50%;\n    padding: 5px;\n    border: 2px solid transparent;\n}\n\n.edit-project-button:hover {\n    border: 2px solid black;\n}\n\n.delete-project-button {\n    height: 25px;\n    width: 25px;\n    border-radius: 50%;\n    padding: 5px;\n}\n\n.delete-project-button:hover {\n    background-color: rgb(255, 0, 0);\n}\n\n.active-project {\n    background-color: rgb(133, 133, 133);\n}\n\n#project-form-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#project-form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px;\n    height: 100px;\n    width: 300px;\n    background-color: white;\n    border-radius: 20px;\n}\n\n#project-form-input {\n    font-size: 20px;\n    width: 100%;\n    height: 40px;\n    border-radius: 20px;\n    border: 2px solid #000;\n}\n\n#project-form-buttons {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    width: 100%;\n    margin-top: 20px;\n}\n\n.project-form-button {\n    height: 35px;\n    width: 100px;\n    border-radius: 20px;\n    border: 2px solid black;    \n}\n\n.project-form-button:hover, .project-form-button:focus {\n    font-weight: bold;\n    cursor: pointer;\n    border: 3px solid black;\n}\n\n#project-form-confirm {\n    background-color: rgb(13, 214, 13);\n}\n\n#project-form-cancel {\n    background-color: rgb(223, 14, 14);\n}\n\n#task-area {\n    flex: 1;\n    margin: 20px;\n}\n\n#task-header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#new-task-button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 15px;\n    border: 1px solid transparent;\n    border-radius: 10px;\n    font-size: 20px;\n    font-weight: bold;\n}\n\n#new-task-button:hover {\n    cursor: pointer;\n    border: 1px solid black;\n}\n\n#new-task-button-icon {\n    margin-left: 10px;\n    height: 35px;\n    width: 35px;\n}\n\n#task-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.task-element {\n    margin-top: 20px;\n    display: flex;\n    align-items: center;\n    width: 100%;\n    border-radius: 10px;\n}\n\n.task-button:hover {\n    cursor: pointer;\n}\n\n.done-task {\n    background-color: blue;\n}\n\n.task-done-button-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 40px;\n    margin-right: 25px;\n}\n\n.task-done-button {\n    width: 25px;\n    border-radius: 50%;\n    padding: 5px;\n}\n\n.task-done-button:hover {\n    border: 2px solid black;\n}\n\n.task-name {\n    display: flex;\n    align-items: center;\n    font-size: 20px;\n    width: 720px;\n    margin-right: 25px;\n    font-size: 23px;\n}\n\n.task-status-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    width: 70px;\n    margin-right: 25px;\n}\n\n.task-deadline-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 200px;\n    margin-right: 25px;\n    font-weight: bold;\n}\n\n.edit-task-button-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 40px;\n    margin-right: 25px;\n}\n\n.edit-task-button {\n    width: 25px;\n    border-radius: 50%;\n    padding: 5px;\n    border: 2px solid transparent;\n}\n\n.edit-task-button:hover {\n    border: 2px solid black;\n}\n\n.delete-task-button-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 40px;\n}\n\n.delete-task-button {\n    width: 25px;\n    border-radius: 50%;\n    padding: 5px;\n}\n\n.delete-task-button:hover {\n    background-color: rgb(255, 0, 0);\n}\n\n#task-form-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#task-form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px;\n    height: 400px;\n    width: 400px;\n    background-color: white;\n    border-radius: 20px;\n}\n\n#task-name-input-container {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100px;\n    margin-bottom: 20px;\n}\n\n#task-name-input {\n    font-size: 20px;\n    width: 100%;\n    height: 30px;\n    border-radius: 10px;\n    border: 2px solid #000;\n}\n\n#task-priority-input-container {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 50px;\n    margin-bottom: 40px;\n}\n\n#task-priority-input-label {\n    font-size: 20px;\n    font-weight: bold;\n    margin-right: 40px;\n}\n\n#task-priority-input {\n    font-size: 18px;\n    text-align: center;\n    width: 90px;\n    height: 30px;\n    border-radius: 10px;\n    border: 2px solid #000;\n}\n\n#task-date-input-container {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 50px;\n    margin-bottom: 70px;\n}\n\n#task-date-input-label {\n    font-size: 20px;\n    font-weight: bold;\n    margin-right: 30px;\n}\n\n#task-date-input {\n    font-size: 18px;\n    text-align: center;\n    width: 200px;\n    height: 30px;\n    border-radius: 10px;\n    border: 2px solid #000;\n}\n\n#task-form-buttons {\n    display: flex;\n    align-items: center;\n    width: 100%;\n}\n\n.task-form-button {\n    height: 35px;\n    width: 100px;\n    margin-left: 60px;\n    margin-right: 10px;\n    border-radius: 20px;\n    border: 2px solid black;    \n}\n\n.task-form-button:hover, .task-form-button:focus {\n    font-weight: bold;\n    cursor: pointer;\n    border: 3px solid black;\n}\n\n#task-form-confirm {\n    background-color: rgb(13, 214, 13);\n}\n\n#task-form-cancel {\n    background-color: rgb(223, 14, 14);\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #272424;\n    color: #fff;\n    height: 42px;\n    font-size: 17px;\n    font-weight: bold;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    margin: 0px;\n}\n\nheader {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #272424;\n    color: #fff;\n    height: 69px;\n    font-size: 30px;\n    font-weight: bold;\n}\n\n.overlay {\n    visibility: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.main {\n    display: flex;\n    min-height: 621px;\n}\n\n#project-area {\n    width: 250px;\n    background-color: rgb(209, 207, 207);\n}\n\n#project-header {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 20px;\n    margin-bottom: 5px;\n}\n\n#project-title {\n    font-size: 30px;\n    font-weight: bold;\n    margin-bottom: 20px;\n}\n\n#new-project-button {\n    height: 50px;\n    width: 99%;\n    background-color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: bold;\n    border: 1px solid transparent;\n    border-radius: 10px;\n}\n\n#new-project-button:hover {\n    cursor: pointer;\n    border: 1px solid black;\n}\n\n#new-project-button-icon {\n    margin-left: 10px;\n    height: 25px;\n    width: 25px;\n}\n\n#project-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 40px;\n    overflow-y: auto;\n    height: 454px;\n}\n\n.project-element {\n    display: flex;\n    width: 85%;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    border-radius: 15px;\n    border: 2px solid #000;\n    margin-bottom: 20px;\n}\n\n.project-element:hover {\n    cursor: pointer;\n    background-color: rgb(180, 180, 180);\n}\n\n.project-name {\n    font-size: 20px;\n    margin-right: 50px;\n    width: 80%;\n    text-align: center;\n}\n\n.edit-project-button {\n    height: 25px;\n    width: 25px;\n    border-radius: 50%;\n    padding: 5px;\n    border: 2px solid transparent;\n}\n\n.edit-project-button:hover {\n    border: 2px solid black;\n}\n\n.delete-project-button {\n    height: 25px;\n    width: 25px;\n    border-radius: 50%;\n    padding: 5px;\n}\n\n.delete-project-button:hover {\n    background-color: rgb(255, 0, 0);\n}\n\n.active-project {\n    background-color: rgb(133, 133, 133);\n}\n\n#project-form-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#project-form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px;\n    height: 100px;\n    width: 300px;\n    background-color: white;\n    border-radius: 20px;\n}\n\n#project-form-input {\n    font-size: 20px;\n    width: 100%;\n    height: 40px;\n    border-radius: 20px;\n    border: 2px solid #000;\n}\n\n#project-form-buttons {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    width: 100%;\n    margin-top: 20px;\n}\n\n.project-form-button {\n    height: 35px;\n    width: 100px;\n    border-radius: 20px;\n    border: 2px solid black;    \n}\n\n.project-form-button:hover, .project-form-button:focus {\n    font-weight: bold;\n    cursor: pointer;\n    border: 3px solid black;\n}\n\n#project-form-confirm {\n    background-color: rgb(13, 214, 13);\n}\n\n#project-form-cancel {\n    background-color: rgb(223, 14, 14);\n}\n\n#task-area {\n    flex: 1;\n    margin: 20px;\n}\n\n#task-header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#new-task-button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 15px;\n    border: 1px solid transparent;\n    border-radius: 10px;\n    font-size: 20px;\n    font-weight: bold;\n}\n\n#new-task-button:hover {\n    cursor: pointer;\n    border: 1px solid black;\n}\n\n#new-task-button-icon {\n    margin-left: 10px;\n    height: 35px;\n    width: 35px;\n}\n\n#task-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.task-element {\n    margin-top: 20px;\n    display: flex;\n    align-items: center;\n    width: 100%;\n    border-radius: 10px;\n}\n\n.task-button:hover {\n    cursor: pointer;\n}\n\n.done-task {\n    background-color: blue;\n}\n\n.task-done-button-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 40px;\n    margin-right: 25px;\n}\n\n.task-done-button {\n    width: 25px;\n    border-radius: 50%;\n    padding: 5px;\n}\n\n.task-done-button:hover {\n    border: 2px solid black;\n}\n\n.task-name {\n    display: flex;\n    align-items: center;\n    font-size: 20px;\n    width: 720px;\n    margin-right: 25px;\n    font-size: 23px;\n}\n\n.task-status-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    width: 70px;\n    margin-right: 25px;\n}\n\n.task-deadline-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 200px;\n    margin-right: 25px;\n    font-weight: bold;\n}\n\n.edit-task-button-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 40px;\n    margin-right: 25px;\n}\n\n.edit-task-button {\n    width: 25px;\n    border-radius: 50%;\n    padding: 5px;\n    border: 2px solid transparent;\n}\n\n.edit-task-button:hover {\n    border: 2px solid black;\n}\n\n.delete-task-button-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 40px;\n}\n\n.delete-task-button {\n    width: 25px;\n    border-radius: 50%;\n    padding: 5px;\n}\n\n.delete-task-button:hover {\n    background-color: rgb(255, 0, 0);\n}\n\n#task-form-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#task-form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px;\n    height: 400px;\n    width: 400px;\n    background-color: white;\n    border-radius: 20px;\n}\n\n#task-name-input-container {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100px;\n    margin-bottom: 20px;\n}\n\n#task-name-input {\n    font-size: 20px;\n    width: 100%;\n    height: 30px;\n    border-radius: 10px;\n    border: 2px solid #000;\n}\n\n#task-priority-input-container {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 50px;\n    margin-bottom: 40px;\n}\n\n#task-priority-input-label {\n    font-size: 20px;\n    font-weight: bold;\n    margin-right: 40px;\n}\n\n#task-priority-input {\n    font-size: 18px;\n    text-align: center;\n    width: 90px;\n    height: 30px;\n    border-radius: 10px;\n    border: 2px solid #000;\n}\n\n#task-date-input-container {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 50px;\n    margin-bottom: 70px;\n}\n\n#task-date-input-label {\n    font-size: 20px;\n    font-weight: bold;\n    margin-right: 30px;\n}\n\n#task-date-input {\n    font-size: 18px;\n    text-align: center;\n    width: 200px;\n    height: 30px;\n    border-radius: 10px;\n    border: 2px solid #000;\n}\n\n#task-form-buttons {\n    display: flex;\n    align-items: center;\n    width: 100%;\n}\n\n.task-form-button {\n    height: 35px;\n    width: 100px;\n    margin-left: 60px;\n    margin-right: 10px;\n    border-radius: 20px;\n    border: 2px solid black;    \n}\n\n.task-form-button:hover, .task-form-button:focus {\n    font-weight: bold;\n    cursor: pointer;\n    border: 3px solid black;\n}\n\n#task-form-confirm {\n    background-color: rgb(13, 214, 13);\n}\n\n#task-form-cancel {\n    background-color: rgb(223, 14, 14);\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #272424;\n    color: #fff;\n    height: 42px;\n    font-size: 17px;\n    font-weight: bold;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzdlQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDd0I7QUFDeEI7QUFDMEU7O0FBRS9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHlEQUFpQjtBQUN0QyxxQkFBcUIsc0RBQWM7QUFDbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlEQUFpQjtBQUN6Qyx3QkFBd0Isc0RBQWM7QUFDdEM7QUFDQSxJQUFJLDBEQUFPO0FBQ1g7O0FBRUEsVSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvcHVic3ViLWpzL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3VuaXFpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZXZlbnQtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI0MjQ7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBoZWlnaHQ6IDY5cHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtaW4taGVpZ2h0OiA2MjFweDtcXG59XFxuXFxuI3Byb2plY3QtYXJlYSB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMjA3LCAyMDcpO1xcbn1cXG5cXG4jcHJvamVjdC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4jcHJvamVjdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbiNuZXctcHJvamVjdC1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA5OSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jbmV3LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI25ldy1wcm9qZWN0LWJ1dHRvbi1pY29uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxufVxcblxcbiNwcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGhlaWdodDogNDU0cHg7XFxufVxcblxcbi5wcm9qZWN0LWVsZW1lbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnByb2plY3QtZWxlbWVudDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MCwgMTgwLCAxODApO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmVkaXQtcHJvamVjdC1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5lZGl0LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbn1cXG5cXG4uYWN0aXZlLXByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMzLCAxMzMsIDEzMyk7XFxufVxcblxcbiNwcm9qZWN0LWZvcm0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3Byb2plY3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbiNwcm9qZWN0LWZvcm0taW5wdXQge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxufVxcblxcbiNwcm9qZWN0LWZvcm0tYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLnByb2plY3QtZm9ybS1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICAgIFxcbn1cXG5cXG4ucHJvamVjdC1mb3JtLWJ1dHRvbjpob3ZlciwgLnByb2plY3QtZm9ybS1idXR0b246Zm9jdXMge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1jb25maXJtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzLCAyMTQsIDEzKTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1jYW5jZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAxNCwgMTQpO1xcbn1cXG5cXG4jdGFzay1hcmVhIHtcXG4gICAgZmxleDogMTtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4jdGFzay1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI25ldy10YXNrLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI25ldy10YXNrLWJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNuZXctdGFzay1idXR0b24taWNvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAzNXB4O1xcbn1cXG5cXG4jdGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1lbGVtZW50IHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi50YXNrLWJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRvbmUtdGFzayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi50YXNrLWRvbmUtYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xcbn1cXG5cXG4udGFzay1kb25lLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnRhc2stZG9uZS1idXR0b246aG92ZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRhc2stbmFtZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgd2lkdGg6IDcyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXG59XFxuXFxuLnRhc2stc3RhdHVzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XFxufVxcblxcbi50YXNrLWRlYWRsaW5lLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5lZGl0LXRhc2stYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uZWRpdC10YXNrLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5lZGl0LXRhc2stYnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5kZWxldGUtdGFzay1idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA0MHB4O1xcbn1cXG5cXG4uZGVsZXRlLXRhc2stYnV0dG9uIHtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uZGVsZXRlLXRhc2stYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxufVxcblxcbiN0YXNrLWZvcm0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3Rhc2stZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbiN0YXNrLW5hbWUtaW5wdXQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbiN0YXNrLW5hbWUtaW5wdXQge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxufVxcblxcbiN0YXNrLXByaW9yaXR5LWlucHV0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcblxcbiN0YXNrLXByaW9yaXR5LWlucHV0LWxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcbn1cXG5cXG4jdGFzay1wcmlvcml0eS1pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogOTBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcbn1cXG5cXG4jdGFzay1kYXRlLWlucHV0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XFxufVxcblxcbiN0YXNrLWRhdGUtaW5wdXQtbGFiZWwge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxufVxcblxcbiN0YXNrLWRhdGUtaW5wdXQge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxufVxcblxcbiN0YXNrLWZvcm0tYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFzay1mb3JtLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgICAgXFxufVxcblxcbi50YXNrLWZvcm0tYnV0dG9uOmhvdmVyLCAudGFzay1mb3JtLWJ1dHRvbjpmb2N1cyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jdGFzay1mb3JtLWNvbmZpcm0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMsIDIxNCwgMTMpO1xcbn1cXG5cXG4jdGFzay1mb3JtLWNhbmNlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDE0LCAxNCk7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNDI0O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgaGVpZ2h0OiA0MnB4O1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNa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QUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjQyNDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGhlaWdodDogNjlweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1pbi1oZWlnaHQ6IDYyMXB4O1xcbn1cXG5cXG4jcHJvamVjdC1hcmVhIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAyMDcsIDIwNyk7XFxufVxcblxcbiNwcm9qZWN0LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbiNwcm9qZWN0LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI25ldy1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDk5JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNuZXctcHJvamVjdC1idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jbmV3LXByb2plY3QtYnV0dG9uLWljb24ge1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG59XFxuXFxuI3Byb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgaGVpZ2h0OiA0NTRweDtcXG59XFxuXFxuLnByb2plY3QtZWxlbWVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1lbGVtZW50OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgwLCAxODAsIDE4MCk7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmVkaXQtcHJvamVjdC1idXR0b246aG92ZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxufVxcblxcbi5hY3RpdmUtcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzMsIDEzMywgMTMzKTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgICAgXFxufVxcblxcbi5wcm9qZWN0LWZvcm0tYnV0dG9uOmhvdmVyLCAucHJvamVjdC1mb3JtLWJ1dHRvbjpmb2N1cyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLWNvbmZpcm0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMsIDIxNCwgMTMpO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLWNhbmNlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDE0LCAxNCk7XFxufVxcblxcbiN0YXNrLWFyZWEge1xcbiAgICBmbGV4OiAxO1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbiN0YXNrLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmV3LXRhc2stYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jbmV3LXRhc2stYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI25ldy10YXNrLWJ1dHRvbi1pY29uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDM1cHg7XFxufVxcblxcbiN0YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWVsZW1lbnQge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnRhc2stYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZG9uZS10YXNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLnRhc2stZG9uZS1idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XFxufVxcblxcbi50YXNrLWRvbmUtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4udGFzay1kb25lLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGFzay1uYW1lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB3aWR0aDogNzIwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcXG4gICAgZm9udC1zaXplOiAyM3B4O1xcbn1cXG5cXG4udGFzay1zdGF0dXMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcXG59XFxuXFxuLnRhc2stZGVhZGxpbmUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmVkaXQtdGFzay1idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XFxufVxcblxcbi5lZGl0LXRhc2stYnV0dG9uIHtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmVkaXQtdGFzay1idXR0b246aG92ZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmRlbGV0ZS10YXNrLWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDQwcHg7XFxufVxcblxcbi5kZWxldGUtdGFzay1idXR0b24ge1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5kZWxldGUtdGFzay1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG59XFxuXFxuI3Rhc2stZm9ybS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jdGFzay1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuI3Rhc2stbmFtZS1pbnB1dC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI3Rhc2stbmFtZS1pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXG59XFxuXFxuI3Rhc2stcHJpb3JpdHktaW5wdXQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuXFxuI3Rhc2stcHJpb3JpdHktaW5wdXQtbGFiZWwge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxufVxcblxcbiN0YXNrLXByaW9yaXR5LWlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA5MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxufVxcblxcbiN0YXNrLWRhdGUtaW5wdXQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDtcXG59XFxuXFxuI3Rhc2stZGF0ZS1pbnB1dC1sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcXG59XFxuXFxuI3Rhc2stZGF0ZS1pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXG59XFxuXFxuI3Rhc2stZm9ybS1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrLWZvcm0tYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAgICBcXG59XFxuXFxuLnRhc2stZm9ybS1idXR0b246aG92ZXIsIC50YXNrLWZvcm0tYnV0dG9uOmZvY3VzIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcbiN0YXNrLWZvcm0tY29uZmlybSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMywgMjE0LCAxMyk7XFxufVxcblxcbiN0YXNrLWZvcm0tY2FuY2VsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMTQsIDE0KTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI0MjQ7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBoZWlnaHQ6IDQycHg7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMCwyMDExLDIwMTIsMjAxMywyMDE0IE1vcmdhbiBSb2RlcmljayBodHRwOi8vcm9kZXJpY2suZGtcbiAqIExpY2Vuc2U6IE1JVCAtIGh0dHA6Ly9tcmducmRyY2subWl0LWxpY2Vuc2Uub3JnXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL21yb2Rlcmljay9QdWJTdWJKU1xuICovXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSl7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIFB1YlN1YiA9IHt9O1xuXG4gICAgaWYgKHJvb3QuUHViU3ViKSB7XG4gICAgICAgIFB1YlN1YiA9IHJvb3QuUHViU3ViO1xuICAgICAgICBjb25zb2xlLndhcm4oXCJQdWJTdWIgYWxyZWFkeSBsb2FkZWQsIHVzaW5nIGV4aXN0aW5nIHZlcnNpb25cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdC5QdWJTdWIgPSBQdWJTdWI7XG4gICAgICAgIGZhY3RvcnkoUHViU3ViKTtcbiAgICB9XG4gICAgLy8gQ29tbW9uSlMgYW5kIE5vZGUuanMgbW9kdWxlIHN1cHBvcnRcbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKXtcbiAgICAgICAgaWYgKG1vZHVsZSAhPT0gdW5kZWZpbmVkICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBQdWJTdWI7IC8vIE5vZGUuanMgc3BlY2lmaWMgYG1vZHVsZS5leHBvcnRzYFxuICAgICAgICB9XG4gICAgICAgIGV4cG9ydHMuUHViU3ViID0gUHViU3ViOyAvLyBDb21tb25KUyBtb2R1bGUgMS4xLjEgc3BlY1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBQdWJTdWI7IC8vIENvbW1vbkpTXG4gICAgfVxuICAgIC8vIEFNRCBzdXBwb3J0XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbiAgICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpe1xuICAgICAgICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBQdWJTdWI7IH0pO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVuZGVmICovXG4gICAgfVxuXG59KCggdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93ICkgfHwgdGhpcywgZnVuY3Rpb24gKFB1YlN1Yil7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIG1lc3NhZ2VzID0ge30sXG4gICAgICAgIGxhc3RVaWQgPSAtMSxcbiAgICAgICAgQUxMX1NVQlNDUklCSU5HX01TRyA9ICcqJztcblxuICAgIGZ1bmN0aW9uIGhhc0tleXMob2JqKXtcbiAgICAgICAgdmFyIGtleTtcblxuICAgICAgICBmb3IgKGtleSBpbiBvYmope1xuICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpICl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHRocm93cyB0aGUgcGFzc2VkIGV4Y2VwdGlvbiwgZm9yIHVzZSBhcyBhcmd1bWVudCBmb3Igc2V0VGltZW91dFxuICAgICAqIEBhbGlhcyB0aHJvd0V4Y2VwdGlvblxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7IE9iamVjdCB9IGV4IEFuIEVycm9yIG9iamVjdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRocm93RXhjZXB0aW9uKCBleCApe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gcmVUaHJvd0V4Y2VwdGlvbigpe1xuICAgICAgICAgICAgdGhyb3cgZXg7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbFN1YnNjcmliZXJXaXRoRGVsYXllZEV4Y2VwdGlvbnMoIHN1YnNjcmliZXIsIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIoIG1lc3NhZ2UsIGRhdGEgKTtcbiAgICAgICAgfSBjYXRjaCggZXggKXtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoIHRocm93RXhjZXB0aW9uKCBleCApLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGxTdWJzY3JpYmVyV2l0aEltbWVkaWF0ZUV4Y2VwdGlvbnMoIHN1YnNjcmliZXIsIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgc3Vic2NyaWJlciggbWVzc2FnZSwgZGF0YSApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGl2ZXJNZXNzYWdlKCBvcmlnaW5hbE1lc3NhZ2UsIG1hdGNoZWRNZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIHZhciBzdWJzY3JpYmVycyA9IG1lc3NhZ2VzW21hdGNoZWRNZXNzYWdlXSxcbiAgICAgICAgICAgIGNhbGxTdWJzY3JpYmVyID0gaW1tZWRpYXRlRXhjZXB0aW9ucyA/IGNhbGxTdWJzY3JpYmVyV2l0aEltbWVkaWF0ZUV4Y2VwdGlvbnMgOiBjYWxsU3Vic2NyaWJlcldpdGhEZWxheWVkRXhjZXB0aW9ucyxcbiAgICAgICAgICAgIHM7XG5cbiAgICAgICAgaWYgKCAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBtZXNzYWdlcywgbWF0Y2hlZE1lc3NhZ2UgKSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAocyBpbiBzdWJzY3JpYmVycyl7XG4gICAgICAgICAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzdWJzY3JpYmVycywgcykpe1xuICAgICAgICAgICAgICAgIGNhbGxTdWJzY3JpYmVyKCBzdWJzY3JpYmVyc1tzXSwgb3JpZ2luYWxNZXNzYWdlLCBkYXRhICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBkZWxpdmVyTmFtZXNwYWNlZCgpe1xuICAgICAgICAgICAgdmFyIHRvcGljID0gU3RyaW5nKCBtZXNzYWdlICksXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG5cbiAgICAgICAgICAgIC8vIGRlbGl2ZXIgdGhlIG1lc3NhZ2UgYXMgaXQgaXMgbm93XG4gICAgICAgICAgICBkZWxpdmVyTWVzc2FnZShtZXNzYWdlLCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zKTtcblxuICAgICAgICAgICAgLy8gdHJpbSB0aGUgaGllcmFyY2h5IGFuZCBkZWxpdmVyIG1lc3NhZ2UgdG8gZWFjaCBsZXZlbFxuICAgICAgICAgICAgd2hpbGUoIHBvc2l0aW9uICE9PSAtMSApe1xuICAgICAgICAgICAgICAgIHRvcGljID0gdG9waWMuc3Vic3RyKCAwLCBwb3NpdGlvbiApO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoJy4nKTtcbiAgICAgICAgICAgICAgICBkZWxpdmVyTWVzc2FnZSggbWVzc2FnZSwgdG9waWMsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UobWVzc2FnZSwgQUxMX1NVQlNDUklCSU5HX01TRywgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFzRGlyZWN0U3Vic2NyaWJlcnNGb3IoIG1lc3NhZ2UgKSB7XG4gICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgZm91bmQgPSBCb29sZWFuKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggbWVzc2FnZXMsIHRvcGljICkgJiYgaGFzS2V5cyhtZXNzYWdlc1t0b3BpY10pKTtcblxuICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWVzc2FnZUhhc1N1YnNjcmliZXJzKCBtZXNzYWdlICl7XG4gICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgZm91bmQgPSBoYXNEaXJlY3RTdWJzY3JpYmVyc0Zvcih0b3BpYykgfHwgaGFzRGlyZWN0U3Vic2NyaWJlcnNGb3IoQUxMX1NVQlNDUklCSU5HX01TRyksXG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcblxuICAgICAgICB3aGlsZSAoICFmb3VuZCAmJiBwb3NpdGlvbiAhPT0gLTEgKXtcbiAgICAgICAgICAgIHRvcGljID0gdG9waWMuc3Vic3RyKCAwLCBwb3NpdGlvbiApO1xuICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG4gICAgICAgICAgICBmb3VuZCA9IGhhc0RpcmVjdFN1YnNjcmliZXJzRm9yKHRvcGljKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCBzeW5jLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIG1lc3NhZ2UgPSAodHlwZW9mIG1lc3NhZ2UgPT09ICdzeW1ib2wnKSA/IG1lc3NhZ2UudG9TdHJpbmcoKSA6IG1lc3NhZ2U7XG5cbiAgICAgICAgdmFyIGRlbGl2ZXIgPSBjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICksXG4gICAgICAgICAgICBoYXNTdWJzY3JpYmVycyA9IG1lc3NhZ2VIYXNTdWJzY3JpYmVycyggbWVzc2FnZSApO1xuXG4gICAgICAgIGlmICggIWhhc1N1YnNjcmliZXJzICl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHN5bmMgPT09IHRydWUgKXtcbiAgICAgICAgICAgIGRlbGl2ZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoIGRlbGl2ZXIsIDAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaXNoZXMgdGhlIG1lc3NhZ2UsIHBhc3NpbmcgdGhlIGRhdGEgdG8gaXQncyBzdWJzY3JpYmVyc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBwdWJsaXNoXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBwdWJsaXNoXG4gICAgICogQHBhcmFtIHt9IGRhdGEgVGhlIGRhdGEgdG8gcGFzcyB0byBzdWJzY3JpYmVyc1xuICAgICAqIEByZXR1cm4geyBCb29sZWFuIH1cbiAgICAgKi9cbiAgICBQdWJTdWIucHVibGlzaCA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCBmYWxzZSwgUHViU3ViLmltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHVibGlzaGVzIHRoZSBtZXNzYWdlIHN5bmNocm9ub3VzbHksIHBhc3NpbmcgdGhlIGRhdGEgdG8gaXQncyBzdWJzY3JpYmVyc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBwdWJsaXNoU3luY1xuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gcHVibGlzaFxuICAgICAqIEBwYXJhbSB7fSBkYXRhIFRoZSBkYXRhIHRvIHBhc3MgdG8gc3Vic2NyaWJlcnNcbiAgICAgKiBAcmV0dXJuIHsgQm9vbGVhbiB9XG4gICAgICovXG4gICAgUHViU3ViLnB1Ymxpc2hTeW5jID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgcmV0dXJuIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIHRydWUsIFB1YlN1Yi5pbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZXMgdGhlIHBhc3NlZCBmdW5jdGlvbiB0byB0aGUgcGFzc2VkIG1lc3NhZ2UuIEV2ZXJ5IHJldHVybmVkIHRva2VuIGlzIHVuaXF1ZSBhbmQgc2hvdWxkIGJlIHN0b3JlZCBpZiB5b3UgbmVlZCB0byB1bnN1YnNjcmliZVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHN1YnNjcmliZSB0b1xuICAgICAqIEBwYXJhbSB7IEZ1bmN0aW9uIH0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGEgbmV3IG1lc3NhZ2UgaXMgcHVibGlzaGVkXG4gICAgICogQHJldHVybiB7IFN0cmluZyB9XG4gICAgICovXG4gICAgUHViU3ViLnN1YnNjcmliZSA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBmdW5jICl7XG4gICAgICAgIGlmICggdHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVzc2FnZSA9ICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N5bWJvbCcpID8gbWVzc2FnZS50b1N0cmluZygpIDogbWVzc2FnZTtcblxuICAgICAgICAvLyBtZXNzYWdlIGlzIG5vdCByZWdpc3RlcmVkIHlldFxuICAgICAgICBpZiAoICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG1lc3NhZ2VzLCBtZXNzYWdlICkgKXtcbiAgICAgICAgICAgIG1lc3NhZ2VzW21lc3NhZ2VdID0ge307XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JjaW5nIHRva2VuIGFzIFN0cmluZywgdG8gYWxsb3cgZm9yIGZ1dHVyZSBleHBhbnNpb25zIHdpdGhvdXQgYnJlYWtpbmcgdXNhZ2VcbiAgICAgICAgLy8gYW5kIGFsbG93IGZvciBlYXN5IHVzZSBhcyBrZXkgbmFtZXMgZm9yIHRoZSAnbWVzc2FnZXMnIG9iamVjdFxuICAgICAgICB2YXIgdG9rZW4gPSAndWlkXycgKyBTdHJpbmcoKytsYXN0VWlkKTtcbiAgICAgICAgbWVzc2FnZXNbbWVzc2FnZV1bdG9rZW5dID0gZnVuYztcblxuICAgICAgICAvLyByZXR1cm4gdG9rZW4gZm9yIHVuc3Vic2NyaWJpbmdcbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH07XG5cbiAgICBQdWJTdWIuc3Vic2NyaWJlQWxsID0gZnVuY3Rpb24oIGZ1bmMgKXtcbiAgICAgICAgcmV0dXJuIFB1YlN1Yi5zdWJzY3JpYmUoQUxMX1NVQlNDUklCSU5HX01TRywgZnVuYyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZXMgdGhlIHBhc3NlZCBmdW5jdGlvbiB0byB0aGUgcGFzc2VkIG1lc3NhZ2Ugb25jZVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVPbmNlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0geyBGdW5jdGlvbiB9IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBhIG5ldyBtZXNzYWdlIGlzIHB1Ymxpc2hlZFxuICAgICAqIEByZXR1cm4geyBQdWJTdWIgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5zdWJzY3JpYmVPbmNlID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGZ1bmMgKXtcbiAgICAgICAgdmFyIHRva2VuID0gUHViU3ViLnN1YnNjcmliZSggbWVzc2FnZSwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIC8vIGJlZm9yZSBmdW5jIGFwcGx5LCB1bnN1YnNjcmliZSBtZXNzYWdlXG4gICAgICAgICAgICBQdWJTdWIudW5zdWJzY3JpYmUoIHRva2VuICk7XG4gICAgICAgICAgICBmdW5jLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBQdWJTdWI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgc3Vic2NyaXB0aW9uc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgY2xlYXJBbGxTdWJzY3JpcHRpb25zXG4gICAgICovXG4gICAgUHViU3ViLmNsZWFyQWxsU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGNsZWFyQWxsU3Vic2NyaXB0aW9ucygpe1xuICAgICAgICBtZXNzYWdlcyA9IHt9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBzdWJzY3JpcHRpb25zIGJ5IHRoZSB0b3BpY1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgY2xlYXJBbGxTdWJzY3JpcHRpb25zXG4gICAgICogQHJldHVybiB7IGludCB9XG4gICAgICovXG4gICAgUHViU3ViLmNsZWFyU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGNsZWFyU3Vic2NyaXB0aW9ucyh0b3BpYyl7XG4gICAgICAgIHZhciBtO1xuICAgICAgICBmb3IgKG0gaW4gbWVzc2FnZXMpe1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlcywgbSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCl7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VzW21dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAgIENvdW50IHN1YnNjcmlwdGlvbnMgYnkgdGhlIHRvcGljXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBjb3VudFN1YnNjcmlwdGlvbnNcbiAgICAgKiBAcmV0dXJuIHsgQXJyYXkgfVxuICAgICovXG4gICAgUHViU3ViLmNvdW50U3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGNvdW50U3Vic2NyaXB0aW9ucyh0b3BpYyl7XG4gICAgICAgIHZhciBtO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgICAgdmFyIHRva2VuO1xuICAgICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgICBmb3IgKG0gaW4gbWVzc2FnZXMpIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKHRva2VuIGluIG1lc3NhZ2VzW21dKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgICBHZXRzIHN1YnNjcmlwdGlvbnMgYnkgdGhlIHRvcGljXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBnZXRTdWJzY3JpcHRpb25zXG4gICAgKi9cbiAgICBQdWJTdWIuZ2V0U3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGdldFN1YnNjcmlwdGlvbnModG9waWMpe1xuICAgICAgICB2YXIgbTtcbiAgICAgICAgdmFyIGxpc3QgPSBbXTtcbiAgICAgICAgZm9yIChtIGluIG1lc3NhZ2VzKXtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDApe1xuICAgICAgICAgICAgICAgIGxpc3QucHVzaChtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBzdWJzY3JpcHRpb25zXG4gICAgICpcbiAgICAgKiAtIFdoZW4gcGFzc2VkIGEgdG9rZW4sIHJlbW92ZXMgYSBzcGVjaWZpYyBzdWJzY3JpcHRpb24uXG4gICAgICpcblx0ICogLSBXaGVuIHBhc3NlZCBhIGZ1bmN0aW9uLCByZW1vdmVzIGFsbCBzdWJzY3JpcHRpb25zIGZvciB0aGF0IGZ1bmN0aW9uXG4gICAgICpcblx0ICogLSBXaGVuIHBhc3NlZCBhIHRvcGljLCByZW1vdmVzIGFsbCBzdWJzY3JpcHRpb25zIGZvciB0aGF0IHRvcGljIChoaWVyYXJjaHkpXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVPbmNlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIHwgRnVuY3Rpb24gfSB2YWx1ZSBBIHRva2VuLCBmdW5jdGlvbiBvciB0b3BpYyB0byB1bnN1YnNjcmliZSBmcm9tXG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyB3aXRoIGEgdG9rZW5cbiAgICAgKiB2YXIgdG9rZW4gPSBQdWJTdWIuc3Vic2NyaWJlKCdteXRvcGljJywgbXlGdW5jKTtcbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUodG9rZW4pO1xuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgd2l0aCBhIGZ1bmN0aW9uXG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKG15RnVuYyk7XG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyBmcm9tIGEgdG9waWNcbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUoJ215dG9waWMnKTtcbiAgICAgKi9cbiAgICBQdWJTdWIudW5zdWJzY3JpYmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgIHZhciBkZXNjZW5kYW50VG9waWNFeGlzdHMgPSBmdW5jdGlvbih0b3BpYykge1xuICAgICAgICAgICAgICAgIHZhciBtO1xuICAgICAgICAgICAgICAgIGZvciAoIG0gaW4gbWVzc2FnZXMgKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDAgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGEgZGVzY2VuZGFudCBvZiB0aGUgdG9waWMgZXhpc3RzOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNUb3BpYyAgICA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIHZhbHVlKSB8fCBkZXNjZW5kYW50VG9waWNFeGlzdHModmFsdWUpICksXG4gICAgICAgICAgICBpc1Rva2VuICAgID0gIWlzVG9waWMgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyxcbiAgICAgICAgICAgIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicsXG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZSxcbiAgICAgICAgICAgIG0sIG1lc3NhZ2UsIHQ7XG5cbiAgICAgICAgaWYgKGlzVG9waWMpe1xuICAgICAgICAgICAgUHViU3ViLmNsZWFyU3Vic2NyaXB0aW9ucyh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKCBtIGluIG1lc3NhZ2VzICl7XG4gICAgICAgICAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggbWVzc2FnZXMsIG0gKSApe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlc1ttXTtcblxuICAgICAgICAgICAgICAgIGlmICggaXNUb2tlbiAmJiBtZXNzYWdlW3ZhbHVlXSApe1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVzc2FnZVt2YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAvLyB0b2tlbnMgYXJlIHVuaXF1ZSwgc28gd2UgY2FuIGp1c3Qgc3RvcCBoZXJlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoIHQgaW4gbWVzc2FnZSApe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlLCB0KSAmJiBtZXNzYWdlW3RdID09PSB2YWx1ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VbdF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn0pKTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBcbihUaGUgTUlUIExpY2Vuc2UpXG5Db3B5cmlnaHQgKGMpIDIwMTQtMjAyMSBIYWzDoXN6IMOBZMOhbSA8YWRhbUBhaW1mb3JtLmNvbT5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gIFVuaXF1ZSBIZXhhdHJpZGVjaW1hbCBJRCBHZW5lcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyAgRGVwZW5kZW5jaWVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnZhciBwaWQgPSB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5waWQgPyBwcm9jZXNzLnBpZC50b1N0cmluZygzNikgOiAnJyA7XG52YXIgYWRkcmVzcyA9ICcnO1xuaWYodHlwZW9mIF9fd2VicGFja19yZXF1aXJlX18gIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHJlcXVpcmUgIT09ICd1bmRlZmluZWQnKXtcbiAgICB2YXIgbWFjID0gJycsIG9zID0gcmVxdWlyZSgnb3MnKTsgXG4gICAgaWYob3MubmV0d29ya0ludGVyZmFjZXMpIHZhciBuZXR3b3JrSW50ZXJmYWNlcyA9IG9zLm5ldHdvcmtJbnRlcmZhY2VzKCk7XG4gICAgaWYobmV0d29ya0ludGVyZmFjZXMpe1xuICAgICAgICBsb29wOlxuICAgICAgICBmb3IobGV0IGludGVyZmFjZV9rZXkgaW4gbmV0d29ya0ludGVyZmFjZXMpe1xuICAgICAgICAgICAgY29uc3QgbmV0d29ya0ludGVyZmFjZSA9IG5ldHdvcmtJbnRlcmZhY2VzW2ludGVyZmFjZV9rZXldO1xuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gbmV0d29ya0ludGVyZmFjZS5sZW5ndGg7XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmKG5ldHdvcmtJbnRlcmZhY2VbaV0gIT09IHVuZGVmaW5lZCAmJiBuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYyAmJiBuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYyAhPSAnMDA6MDA6MDA6MDA6MDA6MDAnKXtcbiAgICAgICAgICAgICAgICAgICAgbWFjID0gbmV0d29ya0ludGVyZmFjZVtpXS5tYWM7IGJyZWFrIGxvb3A7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFkZHJlc3MgPSBtYWMgPyBwYXJzZUludChtYWMucmVwbGFjZSgvXFw6fFxcRCsvZ2ksICcnKSkudG9TdHJpbmcoMzYpIDogJycgO1xuICAgIH1cbn0gXG5cbi8vICBFeHBvcnRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbm1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBhZGRyZXNzICsgcGlkICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxubW9kdWxlLmV4cG9ydHMucHJvY2VzcyA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBwaWQgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5tb2R1bGUuZXhwb3J0cy50aW1lICAgID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cblxuLy8gIEhlbHBlcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZnVuY3Rpb24gbm93KCl7XG4gICAgdmFyIHRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHZhciBsYXN0ID0gbm93Lmxhc3QgfHwgdGltZTtcbiAgICByZXR1cm4gbm93Lmxhc3QgPSB0aW1lID4gbGFzdCA/IHRpbWUgOiBsYXN0ICsgMTtcbn1cbiIsImltcG9ydCB7IFB1YlN1YiB9IGZyb20gXCJwdWJzdWItanNcIjtcblxuZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50LCBjYWxsYmFjaykge1xuICAgIHJldHVybiBQdWJTdWIuc3Vic2NyaWJlKGV2ZW50LCBjYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2goZXZlbnQsIGRhdGEpIHtcbiAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goZXZlbnQsIGRhdGEpO1xufVxuXG5leHBvcnQgeyBzdWJzY3JpYmUsIHB1Ymxpc2ggfTsiLCJpbXBvcnQgeyBzdWJzY3JpYmUgfSBmcm9tIFwiLi9ldmVudC1tYW5hZ2VyLmpzXCI7XG5cbmltcG9ydCB7XG4gICAgYWN0aXZhdGVQb2plY3RGb3JtLFxuICAgIGV4aXRQcm9qZWN0Rm9ybSxcbiAgICBzZXRBY3RpdmVQcm9qZWN0LFxuICAgIHN3aXRjaFRvUHJvamVjdCxcbiAgICB1cGRhdGVQcm9qZWN0Q29udGFpbmVyLFxuICAgIHVwZGF0ZVRhc2tDb250YWluZXIsXG4gICAgYWN0aXZhdGVUYXNrRm9ybSxcbiAgICBleGl0VGFza0Zvcm0sXG4gICAgZmlsbFRhc2tGb3JtIH1cbmZyb20gXCIuL3VpLmpzXCI7XG5cbmltcG9ydCB7IGFkZFByb2plY3QsIGRlbGV0ZVByb2plY3QsIHJlbmFtZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyBnZXRQcm9qZWN0TGlzdEZyb21TdG9yYWdlLCB1cGRhdGVTdG9yYWdlIH0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuaW1wb3J0IHsgYWRkVGFzaywgZGVsZXRlVGFzaywgdXBkYXRlVGFzaywgdG9nZ2xlVGFza0RvbmUgfSBmcm9tIFwiLi90YXNrLmpzXCI7XG5cbmZ1bmN0aW9uIGdldFByb2plY3RMaXN0ICgpIHtcbiAgICByZXR1cm4gZ2V0UHJvamVjdExpc3RGcm9tU3RvcmFnZSgpO1xufVxuXG5zdWJzY3JpYmUoXCJBRERFRF9QUk9KRUNUXCIsIGZ1bmN0aW9uIChldmVudCwge3Byb2plY3RMaXN0LCBuZXdQcm9qZWN0VUlEfSkge1xuICAgIHVwZGF0ZVN0b3JhZ2UocHJvamVjdExpc3QpO1xuICAgIHVwZGF0ZVByb2plY3RDb250YWluZXIoKTtcbiAgICBzd2l0Y2hUb1Byb2plY3QobmV3UHJvamVjdFVJRCk7XG59KTtcblxuc3Vic2NyaWJlKFwiREVMRVRFRF9QUk9KRUNUXCIsIGZ1bmN0aW9uIChldmVudCwgcHJvamVjdExpc3QpIHtcbiAgICB1cGRhdGVTdG9yYWdlKHByb2plY3RMaXN0KTtcbiAgICB1cGRhdGVQcm9qZWN0Q29udGFpbmVyKCk7XG4gICAgc3dpdGNoVG9Qcm9qZWN0KHByb2plY3RMaXN0WzBdLlVJRCk7XG59KTtcblxuc3Vic2NyaWJlKFwiUkVOQU1FRF9QUk9KRUNUXCIsIGZ1bmN0aW9uIChldmVudCwge3Byb2plY3RMaXN0LCByZW5hbWVkUHJvamVjdFVJRH0pIHtcbiAgICB1cGRhdGVTdG9yYWdlKHByb2plY3RMaXN0KTtcbiAgICB1cGRhdGVQcm9qZWN0Q29udGFpbmVyKCk7XG4gICAgc3dpdGNoVG9Qcm9qZWN0KHJlbmFtZWRQcm9qZWN0VUlEKTtcbn0pO1xuXG5zdWJzY3JpYmUoXCJORVdfUFJPSkVDVF9CVVRUT05fQ0xJQ0tFRFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1mb3JtXCIpO1xuICAgIHByb2plY3RGb3JtLmRhdGFzZXQubmV3UHJvamVjdCA9ICd0cnVlJztcbiAgICBhY3RpdmF0ZVBvamVjdEZvcm0oKTtcbn0pO1xuXG5zdWJzY3JpYmUoXCJQUk9KRUNUX0ZPUk1fQ09ORklSTV9DTElDS0VEXCIsIGZ1bmN0aW9uIChldmVudCwgcHJvamVjdEZvcm0pIHtcbiAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICBpZihwcm9qZWN0Rm9ybS5kYXRhc2V0Lm5ld1Byb2plY3QgPT09ICd0cnVlJykge1xuICAgICAgICByZXN1bHQgPSBhZGRQcm9qZWN0KHByb2plY3RGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1mb3JtLWlucHV0XCIpLnZhbHVlKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RVSUQgPSBwcm9qZWN0Rm9ybS5kYXRhc2V0LnByb2plY3RVaWQ7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdEZvcm0ucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWZvcm0taW5wdXRcIikudmFsdWU7XG4gICAgICAgIHJlc3VsdCA9IHJlbmFtZVByb2plY3QocHJvamVjdFVJRCwgcHJvamVjdE5hbWUpO1xuICAgIH1cblxuICAgIGlmKHJlc3VsdCkge1xuICAgICAgICBleGl0UHJvamVjdEZvcm0oKTtcbiAgICB9XG59KTtcblxuc3Vic2NyaWJlKFwiUFJPSkVDVF9GT1JNX0NBTkNFTF9DTElDS0VEXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV4aXRQcm9qZWN0Rm9ybSgpO1xufSk7XG5cbnN1YnNjcmliZShcIlNXSVRDSF9UT19QUk9KRUNUXCIsIGZ1bmN0aW9uIChldmVudCwgcHJvamVjdFVJRCkge1xuICAgIHNldEFjdGl2ZVByb2plY3QocHJvamVjdFVJRCk7XG4gICAgdXBkYXRlVGFza0NvbnRhaW5lcihwcm9qZWN0VUlEKTtcbn0pO1xuXG5zdWJzY3JpYmUoXCJQUk9KRUNUX0VMRU1FTlRfQ0xJQ0tFRFwiLCBmdW5jdGlvbiAoZXZlbnQsIHByb2plY3RVSUQpIHtcbiAgICBzd2l0Y2hUb1Byb2plY3QocHJvamVjdFVJRCk7XG59KTtcblxuc3Vic2NyaWJlKFwiREVMRVRFX1BST0pFQ1RfQlVUVE9OX0NMSUNLRURcIiwgZnVuY3Rpb24gKGV2ZW50LCBwcm9qZWN0VUlEKSB7XG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0VUlEKTtcbn0pO1xuXG5zdWJzY3JpYmUoXCJFRElUX1BST0pFQ1RfQlVUVE9OX0NMSUNLRURcIiwgZnVuY3Rpb24gKGV2ZW50LCBwcm9qZWN0VUlEKSB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBnZXRQcm9qZWN0TGlzdCgpO1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWZvcm1cIik7XG4gICAgcHJvamVjdEZvcm0uZGF0YXNldC5uZXdQcm9qZWN0ID0gJ2ZhbHNlJztcbiAgICBwcm9qZWN0Rm9ybS5kYXRhc2V0LnByb2plY3RVaWQgPSBwcm9qZWN0VUlEO1xuICAgIHByb2plY3RGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1mb3JtLWlucHV0XCIpLnZhbHVlID0gcHJvamVjdExpc3QuZmluZChwcm9qZWN0ID0+IHByb2plY3QuVUlEID09PSBwcm9qZWN0VUlEKS5uYW1lO1xuICAgIGFjdGl2YXRlUG9qZWN0Rm9ybSgpO1xufSk7XG5cbnN1YnNjcmliZShcIkFEREVEX1RBU0tcIiwgZnVuY3Rpb24gKGV2ZW50LCB7cHJvamVjdExpc3QsIHByb2plY3RVSUR9KSB7XG4gICAgdXBkYXRlU3RvcmFnZShwcm9qZWN0TGlzdCk7XG4gICAgdXBkYXRlVGFza0NvbnRhaW5lcihwcm9qZWN0VUlEKTtcbn0pO1xuXG5zdWJzY3JpYmUoXCJERUxFVEVEX1RBU0tcIiwgZnVuY3Rpb24gKGV2ZW50LCB7cHJvamVjdExpc3QsIHByb2plY3RVSUR9KSB7XG4gICAgdXBkYXRlU3RvcmFnZShwcm9qZWN0TGlzdCk7XG4gICAgdXBkYXRlVGFza0NvbnRhaW5lcihwcm9qZWN0VUlEKTtcbn0pO1xuXG5zdWJzY3JpYmUoXCJVUERBVEVEX1RBU0tcIiwgZnVuY3Rpb24gKGV2ZW50LCB7cHJvamVjdExpc3QsIHByb2plY3RVSUR9KSB7XG4gICAgdXBkYXRlU3RvcmFnZShwcm9qZWN0TGlzdCk7XG4gICAgdXBkYXRlVGFza0NvbnRhaW5lcihwcm9qZWN0VUlEKTtcbn0pO1xuXG5zdWJzY3JpYmUoXCJUT0dHTEVEX1RBU0tfRE9ORVwiLCBmdW5jdGlvbiAoZXZlbnQsIHtwcm9qZWN0TGlzdCwgcHJvamVjdFVJRH0pIHtcbiAgICB1cGRhdGVTdG9yYWdlKHByb2plY3RMaXN0KTtcbiAgICB1cGRhdGVUYXNrQ29udGFpbmVyKHByb2plY3RVSUQpO1xufSk7XG5cbnN1YnNjcmliZShcIkRPTkVfVEFTS19CVVRUT05fQ0xJQ0tFRFwiLCBmdW5jdGlvbiAoZXZlbnQsIHtwcm9qZWN0VUlELCB0YXNrVUlEfSkge1xuICAgIHRvZ2dsZVRhc2tEb25lKHByb2plY3RVSUQsIHRhc2tVSUQpO1xufSk7XG5cbnN1YnNjcmliZShcIkVESVRfVEFTS19CVVRUT05fQ0xJQ0tFRFwiLCBmdW5jdGlvbihldmVudCwge3Byb2plY3RVSUQsIHRhc2tVSUR9KSB7XG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZm9ybVwiKTtcbiAgICB0YXNrRm9ybS5kYXRhc2V0LnByb2plY3RVaWQgPSBwcm9qZWN0VUlEO1xuICAgIHRhc2tGb3JtLmRhdGFzZXQudGFza1VpZCA9IHRhc2tVSUQ7XG4gICAgdGFza0Zvcm0uZGF0YXNldC5uZXdUYXNrID0gJ2ZhbHNlJztcbiAgICBmaWxsVGFza0Zvcm0ocHJvamVjdFVJRCwgdGFza1VJRCk7XG4gICAgYWN0aXZhdGVUYXNrRm9ybSgpO1xufSk7XG5cbnN1YnNjcmliZShcIkRFTEVURV9UQVNLX0JVVFRPTl9DTElDS0VEXCIsIGZ1bmN0aW9uIChldmVudCwge3Byb2plY3RVSUQsIHRhc2tVSUR9KSB7XG4gICAgZGVsZXRlVGFzayhwcm9qZWN0VUlELCB0YXNrVUlEKTtcbn0pO1xuXG5zdWJzY3JpYmUoXCJORVdfVEFTS19CVVRUT05fQ0xJQ0tFRFwiLCBmdW5jdGlvbiAoZXZlbnQsIHByb2plY3RVSUQpIHtcbiAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1mb3JtXCIpO1xuICAgIHRhc2tGb3JtLmRhdGFzZXQucHJvamVjdFVpZCA9IHByb2plY3RVSUQ7XG4gICAgdGFza0Zvcm0uZGF0YXNldC5uZXdUYXNrID0gJ3RydWUnO1xuICAgIGFjdGl2YXRlVGFza0Zvcm0oKTtcbn0pO1xuXG5zdWJzY3JpYmUoXCJUQVNLX0ZPUk1fQ09ORklSTV9DTElDS0VEXCIsIGZ1bmN0aW9uIChldmVudCwgdGFza0Zvcm0pIHtcbiAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9qZWN0VUlEID0gdGFza0Zvcm0uZGF0YXNldC5wcm9qZWN0VWlkO1xuICAgIGNvbnN0IHRhc2tOYW1lID0gdGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcIiN0YXNrLW5hbWUtaW5wdXRcIikudmFsdWU7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gdGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcIiN0YXNrLXByaW9yaXR5LWlucHV0XCIpLnZhbHVlO1xuICAgIGNvbnN0IHRhc2tEZWFkbGluZSA9IHRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kYXRlLWlucHV0XCIpLnZhbHVlO1xuXG4gICAgaWYodGFza0Zvcm0uZGF0YXNldC5uZXdUYXNrID09PSAndHJ1ZScpIHtcbiAgICAgICAgcmVzdWx0ID0gYWRkVGFzayhwcm9qZWN0VUlELCB0YXNrTmFtZSwgdGFza1ByaW9yaXR5LCB0YXNrRGVhZGxpbmUpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGFza1VJRCA9IHRhc2tGb3JtLmRhdGFzZXQudGFza1VpZDtcbiAgICAgICAgcmVzdWx0ID0gdXBkYXRlVGFzayhwcm9qZWN0VUlELCB0YXNrVUlELCB0YXNrTmFtZSwgdGFza1ByaW9yaXR5LCB0YXNrRGVhZGxpbmUpO1xuICAgIH1cblxuICAgIGlmKHJlc3VsdCkge1xuICAgICAgICBleGl0VGFza0Zvcm0oKTtcbiAgICB9XG59KTtcblxuc3Vic2NyaWJlKFwiVEFTS19GT1JNX0NBTkNFTF9DTElDS0VEXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV4aXRUYXNrRm9ybSgpO1xufSk7XG5cbnN1YnNjcmliZShcIlBPUFVMQVRFX1BST0pFQ1RTXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZihnZXRQcm9qZWN0TGlzdCgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBhZGRQcm9qZWN0KCdEZWZhdWx0Jyk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICB1cGRhdGVQcm9qZWN0Q29udGFpbmVyKCk7XG4gICAgICAgIHN3aXRjaFRvUHJvamVjdChnZXRQcm9qZWN0TGlzdCgpWzBdLlVJRCk7XG4gICAgfVxufSk7XG5cbmV4cG9ydCB7IGdldFByb2plY3RMaXN0IH07IiwiaW1wb3J0IHVuaXFpZCBmcm9tICd1bmlxaWQnO1xuaW1wb3J0IHsgcHVibGlzaCB9IGZyb20gJy4vZXZlbnQtbWFuYWdlci5qcyc7XG5pbXBvcnQgeyBnZXRQcm9qZWN0TGlzdCB9IGZyb20gJy4vZXZlbnRzLmpzJztcblxuZnVuY3Rpb24gcHJvamVjdEZhY3RvcnkocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0ge1xuICAgICAgICBVSUQ6IHVuaXFpZCgpLFxuICAgICAgICBuYW1lOiBwcm9qZWN0TmFtZSxcbiAgICAgICAgdGFza3M6IFtdXG4gICAgfTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgaWYocHJvamVjdE5hbWUgPT09ICcnKSB7XG4gICAgICAgIGFsZXJ0KCdQcm9qZWN0IG5hbWUgY2Fubm90IGJlIGVtcHR5Jyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgcHJvamVjdExpc3QgPSBnZXRQcm9qZWN0TGlzdCgpO1xuXG4gICAgaWYgKHByb2plY3RMaXN0LnNvbWUocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lKSkge1xuICAgICAgICBhbGVydCgnUHJvamVjdCAnICsgcHJvamVjdE5hbWUgKyAnIGFscmVhZHkgZXhpc3RzJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkocHJvamVjdE5hbWUpO1xuICAgIHByb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdCk7XG4gICAgcHVibGlzaCgnQURERURfUFJPSkVDVCcsIHtwcm9qZWN0TGlzdCwgbmV3UHJvamVjdFVJRDogbmV3UHJvamVjdC5VSUR9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0VUlEKSB7XG4gICAgdmFyIHByb2plY3RMaXN0ID0gZ2V0UHJvamVjdExpc3QoKTtcblxuICAgIGNvbnN0IHRyeWluZ1RvRGVsZXRlRGVmYXVsdFByb2plY3QgPSBwcm9qZWN0TGlzdC5zb21lKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSAnRGVmYXVsdCcgJiYgcHJvamVjdC5VSUQgPT09IHByb2plY3RVSUQpO1xuXG4gICAgaWYodHJ5aW5nVG9EZWxldGVEZWZhdWx0UHJvamVjdCkge1xuICAgICAgICBhbGVydCgnQ2Fubm90IGRlbGV0ZSBEZWZhdWx0IHByb2plY3QnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHByb2plY3RMaXN0ID0gcHJvamVjdExpc3QuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5VSUQgIT09IHByb2plY3RVSUQpO1xuICAgIHB1Ymxpc2goJ0RFTEVURURfUFJPSkVDVCcsIHByb2plY3RMaXN0KTtcbn1cblxuZnVuY3Rpb24gcmVuYW1lUHJvamVjdChwcm9qZWN0VUlELCBuZXdOYW1lKSB7XG4gICAgdmFyIHByb2plY3RMaXN0ID0gZ2V0UHJvamVjdExpc3QoKTtcblxuICAgIGNvbnN0IHRyeWluZ1RvUmVuYW1lRGVmYXVsdFByb2plY3QgPSBwcm9qZWN0TGlzdC5zb21lKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSAnRGVmYXVsdCcgJiYgcHJvamVjdC5VSUQgPT09IHByb2plY3RVSUQpO1xuXG4gICAgaWYodHJ5aW5nVG9SZW5hbWVEZWZhdWx0UHJvamVjdCkge1xuICAgICAgICBhbGVydCgnQ2Fubm90IHJlbmFtZSBEZWZhdWx0IHByb2plY3QnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmKHByb2plY3RMaXN0LnNvbWUocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IG5ld05hbWUgJiYgcHJvamVjdC5VSUQgIT09IHByb2plY3RVSUQpKSB7XG4gICAgICAgIGFsZXJ0KCdQcm9qZWN0ICcgKyBuZXdOYW1lICsgJyBhbHJlYWR5IGV4aXN0cycpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBpZiAocHJvamVjdExpc3RbaW5kZXhdLlVJRCA9PSBwcm9qZWN0VUlEKSB7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdFtpbmRleF0ubmFtZSA9IG5ld05hbWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1Ymxpc2goJ1JFTkFNRURfUFJPSkVDVCcsIHtwcm9qZWN0TGlzdCwgcmVuYW1lZFByb2plY3RVSUQgOiBwcm9qZWN0VUlEfSk7XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCB7IGFkZFByb2plY3QsIGRlbGV0ZVByb2plY3QsIHJlbmFtZVByb2plY3QgfTsiLCJmdW5jdGlvbiB1cGRhdGVTdG9yYWdlKHByb2plY3RMaXN0KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG8tbGlzdC1wcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RMaXN0RnJvbVN0b3JhZ2UgKCkge1xuICAgIGlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kby1saXN0LXByb2plY3RzJykpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8tbGlzdC1wcm9qZWN0cycpKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IHVwZGF0ZVN0b3JhZ2UsIGdldFByb2plY3RMaXN0RnJvbVN0b3JhZ2UgfTsiLCJpbXBvcnQgeyBwdWJsaXNoIH0gZnJvbSBcIi4vZXZlbnQtbWFuYWdlci5qc1wiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdExpc3QgfSBmcm9tIFwiLi9ldmVudHMuanNcIjtcbmltcG9ydCB1bmlxaWQgZnJvbSBcInVuaXFpZFwiO1xuXG5mdW5jdGlvbiB0YXNrRmFjdG9yeSh0YXNrTmFtZSwgdGFza1ByaW9yaXR5LCB0YXNrRGVhZGxpbmUsIHByb2plY3RVSUQpIHtcbiAgICBjb25zdCB0YXNrID0ge1xuICAgICAgICBVSUQ6IHVuaXFpZCgpLFxuICAgICAgICBuYW1lOiB0YXNrTmFtZSxcbiAgICAgICAgcHJpb3JpdHk6IHRhc2tQcmlvcml0eSxcbiAgICAgICAgZGVhZGxpbmU6IHRhc2tEZWFkbGluZSxcbiAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgIHByb2plY3RVSUQ6IHByb2plY3RVSURcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRhc2s7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tUb1Byb2plY3QobmV3VGFzaywgcHJvamVjdFVJRCkge1xuICAgIHZhciBwcm9qZWN0TGlzdCA9IGdldFByb2plY3RMaXN0KCk7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJvamVjdExpc3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGlmIChwcm9qZWN0TGlzdFtpbmRleF0uVUlEID09IHByb2plY3RVSUQpIHtcbiAgICAgICAgICAgIHByb2plY3RMaXN0W2luZGV4XS50YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaXNoKCdBRERFRF9UQVNLJywge3Byb2plY3RMaXN0LCBwcm9qZWN0VUlEfSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVRhc2tEb25lKHByb2plY3RVSUQsIHRhc2tVSUQpIHtcbiAgICB2YXIgcHJvamVjdExpc3QgPSBnZXRQcm9qZWN0TGlzdCgpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKHByb2plY3RMaXN0W2luZGV4XS5VSUQgPT0gcHJvamVjdFVJRCkge1xuICAgICAgICAgICAgcHJvamVjdExpc3RbaW5kZXhdLnRhc2tzID0gcHJvamVjdExpc3RbaW5kZXhdLnRhc2tzLm1hcCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5VSUQgPT0gdGFza1VJRCkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrLmRvbmUgPSAhdGFzay5kb25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGlzaCgnVE9HR0xFRF9UQVNLX0RPTkUnLCB7cHJvamVjdExpc3QsIHByb2plY3RVSUR9KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tWYWxpZGl0eSh0YXNrTmFtZSwgdGFza0RlYWRsaW5lKSB7XG4gICAgaWYodGFza05hbWUgPT0gJycgfHwgKG5ldyBEYXRlKHRhc2tEZWFkbGluZSkpID09ICdJbnZhbGlkIERhdGUnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlVGFzayhwcm9qZWN0VUlELCB0YXNrVUlELCB0YXNrTmFtZSwgdGFza1ByaW9yaXR5LCB0YXNrRGVhZGxpbmUpIHtcbiAgICBpZighY2hlY2tWYWxpZGl0eSh0YXNrTmFtZSwgdGFza0RlYWRsaW5lKSkge1xuICAgICAgICBhbGVydCgnVGFzayBuYW1lIGFuZCBkZWFkbGluZSBhcmUgcmVxdWlyZWQhJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgcHJvamVjdExpc3QgPSBnZXRQcm9qZWN0TGlzdCgpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKHByb2plY3RMaXN0W2luZGV4XS5VSUQgPT0gcHJvamVjdFVJRCkge1xuICAgICAgICAgICAgcHJvamVjdExpc3RbaW5kZXhdLnRhc2tzID0gcHJvamVjdExpc3RbaW5kZXhdLnRhc2tzLm1hcCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5VSUQgPT0gdGFza1VJRCkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrLm5hbWUgPSB0YXNrTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5wcmlvcml0eSA9IHRhc2tQcmlvcml0eTtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5kZWFkbGluZSA9IHRhc2tEZWFkbGluZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1Ymxpc2goJ1VQREFURURfVEFTSycsIHtwcm9qZWN0TGlzdCwgcHJvamVjdFVJRH0pO1xuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrKHByb2plY3RVSUQsIHRhc2tOYW1lLCB0YXNrUHJpb3JpdHksIHRhc2tEZWFkbGluZSkge1xuICAgIGlmICghY2hlY2tWYWxpZGl0eSh0YXNrTmFtZSwgdGFza0RlYWRsaW5lKSkge1xuICAgICAgICBhbGVydCgnVGFzayBuYW1lIGFuZCBkZWFkbGluZSBhcmUgcmVxdWlyZWQhJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdUYXNrID0gdGFza0ZhY3RvcnkodGFza05hbWUsIHRhc2tQcmlvcml0eSwgdGFza0RlYWRsaW5lLCBwcm9qZWN0VUlEKTtcbiAgICBhZGRUYXNrVG9Qcm9qZWN0KG5ld1Rhc2ssIHByb2plY3RVSUQpO1xuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKHByb2plY3RVSUQsIHRhc2tVSUQpIHtcbiAgICB2YXIgcHJvamVjdExpc3QgPSBnZXRQcm9qZWN0TGlzdCgpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKHByb2plY3RMaXN0W2luZGV4XS5VSUQgPT0gcHJvamVjdFVJRCkge1xuICAgICAgICAgICAgcHJvamVjdExpc3RbaW5kZXhdLnRhc2tzID0gcHJvamVjdExpc3RbaW5kZXhdLnRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suVUlEICE9PSB0YXNrVUlEKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1Ymxpc2goJ0RFTEVURURfVEFTSycsIHtwcm9qZWN0TGlzdCwgcHJvamVjdFVJRH0pO1xufVxuXG5leHBvcnQgeyBhZGRUYXNrLCBkZWxldGVUYXNrLCB1cGRhdGVUYXNrLCB0b2dnbGVUYXNrRG9uZSB9OyIsImltcG9ydCB7IHB1Ymxpc2ggfSBmcm9tICcuL2V2ZW50LW1hbmFnZXIuanMnO1xuaW1wb3J0IHsgZ2V0UHJvamVjdExpc3QgfSBmcm9tICcuL2V2ZW50cy5qcyc7XG5pbXBvcnQgZGVsZXRlSW1hZ2UgZnJvbSAnLi9pbWFnZXMvZGVsZXRlLWljb24uc3ZnJztcbmltcG9ydCBhZGRJbWFnZSBmcm9tICcuL2ltYWdlcy9hZGQtaWNvbi5zdmcnO1xuaW1wb3J0IGVkaXRJbWFnZSBmcm9tICcuL2ltYWdlcy9lZGl0LWljb24uc3ZnJztcbmltcG9ydCBkb25lSW1hZ2UgZnJvbSAnLi9pbWFnZXMvZG9uZS1pY29uLnN2Zyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RFbGVtZW50KHByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZWxlbWVudCcpO1xuICAgIHByb2plY3RFbGVtZW50LmRhdGFzZXQucHJvamVjdFVpZCA9IHByb2plY3QuVUlEO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICBwcm9qZWN0RWxlbWVudC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG5cbiAgICBjb25zdCBlZGl0UHJvamVjdEJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVkaXRQcm9qZWN0QnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2VkaXQtcHJvamVjdC1idXR0b24tY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBlZGl0UHJvamVjdEJ1dHRvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGVkaXRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXQtcHJvamVjdC1idXR0b24nKTtcbiAgICBlZGl0UHJvamVjdEJ1dHRvbi5zcmMgPSBlZGl0SW1hZ2U7XG5cbiAgICBlZGl0UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHVibGlzaCgnRURJVF9QUk9KRUNUX0JVVFRPTl9DTElDS0VEJywgcHJvamVjdC5VSUQpO1xuICAgIH0pO1xuXG4gICAgZWRpdFByb2plY3RCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdFByb2plY3RCdXR0b24pO1xuICAgIHByb2plY3RFbGVtZW50LmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0QnV0dG9uQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1wcm9qZWN0LWJ1dHRvbi1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBuZXcgSW1hZ2UoKTtcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1wcm9qZWN0LWJ1dHRvbicpO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24uc3JjID0gZGVsZXRlSW1hZ2U7XG5cbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwdWJsaXNoKCdERUxFVEVfUFJPSkVDVF9CVVRUT05fQ0xJQ0tFRCcsIHByb2plY3QuVUlEKTtcbiAgICB9KTtcblxuICAgIGRlbGV0ZVByb2plY3RCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ1dHRvbik7XG4gICAgcHJvamVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICBwcm9qZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldCAhPT0gZGVsZXRlUHJvamVjdEJ1dHRvbiAmJiBlLnRhcmdldCAhPT0gZWRpdFByb2plY3RCdXR0b24pIHtcbiAgICAgICAgICAgIHB1Ymxpc2goJ1BST0pFQ1RfRUxFTUVOVF9DTElDS0VEJywgcHJvamVjdC5VSUQpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvamVjdEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RDb250YWluZXIoKSB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBnZXRQcm9qZWN0TGlzdCgpO1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1jb250YWluZXInKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIHByb2plY3RMaXN0LmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gY3JlYXRlUHJvamVjdEVsZW1lbnQocHJvamVjdCk7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVQcm9qZWN0KHByb2plY3RVSUQpIHtcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1lbGVtZW50Jyk7XG4gICAgcHJvamVjdEVsZW1lbnRzLmZvckVhY2gocHJvamVjdEVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAocHJvamVjdEVsZW1lbnQuZGF0YXNldC5wcm9qZWN0VWlkID09PSBwcm9qZWN0VUlEKSB7XG4gICAgICAgICAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtcHJvamVjdCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXByb2plY3QnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hUb1Byb2plY3QocHJvamVjdFVJRCkge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZ2V0UHJvamVjdExpc3QoKTtcbiAgICBjb25zdCBmb3VuZFByb2plY3QgPSBwcm9qZWN0TGlzdC5zb21lKHByb2plY3QgPT4gcHJvamVjdC5VSUQgPT09IHByb2plY3RVSUQpO1xuXG4gICAgaWYgKCFmb3VuZFByb2plY3QpIHtcbiAgICAgICAgc3dpdGNoVG9Qcm9qZWN0KHByb2plY3RMaXN0WzBdLlVJRCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwdWJsaXNoKCdTV0lUQ0hfVE9fUFJPSkVDVCcsIHByb2plY3RVSUQpO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZVBvamVjdEZvcm0oKSB7XG4gICAgY29uc3QgcHJvamVjdEZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1mb3JtLWNvbnRhaW5lcicpO1xuICAgIHByb2plY3RGb3JtQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgY29uc3QgcHJvamVjdEZvcm1JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0taW5wdXQnKTtcbiAgICBwcm9qZWN0Rm9ybUlucHV0LmZvY3VzKCk7XG59XG5cbmZ1bmN0aW9uIGV4aXRQcm9qZWN0Rm9ybSgpIHtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0tY29udGFpbmVyJyk7XG4gICAgcHJvamVjdEZvcm1Db250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIGNvbnN0IHByb2plY3RGb3JtSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1mb3JtLWlucHV0Jyk7XG4gICAgcHJvamVjdEZvcm1JbnB1dC52YWx1ZSA9ICcnO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0Rm9ybUJ1dHRvbnMoKSB7XG4gICAgY29uc3QgcHJvamVjdEZvcm1CdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdEZvcm1CdXR0b25zLmlkID0gJ3Byb2plY3QtZm9ybS1idXR0b25zJztcblxuICAgIGNvbnN0IHByb2plY3RGb3JtQ29uZmlybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3RGb3JtQ29uZmlybS5pZCA9ICdwcm9qZWN0LWZvcm0tY29uZmlybSc7XG4gICAgcHJvamVjdEZvcm1Db25maXJtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZm9ybS1idXR0b24nKTtcbiAgICBwcm9qZWN0Rm9ybUNvbmZpcm0udHlwZSA9ICdidXR0b24nO1xuICAgIHByb2plY3RGb3JtQ29uZmlybS50ZXh0Q29udGVudCA9ICdDb25maXJtJztcblxuICAgIGNvbnN0IHByb2plY3RGb3JtQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdEZvcm1DYW5jZWwuaWQgPSAncHJvamVjdC1mb3JtLWNhbmNlbCc7XG4gICAgcHJvamVjdEZvcm1DYW5jZWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1mb3JtLWJ1dHRvbicpO1xuICAgIHByb2plY3RGb3JtQ2FuY2VsLnR5cGUgPSAnYnV0dG9uJztcbiAgICBwcm9qZWN0Rm9ybUNhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuXG4gICAgcHJvamVjdEZvcm1Db25maXJtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgcHVibGlzaCgnUFJPSkVDVF9GT1JNX0NPTkZJUk1fQ0xJQ0tFRCcsIGUudGFyZ2V0LmNsb3Nlc3QoXCIjcHJvamVjdC1mb3JtXCIpKTtcbiAgICB9KTtcblxuICAgIHByb2plY3RGb3JtQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgcHVibGlzaCgnUFJPSkVDVF9GT1JNX0NBTkNFTF9DTElDS0VEJyk7XG4gICAgfSk7XG5cbiAgICBwcm9qZWN0Rm9ybUJ1dHRvbnMuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm1DYW5jZWwpO1xuICAgIHByb2plY3RGb3JtQnV0dG9ucy5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybUNvbmZpcm0pO1xuICAgIHJldHVybiBwcm9qZWN0Rm9ybUJ1dHRvbnM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IHByb2plY3RGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdEZvcm1Db250YWluZXIuaWQgPSAncHJvamVjdC1mb3JtLWNvbnRhaW5lcic7XG4gICAgcHJvamVjdEZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpO1xuXG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgcHJvamVjdEZvcm0uaWQgPSAncHJvamVjdC1mb3JtJztcblxuICAgIGNvbnN0IHByb2plY3RGb3JtSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3RGb3JtSW5wdXQuaWQgPSAncHJvamVjdC1mb3JtLWlucHV0JztcbiAgICBwcm9qZWN0Rm9ybUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgcHJvamVjdEZvcm1JbnB1dC5wbGFjZWhvbGRlciA9ICdQcm9qZWN0IG5hbWUnO1xuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RGb3JtSW5wdXQpO1xuXG4gICAgcHJvamVjdEZvcm0uYXBwZW5kKGNyZWF0ZVByb2plY3RGb3JtQnV0dG9ucygpKTtcbiAgICBwcm9qZWN0Rm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XG5cbiAgICByZXR1cm4gcHJvamVjdEZvcm1Db250YWluZXI7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdEJ1dHRvbigpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3UHJvamVjdEJ1dHRvbi5pZCA9ICduZXctcHJvamVjdC1idXR0b24nO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdEJ1dHRvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdQcm9qZWN0QnV0dG9uVGV4dC5pZCA9ICduZXctcHJvamVjdC1idXR0b24tdGV4dCc7XG4gICAgbmV3UHJvamVjdEJ1dHRvblRleHQuaW5uZXJUZXh0ID0gJ05FVyBQUk9KRUNUJztcbiAgICBuZXdQcm9qZWN0QnV0dG9uLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdXR0b25UZXh0KTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3RCdXR0b25JY29uID0gbmV3IEltYWdlKCk7XG4gICAgbmV3UHJvamVjdEJ1dHRvbkljb24uaWQgPSAnbmV3LXByb2plY3QtYnV0dG9uLWljb24nO1xuICAgIG5ld1Byb2plY3RCdXR0b25JY29uLnNyYyA9IGFkZEltYWdlO1xuICAgIG5ld1Byb2plY3RCdXR0b24uYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ1dHRvbkljb24pO1xuXG4gICAgbmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHVibGlzaCgnTkVXX1BST0pFQ1RfQlVUVE9OX0NMSUNLRUQnKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdQcm9qZWN0QnV0dG9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0VGl0bGUoKSB7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFRpdGxlLmlkID0gJ3Byb2plY3QtdGl0bGUnO1xuICAgIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSAnUHJvamVjdHMnO1xuICAgIHJldHVybiBwcm9qZWN0VGl0bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RIZWFkZXIoKSB7XG4gICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RIZWFkZXIuaWQgPSAncHJvamVjdC1oZWFkZXInO1xuICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdFRpdGxlKCkpO1xuICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmV3UHJvamVjdEJ1dHRvbigpKTtcbiAgICByZXR1cm4gcHJvamVjdEhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdENvbnRhaW5lcigpIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdENvbnRhaW5lci5pZCA9ICdwcm9qZWN0LWNvbnRhaW5lcic7XG4gICAgcmV0dXJuIHByb2plY3RDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RBcmVhKCkge1xuICAgIGNvbnN0IHByb2plY3RBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdEFyZWEuaWQgPSAncHJvamVjdC1hcmVhJztcbiAgICBwcm9qZWN0QXJlYS5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0SGVhZGVyKCkpO1xuICAgIHByb2plY3RBcmVhLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RDb250YWluZXIoKSk7XG4gICAgcmV0dXJuIHByb2plY3RBcmVhO1xufVxuXG5cbmZ1bmN0aW9uIGdldFRhc2tCYWNrZ3JvdW5kQ29sb3IodGFzaykge1xuICAgIGlmKHRhc2sucHJpb3JpdHkgPT09ICd1cmdlbnQnKSB7XG4gICAgICAgIHJldHVybiAnb3JhbmdlJztcblxuICAgIH0gZWxzZSBpZih0YXNrLnByaW9yaXR5ID09PSAnbWVkaXVtJykge1xuICAgICAgICByZXR1cm4gJ3llbGxvdyc7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ2N5YW4nO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0VGFza1N0YXR1cyh0YXNrKSB7XG4gICAgY29uc3QgdGFza1N0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tTdGF0dXMuY2xhc3NMaXN0LmFkZCgndGFzay1zdGF0dXMnKTtcbiAgICB0YXNrU3RhdHVzLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgY29uc3QgZGVhZGxpbmVEYXRlID0gbmV3IERhdGUodGFzay5kZWFkbGluZSArICdUMjM6NTk6NTknKTtcbiAgICBjb25zdCBjdXJEYXRlID0gbmV3IERhdGUoKTtcblxuICAgIGlmKCF0YXNrLmRvbmUpIHtcbiAgICAgICAgaWYgKGRlYWRsaW5lRGF0ZSA8IGN1ckRhdGUpIHtcbiAgICAgICAgICAgIHRhc2tTdGF0dXMudGV4dENvbnRlbnQgPSAnT1ZFUkRVRSc7XG4gICAgICAgICAgICB0YXNrU3RhdHVzLnN0eWxlLmNvbG9yID0gJ3JlZCc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChkZWFkbGluZURhdGUgLSBjdXJEYXRlIDw9ICgyNCAqIDYwICogNjAgKiAxMDAwKSkge1xuICAgICAgICAgICAgdGFza1N0YXR1cy50ZXh0Q29udGVudCA9ICdEVUUgVE9EQVknO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tTdGF0dXM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tFbGVtZW50KHRhc2spIHtcbiAgICBjb25zdCB0YXNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZWxlbWVudCcpO1xuXG4gICAgdGFza0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZ2V0VGFza0JhY2tncm91bmRDb2xvcih0YXNrKTtcbiAgICB0YXNrRWxlbWVudC5kYXRhc2V0LnRhc2tVaWQgPSB0YXNrLlVJRDtcblxuICAgIGNvbnN0IHRhc2tEb25lQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0RvbmVCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1kb25lLWJ1dHRvbi1jb250YWluZXInKTtcbiAgICBjb25zdCB0YXNrRG9uZUJ1dHRvbiA9IG5ldyBJbWFnZSgpO1xuICAgIHRhc2tEb25lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZG9uZS1idXR0b24nKTtcbiAgICB0YXNrRG9uZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWJ1dHRvbicpO1xuICAgIHRhc2tEb25lQnV0dG9uLnNyYyA9IGRvbmVJbWFnZTtcblxuICAgIHRhc2tEb25lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwdWJsaXNoKCdET05FX1RBU0tfQlVUVE9OX0NMSUNLRUQnLCB7cHJvamVjdFVJRDogdGFzay5wcm9qZWN0VUlELCB0YXNrVUlEOiB0YXNrLlVJRH0pO1xuICAgIH0pO1xuXG4gICAgdGFza0RvbmVCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0RvbmVCdXR0b24pO1xuICAgIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKHRhc2tEb25lQnV0dG9uQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza05hbWUuY2xhc3NMaXN0LmFkZCgndGFzay1uYW1lJyk7XG4gICAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0YXNrLm5hbWU7XG4gICAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuXG4gICAgY29uc3QgdGFza1N0YXR1c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tTdGF0dXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1zdGF0dXMtY29udGFpbmVyJyk7XG4gICAgdGFza1N0YXR1c0NvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRUYXNrU3RhdHVzKHRhc2spKTtcbiAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrU3RhdHVzQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGRhdGVGb3JtYXRPcHRpb25zID0geyB3ZWVrZGF5OiAnbG9uZycsIHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycgfTtcbiAgICBjb25zdCB0YXNrRGVhZGxpbmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRGVhZGxpbmVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1kZWFkbGluZS1jb250YWluZXInKTtcbiAgICBjb25zdCB0YXNrRGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRGVhZGxpbmUuY2xhc3NMaXN0LmFkZCgndGFzay1kZWFkbGluZScpO1xuICAgIHRhc2tEZWFkbGluZS50ZXh0Q29udGVudCA9IChuZXcgRGF0ZSh0YXNrLmRlYWRsaW5lKSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIGRhdGVGb3JtYXRPcHRpb25zKTtcbiAgICB0YXNrRGVhZGxpbmVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0RlYWRsaW5lKTtcbiAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrRGVhZGxpbmVDb250YWluZXIpO1xuXG4gICAgY29uc3QgZWRpdFRhc2tCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlZGl0VGFza0J1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdlZGl0LXRhc2stYnV0dG9uLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGVkaXRUYXNrQnV0dG9uID0gbmV3IEltYWdlKCk7XG4gICAgZWRpdFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdC10YXNrLWJ1dHRvbicpO1xuICAgIGVkaXRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stYnV0dG9uJyk7XG4gICAgZWRpdFRhc2tCdXR0b24uc3JjID0gZWRpdEltYWdlO1xuICAgIGVkaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgcHVibGlzaCgnRURJVF9UQVNLX0JVVFRPTl9DTElDS0VEJywge3Byb2plY3RVSUQ6IHRhc2sucHJvamVjdFVJRCwgdGFza1VJRDogdGFzay5VSUR9KTtcbiAgICB9KTtcbiAgICBlZGl0VGFza0J1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0VGFza0J1dHRvbik7XG4gICAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoZWRpdFRhc2tCdXR0b25Db250YWluZXIpO1xuXG4gICAgY29uc3QgZGVsZXRlVGFza0J1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlbGV0ZVRhc2tCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXRhc2stYnV0dG9uLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRlbGV0ZVRhc2tCdXR0b24gPSBuZXcgSW1hZ2UoKTtcbiAgICBkZWxldGVUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS10YXNrLWJ1dHRvbicpO1xuICAgIGRlbGV0ZVRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFzay1idXR0b24nKTtcbiAgICBkZWxldGVUYXNrQnV0dG9uLnNyYyA9IGRlbGV0ZUltYWdlO1xuICAgIGRlbGV0ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcHVibGlzaCgnREVMRVRFX1RBU0tfQlVUVE9OX0NMSUNLRUQnLCB7cHJvamVjdFVJRDogdGFzay5wcm9qZWN0VUlELCB0YXNrVUlEOiB0YXNrLlVJRH0pO1xuICAgIH0pO1xuICAgIGRlbGV0ZVRhc2tCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0J1dHRvbik7XG4gICAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0J1dHRvbkNvbnRhaW5lcik7XG5cbiAgICBpZiAodGFzay5kb25lKSB7XG4gICAgICAgIHRhc2tFbGVtZW50LnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gICAgICAgIHRhc2tFbGVtZW50LnN0eWxlLmNvbG9yID0gJyNjY2MnO1xuICAgICAgICB0YXNrRG9uZUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xuICAgIH1cblxuICAgIHJldHVybiB0YXNrRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGFza0NvbnRhaW5lcihwcm9qZWN0VUlEKSB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBnZXRQcm9qZWN0TGlzdCgpO1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1jb250YWluZXInKTtcbiAgICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIHRhc2tDb250YWluZXIucGFyZW50RWxlbWVudC5kYXRhc2V0LnByb2plY3RVaWQgPSBwcm9qZWN0VUlEO1xuXG4gICAgZm9yIChsZXQgcHJvamVjdEluZGV4ID0gMDsgcHJvamVjdEluZGV4IDwgcHJvamVjdExpc3QubGVuZ3RoOyBwcm9qZWN0SW5kZXgrKykge1xuICAgICAgICBpZiAocHJvamVjdExpc3RbcHJvamVjdEluZGV4XS5VSUQgPT0gcHJvamVjdFVJRCkge1xuICAgICAgICAgICAgcHJvamVjdExpc3RbcHJvamVjdEluZGV4XS50YXNrcy5zb3J0KFxuICAgICAgICAgICAgICAgICh0YXNrMSwgdGFzazIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYodGFzazEuZG9uZSA9PT0gdGFzazIuZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRhc2sxLmRlYWRsaW5lKSAtIG5ldyBEYXRlKHRhc2syLmRlYWRsaW5lKTtcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGFzazEuZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgdGFza0luZGV4ID0gMDsgdGFza0luZGV4IDwgcHJvamVjdExpc3RbcHJvamVjdEluZGV4XS50YXNrcy5sZW5ndGg7IHRhc2tJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSBjcmVhdGVUYXNrRWxlbWVudChwcm9qZWN0TGlzdFtwcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0pO1xuICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0VGFzayhwcm9qZWN0VUlELCB0YXNrVUlEKSB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBnZXRQcm9qZWN0TGlzdCgpO1xuICAgIGZvciAobGV0IHByb2plY3RJbmRleCA9IDA7IHByb2plY3RJbmRleCA8IHByb2plY3RMaXN0Lmxlbmd0aDsgcHJvamVjdEluZGV4KyspIHtcbiAgICAgICAgaWYgKHByb2plY3RMaXN0W3Byb2plY3RJbmRleF0uVUlEID09IHByb2plY3RVSUQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHRhc2tJbmRleCA9IDA7IHRhc2tJbmRleCA8IHByb2plY3RMaXN0W3Byb2plY3RJbmRleF0udGFza3MubGVuZ3RoOyB0YXNrSW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0TGlzdFtwcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0uVUlEID09IHRhc2tVSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2plY3RMaXN0W3Byb2plY3RJbmRleF0udGFza3NbdGFza0luZGV4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZpbGxUYXNrRm9ybShwcm9qZWN0VUlELCB0YXNrVUlEKSB7XG4gICAgY29uc3QgdGFzayA9IGdldFRhc2socHJvamVjdFVJRCwgdGFza1VJRCk7XG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1mb3JtJyk7XG4gICAgdGFza0Zvcm0ucXVlcnlTZWxlY3RvcignI3Rhc2stbmFtZS1pbnB1dCcpLnZhbHVlID0gdGFzay5uYW1lO1xuICAgIHRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXByaW9yaXR5LWlucHV0JykudmFsdWUgPSB0YXNrLnByaW9yaXR5O1xuICAgIHRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRhdGUtaW5wdXQnKS52YWx1ZSA9IHRhc2suZGVhZGxpbmU7XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlVGFza0Zvcm0oKSB7XG4gICAgY29uc3QgdGFza0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1mb3JtLWNvbnRhaW5lcicpO1xuICAgIHRhc2tGb3JtQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgY29uc3QgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW5hbWUtaW5wdXQnKTtcbiAgICB0YXNrTmFtZUlucHV0LmZvY3VzKCk7XG59XG5cbmZ1bmN0aW9uIGV4aXRUYXNrRm9ybSgpIHtcbiAgICBjb25zdCB0YXNrRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWZvcm0tY29udGFpbmVyJyk7XG4gICAgdGFza0Zvcm1Db250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZm9ybScpO1xuICAgIHRhc2tGb3JtLnJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tGb3JtQnV0dG9ucygpIHtcbiAgICBjb25zdCB0YXNrRm9ybUJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRm9ybUJ1dHRvbnMuaWQgPSAndGFzay1mb3JtLWJ1dHRvbnMnO1xuXG4gICAgY29uc3QgdGFza0Zvcm1Db25maXJtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFza0Zvcm1Db25maXJtLmlkID0gJ3Rhc2stZm9ybS1jb25maXJtJztcbiAgICB0YXNrRm9ybUNvbmZpcm0uY2xhc3NMaXN0LmFkZCgndGFzay1mb3JtLWJ1dHRvbicpO1xuICAgIHRhc2tGb3JtQ29uZmlybS50eXBlID0gJ2J1dHRvbic7XG4gICAgdGFza0Zvcm1Db25maXJtLnRleHRDb250ZW50ID0gJ0NvbmZpcm0nO1xuXG4gICAgY29uc3QgdGFza0Zvcm1DYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0YXNrRm9ybUNhbmNlbC5pZCA9ICd0YXNrLWZvcm0tY2FuY2VsJztcbiAgICB0YXNrRm9ybUNhbmNlbC5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0tYnV0dG9uJyk7XG4gICAgdGFza0Zvcm1DYW5jZWwudHlwZSA9ICdidXR0b24nO1xuICAgIHRhc2tGb3JtQ2FuY2VsLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG5cbiAgICB0YXNrRm9ybUNvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBwdWJsaXNoKCdUQVNLX0ZPUk1fQ09ORklSTV9DTElDS0VEJywgZS50YXJnZXQuY2xvc2VzdChcIiN0YXNrLWZvcm1cIikpO1xuICAgIH0pO1xuXG4gICAgdGFza0Zvcm1DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBwdWJsaXNoKCdUQVNLX0ZPUk1fQ0FOQ0VMX0NMSUNLRUQnKTtcbiAgICB9KTtcblxuICAgIHRhc2tGb3JtQnV0dG9ucy5hcHBlbmRDaGlsZCh0YXNrRm9ybUNhbmNlbCk7XG4gICAgdGFza0Zvcm1CdXR0b25zLmFwcGVuZENoaWxkKHRhc2tGb3JtQ29uZmlybSk7XG4gICAgcmV0dXJuIHRhc2tGb3JtQnV0dG9ucztcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0Zvcm0oKSB7XG4gICAgY29uc3QgdGFza0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRm9ybUNvbnRhaW5lci5pZCA9ICd0YXNrLWZvcm0tY29udGFpbmVyJztcbiAgICB0YXNrRm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XG5cbiAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICB0YXNrRm9ybS5pZCA9ICd0YXNrLWZvcm0nO1xuXG4gICAgY29uc3QgdGFza05hbWVJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tOYW1lSW5wdXRDb250YWluZXIuaWQgPSAndGFzay1uYW1lLWlucHV0LWNvbnRhaW5lcic7XG4gICAgY29uc3QgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza05hbWVJbnB1dC5pZCA9ICd0YXNrLW5hbWUtaW5wdXQnO1xuICAgIHRhc2tOYW1lSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICB0YXNrTmFtZUlucHV0LnBsYWNlaG9sZGVyID0gJ1Rhc2sgbmFtZSc7XG4gICAgdGFza05hbWVJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTmFtZUlucHV0KTtcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrTmFtZUlucHV0Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IHRhc2tQcmlvcml0eUlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza1ByaW9yaXR5SW5wdXRDb250YWluZXIuaWQgPSAndGFzay1wcmlvcml0eS1pbnB1dC1jb250YWluZXInO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eUlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRhc2tQcmlvcml0eUlucHV0TGFiZWwuaWQgPSAndGFzay1wcmlvcml0eS1pbnB1dC1sYWJlbCc7XG4gICAgdGFza1ByaW9yaXR5SW5wdXRMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSA6ICc7XG4gICAgdGFza1ByaW9yaXR5SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5SW5wdXRMYWJlbCk7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICB0YXNrUHJpb3JpdHlJbnB1dC5pZCA9ICd0YXNrLXByaW9yaXR5LWlucHV0JztcbiAgICB0YXNrUHJpb3JpdHlJbnB1dC5hZGQobmV3IE9wdGlvbignbG93JywgJ2xvdycsIHRydWUpKTtcbiAgICB0YXNrUHJpb3JpdHlJbnB1dC5hZGQobmV3IE9wdGlvbignbWVkaXVtJywgJ21lZGl1bScpKTtcbiAgICB0YXNrUHJpb3JpdHlJbnB1dC5hZGQobmV3IE9wdGlvbigndXJnZW50JywgJ3VyZ2VudCcpKTtcbiAgICB0YXNrUHJpb3JpdHlJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlJbnB1dCk7XG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5SW5wdXRDb250YWluZXIpO1xuXG4gICAgY29uc3QgdGFza0RhdGVJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tEYXRlSW5wdXRDb250YWluZXIuaWQgPSAndGFzay1kYXRlLWlucHV0LWNvbnRhaW5lcic7XG4gICAgY29uc3QgdGFza0RhdGVJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0YXNrRGF0ZUlucHV0TGFiZWwuaWQgPSAndGFzay1kYXRlLWlucHV0LWxhYmVsJztcbiAgICB0YXNrRGF0ZUlucHV0TGFiZWwudGV4dENvbnRlbnQgPSAnRGVhZGxpbmUgOiAnO1xuICAgIHRhc2tEYXRlSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0RhdGVJbnB1dExhYmVsKTtcbiAgICBjb25zdCB0YXNrRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0YXNrRGF0ZUlucHV0LmlkID0gJ3Rhc2stZGF0ZS1pbnB1dCc7XG4gICAgdGFza0RhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgIHRhc2tEYXRlSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0RhdGVJbnB1dCk7XG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0RhdGVJbnB1dENvbnRhaW5lcik7XG5cbiAgICB0YXNrRm9ybS5hcHBlbmQoY3JlYXRlVGFza0Zvcm1CdXR0b25zKCkpO1xuICAgIHRhc2tGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcblxuICAgIHJldHVybiB0YXNrRm9ybUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3VGFza0J1dHRvbigpIHtcbiAgICBjb25zdCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3VGFza0J1dHRvbi5pZCA9IFwibmV3LXRhc2stYnV0dG9uXCI7XG5cbiAgICBjb25zdCBuZXdUYXNrQnV0dG9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Rhc2tCdXR0b25UZXh0LmlkID0gXCJuZXctdGFzay1idXR0b24tdGV4dFwiO1xuICAgIG5ld1Rhc2tCdXR0b25UZXh0LnRleHRDb250ZW50ID0gXCJORVcgVEFTS1wiO1xuICAgIG5ld1Rhc2tCdXR0b24uYXBwZW5kQ2hpbGQobmV3VGFza0J1dHRvblRleHQpO1xuXG4gICAgY29uc3QgbmV3VGFza0J1dHRvbkljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBuZXdUYXNrQnV0dG9uSWNvbi5pZCA9IFwibmV3LXRhc2stYnV0dG9uLWljb25cIjtcbiAgICBuZXdUYXNrQnV0dG9uSWNvbi5zcmMgPSBhZGRJbWFnZTtcbiAgICBuZXdUYXNrQnV0dG9uLmFwcGVuZENoaWxkKG5ld1Rhc2tCdXR0b25JY29uKTtcblxuICAgIG5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIHB1Ymxpc2goXCJORVdfVEFTS19CVVRUT05fQ0xJQ0tFRFwiLCBlLnRhcmdldC5jbG9zZXN0KCcjdGFzay1hcmVhJykuZGF0YXNldC5wcm9qZWN0VWlkKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdUYXNrQnV0dG9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrSGVhZGVyKCkge1xuICAgIGNvbnN0IHRhc2tIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrSGVhZGVyLmlkID0gXCJ0YXNrLWhlYWRlclwiO1xuICAgIHRhc2tIZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmV3VGFza0J1dHRvbigpKTtcbiAgICByZXR1cm4gdGFza0hlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0NvbnRhaW5lci5pZCA9IFwidGFzay1jb250YWluZXJcIjtcbiAgICByZXR1cm4gdGFza0NvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0FyZWEoKSB7XG4gICAgY29uc3QgdGFza0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrQXJlYS5pZCA9IFwidGFzay1hcmVhXCI7XG4gICAgdGFza0FyZWEuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0hlYWRlcigpKTtcbiAgICB0YXNrQXJlYS5hcHBlbmRDaGlsZChjcmVhdGVUYXNrQ29udGFpbmVyKCkpO1xuICAgIHJldHVybiB0YXNrQXJlYTtcbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVQcm9qZWN0QXJlYSxcbiAgICBjcmVhdGVQcm9qZWN0Rm9ybSxcbiAgICBhY3RpdmF0ZVBvamVjdEZvcm0sXG4gICAgZXhpdFByb2plY3RGb3JtLFxuICAgIHNldEFjdGl2ZVByb2plY3QsXG4gICAgc3dpdGNoVG9Qcm9qZWN0LFxuICAgIHVwZGF0ZVByb2plY3RDb250YWluZXIsXG4gICAgY3JlYXRlVGFza0FyZWEsXG4gICAgY3JlYXRlVGFza0Zvcm0sXG4gICAgYWN0aXZhdGVUYXNrRm9ybSxcbiAgICBleGl0VGFza0Zvcm0sXG4gICAgZmlsbFRhc2tGb3JtLFxuICAgIHVwZGF0ZVRhc2tDb250YWluZXJcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHB1Ymxpc2ggfSBmcm9tICcuL2V2ZW50LW1hbmFnZXIuanMnO1xuaW1wb3J0ICcuL2V2ZW50cy5qcyc7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0QXJlYSwgY3JlYXRlUHJvamVjdEZvcm0sIGNyZWF0ZVRhc2tBcmVhLCBjcmVhdGVUYXNrRm9ybSB9IGZyb20gJy4vdWkuanMnO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1RvLURvIGxpc3QnO1xuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEFyZWEoKSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVUYXNrQXJlYSgpKTtcbiAgICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9ICdDb3B5cmlnaHQgwqkgMjAyMiBuYW1hbjE2MDEnO1xuICAgIHJldHVybiBmb290ZXI7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0dXAoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEZvcm0oKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVUYXNrRm9ybSgpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiAgICBwdWJsaXNoKFwiUE9QVUxBVEVfUFJPSkVDVFNcIik7XG59XG5cbnN0YXJ0dXAoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=