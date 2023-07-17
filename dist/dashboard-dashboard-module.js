(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-6 col-sm-12\">\n        <div class=\"tab-content\">\n          <div class=\"tab-pane active\" id=\"description-logo\">\n            <div class=\"card\">\n              <div class=\"header\">\n                <h4 class=\"title\">Aluguéis ativos</h4>\n              </div>\n              <div\n                class=\"content\"\n                style=\"\n                  display: flex;\n                  justify-content: space-between;\n                  align-items: center;\n                \"\n              >\n                <p>06</p>\n                <i class=\"pe-7s-note2\" style=\"font-size: 3rem\"></i>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6 col-sm-12\">\n        <div class=\"tab-content\">\n          <div class=\"tab-pane active\" id=\"description-logo\">\n            <div class=\"card\">\n              <div class=\"header\">\n                <h4 class=\"title\">Aluguéis em atraso</h4>\n              </div>\n              <div\n                class=\"content\"\n                style=\"\n                  display: flex;\n                  justify-content: space-between;\n                  align-items: center;\n                \"\n              >\n                <p>06</p>\n                <i class=\"pe-7s-diskette\" style=\"font-size: 3rem\"></i>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6 col-sm-12\">\n        <div class=\"tab-content\">\n          <div class=\"tab-pane active\" id=\"description-logo\">\n            <div class=\"card\">\n              <div class=\"header\">\n                <h4 class=\"title\">Clientes cadastrados</h4>\n              </div>\n              <div\n                class=\"content\"\n                style=\"\n                  display: flex;\n                  justify-content: space-between;\n                  align-items: center;\n                \"\n              >\n                <p>06</p>\n                <i class=\"pe-7s-users\" style=\"font-size: 3rem\"></i>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-lg-8\">\n        <div class=\"content table-responsive table-full-width\">\n          <table class=\"table\" (onDeleteRent)=\"onDeletedRent($event)\">\n            <thead>\n              <tr>\n                <th class=\"text-center\">{{ headerRow[0] }}</th>\n                <th class=\"text-center\">{{ headerRow[1] }}</th>\n                <th class=\"text-center\">{{ headerRow[2] }}</th>\n                <th class=\"text-center\">{{ headerRow[3] }}</th>\n                <th class=\"text-center\">{{ headerRow[4] }}</th>\n                <th class=\"text-center\">{{ headerRow[5] }}</th>\n                <th class=\"text-center\">{{ headerRow[6] }}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let row of rows\">\n                <td class=\"text-center\">{{ row?.rent?._id }}</td>\n                <td class=\"text-center\">{{ row?.client?.name }}</td>\n                <td class=\"text-center\">{{ row?.client?.cpf }}</td>\n                <td class=\"text-center\">{{ row?.rent?.endDate }}</td>\n                <td class=\"text-center\">{{ row?.vehicle?.brand }}</td>\n                <td class=\"text-center\">{{ row?.rent?.situation }}</td>\n                <td class=\"td-actions text-center\">\n                  <button\n                    rel=\"tooltip\"\n                    title=\"Edit Profile\"\n                    class=\"btn btn-success btn-simple btn-xs\"\n                  >\n                    <i class=\"fa fa-edit\"></i>\n                  </button>\n                  <button\n                    rel=\"tooltip\"\n                    title=\"Remove\"\n                    class=\"btn btn-danger btn-simple btn-xs\"\n                    (click)=\"delete(row?.rent?._id)\"\n                  >\n                    <i class=\"fa fa-times\"></i>\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <lbd-chart\n          [title]=\"'Carros'\"\n          [chartType]=\"graphType\"\n          [chartData]=\"dataGraph\"\n          [legendItems]=\"emailChartLegendItems\"\n          [withHr]=\"true\"\n          [footerIconClass]=\"'fa fa-clock-o'\"\n          [footerText]=\"'Campaign sent 2 days ago'\"\n        >\n        </lbd-chart>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lbd_lbd_chart_lbd_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lbd/lbd-chart/lbd-chart.component */ "./src/app/lbd/lbd-chart/lbd-chart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
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
    DashboardComponent.prototype.ngOnInit = function () {
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
        this.graphType = _lbd_lbd_chart_lbd_chart_component__WEBPACK_IMPORTED_MODULE_1__["ChartType"].Pie;
        this.dataGraph = {
            labels: ["62%", "32%", "6%"],
            series: [62, 32, 6],
        };
        this.dataGraphInfo = [
            { title: "Open", imageClass: "fa fa-circle text-info" },
            { title: "Bounce", imageClass: "fa fa-circle text-danger" },
            { title: "Unsubscribe", imageClass: "fa fa-circle text-warning" },
        ];
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "dashboard-cmp",
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _lbd_lbd_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lbd/lbd.module */ "./src/app/lbd/lbd.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.routing */ "./src/app/dashboard/dashboard.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_6__["DashboardRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _lbd_lbd_module__WEBPACK_IMPORTED_MODULE_4__["LbdModule"],
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]],
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.routing.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.routing.ts ***!
  \************************************************/
/*! exports provided: DashboardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutes", function() { return DashboardRoutes; });
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");

var DashboardRoutes = [
    {
        path: "",
        children: [
            {
                path: "dashboard",
                component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"],
            },
        ],
    },
];


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map