(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./calendar/calendar.module": [
		"./src/app/calendar/calendar.module.ts",
		"calendar-calendar-module"
	],
	"./charts/charts.module": [
		"./src/app/charts/charts.module.ts",
		"charts-charts-module~dashboard-dashboard-module~forms-forms-module",
		"charts-charts-module"
	],
	"./client/client.module": [
		"./src/app/client/client.module.ts",
		"client-client-module"
	],
	"./components/components.module": [
		"./src/app/components/components.module.ts",
		"components-components-module~forms-forms-module",
		"components-components-module"
	],
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"charts-charts-module~dashboard-dashboard-module~forms-forms-module",
		"dashboard-dashboard-module"
	],
	"./forms/forms.module": [
		"./src/app/forms/forms.module.ts",
		"charts-charts-module~dashboard-dashboard-module~forms-forms-module",
		"components-components-module~forms-forms-module",
		"forms-forms-module"
	],
	"./maps/maps.module": [
		"./src/app/maps/maps.module.ts",
		"maps-maps-module"
	],
	"./pages/pages.module": [
		"./src/app/pages/pages.module.ts",
		"pages-pages-module"
	],
	"./rent/rent.module": [
		"./src/app/rent/rent.module.ts",
		"rent-rent-module"
	],
	"./tables/tables.module": [
		"./src/app/tables/tables.module.ts",
		"tables-tables-module"
	],
	"./userpage/user.module": [
		"./src/app/userpage/user.module.ts",
		"userpage-user-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/admin/admin-layout.component */ "./src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/auth/auth-layout.component */ "./src/app/layouts/auth/auth-layout.component.ts");
/* harmony import */ var _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/fixedplugin/fixedplugin.module */ "./src/app/shared/fixedplugin/fixedplugin.module.ts");
/* harmony import */ var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/footer/footer.module */ "./src/app/shared/footer/footer.module.ts");
/* harmony import */ var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/navbar/navbar.module */ "./src/app/shared/navbar/navbar.module.ts");
/* harmony import */ var _shared_pagesnavbar_pagesnavbar_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/pagesnavbar/pagesnavbar.module */ "./src/app/shared/pagesnavbar/pagesnavbar.module.ts");
/* harmony import */ var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sidebar/sidebar.module */ "./src/app/sidebar/sidebar.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




 // this is needed!










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_7__["AppRoutes"], {
                    useHash: true,
                }),
                _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_14__["SidebarModule"],
                _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_12__["NavbarModule"],
                _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_11__["FooterModule"],
                _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_10__["FixedPluginModule"],
                _shared_pagesnavbar_pagesnavbar_module__WEBPACK_IMPORTED_MODULE_13__["PagesnavbarModule"],
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_8__["AdminLayoutComponent"], _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_9__["AuthLayoutComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/admin/admin-layout.component */ "./src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/auth/auth-layout.component */ "./src/app/layouts/auth/auth-layout.component.ts");


var AppRoutes = [
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
    },
    {
        path: "",
        component: _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        children: [
            {
                path: "",
                loadChildren: "./dashboard/dashboard.module#DashboardModule",
            },
            {
                path: "components",
                loadChildren: "./components/components.module#ComponentsModule",
            },
            {
                path: "forms",
                loadChildren: "./forms/forms.module#Forms",
            },
            {
                path: "rent",
                loadChildren: "./rent/rent.module#RentModule",
            },
            {
                path: "tables",
                loadChildren: "./tables/tables.module#TablesModule",
            },
            {
                path: "maps",
                loadChildren: "./maps/maps.module#MapsModule",
            },
            {
                path: "charts",
                loadChildren: "./charts/charts.module#ChartsModule",
            },
            {
                path: "calendar",
                loadChildren: "./calendar/calendar.module#CalendarModule",
            },
            {
                path: "client",
                loadChildren: "./client/client.module#ClientModule",
            },
            {
                path: "",
                loadChildren: "./userpage/user.module#UserModule",
            },
        ],
    },
    {
        path: "",
        component: _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__["AuthLayoutComponent"],
        children: [
            {
                path: "pages",
                loadChildren: "./pages/pages.module#PagesModule",
            },
        ],
    },
];


/***/ }),

/***/ "./src/app/layouts/admin/admin-layout.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layouts/admin/admin-layout.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"sidebar\" data-color=\"red\" data-image=\"\">\n    <sidebar-cmp></sidebar-cmp>\n    <div\n      class=\"sidebar-background\"\n      style=\"background-image: url(assets/img/full-screen-image-3.jpg)\"\n    ></div>\n  </div>\n  <div class=\"main-panel\">\n    <navbar-cmp></navbar-cmp>\n    <router-outlet></router-outlet>\n    <div *ngIf=\"!isMap()\">\n      <footer-cmp></footer-cmp>\n    </div>\n  </div>\n</div>\n<fixedplugin-cmp></fixedplugin-cmp>\n"

/***/ }),

/***/ "./src/app/layouts/admin/admin-layout.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layouts/admin/admin-layout.component.ts ***!
  \*********************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(router, location) {
        this.router = router;
        this.yScrollStack = [];
        this.location = location;
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            //   this.url = event.url;
            _this.navbar.sidebarClose();
        });
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            var $main_panel = $('.main-panel');
            $main_panel.perfectScrollbar();
        }
    };
    AdminLayoutComponent.prototype.isMap = function () {
        if (this.location.prepareExternalUrl(this.location.path()) == '#/maps/fullscreen') {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidebar'),
        __metadata("design:type", Object)
    ], AdminLayoutComponent.prototype, "sidebar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]),
        __metadata("design:type", _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"])
    ], AdminLayoutComponent.prototype, "navbar", void 0);
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./admin-layout.component.html */ "./src/app/layouts/admin/admin-layout.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth/auth-layout.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layouts/auth/auth-layout.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <pagesnavbar-cmp></pagesnavbar-cmp>\n  <router-outlet></router-outlet>\n  <fixedplugin-cmp></fixedplugin-cmp>\n"

/***/ }),

/***/ "./src/app/layouts/auth/auth-layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layouts/auth/auth-layout.component.ts ***!
  \*******************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _shared_pagesnavbar_pagesnavbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/pagesnavbar/pagesnavbar.component */ "./src/app/shared/pagesnavbar/pagesnavbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent(router, location) {
        this.router = router;
        this.location = location;
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            //   this.url = event.url;
            _this.pagesnavbar.sidebarClose();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_pagesnavbar_pagesnavbar_component__WEBPACK_IMPORTED_MODULE_4__["PagesnavbarComponent"]),
        __metadata("design:type", _shared_pagesnavbar_pagesnavbar_component__WEBPACK_IMPORTED_MODULE_4__["PagesnavbarComponent"])
    ], AuthLayoutComponent.prototype, "pagesnavbar", void 0);
    AuthLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./auth-layout.component.html */ "./src/app/layouts/auth/auth-layout.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"fixed-plugin\">\n    <div class=\"dropdown\">\n        <a href=\"#\" data-toggle=\"dropdown\">\n        <i class=\"fa fa-cog fa-2x\"> </i>\n        </a>\n        <ul class=\"dropdown-menu\">\n            <li class=\"header-title\">Configuration</li>\n            <li class=\"adjustments-line\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger\">\n                    <p *ngIf=\"isPages()\">Sidebar Image</p>\n                    <p *ngIf=\"!isPages()\"> Background Image</p>\n                    <bSwitch\n                      [switch-on-color]=\"'primary'\"\n                      [(ngModel)]=\"state\"\n                      [ngClass]=\"['switch','switch-sidebar-image']\"\n                      (changeState)=\"onChange($event)\">\n                    </bSwitch>\n                    <div class=\"clearfix\"></div>\n                </a>\n            </li>\n\t\t\t<li class=\"adjustments-line\" *ngIf=\"isPages()\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger\">\n                    <p>Sidebar Mini</p>\n                    <bSwitch\n                      [switch-on-color]=\"'primary'\"\n                      [ngClass]=\"['switch','switch-sidebar-mini']\"\n                      (changeState)=\"onChange1($event)\">\n                    </bSwitch>\n                    <div class=\"clearfix\"></div>\n                </a>\n            </li>\n\t\t\t<li class=\"adjustments-line\" *ngIf=\"isPages()\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger\">\n                    <p>Fixed Navbar</p>\n                    <bSwitch\n                      [switch-on-color]=\"'primary'\"\n                      [ngClass]=\"['switch','switch-navbar-fixed']\"\n                      (changeState)=\"onChange2($event)\">\n                    </bSwitch>\n                    <div class=\"clearfix\"></div>\n                </a>\n            </li>\n            <li class=\"adjustments-line\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger\">\n                    <p>Filters</p>\n                    <div class=\"pull-right\">\n                        <span class=\"badge filter\" data-color=\"black\"></span>\n                        <span class=\"badge filter badge-azure\" data-color=\"azure\"></span>\n                        <span class=\"badge filter badge-green\" data-color=\"green\"></span>\n                        <span class=\"badge filter badge-orange\" data-color=\"orange\"></span>\n                        <span class=\"badge filter badge-red active\" data-color=\"red\"></span>\n                        <span class=\"badge filter badge-purple\" data-color=\"purple\"></span>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                </a>\n            </li>\n            <li class=\"header-title\">Sidebar Images</li>\n            <li>\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"../../../assets/img/full-screen-image-1.jpg\">\n                </a>\n            </li>\n            <li>\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"../../../assets/img/full-screen-image-2.jpg\">\n                </a>\n            </li>\n            <li class=\"active\">\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"../../../assets/img/full-screen-image-3.jpg\">\n                </a>\n            </li>\n            <li>\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"../../../assets/img/full-screen-image-4.jpg\">\n                </a>\n            </li>\n\n        </ul>\n    </div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.component.ts ***!
  \*************************************************************/
/*! exports provided: FixedPluginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedPluginComponent", function() { return FixedPluginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var misc = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};
var FixedPluginComponent = /** @class */ (function () {
    function FixedPluginComponent(location) {
        this.background_image = true;
        this.state = true;
        this.location = location;
    }
    FixedPluginComponent.prototype.ngOnInit = function () {
        var $sidebar = $(".sidebar");
        var $sidebar_img_container = $sidebar.find(".sidebar-background");
        var $full_page = $(".full-page");
        var $sidebar_responsive = $("body > .navbar-collapse");
        var window_width = $(window).width();
        if (window_width > 767) {
            if ($(".fixed-plugin .dropdown").hasClass("show-dropdown")) {
                $(".fixed-plugin .dropdown").addClass("open");
            }
        }
        $(".fixed-plugin a").click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if ($(this).hasClass("switch-trigger")) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        $(".fixed-plugin .badge").click(function () {
            var $full_page_background = $(".full-page-background");
            $(this).siblings().removeClass("active");
            $(this).addClass("active");
            var new_color = $(this).data("color");
            if ($sidebar.length != 0) {
                $sidebar.attr("data-color", new_color);
            }
            if ($full_page.length != 0) {
                $full_page.attr("data-color", new_color);
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.attr("data-color", new_color);
            }
        });
        $(".fixed-plugin .img-holder").click(function () {
            var $full_page_background = $(".full-page-background");
            $(this).parent("li").siblings().removeClass("active");
            $(this).parent("li").addClass("active");
            var new_image = $(this).find("img").attr("src");
            if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeOut("fast", function () {
                    $sidebar_img_container.css("background-image", 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn("fast");
                });
            }
            if ($full_page_background.length != 0) {
                $full_page_background.fadeOut("fast", function () {
                    $full_page_background.css("background-image", 'url("' + new_image + '")');
                    $full_page_background.fadeIn("fast");
                });
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.css("background-image", 'url("' + new_image + '")');
            }
        });
    };
    FixedPluginComponent.prototype.onChange = function ($event) {
        var $sidebar = $(".sidebar");
        var $sidebar_img_container = $sidebar.find(".sidebar-background");
        var $full_page = $(".full-page");
        var $full_page_background = $(".full-page-background");
        var $sidebar_responsive = $("body > .navbar-collapse");
        if ($event.currentValue) {
            if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeIn("fast");
                $sidebar.attr("data-image", "#");
            }
            if ($full_page_background.length != 0) {
                $full_page_background.fadeIn("fast");
                $full_page.attr("data-image", "#");
            }
            this.background_image = true;
        }
        else {
            if ($sidebar_img_container.length != 0) {
                $sidebar.removeAttr("data-image");
                $sidebar_img_container.fadeOut("fast");
            }
            if ($full_page_background.length != 0) {
                $full_page.removeAttr("data-image", "#");
                $full_page_background.fadeOut("fast");
            }
            this.background_image = false;
        }
    };
    FixedPluginComponent.prototype.onChange1 = function ($event) {
        var $body = $("body");
        if (misc.sidebar_mini_active == true) {
            $("body").removeClass("sidebar-mini");
            misc.sidebar_mini_active = false;
        }
        else {
            $(".sidebar .collapse")
                .collapse("hide")
                .on("hidden.bs.collapse", function () {
                $(this).css("height", "auto");
            });
            setTimeout(function () {
                $("body").addClass("sidebar-mini");
                $(".sidebar .collapse").css("height", "auto");
                misc.sidebar_mini_active = true;
            }, 300);
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event("resize"));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    };
    FixedPluginComponent.prototype.onChange2 = function ($event) {
        var $nav = $("nav.navbar").first();
        if ($nav.hasClass("navbar-fixed")) {
            $nav.removeClass("navbar-fixed").prependTo(".main-panel");
        }
        else {
            $nav.prependTo(".wrapper").addClass("navbar-fixed");
        }
    };
    FixedPluginComponent.prototype.isPages = function () {
        if (this.location.prepareExternalUrl(this.location.path()) ==
            "/pages/login" ||
            this.location.prepareExternalUrl(this.location.path()) ==
                "/pages/register" ||
            this.location.prepareExternalUrl(this.location.path()) == "/pages/lock") {
            return false;
        }
        else {
            return true;
        }
    };
    FixedPluginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: "fixedplugin-cmp",
            template: __webpack_require__(/*! ./fixedplugin.component.html */ "./src/app/shared/fixedplugin/fixedplugin.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], FixedPluginComponent);
    return FixedPluginComponent;
}());



/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.module.ts ***!
  \**********************************************************/
/*! exports provided: FixedPluginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedPluginModule", function() { return FixedPluginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fixedplugin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fixedplugin.component */ "./src/app/shared/fixedplugin/fixedplugin.component.ts");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FixedPluginModule = /** @class */ (function () {
    function FixedPluginModule() {
    }
    FixedPluginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_4__["JwBootstrapSwitchNg2Module"]],
            declarations: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_3__["FixedPluginComponent"]],
            exports: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_3__["FixedPluginComponent"]]
        })
    ], FixedPluginModule);
    return FixedPluginModule;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"#\">\n                        Home\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Company\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Portfolio\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                       Blog\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <p class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}} <a href=\"https://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\n        </p>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'footer-cmp',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/footer/footer.module.ts ***!
  \************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.component */ "./src/app/shared/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
            exports: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav #navbar class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-minimize\">\n      <button\n        id=\"minimizeSidebar\"\n        class=\"btn btn-danger btn-fill btn-round btn-icon\"\n      >\n        <i class=\"fa fa-ellipsis-v visible-on-sidebar-regular\"></i>\n        <i class=\"fa fa-navicon visible-on-sidebar-mini\"></i>\n      </button>\n    </div>\n    <div class=\"navbar-header\">\n      <button\n        type=\"button\"\n        class=\"navbar-toggle\"\n        data-toggle=\"collapse\"\n        (click)=\"sidebarToggle()\"\n      >\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\">{{ getTitle() }}</a>\n    </div>\n    <div class=\"collapse navbar-collapse\">\n      <div class=\"\" *ngIf=\"isMobileMenu()\">\n        <form class=\"navbar-form navbar-left navbar-search-form\" role=\"search\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n            <input\n              type=\"text\"\n              value=\"\"\n              class=\"form-control\"\n              placeholder=\"Search...\"\n            />\n          </div>\n        </form>\n\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li>\n            <a ruterLinkActive=\"active\" [routerLink]=\"['/charts']\">\n              <i class=\"fa fa-line-chart\"></i>\n              <p>Stats</p>\n            </a>\n          </li>\n\n          <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-gavel\"></i>\n              <p class=\"hidden-md hidden-lg\">\n                Actions\n                <b class=\"caret\"></b>\n              </p>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li><a href=\"#\">Create New Post</a></li>\n              <li><a href=\"#\">Manage Something</a></li>\n              <li><a href=\"#\">Do Nothing</a></li>\n              <li><a href=\"#\">Submit to live</a></li>\n              <li class=\"divider\"></li>\n              <li><a href=\"#\">Another Action</a></li>\n            </ul>\n          </li>\n\n          <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-bell-o\"></i>\n              <span class=\"notification\">5</span>\n              <p class=\"hidden-md hidden-lg\">\n                Notifications\n                <b class=\"caret\"></b>\n              </p>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li><a href=\"#\">Notification 1</a></li>\n              <li><a href=\"#\">Notification 2</a></li>\n              <li><a href=\"#\">Notification 3</a></li>\n              <li><a href=\"#\">Notification 4</a></li>\n              <li><a href=\"#\">Another notification</a></li>\n            </ul>\n          </li>\n\n          <li class=\"dropdown dropdown-with-icons\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-list\"></i>\n              <p class=\"hidden-md hidden-lg\">\n                More\n                <b class=\"caret\"></b>\n              </p>\n            </a>\n            <ul class=\"dropdown-menu dropdown-with-icons\">\n              <li>\n                <a href=\"#\"> <i class=\"pe-7s-mail\"></i> Messages </a>\n              </li>\n              <li>\n                <a href=\"#\"> <i class=\"pe-7s-help1\"></i> Help Center </a>\n              </li>\n              <li>\n                <a href=\"#\"> <i class=\"pe-7s-tools\"></i> Settings </a>\n              </li>\n              <li class=\"divider\"></li>\n              <li>\n                <a href=\"#\"> <i class=\"pe-7s-lock\"></i> Lock Screen </a>\n              </li>\n              <li>\n                <a href=\"#\" class=\"text-danger\">\n                  <i class=\"pe-7s-close-circle\"></i>\n                  Log out\n                </a>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.././sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var misc = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        if ($('body').hasClass('sidebar-mini')) {
            misc.sidebar_mini_active = true;
        }
        $('#minimizeSidebar').click(function () {
            var $btn = $(this);
            if (misc.sidebar_mini_active == true) {
                $('body').removeClass('sidebar-mini');
                misc.sidebar_mini_active = false;
            }
            else {
                setTimeout(function () {
                    $('body').addClass('sidebar-mini');
                    misc.sidebar_mini_active = true;
                }, 300);
            }
            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function () {
                window.dispatchEvent(new Event('resize'));
            }, 180);
            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function () {
                clearInterval(simulateWindowResize);
            }, 1000);
        });
    };
    NavbarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() < 991) {
            return false;
        }
        return true;
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        if (this.sidebarVisible == false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var i = 0; i < this.listTitles.length; i++) {
            if (this.listTitles[i].type === "link" && this.listTitles[i].path === titlee) {
                return this.listTitles[i].title;
            }
            else if (this.listTitles[i].type === "sub") {
                for (var j = 0; j < this.listTitles[i].children.length; j++) {
                    var subtitle = this.listTitles[i].path + '/' + this.listTitles[i].children[j].path;
                    // console.log(subtitle)
                    // console.log(titlee)
                    if (subtitle === titlee) {
                        return this.listTitles[i].children[j].title;
                    }
                }
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.getPath = function () {
        // console.log(this.location);
        return this.location.prepareExternalUrl(this.location.path());
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("navbar-cmp"),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "button", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'navbar-cmp',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/navbar/navbar.module.ts ***!
  \************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]],
            exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "./src/app/shared/pagesnavbar/pagesnavbar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/pagesnavbar/pagesnavbar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav\n  #pagesnavbar\n  class=\"navbar navbar-primary navbar-transparent navbar-absolute\"\n>\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button\n        type=\"button\"\n        class=\"navbar-toggle\"\n        data-toggle=\"collapse\"\n        data-target=\"#navigation-example-2\"\n        (click)=\"sidebarToggle()\"\n      >\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a\n        class=\"navbar-brand\"\n        routerLinkActive=\"active\"\n        [routerLink]=\"['/dashboard']\"\n        >Light Bootstrap Dashboard PRO Angular</a\n      >\n    </div>\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n            <i class=\"fa fa-tachometer\" aria-hidden=\"true\"></i>\n            <p>Dashboard</p>\n          </a>\n        </li>\n        <li>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/login']\">\n            <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>\n            <p>Login</p>\n          </a>\n        </li>\n        <li>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/register']\">\n            <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>\n            <p>Register</p>\n          </a>\n        </li>\n        <li>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/lock']\">\n            <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\n            <p>Lock Screen</p>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/pagesnavbar/pagesnavbar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/pagesnavbar/pagesnavbar.component.ts ***!
  \*************************************************************/
/*! exports provided: PagesnavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesnavbarComponent", function() { return PagesnavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PagesnavbarComponent = /** @class */ (function () {
    function PagesnavbarComponent(location, renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    PagesnavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        console.log(this.location.prepareExternalUrl(this.location.path()));
    };
    PagesnavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    PagesnavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    PagesnavbarComponent.prototype.sidebarToggle = function () {
        // var toggleButton = this.toggleButton;
        // var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible == false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    PagesnavbarComponent.prototype.isLogin = function () {
        if (this.location.prepareExternalUrl(this.location.path()) === '#/pages/login') {
            return true;
        }
        return false;
    };
    PagesnavbarComponent.prototype.isLock = function () {
        if (this.location.prepareExternalUrl(this.location.path()) === '#/pages/lock') {
            return true;
        }
        return false;
    };
    PagesnavbarComponent.prototype.isRegister = function () {
        if (this.location.prepareExternalUrl(this.location.path()) === '#/pages/register') {
            return true;
        }
        return false;
    };
    PagesnavbarComponent.prototype.getPath = function () {
        // console.log(this.location);
        return this.location.prepareExternalUrl(this.location.path());
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("pagesnavbar-cmp"),
        __metadata("design:type", Object)
    ], PagesnavbarComponent.prototype, "button", void 0);
    PagesnavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'pagesnavbar-cmp',
            template: __webpack_require__(/*! ./pagesnavbar.component.html */ "./src/app/shared/pagesnavbar/pagesnavbar.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], PagesnavbarComponent);
    return PagesnavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/pagesnavbar/pagesnavbar.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/pagesnavbar/pagesnavbar.module.ts ***!
  \**********************************************************/
/*! exports provided: PagesnavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesnavbarModule", function() { return PagesnavbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pagesnavbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagesnavbar.component */ "./src/app/shared/pagesnavbar/pagesnavbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PagesnavbarModule = /** @class */ (function () {
    function PagesnavbarModule() {
    }
    PagesnavbarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_pagesnavbar_component__WEBPACK_IMPORTED_MODULE_2__["PagesnavbarComponent"]],
            exports: [_pagesnavbar_component__WEBPACK_IMPORTED_MODULE_2__["PagesnavbarComponent"]]
        })
    ], PagesnavbarModule);
    return PagesnavbarModule;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n  <a href=\"http://www.creative-tim.com\" class=\"simple-text logo-mini\">\n    <div class=\"logo-img\">\n      <img src=\"../../assets/img/angular2-logo-white.png\" />\n    </div>\n  </a>\n  <a href=\"http://www.creative-tim.com\" class=\"simple-text logo-normal\">\n    Creative Tim (logo)\n  </a>\n</div>\n\n<div class=\"sidebar-wrapper\">\n  <!-- <div class=\"user\">\n\t\t<div class=\"info\">\n\t\t\t<div class=\"photo\">\n\t\t\t\t<img src=\"../assets/img/default-avatar.png\" />\n\t\t\t</div>\n\t\t\t<a data-toggle=\"collapse\" href=\"#collapseExample\" class=\"collapsed\">\n\t\t\t\t<span>\n\t\t\t\t\tTania Andrew\n\t\t\t\t\t<b class=\"caret\"></b>\n\t\t\t\t</span>\n\t\t\t</a>\n\t\t\t<div class=\"collapse\" id=\"collapseExample\">\n\t\t\t\t<ul class=\"nav\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t<span class=\"sidebar-mini\">MP</span>\n\t\t\t\t\t\t\t<span class=\"sidebar-normal\">My Profile</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t<span class=\"sidebar-mini\">EP</span>\n\t\t\t\t\t\t\t<span class=\"sidebar-normal\">Edit Profile</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t<span class=\"sidebar-mini\">S</span>\n\t\t\t\t\t\t\t<span class=\"sidebar-normal\">Settings</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div> -->\n  <div *ngIf=\"isNotMobileMenu()\">\n    <form class=\"navbar-form navbar-left navbar-search-form\" role=\"search\">\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n        <input\n          class=\"form-control\"\n          placeholder=\"Search...\"\n          type=\"text\"\n          value=\"\"\n        />\n      </div>\n    </form>\n    <ul class=\"nav nav-mobile-menu\">\n      <li>\n        <a routerLinkActive=\"active\" [routerLink]=\"['/charts']\">\n          <i class=\"fa fa-line-chart\"></i>\n          <p>Stats</p>\n        </a>\n      </li>\n\n      <li class=\"dropdown\">\n        <a\n          class=\"dropdown-toggle\"\n          data-toggle=\"dropdown\"\n          href=\"#\"\n          aria-expanded=\"false\"\n        >\n          <i class=\"fa fa-gavel\"></i>\n          <p class=\"hidden-md hidden-lg\">\n            Actions\n            <b class=\"caret\"></b>\n          </p>\n        </a>\n        <ul class=\"dropdown-menu\">\n          <li><a href=\"#\">Create New Post</a></li>\n          <li><a href=\"#\">Manage Something</a></li>\n          <li><a href=\"#\">Do Nothing</a></li>\n          <li><a href=\"#\">Submit to live</a></li>\n          <li class=\"divider\"></li>\n          <li><a href=\"#\">Another Action</a></li>\n        </ul>\n      </li>\n\n      <li class=\"dropdown\">\n        <a\n          class=\"dropdown-toggle\"\n          data-toggle=\"dropdown\"\n          href=\"#\"\n          aria-expanded=\"false\"\n        >\n          <i class=\"fa fa-bell-o\"></i>\n          <span class=\"notification\">5</span>\n          <p class=\"hidden-md hidden-lg\">\n            Notifications\n            <b class=\"caret\"></b>\n          </p>\n        </a>\n        <ul class=\"dropdown-menu\">\n          <li><a href=\"#\">Notification 1</a></li>\n          <li><a href=\"#\">Notification 2</a></li>\n          <li><a href=\"#\">Notification 3</a></li>\n          <li><a href=\"#\">Notification 4</a></li>\n          <li><a href=\"#\">Another notification</a></li>\n        </ul>\n      </li>\n\n      <li class=\"dropdown dropdown-with-icons\">\n        <a\n          class=\"dropdown-toggle\"\n          data-toggle=\"dropdown\"\n          href=\"#\"\n          aria-expanded=\"false\"\n        >\n          <i class=\"fa fa-list\"></i>\n          <p class=\"hidden-md hidden-lg\">\n            More\n            <b class=\"caret\"></b>\n          </p>\n        </a>\n        <ul class=\"dropdown-menu dropdown-with-icons\">\n          <li>\n            <a href=\"#\"> <i class=\"pe-7s-mail\"></i> Messages </a>\n          </li>\n          <li>\n            <a href=\"#\"> <i class=\"pe-7s-help1\"></i> Help Center </a>\n          </li>\n          <li>\n            <a href=\"#\"> <i class=\"pe-7s-tools\"></i> Settings </a>\n          </li>\n          <li class=\"divider\"></li>\n          <li>\n            <a href=\"#\"> <i class=\"pe-7s-lock\"></i> Lock Screen </a>\n          </li>\n          <li>\n            <a class=\"text-danger\" href=\"#\">\n              <i class=\"pe-7s-close-circle\"></i>\n              Log out\n            </a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n  <ul class=\"nav\">\n    <li routerLinkActive=\"active\" *ngFor=\"let menuitem of menuItems\">\n      <!--If is a single link-->\n      <a [routerLink]=\"[menuitem.path]\" *ngIf=\"menuitem.type === 'link'\">\n        <i class=\"{{ menuitem.icontype }}\"></i>\n        <p style=\"text-transform: capitalize\">{{ menuitem.title }}</p>\n      </a>\n      <!--If it have a submenu-->\n      <a\n        data-toggle=\"collapse\"\n        href=\"#{{ menuitem.title }}\"\n        *ngIf=\"menuitem.type === 'sub'\"\n      >\n        <i class=\"{{ menuitem.icontype }}\"></i>\n        <p>{{ menuitem.title }}<b class=\"caret\"></b></p>\n      </a>\n\n      <!--Display the submenu items-->\n      <div\n        id=\"{{ menuitem.title }}\"\n        class=\"collapse\"\n        *ngIf=\"menuitem.type === 'sub'\"\n      >\n        <ul class=\"nav\">\n          <li\n            routerLinkActive=\"active\"\n            *ngFor=\"let childitem of menuitem.children\"\n          >\n            <a [routerLink]=\"[menuitem.path, childitem.path]\">\n              <span class=\"sidebar-mini\">{{ childitem.ab }}</span>\n              <span class=\"sidebar-normal\">{{ childitem.title }}</span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </li>\n    <li>\n      <a\n        href=\"http://lbd-pro-angular2.creative-tim.com/documentation/tutorial?ref=lbd-pro-archive\"\n      >\n        <i class=\"pe-7s-study\"></i>\n        <p>Documentation</p>\n      </a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//Menu Items
var ROUTES = [
    {
        path: "/dashboard",
        title: "Painel",
        type: "link",
        icontype: "pe-7s-graph",
    },
    {
        path: "/rent",
        title: "Aluguel",
        type: "link",
        icontype: "pe-7s-paper-plane",
    },
    {
        path: "/components",
        title: "Components",
        type: "sub",
        icontype: "pe-7s-plugin",
        children: [
            { path: "buttons", title: "Buttons", ab: "B" },
            { path: "grid", title: "Grid System", ab: "GS" },
            { path: "panels", title: "Panels", ab: "P" },
            { path: "sweet-alert", title: "Sweet Alert", ab: "SA" },
            { path: "notifications", title: "Notifications", ab: "N" },
            { path: "icons", title: "Icons", ab: "I" },
            { path: "typography", title: "Typography", ab: "T" },
        ],
    },
    {
        path: "/forms",
        title: "Forms",
        type: "sub",
        icontype: "pe-7s-note2",
        children: [
            { path: "regular", title: "Regular Forms", ab: "RF" },
            { path: "extended", title: "Extended Forms", ab: "EF" },
            { path: "validation", title: "Validation Forms", ab: "VF" },
            { path: "wizard", title: "Wizard", ab: "W" },
        ],
    },
    {
        path: "/tables",
        title: "Tables",
        type: "sub",
        icontype: "pe-7s-news-paper",
        children: [
            { path: "regular", title: "Regular Tables", ab: "RT" },
            { path: "extended", title: "Extended Tables", ab: "ET" },
            { path: "datatables.net", title: "Datatables.net", ab: "DT" },
        ],
    },
    {
        path: "/maps",
        title: "Maps",
        type: "sub",
        icontype: "pe-7s-map-marker",
        children: [
            { path: "google", title: "Google Maps", ab: "GM" },
            { path: "fullscreen", title: "Full Screen Map", ab: "FSM" },
            { path: "vector", title: "Vector Map", ab: "VM" },
        ],
    },
    {
        path: "/charts",
        title: "Charts",
        type: "link",
        icontype: "pe-7s-graph1",
    },
    {
        path: "/calendar",
        title: "Calendar",
        type: "link",
        icontype: "pe-7s-date",
    },
    {
        path: "/pages",
        title: "Pages",
        type: "sub",
        icontype: "pe-7s-gift",
        children: [
            { path: "user", title: "User Page", ab: "UP" },
            { path: "login", title: "Login Page", ab: "LP" },
            { path: "register", title: "Register Page", ab: "RP" },
            { path: "lock", title: "Lock Screen Page", ab: "LSP" },
        ],
    },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.isNotMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    SidebarComponent.prototype.ngOnInit = function () {
        var isWindows = navigator.platform.indexOf("Win") > -1 ? true : false;
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
        isWindows = navigator.platform.indexOf("Win") > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            $(".sidebar .sidebar-wrapper, .main-panel").perfectScrollbar();
            $("html").addClass("perfect-scrollbar-on");
        }
        else {
            $("html").addClass("perfect-scrollbar-off");
        }
    };
    SidebarComponent.prototype.ngAfterViewInit = function () {
        var $sidebarParent = $(".sidebar .nav > li.active .collapse li.active > a")
            .parent()
            .parent()
            .parent();
        var collapseId = $sidebarParent.siblings("a").attr("href");
        $(collapseId).collapse("show");
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: "sidebar-cmp",
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sidebar/sidebar.module.ts ***!
  \*******************************************/
/*! exports provided: SidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]],
            exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]]
        })
    ], SidebarModule);
    return SidebarModule;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    api: "http://localhost:3000",
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/*!

=========================================================
* Light Bootstrap Dashboard Pro Angular - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-angular2
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jamp0\Documents\repositories2\angular-dash\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map