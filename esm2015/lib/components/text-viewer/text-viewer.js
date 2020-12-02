var TextViewerComponent_1;
import { __decorate, __metadata } from "tslib";
//---------------------------
// TEXT-VIEWER.ts
//---------------------------
import { Component, Input } from '@angular/core';
let TextViewerComponent = TextViewerComponent_1 = class TextViewerComponent {
    ngOnInit() {
        if (!TextViewerComponent_1._loaded) {
            const s = document.createElement('script');
            s.setAttribute('src', '/assets/pb-components/dist/pb-components-bundle.js');
            s.setAttribute('type', 'module');
            s.onload = this.onScriptLoaded;
            document.head.appendChild(s);
        }
    }
    onScriptLoaded() {
        TextViewerComponent_1._loaded = true;
    }
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
};
TextViewerComponent._loaded = false;
__decorate([
    Input(),
    __metadata("design:type", Object)
], TextViewerComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TextViewerComponent.prototype, "emit", void 0);
TextViewerComponent = TextViewerComponent_1 = __decorate([
    Component({
        selector: 'n7-text-viewer',
        template: "<!-- NEW -->\n<div class=\"n7-text-viewer {{data.classes || ''}}\" *ngIf=\"data && data.endpoint\">\n    <pb-page [attr.endpoint]=\"data.endpoint\">\n        <pb-document *ngFor=\"let doc of data.docs\" [path]=\"doc.xml\" [odd]=\"doc.odd\" view=\"page\" [id]=\"doc.id\">\n        </pb-document>\n\n        <app-drawer-layout force-narrow=\"force-narrow\" narrow=\"\">\n            <app-header-layout>\n                <app-header fixed=\"fixed\" data-template=\"browse:fix-links\" style=\"\n                transition-duration: 0ms;\n                transform: translate3d(0px, 0px, 0px);\n                left: 0px;\n                right: 0.399994px;\">\n                    <app-toolbar class=\"toolbar\" sticky=\"sticky\" style=\"transform: translate3d(0px, 0px, 0px)\">\n                        <paper-icon-button id=\"tocToggle\" class=\"toc-toggle\" icon=\"icons:view-list\" role=\"button\"\n                            tabindex=\"0\" aria-disabled=\"false\"></paper-icon-button>\n\n                        <pb-toggle-feature name=\"highlight\" selector=\"tei-app,pb-popover\" default=\"off\"\n                            action=\"disable\" emit=\"transcription\" subscribe=\"transcription\">\n                            <pb-i18n key=\"document.plain\">Plain Reading View</pb-i18n>\n                        </pb-toggle-feature>\n                        <pb-zoom emit=\"transcription\" direction=\"in\" icon=\"icons:zoom-in\"></pb-zoom>\n                        <pb-zoom emit=\"transcription\" direction=\"out\" icon=\"icons:zoom-out\"></pb-zoom>\n                        <pb-navigation emit=\"transcription\" keyboard=\"left\" subscribe=\"transcription\"\n                            direction=\"backward\" unit=\"page\">\n                            <paper-icon-button icon=\"icons:chevron-left\" role=\"button\" tabindex=\"0\"\n                                aria-disabled=\"false\"></paper-icon-button>\n                        </pb-navigation>\n                        <pb-navigation emit=\"transcription\" keyboard=\"right\" subscribe=\"transcription\"\n                            direction=\"forward\" unit=\"page\">\n                            <paper-icon-button icon=\"icons:chevron-right\" role=\"button\" tabindex=\"0\"\n                                aria-disabled=\"false\"></paper-icon-button>\n                        </pb-navigation>\n\n                        <pb-progress subscribe=\"transcription\" indeterminate=\"\" bottom-item=\"bottom-item\"\n                            style=\"visibility: hidden\"></pb-progress>\n                    </app-toolbar>\n                </app-header>\n                <pb-drawer toggle=\"tocToggle\" class=\"tocDrawer\" emit=\"toc\" subscribe=\"transcription\">\n                    <div class=\"drawer-content\">\n                        <h3>\n                            <pb-i18n key=\"document.contents\">Contents</pb-i18n>\n                        </h3>\n                        <pb-load *ngIf=\"data.docs\" id=\"toc\" url=\"templates/toc.html?target=transcription&amp;icons=true\"\n                            [src]=\"data.docs[0].id\" subscribe=\"toc\" load-once=\"load-once\">Loading ...</pb-load>\n                    </div>\n                </pb-drawer>\n                <main class=\"content-body\">\n                    <pb-facsimile *ngIf=\"data.facsimile\" id=\"facsimile\" [attr.base-uri]=\"data.facsimile.uri\"\n                        subscribe=\"transcription\" default-zoom-level=\"0\"\n                        show-navigation-control=\"show-navigation-control\" show-navigator=\"show-navigator\">\n                    </pb-facsimile>\n                    <ng-container *ngFor=\"let doc of data.docs; index as $i;\">\n                        <!-- NO CHANNEL -->\n                        <pb-view *ngIf=\"!doc.channel\" id=\"view{{ $i }}\" [src]=\"doc.id\" subscribe=\"transcription\"\n                            emit=\"transcription\" [attr.wait-for]=\"data.facsimile ? '#facsimile' : null\" column-separator=\".tei-cb\"\n                            append-footnotes=\"append-footnotes\" view=\"page\"></pb-view>\n                        <!-- WITH CHANNEL -->\n                        <pb-view *ngIf=\"doc.channel\" id=\"view{{ $i }}\" [src]=\"doc.id\" emit=\"{{ doc.channel }}\"\n                        view=\"single\">\n                            <pb-param name=\"mode\" value=\"{{ doc.channel }}\"></pb-param>\n                        </pb-view>\n                    </ng-container>\n                </main>\n            </app-header-layout>\n        </app-drawer-layout>\n    </pb-page>\n</div>"
    })
], TextViewerComponent);
export { TextViewerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC12aWV3ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RleHQtdmlld2VyL3RleHQtdmlld2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQTZCO0FBQzdCLGlCQUFpQjtBQUNqQiw2QkFBNkI7QUFDN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFvQ3pELElBQWEsbUJBQW1CLDJCQUFoQyxNQUFhLG1CQUFtQjtJQU85QixRQUFRO1FBQ04sSUFBSSxDQUFDLHFCQUFtQixDQUFDLE9BQU8sRUFBRTtZQUNoQyxNQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNDLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLG9EQUFvRCxDQUFDLENBQUM7WUFDNUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDakMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQy9CLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUVELGNBQWM7UUFDWixxQkFBbUIsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNGLENBQUE7QUFwQlEsMkJBQU8sR0FBRyxLQUFLLENBQUM7QUFKZDtJQUFSLEtBQUssRUFBRTs7aURBQXNCO0FBRXJCO0lBQVIsS0FBSyxFQUFFOztpREFBVztBQUhSLG1CQUFtQjtJQUovQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLG8vSUFBaUM7S0FDbEMsQ0FBQztHQUNXLG1CQUFtQixDQXlCL0I7U0F6QlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRFWFQtVklFV0VSLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBUZXh0Vmlld2VyQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqIEBwcm9wZXJ0eSBlbmRwb2ludCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgZG9jIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBmYWNzaW1pbGUgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRleHRWaWV3ZXJEYXRhIHtcbiAgLypcbiAgICAgKiBURUlQdWIgc2VydmVyIGVuZHBvaW50XG4gICovXG4gIGVuZHBvaW50OiBzdHJpbmc7XG4gIC8qXG4gICAgICogWE1MIGFuZCBPREQgcGF0aHNcbiAgKi9cbiAgZG9jczoge1xuICAgIHhtbDogc3RyaW5nO1xuICAgIG9kZDogc3RyaW5nO1xuICAgIGlkOiBzdHJpbmc7XG4gICAgY2hhbm5lbD86IHN0cmluZztcbiAgfVtdO1xuICAvKlxuICAgICAqIElJSUYgc2VydmVyIGVuZHBvaW50XG4gICovXG4gIGZhY3NpbWlsZT86IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy10ZXh0LXZpZXdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0LXZpZXdlci5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGV4dFZpZXdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRhdGE6IFRleHRWaWV3ZXJEYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBzdGF0aWMgX2xvYWRlZCA9IGZhbHNlO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghVGV4dFZpZXdlckNvbXBvbmVudC5fbG9hZGVkKSB7XG4gICAgICBjb25zdCBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBzLnNldEF0dHJpYnV0ZSgnc3JjJywgJy9hc3NldHMvcGItY29tcG9uZW50cy9kaXN0L3BiLWNvbXBvbmVudHMtYnVuZGxlLmpzJyk7XG4gICAgICBzLnNldEF0dHJpYnV0ZSgndHlwZScsICdtb2R1bGUnKTtcbiAgICAgIHMub25sb2FkID0gdGhpcy5vblNjcmlwdExvYWRlZDtcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQocyk7XG4gICAgfVxuICB9XG5cbiAgb25TY3JpcHRMb2FkZWQoKSB7XG4gICAgVGV4dFZpZXdlckNvbXBvbmVudC5fbG9hZGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG59XG4iXX0=