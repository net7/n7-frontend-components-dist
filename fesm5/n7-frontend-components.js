import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * ListComponent <dv-list-component>
 *
 * example:
 * ```html
 * <dv-list-component [data]="{
 *   items: [{
 *     body: 'hello',
 *     payload: 'first item!',
 *     classes: 'is-active'
 *   }, {
 *     body: 'hello',
 *     left: '<i class=\'fas fa-thumbs-up\'></i>',
 *     payload: 'second item!'
 *   }, {
 *     body: 'hello',
 *     right: '<span>33</span>',
 *     payload: 'third item!'
 *   }]
 * }"></dv-list-component>
 * ```
 */
var ListComponent = /** @class */ (function () {
    function ListComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    ListComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    ListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dv-list-component',
                    template: "<ul *ngIf=\"data\" class=\"n7-component-list\">\n  <li \n  *ngFor=\"let item of data.items\"\n  class=\"n7-component-list__item {{ item.classes || '' }}\"\n  (click)=\"onClick(item.payload)\">\n    <div *ngIf=\"item.left\" class=\"n7-component-list__item-left\" [innerHTML]=\"item.left\"></div>\n    <div class=\"n7-component-list__item-body\" [innerHTML]=\"item.body\"></div>\n    <div *ngIf=\"item.right\" class=\"n7-component-list__item-right\" [innerHTML]=\"item.right\"></div>\n  </li>\n</ul>"
                }] }
    ];
    ListComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return ListComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [
    ListComponent
];
var DvComponentsLibModule = /** @class */ (function () {
    function DvComponentsLibModule() {
    }
    DvComponentsLibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: COMPONENTS,
                    entryComponents: COMPONENTS,
                    imports: [CommonModule],
                    exports: COMPONENTS,
                },] }
    ];
    return DvComponentsLibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DvComponentsLibModule, ListComponent, ListComponent as ɵa };

//# sourceMappingURL=n7-frontend-components.js.map