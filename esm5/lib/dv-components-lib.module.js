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
import { TableComponent } from './components/table/table';
import { TagComponent } from './components/tag/tag';
/** @type {?} */
var COMPONENTS = [
    BreadcrumbsComponent,
    HeaderComponent,
    LoaderComponent,
    NavComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHYtY29tcG9uZW50cy1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZHYtY29tcG9uZW50cy1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQUU5QyxVQUFVLEdBQUc7SUFDakIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtJQUNaLGNBQWM7SUFDZCxZQUFZO0NBQ2I7QUFFRDtJQUFBO0lBVXFDLENBQUM7O2dCQVZyQyxRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLFVBQVU7cUJBQ2I7b0JBQ0QsZUFBZSxFQUFFLFVBQVU7b0JBQzNCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsT0FBTyxFQUFFO3dCQUNMLFVBQVU7cUJBQ2I7aUJBQ0o7O0lBQ29DLDRCQUFDO0NBQUEsQUFWdEMsSUFVc0M7U0FBekIscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyZWFkY3J1bWJzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlcic7XG5pbXBvcnQgeyBMb2FkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlcic7XG5pbXBvcnQgeyBOYXZDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2L25hdic7XG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90YWJsZS90YWJsZSc7XG5pbXBvcnQgeyBUYWdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFnL3RhZyc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbXG4gIEJyZWFkY3J1bWJzQ29tcG9uZW50LFxuICBIZWFkZXJDb21wb25lbnQsXG4gIExvYWRlckNvbXBvbmVudCxcbiAgTmF2Q29tcG9uZW50LFxuICBUYWJsZUNvbXBvbmVudCxcbiAgVGFnQ29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBDT01QT05FTlRTLFxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBDT01QT05FTlRTLFxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgQ09NUE9ORU5UUyxcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEdkNvbXBvbmVudHNMaWJNb2R1bGUgeyB9XG4iXX0=