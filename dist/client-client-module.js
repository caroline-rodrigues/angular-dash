(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-client-module"],{

/***/ "./src/app/client/client.component.html":
/*!**********************************************!*\
  !*** ./src/app/client/client.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  client works!\n</p>\n"

/***/ }),

/***/ "./src/app/client/client.component.ts":
/*!********************************************!*\
  !*** ./src/app/client/client.component.ts ***!
  \********************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientComponent = /** @class */ (function () {
    function ClientComponent() {
    }
    ClientComponent.prototype.ngOnInit = function () { };
    ClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-client",
            template: __webpack_require__(/*! ./client.component.html */ "./src/app/client/client.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "./src/app/client/client.module.ts":
/*!*****************************************!*\
  !*** ./src/app/client/client.module.ts ***!
  \*****************************************/
/*! exports provided: ClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModule", function() { return ClientModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client.component */ "./src/app/client/client.component.ts");
/* harmony import */ var _client_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client.routing */ "./src/app/client/client.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ClientModule = /** @class */ (function () {
    function ClientModule() {
    }
    ClientModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_client_routing__WEBPACK_IMPORTED_MODULE_5__["ClientRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            declarations: [_client_component__WEBPACK_IMPORTED_MODULE_4__["ClientComponent"]],
        })
    ], ClientModule);
    return ClientModule;
}());



/***/ }),

/***/ "./src/app/client/client.routing.ts":
/*!******************************************!*\
  !*** ./src/app/client/client.routing.ts ***!
  \******************************************/
/*! exports provided: ClientRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientRoutes", function() { return ClientRoutes; });
/* harmony import */ var _client_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client.component */ "./src/app/client/client.component.ts");

var ClientRoutes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: _client_component__WEBPACK_IMPORTED_MODULE_0__["ClientComponent"],
            },
        ],
    },
];


/***/ })

}]);
//# sourceMappingURL=client-client-module.js.map