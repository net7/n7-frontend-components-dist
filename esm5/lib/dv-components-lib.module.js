/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header';
import { LoaderComponent } from './components/loader/loader';
import { NavComponent } from './components/nav/nav';
import { PaginationComponent } from './components/pagination/pagination';
import { TableComponent } from './components/table/table';
import { TagComponent } from './components/tag/tag';
import { AlertComponent } from './components/alert/alert';
/** @type {?} */
var COMPONENTS = [
    AlertComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    LoaderComponent,
    NavComponent,
    PaginationComponent,
    TableComponent,
    TagComponent
];
var DvComponentsLibModule = /** @class */ (function () {
    function DvComponentsLibModule() {
    }
    DvComponentsLibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        COMPONENTS,
                    ],
                    entryComponents: COMPONENTS,
                    imports: [CommonModule],
                    exports: [
                        COMPONENTS,
                    ],
                },] }
    ];
    return DvComponentsLibModule;
}());
export { DvComponentsLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHYtY29tcG9uZW50cy1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZHYtY29tcG9uZW50cy1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7SUFFcEQsVUFBVSxHQUFHO0lBQ2pCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxZQUFZO0NBQ2I7QUFFRDtJQUFBO0lBVXFDLENBQUM7O2dCQVZyQyxRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLFVBQVU7cUJBQ2I7b0JBQ0QsZUFBZSxFQUFFLFVBQVU7b0JBQzNCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsT0FBTyxFQUFFO3dCQUNMLFVBQVU7cUJBQ2I7aUJBQ0o7O0lBQ29DLDRCQUFDO0NBQUEsQUFWdEMsSUFVc0M7U0FBekIscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyZWFkY3J1bWJzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlcic7XG5pbXBvcnQgeyBMb2FkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlcic7XG5pbXBvcnQgeyBOYXZDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2L25hdic7XG5pbXBvcnQgeyBQYWdpbmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbic7XG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90YWJsZS90YWJsZSc7XG5pbXBvcnQgeyBUYWdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFnL3RhZyc7XG5pbXBvcnQgeyBBbGVydENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hbGVydC9hbGVydCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbXG4gIEFsZXJ0Q29tcG9uZW50LFxuICBCcmVhZGNydW1ic0NvbXBvbmVudCxcbiAgSGVhZGVyQ29tcG9uZW50LFxuICBMb2FkZXJDb21wb25lbnQsXG4gIE5hdkNvbXBvbmVudCxcbiAgUGFnaW5hdGlvbkNvbXBvbmVudCxcbiAgVGFibGVDb21wb25lbnQsXG4gIFRhZ0NvbXBvbmVudFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQ09NUE9ORU5UUyxcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogQ09NUE9ORU5UUyxcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIENPTVBPTkVOVFMsXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRHZDb21wb25lbnRzTGliTW9kdWxlIHsgfVxuIl19