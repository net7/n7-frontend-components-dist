//---------------------------
// ALERT.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
    }
    AlertComponent.prototype.onClick = function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AlertComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AlertComponent.prototype, "emit", void 0);
    AlertComponent = __decorate([
        Component({
            selector: 'n7-alert',
            template: "<div class=\"n7-alert {{data.classes || ''}} {{ data.icon ? 'has-icon' : '' }}\" *ngIf=\"data\" >\n    <span class=\"n7-alert__icon {{data.icon}}\" *ngIf=\"data.icon\"></span>\n    <div class=\"n7-alert__text\" [innerHTML]=\"data.text\">\n    </div>\n    <span class=\"n7-alert__close-button n7-icon-close\" \n          *ngIf=\"data.hasCloseButton\" \n          (click)=\"onClick(data.payload)\"></span>\n</div>"
        })
    ], AlertComponent);
    return AlertComponent;
}());
export { AlertComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixXQUFXO0FBQ1gsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQTZDakQ7SUFBQTtJQVVBLENBQUM7SUFMQyxnQ0FBTyxHQUFQLFVBQVEsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQVJRO1FBQVIsS0FBSyxFQUFFOztnREFBaUI7SUFFaEI7UUFBUixLQUFLLEVBQUU7O2dEQUFXO0lBSFIsY0FBYztRQUoxQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQix1YUFBMkI7U0FDNUIsQ0FBQztPQUNXLGNBQWMsQ0FVMUI7SUFBRCxxQkFBQztDQUFBLEFBVkQsSUFVQztTQVZZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQUxFUlQudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFRhZ0NvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGJvZHkgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBoYXNDbG9zZUJ1dHRvbiAob3B0aW9uYWwpXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFsZXJ0RGF0YSB7XG4gIC8qKlxuICAgKiB0aGUgYWxlcnQncyBib2R5L21lc3NhZ2Ugd2hpY2ggY2FuIGluY2x1ZGUgaHRtbCB0YWdzXG4gICovXG4gIHRleHQ6IHN0cmluZztcbiAgLyoqXG4gICAqIGFsZXJ0IGljb24gKG9uIGxlZnQgc2lkZSlcbiAgICovXG4gIGljb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgICovXG4gIHBheWxvYWQ/OiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICovXG4gIF9tZXRhPzogYW55O1xuICAvKipcbiAgICogaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGFsZXJ0IGluY2x1ZGVzIGEgY2xvc2UgYnV0dG9uIChvbiB0b3AtcmlnaHQgY29ybmVyKVxuICAgKiBvciBub3QgKGlmIG5vdCBwcm92aWRlZCBhc3N1bWVkIGFzIGZhbHNlKVxuICAgKi9cbiAgaGFzQ2xvc2VCdXR0b24/OiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1hbGVydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBbGVydENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IEFsZXJ0RGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DbGljayhwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxufVxuIl19