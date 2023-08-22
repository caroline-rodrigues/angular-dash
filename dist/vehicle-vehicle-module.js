(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vehicle-vehicle-module"],{

/***/ "./src/app/vehicle/vehicle.component.html":
/*!************************************************!*\
  !*** ./src/app/vehicle/vehicle.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\" style=\"padding: 0.5rem\">\n          <div class=\"header\">\n            <div style=\"display: flex; justify-content: space-between\">\n              <h4 class=\"title\">Veículos</h4>\n              <button\n                class=\"btn btn-success btn-fill btn-wd\"\n                routerLink=\"/components/new-vehicle\"\n              >\n                Novo Veículo\n              </button>\n            </div>\n            <form role=\"search\" style=\"padding-top: 1rem\">\n              <div class=\"input-group\">\n                <input\n                  type=\"text\"\n                  value=\"\"\n                  class=\"form-control w-100\"\n                  placeholder=\"Search...\"\n                  [(ngModel)]=\"searchQuery\"\n                  name=\"search\"\n                  (input)=\"filterItems()\"\n                />\n                <span class=\"input-group-addon\">\n                  <i class=\"fa fa-search\"></i>\n                </span>\n              </div>\n            </form>\n          </div>\n          <div class=\"content table-responsive table-full-width\">\n            <table class=\"table\" (onDeleteRent)=\"onDeletedRent($event)\">\n              <thead>\n                <tr>\n                  <th class=\"text-center\">{{ headerRow[0] }}</th>\n                  <th class=\"text-center\">{{ headerRow[1] }}</th>\n                  <th class=\"text-center\">{{ headerRow[2] }}</th>\n                  <th class=\"text-center\">{{ headerRow[3] }}</th>\n                  <th class=\"text-center\">{{ headerRow[4] }}</th>\n                  <th class=\"text-center\">{{ headerRow[6] }}</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let vehicle of filteredRows\">\n                  <td class=\"text-center\">{{ vehicle?._id }}</td>\n                  <td class=\"text-center\">{{ vehicle?.name }}</td>\n                  <td class=\"text-center\">{{ vehicle?.createdAt }}</td>\n                  <td class=\"text-center\">{{ vehicle?.year }}</td>\n                  <td class=\"td-actions text-center\">\n                    <button\n                      rel=\"tooltip\"\n                      title=\"Edit Profile\"\n                      class=\"btn btn-success btn-simple btn-xs\"\n                      (click)=\"editProfile(vehicle?._id)\"\n                    >\n                      <i class=\"fa fa-edit\"></i>\n                    </button>\n                    <button\n                      rel=\"tooltip\"\n                      title=\"Remove\"\n                      class=\"btn btn-danger btn-simple btn-xs\"\n                      (click)=\"delete(vehicle?._id)\"\n                    >\n                      <i class=\"fa fa-times\"></i>\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <div style=\"display: flex; justify-content: center\">\n            <ul class=\"pagination\">\n              <li\n                [class.disabled]=\"currentPage === 1\"\n                (click)=\"changePage(currentPage - 1)\"\n              >\n                <a><<</a>\n              </li>\n              <li\n                [class.active]=\"currentPage === page\"\n                *ngFor=\"let page of totalPagesArray\"\n              >\n                <a (click)=\"changePage(page)\">{{ page }}</a>\n              </li>\n              <li\n                [class.disabled]=\"currentPage === totalPages\"\n                (click)=\"changePage(currentPage + 1)\"\n              >\n                <a>>></a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/vehicle/vehicle.component.ts":
/*!**********************************************!*\
  !*** ./src/app/vehicle/vehicle.component.ts ***!
  \**********************************************/
/*! exports provided: VehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleComponent", function() { return VehicleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _vehicle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vehicle.service */ "./src/app/vehicle/vehicle.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VehicleComponent = /** @class */ (function () {
    function VehicleComponent(vehicleService, router) {
        this.vehicleService = vehicleService;
        this.router = router;
        this.searchQuery = "";
        this.pagesToShow = 3;
        this.totalPagesArray = [];
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.vehicleList = [];
        this.headerRow = [
            "ID",
            "Modelo",
            "Chassi",
            "Data cadastro",
            "Ano",
            "Ações",
        ];
    }
    VehicleComponent.prototype.ngOnInit = function () {
        this.getAll(false);
    };
    VehicleComponent.prototype.getAll = function (event) {
        var _this = this;
        this.vehicleService
            .getAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (vehicleResponse) { return vehicleResponse.results; }))
            .subscribe(function (vehicleList) {
            _this.vehicleList = vehicleList;
            _this.totalPages = Math.ceil(_this.vehicleList.length / _this.itemsPerPage);
            if (event && _this.filteredRows.length === 1 && _this.currentPage !== 1) {
                _this.currentPage = _this.totalPages;
            }
            _this.filteredRows = _this.paginate(_this.vehicleList);
            _this.totalPagesArray = _this.calculateTotalPagesArray(_this.currentPage, _this.totalPages);
        });
    };
    VehicleComponent.prototype.paginate = function (data) {
        var startIndex = (this.currentPage - 1) * this.itemsPerPage;
        var endIndex = startIndex + this.itemsPerPage;
        return data.slice(startIndex, endIndex);
    };
    VehicleComponent.prototype.calculateTotalPagesArray = function (currentPage, totalPages) {
        var pagesArray = [];
        var startPage = Math.max(1, currentPage - this.pagesToShow);
        var endPage = Math.min(totalPages, currentPage + this.pagesToShow);
        for (var i = startPage; i <= endPage; i++) {
            pagesArray.push(i);
        }
        return pagesArray;
    };
    VehicleComponent.prototype.filterItems = function () {
        var _this = this;
        this.filteredRows = this.paginate(this.vehicleList).filter(function (vehicle) {
            var vehicleValues = Object.keys(vehicle).map(function (keyframes) { return vehicle[keyframes]; });
            return vehicleValues
                .toString()
                .toLowerCase()
                .includes(_this.searchQuery.toLowerCase());
        });
    };
    VehicleComponent.prototype.delete = function (vehicle) {
        var _this = this;
        this.vehicleService.delete(vehicle).subscribe(function () {
            _this.getAll(true);
        });
    };
    VehicleComponent.prototype.editProfile = function (vehicleId) {
        this.router.navigate(["/components/new-vehicle"], {
            queryParams: { id: vehicleId },
        });
    };
    VehicleComponent.prototype.changePage = function (page) {
        if (page >= 1 && page <= this.totalPages) {
            this.currentPage = page;
            this.filteredRows = this.paginate(this.vehicleList);
            this.totalPagesArray = this.calculateTotalPagesArray(this.currentPage, this.totalPages);
        }
    };
    VehicleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-vehicle",
            template: __webpack_require__(/*! ./vehicle.component.html */ "./src/app/vehicle/vehicle.component.html"),
        }),
        __metadata("design:paramtypes", [_vehicle_service__WEBPACK_IMPORTED_MODULE_1__["VehicleService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], VehicleComponent);
    return VehicleComponent;
}());



/***/ }),

/***/ "./src/app/vehicle/vehicle.module.ts":
/*!*******************************************!*\
  !*** ./src/app/vehicle/vehicle.module.ts ***!
  \*******************************************/
/*! exports provided: VehicleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleModule", function() { return VehicleModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _vehicle_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehicle.routing */ "./src/app/vehicle/vehicle.routing.ts");
/* harmony import */ var _vehicle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vehicle.component */ "./src/app/vehicle/vehicle.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var VehicleModule = /** @class */ (function () {
    function VehicleModule() {
    }
    VehicleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_vehicle_routing__WEBPACK_IMPORTED_MODULE_4__["VehicleRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            declarations: [_vehicle_component__WEBPACK_IMPORTED_MODULE_5__["VehicleComponent"]],
        })
    ], VehicleModule);
    return VehicleModule;
}());



/***/ }),

/***/ "./src/app/vehicle/vehicle.routing.ts":
/*!********************************************!*\
  !*** ./src/app/vehicle/vehicle.routing.ts ***!
  \********************************************/
/*! exports provided: VehicleRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleRoutes", function() { return VehicleRoutes; });
/* harmony import */ var _vehicle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicle.component */ "./src/app/vehicle/vehicle.component.ts");

var VehicleRoutes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: _vehicle_component__WEBPACK_IMPORTED_MODULE_0__["VehicleComponent"],
            },
        ],
    },
];


/***/ })

}]);
//# sourceMappingURL=vehicle-vehicle-module.js.map