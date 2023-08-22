(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/client/client.service.ts":
/*!******************************************!*\
  !*** ./src/app/client/client.service.ts ***!
  \******************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientService = /** @class */ (function () {
    function ClientService(http) {
        this.http = http;
    }
    ClientService.prototype.getAll = function () {
        return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "/client/findAll");
    };
    ClientService.prototype.create = function (client) {
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "/client/create", client);
    };
    ClientService.prototype.update = function (client, id) {
        return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "/client/update/" + id, client);
    };
    ClientService.prototype.delete = function (id) {
        return this.http.delete(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "/client/delete/" + id + "\n    ");
    };
    ClientService.prototype.getClientById = function (id) {
        return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "/client/findById/" + id + "\n    ");
    };
    ClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/rent/rent.service.ts":
/*!**************************************!*\
  !*** ./src/app/rent/rent.service.ts ***!
  \**************************************/
/*! exports provided: RentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentService", function() { return RentService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RentService = /** @class */ (function () {
    function RentService(http) {
        this.http = http;
    }
    RentService.prototype.getAll = function () {
        return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "/rent/findAll");
    };
    RentService.prototype.delete = function (id) {
        return this.http.delete(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "/rent/delete/" + id + "\n    ");
    };
    RentService.prototype.create = function (rent) {
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "/rent/create", rent);
    };
    RentService.prototype.getById = function (id) {
        return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "/rent/findById/" + id);
    };
    RentService.prototype.update = function (rent, id) {
        return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "/rent/update/" + id, rent);
    };
    RentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], RentService);
    return RentService;
}());



/***/ }),

/***/ "./src/app/vehicle/vehicle.service.ts":
/*!********************************************!*\
  !*** ./src/app/vehicle/vehicle.service.ts ***!
  \********************************************/
/*! exports provided: VehicleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleService", function() { return VehicleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VehicleService = /** @class */ (function () {
    function VehicleService(http) {
        this.http = http;
    }
    VehicleService.prototype.getAll = function () {
        return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "/vehicle/findAll");
    };
    VehicleService.prototype.getVehicleById = function (id) {
        return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "/vehicle/findById/" + id);
    };
    VehicleService.prototype.delete = function (id) {
        return this.http.delete(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "/vehicle/delete/" + id + "\n    ");
    };
    VehicleService.prototype.create = function (vehicle) {
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "/vehicle/create/", vehicle);
    };
    VehicleService.prototype.update = function (vehicle, id) {
        return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "/vehicle/update/" + id, vehicle);
    };
    VehicleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], VehicleService);
    return VehicleService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map