//---------------------------
// TOAST.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var ToastComponent = /** @class */ (function () {
    function ToastComponent() {
    }
    ToastComponent.prototype.onClick = function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ToastComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ToastComponent.prototype, "emit", void 0);
    ToastComponent = __decorate([
        Component({
            selector: 'n7-toast',
            template: "<div *ngIf=\"data\" class=\"n7-toast\">\n    <div class=\"n7-toast__column {{data.classes || ''}}\">\n\n        <!-- Toast boxes -->\n        <div class=\"n7-toast__box\" \n             *ngFor=\"let box of data.toasts\"\n             [ngClass]=\"{ 'has-actions' : !! (box.actions || box.closeIcon) }\">\n        \n            <!-- Toast text -->\n            <div class=\"n7-toast__content {{box.classes || ''}}\" *ngIf=\"box.title || box.text\">\n                <span class=\"n7-toast__title\" *ngIf=\"box.title\">{{ box.title }}</span>\n                <span class=\"n7-toast__text\" *ngIf=\"box.text\">{{ box.text }}</span>\n            </div>\n\n            <!-- Toast actions -->\n            <div class=\"n7-toast__actions\" *ngIf=\"box.actions || box.closeIcon\">\n                <span\n                class=\"n7-toast__closeIcon {{ box.closeIcon.icon }}\" \n                *ngIf=\"box.closeIcon\" \n                (click)=\"onClick(box.closeIcon.payload)\">\n                </span>\n                <span class=\"n7-toast__action-wrapper\" *ngIf=\"box.actions\">\n                    <span class=\"n7-toast__action-content\" *ngFor=\"let action of box.actions\">\n                        <button class=\"n7-toast__action-button n7-btn n7-btn-s {{action.classes || ''}}\"\n                                (click)=\"onClick(action.payload)\">\n                                {{action.text}}\n                        </button>\n                    </span>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>"
        })
    ], ToastComponent);
    return ToastComponent;
}());
export { ToastComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RvYXN0L3RvYXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixXQUFXO0FBQ1gsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXdGakQ7SUFBQTtJQVVBLENBQUM7SUFMQyxnQ0FBTyxHQUFQLFVBQVEsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQVJRO1FBQVIsS0FBSyxFQUFFOztnREFBaUI7SUFFaEI7UUFBUixLQUFLLEVBQUU7O2dEQUFXO0lBSFIsY0FBYztRQUoxQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQix3aERBQTJCO1NBQzVCLENBQUM7T0FDVyxjQUFjLENBVTFCO0lBQUQscUJBQUM7Q0FBQSxBQVZELElBVUM7U0FWWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRPQVNULnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBUb2FzdENvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IHRvYXN0cyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBUb2FzdERhdGEgeyAvLyB0b2FzdCBjb2x1bW4gd3JhcHBlclxuICB0b2FzdHM6IFRvYXN0Qm94W107XG4gIGNsYXNzZXM/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciB0aGUgc2luZ2xlIFRvYXN0Q29tcG9uZW50J3MgXCJCb3hcIlxuICpcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSB0aW1lciAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xvc2VJY29uIChvcHRpb25hbClcbiAqIC0gaWNvbiAocmVxdWlyZWQpXG4gKiAtIHBheWxvYWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHRpdGxlIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB0ZXh0IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBhY3Rpb25zIChvcHRpb25hbClcbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0Qm94IHtcbiAgLyoqXG4gICAqIHJlcXVpcmVzOiBbaXMtc3VjY2VzcywgaXMtd2FybmluZywgaXMtZXJyb3JdICsgb3B0aW9uYWwgYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM6IHN0cmluZztcbiAgLyoqXG4gICAqIGxhcmdlciwgdGl0bGUgdGV4dFxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aGUgdG9hc3QncyBib2R5IHRleHRcbiAgICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiAnWCcgaWNvbiwgdG8gZGlzbWlzcy9jbG9zZSB0aGUgdG9hc3RcbiAgICogKCBuNy1pY29uLWNyb3NzIClcbiAgICpcbiAgICogIEVhY2ggaWNvbiByZXF1aXJlcyBpdCdzIG9uQ2xpY2sgcGF5bG9hZFxuICAgKi9cbiAgY2xvc2VJY29uPzoge1xuICAgIGljb246IHN0cmluZztcbiAgICBwYXlsb2FkOiBzdHJpbmc7XG4gIH07XG4gIC8qKlxuICAgKiB0aGUgdG9hc3QncyBvcHRpb25hbCBidXR0b25zXG4gICAqIHN1Z2dlc3Rpb246IGRvbid0IHVzZSBtb3JlIHRoYW4gMiBhY3Rpb25zXG4gICAqL1xuICBhY3Rpb25zPzogVG9hc3RBY3Rpb25bXTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciB0aGUgc2luZ2xlIFRvYXN0Q29tcG9uZW50J3MgXCJBY3Rpb25cIlxuICpcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0QWN0aW9uIHtcbiAgLyoqXG4gICAqIHRoZSBidXR0b24ncyByZW5kZXJlZCB0ZXh0XG4gICAqL1xuICB0ZXh0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aGUgYnV0dG9uJ3Mgb25DbGljayBwYXlsb2FkXG4gICAqL1xuICBwYXlsb2FkOiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctdG9hc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9hc3QuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBUb2FzdERhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cbn1cbiJdfQ==