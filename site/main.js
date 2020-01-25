(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- router -->\r\n<router-outlet></router-outlet>\r\n\r\n<!-- message -->\r\n<app-sweet-message [swalOptions]=\"swalMessageOptions\" [dismissible]=\"true\"></app-sweet-message>\r\n\r\n<!-- question -->\r\n<app-sweet-question [swalOptions]=\"swalQuestionOptions\" [dismissible]=\"true\"></app-sweet-question>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chatbot/chatbot.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/chatbot/chatbot.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"width: 30vw; max-width: 300px;\">\n    <div class=\"row align-items-center\">\n        <div class=\"mx-auto\">\n            <h3><i class=\"fas fa-robot\"></i>Zelda Super Chat</h3>\n        </div>\n    </div>\n\n    <div class=\"row align-items-center justify-content-center\">\n        <div class=\"col-lg-8\">\n            <ul #scroll class=\"messages\" [scrollTop]=\"scroll.scrollHeight\">\n                <div *ngFor=\"let msg of resultados\">\n                    <li class=\"message appeared\"\n                        [ngClass]=\"{'left':msg.remetente === 'chatbot', 'right':msg.remetente === 'eu'}\">\n                        <div class=\"avatar\"></div>\n                        <div class=\"text_wrapper\">\n                            <div class=\"text\">\n                                <p class=\"time\"> ({{ msg.data | date:'HH:mm:ss' }})</p>\n                                {{ msg.mensagem }}\n                            </div>\n                        </div>\n                    </li>\n                </div>\n            </ul>\n        </div>\n    </div>\n\n    <div class=\"row align-items-center justify-content-center\">\n        <div class=\"col-sm-6\">\n            <input #inputMessage type=\"text\" class=\"form-control \" (keyup.enter)=\"sendMessage()\" [(ngModel)]=\"msg\" />\n        </div>\n\n        <div class=\"col-sm-2\">\n            <button class=\"btn btn-success sendbtn\" (click)=\"sendMessage()\">\n                <i class=\"far fa-share-square\"></i>\n\n                Enviar\n            </button>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sweet-message/sweet-message.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sweet-message/sweet-message.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Swall confirm -->\r\n<swal #swal [showConfirmButton]=\"false\" [showCancelButton]=\"false\" [allowOutsideClick]=\"dismissible\"\r\n  (cancel)=\"sendAnswer(true)\">\r\n\r\n  <!-- content -->\r\n  <div class=\"vgroup text-align-center\" *swalPartial=\"swalTargets.content\">\r\n\r\n    <!-- title -->\r\n    <div>\r\n      <strong class=\"title-text bold\"> {{ swalOptions.title }} </strong>\r\n    </div>\r\n\r\n    <!-- content -->\r\n    <div class=\"f1 d-flex justify-content-center align-items-flex-start padding min-height-100px\">\r\n      <span class=\"font-size-15px\">\r\n        {{ swalOptions.content }}\r\n      </span>\r\n    </div>\r\n\r\n    <!-- button -->\r\n    <div class=\"d-flex justify-content-center align-items-center\">\r\n      <a class=\"button-sweet primary\" (click)=\"close()\">\r\n        {{ swalOptions.button }}\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</swal>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sweet-question/sweet-question.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sweet-question/sweet-question.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Swall confirm -->\r\n<swal #swal [showConfirmButton]=\"false\" [showCancelButton]=\"false\" [allowOutsideClick]=\"dismissible\"\r\n  (cancel)=\"sendAnswer(false)\">\r\n\r\n  <!-- content -->\r\n  <div class=\"vgroup text-align-center\" *swalPartial=\"swalTargets.content\">\r\n\r\n    <!-- title -->\r\n    <div>\r\n      <strong class=\"title-text bold\"> {{ swalOptions.title }} </strong>\r\n    </div>\r\n\r\n    <!-- content -->\r\n    <div class=\"f1 d-flex justify-content-center align-items-flex-start padding min-height-100px\">\r\n      <span class=\"font-size-15px\">\r\n        {{ swalOptions.content }}\r\n      </span>\r\n    </div>\r\n\r\n    <!-- button -->\r\n    <div class=\"d-flex justify-content-center align-items-center\">\r\n      <a *ngFor=\"let button of swalOptions?.buttons; let i = index\"\r\n        [ngClass]=\"{'margin-right-5px': i === 0, 'margin-left-5px': i === swalOptions?.buttons?.length - 1, 'margin-5px': i !== swalOptions?.buttons?.length - 1 && i !== 0}\"\r\n        [class]=\"'button-sweet ' + (button?.class ? button?.class : 'medium')\" (click)=\"close(button?.value)\">\r\n        {{ button?.text }}\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</swal>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./views/general/menu/menu.module": [
		"./src/app/views/general/menu/menu.module.ts",
		"views-general-menu-menu-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '',
        loadChildren: './views/general/menu/menu.module#MenuModule',
    },
    {
        path: '**',
        redirectTo: 'home',
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_customize_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/customize-message.service */ "./src/app/services/customize-message.service.ts");
/* harmony import */ var _components_sweet_message_sweet_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sweet-message/sweet-message.component */ "./src/app/components/sweet-message/sweet-message.component.ts");
/* harmony import */ var _components_sweet_question_sweet_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sweet-question/sweet-question.component */ "./src/app/components/sweet-question/sweet-question.component.ts");





/**
 * App component.
 */
var AppComponent = /** @class */ (function () {
    /**
     * @ignore
     */
    function AppComponent(messageService) {
        this.messageService = messageService;
        this.title = 'Marcio Câmara | Desenvolvimento de Sistemas';
        /**
         * Swal options.
         */
        this.swalMessageOptions = {
            title: '',
            content: '',
            button: '',
        };
        /**
         * Swal options.
         */
        this.swalQuestionOptions = {
            title: '',
            content: '',
            buttons: [],
        };
    }
    /**
     * @ignore
     */
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // define subscribe to listen new messsage subscribe
        this.messageService.loaderStateMessage.subscribe(function (state) {
            console.log(state);
            _this.swalMessageOptions = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
            setTimeout(function () {
                _this.messageComponent.show();
            }, 50);
        });
        // define subscribe to listen new question subscribe
        this.messageService.loaderStateQuestion.subscribe(function (state) {
            console.log(state);
            _this.swalQuestionOptions = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
            setTimeout(function () {
                _this.questionComponent.show();
            }, 50);
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_customize_message_service__WEBPACK_IMPORTED_MODULE_2__["CustomizeMessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_components_sweet_message_sweet_message_component__WEBPACK_IMPORTED_MODULE_3__["SweetMessageComponent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _components_sweet_message_sweet_message_component__WEBPACK_IMPORTED_MODULE_3__["SweetMessageComponent"])
    ], AppComponent.prototype, "messageComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_components_sweet_question_sweet_question_component__WEBPACK_IMPORTED_MODULE_4__["SweetQuestionComponent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _components_sweet_question_sweet_question_component__WEBPACK_IMPORTED_MODULE_4__["SweetQuestionComponent"])
    ], AppComponent.prototype, "questionComponent", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_customize_message_service__WEBPACK_IMPORTED_MODULE_2__["CustomizeMessageService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/pt */ "./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd-i18n.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _guards_post_register_guard_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./guards/post-register-guard.service */ "./src/app/guards/post-register-guard.service.ts");
/* harmony import */ var _services_customize_message_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/customize-message.service */ "./src/app/services/customize-message.service.ts");
/* harmony import */ var _services_http_request_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/http-request.service */ "./src/app/services/http-request.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");

// modules
















// components


// services






Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_3___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_24__["SharedModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"].withServerTransition({ appId: 'site' }),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].production }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabaseModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorageModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            ],
            providers: [
                _services_customize_message_service__WEBPACK_IMPORTED_MODULE_19__["CustomizeMessageService"],
                _services_http_request_service__WEBPACK_IMPORTED_MODULE_20__["HttpRequestService"],
                _services_storage_service__WEBPACK_IMPORTED_MODULE_21__["StorageService"],
                _services_token_service__WEBPACK_IMPORTED_MODULE_22__["TokenService"],
                _services_utils_service__WEBPACK_IMPORTED_MODULE_23__["UtilsService"],
                _guards_post_register_guard_service__WEBPACK_IMPORTED_MODULE_18__["PostRegisterGuardService"],
                { provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_14__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_14__["pt_BR"] },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["LOCALE_ID"], useValue: 'pt-BR' },
                { provide: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["StorageBucket"], useValue: 'blog-angular-2dec4.appspot.com' },
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/chatbot/chatbot.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/chatbot/chatbot.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row {\n  margin-top: 10px;\n}\n\n.messages {\n  position: relative;\n  list-style: none;\n  padding: 20px 10px 0 10px;\n  margin: 0;\n  overflow: auto;\n  height: 400px;\n  box-sizing: border-box;\n}\n\n.messages .message {\n  clear: both;\n  overflow: hidden;\n  margin-bottom: 20px;\n  transition: all 0.5s linear;\n  opacity: 0;\n}\n\n.messages .message.left .avatar {\n  background-image: url('chatbot.png');\n  background-size: cover;\n  float: left;\n}\n\n.messages .message.left .text_wrapper {\n  background-color: #e95fc7;\n  margin-left: 20px;\n}\n\n.messages .message.left .text_wrapper::after,\n.messages .message.left .text_wrapper::before {\n  right: 100%;\n  border-right-color: #e95fc7;\n}\n\n.messages .message.left .text {\n  color: #FFF;\n}\n\n.messages .message.right .avatar {\n  background-color: #007acc;\n  float: right;\n}\n\n.messages .message.right .text_wrapper {\n  background-color: #5fb2e9;\n  margin-right: 20px;\n  float: right;\n}\n\n.messages .message.right .text_wrapper::after,\n.messages .message.right .text_wrapper::before {\n  left: 100%;\n  border-left-color: #5fb2e9;\n}\n\n.messages .message.right .text {\n  color: #FFFFFF;\n  text-align: right;\n}\n\n.messages .message.appeared {\n  opacity: 1;\n}\n\n.messages .message .avatar {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.messages .message .text_wrapper {\n  display: inline-block;\n  padding: 20px;\n  border-radius: 6px;\n  width: calc(100% - 85px);\n  min-width: 100px;\n  position: relative;\n}\n\n.messages .message .text_wrapper::after,\n.messages .message .text_wrapper:before {\n  top: 18px;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.messages .message .text_wrapper::after {\n  border-width: 13px;\n  margin-top: 0px;\n}\n\n.messages .message .text_wrapper::before {\n  border-width: 15px;\n  margin-top: -2px;\n}\n\n.messages .message .text_wrapper .text {\n  font-size: 18px;\n  font-weight: 300;\n}\n\n.time {\n  font-size: 10px;\n  color: #FFF;\n}\n\ninput {\n  width: 100%;\n}\n\n.eu {\n  text-align: right;\n}\n\n.sendbtn {\n  width: 100% !important;\n  color: #fff !important;\n  background-color: #000000 !important;\n  border-color: #000000 !important;\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12) !important;\n  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045) !important;\n  text-transform: uppercase !important;\n  margin-top: 8px;\n  font-size: 16px;\n  border-radius: 4px;\n  line-height: 1.5;\n  position: relative;\n  display: inline-block;\n  font-weight: 400;\n  white-space: nowrap;\n  text-align: center;\n  background-image: none;\n  border: 1px solid transparent;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  touch-action: manipulation;\n}\n\n.sendbtn:hover {\n  background-color: #0d0c0c !important;\n  border-color: #0d0c0c !important;\n}\n\n.container {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0Ym90L0M6XFxVc2Vyc1xccGNcXERlc2t0b3BcXFByb2plY3RzXFxhbmd1bGFyXFxibG9nLWFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNoYXRib3RcXGNoYXRib3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdGJvdC9jaGF0Ym90LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0Usb0NBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUVFLHlCQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTs7RUFFRSxXQUFBO0VBQ0EsMkJBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBRUUseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNERjs7QURJQTs7RUFFRSxVQUFBO0VBQ0EsMEJBQUE7QUNERjs7QURJQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsVUFBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDREY7O0FESUE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBOztFQUVFLFNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtBQ0RGOztBRElBO0VBQ0UsaUJBQUE7QUNERjs7QURJQTtFQUNFLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esb0RBQUE7RUFDQSxtREFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EseURBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLDBCQUFBO0FDREY7O0FESUE7RUFDRSxvQ0FBQTtFQUNBLGdDQUFBO0FDREY7O0FESUE7RUFDRSxVQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYXRib3QvY2hhdGJvdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5tZXNzYWdlcyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMjBweCAxMHB4IDAgMTBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ubWVzc2FnZXMgLm1lc3NhZ2Uge1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLm1lc3NhZ2VzIC5tZXNzYWdlLmxlZnQgLmF2YXRhciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2NoYXRib3QucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5tZXNzYWdlcyAubWVzc2FnZS5sZWZ0IC50ZXh0X3dyYXBwZXIge1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICM1NDU0NTQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5NWZjNztcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLm1lc3NhZ2VzIC5tZXNzYWdlLmxlZnQgLnRleHRfd3JhcHBlcjo6YWZ0ZXIsXHJcbi5tZXNzYWdlcyAubWVzc2FnZS5sZWZ0IC50ZXh0X3dyYXBwZXI6OmJlZm9yZSB7XHJcbiAgcmlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZTk1ZmM3O1xyXG59XHJcblxyXG4ubWVzc2FnZXMgLm1lc3NhZ2UubGVmdCAudGV4dCB7XHJcbiAgY29sb3I6ICNGRkY7XHJcbn1cclxuXHJcbi5tZXNzYWdlcyAubWVzc2FnZS5yaWdodCAuYXZhdGFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YWNjO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLm1lc3NhZ2VzIC5tZXNzYWdlLnJpZ2h0IC50ZXh0X3dyYXBwZXIge1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNlOTVmYzc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVmYjJlOTtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ubWVzc2FnZXMgLm1lc3NhZ2UucmlnaHQgLnRleHRfd3JhcHBlcjo6YWZ0ZXIsXHJcbi5tZXNzYWdlcyAubWVzc2FnZS5yaWdodCAudGV4dF93cmFwcGVyOjpiZWZvcmUge1xyXG4gIGxlZnQ6IDEwMCU7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICM1ZmIyZTk7XHJcbn1cclxuXHJcbi5tZXNzYWdlcyAubWVzc2FnZS5yaWdodCAudGV4dCB7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5tZXNzYWdlcyAubWVzc2FnZS5hcHBlYXJlZCB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLm1lc3NhZ2VzIC5tZXNzYWdlIC5hdmF0YXIge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ubWVzc2FnZXMgLm1lc3NhZ2UgLnRleHRfd3JhcHBlciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA4NXB4KTtcclxuICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1lc3NhZ2VzIC5tZXNzYWdlIC50ZXh0X3dyYXBwZXI6OmFmdGVyLFxyXG4ubWVzc2FnZXMgLm1lc3NhZ2UgLnRleHRfd3JhcHBlcjpiZWZvcmUge1xyXG4gIHRvcDogMThweDtcclxuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGhlaWdodDogMDtcclxuICB3aWR0aDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5tZXNzYWdlcyAubWVzc2FnZSAudGV4dF93cmFwcGVyOjphZnRlciB7XHJcbiAgYm9yZGVyLXdpZHRoOiAxM3B4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLm1lc3NhZ2VzIC5tZXNzYWdlIC50ZXh0X3dyYXBwZXI6OmJlZm9yZSB7XHJcbiAgYm9yZGVyLXdpZHRoOiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IC0ycHg7XHJcbn1cclxuXHJcbi5tZXNzYWdlcyAubWVzc2FnZSAudGV4dF93cmFwcGVyIC50ZXh0IHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLnRpbWUge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBjb2xvcjogI0ZGRjtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXUge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uc2VuZGJ0biB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxuICB0ZXh0LXNoYWRvdzogMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA0NSkgIWltcG9ydGFudDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG59XHJcblxyXG4uc2VuZGJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkMGMwYyAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogIzBkMGMwYyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbiIsIi5yb3cge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubWVzc2FnZXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDIwcHggMTBweCAwIDEwcHg7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogNDAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5tZXNzYWdlcyAubWVzc2FnZSB7XG4gIGNsZWFyOiBib3RoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5tZXNzYWdlcyAubWVzc2FnZS5sZWZ0IC5hdmF0YXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvY2hhdGJvdC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubWVzc2FnZXMgLm1lc3NhZ2UubGVmdCAudGV4dF93cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5NWZjNztcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5tZXNzYWdlcyAubWVzc2FnZS5sZWZ0IC50ZXh0X3dyYXBwZXI6OmFmdGVyLFxuLm1lc3NhZ2VzIC5tZXNzYWdlLmxlZnQgLnRleHRfd3JhcHBlcjo6YmVmb3JlIHtcbiAgcmlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogI2U5NWZjNztcbn1cblxuLm1lc3NhZ2VzIC5tZXNzYWdlLmxlZnQgLnRleHQge1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLm1lc3NhZ2VzIC5tZXNzYWdlLnJpZ2h0IC5hdmF0YXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YWNjO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5tZXNzYWdlcyAubWVzc2FnZS5yaWdodCAudGV4dF93cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVmYjJlOTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5tZXNzYWdlcyAubWVzc2FnZS5yaWdodCAudGV4dF93cmFwcGVyOjphZnRlcixcbi5tZXNzYWdlcyAubWVzc2FnZS5yaWdodCAudGV4dF93cmFwcGVyOjpiZWZvcmUge1xuICBsZWZ0OiAxMDAlO1xuICBib3JkZXItbGVmdC1jb2xvcjogIzVmYjJlOTtcbn1cblxuLm1lc3NhZ2VzIC5tZXNzYWdlLnJpZ2h0IC50ZXh0IHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubWVzc2FnZXMgLm1lc3NhZ2UuYXBwZWFyZWQge1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubWVzc2FnZXMgLm1lc3NhZ2UgLmF2YXRhciB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubWVzc2FnZXMgLm1lc3NhZ2UgLnRleHRfd3JhcHBlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gODVweCk7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1lc3NhZ2VzIC5tZXNzYWdlIC50ZXh0X3dyYXBwZXI6OmFmdGVyLFxuLm1lc3NhZ2VzIC5tZXNzYWdlIC50ZXh0X3dyYXBwZXI6YmVmb3JlIHtcbiAgdG9wOiAxOHB4O1xuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjb250ZW50OiBcIiBcIjtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLm1lc3NhZ2VzIC5tZXNzYWdlIC50ZXh0X3dyYXBwZXI6OmFmdGVyIHtcbiAgYm9yZGVyLXdpZHRoOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5tZXNzYWdlcyAubWVzc2FnZSAudGV4dF93cmFwcGVyOjpiZWZvcmUge1xuICBib3JkZXItd2lkdGg6IDE1cHg7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG5cbi5tZXNzYWdlcyAubWVzc2FnZSAudGV4dF93cmFwcGVyIC50ZXh0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4udGltZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNGRkY7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ldSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uc2VuZGJ0biB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gIHRleHQtc2hhZG93OiAwIC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA0NSkgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbn1cblxuLnNlbmRidG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQwYzBjICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzBkMGMwYyAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/chatbot/chatbot.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/chatbot/chatbot.component.ts ***!
  \*********************************************************/
/*! exports provided: ChatbotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbotComponent", function() { return ChatbotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_chatbot_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/chatbot.service */ "./src/app/services/chatbot.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ChatbotComponent = /** @class */ (function () {
    function ChatbotComponent(chatbot) {
        this.chatbot = chatbot;
        this.userScrolled = false;
        this.initChatbot();
    }
    ChatbotComponent.prototype.ngOnInit = function () {
    };
    ChatbotComponent.prototype.initChatbot = function () {
        var _this = this;
        setTimeout(function () {
            _this.inputMessage.nativeElement.focus();
        }, 200);
        this.resultados = [];
        this.chatbot.getResponse('oi')
            .subscribe(function (lista) {
            lista.result.fulfillment.messages.forEach(function (element) {
                _this.resultados.push({ remetente: 'chatbot', mensagem: element.speech, data: lista.timestamp });
            });
        });
    };
    ChatbotComponent.prototype.sendMessage = function () {
        var _this = this;
        this.resultados.push({ remetente: 'eu', mensagem: this.msg, data: new Date() });
        this.chatbot.getResponse(this.removerAcentos(this.msg))
            .subscribe(function (lista) {
            lista.result.fulfillment.messages.forEach(function (element) {
                _this.resultados.push({ remetente: 'chatbot', mensagem: element.speech, data: lista.timestamp });
            });
        });
        this.msg = '';
    };
    ChatbotComponent.prototype.removerAcentos = function (s) {
        return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    };
    ChatbotComponent.ctorParameters = function () { return [
        { type: _services_chatbot_service__WEBPACK_IMPORTED_MODULE_1__["ChatbotService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('inputMessage', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], ChatbotComponent.prototype, "inputMessage", void 0);
    ChatbotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-chatbot',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chatbot.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chatbot/chatbot.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chatbot.component.scss */ "./src/app/components/chatbot/chatbot.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chatbot_service__WEBPACK_IMPORTED_MODULE_1__["ChatbotService"]])
    ], ChatbotComponent);
    return ChatbotComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "./node_modules/@sweetalert2/ngx-sweetalert2/fesm5/sweetalert2-ngx-sweetalert2.js");
/* harmony import */ var _sweet_message_sweet_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sweet-message/sweet-message.component */ "./src/app/components/sweet-message/sweet-message.component.ts");
/* harmony import */ var _sweet_question_sweet_question_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sweet-question/sweet-question.component */ "./src/app/components/sweet-question/sweet-question.component.ts");
/* harmony import */ var _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chatbot/chatbot.component */ "./src/app/components/chatbot/chatbot.component.ts");

// modules




// components



var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_4__["SweetAlert2Module"].forRoot(),
            ],
            declarations: [
                _sweet_message_sweet_message_component__WEBPACK_IMPORTED_MODULE_5__["SweetMessageComponent"],
                _sweet_question_sweet_question_component__WEBPACK_IMPORTED_MODULE_6__["SweetQuestionComponent"],
                _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_7__["ChatbotComponent"],
            ],
            providers: [],
            exports: [
                _sweet_message_sweet_message_component__WEBPACK_IMPORTED_MODULE_5__["SweetMessageComponent"],
                _sweet_question_sweet_question_component__WEBPACK_IMPORTED_MODULE_6__["SweetQuestionComponent"],
                _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_7__["ChatbotComponent"],
            ],
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/sweet-message/sweet-message.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/sweet-message/sweet-message.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".d-flex {\n  display: flex;\n}\n\n.justify-content-center {\n  justify-content: center;\n}\n\n.flex-column {\n  flex-direction: column;\n}\n\n.align-items-center {\n  align-items: center;\n}\n\n.align-items-flex-start {\n  align-items: flex-start;\n}\n\n.bottom-0 {\n  bottom: 0;\n}\n\n.title-text {\n  font-size: 1.3rem;\n  font-weight: 500;\n}\n\n.button-sweet {\n  color: white !important;\n  font-weight: bold;\n  padding: 10px;\n  width: 40%;\n}\n\n.text-align-center {\n  text-align: center;\n}\n\n.title-text {\n  font-size: 1.3rem;\n}\n\n.min-height-100px {\n  min-height: 100px;\n}\n\n.font-size-15px {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zd2VldC1tZXNzYWdlL0M6XFxVc2Vyc1xccGNcXERlc2t0b3BcXFByb2plY3RzXFxhbmd1bGFyXFxibG9nLWFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHN3ZWV0LW1lc3NhZ2VcXHN3ZWV0LW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc3dlZXQtbWVzc2FnZS9zd2VldC1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zd2VldC1tZXNzYWdlL3N3ZWV0LW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZC1mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uanVzdGlmeS1jb250ZW50LWNlbnRlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mbGV4LWNvbHVtbiB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmFsaWduLWl0ZW1zLWNlbnRlciB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFsaWduLWl0ZW1zLWZsZXgtc3RhcnQge1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uYm90dG9tLTAge1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG5cclxuLnRpdGxlLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5idXR0b24tc3dlZXQge1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgd2lkdGg6IDQwJTtcclxufVxyXG5cclxuLnRleHQtYWxpZ24tY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXRsZS10ZXh0IHtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5cclxuLm1pbi1oZWlnaHQtMTAwcHgge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4uZm9udC1zaXplLTE1cHgge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4iLCIuZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmp1c3RpZnktY29udGVudC1jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZsZXgtY29sdW1uIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmFsaWduLWl0ZW1zLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbGlnbi1pdGVtcy1mbGV4LXN0YXJ0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5ib3R0b20tMCB7XG4gIGJvdHRvbTogMDtcbn1cblxuLnRpdGxlLXRleHQge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmJ1dHRvbi1zd2VldCB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLnRleHQtYWxpZ24tY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0bGUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4ubWluLWhlaWdodC0xMDBweCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xufVxuXG4uZm9udC1zaXplLTE1cHgge1xuICBmb250LXNpemU6IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/sweet-message/sweet-message.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/sweet-message/sweet-message.component.ts ***!
  \*********************************************************************/
/*! exports provided: SweetMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweetMessageComponent", function() { return SweetMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "./node_modules/@sweetalert2/ngx-sweetalert2/fesm5/sweetalert2-ngx-sweetalert2.js");
/* harmony import */ var src_app_services_customize_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/customize-message.service */ "./src/app/services/customize-message.service.ts");




/**
 * Default message component into app.
 */
var SweetMessageComponent = /** @class */ (function () {
    /**
     * @ignore
     */
    function SweetMessageComponent(swalTargets, customizeMessageService) {
        this.swalTargets = swalTargets;
        this.customizeMessageService = customizeMessageService;
        /**
         * dismissible.
         */
        this.dismissible = true;
    }
    /**
     * Show message.
     */
    SweetMessageComponent.prototype.show = function () {
        // show swal
        this.generalSwal.show();
    };
    /**
     * Close message.
     */
    SweetMessageComponent.prototype.close = function () {
        // clos swal
        this.generalSwal.nativeSwal.close();
        // send answer
        this.sendAnswer(true);
    };
    /**
     * Send anwser.
     */
    SweetMessageComponent.prototype.sendAnswer = function (answer) {
        // send answer
        this.customizeMessageService.loaderSubjectAnswerMessage.next(answer);
    };
    SweetMessageComponent.componentName = 'SweetMessageComponent';
    SweetMessageComponent.ctorParameters = function () { return [
        { type: _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_2__["SwalPartialTargets"] },
        { type: src_app_services_customize_message_service__WEBPACK_IMPORTED_MODULE_3__["CustomizeMessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('swal', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_2__["SwalComponent"])
    ], SweetMessageComponent.prototype, "generalSwal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SweetMessageComponent.prototype, "swalOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SweetMessageComponent.prototype, "dismissible", void 0);
    SweetMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sweet-message',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sweet-message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sweet-message/sweet-message.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sweet-message.component.scss */ "./src/app/components/sweet-message/sweet-message.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_2__["SwalPartialTargets"],
            src_app_services_customize_message_service__WEBPACK_IMPORTED_MODULE_3__["CustomizeMessageService"]])
    ], SweetMessageComponent);
    return SweetMessageComponent;
}());



/***/ }),

/***/ "./src/app/components/sweet-question/sweet-question.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/sweet-question/sweet-question.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".d-flex {\n  display: flex;\n}\n\n.justify-content-center {\n  justify-content: center;\n}\n\n.flex-column {\n  flex-direction: column;\n}\n\n.align-items-center {\n  align-items: center;\n}\n\n.align-items-flex-start {\n  align-items: flex-start;\n}\n\n.bottom-0 {\n  bottom: 0;\n}\n\n.title-text {\n  font-size: 1.3rem;\n  font-weight: 500;\n}\n\n.button-sweet {\n  color: white !important;\n  font-weight: bold;\n  padding: 10px;\n  width: 40%;\n}\n\n.text-align-center {\n  text-align: center;\n}\n\n.title-text {\n  font-size: 1.3rem;\n}\n\n.min-height-100px {\n  min-height: 100px;\n}\n\n.font-size-15px {\n  font-size: 15px;\n}\n\n.margin-right-5px {\n  margin-right: 5px;\n}\n\n.margin-left-5px {\n  margin-left: 5px;\n}\n\n.margin-5px {\n  margin: 0px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zd2VldC1xdWVzdGlvbi9DOlxcVXNlcnNcXHBjXFxEZXNrdG9wXFxQcm9qZWN0c1xcYW5ndWxhclxcYmxvZy1hbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzd2VldC1tZXNzYWdlXFxzd2VldC1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3N3ZWV0LXF1ZXN0aW9uL3N3ZWV0LXF1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3N3ZWV0LXF1ZXN0aW9uL0M6XFxVc2Vyc1xccGNcXERlc2t0b3BcXFByb2plY3RzXFxhbmd1bGFyXFxibG9nLWFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHN3ZWV0LXF1ZXN0aW9uXFxzd2VldC1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QUM5Q0E7RUFDRSxpQkFITztBRG9EVDs7QUM5Q0E7RUFDRSxnQkFQTztBRHdEVDs7QUM5Q0E7RUFDRSxlQUFBO0FEaURGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zd2VldC1xdWVzdGlvbi9zd2VldC1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kLWZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsZXgtY29sdW1uIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uYWxpZ24taXRlbXMtY2VudGVyIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYWxpZ24taXRlbXMtZmxleC1zdGFydCB7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5ib3R0b20tMCB7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4udGl0bGUtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmJ1dHRvbi1zd2VldCB7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG4udGV4dC1hbGlnbi1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG59XHJcblxyXG4ubWluLWhlaWdodC0xMDBweCB7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5mb250LXNpemUtMTVweCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbiIsIi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uanVzdGlmeS1jb250ZW50LWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZmxleC1jb2x1bW4ge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYWxpZ24taXRlbXMtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFsaWduLWl0ZW1zLWZsZXgtc3RhcnQge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmJvdHRvbS0wIHtcbiAgYm90dG9tOiAwO1xufVxuXG4udGl0bGUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYnV0dG9uLXN3ZWV0IHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogNDAlO1xufVxuXG4udGV4dC1hbGlnbi1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXRsZS10ZXh0IHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5taW4taGVpZ2h0LTEwMHB4IHtcbiAgbWluLWhlaWdodDogMTAwcHg7XG59XG5cbi5mb250LXNpemUtMTVweCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLm1hcmdpbi1yaWdodC01cHgge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLm1hcmdpbi1sZWZ0LTVweCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5tYXJnaW4tNXB4IHtcbiAgbWFyZ2luOiAwcHggNXB4O1xufSIsIkBpbXBvcnQgJ3NyYy9hcHAvY29tcG9uZW50cy9zd2VldC1tZXNzYWdlL3N3ZWV0LW1lc3NhZ2UuY29tcG9uZW50LnNjc3MnO1xyXG5cclxuJG1hcmdpbjogNXB4O1xyXG5cclxuLm1hcmdpbi1yaWdodC01cHgge1xyXG4gIG1hcmdpbi1yaWdodDogJG1hcmdpbjtcclxufVxyXG5cclxuLm1hcmdpbi1sZWZ0LTVweCB7XHJcbiAgbWFyZ2luLWxlZnQ6ICRtYXJnaW47XHJcbn1cclxuXHJcbi5tYXJnaW4tNXB4IHtcclxuICBtYXJnaW46IDBweCAkbWFyZ2luO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/sweet-question/sweet-question.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/sweet-question/sweet-question.component.ts ***!
  \***********************************************************************/
/*! exports provided: SweetQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweetQuestionComponent", function() { return SweetQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "./node_modules/@sweetalert2/ngx-sweetalert2/fesm5/sweetalert2-ngx-sweetalert2.js");
/* harmony import */ var src_app_services_customize_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/customize-message.service */ "./src/app/services/customize-message.service.ts");




var SweetQuestionComponent = /** @class */ (function () {
    /**
     * @ignore
     */
    function SweetQuestionComponent(swalTargets, customizeMessageService) {
        this.swalTargets = swalTargets;
        this.customizeMessageService = customizeMessageService;
        /**
         * dismissible.
         */
        this.dismissible = true;
    }
    /**
     * Show message.
     */
    SweetQuestionComponent.prototype.show = function () {
        // show swal
        this.generalSwal.show();
    };
    /**
     * Close message.
     */
    SweetQuestionComponent.prototype.close = function (answer) {
        // clos swal
        this.generalSwal.nativeSwal.close();
        // send answer
        this.sendAnswer(answer);
    };
    /**
     * Send anwser.
     */
    SweetQuestionComponent.prototype.sendAnswer = function (answer) {
        // send answer
        this.customizeMessageService.loaderSubjectAnswerQuestion.next(answer);
    };
    SweetQuestionComponent.componentName = 'SweetQuestionComponent';
    SweetQuestionComponent.ctorParameters = function () { return [
        { type: _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_2__["SwalPartialTargets"] },
        { type: src_app_services_customize_message_service__WEBPACK_IMPORTED_MODULE_3__["CustomizeMessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('swal', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_2__["SwalComponent"])
    ], SweetQuestionComponent.prototype, "generalSwal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SweetQuestionComponent.prototype, "swalOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SweetQuestionComponent.prototype, "dismissible", void 0);
    SweetQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sweet-question',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sweet-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sweet-question/sweet-question.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sweet-question.component.scss */ "./src/app/components/sweet-question/sweet-question.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_2__["SwalPartialTargets"],
            src_app_services_customize_message_service__WEBPACK_IMPORTED_MODULE_3__["CustomizeMessageService"]])
    ], SweetQuestionComponent);
    return SweetQuestionComponent;
}());



/***/ }),

/***/ "./src/app/guards/post-register-guard.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/guards/post-register-guard.service.ts ***!
  \*******************************************************/
/*! exports provided: PostRegisterGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostRegisterGuardService", function() { return PostRegisterGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PostRegisterGuardService = /** @class */ (function () {
    function PostRegisterGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    PostRegisterGuardService.prototype.canActivate = function (route, state) {
        if (!this.authService.isAuthorized) {
            this.router.navigate(['error', '403']);
        }
        return this.authService.isAuthorized;
    };
    PostRegisterGuardService.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    PostRegisterGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PostRegisterGuardService);
    return PostRegisterGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.user = user;
                localStorage.setItem('user', JSON.stringify(_this.user));
            }
            else {
                localStorage.setItem('user', null);
            }
        });
    }
    AuthService.prototype.login = function (email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(email, password)];
                    case 1:
                        _a.sent();
                        this.router.navigate(['home']);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        alert('Error! ' + e_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.signOut()];
                    case 1:
                        _a.sent();
                        localStorage.removeItem('user');
                        this.router.navigate(['home']);
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.register = function (email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(email, password)];
                    case 1:
                        result = _a.sent();
                        // this.sendEmailVerification();
                        this.router.navigate(['login']);
                        return [2 /*return*/, result];
                }
            });
        });
    };
    AuthService.prototype.sendEmailVerification = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.currentUser.sendEmailVerification()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.sendPasswordResetEmail = function (passwordResetEmail) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AuthService.prototype.loginWithGoogle = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider())];
                    case 1:
                        _a.sent();
                        this.router.navigate(['home']);
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.loginWithFacebook = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider())];
                    case 1:
                        _a.sent();
                        this.router.navigate(['home']);
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            var user = JSON.parse(localStorage.getItem('user'));
            return user !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isAuthorized", {
        get: function () {
            var user = JSON.parse(localStorage.getItem('user'));
            return user.uid === '8jGPNnaFWud2E901CjgF1Yx8ny12';
        },
        enumerable: true,
        configurable: true
    });
    AuthService.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/chatbot.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/chatbot.service.ts ***!
  \*********************************************/
/*! exports provided: ChatbotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbotService", function() { return ChatbotService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ChatbotService = /** @class */ (function () {
    function ChatbotService(http) {
        this.http = http;
        this.baseURL = 'https://api.dialogflow.com/v1/query?v=20150910';
        this.token = '08d2c8743d9a41ac89b758468c403f79';
    }
    ChatbotService.prototype.getResponse = function (query) {
        var data = {
            query: query,
            lang: 'en',
            sessionId: '12345',
        };
        return this.http
            .post("" + this.baseURL, data, { headers: this.getHeaders() });
    };
    ChatbotService.prototype.getHeaders = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('Authorization', "Bearer " + this.token);
        return headers;
    };
    ChatbotService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ChatbotService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ChatbotService);
    return ChatbotService;
}());



/***/ }),

/***/ "./src/app/services/customize-message.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/customize-message.service.ts ***!
  \*******************************************************/
/*! exports provided: CustomizeMessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizeMessageService", function() { return CustomizeMessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var CustomizeMessageService = /** @class */ (function () {
    /**
     * @ignore
     */
    function CustomizeMessageService() {
        /**
         * Create a loader subject to dispare events and show messages.
         */
        this.loaderSubjectMessage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Create a loader subject to dispare events when messasge was dimissed.
         */
        this.loaderSubjectAnswerMessage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Create a loader subject to dispare events and show question.
         */
        this.loaderSubjectQuestion = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Create a loader subject to dispare events when question was dimissed.
         */
        this.loaderSubjectAnswerQuestion = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Yes or not default buttons of question
         */
        this.defaultButtons = [
            {
                text: 'Sim',
                value: true,
                class: 'primary',
            },
            {
                text: 'Não',
                value: false,
            },
        ];
        // egt observable of loader subject
        this.loaderStateMessage = this.loaderSubjectMessage.asObservable();
        // egt observable of loader subject
        this.loaderStateAnswerMessage = this.loaderSubjectAnswerMessage.asObservable();
        // egt observable of loader subject
        this.loaderStateQuestion = this.loaderSubjectQuestion.asObservable();
        // egt observable of loader subject
        this.loaderStateAnswerQuestion = this.loaderSubjectAnswerQuestion.asObservable();
    }
    /**
     * Show message component.
     */
    CustomizeMessageService.prototype.showMessage = function (title, content, button, dismissible) {
        var _this = this;
        if (title === void 0) { title = ''; }
        if (content === void 0) { content = ''; }
        if (button === void 0) { button = ''; }
        if (dismissible === void 0) { dismissible = true; }
        // show message
        this.loaderSubjectMessage.next({ title: title, content: content, button: button, dismissible: dismissible });
        // return
        return new Promise(function (resolve) {
            _this.loaderSubjectAnswerMessage.subscribe(function (result) {
                resolve(result);
            });
        });
    };
    /**
     * Show message component.
     */
    CustomizeMessageService.prototype.showQuestion = function (title, content, buttons, dismissible) {
        var _this = this;
        if (title === void 0) { title = ''; }
        if (content === void 0) { content = ''; }
        if (buttons === void 0) { buttons = this.defaultButtons; }
        if (dismissible === void 0) { dismissible = true; }
        // show message
        this.loaderSubjectQuestion.next({ title: title, content: content, buttons: buttons, dismissible: dismissible });
        // return
        return new Promise(function (resolve) {
            _this.loaderSubjectAnswerQuestion.subscribe(function (result) {
                resolve(result);
            });
        });
    };
    CustomizeMessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomizeMessageService);
    return CustomizeMessageService;
}());



/***/ }),

/***/ "./src/app/services/http-request.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/http-request.service.ts ***!
  \**************************************************/
/*! exports provided: HttpRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestService", function() { return HttpRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






/**
 * Http Request Provider
 */
var HttpRequestService = /** @class */ (function () {
    /**
     * @ignore
     */
    function HttpRequestService(http, tokenProvider) {
        this.http = http;
        this.tokenProvider = tokenProvider;
    }
    /**
     * Get request.
     * @param url Url to request.
     */
    HttpRequestService.prototype.getRequest = function (url, responseType) {
        if (responseType === void 0) { responseType = {}; }
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + url, responseType)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(3));
    };
    /**
     * Post request.
     * @param url Url to request.
     * @param body Body to request.
     */
    HttpRequestService.prototype.postRequest = function (url, body) {
        // create request options
        var options = {
            observe: 'response',
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + url, body, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(3));
    };
    /**
     * Put request.
     * @param url Url to request.
     * @param body Body to request.
     */
    HttpRequestService.prototype.putRequest = function (url, body) {
        // create request options
        var options = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + url, body, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(3));
    };
    /**
     * Post request with authorization header.
     * @param url Url to do request.
     * @param data Data of the body of request.
     * @param type Type of request.
     * @returns Promise Request or Response return.
     */
    HttpRequestService.prototype.postRequestWithAuthorization = function (url, body, contentType, replaceToken) {
        if (contentType === void 0) { contentType = 'application/json'; }
        // get token
        var token = this.tokenProvider.getToken();
        // create request options
        var options = {
            headers: {
                'Content-Type': contentType,
                Authorization: (replaceToken) ? replaceToken : token,
            },
        };
        // return
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + url, body, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(3));
    };
    /**
    * Get request with authorization header.
    * @param url Url to do request.
    * @returns Promise Request or Response return.
    */
    HttpRequestService.prototype.getRequestWithAuthorization = function (url, contentType, replaceToken) {
        if (contentType === void 0) { contentType = 'application/json'; }
        // get token
        var token = this.tokenProvider.getToken();
        // create request options
        var options = {
            headers: {
                'Content-Type': contentType,
                Authorization: (replaceToken) ? replaceToken : token,
            },
        };
        // return
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + url, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(3));
    };
    /**
     * Put request with authorization header.
     * @param url Url to do request.
     * @returns Promise Request or Response return.
     */
    HttpRequestService.prototype.putRequestWithAuthorization = function (url, body, contentType, replaceToken) {
        if (contentType === void 0) { contentType = 'application/json'; }
        // get token
        var token = this.tokenProvider.getToken();
        // create request options
        var options = {
            headers: {
                'Content-Type': contentType,
                Authorization: (replaceToken) ? replaceToken : token,
            },
        };
        // return
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + url, body, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(3));
    };
    /**
     * Delete request with authorization header.
     * @param url Url to do request.
     * @returns Promise Request or Response return.
     */
    HttpRequestService.prototype.deleteRequestWithAuthorization = function (url, contentType, replaceToken) {
        if (contentType === void 0) { contentType = 'application/json'; }
        // get token
        var token = this.tokenProvider.getToken();
        // create request options
        var options = {
            headers: {
                'Content-Type': contentType,
                Authorization: (replaceToken) ? replaceToken : token,
            },
        };
        // return
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + url, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(3));
    };
    HttpRequestService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] }
    ]; };
    HttpRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]])
    ], HttpRequestService);
    return HttpRequestService;
}());



/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "./node_modules/@ngx-pwa/local-storage/fesm5/ngx-pwa-local-storage.js");



/**
 * Provider service
 */
var StorageService = /** @class */ (function () {
    /**
     * @ignore
     */
    function StorageService(localStorage) {
        this.localStorage = localStorage;
    }
    /**
     * Retrieve data from storage with a key identifier.
     * @param key Key identifier.
     * @returns Any return.
     */
    StorageService.prototype.retrieve = function (key) {
        var _this = this;
        return new Promise(function (resolve) { return _this.localStorage.getItem(key).subscribe(function (value) { return resolve(value); }); });
    };
    /**
     * Clear storage.
     * @returns Void return.
     */
    StorageService.prototype.clear = function () {
        var _this = this;
        return new Promise(function (resolve) { return _this.localStorage.clear().subscribe(function (_) { return resolve(); }); });
    };
    /**
     * Store data.
     * @param key Key to identiy in storage.
     * @param value Object to store.
     */
    StorageService.prototype.store = function (key, value) {
        var _this = this;
        return new Promise(function (resolve) { return _this.localStorage.setItem(key, value).subscribe(function (_) { return resolve(); }); });
    };
    /**
     * Remove item from storage.
     * @param key Key of item.
     */
    StorageService.prototype.removeItem = function (key) {
        var _this = this;
        return new Promise(function (resolve) { return _this.localStorage.removeItem(key).subscribe(function (_) { return resolve(); }); });
    };
    StorageService.ctorParameters = function () { return [
        { type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_2__["LocalStorage"] }
    ]; };
    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_2__["LocalStorage"]])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/services/token.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/token.service.ts ***!
  \*******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Token Provider
 *
 * Provide token method
 */
var TokenService = /** @class */ (function () {
    /**
     * @ignore
     */
    function TokenService() {
    }
    /**
     * Get setted token.
     * @returns A string.
     */
    TokenService.prototype.getToken = function () {
        return this.token;
    };
    /**
     * Set token
     */
    TokenService.prototype.setToken = function (token) {
        this.token = token;
    };
    /**
     * Decode jwt token.
     */
    TokenService.prototype.getDataToken = function () {
        return jwt_decode__WEBPACK_IMPORTED_MODULE_2__(this.token);
    };
    TokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/services/utils.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/utils.service.ts ***!
  \*******************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * Utils Provider
 *
 * Provides common methods to all ap.
 */
var UtilsService = /** @class */ (function () {
    /**
     * @ignore
     */
    function UtilsService() {
    }
    UtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UtilsService);
    return UtilsService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd-icon.js");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/fesm5/ant-design-icons-angular-icons.js");
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-typed-js */ "./node_modules/ngx-typed-js/fesm5/ngx-typed-js.js");
/* harmony import */ var ngx_summernote__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-summernote */ "./node_modules/ngx-summernote/fesm5/ngx-summernote.js");

// modules




// see documentation: https://ng.ant.design/components/spin/en





var icons = [
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__["UserOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__["LockOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__["MenuUnfoldOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__["MenuFoldOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__["TeamOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__["LogoutOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__["FormOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__["LoginOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__["HomeOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__["ArrowLeftOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__["PlusOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__["DeleteOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__["MinusSquareOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__["PlusSquareOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__["StarFill"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__["LikeFill"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__["MessageFill"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__["FacebookOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__["InstagramOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__["GithubOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__["MessageOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__["MailOutline"],
];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
                ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"],
                ngx_typed_js__WEBPACK_IMPORTED_MODULE_8__["NgxTypedJsModule"],
                ngx_summernote__WEBPACK_IMPORTED_MODULE_9__["NgxSummernoteModule"],
            ],
            declarations: [],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
                ngx_typed_js__WEBPACK_IMPORTED_MODULE_8__["NgxTypedJsModule"],
                ngx_summernote__WEBPACK_IMPORTED_MODULE_9__["NgxSummernoteModule"],
            ],
            providers: [
                { provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NZ_ICONS"], useValue: icons },
            ],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false,
    api_url: 'http://localhost:8080',
    firebase: {
        apiKey: 'AIzaSyDlTZlbiyzUcJRMraLY0_ViABpKuAzKxWs',
        authDomain: 'blog-angular-2dec4.firebaseapp.com',
        databaseURL: 'https://blog-angular-2dec4.firebaseio.com',
        projectId: 'blog-angular-2dec4',
        storageBucket: 'blog-angular-2dec4.appspot.com',
        messagingSenderId: '988795212086',
        appId: '1:988795212086:web:6996860c496a5d4b87e397',
    },
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pc\Desktop\Projects\angular\blog-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map