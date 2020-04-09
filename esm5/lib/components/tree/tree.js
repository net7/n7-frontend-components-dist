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
                    template: "<div *ngIf=\"data\" class=\"n7-tree\">\n    <!-- Start recursive rendering -->\n    <ng-container *ngTemplateOutlet=\"recursiveTree; context:{$implicit: data.items}\"></ng-container>\n\n    <!-- Template for recursive children rendering -->\n    <ng-template #recursiveTree let-node>\n        <div class=\"n7-tree__item {{ item.classes || '' }}\" *ngFor=\"let item of node\">\n            <div class=\"n7-tree__item-contents\">\n                <!-- Render expand/collapse arrow -->\n                <span *ngIf=\"item.toggle\"\n                      class=\"n7-tree__item-toggle {{ item.toggle.icon }}\"\n                      (click)=\"onClick(item.toggle.payload)\">\n                </span>\n                <!-- Render the node -->\n                <n7-anchor-wrapper \n                [classes]=\"'n7-tree__item-details'\"\n                [data]=\"item.anchor\"\n                (clicked)=\"onClick($event)\">\n                    <span *ngIf=\"item.icon\" class=\"n7-tree__item-icon {{ item.icon }}\"></span>\n                    <img class=\"n7-tree__item-img\" *ngIf=\"item.img\" src=\"{{ item.img }}\" alt=\"{{ item.text }}\"/>\n                    <span class=\"n7-tree__item-text\">{{ item.text }}</span>\n                    <span class=\"n7-tree__item-right-icon {{ item.iconright }}\"></span>\n                </n7-anchor-wrapper>\n            </div>\n            <!-- Check for more child nodes and render them -->\n            <div class=\"n7-tree__children-wrapper\" *ngIf=\"item.items\">\n                <ng-container *ngTemplateOutlet=\"recursiveTree; context:{$implicit: item.items}\"></ng-container>\n            </div>\n        </div>\n    </ng-template>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdHJlZS90cmVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFjakQsOEJBS0M7Ozs7OztJQURDLHlCQUFrQjs7Ozs7Ozs7Ozs7Ozs7QUFjcEIsOEJBeUNDOzs7Ozs7O0lBcENDLDBCQUdFOzs7OztJQUlGLHdCQUFjOzs7OztJQUlkLDZCQUFtQjs7Ozs7SUFJbkIsdUJBQWE7Ozs7O0lBSWIsMkJBQWM7Ozs7O0lBSWQsd0JBQWE7Ozs7O0lBSWIsMEJBQWdCOzs7OztJQUloQix5QkFBWTs7Ozs7SUFJWix5QkFBbUI7O0FBR3JCO0lBQUE7SUFjQSxDQUFDOzs7OztJQUxDLCtCQUFPOzs7O0lBQVAsVUFBUSxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkFiRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLG1xREFBMEI7aUJBQzNCOzs7dUJBRUUsS0FBSzt1QkFFTCxLQUFLOztJQU9SLG9CQUFDO0NBQUEsQUFkRCxJQWNDO1NBVlksYUFBYTs7O0lBQ3hCLDZCQUF3Qjs7SUFFeEIsNkJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRSRUUudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFRyZWVDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBoZWFkZXIgKHJlcXVpcmVkKVxuICogLSBpY29uIChyZXF1aXJlZClcbiAqIC0gdGV4dCAocmVxdWlyZWQpXG4gKiAtIGNvbGxhcHNlSWNvbiAocmVxdWlyZWQpXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxuICogLSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpdGVtcyAocmVxdWlyZWQpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVHJlZURhdGEge1xuICAvKipcbiAgICogdHJlZSBvZiBpdGVtc1xuICAgKi9cbiAgaXRlbXM6IFRyZWVJdGVtW107XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciB0aGUgc2luZ2xlIFRyZWVDb21wb25lbnQncyBcIkl0ZW1cIlxuICpcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpbWcgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGFuY2hvciAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGl0ZW1zIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUcmVlSXRlbSB7XG4gIC8qKlxuICAgKiB0aGUgbm9kZSdzIHRvZ2dsZSBhcnJvdywgdG8gZXhwYW5kIGFuZFxuICAgKiBjb2xsYXBzZSBpdCdzIGNoaWxkIG5vZGVzLlxuICAgKi9cbiAgdG9nZ2xlPzoge1xuICAgIGljb246IHN0cmluZztcbiAgICBwYXlsb2FkPzogYW55O1xuICB9O1xuICAvKipcbiAgICogdGhlIGl0ZW0ncyBpY29uLCBvbmx5IHVzZWQgb24gbGVhZiBpdGVtc1xuICAgKi9cbiAgaWNvbj86IHN0cmluZztcbiAgIC8qKlxuICAgKiB0aGUgaXRlbSdzIHJpZ2h0IGljb24sIG9ubHkgdXNlZCBvbiB0cmVlIGl0ZW1zXG4gICAqL1xuICBpY29ucmlnaHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aGUgaXRlbSdzIGltYWdlLCBvbmx5IHVzZWQgb24gbGVhZiBpdGVtc1xuICAgKi9cbiAgaW1nPzogc3RyaW5nO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBhbnk7XG4gIC8qKlxuICAgKiB0aGUgaXRlbSdzIHJlbmRlcmVkIHRleHRcbiAgICovXG4gIHRleHQ6IHN0cmluZztcbiAgLyoqXG4gICAqIGFuY2hvciA8YT5cbiAgICovXG4gIGFuY2hvcj86IEFuY2hvcjtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mbyB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG4gIC8qKlxuICAgKiBpdGVtIHJlY3Vyc2lvblxuICAgKi9cbiAgaXRlbXM/OiBUcmVlSXRlbVtdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy10cmVlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RyZWUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVHJlZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IFRyZWVEYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG59XG4iXX0=