/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/loader/loader.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export class LoaderComponent {
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
if (false) {
    /** @type {?} */
    LoaderComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBUS9DLGlDQVNDOzs7Ozs7SUFMRyw4QkFBaUI7Ozs7O0lBSWpCLDRCQUFZOztBQU9oQixNQUFNLE9BQU8sZUFBZTs7O1lBSjNCLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsV0FBVztnQkFDckIsaUZBQTRCO2FBQy9COzs7bUJBRUksS0FBSzs7OztJQUFOLCtCQUFrQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBMT0FERVIudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBMb2FkZXJDb21wb25lbnQncyBcImRhdGFcIlxuICogXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElMb2FkZXJEYXRhIHtcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgICAqL1xuICAgIGNsYXNzZXM/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBpbmZvXG4gICAgICovXG4gICAgX21ldGE/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbjctbG9hZGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9hZGVyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIExvYWRlckNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgcHVibGljIGRhdGE6IElMb2FkZXJEYXRhO1xufVxuIl19