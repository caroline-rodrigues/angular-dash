(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rent-rent-module"],{

/***/ "./src/app/rent/rent.component.html":
/*!******************************************!*\
  !*** ./src/app/rent/rent.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\" style=\"padding: 0.5rem\">\r\n          <div class=\"header\">\r\n            <div style=\"display: flex; justify-content: space-between\">\r\n              <h4 class=\"title\">Aluguel</h4>\r\n              <button class=\"btn btn-success btn-fill btn-wd\">\r\n                Novo Aluguel\r\n              </button>\r\n            </div>\r\n            <form role=\"search\" style=\"padding-top: 1rem\">\r\n              <div class=\"input-group\">\r\n                <input\r\n                  type=\"text\"\r\n                  value=\"\"\r\n                  class=\"form-control w-100\"\r\n                  placeholder=\"Search...\"\r\n                  [(ngModel)]=\"searchQuery\"\r\n                  name=\"search\"\r\n                />\r\n                <span class=\"input-group-addon\">\r\n                  <i class=\"fa fa-search\"></i>\r\n                </span>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <div class=\"content table-responsive table-full-width\">\r\n            <table class=\"table\" (onDeleteRent)=\"onDeletedRent($event)\">\r\n              <thead>\r\n                <tr>\r\n                  <th class=\"text-center\">{{ headerRow[0] }}</th>\r\n                  <th class=\"text-center\">{{ headerRow[1] }}</th>\r\n                  <th class=\"text-center\">{{ headerRow[2] }}</th>\r\n                  <th class=\"text-center\">{{ headerRow[3] }}</th>\r\n                  <th class=\"text-center\">{{ headerRow[4] }}</th>\r\n                  <th class=\"text-center\">{{ headerRow[5] }}</th>\r\n                  <th class=\"text-center\">{{ headerRow[6] }}</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let row of rows\">\r\n                  <td class=\"text-center\">{{ row?.rent?._id }}</td>\r\n                  <td class=\"text-center\">{{ row?.client?.name }}</td>\r\n                  <td class=\"text-center\">{{ row?.client?.cpf }}</td>\r\n                  <td class=\"text-center\">{{ row?.rent?.endDate }}</td>\r\n                  <td class=\"text-center\">{{ row?.vehicle?.brand }}</td>\r\n                  <td class=\"text-center\">{{ row?.rent?.situation }}</td>\r\n                  <td class=\"td-actions text-center\">\r\n                    <button\r\n                      rel=\"tooltip\"\r\n                      title=\"Edit Profile\"\r\n                      class=\"btn btn-success btn-simple btn-xs\"\r\n                    >\r\n                      <i class=\"fa fa-edit\"></i>\r\n                    </button>\r\n                    <button\r\n                      rel=\"tooltip\"\r\n                      title=\"Remove\"\r\n                      class=\"btn btn-danger btn-simple btn-xs\"\r\n                      (click)=\"delete(row?.rent?._id)\"\r\n                    >\r\n                      <i class=\"fa fa-times\"></i>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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
    function RentComponent(rentService) {
        this.rentService = rentService;
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
        this.onDeleteRent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchQueryChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    RentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rows = [
            {
                rent: {
                    _id: "1",
                    endDate: "2023-07-20",
                    situation: "active",
                },
                client: {
                    name: "John Doe",
                    cpf: "12345678901",
                },
                vehicle: {
                    brand: "Toyota",
                },
            },
            {
                rent: {
                    _id: "2",
                    endDate: "2023-07-22",
                    situation: "inactive",
                },
                client: {
                    name: "Jane Smith",
                    cpf: "98765432109",
                },
                vehicle: {
                    brand: "Honda",
                },
            },
            {
                rent: {
                    _id: "3",
                    endDate: "2023-07-25",
                    situation: "active",
                },
                client: {
                    name: "Michael Johnson",
                    cpf: "45678912304",
                },
                vehicle: {
                    brand: "Ford",
                },
            },
            {
                rent: {
                    _id: "4",
                    endDate: "2023-07-30",
                    situation: "inactive",
                },
                client: {
                    name: "Emily Davis",
                    cpf: "65432198706",
                },
                vehicle: {
                    brand: "Chevrolet",
                },
            },
            {
                rent: {
                    _id: "5",
                    endDate: "2023-08-02",
                    situation: "active",
                },
                client: {
                    name: "Daniel Wilson",
                    cpf: "78912345603",
                },
                vehicle: {
                    brand: "Volkswagen",
                },
            },
        ];
        this.filteredRows = this.rows;
        this.searchQueryChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])())
            .subscribe(function (query) {
            _this.search(query);
        });
        // this.rentService.getAll().subscribe((rent) => {
        //   this.rentList = rent;
        // });
        // this.rentService
        //   .getAll()
        //   .pipe(
        //     map((rentResponse) => {
        //       rentResponse?.results;
        //     })
        //   )
        //   .subscribe((rent) => {
        //     this.rentList = rent;
        //   });
        this.rentService
            .getAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (rentResponse) { return rentResponse.filteredEntityResults; }))
            .subscribe(function (rent) {
            (_a = _this.rentList).push.apply(_a, rent);
            var _a;
            // this.rentList = this.rentList.flat()
        });
        console.log("sub", this.rentList);
        // console.log(this.rentList);
        // this.rentTable.dataRows.
        // this.rentTable.headerRow = [
        //   "#",
        //   "Name",
        //   "Job Position",
        //   "Since",
        //   "Salary",
        //   "Actions",
        // ];
        // this.rentList.forEach((rent) => {
        //   this.rentTable.dataRows.push(rent);
        // });
    };
    RentComponent.prototype.search = function (query) {
        if (query) {
            this.filteredRows = this.rows.filter(function (row) {
                return (row.client.name.toLowerCase().includes(query.toLowerCase()) ||
                    row.client.cpf.includes(query.toLowerCase()) ||
                    row.rent._id.includes(query.toLowerCase()) ||
                    row.rent.endDate.includes(query.toLowerCase()) ||
                    row.vehicle.brand.toLowerCase().includes(query.toLowerCase()) ||
                    row.rent.situation.toLowerCase().includes(query.toLowerCase()));
            });
        }
        else {
            this.filteredRows = this.rows;
        }
    };
    RentComponent.prototype.delete = function (id) {
        var _this = this;
        this.rentService.delete(id).subscribe(function () {
            _this.onDeleteRent.emit(id);
            console.log("delete", id);
        });
    };
    RentComponent.prototype.onDeletedRent = function (id) {
        console.log("id", id);
        if (id) {
            console.log("opaaa");
            var index = this.rentList.findIndex(function (rentItem) { return rentItem.rent._id == id; });
            this.rentList.splice(index, 1);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RentComponent.prototype, "onDeleteRent", void 0);
    RentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: "rent-cmp",
            template: __webpack_require__(/*! ./rent.component.html */ "./src/app/rent/rent.component.html"),
        }),
        __metadata("design:paramtypes", [_rent_service__WEBPACK_IMPORTED_MODULE_1__["RentService"]])
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



var RentService = /** @class */ (function () {
    function RentService(http) {
        this.http = http;
    }
    RentService.prototype.getAll = function () {
        return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "/rent/findAll");
    };
    RentService.prototype.delete = function (id) {
        console.log("opa", id);
        return this.http.delete(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "/rent/delete/" + id + "\n    ");
    };
    RentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RentService);
    return RentService;
}());



/***/ })

}]);
//# sourceMappingURL=rent-rent-module.js.map