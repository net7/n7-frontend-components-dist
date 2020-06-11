/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tooltip-content/tooltip-content.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// TOOLTIP-CONTENT.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for TooltipContentComponent's "data"
 *
 * \@property NAME (required|options) <--- TODO: update with interface properties
 * @record
 */
export function TooltipContentData() { }
if (false) {
    /**
     * Title of the tooltip
     * @type {?|undefined}
     */
    TooltipContentData.prototype.title;
    /**
     * Subtitle or text
     * @type {?|undefined}
     */
    TooltipContentData.prototype.text;
    /**
     * Image for the tooltip
     * @type {?|undefined}
     */
    TooltipContentData.prototype.image;
    /**
     * Action or list of actions
     * @type {?|undefined}
     */
    TooltipContentData.prototype.actions;
}
var TooltipContentComponent = /** @class */ (function () {
    function TooltipContentComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    TooltipContentComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    TooltipContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-tooltip-content',
                    template: "<div *ngIf=\"data\"\n     class=\"n7-tooltip-content\">\n\n  <div *ngIf=\"data.title\">\n    {{data.title}}\n  </div>\n\n  <div *ngIf=\"data.text\"\n       [innerHTML]=\"data.text\">\n  </div>\n\n  <img *ngIf=\"data.image\"\n       [src]=\"data.image\">\n\n  <ng-container *ngFor=\"let btn of data.actions\">\n    <n7-anchor-wrapper [classes]=\"\"\n                       [data]=\"btn\"\n                       (clicked)=\"onClick(btn.anchor.payload)\">\n      <span *ngIf=\"data.text\" class=\"n7-btn\">\n        {{ btn.text }}\n      </span>\n    </n7-anchor-wrapper>\n  </ng-container>\n\n</div>\n"
                }] }
    ];
    TooltipContentComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return TooltipContentComponent;
}());
export { TooltipContentComponent };
if (false) {
    /** @type {?} */
    TooltipContentComponent.prototype.data;
    /** @type {?} */
    TooltipContentComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1jb250ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90b29sdGlwLWNvbnRlbnQvdG9vbHRpcC1jb250ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7QUFRakQsd0NBU0M7Ozs7OztJQVBDLG1DQUFlOzs7OztJQUVmLGtDQUFjOzs7OztJQUVkLG1DQUFlOzs7OztJQUVmLHFDQUFtQjs7QUFHckI7SUFBQTtJQWNBLENBQUM7Ozs7O0lBTEMseUNBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixvbUJBQXFDO2lCQUN0Qzs7O3VCQUVFLEtBQUs7dUJBRUwsS0FBSzs7SUFPUiw4QkFBQztDQUFBLEFBZEQsSUFjQztTQVZZLHVCQUF1Qjs7O0lBQ2xDLHVDQUFrQzs7SUFFbEMsdUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRPT0xUSVAtQ09OVEVOVC50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vc2hhcmVkLWludGVyZmFjZXMnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgVG9vbHRpcENvbnRlbnRDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBOQU1FIChyZXF1aXJlZHxvcHRpb25zKSA8LS0tIFRPRE86IHVwZGF0ZSB3aXRoIGludGVyZmFjZSBwcm9wZXJ0aWVzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVG9vbHRpcENvbnRlbnREYXRhIHtcbiAgLyoqIFRpdGxlIG9mIHRoZSB0b29sdGlwICovXG4gIHRpdGxlPzogc3RyaW5nO1xuICAvKiogU3VidGl0bGUgb3IgdGV4dCAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKiogSW1hZ2UgZm9yIHRoZSB0b29sdGlwICovXG4gIGltYWdlPzogc3RyaW5nO1xuICAvKiogQWN0aW9uIG9yIGxpc3Qgb2YgYWN0aW9ucyAqL1xuICBhY3Rpb25zPzogQnV0dG9uW107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LXRvb2x0aXAtY29udGVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sdGlwLWNvbnRlbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcENvbnRlbnRDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBUb29sdGlwQ29udGVudERhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cbn1cbiJdfQ==