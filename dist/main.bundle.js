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
exports.push([module.i, "#boton{\n    border: none;\n    content:'';\n    position: unset;\n    margin-left:   7%;\n    color: #ffffff;\n    height: 42px;\n    background: rgba(168, 169, 172, 0.788);\n    border-radius: 5px;\n    transition: all 2s ease;\n}\n\n#boton:hover {\n    background: rgb(253, 253, 253);\n    color: rgba(2, 44, 105, 0.788);\n    box-shadow: inset 0 0 0 3px rgba(168, 169, 172, 0.788);\n}\n\n#button_home{\n    border: none;\n    position: unset;\n    color: #ffffff;\n    height: 42px;\n    background: rgba(54, 118, 214, 0.788);\n    border-radius: 5px;\n    transition: all 2s ease;\n    padding: 10px 35px;\n    overflow:hidden;\n    \n   }\n   #button_home:before {\n    \n    content: \"\";\n    \n    position: absolute;\n    -webkit-transform: scale(0.05);\n            transform: scale(0.05);\n    top: 11 px;\n    left: -30px;\n    transition: all 200ms ease;\n   }\n   #button_home:hover:before {\n    left: 7px;\n}\n\n.btn-primary{\n    background: #0275d8;\n    width: 100px;\n    height: 42px;\n    backgroundtext: black;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n  <a class=\"navbar-brand\" href=\"#\">BrotherGames</a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"/\" routerLink=\"/\">Home</a>\n      </li>\n      <li *ngIf=\"isLoggedIn()\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"/profile\" routerLink=\"/profile\">Profile</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"/searchGames\" routerLink=\"/searchGames\">Games <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li *ngIf=\"isLoggedIn()\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"/listChanges\" routerLink=\"/listChanges\">My Exchanges</a>\n      </li>\n      \n      <li *ngIf=\"isLoggedIn()\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"/listexChanges\" routerLink=\"/listexChanges\">All Exchanges</a>\n      </li>\n      <li *ngIf=\"isLoggedIn()\" class=\"nav-item\">\n        <a href=\"#\" class=\"nav-link\" (click)=\"signOut()\">(Sign Out)</a>\n      </li>\n      </ul>\n\n      <form class=\"form-inline my-2 my-lg-0\">\n        <ul class=\"navbar-nav mr-auto\">\n\n          <li *ngIf=\"!isLoggedIn()\" class=\"nav-item active\">\n            <button id=\"boton\"  routerLinkActive=\"/register\" routerLink=\"/register\">Register<span class=\"sr-only\">(current)</span></button>\n          </li>\n\n          <li *ngIf=\"!isLoggedIn()\" class=\"nav-item active\">\n            <button id=\"boton\" routerLinkActive=\"/signin\" routerLink=\"/signin\">Sign In<span class=\"sr-only\">(current)</span></button>\n          </li>\n\n        </ul>\n    </form>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_comments_comments_component__ = __webpack_require__("../../../../../src/app/pages/comments/comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_user_edit_page_user_edit_page_component__ = __webpack_require__("../../../../../src/app/pages/user-edit-page/user-edit-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_user_list_page_user_list_page_component__ = __webpack_require__("../../../../../src/app/pages/user-list-page/user-list-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_exchange_list_page_exchange_list_page_component__ = __webpack_require__("../../../../../src/app/pages/exchange-list-page/exchange-list-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_change_list_page_changeOk_list_page_component__ = __webpack_require__("../../../../../src/app/pages/change-list-page/changeOk-list-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_code_accept_page_code_accept_page_component__ = __webpack_require__("../../../../../src/app/pages/code-accept-page/code-accept-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_profile_page_profile_page_component__ = __webpack_require__("../../../../../src/app/pages/profile-page/profile-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_edit_profile_page_edit_profile_page_component__ = __webpack_require__("../../../../../src/app/pages/edit-profile-page/edit-profile-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_newGame_service__ = __webpack_require__("../../../../../src/app/services/newGame.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_sign_in_sign_in_page_component__ = __webpack_require__("../../../../../src/app/pages/sign-in/sign-in-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__common_auth_service__ = __webpack_require__("../../../../../src/app/common/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__common_app_data_service__ = __webpack_require__("../../../../../src/app/common/app-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_comments_service__ = __webpack_require__("../../../../../src/app/services/comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_register_page_register_page_component__ = __webpack_require__("../../../../../src/app/pages/register-page/register-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_content_games_content_games_component__ = __webpack_require__("../../../../../src/app/pages/content-games/content-games.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_comments_review_comments_review_component__ = __webpack_require__("../../../../../src/app/pages/comments-review/comments-review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_descriptionGame_service__ = __webpack_require__("../../../../../src/app/services/descriptionGame.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_23__pages_sign_in_sign_in_page_component__["a" /* SignInPageComponent */] },
    { path: 'searchGames', component: __WEBPACK_IMPORTED_MODULE_10__pages_searchGame_list_page_searchGame_list_page_component__["a" /* SearchGameListPageComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_28__pages_register_page_register_page_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_18__pages_profile_page_profile_page_component__["a" /* ProfilePageComponent */] },
    { path: 'editProfile', component: __WEBPACK_IMPORTED_MODULE_19__pages_edit_profile_page_edit_profile_page_component__["a" /* EditProfilePageComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_page_home_page_component__["a" /* HomePageComponent */] },
    {
        path: 'users', component: __WEBPACK_IMPORTED_MODULE_14__pages_user_list_page_user_list_page_component__["a" /* UserListPageComponent */],
    },
    {
        path: 'editUsers', component: __WEBPACK_IMPORTED_MODULE_13__pages_user_edit_page_user_edit_page_component__["a" /* UserEditPageComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_24__common_auth_service__["a" /* AuthService */]],
    },
    {
        path: 'searchGame', component: __WEBPACK_IMPORTED_MODULE_10__pages_searchGame_list_page_searchGame_list_page_component__["a" /* SearchGameListPageComponent */],
    },
    {
        path: 'listChanges', component: __WEBPACK_IMPORTED_MODULE_8__pages_change_list_page_change_list_page_component__["a" /* ChangeListPageComponent */],
    },
    {
        path: 'editChanges', component: __WEBPACK_IMPORTED_MODULE_9__pages_change_edit_page_change_edit_page_component__["a" /* ChangeEditPageComponent */],
    },
    {
        path: 'okChanges', component: __WEBPACK_IMPORTED_MODULE_16__pages_change_list_page_changeOk_list_page_component__["a" /* ChangeOkListPageComponent */],
    },
    {
        path: 'code', component: __WEBPACK_IMPORTED_MODULE_17__pages_code_accept_page_code_accept_page_component__["a" /* CodeAcceptPageComponent */],
    },
    {
        path: 'listexChanges', component: __WEBPACK_IMPORTED_MODULE_15__pages_exchange_list_page_exchange_list_page_component__["a" /* ExchangeListComponent */],
    },
    {
        path: 'contentGames', component: __WEBPACK_IMPORTED_MODULE_29__pages_content_games_content_games_component__["a" /* ContentGamesComponent */],
    },
    {
        path: 'comments', component: __WEBPACK_IMPORTED_MODULE_11__pages_comments_comments_component__["a" /* CommentsComponent */],
    },
    {
        path: 'commentsreview', component: __WEBPACK_IMPORTED_MODULE_30__pages_comments_review_comments_review_component__["a" /* CommentsReviewComponent */],
    },
    {
        path: '**', component: __WEBPACK_IMPORTED_MODULE_12__pages_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
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
            __WEBPACK_IMPORTED_MODULE_11__pages_comments_comments_component__["a" /* CommentsComponent */],
            __WEBPACK_IMPORTED_MODULE_30__pages_comments_review_comments_review_component__["a" /* CommentsReviewComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_23__pages_sign_in_sign_in_page_component__["a" /* SignInPageComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_user_edit_page_user_edit_page_component__["a" /* UserEditPageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pages_user_list_page_user_list_page_component__["a" /* UserListPageComponent */],
            __WEBPACK_IMPORTED_MODULE_28__pages_register_page_register_page_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pages_change_list_page_change_list_page_component__["a" /* ChangeListPageComponent */],
            __WEBPACK_IMPORTED_MODULE_15__pages_exchange_list_page_exchange_list_page_component__["a" /* ExchangeListComponent */],
            __WEBPACK_IMPORTED_MODULE_16__pages_change_list_page_changeOk_list_page_component__["a" /* ChangeOkListPageComponent */],
            __WEBPACK_IMPORTED_MODULE_17__pages_code_accept_page_code_accept_page_component__["a" /* CodeAcceptPageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pages_change_edit_page_change_edit_page_component__["a" /* ChangeEditPageComponent */],
            __WEBPACK_IMPORTED_MODULE_18__pages_profile_page_profile_page_component__["a" /* ProfilePageComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pages_edit_profile_page_edit_profile_page_component__["a" /* EditProfilePageComponent */],
            __WEBPACK_IMPORTED_MODULE_29__pages_content_games_content_games_component__["a" /* ContentGamesComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_20__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(ROUTES),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_22__angular_http__["c" /* HttpModule */]
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_5__common_config_initial_config__["a" /* INITIAL_CONFIG */],
                useValue: {
                    apiURL: 'http://localhost:8080'
                }
            },
            __WEBPACK_IMPORTED_MODULE_21__services_newGame_service__["a" /* NewGameService */],
            __WEBPACK_IMPORTED_MODULE_27__services_comments_service__["a" /* CommentsService */],
            __WEBPACK_IMPORTED_MODULE_24__common_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_25__common_app_data_service__["a" /* AppDataService */],
            __WEBPACK_IMPORTED_MODULE_26__services_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_31__services_descriptionGame_service__["a" /* DescriptionGameService */],
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
    function Change(id, nameGame, description, image, state, accept, user, datep) {
        this.id = id;
        this.nameGame = nameGame;
        this.description = description;
        this.image = image;
        this.state = state;
        this.accept = accept;
        this.user = user;
        this.datep = datep;
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
    function Comment(description, name) {
        this.description = description;
        this.name = name;
    }
    return Comment;
}());

//# sourceMappingURL=comment.js.map

/***/ }),

/***/ "../../../../../src/app/models/description.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescriptionGame; });
var DescriptionGame = (function () {
    function DescriptionGame(photo, name, description, price, storeGame, link) {
        this.photo = photo;
        this.name = name;
        this.description = description;
        this.price = price;
        this.storeGame = storeGame;
        this.link = link;
    }
    return DescriptionGame;
}());

//# sourceMappingURL=description.js.map

/***/ }),

/***/ "../../../../../src/app/models/exrequests.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Exrequests; });
var Exrequests = (function () {
    function Exrequests(id, userRq, change1Game, change1, change2) {
        this.id = id;
        this.userRq = userRq;
        this.change1Game = change1Game;
        this.change1 = change1;
        this.change2 = change2;
        this.state = "Pending";
    }
    return Exrequests;
}());

//# sourceMappingURL=exrequests.js.map

/***/ }),

/***/ "../../../../../src/app/models/newGame.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewGame; });
var NewGame = (function () {
    function NewGame(photo, name, description) {
        this.name = name;
        this.description = description;
        this.photo = photo;
    }
    return NewGame;
}());

//# sourceMappingURL=newGame.js.map

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
exports.push([module.i, ".container{\n    position: relative;\n    width: 350px;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    background-color: rgba(120, 120, 122, 0.788);\n    color: rgb(255, 255, 255);\n    padding: 80px 25px;\n    font-family: 'fantasy';\n    text-align: center;\n}\n\n#centerbrand{\n    position: relative;\n    width: 300px;\n    height: 100px;\n}\n\n#brand{\n    position: absolute;\n    width: 200px;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n}\n\n.btn-success{\n    background: rgb(255, 255, 255);\n    color: rgba(2, 44, 105, 0.788);\n    box-shadow: inset 0 0 0 3px rgba(168, 169, 172, 0.788);\n}\n\n#boton{\n    border: none;\n    content:'';\n    position: unset;\n    \n    \n    color: #ffffff;\n    height: 42px;\n    background: rgba(28, 28, 29, 0.788);\n    border-radius: 5px;\n    transition: all 2s ease;\n   }\n\n#boton:hover {\n    background: rgb(255, 255, 255);\n    color: rgba(2, 44, 105, 0.788);\n    box-shadow: inset 0 0 0 3px rgba(168, 169, 172, 0.788);\n   }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/change-edit-page/change-edit-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <br>\n    <div id=\"centerbrand\">\n        <img id=\"brand\"  src=\"/assets/images/videojuegos.jpeg\" width=\"170\" height=\"100\">\n        <h2 class=\"text-center\">Add Change</h2>\n    </div>\n    \n    <br>\n    <br>\n\n    <form [formGroup]=\"changeForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n\n        <div class=\"form-group\">\n            <label for=\"nameGame\">Name Game</label>\n            <input type=\"text\" class=\"form-control\" id=\"nameGame\" formControlName=\"nameGame\" required>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"description\">Description</label>\n            <input type=\"text\" class=\"form-control\" id=\"description\" formControlName=\"description\" required>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"image\">URL Image (Your Game)</label>\n            <input type=\"text\" class=\"form-control\" id=\"image\" formControlName=\"image\" required>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"state\">State Of The Game</label>    \n            <input type=\"radio\" name=\"state\" class=\"form-control\" id=\"state\" formControlName=\"state\" value=\"like New\"> Like New <br>\n            <input type=\"radio\" name=\"state\" class=\"form-control\" id=\"state\" formControlName=\"state\" value=\"very Good\" checked> Very Good <br>\n            <input type=\"radio\" name=\"state\" class=\"form-control\" id=\"state\" formControlName=\"state\" value=\"good\"> Good <br>\n            <input type=\"radio\" name=\"state\" class=\"form-control\" id=\"state\" formControlName=\"state\" value=\"regular\"> Regular <br>\n        </div>        \n        <div class=\"form-group\">\n            <label for=\"accept\">Terms and Conditions</label>\n            <input type=\"checkbox\" class=\"form-control\" id=\"accept\" formControlName=\"accept\" required> I accept the terms of service <br>\n        </div>\n\n        <br>\n\n        <button id=\"boton\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"!changeForm.valid\">Add Game</button>\n\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/change-edit-page/change-edit-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeEditPageComponent; });
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




var ChangeEditPageComponent = (function () {
    function ChangeEditPageComponent(usersService, formBuilder, router) {
        this.usersService = usersService;
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
        window.alert("Congratulations, You have successfully added a game!");
        this.usersService.createChange(this.changeForm.get('nameGame').value, this.changeForm.get('description').value, this.changeForm.get('image').value, this.changeForm.get('state').value, Boolean(this.changeForm.get('accept').value)).subscribe(function (serverResponse) {
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], ChangeEditPageComponent);

var _a, _b, _c;
//# sourceMappingURL=change-edit-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/change-list-page/change-list-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n    position: relative;\n    \n    -ms-flex-line-pack: center;\n    \n        align-content: center;\n    background-color: rgba(120, 120, 122, 0.788);\n    color: rgb(255, 255, 255);\n    padding: 80px 25px;\n    font-family: 'fantasy';\n    text-align: center;\n}\n\n#centerbrand{\n    position: relative;\n    width: 300px;\n    height: 100px;\n}\n\n#tabla{\n    position: relative;\n    \n    -ms-flex-line-pack: center;\n    \n        align-content: center;\n    background-color: rgba(0, 0, 0, 0.788);\n    color: rgb(255, 255, 255);\n    padding: 80px 25px;\n    font-family: 'fantasy';\n    text-align: center;\n}\n\n#tochange{\n    border: none;\n    content:'';\n    position: unset;\n    \n    \n    color: #ffffff;\n    height: 42px;\n    background: rgba(28, 28, 29, 0.788);\n    border-radius: 5px;\n    transition: all 2s ease;\n   }\n\n#tochange:hover {\n    background: rgb(0, 0, 0);\n    color: rgba(255, 255, 255, 0.788);\n    box-shadow: inset 0 0 0 3px rgba(168, 169, 172, 0.788);\n   }\n\n#forchange{\n    border: none;\n    content:'';\n    position: unset;\n    \n    \n    color: #000000;\n    height: 42px;\n    background: rgba(255, 255, 255, 0.788);\n    border-radius: 5px;\n    transition: all 2s ease;\n   }\n\n#forchange:hover {\n    background: rgb(0, 0, 0);\n    color: rgba(255, 255, 255, 0.788);\n    box-shadow: inset 0 0 0 3px rgba(168, 169, 172, 0.788);\n   }\n\n#newExc{\n    position: absolute;\n    top:  125px; \n    right:  75px;\n}\n\nh2{\n    position: absolute;\n    top:  125px; \n    left:  450px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/change-list-page/change-list-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div>\n    <div id=\"centerbrand\">\n        <img id=\"brand\"  src=\"/assets/images/videojuegos.jpeg\" width=\"170\" height=\"100\">\n        \n        \n    </div>\n    <div id=\"newExc\"> \n      <button (click)=\"newExchange($event)\" id=\"forchange\" type=\"submit\" class=\"btn btn-success\" value=\"{{change.user}},{{change.nameGame}},{{change.image}}\" >New Exchange</button>\n    </div>\n    <h2>My Exchanges</h2>\n    <br>\n    \n  </div>\n\n  <div>\n    <table id=\"tabla\" class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Date</th>\n        <th>Name Game</th>\n        <th>Description</th>\n        <th>Image</th>\n        <th>State</th>\n      </tr>\n    </thead>\n    <tr *ngFor=\"let change of changes\">\n      <td >{{change.datep | date:'dd-MM-yyyy'}}</td>\n      <td >{{change.nameGame}}</td>\n      <td >{{change.description}}</td>\n      <td ><img [src]=\"change.image\" width=\"150\" height=\"150\" /></td>\n      <td >{{change.state}}</td>\n    </tr>\n    </table>\n  </div>\n\n  <div>\n    <table id=\"tabla\" class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>User</th>\n        <th>Game to Change</th>\n        <th>Image</th>\n        <th>Your Game</th>\n        <th>State Request</th>\n      </tr>\n    </thead>\n    <tr *ngFor=\"let requests of listRequests\">\n      <td >{{requests.userRq}}</td>\n      <td >{{requests.change1Game}}</td>\n      <td ><img [src]=\"requests.change1\" width=\"150\" height=\"150\" /></td>\n      <td ><img [src]=\"requests.change2\" width=\"150\" height=\"150\" /></td>\n      <td >{{requests.state}}</td>\n      <td><button (click)=\"myEvent($event)\" id=\"tochange\" type=\"submit\" class=\"btn btn-success\" value=\"{{change.user}},{{change.nameGame}},{{change.image}}\" >Exchange</button></td>\n    </tr>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/change-list-page/change-list-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeListPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
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



var ChangeListPageComponent = (function () {
    function ChangeListPageComponent(usersService, router) {
        this.usersService = usersService;
        this.router = router;
        this.changes = [];
        this.listRequests = [];
    }
    ChangeListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService.listChanges().subscribe(function (userResponse) {
            _this.changes = userResponse;
        });
        this.usersService.listRequests().subscribe(function (userResponse) {
            _this.listRequests = userResponse;
        });
    };
    ChangeListPageComponent.prototype.newExchange = function (event) {
        this.router.navigate(['/editChanges']);
    };
    return ChangeListPageComponent;
}());
ChangeListPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-change-list-page',
        template: __webpack_require__("../../../../../src/app/pages/change-list-page/change-list-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/change-list-page/change-list-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ChangeListPageComponent);

var _a, _b;
//# sourceMappingURL=change-list-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/change-list-page/changeOk-list-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div>\n      <div id=\"centerbrand\">\n          <img id=\"brand\"  src=\"/assets/images/videojuegos.jpeg\" width=\"170\" height=\"100\">\n          \n          \n      </div>\n      <h2>Select Your Exchange</h2>\n      <br>\n      \n    </div>\n  \n    <div>\n      <table id=\"tabla\" class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>nameGame</th>\n          <th>description</th>\n          <th>image</th>\n          <th>Add</th>\n        </tr>\n      </thead>\n      <tr *ngFor=\"let change2 of changes2\">\n        <td>{{change2.nameGame}}</td>\n        <td>{{change2.description}}</td>\n        <td><img [src]=\"change2.image\" width=\"150\" height=\"150\" /></td>\n        <td><button (click)=\"myEvent($event)\" id=\"forchange\" type=\"submit\" class=\"btn btn-success\" value=\"{{change2.user}},{{change2.nameGame}},{{change2.image}}\" >Exchange</button></td>\n      </tr>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/change-list-page/changeOk-list-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeOkListPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
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
    function ChangeOkListPageComponent(usersService, router) {
        this.usersService = usersService;
        this.router = router;
        this.changes2 = [];
    }
    ChangeOkListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService.listChanges().subscribe(function (userResponse) {
            _this.changes2 = userResponse;
        });
    };
    ChangeOkListPageComponent.prototype.myEvent = function (event) {
        this.change1 = document.getElementById("forchange").value;
        sessionStorage.setItem("forchange", this.change1);
        this.request1 = sessionStorage.getItem("tochange").split(",");
        console.log(this.request1[0]);
        this.request2 = sessionStorage.getItem("forchange").split(",");
        console.log(this.request2[0]);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ChangeOkListPageComponent);

var _a, _b;
//# sourceMappingURL=changeOk-list-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/code-accept-page/code-accept-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n    position: relative;\n    \n    -ms-flex-line-pack: center;\n    \n        align-content: center;\n    background-color: rgba(120, 120, 122, 0.788);\n    color: rgb(255, 255, 255);\n    padding: 80px 25px;\n    font-family: 'fantasy';\n    text-align: center;\n}\n\nh2{\n    position: absolute;\n    top:  125px; \n    left:  450px;\n}\n\n#tochange{\n    border: none;\n    content:'';\n    position: absolute;\n    top:  300px; \n    right:  -130px;    \n    color: #ffffff;\n    height: 200px;\n    background: rgb(0, 0, 0);\n    border-radius: 5px;\n    transition: all 2s ease;\n   }\n\n#tochange:hover {\n    background: rgb(255, 255, 255);\n    color: rgba(0, 0, 0, 0.788);\n    box-shadow: inset 0 0 0 3px rgba(0, 0, 0, 0.788);\n}\n\n#tabla{\n    position: relative;\n    \n    -ms-flex-line-pack: center;\n    \n        align-content: center;\n    background-color: rgba(0, 0, 0, 0.788);\n    color: rgb(255, 255, 255);\n    padding: 80px 25px;\n    font-family: 'fantasy';\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/code-accept-page/code-accept-page.component.html":
/***/ (function(module, exports) {

module.exports = "\n<br>\n<div class=\"container\">\n    <p for=\"toChange\"><b>To change:</b></p>\n    <table id=\"tabla\" class=\"table table-bordered\">\n            <thead>\n                <tr>\n                <th>User</th>\n                <th>Name Game</th>\n                <th>image</th>\n                \n                </tr>\n            </thead>\n            <tr>\n                <td>{{request1[0]}}</td>\n                <td>{{request1[1]}}</td>\n                <td><img [src]=\"request1[2]\" width=\"75\" height=\"75\" /></td>\n                \n            </tr>\n        </table>\n</div>\n<br>\n\n<div class=\"container\">\n    <p for=\"toChange\"><b>For change:</b></p>\n    <table id=\"tabla\" class=\"table table-bordered\">\n        <thead>\n            <tr>\n            <th>User</th>\n            <th>Name Game</th>\n            <th>image</th>\n            \n            </tr>\n        </thead>\n        <tr>\n            <td>{{request2[0]}}</td>\n            <td>{{request2[1]}}</td>\n            <td><img [src]=\"request2[2]\" width=\"75\" height=\"75\" /></td>\n            \n        </tr>\n    </table>   \n</div>\n<br>\n<br>\n<button id=\"tochange\" (click)=\"acceptR($event)\" type=\"submit\">Accept</button>\n"

/***/ }),

/***/ "../../../../../src/app/pages/code-accept-page/code-accept-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeAcceptPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
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
    function CodeAcceptPageComponent(usersService, router) {
        this.usersService = usersService;
        this.router = router;
        this.description = "esto es una prueba";
    }
    CodeAcceptPageComponent.prototype.ngOnInit = function () {
        this.request1 = sessionStorage.getItem("tochange").split(",");
        console.log(this.request1[0]);
        this.request2 = sessionStorage.getItem("forchange").split(",");
        console.log(this.request2[0]);
    };
    CodeAcceptPageComponent.prototype.createExrequest = function () {
        console.log("se pulso boton *-*-*-*-*-*-*-*-*-*-*-");
        this.usersService.createExrequests(this.request1[0], this.request1[1], this.request1[2], this.request2[2]);
    };
    CodeAcceptPageComponent.prototype.acceptR = function (event) {
        this.createExrequest();
        this.router.navigate(['/listChanges']);
    };
    return CodeAcceptPageComponent;
}());
CodeAcceptPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-code-accept-page',
        template: __webpack_require__("../../../../../src/app/pages/code-accept-page/code-accept-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/code-accept-page/code-accept-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], CodeAcceptPageComponent);

var _a, _b;
//# sourceMappingURL=code-accept-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/comments-review/comments-review.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/comments-review/comments-review.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>COMMENTS</h2>\n<table class=\"table table-bordered\">\n    <thead>\n    <tr>\n        <th></th>\n        <th>Name</th>\n        <th>Comment</th>\n\n    </tr>\n    <tr *ngFor=\"let comments of comments\">\n\n        <td>{{comment.name}}</td>\n        <td>{{comment.description}}</td>\n\n\n    </tr>\n    </thead>\n\n</table>"

/***/ }),

/***/ "../../../../../src/app/pages/comments-review/comments-review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsReviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_comments_service__ = __webpack_require__("../../../../../src/app/services/comments.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentsReviewComponent = (function () {
    function CommentsReviewComponent(commentsService) {
        this.commentsService = commentsService;
        this.comments = [];
    }
    CommentsReviewComponent.prototype.ngOnInit = function () {
        this.comments = this.commentsService.list();
    };
    return CommentsReviewComponent;
}());
CommentsReviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-comments-review',
        template: __webpack_require__("../../../../../src/app/pages/comments-review/comments-review.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/comments-review/comments-review.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_comments_service__["a" /* CommentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_comments_service__["a" /* CommentsService */]) === "function" && _a || Object])
], CommentsReviewComponent);

var _a;
//# sourceMappingURL=comments-review.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/comments/comments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/comments/comments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Edit searchGame</h2>\n  <form [formGroup]=\"commentsForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n    <div class=\"form-group\">\n      <label for=\"description\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\" required>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"priority\">description</label>\n      <input type=\"text\" class=\"form-control\" id=\"description\" formControlName=\"description\">\n    </div>\n\n\n    <button type=\"submit\" class=\"btn btn-success\">Ok</button>\n    <button type=\"button\" class=\"btn btn-primary\" routerLinkActive=\"/commentsreview\" routerLink=\"/commentsreview\">review comments</button>\n\n\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/comments/comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_comments_service__ = __webpack_require__("../../../../../src/app/services/comments.service.ts");
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




var CommentsComponent = (function () {
    function CommentsComponent(commentsService, formBuilder, router) {
        this.commentsService = commentsService;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    CommentsComponent.prototype.ngOnInit = function () {
        this.commentsForm = this.formBuilder.group({
            name: '',
            description: '',
        });
    };
    CommentsComponent.prototype.onSubmit = function () {
        this.commentsService.create(this.commentsForm.get('name').value, this.commentsForm.get('description').value);
        this.router.navigate(['/commentsreview']);
    };
    return CommentsComponent;
}());
CommentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-comments',
        template: __webpack_require__("../../../../../src/app/pages/comments/comments.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/comments/comments.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_comments_service__["a" /* CommentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_comments_service__["a" /* CommentsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], CommentsComponent);

var _a, _b, _c;
//# sourceMappingURL=comments.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/content-games/content-games.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/content-games/content-games.component.html":
/***/ (function(module, exports) {

module.exports = "<script src=\"//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">  <h4 >MARIO BROS</h4></div>\n            <div class=\"panel-body\">\n                <div class=\"col-md-4 col-xs-12 col-sm-6 col-lg-4\">\n                    <img alt=\"User Pic\" src=\"https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/virtual_console_nintendo_3ds_7/SI_3DSVC_SuperMarioBros_image1600w.jpg\" id=\"profile-image1\" class=\"img-circle img-responsive\" width=\"200\" height=\"200\">\n\n\n                </div>\n\n                    <hr>\n                    <ul class=\"container details\" >\n\n                    </ul>\n                    <hr>\n                    <h2> </h2>\n                    <table class=\"table table-bordered\">\n                        <thead>\n                        <tr>\n                            <th></th>\n                            <th>Name</th>\n                            <th>Description</th>\n                            <th>Price</th>\n                            <th>StoreGame</th>\n                            <th>Link</th>\n\n                        </tr>\n                        \n                        </thead>\n                        <tr *ngFor=\"let DescriptionGame of DescriptionGames\">\n                            <td><img [src]=\"DescriptionGame.photo\" width=\"150\" height=\"150\" /></td>\n                            <td>{{DescriptionGame.name}}</td>\n                         <td>{{DescriptionGame.description}}</td>\n                         <td>{{DescriptionGame.price}}</td>\n                         <td>{{DescriptionGame.storeGame}}</td>\n                            <td><a href=\"https://{{DescriptionGame.link}}\">{{DescriptionGame.link}}</a></td>\n\n                     \n                       \n                        </tr>\n\n                    </table>\n                <button type=\"button\" class=\"btn btn-primary\" routerLinkActive=\"/comments\" routerLink=\"/comments\">Comments</button>\n\n    </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/content-games/content-games.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentGamesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_descriptionGame_service__ = __webpack_require__("../../../../../src/app/services/descriptionGame.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContentGamesComponent = (function () {
    function ContentGamesComponent(DescriptionGameService, formBuilder) {
        this.DescriptionGameService = DescriptionGameService;
        this.formBuilder = formBuilder;
        this.DescriptionGames = [];
    }
    ContentGamesComponent.prototype.ngOnInit = function () {
        this.DescriptionGames = this.DescriptionGameService.list();
        this.todoForm = this.formBuilder.group({
            name: "", completed: ''
        });
    };
    return ContentGamesComponent;
}());
ContentGamesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-content-games',
        template: __webpack_require__("../../../../../src/app/pages/content-games/content-games.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/content-games/content-games.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_descriptionGame_service__["a" /* DescriptionGameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_descriptionGame_service__["a" /* DescriptionGameService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object])
], ContentGamesComponent);

var _a, _b;
//# sourceMappingURL=content-games.component.js.map

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

module.exports = "<div class=\"container\">\n    <h1>Edit Profile</h1>\n    <hr>\n    <div class=\"row\">\n        <!-- left column -->\n        <div class=\"col-md-3\">\n            <div class=\"text-center\">\n                <img src=\"//placehold.it/100\" class=\"avatar img-circle\" alt=\"avatar\" width=\"200\" height=\"200\">\n                <h6>Upload a different photo...</h6>\n\n                <input type=\"file\" class=\"form-control\">\n            </div>\n        </div>\n\n        <!-- edit form column -->\n        <div class=\"col-md-9 personal-info\">\n\n            <h3>Personal info</h3>\n\n            <form class=\"form-horizontal\" role=\"form\">\n                <div class=\"form-group\">\n                    <label class=\"col-lg-3 control-label\">Email:</label>\n                    <div class=\"col-lg-8\">\n                        <input class=\"form-control\" type=\"text\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-lg-3 control-label\">First Name:</label>\n                    <div class=\"col-lg-8\">\n                        <input class=\"form-control\" type=\"text\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-lg-3 control-label\">Last Name:</label>\n                    <div class=\"col-lg-8\">\n                        <input class=\"form-control\" type=\"text\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-lg-3 control-label\">User Name:</label>\n                    <div class=\"col-lg-8\">\n                        <input class=\"form-control\" type=\"text\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-md-3 control-label\">Description:</label>\n                    <div class=\"col-md-8\">\n                        <input class=\"form-control\" type=\"text\">\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"col-md-3 control-label\"></label>\n                    <div class=\"col-md-8\">\n                        <input type=\"button\" class=\"btn btn-primary\" value=\"Save Changes\" routerLinkActive=\"/profile\" routerLink=\"/profile\">\n                        <span></span>\n                        <input type=\"reset\" class=\"btn btn-default\" value=\"Cancel\" routerLinkActive=\"/profile\" routerLink=\"/profile\">\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n<hr>"

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
exports.push([module.i, ".container{\n    position: relative;\n    \n    -ms-flex-line-pack: center;\n    \n        align-content: center;\n    background-color: rgba(120, 120, 122, 0.788);\n    color: rgb(255, 255, 255);\n    padding: 80px 25px;\n    font-family: 'fantasy';\n    text-align: center;\n}\n\n#centerbrand{\n    position: relative;\n    width: 300px;\n    height: 100px;\n}\n\n#tabla{\n    position: relative;\n    \n    -ms-flex-line-pack: center;\n    \n        align-content: center;\n    background-color: rgba(0, 0, 0, 0.788);\n    color: rgb(255, 255, 255);\n    padding: 80px 25px;\n    font-family: 'fantasy';\n    text-align: center;\n}\n\n#tochange{\n    border: none;\n    content:'';\n    position: unset;\n    \n    \n    color: #000000;\n    height: 42px;\n    background: rgba(255, 255, 255, 0.788);\n    border-radius: 5px;\n    transition: all 2s ease;\n   }\n\n#tochange:hover {\n    background: rgb(0, 0, 0);\n    color: rgba(255, 255, 255, 0.788);\n    box-shadow: inset 0 0 0 3px rgba(168, 169, 172, 0.788);\n}\n\n\nh2{\n    position: absolute;\n    top:  125px; \n    left:  450px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/exchange-list-page/exchange-list-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div>\n      <div id=\"centerbrand\">\n          <img id=\"brand\"  src=\"/assets/images/videojuegos.jpeg\" width=\"170\" height=\"100\">\n          \n          \n      </div>\n      <h2>All Exchanges</h2>\n      <br>\n      \n    </div>\n  \n  <div>\n    <table id=\"tabla\" class=\"table table-bordered\">\n    <thead>\n      <tr>\n          <th>User</th>\n        <th>Name Game</th>\n        <th>Description</th>\n        <th>Image</th>\n      </tr>\n    </thead>\n    <tr *ngFor=\"let change of exchanges\">\n        <td>{{change.user}}</td>\n        <td>{{change.nameGame}}</td>\n        <td>{{change.description}}</td>\n        <td><img [src]=\"change.image\" width=\"150\" height=\"150\" /></td>\n        <td><button (click)=\"myEvent($event)\" id=\"tochange\" type=\"submit\" class=\"btn btn-success\" value=\"{{change.user}},{{change.nameGame}},{{change.image}}\" >Exchange</button></td>\n    </tr>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/exchange-list-page/exchange-list-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangeListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
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
    function ExchangeListComponent(usersService, router) {
        this.usersService = usersService;
        this.router = router;
        this.exchanges = [];
    }
    ExchangeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService.listAllChanges().subscribe(function (userResponse) {
            _this.exchanges = userResponse;
        });
    };
    ExchangeListComponent.prototype.myEvent = function (event) {
        this.change1 = document.getElementById("tochange").value;
        sessionStorage.setItem("tochange", this.change1);
        this.change3 = sessionStorage.getItem("tochange").split(",");
        console.log(this.change3[0]);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ExchangeListComponent);

var _a, _b;
//# sourceMappingURL=exchange-list-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home-page/home-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nh2 {\n    font-size: 24px;\n    text-transform: uppercase;\n    color: #ffffff;\n    font-weight: 600;\n    margin-bottom: 30px;\n    font-family: 'fantasy';\n}\nh4 {\n    font-size: 19px;\n    line-height: 1.375em;\n    color: #ffffff;\n    font-weight: 400;\n    margin-bottom: 30px;\n    font-family: 'fantasy';\n}\n#encabezado {\n    \n    background-color: rgba(168, 169, 172, 0.788);\n    color: #fff;\n    padding: 100px 25px;\n    font-family: 'fantasy';\n    font-family: 'fantasy';\n    text-align: center;\n}\n\n#boton{\n    border: none;\n    content:'';\n    position: unset;\n    \n    \n    color: #ffffff;\n    height: 42px;\n    background: rgba(28, 28, 29, 0.788);\n    border-radius: 5px;\n    transition: all 2s ease;\n   }\n\n#boton:hover {\n    background: rgb(255, 255, 255);\n    color: rgba(2, 44, 105, 0.788);\n    box-shadow: inset 0 0 0 3px rgba(168, 169, 172, 0.788);\n   }\n\n#about{\n    top: 100px;\n    background-color: rgba(120, 120, 122, 0.788);\n    color: rgb(255, 255, 255);\n    padding: 80px 25px;\n    font-family: 'fantasy';\n    text-align: center;\n}\n\n#brand{\n    border: 4px solid black;\n}\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "\n<head>\n    <link href=\"https://fonts.googleapis.com/css?family=Montserrat\" rel=\"stylesheet\" type=\"text/css\">\n    <link href=\"https://fonts.googleapis.com/css?family=Lato\" rel=\"stylesheet\" type=\"text/css\">\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n</head>\n\n\n<div id=\"encabezado\">\n    <h1>Brother Games</h1>\n    <form>\n        <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" size=\"50\" placeholder=\"Search Game\" required>\n            <div class=\"input-group-btn\">\n                <button id=\"boton\" type=\"button\" class=\"btn btn-info\" routerLinkActive=\"/contentGames\" routerLink=\"/contentGames\">Search</button>\n            </div>\n        </div>\n    </form>\n</div>\n\n<div id=\"about\" class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-sm-8\">\n            <h2>About Brother Games </h2><br>\n            <h4>On this page you can search, consult and exchange the video games you want, in addition to consulting the prices of each of them in the different internet gaming platforms.</h4>\n            <br>\n            <h4>To be able to exchange a game you must first register to be able to log in and make the exchange</h4>\n         </div>\n        <div id=\"centerbrand\">\n            <img id=\"brand\"  src=\"/assets/images/videojuegos.jpeg\" width=\"250\" height=\"175\">\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
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

var HomePageComponent = (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home-page',
        template: __webpack_require__("../../../../../src/app/pages/home-page/home-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/home-page/home-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomePageComponent);

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

module.exports = "<p>\n  The page you were looking for was not found\n</p>\n<p>\n  <a routerLink=\"/\">Back to Home</a>\n</p>"

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

module.exports = "<script src=\"//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n\n\n<div class=\"container\">\n        <div>\n            <img src={{user.image}} width=\"250\" height=\"250\" />\n        </div>\n        <br>\n        <br>\n        <div>\n            <p for=\"firstname\"> <b>Name:</b></p>\n            <label id=\"firstname\">{{user.firstname}} {{user.lastname}}</label>\n        </div>\n\n        <div>\n            <p for=\"email\"><b>Email:</b></p>\n            <label id=\"email\">{{user.email}}</label>\n        </div>\n\n        <div>\n            <p for=\"username\"><b>Username:</b></p>\n            <label id=\"username\">{{user.username}}</label>\n        </div>\n\n        <div>\n            <p for=\"aboutYou\"><b>About me:</b></p>\n            <label id=\"aboutYou\">{{user.description}}</label>\n        </div>\n        <br>\n        <br>\n        <button type=\"button\" class=\"btn btn-primary\" routerLinkActive=\"/\" routerLink=\"/\">Accept</button>\n\n</div>\n"

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
        var data = sessionStorage.getItem("email");
        this.userService.getUser(data).subscribe(function (todosResponse) {
            _this.user = todosResponse;
            _this.router.navigate(['profile']);
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
exports.push([module.i, ".container{\n    position: relative;\n    width: 350px;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    background-color: rgba(120, 120, 122, 0.788);\n    color: rgb(255, 255, 255);\n    padding: 80px 25px;\n    font-family: 'fantasy';\n    text-align: center;\n}\n\n#centerbrand{\n    position: relative;\n    width: 300px;\n    height: 100px;\n}\n\n#brand{\n    position: absolute;\n    width: 200px;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n}\n\n.btn-success{\n    background: rgb(255, 255, 255);\n    color: rgba(2, 44, 105, 0.788);\n    box-shadow: inset 0 0 0 3px rgba(168, 169, 172, 0.788);\n}\n\n#boton{\n    border: none;\n    content:'';\n    position: unset;\n    \n    \n    color: #ffffff;\n    height: 42px;\n    background: rgba(28, 28, 29, 0.788);\n    border-radius: 5px;\n    transition: all 2s ease;\n   }\n\n#boton:hover {\n    background: rgb(255, 255, 255);\n    color: rgba(2, 44, 105, 0.788);\n    box-shadow: inset 0 0 0 3px rgba(168, 169, 172, 0.788);\n   }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/register-page/register-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <br>\n    <div id=\"centerbrand\">\n        <img id=\"brand\"  src=\"/assets/images/videojuegos.jpeg\" width=\"170\" height=\"100\">\n    </div>\n    <h2 class=\"text-center\">REGISTER TO BROTHERS GAMES</h2>\n    <br>\n    <br>\n\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n\n        <div class=\"form-group\">\n            <label for=\"description\">Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"firstname\" formControlName=\"firstname\" required>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"description\">Username</label>\n            <input type=\"text\" class=\"form-control\" id=\"username\" formControlName=\"username\" required>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"priority\">Email</label>\n            <input type=\"text\" class=\"form-control\" id=\"email\" formControlName=\"email\" required>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"priority\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\" required>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"priority\">Url image</label>\n            <input type=\"text\" class=\"form-control\" id=\"image\" formControlName=\"image\" required>\n        </div>        <div class=\"form-group\">\n            <label for=\"priority\">Description</label>\n            <input type=\"text\" class=\"form-control\" id=\"description\" formControlName=\"description\" required>\n        </div>\n        <br>\n        <button id=\"boton\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"!registerForm.valid\">REGISTER</button>\n\n    </form>\n</div>\n\n\n"

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
            firstname: '',
            username: '',
            email: '',
            password: '',
            image: '',
            description: ''
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.todoUser.registerUser(this.registerForm.get('firstname').value, this.registerForm.get('username').value, this.registerForm.get('email').value, this.registerForm.get('password').value, this.registerForm.get('image').value, this.registerForm.get('description').value).subscribe(function (serverResponse) {
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

module.exports = "<h2>5 OF THE BEST GAMES OF THE MONTH</h2>\n<table class=\"table table-bordered\">\n <thead>\n   <tr>\n       <th></th>\n       <th>Name</th>\n     <th>Description</th>\n   \n   </tr>\n   <tr *ngFor=\"let newGame of newGames\">\n       <td><img [src]=\"newGame.photo\" width=\"150\" height=\"150\" /></td>\n       <td>{{newGame.name}}</td>\n    <td>{{newGame.description}}</td>\n\n  \n   </tr>\n </thead>\n\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/pages/searchGame-list-page/searchGame-list-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchGameListPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_newGame_service__ = __webpack_require__("../../../../../src/app/services/newGame.service.ts");
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
    function SearchGameListPageComponent(newGameService) {
        this.newGameService = newGameService;
        this.newGames = [];
    }
    SearchGameListPageComponent.prototype.ngOnInit = function () {
        this.newGames = this.newGameService.list();
    };
    return SearchGameListPageComponent;
}());
SearchGameListPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-searchGame-list-page',
        template: __webpack_require__("../../../../../src/app/pages/searchGame-list-page/searchGame-list-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/searchGame-list-page/searchGame-list-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_newGame_service__["a" /* NewGameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_newGame_service__["a" /* NewGameService */]) === "function" && _a || Object])
], SearchGameListPageComponent);

var _a;
//# sourceMappingURL=searchGame-list-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/sign-in/sign-in-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n    position: relative;\n    width: 350px;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    background-color: rgba(120, 120, 122, 0.788);\n    color: rgb(255, 255, 255);\n    padding: 80px 25px;\n    font-family: 'fantasy';\n    text-align: center;\n}\n\n#centerbrand{\n    position: relative;\n    width: 300px;\n    height: 100px;\n}\n\n#brand{\n    position: absolute;\n    width: 200px;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n}\n\n.btn-success{\n    background: rgb(255, 255, 255);\n    color: rgba(2, 44, 105, 0.788);\n    box-shadow: inset 0 0 0 3px rgba(168, 169, 172, 0.788);\n}\n\n#boton{\n    border: none;\n    content: url(" + __webpack_require__("../../../../../src/app/pages/sign-in/sign.png") + ");\n    position: unset;   \n    color: #ffffff;\n    height: 42px;\n    background: rgba(28, 28, 29, 0.788);\n    border-radius: 5px;\n    transition: all 2s ease;\n    padding: 10px 35px;\n   }\n\n#boton:hover {\n    background: rgb(255, 255, 255);\n    color: rgba(2, 44, 105, 0.788);\n    box-shadow: inset 0 0 0 3px rgba(168, 169, 172, 0.788);\n    content:url(" + __webpack_require__("../../../../../src/app/pages/sign-in/sign.png") + ");\n    \n   }\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/sign-in/sign-in-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <div id=\"centerbrand\">\n\n    <img id=\"brand\"  src=\"/assets/images/videojuegos.jpeg\" width=\"170\" height=\"100\">\n  </div>\n\n  <h2 class=\"text-center\">SIGN IN BROTHERS GAMES</h2>\n  <br>\n  <br>\n  <form [formGroup]=\"signInForm\" (ngSubmit)=\"doLogin()\" novalidate>\n\n    <div class=\"form-group\">\n      <label  for=\"description\">Email</label>\n      <input type=\"text\" class=\"form-control\" id=\"email\" formControlName=\"email\" required>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"priority\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"alterEgo\" formControlName=\"password\" required>\n    </div>\n    <br>\n    <button id=\"boton\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"!signInForm.valid\">SIGN IN</button>\n \n\n    <p class=\"text-danger mt-1\" *ngIf=\"loginError\">{{loginError}}</p>\n  </form>\n</div>"

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
            sessionStorage.setItem("email", _this.signInForm.get('email').value);
            var data = _this.usersService.getUser(_this.signInForm.get('email').value);
            console.log(data + _this.signInForm.get("email").value);
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

/***/ "../../../../../src/app/pages/sign-in/sign.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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

module.exports = "<div class=\"container\">\n    <h2>Edit User</h2>\n    <form [formGroup]=\"todoForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n      <div class=\"form-group\">\n        <label for=\"firstname\">Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"firstname\" formControlName=\"firstname\" required>\n      </div>\n  \n      <div class=\"form-group\">\n        <label for=\"lastname\">LastName</label>\n        <input type=\"text\" class=\"form-control\" id=\"lastname\" formControlName=\"lastname\" required>\n      </div>\n  \n      <div class=\"form-group\">\n        <label for=\"image\">Url Image</label>\n        <input type=\"text\" class=\"form-control\" id=\"image\" formControlName=\"image\" required>\n      </div>\n  \n      <button type=\"submit\" class=\"btn btn-success\">Save</button>\n  \n    </form>\n  </div>"

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
            description: '',
            email: ''
        });
    };
    UserEditPageComponent.prototype.onSubmit = function () {
        var _this = this;
        this.todoUser.registerUser(this.todoForm.get('firstname').value, this.todoForm.get('lastname').value, this.todoForm.get('image').value, this.todoForm.get('username').value, this.todoForm.get('description').value, this.todoForm.get('email').value).subscribe(function (serverResponse) {
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

module.exports = "<h2>Users</h2>\n<table class=\"table table-bordered\">\n <thead>\n   <tr>\n     <th>Name</th>\n     <th>LastName</th>\n     <th>Image</th>\n   </tr>\n </thead>\n <tr *ngFor=\"let user of users\">\n   <td>{{user.firstname}}</td>\n   <td>{{user.lastname}}</td>\n   <td><img [src]=\"user.image\" width=\"150\" height=\"150\" /></td>\n </tr>\n</table>"

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

/***/ "../../../../../src/app/services/comments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_comment__ = __webpack_require__("../../../../../src/app/models/comment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentsService = (function () {
    function CommentsService() {
        this.comments = [
            new __WEBPACK_IMPORTED_MODULE_1__models_comment__["a" /* Comment */]('Johanita', 'Juego muy bueno'),
        ];
    }
    CommentsService.prototype.list = function () {
        return this.comments;
    };
    CommentsService.prototype.create = function (name, description) {
        this.comments.push(new __WEBPACK_IMPORTED_MODULE_1__models_comment__["a" /* Comment */](name, description));
    };
    return CommentsService;
}());
CommentsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CommentsService);

//# sourceMappingURL=comments.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/descriptionGame.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescriptionGameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_description__ = __webpack_require__("../../../../../src/app/models/description.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DescriptionGameService = (function () {
    function DescriptionGameService() {
        this.DescriptionGames = [
            new __WEBPACK_IMPORTED_MODULE_1__models_description__["a" /* DescriptionGame */]('https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/virtual_console_nintendo_3ds_7/SI_3DSVC_SuperMarioBros_image1600w.jpg', 'Mario Bros', 'Diseñada bajo la premisa de una buena relación calidad precio, Nintendo 2DS es perfecta como primera consola y permite jugar los títulos más populares de Nintendo 3DS en 2D. Con Nintendo 2DS podrás disfrutar de juegos, aplicaciones y funciones increíbles que te permitirán conectar con amigos y con la comunidad global de Nintendo.', '$359.900 ', 'GameStory', 'www.Nintendo.com'),
            new __WEBPACK_IMPORTED_MODULE_1__models_description__["a" /* DescriptionGame */]('assets/images/mario.jpg', 'Mario Bros', 'The announcement sent Nintendo d expect. But fans hoping for iOS versions of early Super Mario Bros and Zelda games, or even ports of N64-era classics, should park those expectations, as Ninty will be working on new games from the ground up, tailored to pocket-sized touchscreen devices', '$500 000 ', 'TiendaOnline', 'listado.mercadolibre.com.mx/juegos-de-mario-bros-gratis'),
        ];
    }
    DescriptionGameService.prototype.list = function () {
        return this.DescriptionGames;
    };
    DescriptionGameService.prototype.create = function (photo, name, description, price, storeGame, link) {
        this.DescriptionGames.push(new __WEBPACK_IMPORTED_MODULE_1__models_description__["a" /* DescriptionGame */](photo, name, description, price, storeGame, link));
    };
    return DescriptionGameService;
}());
DescriptionGameService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DescriptionGameService);

//# sourceMappingURL=descriptionGame.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/newGame.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewGameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_newGame__ = __webpack_require__("../../../../../src/app/models/newGame.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewGameService = (function () {
    function NewGameService() {
        this.newGames = [
            new __WEBPACK_IMPORTED_MODULE_1__models_newGame__["a" /* NewGame */]('/assets/images/need.jpg ', 'Need for Speed', ' It is a franchise of video game of racing action created by Electronic Arts and currently developed by Ghost Games.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_newGame__["a" /* NewGame */]('/assets/images/w.jpg ', 'Warcraft: Orcs & Humans', 'Is a strategy video game created by Blizzard Entertainment for PC. It is one of the first games of the real-time strategy or RTS genre . Warcraft: Orcs & Humans starts the Warcraft series and takes place in a medieval epic environment where humans from the mythical kingdom of Azeroth confront the invading orcs among other fantastic creatures .'),
            new __WEBPACK_IMPORTED_MODULE_1__models_newGame__["a" /* NewGame */]('/assets/images/world.jpg ', 'League of Legends', 'Is a competitive online game with a frenetic rhythm that fuses the speed and intensity of the real-time strategy (ETR) with elements of role-playing games. Two teams of powerful champions, one with a unique design and style of games, compete with the face through various battlefields and game modes. With an ever-expanding roster of champions, frequent updates and an exciting competitive landscape, League of Legends offers unlimited gaming possibilities for all skill levels.'),
            new __WEBPACK_IMPORTED_MODULE_1__models_newGame__["a" /* NewGame */]('/assets/images/sea.jpg ', 'Sea of Thieves', ' Sea of ​​Thieves is a first-person video game developed by Rare and distributed by Microsoft. It will go on sale in 2018 for Xbox One'),
            new __WEBPACK_IMPORTED_MODULE_1__models_newGame__["a" /* NewGame */]('/assets/images/mario.jpg ', 'Super Mario Bros.', 'Is a platform video game, designed by Shigeru Miyamoto, released on September 13, 1985 and produced by the company Nintendo, for the Nintendo Entertainment System (NES). The game describes the adventures of brothers Mario and Luigi, characters who already starred in the arcade Mario Bros. of 1983. This time both must rescue Princess Peach Mushroom Kingdom who was kidnapped by the King of the Koopas, Bowser.')
        ];
    }
    NewGameService.prototype.list = function () {
        return this.newGames;
    };
    NewGameService.prototype.create = function (name, description, photo) {
        this.newGames.push(new __WEBPACK_IMPORTED_MODULE_1__models_newGame__["a" /* NewGame */](name, description, photo));
    };
    return NewGameService;
}());
NewGameService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], NewGameService);

//# sourceMappingURL=newGame.service.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_change__ = __webpack_require__("../../../../../src/app/models/change.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_exrequests__ = __webpack_require__("../../../../../src/app/models/exrequests.ts");
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
        _this.cont = 0;
        _this.contr = 0;
        _this.changes = [];
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
    UsersService.prototype.registerUser = function (firstname, username, email, password, image, description) {
        return this.post('user/', { firstname: firstname, username: username, email: email, password: password, image: image, description: description }).map(function (loginResponse) {
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
    UsersService.prototype.listChanges = function () {
        return this.get('user/changes/' + sessionStorage.getItem("email"));
    };
    UsersService.prototype.createChange = function (value0, value1, value2, value3, bool) {
        this.cont += 1;
        var Currentdates = new Date();
        return this.post('user/changes/' + sessionStorage.getItem("email"), new __WEBPACK_IMPORTED_MODULE_7__models_change__["a" /* Change */](this.cont, value0, value1, value2, value3, bool, sessionStorage.getItem("email"), Currentdates));
    };
    UsersService.prototype.listAllChanges = function () {
        return this.get('user/exchanges/' + sessionStorage.getItem("email"));
    };
    UsersService.prototype.createExrequests = function (userRq, change1Game, change1, change2) {
        console.log("" + userRq + change1Game + change1 + change2 + "Entro hacer request ************************");
        this.contr += 1;
        return this.post('user/exrequests/' + sessionStorage.getItem("email"), new __WEBPACK_IMPORTED_MODULE_8__models_exrequests__["a" /* Exrequests */](this.contr, userRq, change1Game, change1, change2));
    };
    UsersService.prototype.listRequests = function () {
        return this.get('user/exrequests/' + sessionStorage.getItem("email"));
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