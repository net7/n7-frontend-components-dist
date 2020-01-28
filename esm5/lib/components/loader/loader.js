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
var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-loader',
                    template: "<div class=\"n7-loader {{ data && data.classes ? data.classes : '' }}\">\r\n    Loading\r\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBUWpELGlDQVNDOzs7Ozs7SUFMRyw4QkFBaUI7Ozs7O0lBSWpCLDRCQUFZOztBQUdoQjtJQUFBO0lBTUEsQ0FBQzs7Z0JBTkEsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxXQUFXO29CQUNyQiw2R0FBNEI7aUJBQy9COzs7dUJBRUksS0FBSzs7SUFDVixzQkFBQztDQUFBLEFBTkQsSUFNQztTQUZZLGVBQWU7OztJQUN4QiwrQkFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBMT0FERVIudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIExvYWRlckNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElMb2FkZXJEYXRhIHtcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgICAqL1xyXG4gICAgY2xhc3Nlcz86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICAgKi9cclxuICAgIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbjctbG9hZGVyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9sb2FkZXIuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIExvYWRlckNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZGF0YTogSUxvYWRlckRhdGE7XHJcbn1cclxuIl19