import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';

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
        { type: Component, args: [{
                    selector: 'n7-loader',
                    template: "<div class=\"n7-loader {{data.classes || ''}}\">\n    Loading\n</div>"
                }] }
    ];
    LoaderComponent.propDecorators = {
        data: [{ type: Input }]
    };
    return LoaderComponent;
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
        { type: Component, args: [{
                    selector: 'n7-table',
                    template: "<section class=\"n7-table {{data.classes || ''}}\" *ngIf=\"data\">\n    <table class=\"n7-table__table\">\n    \t<thead class=\"n7-table__table-header\" *ngIf=\"data.head\">\n            <tr class=\"n7-table__table-header-row {{row.classes || ''}}\"\n                *ngFor=\"let row of data.head\">\n                <th class=\"n7-table__table-header-cell {{cell.classes || ''}}\"\n                    *ngFor=\"let cell of row.cells\"\n                    (click)=\"onCellClick(cell.payload)\"\n                    [innerHTML]=\"cell.content\">\n                        <!-- {{ cell.content }} -->\n                </th>\n            </tr>\n        </thead>\n\n        <tbody class=\"n7-table__table-body\" *ngIf=\"data.body\">\n            <tr class=\"n7-table__table-body-row {{row.classes || ''}}\"\n                *ngFor=\"let row of data.body; let rowHead of data.head\">\n                <td class=\"n7-table__table-body-cell {{cell.classes || ''}}\"\n                    *ngFor=\"let cell of row.cells; let cellHead of rowHead.cells\"\n                    (click)=\"onCellClick(cell.payload)\"\n                    (dblclick)=\"onCellDblClick(cell.payload)\"\n                    [attr.data-label]=\"cellHead.content\">\n                    <span   class=\"n7-table__table-body-cell-innerhtml\"\n                            *ngIf=\"!cell.type || cell.type=='html'\"\n                            [innerHTML]=\"cell.content\"></span>\n                    <input  class=\"n7-table__table-body-cell-inputtext\"\n                            *ngIf=\"cell.type=='input:text'\"\n                            type=\"text\" placeholder=\"{{cell.content}}\"\n                            id=\"{{cell._meta.input_id}}\"\n                            (keyup.enter)=\"onInputTextChange(cell.payload, $event.target.value)\"/>                        \n                </td>\n            </tr>\n        </tbody>\n\n        <tfoot class=\"n7-table__table-footer\" *ngIf=\"data.foot\">\n            <tr class=\"n7-table__table-footer-row {{row.classes || ''}}\"\n                *ngFor=\"let row of data.foot\">\n                <td class=\"n7-table__table-footer-cell {{cell.classes || ''}}\"\n                    *ngFor=\"let cell of row.cells\"\n                    (click)=\"onCellClick(cell.payload)\"\n                    [innerHTML]=\"cell.content\">\n                        <!-- {{ cell.content }} -->\n                </td>\n            </tr>\n        </tfoot>        \n \t </table> \n</section>"
                }] }
    ];
    TableComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
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
        { type: Component, args: [{
                    selector: 'n7-tag',
                    template: "<span class=\"n7-tag {{data.classes || ''}}\" *ngIf=\"data\">\n    <span class=\"n7-tag__label\" *ngIf=\"data.label\">\n        {{ data.label }}\n    </span>\n    <span class=\"n7-tag__text\" *ngIf=\"data.text\">\n        {{ data.text }}\n    </span>\n    <span class=\"n7-tag__icon {{data.icon}}\" *ngIf=\"data.icon\" (click)=\"onClick(data.payload)\">\n        x\n    </span>\n</span>"
                }] }
    ];
    TagComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return TagComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [
    LoaderComponent,
    TableComponent,
    TagComponent
];
var DvComponentsLibModule = /** @class */ (function () {
    function DvComponentsLibModule() {
    }
    DvComponentsLibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        COMPONENTS,
                    ],
                    entryComponents: COMPONENTS,
                    imports: [CommonModule],
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
var LOADER_MOCK = {
    classes: 'loader-test'
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

export { DvComponentsLibModule, LoaderComponent, TableComponent, TagComponent, LOADER_MOCK, TABLE_MOCK, TAG_MOCK };

//# sourceMappingURL=n7-frontend-components.js.map