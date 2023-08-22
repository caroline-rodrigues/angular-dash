(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rent-rent-module"],{

/***/ "./src/app/rent/rent.component.html":
/*!******************************************!*\
  !*** ./src/app/rent/rent.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\" style=\"padding: 0.5rem\">\n          <div class=\"header\">\n            <div style=\"display: flex; justify-content: space-between\">\n              <h4 class=\"title\">Aluguel</h4>\n              <button\n                class=\"btn btn-success btn-fill btn-wd\"\n                routerLink=\"/components/new-rent\"\n              >\n                Novo Aluguel\n              </button>\n            </div>\n            <form role=\"search\" style=\"padding-top: 1rem\">\n              <div class=\"input-group\">\n                <input\n                  type=\"text\"\n                  value=\"\"\n                  class=\"form-control w-100\"\n                  placeholder=\"Buscar...\"\n                  [(ngModel)]=\"searchQuery\"\n                  name=\"search\"\n                  (input)=\"filterItems()\"\n                />\n                <span class=\"input-group-addon\">\n                  <i class=\"fa fa-search\"></i>\n                </span>\n              </div>\n            </form>\n          </div>\n          <div class=\"content table-responsive table-full-width\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th class=\"text-center\">{{ headerRow[0] }}</th>\n                  <th class=\"text-center\">{{ headerRow[1] }}</th>\n                  <th class=\"text-center\">{{ headerRow[2] }}</th>\n                  <th class=\"text-center\">{{ headerRow[3] }}</th>\n                  <th class=\"text-center\">{{ headerRow[4] }}</th>\n                  <th class=\"text-center\">{{ headerRow[5] }}</th>\n                  <th class=\"text-center\">{{ headerRow[6] }}</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let row of filteredRows\">\n                  <td class=\"text-center\">{{ row?.rent?._id }}</td>\n                  <td class=\"text-center\">{{ row?.client?.name }}</td>\n                  <td class=\"text-center\">{{ row?.client?.cpf }}</td>\n                  <td class=\"text-center\">{{ row?.rent?.endDate }}</td>\n                  <td class=\"text-center\">{{ row?.vehicle?.brand }}</td>\n                  <td class=\"text-center\">{{ row?.rent?.situation }}</td>\n                  <td class=\"td-actions text-center\">\n                    <button\n                      rel=\"tooltip\"\n                      title=\"Edit Profile\"\n                      class=\"btn btn-success btn-simple btn-xs\"\n                      (click)=\"editRent(row?.rent?._id)\"\n                    >\n                      <i class=\"fa fa-edit\"></i>\n                    </button>\n                    <button\n                      rel=\"tooltip\"\n                      title=\"Remove\"\n                      class=\"btn btn-danger btn-simple btn-xs\"\n                      (click)=\"onDeletedRent(row?.rent?._id)\"\n                    >\n                      <i class=\"fa fa-times\"></i>\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <div style=\"display: flex; justify-content: center\">\n            <ul class=\"pagination\">\n              <li\n                [class.disabled]=\"currentPage === 1\"\n                (click)=\"changePage(currentPage - 1)\"\n              >\n                <a><<</a>\n              </li>\n              <li\n                [class.active]=\"currentPage === page\"\n                *ngFor=\"let page of totalPagesArray\"\n              >\n                <a (click)=\"changePage(page)\">{{ page }}</a>\n              </li>\n              <li\n                [class.disabled]=\"currentPage === totalPages\"\n                (click)=\"changePage(currentPage + 1)\"\n              >\n                <a>>></a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/rent/rent.component.ts":
/*!****************************************!*\
  !*** ./src/app/rent/rent.component.ts ***!
  \****************************************/
/*! exports provided: RentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentComponent", function() { return RentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rent_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rent.service */ "./src/app/rent/rent.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RentComponent = /** @class */ (function () {
    function RentComponent(rentService, router) {
        this.rentService = rentService;
        this.router = router;
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.pagesToShow = 3;
        this.totalPagesArray = [];
        this.rentList = [];
        this.headerRow = [
            "ID",
            "Nome",
            "CPF",
            "Data devolução",
            "Modelo",
            "Situação",
            "Ações",
        ];
    }
    RentComponent.prototype.ngOnInit = function () {
        this.getAll(false);
    };
    RentComponent.prototype.paginate = function (data) {
        var startIndex = (this.currentPage - 1) * this.itemsPerPage;
        var endIndex = startIndex + this.itemsPerPage;
        return data.slice(startIndex, endIndex);
    };
    // findAllRent() {
    //   this.rentService
    //     .getAll()
    //     .pipe(map((rentResponse) => rentResponse.filteredEntityResults))
    //     .subscribe((rent) => {
    //       this.rentList = rent;
    //       this.filteredRows = this.paginate(this.rentList);
    //       this.totalPages = Math.ceil(this.rentList.length / this.itemsPerPage);
    //     });
    // }
    RentComponent.prototype.getAll = function (event) {
        var _this = this;
        this.rentService
            .getAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (rentResponse) { return rentResponse.filteredEntityResults; }))
            .subscribe(function (rentList) {
            _this.rentList = rentList;
            _this.totalPages = Math.ceil(_this.rentList.length / _this.itemsPerPage);
            if (event && _this.filteredRows.length === 1 && _this.currentPage !== 1) {
                _this.currentPage = _this.totalPages;
            }
            _this.filteredRows = _this.paginate(_this.rentList);
            _this.totalPagesArray = _this.calculateTotalPagesArray(_this.currentPage, _this.totalPages);
        });
    };
    RentComponent.prototype.calculateTotalPagesArray = function (currentPage, totalPages) {
        var pagesArray = [];
        var startPage = Math.max(1, currentPage - this.pagesToShow);
        var endPage = Math.min(totalPages, currentPage + this.pagesToShow);
        for (var i = startPage; i <= endPage; i++) {
            pagesArray.push(i);
        }
        return pagesArray;
    };
    RentComponent.prototype.changePage = function (page) {
        if (page >= 1 && page <= this.totalPages) {
            this.currentPage = page;
            this.filteredRows = this.paginate(this.rentList);
            this.totalPagesArray = this.calculateTotalPagesArray(this.currentPage, this.totalPages);
        }
    };
    RentComponent.prototype.onDeletedRent = function (rentId) {
        var _this = this;
        this.rentService.delete(rentId).subscribe(function () {
            _this.getAll(true);
        });
    };
    RentComponent.prototype.editRent = function (rentId) {
        this.router.navigate(["/components/new-rent"], {
            queryParams: { id: rentId },
        });
    };
    RentComponent.prototype.filterItems = function () {
        var _this = this;
        console.log(this.searchQuery);
        this.filteredRows = this.paginate(this.rentList).filter(function (rent) {
            var _a = rent.rent, _id = _a._id, endDate = _a.endDate;
            var _b = rent.client, name = _b.name, cpf = _b.cpf;
            var contentString = "" + _id + name + cpf + endDate;
            console.log(contentString);
            return contentString
                .toString()
                .toLowerCase()
                .includes(_this.searchQuery.toLowerCase());
        });
    };
    RentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: "rent-cmp",
            template: __webpack_require__(/*! ./rent.component.html */ "./src/app/rent/rent.component.html"),
        }),
        __metadata("design:paramtypes", [_rent_service__WEBPACK_IMPORTED_MODULE_1__["RentService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RentComponent);
    return RentComponent;
}());



/***/ }),

/***/ "./src/app/rent/rent.module.ts":
/*!*************************************!*\
  !*** ./src/app/rent/rent.module.ts ***!
  \*************************************/
/*! exports provided: RentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentModule", function() { return RentModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rent_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rent.component */ "./src/app/rent/rent.component.ts");
/* harmony import */ var _rent_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rent.routing */ "./src/app/rent/rent.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RentModule = /** @class */ (function () {
    function RentModule() {
    }
    RentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_rent_routing__WEBPACK_IMPORTED_MODULE_5__["RentRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            declarations: [_rent_component__WEBPACK_IMPORTED_MODULE_4__["RentComponent"]],
        })
    ], RentModule);
    return RentModule;
}());



/***/ }),

/***/ "./src/app/rent/rent.routing.ts":
/*!**************************************!*\
  !*** ./src/app/rent/rent.routing.ts ***!
  \**************************************/
/*! exports provided: RentRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentRoutes", function() { return RentRoutes; });
/* harmony import */ var _rent_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rent.component */ "./src/app/rent/rent.component.ts");

var RentRoutes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: _rent_component__WEBPACK_IMPORTED_MODULE_0__["RentComponent"],
            },
        ],
    },
];


/***/ })

}]);
//# sourceMappingURL=rent-rent-module.js.map