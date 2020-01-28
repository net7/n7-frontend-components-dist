/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export class TreeComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
}
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
if (false) {
    /** @type {?} */
    TreeComponent.prototype.data;
    /** @type {?} */
    TreeComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdHJlZS90cmVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWNqRCwrQkFLQzs7Ozs7O0lBREMsMEJBQW1COzs7Ozs7Ozs7Ozs7OztBQWNyQiwrQkF5Q0M7Ozs7Ozs7SUFwQ0MsMkJBR0M7Ozs7O0lBSUQseUJBQWM7Ozs7O0lBSWQsOEJBQW1COzs7OztJQUluQix3QkFBYTs7Ozs7SUFJYiw0QkFBYzs7Ozs7SUFJZCx5QkFBYTs7Ozs7SUFJYiwyQkFBaUI7Ozs7O0lBSWpCLDBCQUFZOzs7OztJQUlaLDBCQUFvQjs7QUFPdEIsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBSXZCLE9BQU8sQ0FBQyxPQUFPO1FBQ2QsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUFaRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLG1xREFBMEI7YUFDM0I7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETiw2QkFBeUI7O0lBQ3pCLDZCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUUkVFLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQW5jaG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkLWludGVyZmFjZXMnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgVHJlZUNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGhlYWRlciAocmVxdWlyZWQpXG4gKiAtIGljb24gKHJlcXVpcmVkKVxuICogLSB0ZXh0IChyZXF1aXJlZClcbiAqIC0gY29sbGFwc2VJY29uIChyZXF1aXJlZClcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXG4gKiAtIHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGl0ZW1zIChyZXF1aXJlZClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJVHJlZURhdGEge1xuICAvKipcbiAgICogdHJlZSBvZiBpdGVtc1xuICAgKi9cbiAgaXRlbXM6IElUcmVlSXRlbVtdO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgdGhlIHNpbmdsZSBUcmVlQ29tcG9uZW50J3MgXCJJdGVtXCJcbiAqXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaW1nIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBhbmNob3IgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpdGVtcyAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVJdGVtIHtcbiAgLyoqXG4gICAqIHRoZSBub2RlJ3MgdG9nZ2xlIGFycm93LCB0byBleHBhbmQgYW5kXG4gICAqIGNvbGxhcHNlIGl0J3MgY2hpbGQgbm9kZXMuXG4gICAqL1xuICB0b2dnbGU/OiB7XG4gICAgaWNvbjogc3RyaW5nO1xuICAgIHBheWxvYWQ/OiBhbnk7XG4gIH1cbiAgLyoqXG4gICAqIHRoZSBpdGVtJ3MgaWNvbiwgb25seSB1c2VkIG9uIGxlYWYgaXRlbXNcbiAgICovXG4gIGljb24/OiBzdHJpbmc7XG4gICAvKipcbiAgICogdGhlIGl0ZW0ncyByaWdodCBpY29uLCBvbmx5IHVzZWQgb24gdHJlZSBpdGVtc1xuICAgKi9cbiAgaWNvbnJpZ2h0Pzogc3RyaW5nO1xuICAvKipcbiAgICogdGhlIGl0ZW0ncyBpbWFnZSwgb25seSB1c2VkIG9uIGxlYWYgaXRlbXNcbiAgICovXG4gIGltZz86IHN0cmluZztcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogYW55O1xuICAvKipcbiAgICogdGhlIGl0ZW0ncyByZW5kZXJlZCB0ZXh0XG4gICAqL1xuICB0ZXh0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhbmNob3IgPGE+XG4gICAqL1xuICBhbmNob3I/OiBJQW5jaG9yO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXG4gICAqL1xuICBfbWV0YT86IGFueTtcbiAgLyoqXG4gICAqIGl0ZW0gcmVjdXJzaW9uXG4gICAqL1xuICBpdGVtcz86IElUcmVlSXRlbVtdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy10cmVlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RyZWUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVHJlZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElUcmVlRGF0YTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gICBvbkNsaWNrKHBheWxvYWQpe1xuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxufSJdfQ==