(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-client-module"],{

/***/ "./src/app/client/client.component.html":
/*!**********************************************!*\
  !*** ./src/app/client/client.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\" style=\"padding: 0.5rem\">\n          <div class=\"header\">\n            <div style=\"display: flex; justify-content: space-between\">\n              <h4 class=\"title\">Clientes</h4>\n              <button\n                class=\"btn btn-success btn-fill btn-wd\"\n                routerLink=\"/components/new-client\"\n              >\n                Novo Cliente\n              </button>\n            </div>\n            <form role=\"search\" style=\"padding-top: 1rem\">\n              <div class=\"input-group\">\n                <input\n                  type=\"text\"\n                  value=\"\"\n                  class=\"form-control w-100\"\n                  placeholder=\"Search...\"\n                  [(ngModel)]=\"searchQuery\"\n                  name=\"search\"\n                  (input)=\"filterItems()\"\n                />\n                <span class=\"input-group-addon\">\n                  <i class=\"fa fa-search\"></i>\n                </span>\n              </div>\n            </form>\n          </div>\n          <div class=\"content table-responsive table-full-width\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th class=\"text-center\">{{ headerRow[0] }}</th>\n                  <th class=\"text-center\">{{ headerRow[1] }}</th>\n                  <th class=\"text-center\">{{ headerRow[2] }}</th>\n                  <th class=\"text-center\">{{ headerRow[3] }}</th>\n                  <th class=\"text-center\">{{ headerRow[4] }}</th>\n                  <th class=\"text-center\">{{ headerRow[6] }}</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let client of filteredRows\">\n                  <td class=\"text-center\">{{ client?._id }}</td>\n                  <td class=\"text-center\">{{ client?.name }}</td>\n                  <td class=\"text-center\">{{ client?.cpf }}</td>\n                  <td class=\"text-center\">{{ client?.createdAt }}</td>\n                  <td class=\"text-center\">{{ client?.birthDate }}</td>\n                  <td class=\"td-actions text-center\">\n                    <button\n                      rel=\"tooltip\"\n                      title=\"Edit Profile\"\n                      class=\"btn btn-success btn-simple btn-xs\"\n                      (click)=\"editProfile(client?._id)\"\n                    >\n                      <i class=\"fa fa-edit\"></i>\n                    </button>\n                    <button\n                      rel=\"tooltip\"\n                      title=\"Remove\"\n                      class=\"btn btn-danger btn-simple btn-xs\"\n                      (click)=\"delete(client?._id)\"\n                    >\n                      <i class=\"fa fa-times\"></i>\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <div style=\"display: flex; justify-content: center\">\n            <ul class=\"pagination\">\n              <li\n                [class.disabled]=\"currentPage === 1\"\n                (click)=\"changePage(currentPage - 1)\"\n              >\n                <a><<</a>\n              </li>\n              <li\n                [class.active]=\"currentPage === page\"\n                *ngFor=\"let page of totalPagesArray\"\n              >\n                <a (click)=\"changePage(page)\">{{ page }}</a>\n              </li>\n              <li\n                [class.disabled]=\"currentPage === totalPages\"\n                (click)=\"changePage(currentPage + 1)\"\n              >\n                <a>>></a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client.service */ "./src/app/client/client.service.ts");
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
    function ClientComponent(clientService, router) {
        this.clientService = clientService;
        this.router = router;
        this.searchQuery = "";
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.pagesToShow = 3;
        this.totalPagesArray = [];
        this.clientList = [];
        this.headerRow = [
            "ID",
            "Nome",
            "CPF",
            "Data cadastro",
            "Aniversário",
            "Ações",
        ];
    }
    ClientComponent.prototype.ngOnInit = function () {
        this.getAll(false);
    };
    ClientComponent.prototype.getAll = function (event) {
        var _this = this;
        this.clientService
            .getAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (clientResponse) { return clientResponse.results; }))
            .subscribe(function (clientList) {
            _this.clientList = clientList;
            _this.totalPages = Math.ceil(_this.clientList.length / _this.itemsPerPage);
            if (event && _this.filteredRows.length === 1 && _this.currentPage !== 1) {
                _this.currentPage = _this.totalPages;
            }
            _this.filteredRows = _this.paginate(_this.clientList);
            _this.totalPagesArray = _this.calculateTotalPagesArray(_this.currentPage, _this.totalPages);
        });
    };
    ClientComponent.prototype.filterItems = function () {
        var _this = this;
        this.filteredRows = this.paginate(this.clientList).filter(function (client) {
            var clientValues = Object.keys(client).map(function (keyframes) { return client[keyframes]; });
            return clientValues
                .toString()
                .toLowerCase()
                .includes(_this.searchQuery.toLowerCase());
        });
    };
    ClientComponent.prototype.delete = function (client) {
        var _this = this;
        this.clientService.delete(client).subscribe(function () {
            _this.getAll(true);
        });
    };
    ClientComponent.prototype.editProfile = function (clientId) {
        this.router.navigate(["/components/new-client"], {
            queryParams: { id: clientId },
        });
    };
    ClientComponent.prototype.paginate = function (data) {
        var startIndex = (this.currentPage - 1) * this.itemsPerPage;
        var endIndex = startIndex + this.itemsPerPage;
        return data.slice(startIndex, endIndex);
    };
    ClientComponent.prototype.calculateTotalPagesArray = function (currentPage, totalPages) {
        var pagesArray = [];
        var startPage = Math.max(1, currentPage - this.pagesToShow);
        var endPage = Math.min(totalPages, currentPage + this.pagesToShow);
        for (var i = startPage; i <= endPage; i++) {
            pagesArray.push(i);
        }
        return pagesArray;
    };
    ClientComponent.prototype.changePage = function (page) {
        if (page >= 1 && page <= this.totalPages) {
            this.currentPage = page;
            this.filteredRows = this.paginate(this.clientList);
            this.totalPagesArray = this.calculateTotalPagesArray(this.currentPage, this.totalPages);
        }
    };
    ClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-client-cmp",
            template: __webpack_require__(/*! ./client.component.html */ "./src/app/client/client.component.html"),
        }),
        __metadata("design:paramtypes", [_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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