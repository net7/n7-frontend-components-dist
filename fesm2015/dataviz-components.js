import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * TestComponent <dv-test-component>
 *
 * example:
 * ```html
 * <dv-test-component [data]="{
 *   'id': 'test-component-id',
 *   'title': 'test component title',
 *   'body': 'test body...'
 * }"></dv-test-component>
 * ```
 */
class TestComponent {
    /**
     * click event
     *
     * \@memberof TestComponent
     * @param {?} data
     * @return {?}
     */
    onClick(data) {
        if (!this.emit)
            return;
        this.emit('click', data);
    }
}
TestComponent.decorators = [
    { type: Component, args: [{
                selector: 'dv-test-component',
                template: "<div *ngIf=\"data\" class=\"dv-component__test\" (click)=\"onClick(data)\">\n  <h2><small>({{ data.id }})</small> {{ data.title }}</h2>\n  <p>{{ data.body }}</p>\n</div>",
                styles: [".dv-component__test{background-color:#eee}"]
            }] }
];
TestComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * TitleComponent <dv-title-component>
 *
 * example:
 * ```html
 * <dv-title-component [data]="{
 *   'label': 'title component label',
 *   'value': 123
 * }"></dv-title-component>
 * ```
 */
class TitleComponent {
}
TitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'dv-title-component',
                template: "<h1 *ngIf=\"data\">{{ data.label }} ({{ data.value }})</h1>",
                styles: ["h1{color:red}"]
            }] }
];
TitleComponent.propDecorators = {
    data: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [
    TestComponent,
    TitleComponent
];
class DvComponentsLibModule {
}
DvComponentsLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: COMPONENTS,
                entryComponents: COMPONENTS,
                imports: [CommonModule],
                exports: COMPONENTS,
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DvComponentsLibModule, TestComponent, TitleComponent };

//# sourceMappingURL=dataviz-components.js.map