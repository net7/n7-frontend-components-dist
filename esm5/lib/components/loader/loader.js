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
/**
 * LoaderComponent <n7-loader>
 *
 * \@example
 * ```html
 *
 * <n7-loader [data]="{
 *          classes: 'animated-loader'
 *      }">
 * </n7-loader>
 * ```
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7QUFRL0MsaUNBU0M7Ozs7OztJQUxHLDhCQUFpQjs7Ozs7SUFJakIsNEJBQVk7Ozs7Ozs7Ozs7Ozs7O0FBZ0JoQjtJQUFBO0lBTUEsQ0FBQzs7Z0JBTkEsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxXQUFXO29CQUNyQixpRkFBNEI7aUJBQy9COzs7dUJBRUksS0FBSzs7SUFDVixzQkFBQztDQUFBLEFBTkQsSUFNQztTQUZZLGVBQWU7OztJQUN4QiwrQkFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTE9BREVSLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgTG9hZGVyQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqIFxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJTG9hZGVyRGF0YSB7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICAgKi9cbiAgICBjbGFzc2VzPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgICAqL1xuICAgIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIExvYWRlckNvbXBvbmVudCA8bjctbG9hZGVyPlxuICogXG4gKiBAZXhhbXBsZVxuICogYGBgaHRtbFxuICogXG4gKiA8bjctbG9hZGVyIFtkYXRhXT1cIntcbiAqICAgICAgICAgIGNsYXNzZXM6ICdhbmltYXRlZC1sb2FkZXInXG4gKiAgICAgIH1cIj5cbiAqIDwvbjctbG9hZGVyPlxuICogYGBgXG4gKi9cbiAgIFxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduNy1sb2FkZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9sb2FkZXIuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTG9hZGVyQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBwdWJsaWMgZGF0YTogSUxvYWRlckRhdGE7XG59XG4iXX0=