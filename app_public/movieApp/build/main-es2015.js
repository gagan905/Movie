(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>About Us</h2>\n<p>\n  Movies, also known as films, are a type of visual communication which uses moving pictures and sound to tell stories or teach people something. People in every part of the world watch movies as a type of entertainment, a way to have fun. For some people, fun movies can mean movies that make them laugh, while for others it can mean movies that make them cry, or feel afraid.\n\n  Most movies are made so that they can be shown on big screens at movie theatres and at home. After movies are shown on movie screens for a period of weeks or months, they may be marketed through several other media. They are shown on pay television or cable television, and sold or rented on DVD disks or videocassette tapes, so that people can watch the movies at home. You can also download or stream movies. Older movies are shown on television broadcasting stations.\n\n  The Simple English Wiktionary has a definition for: movie.\n  A movie camera or video camera takes pictures very quickly, usually at 24 or 25 pictures (frames) every second. When a movie projector, a computer, or a television shows the pictures at that rate, it looks like the things shown in the set of pictures are really moving. Sound is either recorded at the same time, or added later. The sounds in a movie usually include the sounds of people talking (which is called dialogue), music (which is called the \"soundtrack\"), and sound effects, the sounds of activities that are happening in the movie (such as doors opening or guns being fired). In the 20th century the camera used photographic film. The product is still often called a \"film\" even though there usually is no film.e do it in a friendly, trusting and open manner that brings out the best in people. We are a risk-taking, questioning company that continually challenges accepted values, methods and goals, while always searching for innovative ways to conduct our business Taunton remains a family business built on the core values of Integrity, Teamwork, Excellence, Independent Thinking, and Creativity – the values on which Paul and Jan Roman founded our company.\n</p>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/create/create.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create/create.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"createNewMovie(newMovie)\">\n<br/>\n  <h3>Movie Form</h3>\n  <label for=\"name\">Name</label>\n  <input class=\"form-control\" [(ngModel)] = \"newMovie.name\" id=\"name\" name=\"name\" required=\"required\">\n\n  <label for=\"type\">Type</label>\n  <input class=\"form-control\" [(ngModel)]=\"newMovie.type\" id=\"type\" name=\"type\" required=\"required\">\n\n  <label for=\"director\">Director</label>\n  <input class=\"form-control\" [(ngModel)]=\"newMovie.director\" id=\"director\" name=\"director\" required=\"required\">\n\n  <label for=\"year\">Year</label>\n  <input class=\"form-control\" [(ngModel)]=\"newMovie.year\" id=\"year\" name=\"year\" required=\"required\">\n\n  <label for=\"description\">Description</label>\n  <input class=\"form-control\" [(ngModel)]=\"newMovie.description\" id=\"description\" name=\"description\" required=\"required\">\n\n  <label for=\"rating\">Rating</label>\n  <input class=\"form-control\" [(ngModel)]=\"newMovie.rating\" id=\"rating\" name=\"rating\" required=\"required\">\n  <br/>\n  <button class=\"btn btn-success\" type=\"submit\">Create</button>\n\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/details-page/details-page.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/details-page/details-page.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\" style=\"margin-top: 60px;\">\n  <div class=\"offset-md-3 col-md-3\">\n    <h1>\n      Name : {{newMovie.name}}\n\n    </h1>\n    <h3>\n      Type: {{newMovie.types}}\n    </h3>\n    <h3>\n      Ratings: {{newMovie.Rating}}\n\n    </h3>\n    <br/>\n    <div class=\"col-md-3 btn btn-success\" routerLink=\"/update/{{newMovie._id}}\">Update</div>\n    <div class=\"offset-md-1 col-md-3 btn btn-success\" (click)=\"deleteMovie(newMovie._id)\">Delete</div>\n  </div>\n  <div class=\"col-md-6\">\n    <img class=\"movieImg\" src='assets/images/{{newMovie.name}}.jpg'/>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/framework/framework.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/framework/framework.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"\">Movie World</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"about\">About</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"create\">Create</a>\n      </li>\n\n    </ul>\n  </div>\n</nav>\n<div class=\"mainContainer\">\n<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 style=\"text-align: center\">{{content.title}}</h1>\n<p>{{content.body}}</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home-list/home-list.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home-list/home-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" >\n  <div class=\"col-md-4\" *ngFor=\"let movie of movies\" style=\"padding: 10px\">\n    <a routerLink=\"/movie/{{movie._id}}\">\n    <img class=\"movieImg\" src='assets/images/{{movie.name}}.jpg'/>\n    </a>\n    <p> Name : {{movie.name}} </p>\n    <p>\n      Type : {{movie.type}}\n    </p>\n    <p>\n      Director : {{movie.director}}\n    </p>\n    <p>\n      Year : {{movie.year}}\n    </p>\n    <p>\n      Description : {{movie.description}}\n    </p>\n    <p>\n\n      Ratings : {{movie.rating}}\n    </p>\n<div class=\"offset-md-1 col-md-3 btn btn-success\" routerLink=\"/movie/{{movie._id}}\">View</div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/homepage/homepage.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/homepage/homepage.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header [content]=\"pageContent.header\"></app-header>\n<app-home-list></app-home-list>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/update/update.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/update/update.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"updateRecipe(newMovie)\">\n  <br/>\n  <h3>Movie Form</h3>\n  <label for=\"name\">Name</label>\n  <input class=\"form-control\" [(ngModel)] = \"newMovie.name\" id=\"name\" name=\"name\" required=\"required\">\n\n  <label for=\"type\">Type</label>\n  <input class=\"form-control\" [(ngModel)]=\"newMovie.type\" id=\"type\" name=\"type\" required=\"required\">\n\n  label for=\"director\">Director</label>\n  <input class=\"form-control\" [(ngModel)]=\"newMovie.rating\" id=\"director\" name=\"director\" required=\"required\">\n\n  label for=\"year\">Year</label>\n  <input class=\"form-control\" [(ngModel)]=\"newMovie.year\" id=\"year\" name=\"year\" required=\"required\">\n\n  label for=\"description\">Description</label>\n  <input class=\"form-control\" [(ngModel)]=\"newMovie.description\" id=\"description\" name=\"description\" required=\"required\">\n\n  <label for=\"rating\">Rating</label>\n  <input class=\"form-control\" [(ngModel)]=\"newMovie.rating\" id=\"rating\" name=\"rating\" required=\"required\">\n  <br/>\n  <button class=\"btn btn-success\" type=\"submit\">Update</button>\n\n</form>\n"

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
    })
], AboutComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _home_list_home_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-list/home-list.component */ "./src/app/home-list/home-list.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _framework_framework_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./framework/framework.component */ "./src/app/framework/framework.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./details-page/details-page.component */ "./src/app/details-page/details-page.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./update/update.component */ "./src/app/update/update.component.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _home_list_home_list_component__WEBPACK_IMPORTED_MODULE_7__["HomeListComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
            _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
            _framework_framework_component__WEBPACK_IMPORTED_MODULE_11__["FrameworkComponent"],
            _create_create_component__WEBPACK_IMPORTED_MODULE_12__["CreateComponent"],
            _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_13__["DetailsPageComponent"],
            _update_update_component__WEBPACK_IMPORTED_MODULE_14__["UpdateComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                {
                    path: '',
                    component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"]
                },
                {
                    path: 'about',
                    component: _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"]
                },
                {
                    path: 'create',
                    component: _create_create_component__WEBPACK_IMPORTED_MODULE_12__["CreateComponent"]
                }, {
                    path: 'movie/:movieid',
                    component: _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_13__["DetailsPageComponent"]
                },
                {
                    path: 'update/:movieid',
                    component: _update_update_component__WEBPACK_IMPORTED_MODULE_14__["UpdateComponent"]
                },
                {
                    path: 'delete/:movieid',
                    component: _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_13__["DetailsPageComponent"]
                }
            ])
        ],
        providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["APP_BASE_HREF"], useValue: '/' }],
        bootstrap: [_framework_framework_component__WEBPACK_IMPORTED_MODULE_11__["FrameworkComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/create/create.component.css":
/*!*********************************************!*\
  !*** ./src/app/create/create.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/create/create.component.ts":
/*!********************************************!*\
  !*** ./src/app/create/create.component.ts ***!
  \********************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CreateComponent = class CreateComponent {
    constructor(movieService, router) {
        this.movieService = movieService;
        this.router = router;
        this.newMovie = {
            _id: '',
            name: '',
            type: '',
            director: '',
            year: '',
            description: '',
            rating: ''
        };
    }
    ngOnInit() {
    }
    createNewMovie(newMovie) {
        this.movieService.createMovie(newMovie);
        this.router.navigate(['']);
    }
};
CreateComponent.ctorParameters = () => [
    { type: _movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create',
        template: __webpack_require__(/*! raw-loader!./create.component.html */ "./node_modules/raw-loader/index.js!./src/app/create/create.component.html"),
        providers: [_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]],
        styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/create/create.component.css")]
    })
], CreateComponent);



/***/ }),

/***/ "./src/app/details-page/details-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/details-page/details-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMtcGFnZS9kZXRhaWxzLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/details-page/details-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/details-page/details-page.component.ts ***!
  \********************************************************/
/*! exports provided: DetailsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageComponent", function() { return DetailsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let DetailsPageComponent = class DetailsPageComponent {
    constructor(movieService, route, router) {
        this.movieService = movieService;
        this.route = route;
        this.router = router;
        this.pageContent = {
            header: {
                title: '',
                body: ''
            }
        };
    }
    ngOnInit() {
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((params) => {
            return this.movieService.getSingleMovie(params['movieid']);
        }))
            .subscribe((newMovie) => {
            this.newMovie = newMovie;
            this.pageContent.header.title = newMovie.name;
            this.pageContent.header.body = "details for selected movie";
        });
    }
    deleteMovie(movieid) {
        this.movieService.deleteMovie(movieid);
        this.router.navigate(['']);
    }
};
DetailsPageComponent.ctorParameters = () => [
    { type: _movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DetailsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details-page',
        template: __webpack_require__(/*! raw-loader!./details-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/details-page/details-page.component.html"),
        providers: [_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"]],
        styles: [__webpack_require__(/*! ./details-page.component.css */ "./src/app/details-page/details-page.component.css")]
    })
], DetailsPageComponent);



/***/ }),

/***/ "./src/app/framework/framework.component.css":
/*!***************************************************!*\
  !*** ./src/app/framework/framework.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZyYW1ld29yay9mcmFtZXdvcmsuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/framework/framework.component.ts":
/*!**************************************************!*\
  !*** ./src/app/framework/framework.component.ts ***!
  \**************************************************/
/*! exports provided: FrameworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameworkComponent", function() { return FrameworkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FrameworkComponent = class FrameworkComponent {
    constructor() { }
    ngOnInit() {
    }
};
FrameworkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-framework',
        template: __webpack_require__(/*! raw-loader!./framework.component.html */ "./node_modules/raw-loader/index.js!./src/app/framework/framework.component.html"),
        styles: [__webpack_require__(/*! ./framework.component.css */ "./src/app/framework/framework.component.css")]
    })
], FrameworkComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HeaderComponent.prototype, "content", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home-list/home-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-list/home-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtbGlzdC9ob21lLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/home-list/home-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-list/home-list.component.ts ***!
  \**************************************************/
/*! exports provided: HomeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeListComponent", function() { return HomeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");



let HomeListComponent = class HomeListComponent {
    constructor(movieService) {
        this.movieService = movieService;
    }
    ngOnInit() {
        this.movieService
            .getMovie()
            .then((movies) => {
            this.movies = movies.map(movie => {
                return movie;
            });
        });
    }
};
HomeListComponent.ctorParameters = () => [
    { type: _movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] }
];
HomeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-list',
        template: __webpack_require__(/*! raw-loader!./home-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/home-list/home-list.component.html"),
        providers: [_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]],
        styles: [__webpack_require__(/*! ./home-list.component.css */ "./src/app/home-list/home-list.component.css")]
    })
], HomeListComponent);



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomepageComponent = class HomepageComponent {
    constructor() {
        this.pageContent = {
            header: {
                title: "My Movie List",
                body: ""
            }
        };
    }
    ngOnInit() {
    }
};
HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homepage',
        template: __webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/index.js!./src/app/homepage/homepage.component.html"),
        styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
    })
], HomepageComponent);



/***/ }),

/***/ "./src/app/movie.service.ts":
/*!**********************************!*\
  !*** ./src/app/movie.service.ts ***!
  \**********************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");



let MovieService = class MovieService {
    constructor(http) {
        this.http = http;
        this.movieUrl = 'http://localhost:3000/api/movies';
    }
    getMovie() {
        return this.http.get(this.movieUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getSingleMovie(movieid) {
        return this.http.get(this.movieUrl + '/' + movieid)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    createMovie(newMovie) {
        return this.http.post(this.movieUrl, newMovie)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    updateMovie(newMovie) {
        var putUrl = this.movieUrl + '/' + newMovie._id;
        return this.http.put(putUrl, newMovie)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    deleteMovie(movieid) {
        return this.http.delete(this.movieUrl + '/' + movieid)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    handleError(error) {
        console.log("error");
    }
};
MovieService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MovieService);



/***/ }),

/***/ "./src/app/update/update.component.css":
/*!*********************************************!*\
  !*** ./src/app/update/update.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/update/update.component.ts":
/*!********************************************!*\
  !*** ./src/app/update/update.component.ts ***!
  \********************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let UpdateComponent = class UpdateComponent {
    constructor(movieService, route, router) {
        this.movieService = movieService;
        this.route = route;
        this.router = router;
        this.pageContent = {
            header: {
                title: '',
                body: ''
            }
        };
    }
    ngOnInit() {
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((params) => {
            return this.movieService.getSingleMovie(params['movieid']);
        }))
            .subscribe((newMovie) => {
            this.newMovie = newMovie;
            this.pageContent.header.title = newMovie.name;
            this.pageContent.header.body = "details for selected movie";
        });
    }
    updateMovie(newMovie) {
        this.movieService.updateMovie(newMovie);
        this.router.navigate(['']);
    }
};
UpdateComponent.ctorParameters = () => [
    { type: _movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update',
        template: __webpack_require__(/*! raw-loader!./update.component.html */ "./node_modules/raw-loader/index.js!./src/app/update/update.component.html"),
        styles: [__webpack_require__(/*! ./update.component.css */ "./src/app/update/update.component.css")]
    })
], UpdateComponent);



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Maftab9567\Downloads\Movie\app_public\movieApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map