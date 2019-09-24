/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// LOADER.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for LoaderComponent's "data"
 *
 * \@property classes (optional)
 * \@property _meta (optional)
 * @record
 */
export function ILoaderData() { }
if (false) {
    /**
     * additional html classes
     * @type {?|undefined}
     */
    ILoaderData.prototype.classes;
    /**
     * additional info
     * @type {?|undefined}
     */
    ILoaderData.prototype._meta;
}
var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-loader',
                    template: "<div class=\"n7-loader {{data.classes || ''}}\">\n    Loading\n</div>"
                }] }
    ];
    LoaderComponent.propDecorators = {
        data: [{ type: Input }]
    };
    return LoaderComponent;
}());
export { LoaderComponent };
if (false) {
    /** @type {?} */
    LoaderComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7QUFRL0MsaUNBU0M7Ozs7OztJQUxHLDhCQUFpQjs7Ozs7SUFJakIsNEJBQVk7O0FBR2hCO0lBQUE7SUFNQSxDQUFDOztnQkFOQSxTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLGlGQUE0QjtpQkFDL0I7Ozt1QkFFSSxLQUFLOztJQUNWLHNCQUFDO0NBQUEsQUFORCxJQU1DO1NBRlksZUFBZTs7O0lBQ3hCLCtCQUFrQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBMT0FERVIudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBMb2FkZXJDb21wb25lbnQncyBcImRhdGFcIlxuICogXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElMb2FkZXJEYXRhIHtcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgICAqL1xuICAgIGNsYXNzZXM/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBpbmZvXG4gICAgICovXG4gICAgX21ldGE/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbjctbG9hZGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9hZGVyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIExvYWRlckNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgcHVibGljIGRhdGE6IElMb2FkZXJEYXRhO1xufVxuIl19