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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdHJlZS90cmVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWNqRCwrQkFLQzs7Ozs7O0lBREMsMEJBQW1COzs7Ozs7Ozs7Ozs7OztBQWNyQiwrQkF5Q0M7Ozs7Ozs7SUFwQ0MsMkJBR0M7Ozs7O0lBSUQseUJBQWM7Ozs7O0lBSWQsOEJBQW1COzs7OztJQUluQix3QkFBYTs7Ozs7SUFJYiw0QkFBYzs7Ozs7SUFJZCx5QkFBYTs7Ozs7SUFJYiwyQkFBaUI7Ozs7O0lBSWpCLDBCQUFZOzs7OztJQUlaLDBCQUFvQjs7QUFHdEI7SUFBQTtJQWFBLENBQUM7Ozs7O0lBTEUsK0JBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDZCxJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQVpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsbXFEQUEwQjtpQkFDM0I7Ozt1QkFFRSxLQUFLO3VCQUNMLEtBQUs7O0lBT1Isb0JBQUM7Q0FBQSxBQWJELElBYUM7U0FUWSxhQUFhOzs7SUFDeEIsNkJBQXlCOztJQUN6Qiw2QkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVFJFRS50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFRyZWVDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBoZWFkZXIgKHJlcXVpcmVkKVxuICogLSBpY29uIChyZXF1aXJlZClcbiAqIC0gdGV4dCAocmVxdWlyZWQpXG4gKiAtIGNvbGxhcHNlSWNvbiAocmVxdWlyZWQpXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxuICogLSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpdGVtcyAocmVxdWlyZWQpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVEYXRhIHtcbiAgLyoqXG4gICAqIHRyZWUgb2YgaXRlbXNcbiAgICovXG4gIGl0ZW1zOiBJVHJlZUl0ZW1bXTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIHRoZSBzaW5nbGUgVHJlZUNvbXBvbmVudCdzIFwiSXRlbVwiXG4gKlxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGltZyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgYW5jaG9yIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaXRlbXMgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlSXRlbSB7XG4gIC8qKlxuICAgKiB0aGUgbm9kZSdzIHRvZ2dsZSBhcnJvdywgdG8gZXhwYW5kIGFuZFxuICAgKiBjb2xsYXBzZSBpdCdzIGNoaWxkIG5vZGVzLlxuICAgKi9cbiAgdG9nZ2xlPzoge1xuICAgIGljb246IHN0cmluZztcbiAgICBwYXlsb2FkPzogYW55O1xuICB9XG4gIC8qKlxuICAgKiB0aGUgaXRlbSdzIGljb24sIG9ubHkgdXNlZCBvbiBsZWFmIGl0ZW1zXG4gICAqL1xuICBpY29uPzogc3RyaW5nO1xuICAgLyoqXG4gICAqIHRoZSBpdGVtJ3MgcmlnaHQgaWNvbiwgb25seSB1c2VkIG9uIHRyZWUgaXRlbXNcbiAgICovXG4gIGljb25yaWdodD86IHN0cmluZztcbiAgLyoqXG4gICAqIHRoZSBpdGVtJ3MgaW1hZ2UsIG9ubHkgdXNlZCBvbiBsZWFmIGl0ZW1zXG4gICAqL1xuICBpbWc/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbiAgLyoqXG4gICAqIHRoZSBpdGVtJ3MgcmVuZGVyZWQgdGV4dFxuICAgKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKipcbiAgICogYW5jaG9yIDxhPlxuICAgKi9cbiAgYW5jaG9yPzogSUFuY2hvcjtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mbyB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG4gIC8qKlxuICAgKiBpdGVtIHJlY3Vyc2lvblxuICAgKi9cbiAgaXRlbXM/OiBJVHJlZUl0ZW1bXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctdHJlZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90cmVlLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJVHJlZURhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICAgb25DbGljayhwYXlsb2FkKXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cbn0iXX0=