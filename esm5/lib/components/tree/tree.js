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
export function ITreeData() { }
if (false) {
    /**
     * tree of items
     * @type {?}
     */
    ITreeData.prototype.items;
}
/**
 * Interface for the single TreeComponent's "Item"
 *
 * \@property icon (optional)
 * \@property img (optional)
 * \@property classes (optional)
 * \@property text (required)
 * \@property payload (optional)
 * \@property _meta (optional)
 * \@property items (optional)
 * @record
 */
export function ITreeItem() { }
if (false) {
    /**
     * the node's toggle arrow, to expand and
     * collapse it's child nodes.
     * @type {?|undefined}
     */
    ITreeItem.prototype.toggle;
    /**
     * the item's icon, only used on leaf items
     * @type {?|undefined}
     */
    ITreeItem.prototype.icon;
    /**
     * the item's right icon, only used on tree items
     * @type {?|undefined}
     */
    ITreeItem.prototype.iconright;
    /**
     * the item's image, only used on leaf items
     * @type {?|undefined}
     */
    ITreeItem.prototype.img;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    ITreeItem.prototype.classes;
    /**
     * the item's rendered text
     * @type {?}
     */
    ITreeItem.prototype.text;
    /**
     * payload for onClick events
     * @type {?|undefined}
     */
    ITreeItem.prototype.payload;
    /**
     * additional info useful for the component's logic
     * @type {?|undefined}
     */
    ITreeItem.prototype._meta;
    /**
     * item recursion
     * @type {?|undefined}
     */
    ITreeItem.prototype.items;
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
                    template: "<div *ngIf=\"data\" class=\"n7-tree\">\n    <!-- Start recursive rendering -->\n    <ng-container *ngTemplateOutlet=\"recursiveTree; context:{$implicit: data.items}\"></ng-container>\n\n    <!-- Template for recursive children rendering -->\n    <ng-template #recursiveTree let-node>\n        <div class=\"n7-tree__item {{ item.classes || '' }}\" *ngFor=\"let item of node\">\n            <div class=\"n7-tree__item-contents\">\n                <!-- Render expand/collapse arrow -->\n                <span *ngIf=\"item.toggle\"\n                      class=\"n7-tree__item-toggle {{ item.toggle.icon }}\"\n                      (click)=\"onClick(item.toggle.payload)\">\n                </span>\n                <!-- Render the node -->\n                <div class=\"n7-tree__item-details\"\n                     (click)=\"onClick(item.payload)\">\n                    <span *ngIf=\"item.icon\" class=\"n7-tree__item-icon {{ item.icon }}\"></span>\n                    <img class=\"n7-tree__item-img\" *ngIf=\"item.img\" src=\"{{ item.img }}\" alt=\"{{ item.text }}\"/>\n                    <span class=\"n7-tree__item-text\">{{ item.text }}</span>\n                    <span class=\"n7-tree__item-right-icon {{ item.iconright }}\"></span>\n                </div>\n            </div>\n            <!-- Check for more child nodes and render them -->\n            <div class=\"n7-tree__children-wrapper\" *ngIf=\"item.items\">\n                <ng-container *ngTemplateOutlet=\"recursiveTree; context:{$implicit: item.items}\"></ng-container>\n            </div>\n        </div>\n    </ng-template>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdHJlZS90cmVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhakQsK0JBS0M7Ozs7OztJQURDLDBCQUFtQjs7Ozs7Ozs7Ozs7Ozs7QUFjckIsK0JBeUNDOzs7Ozs7O0lBcENDLDJCQUdDOzs7OztJQUlELHlCQUFjOzs7OztJQUlkLDhCQUFtQjs7Ozs7SUFJbkIsd0JBQWE7Ozs7O0lBSWIsNEJBQWM7Ozs7O0lBSWQseUJBQWE7Ozs7O0lBSWIsNEJBQWM7Ozs7O0lBSWQsMEJBQVk7Ozs7O0lBSVosMEJBQW9COztBQUd0QjtJQUFBO0lBYUEsQ0FBQzs7Ozs7SUFMRSwrQkFBTzs7OztJQUFQLFVBQVEsT0FBTztRQUNkLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixnbERBQTBCO2lCQUMzQjs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUFPUixvQkFBQztDQUFBLEFBYkQsSUFhQztTQVRZLGFBQWE7OztJQUN4Qiw2QkFBeUI7O0lBQ3pCLDZCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUUkVFLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBUcmVlQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgaGVhZGVyIChyZXF1aXJlZClcbiAqIC0gaWNvbiAocmVxdWlyZWQpXG4gKiAtIHRleHQgKHJlcXVpcmVkKVxuICogLSBjb2xsYXBzZUljb24gKHJlcXVpcmVkKVxuICogLSBjbGFzc2VzIChvcHRpb25hbClcbiAqIC0gcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaXRlbXMgKHJlcXVpcmVkKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlRGF0YSB7XG4gIC8qKlxuICAgKiB0cmVlIG9mIGl0ZW1zXG4gICAqL1xuICBpdGVtczogSVRyZWVJdGVtW107XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciB0aGUgc2luZ2xlIFRyZWVDb21wb25lbnQncyBcIkl0ZW1cIlxuICpcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpbWcgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpdGVtcyAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVJdGVtIHtcbiAgLyoqXG4gICAqIHRoZSBub2RlJ3MgdG9nZ2xlIGFycm93LCB0byBleHBhbmQgYW5kXG4gICAqIGNvbGxhcHNlIGl0J3MgY2hpbGQgbm9kZXMuXG4gICAqL1xuICB0b2dnbGU/OiB7XG4gICAgaWNvbjogc3RyaW5nO1xuICAgIHBheWxvYWQ/OiBhbnk7XG4gIH1cbiAgLyoqXG4gICAqIHRoZSBpdGVtJ3MgaWNvbiwgb25seSB1c2VkIG9uIGxlYWYgaXRlbXNcbiAgICovXG4gIGljb24/OiBzdHJpbmc7XG4gICAvKipcbiAgICogdGhlIGl0ZW0ncyByaWdodCBpY29uLCBvbmx5IHVzZWQgb24gdHJlZSBpdGVtc1xuICAgKi9cbiAgaWNvbnJpZ2h0Pzogc3RyaW5nO1xuICAvKipcbiAgICogdGhlIGl0ZW0ncyBpbWFnZSwgb25seSB1c2VkIG9uIGxlYWYgaXRlbXNcbiAgICovXG4gIGltZz86IHN0cmluZztcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogYW55O1xuICAvKipcbiAgICogdGhlIGl0ZW0ncyByZW5kZXJlZCB0ZXh0XG4gICAqL1xuICB0ZXh0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBwYXlsb2FkIGZvciBvbkNsaWNrIGV2ZW50c1xuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mbyB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG4gIC8qKlxuICAgKiBpdGVtIHJlY3Vyc2lvblxuICAgKi9cbiAgaXRlbXM/OiBJVHJlZUl0ZW1bXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctdHJlZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90cmVlLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJVHJlZURhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICAgb25DbGljayhwYXlsb2FkKXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cbn0iXX0=