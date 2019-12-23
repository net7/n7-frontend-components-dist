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
                template: "<div *ngIf=\"data\" class=\"n7-tree\">\n    <!-- Start recursive rendering -->\n    <ng-container *ngTemplateOutlet=\"recursiveTree; context:{$implicit: data.items}\"></ng-container>\n\n    <!-- Template for recursive children rendering -->\n    <ng-template #recursiveTree let-node>\n        <div class=\"n7-tree__item {{ item.classes || '' }}\" *ngFor=\"let item of node\">\n            <div class=\"n7-tree__item-contents\">\n                <!-- Render expand/collapse arrow -->\n                <span *ngIf=\"item.toggle\"\n                      class=\"n7-tree__item-toggle {{ item.toggle.icon }}\"\n                      (click)=\"onClick(item.toggle.payload)\">\n                </span>\n                <!-- Render the node -->\n                <div class=\"n7-tree__item-details\"\n                     (click)=\"onClick(item.payload)\">\n                    <span *ngIf=\"item.icon\" class=\"n7-tree__item-icon {{ item.icon }}\"></span>\n                    <img class=\"n7-tree__item-img\" *ngIf=\"item.img\" src=\"{{ item.img }}\" alt=\"{{ item.text }}\"/>\n                    <span class=\"n7-tree__item-text\">{{ item.text }}</span>\n                    <span class=\"n7-tree__item-right-icon {{ item.iconright }}\"></span>\n                </div>\n            </div>\n            <!-- Check for more child nodes and render them -->\n            <div class=\"n7-tree__children-wrapper\" *ngIf=\"item.items\">\n                <ng-container *ngTemplateOutlet=\"recursiveTree; context:{$implicit: item.items}\"></ng-container>\n            </div>\n        </div>\n    </ng-template>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdHJlZS90cmVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWFqRCwrQkFLQzs7Ozs7O0lBREMsMEJBQW1COzs7Ozs7Ozs7Ozs7OztBQWNyQiwrQkF5Q0M7Ozs7Ozs7SUFwQ0MsMkJBR0M7Ozs7O0lBSUQseUJBQWM7Ozs7O0lBSWQsOEJBQW1COzs7OztJQUluQix3QkFBYTs7Ozs7SUFJYiw0QkFBYzs7Ozs7SUFJZCx5QkFBYTs7Ozs7SUFJYiw0QkFBYzs7Ozs7SUFJZCwwQkFBWTs7Ozs7SUFJWiwwQkFBb0I7O0FBT3RCLE1BQU0sT0FBTyxhQUFhOzs7OztJQUl2QixPQUFPLENBQUMsT0FBTztRQUNkLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBWkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixnbERBQTBCO2FBQzNCOzs7bUJBRUUsS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sNkJBQXlCOztJQUN6Qiw2QkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVFJFRS50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgVHJlZUNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGhlYWRlciAocmVxdWlyZWQpXG4gKiAtIGljb24gKHJlcXVpcmVkKVxuICogLSB0ZXh0IChyZXF1aXJlZClcbiAqIC0gY29sbGFwc2VJY29uIChyZXF1aXJlZClcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXG4gKiAtIHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGl0ZW1zIChyZXF1aXJlZClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJVHJlZURhdGEge1xuICAvKipcbiAgICogdHJlZSBvZiBpdGVtc1xuICAgKi9cbiAgaXRlbXM6IElUcmVlSXRlbVtdO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgdGhlIHNpbmdsZSBUcmVlQ29tcG9uZW50J3MgXCJJdGVtXCJcbiAqXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaW1nIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaXRlbXMgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlSXRlbSB7XG4gIC8qKlxuICAgKiB0aGUgbm9kZSdzIHRvZ2dsZSBhcnJvdywgdG8gZXhwYW5kIGFuZFxuICAgKiBjb2xsYXBzZSBpdCdzIGNoaWxkIG5vZGVzLlxuICAgKi9cbiAgdG9nZ2xlPzoge1xuICAgIGljb246IHN0cmluZztcbiAgICBwYXlsb2FkPzogYW55O1xuICB9XG4gIC8qKlxuICAgKiB0aGUgaXRlbSdzIGljb24sIG9ubHkgdXNlZCBvbiBsZWFmIGl0ZW1zXG4gICAqL1xuICBpY29uPzogc3RyaW5nO1xuICAgLyoqXG4gICAqIHRoZSBpdGVtJ3MgcmlnaHQgaWNvbiwgb25seSB1c2VkIG9uIHRyZWUgaXRlbXNcbiAgICovXG4gIGljb25yaWdodD86IHN0cmluZztcbiAgLyoqXG4gICAqIHRoZSBpdGVtJ3MgaW1hZ2UsIG9ubHkgdXNlZCBvbiBsZWFmIGl0ZW1zXG4gICAqL1xuICBpbWc/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbiAgLyoqXG4gICAqIHRoZSBpdGVtJ3MgcmVuZGVyZWQgdGV4dFxuICAgKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKipcbiAgICogcGF5bG9hZCBmb3Igb25DbGljayBldmVudHNcbiAgICovXG4gIHBheWxvYWQ/OiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm8gdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICovXG4gIF9tZXRhPzogYW55O1xuICAvKipcbiAgICogaXRlbSByZWN1cnNpb25cbiAgICovXG4gIGl0ZW1zPzogSVRyZWVJdGVtW107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LXRyZWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdHJlZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUcmVlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSVRyZWVEYXRhO1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgIG9uQ2xpY2socGF5bG9hZCl7XG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG59Il19