webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse\">\r\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n  <a class=\"navbar-brand\" href=\"#\">BrotherGames</a>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"/\" routerLink=\"/\">Home</a>\r\n      </li>\r\n      <li *ngIf=\"isLoggedIn()\" class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"/profile\" routerLink=\"/profile\">Profile</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"/topGames\" routerLink=\"/topGames\">Games <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li *ngIf=\"isLoggedIn()\" class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"/listexChanges\" routerLink=\"/listexChanges\">Games Exchange</a>\r\n      </li>\r\n      <li *ngIf=\"isLoggedIn()\" class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"/listChanges\" routerLink=\"/listChanges\">List Games Exchange</a>\r\n      </li>      <li *ngIf=\"isLoggedIn()\" class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"/editChanges\" routerLink=\"/editChanges\">Edit Games Exchange</a>\r\n      </li>\r\n      <li *ngIf=\"isLoggedIn()\" class=\"nav-item\">\r\n        <a href=\"#\" class=\"nav-link\" (click)=\"signOut()\">(Sign Out)</a>\r\n      </li>\r\n      </ul>\r\n\r\n      <form class=\"form-inline my-2 my-lg-0\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n\r\n          <li *ngIf=\"!isLoggedIn()\" class=\"nav-item active\">\r\n            <a class=\"nav-link\"  routerLinkActive=\"/register\" routerLink=\"/register\">REGISTER<span class=\"sr-only\">(current)</span></a>\r\n          </li>\r\n\r\n          <li *ngIf=\"!isLoggedIn()\" class=\"nav-item active\">\r\n            <a class=\"nav-link\" routerLinkActive=\"/signin\" routerLink=\"/signin\">SIGN IN<span class=\"sr-only\">(current)</span></a>\r\n          </li>\r\n\r\n        </ul>\r\n    </form>\r\n\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_auth_service__ = __webpack_require__("../../../../../src/app/common/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'app';
        if (!this.authService.isLoggedIn()) {
            this.router.navigate(['/']);
        }
    }
    AppComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    AppComponent.prototype.signOut = function () {
        this.authService.signOut();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_config_app_configuration_service__ = __webpack_require__("../../../../../src/app/common/config/app-configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_config_initial_config__ = __webpack_require__("../../../../../src/app/common/config/initial-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_page_home_page_component__ = __webpack_require__("../../../../../src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_change_list_page_change_list_page_component__ = __webpack_require__("../../../../../src/app/pages/change-list-page/change-list-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_change_edit_page_change_edit_page_component__ = __webpack_require__("../../../../../src/app/pages/change-edit-page/change-edit-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_searchGame_list_page_searchGame_list_page_component__ = __webpack_require__("../../../../../src/app/pages/searchGame-list-page/searchGame-list-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_user_edit_page_user_edit_page_component__ = __webpack_require__("../../../../../src/app/pages/user-edit-page/user-edit-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_user_list_page_user_list_page_component__ = __webpack_require__("../../../../../src/app/pages/user-list-page/user-list-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_exchange_list_page_exchange_list_page_component__ = __webpack_require__("../../../../../src/app/pages/exchange-list-page/exchange-list-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_change_list_page_changeOk_list_page_component__ = __webpack_require__("../../../../../src/app/pages/change-list-page/changeOk-list-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_code_accept_page_code_accept_page_component__ = __webpack_require__("../../../../../src/app/pages/code-accept-page/code-accept-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_profile_page_profile_page_component__ = __webpack_require__("../../../../../src/app/pages/profile-page/profile-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_edit_profile_page_edit_profile_page_component__ = __webpack_require__("../../../../../src/app/pages/edit-profile-page/edit-profile-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_game_service__ = __webpack_require__("../../../../../src/app/services/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_sign_in_sign_in_page_component__ = __webpack_require__("../../../../../src/app/pages/sign-in/sign-in-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__common_auth_service__ = __webpack_require__("../../../../../src/app/common/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__common_app_data_service__ = __webpack_require__("../../../../../src/app/common/app-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_change_service__ = __webpack_require__("../../../../../src/app/services/change.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_register_page_register_page_component__ = __webpack_require__("../../../../../src/app/pages/register-page/register-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_topGames_list_page_topGames_list_page_component__ = __webpack_require__("../../../../../src/app/pages/topGames-list-page/topGames-list-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_comments_edit_page_comments_edit_page_component__ = __webpack_require__("../../../../../src/app/pages/comments-edit-page/comments-edit-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_22__pages_sign_in_sign_in_page_component__["a" /* SignInPageComponent */] },
    { path: 'topGames', component: __WEBPACK_IMPORTED_MODULE_28__pages_topGames_list_page_topGames_list_page_component__["a" /* TopGamesListPageComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_27__pages_register_page_register_page_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_17__pages_profile_page_profile_page_component__["a" /* ProfilePageComponent */] },
    { path: 'editProfile', component: __WEBPACK_IMPORTED_MODULE_18__pages_edit_profile_page_edit_profile_page_component__["a" /* EditProfilePageComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_page_home_page_component__["a" /* HomePageComponent */] },
    {
        path: 'users', component: __WEBPACK_IMPORTED_MODULE_13__pages_user_list_page_user_list_page_component__["a" /* UserListPageComponent */],
    },
    {
        path: 'editUsers', component: __WEBPACK_IMPORTED_MODULE_12__pages_user_edit_page_user_edit_page_component__["a" /* UserEditPageComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_23__common_auth_service__["a" /* AuthService */]],
    },
    {
        path: 'searchGame', component: __WEBPACK_IMPORTED_MODULE_10__pages_searchGame_list_page_searchGame_list_page_component__["a" /* SearchGameListPageComponent */],
    },
    {
        path: 'comments', component: __WEBPACK_IMPORTED_MODULE_29__pages_comments_edit_page_comments_edit_page_component__["a" /* CommentsEditPageComponent */],
    },
    {
        path: 'listChanges', component: __WEBPACK_IMPORTED_MODULE_8__pages_change_list_page_change_list_page_component__["a" /* ChangeListPageComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_23__common_auth_service__["a" /* AuthService */]],
    },
    {
        path: 'editChanges', component: __WEBPACK_IMPORTED_MODULE_9__pages_change_edit_page_change_edit_page_component__["a" /* ChangeEditPageComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_23__common_auth_service__["a" /* AuthService */]],
    },
    {
        path: 'okChanges', component: __WEBPACK_IMPORTED_MODULE_15__pages_change_list_page_changeOk_list_page_component__["a" /* ChangeOkListPageComponent */],
    },
    {
        path: 'code', component: __WEBPACK_IMPORTED_MODULE_16__pages_code_accept_page_code_accept_page_component__["a" /* CodeAcceptPageComponent */],
    },
    {
        path: 'listexChanges', component: __WEBPACK_IMPORTED_MODULE_14__pages_exchange_list_page_exchange_list_page_component__["a" /* ExchangeListComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_23__common_auth_service__["a" /* AuthService */]],
    },
    {
        path: '**', component: __WEBPACK_IMPORTED_MODULE_11__pages_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_page_home_page_component__["a" /* HomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_searchGame_list_page_searchGame_list_page_component__["a" /* SearchGameListPageComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_22__pages_sign_in_sign_in_page_component__["a" /* SignInPageComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_user_edit_page_user_edit_page_component__["a" /* UserEditPageComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_user_list_page_user_list_page_component__["a" /* UserListPageComponent */],
            __WEBPACK_IMPORTED_MODULE_27__pages_register_page_register_page_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pages_change_list_page_change_list_page_component__["a" /* ChangeListPageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pages_exchange_list_page_exchange_list_page_component__["a" /* ExchangeListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__pages_change_list_page_changeOk_list_page_component__["a" /* ChangeOkListPageComponent */],
            __WEBPACK_IMPORTED_MODULE_16__pages_code_accept_page_code_accept_page_component__["a" /* CodeAcceptPageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pages_change_edit_page_change_edit_page_component__["a" /* ChangeEditPageComponent */],
            __WEBPACK_IMPORTED_MODULE_29__pages_comments_edit_page_comments_edit_page_component__["a" /* CommentsEditPageComponent */],
            __WEBPACK_IMPORTED_MODULE_17__pages_profile_page_profile_page_component__["a" /* ProfilePageComponent */],
            __WEBPACK_IMPORTED_MODULE_18__pages_edit_profile_page_edit_profile_page_component__["a" /* EditProfilePageComponent */],
            __WEBPACK_IMPORTED_MODULE_28__pages_topGames_list_page_topGames_list_page_component__["a" /* TopGamesListPageComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_19__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(ROUTES),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_http__["c" /* HttpModule */]
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_5__common_config_initial_config__["a" /* INITIAL_CONFIG */],
                useValue: {
                    apiURL: 'http://localhost:8080'
                }
            },
            __WEBPACK_IMPORTED_MODULE_20__services_game_service__["a" /* GameService */],
            __WEBPACK_IMPORTED_MODULE_23__common_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_24__common_app_data_service__["a" /* AppDataService */],
            __WEBPACK_IMPORTED_MODULE_26__services_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_25__services_change_service__["a" /* ChangeService */],
            __WEBPACK_IMPORTED_MODULE_4__common_config_app_configuration_service__["a" /* AppConfiguration */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/common/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_config_app_configuration_service__ = __webpack_require__("../../../../../src/app/common/config/app-configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_auth_service__ = __webpack_require__("../../../../../src/app/common/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var APIService = (function () {
    function APIService(config, authService, http) {
        this.config = config;
        this.authService = authService;
        this.http = http;
    }
    APIService.prototype.post = function (url, body, options) {
        return this.http
            .post(this.config.apiURL + "/" + url, body, this.getRequestOptions(options))
            .map(this.extractData)
            .catch(this.handleError);
    };
    APIService.prototype.getRequestOptions = function (options) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var innerOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (!options || options.credentials === undefined || options.credentials === true) {
            headers.append('Authorization', 'Bearer ' + this.authService.accessToken);
        }
        return innerOptions;
    };
    APIService.prototype.extractData = function (res) {
        return res.json();
    };
    APIService.prototype.handleError = function (error) {
        var errObj;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json();
            errObj = body;
        }
        else {
            errObj = error.message ? { message: error.message } : { message: error };
        }
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errObj);
    };
    APIService.prototype.get = function (url, options) {
        return this.http
            .get(this.config.apiURL + "/" + url, this.getRequestOptions(options))
            .map(this.extractData)
            .catch(this.handleError);
    };
    return APIService;
}());
APIService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_config_app_configuration_service__["a" /* AppConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_config_app_configuration_service__["a" /* AppConfiguration */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__common_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _c || Object])
], APIService);

var _a, _b, _c;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/common/app-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppDataService = (function () {
    function AppDataService() {
        this._accessToken = null;
    }
    Object.defineProperty(AppDataService.prototype, "accessToken", {
        get: function () {
            if (!this._accessToken) {
                this._accessToken = localStorage.getItem('AT');
            }
            return this._accessToken;
        },
        set: function (accessToken) {
            this._accessToken = accessToken;
            localStorage.setItem('AT', accessToken);
        },
        enumerable: true,
        configurable: true
    });
    AppDataService.prototype.removeAccessToken = function () {
        this._accessToken = null;
        localStorage.removeItem('AT');
    };
    return AppDataService;
}());
AppDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AppDataService);

//# sourceMappingURL=app-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/common/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_app_data_service__ = __webpack_require__("../../../../../src/app/common/app-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(router, appData) {
        this.router = router;
        this.appData = appData;
    }
    Object.defineProperty(AuthService.prototype, "accessToken", {
        get: function () {
            return this.appData.accessToken;
        },
        set: function (accessToken) {
            this.appData.accessToken = accessToken;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.isLoggedIn = function () {
        return this.appData.accessToken != null && this.appData.accessToken !== undefined;
    };
    AuthService.prototype.signOut = function () {
        this.appData.removeAccessToken();
        this.router.navigate(['']);
    };
    AuthService.prototype.canActivate = function () {
        if (!this.isLoggedIn()) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__common_app_data_service__["a" /* AppDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_app_data_service__["a" /* AppDataService */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/common/config/app-configuration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfiguration; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_interface__ = __webpack_require__("../../../../../src/app/common/config/config.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__config_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__initial_config__ = __webpack_require__("../../../../../src/app/common/config/initial-config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AppConfiguration = (function () {
    function AppConfiguration(initialConfig) {
        this.config = initialConfig;
    }
    Object.defineProperty(AppConfiguration.prototype, "apiURL", {
        get: function () {
            return this.config && this.config.apiURL;
        },
        enumerable: true,
        configurable: true
    });
    return AppConfiguration;
}());
AppConfiguration = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__initial_config__["a" /* INITIAL_CONFIG */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__config_interface__["IConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__config_interface__["IConfig"]) === "function" && _a || Object])
], AppConfiguration);

var _a;
//# sourceMappingURL=app-configuration.service.js.map

/***/ }),

/***/ "../../../../../src/app/common/config/config.interface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=config.interface.js.map

/***/ }),

/***/ "../../../../../src/app/common/config/initial-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INITIAL_CONFIG; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var INITIAL_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('app.config');
//# sourceMappingURL=initial-config.js.map

/***/ }),

/***/ "../../../../../src/app/models/change.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Change; });
var Change = (function () {
    function Change(id, nameGame, description, image, state, accept) {
        this.id = id;
        this.nameGame = nameGame;
        this.description = description;
        this.image = image;
        this.state = state;
        this.accept = accept;
    }
    return Change;
}());

//# sourceMappingURL=change.js.map

/***/ }),

/***/ "../../../../../src/app/models/comment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = (function () {
    function Comment(contenido, name, rate, id) {
        this.rate = rate;
        this.content = contenido;
        this.user = name;
        this.id = id;
    }
    return Comment;
}());

//# sourceMappingURL=comment.js.map

/***/ }),

/***/ "../../../../../src/app/models/game.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Game; });
var Game = (function () {
    function Game(id, name, image, comment, description, rate, seller) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.comments = comment;
        this.description = description;
        this.rateAcum = rate;
        this.seller = seller;
    }
    return Game;
}());

//# sourceMappingURL=game.js.map

/***/ }),

/***/ "../../../../../src/app/models/seller.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Seller; });
var Seller = (function () {
    function Seller(price, link) {
        this.price = price;
        this.link = link;
    }
    return Seller;
}());

//# sourceMappingURL=seller.js.map

/***/ }),

/***/ "../../../../../src/app/models/todo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
var Todo = (function () {
    function Todo(description, priority, completed) {
        if (priority === void 0) { priority = 1; }
        if (completed === void 0) { completed = false; }
        this.description = description;
        this.completed = completed;
        this.priority = priority;
    }
    return Todo;
}());

//# sourceMappingURL=todo.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(id, name, email, image, password, confirmPassword) {
        this._name = name;
        this._email = email;
        this._image = image;
        this._password = password;
        this._id = id;
    }
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "image", {
        get: function () {
            return this._image;
        },
        set: function (value) {
            this._image = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/pages/change-edit-page/change-edit-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/change-edit-page/change-edit-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <br>\r\n    <div id=\"centerbrand\">\r\n        <img id=\"brand\"  src=\"/assets/images/videojuegos.jpg\" width=\"170\" height=\"80\">\r\n    </div>\r\n    <h2 class=\"text-center\">Change Your Game</h2>\r\n    <br>\r\n    <br>\r\n\r\n    <form [formGroup]=\"changeForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"nameGame\">Name Game</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"nameGame\" formControlName=\"nameGame\" required>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"description\">Description</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"description\" formControlName=\"description\" required>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"image\">URL Image (Your Game)</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"image\" formControlName=\"image\" required>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"state\">State Of The Game</label>    \r\n            <input type=\"radio\" name=\"state\" class=\"form-control\" id=\"state\" formControlName=\"state\" value=\"like New\"> Like New <br>\r\n            <input type=\"radio\" name=\"state\" class=\"form-control\" id=\"state\" formControlName=\"state\" value=\"very Good\" checked> Very Good <br>\r\n            <input type=\"radio\" name=\"state\" class=\"form-control\" id=\"state\" formControlName=\"state\" value=\"good\"> Good <br>\r\n            <input type=\"radio\" name=\"state\" class=\"form-control\" id=\"state\" formControlName=\"state\" value=\"regular\"> Regular <br>\r\n        </div>        \r\n        <div class=\"form-group\">\r\n            <label for=\"accept\">Terms and Conditions</label>\r\n            <input type=\"checkbox\" class=\"form-control\" id=\"accept\" formControlName=\"accept\" required> I accept the terms of service <br>\r\n        </div>\r\n\r\n        <br>\r\n\r\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!changeForm.valid\">Add Game</button>\r\n\r\n    </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/change-edit-page/change-edit-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeEditPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_change_service__ = __webpack_require__("../../../../../src/app/services/change.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangeEditPageComponent = (function () {
    function ChangeEditPageComponent(changeService, formBuilder, router) {
        this.changeService = changeService;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    ChangeEditPageComponent.prototype.ngOnInit = function () {
        this.changeForm = this.formBuilder.group({
            nameGame: '',
            description: '',
            image: '',
            state: '',
            accept: '',
        });
    };
    ChangeEditPageComponent.prototype.onSubmit = function () {
        var _this = this;
        this.changeService.create(this.changeForm.get('nameGame').value, this.changeForm.get('description').value, this.changeForm.get('image').value, this.changeForm.get('state').value, Boolean(this.changeForm.get('accept').value)).subscribe(function (serverResponse) {
            _this.router.navigate(['/listChanges']);
        }, function (error) {
            console.log(error);
        });
        this.router.navigate(['/listChanges']);
    };
    return ChangeEditPageComponent;
}());
ChangeEditPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-change-edit-page',
        template: __webpack_require__("../../../../../src/app/pages/change-edit-page/change-edit-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/change-edit-page/change-edit-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_change_service__["a" /* ChangeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_change_service__["a" /* ChangeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], ChangeEditPageComponent);

var _a, _b, _c;
//# sourceMappingURL=change-edit-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/change-list-page/change-list-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/change-list-page/change-list-page.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>My List Exchanges</h2>\r\n<table class=\"table table-bordered\">\r\n <thead>\r\n   <tr>\r\n     <th>id</th>\r\n     <th>nameGame</th>\r\n     <th>description</th>\r\n     <th>image</th>\r\n     <th>state</th>\r\n   </tr>\r\n </thead>\r\n <tr *ngFor=\"let change of changes\">\r\n   <td>{{change.id}}</td>\r\n   <td>{{change.nameGame}}</td>\r\n   <td>{{change.description}}</td>\r\n   <td><img [src]=\"change.image\" width=\"150\" height=\"150\" /></td>\r\n   <td>{{change.state}}</td>\r\n </tr>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/pages/change-list-page/change-list-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeListPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_change_service__ = __webpack_require__("../../../../../src/app/services/change.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_change__ = __webpack_require__("../../../../../src/app/models/change.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangeListPageComponent = (function () {
    function ChangeListPageComponent(changeService, router) {
        this.changeService = changeService;
        this.router = router;
        this.changes = [
            new __WEBPACK_IMPORTED_MODULE_2__models_change__["a" /* Change */](1, "", "", "https://ugc.kn3.net/i/origin/http://www.noticiasdot.com/publicaciones/galerias/Nintendo/2007/NDS_Donkey-Kong-Jungle-Climber-wallpaper/NDS_Donkey-Kong-Jungle-Climber-wallpaper-02.jpg", "", true),
        ];
    }
    ChangeListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.changeService.list().subscribe(function (changeResponse) {
            _this.changes = changeResponse;
        });
    };
    return ChangeListPageComponent;
}());
ChangeListPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-change-list-page',
        template: __webpack_require__("../../../../../src/app/pages/change-list-page/change-list-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/change-list-page/change-list-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_change_service__["a" /* ChangeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_change_service__["a" /* ChangeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ChangeListPageComponent);

var _a, _b;
//# sourceMappingURL=change-list-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/change-list-page/changeOk-list-page.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>My List Exchanges</h2>\r\n<table class=\"table table-bordered\">\r\n <thead>\r\n   <tr>\r\n     <th>nameGame</th>\r\n     <th>description</th>\r\n     <th>image</th>\r\n     <th>Add</th>\r\n   </tr>\r\n </thead>\r\n <tr *ngFor=\"let change of changes\">\r\n   <td>{{change.nameGame}}</td>\r\n   <td>{{change.description}}</td>\r\n   <td><img [src]=\"change.image\" width=\"150\" height=\"150\" /></td>\r\n   <td><button (click)=\"myEvent($event)\" type=\"submit\" class=\"btn btn-success\">Exchange</button></td>\r\n </tr>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/pages/change-list-page/changeOk-list-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeOkListPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_change_service__ = __webpack_require__("../../../../../src/app/services/change.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_change__ = __webpack_require__("../../../../../src/app/models/change.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangeOkListPageComponent = (function () {
    function ChangeOkListPageComponent(changeService, router) {
        this.changeService = changeService;
        this.router = router;
        this.changes = [
            new __WEBPACK_IMPORTED_MODULE_2__models_change__["a" /* Change */](1, "Donkey Kong", "Adventure", "https://ugc.kn3.net/i/origin/http://www.noticiasdot.com/publicaciones/galerias/Nintendo/2007/NDS_Donkey-Kong-Jungle-Climber-wallpaper/NDS_Donkey-Kong-Jungle-Climber-wallpaper-02.jpg", "", true),
        ];
    }
    ChangeOkListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.changeService.list().subscribe(function (changeResponse) {
            _this.changes = changeResponse;
        });
    };
    ChangeOkListPageComponent.prototype.myEvent = function (event) {
        this.router.navigate(['/code']);
    };
    return ChangeOkListPageComponent;
}());
ChangeOkListPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-changeOk-list-page',
        template: __webpack_require__("../../../../../src/app/pages/change-list-page/changeOk-list-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/change-list-page/change-list-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_change_service__["a" /* ChangeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_change_service__["a" /* ChangeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ChangeOkListPageComponent);

var _a, _b;
//# sourceMappingURL=changeOk-list-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/code-accept-page/code-accept-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/code-accept-page/code-accept-page.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Code Accept</h1>\r\n<br>\r\n<br>\r\n<img src=\"/assets/images/QR.png\" width=\"150\" height=\"150\" />\r\n<br>\r\n<br>\r\n<p>This QR code is to confirm the transaction, and to make a claim.</p>\r\n<br>\r\n<br>\r\n<button (click)=\"myEvent($event)\" type=\"submit\" class=\"btn btn-success\">Accept</button>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/code-accept-page/code-accept-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeAcceptPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CodeAcceptPageComponent = (function () {
    function CodeAcceptPageComponent(router) {
        this.router = router;
    }
    CodeAcceptPageComponent.prototype.ngOnInit = function () {
    };
    CodeAcceptPageComponent.prototype.myEvent = function (event) {
        this.router.navigate(['/listexChanges']);
    };
    return CodeAcceptPageComponent;
}());
CodeAcceptPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-code-accept-page',
        template: __webpack_require__("../../../../../src/app/pages/code-accept-page/code-accept-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/code-accept-page/code-accept-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], CodeAcceptPageComponent);

var _a;
//# sourceMappingURL=code-accept-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/comments-edit-page/comments-edit-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/comments-edit-page/comments-edit-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h2>Edit comments</h2>\r\n    <form [formGroup]=\"commentsForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n        <div class=\"form-group\">\r\n            <label for=\"content\">Content</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"content\" formControlName=\"content\" required>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"user\">User</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"user\" formControlName=\"content\" required>\r\n        </div>\r\n\r\n\r\n        <button type=\"submit\" class=\"btn btn-success\">Save</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" routerLinkActive=\"/searchGame\" routerLink=\"/searchGame\">return</button>\r\n\r\n\r\n    </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/comments-edit-page/comments-edit-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsEditPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_game_service__ = __webpack_require__("../../../../../src/app/services/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentsEditPageComponent = (function () {
    function CommentsEditPageComponent(gameService, formBuilder, router) {
        this.gameService = gameService;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    CommentsEditPageComponent.prototype.ngOnInit = function () {
        this.commentsForm = this.formBuilder.group({
            content: '',
            name: '',
            rate: '',
        });
    };
    CommentsEditPageComponent.prototype.onSubmit = function () {
        var _this = this;
        this.gameService.registerCommentByGame(this.commentsForm.get('content').value, this.commentsForm.get('name').value, this.commentsForm.get('rate').value).subscribe(function (serverResponse) {
            _this.router.navigate(['/comments']);
        }, function (error) {
            console.log(error);
        });
        this.router.navigate(['/comments']);
    };
    return CommentsEditPageComponent;
}());
CommentsEditPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-comments-edit-page',
        template: __webpack_require__("../../../../../src/app/pages/comments-edit-page/comments-edit-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/comments-edit-page/comments-edit-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_game_service__["a" /* GameService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], CommentsEditPageComponent);

var _a, _b, _c;
//# sourceMappingURL=comments-edit-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/edit-profile-page/edit-profile-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/edit-profile-page/edit-profile-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h1>Edit Profile</h1>\r\n    <hr>\r\n    <div class=\"row\">\r\n        <!-- left column -->\r\n        <div class=\"col-md-3\">\r\n            <div class=\"text-center\">\r\n                <img src=\"//placehold.it/100\" class=\"avatar img-circle\" alt=\"avatar\" width=\"200\" height=\"200\">\r\n                <h6>Upload a different photo...</h6>\r\n\r\n                <input type=\"file\" class=\"form-control\">\r\n            </div>\r\n        </div>\r\n\r\n        <!-- edit form column -->\r\n        <div class=\"col-md-9 personal-info\">\r\n\r\n            <h3>Personal info</h3>\r\n\r\n            <form class=\"form-horizontal\" role=\"form\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-lg-3 control-label\">Email:</label>\r\n                    <div class=\"col-lg-8\">\r\n                        <input class=\"form-control\" type=\"text\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-lg-3 control-label\">First Name:</label>\r\n                    <div class=\"col-lg-8\">\r\n                        <input class=\"form-control\" type=\"text\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-lg-3 control-label\">Last Name:</label>\r\n                    <div class=\"col-lg-8\">\r\n                        <input class=\"form-control\" type=\"text\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-lg-3 control-label\">User Name:</label>\r\n                    <div class=\"col-lg-8\">\r\n                        <input class=\"form-control\" type=\"text\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-3 control-label\">Description:</label>\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\" type=\"text\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-3 control-label\"></label>\r\n                    <div class=\"col-md-8\">\r\n                        <input type=\"button\" class=\"btn btn-primary\" value=\"Save Changes\" routerLinkActive=\"/profile\" routerLink=\"/profile\">\r\n                        <span></span>\r\n                        <input type=\"reset\" class=\"btn btn-default\" value=\"Cancel\" routerLinkActive=\"/profile\" routerLink=\"/profile\">\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n<hr>"

/***/ }),

/***/ "../../../../../src/app/pages/edit-profile-page/edit-profile-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_todo_service__ = __webpack_require__("../../../../../src/app/services/todo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditProfilePageComponent = (function () {
    function EditProfilePageComponent(todoService) {
        this.todoService = todoService;
        this.todos = [];
    }
    EditProfilePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService.list().subscribe(function (todosResponse) {
            _this.todos = todosResponse;
        });
    };
    return EditProfilePageComponent;
}());
EditProfilePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit-profile-page',
        template: __webpack_require__("../../../../../src/app/pages/edit-profile-page/edit-profile-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/edit-profile-page/edit-profile-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_todo_service__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_todo_service__["a" /* TodoService */]) === "function" && _a || Object])
], EditProfilePageComponent);

var _a;
//# sourceMappingURL=edit-profile-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/exchange-list-page/exchange-list-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/exchange-list-page/exchange-list-page.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Tasks</h2>\r\n<table class=\"table table-bordered\">\r\n <thead>\r\n   <tr>\r\n     <th>Name Game</th>\r\n     <th>Description</th>\r\n     <th>Image</th>\r\n   </tr>\r\n </thead>\r\n <tr *ngFor=\"let change of exchanges\">\r\n    <td>{{change.nameGame}}</td>\r\n    <td>{{change.description}}</td>\r\n    <td><img [src]=\"change.image\" width=\"150\" height=\"150\" /></td>\r\n    <td><button (click)=\"myEvent($event)\" type=\"submit\" class=\"btn btn-success\">Exchange</button></td>\r\n </tr>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/pages/exchange-list-page/exchange-list-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangeListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_change__ = __webpack_require__("../../../../../src/app/models/change.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExchangeListComponent = (function () {
    function ExchangeListComponent(router) {
        this.router = router;
        this.exchanges = [
            new __WEBPACK_IMPORTED_MODULE_1__models_change__["a" /* Change */](1, "Dead Space", "Game Survival Terror", "http://2.bp.blogspot.com/-uPDDofi3qOE/UM4VRppTwlI/AAAAAAAAAB0/nDW-TyihLQQ/s1600/Dead+Space+2+Caratula.jpg", "", true),
            new __WEBPACK_IMPORTED_MODULE_1__models_change__["a" /* Change */](2, "Bloodborne", "RPG Survival", "https://i11b.3djuegos.com/juegos/11033/project_beast/fotos/ficha/project_beast-2739557.jpg", "", true),
            new __WEBPACK_IMPORTED_MODULE_1__models_change__["a" /* Change */](3, "Uncharted 4", "Adventure", "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/2943/2943094_sd.jpg;maxHeight=550;maxWidth=642", "", true),
            new __WEBPACK_IMPORTED_MODULE_1__models_change__["a" /* Change */](4, "Mario Odyssey", "Adventure", "https://images-na.ssl-images-amazon.com/images/I/91-VfRp-i0L._SY679_.jpg", "", true),
        ];
    }
    ExchangeListComponent.prototype.ngOnInit = function () {
        this.exchanges;
    };
    ExchangeListComponent.prototype.myEvent = function (event) {
        this.router.navigate(['/okChanges']);
    };
    return ExchangeListComponent;
}());
ExchangeListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-exchange-list-page',
        template: __webpack_require__("../../../../../src/app/pages/exchange-list-page/exchange-list-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/exchange-list-page/exchange-list-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object])
], ExchangeListComponent);

var _a;
//# sourceMappingURL=exchange-list-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home-page/home-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nh2 {\r\n    font-size: 24px;\r\n    text-transform: uppercase;\r\n    color: #303030;\r\n    font-weight: 600;\r\n    margin-bottom: 30px;\r\n}\r\nh4 {\r\n    font-size: 19px;\r\n    line-height: 1.375em;\r\n    color: #303030;\r\n    font-weight: 400;\r\n    margin-bottom: 30px;\r\n}\r\n.jumbotron {\r\n    background-color: #3399ff;\r\n    color: #fff;\r\n    padding: 100px 25px;\r\n    font-family: Montserrat, sans-serif;\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<head>\r\n    <link href=\"https://fonts.googleapis.com/css?family=Montserrat\" rel=\"stylesheet\" type=\"text/css\">\r\n    <link href=\"https://fonts.googleapis.com/css?family=Lato\" rel=\"stylesheet\" type=\"text/css\">\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\r\n</head>\r\n\r\n\r\n<div class=\"jumbotron text-center\">\r\n    <h1>Brother Games</h1>\r\n    <p>Search Game</p>\r\n    <form [formGroup]=\"homeForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" size=\"50\" id=\"name\" placeholder=\"Search Game\" required>\r\n\r\n\r\n                <button type=\"submit\" class=\"btn btn-success\" >Search</button>\r\n\r\n            </div>\r\n    </form>\r\n</div>\r\n\r\n<div id=\"about\" class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-8\">\r\n            <h2>About Brother Games </h2><br>\r\n            <h4>On this page you can search, consult and exchange the video games you want, in addition to consulting the prices of each of them in the different internet gaming platforms.</h4>\r\n            <br>\r\n            <h4>To be able to exchange a game you must first register to be able to log in and make the exchange</h4>\r\n\r\n        </div>\r\n\r\n        <div id=\"centerbrand\">\r\n\r\n            <img id=\"brand\"  src=\"/assets/images/videojuegos.jpg\" width=\"300\" height=\"200\">\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_game_service__ = __webpack_require__("../../../../../src/app/services/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePageComponent = (function () {
    function HomePageComponent(gameService, formBuilder, router) {
        this.gameService = gameService;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.homeForm = this.formBuilder.group({
            name: '',
        });
    };
    HomePageComponent.prototype.onSubmit = function () {
        sessionStorage.setItem('name', this.homeForm.get('name').value);
        this.router.navigate(['/searchGame']);
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home-page',
        template: __webpack_require__("../../../../../src/app/pages/home-page/home-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/home-page/home-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_game_service__["a" /* GameService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], HomePageComponent);

var _a, _b, _c;
//# sourceMappingURL=home-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  The page you were looking for was not found\r\n</p>\r\n<p>\r\n  <a routerLink=\"/\">Back to Home</a>\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/pages/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/pages/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/profile-page/profile-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/profile-page/profile-page.component.html":
/***/ (function(module, exports) {

module.exports = "<script src=\"//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js\"></script>\r\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\r\n\r\n\r\n<div class=\"container\">\r\n    <form [formGroup]=\"userForm\">\r\n        <div>\r\n            <img src={{user.image}} width=\"250\" height=\"250\" />\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <div>\r\n            <p for=\"firstname\"> <b>Name:</b></p>\r\n            <label id=\"firstname\">{{user.firstname}} {{user.lastname}}</label>\r\n        </div>\r\n\r\n        <div>\r\n            <p for=\"email\"><b>Email:</b></p>\r\n            <label id=\"email\">{{user.email}}</label>\r\n        </div>\r\n\r\n        <div>\r\n            <p for=\"username\"><b>Username:</b></p>\r\n            <label id=\"username\">{{user.username}}</label>\r\n        </div>\r\n\r\n        <div>\r\n            <p for=\"aboutYou\"><b>About me:</b></p>\r\n            <label id=\"aboutYou\">{{user.description}}</label>\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <button type=\"button\" class=\"btn btn-primary\" routerLinkActive=\"/editProfile\" routerLink=\"/editProfile\">Edit Profile</button>\r\n    </form>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/profile-page/profile-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePageComponent = (function () {
    function ProfilePageComponent(userService, formBuilder, router) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.users = [];
    }
    ProfilePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser('prueba2@mail.com').subscribe(function (data) {
            _this.user = data;
        }, function (error) {
            console.log("error");
        });
        this.userForm = this.formBuilder.group({
            firstname: '',
            lastname: '',
            email: '',
            username: '',
            aboutYou: '',
            image: ''
        });
    };
    return ProfilePageComponent;
}());
ProfilePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile-page',
        template: __webpack_require__("../../../../../src/app/pages/profile-page/profile-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/profile-page/profile-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], ProfilePageComponent);

var _a, _b, _c;
//# sourceMappingURL=profile-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/register-page/register-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n    position: relative;\r\n    width: 400px;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n    background-color: transparent;\r\n}\r\n\r\n#centerbrand{\r\n    position: relative;\r\n    width: 400px;\r\n    height: 100px;\r\n}\r\n\r\n#brand{\r\n    position: absolute;\r\n    width: 200px;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n}\r\n\r\n.btn-success{\r\n    background-color: #1FE932;\r\n    border: none;\r\n    padding: 10px 145px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/register-page/register-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <br>\r\n    <div id=\"centerbrand\">\r\n        <img id=\"brand\"  src=\"/assets/images/videojuegos.jpg\" width=\"170\" height=\"80\">\r\n    </div>\r\n    <h2 class=\"text-center\">REGISTER TO BROTHERS GAMES</h2>\r\n    <br>\r\n    <br>\r\n\r\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"description\">Username</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"username\" formControlName=\"username\" required>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"priority\">Email</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"email\" formControlName=\"email\" required>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"priority\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"priority\">Url image</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"image\" formControlName=\"image\" required>\r\n        </div>        <div class=\"form-group\">\r\n            <label for=\"priority\">Description</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"description\" formControlName=\"description\" required>\r\n        </div>\r\n        <br>\r\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!registerForm.valid\">REGISTER</button>\r\n\r\n    </form>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/register-page/register-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(todoUser, formBuilder, router) {
        this.todoUser = todoUser;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            username: '',
            email: '',
            password: '',
            image: '',
            description: ''
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.todoUser.registerUser(this.registerForm.get('username').value, this.registerForm.get('email').value, this.registerForm.get('password').value, this.registerForm.get('image').value, this.registerForm.get('description').value).subscribe(function (serverResponse) {
            _this.router.navigate(['/signin']);
        }, function (error) {
            console.log(error);
        });
        this.router.navigate(['/signin']);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register-page',
        template: __webpack_require__("../../../../../src/app/pages/register-page/register-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/register-page/register-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/searchGame-list-page/searchGame-list-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/searchGame-list-page/searchGame-list-page.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<script src=\"//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js\"></script>\r\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\r\n<!------ Include the above in your HEAD tag ---------->\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n            <div class=\"panel-body\">\r\n\r\n              <hr>\r\n                <ul class=\"container details\" >\r\n\r\n                </ul>\r\n                <hr>\r\n                <h2> </h2>\r\n                <table class=\"table table-bordered\">\r\n                    <thead>\r\n\r\n                        <th> RATE = {{game.rateAcum}}</th>\r\n                        <th>{{game.name}}</th>\r\n                        <th>{{game.description}}</th>\r\n                        <td><img [src]= game.photo width=\"150\" height=\"150\" /></td>\r\n\r\n                    </thead>\r\n\r\n                </table>\r\n\r\n\r\n                <button type=\"button\" class=\"btn btn-primary\" routerLinkActive=\"/comments\" routerLink=\"/comments\">Comments ++</button>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/searchGame-list-page/searchGame-list-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchGameListPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_game_service__ = __webpack_require__("../../../../../src/app/services/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchGameListPageComponent = (function () {
    function SearchGameListPageComponent(gameService, router) {
        this.gameService = gameService;
        this.router = router;
    }
    SearchGameListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var data = this.name = sessionStorage.getItem(name);
        this.gameService.getGame('Need for speed').subscribe(function (gameResponse) {
            _this.game = gameResponse;
        });
    };
    return SearchGameListPageComponent;
}());
SearchGameListPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-searchGame-list-page',
        template: __webpack_require__("../../../../../src/app/pages/searchGame-list-page/searchGame-list-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/searchGame-list-page/searchGame-list-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_game_service__["a" /* GameService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], SearchGameListPageComponent);

var _a, _b;
//# sourceMappingURL=searchGame-list-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/sign-in/sign-in-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n    position: relative;\r\n    width: 400px;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n    background-color: transparent;\r\n}\r\n\r\n#centerbrand{\r\n    position: relative;\r\n    width: 400px;\r\n    height: 100px;\r\n}\r\n\r\n#brand{\r\n    position: absolute;\r\n    width: 200px;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n}\r\n\r\n.btn-success{\r\n    background-color: #1FE932;\r\n    border: none;\r\n    padding: 10px 155px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/sign-in/sign-in-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <br>\r\n  <div id=\"centerbrand\">\r\n\r\n    <img id=\"brand\"  src=\"/assets/images/videojuegos.jpg\" width=\"170\" height=\"80\">\r\n  </div>\r\n\r\n  <h2 class=\"text-center\">SIGN IN BROTHERS GAMES</h2>\r\n  <br>\r\n  <br>\r\n  <form [formGroup]=\"signInForm\" (ngSubmit)=\"doLogin()\" novalidate>\r\n\r\n    <div class=\"form-group\">\r\n      <label  for=\"description\">Email</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"email\" formControlName=\"email\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"priority\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" id=\"alterEgo\" formControlName=\"password\" required>\r\n    </div>\r\n    <br>\r\n    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!signInForm.valid\">SIGN IN</button>\r\n\r\n\r\n    <p class=\"text-danger mt-1\" *ngIf=\"loginError\">{{loginError}}</p>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/sign-in/sign-in-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignInPageComponent = (function () {
    function SignInPageComponent(usersService, formBuilder, router) {
        this.usersService = usersService;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    SignInPageComponent.prototype.ngOnInit = function () {
        this.signInForm = this.formBuilder.group({
            email: '',
            password: '',
        });
    };
    SignInPageComponent.prototype.doLogin = function () {
        var _this = this;
        this.usersService.login(this.signInForm.get('email').value, this.signInForm.get('password').value).subscribe(function (loginResponse) {
            _this.router.navigate(['/']);
        }, function (error) {
            _this.loginError = 'Error Signing in: ' + (error && error.message ? error.message : '');
        });
    };
    return SignInPageComponent;
}());
SignInPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sign-in-page',
        template: __webpack_require__("../../../../../src/app/pages/sign-in/sign-in-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/sign-in/sign-in-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object])
], SignInPageComponent);

var _a, _b, _c;
//# sourceMappingURL=sign-in-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/topGames-list-page/topGames-list-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/topGames-list-page/topGames-list-page.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<script src=\"//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js\"></script>\r\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\r\n<!------ Include the above in your HEAD tag ---------->\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"panel-body\">\r\n\r\n                    <hr>\r\n                    <ul class=\"container details\" >\r\n\r\n                    </ul>\r\n                    <hr>\r\n                    <h2> </h2>\r\n                    <table class=\"table table-bordered\">\r\n\r\n                        <tr *ngFor=\"let game of games\">\r\n                            <td>RATE = {{game.rateAcum}}<img [src]=\"game.image\" width=\"150\" height=\"150\" /></td>\r\n                            <td><h2> {{game.name}}</h2>{{game.description}}</td>\r\n                        </tr>\r\n\r\n                    </table>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/topGames-list-page/topGames-list-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopGamesListPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_game__ = __webpack_require__("../../../../../src/app/models/game.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_game_service__ = __webpack_require__("../../../../../src/app/services/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_seller__ = __webpack_require__("../../../../../src/app/models/seller.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_comment__ = __webpack_require__("../../../../../src/app/models/comment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TopGamesListPageComponent = (function () {
    function TopGamesListPageComponent(gameService, router) {
        this.gameService = gameService;
        this.router = router;
        this.comm = [new __WEBPACK_IMPORTED_MODULE_5__models_comment__["a" /* Comment */]('Exelente juego lo recomiendo para PSP', 'Laura Sanchez', 5, 1)];
        this.seller1 = [new __WEBPACK_IMPORTED_MODULE_3__models_seller__["a" /* Seller */]('$359.900 ', 'www.Nintendo.com'), new __WEBPACK_IMPORTED_MODULE_3__models_seller__["a" /* Seller */]('$500 000 ', 'listado.mercadolibre.com.mx/juegos-de-mario-bros-gratis')];
        this.games = [new __WEBPACK_IMPORTED_MODULE_1__models_game__["a" /* Game */](1, 'Super Mario Bros.', '/assets/images/mario.jpg ', this.comm, 'Is a platform video game, designed by Shigeru Miyamoto,' +
                ' released on September 13, 1985 and produced by the company Nintendo, for the Nintendo Entertainment System (NES). The game describes the adventures of brothers Mario and Luigi, characters who already starred in the arcade Mario Bros. of 1983.' +
                ' This time both must rescue Princess Peach Mushroom Kingdom who was kidnapped by' +
                ' the King of the Koopas, Bowser.', 5, this.seller1), new __WEBPACK_IMPORTED_MODULE_1__models_game__["a" /* Game */](1, 'need for speed', '/assets/images/need.jpg', [], 'Set in the underworld of Fortune Valley, you and your crew are reunited by a search for vengeance against The House,' +
                ' a nefarious cartel that rules the city’s casinos, criminals, and cops. In this corrupt gambler’s paradise,the stakes are high and The House always wins. Play a variety of events as Tyler, Mac, and Jess. Earn the respect of the Valley’s underground and compete in the ' +
                'ultimate race to finally take down The House.', 5, [])];
    }
    TopGamesListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameService.getTop().subscribe(function (gameResponse) {
            _this.games = gameResponse;
        });
    };
    return TopGamesListPageComponent;
}());
TopGamesListPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-topGames-list-page',
        template: __webpack_require__("../../../../../src/app/pages/topGames-list-page/topGames-list-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/topGames-list-page/topGames-list-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_game_service__["a" /* GameService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _b || Object])
], TopGamesListPageComponent);

var _a, _b;
//# sourceMappingURL=topGames-list-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user-edit-page/user-edit-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/user-edit-page/user-edit-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h2>Edit User</h2>\r\n    <form [formGroup]=\"todoForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n      <div class=\"form-group\">\r\n        <label for=\"firstname\">Name</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"firstname\" formControlName=\"firstname\" required>\r\n      </div>\r\n  \r\n      <div class=\"form-group\">\r\n        <label for=\"lastname\">LastName</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"lastname\" formControlName=\"lastname\" required>\r\n      </div>\r\n  \r\n      <div class=\"form-group\">\r\n        <label for=\"image\">Url Image</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"image\" formControlName=\"image\" required>\r\n      </div>\r\n  \r\n      <button type=\"submit\" class=\"btn btn-success\">Save</button>\r\n  \r\n    </form>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/pages/user-edit-page/user-edit-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserEditPageComponent = (function () {
    function UserEditPageComponent(todoUser, formBuilder, router) {
        this.todoUser = todoUser;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    UserEditPageComponent.prototype.ngOnInit = function () {
        this.todoForm = this.formBuilder.group({
            firstname: '',
            lastname: '',
            image: '',
            username: '',
            description: ''
        });
    };
    UserEditPageComponent.prototype.onSubmit = function () {
        var _this = this;
        this.todoUser.registerUser(this.todoForm.get('firstname').value, this.todoForm.get('lastname').value, this.todoForm.get('image').value, this.todoForm.get('username').value, this.todoForm.get('description').value).subscribe(function (serverResponse) {
            _this.router.navigate(['/users']);
        }, function (error) {
            console.log(error);
        });
        this.router.navigate(['/users']);
    };
    return UserEditPageComponent;
}());
UserEditPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-edit-page',
        template: __webpack_require__("../../../../../src/app/pages/user-edit-page/user-edit-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/user-edit-page/user-edit-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object])
], UserEditPageComponent);

var _a, _b, _c;
//# sourceMappingURL=user-edit-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user-list-page/user-list-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/user-list-page/user-list-page.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Users</h2>\r\n<table class=\"table table-bordered\">\r\n <thead>\r\n   <tr>\r\n     <th>Name</th>\r\n     <th>LastName</th>\r\n     <th>Image</th>\r\n   </tr>\r\n </thead>\r\n <tr *ngFor=\"let user of users\">\r\n   <td>{{user.firstname}}</td>\r\n   <td>{{user.lastname}}</td>\r\n   <td><img [src]=\"user.image\" width=\"150\" height=\"150\" /></td>\r\n </tr>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/pages/user-list-page/user-list-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// tslint:disable-next-line:import-spacing

var UserListPageComponent = (function () {
    function UserListPageComponent(usersService) {
        this.usersService = usersService;
        this.users = [];
        // tslint:disable-next-line:no-trailing-whitespace
    }
    UserListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService.list().subscribe(function (todosResponse) {
            _this.users = todosResponse;
            // tslint:disable-next-line:semicolon
        });
    };
    return UserListPageComponent;
}());
UserListPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-list-page',
        template: __webpack_require__("../../../../../src/app/pages/user-list-page/user-list-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/user-list-page/user-list-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _a || Object])
], UserListPageComponent);

var _a;
//# sourceMappingURL=user-list-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/change.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_change__ = __webpack_require__("../../../../../src/app/models/change.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_api_service__ = __webpack_require__("../../../../../src/app/common/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChangeService = (function (_super) {
    __extends(ChangeService, _super);
    function ChangeService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceUrl = 'api/change';
        _this.cont = 0;
        _this.changes = [];
        return _this;
    }
    ChangeService.prototype.create = function (value0, value1, value2, value3, bool) {
        this.cont += 1;
        return this.post(this.resourceUrl, new __WEBPACK_IMPORTED_MODULE_1__models_change__["a" /* Change */](this.cont, value0, value1, value2, value3, bool));
    };
    ChangeService.prototype.list = function () {
        return this.get(this.resourceUrl);
    };
    return ChangeService;
}(__WEBPACK_IMPORTED_MODULE_2__common_api_service__["a" /* APIService */]));
ChangeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], ChangeService);

//# sourceMappingURL=change.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/game.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_comment__ = __webpack_require__("../../../../../src/app/models/comment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_api_service__ = __webpack_require__("../../../../../src/app/common/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_config_app_configuration_service__ = __webpack_require__("../../../../../src/app/common/config/app-configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_auth_service__ = __webpack_require__("../../../../../src/app/common/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GameService = (function (_super) {
    __extends(GameService, _super);
    function GameService(config, authService, http) {
        var _this = _super.call(this, config, authService, http) || this;
        _this.config = config;
        _this.authService = authService;
        _this.http = http;
        _this.resourceUrl = 'searchGame/';
        return _this;
    }
    GameService.prototype.getGame = function (name) {
        return this.get(this.resourceUrl + name);
    };
    GameService.prototype.getTop = function () {
        return this.get(this.resourceUrl + top);
    };
    GameService.prototype.registerCommentByGame = function (value0, value1, value2) {
        return this.post(this.resourceUrl + "game", new __WEBPACK_IMPORTED_MODULE_1__models_comment__["a" /* Comment */](value0, value1, value2, 2));
    };
    return GameService;
}(__WEBPACK_IMPORTED_MODULE_2__common_api_service__["a" /* APIService */]));
GameService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__common_config_app_configuration_service__["a" /* AppConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_config_app_configuration_service__["a" /* AppConfiguration */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__common_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]) === "function" && _c || Object])
], GameService);

var _a, _b, _c;
//# sourceMappingURL=game.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_todo__ = __webpack_require__("../../../../../src/app/models/todo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_api_service__ = __webpack_require__("../../../../../src/app/common/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TodoService = (function (_super) {
    __extends(TodoService, _super);
    function TodoService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceUrl = 'api/todo';
        return _this;
    }
    TodoService.prototype.create = function (value, value2, bool) {
        return this.post(this.resourceUrl, new __WEBPACK_IMPORTED_MODULE_1__models_todo__["a" /* Todo */](value, value2, bool));
    };
    TodoService.prototype.list = function () {
        return this.get(this.resourceUrl);
    };
    return TodoService;
}(__WEBPACK_IMPORTED_MODULE_2__common_api_service__["a" /* APIService */]));
TodoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], TodoService);

//# sourceMappingURL=todo.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_api_service__ = __webpack_require__("../../../../../src/app/common/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_config_app_configuration_service__ = __webpack_require__("../../../../../src/app/common/config/app-configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_auth_service__ = __webpack_require__("../../../../../src/app/common/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UsersService = (function (_super) {
    __extends(UsersService, _super);
    function UsersService(config, authService, http) {
        var _this = _super.call(this, config, authService, http) || this;
        _this.config = config;
        _this.authService = authService;
        _this.http = http;
        _this.users = [
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:whitespace
            new __WEBPACK_IMPORTED_MODULE_5__models_user__["a" /* User */](1, 'Camilo', 'Garcia', 'http://farm6.static.flickr.com/5178/5428759578_d6fb2288a4.jpg', 'Souls', 'Gamer'),
        ];
        _this.resourceUrl = 'user';
        return _this;
    }
    UsersService.prototype.login = function (email, password) {
        var _this = this;
        return this.post('user/login', { email: email, password: password }, { credentials: false }).map(function (loginResponse) {
            if (loginResponse) {
                _this.authService.accessToken = loginResponse.accessToken;
            }
        });
    };
    UsersService.prototype.list = function () {
        return this.get(this.resourceUrl);
    };
    UsersService.prototype.create = function (id, firstname, lastname, image, username, description) {
        return this.post(this.resourceUrl, new __WEBPACK_IMPORTED_MODULE_5__models_user__["a" /* User */](id, firstname, lastname, image, username, description));
    };
    UsersService.prototype.registerUser = function (username, email, password, image, description) {
        return this.post('user/', { username: username, email: email, password: password, image: image, description: description }).map(function (loginResponse) {
            if (loginResponse) {
            }
        });
    };
    UsersService.prototype.getUserById = function (id) {
        return this.get('user/id/' + id);
    };
    UsersService.prototype.updateUser = function (name, email, image, password) {
        return this.post('user/updateprofile/' + this.cacheUser.id, { id: this.cacheUser.id, name: name, email: email,
            image: image, password: password, confirmPassword: password }).map(function (updateResponse) {
            if (updateResponse) {
            }
        });
    };
    UsersService.prototype.getUser = function (email) {
        return this.get(this.resourceUrl + '/' + email);
    };
    UsersService.prototype.currentUser = function () {
        return this.get(this.resourceUrl + '/' + sessionStorage.getItem("email"));
    };
    return UsersService;
}(__WEBPACK_IMPORTED_MODULE_1__common_api_service__["a" /* APIService */]));
UsersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_config_app_configuration_service__["a" /* AppConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_config_app_configuration_service__["a" /* AppConfiguration */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__common_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _c || Object])
], UsersService);

var _a, _b, _c;
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map