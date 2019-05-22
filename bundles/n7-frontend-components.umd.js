(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@n7-frontend/components', ['exports', '@angular/common', '@angular/core'], factory) :
    (factory((global['n7-frontend'] = global['n7-frontend'] || {}, global['n7-frontend'].components = {}),global.ng.common,global.ng.core));
}(this, (function (exports,common,core) { 'use strict';

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
            { type: core.Component, args: [{
                        selector: 'dv-list-component',
                        template: "<ul *ngIf=\"data\" class=\"n7-component-list\">\n  <li \n  *ngFor=\"let item of data.items\"\n  class=\"n7-component-list__item {{ item.classes || '' }}\"\n  (click)=\"onClick(item.payload)\">\n    <div *ngIf=\"item.left\" class=\"n7-component-list__item-left\" [innerHTML]=\"item.left\"></div>\n    <div class=\"n7-component-list__item-body\" [innerHTML]=\"item.body\"></div>\n    <div *ngIf=\"item.right\" class=\"n7-component-list__item-right\" [innerHTML]=\"item.right\"></div>\n  </li>\n</ul>"
                    }] }
        ];
        ListComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }]
        };
        return ListComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * NavbarComponent <dv-navbar-component>
     *
     * example:
     * ```html
     * <dv-navbar-component [data]="{
     *   brand: {
     *     image: '/assets/images/placeholder_75x75.png',
     *     label: 'MY BRAND',
     *     payload: 'brand clicked!'
     *   },
     *   links: {
     *     items: [{
     *       body: 'link 1',
     *       payload: 'navigate to /link-1'
     *     }, {
     *       body: 'link 2',
     *      payload: 'navigate to /link-2'
     *     }, {
     *       body: 'link 3',
     *       payload: 'navigate to /link-3'
     *     }]
     *   },
     *   actions: {
     *     items: [{
     *       body: '<img src=\'/assets/images/placeholder_75x75.png\'>',
     *       payload: 'avatar clicked!',
     *       classes: 'n7-navbar-component__action-avatar'
     *     }]
     *   },
     * }"></dv-navbar-component>
     * ```
     */
    var NavbarComponent = /** @class */ (function () {
        function NavbarComponent() {
        }
        /**
         * @param {?} payload
         * @return {?}
         */
        NavbarComponent.prototype.onBrandClick = /**
         * @param {?} payload
         * @return {?}
         */
            function (payload) {
                if (!this.emit)
                    return;
                this.emit('brand_click', payload);
            };
        /**
         * @param {?} type
         * @param {?} payload
         * @return {?}
         */
        NavbarComponent.prototype.onLinkClick = /**
         * @param {?} type
         * @param {?} payload
         * @return {?}
         */
            function (type, payload) {
                if (!this.emit)
                    return;
                this.emit('link_click', payload);
            };
        /**
         * @param {?} type
         * @param {?} payload
         * @return {?}
         */
        NavbarComponent.prototype.onActionClick = /**
         * @param {?} type
         * @param {?} payload
         * @return {?}
         */
            function (type, payload) {
                if (!this.emit)
                    return;
                this.emit('action_click', payload);
            };
        NavbarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'dv-navbar-component',
                        template: "<nav *ngIf=\"data\" class=\"n7-component-navbar {{ data.classes || '' }}\">\n  <!-- Brand -->\n  <div \n  *ngIf=\"data.brand\"\n  (click)=\"onBrandClick(data.brand.payload)\" \n  class=\"n7-component-navbar__brand {{ data.brand.classes || '' }}\">\n    <div *ngIf=\"data.brand.image\" class=\"n7-component-navbar__brand-image\">\n      <img src=\"{{ data.brand.image }}\" />\n    </div>\n    <div *ngIf=\"data.brand.label\" class=\"n7-component-navbar__brand-label\">\n      {{ data.brand.label }}\n    </div>\n  </div>\n  <!-- END // Brand -->\n\n  <!-- Links -->\n  <div *ngIf=\"data.links\" class=\"n7-component-navbar__links\">\n    <dv-list-component\n    [data]=\"data.links\"\n    [emit]=\"onLinkClick.bind(this)\"\n    ></dv-list-component>\n  </div>\n  <!-- END // Links -->\n  \n  <!-- Actions -->\n  <div *ngIf=\"data.actions\" class=\"n7-component-navbar__actions\">\n    <dv-list-component\n    [data]=\"data.actions\"\n    [emit]=\"onActionClick.bind(this)\"\n    ></dv-list-component>\n  </div>\n  <!-- END // Actions -->\n</nav>"
                    }] }
        ];
        NavbarComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }]
        };
        return NavbarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [
        ListComponent,
        NavbarComponent
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
    exports.ListComponent = ListComponent;
    exports.NavbarComponent = NavbarComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=n7-frontend-components.umd.js.map