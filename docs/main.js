(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Pruebas Laborales\Sempre\eshop\src\main.ts */"zUnb");


/***/ }),

/***/ "12lw":
/*!***************************************************************!*\
  !*** ./src/app/core/pages/detail-item/detail-item.service.ts ***!
  \***************************************************************/
/*! exports provided: DetailProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailProductService", function() { return DetailProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");



class DetailProductService {
    constructor(db) {
        this.db = db;
        this.dbPath = '/products';
        this.productsRef = null;
        this.productsRef = db.collection(this.dbPath);
    }
    getProduct() {
        return this.productsRef;
    }
}
DetailProductService.ɵfac = function DetailProductService_Factory(t) { return new (t || DetailProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
DetailProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DetailProductService, factory: DetailProductService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "33Se":
/*!************************************************************************!*\
  !*** ./src/app/core/components/color-option/color-option.component.ts ***!
  \************************************************************************/
/*! exports provided: ColorOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorOptionComponent", function() { return ColorOptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { "option-select": a0 }; };
function ColorOptionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorOptionComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectColorOption(item_r1.idColor); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, item_r1 == null ? null : item_r1.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
} }
class ColorOptionComponent {
    constructor() {
        this.GetExtraPrice = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        const colorOptionsTemp = this.colorOptions.map((color) => color);
        this.colorSelected = colorOptionsTemp.map((color, i) => {
            let isSelected = false;
            if (i === 0) {
                isSelected = true;
            }
            return Object.assign(Object.assign({}, color), { isSelected });
        });
    }
    selectColorOption(id) {
        this.colorSelected = this.colorSelected.map(color => {
            color.isSelected = false;
            if (color.idColor === id) {
                this.extraPrice = color.colorPrice;
                color.isSelected = true;
            }
            return color;
        });
    }
}
ColorOptionComponent.ɵfac = function ColorOptionComponent_Factory(t) { return new (t || ColorOptionComponent)(); };
ColorOptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColorOptionComponent, selectors: [["color-option"]], inputs: { colorOptions: "colorOptions" }, outputs: { GetExtraPrice: "GetExtraPrice" }, decls: 2, vars: 1, consts: [[1, "col-12", "d-flex", "flex-xl-row", "flex-lg-row", "flex-md-row", "flex-column", "justify-content-between", "p-0"], ["class", "option-selection d-flex flex-column justify-content-center px-3", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "option-selection", "d-flex", "flex-column", "justify-content-center", "px-3", 3, "ngClass", "click"], [1, "color-primary"], [1, "color-dark-gray"]], template: function ColorOptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColorOptionComponent_div_1_Template, 5, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colorSelected);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9jb2xvci1vcHRpb24vY29sb3Itb3B0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorOptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'color-option',
                templateUrl: './color-option.component.html',
                styleUrls: ['./color-option.component.scss']
            }]
    }], function () { return []; }, { colorOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], GetExtraPrice: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "AytR":
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
    production: false,
    firebase: {
        apiKey: 'AIzaSyDkYERxW4pSXHj3Zfa9RJNtcS9qqMzZ7N4',
        authDomain: 'eshop-db810.firebaseapp.com',
        databaseURL: 'https://eshop-db810.firebaseio.com',
        projectId: 'eshop-db810',
        storageBucket: 'eshop-db810.appspot.com',
        messagingSenderId: '389195982283',
        appId: '1:389195982283:web:8694121bfdc186267a824e',
        measurementId: 'G-2ST90PK40K'
    }
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

/***/ "GYaX":
/*!******************************************************************************!*\
  !*** ./src/app/core/components/warranty-option/warranty-option.component.ts ***!
  \******************************************************************************/
/*! exports provided: WarrantyOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarrantyOptionComponent", function() { return WarrantyOptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function WarrantyOptionComponent_div_0_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+ $", item_r1.priceWarranty, "");
} }
const _c0 = function (a0) { return { "option-select": a0 }; };
function WarrantyOptionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WarrantyOptionComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.selectWarrantyOption(item_r1.idWarranty); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WarrantyOptionComponent_div_0_p_8_Template, 2, 1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, item_r1 == null ? null : item_r1.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.priceWarranty);
} }
class WarrantyOptionComponent {
    constructor() {
        this.GetExtraPrice = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        const warrantyOptionsTemp = this.warrantyOptions.map((warranty) => warranty);
        this.warrantySelected = warrantyOptionsTemp.map((warranty, i) => {
            let isSelected = false;
            if (i === 0) {
                isSelected = true;
            }
            return Object.assign(Object.assign({}, warranty), { isSelected });
        });
    }
    selectWarrantyOption(id) {
        this.warrantySelected = this.warrantySelected.map(warranty => {
            warranty.isSelected = false;
            if (warranty.idWarranty === id) {
                this.extraPrice = warranty.priceWarranty;
                warranty.isSelected = true;
                this.onGetExtraPrice();
            }
            return warranty;
        });
    }
    onGetExtraPrice() {
        this.GetExtraPrice.emit({ extraPrice: this.extraPrice, name: 'warranty' });
    }
}
WarrantyOptionComponent.ɵfac = function WarrantyOptionComponent_Factory(t) { return new (t || WarrantyOptionComponent)(); };
WarrantyOptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WarrantyOptionComponent, selectors: [["warranty-option"]], inputs: { warrantyOptions: "warrantyOptions" }, outputs: { GetExtraPrice: "GetExtraPrice" }, decls: 1, vars: 1, consts: [["class", "option-selection d-flex flex-column justify-content-center w-100", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "option-selection", "d-flex", "flex-column", "justify-content-center", "w-100", 3, "ngClass", "click"], [1, "d-flex", "justify-content-between"], [1, "col-10", "p-0"], [1, "color-primary"], [1, "color-dark-gray", "m-0"], [1, "col-2", "p-0", "d-flex", "align-items-center", "justify-content-end"], ["class", "color-primary m-0", 4, "ngIf"], [1, "color-primary", "m-0"]], template: function WarrantyOptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WarrantyOptionComponent_div_0_Template, 9, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.warrantySelected);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy93YXJyYW50eS1vcHRpb24vd2FycmFudHktb3B0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WarrantyOptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'warranty-option',
                templateUrl: './warranty-option.component.html',
                styleUrls: ['./warranty-option.component.scss']
            }]
    }], function () { return []; }, { warrantyOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], GetExtraPrice: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "LwL6":
/*!*********************************************************************************!*\
  !*** ./src/app/core/components/specification/specification-option.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SpecificationOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecificationOptionComponent", function() { return SpecificationOptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function SpecificationOptionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", item_r1.description, " ");
} }
class SpecificationOptionComponent {
    constructor() {
    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    }
}
SpecificationOptionComponent.ɵfac = function SpecificationOptionComponent_Factory(t) { return new (t || SpecificationOptionComponent)(); };
SpecificationOptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpecificationOptionComponent, selectors: [["specification-option"]], inputs: { specification: "specification" }, decls: 1, vars: 1, consts: [["class", "specification d-flex justify-content-between w-100", 4, "ngFor", "ngForOf"], [1, "specification", "d-flex", "justify-content-between", "w-100"], [1, "color-primary", "m-0"], [1, "color-primary", "m-0", "text-right"]], template: function SpecificationOptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpecificationOptionComponent_div_0_Template, 5, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.specification);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9zcGVjaWZpY2F0aW9uL3NwZWNpZmljYXRpb24tb3B0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpecificationOptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'specification-option',
                templateUrl: './specification-option.component.html',
                styleUrls: ['./specification-option.component.scss']
            }]
    }], function () { return []; }, { specification: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Mqg2":
/*!****************************************************************************!*\
  !*** ./src/app/core/components/feature-option/feature-option.component.ts ***!
  \****************************************************************************/
/*! exports provided: FeatureOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureOptionComponent", function() { return FeatureOptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function FeatureOptionComponent_div_0_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+ $", item_r1.priceFeature, "");
} }
const _c0 = function (a0) { return { "option-select": a0 }; };
function FeatureOptionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeatureOptionComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.selectFeatureOption(item_r1.idFeatures); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FeatureOptionComponent_div_0_p_6_Template, 2, 1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, item_r1 == null ? null : item_r1.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.priceFeature);
} }
class FeatureOptionComponent {
    constructor() {
        this.GetExtraPrice = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        const featuresOptionsTemp = this.featuresOptions.map((features) => features);
        this.featuresSelected = featuresOptionsTemp.map((features, i) => {
            let isSelected = false;
            if (i === 0) {
                isSelected = true;
            }
            return Object.assign(Object.assign({}, features), { isSelected });
        });
    }
    selectFeatureOption(id) {
        this.featuresSelected = this.featuresSelected.map(features => {
            features.isSelected = false;
            if (features.idFeatures === id) {
                this.extraPrice = features.priceFeature;
                features.isSelected = true;
                this.onGetExtraPrice();
            }
            return features;
        });
    }
    onGetExtraPrice() {
        this.GetExtraPrice.emit({ extraPrice: this.extraPrice, name: 'features' });
    }
}
FeatureOptionComponent.ɵfac = function FeatureOptionComponent_Factory(t) { return new (t || FeatureOptionComponent)(); };
FeatureOptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeatureOptionComponent, selectors: [["feature-option"]], inputs: { featuresOptions: "featuresOptions" }, outputs: { GetExtraPrice: "GetExtraPrice" }, decls: 1, vars: 1, consts: [["class", "option-selection d-flex flex-column justify-content-center w-100", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "option-selection", "d-flex", "flex-column", "justify-content-center", "w-100", 3, "ngClass", "click"], [1, "d-flex", "justify-content-between"], [1, "col-10", "p-0"], [1, "color-primary", "m-0"], [1, "col-2", "p-0", "d-flex", "align-items-center", "justify-content-end"], ["class", "color-primary m-0", 4, "ngIf"]], template: function FeatureOptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FeatureOptionComponent_div_0_Template, 7, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.featuresSelected);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9mZWF0dXJlLW9wdGlvbi9mZWF0dXJlLW9wdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeatureOptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'feature-option',
                templateUrl: './feature-option.component.html',
                styleUrls: ['./feature-option.component.scss']
            }]
    }], function () { return []; }, { featuresOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], GetExtraPrice: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "OOyK":
/*!************************************************************!*\
  !*** ./src/app/core/components/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeaderComponent {
    constructor() {
    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["header"]], decls: 3, vars: 0, consts: [[1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "d-flex", "flex-column", "align-items-center", "pt-1"], ["src", "./assets/img/serempreLogo.png"], [1, "w-100"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/components/header/header.component */ "OOyK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'eshop';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [["id", "container-main", 1, "col-12", "h-100", "fade-in"], [1, "col-12", "h-100"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_core_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _core_shared_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/shared/index.component */ "ZFIm");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _core_shared_service_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/shared/service.component */ "boe8");
/* harmony import */ var _core_pages_detail_item_detail_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/pages/detail-item/detail-item.component */ "qeaV");
/* harmony import */ var _core_components_img_carousel_img_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/components/img-carousel/img-carousel.component */ "kDB7");
/* harmony import */ var _core_components_specification_feature_specification_feature_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/components/specification-feature/specification-feature.component */ "v3vI");
/* harmony import */ var _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/components/header/header.component */ "OOyK");
/* harmony import */ var _core_components_color_option_color_option_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/components/color-option/color-option.component */ "33Se");
/* harmony import */ var _core_components_warranty_option_warranty_option_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/components/warranty-option/warranty-option.component */ "GYaX");
/* harmony import */ var _core_components_feature_option_feature_option_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/components/feature-option/feature-option.component */ "Mqg2");
/* harmony import */ var _core_components_specification_specification_option_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/components/specification/specification-option.component */ "LwL6");
/* harmony import */ var _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/components/footer/footer.component */ "x0xU");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        [..._core_shared_service_component__WEBPACK_IMPORTED_MODULE_9__["SERVICES"]]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabaseModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _core_pages_detail_item_detail_item_component__WEBPACK_IMPORTED_MODULE_10__["DetailItemComponent"], _core_components_img_carousel_img_carousel_component__WEBPACK_IMPORTED_MODULE_11__["ImgCarouselComponent"], _core_components_specification_feature_specification_feature_component__WEBPACK_IMPORTED_MODULE_12__["SpecificationFeatureComponent"], _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"], _core_components_color_option_color_option_component__WEBPACK_IMPORTED_MODULE_14__["ColorOptionComponent"], _core_components_warranty_option_warranty_option_component__WEBPACK_IMPORTED_MODULE_15__["WarrantyOptionComponent"], _core_components_feature_option_feature_option_component__WEBPACK_IMPORTED_MODULE_16__["FeatureOptionComponent"], _core_components_specification_specification_option_component__WEBPACK_IMPORTED_MODULE_17__["SpecificationOptionComponent"], _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabaseModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    [..._core_shared_index_component__WEBPACK_IMPORTED_MODULE_5__["CONTAINERS"]]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase),
                    _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabaseModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ],
                providers: [
                    [..._core_shared_service_component__WEBPACK_IMPORTED_MODULE_9__["SERVICES"]]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZFIm":
/*!************************************************!*\
  !*** ./src/app/core/shared/index.component.ts ***!
  \************************************************/
/*! exports provided: CONTAINERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTAINERS", function() { return CONTAINERS; });
/* harmony import */ var _components_color_option_color_option_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/color-option/color-option.component */ "33Se");
/* harmony import */ var _components_feature_option_feature_option_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/feature-option/feature-option.component */ "Mqg2");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer/footer.component */ "x0xU");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header/header.component */ "OOyK");
/* harmony import */ var _components_img_carousel_img_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/img-carousel/img-carousel.component */ "kDB7");
/* harmony import */ var _components_specification_feature_specification_feature_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/specification-feature/specification-feature.component */ "v3vI");
/* harmony import */ var _components_specification_specification_option_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/specification/specification-option.component */ "LwL6");
/* harmony import */ var _components_warranty_option_warranty_option_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/warranty-option/warranty-option.component */ "GYaX");
/* harmony import */ var _pages_detail_item_detail_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/detail-item/detail-item.component */ "qeaV");









const CONTAINERS = [
    _pages_detail_item_detail_item_component__WEBPACK_IMPORTED_MODULE_8__["DetailItemComponent"],
    _components_img_carousel_img_carousel_component__WEBPACK_IMPORTED_MODULE_4__["ImgCarouselComponent"],
    _components_specification_feature_specification_feature_component__WEBPACK_IMPORTED_MODULE_5__["SpecificationFeatureComponent"],
    _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
    _components_color_option_color_option_component__WEBPACK_IMPORTED_MODULE_0__["ColorOptionComponent"],
    _components_warranty_option_warranty_option_component__WEBPACK_IMPORTED_MODULE_7__["WarrantyOptionComponent"],
    _components_feature_option_feature_option_component__WEBPACK_IMPORTED_MODULE_1__["FeatureOptionComponent"],
    _components_specification_specification_option_component__WEBPACK_IMPORTED_MODULE_6__["SpecificationOptionComponent"],
    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]
];


/***/ }),

/***/ "boe8":
/*!**************************************************!*\
  !*** ./src/app/core/shared/service.component.ts ***!
  \**************************************************/
/*! exports provided: SERVICES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICES", function() { return SERVICES; });
/* harmony import */ var _pages_detail_item_detail_item_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/detail-item/detail-item.service */ "12lw");

const SERVICES = [
    _pages_detail_item_detail_item_service__WEBPACK_IMPORTED_MODULE_0__["DetailProductService"]
];


/***/ }),

/***/ "kDB7":
/*!************************************************************************!*\
  !*** ./src/app/core/components/img-carousel/img-carousel.component.ts ***!
  \************************************************************************/
/*! exports provided: ImgCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgCarouselComponent", function() { return ImgCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { "option-select": a0 }; };
function ImgCarouselComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImgCarouselComponent_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectImg(item_r1.idPhoto); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r1 == null ? null : item_r1.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.urlPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ImgCarouselComponent {
    constructor() {
    }
    onKeydownHandlerLeft(event) {
        const photoTemp = this.urlPathsSelection.filter(photo => photo.isSelected);
        const i = this.urlPathsSelection.length;
        (photoTemp[0].idPhoto === 1) ? this.selectImg((i)) : this.selectImg((photoTemp[0].idPhoto - 1));
    }
    onKeydownHandlerRight(event) {
        const photoTemp = this.urlPathsSelection.filter(photo => photo.isSelected);
        const i = this.urlPathsSelection.length;
        (photoTemp[0].idPhoto === (i)) ? this.selectImg(1) : this.selectImg((photoTemp[0].idPhoto + 1));
    }
    ngOnInit() {
        const urlPathsTemp = this.urlPaths.map((photo) => photo);
        this.urlPathsSelection = urlPathsTemp.map((photo, i) => {
            let isSelected = false;
            if (i === 0) {
                this.urlPreview = photo.urlPath;
                isSelected = true;
            }
            return Object.assign(Object.assign({}, photo), { isSelected });
        });
    }
    selectImg(id) {
        this.urlPathsSelection = this.urlPathsSelection.map(photo => {
            photo.isSelected = false;
            if (photo.idPhoto === id) {
                this.urlPreview = photo.urlPath;
                photo.isSelected = true;
            }
            return photo;
        });
    }
}
ImgCarouselComponent.ɵfac = function ImgCarouselComponent_Factory(t) { return new (t || ImgCarouselComponent)(); };
ImgCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImgCarouselComponent, selectors: [["img-carousel"]], hostBindings: function ImgCarouselComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.ArrowLeft", function ImgCarouselComponent_keydown_ArrowLeft_HostBindingHandler($event) { return ctx.onKeydownHandlerLeft($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keydown.ArrowRight", function ImgCarouselComponent_keydown_ArrowRight_HostBindingHandler($event) { return ctx.onKeydownHandlerRight($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { urlPaths: "urlPaths" }, decls: 6, vars: 2, consts: [[1, "row", "m-0"], [1, "product-container-preview", "overflow-hidden", "d-flex", "justify-content-center", "bg-white", "col-12", "p-0"], ["alt", "photo preview", 1, "img-preview", "p-0", 3, "src"], [1, "col-12", "d-flex", "justify-content-between", "p-0"], ["class", "d-flex justify-content-between p-0", 3, "click", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "p-0", 3, "click"], [1, "product-container", "overflow-hidden", "d-flex", "justify-content-center", "bg-white", "col-12", 3, "ngClass"], ["alt", "photo", 1, "img-options", 3, "src"]], template: function ImgCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ImgCarouselComponent_div_5_Template, 3, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.urlPreview, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.urlPathsSelection);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9pbWctY2Fyb3VzZWwvaW1nLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImgCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'img-carousel',
                templateUrl: './img-carousel.component.html',
                styleUrls: ['./img-carousel.component.scss']
            }]
    }], function () { return []; }, { onKeydownHandlerLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keydown.ArrowLeft', ['$event']]
        }], onKeydownHandlerRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keydown.ArrowRight', ['$event']]
        }], urlPaths: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "qeaV":
/*!*****************************************************************!*\
  !*** ./src/app/core/pages/detail-item/detail-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: DetailItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailItemComponent", function() { return DetailItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _detail_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-item.service */ "12lw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/footer/footer.component */ "x0xU");
/* harmony import */ var _components_img_carousel_img_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/img-carousel/img-carousel.component */ "kDB7");
/* harmony import */ var _components_specification_feature_specification_feature_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/specification-feature/specification-feature.component */ "v3vI");
/* harmony import */ var _components_color_option_color_option_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/color-option/color-option.component */ "33Se");
/* harmony import */ var _components_warranty_option_warranty_option_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/warranty-option/warranty-option.component */ "GYaX");
/* harmony import */ var _components_feature_option_feature_option_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/feature-option/feature-option.component */ "Mqg2");
/* harmony import */ var _components_specification_specification_option_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/specification/specification-option.component */ "LwL6");












function DetailItemComponent_img_carousel_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img-carousel", 12);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("urlPaths", ctx_r0.urlPaths);
} }
function DetailItemComponent_specification_feature_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "specification-feature", 13);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("specificationFeatureItem", ctx_r1.specificationFeatures);
} }
function DetailItemComponent_div_8_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NEW RELEASE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "active-tab color-primary": a0, "color-dark-gray": a1 }; };
function DetailItemComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailItemComponent_div_8_p_1_Template, 2, 0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "STARTING AT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailItemComponent_div_8_Template_p_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.selectReadSpecification("overview"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailItemComponent_div_8_Template_p_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.selectReadSpecification("feature"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Features");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailItemComponent_div_8_Template_p_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.selectReadSpecification("box"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "What\u00B4s in the box?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Choose your finish");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "color-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Would you like to add extended warranty coverage?.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "warranty-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("GetExtraPrice", function DetailItemComponent_div_8_Template_warranty_option_GetExtraPrice_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.getExtraPrice($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Features");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "feature-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("GetExtraPrice", function DetailItemComponent_div_8_Template_feature_option_GetExtraPrice_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.getExtraPrice($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Specifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "specification-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.product.new);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.product.nameProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.product.subNameProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx_r2.product.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c0, ctx_r2.readOption.isOverview, !ctx_r2.readOption.isOverview));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c0, ctx_r2.readOption.isFeature, !ctx_r2.readOption.isFeature));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c0, ctx_r2.readOption.isBox, !ctx_r2.readOption.isBox));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.tabContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colorOptions", ctx_r2.colorOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("warrantyOptions", ctx_r2.warrantyOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("featuresOptions", ctx_r2.featuresOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("specification", ctx_r2.specification);
} }
class DetailItemComponent {
    constructor(detailProductService) {
        this.detailProductService = detailProductService;
        this.readOption = {
            isOverview: true,
            isFeature: false,
            isBox: false,
        };
        this.extraPriceColor = 0;
        this.extraPriceWarranty = 0;
        this.extraPriceFeature = 0;
        // this.initProduct();
    }
    ngOnInit() {
        this.getProduct();
    }
    getProduct() {
        this.detailProductService.getProduct().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(changes => changes.map(c => (Object.assign({ key: c.payload.doc.id }, c.payload.doc.data()))))).subscribe(product => {
            this.product = product[0];
            this.urlPaths = this.product.urlPhoto;
            this.specificationFeatures = this.product.specificationFeatures;
            this.tabContent = this.product.overview;
            this.colorOptions = this.product.colorOptions;
            this.warrantyOptions = this.product.warrantyOptions;
            this.featuresOptions = this.product.featuresOptions;
            this.specification = this.product.specification;
            this.total = Number(this.product.price);
        });
    }
    selectReadSpecification(spec) {
        switch (spec) {
            case 'overview':
                this.readOption = { isOverview: true, isFeature: false, isBox: false };
                this.tabContent = this.product.overview;
                break;
            case 'feature':
                this.readOption = { isOverview: false, isFeature: true, isBox: false };
                this.tabContent = this.product.features;
                break;
            case 'box':
                this.readOption = { isOverview: false, isFeature: false, isBox: true };
                this.tabContent = this.product.containt;
                break;
        }
    }
    getExtraPrice(data) {
        switch (data.name) {
            case 'color':
                if (this.extraPriceColor !== data.extraPrice) {
                    this.total -= this.extraPriceColor;
                    this.total += data.extraPrice;
                    this.extraPriceColor = data.extraPrice;
                }
                break;
            case 'warranty':
                if (this.extraPriceWarranty !== data.extraPrice) {
                    this.total -= this.extraPriceWarranty;
                    this.total += data.extraPrice;
                    this.extraPriceWarranty = data.extraPrice;
                }
                break;
            case 'features':
                if (this.extraPriceFeature !== data.extraPrice) {
                    this.total -= this.extraPriceFeature;
                    this.total += data.extraPrice;
                    this.extraPriceFeature = data.extraPrice;
                }
                break;
        }
    }
    initProduct() {
        this.product = {
            key: 'key',
            idPorduct: 1,
            new: true,
            nameProduct: 'Momentum True Wireless 2',
            subNameProduct: 'Earbuds that put sound first',
            price: 295.95,
            overview: 'For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True Wireless 2 is no different. Thanks to leading audio technology and innovation, these new earbuds deliver the best listening experience anytime, anywhere. With improved ergonomics designed for full day wearing and refined touch controls for a more personalised experience, they have been finely crafted for the most discerning listener and aim to simplify your life by enhancing your everyday.',
            features: 'From classical to contemporary, every music genre is enhanced by the bespoke 7 mm dynamic drivers  of the new MOMENTUM True Wireless 2 earbuds thanks to its deep bass, natural mids and clear, detailed treble. Plus, you can now tailor your listening experience with built-in equalizers and enjoy amazing sound quality on your terms.',
            containt: 'Charging Case, MTW2 Earbuds, Silicone Ear Adapter Sets (In Size XS, S, M, L), USB-A to USB-C Charging Cable.',
            colorOptions: [
                {
                    idColor: 1,
                    title: 'Ivory White',
                    description: 'For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True.',
                    colorPrice: 0
                },
                {
                    idColor: 2,
                    title: 'Matte Black',
                    description: 'Of all og the celestial bodies that capture out attention and fascination as astronomers.',
                    colorPrice: 0
                }
            ],
            warrantyOptions: [
                {
                    idWarranty: 1,
                    title: '2 years coverage',
                    description: 'For the past 75 years, Sennheiser has put sound first.',
                    priceWarranty: 0
                },
                {
                    idWarranty: 2,
                    title: '3 years coverage',
                    description: 'For the past 75 years, Sennheiser has put sound first.',
                    priceWarranty: 75
                }
            ],
            featuresOptions: [
                {
                    idFeatures: 1,
                    title: 'Voice Assistant support',
                    priceFeature: 0
                },
                {
                    idFeatures: 2,
                    title: 'customizable controls',
                    priceFeature: 25
                }
            ],
            specification: [
                {
                    idSpecifications: 1,
                    title: 'Dimensions',
                    description: '76.8 x 43.8 x 34.7 mm (earbugs and charging case)'
                },
                {
                    idSpecifications: 2,
                    title: 'USB Standard',
                    description: 'USB-C'
                },
                {
                    idSpecifications: 3,
                    title: 'Power Supply',
                    description: 'Sennheiser 7mm dynamic driver'
                },
                {
                    idSpecifications: 4,
                    title: 'Frecuency response (Microphone)',
                    description: '100 Hz to 10 kHz'
                },
                {
                    idSpecifications: 5,
                    title: 'Fecuency Response',
                    description: '5 - 21,000 Hz'
                },
                {
                    idSpecifications: 6,
                    title: 'Noise cancellation',
                    description: 'Single-Mic ANC per earbud side'
                }
            ],
            urlPhoto: [
                {
                    idPhoto: 1,
                    urlPath: '../../../../assets/img/momentum.png'
                },
                {
                    idPhoto: 2,
                    urlPath: '../../../../assets/img/earphones.png'
                },
                {
                    idPhoto: 3,
                    urlPath: '../../../../assets/img/momentumtech.png'
                }
            ],
            specificationFeatures: [
                {
                    idSpecificationFeature: 1,
                    urlPath: '../../../../assets/icon/touch.svg',
                    description: 'Customizable Touch Controls'
                },
                {
                    idSpecificationFeature: 2,
                    urlPath: '../../../../assets/icon/equalizer.svg',
                    description: 'Built-in Equalizer'
                },
                {
                    idSpecificationFeature: 3,
                    urlPath: '../../../../assets/icon/noise.svg',
                    description: 'Active Noise Cancellation'
                }
            ]
        };
    }
}
DetailItemComponent.ɵfac = function DetailItemComponent_Factory(t) { return new (t || DetailItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_detail_item_service__WEBPACK_IMPORTED_MODULE_2__["DetailProductService"])); };
DetailItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailItemComponent, selectors: [["detail-item"]], decls: 13, vars: 4, consts: [[1, "main", "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "p-0", "h-100", "d-flex", "flex-column"], [1, "row", "m-0"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "col-xs-12", "p-0", "fade-in"], [1, "sticky-top"], [3, "urlPaths", 4, "ngIf"], [3, "specificationFeatureItem", 4, "ngIf"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "col-xs-12", "h-100", "p-0", "fade-in"], [1, "row", "m-0", "pl-xl-4", "pl-lg-4", "pl-md-0", "pl-sm-0", "pl-xs-0"], ["class", "col-12 p-0", 4, "ngIf"], [1, "push"], [1, "col-12", "fixed-bottom", "p-0"], [3, "total"], [3, "urlPaths"], [3, "specificationFeatureItem"], [1, "col-12", "p-0"], ["class", "new-release color-carmesi", 4, "ngIf"], [1, "name-product", "color-primary", "m-0"], [1, "sub-name-product", "color-dark-gray"], [1, "starting-at", "color-dark-gray", "m-0"], [1, "price", "color-primary"], [1, "p-0"], [1, "m-0", "title", 3, "ngClass", "click"], [1, "w-100", "content"], [1, "row", "mx-0", "content"], [1, "m-0", "color-primary", "title"], [3, "colorOptions"], [3, "warrantyOptions", "GetExtraPrice"], [3, "featuresOptions", "GetExtraPrice"], [1, "col-12", "p-0", "mt-3"], [3, "specification"], [1, "new-release", "color-carmesi"]], template: function DetailItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DetailItemComponent_img_carousel_4_Template, 1, 1, "img-carousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DetailItemComponent_specification_feature_5_Template, 1, 1, "specification-feature", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DetailItemComponent_div_8_Template, 43, 21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "diV", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "footer", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.urlPaths);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.specificationFeatures);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("total", ctx.total);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _components_img_carousel_img_carousel_component__WEBPACK_IMPORTED_MODULE_5__["ImgCarouselComponent"], _components_specification_feature_specification_feature_component__WEBPACK_IMPORTED_MODULE_6__["SpecificationFeatureComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _components_color_option_color_option_component__WEBPACK_IMPORTED_MODULE_7__["ColorOptionComponent"], _components_warranty_option_warranty_option_component__WEBPACK_IMPORTED_MODULE_8__["WarrantyOptionComponent"], _components_feature_option_feature_option_component__WEBPACK_IMPORTED_MODULE_9__["FeatureOptionComponent"], _components_specification_specification_option_component__WEBPACK_IMPORTED_MODULE_10__["SpecificationOptionComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFnZXMvZGV0YWlsLWl0ZW0vZGV0YWlsLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'detail-item',
                templateUrl: './detail-item.component.html',
                styleUrls: ['./detail-item.component.scss']
            }]
    }], function () { return [{ type: _detail_item_service__WEBPACK_IMPORTED_MODULE_2__["DetailProductService"] }]; }, null); })();


/***/ }),

/***/ "v3vI":
/*!******************************************************************************************!*\
  !*** ./src/app/core/components/specification-feature/specification-feature.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SpecificationFeatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecificationFeatureComponent", function() { return SpecificationFeatureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function SpecificationFeatureComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.urlPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
} }
class SpecificationFeatureComponent {
    constructor() {
    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    }
}
SpecificationFeatureComponent.ɵfac = function SpecificationFeatureComponent_Factory(t) { return new (t || SpecificationFeatureComponent)(); };
SpecificationFeatureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpecificationFeatureComponent, selectors: [["specification-feature"]], inputs: { specificationFeatureItem: "specificationFeatureItem" }, decls: 3, vars: 1, consts: [[1, "row", "mt-5", "d-xl-flex", "d-lg-flex", "d-md-flex", "d-sm-none", "d-none"], [1, "col-12", "d-flex", "justify-content-center", "p-0"], ["class", "specification-feature col-4 p-0 d-flex flex-column align-items-center", 4, "ngFor", "ngForOf"], [1, "specification-feature", "col-4", "p-0", "d-flex", "flex-column", "align-items-center"], ["height", "27px", "width", "27px", "alt", "image", 3, "src"], [1, "color-primary"]], template: function SpecificationFeatureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SpecificationFeatureComponent_div_2_Template, 4, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.specificationFeatureItem);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9zcGVjaWZpY2F0aW9uLWZlYXR1cmUvc3BlY2lmaWNhdGlvbi1mZWF0dXJlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpecificationFeatureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'specification-feature',
                templateUrl: './specification-feature.component.html',
                styleUrls: ['./specification-feature.component.scss']
            }]
    }], function () { return []; }, { specificationFeatureItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_pages_detail_item_detail_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/pages/detail-item/detail-item.component */ "qeaV");





const routes = [
    { path: '', component: _core_pages_detail_item_detail_item_component__WEBPACK_IMPORTED_MODULE_2__["DetailItemComponent"] },
    { path: '', redirectTo: 'contacts', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "x0xU":
/*!************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() {
    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["footer"]], inputs: { total: "total" }, decls: 22, vars: 1, consts: [[1, "col-12", "footer", "bg-gray"], [1, "row", "d-flex", "justify-content-between", "m-0"], [1, "col-3", "p-0", "shiping-section"], [1, "m-0", "color-primary", "font-weight-bold"], [1, "m-0", "color-dark-gray", "font-weight-normal"], [1, "col-3", "p-0", "warranty-footer-section"], [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-12", "col-xs-12", "p-0"], [1, "row", "m-0", "total-price-section"], [1, "col-6", "d-flex", "flex-column"], [1, "m-0", "color-primary", "font-weight-bold", "text-right", "fz-27"], [1, "m-0", "color-dark-gray", "font-weight-normal", "text-right"], [1, "col-6", "d-flex", "justify-content-end"], [1, "btn", "btn-buy"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Free Shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Get 2-day free shipping anywhere in North America. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "2 years warranty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "If anything goes wrong in the first two years, we'll be replace ir for free.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Need financing? Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.total, "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, { total: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map