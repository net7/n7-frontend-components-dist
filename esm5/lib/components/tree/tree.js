/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tree/tree.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// TREE.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for TreeComponent's "data"
 *
 * \@property header (required)
 * - icon (required)
 * - text (required)
 * - collapseIcon (required)
 * - classes (optional)
 * - payload (optional)
 * \@property items (required)
 * @record
 */
export function TreeData() { }
if (false) {
    /**
     * tree of items
     * @type {?}
     */
    TreeData.prototype.items;
}
/**
 * Interface for the single TreeComponent's "Item"
 *
 * \@property icon (optional)
 * \@property img (optional)
 * \@property classes (optional)
 * \@property text (required)
 * \@property anchor (optional)
 * \@property _meta (optional)
 * \@property items (optional)
 * @record
 */
export function TreeItem() { }
if (false) {
    /**
     * the node's toggle arrow, to expand and
     * collapse it's child nodes.
     * @type {?|undefined}
     */
    TreeItem.prototype.toggle;
    /**
     * the item's icon, only used on leaf items
     * @type {?|undefined}
     */
    TreeItem.prototype.icon;
    /**
     * the item's right icon, only used on tree items
     * @type {?|undefined}
     */
    TreeItem.prototype.iconright;
    /**
     * the item's image, only used on leaf items
     * @type {?|undefined}
     */
    TreeItem.prototype.img;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    TreeItem.prototype.classes;
    /**
     * the item's rendered text
     * @type {?}
     */
    TreeItem.prototype.text;
    /**
     * anchor <a>
     * @type {?|undefined}
     */
    TreeItem.prototype.anchor;
    /**
     * additional info useful for the component's logic
     * @type {?|undefined}
     */
    TreeItem.prototype._meta;
    /**
     * item recursion
     * @type {?|undefined}
     */
    TreeItem.prototype.items;
}
var TreeComponent = /** @class */ (function () {
    function TreeComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    TreeComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    TreeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-tree',
                    template: "<div *ngIf=\"data\" class=\"n7-tree\">\r\n    <!-- Start recursive rendering -->\r\n    <ng-container *ngTemplateOutlet=\"recursiveTree; context:{$implicit: data.items}\"></ng-container>\r\n\r\n    <!-- Template for recursive children rendering -->\r\n    <ng-template #recursiveTree let-node>\r\n        <div class=\"n7-tree__item {{ item.classes || '' }}\" *ngFor=\"let item of node\">\r\n            <div class=\"n7-tree__item-contents\">\r\n                <!-- Render expand/collapse arrow -->\r\n                <span *ngIf=\"item.toggle\"\r\n                      class=\"n7-tree__item-toggle {{ item.toggle.icon }}\"\r\n                      (click)=\"onClick(item.toggle.payload)\">\r\n                </span>\r\n                <!-- Render the node -->\r\n                <n7-anchor-wrapper \r\n                [classes]=\"'n7-tree__item-details'\"\r\n                [data]=\"item.anchor\"\r\n                (clicked)=\"onClick($event)\">\r\n                    <span *ngIf=\"item.icon\" class=\"n7-tree__item-icon {{ item.icon }}\"></span>\r\n                    <img class=\"n7-tree__item-img\" *ngIf=\"item.img\" src=\"{{ item.img }}\" alt=\"{{ item.text }}\"/>\r\n                    <span class=\"n7-tree__item-text\">{{ item.text }}</span>\r\n                    <span class=\"n7-tree__item-right-icon {{ item.iconright }}\"></span>\r\n                </n7-anchor-wrapper>\r\n            </div>\r\n            <!-- Check for more child nodes and render them -->\r\n            <div class=\"n7-tree__children-wrapper\" *ngIf=\"item.items\">\r\n                <ng-container *ngTemplateOutlet=\"recursiveTree; context:{$implicit: item.items}\"></ng-container>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n</div>"
                }] }
    ];
    TreeComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return TreeComponent;
}());
export { TreeComponent };
if (false) {
    /** @type {?} */
    TreeComponent.prototype.data;
    /** @type {?} */
    TreeComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdHJlZS90cmVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFjakQsOEJBS0M7Ozs7OztJQURDLHlCQUFrQjs7Ozs7Ozs7Ozs7Ozs7QUFjcEIsOEJBeUNDOzs7Ozs7O0lBcENDLDBCQUdFOzs7OztJQUlGLHdCQUFjOzs7OztJQUlkLDZCQUFtQjs7Ozs7SUFJbkIsdUJBQWE7Ozs7O0lBSWIsMkJBQWM7Ozs7O0lBSWQsd0JBQWE7Ozs7O0lBSWIsMEJBQWdCOzs7OztJQUloQix5QkFBWTs7Ozs7SUFJWix5QkFBbUI7O0FBR3JCO0lBQUE7SUFjQSxDQUFDOzs7OztJQUxDLCtCQUFPOzs7O0lBQVAsVUFBUSxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkFiRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLCt0REFBMEI7aUJBQzNCOzs7dUJBRUUsS0FBSzt1QkFFTCxLQUFLOztJQU9SLG9CQUFDO0NBQUEsQUFkRCxJQWNDO1NBVlksYUFBYTs7O0lBQ3hCLDZCQUF3Qjs7SUFFeEIsNkJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gVFJFRS50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBUcmVlQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGhlYWRlciAocmVxdWlyZWQpXHJcbiAqIC0gaWNvbiAocmVxdWlyZWQpXHJcbiAqIC0gdGV4dCAocmVxdWlyZWQpXHJcbiAqIC0gY29sbGFwc2VJY29uIChyZXF1aXJlZClcclxuICogLSBjbGFzc2VzIChvcHRpb25hbClcclxuICogLSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGl0ZW1zIChyZXF1aXJlZClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHJlZURhdGEge1xyXG4gIC8qKlxyXG4gICAqIHRyZWUgb2YgaXRlbXNcclxuICAgKi9cclxuICBpdGVtczogVHJlZUl0ZW1bXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgdGhlIHNpbmdsZSBUcmVlQ29tcG9uZW50J3MgXCJJdGVtXCJcclxuICpcclxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaW1nIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBhbmNob3IgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaXRlbXMgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBUcmVlSXRlbSB7XHJcbiAgLyoqXHJcbiAgICogdGhlIG5vZGUncyB0b2dnbGUgYXJyb3csIHRvIGV4cGFuZCBhbmRcclxuICAgKiBjb2xsYXBzZSBpdCdzIGNoaWxkIG5vZGVzLlxyXG4gICAqL1xyXG4gIHRvZ2dsZT86IHtcclxuICAgIGljb246IHN0cmluZztcclxuICAgIHBheWxvYWQ/OiBhbnk7XHJcbiAgfTtcclxuICAvKipcclxuICAgKiB0aGUgaXRlbSdzIGljb24sIG9ubHkgdXNlZCBvbiBsZWFmIGl0ZW1zXHJcbiAgICovXHJcbiAgaWNvbj86IHN0cmluZztcclxuICAgLyoqXHJcbiAgICogdGhlIGl0ZW0ncyByaWdodCBpY29uLCBvbmx5IHVzZWQgb24gdHJlZSBpdGVtc1xyXG4gICAqL1xyXG4gIGljb25yaWdodD86IHN0cmluZztcclxuICAvKipcclxuICAgKiB0aGUgaXRlbSdzIGltYWdlLCBvbmx5IHVzZWQgb24gbGVhZiBpdGVtc1xyXG4gICAqL1xyXG4gIGltZz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogdGhlIGl0ZW0ncyByZW5kZXJlZCB0ZXh0XHJcbiAgICovXHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFuY2hvciA8YT5cclxuICAgKi9cclxuICBhbmNob3I/OiBBbmNob3I7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogaXRlbSByZWN1cnNpb25cclxuICAgKi9cclxuICBpdGVtcz86IFRyZWVJdGVtW107XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctdHJlZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RyZWUuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZWVDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IFRyZWVEYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZCkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==