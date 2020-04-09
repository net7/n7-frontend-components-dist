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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdHJlZS90cmVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFjakQsOEJBS0M7Ozs7OztJQURDLHlCQUFrQjs7Ozs7Ozs7Ozs7Ozs7QUFjcEIsOEJBeUNDOzs7Ozs7O0lBcENDLDBCQUdFOzs7OztJQUlGLHdCQUFjOzs7OztJQUlkLDZCQUFtQjs7Ozs7SUFJbkIsdUJBQWE7Ozs7O0lBSWIsMkJBQWM7Ozs7O0lBSWQsd0JBQWE7Ozs7O0lBSWIsMEJBQWdCOzs7OztJQUloQix5QkFBWTs7Ozs7SUFJWix5QkFBbUI7O0FBT3JCLE1BQU0sT0FBTyxhQUFhOzs7OztJQUt4QixPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixtcURBQTBCO2FBQzNCOzs7bUJBRUUsS0FBSzttQkFFTCxLQUFLOzs7O0lBRk4sNkJBQXdCOztJQUV4Qiw2QkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVFJFRS50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5jaG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkLWludGVyZmFjZXMnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgVHJlZUNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGhlYWRlciAocmVxdWlyZWQpXG4gKiAtIGljb24gKHJlcXVpcmVkKVxuICogLSB0ZXh0IChyZXF1aXJlZClcbiAqIC0gY29sbGFwc2VJY29uIChyZXF1aXJlZClcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXG4gKiAtIHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGl0ZW1zIChyZXF1aXJlZClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUcmVlRGF0YSB7XG4gIC8qKlxuICAgKiB0cmVlIG9mIGl0ZW1zXG4gICAqL1xuICBpdGVtczogVHJlZUl0ZW1bXTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIHRoZSBzaW5nbGUgVHJlZUNvbXBvbmVudCdzIFwiSXRlbVwiXG4gKlxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGltZyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgYW5jaG9yIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaXRlbXMgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRyZWVJdGVtIHtcbiAgLyoqXG4gICAqIHRoZSBub2RlJ3MgdG9nZ2xlIGFycm93LCB0byBleHBhbmQgYW5kXG4gICAqIGNvbGxhcHNlIGl0J3MgY2hpbGQgbm9kZXMuXG4gICAqL1xuICB0b2dnbGU/OiB7XG4gICAgaWNvbjogc3RyaW5nO1xuICAgIHBheWxvYWQ/OiBhbnk7XG4gIH07XG4gIC8qKlxuICAgKiB0aGUgaXRlbSdzIGljb24sIG9ubHkgdXNlZCBvbiBsZWFmIGl0ZW1zXG4gICAqL1xuICBpY29uPzogc3RyaW5nO1xuICAgLyoqXG4gICAqIHRoZSBpdGVtJ3MgcmlnaHQgaWNvbiwgb25seSB1c2VkIG9uIHRyZWUgaXRlbXNcbiAgICovXG4gIGljb25yaWdodD86IHN0cmluZztcbiAgLyoqXG4gICAqIHRoZSBpdGVtJ3MgaW1hZ2UsIG9ubHkgdXNlZCBvbiBsZWFmIGl0ZW1zXG4gICAqL1xuICBpbWc/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbiAgLyoqXG4gICAqIHRoZSBpdGVtJ3MgcmVuZGVyZWQgdGV4dFxuICAgKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKipcbiAgICogYW5jaG9yIDxhPlxuICAgKi9cbiAgYW5jaG9yPzogQW5jaG9yO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXG4gICAqL1xuICBfbWV0YT86IGFueTtcbiAgLyoqXG4gICAqIGl0ZW0gcmVjdXJzaW9uXG4gICAqL1xuICBpdGVtcz86IFRyZWVJdGVtW107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LXRyZWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdHJlZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUcmVlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogVHJlZURhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cbn1cbiJdfQ==