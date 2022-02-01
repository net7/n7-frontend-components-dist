import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../anchor-wrapper/anchor-wrapper";
import * as i2 from "@angular/common";
/**
 * HeaderComponent <n7-header>
 *
 * @structure
 *  >>  cpm = it has Classes, Payload, Metadata  <<
 *  >>  -p- = it has only Payload                <<
 *  >>  +-- = sub-member                         <<
 *  >>  +---> = array                            <<
 *
 *  data (cpm)
 *    +-- actions
 *          +---> action (cpm)
 *                  +-- badge
 *    +-- logo (cp-)
 *    +-- menuToggle
 *          +-- open (-p-)
 *          +-- close (-p-)
 *    +-- nav (cpm)
 *          +---> items
 *    +-- search (cpm)
 *    +-- user (cpm)
 *
 */
export class HeaderComponent {
    onClick(payload) {
        // console.log(type, payload);
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    onKeyUp(payload, keyCode, value) {
        if (!this.emit)
            return;
        this.emit('keyup', { payload, keyCode, value });
    }
}
HeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: HeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: HeaderComponent, selector: "n7-header", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<header *ngIf=\"data\" class=\"n7-header {{data.classes || ''}}\">\n    <div class=\"n7-header__content\">\n\n        <!-- Logo and title -->\n        <div class=\"n7-header__logo-title {{data.logo.classes || ''}}\">\n            <n7-anchor-wrapper [classes]=\"'n7-header__logo-link'\"\n            [data]=\"data.logo.anchor\"\n            (clicked)=\"onClick($event)\">\n                <img class=\"n7-header__logo\"\n                *ngIf=\"data.logo.image\"\n                [src]=\"data.logo.image\"\n                alt=\"{{ data.logo.title }}\" />\n                <div class=\"n7-header__title-subtitle\">\n                    <h1 class=\"n7-header__title\">\n                        {{ data.logo.title }}\n                    </h1>\n                    <h2 class=\"n7-header__subtitle\" *ngIf=\"data.logo.subtitle\">\n                        {{ data.logo.subtitle }}\n                    </h2>\n                </div>\n            </n7-anchor-wrapper>\n        </div>\n\n        <!-- Main menu -->\n        <nav class=\"n7-header__nav {{data.nav.classes || ''}}\" *ngIf=\"data.nav\">\n            <div class=\"n7-header__nav-content\">\n                <ul class=\"n7-header__nav-list\">\n                    <li class=\"n7-header__nav-item {{item.classes || ''}}\" *ngFor=\"let item of data.nav.items\">\n                        <n7-anchor-wrapper [classes]=\"'n7-header__nav-link'\"\n                        [data]=\"item.anchor\"\n                        (clicked)=\"onClick($event)\">\n                            <span class=\"n7-header__nav-icon {{item.icon}}\" *ngIf=\"item.icon\"></span>\n                            <span class=\"n7-header__nav-label\" *ngIf=\"item.text\">\n                                {{ item.text }}\n                            </span>\n                        </n7-anchor-wrapper>\n                        <!-- Sublevel -->\n                        <ul class=\"n7-header__subnav-list\" *ngIf=\"item.subnav\">\n                            <li class=\"n7-header__subnav-item {{subitem.classes || ''}}\" *ngFor=\"let subitem of item.subnav\">\n                                <n7-anchor-wrapper [classes]=\"'n7-header__subnav-link'\"\n                                [data]=\"subitem.anchor\"\n                                (clicked)=\"onClick($event)\">\n                                    <span class=\"n7-header__subnav-icon {{subitem.icon}}\" *ngIf=\"subitem.icon\"></span>\n                                    <span class=\"n7-header__subnav-label\" *ngIf=\"subitem.text\">\n                                        {{ subitem.text }}\n                                    </span>\n                                </n7-anchor-wrapper>\n                            </li>\n                        </ul>\n                    </li>\n                </ul>\n            </div>\n        </nav>\n\n        <!-- Mobile menu toggle -->\n        <div class=\"n7-header__mobile-menu-toggle\">\n            <span class=\"n7-header__mobile-menu-icon n7-icon-menu\" \n                (click)=\"onClick(data.menuToggle.open.payload)\"></span>\n        </div>\n\n        <!-- Mobile menu close -->\n        <span class=\"n7-header__mobile-menu-close n7-icon-close\" \n            (click)=\"onClick(data.menuToggle.close.payload)\"></span>\n\n        <!-- Tools: search, notifications, use profile or login/signup -->\n        <div class=\"n7-header__tools\">\n            \n            <div class=\"n7-header__search {{data.search.classes || ''}}\" *ngIf=\"data.search\">\n                <input class=\"n7-header__search-input\" \n                    type=\"search\" \n                    name=\"search\" \n                    placeholder=\"{{ data.search.hint || ''}}\" \n                    (keyup)=\"onKeyUp(data.search.payload, $event.keyCode, $event.target.value)\"/>\n                <button class=\"n7-header__search-btn\" type=\"submit\" (click)=\"onClick(data.search.payload)\">\n                    <span class=\"n7-header__search-btn-label\">\n                        Search\n                    </span>\n                </button>\n            </div>\n            \n            <div class=\"n7-header__actions\" *ngIf=\"data.actions\">\n                <n7-anchor-wrapper *ngFor=\"let action of data.actions\" \n                [classes]=\"'n7-header__action' + (action.classes || '')\"\n                [data]=\"action.anchor\"\n                (clicked)=\"onClick($event)\">\n                    <span class=\"n7-header__action-icon {{ action.icon }}\"></span>\n                    <span *ngIf=\"action.badge\" class=\"n7-header__action-badge {{ action.badge.text ? 'has-text' : '' }}\">\n                        {{ action.badge.text }}\n                    </span>\n                </n7-anchor-wrapper>\n            </div>\n\n            <div class=\"n7-header__buttons\" *ngIf=\"data.buttons\">\n                <n7-anchor-wrapper *ngFor=\"let button of data.buttons\"\n                [classes]=\"button.classes\" \n                [data]=\"button.anchor\"\n                (clicked)=\"onClick($event)\">\n                <span class=\"\" *ngIf=\"button.text\">\n                    {{ button.text }}\n                </span>\n                <span class=\"{{button.icon}}\" *ngIf=\"button.icon\"></span>\n                </n7-anchor-wrapper>\n            </div>\n\n            <div class=\"n7-header__user {{data.user.classes || ''}}\" *ngIf=\"data.user\">\n                <n7-anchor-wrapper [classes]=\"'n7-header__user-content'\"\n                [data]=\"data.user.anchor\"\n                (clicked)=\"onClick($event)\">\n                    <img *ngIf=\"data.user.img\"\n                    class=\"n7-header__user-img\"  \n                    [src]=\"data.user.img\"/>\n                    <p class=\"n7-header__user-name\" *ngIf=\"data.user.name\">\n                        <span class=\"n7-header__user-name-label\">\n                            {{ data.user.name }}\n                        </span>\n                    </p>\n                </n7-anchor-wrapper>\n            </div>\n        </div>\n\n    </div>\n</header>\n\n", components: [{ type: i1.AnchorWrapperComponent, selector: "n7-anchor-wrapper", inputs: ["data", "classes"], outputs: ["clicked"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-header', template: "<header *ngIf=\"data\" class=\"n7-header {{data.classes || ''}}\">\n    <div class=\"n7-header__content\">\n\n        <!-- Logo and title -->\n        <div class=\"n7-header__logo-title {{data.logo.classes || ''}}\">\n            <n7-anchor-wrapper [classes]=\"'n7-header__logo-link'\"\n            [data]=\"data.logo.anchor\"\n            (clicked)=\"onClick($event)\">\n                <img class=\"n7-header__logo\"\n                *ngIf=\"data.logo.image\"\n                [src]=\"data.logo.image\"\n                alt=\"{{ data.logo.title }}\" />\n                <div class=\"n7-header__title-subtitle\">\n                    <h1 class=\"n7-header__title\">\n                        {{ data.logo.title }}\n                    </h1>\n                    <h2 class=\"n7-header__subtitle\" *ngIf=\"data.logo.subtitle\">\n                        {{ data.logo.subtitle }}\n                    </h2>\n                </div>\n            </n7-anchor-wrapper>\n        </div>\n\n        <!-- Main menu -->\n        <nav class=\"n7-header__nav {{data.nav.classes || ''}}\" *ngIf=\"data.nav\">\n            <div class=\"n7-header__nav-content\">\n                <ul class=\"n7-header__nav-list\">\n                    <li class=\"n7-header__nav-item {{item.classes || ''}}\" *ngFor=\"let item of data.nav.items\">\n                        <n7-anchor-wrapper [classes]=\"'n7-header__nav-link'\"\n                        [data]=\"item.anchor\"\n                        (clicked)=\"onClick($event)\">\n                            <span class=\"n7-header__nav-icon {{item.icon}}\" *ngIf=\"item.icon\"></span>\n                            <span class=\"n7-header__nav-label\" *ngIf=\"item.text\">\n                                {{ item.text }}\n                            </span>\n                        </n7-anchor-wrapper>\n                        <!-- Sublevel -->\n                        <ul class=\"n7-header__subnav-list\" *ngIf=\"item.subnav\">\n                            <li class=\"n7-header__subnav-item {{subitem.classes || ''}}\" *ngFor=\"let subitem of item.subnav\">\n                                <n7-anchor-wrapper [classes]=\"'n7-header__subnav-link'\"\n                                [data]=\"subitem.anchor\"\n                                (clicked)=\"onClick($event)\">\n                                    <span class=\"n7-header__subnav-icon {{subitem.icon}}\" *ngIf=\"subitem.icon\"></span>\n                                    <span class=\"n7-header__subnav-label\" *ngIf=\"subitem.text\">\n                                        {{ subitem.text }}\n                                    </span>\n                                </n7-anchor-wrapper>\n                            </li>\n                        </ul>\n                    </li>\n                </ul>\n            </div>\n        </nav>\n\n        <!-- Mobile menu toggle -->\n        <div class=\"n7-header__mobile-menu-toggle\">\n            <span class=\"n7-header__mobile-menu-icon n7-icon-menu\" \n                (click)=\"onClick(data.menuToggle.open.payload)\"></span>\n        </div>\n\n        <!-- Mobile menu close -->\n        <span class=\"n7-header__mobile-menu-close n7-icon-close\" \n            (click)=\"onClick(data.menuToggle.close.payload)\"></span>\n\n        <!-- Tools: search, notifications, use profile or login/signup -->\n        <div class=\"n7-header__tools\">\n            \n            <div class=\"n7-header__search {{data.search.classes || ''}}\" *ngIf=\"data.search\">\n                <input class=\"n7-header__search-input\" \n                    type=\"search\" \n                    name=\"search\" \n                    placeholder=\"{{ data.search.hint || ''}}\" \n                    (keyup)=\"onKeyUp(data.search.payload, $event.keyCode, $event.target.value)\"/>\n                <button class=\"n7-header__search-btn\" type=\"submit\" (click)=\"onClick(data.search.payload)\">\n                    <span class=\"n7-header__search-btn-label\">\n                        Search\n                    </span>\n                </button>\n            </div>\n            \n            <div class=\"n7-header__actions\" *ngIf=\"data.actions\">\n                <n7-anchor-wrapper *ngFor=\"let action of data.actions\" \n                [classes]=\"'n7-header__action' + (action.classes || '')\"\n                [data]=\"action.anchor\"\n                (clicked)=\"onClick($event)\">\n                    <span class=\"n7-header__action-icon {{ action.icon }}\"></span>\n                    <span *ngIf=\"action.badge\" class=\"n7-header__action-badge {{ action.badge.text ? 'has-text' : '' }}\">\n                        {{ action.badge.text }}\n                    </span>\n                </n7-anchor-wrapper>\n            </div>\n\n            <div class=\"n7-header__buttons\" *ngIf=\"data.buttons\">\n                <n7-anchor-wrapper *ngFor=\"let button of data.buttons\"\n                [classes]=\"button.classes\" \n                [data]=\"button.anchor\"\n                (clicked)=\"onClick($event)\">\n                <span class=\"\" *ngIf=\"button.text\">\n                    {{ button.text }}\n                </span>\n                <span class=\"{{button.icon}}\" *ngIf=\"button.icon\"></span>\n                </n7-anchor-wrapper>\n            </div>\n\n            <div class=\"n7-header__user {{data.user.classes || ''}}\" *ngIf=\"data.user\">\n                <n7-anchor-wrapper [classes]=\"'n7-header__user-content'\"\n                [data]=\"data.user.anchor\"\n                (clicked)=\"onClick($event)\">\n                    <img *ngIf=\"data.user.img\"\n                    class=\"n7-header__user-img\"  \n                    [src]=\"data.user.img\"/>\n                    <p class=\"n7-header__user-name\" *ngIf=\"data.user.name\">\n                        <span class=\"n7-header__user-name-label\">\n                            {{ data.user.name }}\n                        </span>\n                    </p>\n                </n7-anchor-wrapper>\n            </div>\n        </div>\n\n    </div>\n</header>\n\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZHYtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBK1BqRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCRztBQUtILE1BQU0sT0FBTyxlQUFlO0lBa0IxQixPQUFPLENBQUMsT0FBWTtRQUNsQiw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7OzRHQTNCVSxlQUFlO2dHQUFmLGVBQWUseUZDMVI1QixzOExBMkhBOzJGRCtKYSxlQUFlO2tCQUozQixTQUFTOytCQUNFLFdBQVc7OEJBaUJaLElBQUk7c0JBQVosS0FBSztnQkFFRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBhIHNpbmdsZSBidXR0b25cbiAqXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgYW5jaG9yIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uSXRlbSB7XG4gIC8qKlxuICAgKiB0ZXh0XG4gICAqL1xuICB0ZXh0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhbmNob3JcbiAgICovXG4gIGFuY2hvcjogQW5jaG9yO1xuICAvKipcbiAgICogaWNvbiBjbGFzc1xuICAgKi9cbiAgaWNvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvXG4gICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGEgc2luZ2xlIGFjdGlvbiBpdGVtXG4gKlxuICogQHByb3BlcnR5IGljb24gKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGJhZGdlIChvcHRpb25hbClcbiAqIC0gdGV4dCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgYW5jaG9yIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uSXRlbSB7XG4gIC8qKlxuICAgKiBvcHRpb25hbCBiYWRnZSB3aXRoLCBvcHRpb25hbGx5LCBpdHMgdGV4dFxuICAgKi9cbiAgYmFkZ2U/OiB7XG4gICAgICB0ZXh0Pzogc3RyaW5nO1xuICB9O1xuICAvKipcbiAgICogaWNvbiBjbGFzc1xuICAgKi9cbiAgaWNvbjogc3RyaW5nO1xuICBhbmNob3I6IEFuY2hvcjtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvXG4gICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGEgc2luZ2xlIG5hdmJhciBpdGVtXG4gKlxuICogbm90ZTogYSBzaW5nbGUgbmF2J3MgaXRlbSBjYW4gYmUgYSB0ZXh0ICh3LyBhbmNob3IpIE9SIGEgZHJvcGRvd25cbiAqXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgc3VibmF2IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB0ZXh0IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBhbmNob3IgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOYXZiYXJJdGVtIHtcbiAgLyoqXG4gICAqIHRleHQgb2YgYSBzaW5nbGUgaXRlbSBvZiB0aGUgbmF2YmFyICh0ZXh0IGFuZCBwYXlsb2FkIGFyZSBjb25uZWN0ZWQpXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICogaWNvbiBmb3IgYSBzaW5nbGUgaXRlbSBvZiB0aGUgbmF2YmFyIChhc3NvY2lhdGVkIHRvIFwidGV4dFwiKVxuICAgKi9cbiAgaWNvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIHNlY29uZCBsZXZlbCBuYXZpZ2F0aW9uXG4gICAqL1xuICBzdWJuYXY/OiBOYXZiYXJJdGVtW107XG4gIGFuY2hvcjogQW5jaG9yO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgSGVhZGVyQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgbG9nbyAocmVxdWlyZWQpXG4gKiAtIHRpdGxlIChyZXF1aXJlZClcbiAqIC0gaW1hZ2UgKG9wdGlvbmFsKVxuICogLSBzdWJ0aXRsZSAob3B0aW9uYWwpXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxuICogLSBwYXlsb2FkIChvcHRpb25hbClcbiAqIC0gYW5jaG9yIChvcHRpb25hbClcbiAqIEBwcm9wcnR5IG1lbnVUb2dnbGUgKHJlcXVpcmVkKVxuICogLSBvcGVuIChyZXF1aXJlZClcbiAqIC0gLSBwYXlsb2FkIChyZXF1aXJlZClcbiAqIC0gY2xvc2VuIChyZXF1aXJlZClcbiAqIC0gLSBwYXlsb2FkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBhY3Rpb25zIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBuYXYgKG9wdGlvbmFsKVxuICogLSBpdGVtcyAocmVxdWlyZWQpXG4gKiAtIGlzQmVsb3cgKG9wdGlvbmFsKVxuICogLSBjbGFzc2VzIChvcHRpb25hbClcbiAqIC0gcGF5bG9hZCAob3B0aW9uYWwpXG4gKiAtIGFuY2hvciAob3B0aW9uYWwpXG4gKiAtIF9tZXRhIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBzZWFyY2ggKG9wdGlvbmFsKVxuICogLSBoaW50IChvcHRpb25hbClcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXG4gKiAtIHBheWxvYWQgKG9wdGlvbmFsKVxuICogLSBfbWV0YSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdXNlciAob3B0aW9uYWwpXG4gKiAtIGltYWdlIChvcHRpb25hbClcbiAqIC0gbmFtZSAob3B0aW9uYWwpXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxuICogLSBwYXlsb2FkIChvcHRpb25hbClcbiAqIC0gYW5jaG9yIChvcHRpb25hbClcbiAqIC0gX21ldGEgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBIZWFkZXJEYXRhIHtcbiAgLyoqXG4gICAqIGxvZ28gYW5kIHRpdGxlIGFyZWEgcGFyYW1ldGVyc1xuICAgKi9cbiAgbG9nbzoge1xuICAgIGltYWdlPzogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgc3VidGl0bGU/OiBzdHJpbmc7XG4gICAgY2xhc3Nlcz86IHN0cmluZztcbiAgICBwYXlsb2FkPzogYW55O1xuICAgIGFuY2hvcjogQW5jaG9yO1xuICB9O1xuICAvKipcbiAgICogbmF2J3MgcGFyYW1ldGVyc1xuICAgKi9cbiAgbmF2Pzoge1xuICAgIC8qKlxuICAgICAqIGxpc3Qgb2YgdGhlIGl0ZW1zIGluIHRoZSBuYXZiYXJcbiAgICAgKi9cbiAgICBpdGVtczogTmF2YmFySXRlbVtdO1xuICAgIC8qKlxuICAgICAqIGZsYWcgZm9yIGRpc3BsYXkgdGhlIG5hdmJhciB1bmRlciB0aGUgaGVhZGVyIChpbnN0ZWFkIG9mIElOIHRoZSBoZWFkZXIpXG4gICAgICovXG4gICAgaXNCZWxvdz86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICAgKi9cbiAgICBjbGFzc2VzPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgICAgKi9cbiAgICBwYXlsb2FkPzogYW55O1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgICAqL1xuICAgIF9tZXRhPzogYW55O1xuICB9O1xuICAvKipcbiAgICogc2VhcmNoIHBhcmFtZXRlcnNcbiAgICovXG4gIHNlYXJjaD86IHtcbiAgICAvKipcbiAgICAgKiBoaW50ICh0ZXh0IHNob3dlZCBpbiB0aGUgaW5wdXQgYm94IHVudGlsIHNvbWV0aGluZyBpcyB3cml0ZWQgaW4gdGhlcmUpXG4gICAgICovXG4gICAgaGludD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgICAqL1xuICAgIGNsYXNzZXM/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAgICAqL1xuICAgIHBheWxvYWQ/OiBhbnk7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBpbmZvXG4gICAgICovXG4gICAgX21ldGE/OiBhbnk7XG4gIH07XG4gIC8qKlxuICAgKiBhY3Rpb24gaXRlbXNcbiAgICovXG4gIGFjdGlvbnM/OiBBY3Rpb25JdGVtW107XG4gIC8qKlxuICAgKiBidXR0b25zIGl0ZW1zXG4gICAqL1xuICBidXR0b25zPzogQnV0dG9uSXRlbVtdO1xuICAvKipcbiAgICogdXNlciBwYXJhbWV0ZXJzXG4gICAqL1xuICB1c2VyPzoge1xuICAgIC8qKlxuICAgICAqIHVzZXIncyBwcm9maWxlIHBpY3R1cmVcbiAgICAgKi9cbiAgICBpbWc/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogdXNlcidzIHByb2ZpbGUgbmFtZVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICAgKi9cbiAgICBjbGFzc2VzPzogc3RyaW5nO1xuICAgIGFuY2hvcjogQW5jaG9yO1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgICAqL1xuICAgIF9tZXRhPzogYW55O1xuICB9O1xuICAvKipcbiAgICogbWVudSB0b2dnbGUgZm9yIG1vYmlsZVxuICAgKi9cbiAgbWVudVRvZ2dsZToge1xuICAgIG9wZW46IHtcbiAgICAgIHBheWxvYWQ6IGFueTtcbiAgICB9O1xuICAgIGNsb3NlOiB7XG4gICAgICBwYXlsb2FkOiBhbnk7XG4gICAgfTtcbiAgfTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuICogSGVhZGVyQ29tcG9uZW50IDxuNy1oZWFkZXI+XG4gKlxuICogQHN0cnVjdHVyZVxuICogID4+ICBjcG0gPSBpdCBoYXMgQ2xhc3NlcywgUGF5bG9hZCwgTWV0YWRhdGEgIDw8XG4gKiAgPj4gIC1wLSA9IGl0IGhhcyBvbmx5IFBheWxvYWQgICAgICAgICAgICAgICAgPDxcbiAqICA+PiAgKy0tID0gc3ViLW1lbWJlciAgICAgICAgICAgICAgICAgICAgICAgICA8PFxuICogID4+ICArLS0tPiA9IGFycmF5ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw8XG4gKlxuICogIGRhdGEgKGNwbSlcbiAqICAgICstLSBhY3Rpb25zXG4gKiAgICAgICAgICArLS0tPiBhY3Rpb24gKGNwbSlcbiAqICAgICAgICAgICAgICAgICAgKy0tIGJhZGdlXG4gKiAgICArLS0gbG9nbyAoY3AtKVxuICogICAgKy0tIG1lbnVUb2dnbGVcbiAqICAgICAgICAgICstLSBvcGVuICgtcC0pXG4gKiAgICAgICAgICArLS0gY2xvc2UgKC1wLSlcbiAqICAgICstLSBuYXYgKGNwbSlcbiAqICAgICAgICAgICstLS0+IGl0ZW1zXG4gKiAgICArLS0gc2VhcmNoIChjcG0pXG4gKiAgICArLS0gdXNlciAoY3BtKVxuICpcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQge1xuICAvKlxuICAgID4+ICAgIGNwbSA9IGl0IGhhcyBDbGFzc2VzLCBQYXlsb2FkLCBNZXRhZGF0YSAgIDw8XG4gICAgPj4gICAgLXAtID0gaXQgaGFzIG9ubHkgUGF5bG9hZCAgICAgICAgICAgICAgICAgPDxcblxuICAgIGRhdGEgKGNwbSlcbiAgICAgICstLS0tIHBhcmFtcyAoY3BtKVxuICAgICAgKy0tLS0gbmF2IChjcG0pXG4gICAgICAgICAgICAgICAgKy0tLS0gaXRlbXMgKGNwbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKy0tLS0gZHJvcGRvd25EYXRhIChjcG0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLS0tIGxpc3QgKC1wLSlcbiAgICAgICstLS0tIHNlYXJjaCAoY3BtKVxuICAgICAgKy0tLS0gdXNlciAoY3BtKVxuICAqL1xuICBASW5wdXQoKSBkYXRhOiBhbnk7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2xpY2socGF5bG9hZDogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2codHlwZSwgcGF5bG9hZCk7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cblxuICBvbktleVVwKHBheWxvYWQsIGtleUNvZGUsIHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2tleXVwJywgeyBwYXlsb2FkLCBrZXlDb2RlLCB2YWx1ZSB9KTtcbiAgfVxufVxuIiwiPGhlYWRlciAqbmdJZj1cImRhdGFcIiBjbGFzcz1cIm43LWhlYWRlciB7e2RhdGEuY2xhc3NlcyB8fCAnJ319XCI+XG4gICAgPGRpdiBjbGFzcz1cIm43LWhlYWRlcl9fY29udGVudFwiPlxuXG4gICAgICAgIDwhLS0gTG9nbyBhbmQgdGl0bGUgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuNy1oZWFkZXJfX2xvZ28tdGl0bGUge3tkYXRhLmxvZ28uY2xhc3NlcyB8fCAnJ319XCI+XG4gICAgICAgICAgICA8bjctYW5jaG9yLXdyYXBwZXIgW2NsYXNzZXNdPVwiJ243LWhlYWRlcl9fbG9nby1saW5rJ1wiXG4gICAgICAgICAgICBbZGF0YV09XCJkYXRhLmxvZ28uYW5jaG9yXCJcbiAgICAgICAgICAgIChjbGlja2VkKT1cIm9uQ2xpY2soJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJuNy1oZWFkZXJfX2xvZ29cIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiZGF0YS5sb2dvLmltYWdlXCJcbiAgICAgICAgICAgICAgICBbc3JjXT1cImRhdGEubG9nby5pbWFnZVwiXG4gICAgICAgICAgICAgICAgYWx0PVwie3sgZGF0YS5sb2dvLnRpdGxlIH19XCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibjctaGVhZGVyX190aXRsZS1zdWJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJuNy1oZWFkZXJfX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBkYXRhLmxvZ28udGl0bGUgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibjctaGVhZGVyX19zdWJ0aXRsZVwiICpuZ0lmPVwiZGF0YS5sb2dvLnN1YnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBkYXRhLmxvZ28uc3VidGl0bGUgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbjctYW5jaG9yLXdyYXBwZXI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gTWFpbiBtZW51IC0tPlxuICAgICAgICA8bmF2IGNsYXNzPVwibjctaGVhZGVyX19uYXYge3tkYXRhLm5hdi5jbGFzc2VzIHx8ICcnfX1cIiAqbmdJZj1cImRhdGEubmF2XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibjctaGVhZGVyX19uYXYtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm43LWhlYWRlcl9fbmF2LWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibjctaGVhZGVyX19uYXYtaXRlbSB7e2l0ZW0uY2xhc3NlcyB8fCAnJ319XCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YS5uYXYuaXRlbXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuNy1hbmNob3Itd3JhcHBlciBbY2xhc3Nlc109XCInbjctaGVhZGVyX19uYXYtbGluaydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwiaXRlbS5hbmNob3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrZWQpPVwib25DbGljaygkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuNy1oZWFkZXJfX25hdi1pY29uIHt7aXRlbS5pY29ufX1cIiAqbmdJZj1cIml0ZW0uaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm43LWhlYWRlcl9fbmF2LWxhYmVsXCIgKm5nSWY9XCJpdGVtLnRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS50ZXh0IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uNy1hbmNob3Itd3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gU3VibGV2ZWwgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuNy1oZWFkZXJfX3N1Ym5hdi1saXN0XCIgKm5nSWY9XCJpdGVtLnN1Ym5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm43LWhlYWRlcl9fc3VibmF2LWl0ZW0ge3tzdWJpdGVtLmNsYXNzZXMgfHwgJyd9fVwiICpuZ0Zvcj1cImxldCBzdWJpdGVtIG9mIGl0ZW0uc3VibmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuNy1hbmNob3Itd3JhcHBlciBbY2xhc3Nlc109XCInbjctaGVhZGVyX19zdWJuYXYtbGluaydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJzdWJpdGVtLmFuY2hvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGlja2VkKT1cIm9uQ2xpY2soJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuNy1oZWFkZXJfX3N1Ym5hdi1pY29uIHt7c3ViaXRlbS5pY29ufX1cIiAqbmdJZj1cInN1Yml0ZW0uaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibjctaGVhZGVyX19zdWJuYXYtbGFiZWxcIiAqbmdJZj1cInN1Yml0ZW0udGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHN1Yml0ZW0udGV4dCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L243LWFuY2hvci13cmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgPCEtLSBNb2JpbGUgbWVudSB0b2dnbGUgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuNy1oZWFkZXJfX21vYmlsZS1tZW51LXRvZ2dsZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuNy1oZWFkZXJfX21vYmlsZS1tZW51LWljb24gbjctaWNvbi1tZW51XCIgXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2soZGF0YS5tZW51VG9nZ2xlLm9wZW4ucGF5bG9hZClcIj48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gTW9iaWxlIG1lbnUgY2xvc2UgLS0+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibjctaGVhZGVyX19tb2JpbGUtbWVudS1jbG9zZSBuNy1pY29uLWNsb3NlXCIgXG4gICAgICAgICAgICAoY2xpY2spPVwib25DbGljayhkYXRhLm1lbnVUb2dnbGUuY2xvc2UucGF5bG9hZClcIj48L3NwYW4+XG5cbiAgICAgICAgPCEtLSBUb29sczogc2VhcmNoLCBub3RpZmljYXRpb25zLCB1c2UgcHJvZmlsZSBvciBsb2dpbi9zaWdudXAgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuNy1oZWFkZXJfX3Rvb2xzXCI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuNy1oZWFkZXJfX3NlYXJjaCB7e2RhdGEuc2VhcmNoLmNsYXNzZXMgfHwgJyd9fVwiICpuZ0lmPVwiZGF0YS5zZWFyY2hcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJuNy1oZWFkZXJfX3NlYXJjaC1pbnB1dFwiIFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCIgXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIiBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eyBkYXRhLnNlYXJjaC5oaW50IHx8ICcnfX1cIiBcbiAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cIm9uS2V5VXAoZGF0YS5zZWFyY2gucGF5bG9hZCwgJGV2ZW50LmtleUNvZGUsICRldmVudC50YXJnZXQudmFsdWUpXCIvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJuNy1oZWFkZXJfX3NlYXJjaC1idG5cIiB0eXBlPVwic3VibWl0XCIgKGNsaWNrKT1cIm9uQ2xpY2soZGF0YS5zZWFyY2gucGF5bG9hZClcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuNy1oZWFkZXJfX3NlYXJjaC1idG4tbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm43LWhlYWRlcl9fYWN0aW9uc1wiICpuZ0lmPVwiZGF0YS5hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPG43LWFuY2hvci13cmFwcGVyICpuZ0Zvcj1cImxldCBhY3Rpb24gb2YgZGF0YS5hY3Rpb25zXCIgXG4gICAgICAgICAgICAgICAgW2NsYXNzZXNdPVwiJ243LWhlYWRlcl9fYWN0aW9uJyArIChhY3Rpb24uY2xhc3NlcyB8fCAnJylcIlxuICAgICAgICAgICAgICAgIFtkYXRhXT1cImFjdGlvbi5hbmNob3JcIlxuICAgICAgICAgICAgICAgIChjbGlja2VkKT1cIm9uQ2xpY2soJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm43LWhlYWRlcl9fYWN0aW9uLWljb24ge3sgYWN0aW9uLmljb24gfX1cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiYWN0aW9uLmJhZGdlXCIgY2xhc3M9XCJuNy1oZWFkZXJfX2FjdGlvbi1iYWRnZSB7eyBhY3Rpb24uYmFkZ2UudGV4dCA/ICdoYXMtdGV4dCcgOiAnJyB9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgYWN0aW9uLmJhZGdlLnRleHQgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbjctYW5jaG9yLXdyYXBwZXI+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm43LWhlYWRlcl9fYnV0dG9uc1wiICpuZ0lmPVwiZGF0YS5idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgPG43LWFuY2hvci13cmFwcGVyICpuZ0Zvcj1cImxldCBidXR0b24gb2YgZGF0YS5idXR0b25zXCJcbiAgICAgICAgICAgICAgICBbY2xhc3Nlc109XCJidXR0b24uY2xhc3Nlc1wiIFxuICAgICAgICAgICAgICAgIFtkYXRhXT1cImJ1dHRvbi5hbmNob3JcIlxuICAgICAgICAgICAgICAgIChjbGlja2VkKT1cIm9uQ2xpY2soJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiXCIgKm5nSWY9XCJidXR0b24udGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBidXR0b24udGV4dCB9fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInt7YnV0dG9uLmljb259fVwiICpuZ0lmPVwiYnV0dG9uLmljb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9uNy1hbmNob3Itd3JhcHBlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibjctaGVhZGVyX191c2VyIHt7ZGF0YS51c2VyLmNsYXNzZXMgfHwgJyd9fVwiICpuZ0lmPVwiZGF0YS51c2VyXCI+XG4gICAgICAgICAgICAgICAgPG43LWFuY2hvci13cmFwcGVyIFtjbGFzc2VzXT1cIiduNy1oZWFkZXJfX3VzZXItY29udGVudCdcIlxuICAgICAgICAgICAgICAgIFtkYXRhXT1cImRhdGEudXNlci5hbmNob3JcIlxuICAgICAgICAgICAgICAgIChjbGlja2VkKT1cIm9uQ2xpY2soJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nICpuZ0lmPVwiZGF0YS51c2VyLmltZ1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibjctaGVhZGVyX191c2VyLWltZ1wiICBcbiAgICAgICAgICAgICAgICAgICAgW3NyY109XCJkYXRhLnVzZXIuaW1nXCIvPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm43LWhlYWRlcl9fdXNlci1uYW1lXCIgKm5nSWY9XCJkYXRhLnVzZXIubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuNy1oZWFkZXJfX3VzZXItbmFtZS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGRhdGEudXNlci5uYW1lIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L243LWFuY2hvci13cmFwcGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG48L2hlYWRlcj5cblxuIl19