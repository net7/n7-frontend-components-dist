(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@dataviz/components', ['exports', '@angular/common', '@angular/core'], factory) :
    (factory((global.dataviz = global.dataviz || {}, global.dataviz.components = {}),global.ng.common,global.ng.core));
}(this, (function (exports,common,core) { 'use strict';

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
    var TestComponent = /** @class */ (function () {
        function TestComponent() {
        }
        /**
         * click event
         *
         * @param data
         * @returns
         * @memberof TestComponent
         */
        /**
         * click event
         *
         * \@memberof TestComponent
         * @param {?} data
         * @return {?}
         */
        TestComponent.prototype.onClick = /**
         * click event
         *
         * \@memberof TestComponent
         * @param {?} data
         * @return {?}
         */
            function (data) {
                if (!this.emit)
                    return;
                this.emit('click', data);
            };
        TestComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'dv-test-component',
                        template: "<div *ngIf=\"data\" class=\"dv-component__test\" (click)=\"onClick(data)\">\n  <h2><small>({{ data.id }})</small> {{ data.title }}</h2>\n  <p>{{ data.body }}</p>\n</div>",
                        styles: [".dv-component__test{background-color:#eee}"]
                    }] }
        ];
        TestComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }]
        };
        return TestComponent;
    }());

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
    var TitleComponent = /** @class */ (function () {
        function TitleComponent() {
        }
        TitleComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'dv-title-component',
                        template: "<h1 *ngIf=\"data\">{{ data.label }} ({{ data.value }})</h1>",
                        styles: ["h1{color:red}"]
                    }] }
        ];
        TitleComponent.propDecorators = {
            data: [{ type: core.Input }]
        };
        return TitleComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [
        TestComponent,
        TitleComponent
    ];
    var DvComponentsLibModule = /** @class */ (function () {
        function DvComponentsLibModule() {
        }
        DvComponentsLibModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: COMPONENTS,
                        entryComponents: COMPONENTS,
                        imports: [common.CommonModule],
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

    exports.DvComponentsLibModule = DvComponentsLibModule;
    exports.TestComponent = TestComponent;
    exports.TitleComponent = TitleComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=dataviz-components.umd.js.map