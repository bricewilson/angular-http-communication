webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-book/add-book.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-5\">\n  <div class=\"well bs-component\">\n    <form #addBookForm=\"ngForm\" (ngSubmit)=\"saveBook(addBookForm.value)\" class=\"form-horizontal\">\n      <fieldset>\n        <legend>Add New Book</legend>\n        <div class=\"form-group\">\n          <label for=\"inputTitle\" class=\"col-lg-3 control-label\">Title</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" id=\"inputTitle\" placeholder=\"Title\" name=\"title\" ngModel>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputAuthor\" class=\"col-lg-3 control-label\">Author</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" id=\"inputAuthor\" placeholder=\"Author\" name=\"author\" ngModel>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputYear\" class=\"col-lg-3 control-label\">Year</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" id=\"inputYear\" placeholder=\"Year Published\" name=\"publicationYear\" ngModel>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-lg-8 col-lg-offset-3\">\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/add-book/add-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddBookComponent = (function () {
    function AddBookComponent() {
    }
    AddBookComponent.prototype.ngOnInit = function () { };
    AddBookComponent.prototype.saveBook = function (formValues) {
        var newBook = formValues;
        newBook.bookID = 0;
        console.log(newBook);
        console.warn('Save new book not yet implemented.');
    };
    AddBookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-book',
            template: __webpack_require__("../../../../../src/app/add-book/add-book.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], AddBookComponent);
    return AddBookComponent;
}());



/***/ }),

/***/ "../../../../../src/app/add-reader/add-reader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-5\">\n  <div class=\"well bs-component\">\n    <form #addReaderForm=\"ngForm\" (ngSubmit)=\"saveReader(addReaderForm.value)\" class=\"form-horizontal\">\n      <fieldset>\n        <legend>Add Reader</legend>\n        <div class=\"form-group\">\n          <label for=\"inputGoal\" class=\"col-lg-3 control-label\">Name</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" id=\"inputGoal\" placeholder=\"Name\" name=\"name\" ngModel>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputGoal\" class=\"col-lg-3 control-label\">Weekly Goal</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" id=\"inputGoal\" placeholder=\"Weekly Goal\" name=\"weeklyReadingGoal\" ngModel>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputTotal\" class=\"col-lg-3 control-label\">Total Read</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" id=\"inputTotal\" placeholder=\"Total Minutes Read\" name=\"totalMinutesRead\" ngModel>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-lg-10 col-lg-offset-3\">\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/add-reader/add-reader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddReaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddReaderComponent = (function () {
    function AddReaderComponent() {
    }
    AddReaderComponent.prototype.ngOnInit = function () { };
    AddReaderComponent.prototype.saveReader = function (formValues) {
        var newReader = formValues;
        newReader.readerID = 0;
        console.log(newReader);
        console.warn('Save new reader not yet implemented.');
    };
    AddReaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-reader',
            template: __webpack_require__("../../../../../src/app/add-reader/add-reader.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], AddReaderComponent);
    return AddReaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_add_book_add_book_component__ = __webpack_require__("../../../../../src/app/add-book/add-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_add_reader_add_reader_component__ = __webpack_require__("../../../../../src/app/add-reader/add-reader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_edit_book_edit_book_component__ = __webpack_require__("../../../../../src/app/edit-book/edit-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_edit_reader_edit_reader_component__ = __webpack_require__("../../../../../src/app/edit-reader/edit-reader.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4_app_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'addbook', component: __WEBPACK_IMPORTED_MODULE_2_app_add_book_add_book_component__["a" /* AddBookComponent */] },
    { path: 'addreader', component: __WEBPACK_IMPORTED_MODULE_3_app_add_reader_add_reader_component__["a" /* AddReaderComponent */] },
    { path: 'editreader/:id', component: __WEBPACK_IMPORTED_MODULE_6_app_edit_reader_edit_reader_component__["a" /* EditReaderComponent */] },
    { path: 'editbook/:id', component: __WEBPACK_IMPORTED_MODULE_5_app_edit_book_edit_book_component__["a" /* EditBookComponent */] },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" [routerLink]=\"['/dashboard']\">Book Tracker</a>\n        </div>\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n                <li><a [routerLink]=\"['/addbook']\">Add Book<span class=\"sr-only\">(current)</span></a></li>\n                <li><a [routerLink]=\"['/addreader']\">Add Reader</a></li>\n            </ul>\n        </div><!-- /.navbar-collapse -->\n    </div><!-- /.container-fluid -->\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_book_add_book_component__ = __webpack_require__("../../../../../src/app/add-book/add-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_reader_add_reader_component__ = __webpack_require__("../../../../../src/app/add-reader/add-reader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__edit_book_edit_book_component__ = __webpack_require__("../../../../../src/app/edit-book/edit-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__edit_reader_edit_reader_component__ = __webpack_require__("../../../../../src/app/edit-reader/edit-reader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_3__add_book_add_book_component__["a" /* AddBookComponent */],
                __WEBPACK_IMPORTED_MODULE_9__edit_reader_edit_reader_component__["a" /* EditReaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__edit_book_edit_book_component__["a" /* EditBookComponent */],
                __WEBPACK_IMPORTED_MODULE_4__add_reader_add_reader_component__["a" /* AddReaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__core_core_module__["a" /* CoreModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/book-tracker-error-handler.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookTrackerErrorHandlerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_models_bookTrackerError__ = __webpack_require__("../../../../../src/app/models/bookTrackerError.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookTrackerErrorHandlerService = (function () {
    function BookTrackerErrorHandlerService() {
    }
    BookTrackerErrorHandlerService.prototype.handleError = function (error) {
        var customError = new __WEBPACK_IMPORTED_MODULE_1_app_models_bookTrackerError__["a" /* BookTrackerError */]();
        customError.errorNumber = 200;
        customError.message = error.message;
        customError.friendlyMessage = 'An error occurred. Please try again.';
        console.log(customError);
    };
    BookTrackerErrorHandlerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BookTrackerErrorHandlerService);
    return BookTrackerErrorHandlerService;
}());



/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logger_service__ = __webpack_require__("../../../../../src/app/core/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/core/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_core_module_import_guard__ = __webpack_require__("../../../../../src/app/core/module-import-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__book_tracker_error_handler_service__ = __webpack_require__("../../../../../src/app/core/book-tracker-error-handler.service.ts");
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






var CoreModule = (function () {
    function CoreModule(parentModule) {
        Object(__WEBPACK_IMPORTED_MODULE_4_app_core_module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, 'CoreModule');
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__logger_service__["a" /* LoggerService */],
                __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5__book_tracker_error_handler_service__["a" /* BookTrackerErrorHandlerService */] }
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* SkipSelf */])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_data__ = __webpack_require__("../../../../../src/app/data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logger_service__ = __webpack_require__("../../../../../src/app/core/logger.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(loggerService) {
        this.loggerService = loggerService;
        this.mostPopularBook = __WEBPACK_IMPORTED_MODULE_1_app_data__["a" /* allBooks */][0];
    }
    DataService.prototype.setMostPopularBook = function (popularBook) {
        this.mostPopularBook = popularBook;
    };
    DataService.prototype.getAllReaders = function () {
        return __WEBPACK_IMPORTED_MODULE_1_app_data__["b" /* allReaders */];
    };
    DataService.prototype.getReaderById = function (id) {
        return __WEBPACK_IMPORTED_MODULE_1_app_data__["b" /* allReaders */].find(function (reader) { return reader.readerID === id; });
    };
    DataService.prototype.getAllBooks = function () {
        return __WEBPACK_IMPORTED_MODULE_1_app_data__["a" /* allBooks */];
    };
    DataService.prototype.getBookById = function (id) {
        return __WEBPACK_IMPORTED_MODULE_1_app_data__["a" /* allBooks */].find(function (book) { return book.bookID === id; });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__logger_service__["a" /* LoggerService */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/core/logger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoggerService = (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function (message) {
        var timeString = new Date().toLocaleTimeString();
        console.log(message + " (" + timeString + ")");
    };
    LoggerService.prototype.error = function (message) {
        console.error("ERROR: " + message);
    };
    LoggerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "../../../../../src/app/core/module-import-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throwIfAlreadyLoaded;
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">All Books</h3>\n        </div>\n        <div class=\"panel-body\">\n        <li *ngFor='let book of allBooks'>\n          <i>{{book.title}}</i>\n          <a [routerLink]=\"['/editbook', book.bookID]\">Edit</a>\n          <a (click)=\"deleteBook(book.bookID)\">Delete</a>\n        </li>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">All Readers</h3>\n        </div>\n        <div class=\"panel-body\">\n        <li *ngFor='let reader of allReaders'>\n          {{reader.name}}\n          <a [routerLink]=\"['/editreader', reader.readerID]\">Edit</a>\n          <a (click)=\"deleteReader(reader.readerID)\">Delete</a>\n        </li>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Most Popular Book</h3>\n        </div>\n        <div class=\"panel-body\">\n          <i>{{mostPopularBook.title}}</i> by {{mostPopularBook.author}}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_core_data_service__ = __webpack_require__("../../../../../src/app/core/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(dataService, title) {
        this.dataService = dataService;
        this.title = title;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.allBooks = this.dataService.getAllBooks();
        this.allReaders = this.dataService.getAllReaders();
        this.mostPopularBook = this.dataService.mostPopularBook;
        this.title.setTitle("Book Tracker " + __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* VERSION */].full);
    };
    DashboardComponent.prototype.deleteBook = function (bookID) {
        console.warn("Delete book not yet implemented (bookID: " + bookID + ").");
    };
    DashboardComponent.prototype.deleteReader = function (readerID) {
        console.warn("Delete reader not yet implemented (readerID: " + readerID + ").");
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_core_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return allReaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return allBooks; });
var allReaders = [
    { readerID: 1, name: 'Marie', weeklyReadingGoal: 400, totalMinutesRead: 5600 },
    { readerID: 2, name: 'Daniel', weeklyReadingGoal: 210, totalMinutesRead: 3000 },
    { readerID: 3, name: 'Lanier', weeklyReadingGoal: 140, totalMinutesRead: 600 }
];
var allBooks = [
    { bookID: 1, title: 'Goodnight Moon', author: 'Margaret Wise Brown', publicationYear: 1953 },
    { bookID: 2, title: 'Winnie-the-Pooh', author: 'A. A. Milne', publicationYear: 1926 },
    { bookID: 3, title: 'Where the Wild Things Are', author: 'Maurice Sendak', publicationYear: 1963 },
    { bookID: 4, title: 'The Hobbit', author: 'J. R. R. Tolkien', publicationYear: 1937 },
    { bookID: 5, title: 'Curious George', author: 'H. A. Rey', publicationYear: 1941 },
    { bookID: 6, title: 'Alice\'s Adventures in Wonderland', author: 'Lewis Carroll', publicationYear: 1865 },
];


/***/ }),

/***/ "../../../../../src/app/edit-book/edit-book.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-5\">\n  <div class=\"well bs-component\">\n    <form class=\"form-horizontal\">\n      <fieldset>\n        <legend>Edit Book</legend>\n        <div class=\"form-group\">\n          <label for=\"inputTitle\" class=\"col-lg-3 control-label\">Title</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" id=\"inputTitle\" placeholder=\"Title\" [(ngModel)]=\"selectedBook.title\" name=\"title\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputAuthor\" class=\"col-lg-3 control-label\">Author</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" id=\"inputAuthor\" placeholder=\"Author\" [(ngModel)]=\"selectedBook.author\" name=\"author\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputYear\" class=\"col-lg-3 control-label\">Year</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" id=\"inputYear\" placeholder=\"Year Published\" [(ngModel)]=\"selectedBook.publicationYear\" name=\"publicationYear\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-lg-8 col-lg-offset-3\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveChanges()\">Save</button>\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"setMostPopular()\">Set As Most Popular</button>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/edit-book/edit-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_core_data_service__ = __webpack_require__("../../../../../src/app/core/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditBookComponent = (function () {
    function EditBookComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    EditBookComponent.prototype.ngOnInit = function () {
        var bookID = parseInt(this.route.snapshot.params['id']);
        this.selectedBook = this.dataService.getBookById(bookID);
    };
    EditBookComponent.prototype.setMostPopular = function () {
        this.dataService.setMostPopularBook(this.selectedBook);
    };
    EditBookComponent.prototype.saveChanges = function () {
        console.warn('Save changes to book not yet implemented.');
    };
    EditBookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-book',
            template: __webpack_require__("../../../../../src/app/edit-book/edit-book.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2_app_core_data_service__["a" /* DataService */]])
    ], EditBookComponent);
    return EditBookComponent;
}());



/***/ }),

/***/ "../../../../../src/app/edit-reader/edit-reader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-5\">\n  <div class=\"well bs-component\">\n    <form class=\"form-horizontal\">\n      <fieldset>\n        <legend>Edit Reader</legend>\n        <div class=\"form-group\">\n          <label for=\"inputGoal\" class=\"col-lg-3 control-label\">Name</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" id=\"inputGoal\" placeholder=\"Name\" [(ngModel)]=\"selectedReader.name\" name=\"name\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputGoal\" class=\"col-lg-3 control-label\">Weekly Goal</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" id=\"inputGoal\" placeholder=\"Weekly Goal\" [(ngModel)]=\"selectedReader.weeklyReadingGoal\" name=\"weeklyReaddingGoal\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputTotal\" class=\"col-lg-3 control-label\">Total Read</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" id=\"inputTotal\" placeholder=\"Total Minutes Read\" [(ngModel)]=\"selectedReader.totalMinutesRead\" name=\"totalMinutesRead\">\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"inputTotal\" class=\"col-lg-3 control-label\">Current Badge</label>\n          <div class=\"col-lg-8\">\n            {{ currentBadge }}\n          </div>\n        </div>\n\n\n        <div class=\"form-group\">\n          <div class=\"col-lg-10 col-lg-offset-3\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveChanges()\">Save</button>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/edit-reader/edit-reader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditReaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_core_data_service__ = __webpack_require__("../../../../../src/app/core/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_badge_service__ = __webpack_require__("../../../../../src/app/services/badge.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditReaderComponent = (function () {
    function EditReaderComponent(route, dataService, badgeService) {
        this.route = route;
        this.dataService = dataService;
        this.badgeService = badgeService;
    }
    EditReaderComponent.prototype.ngOnInit = function () {
        var readerID = parseInt(this.route.snapshot.params['id']);
        this.selectedReader = this.dataService.getReaderById(readerID);
        this.currentBadge = this.badgeService.getReaderBadge(this.selectedReader.totalMinutesRead);
    };
    EditReaderComponent.prototype.saveChanges = function () {
        console.warn('Save reader not yet implemented.');
    };
    EditReaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-reader',
            template: __webpack_require__("../../../../../src/app/edit-reader/edit-reader.component.html"),
            styles: [],
            providers: [__WEBPACK_IMPORTED_MODULE_3_app_services_badge_service__["a" /* BadgeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2_app_core_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3_app_services_badge_service__["a" /* BadgeService */]])
    ], EditReaderComponent);
    return EditReaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/bookTrackerError.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookTrackerError; });
var BookTrackerError = (function () {
    function BookTrackerError() {
    }
    return BookTrackerError;
}());



/***/ }),

/***/ "../../../../../src/app/services/badge.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadgeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BadgeService = (function () {
    function BadgeService() {
    }
    BadgeService.prototype.getReaderBadge = function (minutesRead) {
        if (minutesRead > 5000) {
            return 'Book Worm';
        }
        else if (minutesRead > 2500) {
            return 'Page Turner';
        }
        else {
            return 'Getting Started';
        }
    };
    BadgeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BadgeService);
    return BadgeService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map