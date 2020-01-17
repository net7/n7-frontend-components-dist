/**
 * @fileoverview added by tsickle
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
                template: "<div *ngIf=\"data\" class=\"n7-tree\">\r\n    <!-- Start recursive rendering -->\r\n    <ng-container *ngTemplateOutlet=\"recursiveTree; context:{$implicit: data.items}\"></ng-container>\r\n\r\n    <!-- Template for recursive children rendering -->\r\n    <ng-template #recursiveTree let-node>\r\n        <div class=\"n7-tree__item {{ item.classes || '' }}\" *ngFor=\"let item of node\">\r\n            <div class=\"n7-tree__item-contents\">\r\n                <!-- Render expand/collapse arrow -->\r\n                <span *ngIf=\"item.toggle\"\r\n                      class=\"n7-tree__item-toggle {{ item.toggle.icon }}\"\r\n                      (click)=\"onClick(item.toggle.payload)\">\r\n                </span>\r\n                <!-- Render the node -->\r\n                <div class=\"n7-tree__item-details\"\r\n                     (click)=\"onClick(item.payload)\">\r\n                    <span *ngIf=\"item.icon\" class=\"n7-tree__item-icon {{ item.icon }}\"></span>\r\n                    <img class=\"n7-tree__item-img\" *ngIf=\"item.img\" src=\"{{ item.img }}\" alt=\"{{ item.text }}\"/>\r\n                    <span class=\"n7-tree__item-text\">{{ item.text }}</span>\r\n                    <span class=\"n7-tree__item-right-icon {{ item.iconright }}\"></span>\r\n                </div>\r\n            </div>\r\n            <!-- Check for more child nodes and render them -->\r\n            <div class=\"n7-tree__children-wrapper\" *ngIf=\"item.items\">\r\n                <ng-container *ngTemplateOutlet=\"recursiveTree; context:{$implicit: item.items}\"></ng-container>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdHJlZS90cmVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWFqRCwrQkFLQzs7Ozs7O0lBREMsMEJBQW1COzs7Ozs7Ozs7Ozs7OztBQWNyQiwrQkF5Q0M7Ozs7Ozs7SUFwQ0MsMkJBR0M7Ozs7O0lBSUQseUJBQWM7Ozs7O0lBSWQsOEJBQW1COzs7OztJQUluQix3QkFBYTs7Ozs7SUFJYiw0QkFBYzs7Ozs7SUFJZCx5QkFBYTs7Ozs7SUFJYiw0QkFBYzs7Ozs7SUFJZCwwQkFBWTs7Ozs7SUFJWiwwQkFBb0I7O0FBT3RCLE1BQU0sT0FBTyxhQUFhOzs7OztJQUl2QixPQUFPLENBQUMsT0FBTztRQUNkLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBWkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQix3b0RBQTBCO2FBQzNCOzs7bUJBRUUsS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sNkJBQXlCOztJQUN6Qiw2QkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBUUkVFLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBUcmVlQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGhlYWRlciAocmVxdWlyZWQpXHJcbiAqIC0gaWNvbiAocmVxdWlyZWQpXHJcbiAqIC0gdGV4dCAocmVxdWlyZWQpXHJcbiAqIC0gY29sbGFwc2VJY29uIChyZXF1aXJlZClcclxuICogLSBjbGFzc2VzIChvcHRpb25hbClcclxuICogLSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGl0ZW1zIChyZXF1aXJlZClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVEYXRhIHtcclxuICAvKipcclxuICAgKiB0cmVlIG9mIGl0ZW1zXHJcbiAgICovXHJcbiAgaXRlbXM6IElUcmVlSXRlbVtdO1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciB0aGUgc2luZ2xlIFRyZWVDb21wb25lbnQncyBcIkl0ZW1cIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpbWcgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaXRlbXMgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVHJlZUl0ZW0ge1xyXG4gIC8qKlxyXG4gICAqIHRoZSBub2RlJ3MgdG9nZ2xlIGFycm93LCB0byBleHBhbmQgYW5kXHJcbiAgICogY29sbGFwc2UgaXQncyBjaGlsZCBub2Rlcy5cclxuICAgKi9cclxuICB0b2dnbGU/OiB7XHJcbiAgICBpY29uOiBzdHJpbmc7XHJcbiAgICBwYXlsb2FkPzogYW55O1xyXG4gIH1cclxuICAvKipcclxuICAgKiB0aGUgaXRlbSdzIGljb24sIG9ubHkgdXNlZCBvbiBsZWFmIGl0ZW1zXHJcbiAgICovXHJcbiAgaWNvbj86IHN0cmluZztcclxuICAgLyoqXHJcbiAgICogdGhlIGl0ZW0ncyByaWdodCBpY29uLCBvbmx5IHVzZWQgb24gdHJlZSBpdGVtc1xyXG4gICAqL1xyXG4gIGljb25yaWdodD86IHN0cmluZztcclxuICAvKipcclxuICAgKiB0aGUgaXRlbSdzIGltYWdlLCBvbmx5IHVzZWQgb24gbGVhZiBpdGVtc1xyXG4gICAqL1xyXG4gIGltZz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogdGhlIGl0ZW0ncyByZW5kZXJlZCB0ZXh0XHJcbiAgICovXHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHBheWxvYWQgZm9yIG9uQ2xpY2sgZXZlbnRzXHJcbiAgICovXHJcbiAgcGF5bG9hZD86IGFueTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGluZm8gdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxuICAvKipcclxuICAgKiBpdGVtIHJlY3Vyc2lvblxyXG4gICAqL1xyXG4gIGl0ZW1zPzogSVRyZWVJdGVtW107XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctdHJlZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RyZWUuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZWVDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IElUcmVlRGF0YTtcclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gICBvbkNsaWNrKHBheWxvYWQpe1xyXG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcbn0iXX0=