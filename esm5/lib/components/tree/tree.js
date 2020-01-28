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
 * \@property anchor (optional)
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
     * anchor <a>
     * @type {?|undefined}
     */
    ITreeItem.prototype.anchor;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdHJlZS90cmVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFjakQsK0JBS0M7Ozs7OztJQURDLDBCQUFtQjs7Ozs7Ozs7Ozs7Ozs7QUFjckIsK0JBeUNDOzs7Ozs7O0lBcENDLDJCQUdDOzs7OztJQUlELHlCQUFjOzs7OztJQUlkLDhCQUFtQjs7Ozs7SUFJbkIsd0JBQWE7Ozs7O0lBSWIsNEJBQWM7Ozs7O0lBSWQseUJBQWE7Ozs7O0lBSWIsMkJBQWlCOzs7OztJQUlqQiwwQkFBWTs7Ozs7SUFJWiwwQkFBb0I7O0FBR3RCO0lBQUE7SUFhQSxDQUFDOzs7OztJQUxFLCtCQUFPOzs7O0lBQVAsVUFBUSxPQUFPO1FBQ2QsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLCt0REFBMEI7aUJBQzNCOzs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLOztJQU9SLG9CQUFDO0NBQUEsQUFiRCxJQWFDO1NBVFksYUFBYTs7O0lBQ3hCLDZCQUF5Qjs7SUFDekIsNkJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gVFJFRS50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJQW5jaG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkLWludGVyZmFjZXMnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgVHJlZUNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBoZWFkZXIgKHJlcXVpcmVkKVxyXG4gKiAtIGljb24gKHJlcXVpcmVkKVxyXG4gKiAtIHRleHQgKHJlcXVpcmVkKVxyXG4gKiAtIGNvbGxhcHNlSWNvbiAocmVxdWlyZWQpXHJcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIC0gcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpdGVtcyAocmVxdWlyZWQpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogdHJlZSBvZiBpdGVtc1xyXG4gICAqL1xyXG4gIGl0ZW1zOiBJVHJlZUl0ZW1bXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgdGhlIHNpbmdsZSBUcmVlQ29tcG9uZW50J3MgXCJJdGVtXCJcclxuICpcclxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaW1nIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBhbmNob3IgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaXRlbXMgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVHJlZUl0ZW0ge1xyXG4gIC8qKlxyXG4gICAqIHRoZSBub2RlJ3MgdG9nZ2xlIGFycm93LCB0byBleHBhbmQgYW5kXHJcbiAgICogY29sbGFwc2UgaXQncyBjaGlsZCBub2Rlcy5cclxuICAgKi9cclxuICB0b2dnbGU/OiB7XHJcbiAgICBpY29uOiBzdHJpbmc7XHJcbiAgICBwYXlsb2FkPzogYW55O1xyXG4gIH1cclxuICAvKipcclxuICAgKiB0aGUgaXRlbSdzIGljb24sIG9ubHkgdXNlZCBvbiBsZWFmIGl0ZW1zXHJcbiAgICovXHJcbiAgaWNvbj86IHN0cmluZztcclxuICAgLyoqXHJcbiAgICogdGhlIGl0ZW0ncyByaWdodCBpY29uLCBvbmx5IHVzZWQgb24gdHJlZSBpdGVtc1xyXG4gICAqL1xyXG4gIGljb25yaWdodD86IHN0cmluZztcclxuICAvKipcclxuICAgKiB0aGUgaXRlbSdzIGltYWdlLCBvbmx5IHVzZWQgb24gbGVhZiBpdGVtc1xyXG4gICAqL1xyXG4gIGltZz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogdGhlIGl0ZW0ncyByZW5kZXJlZCB0ZXh0XHJcbiAgICovXHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFuY2hvciA8YT5cclxuICAgKi9cclxuICBhbmNob3I/OiBJQW5jaG9yO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaW5mbyB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xyXG4gICAqL1xyXG4gIF9tZXRhPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIGl0ZW0gcmVjdXJzaW9uXHJcbiAgICovXHJcbiAgaXRlbXM/OiBJVHJlZUl0ZW1bXTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy10cmVlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdHJlZS5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJlZUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogSVRyZWVEYXRhO1xyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgIG9uQ2xpY2socGF5bG9hZCl7XHJcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxufSJdfQ==