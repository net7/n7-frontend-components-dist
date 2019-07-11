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
     * BreadcrumbsComponent <n7-breadcrumbs>
     *
     * \@example
     * ```html
     *
     * <!-- TODO: add component example -->
     * ```
     */
    var BreadcrumbsComponent = /** @class */ (function () {
        function BreadcrumbsComponent() {
        }
        /**
         * @param {?} payload
         * @return {?}
         */
        BreadcrumbsComponent.prototype.onClick = /**
         * @param {?} payload
         * @return {?}
         */
            function (payload) {
                if (!this.emit)
                    return;
                this.emit('click', payload);
            };
        BreadcrumbsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'n7-breadcrumbs',
                        template: "<div *ngIf=\"data\" class=\"n7-breadcrumbs {{ data.classes || '' }}\">\n    <nav class=\"n7-breadcrumbs__nav\">\n        <ol class=\"n7-breadcrumbs__list\">\n            <li *ngFor=\"let item of data.items\" class=\"n7-breadcrumbs__item {{ item.classes || '' }}\">\n                <a class=\"n7-breadcrumbs__label\" (click)=\"onClick(item.payload)\">{{ item.label }}</a>\n            </li>\n        </ol>\n    </nav>\n</div>\n"
                    }] }
        ];
        BreadcrumbsComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }]
        };
        return BreadcrumbsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * HeaderComponent <n7-header>
     *
     * \@structure
     *  >>  cpm = it has Classes, Payload, Metadata  <<
     *  >>  -p- = it has only Payload                <<
     *  >>  +-- = sub-member                         <<
     *  >>  +---> = array                            <<
     *
     *  data (cpm)
     *    +-- actions
     *          +---> action (cpm)
     *                  +-- badge
     *    +-- logo (cp-)
     *    +-- menuToggle
     *          +-- open (-p-)
     *          +-- close (-p-)
     *    +-- nav (cpm)
     *          +---> items
     *    +-- search (cpm)
     *    +-- user (cpm)
     *
     */
    var HeaderComponent = /** @class */ (function () {
        function HeaderComponent() {
        }
        /**
         * @param {?} payload
         * @return {?}
         */
        HeaderComponent.prototype.onClick = /**
         * @param {?} payload
         * @return {?}
         */
            function (payload) {
                // console.log(type, payload);
                if (!this.emit)
                    return;
                this.emit('click', payload);
            };
        /**
         * @param {?} payload
         * @param {?} keyCode
         * @param {?} value
         * @return {?}
         */
        HeaderComponent.prototype.onKeyUp = /**
         * @param {?} payload
         * @param {?} keyCode
         * @param {?} value
         * @return {?}
         */
            function (payload, keyCode, value) {
                if (!this.emit)
                    return;
                this.emit('keyUp', { payload: payload, keyCode: keyCode, value: value });
            };
        HeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'n7-header',
                        template: "<header class=\"n7-header {{data.classes || ''}}\">\n    \n    <!-- Logo and title -->\n    <div class=\"n7-header__logo-title {{data.logo.classes || ''}}\">\n        <a class=\"n7-header__logo-link\" (click)=\"onClick(data.logo.payload)\">\n            <img class=\"n7-header__logo\"\n                *ngIf=\"data.logo.image\"\n                [src]=\"data.logo.image\"\n                alt=\"{{ data.logo.title }}\" />\n            <div class=\"n7-header__title-subtitle\">\n                <h1 class=\"n7-header__title\">\n                    {{ data.logo.title }}\n                </h1>\n                <h2 class=\"n7-header__subtitle\" *ngIf=\"data.logo.subtitle\">\n                    {{ data.logo.subtitle }}\n                </h2>\n            </div>\n        </a>\n    </div>\n    <!-- END // Logo and title -->\n\n    <!-- Main menu -->\n    <nav class=\"n7-header__nav {{data.nav.classes || ''}}\" *ngIf=\"data.nav\">\n        <div class=\"n7-header__nav-content\">\n            <ul class=\"n7-header__nav-list\">\n                <li class=\"n7-header__nav-item {{item.classes || ''}}\" *ngFor=\"let item of data.nav.items\">\n                    <a class=\"n7-header__nav-link\" *ngIf=\"item.payload\" (click)=\"onClick(item.payload)\">\n                        <span class=\"n7-header__nav-icon {{item.icon}}\" *ngIf=\"item.icon\"></span>\n                        <span class=\"n7-header__nav-label\" *ngIf=\"item.text\">\n                            {{ item.text }}\n                        </span>\n                    </a>\n\n                    <!-- Sublevel -->\n                    <ul class=\"n7-header__subnav-list\" *ngIf=\"item.subnav\">\n                        <li class=\"n7-header__subnav-item {{subitem.classes || ''}}\" *ngFor=\"let subitem of item.subnav\">\n                            <a class=\"n7-header__subnav-link\" (click)=\"onClick(subitem.payload)\">\n                                <span class=\"n7-header__subnav-icon {{subitem.icon}}\" *ngIf=\"subitem.icon\"></span>\n                                <span class=\"n7-header__subnav-label\" *ngIf=\"subitem.text\">\n                                    {{ subitem.text }}\n                                </span>\n                            </a>\n                        </li>\n                    </ul>\n                    <!-- END // Sublevel -->\n                </li>\n            </ul>\n        </div>\n    </nav>\n    <!-- END // Main menu -->\n\n    <!-- Mobile menu toggle -->\n    <div class=\"n7-header__mobile-menu-toggle\">\n        <span class=\"n7-header__mobile-menu-icon n7-icon-menu\" (click)=\"onClick(data.menuToggle.open.payload)\"></span>\n    </div>\n    <!-- END // Mobile menu toggle -->\n\n    <!-- Mobile menu close -->\n    <span class=\"n7-header__mobile-menu-close n7-icon-close\" (click)=\"onClick(data.menuToggle.close.payload)\"></span>\n    <!-- END // Mobile menu close -->\n\n    <!-- Tools: search, notifications, use profile or login/signup -->\n    <div class=\"n7-header__tools\">\n        \n        <div class=\"n7-header__search {{data.search.classes || ''}}\" *ngIf=\"data.search\">\n            <input class=\"n7-header__search-input\" type=\"search\" name=\"search\" placeholder=\"{{ data.search.hint || ''}}\" (keyup)=\"onKeyUp(data.search.payload, $event.keyCode, $event.target.value)\"/>\n            <button class=\"n7-header__search-btn\" type=\"submit\" (click)=\"onClick(data.search.payload)\">\n                <span class=\"n7-header__search-btn-label\">\n                    Search\n                </span>\n            </button>\n        </div>\n        \n        <div class=\"n7-header__actions\" *ngIf=\"data.actions\">\n            <div class=\"n7-header__action {{ action.classes || '' }}\" *ngFor=\"let action of data.actions\">\n                <span class=\"n7-header__action-icon {{ action.icon }}\" (click)=\"onClick(action.payload)\"></span>\n                <span class=\"n7-header__action-badge {{ action.badge.text ? 'has-text' : '' }}\" *ngIf=\"action.badge\">\n                    {{ action.badge.text }}\n                </span>\n            </div>\n        </div>\n\n        <div class=\"n7-header__user {{data.user.classes || ''}}\" *ngIf=\"data.user\" (click)=\"onClick(data.user.payload)\">\n            <img class=\"n7-header__user-img\" *ngIf=\"data.user.img\" [src]=\"data.user.img\" (click)=\"onClick(data.user.payload)\"/>\n            <p class=\"n7-header__user-name\" *ngIf=\"data.user.name\">\n                <span class=\"n7-header__user-name-label\">\n                    {{ data.user.name }}\n                </span>\n            </p>\n        </div>\n    </div>\n    <!-- END // Tools: search, notifications, use profile or login/signup -->\n\n</header>\n\n"
                    }] }
        ];
        HeaderComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }]
        };
        return HeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * LoaderComponent <n7-loader>
     *
     * \@example
     * ```html
     *
     * <n7-loader [data]="{
     *          classes: 'animated-loader'
     *      }">
     * </n7-loader>
     * ```
     */
    var LoaderComponent = /** @class */ (function () {
        function LoaderComponent() {
        }
        LoaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'n7-loader',
                        template: "<div class=\"n7-loader {{data.classes || ''}}\">\n    Loading\n</div>"
                    }] }
        ];
        LoaderComponent.propDecorators = {
            data: [{ type: core.Input }]
        };
        return LoaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NavComponent = /** @class */ (function () {
        function NavComponent() {
        }
        /**
         * @param {?} payload
         * @return {?}
         */
        NavComponent.prototype.onClick = /**
         * @param {?} payload
         * @return {?}
         */
            function (payload) {
                if (!this.emit)
                    return;
                this.emit('click', payload);
            };
        NavComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'n7-nav',
                        template: "<nav class=\"n7-nav {{data.classes || ''}}\" *ngIf=\"data\">\n    <ul class=\"n7-nav__list\">\n        <li class=\"n7-nav__item {{X.classes || ''}}\" *ngFor=\"let X of data.items\">\n            <a class=\"n7-nav__link\" *ngIf=\"X.payload\" (click)=\"onClick(X.payload)\">\n                <span class=\"n7-nav__label\" *ngIf=\"X.text\">\n                    {{ X.text }}\n                </span>\n            </a>\n        </li>\n    </ul>\n</nav>"
                    }] }
        ];
        NavComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }]
        };
        return NavComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * TableComponent <n7-table>
     */
    var TableComponent = /** @class */ (function () {
        function TableComponent() {
        }
        /**
         * @param {?} cell_payload
         * @return {?}
         */
        TableComponent.prototype.onCellClick = /**
         * @param {?} cell_payload
         * @return {?}
         */
            function (cell_payload) {
                if (!this.emit)
                    return;
                this.emit('cellClick', cell_payload);
            };
        /**
         * @param {?} cell_payload
         * @return {?}
         */
        TableComponent.prototype.onCellDblClick = /**
         * @param {?} cell_payload
         * @return {?}
         */
            function (cell_payload) {
                if (!this.emit)
                    return;
                this.emit('cellDblClick', cell_payload);
            };
        /**
         * @param {?} cell_payload
         * @param {?} cell_value
         * @return {?}
         */
        TableComponent.prototype.onInputTextChange = /**
         * @param {?} cell_payload
         * @param {?} cell_value
         * @return {?}
         */
            function (cell_payload, cell_value) {
                if (!this.emit)
                    return;
                /** @type {?} */
                var textChange_payload = { tc_payload: cell_payload, val: cell_value };
                this.emit('inputTextChange', textChange_payload);
            };
        TableComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'n7-table',
                        template: "<section class=\"n7-table {{data.classes || ''}}\" *ngIf=\"data\">\n    <table class=\"n7-table__table\">\n    \t<thead class=\"n7-table__table-header\" *ngIf=\"data.head\">\n            <tr class=\"n7-table__table-header-row {{row.classes || ''}}\"\n                *ngFor=\"let row of data.head\">\n                <th class=\"n7-table__table-header-cell {{cell.classes || ''}}\"\n                    *ngFor=\"let cell of row.cells\"\n                    (click)=\"onCellClick(cell.payload)\"\n                    [innerHTML]=\"cell.content\">\n                        <!-- {{ cell.content }} -->\n                </th>\n            </tr>\n        </thead>\n\n        <tbody class=\"n7-table__table-body\" *ngIf=\"data.body\">\n            <tr class=\"n7-table__table-body-row {{row.classes || ''}}\"\n                *ngFor=\"let row of data.body; let rowHead of data.head\">\n                <td class=\"n7-table__table-body-cell {{cell.classes || ''}}\"\n                    *ngFor=\"let cell of row.cells; let cellHead of rowHead.cells\"\n                    (click)=\"onCellClick(cell.payload)\"\n                    (dblclick)=\"onCellDblClick(cell.payload)\"\n                    [attr.data-label]=\"cellHead.content\">\n                    <span   class=\"n7-table__table-body-cell-innerhtml\"\n                            *ngIf=\"!cell.type || cell.type=='html'\"\n                            [innerHTML]=\"cell.content\"></span>\n                    <input  class=\"n7-table__table-body-cell-inputtext\"\n                            *ngIf=\"cell.type=='input:text'\"\n                            type=\"text\" placeholder=\"{{cell.content}}\"\n                            id=\"{{cell._meta.input_id}}\"\n                            (keyup.enter)=\"onInputTextChange(cell.payload, $event.target.value)\"/>                        \n                </td>\n            </tr>\n        </tbody>\n\n        <tfoot class=\"n7-table__table-footer\" *ngIf=\"data.foot\">\n            <tr class=\"n7-table__table-footer-row {{row.classes || ''}}\"\n                *ngFor=\"let row of data.foot\">\n                <td class=\"n7-table__table-footer-cell {{cell.classes || ''}}\"\n                    *ngFor=\"let cell of row.cells\"\n                    (click)=\"onCellClick(cell.payload)\"\n                    [innerHTML]=\"cell.content\">\n                        <!-- {{ cell.content }} -->\n                </td>\n            </tr>\n        </tfoot>        \n \t </table> \n</section>"
                    }] }
        ];
        TableComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }]
        };
        return TableComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * TagComponent <n7-tag>
     *
     * \@example
     * ```html
     *
     * <n7-tag [data]="{
     *        label: 'label: ',
     *        text: 'text',
     *        icon: 'x',
     *        payload: 'tag-payload',
     *        classes: 'tag1-class'
     *    }">
     * </n7-tag>
     * ```
     */
    var TagComponent = /** @class */ (function () {
        function TagComponent() {
        }
        /**
         * @param {?} payload
         * @return {?}
         */
        TagComponent.prototype.onClick = /**
         * @param {?} payload
         * @return {?}
         */
            function (payload) {
                if (!this.emit)
                    return;
                this.emit("click", payload);
            };
        TagComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'n7-tag',
                        template: "<span class=\"n7-tag {{data.classes || ''}}\" *ngIf=\"data\">\n    <span class=\"n7-tag__label\" *ngIf=\"data.label\">\n        {{ data.label }}\n    </span>\n    <span class=\"n7-tag__text\" *ngIf=\"data.text\">\n        {{ data.text }}\n    </span>\n    <span class=\"n7-tag__icon {{data.icon}}\" *ngIf=\"data.icon\" (click)=\"onClick(data.payload)\">\n        x\n    </span>\n</span>"
                    }] }
        ];
        TagComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }]
        };
        return TagComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [
        BreadcrumbsComponent,
        HeaderComponent,
        LoaderComponent,
        NavComponent,
        TableComponent,
        TagComponent
    ];
    var DvComponentsLibModule = /** @class */ (function () {
        function DvComponentsLibModule() {
        }
        DvComponentsLibModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            COMPONENTS,
                        ],
                        entryComponents: COMPONENTS,
                        imports: [common.CommonModule],
                        exports: [
                            COMPONENTS,
                        ],
                    },] }
        ];
        return DvComponentsLibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var BREADCRUMBS_MOCK = {
        items: [
            {
                label: 'Home',
                payload: '/'
            },
            {
                label: 'Costumi',
                payload: '/examples/loader-component'
            },
            {
                label: 'Giacche',
                payload: '/examples/list-component'
            },
            {
                label: 'Maniche',
                payload: '/examples/navbar-component'
            },
            {
                label: 'Manica',
                payload: '/examples/breadcrumbs-component'
            }
        ]
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var HEADER_MOCK = {
        logo: {
            image: './assets/images/dvLogo.png',
            title: 'DataViz',
            subtitle: 'Data visualization',
            payload: 'https://www.netseven.it/'
        },
        nav: {
            items: [
                { text: 'Home', payload: '/', icon: 'n7-icon-home' },
                { text: 'Stuff', payload: '/s', icon: 'n7-icon-home' },
                { text: 'Other Stuff', payload: '/os', icon: 'n7-icon-home' },
                { text: 'Dropdown', payload: '/', icon: 'n7-icon-home', subnav: [
                        { text: 'Sublevel 1', payload: '/', icon: 'n7-icon-home' },
                        { text: 'Sublevel 2 Lorem ipsum dolor sit amet', payload: '/s', icon: 'n7-icon-home' },
                        { text: 'Sublevel 3', payload: '/os', icon: 'n7-icon-home' },
                    ]
                },
                { text: 'Shiny Stuff', payload: '/shs', icon: 'n7-icon-home' },
                { text: 'Cats', payload: '/cats', icon: 'n7-icon-home' },
            ]
        },
        search: {
            hint: 'Search (hint)',
            payload: 'search payload',
        },
        actions: [
            { icon: 'n7-icon-bell', payload: '/', badge: {
                    text: "200",
                },
            },
            { icon: 'n7-icon-facebook', payload: '/', badge: {}, },
        ],
        user: {
            img: './assets/images/placeholder_75x75.png',
            name: 'Massimiliano Spinosa'
        },
        menuToggle: {
            open: {
                payload: 'mobile-open'
            },
            close: {
                payload: 'mobile-close'
            }
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LOADER_MOCK = {
        classes: 'loader-test'
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NAV_MOCK = {
        items: [
            { text: "Home", payload: "/" },
            { text: "Single level", payload: "/no_dropdown" },
            { text: "Stuff", payload: "/page1" },
            { text: "Other stuff", payload: "/page1/page2" },
            { text: "Cats", payload: "cats" }
        ],
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TABLE_MOCK = {
        classes: 'test-layout-table',
        head: [
            {
                classes: 'HEADER',
                cells: [
                    {
                        classes: 'CONTENT',
                        content: 'DATA - ORA'
                    },
                    {
                        classes: 'CONTENT',
                        content: 'SEZIONE'
                    },
                    {
                        classes: 'CONTENT',
                        content: 'PARAMETRO'
                    },
                    {
                        classes: 'CONTENT',
                        content: 'VALORE'
                    }
                ]
            }
        ],
        body: [
            {
                //first row
                classes: 'BODY',
                _meta: 'A',
                cells: [
                    {
                        classes: 'CONTENT',
                        // _meta: '1x1',
                        payload: 'B',
                        content: '<span style="color:red;">10/01/2019 - 10:23</span>',
                        type: 'html'
                    },
                    {
                        classes: 'CONTENT',
                        // _meta: '1x2',
                        content: 'Ingresso Industriale',
                        type: 'html'
                    },
                    {
                        classes: 'bold',
                        // _meta: '1x3',
                        content: '<span style="color:blue;">&bullet;</span> N_NH4',
                        type: 'html'
                    },
                    {
                        content: '9 mg/l',
                        // _meta: '1x4',
                        type: 'html'
                    }
                ]
            },
            {
                //second row
                classes: 'BODY',
                _meta: 'B',
                cells: [
                    {
                        classes: 'CONTENT',
                        _meta: '2x1',
                        payload: 'C',
                        content: '<span style="color:red;">12/01/2019 - 20:54</span>',
                        type: 'html'
                    },
                    {
                        classes: 'CONTENT',
                        _meta: '2x2',
                        content: 'Ingresso Civile',
                        type: 'html'
                    },
                    {
                        classes: 'bold',
                        _meta: '2x3',
                        content: '<span style="color:purple;">&bullet;</span> Ossigeno mg/l',
                        type: 'html'
                    },
                    {
                        content: '100 mg/l',
                        _meta: { id: '2x4', input_id: '_text_input_2x4' },
                        payload: { id: '2x4' },
                        type: 'html'
                    }
                ]
            },
            {
                //third row
                classes: 'BODY',
                _meta: 'C',
                cells: [
                    {
                        classes: 'CONTENT',
                        _meta: '3x1',
                        payload: 'C',
                        content: '<span style="color:red;">9/01/2019 - 4:12</span>',
                        type: 'html'
                    },
                    {
                        classes: 'CONTENT',
                        _meta: '3x2',
                        content: 'Preaccumulo',
                        type: 'html'
                    },
                    {
                        classes: 'bold',
                        _meta: '3x3',
                        content: '<span style="color:purple;">&bullet;</span> Ossigeno mg/l',
                        type: 'html' //'altro'
                    },
                    {
                        content: '100 mg/l',
                        _meta: { id: '3x4', input_id: '_text_input_3x4' },
                        payload: { id: '3x4' },
                        type: 'input:text'
                    }
                ]
            },
            {
                //fourth row
                classes: 'BODY',
                _meta: 'D',
                cells: [
                    {
                        classes: 'CONTENT',
                        _meta: '4x1',
                        content: '8/01/2019 - 3:52',
                        type: 'html'
                    },
                    {
                        classes: 'CONTENT',
                        _meta: '4x2',
                        content: 'Preaccumulo',
                        type: 'html'
                    },
                    {
                        classes: 'bold',
                        //_meta: '4x3',
                        content: '<span style="color:green;">&bullet;</span> Redox V',
                        type: 'html'
                    },
                    {
                        classes: 'input-test',
                        content: '231 V',
                        type: 'html',
                        _meta: { id: 'NPT', input_id: '_text_input_NPT' },
                        payload: { id: 'NPT' }
                    }
                ]
            }
        ]
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TAG_MOCK = {
        label: "label: ",
        text: "text",
        icon: "x",
        payload: "tag-payload",
        classes: "tag1-class",
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.DvComponentsLibModule = DvComponentsLibModule;
    exports.BreadcrumbsComponent = BreadcrumbsComponent;
    exports.HeaderComponent = HeaderComponent;
    exports.LoaderComponent = LoaderComponent;
    exports.NavComponent = NavComponent;
    exports.TableComponent = TableComponent;
    exports.TagComponent = TagComponent;
    exports.BREADCRUMBS_MOCK = BREADCRUMBS_MOCK;
    exports.HEADER_MOCK = HEADER_MOCK;
    exports.LOADER_MOCK = LOADER_MOCK;
    exports.NAV_MOCK = NAV_MOCK;
    exports.TABLE_MOCK = TABLE_MOCK;
    exports.TAG_MOCK = TAG_MOCK;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=n7-frontend-components.umd.js.map