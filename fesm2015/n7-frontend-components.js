import { __decorate, __metadata, __awaiter } from 'tslib';
import { Input, Component, EventEmitter, Output, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//---------------------------
let AdvancedAutocompleteComponent = class AdvancedAutocompleteComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], AdvancedAutocompleteComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AdvancedAutocompleteComponent.prototype, "emit", void 0);
AdvancedAutocompleteComponent = __decorate([
    Component({
        selector: 'n7-advanced-autocomplete',
        template: "<div *ngIf=\"data\" class=\"n7-advanced-autocomplete\"\r\n    [ngClass]=\"{ 'is-empty' : (data.results && data.results.length === 0), 'is-loading': !data.results }\">\r\n    <!-- If there are some results -->\r\n    <ng-container *ngIf=\"data.results && data.results.length > 0\">\r\n        <ng-container *ngTemplateOutlet=\"hasLoaded\"></ng-container>\r\n    </ng-container>\r\n    <!-- If no results are found -->\r\n    <ng-container *ngIf=\"data.results && data.results.length === 0\">\r\n        <ng-container *ngTemplateOutlet=\"isEmpty\"></ng-container>\r\n    </ng-container>\r\n    <!-- If is loading -->\r\n    <ng-container *ngIf=\"!data.results\">\r\n        <ng-container *ngTemplateOutlet=\"isLoading\"></ng-container>\r\n    </ng-container>\r\n</div>\r\n\r\n<!-- Template: Is empty -->\r\n<ng-template #isEmpty>\r\n    <div class=\"n7-advanced-autocomplete__empty\" [innerHTML]=\"data.fallback\"></div>\r\n    <!-- Render actions -->\r\n    <ng-container *ngTemplateOutlet=\"actions; context:{$implicit: data.actions}\"></ng-container>\r\n</ng-template>\r\n\r\n<!-- Template: Is loading -->\r\n<ng-template #isLoading>\r\n    <!-- Layout appends loader-component here -->\r\n    <span class=\"n7-advanced-autocomplete__loader\" id=\"n7-advanced-autocomplete__loader\"></span>\r\n</ng-template>\r\n\r\n<!-- Template: Has loaded -->\r\n<ng-template #hasLoaded>\r\n    <!-- Search results -->\r\n    <div class=\"n7-advanced-autocomplete__results\">\r\n        <!-- Render groups -->\r\n        <ng-container *ngFor=\"let res of data.results\">\r\n            <div *ngIf=\"res.group\" class=\"n7-advanced-autocomplete__group\">\r\n                <div class=\"n7-advanced-autocomplete__group-title-wrapper {{ res.group.classes || '' }}\">\r\n                    <n7-anchor-wrapper\r\n                        [data]=\"res.group.anchor\"\r\n                        (clicked)=\"onClick($event)\">\r\n                        <span *ngIf=\"res.group.icon\" class=\"n7-advanced-autocomplete__group-icon {{ res.group.icon }}\"></span>\r\n                        <span class=\"n7-advanced-autocomplete__group-title\">{{res.group.title}}</span>\r\n                    </n7-anchor-wrapper>\r\n                </div>\r\n                <!-- Render items -->\r\n                <div class=\"n7-advanced-autocomplete__items\">\r\n                    <ng-container *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"></ng-container>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"!res.group\" class=\"n7-advanced-autocomplete__nogroup\">\r\n                <ng-container *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"></ng-container>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- Actions -->\r\n    <ng-container *ngTemplateOutlet=\"actions; context:{$implicit: data.actions}\"></ng-container>\r\n</ng-template>\r\n\r\n<!-- Template: Items -->\r\n<ng-template #items let-items>\r\n    <n7-anchor-wrapper *ngFor=\"let item of items\"\r\n    [data]=\"item.anchor\"\r\n    (clicked)=\"onClick($event)\"\r\n    [classes]=\"'n7-advanced-autocomplete__item'\">\r\n    <span *ngIf=\"item.title\" class=\"n7-advanced-autocomplete__item-title\" [innerHTML]=\"item.title\"></span>\r\n    <ng-container *ngIf=\"item.metadata\">\r\n        <span *ngFor=\"let meta of item.metadata\" class=\"n7-advanced-autocomplete__item-metadata\">\r\n            <span *ngIf=\"meta.key\" class=\"n7-advanced-autocomplete__item-metadata-key\">{{ meta.key }}</span>\r\n            <span *ngIf=\"meta.value\" class=\"n7-advanced-autocomplete__item-metadata-value\">{{ meta.value }}</span>\r\n        </span>\r\n    </ng-container>\r\n    </n7-anchor-wrapper>\r\n</ng-template>\r\n\r\n<!-- Template: Actions -->\r\n<ng-template #actions let-actions>\r\n    <div *ngIf=\"actions\" class=\"n7-advanced-autocomplete__action-bar\">\r\n        <n7-anchor-wrapper *ngIf=\"actions.advanced\" [data]=\"actions.advanced.anchor\"\r\n            (clicked)=\"onClick($event)\" [classes]=\"'n7-btn n7-advanced-autocomplete__advanced-search'\">\r\n            {{actions.advanced.text}}\r\n        </n7-anchor-wrapper>\r\n\r\n        <n7-anchor-wrapper *ngIf=\"actions.showMore\" [data]=\"actions.showMore.anchor\"\r\n            (clicked)=\"onClick($event)\" [classes]=\"'n7-btn n7-btn-cta n7-advanced-autocomplete__show-more'\">\r\n            {{actions.showMore.text}}\r\n        </n7-anchor-wrapper>\r\n    </div>\r\n</ng-template>\r\n"
    })
], AdvancedAutocompleteComponent);

//---------------------------
let AlertComponent = class AlertComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
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
        template: "<div class=\"n7-alert {{data.classes || ''}} {{ data.icon ? 'has-icon' : '' }}\" *ngIf=\"data\" >\r\n    <span class=\"n7-alert__icon {{data.icon}}\" *ngIf=\"data.icon\"></span>\r\n    <div class=\"n7-alert__text\" [innerHTML]=\"data.text\">\r\n    </div>\r\n    <span class=\"n7-alert__close-button n7-icon-close\" \r\n          *ngIf=\"data.hasCloseButton\" \r\n          (click)=\"onClick(data.payload)\"></span>\r\n</div>"
    })
], AlertComponent);

//---------------------------
let AnchorWrapperComponent = class AnchorWrapperComponent {
    constructor() {
        this.clicked = new EventEmitter();
    }
    isExternal(href) {
        return /^http(?:s)?:\/{2}\S+$/.test(href);
    }
    /**
     * Click event handler.
     * Outputs the payload to it's parent component
     */
    onClick(payload) {
        this.clicked.emit(payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], AnchorWrapperComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AnchorWrapperComponent.prototype, "classes", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], AnchorWrapperComponent.prototype, "clicked", void 0);
AnchorWrapperComponent = __decorate([
    Component({
        selector: 'n7-anchor-wrapper',
        template: "<ng-container *ngIf=\"data; else noData\">\r\n    <ng-container *ngIf=\"data.href && isExternal(data.href)\">\r\n      <ng-container *ngTemplateOutlet=\"externalUrl\"></ng-container>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"data.href && !isExternal(data.href)\">\r\n      <ng-container *ngTemplateOutlet=\"internalUrl\"></ng-container>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!data.href\">\r\n      <ng-container *ngTemplateOutlet=\"noUrl\"></ng-container>\r\n    </ng-container>\r\n</ng-container>\r\n\r\n<!-- No data template -->\r\n<ng-template #noData>\r\n  <a class=\"{{ classes || '' }}\"><ng-container *ngTemplateOutlet=\"content\"></ng-container></a>\r\n</ng-template>\r\n\r\n<!-- Internal URL template -->\r\n<ng-template #internalUrl>\r\n  <a \r\n  [routerLink]=\"data.href\" \r\n  [target]=\"data.target || '_self'\" \r\n  class=\"{{ classes || '' }}\"\r\n  [queryParams]=\"data.queryParams || null\">\r\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n  </a>\r\n</ng-template>\r\n\r\n<!-- External URL template -->\r\n<ng-template #externalUrl>\r\n  <a [href]=\"data.href\" [target]=\"data.target || '_self'\" class=\"{{ classes || '' }}\">\r\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n  </a>\r\n</ng-template>\r\n\r\n<!-- No URL template -->\r\n<ng-template #noUrl>\r\n  <a (click)=\"onClick(data.payload)\" class=\"{{ classes || '' }}\">\r\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n  </a>\r\n</ng-template>\r\n\r\n<ng-template #content>\r\n  <ng-content></ng-content>\r\n</ng-template>\r\n"
    })
], AnchorWrapperComponent);

//---------------------------
let BreadcrumbsComponent = class BreadcrumbsComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], BreadcrumbsComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], BreadcrumbsComponent.prototype, "emit", void 0);
BreadcrumbsComponent = __decorate([
    Component({
        selector: 'n7-breadcrumbs',
        template: "<div *ngIf=\"data\" class=\"n7-breadcrumbs {{ data.classes || '' }}\">\r\n    <nav class=\"n7-breadcrumbs__nav\">\r\n        <ol class=\"n7-breadcrumbs__list\">\r\n            <li *ngFor=\"let item of data.items\" class=\"n7-breadcrumbs__item {{ item.classes || '' }}\">\r\n                <n7-anchor-wrapper [classes]=\"'n7-breadcrumbs__label'\"\r\n                [data]=\"item.anchor\"\r\n                (clicked)=\"onClick($event)\">\r\n                    {{ item.label }}\r\n                </n7-anchor-wrapper>\r\n            </li>\r\n        </ol>\r\n    </nav>\r\n</div>\r\n"
    })
], BreadcrumbsComponent);

let BubbleChartComponent = class BubbleChartComponent {
    constructor() {
        this._loaded = false;
        this.draw = () => {
            const { d3 } = this;
            const { containerId, data, height, width, selected, transition, colorMatch, shuffle, fontRendering } = this.data;
            const closeIconPath = 'M -50,40 L-40,50 0,10 40,50 50,40 10,0 50,-40 40,-50 0,-10 -40,-50 -50,-40 -10,0 -50,40';
            if (!Array.isArray(data)) {
                // Check if it is possible to draw with the current dataset
                console.warn('(n7-bubble-chart) The data object is not in the expected format!');
                return;
            }
            let t = d3
                .transition()
                .duration(0);
            if (typeof transition === 'number') {
                t = d3
                    .transition()
                    .duration(transition)
                    .ease(d3.easeCubicInOut);
            }
            const colorMap = d3.scaleOrdinal()
                .domain(colorMatch ? colorMatch.domain : ['persona', 'luogo', 'organizzazione', 'cosa notevole'])
                .range(colorMatch ? colorMatch.range : d3.schemeTableau10);
            const sizeScale = d3 // map entity count to bubble size
                .scaleLinear()
                .domain([0, d3.max(data, (d) => +d.count)])
                .range([3, d3.max(data, (d) => +d.count)]);
            const pack = (children) => d3
                .pack()
                .size([width - 2, height - 2])
                .padding(1.5)(d3.hierarchy({ children }).sum((d) => sizeScale(d.count)));
            const root = () => {
                if (typeof shuffle === 'undefined' || shuffle) {
                    const shuffData = data.slice(); // do not modify the source data!
                    return pack(d3.shuffle(shuffData));
                } // if shuffle is set to false, skip the data shuffle
                return pack(data);
            };
            const svg = d3
                .select(`#${containerId}`)
                .attr('viewBox', [0, 0, width, height])
                .attr('font-family', 'Verdana, Geneva, sans-serif')
                .attr('text-anchor', 'middle');
            const leaf = svg.selectAll('g').data(root().leaves(), (d) => d.data.entity.id);
            leaf
                .transition(t) // update transition on <g>
                .attr('fill-opacity', 1)
                .attr('transform', (d) => `translate(${d.x + 1},${d.y + 1})`)
                .attr('font-size', (d) => {
                let size = d.r / 5.5;
                size *= 1;
                size += 1;
                return `${Math.round(size)}px`;
            });
            leaf.selectAll('.close-icon').remove(); // clear all existing close icons
            if (selected) {
                leaf // render necessary close icons
                    .filter((d) => selected.includes(d.data.entity.id))
                    .append('path')
                    .attr('class', 'close-icon')
                    .attr('d', closeIconPath)
                    .attr('fill', '#fff')
                    .attr('transform', (d) => {
                    if (d.r / 4 > 3) {
                        return `scale(.08) translate(0, ${d.r * 10 - 80})`;
                    }
                    return 'scale(.08)';
                });
            }
            leaf
                .select('circle')
                .transition(t) // update transition on <circle>
                .attr('fill-opacity', 1)
                .attr('r', (d) => d.r);
            leaf
                .select('text')
                .attr('font-family', () => {
                if (fontRendering && fontRendering.label && fontRendering.label.family) {
                    return fontRendering.label.family;
                }
                return 'inherit';
            })
                .attr('font-weight', () => {
                if (fontRendering && fontRendering.label && fontRendering.label.weight) {
                    return fontRendering.label.weight;
                }
                return 'inherit';
            })
                .selectAll('tspan')
                .data((d) => {
                if (d.r / 4 > 4.5) {
                    // show text and number threshhold
                    let label = (d.data.entity.label.charAt(0).toUpperCase()
                        + d.data.entity.label.slice(1)).split(/ +/g);
                    if (label.length > 3) {
                        label = label.slice(0, 3);
                        label[2] += '…';
                    }
                    return label;
                }
                if (d.r / 4 > 2.5) {
                    // show text threshhold
                    let label = (d.data.entity.label.charAt(0).toUpperCase()
                        + d.data.entity.label.slice(1)).split(/ +/g);
                    if (label.length > 3) {
                        label = label.slice(0, 3);
                        label[2] += '…';
                    }
                    return label;
                }
                return '';
            })
                .join('tspan')
                .attr('x', 0)
                .attr('y', (d, i, nodes) => `${i - (nodes.length + 1) / 2 + 0.97}em`)
                .attr('fill', 'white')
                .text((d) => d);
            leaf
                .select('.label-count')
                .attr('font-family', () => {
                if (fontRendering && fontRendering.counter && fontRendering.counter.family) {
                    return fontRendering.counter.family;
                }
                return 'inherit';
            })
                .attr('font-weight', () => {
                if (fontRendering && fontRendering.counter && fontRendering.counter.weight) {
                    return fontRendering.counter.weight;
                }
                return 'inherit';
            })
                .attr('fill', 'white')
                .text((d) => {
                if (d.r / 4 > 2.5) {
                    // show text and number threshhold
                    return d.data.count;
                }
                return '';
            })
                .attr('y', (d) => {
                let labelLength = d.data.entity.label.split(/ +/g);
                if (labelLength.length > 3) {
                    labelLength = labelLength.slice(0, 3);
                }
                return `${labelLength.length - (labelLength.length + 1) / 2 + 0.97}em`;
            });
            const g = leaf.enter().append('g');
            g.attr('transform', (d) => `translate(${d.x + 1},${d.y + 1})`)
                .attr('font-size', (d) => {
                let size = d.r / 5.5;
                size *= 1;
                size += 1;
                return `${Math.round(size)}px`;
            })
                .attr('cursor', 'pointer')
                .on('click', (d) => {
                this.onClick(d.data.entity.id);
            })
                .attr('id', (d) => `g_${d.data.entity.id}`)
                .append('circle')
                .attr('id', (d) => { d.leafUid = d.data.entity.id; })
                .attr('r', 0)
                .transition(t) // enter() transition on <circle>
                .attr('fill-opacity', 1)
                .attr('fill', (d) => colorMap(d.data.entity.typeOfEntity))
                .attr('r', (d) => d.r);
            g.append('clipPath')
                .attr('id', (d) => { d.clipUid = `Clip-${d.data.entity.id}`; })
                .append('use')
                .attr('xlink:href', (d) => d.leafUid.href);
            g.append('text')
                .attr('font-family', () => {
                if (fontRendering && fontRendering.label && fontRendering.label.family) {
                    return fontRendering.label.family;
                }
                return 'inherit';
            })
                .attr('font-weight', () => {
                if (fontRendering && fontRendering && fontRendering.label && fontRendering.label.weight) {
                    return fontRendering.label.weight;
                }
                return 'inherit';
            })
                .selectAll('tspan')
                .data((d) => {
                if (d.r / 4 > 4.5) {
                    // show text and number threshhold
                    let label = (d.data.entity.label.charAt(0).toUpperCase()
                        + d.data.entity.label.slice(1)).split(/ +/g);
                    if (label.length > 3) {
                        label = label.slice(0, 3);
                        label[2] += '…';
                    }
                    return label;
                }
                if (d.r / 4 > 2.5) {
                    // show text threshhold
                    let label = (d.data.entity.label.charAt(0).toUpperCase()
                        + d.data.entity.label.slice(1)).split(/ +/g);
                    if (label.length > 3) {
                        label = label.slice(0, 3);
                        label[2] += '…';
                    }
                    return label;
                }
                return '';
            })
                .join('tspan')
                .attr('x', 0)
                .attr('y', (d, i, nodes) => `${i - (nodes.length + 1) / 2 + 0.97}em`)
                .attr('fill', 'white')
                .text((d) => d)
                .attr('fill-opacity', 0)
                .transition(t) // enter() transition on <tspan>
                .attr('fill-opacity', 1);
            g.append('text') // Count label
                .attr('class', 'label-count')
                .attr('font-family', () => {
                if (fontRendering && fontRendering.counter && fontRendering.counter.family) {
                    return fontRendering.counter.family;
                }
                return 'inherit';
            })
                .attr('font-weight', () => {
                if (fontRendering && fontRendering.counter && fontRendering.counter.weight) {
                    return fontRendering.counter.weight;
                }
                return 'inherit';
            })
                .attr('fill', 'white')
                .text((d) => {
                if (d.r / 4 > 2.5) {
                    // show text and number threshhold
                    return d.data.count;
                }
                return '';
            })
                .attr('y', (d) => {
                let labelLength = d.data.entity.label.split(/ +/g);
                if (labelLength.length > 3) {
                    labelLength = labelLength.slice(0, 3);
                }
                return `${labelLength.length - (labelLength.length + 1) / 2 + 0.97}em`;
            })
                .attr('fill-opacity', 0)
                .transition(t) // enter() transition on <text>
                .attr('fill-opacity', 1);
            leaf
                .exit() // EXIT CYCLE
                .remove();
            if (selected) {
                g.filter((d) => selected.includes(d.leafUid)) // append 'X' icon // only for selected bubbles
                    .append('path')
                    .attr('d', closeIconPath)
                    .attr('class', 'close-icon')
                    .attr('fill', (d) => {
                    if (d.r / 4 > 2.5) {
                        return '#fff';
                    }
                    return 'transparent';
                })
                    .attr('transform', (d) => {
                    if (d.r / 4 > 3) {
                        return `scale(.08) translate(0, ${d.r * 10 - 80})`;
                    }
                    return 'scale(.08)';
                });
            }
            this.emit('d3end', data); // communicate end of draw
        };
    }
    ngAfterContentChecked() {
        /*
         Waits for the dom to be loaded, then fires the draw function
         that renders the chart.
        */
        if (this.data) {
            if (this._loaded)
                return;
            this._loaded = true;
            setTimeout(() => {
                import('d3').then((module) => {
                    this.d3 = module;
                    this.draw();
                    if (this.data && this.data.setDraw) {
                        this.data.setDraw(this.draw);
                    }
                });
            });
        }
    }
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], BubbleChartComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], BubbleChartComponent.prototype, "emit", void 0);
BubbleChartComponent = __decorate([
    Component({
        selector: 'n7-bubble-chart',
        template: "<div *ngIf=\"data\" class=\"n7-bubble-chart {{ data.classes || '' }}\">\r\n    <svg #bubbleChart id=\"{{data.containerId}}\"></svg>\r\n</div>"
    })
], BubbleChartComponent);

//---------------------------
let CarouselComponent = class CarouselComponent {
    constructor() {
        this.loaded = false;
        /**
         * API of the carousel component
         */
        this.api = {
            /**
             * Used to lazy-load video resources.
             * Call api.load.videos on DOMContentReady event
             */
            load: {
                /** Changes all data-src attributes to src and calls <video>.load() */
                videos: () => {
                    const sources = Array.from(// gets all <source.lazy> tags
                    document.getElementById(this.data.containerId)
                        .getElementsByClassName('lazy'));
                    sources.forEach((source) => {
                        const url = source.getAttribute('data-src'); // gets the video url
                        source.classList.remove('lazy'); // removes the lazy class
                        source.setAttribute('src', url); // sets the url to src attribute
                        source.removeAttribute('data-src'); // removes the data-src attribute
                        source.parentElement.load(); // loads the video
                    });
                }
            }
        };
    }
    ngAfterContentChecked() {
        if (!this.data || this.loaded)
            return;
        this.loaded = true;
        setTimeout(() => {
            const { containerId, libOptions } = this.data;
            import('latte-carousel').then((module) => {
                const { Carousel } = module;
                const chart = new Carousel(`#${containerId}`, libOptions);
                // eslint-disable-next-line no-param-reassign, @typescript-eslint/no-unused-vars
                if (this.data.setInstance)
                    this.data.setInstance((d) => { d = chart; });
                // eslint-disable-next-line no-param-reassign, @typescript-eslint/no-unused-vars
                if (this.data.setComponentAPI)
                    this.data.setComponentAPI((d) => { d = this.api; });
                this.addButtonEvents(this.data);
            });
        });
    }
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    /**
     * Function that adds the event listeners to each button.
     * This is needed because when "new Carousel()" is called the event listeners are lost.
     */
    addButtonEvents({ slides, containerId }) {
        // Build array of button-id's & payloads.
        const buttons = slides
            .map((slide, slideID) => ({
            // id = container id - index of the slide
            id: `${containerId}-${slideID}`,
            payload: (((slide.action || {}).anchor || {}).payload) || undefined
        }))
            .filter((btn) => btn.payload);
        // find each button's anchor-wrapper and attach the event to it.
        buttons.forEach((btn) => {
            document.querySelector(`#${btn.id}`).parentElement.addEventListener('click', () => this.onClick(btn.payload));
        });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], CarouselComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CarouselComponent.prototype, "emit", void 0);
CarouselComponent = __decorate([
    Component({
        selector: 'n7-carousel',
        template: "<button *ngIf=\"data && data.classes === 'demo'\"\r\n        class=\"n7-btn\"\r\n        (click)=\"api.load.videos()\">api.load.videos()</button>\r\n\r\n<div *ngIf=\"data\"\r\n     class=\"n7-carousel {{ data.classes || '' }}\">\r\n  <!-- Warning: Do not style div.latte-carousel -->\r\n  <div id=\"{{data.containerId}}\"\r\n       class=\"latte-carousel\">\r\n    <ng-container *ngFor=\"let slide of data.slides; let index = index;\">\r\n      <ng-container *ngTemplateOutlet=\"carouselSlide; context:{slide: slide, index: index}\"></ng-container>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n\r\n<!-- ===== SLIDE WRAPPER ===== -->\r\n<ng-template #carouselSlide\r\n             let-slide=\"slide\"\r\n             let-slideID=\"index\">\r\n  <!-- Warning: Do not style div.latte-item -->\r\n  <div class=\"latte-item\">\r\n    <div class=\"n7-carousel__slide {{ slide.classes || ''}}\"\r\n         [ngClass]=\"{ 'has-image' : slide.background.image, 'has-video': slide.background.video }\"\r\n         [style.background-color]=\"slide.background.color ? slide.background.color : ''\"\r\n         [style.background-image]=\"slide.background.image ? 'url('+slide.background.image+')' : ''\">\r\n      <div class=\"n7-carousel__slide-content-wrapper\">\r\n        <div class=\"n7-carousel__slide-content\">\r\n          <div class=\"n7-carousel__slide-content-left\">\r\n            <ng-container *ngTemplateOutlet=\"slideForeground; context:{items: slide.items, slideID: slideID}\">\r\n            </ng-container>\r\n          </div>\r\n          <div class=\"n7-carousel__slide-content-right\"\r\n               *ngIf=\"slide.action\">\r\n            <n7-anchor-wrapper [data]=\"slide.action.anchor\"\r\n                               (clicked)=\"onClick($event)\">\r\n              <!-- Button ID's are used to dynamically reattach events after loading the carousel -->\r\n              <button id=\"{{data.containerId}}-{{slideID}}\"\r\n                      class=\"n7-hero__btn n7-btn n7-btn-cta n7-btn-l\">\r\n                {{slide.action.text}}\r\n              </button>\r\n            </n7-anchor-wrapper>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <ng-container *ngIf=\"slide.background\">\r\n        <ng-container *ngTemplateOutlet=\"slideBackground; context:{$implicit: slide.background}\">\r\n        </ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- ===== SLIDE FOREGROUND ===== -->\r\n<ng-template #slideForeground\r\n             let-items=\"items\"\r\n             let-slideID=\"slideID\">\r\n  <ng-container *ngFor=\"let el of items; let itemID = index\">\r\n    <h1 class=\"n7-carousel__slide-title\"\r\n        *ngIf=\"el.title\">{{el.title}}</h1>\r\n    <div class=\"n7-carousel__slide-text\"\r\n          *ngIf=\"el.text\" [innerHTML]=\"el.text\"></div>\r\n    <div class=\"n7-carousel__slide-metadata-wrapper\"\r\n         *ngIf=\"el.metadata\">\r\n      <ng-container *ngFor=\"let m of el.metadata\">\r\n        <div class=\"n7-carousel__slide-metadata\">\r\n            <span class=\"n7-carousel__slide-metadata-label\"\r\n              *ngIf=\"m.key\">{{m.key}}</span>\r\n            <span class=\"n7-carousel__slide-metadata-value\"\r\n              *ngIf=\"m.value\">{{m.value}}</span>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n  </ng-container>\r\n</ng-template>\r\n\r\n<!-- ===== VIDEO BACKGROUND ===== -->\r\n<ng-template #slideBackground\r\n             let-bg>\r\n  <ng-container *ngIf=\"bg.video as v\">\r\n    <video #video\r\n           class=\"n7-carousel__slide-video\"\r\n           [poster]=\"v.poster\"\r\n           [height]=\"v.height\"\r\n           [width]=\"v.width\"\r\n           loop\r\n           muted\r\n           autoplay\r\n           playsinline>\r\n      <source #source\r\n              class=\"lazy\"\r\n              [attr.data-src]=\"v.url\"\r\n              type=\"video/mp4\">\r\n    </video>\r\n    <div class=\"n7-carousel__slide-video-overlay\">\r\n\r\n    </div>\r\n  </ng-container>\r\n</ng-template>\r\n"
    })
], CarouselComponent);

let ChartComponent = class ChartComponent {
    constructor() {
        this._loaded = false;
    }
    ngAfterContentChecked() {
        if (!this.data || this._loaded)
            return;
        this._loaded = true;
        setTimeout(() => {
            const { containerId, libOptions } = this.data;
            import('apexcharts/dist/apexcharts.common.js').then((module) => {
                const { default: ApexCharts } = module;
                const chart = new ApexCharts(document.querySelector(`#${containerId}`), libOptions);
                chart.render();
                if (this.data.setChart)
                    this.data.setChart(chart);
            });
        });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "emit", void 0);
ChartComponent = __decorate([
    Component({
        selector: 'n7-chart',
        template: "<div *ngIf=\"data\" class=\"n7-chart {{ data.classes || '' }}\">\r\n    <div id=\"{{ data.containerId }}\"></div>\r\n</div>"
    })
], ChartComponent);

//---------------------------
let ContentPlaceholderComponent = class ContentPlaceholderComponent {
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ContentPlaceholderComponent.prototype, "data", void 0);
ContentPlaceholderComponent = __decorate([
    Component({
        selector: 'n7-content-placeholder',
        template: "<div *ngIf=\"data\" class=\"n7-content-placeholder\">\r\n  <ng-container *ngFor=\"let b of data.blocks\">\r\n    <div *ngIf=\"!b.image\" class=\"n7-content-placeholder__item {{b.classes || ''}}\"></div>\r\n    <img *ngIf=\"b.image\" class=\"n7-content-placeholder__image {{b.classes || ''}}\" src=\"{{b.image}}\" alt=\"{{ b.alt || '' }}\">\r\n  </ng-container>\r\n</div>"
    })
], ContentPlaceholderComponent);

//---------------------------
let DataWidgetComponent = class DataWidgetComponent {
    onMouseEnter(payload) {
        if (!this.emit)
            return;
        this.emit('mouseenter', payload);
    }
    onMouseLeave(payload) {
        if (!this.emit)
            return;
        this.emit('mouseleave', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], DataWidgetComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DataWidgetComponent.prototype, "emit", void 0);
DataWidgetComponent = __decorate([
    Component({
        selector: 'n7-data-widget',
        template: "<div *ngIf=\"data\" class=\"n7-data-widget {{ data.classes || '' }}\">\r\n    <div class=\"n7-data-widget__main\">\r\n        <span *ngIf=\"data.icon\"\r\n              class=\"n7-data-widget__main-icon {{data.icon}}\"\r\n              (mouseenter)=\"onMouseEnter(data.payload)\"\r\n              (mouseleave)=\"onMouseLeave(data.payload)\">\r\n        </span>\r\n        <h2 class=\"n7-data-widget__main-title\"\r\n            [innerHTML]=\"data.text\">\r\n        </h2>\r\n    </div>\r\n    \r\n    <div *ngIf=\"data.subtitle && (data.subtitle.text || data.subtitle.icon || data.subtitle.value)\"\r\n         class=\"n7-data-widget__sub\">\r\n        <p *ngIf=\"data.subtitle.text\"\r\n           class=\"n7-data-widget__sub-title\"\r\n           [innerHTML]=\"data.subtitle.text\">\r\n        </p>\r\n        <span *ngIf=\"data.subtitle.icon || data.subtitle.value\"\r\n              class=\"n7-data-widget__sub-info\"\r\n              (mouseenter)=\"onMouseEnter(data.subtitle.payload)\"\r\n              (mouseleave)=\"onMouseLeave(data.subtitle.payload)\">\r\n                <span *ngIf=\"data.subtitle.icon\"\r\n                class=\"n7-data-widget__sub-info-icon {{data.subtitle.icon}}\">\r\n          </span>\r\n          <span *ngIf=\"data.subtitle.value\"\r\n                class=\"n7-data-widget__sub-info-label\"\r\n                [innerHTML]=\"data.subtitle.value\">\r\n          </span>\r\n        </span>\r\n    </div>\r\n</div>\r\n"
    })
], DataWidgetComponent);

//---------------------------
let DatepickerComponent = class DatepickerComponent {
    constructor() {
        this._loaded = false;
    }
    ngAfterContentChecked() {
        if (!this.data || this._loaded)
            return;
        this._loaded = true;
        setTimeout(() => {
            const { id, libOptions } = this.data;
            import('flatpickr').then((module) => {
                const { default: flatpickr } = module;
                const datepicker = flatpickr(`#${id}`, Object.assign(Object.assign({}, libOptions), { onChange: (selectedDates, dateStr, instance) => {
                        if (this.emit) {
                            this.emit('change', { selectedDates, dateStr, instance });
                        }
                    } }));
                // setting datepicker
                if (this.data.getInstance)
                    this.data.getInstance(datepicker);
            });
        });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], DatepickerComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DatepickerComponent.prototype, "emit", void 0);
DatepickerComponent = __decorate([
    Component({
        selector: 'n7-datepicker',
        template: "<div *ngIf=\"data\" class=\"n7-datepicker {{ data.classes || '' }}\">\r\n  <input type=\"text\" id=\"{{this.data.id}}\"/>\r\n</div>"
    })
], DatepickerComponent);

//---------------------------
let FacetComponent = class FacetComponent {
    onChange(inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload, value });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], FacetComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], FacetComponent.prototype, "emit", void 0);
FacetComponent = __decorate([
    Component({
        selector: 'n7-facet',
        template: "<div *ngIf=\"data\" class=\"n7-facet\">\r\n    <div *ngFor=\"let section of data.sections\" class=\"n7-facet__section {{ section.classes || '' }}\">\r\n        <div *ngFor=\"let input of section.inputs\"\r\n            class=\"n7-facet__section-input n7-facet__section-input-{{ input.type }} {{ input.classes || '' }}\">\r\n\r\n            <ng-container [ngSwitch]=\"input.type\">\r\n\r\n                <!-- Checkbox -->\r\n                <ng-container *ngSwitchCase=\"'checkbox'\">\r\n                    <input type=\"checkbox\" id=\"{{ input.id }}\" class=\"n7-facet__input-checkbox-input\"\r\n                        [checked]=\"input.checked\"\r\n                        [disabled]=\"input.disabled\"\r\n                        (change)=\"onChange(input.payload, $event.target.checked)\">\r\n                    <label *ngIf=\"input.label\" class=\"n7-facet__checkbox-label\" for=\"{{ input.id }}\">\r\n                        {{ input.label }}\r\n                    </label>\r\n                </ng-container>\r\n\r\n                <!-- Text -->\r\n                <ng-container *ngSwitchCase=\"'text'\">\r\n                    <label *ngIf=\"input.label\" class=\"n7-facet__input-text-label\" for=\"{{ input.id }}\">\r\n                        {{ input.label }}\r\n                    </label>\r\n                    <div class=\"n7-facet__input-text-wrapper\">\r\n                        <input type=\"text\" id=\"{{ input.id }}\" class=\"n7-facet__input-text {{input.classes || ''}}\"\r\n                            placeholder=\"{{input.placeholder || ''}}\"\r\n                            [value]=\"input.value || null\"\r\n                            [disabled]=\"input.disabled\"\r\n                            (input)=\"onChange(input.inputPayload, $event.target.value)\"\r\n                            (keyup.enter)=\"onChange(input.enterPayload, $event.target.value)\">\r\n                        <span *ngIf=\"input.icon\" class=\"n7-facet__input-text-icon {{input.icon || ''}}\" \r\n                            (click)=\"onChange(input.iconPayload)\">\r\n                        </span>\r\n                    </div>\r\n                </ng-container>\r\n\r\n                <!-- Link -->\r\n                <ng-container *ngSwitchCase=\"'link'\">\r\n                    <div class=\"n7-facet__input-link {{ input.classes || '' }}\"\r\n                        (click)=\"onChange(input.payload)\">\r\n                        <span *ngIf=\"input.icon\" class=\"n7-facet__input-link-icon {{ input.icon }}\"></span>\r\n                        <span class=\"n7-facet__input-link-text\">{{ input.text }}</span>\r\n                        <span *ngIf=\"input.counter || input.counter === 0\" class=\"n7-facet__input-link-counter\">{{ input.counter }}</span>\r\n                    </div>\r\n                </ng-container>\r\n\r\n                <!-- Select -->\r\n                <ng-container *ngSwitchCase=\"'select'\">\r\n                    <label *ngIf=\"input.label\" for=\"{{ input.id }}\">{{ input.label }}</label>\r\n                    <select (change)=\"onChange(input.payload, $event.target.value)\" \r\n                        id=\"{{ input.id }}\"\r\n                        class=\"n7-facet__input-select {{ input.classes || '' }}\"\r\n                        [disabled]=\"input.disabled\">\r\n                        <option *ngFor=\"let option of input.options\" \r\n                            [value]=\"option.value\" \r\n                            [disabled]=\"option.disabled\" \r\n                            [selected]=\"option.selected\">{{ option.label }}</option>\r\n                    </select>\r\n                </ng-container>\r\n            </ng-container>\r\n\r\n        </div>\r\n    </div>\r\n</div>"
    })
], FacetComponent);

//---------------------------
let FacetHeaderComponent = class FacetHeaderComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], FacetHeaderComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], FacetHeaderComponent.prototype, "emit", void 0);
FacetHeaderComponent = __decorate([
    Component({
        selector: 'n7-facet-header',
        template: "<div *ngIf=\"data\" \r\nclass=\"n7-facet-header {{ data.classes || '' }}\" \r\n(click)=\"onClick(data.payload)\">\r\n    <span *ngIf=\"data.iconLeft\"\r\n    class=\"n7-facet-header__icon-left {{ data.iconLeft }}\">\r\n    </span>\r\n    <span class=\"n7-facet-header__text-wrapper\">\r\n        <span class=\"n7-facet-header__text\">\r\n            {{data.text}}\r\n        </span>\r\n        <span class=\"n7-facet-header__secondary-text\" *ngIf=\"data.additionalText\">\r\n            {{data.additionalText}}\r\n        </span>\r\n    </span>\r\n    <span *ngIf=\"data.iconRight\" \r\n    class=\"n7-facet-header__icon-right {{ data.iconRight }}\">\r\n    </span>\r\n</div>"
    })
], FacetHeaderComponent);

//---------------------------
let FacetYearRangeComponent = class FacetYearRangeComponent {
    onChange(payload, selected) {
        switch (payload) {
            case 'in-date':
                {
                    // find index of selected option
                    const opts = this.data.inDate.options;
                    this.data.inDate._meta = opts.find((o) => o.value === selected).value;
                    const sliceIndex = opts.findIndex((o) => o.value === selected);
                    // make new array of possible years
                    const newOptions = opts.slice(sliceIndex, opts.length);
                    // give new array to second <select>
                    this.data.outDate.options = newOptions;
                    // remove placeholder and enable second <select>
                    this.data.inDate.placeholder = '';
                    this.data.outDate.classes = '';
                    this.data.outDate.placeholder = 'choose';
                }
                break;
            case 'out-date':
                this.data.outDate._meta = selected;
                this.data.outDate.placeholder = '';
                // emit selected facet parameters
                this.emit('change', {
                    payload,
                    value: {
                        from: this.data.inDate._meta,
                        to: this.data.outDate._meta
                    }
                });
                break;
            default:
                break;
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], FacetYearRangeComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], FacetYearRangeComponent.prototype, "emit", void 0);
FacetYearRangeComponent = __decorate([
    Component({
        selector: 'n7-facet-year-range',
        template: "<div *ngIf=\"data\" class=\"n7-facet-year-range\">\r\n\r\n    <!-- Select starting year -->\r\n    <div class=\"n7-facet-year-range__in\">\r\n        <label class=\"n7-facet-year-range__in-label\">\r\n            {{ data.inDate.text }}\r\n        </label>\r\n        <select (change)=\"onChange(data.inDate.payload, $event.target.value)\"\r\n            class=\"n7-facet-year-range__in-select {{ data.inDate.classes || '' }}\">\r\n            <!-- Placeholder option -->\r\n            <option *ngIf=\"data.inDate.placeholder.length > 0\" value=\"{{ data.inDate.placeholder }}\" disabled selected>\r\n                {{ data.inDate.placeholder }}\r\n            </option>\r\n            <option *ngFor=\"let opt of data.inDate.options\" value=\"{{ opt.value }}\">\r\n                {{ opt.value }}\r\n            </option>\r\n        </select>\r\n    </div>\r\n\r\n    <!-- Select final year -->\r\n    <div class=\"n7-facet-year-range__out\">\r\n        <label class=\"n7-facet-year-range__out-label\">\r\n            {{ data.outDate.text }}\r\n        </label>\r\n        <select (change)=\"onChange(data.outDate.payload, $event.target.value)\"\r\n                class=\"n7-facet-year-range__out-select {{ data.outDate.classes || '' }}\"\r\n                formControlName=\"outDate\">\r\n            <!-- Placeholder option -->\r\n            <option *ngIf=\"data.outDate.placeholder.length > 0\" value=\"{{ data.outDate.placeholder }}\" disabled selected>\r\n                {{ data.outDate.placeholder }}\r\n            </option>\r\n            <option *ngFor=\"let opt of data.outDate.options\" value=\"{{ opt.value }}\">\r\n                {{ opt.value }}\r\n            </option>\r\n        </select>\r\n    </div>\r\n</div>"
    })
], FacetYearRangeComponent);

//---------------------------
let FooterComponent = class FooterComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], FooterComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], FooterComponent.prototype, "emit", void 0);
FooterComponent = __decorate([
    Component({
        selector: 'n7-footer',
        template: "<div *ngIf=\"data\" class=\"n7-footer {{data.classes || ''}}\">\r\n    <div class=\"n7-footer__content\">\r\n        <!-- Loop footer content columns -->\r\n        <div class=\"n7-footer__column {{column.classes || ''}}\" *ngFor=\"let column of data.columns\">\r\n            <ng-container *ngTemplateOutlet=\"footerColumn; context:{$implicit: column}\"></ng-container>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Template: Columns -->\r\n<ng-template #footerColumn let-column>\r\n    <h2 *ngIf=\"column.title\" class=\"n7-footer__column-title\">\r\n        {{ column.title }}\r\n    </h2>\r\n    <p *ngIf=\"column.text\" \r\n       class=\"n7-footer__column-text\"\r\n       [innerHTML]=\"column.text\">\r\n    </p>\r\n    <div *ngIf=\"column.links\" class=\"n7-footer__column-nav\">\r\n        <ul class=\"n7-footer__column-nav-list\">\r\n            <li *ngFor=\"let link of column.links\"\r\n                class=\"n7-footer__column-nav-item {{link.classes || ''}}\">\r\n                <n7-anchor-wrapper [classes]=\"'n7-footer__column-nav-link'\"\r\n                [data]=\"link.anchor\"\r\n                (clicked)=\"onClick($event)\">\r\n                    {{ link.text }}\r\n                </n7-anchor-wrapper>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n    <div *ngIf=\"column.images\" class=\"n7-footer__column-images\">\r\n        <n7-anchor-wrapper  *ngFor=\"let image of column.images\"\r\n        [classes]=\"image.classes || ''\"\r\n        [data]=\"image.anchor\"\r\n        (clicked)=\"onClick($event)\">\r\n            <img \r\n            [src]=\"image.url\" \r\n            [attr.alt]=\"image.alttext\" />\r\n        </n7-anchor-wrapper>\r\n    </div>\r\n</ng-template>"
    })
], FooterComponent);

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
let HeaderComponent = class HeaderComponent {
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
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "emit", void 0);
HeaderComponent = __decorate([
    Component({
        selector: 'n7-header',
        template: "<header *ngIf=\"data\" class=\"n7-header {{data.classes || ''}}\">\r\n    <div class=\"n7-header__content\">\r\n\r\n        <!-- Logo and title -->\r\n        <div class=\"n7-header__logo-title {{data.logo.classes || ''}}\">\r\n            <n7-anchor-wrapper [classes]=\"'n7-header__logo-link'\"\r\n            [data]=\"data.logo.anchor\"\r\n            (clicked)=\"onClick($event)\">\r\n                <img class=\"n7-header__logo\"\r\n                *ngIf=\"data.logo.image\"\r\n                [src]=\"data.logo.image\"\r\n                alt=\"{{ data.logo.title }}\" />\r\n                <div class=\"n7-header__title-subtitle\">\r\n                    <h1 class=\"n7-header__title\">\r\n                        {{ data.logo.title }}\r\n                    </h1>\r\n                    <h2 class=\"n7-header__subtitle\" *ngIf=\"data.logo.subtitle\">\r\n                        {{ data.logo.subtitle }}\r\n                    </h2>\r\n                </div>\r\n            </n7-anchor-wrapper>\r\n        </div>\r\n\r\n        <!-- Main menu -->\r\n        <nav class=\"n7-header__nav {{data.nav.classes || ''}}\" *ngIf=\"data.nav\">\r\n            <div class=\"n7-header__nav-content\">\r\n                <ul class=\"n7-header__nav-list\">\r\n                    <li class=\"n7-header__nav-item {{item.classes || ''}}\" *ngFor=\"let item of data.nav.items\">\r\n                        <n7-anchor-wrapper [classes]=\"'n7-header__nav-link'\"\r\n                        [data]=\"item.anchor\"\r\n                        (clicked)=\"onClick($event)\">\r\n                            <span class=\"n7-header__nav-icon {{item.icon}}\" *ngIf=\"item.icon\"></span>\r\n                            <span class=\"n7-header__nav-label\" *ngIf=\"item.text\">\r\n                                {{ item.text }}\r\n                            </span>\r\n                        </n7-anchor-wrapper>\r\n                        <!-- Sublevel -->\r\n                        <ul class=\"n7-header__subnav-list\" *ngIf=\"item.subnav\">\r\n                            <li class=\"n7-header__subnav-item {{subitem.classes || ''}}\" *ngFor=\"let subitem of item.subnav\">\r\n                                <n7-anchor-wrapper [classes]=\"'n7-header__subnav-link'\"\r\n                                [data]=\"subitem.anchor\"\r\n                                (clicked)=\"onClick($event)\">\r\n                                    <span class=\"n7-header__subnav-icon {{subitem.icon}}\" *ngIf=\"subitem.icon\"></span>\r\n                                    <span class=\"n7-header__subnav-label\" *ngIf=\"subitem.text\">\r\n                                        {{ subitem.text }}\r\n                                    </span>\r\n                                </n7-anchor-wrapper>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </nav>\r\n\r\n        <!-- Mobile menu toggle -->\r\n        <div class=\"n7-header__mobile-menu-toggle\">\r\n            <span class=\"n7-header__mobile-menu-icon n7-icon-menu\" \r\n                (click)=\"onClick(data.menuToggle.open.payload)\"></span>\r\n        </div>\r\n\r\n        <!-- Mobile menu close -->\r\n        <span class=\"n7-header__mobile-menu-close n7-icon-close\" \r\n            (click)=\"onClick(data.menuToggle.close.payload)\"></span>\r\n\r\n        <!-- Tools: search, notifications, use profile or login/signup -->\r\n        <div class=\"n7-header__tools\">\r\n            \r\n            <div class=\"n7-header__search {{data.search.classes || ''}}\" *ngIf=\"data.search\">\r\n                <input class=\"n7-header__search-input\" \r\n                    type=\"search\" \r\n                    name=\"search\" \r\n                    placeholder=\"{{ data.search.hint || ''}}\" \r\n                    (keyup)=\"onKeyUp(data.search.payload, $event.keyCode, $event.target.value)\"/>\r\n                <button class=\"n7-header__search-btn\" type=\"submit\" (click)=\"onClick(data.search.payload)\">\r\n                    <span class=\"n7-header__search-btn-label\">\r\n                        Search\r\n                    </span>\r\n                </button>\r\n            </div>\r\n            \r\n            <div class=\"n7-header__actions\" *ngIf=\"data.actions\">\r\n                <n7-anchor-wrapper *ngFor=\"let action of data.actions\" \r\n                [classes]=\"'n7-header__action' + (action.classes || '')\"\r\n                [data]=\"action.anchor\"\r\n                (clicked)=\"onClick($event)\">\r\n                    <span class=\"n7-header__action-icon {{ action.icon }}\"></span>\r\n                    <span *ngIf=\"action.badge\" class=\"n7-header__action-badge {{ action.badge.text ? 'has-text' : '' }}\">\r\n                        {{ action.badge.text }}\r\n                    </span>\r\n                </n7-anchor-wrapper>\r\n            </div>\r\n\r\n            <div class=\"n7-header__buttons\" *ngIf=\"data.buttons\">\r\n                <n7-anchor-wrapper *ngFor=\"let button of data.buttons\"\r\n                [classes]=\"button.classes\" \r\n                [data]=\"button.anchor\"\r\n                (clicked)=\"onClick($event)\">\r\n                <span class=\"\" *ngIf=\"button.text\">\r\n                    {{ button.text }}\r\n                </span>\r\n                <span class=\"{{button.icon}}\" *ngIf=\"button.icon\"></span>\r\n                </n7-anchor-wrapper>\r\n            </div>\r\n\r\n            <div class=\"n7-header__user {{data.user.classes || ''}}\" *ngIf=\"data.user\">\r\n                <n7-anchor-wrapper [classes]=\"'n7-header__user-content'\"\r\n                [data]=\"data.user.anchor\"\r\n                (clicked)=\"onClick($event)\">\r\n                    <img *ngIf=\"data.user.img\"\r\n                    class=\"n7-header__user-img\"  \r\n                    [src]=\"data.user.img\"/>\r\n                    <p class=\"n7-header__user-name\" *ngIf=\"data.user.name\">\r\n                        <span class=\"n7-header__user-name-label\">\r\n                            {{ data.user.name }}\r\n                        </span>\r\n                    </p>\r\n                </n7-anchor-wrapper>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</header>\r\n\r\n"
    })
], HeaderComponent);

//---------------------------
let HeroComponent = class HeroComponent {
    getBackgroundImageCssValue(backgroundImage) {
        if (backgroundImage) {
            return `url(${backgroundImage})`;
        }
        return 'none';
    }
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    onInputChange(payload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload: payload, value });
    }
    onInputEnter(payload, value) {
        if (!this.emit)
            return;
        this.emit('enter', { inputPayload: payload, value });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], HeroComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], HeroComponent.prototype, "emit", void 0);
HeroComponent = __decorate([
    Component({
        selector: 'n7-hero',
        template: "<section *ngIf=\"data\" class=\"n7-hero {{data.classes || ''}}\" \r\n    [ngClass]=\"{ \r\n        'has-image' : !!data.image, \r\n        'has-background-image': !!data.backgroundImage \r\n    }\"\r\n    [ngStyle]=\"{ \r\n        'background-image': getBackgroundImageCssValue(data.backgroundImage)\r\n    }\">\r\n    <div class=\"n7-hero__content\">\r\n        \r\n        <div class=\"n7-hero__text-wrapper\">\r\n            <h1 class=\"n7-hero__title\" [innerHTML]=\"data.title\"></h1>\r\n            <div class=\"n7-hero__text\" *ngIf=\"data.text\" [innerHTML]=\"data.text\"></div>\r\n            <div class=\"n7-hero__input-wrapper\" *ngIf=\"data.input || data.button\">\r\n                <input type=\"text\" \r\n                       class=\"n7-hero__input\" \r\n                       placeholder=\"{{data.input.placeholder || ''}}\" \r\n                       *ngIf=\"data.input\" \r\n                       (input)=\"onInputChange(data.input.payload, $event.target.value)\" \r\n                       (keyup.enter)=\"onInputEnter(data.input.payload, $event.target.value)\">\r\n                <span class=\"n7-hero__input-icon {{data.input.icon || ''}}\" \r\n                      *ngIf=\"data.input && data.input.icon\" \r\n                      (click)=\"onClick(data.input.payload)\"></span>\r\n                <ng-container *ngIf=\"data.button\">\r\n                    <n7-anchor-wrapper [classes]=\"'n7-hero__btn n7-btn n7-btn-cta n7-btn-l'\"\r\n                    [data]=\"data.button.anchor\"\r\n                    (clicked)=\"onClick($event)\">\r\n                        {{data.button.text}}\r\n                    </n7-anchor-wrapper>\r\n                </ng-container>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"n7-hero__image-wrapper\" *ngIf=\"data.image\">\r\n            <img class=\"n7-hero__image\" src=\"{{data.image}}\" alt=\"\">\r\n        </div>\r\n\r\n    </div>\r\n</section>"
    })
], HeroComponent);

//---------------------------
/**
 * ImageViewerComponent <n7-image-viewer>
 *
 */
let ImageViewerComponent = class ImageViewerComponent {
    constructor() {
        this._loaded = false;
    }
    ngAfterContentChecked() {
        if (!this.data || this._loaded)
            return;
        this._loaded = true;
        setTimeout(() => {
            const prefixUrl = !this.data.prefixUrl ? '//openseadragon.github.io/openseadragon/images/' : this.data.prefixUrl;
            import('openseadragon').then((module) => {
                const { default: openseadragon } = module;
                const viewer = openseadragon(Object.assign({ id: this.data.viewerId, prefixUrl, tileSources: this.data.images, zoomInButton: 'n7-image-viewer-zoom-in', zoomOutButton: 'n7-image-viewer-zoom-out', homeButton: 'n7-image-viewer-home', fullPageButton: 'n7-image-viewer-full-screen', nextButton: 'n7-image-viewer-nav-next', previousButton: 'n7-image-viewer-nav-prev' }, this.data.libOptions));
                this.data._setViewer(viewer);
            });
        });
    }
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('thumbclick', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ImageViewerComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ImageViewerComponent.prototype, "emit", void 0);
ImageViewerComponent = __decorate([
    Component({
        selector: 'n7-image-viewer',
        template: "<div *ngIf=\"data\" class=\"n7-image-viewer {{data.classes || ''}}\">\r\n    <!-- OSD viewer -->\r\n    <div id=\"{{data.viewerId}}\" class=\"n7-image-viewer__viewer\">\r\n    </div>\r\n\r\n    <!-- Zoom controls -->\r\n    <div class=\"n7-image-viewer__controls\">\r\n        <ul class=\"n7-image-viewer__controls-list\">\r\n            <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-zoom-in\">\r\n                <span class=\"n7-icon-search-plus\"></span>\r\n            </li>\r\n            <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-zoom-out\">\r\n                <span class=\"n7-icon-search-minus\"></span>\r\n            </li>\r\n            <!--\r\n            <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-full-screen\">\r\n                <span class=\"n7-icon-expand-arrows\"></span>\r\n            </li>\r\n            -->\r\n        </ul>\r\n    </div>\r\n\r\n    <!-- Navigation -->\r\n    <div class=\"n7-image-viewer__prev\" id=\"n7-image-viewer-nav-prev\">\r\n        <span class=\"n7-icon-angle-left\"></span>\r\n    </div>\r\n\r\n    <div class=\"n7-image-viewer__next\" id=\"n7-image-viewer-nav-next\">\r\n        <span class=\"n7-icon-angle-right\"></span>\r\n    </div>\r\n</div>"
    })
], ImageViewerComponent);

//---------------------------
/**
 * ImageViewerToolsComponent <n7-image-viewer-tools>
 */
let ImageViewerToolsComponent = class ImageViewerToolsComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ImageViewerToolsComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ImageViewerToolsComponent.prototype, "emit", void 0);
ImageViewerToolsComponent = __decorate([
    Component({
        selector: 'n7-image-viewer-tools',
        template: "<div *ngIf=\"data\" class=\"n7-image-viewer-tools {{data.classes || ''}}\">\r\n    <div class=\"n7-image-viewer-tools__bar\">\r\n        <div class=\"n7-image-viewer-tools__controls\">\r\n            <div class=\"n7-image-viewer-tools__btn-container\">\r\n                <ng-container *ngIf=\"data.controls.description\">\r\n                    <n7-anchor-wrapper \r\n                    [classes]=\"'n7-hero__btn n7-btn n7-btn-cta n7-btn-l n7-image-viewer-tools__btnDescription'\"\r\n                    [data]=\"data.controls.description.anchor\"\r\n                    (clicked)=\"onClick($event)\">\r\n                        <span class=\"{{data.controls.description.icon}}\"></span>\r\n                    </n7-anchor-wrapper>\r\n                </ng-container>\r\n            </div>\r\n\r\n            <div class=\"n7-image-viewer-tools__btn-container\">\r\n                <ng-container *ngIf=\"data.controls.thumbs\">\r\n                    <n7-anchor-wrapper \r\n                    [classes]=\"'n7-hero__btn n7-btn n7-btn-cta n7-btn-l n7-image-viewer-tools__btnThumbs'\"\r\n                    [data]=\"data.controls.thumbs.anchor\"\r\n                    (clicked)=\"onClick($event)\">\r\n                        <span class=\"{{data.controls.thumbs.icon}}\"></span>\r\n                    </n7-anchor-wrapper>\r\n                </ng-container>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"n7-image-viewer-tools__thumbs\" \r\n            *ngIf=\"data.isVisible.thumbnails && data.images\" >\r\n            <div *ngFor=\"let img of data.images; let imgIndex = index\" \r\n                class=\"n7-image-viewer-tools__thumb-container\"\r\n                [class.active]=\"imgIndex == data.initial\">\r\n                <img\r\n                    src=\"{{img.thumb}}\"\r\n                    (click)=\"onClick(img.payload)\" >\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"n7-image-viewer-tools__description\" \r\n            *ngIf=\"data.isVisible.description\" >\r\n            <div [innerHTML]=\"data.description\"></div>\r\n            <div class=\"n7-image-viewer-tools__description-closebtn\"\r\n                (click)=\"onClick(data.controls.closedescription.anchor.payload)\">\r\n                <span class=\"{{data.controls.closedescription.icon}}\"></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"
    })
], ImageViewerToolsComponent);

//---------------------------
let InnerTitleComponent = class InnerTitleComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    onChange(payload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload: payload, value });
    }
    onInputChange(payload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload: payload, value });
    }
    onInputEnter(payload, value) {
        if (!this.emit)
            return;
        this.emit('search', { inputPayload: payload, value });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], InnerTitleComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], InnerTitleComponent.prototype, "emit", void 0);
InnerTitleComponent = __decorate([
    Component({
        selector: 'n7-inner-title',
        template: "<div *ngIf=\"data\" class=\"n7-inner-title\">\r\n    <div class=\"n7-inner-title__left-wrapper\">\r\n        <ng-container *ngTemplateOutlet=\"icon; context:{$implicit: data.icon}\"></ng-container>\r\n        <div *ngIf=\"data.image\" \r\n             class=\"n7-inner-title__image-left\" \r\n             [ngStyle]=\"{'background-image': 'url(' + data.image + ')'}\"></div>\r\n\r\n        <div class=\"n7-inner-title__wrapper-texts\">\r\n            <div *ngIf=\"data.title.main\"\r\n            [innerHTML]=\"data.title.main.text\" \r\n            class=\"n7-inner-title__title {{data.title.main.classes || ''}}\">\r\n            </div>\r\n            <div *ngIf=\"data.title.secondary\" \r\n            [innerHTML]=\"data.title.secondary.text\" \r\n            class=\"n7-inner-title__subtitle {{data.title.secondary.classes || ''}}\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"n7-inner-title__tools\">\r\n        <!-- Toolbar label -->\r\n        <div *ngIf=\"data.tools\"\r\n            class=\"n7-inner-title__tools-label \">\r\n            {{data.tools}}\r\n        </div>\r\n        <!-- Actions -->\r\n        <ng-container *ngIf=\"data.actions\">\r\n            <ng-container *ngTemplateOutlet=\"actions; \r\n                        context:{$implicit: data.actions}\">\r\n            </ng-container>\r\n        </ng-container>\r\n    </div>\r\n\r\n</div>\r\n\r\n<!-- Template actions -->\r\n<ng-template #actions let-action>\r\n    <ng-container *ngIf=\"action.select\">\r\n        <ng-container *ngTemplateOutlet=\"select;\r\n                      context:{$implicit: action.select}\">\r\n        </ng-container>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"action.search\">\r\n        <ng-container *ngTemplateOutlet=\"search; \r\n                      context:{$implicit: action.search}\">\r\n        </ng-container>\r\n    </ng-container>\r\n    \r\n    <ng-container *ngIf=\"action.buttons\">\r\n        <ng-container *ngTemplateOutlet=\"buttons;\r\n                      context:{$implicit: action.buttons}\">\r\n        </ng-container>\r\n    </ng-container>\r\n</ng-template>\r\n    \r\n<!-- Template sorting -->\r\n<ng-template #select let-select>\r\n<div class=\"n7-inner-title__sorting\">\r\n    <span *ngIf=\"select.label\"\r\n          class=\"n7-inner-title__sorting-label \">\r\n        {{select.label}}\r\n    </span>\r\n    <select (change)=\"onChange(select.payload, $event.target.value)\"\r\n            class=\"n7-inner-title__sorting-select\">\r\n        <option *ngFor=\"let opt of select.options\"\r\n        value=\"{{opt.value}}\"\r\n        class=\"n7-inner-title__sorting-option\"\r\n        [selected]=\"opt.selected\"\r\n        [disabled]=\"opt.disabled\">\r\n            {{opt.text}}\r\n        </option>\r\n    </select>\r\n</div>\r\n</ng-template>\r\n\r\n<!-- Template search -->\r\n<ng-template #search let-search>\r\n    <div class=\"n7-inner-title__search\">\r\n        <input type=\"text\" \r\n            class=\"n7-inner-title__search-bar \" \r\n            placeholder=\"{{search.placeholder}}\"\r\n            (input)=\"onInputChange(search.payload, $event.target.value)\"\r\n            (keyup.enter)=\"onInputEnter(search.payload, $event.target.value)\">\r\n     <button *ngIf=\"search.button\" \r\n             (click)=\"onClick(search.button.payload)\"\r\n             class=\"n7-btn n7-inner-title__search-button \">\r\n         {{search.button.text}}\r\n     </button>\r\n    </div>\r\n</ng-template>\r\n\r\n<!-- Template buttons -->\r\n<ng-template #buttons let-buttons>\r\n    <div class=\"n7-inner-title__buttons-wrapper\">\r\n        <div *ngFor=\"let btn of buttons\"\r\n            class=\"n7-inner-title__single-button-wrapper\">\r\n            <n7-anchor-wrapper [classes]=\"'n7-btn n7-inner-title__buttons-action ' + btn.classes || ''\"\r\n            [data]=\"btn.anchor\"\r\n            (clicked)=\"onClick($event)\">\r\n                <span *ngIf=\"btn.icon\" class=\"n7-btn__icon {{btn.icon || ''}}\"></span>    \r\n                {{ btn.text }}\r\n            </n7-anchor-wrapper>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<!-- Template Icon -->\r\n<ng-template #icon let-icon>\r\n    <!-- Complex icon -->\r\n    <span *ngIf=\"icon && icon.id\"\r\n          class=\"n7-inner-title__icon-left {{icon.id || ''}}\"\r\n          [ngStyle]=\"icon.style || {}\"></span>\r\n    <!-- Simple icon -->\r\n    <span *ngIf=\"icon && !icon.id\"\r\n          class=\"n7-inner-title__icon-left {{icon || ''}}\"></span>\r\n</ng-template>\r\n"
    })
], InnerTitleComponent);

//---------------------------
let InputCheckboxComponent = class InputCheckboxComponent {
    onChange(inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload, value });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], InputCheckboxComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], InputCheckboxComponent.prototype, "emit", void 0);
InputCheckboxComponent = __decorate([
    Component({
        selector: 'n7-input-checkbox',
        template: "<div *ngIf=\"data\" class=\"n7-input-checkbox {{ data.classes || '' }}\">\r\n  <ng-container *ngFor=\"let input of data.checkboxes\">\r\n    <input type=\"checkbox\"\r\n           id=\"{{ input.id }}\"\r\n           class=\"n7-input-checkbox__input {{ input.classes || '' }}\"\r\n           [checked]=\"input.checked\"\r\n           [disabled]=\"input.disabled\"\r\n           (change)=\"onChange(input.payload, $event.target.checked)\">\r\n    <label *ngIf=\"input.label\"\r\n           class=\"n7-input-checkbox__label\"\r\n           for=\"{{ input.id }}\">\r\n      {{ input.label }}\r\n    </label>\r\n  </ng-container>\r\n</div>\r\n"
    })
], InputCheckboxComponent);

//---------------------------
let InputLinkComponent = class InputLinkComponent {
    onChange(payload) {
        if (!this.emit)
            return;
        this.emit('change', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], InputLinkComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], InputLinkComponent.prototype, "emit", void 0);
InputLinkComponent = __decorate([
    Component({
        selector: 'n7-input-link',
        template: "<div *ngIf=\"data\"\r\n     class=\"n7-input-link\">\r\n  <ng-container *ngFor=\"let input of data.links\">\r\n    <div class=\"n7-input-link__link {{ input.classes || '' }}\"\r\n         (click)=\"onChange(input.payload)\">\r\n      <span *ngIf=\"input.icon\"\r\n            class=\"n7-input-link__icon {{ input.icon }}\"></span>\r\n      <span class=\"n7-input-link__text\">{{ input.text }}</span>\r\n      <span *ngIf=\"input.counter || input.counter === 0\"\r\n            class=\"n7-input-link__counter\">{{ input.counter }}</span>\r\n    </div>\r\n  </ng-container>\r\n</div>\r\n"
    })
], InputLinkComponent);

//---------------------------
let InputSelectComponent = class InputSelectComponent {
    onChange(inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload, value });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], InputSelectComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], InputSelectComponent.prototype, "emit", void 0);
InputSelectComponent = __decorate([
    Component({
        selector: 'n7-input-select',
        template: "<div *ngIf=\"data as input\"\r\n     class=\"n7-input-select\">\r\n  <label *ngIf=\"input.label\"\r\n         for=\"{{ input.id }}\">{{ input.label }}</label>\r\n  <select (change)=\"onChange(input.payload, $event.target.value)\"\r\n          id=\"{{ input.id }}\"\r\n          class=\"n7-facet__input-select {{ input.classes || '' }}\"\r\n          [disabled]=\"input.disabled\">\r\n    <option *ngFor=\"let option of input.options\"\r\n            [value]=\"option.value\"\r\n            [disabled]=\"option.disabled\"\r\n            [selected]=\"option.selected\">{{ option.label }}</option>\r\n  </select>\r\n</div>\r\n"
    })
], InputSelectComponent);

//---------------------------
let InputTextComponent = class InputTextComponent {
    onChange(inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload, value });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], InputTextComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], InputTextComponent.prototype, "emit", void 0);
InputTextComponent = __decorate([
    Component({
        selector: 'n7-input-text',
        template: "<div *ngIf=\"data as input\"\r\n     class=\"n7-input-text\">\r\n    <label *ngIf=\"input.label\"\r\n           class=\"n7-input-text__label\"\r\n           for=\"{{ input.id }}\">\r\n      {{ input.label }}\r\n    </label>\r\n    <div class=\"n7-input-text__wrapper\">\r\n      <input type=\"text\"\r\n             id=\"{{ input.id }}\"\r\n             class=\"n7-input-text__text {{input.classes || ''}}\"\r\n             placeholder=\"{{input.placeholder || ''}}\"\r\n             [value]=\"input.value || null\"\r\n             [disabled]=\"input.disabled\"\r\n             (input)=\"onChange(input.inputPayload, $event.target.value)\"\r\n             (keyup.enter)=\"onChange(input.enterPayload, $event.target.value)\">\r\n      <span *ngIf=\"input.icon\"\r\n            class=\"n7-input-text__icon {{input.icon || ''}}\"\r\n            (click)=\"onChange(input.iconPayload)\">\r\n      </span>\r\n    </div>\r\n</div>\r\n"
    })
], InputTextComponent);

//---------------------------
let ItemPreviewComponent = class ItemPreviewComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ItemPreviewComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ItemPreviewComponent.prototype, "emit", void 0);
ItemPreviewComponent = __decorate([
    Component({
        selector: 'n7-item-preview',
        template: "<div *ngIf=\"data\" class=\"n7-item-preview {{data.classes || ''}}\" \r\n     [ngClass]=\"{ 'has-image' : !!data.image, 'has-color' : !!data.color }\">\r\n    <n7-anchor-wrapper\r\n    [data]=\"data.anchor\"\r\n    (clicked)=\"onClick($event)\"\r\n    [classes]=\"'n7-item-preview__inner'\">\r\n        <!-- Image, color -->\r\n        <div class=\"n7-item-preview__image n7-item-preview__color\"\r\n            *ngIf=\"data.image || data.color\"\r\n            [style.background-image] = \"data.image ? 'url(' + data.image + ')' : undefined\"\r\n            [style.background-color] = \"data.color\">\r\n        </div>\r\n        <div class=\"n7-item-preview__content\">\r\n            <!-- Title and text -->\r\n            <div class=\"n7-item-preview__title-text\">\r\n                <h1 class=\"n7-item-preview__title\" [innerHTML]=\"data.title\"></h1>\r\n                <p class=\"n7-item-preview__text\" *ngIf=\"data.text\" [innerHTML]=\"data.text\"></p>\r\n            </div>\r\n            <!-- Metadata -->\r\n            <div class=\"n7-item-preview__metadata\" *ngIf=\"data.metadata\">\r\n                <div class=\"n7-item-preview__metadata-group {{ meta.classes || '' }}\" *ngFor=\"let meta of data.metadata\">\r\n                    <h3 class=\"n7-item-preview__metadata-group-title\" *ngIf=\"meta.title\" [innerHTML]=\"meta.title\"></h3>\r\n                    <div class=\"n7-item-preview__metadata-item {{ item.classes || '' }}\" *ngFor=\"let item of meta.items\">\r\n                        <span class=\"n7-item-preview__metadata-item-icon {{item.icon}}\" *ngIf=\"item.icon\"></span>\r\n                        <span class=\"n7-item-preview__metadata-item-label\" *ngIf=\"item.label\" [innerHTML]=\"item.label\"></span>\r\n                        <span class=\"n7-item-preview__metadata-item-value\" *ngIf=\"item.value\" [innerHTML]=\"item.value\"></span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </n7-anchor-wrapper>\r\n</div>\r\n"
    })
], ItemPreviewComponent);

//---------------------------
let LoaderComponent = class LoaderComponent {
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], LoaderComponent.prototype, "data", void 0);
LoaderComponent = __decorate([
    Component({
        selector: 'n7-loader',
        template: "<div class=\"n7-loader {{ data && data.classes ? data.classes : '' }}\">\r\n    Loading\r\n</div>"
    })
], LoaderComponent);

//---------------------------
let MapComponent = class MapComponent {
    constructor() {
        /** Knows if the component is loaded */
        this._loaded = false;
        /** Dynamically load required node modules */
        this.loadModules = () => __awaiter(this, void 0, void 0, function* () {
            return ({
                leaflet: yield import('leaflet'),
                cluster: yield import('leaflet.markercluster')
            });
        });
    }
    // private onMapClick = (e) => (e.latlng)
    ngAfterContentChecked() {
        if (!this.data || this._loaded)
            return;
        this._loaded = true;
        setTimeout(() => {
            this.loadModules().then((modules) => {
                /** Module definitions */
                const { default: lflet } = modules.leaflet;
                const { default: clstr } = modules.cluster;
                // Merge cluster and leaflet into leaflet
                const leaflet = Object.assign(Object.assign({}, lflet), clstr);
                // Create a map
                const { center, zoom } = this.data.initialView;
                const map = leaflet.map(this.data.containerId, this.data.libOptions).setView(center, zoom);
                this.data.tileLayers.forEach((layer) => {
                    leaflet.tileLayer(layer.url, layer.options).addTo(map);
                });
                /** Handle events */
                // map.on('click', this.onMapClick);
                /** Handle markers */
                if (this.data.markers) {
                    const markers = leaflet.markerClusterGroup();
                    this.data.markers.forEach((mrk) => {
                        leaflet.marker(mrk.coords).addTo(markers).bindPopup(mrk.template);
                    });
                    map.addLayer(markers);
                    if (this.data._setMarkerLayer)
                        this.data._setMarkerLayer(markers);
                }
                // Assign the map instance
                if (this.data._setInstance)
                    this.data._setInstance(map);
            });
        });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], MapComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MapComponent.prototype, "emit", void 0);
MapComponent = __decorate([
    Component({
        selector: 'n7-map',
        template: "<div *ngIf=\"data\" class=\"n7-map\">\r\n  <div class=\"n7-map__container\" [id]=\"data.containerId\"></div>\r\n</div>\r\n"
    })
], MapComponent);

//---------------------------
let MetadataViewerComponent = class MetadataViewerComponent {
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], MetadataViewerComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MetadataViewerComponent.prototype, "emit", void 0);
MetadataViewerComponent = __decorate([
    Component({
        selector: 'n7-metadata-viewer',
        template: "<div *ngIf=\"data\" class=\"n7-metadata-viewer\">\r\n    <!-- Metadata groups wrapper -->\r\n    <div class=\"n7-metadata-viewer__wrapper {{ data.classes  || ''}}\"\r\n          *ngFor=\"let grp of data.group\">\r\n        <!-- For each data group, render it -->\r\n        <ng-container *ngTemplateOutlet=\"group; context:{$implicit: grp}\"></ng-container>\r\n    </div>\r\n</div>\r\n\r\n<!-- Template for Metadata.group -->\r\n<ng-template #group let-grp>\r\n    <div *ngIf=\"grp.title || grp.items\" class=\"n7-metadata-viewer__group {{ grp.classes || '' }}\">\r\n        <div class=\"n7-metadata-viewer__group-title\" *ngIf=\"grp.title\">{{grp.title}}</div>\r\n        <div class=\"n7-metadata-viewer__group-content\" *ngIf=\"grp.items\">\r\n            <div class=\"n7-metadata-viewer__item\" *ngFor=\"let i of grp.items\">\r\n                <span *ngIf=\"i.label\" class=\"n7-metadata-viewer__item-label\">{{ i.label }}</span>\r\n                <span *ngIf=\"i.value\" class=\"n7-metadata-viewer__item-value\" [innerHTML]=\"i.value\"></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Render all child groups -->\r\n    <div *ngIf=\"grp.group\">\r\n        <div class=\"n7-metadata-viewer__group-wrapper\"\r\n              *ngFor=\"let grp of grp.group\">\r\n            <ng-container *ngTemplateOutlet=\"group; context:{$implicit: grp}\"></ng-container>\r\n        </div>\r\n    </div>\r\n</ng-template>"
    })
], MetadataViewerComponent);

let NavComponent = class NavComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], NavComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NavComponent.prototype, "emit", void 0);
NavComponent = __decorate([
    Component({
        selector: 'n7-nav',
        template: "<nav class=\"n7-nav {{data.classes || ''}}\" *ngIf=\"data\">\r\n    <ul class=\"n7-nav__list\">\r\n        <n7-anchor-wrapper \r\n        *ngFor=\"let item of data.items\"\r\n        [data]=\"item.anchor\" \r\n        [classes]=\"'n7-nav__link'\" \r\n        (clicked)=\"onClick($event)\">\r\n            <li class=\"n7-nav__item {{ item.classes || '' }}\">\r\n                <img class=\"n7-nav__image\" *ngIf=\"item.image\" src=\"{{ item.image }}\">\r\n                <span class=\"n7-nav__icon {{ item.icon }}\" *ngIf=\"item.icon\"></span>\r\n                <span class=\"n7-nav__label\">{{ item.text }}</span>\r\n            </li>\r\n        </n7-anchor-wrapper>\r\n    </ul>\r\n</nav>"
    })
], NavComponent);

//---------------------------
let PaginationComponent = class PaginationComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    onChange(payload, value) {
        if (!this.emit)
            return;
        // needs to also emit selected value
        this.emit('change', { inputPayload: payload, value });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "emit", void 0);
PaginationComponent = __decorate([
    Component({
        selector: 'n7-pagination',
        template: "<nav class=\"n7-pagination {{data.classes || ''}}\" \r\n     *ngIf=\"data\"\r\n     [ngClass]=\"{ 'has-results-select' : data.select }\">\r\n    <ul class=n7-pagination__items>\r\n\r\n        <li class=\"n7-pagination__first {{data.first.classes || ''}}\" *ngIf=\"data.first\">\r\n            <ng-container *ngTemplateOutlet=\"button; context: {\r\n                type: 'first',\r\n                data: data.first,\r\n                iconClass: 'n7-icon-angle-double-left'\r\n            }\"></ng-container>\r\n        </li>\r\n        <li class=\"n7-pagination__prev {{data.prev.classes || ''}}\" *ngIf=\"data.prev\">\r\n            <ng-container *ngTemplateOutlet=\"button; context: {\r\n                type: 'prev',\r\n                data: data.prev,\r\n                iconClass: 'n7-icon-angle-left'\r\n            }\"></ng-container>\r\n        </li>\r\n\r\n        <li class=\"n7-pagination__page {{page.classes || ''}}\" *ngFor=\"let page of data.links\">\r\n            <ng-container *ngTemplateOutlet=\"button; context: {\r\n                type: 'page',\r\n                data: page,\r\n                clicked: onClick\r\n            }\"></ng-container>\r\n        </li>\r\n\r\n        <li class=\"n7-pagination__next {{data.next.classes || ''}}\" *ngIf=\"data.next\">\r\n            <ng-container *ngTemplateOutlet=\"button; context: {\r\n                type: 'next',\r\n                data: data.next,\r\n                iconClass: 'n7-icon-angle-right'\r\n            }\"></ng-container>\r\n        </li>\r\n        <li class=\"n7-pagination__last {{data.last.classes || ''}}\" *ngIf=\"data.last\">\r\n            <ng-container *ngTemplateOutlet=\"button; context: {\r\n                type: 'last',\r\n                data: data.last,\r\n                iconClass: 'n7-icon-angle-double-right'\r\n            }\"></ng-container>\r\n        </li>\r\n    </ul>\r\n    \r\n    <div class=\"n7-pagination__setting\"\r\n         *ngIf=\"data.select\">\r\n        <span class=\"n7-pagination__setting-label\"\r\n              *ngIf=\"data.select.label\">\r\n            {{data.select.label}}\r\n        </span>\r\n        <select *ngIf=\"data.select.options\" \r\n                name=\"n7-pagination__select-size\" \r\n                class=\"n7-pagination__setting-select\"\r\n                (change)=\"onChange(data.select.payload, $event.target.value)\"\r\n                [disabled]=\"data.select.disabled\">\r\n            <option *ngFor=\"let opt of data.select.options\"\r\n                    [disabled]=\"opt.disabled\"\r\n                    [selected]=\"opt.selected\">\r\n                {{opt.text}}\r\n            </option>\r\n        </select>\r\n    </div>\r\n</nav>\r\n\r\n<ng-template #button let-type=\"type\" let-data=\"data\" let-clicked=\"clicked\" let-iconClass=\"iconClass\">\r\n    <n7-anchor-wrapper \r\n    [classes]=\"'n7-pagination__' + type + '-link' + (data.text ? ' has-text' : '')\" \r\n    [data]=\"data.anchor\" \r\n    (clicked)=\"onClick($event)\">\r\n        <span class=\"n7-pagination__{{ type }}-label\" *ngIf=\"data.text\">\r\n            {{ data.text }}\r\n        </span>\r\n        <span *ngIf=\"iconClass\" class=\"n7-pagination__{{ type }}-icon {{ iconClass }}\"></span>\r\n    </n7-anchor-wrapper>\r\n</ng-template>"
    })
], PaginationComponent);

//---------------------------
let SidebarHeaderComponent = class SidebarHeaderComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], SidebarHeaderComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SidebarHeaderComponent.prototype, "emit", void 0);
SidebarHeaderComponent = __decorate([
    Component({
        selector: 'n7-sidebar-header',
        template: "<div *ngIf=\"data\" class=\"n7-sidebar-header {{ data.classes || ''}}\">\r\n    <span class=\"n7-sidebar-header__icon-left {{ data.iconLeft }}\" \r\n          *ngIf=\"data.iconLeft\">\r\n    </span>\r\n    <span class=\"n7-sidebar-header__text-wrapper\"\r\n          *ngIf=\"data.text || data.additionalText\">\r\n        <span class=\"n7-sidebar-header__text\">\r\n            {{data.text}}\r\n        </span>\r\n        <span class=\"n7-sidebar-header__secondary-text\" \r\n              *ngIf=\"data.additionalText\">\r\n            {{data.additionalText}}\r\n        </span>\r\n    </span>\r\n    <span *ngIf=\"data.iconRight\"\r\n          class=\"n7-sidebar-header__icon-right {{ data.iconRight }}\" \r\n          (click)=\"onClick(data.payload)\"></span>\r\n</div>"
    })
], SidebarHeaderComponent);

//---------------------------
let SignupComponent = class SignupComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    onChange(inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload, value });
    }
    onInputEnter(inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('enter', { inputPayload, value });
    }
    onFocus(payload) {
        if (!this.emit)
            return;
        this.emit('focus', payload);
    }
    onFocusOut(payload) {
        if (!this.emit)
            return;
        this.emit('focusout', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], SignupComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SignupComponent.prototype, "emit", void 0);
SignupComponent = __decorate([
    Component({
        selector: 'n7-signup',
        template: "<!-- Signup: login -->\r\n<section *ngIf=\"data && data.login\" class=\"n7-signup n7-signup--login\">\r\n    <form class=\"n7-signup__form\" novalidate>\r\n        <ng-container *ngTemplateOutlet=\"field; context: { $implicit: data.login.email }\"></ng-container>\r\n        <ng-container *ngTemplateOutlet=\"\r\n        passwordField;\r\n        context: { $implicit: data.login.password }\r\n      \"></ng-container>\r\n        <div *ngIf=\"data.login.forgotPassword\" class=\"n7-signup__form-item n7-signup__form-item-forgot-password\">\r\n            <a (click)=\"onClick(data.login.forgotPassword.payload)\" title=\"{{ data.login.forgotPassword.title }}\"\r\n                [attr.aria-label]=\"data.login.forgotPassword.title\">{{ data.login.forgotPassword.label }}</a>\r\n        </div>\r\n        <ng-container *ngTemplateOutlet=\"submit; context: { $implicit: data.login.submit }\"></ng-container>\r\n    </form>\r\n    <ng-container *ngTemplateOutlet=\"footer; context: { $implicit: data.login.footer }\"></ng-container>\r\n</section>\r\n\r\n<!-- Signup: signup -->\r\n<section *ngIf=\"data && data.signup\" class=\"n7-signup n7-signup--signup\">\r\n    <form class=\"n7-signup__form\" novalidate>\r\n        <ng-container *ngTemplateOutlet=\"field; context: { $implicit: data.signup.name }\"></ng-container>\r\n        <ng-container *ngTemplateOutlet=\"field; context: { $implicit: data.signup.email }\"></ng-container>\r\n        <ng-container *ngTemplateOutlet=\"\r\n        passwordField;\r\n        context: { $implicit: data.signup.password }\r\n      \"></ng-container>\r\n        <ng-container *ngTemplateOutlet=\"\r\n        passwordField;\r\n        context: { $implicit: data.signup.rePassword }\r\n      \"></ng-container>\r\n        <ng-container *ngTemplateOutlet=\"submit; context: { $implicit: data.signup.submit }\"></ng-container>\r\n    </form>\r\n    <ng-container *ngTemplateOutlet=\"footer; context: { $implicit: data.signup.footer }\"></ng-container>\r\n</section>\r\n\r\n<!-- Signup: forgot password -->\r\n<section *ngIf=\"data && data.forgotPassword\" class=\"n7-signup n7-signup--forgot-password\">\r\n    <p class=\"n7-signup__text\">\r\n        {{ data.forgotPassword.description }}\r\n    </p>\r\n    <form class=\"n7-signup__form\" novalidate>\r\n        <ng-container *ngTemplateOutlet=\"\r\n        field;\r\n        context: { $implicit: data.forgotPassword.email }\r\n      \"></ng-container>\r\n\r\n        <ng-container *ngTemplateOutlet=\"\r\n        submit;\r\n        context: { $implicit: data.forgotPassword.submit }\r\n      \"></ng-container>\r\n\r\n      <!-- hidden submit button to prevent submit on enter -->\r\n      <button type=\"submit\" disabled style=\"display: none\" aria-hidden=\"true\"></button>\r\n    </form>\r\n    <ng-container *ngTemplateOutlet=\"\r\n      footer;\r\n      context: { $implicit: data.forgotPassword.footer }\r\n    \"></ng-container>\r\n</section>\r\n\r\n<!-- Template: field -->\r\n<ng-template #field let-field>\r\n    <div [ngClass]=\"{\r\n      'has-error': field.error,\r\n      'has-hint': field.hint\r\n    }\" class=\"n7-signup__form-item {{ field.classes || '' }}\">\r\n        <label class=\"n7-signup__form-item-label\" for=\"{{ field.id }}\">{{\r\n      field.label\r\n    }}</label>\r\n        <div *ngIf=\"field.hint\" class=\"n7-signup__form-item-hint\">\r\n            {{ field.hint }}\r\n        </div>\r\n        <div class=\"n7-signup__input-wrapper\">\r\n            <input (focus)=\"onFocus(field.payload)\" (focusout)=\"onFocusOut(field.payload)\"\r\n                (keyup.enter)=\"onInputEnter(field.payload, $event.target.value)\"\r\n                (input)=\"onChange(field.payload, $event.target.value)\" class=\"n7-signup__form-item-input\"\r\n                type=\"{{ field.inputType }}\" id=\"{{ field.id }}\" />\r\n        </div>\r\n        <div *ngIf=\"field.error\" class=\"n7-signup__form-error\">\r\n            {{ field.error }}\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<!-- Template: password-field -->\r\n<ng-template #passwordField let-field>\r\n    <div [ngClass]=\"{\r\n      'has-error': field.error,\r\n      'has-hint': field.hint\r\n    }\" class=\"n7-signup__form-item {{ field.classes || '' }}\">\r\n        <label class=\"n7-signup__form-item-label\" for=\"{{ field.id }}\">{{\r\n      field.label\r\n    }}</label>\r\n        <div *ngIf=\"field.hint\" class=\"n7-signup__form-item-hint\">\r\n            {{ field.hint }}\r\n        </div>\r\n        <div class=\"n7-signup__input-wrapper\">\r\n            <input (focus)=\"onFocus(field.payload)\" (focusout)=\"onFocusOut(field.payload)\"\r\n                (keyup.enter)=\"onInputEnter(field.payload, $event.target.value)\"\r\n                (input)=\"onChange(field.payload, $event.target.value)\" class=\"n7-signup__form-item-input\"\r\n                type=\"{{ field.inputType }}\" id=\"{{ field.id }}\" />\r\n            <button *ngIf=\"field.show\" type=\"button\" (click)=\"onClick(field.show.payload)\"\r\n                [attr.aria-label]=\"field.show.label\" class=\"n7-signup__form-item-show-password\">\r\n                <i [attr.aria-label]=\"field.show.label\" class=\"{{ field.show.icon }}\"></i>\r\n            </button>\r\n        </div>\r\n        <div *ngIf=\"field.error\" class=\"n7-signup__form-error\">\r\n            {{ field.error }}\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<!-- Template: footer -->\r\n<ng-template #footer let-footer>\r\n    <footer *ngIf=\"footer\" class=\"n7-signup__footer {{ footer.classes || '' }}\">\r\n        <div class=\"n7-signup__footer-text\">{{ footer.label }}</div>\r\n        <a *ngIf=\"footer.action\" (click)=\"onClick(footer.action.payload)\" title=\"{{ footer.action.label }}\"\r\n            class=\"n7-btn\">{{ footer.action.label }}</a>\r\n    </footer>\r\n</ng-template>\r\n\r\n<!-- Template: submit button -->\r\n<ng-template #submit let-submit>\r\n    <div [ngClass]=\"{\r\n      'has-error': submit.error\r\n    }\" class=\"n7-signup__form-item n7-signup__form-item-action {{\r\n      submit.classes || ''\r\n    }}\">\r\n        <button type=\"button\" (click)=\"onClick(submit.payload)\" [attr.aria-label]=\"submit.label\"\r\n            class=\"n7-btn n7-btn-cta\">\r\n            {{ submit.label }}\r\n        </button>\r\n        <div *ngIf=\"submit.error\" class=\"n7-signup__form-error\">\r\n            {{ submit.error }}\r\n        </div>\r\n    </div>\r\n</ng-template>"
    })
], SignupComponent);

//---------------------------
let SimpleAutocompleteComponent = class SimpleAutocompleteComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], SimpleAutocompleteComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SimpleAutocompleteComponent.prototype, "emit", void 0);
SimpleAutocompleteComponent = __decorate([
    Component({
        selector: 'n7-simple-autocomplete',
        template: "<div *ngIf=\"data\" class=\"n7-simple-autocomplete\">\r\n    <ul class=\"n7-simple-autocomplete__list {{data.classes || ''}}\">\r\n        <li *ngFor=\"let suggestion of data.suggestion\" \r\n            class=\"n7-simple-autocomplete__item\">\r\n            <n7-anchor-wrapper\r\n            [classes]=\"'n7-simple-autocomplete__link'\"\r\n            [data]=\"suggestion.anchor\"\r\n            (clicked)=\"onClick($event)\">\r\n              <span class=\"n7-simple-autocomplete__label\" [innerHTML]=\"suggestion.text\"></span>\r\n            </n7-anchor-wrapper>\r\n        </li>\r\n    </ul> \r\n</div>"
    })
], SimpleAutocompleteComponent);

//---------------------------
let TableComponent = class TableComponent {
    onCellClick(cellPayload) {
        if (!this.emit)
            return;
        this.emit('cellclick', cellPayload);
    }
    onCellDblClick(cellPayload) {
        if (!this.emit)
            return;
        this.emit('celldblclick', cellPayload);
    }
    onInputTextChange(cellPayload, cellValue) {
        if (!this.emit)
            return;
        const textChangePayload = { tcPayload: cellPayload, val: cellValue };
        this.emit('inputtextchange', textChangePayload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "emit", void 0);
TableComponent = __decorate([
    Component({
        selector: 'n7-table',
        template: "<section class=\"n7-table {{data.classes || ''}}\" *ngIf=\"data\">\r\n    <table class=\"n7-table__table\">\r\n    \t<thead class=\"n7-table__table-header\" *ngIf=\"data.head\">\r\n            <tr class=\"n7-table__table-header-row {{row.classes || ''}}\"\r\n                *ngFor=\"let row of data.head\">\r\n                <th class=\"n7-table__table-header-cell {{cell.classes || ''}}\"\r\n                    *ngFor=\"let cell of row.cells\"\r\n                    (click)=\"onCellClick(cell.payload)\"\r\n                    [innerHTML]=\"cell.content\">\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n\r\n        <tbody class=\"n7-table__table-body\" *ngIf=\"data.body\">\r\n            <tr class=\"n7-table__table-body-row {{row.classes || ''}}\"\r\n                *ngFor=\"let row of data.body\">\r\n                <td class=\"n7-table__table-body-cell {{cell.classes || ''}}\"\r\n                    *ngFor=\"let cell of row.cells; let i = index\"\r\n                    (click)=\"onCellClick(cell.payload)\"\r\n                    (dblclick)=\"onCellDblClick(cell.payload)\"\r\n                    [attr.aria-label]=\"data.head[0].cells[i].content\"\r\n                    >\r\n                    <span   class=\"n7-table__table-body-cell-innerhtml\"\r\n                            *ngIf=\"!cell.type || cell.type=='html'\"\r\n                            [innerHTML]=\"cell.content\"></span>\r\n                    <input  class=\"n7-table__table-body-cell-inputtext\"\r\n                            *ngIf=\"cell.type=='input:text'\"\r\n                            type=\"text\" placeholder=\"{{cell.content}}\"\r\n                            id=\"{{cell._meta.inputId}}\"\r\n                            (keyup.enter)=\"onInputTextChange(cell.payload, $event.target.value)\"/>                        \r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n\r\n        <tfoot class=\"n7-table__table-footer\" *ngIf=\"data.foot\">\r\n            <tr class=\"n7-table__table-footer-row {{row.classes || ''}}\"\r\n                *ngFor=\"let row of data.foot\">\r\n                <td class=\"n7-table__table-footer-cell {{cell.classes || ''}}\"\r\n                    *ngFor=\"let cell of row.cells\"\r\n                    (click)=\"onCellClick(cell.payload)\"\r\n                    [innerHTML]=\"cell.content\">\r\n                </td>\r\n            </tr>\r\n        </tfoot>        \r\n \t </table> \r\n</section>\r\n"
    })
], TableComponent);

var TextViewerComponent_1;
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
        template: "<!-- NEW -->\r\n<div class=\"n7-text-viewer {{data.classes || ''}}\" *ngIf=\"data && data.endpoint\">\r\n    <pb-page [attr.endpoint]=\"data.endpoint\">\r\n        <pb-document *ngFor=\"let doc of data.docs\" [path]=\"doc.xml\" [odd]=\"doc.odd\" view=\"div\" [id]=\"doc.id\">\r\n        </pb-document>\r\n\r\n        <app-drawer-layout force-narrow=\"force-narrow\" narrow=\"\">\r\n            <app-header-layout>\r\n                <app-header fixed=\"fixed\" data-template=\"browse:fix-links\" style=\"\r\n                transition-duration: 0ms;\r\n                transform: translate3d(0px, 0px, 0px);\r\n                left: 0px;\r\n                right: 0.399994px;\">\r\n                    <app-toolbar class=\"toolbar\" sticky=\"sticky\" style=\"transform: translate3d(0px, 0px, 0px)\">\r\n                        <paper-icon-button id=\"tocToggle\" class=\"toc-toggle\" icon=\"icons:view-list\" role=\"button\"\r\n                            tabindex=\"0\" aria-disabled=\"false\"></paper-icon-button>\r\n\r\n                        <pb-toggle-feature name=\"highlight\" selector=\"tei-app,pb-popover\" default=\"off\"\r\n                            action=\"disable\" emit=\"transcription\" subscribe=\"transcription\">\r\n                            <pb-i18n key=\"document.plain\">Plain Reading View</pb-i18n>\r\n                        </pb-toggle-feature>\r\n                        <pb-zoom emit=\"transcription\" direction=\"in\" icon=\"icons:zoom-in\"></pb-zoom>\r\n                        <pb-zoom emit=\"transcription\" direction=\"out\" icon=\"icons:zoom-out\"></pb-zoom>\r\n                        <pb-navigation emit=\"transcription\" keyboard=\"left\" subscribe=\"transcription\"\r\n                            direction=\"backward\" unit=\"page\">\r\n                            <paper-icon-button icon=\"icons:chevron-left\" role=\"button\" tabindex=\"0\"\r\n                                aria-disabled=\"false\"></paper-icon-button>\r\n                        </pb-navigation>\r\n                        <pb-navigation emit=\"transcription\" keyboard=\"right\" subscribe=\"transcription\"\r\n                            direction=\"forward\" unit=\"page\">\r\n                            <paper-icon-button icon=\"icons:chevron-right\" role=\"button\" tabindex=\"0\"\r\n                                aria-disabled=\"false\"></paper-icon-button>\r\n                        </pb-navigation>\r\n\r\n                        <pb-progress subscribe=\"transcription\" indeterminate=\"\" bottom-item=\"bottom-item\"\r\n                            style=\"visibility: hidden\"></pb-progress>\r\n                    </app-toolbar>\r\n                </app-header>\r\n                <pb-drawer toggle=\"tocToggle\" class=\"tocDrawer\" emit=\"toc\" subscribe=\"transcription\">\r\n                    <div class=\"drawer-content\">\r\n                        <h3>\r\n                            <pb-i18n key=\"document.contents\">Contents</pb-i18n>\r\n                        </h3>\r\n                        <pb-load *ngIf=\"data.docs\" id=\"toc\" url=\"api/document/{doc}/contents?target=transcription&amp;icons=true\"\r\n                            [src]=\"data.docs[0].id\" subscribe=\"toc\" emit=\"toc\" expand=\"expand\" auto=\"auto\"><pb-i18n key=\"dialogs.loading\">Loading</pb-i18n></pb-load>\r\n                    </div>\r\n                </pb-drawer>\r\n                <main class=\"content-body\">\r\n                    <pb-facsimile *ngIf=\"data.facsimile\" id=\"facsimile\" [attr.base-uri]=\"data.facsimile.uri\"\r\n                        subscribe=\"transcription\" default-zoom-level=\"0\"\r\n                        show-navigation-control=\"show-navigation-control\" show-navigator=\"show-navigator\">\r\n                    </pb-facsimile>\r\n                    <ng-container *ngFor=\"let doc of data.docs; index as $i;\">\r\n                        <!-- NO CHANNEL -->\r\n                        <pb-view *ngIf=\"!doc.channel\" id=\"view{{ $i }}\" [src]=\"doc.id\" subscribe=\"transcription\"\r\n                            emit=\"transcription\" [attr.wait-for]=\"data.facsimile ? '#facsimile' : null\" column-separator=\".tei-cb\"\r\n                            append-footnotes=\"append-footnotes\" view=\"div\"></pb-view>\r\n                        <!-- WITH CHANNEL -->\r\n                        <pb-view *ngIf=\"doc.channel\" id=\"view{{ $i }}\" [src]=\"doc.id\" emit=\"{{ doc.channel }}\"\r\n                        view=\"single\">\r\n                            <pb-param name=\"mode\" value=\"{{ doc.channel }}\"></pb-param>\r\n                        </pb-view>\r\n                    </ng-container>\r\n                </main>\r\n            </app-header-layout>\r\n        </app-drawer-layout>\r\n    </pb-page>\r\n</div>"
    })
], TextViewerComponent);

//---------------------------
let TagComponent = class TagComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], TagComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TagComponent.prototype, "emit", void 0);
TagComponent = __decorate([
    Component({
        selector: 'n7-tag',
        template: "<span class=\"n7-tag {{data.classes || ''}}\" *ngIf=\"data\">\r\n    <span class=\"n7-tag__label\" *ngIf=\"data.label\">\r\n        {{ data.label }}\r\n    </span>\r\n    <span class=\"n7-tag__text\" *ngIf=\"data.text\">\r\n        {{ data.text }}\r\n    </span>\r\n    <span class=\"n7-tag__icon {{data.icon}}\" *ngIf=\"data.icon\" (click)=\"onClick(data.payload)\"></span>\r\n</span>"
    })
], TagComponent);

//---------------------------
let TimelineComponent = class TimelineComponent {
    constructor() {
        /** Knows if the component is loaded */
        this._loaded = false;
        /** Dynamically load required node modules */
        this.loadModules = () => __awaiter(this, void 0, void 0, function* () {
            return (Object.assign(Object.assign({}, yield import('vis-timeline/peer')), yield import('vis-data/peer')));
        });
    }
    ngAfterContentChecked() {
        if (!this.data || this._loaded)
            return;
        this._loaded = true;
        setTimeout(() => {
            this.loadModules().then((modules) => {
                // To enable two-way data binding, import { DataSet } from 'vis-data'
                const { Timeline, DataSet } = modules;
                const items = new DataSet(this.data.dataSet);
                const t = new Timeline(document.getElementById(this.data.containerID), // container
                items, this.data.libOptions);
                // Set the timeline instance
                if (this.data._setInstance)
                    this.data._setInstance(t);
            });
        });
    }
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], TimelineComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TimelineComponent.prototype, "emit", void 0);
TimelineComponent = __decorate([
    Component({
        selector: 'n7-timeline',
        template: "<div *ngIf=\"data\" class=\"n7-timeline\">\r\n  <div [id]=\"data.containerID\" style=\"border: 1px solid #ddd\"></div> \r\n</div>\r\n"
    })
], TimelineComponent);

//---------------------------
let ToastComponent = class ToastComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
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
        template: "<div *ngIf=\"data\" class=\"n7-toast\">\r\n    <div class=\"n7-toast__column {{data.classes || ''}}\">\r\n\r\n        <!-- Toast boxes -->\r\n        <div class=\"n7-toast__box\" \r\n             *ngFor=\"let box of data.toasts\"\r\n             [ngClass]=\"{ 'has-actions' : !! (box.actions || box.closeIcon) }\">\r\n        \r\n            <!-- Toast text -->\r\n            <div class=\"n7-toast__content {{box.classes || ''}}\" *ngIf=\"box.title || box.text\">\r\n                <span class=\"n7-toast__title\" *ngIf=\"box.title\">{{ box.title }}</span>\r\n                <span class=\"n7-toast__text\" *ngIf=\"box.text\">{{ box.text }}</span>\r\n            </div>\r\n\r\n            <!-- Toast actions -->\r\n            <div class=\"n7-toast__actions\" *ngIf=\"box.actions || box.closeIcon\">\r\n                <span\r\n                class=\"n7-toast__closeIcon {{ box.closeIcon.icon }}\" \r\n                *ngIf=\"box.closeIcon\" \r\n                (click)=\"onClick(box.closeIcon.payload)\">\r\n                </span>\r\n                <span class=\"n7-toast__action-wrapper\" *ngIf=\"box.actions\">\r\n                    <span class=\"n7-toast__action-content\" *ngFor=\"let action of box.actions\">\r\n                        <button class=\"n7-toast__action-button n7-btn n7-btn-s {{action.classes || ''}}\"\r\n                                (click)=\"onClick(action.payload)\">\r\n                                {{action.text}}\r\n                        </button>\r\n                    </span>\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"
    })
], ToastComponent);

//---------------------------
let TooltipContentComponent = class TooltipContentComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], TooltipContentComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TooltipContentComponent.prototype, "emit", void 0);
TooltipContentComponent = __decorate([
    Component({
        selector: 'n7-tooltip-content',
        template: "<div *ngIf=\"data\"\r\n     class=\"n7-tooltip-content\">\r\n\r\n  <div *ngIf=\"data.title\">\r\n    {{data.title}}\r\n  </div>\r\n\r\n  <div *ngIf=\"data.text\"\r\n       [innerHTML]=\"data.text\">\r\n  </div>\r\n\r\n  <img *ngIf=\"data.image\"\r\n       [src]=\"data.image\">\r\n\r\n  <ng-container *ngFor=\"let btn of data.actions\">\r\n    <n7-anchor-wrapper [classes]=\"\"\r\n                       [data]=\"btn\"\r\n                       (clicked)=\"onClick(btn.anchor.payload)\">\r\n      <span *ngIf=\"data.text\" class=\"n7-btn\">\r\n        {{ btn.text }}\r\n      </span>\r\n    </n7-anchor-wrapper>\r\n  </ng-container>\r\n\r\n</div>\r\n"
    })
], TooltipContentComponent);

//---------------------------
let TreeComponent = class TreeComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "emit", void 0);
TreeComponent = __decorate([
    Component({
        selector: 'n7-tree',
        template: "<div *ngIf=\"data\" class=\"n7-tree\">\r\n    <!-- Start recursive rendering -->\r\n    <ng-container *ngTemplateOutlet=\"recursiveTree; context:{$implicit: data.items}\"></ng-container>\r\n\r\n    <!-- Template for recursive children rendering -->\r\n    <ng-template #recursiveTree let-node>\r\n        <div class=\"n7-tree__item {{ item.classes || '' }}\" *ngFor=\"let item of node\">\r\n            <div class=\"n7-tree__item-contents\">\r\n                <!-- Render expand/collapse arrow -->\r\n                <span *ngIf=\"item.toggle\"\r\n                      class=\"n7-tree__item-toggle {{ item.toggle.icon }}\"\r\n                      (click)=\"onClick(item.toggle.payload)\">\r\n                </span>\r\n                <!-- Render the node -->\r\n                <n7-anchor-wrapper \r\n                [classes]=\"'n7-tree__item-details'\"\r\n                [data]=\"item.anchor\"\r\n                (clicked)=\"onClick($event)\">\r\n                    <span *ngIf=\"item.icon\" class=\"n7-tree__item-icon {{ item.icon }}\"></span>\r\n                    <img class=\"n7-tree__item-img\" *ngIf=\"item.img\" src=\"{{ item.img }}\" alt=\"{{ item.text }}\"/>\r\n                    <span class=\"n7-tree__item-text\">{{ item.text }}</span>\r\n                    <span class=\"n7-tree__item-right-icon {{ item.iconright }}\"></span>\r\n                </n7-anchor-wrapper>\r\n            </div>\r\n            <!-- Check for more child nodes and render them -->\r\n            <div class=\"n7-tree__children-wrapper\" *ngIf=\"item.items\">\r\n                <ng-container *ngTemplateOutlet=\"recursiveTree; context:{$implicit: item.items}\"></ng-container>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n</div>"
    })
], TreeComponent);

//---------------------------
let WizardComponent = class WizardComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], WizardComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], WizardComponent.prototype, "emit", void 0);
WizardComponent = __decorate([
    Component({
        selector: 'n7-wizard',
        template: "<div *ngIf=\"data\" class=\"n7-wizard {{ data.classes || '' }}\">\r\n  <ol class=\"n7-wizard__list\">\r\n      <li *ngFor=\"let item of data.items\" \r\n          class=\"n7-wizard__item {{ item.classes || '' }}\" \r\n          (click)=\"onClick(item.payload)\">\r\n            <span *ngIf=\"item.number\" class=\"n7-wizard__number\">{{ item.number }}</span>\r\n            <span *ngIf=\"item.text\" class=\"n7-wizard__text\">{{ item.text }}</span>\r\n      </li>\r\n  </ol>\r\n</div>"
    })
], WizardComponent);

const COMPONENTS = [
    AdvancedAutocompleteComponent,
    AlertComponent,
    AnchorWrapperComponent,
    BreadcrumbsComponent,
    BubbleChartComponent,
    CarouselComponent,
    ChartComponent,
    ContentPlaceholderComponent,
    DataWidgetComponent,
    DatepickerComponent,
    FacetComponent,
    FacetHeaderComponent,
    FacetYearRangeComponent,
    FooterComponent,
    HeaderComponent,
    HeroComponent,
    ImageViewerComponent,
    ImageViewerToolsComponent,
    InnerTitleComponent,
    InputCheckboxComponent,
    InputLinkComponent,
    InputSelectComponent,
    InputTextComponent,
    ItemPreviewComponent,
    LoaderComponent,
    MapComponent,
    MetadataViewerComponent,
    NavComponent,
    PaginationComponent,
    SidebarHeaderComponent,
    SignupComponent,
    SimpleAutocompleteComponent,
    TableComponent,
    TagComponent,
    TextViewerComponent,
    TimelineComponent,
    ToastComponent,
    TooltipContentComponent,
    TreeComponent,
    WizardComponent,
];
let DvComponentsLibModule = class DvComponentsLibModule {
};
DvComponentsLibModule = __decorate([
    NgModule({
        declarations: [
            COMPONENTS,
        ],
        entryComponents: COMPONENTS,
        imports: [CommonModule, RouterModule],
        exports: [
            COMPONENTS,
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], DvComponentsLibModule);

const ADVANCED_AUTOCOMPLETE_MOCK = {
    results: [
        {
            group: {
                title: 'Books',
                icon: 'n7-icon-file3',
                classes: 'color-people',
                anchor: {
                    payload: 'books',
                }
            },
            items: [
                { title: 'Label risultato con url', anchor: { href: '/examples', target: '_blank' } },
                { title: 'Label risultato senza metadato', anchor: { payload: 'res1' } },
                { title: 'Label risultato', metadata: [{ value: 'Metadato aggiuntivo' }], anchor: { payload: 'res2' } },
                {
                    title: 'Label risultato',
                    metadata: [{
                            key: 'metakey',
                            value: 'value'
                        }],
                    anchor: {
                        payload: 'res2'
                    }
                },
                {
                    title: 'Label risultato',
                    metadata: [{
                            key: 'metakey',
                            value: 'value'
                        }, {
                            key: 'metakey2',
                            value: 'value2'
                        }, {
                            key: 'metakey3',
                            value: 'value3'
                        }, {
                            key: 'metakey4',
                            value: 'value4'
                        }],
                    anchor: {
                        payload: 'res3'
                    }
                },
                {
                    title: 'Label risultato',
                    metadata: [{
                            key: 'only metakey',
                            value: 'only metavalue'
                        }],
                    anchor: {
                        payload: 'res4'
                    }
                },
                { title: 'Label risultato', anchor: { payload: 'res5' } },
            ],
        },
        {
            group: {
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                anchor: {
                    payload: 'movies',
                    href: '/examples'
                }
            },
            items: [
                { title: 'Label risultato', metadata: [{ value: 'Metadato aggiuntivo' }], anchor: { payload: 'res6' } },
                { title: 'Label risultato', metadata: [{ value: 'Metadato aggiuntivo' }], anchor: { payload: 'res7' } },
                { title: 'Label risultato', metadata: [{ value: 'Metadato aggiuntivo' }], anchor: { payload: 'res8' } },
                { title: 'Label risultato', metadata: [{ value: 'Metadato aggiuntivo' }], anchor: { payload: 'res9' } },
            ],
        },
        {
            items: [
                { metadata: [{ value: 'Metadato esterno' }], anchor: { payload: 'res10' } },
                { metadata: [{ value: 'Metadato esterno' }], anchor: { payload: 'res11' } },
                { metadata: [{ value: 'Metadato esterno' }], anchor: { payload: 'res12' } },
                { metadata: [{ value: 'Metadato esterno' }], anchor: { payload: 'res13' } },
            ]
        }
    ],
    actions: {
        advanced: {
            text: 'Ricerca Avanzata',
            anchor: {
                payload: 'advanced-search',
                href: 'https://google.it',
                target: '_blank'
            }
        },
        showMore: {
            text: 'Visualizza tutti i 98 risultati per "ang"',
            anchor: {
                payload: 'show-more',
            }
        }
    },
    fallback: 'Spiacenti, non è stato trovato nessun risultato. <br> Riprova con una nuova ricerca.'
};

const ALERT_MOCK = {
    text: `
  This is an alert for the user with some <strong>bold</strong> and <i>italic</i> text.
  This is an alert for the user with some <strong>bold</strong> and <i>italic</i> text.
  `,
    hasCloseButton: true,
    payload: 'close',
    icon: 'n7-icon-bell',
    classes: 'is-warning'
};

const BREADCRUMBS_MOCK = {
    items: [
        {
            label: 'Home',
            anchor: { payload: 'home' }
        },
        {
            label: 'Costumi',
            anchor: { href: '/examples' }
        },
        {
            label: 'Giacche',
            anchor: { payload: 'giacche' }
        },
        {
            label: 'Maniche',
            anchor: { href: '/examples', target: '_blank' }
        },
        {
            label: 'Manica',
            anchor: { href: 'https://google.it' }
        }
    ]
};

const ɵ0 = [
    {
        entity: {
            id: '0263a407-d0dd-4647-98e2-109b0b0c05f3',
            label: 'Giunta regionale',
            typeOfEntity: 'organizzazione'
        },
        count: 2072
    },
    {
        entity: {
            id: '9e550a50-933b-40f8-b51f-a5eb01d6769a',
            label: 'Assessorato alle finanze',
            typeOfEntity: 'organizzazione'
        },
        count: 1253
    },
    {
        entity: {
            id: 'f33c446e-67a2-4e85-a19a-81d8f7acf10a',
            label: 'Presidente della giunta regionale',
            typeOfEntity: 'organizzazione'
        },
        count: 1106
    },
    {
        entity: {
            id: '6e5b61ff-ef6d-4883-ac4c-d992de276b7c',
            label: "Assessorato all'igiene, sanità e pubblica istruzione",
            typeOfEntity: 'organizzazione'
        },
        count: 765
    },
    {
        entity: {
            id: '60253741-6c64-488e-95d5-09e1f8daedcb',
            label: "Assessorato all'industria e commercio",
            typeOfEntity: 'organizzazione'
        },
        count: 577
    },
    {
        entity: {
            id: '1e64a8de-6d25-404a-b0ee-e80b82c06e82',
            label: "Assessorato all'agricoltura e foreste",
            typeOfEntity: 'organizzazione'
        },
        count: 513
    },
    {
        entity: {
            id: 'b3c16d91-7680-4b0e-a06b-fff6820752bd',
            label: 'finanze',
            typeOfEntity: 'cosa notevole'
        },
        count: 467
    },
    {
        entity: {
            id: 'ce1abc82-0caa-498f-a4dd-15416662ac8f',
            label: 'Brotzu, Giuseppe',
            typeOfEntity: 'persona'
        },
        count: 452
    },
    {
        entity: {
            id: 'd547a393-874b-4950-b088-16f103a27541',
            label: 'Assessorato ai lavori pubblici',
            typeOfEntity: 'organizzazione'
        },
        count: 439
    },
    {
        entity: {
            id: '53c5c845-126b-4cf9-8ead-2424f817794b',
            label: 'lavori pubblici',
            typeOfEntity: 'cosa notevole'
        },
        count: 356
    },
    {
        entity: {
            id: '56487abe-9496-4924-9412-b20cdc2dcc73',
            label: 'Assessorato ai trasporti',
            typeOfEntity: 'organizzazione'
        },
        count: 330
    },
    {
        entity: {
            id: '21174849-6b5c-489b-b550-56c541a936df',
            label: 'contributi',
            typeOfEntity: 'cosa notevole'
        },
        count: 323
    },
    {
        entity: {
            id: '4bd649c2-9935-4786-8af9-c94512703d14',
            label: 'agricoltura',
            typeOfEntity: 'cosa notevole'
        },
        count: 303
    },
    {
        entity: {
            id: '31150310-e51f-4e95-855f-781c0d00813d',
            label: 'igiene, sanità e pubblica istruzione',
            typeOfEntity: 'cosa notevole'
        },
        count: 299
    },
    {
        entity: {
            id: 'd75e1079-faf6-492e-adff-9f0573b2e8e6',
            label: 'Ufficio tecnico regionale per la conservazione dei monumenti della Sardegna',
            typeOfEntity: 'organizzazione'
        },
        count: 272
    },
    {
        entity: {
            id: 'd427cf8c-3b8f-48f9-90d2-a25677c10219',
            label: 'personale',
            typeOfEntity: 'cosa notevole'
        },
        count: 271
    },
    {
        entity: {
            id: 'f2e5a35d-d8c5-4c7f-8477-c873ef0668d6',
            label: 'Vivanet, Filippo',
            typeOfEntity: 'persona'
        },
        count: 269
    },
    {
        entity: {
            id: '0c69c2aa-d240-46e0-b29a-973d604865a7',
            label: 'Stara, Salvatore',
            typeOfEntity: 'persona'
        },
        count: 258
    },
    {
        entity: {
            id: '795b9266-85ce-4bd3-b06c-992ebd6a16a9',
            label: 'Murgia, Giuseppe',
            typeOfEntity: 'persona'
        },
        count: 256
    },
    {
        entity: {
            id: '0dc394db-9cfb-407d-b1c8-a61a0ebe3b8d',
            label: 'compensi ad estranei per servizi alla regione',
            typeOfEntity: 'cosa notevole'
        },
        count: 251
    },
    {
        entity: {
            id: 'b8b246f4-b52d-4f21-981b-51a7c17f3147',
            label: 'Ufficio tecnico regionale per la conservazione dei monumenti della Sardegna',
            typeOfEntity: 'organizzazione'
        },
        count: 247
    },
    {
        entity: {
            id: 'a5dd1dab-2072-473b-8a5a-7c17ed60fbfe',
            label: 'Vivanet, Filippo',
            typeOfEntity: 'persona'
        },
        count: 245
    },
    {
        entity: {
            id: 'bdfd8529-c6a0-4781-827f-8bd8323f10be',
            label: 'Deriu, Francesco',
            typeOfEntity: 'persona'
        },
        count: 240
    },
    {
        entity: {
            id: 'cf1cb828-5032-4bbc-8a88-02a81dd6799d',
            label: 'contributi e sussidi',
            typeOfEntity: 'cosa notevole'
        },
        count: 234
    },
    {
        entity: {
            id: '2f07e607-4363-4402-957b-e60db96a1e13',
            label: 'Ballero, Francesco',
            typeOfEntity: 'persona'
        },
        count: 226
    },
    {
        entity: {
            id: '2b0e005f-ee3d-440b-99b9-5fccecdd9a1f',
            label: 'Crespellani, Luigi',
            typeOfEntity: 'persona'
        },
        count: 219
    },
    {
        entity: {
            id: 'c3223169-2712-4483-88c6-50c74528ed24',
            label: 'Assessorato al lavoro',
            typeOfEntity: 'organizzazione'
        },
        count: 217
    },
    {
        entity: {
            id: '78d61b78-3505-4695-a9d9-3099742a708a',
            label: 'giunta regionale',
            typeOfEntity: 'cosa notevole'
        },
        count: 202
    },
    {
        entity: {
            id: '7c9e29f3-60bc-4b43-8167-4ab7218539f4',
            label: 'Costa, Gervasio',
            typeOfEntity: 'persona'
        },
        count: 202
    },
    {
        entity: {
            id: 'f4efad81-6ce3-4253-a426-d4dce4fe8ff7',
            label: 'Corrias, Efisio',
            typeOfEntity: 'persona'
        },
        count: 199
    },
    {
        entity: {
            id: '63f4b749-de98-44d5-a287-2ae8eaff0104',
            label: "Assessorato all'igiene e sanità",
            typeOfEntity: 'organizzazione'
        },
        count: 187
    },
    {
        entity: {
            id: 'adb694a7-0b19-44b3-94d9-d124072c8575',
            label: 'Casu, Giangiorgio',
            typeOfEntity: 'persona'
        },
        count: 181
    },
    {
        entity: {
            id: '45ebda7a-2ebd-4ff1-b250-571d6fd02e6b',
            label: 'varie, spese rappresentanza, avvenimenti eccezionali',
            typeOfEntity: 'cosa notevole'
        },
        count: 160
    },
    {
        entity: {
            id: '5fdc986b-0c40-40d3-8a3f-af50bff7bbaa',
            label: 'industria e commercio',
            typeOfEntity: 'cosa notevole'
        },
        count: 154
    },
    {
        entity: {
            id: '84c46d7d-449a-486d-9320-b6defc9390d5',
            label: 'Presidente del consiglio regionale',
            typeOfEntity: 'organizzazione'
        },
        count: 152
    },
    {
        entity: {
            id: 'd06b5c00-b902-4f26-b0de-b3d85d656c3b',
            label: 'Corrias, Alfredo',
            typeOfEntity: 'persona'
        },
        count: 152
    },
    {
        entity: {
            id: '65ca4105-dcbb-46c8-b852-d5d86eeada8c',
            label: 'locali - uffici',
            typeOfEntity: 'cosa notevole'
        },
        count: 151
    },
    {
        entity: {
            id: 'e116b3a2-b8be-4adb-b0b8-85f0d6ca6e7d',
            label: 'Giua, Giuseppe',
            typeOfEntity: 'persona'
        },
        count: 146
    },
    {
        entity: {
            id: 'a3c0f6d4-755d-4ac7-8d9d-0f17547424c5',
            label: 'uffici (arredamento, ecc)',
            typeOfEntity: 'cosa notevole'
        },
        count: 131
    },
    {
        entity: {
            id: 'cf5bd073-47be-4da2-a4fe-4d804a629f89',
            label: 'Assessorato agli interni',
            typeOfEntity: 'organizzazione'
        },
        count: 127
    },
    {
        entity: {
            id: 'fc786dec-fc9b-46ed-85d8-d00b26b9eed5',
            label: 'Assessorato agli affari generali e enti locali',
            typeOfEntity: 'organizzazione'
        },
        count: 127
    },
    {
        entity: {
            id: 'ab27c5f7-3013-4044-b3a4-a9b6f468ff57',
            label: 'Del Rio, Giovanni',
            typeOfEntity: 'persona'
        },
        count: 120
    },
    {
        entity: {
            id: 'b0bc1ab6-3407-460a-9ab6-4db8f6236130',
            label: "Assessorato all'istruzione, assistenza e beneficenza",
            typeOfEntity: 'organizzazione'
        },
        count: 119
    },
    {
        entity: {
            id: 'c1c35117-ea45-4183-9542-07f1c6697d47',
            label: 'progetti di legge - leggi',
            typeOfEntity: 'cosa notevole'
        },
        count: 119
    },
    {
        entity: {
            id: '52fbff4c-02ae-400a-acc6-a704476b1265',
            label: 'Soggiu, Piero',
            typeOfEntity: 'persona'
        },
        count: 115
    },
    {
        entity: {
            id: '12fbdc45-fcd8-4946-aea9-591bdcd8b87e',
            label: 'sussidi',
            typeOfEntity: 'cosa notevole'
        },
        count: 114
    },
    {
        entity: {
            id: 'b0eb45ea-01fb-4ec4-b24c-d9e1d319d2e1',
            label: 'trasporti viabilità e turismo',
            typeOfEntity: 'cosa notevole'
        },
        count: 111
    },
    {
        entity: {
            id: 'b1cb6d8e-4fa6-4e5e-a40c-e33dd41df5b7',
            label: 'Masia, Giuseppe',
            typeOfEntity: 'persona'
        },
        count: 111
    },
    {
        entity: {
            id: '027d1818-1050-43da-9229-00ff1495e1ea',
            label: 'automobili - autorimessa',
            typeOfEntity: 'cosa notevole'
        },
        count: 107
    },
    {
        entity: {
            id: '1270750e-cd93-449d-8f2c-9e55a48fb9b7',
            label: 'Stangoni, Alberto Mario',
            typeOfEntity: 'persona'
        },
        count: 101
    },
    {
        entity: {
            id: 'bf05f872-6100-4ded-9c02-dbf9ad7252f7',
            label: 'Musio, Luigi',
            typeOfEntity: 'persona'
        },
        count: 93
    },
    {
        entity: {
            id: '0f31d10e-99d1-400b-8617-c82d13151407',
            label: 'Melis, Pietro',
            typeOfEntity: 'persona'
        },
        count: 92
    },
    {
        entity: {
            id: '1a4d57f4-79d8-4424-b13e-068a8c90acc8',
            label: 'Carta, Mario',
            typeOfEntity: 'persona'
        },
        count: 92
    },
    {
        entity: {
            id: 'cee21219-1765-41dc-923f-ab5288c0a39c',
            label: 'Falchi, Pierina',
            typeOfEntity: 'persona'
        },
        count: 92
    },
    {
        entity: {
            id: 'cd7e52cb-d9bd-45f2-845e-3525181d52cf',
            label: 'Serra, Ignazio',
            typeOfEntity: 'persona'
        },
        count: 91
    },
    {
        entity: {
            id: '0255d72b-9f79-4ca1-a23a-6fae27b92f06',
            label: 'Cerioni, Agostino',
            typeOfEntity: 'persona'
        },
        count: 89
    },
    {
        entity: {
            id: '8ac48673-a5e0-4a80-b26a-ac1379f72042',
            label: 'Gardu, Antonio',
            typeOfEntity: 'persona'
        },
        count: 80
    },
    {
        entity: {
            id: '7018d307-1886-414f-92e1-a5b580925a99',
            label: 'industria, commercio e rinascita',
            typeOfEntity: 'cosa notevole'
        },
        count: 78
    },
    {
        entity: {
            id: '033b4b5e-eb93-4519-ad72-f0d3a857f195',
            label: 'presidenza (varie)',
            typeOfEntity: 'cosa notevole'
        },
        count: 66
    },
    {
        entity: {
            id: '1cf07350-a744-4784-a909-bf52f4d02ff4',
            label: 'Princivalle, Senio',
            typeOfEntity: 'persona'
        },
        count: 56
    },
    {
        entity: {
            id: '4502a950-dfd2-4bda-a4b1-caaaf0a4ab53',
            label: 'Salinas, Renato',
            typeOfEntity: 'persona'
        },
        count: 56
    },
    {
        entity: {
            id: '6eeeafd7-d831-4c78-b02a-0e5d09f00d09',
            label: 'igiene e sanità',
            typeOfEntity: 'cosa notevole'
        },
        count: 56
    },
    {
        entity: {
            id: '6a813eba-91ce-40bf-b1cf-27a6d08cec4f',
            label: 'lavoro',
            typeOfEntity: 'cosa notevole'
        },
        count: 52
    },
    {
        entity: {
            id: '51980671-9dc3-46ab-bd35-b2586a74b28e',
            label: 'indennità consiglieri -  assessori commissioni',
            typeOfEntity: 'cosa notevole'
        },
        count: 50
    },
    {
        entity: {
            id: 'f9ead111-c3ae-494f-bd5b-9e61ef4a8d92',
            label: 'cancelleria',
            typeOfEntity: 'cosa notevole'
        },
        count: 50
    },
    {
        entity: {
            id: 'accf83e6-95c7-46c9-bd16-ca50fec52b14',
            label: 'turismo',
            typeOfEntity: 'cosa notevole'
        },
        count: 46
    },
    {
        entity: {
            id: '531d272a-e16c-447d-a4ce-25f986c54926',
            label: 'Diaz, Luigi',
            typeOfEntity: 'persona'
        },
        count: 44
    },
    {
        entity: {
            id: '756d9def-a457-4df6-9626-a0b8379099ec',
            label: 'istruzione assistenza e beneficenza',
            typeOfEntity: 'cosa notevole'
        },
        count: 44
    },
    {
        entity: {
            id: '3eec7479-8041-45be-b3e2-49f66c55cfbc',
            label: 'locali',
            typeOfEntity: 'cosa notevole'
        },
        count: 42
    },
    {
        entity: {
            id: '8551ab5c-fd20-4a21-a606-f001dee0996b',
            label: 'presidenza - enti locali - (varie)',
            typeOfEntity: 'cosa notevole'
        },
        count: 42
    },
    {
        entity: {
            id: '48646ba0-12c6-4f8e-ad76-30b510a37ea8',
            label: 'turismo - affari generali',
            typeOfEntity: 'cosa notevole'
        },
        count: 41
    },
    {
        entity: {
            id: '2d84f78c-8cfe-4de9-afb8-4dfeccbf880c',
            label: 'bollettino ufficiale - pubblicazioni e atti regionali',
            typeOfEntity: 'cosa notevole'
        },
        count: 37
    },
    {
        entity: {
            id: '9045cf87-c73f-43b3-a515-eff8c6c643a4',
            label: 'bollettino ufficiale',
            typeOfEntity: 'cosa notevole'
        },
        count: 35
    },
    {
        entity: {
            id: '8bd3478e-90b9-4041-a2fe-d06086c6fb83',
            label: 'Pais, Domenico',
            typeOfEntity: 'persona'
        },
        count: 34
    },
    {
        entity: {
            id: '9e55c3c1-02f2-4b19-9ae1-dbbda2167aae',
            label: 'mostre e fiere',
            typeOfEntity: 'cosa notevole'
        },
        count: 34
    },
    {
        entity: {
            id: 'c74bc02b-0ed2-469d-bbbb-b6286fc5e33f',
            label: "compensi ad estranei all'amministrazione regionale",
            typeOfEntity: 'cosa notevole'
        },
        count: 34
    },
    {
        entity: {
            id: '6b368a77-ebe8-4015-9d08-8b763336355b',
            label: 'Comune di Cagliari',
            typeOfEntity: 'organizzazione'
        },
        count: 32
    },
    {
        entity: {
            id: 'edf188db-1ec0-4e5a-a2e4-d6fffdac1e9e',
            label: 'spese rappresentanza - avvenimenti eccezionali - varie',
            typeOfEntity: 'cosa notevole'
        },
        count: 32
    },
    {
        entity: {
            id: 'ef0d3627-b417-49bc-8d0a-1a77055a3474',
            label: 'Filigheddu, Giovanni',
            typeOfEntity: 'persona'
        },
        count: 32
    },
    {
        entity: {
            id: '40e56d61-0ede-4df0-b3b9-0cdc2f55c317',
            label: 'Salinas, Renato',
            typeOfEntity: 'persona'
        },
        count: 30
    },
    {
        entity: {
            id: '62966c20-e1b1-435e-a25c-82fd15160abc',
            label: 'interni',
            typeOfEntity: 'cosa notevole'
        },
        count: 30
    },
    {
        entity: {
            id: '4d738647-f2eb-41b2-8da0-726a39f1a720',
            label: 'Azzena, Mario',
            typeOfEntity: 'persona'
        },
        count: 29
    },
    {
        entity: {
            id: '2816ea94-8cdf-478e-a9cb-df5dd6ddf411',
            label: 'lavoro e artigianato',
            typeOfEntity: 'cosa notevole'
        },
        count: 25
    },
    {
        entity: {
            id: '3401b977-d2c8-450a-883f-62c3b7b2a989',
            label: 'Ufficio del genio civile di Cagliari',
            typeOfEntity: 'organizzazione'
        },
        count: 25
    },
    {
        entity: {
            id: '8824dd3f-d065-48b5-924b-9aabfbeabbfe',
            label: 'Ufficio del genio civile di Cagliari',
            typeOfEntity: 'organizzazione'
        },
        count: 25
    },
    {
        entity: {
            id: 'a8ad1d33-06c8-4f6f-9c1e-c31a21ad80c0',
            label: 'trasporti - enti locali',
            typeOfEntity: 'cosa notevole'
        },
        count: 25
    },
    {
        entity: {
            id: '49b17b76-5207-4e63-bb54-b3d2970b7c43',
            label: 'cassa mezzogiorno',
            typeOfEntity: 'cosa notevole'
        },
        count: 24
    },
    {
        entity: {
            id: '1a8b5468-99b4-42b8-bda5-6c33a9abeb72',
            label: 'mostre e fiere - convegni e congressi',
            typeOfEntity: 'cosa notevole'
        },
        count: 23
    },
    {
        entity: {
            id: '52cc99d1-016b-4c6f-bcbd-a6ef11e1c06a',
            label: 'trasporti',
            typeOfEntity: 'cosa notevole'
        },
        count: 23
    },
    {
        entity: {
            id: '9840613f-0166-4272-b66a-23d113690a24',
            label: 'Asso, Margherita',
            typeOfEntity: 'persona'
        },
        count: 23
    },
    {
        entity: {
            id: 'c652ff1a-2e05-42d0-b389-63996480d440',
            label: 'Asso, Margherita',
            typeOfEntity: 'persona'
        },
        count: 22
    },
    {
        entity: {
            id: '311d10e8-defd-4b63-b420-5ddb87e04fac',
            label: 'Costa, S.',
            typeOfEntity: 'persona'
        },
        count: 19
    },
    {
        entity: {
            id: '804d48cf-89aa-4a50-b0bc-4a9284ad3f25',
            label: 'Costa, S.',
            typeOfEntity: 'persona'
        },
        count: 19
    },
    {
        entity: {
            id: '892ea47e-9f65-4fc6-ad2e-c85e69ae5ac3',
            label: 'Aru, Carlo',
            typeOfEntity: 'persona'
        },
        count: 17
    },
    {
        entity: {
            id: 'ef9a6b08-bdab-4827-835e-47df891aac0b',
            label: 'banche, istituti assicurazione ecc',
            typeOfEntity: 'cosa notevole'
        },
        count: 17
    },
    {
        entity: {
            id: '7e8d5830-3a5c-4aca-9a82-67c5556a5d61',
            label: 'Ufficio concessioni e servitù',
            typeOfEntity: 'organizzazione'
        },
        count: 16
    },
    {
        entity: {
            id: 'a23b3839-d0a5-4c52-9b36-a762f422d221',
            label: 'Ufficio concessioni e servitù',
            typeOfEntity: 'organizzazione'
        },
        count: 16
    },
    {
        entity: {
            id: '3c64bf6d-8299-4b95-bdbe-8fcdead2705e',
            label: 'Sezione Demanio marittimo',
            typeOfEntity: 'organizzazione'
        },
        count: 13
    },
    {
        entity: {
            id: '47d308d2-86f5-4ca3-bda3-6d6d745c42ff',
            label: 'Sezione Demanio marittimo',
            typeOfEntity: 'organizzazione'
        },
        count: 13
    },
    {
        entity: {
            id: 'c24d928d-604d-4f18-8ccf-db8b348c265f',
            label: 'Ministero della pubblica istruzione',
            typeOfEntity: 'organizzazione'
        },
        count: 13
    },
    {
        entity: {
            id: '77397bb8-f1ea-4e34-b56a-3b251f8cbd38',
            label: 'sport',
            typeOfEntity: 'cosa notevole'
        },
        count: 11
    },
    {
        entity: {
            id: '16f082dc-1aa8-4800-bee0-a4f62b5c7d63',
            label: 'Scano, Dionigi',
            typeOfEntity: 'persona'
        },
        count: 10
    },
    {
        entity: {
            id: '90c0b77f-be07-49d3-8489-fd59f42a7b2b',
            label: 'Soprintendenza ai monumenti e gallerie di Cagliari',
            typeOfEntity: 'organizzazione'
        },
        count: 10
    },
    {
        entity: {
            id: 'b5d1fd8f-5149-4629-8b21-b3f754abd05d',
            label: 'banche, istituti di credito e assicurazione',
            typeOfEntity: 'cosa notevole'
        },
        count: 10
    },
    {
        entity: {
            id: '55c395c6-3721-4d06-950d-d7de52cb7f5a',
            label: 'banche',
            typeOfEntity: 'cosa notevole'
        },
        count: 9
    },
    {
        entity: {
            id: '0a380f9f-e7e2-441e-860e-52ebe49d139c',
            label: 'Santadi',
            typeOfEntity: 'luogo'
        },
        count: 7
    },
    {
        entity: {
            id: '2b1dbb20-9fea-4715-ae2f-1049ede12534',
            label: 'Taramelli, Antonio',
            typeOfEntity: 'persona'
        },
        count: 7
    },
    {
        entity: {
            id: '2ab14e10-e680-4a96-b7db-12ac1dc19fe8',
            label: 'presidenza - (varie)',
            typeOfEntity: 'cosa notevole'
        },
        count: 6
    },
    {
        entity: {
            id: '807877b3-f8cf-4a21-b4b6-860d62278aad',
            label: 'Commissione provinciale dei monumenti',
            typeOfEntity: 'organizzazione'
        },
        count: 6
    },
    {
        entity: {
            id: 'bd83d08d-446c-4ad9-8863-ef9991436f79',
            label: 'Santadi',
            typeOfEntity: 'luogo'
        },
        count: 6
    },
    {
        entity: {
            id: '0069b0b2-8df4-4aca-97c6-35eaaeb92a6a',
            label: 'Riola',
            typeOfEntity: 'luogo'
        },
        count: 5
    },
    {
        entity: {
            id: '18288c99-6089-4212-8c3a-4011c659c8c7',
            label: 'Cannas, Emanuele',
            typeOfEntity: 'persona'
        },
        count: 5
    },
    {
        entity: {
            id: '3b46618e-df7b-4158-88f2-50d9230c1243',
            label: 'Baratili San Pietro',
            typeOfEntity: 'luogo'
        },
        count: 5
    },
    {
        entity: {
            id: '3efa04ea-23f6-4214-b498-fdc2e893dba0',
            label: 'Salaris, Mario',
            typeOfEntity: 'persona'
        },
        count: 5
    },
    {
        entity: {
            id: '5290a3b0-7838-4fa2-9a18-6f38d9368df4',
            label: 'Studio tecnico PRO.CE.A.',
            typeOfEntity: 'organizzazione'
        },
        count: 5
    },
    {
        entity: {
            id: '69f302ee-eb39-41f3-88f5-f4ff7a9684f3',
            label: 'Zeddiani',
            typeOfEntity: 'luogo'
        },
        count: 5
    },
    {
        entity: {
            id: '6bef4caf-2494-47b4-8636-694d198ae6fd',
            label: 'Cannas, Emanuele',
            typeOfEntity: 'persona'
        },
        count: 5
    },
    {
        entity: {
            id: '74f46161-4340-4ca7-9c31-36cd78583d3f',
            label: 'Comune di Santadi',
            typeOfEntity: 'organizzazione'
        },
        count: 5
    },
    {
        entity: {
            id: 'b74347b3-318e-4c27-8403-d011074d89ee',
            label: 'Nurachi',
            typeOfEntity: 'luogo'
        },
        count: 5
    },
    {
        entity: {
            id: 'fee7a21b-e559-4b6e-8a29-15f4cbd9e70d',
            label: 'Salaris, Mario',
            typeOfEntity: 'persona'
        },
        count: 5
    },
    {
        entity: {
            id: '0a89a7c9-7e96-457b-a686-1b9d71e7b2c0',
            label: 'Simaxis',
            typeOfEntity: 'luogo'
        },
        count: 4
    },
    {
        entity: {
            id: '0cbb4c6d-044d-41b7-8518-ec2502c241d2',
            label: 'Senorbì',
            typeOfEntity: 'luogo'
        },
        count: 4
    },
    {
        entity: {
            id: '11f877c7-a16a-4dd1-beaa-a7bce80cd3c8',
            label: 'Comune di Bauladu',
            typeOfEntity: 'organizzazione'
        },
        count: 4
    },
    {
        entity: {
            id: '136c0d5d-7cde-4a17-a48d-4fb095ebdd35',
            label: 'Cagliari',
            typeOfEntity: 'luogo'
        },
        count: 4
    },
    {
        entity: {
            id: '16c902bd-cd0f-4801-a62b-d0a1f35d8b44',
            label: 'Siurgus Donigala',
            typeOfEntity: 'luogo'
        },
        count: 4
    },
    {
        entity: {
            id: '1f08231b-e098-494c-bdc7-1e69f4f74d5b',
            label: 'Narbolia',
            typeOfEntity: 'luogo'
        },
        count: 4
    },
    {
        entity: {
            id: '28a87a68-405f-4ec8-990b-0abdb11a3589',
            label: "Quartu Sant'Elena",
            typeOfEntity: 'luogo'
        },
        count: 4
    },
    {
        entity: {
            id: '2db7d117-6a2a-4fd7-ac18-5a8a51997799',
            label: 'Antonetti, Nicolino',
            typeOfEntity: 'persona'
        },
        count: 4
    },
    {
        entity: {
            id: '30243eba-457e-49c6-a61d-a73d40454533',
            label: 'Gonnesa',
            typeOfEntity: 'luogo'
        },
        count: 4
    },
    {
        entity: {
            id: '48aa7c4f-767a-459b-a359-2f0230d8db56',
            label: 'Antonetti, Nicolino',
            typeOfEntity: 'persona'
        },
        count: 4
    },
    {
        entity: {
            id: '51f61af8-d547-4030-b352-6ea2a6fd1ae3',
            label: 'Comune di Selargius',
            typeOfEntity: 'organizzazione'
        },
        count: 4
    },
    {
        entity: {
            id: '57cee9a8-cda8-483b-afc5-036472a0a98a',
            label: 'Comune di Senorbì',
            typeOfEntity: 'organizzazione'
        },
        count: 4
    },
    {
        entity: {
            id: '67d7519b-c3eb-43da-b920-a4fdb2f4721c',
            label: 'Scano, Dionigi',
            typeOfEntity: 'persona'
        },
        count: 4
    },
    {
        entity: {
            id: '68ce0fa6-5f1b-4a16-8ec3-5e59af2721b4',
            label: 'Bauladu',
            typeOfEntity: 'luogo'
        },
        count: 4
    },
    {
        entity: {
            id: '694c25ce-f443-4cf0-ae58-bf067582f4dc',
            label: 'Villaperuccio (Santadi)',
            typeOfEntity: 'luogo'
        },
        count: 4
    },
    {
        entity: {
            id: '73b0fd04-8ee7-4136-b7b1-e56f10c0c16c',
            label: 'Sarroch',
            typeOfEntity: 'luogo'
        },
        count: 4
    },
    {
        entity: {
            id: '7a543836-46d6-4581-8acf-2908e204a4a9',
            label: 'Garau, Emilio Stefano',
            typeOfEntity: 'persona'
        },
        count: 4
    },
    {
        entity: {
            id: '8228fb86-178c-4ada-8001-3ea64a954333',
            label: 'Comune di Siurgus Donigala',
            typeOfEntity: 'organizzazione'
        },
        count: 4
    },
    {
        entity: {
            id: '842aa0e0-53fc-4907-b0ed-8eac1357f7db',
            label: 'Fluminimaggiore',
            typeOfEntity: 'luogo'
        },
        count: 4
    },
    {
        entity: {
            id: '923d1a87-1230-4147-bc57-36475b70106d',
            label: 'Selargius',
            typeOfEntity: 'luogo'
        },
        count: 4
    },
    {
        entity: {
            id: '97fbd797-8c6d-44d0-a903-57d50874909d',
            label: 'Villaperuccio (Santadi)',
            typeOfEntity: 'luogo'
        },
        count: 4
    },
    {
        entity: {
            id: '9869b481-5289-4346-862b-0aea5012290c',
            label: 'San Giovanni Suergiu',
            typeOfEntity: 'luogo'
        },
        count: 4
    },
    {
        entity: {
            id: '9cc62ed9-4fd0-44fc-b26f-bdf8948856c1',
            label: 'Portoscuso',
            typeOfEntity: 'luogo'
        },
        count: 4
    },
    {
        entity: {
            id: 'aed54207-2b50-4648-aed2-726f1c052234',
            label: 'Sinnai',
            typeOfEntity: 'luogo'
        },
        count: 4
    },
    {
        entity: {
            id: 'b3a3fc0b-e974-4b36-bfdc-39597e9c5b9f',
            label: 'Endrich, Enrico',
            typeOfEntity: 'persona'
        },
        count: 4
    },
    {
        entity: {
            id: 'd7bd3519-994f-497d-9d56-9bfdbf638966',
            label: 'Provveditorato alle opere pubbliche per la Sardegna',
            typeOfEntity: 'organizzazione'
        },
        count: 4
    },
    {
        entity: {
            id: 'dd9c6882-66bb-45f8-9251-12955e45499a',
            label: 'Comune di Santadi',
            typeOfEntity: 'organizzazione'
        },
        count: 4
    },
    {
        entity: {
            id: 'df510cd9-a86d-48e5-95cd-66fc79877c79',
            label: 'Burcei',
            typeOfEntity: 'luogo'
        },
        count: 4
    },
    {
        entity: {
            id: 'f98f6705-1a75-4da3-8e22-bd867b851259',
            label: 'Comune di Baratili San Pietro',
            typeOfEntity: 'organizzazione'
        },
        count: 4
    },
    {
        entity: {
            id: 'ff0794d2-ba63-4d44-9f44-ef40a5c9c871',
            label: 'locali e uffici',
            typeOfEntity: 'cosa notevole'
        },
        count: 4
    },
    {
        entity: {
            id: '0020ea54-8bad-4793-bd86-505b93edd908',
            label: 'Comune di Fluminimaggiore',
            typeOfEntity: 'organizzazione'
        },
        count: 3
    },
    {
        entity: {
            id: '04c8ef1e-7073-4de6-8b4e-580630ee9b4c',
            label: 'Comune di Riola',
            typeOfEntity: 'organizzazione'
        },
        count: 3
    },
    {
        entity: {
            id: '05d6c519-d7a5-42ca-b7f0-24a1f5ae3f0e',
            label: 'Portoscuso',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: '0f3586be-e640-44f1-b7fb-d2d3640e4d65',
            label: 'Zuri (Ghilarza)',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: '11ac451f-e356-4452-b57b-3b3e9f3fa671',
            label: 'Virdis, Bruno',
            typeOfEntity: 'persona'
        },
        count: 3
    },
    {
        entity: {
            id: '190c2e42-50e0-49fe-83d0-bb476b6054cd',
            label: 'Comune di Bosa',
            typeOfEntity: 'organizzazione'
        },
        count: 3
    },
    {
        entity: {
            id: '1d10dd6e-5481-492b-9930-51e4099273ea',
            label: 'Comune di Zuri',
            typeOfEntity: 'organizzazione'
        },
        count: 3
    },
    {
        entity: {
            id: '1fe3c661-6d56-4c58-9807-0fbbb56cc943',
            label: 'Comune di Gonnesa',
            typeOfEntity: 'organizzazione'
        },
        count: 3
    },
    {
        entity: {
            id: '22c06541-f0e2-43c5-824f-fee86c49e79d',
            label: 'Comune di Sarroch',
            typeOfEntity: 'organizzazione'
        },
        count: 3
    },
    {
        entity: {
            id: '2a94bf3f-bfb3-4f03-bfae-64d61d893099',
            label: 'Serramanna',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: '2b61a8fe-2dc6-4535-8143-e16956a4ca81',
            label: "San Nicolò D'Arcidano",
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: '2ddeedd0-aaa7-4a23-8076-2f764293ad2b',
            label: 'Comune di Gesturi',
            typeOfEntity: 'organizzazione'
        },
        count: 3
    },
    {
        entity: {
            id: '304b37fb-3827-4c51-9733-0788ff4c638b',
            label: 'Sisini (Senorbì)',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: '33627771-897b-4c0a-910f-cc2221427e45',
            label: 'Calasetta',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: '34d2a2ae-9b7e-41db-b664-43a57e389e9c',
            label: 'Maracalagonis',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: '3cdfe3cd-2f64-4c8b-92ca-bc2b468cf2f0',
            label: 'Ghilarza',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: '3d567c83-9949-4294-9c86-a35e96a5fcc5',
            label: 'Comune di Oristano',
            typeOfEntity: 'organizzazione'
        },
        count: 3
    },
    {
        entity: {
            id: '41c8527c-3bf7-4a0b-8f80-0b120738a7f4',
            label: 'Comune di Narcao',
            typeOfEntity: 'organizzazione'
        },
        count: 3
    },
    {
        entity: {
            id: '44b59bbb-994e-487e-a291-eefc21e62f5a',
            label: 'Gonnoscodina',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: '45b98a6a-3717-4946-8235-d79c1dc877a7',
            label: 'Domusnovas',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: '4771e4ef-d72c-41b6-a650-f6e4f192399a',
            label: 'Cagliari',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: '4c9ae5a8-f3ae-42cc-896d-7c57ebd047c4',
            label: 'Garau, Augusto',
            typeOfEntity: 'persona'
        },
        count: 3
    },
    {
        entity: {
            id: '542224c9-9723-4066-babc-c1e667ef8dab',
            label: 'Comune di Senorbì',
            typeOfEntity: 'organizzazione'
        },
        count: 3
    },
    {
        entity: {
            id: '598571b7-44db-44e8-9533-57405594a39d',
            label: 'Siliqua',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: '5c0743f4-4ddd-44cc-bd37-e52ebc5a6af9',
            label: 'Comune di Monastir',
            typeOfEntity: 'organizzazione'
        },
        count: 3
    },
    {
        entity: {
            id: '6c0c77fb-c820-4b70-8a45-530374064900',
            label: 'Comune di Assemini',
            typeOfEntity: 'organizzazione'
        },
        count: 3
    },
    {
        entity: {
            id: '71f2a7ec-64ac-49ae-b961-3ede9e77c17c',
            label: 'Comune di Gonnoscodina',
            typeOfEntity: 'organizzazione'
        },
        count: 3
    },
    {
        entity: {
            id: '72f2bb62-c84d-406a-9c60-1ef73c4a6284',
            label: 'Comune di Selargius',
            typeOfEntity: 'organizzazione'
        },
        count: 3
    },
    {
        entity: {
            id: '75cfc0bb-fc08-464a-b140-1d12359ce1b2',
            label: 'Baratili San Pietro',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: '79a3a477-ec3a-4417-ace6-a9842062544d',
            label: 'Gesturi',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: '7bf6a69e-193c-402e-ab52-3c7e4420a3e7',
            label: 'Comune di San Giovanni Suergiu',
            typeOfEntity: 'organizzazione'
        },
        count: 3
    },
    {
        entity: {
            id: '81312e6b-b0d9-4ecc-a537-48e1e4557eaf',
            label: 'Comune di Simaxis',
            typeOfEntity: 'organizzazione'
        },
        count: 3
    },
    {
        entity: {
            id: '8417fe93-109a-4c84-8c59-3ef90deab825',
            label: 'Porto Vesme (Portoscuso)',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: '88f8519a-66bc-4d99-a00d-3f6ab487d9e8',
            label: 'Capoterra',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: '8ac13f32-ed1c-48fd-ad25-4de753c7a439',
            label: 'Muravera',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: '8cf9841d-d13b-4556-ad39-aed38d86a326',
            label: "Comune di San Nicolò D'Arcidano",
            typeOfEntity: 'organizzazione'
        },
        count: 3
    },
    {
        entity: {
            id: '905ced42-6223-4a6f-a9b0-0ff00f2ccc59',
            label: 'Carbonia',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: '9ba9b303-b3cf-4cdc-9139-a843036225f2',
            label: 'Senorbì',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: '9d464d00-fb9a-422e-a3ff-e3dedca8f099',
            label: 'Comune di Villa San Pietro',
            typeOfEntity: 'organizzazione'
        },
        count: 3
    },
    {
        entity: {
            id: '9dc7b1a5-902d-402c-adb4-9067714e03ec',
            label: 'Pedemonte, Pietro',
            typeOfEntity: 'persona'
        },
        count: 3
    },
    {
        entity: {
            id: 'a591b6a8-ada4-4d59-8024-ce05283a94cb',
            label: 'Comune di Ghilarza',
            typeOfEntity: 'organizzazione'
        },
        count: 3
    },
    {
        entity: {
            id: 'b17e83e9-73d7-4c8c-988c-07c821414e8c',
            label: 'Narcao',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: 'b3c2c0a7-8026-4559-b5f7-af497da4b165',
            label: 'Quartucciu',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: 'bea0edf4-52af-4c18-8d0e-4bd4cd8138ce',
            label: 'Burcei',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: 'c0858051-ead6-4d55-a46d-edf9510a8460',
            label: 'Teulada',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: 'c1dd9b99-0a4d-4b20-9ab8-26aa320e35f4',
            label: 'Oristano',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: 'c27eac89-8122-426a-bdc4-2070648d755c',
            label: 'Carbonia',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: 'c29063a0-01d5-4ecb-b6ac-093489589f0d',
            label: 'Simonetti, Riccardo',
            typeOfEntity: 'persona'
        },
        count: 3
    },
    {
        entity: {
            id: 'c427374b-97da-4e0d-8403-3a8e830a599b',
            label: 'Comune di Zeddiani',
            typeOfEntity: 'organizzazione'
        },
        count: 3
    },
    {
        entity: {
            id: 'c53d8f62-6ba4-459a-9001-99413ca7bafd',
            label: 'Comune di Nurachi',
            typeOfEntity: 'organizzazione'
        },
        count: 3
    },
    {
        entity: {
            id: 'c5b826dd-f6c0-4f65-a392-af8cabdcca83',
            label: 'Comune di Siamaggiore',
            typeOfEntity: 'organizzazione'
        },
        count: 3
    },
    {
        entity: {
            id: 'c614b687-69fd-4b51-a511-ba1202be5692',
            label: 'Monastir',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: 'c8475e9c-ac5d-4c5f-8a56-6d08cb3d3ebb',
            label: 'Garau, Augusto',
            typeOfEntity: 'persona'
        },
        count: 3
    },
    {
        entity: {
            id: 'c85c6ac9-6ea7-446e-a909-28f2e750561c',
            label: 'Assemini',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: 'c8afd4d5-abfb-46d1-8ca6-c48e3a8e0a99',
            label: 'Villa San Pietro',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: 'c98524d9-fbbe-4d4e-8435-309658927b65',
            label: 'Nurachi',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: 'c9cee1d7-a956-4599-a4e3-89a6cd8af7b6',
            label: 'Comune di Iglesias',
            typeOfEntity: 'organizzazione'
        },
        count: 3
    },
    {
        entity: {
            id: 'cbc7ba52-ff31-46f6-92f1-df03c8ae1da0',
            label: 'Gonnesa',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: 'cce39d1d-395c-4fe7-8d82-669a116adcae',
            label: 'Teulada',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: 'cfb2cc9b-f712-4a70-993f-d07906a06163',
            label: 'Fluminimaggiore',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: 'cfb898a9-067b-47f5-bfdb-80d7f2273c0f',
            label: 'Comune di Ortacesus',
            typeOfEntity: 'organizzazione'
        },
        count: 3
    },
    {
        entity: {
            id: 'd4edfd52-89e9-4d41-b5c2-5191cf2701f4',
            label: 'Comune di Serramanna',
            typeOfEntity: 'organizzazione'
        },
        count: 3
    },
    {
        entity: {
            id: 'd580025e-e859-4bd6-96f9-d187692b0836',
            label: 'Arbus',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: 'db4a5db2-b40e-4096-86b5-b3a529a489f6',
            label: 'Pula',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: 'de1a142f-6a2c-4306-9a12-92371afff7bb',
            label: 'Comune di Narbolia',
            typeOfEntity: 'organizzazione'
        },
        count: 3
    },
    {
        entity: {
            id: 'e2a3e125-1681-4e84-914d-3717f28fb51c',
            label: 'Selargius',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: 'e470a75c-d5b6-4704-85e6-06e49b76f820',
            label: 'Bari Sardo',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: 'e52aee65-8dd0-456a-8bac-c8ac507142f7',
            label: 'Tuili',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: 'e9c3be10-377a-4a8d-b22e-cb778f7f63a1',
            label: 'Endrich, Enrico',
            typeOfEntity: 'organizzazione'
        },
        count: 3
    },
    {
        entity: {
            id: 'ebf97992-5552-4bd4-8d86-57bdc4fdd5d3',
            label: 'Siamaggiore',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: 'fa8e5936-49a5-41df-b71a-fa26cc6addeb',
            label: 'Ortacesus',
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: 'ff53023e-4afc-4404-a0e1-a1c308c42da6',
            label: "Sant'Antioco",
            typeOfEntity: 'luogo'
        },
        count: 3
    },
    {
        entity: {
            id: '002e5810-7176-440d-9e80-3c68c94d12bd',
            label: 'Tadasuni',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '0131948b-efe5-4976-a62b-3f81276adb2a',
            label: 'Monastir',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '01987640-f917-4973-98f1-884c17099ea5',
            label: 'Pirri',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '027e1290-9dbb-44ca-96ab-97ee0fdea10e',
            label: 'Sestu',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '04befe5d-790c-40fb-bb91-47ebca9361a5',
            label: 'Pula',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '062ff654-b153-476c-83f2-cbeb16e3afbb',
            label: 'Morgongiori',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '06c6c30f-ab75-474a-960b-2da225b760a6',
            label: 'Ussaramanna',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '085a5167-ff32-4631-8082-be2986f5a12d',
            label: 'Impresa Oppo - Sitzia',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '0cfe891d-35ca-443a-985b-6aa32ccccb96',
            label: 'Comune di Villacidro',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '0e296152-dfd5-465c-9d68-8aaa6a19f86d',
            label: 'Villacidro',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '0ee8df8a-04a9-4c7d-9a57-f3b0cc4aadaa',
            label: 'Comune di Pompu',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '0fc240bd-7392-4e48-9a76-56715941a9a6',
            label: 'SNIA Viscosa spa',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '1134f71d-bdce-44cc-a283-10ccf0779d7f',
            label: 'Comune di Villasimius',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '1138e0bb-3767-45af-a356-6b712d09ea54',
            label: 'Comune di Baressa',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '1160ea4e-6376-43f3-a9f9-1feed3ce1ae7',
            label: 'Comune di Tiana',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '139a15f8-a311-48c1-89e7-484b1cd40241',
            label: 'Merli Gallino, Anna',
            typeOfEntity: 'persona'
        },
        count: 2
    },
    {
        entity: {
            id: '13c14701-cdf4-469b-97a1-63f1ba119b93',
            label: 'Schinardi, Giuseppe',
            typeOfEntity: 'persona'
        },
        count: 2
    },
    {
        entity: {
            id: '13cc968f-9e6c-4323-92d3-9ccfb025935b',
            label: 'Comune di Sanluri',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '1420a2ac-b681-447c-a764-e2972f3b9f94',
            label: 'Comune di Pau',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '147b0d85-c924-474f-876a-59fd2d4e6278',
            label: "Ente nazionale per l'energia elettrica - ENEL di Cagliari",
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '15039e16-67c9-43bf-a143-9c9a17848a97',
            label: 'Tortolì',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '153b8d59-07e6-4273-a20f-1f395c217dd4',
            label: 'Sini',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '162e5540-f15a-482a-91f0-b0e57117f9c3',
            label: 'Comune di Bauladu',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '17822165-bad5-40f1-aeae-dfe2ed115ab0',
            label: 'Sardara',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '17db64d3-207a-4717-80a6-4046ab6e729d',
            label: 'Comune di Masullas',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '19199ef1-16f6-4ae2-a948-08f89e8dddd5',
            label: 'Comune di Sarroch',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '19d4a374-8589-436e-9ac1-c3a7128241ee',
            label: 'Comune di Serbariu',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '1a37bde7-64f4-4864-a231-731a9537414e',
            label: 'Guamaggiore',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '1a5c81cf-dd08-46bc-8f2b-9f9d36e26d23',
            label: 'Comune di Furtei',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '1aafe693-66d5-47a8-8a7a-cab61738872f',
            label: 'Contu, Anselmo',
            typeOfEntity: 'persona'
        },
        count: 2
    },
    {
        entity: {
            id: '1b18acb6-9c63-4c58-a9d2-dc6756f16a9f',
            label: 'Comune di Gergei',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '1b6d9a5f-dec2-4872-972c-caccded3ff1d',
            label: 'Comune di Soddì',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '1c4867ba-c633-4be9-a1d0-1038cd82bf79',
            label: 'Comune di Pauli Arbarei',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '1c8a172f-de43-4157-b5d5-33524c060a5f',
            label: 'Gonnoscodina',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '1ca62339-b976-44c4-a38f-eabb321600e9',
            label: 'Comune di Arbus',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '1e16f325-67a1-41c5-8c24-af41c4381224',
            label: 'San Basilio',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '1eaf8142-0f76-418d-9316-13915b74414b',
            label: 'Bulzi',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '1ff3d08b-2562-4b28-ba83-3e4918730e36',
            label: 'Segariu',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '201ef2d3-ae2b-4ec4-981d-41d9b6e506c4',
            label: 'Comune di Ussaramanna',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '219f3078-a570-41c3-8b2a-a77c93e31b26',
            label: 'Serbariu',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '21f1cb91-1912-4955-9405-459aee61c5dc',
            label: 'Comune di Ussana',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '22335ba8-d58d-46e8-bb77-555ddd48cf25',
            label: 'Comune di Belvì',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '228b675c-fab8-4959-b257-dc96c64decd4',
            label: 'Comune di Bortigiadas',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '237e2cea-3950-4627-89b3-70e86c0c8879',
            label: 'Cara Mereu, Giulia',
            typeOfEntity: 'persona'
        },
        count: 2
    },
    {
        entity: {
            id: '245150e0-4d2d-46a2-b790-fea5cf3c5055',
            label: 'Villasimius',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '24d13e0e-1174-4461-9721-74c1085ae633',
            label: 'Tiana',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '25a59c4f-51ce-424e-91a0-0a4a606333fb',
            label: 'Portovesme (Portoscuso)',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '25b3d99b-d412-4b8e-9889-9f7ede13c4d8',
            label: 'Comune di Orroli',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '26806d17-6261-428d-80c2-b9e89e58902a',
            label: 'Comune di Alghero',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '26e86c98-c8b4-4534-a819-0e698a92447a',
            label: 'Villanovaforru',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '295fe8b8-f241-447b-a3c0-4d27f8de2783',
            label: 'Comune di Nuraminis',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '2adde0fb-af5c-4aee-a5a0-1c5b0a9b2f55',
            label: 'San Vero Milis',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '2d1aa574-280e-459d-807d-6b2bbcd25708',
            label: 'Silì (Oristano)',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '2d9d67c5-0ba0-4bcd-af58-8d60aca990da',
            label: 'Loi, Attilio',
            typeOfEntity: 'persona'
        },
        count: 2
    },
    {
        entity: {
            id: '2dc7b480-b021-44f8-b1eb-84f8f1b2be1d',
            label: 'Nonnoi, Francesco',
            typeOfEntity: 'persona'
        },
        count: 2
    },
    {
        entity: {
            id: '3001f08c-96a2-4ac2-9842-46fdcec99f43',
            label: 'Comune di Silì',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '309d5edc-7ab3-488c-8ca3-95b834c01a34',
            label: 'Halen, Louis',
            typeOfEntity: 'persona'
        },
        count: 2
    },
    {
        entity: {
            id: '3135a633-9a62-4f2f-bb0b-d6f666f50d74',
            label: 'Società ORMUS Residenziale spa',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '31573df9-5a83-42b5-9b3b-42d303450ffd',
            label: 'Comune di Aidomaggiore',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '317eb949-cd92-445b-a05c-b5c6fc70ea86',
            label: 'Comune di Gonnoscodina',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '320e52bf-a8a9-4745-8884-3aaa15f76126',
            label: 'Comune di Pula',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '327e8d73-00b3-4c91-9c81-cca6754f2fc2',
            label: 'San Pantaleo (Dolianova)',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '32943a84-75be-42cb-92ac-3fea5a72667c',
            label: 'Comune di Siris',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '32c0e727-1e1e-461b-b4ad-cc1068bd8a37',
            label: 'Bidonì',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '331a496b-cc11-4118-b359-2a5ce06e957d',
            label: 'Comune di Muravera',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '334d1723-8bfe-4a70-a18e-51cca716ec6d',
            label: 'Sinnai',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '34513a78-efa7-4d89-87d0-5144d185db3d',
            label: 'Riola',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '35517805-678d-47f5-8f02-92dcdd7471c4',
            label: 'Ballao',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '36182ea5-9d5f-4ffc-98a4-bd68d2e08903',
            label: 'Ardauli',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '379d9597-6727-4f89-8940-15ee3126e250',
            label: 'Comune di Tratalias',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '37d67103-b6d8-44ed-a96a-a44bb9e86bbb',
            label: "Ente nazionale per l'energia elettrica - ENEL di Cagliari",
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '39382dc9-81e1-413c-a251-32f522f34473',
            label: 'Comune di Ardauli',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '39c3715b-8532-4d43-a6d9-709b6ae33d6d',
            label: 'Figu',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '3b72153f-7a66-4fd4-a875-8b9c2dd29137',
            label: 'Comune di Ardauli',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '3cdd42e6-cce8-4cd3-b1c4-2c828847159a',
            label: 'Villaputzu',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '3d15a7c8-0044-494b-9efd-6a102c0b0e15',
            label: 'Comune di Teulada',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '3d330aa1-a2e5-46f6-8aac-92a8bbf42747',
            label: 'Comune di Sisini',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '3d4b3171-4d73-4b11-a5a4-a92943977185',
            label: 'Comune di Lotzorai',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '3e5a08ed-ae81-444e-8f14-83800540104a',
            label: 'Modolo',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '4228815a-b000-4368-96fc-7cdceb296443',
            label: 'Giba',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '437171ac-cb47-4cc9-944f-4222e54203c7',
            label: 'Erby, Onorino',
            typeOfEntity: 'persona'
        },
        count: 2
    },
    {
        entity: {
            id: '445c41eb-6759-4598-a8bd-a13c483a0598',
            label: 'Comune di Morgongiori',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '45c8683b-24d6-471b-b772-f04476c097a8',
            label: 'Cappai Randaccio, Francesco',
            typeOfEntity: 'persona'
        },
        count: 2
    },
    {
        entity: {
            id: '460591fe-9cf5-43bd-98a8-f64a61677a8d',
            label: 'La Plaia (Cagliari)',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '46de2315-21ca-4ef5-bca0-e29659cbe149',
            label: 'Oristano',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '472f3817-8943-4afd-b481-f98b96746590',
            label: 'Comune di Lanusei',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '477c0546-ed56-4db0-921f-bdd22d571c9d',
            label: 'Comune di Serramanna',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '49383e9d-2d14-4c51-bcd1-9ff23fe8b96c',
            label: 'San Gregorio (Sinnai)',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '498501f4-151e-4f30-9606-35fc558444d2',
            label: 'Las Plassas',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '498d0454-999a-44b2-91e5-2cea2a3ea961',
            label: 'Bonnanaro',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '4a894a75-7a2f-49f2-a8f8-cf635acb8e33',
            label: 'Comune di Modolo',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '4a9939f4-7afc-4895-80e6-df64968b8369',
            label: 'Portisceddu (Fluminimaggiore)',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '4b6c325d-667e-4727-a8dd-4335ed3a1c35',
            label: 'Simala',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '4c6f00c4-58d5-4659-bf25-c5721d114100',
            label: 'Murgia, Giovanni',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '4d628c6c-2422-4b70-ae05-db65e0aabe6a',
            label: 'Guasila',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '4de77e75-7410-4b3c-8f84-b63476851bf0',
            label: "Comune di Sant'Antioco",
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '4e3473a9-c62b-4bc1-88d5-62bbcaabbe60',
            label: 'Orroli',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '4e77174d-a776-4fcd-a45f-37159ee3cb7a',
            label: "Casa di cura Sant'Anna",
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '4e83a62f-54e8-4415-9a44-05f49279395b',
            label: 'Gallino, Paolo',
            typeOfEntity: 'persona'
        },
        count: 2
    },
    {
        entity: {
            id: '4ea23bbd-f00f-495e-8bb3-1edcd3dc9205',
            label: 'Comune di Baunei',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '4ee9dd1a-df3b-4e9f-9091-a3f55aaf72ee',
            label: 'Comune di Baratili San Pietro',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '4fadfd54-bfdf-48c7-b216-b1d8c6efd0c4',
            label: 'Fercia, Giorgio',
            typeOfEntity: 'persona'
        },
        count: 2
    },
    {
        entity: {
            id: '50e52bc5-577d-4f72-9f7c-0e9b2c5bbffc',
            label: 'Villaspeciosa',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '5122cd7a-f40d-4a28-a832-556467e49faa',
            label: 'Casu, Carlo',
            typeOfEntity: 'persona'
        },
        count: 2
    },
    {
        entity: {
            id: '513f7c58-ea50-40e5-be00-ad2180d8e346',
            label: 'Comune di Bonnanaro',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '5243f5e0-f763-493d-a38b-7c60a6753475',
            label: 'Comune di Segariu',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '524e7e8d-5e65-4935-9885-fb247fcf3cb0',
            label: 'Consorzio per il nucleo di industrializzazione del Sulcis Iglesiente',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '52982af8-321c-4af8-922e-91783726df90',
            label: 'Comune di Villanova Tulo',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '52984f23-1481-49d4-b56d-ee6ad2095392',
            label: 'Comune di Serrenti',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '52f0e561-80d7-4d0b-bcf9-303fb2d4c8ad',
            label: 'San Giovanni Suergiu',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '5377fa3e-8819-48b6-93df-411da288d921',
            label: 'Comune di Neoneli',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '552f772c-7993-4a7a-804e-ff6944e3b277',
            label: 'Serpeddì',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '55f897df-a9e7-4771-9060-8fa4dfbeb510',
            label: 'Pompu',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '56490b34-d0c4-4e40-ab61-f746cd332656',
            label: 'Tonara',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '57fb1ad0-258c-44c9-9e20-bc5a820688bc',
            label: 'Valentino, Luigi',
            typeOfEntity: 'persona'
        },
        count: 2
    },
    {
        entity: {
            id: '583e09d2-0837-4979-af13-bcdc24f60d46',
            label: 'Birori',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '5ac96198-3f46-4c7d-9c93-06b42c29cce1',
            label: 'Abbasanta',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '5b01130d-531d-4a02-96e7-fab352e7873f',
            label: 'Serpeddì',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '5c9a1588-523a-419b-84d6-4f484468c710',
            label: 'Sicci San Biagio (Dolianova)',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '5cdb4ee1-59f0-47da-b2dc-c49090ca9fac',
            label: 'Comune di Setzu',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '5e9ed26e-205f-4344-9c45-d75300894d4f',
            label: 'Simaxis',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '5ebcb08a-5865-4060-9429-815525d9aaed',
            label: 'Samatzai',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '5f6c7eaa-c752-4d01-ad45-8dde4420a3c9',
            label: 'Serrenti',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '5ff2c322-cfbc-48bb-88aa-ee7b0cf6c9dd',
            label: 'Comune di Samatzai',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '6085d982-6131-4c75-bd45-e2a3a01ed064',
            label: 'Murgia, Giovanni',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '623ff899-4816-4e49-ac49-d6ae5d9f67b3',
            label: 'Comune di Nuraxinieddu',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '6290628c-ce81-484b-b529-73f0b1806f7e',
            label: 'Comune di Siddi',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '63637dcf-446e-40d5-8a91-b4b6b4c31222',
            label: 'Comune di Teulada',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '65821616-426d-485c-bb83-4ea60c863b92',
            label: 'Alghero',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '6652b537-0da7-4625-b7ba-9b32316bfde6',
            label: 'Uras',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '66f22d8e-9250-4c26-b7e1-4924d73440cb',
            label: 'Comune di Sinnai',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '6771a870-74c9-4fba-808a-82a0d2e3eeac',
            label: 'Comune di Tadasuni',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '6771f596-634b-4c80-a293-2955101f1c8c',
            label: 'Tresnuraghes',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '67becabc-31d4-4822-9884-978c049b512a',
            label: 'Nuraxinieddu',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '6a17130c-5053-470d-8fbf-f22be634393a',
            label: 'Comune di Borore',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '6a32b986-9db7-4cef-b99e-fe1357f89262',
            label: 'Donadio, Enrico',
            typeOfEntity: 'persona'
        },
        count: 2
    },
    {
        entity: {
            id: '6a43d18f-8389-4406-b74e-10be02a74f49',
            label: 'Comune di Pabillonis',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '6b762694-d597-4114-8e27-7dc2b150fb45',
            label: 'Comune di Girasole',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '6bcfc45b-b4f2-4ba2-bc3e-2cc8e929b896',
            label: 'Comune di Tuili',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '6bd0d5f1-69f2-47c4-98d8-a5621e13f508',
            label: 'Comune di Serdiana',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '6cba0dcf-be96-4a8d-9a62-480eada41b42',
            label: 'Comune di Tonara',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '6d235b87-e89b-404f-b5c2-12aefa94d41e',
            label: 'Alghero',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '6d48c548-0e38-493f-8f11-506cdc2c86c9',
            label: 'La Plaia (Cagliari)',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '6d4aca3b-abd4-412a-b859-9a3e746ffea9',
            label: 'Settimo San Pietro',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '6dcf2006-24f7-44fb-a547-10abffc387d2',
            label: 'Sassu, Bruno',
            typeOfEntity: 'persona'
        },
        count: 2
    },
    {
        entity: {
            id: '6e585e1c-a7de-4ec1-8cf8-cacb17548806',
            label: 'Comune di Domusnovas',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '6fa86799-6251-4fb9-9287-92c81523f0ee',
            label: 'Comune di Isili',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '700a1e3d-e7b3-4f4b-b468-c10c454f2e81',
            label: 'Comune di Cuglieri',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '7140b61d-11c3-420c-8450-7fc43c4e4e22',
            label: 'Siliqua',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '719966d1-423f-4f4a-8100-60af0465e98e',
            label: 'Comune di Pirri',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '72694706-f304-4191-bf21-a1dbe29b35bc',
            label: 'Belvì',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '731723b2-92ab-45f6-be93-333433c81a2e',
            label: 'Domusnovas',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '735164a7-829f-49ad-a50f-65973bebb87c',
            label: "Sant'Antioco",
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '738a436a-216f-48e9-8ecc-7d4325418e07',
            label: 'Sanluri',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '739a71a0-4000-40a5-accf-d653fb10073f',
            label: 'Comune di Ortacesus',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '764e381b-4905-421c-b476-360b63e1fcd1',
            label: 'Suelli',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '77481267-96a9-46b0-a237-bc7a027aa695',
            label: 'Collinas',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '777d2ea8-4eba-46e4-92e1-4c7ef411aaf5',
            label: 'Comune di Silius',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '77a69de1-d3cf-48cf-aff7-6c30f02ad101',
            label: 'Comune di Musei',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '7830b5bc-b8f4-4773-82bb-54c7dcfd94c8',
            label: 'Comune di Calasetta',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '785bf0ad-2555-4863-8bdd-bf582cfefce3',
            label: 'Comune di Samassi',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '78f40c1f-1b8a-4e6b-ba2e-89cda0346ab5',
            label: 'Comune di Suelli',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '796bd77f-a6cb-49a9-8950-a27857170ea5',
            label: 'Pabillonis',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '79779c96-3196-490d-b132-54fca1004c0f',
            label: 'Bortigiadas',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '7a32e2bc-8568-4b6e-b4ba-7c99201f45c7',
            label: 'Comune di Villamar',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '7a51f255-0127-47f2-bb4a-4187ad887aac',
            label: 'Comune di Bidonì',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '7bdd45e1-a8e8-4bca-8af5-977d992f7661',
            label: 'Mura, Telesforo',
            typeOfEntity: 'persona'
        },
        count: 2
    },
    {
        entity: {
            id: '7d178e9e-3b7d-4ad7-8b48-3e0326c17eab',
            label: 'Laconi',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '7d616c07-8305-46ed-ab3a-ae3a922415cc',
            label: 'Comune di Narcao',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '7e250601-8e53-46aa-aa74-34e26135f117',
            label: 'Turri',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '7f49c6cc-6ede-46ad-a7f7-e9169994f000',
            label: 'Comune di Sorradile',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '807fedbb-d3a1-46b1-907b-3e842d1e4080',
            label: 'Comune di Abbasanta',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '80e5464b-3c2d-4c0e-81b8-11e1edf5185f',
            label: 'Mereu, Salvatorangelo',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '80fcc39d-38b3-4d85-81bd-5fea2823da9b',
            label: 'Comune di Noragugume',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '817a048b-753e-4e3b-b1c2-b8b4b07c338f',
            label: 'Comune di Sestu',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '8244ff5b-1015-4769-9685-05524358f17e',
            label: 'Samassi',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '84c8baf8-713a-42ec-9670-d50a11dde290',
            label: 'Ardara',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '8564c7f4-c239-4d73-b10b-300a428f8d9d',
            label: 'Capoterra',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '85fef45f-9fe9-4f5f-b8cd-26309fbb2501',
            label: 'Sorgono',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '8770b818-a8d3-4331-b896-730f857bd699',
            label: 'Comune di Ballao',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '88f1707f-fa15-4d2b-b135-aedf49c8b1ae',
            label: 'Comune di Figu',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '8a27c740-539d-49bf-84c7-43dbb2e24297',
            label: 'Comune di Villaspeciosa',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '8a87458f-f2c3-4da3-96d4-72bf02541f50',
            label: 'Vallermosa',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '8ad8d116-9fe0-4701-8064-444584e6e2d9',
            label: 'Comune di Dualchi',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '8b4fe3fb-8734-4375-ae8f-567b0124aa9e',
            label: 'Genoni',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '8c3e0ec8-9cdd-427e-9e7f-cb27670aefc1',
            label: 'Comune di Laconi',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '8d0f240c-b474-49c2-a83d-2414ce10d44c',
            label: 'Villasor',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '8d35055f-0b6b-4f77-8be3-aa82bdf70605',
            label: 'Masala, Fiorenzo',
            typeOfEntity: 'persona'
        },
        count: 2
    },
    {
        entity: {
            id: '8f84ca75-5b0f-4502-94be-a5f1c59041cc',
            label: 'Siris',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '9226a719-743e-4e16-ae61-fe7aaf3fe202',
            label: 'Comune di Las Plassas',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '9278adee-e6fc-4a40-b83c-bd4e909a237d',
            label: 'IRC spa Soc Franki',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '92842961-9d54-41fb-880c-99d316489bfa',
            label: 'Comune di Simala',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '931a4a94-ebf4-4b48-a489-253795bcf594',
            label: 'Comune di Vallermosa',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '932a792a-ce76-4ffc-904e-9c70960f2814',
            label: 'Comune di Selegas',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '94274509-c069-475f-98a0-21f8cb199f0d',
            label: 'Comune di Elmas',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '95c85d8e-a130-4a57-87c4-bed991c13047',
            label: 'Caria, Francesco',
            typeOfEntity: 'persona'
        },
        count: 2
    },
    {
        entity: {
            id: '95ee873e-a890-41b0-a6dc-276c709bcc54',
            label: 'Selegas',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '965b2c1e-4b4f-4e83-a1fc-1bf5234e29f9',
            label: 'Atzara',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '97295860-2ab9-4c7c-9d1b-dd0911e16f8d',
            label: 'Setzu',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '978b5d3a-96c8-4a28-87e9-4007b0926caa',
            label: 'Maracalagonis',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '97d5f929-cedf-46a7-b907-6bc6ca1414b3',
            label: 'Assemini',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '993a6b2c-a2df-45ea-bbb9-09d96c5d2f11',
            label: 'Comune di Capoterra',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '99c327ee-96c4-46a6-bbcf-7f4ebdbcf13a',
            label: 'Garau, Giorgio',
            typeOfEntity: 'persona'
        },
        count: 2
    },
    {
        entity: {
            id: '99d27a2b-347d-46c8-9113-a8be4a20a003',
            label: 'Bosa',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '9a2c2973-db7a-4ccc-bc17-31e4d1222308',
            label: 'Halen Manca, Enrica',
            typeOfEntity: 'persona'
        },
        count: 2
    },
    {
        entity: {
            id: '9b9366fb-8a41-4c5f-b0ee-c5c91e19aad4',
            label: 'Comune di Sicci San Biagio',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '9ce6c07a-b1e5-4b02-9204-d68b7241a1e8',
            label: 'Paperoga',
            typeOfEntity: 'persona'
        },
        count: 2
    },
    {
        entity: {
            id: '9d0e898b-7691-429d-9341-5ccdce50f1ad',
            label: 'Comune di Villasalto',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '9d607a5a-d7f4-440c-9694-642c7234733e',
            label: 'Sassu, Bruno',
            typeOfEntity: 'persona'
        },
        count: 2
    },
    {
        entity: {
            id: '9d6d32ea-cb23-4d63-9ade-523d26d5228f',
            label: 'Silius',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '9e7133f4-d5b8-4956-8352-f5e8bb631167',
            label: 'Comune di Sorgono',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '9e8c05e9-d61a-4b58-a1ad-a2e55da463c7',
            label: 'Mogorella',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '9f23de23-9ac3-428f-ae30-4688f80a1ef2',
            label: 'Comune di Genoni',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '9f8c2d1b-8618-4b97-ac80-5bbf6d8daae8',
            label: 'Borore',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: '9fdb1731-1d60-49e9-8c27-0d59562bb2f2',
            label: 'Comune di Escolca',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: '9fe3d6b7-b4aa-4fb6-aeb9-3dd71a3fa640',
            label: 'Narcao',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'a07f6226-5315-42bf-9886-7a54141a04ad',
            label: 'Comune di Baradili',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: 'a1a662ce-a547-44dc-80dd-34f75115789a',
            label: 'Comune di Villagrande',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: 'a1bfc6d4-1299-43d3-b9da-e19e3c69c291',
            label: 'Comune di Goni',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: 'a3d588ee-019e-48f7-afab-a6f4baf54cf4',
            label: 'Baressa',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'a4fb47f5-ac6c-4aca-a483-2b8cfafb6fe4',
            label: 'Baunei',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'a5818575-75e0-40ac-bd85-6758f979064e',
            label: 'Ardara',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'a6638ef7-e851-4cf8-b3bc-194947caa6bb',
            label: 'Mandas',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'a6b44a01-96cd-47f7-859d-ec034efb3fa2',
            label: 'Comune di Guamaggiore',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: 'a6b629eb-c317-4b67-9f9a-cf0e383b70a7',
            label: 'Masainas',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'a705dfd9-7cf7-400e-a8ba-9bd05c7f19da',
            label: 'Comune di Uras',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: 'a86a0bfe-a949-41ed-96f1-1c3ac828d823',
            label: 'Nurri',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'a9360535-ba5d-41ba-8595-9715b8650997',
            label: 'Comune di Portoscuso',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: 'a9b4332c-d582-4087-9445-358da92fdf01',
            label: 'Serramanna',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'aa0740b0-2555-40d2-b44d-ce69a5d3ee85',
            label: 'Comune di Monserrato',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: 'aa09b418-5a42-45e6-b64b-ff780650ab72',
            label: 'Lanusei',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'aa309230-6e17-4bc8-861f-d292519e2fc9',
            label: 'SNIA Viscosa spa',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: 'aa76cb11-3448-47d1-881a-bb46ec87874e',
            label: 'Ortacesus',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'ab760144-a8a0-420b-9e4b-21c9b33bc92d',
            label: 'Villagrande',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'ab79eeaa-ca97-483b-bfd3-d2a53abdf44f',
            label: 'Comune di Gadoni',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: 'aca40c2d-bab5-459e-8c8c-b0425cf4ff97',
            label: 'Donori',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'ad1e24d2-954d-4139-b2cf-14290d018944',
            label: 'Comune di Nuoro',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: 'ada99450-4978-43d8-9cf0-888ca394a2c3',
            label: 'Comune di Maracalagonis',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: 'af1a5853-f8e5-4609-8459-3724ac546d96',
            label: 'Bauladu',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'af4c25fb-29e1-409b-a0a0-b281a2fb8a46',
            label: 'Comune di Sini',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: 'af8a7989-b676-493f-919c-6e2600cbe409',
            label: 'Zoccheddu, Guido',
            typeOfEntity: 'persona'
        },
        count: 2
    },
    {
        entity: {
            id: 'afc0c1d8-804e-4d51-9fb0-378e179795ec',
            label: 'Piu, Ettore',
            typeOfEntity: 'persona'
        },
        count: 2
    },
    {
        entity: {
            id: 'b1179d68-4522-4841-87e7-c04adde87100',
            label: 'Sennariolo',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'b1a85fe0-c55d-4fdd-8fc2-fd927f9611eb',
            label: 'Tramatza',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'b1df6557-0b68-49f6-ad78-351ade4a4283',
            label: 'Comune di Pimentel',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: 'b21a2105-a1a4-4a52-997c-d0eb9e841d1b',
            label: 'Comune di Fluminimaggiore',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: 'b27d2cfe-bbcb-427b-9458-1c4de87ccba5',
            label: 'Triei',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'b2c2ed66-3b80-46e3-81f8-55394dbc2760',
            label: 'Comune di Assemini',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: 'b3e831ed-4064-4c78-a4f4-f0b01ea7a15c',
            label: 'Comune di Monastir',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: 'b4be9cee-f383-40f2-9eac-261847452102',
            label: 'Comune di Soleminis',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: 'b5c2f911-f3d1-4761-a4c7-df7ad8f18df1',
            label: 'Escolca',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'b773fb82-f9bd-4b18-b8ba-3867940ccbe4',
            label: 'Villanova Tulo',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'b853e476-b91e-4a92-aa2d-6464b7fef243',
            label: 'Masala, Ignazio',
            typeOfEntity: 'persona'
        },
        count: 2
    },
    {
        entity: {
            id: 'b8bd794e-be3c-473d-a20a-92891c906e9a',
            label: 'Guspini',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'b9fbe5e2-d795-46bd-9385-379a34883903',
            label: 'Ussassai',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'ba8a1db4-d153-47e9-adfe-ec78312d6f9d',
            label: 'Comune di Bulzi',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: 'bad5414c-c10c-47f0-8e21-78abfd48672c',
            label: 'Todde, Annibale',
            typeOfEntity: 'persona'
        },
        count: 2
    },
    {
        entity: {
            id: 'bad919d6-43b7-4aab-98c4-d73661dc9a87',
            label: 'Muravera',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'bc09c942-9a28-4880-b86e-9272fb009106',
            label: 'Boroneddu',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'bc2465f4-78ad-4ccc-aaaf-f1b0058b3a83',
            label: 'Comune di Guspini',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: 'bc758217-9fee-4ae8-82b1-63b57250fdc5',
            label: 'San Gregorio (Sinnai)',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'bce109c3-198f-41a9-9b07-03a99805334e',
            label: 'Comune di Donigala Fenughedu',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: 'bdc43384-054d-44d8-8c8a-a4219c5c887b',
            label: 'Gergei',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'bdd3a1e3-ea44-413e-9cc1-6aded0ac6afc',
            label: 'Goni',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'bef0e42e-1628-43f9-b144-4b0d79f37596',
            label: 'Calasetta',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'bf01b065-a198-4729-bfa2-a67298ec3338',
            label: 'Comune di San Basilio',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: 'bf5d2382-a2ab-4acc-bfad-d81b2d32d355',
            label: 'Garau, Giorgio',
            typeOfEntity: 'persona'
        },
        count: 2
    },
    {
        entity: {
            id: 'c033213e-6eff-4f7e-bbfc-9a690a069ed2',
            label: 'Comune di Mandas',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: 'c0703bfd-6219-4482-bbc5-3dbbaae088b9',
            label: 'Cuglieri',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'c13c2c23-16a6-499f-a87c-a83dd4ea2a8e',
            label: 'Noragugume',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'c21d43bb-f975-4de4-a4f4-7da722746d97',
            label: 'Nughedu Santa Vittoria',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'c31ee7b7-1b31-46cd-a171-e5e164f721e0',
            label: 'Aidomaggiore',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'c54b69c0-4ccb-4ec9-bdb1-5c459ac72904',
            label: 'Sarroch',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'c64825aa-962d-499f-aef2-c0d502094971',
            label: 'Assessorato ai lavori pubblici e trasporti',
            typeOfEntity: 'organizzazione'
        },
        count: 2
    },
    {
        entity: {
            id: 'c6e9f10f-faf0-4418-864f-d1973223ebfd',
            label: 'Pau',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'c8a7e56f-3c7c-45f9-8b49-a9e8f8c2dbc8',
            label: 'Zeddiani',
            typeOfEntity: 'luogo'
        },
        count: 2
    },
    {
        entity: {
            id: 'c90cf600-bb4f-4a68-a32c-107e20edc4cc',
            label: 'Masala, Antonio Salvatore',
            typeOfEntity: 'persona'
        },
        count: 2
    },
    {
        entity: {
            id: 'ccc8cc66-689a-42fb-8c02-cd0e22d9d879',
            label: 'Villamar',
            typeOfEntity: 'luogo'
        },
        count: 2
    }
];
const BUBBLECHART_MOCK = {
    containerId: 'bubbleChartContainer',
    width: 500,
    height: 500,
    // shuffle: false,
    transition: 750,
    sizeRange: [0.5, 500],
    colorMatch: {
        domain: ['persona', 'luogo', 'organizzazione', 'cosa notevole'],
        range: ['#4d8df3', '#f2d04c', '#c99245', '#6cb286']
    },
    fontRendering: {
        label: {
            family: 'Verdana, Geneva, sans-serif',
            weight: 'light'
        },
        counter: {
            family: 'Consolas, monospace',
            weight: 'normal'
        },
    },
    data: ɵ0,
};

const CAROUSEL_MOCK = {
    containerId: 'carousel-root',
    classes: 'demo',
    libOptions: {
        count: 1,
        move: 1,
        // touch: true,
        // mode: 'align',
        buttons: true,
        dots: true,
        rewind: true,
        autoplay: 0,
        animation: 500,
    },
    slides: [
        {
            classes: 'example-class',
            items: [
                { text: 'Cum sociis natoque penatibus<br /> et magnis dis parturient montes, nascetur ridiculus mus.' },
                { title: 'Lorem Donec sed odio dui.' },
                { text: '<i>Morbi leo risus, porta ac consectetur ac</i>, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.' },
                {
                    metadata: [
                        { key: 'Metadato 1', value: 'Valore 1' },
                        { key: 'Metadato 2', value: 'Valore 2' },
                    ]
                },
                {}
            ],
            action: {
                text: 'Action',
                anchor: {
                    payload: 'first-button',
                }
            },
            background: {
                video: {
                    url: 'http://www.giulioandreini.it/galassia-ariosto/galassia-ariosto-home-carousel.mp4',
                    poster: 'https://placeimg.com/640/480/arch/grayscale',
                    height: 334,
                    width: 640,
                }
            }
        }, {
            classes: 'example-class',
            items: [
                { text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.' },
                { title: 'Lorem Donec sed odio dui.' },
                { text: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.' },
                {
                    metadata: [
                        { key: 'Metadato 1', value: 'Valore 1' },
                        { key: 'Metadato 2', value: 'Valore 2' },
                    ]
                },
                {}
            ],
            action: {
                text: 'Action',
                anchor: {
                    payload: 'second-button',
                }
            },
            background: {
                video: {
                    url: 'http://www.giulioandreini.it/galassia-ariosto/galassia-ariosto-home-carousel.mp4',
                    poster: 'https://placeimg.com/640/480/arch/grayscale',
                    height: 334,
                    width: 640,
                }
            }
        }, {
            items: [
                { title: 'La regina della notte' },
                { text: 'Il flauto magico' },
                {
                    metadata: [
                        { key: 'Regia di ', value: 'Roberto di Simone' },
                        { value: '1955' }
                    ]
                },
                {}
            ],
            action: {
                text: 'IL COSTUME >',
                anchor: {
                    payload: 'third-button'
                }
            },
            background: {
                image: 'https://placeimg.com/800/400/nature/grayscale'
            }
        }, {
            items: [
                { text: '"La vendetta dell\'inferno ribolle nel mio cuore, Morte e disperazione m\'infiamman tutt\'intorno!"' },
                { title: 'La regina della notte' },
                { text: 'Il flauto magico' },
                {
                    metadata: [
                        { key: 'Regia di ', value: 'Roberto di Simone' },
                        { value: '1955' }
                    ]
                },
                {}
            ],
            action: {
                text: 'IL COSTUME >',
                anchor: {
                    payload: 'fourth-button'
                }
            },
            background: {
                image: 'https://placeimg.com/800/400/nature/grayscale'
            }
        }, {
            items: [
                { title: 'UNA COLLEZIONE UNICA. OLTRE 30MILA COSTUMI CREATI AD ARTE DAI MAESTRI FIORENTINI PER LE SCENE PIU PRESTIGIOSE' }
            ],
            background: {
                color: 'tomato'
            }
        }
    ],
};

const ɵ0$1 = [['2019-08-01', '770.17'], ['2019-08-02', '645.03'],
    ['2019-08-03', '709.32'], ['2019-08-04', '708.11'],
    ['2019-08-05', '706.59'], ['2019-08-06', '607.28'],
    ['2019-08-07', '494.59'], ['2019-08-08', '636.81'],
    ['2019-08-09', '709.04'], ['2019-08-10', '717.31'],
    ['2019-08-11', '805.61'], ['2019-08-12', '758.60'],
    ['2019-08-13', '612.82'], ['2019-08-14', '608.90'],
    ['2019-08-15', '734.68'], ['2019-08-16', '838.54'],
    ['2019-08-17', '692.88']], ɵ1 = [['2019-08-01', '927.04'], ['2019-08-02', '944.66'],
    ['2019-08-03', '860.84'], ['2019-08-04', '867.28'],
    ['2019-08-05', '947.55'], ['2019-08-06', '798.94'],
    ['2019-08-07', '757.66'], ['2019-08-08', '729.57'],
    ['2019-08-09', '679.58'], ['2019-08-10', '618.78'],
    ['2019-08-11', '805.61'], ['2019-08-12', '791.18'],
    ['2019-08-13', '913.78'], ['2019-08-14', '608.90'],
    ['2019-08-15', '611.88'], ['2019-08-16', '744.02'],
    ['2019-08-17', '600.46']];
const CHART_MOCK = {
    containerId: 'test-Chart',
    libOptions: {
        chart: {
            height: 550,
            width: 1500,
            type: 'area',
            toolbar: { show: true }
        },
        dataLabels: { enabled: false },
        colors: ['rgba(163,55,119, 1)', 'rgba(146,93,255, 1)'],
        fill: {
            colors: ['#a33777', '#925DFF'],
            gradient: { opacityFrom: 0.5, opacityTo: 0.1 }
        },
        stroke: { curve: 'straight', width: [2, 1] },
        series: [
            {
                name: 'Reddish value',
                data: ɵ0$1
            },
            {
                name: 'Purple value',
                data: ɵ1
            }
        ],
        grid: {
            borderColor: '#e7e7e7',
            strokeDashArray: 3,
            xaxis: { lines: { show: true } }
        },
        markers: { size: 3, hover: { size: 6 } },
        xaxis: {
            axisBorder: { show: true, color: '#f4f6fc' },
            labels: {},
            type: 'datetime',
            tickAmount: 6
        },
        yaxis: [
            {
                show: true,
                showAlways: false,
                opposite: false,
                reversed: false,
                logarithmic: false,
                forceNiceScale: false,
                floating: false,
                labels: {
                    show: true,
                    minWidth: 0,
                    maxWidth: 160,
                    offsetX: 0,
                    offsetY: 0,
                    rotate: 0,
                    padding: 20,
                    style: { colors: [], fontSize: '11px', cssClass: '' }
                },
                axisBorder: {
                    show: true, color: '#f4f6fc', offsetX: 0, offsetY: 0
                },
                axisTicks: {
                    show: false, color: '#78909C', width: 6, offsetX: 0, offsetY: 0
                },
                title: {
                    text: 'P Totale °C', rotate: 90, offsetY: 0, offsetX: 0, style: { fontSize: '11px', cssClass: '' }
                },
                tooltip: { enabled: false, offsetX: 0 },
                crosshairs: { show: true, position: 'front', stroke: { color: '#b6b6b6', width: 1, dashArray: 0 } }
            }
        ],
        legend: { show: true },
        tooltip: {},
        annotations: { yaxis: [], xaxis: [], points: [] }
    }
};

const CONTENT_PLACEHOLDER_MOCK = {
    blocks: [
        { classes: 'thumb-placeholder' },
        { classes: 'title-placeholder' },
        { classes: 'text-placeholder' },
        { classes: '' },
        { classes: '' },
        { classes: '' },
        { image: 'https://i.imgur.com/xTiLRNe.png', alt: 'block-placehodler' },
        { image: 'https://i.imgur.com/xTiLRNe.png', classes: 'image-placeholder-test' }
    ]
};

const DATA_WIDGET_MOCK = {
    icon: 'n7-icon-earth',
    text: '497 <em>Dipendenti</em>',
    subtitle: {
        text: 'In Crescita',
        icon: 'n7-icon-caret-up',
        value: '9%',
        payload: 'view percent tooltip '
    },
    payload: 'view earth tooltip',
    classes: 'is-positive'
};

const DATEPICKER_MOCK = {
    id: 'datepicker',
    libOptions: {
        dateFormat: 'Y-m-d',
        mode: 'range',
    },
};

const FACET_HEADER_MOCK = {
    iconLeft: 'n7-icon-earth',
    text: 'Persone',
    additionalText: '24.319',
    iconRight: 'n7-icon-angle-left',
    classes: 'is-expanded',
    payload: 'header',
};

const FACET_YEAR_RANGE_MOCK = {
    inDate: {
        text: 'From',
        payload: 'in-date',
        placeholder: 'choose',
        options: [
            { value: '1900' },
            { value: '1910' },
            { value: '1920' },
            { value: '1930' },
            { value: '1940' },
            { value: '1950' },
            { value: '1960' },
            { value: '1970' },
            { value: '1980' },
            { value: '1990' },
            { value: '2000' },
            { value: '2010' },
            { value: '2019' },
        ],
    },
    outDate: {
        text: 'To',
        payload: 'out-date',
        placeholder: 'choose',
        classes: 'is-disabled',
        options: [],
    },
};

const FACET_MOCK = {
    classes: 'facet-wrapper',
    sections: [{
            classes: 'facet-section-1',
            inputs: [
                {
                    type: 'checkbox', id: 'checkbox-1', label: 'Email', payload: 'email', classes: 'is-active'
                },
                {
                    type: 'checkbox', id: 'checkbox-2', label: 'Check 2', payload: 'check2'
                },
                {
                    type: 'checkbox', id: 'checkbox-3', label: 'Check 3', payload: 'check3', checked: true
                },
                {
                    type: 'checkbox', id: 'checkbox-4', label: 'Check 4', payload: 'check4'
                },
                {
                    type: 'checkbox', id: 'checkbox-5', label: 'Check 5', payload: 'check5', disabled: true
                }
            ]
        }, {
            classes: 'facet-section-2',
            inputs: [{
                    type: 'text',
                    id: 'input-text-1',
                    label: 'SEARCH LABEL',
                    // disabled: true,
                    placeholder: 'Search',
                    icon: 'n7-icon-search',
                    inputPayload: 'search-input',
                    enterPayload: 'search-enter',
                    iconPayload: 'search-icon',
                }]
        }, {
            // n7-facet__section-input-links viene usato per stilare il wrapper dei links
            classes: 'facet-section-3 n7-facet__section-input-links',
            inputs: [
                {
                    type: 'link', icon: 'n7-icon-archive', text: 'First filter', counter: 0, payload: 'first filter', classes: 'is-active'
                },
                {
                    type: 'link', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', counter: 18, payload: 'second filter',
                },
                {
                    type: 'link', icon: 'n7-icon-archive', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', counter: 18, payload: 'second filter',
                },
                {
                    type: 'link', text: 'third filter', counter: 11, payload: 'third filter',
                },
                {
                    type: 'link', text: 'lorem', counter: 7, payload: 'fourth filter',
                },
                {
                    type: 'link', text: 'last filter', counter: 31, payload: 'last filter',
                },
                {
                    type: 'link', icon: 'n7-icon-archive', text: 'First filter', counter: 1232143, payload: 'first filter', classes: 'is-active'
                },
                {
                    type: 'link', text: 'second filter', counter: 18, payload: 'second filter',
                },
                {
                    type: 'link', text: 'third filter', counter: 11, payload: 'third filter', classes: 'is-active'
                },
                {
                    type: 'link', text: 'fourth filter', counter: 7, payload: 'fourth filter',
                },
                {
                    type: 'link', text: 'last filter', counter: 3, payload: 'last filter',
                }
            ]
        }, {
            classes: 'facet-section-4',
            inputs: [{
                    type: 'select',
                    id: 'input-select-1',
                    // disabled: true,
                    options: [
                        { value: '', label: 'Select...' },
                        { value: 1, label: 'Option 1' },
                        { value: 2, label: 'Option 2', disabled: true },
                        { value: 3, label: 'Option 3', selected: true },
                        { value: 4, label: 'Option 4' },
                    ],
                    payload: 'select',
                },
                {
                    type: 'select',
                    id: 'input-select-1',
                    // disabled: true,
                    options: [
                        { value: '', label: 'Select...' },
                        { value: 1, label: 'Option 1' },
                        { value: 2, label: 'Option 2' },
                        { value: 3, label: 'Option 3', selected: true },
                        { value: 4, label: 'Option 4' },
                    ],
                    payload: 'select',
                }]
        }]
};

const FOOTER_MOCK = {
    columns: [
        {
            classes: 'col-class',
            title: 'Arianna Web, archivio digitale online',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit elit nunc, at porta ex accumsan id. Fusce quis lobortis sem, non ornare tellus.',
            images: [
                {
                    url: 'https://via.placeholder.com/80',
                    alttext: 'Logo 1',
                    anchor: { payload: 'logo 1' }
                },
                {
                    url: 'https://via.placeholder.com/80',
                    alttext: 'Logo 2',
                    anchor: { href: 'https://via.placeholder.com/80' }
                }
            ]
        },
        {
            title: 'Privacy e info',
            links: [
                {
                    text: 'Info su Arianna Web',
                    anchor: { href: 'https://www.google.it', target: '_blank' },
                    classes: 'link-class'
                },
                {
                    text: 'Privacy policy',
                    anchor: { payload: 'privacy' },
                    classes: 'link-class'
                },
                {
                    text: 'Cookie policy',
                    anchor: { payload: 'cookie' }
                },
                {
                    text: 'Termini e condizioni',
                    anchor: { payload: 'terms' }
                }
            ]
        },
        {
            text: 'Arianna Web is powered by Hyperborea.<br><a href="#" target="_blank">www.hyperborea.com</a>',
        }
    ]
};

const HEADER_MOCK = {
    logo: {
        image: 'https://placeimg.com/128/128/any/grayscale',
        title: 'DataViz',
        subtitle: 'Data visualization',
        anchor: {
            payload: 'https://www.netseven.it/',
            href: '/examples'
        }
    },
    nav: {
        items: [
            { text: 'Home', icon: 'n7-icon-home', anchor: { href: '/examples', target: '_blank' } },
            { text: 'Stuff', icon: 'n7-icon-home', anchor: { payload: '/stuff' } },
            { text: 'Other Stuff', icon: 'n7-icon-home', anchor: { payload: '/other-stuff' } },
            {
                text: 'Dropdown',
                anchor: { payload: '/' },
                icon: 'n7-icon-home',
                subnav: [
                    { text: 'Sublevel 1', icon: 'n7-icon-home', anchor: { href: '/examples' } },
                    {
                        text: 'Sublevel 2 Lorem ipsum dolor sit amet',
                        anchor: { payload: '/sublevel-2' },
                        icon: 'n7-icon-home'
                    },
                    { text: 'Sublevel 3', icon: 'n7-icon-home', anchor: { payload: '/sublevel-3' } }
                ]
            },
            { text: 'Cats', icon: 'n7-icon-home', anchor: { payload: '/cats' } }
        ]
    },
    search: {
        hint: 'Search (hint)',
        payload: 'search payload'
    },
    actions: [
        {
            icon: 'n7-icon-bell',
            badge: {
                text: '200'
            },
            anchor: { href: '/examples' }
        },
        {
            icon: 'n7-icon-facebook',
            anchor: { payload: '/facebook' }
        }
    ],
    buttons: [
        {
            text: 'Log In',
            icon: 'n7-icon-bell',
            anchor: { href: '/examples' },
            classes: 'n7-btn'
        },
        {
            text: 'Sign Up',
            icon: 'n7-icon-bell',
            anchor: { href: '/examples' },
            classes: 'n7-btn n7-btn-cta'
        },
        {
            text: 'Other',
            anchor: { href: '/examples' },
            classes: 'n7-btn'
        }
    ],
    user: {
        img: 'https://placeimg.com/150/150/any/people',
        name: 'Massimiliano Spinosa',
        anchor: { href: '/user', target: '_blank' }
    },
    menuToggle: {
        open: {
            payload: 'mobile-open'
        },
        close: {
            payload: 'mobile-close'
        }
    }
};

const HERO_MOCK = {
    title: "Il più <em>bell'archivio</em> che tu abbia mai visto",
    text: `
  <p>La <strong>Fondazione Cerratelli</strong> è uno spazio espositivo che raccoglie un'importante 
  collezione di costumi <em>teatrali e cinematografici</em>. Sua sede si trova dal 3 dicembre 
  2011 presso la villa Roncioni a Pugnano, frazione del comune di San Giuliano Terme.</p>
  `,
    input: {
        placeholder: 'Cerca quello che vuoi',
        icon: 'n7-icon-search1',
        payload: 'input'
    },
    button: {
        text: 'Cerca',
        anchor: {
            payload: 'button',
            href: '/examples',
            target: '_blank'
        }
    },
    backgroundImage: 'https://placeimg.com/1000/480/nature',
    // backgroundImage: null,
    image: 'https://placeimg.com/600/600/nature'
};

const IMAGE_VIEWER_TOOLS_MOCK = {
    images: [
        { thumb: 'http://placekitten.com/200/130', payload: 'img1-payload' },
        { thumb: 'http://placekitten.com/90/180', payload: 'img2-payload' },
        { thumb: 'http://placekitten.com/90/110', payload: 'img3-payload' },
        { thumb: 'http://placekitten.com/200/130', payload: 'img4-payload' },
        { thumb: 'http://placekitten.com/90/180', payload: 'img5-payload' },
        { thumb: 'http://placekitten.com/90/110', payload: 'img6-payload' },
        { thumb: 'http://placekitten.com/200/130', payload: 'img7-payload' },
        { thumb: 'http://placekitten.com/90/180', payload: 'img8-payload' },
        { thumb: 'http://placekitten.com/90/110', payload: 'img9-payload' },
        { thumb: 'http://placekitten.com/200/130', payload: 'img10-payload' },
        { thumb: 'http://placekitten.com/90/180', payload: 'img11-payload' },
        { thumb: 'http://placekitten.com/90/110', payload: 'img12-payload' },
        { thumb: 'http://placekitten.com/200/130', payload: 'img13-payload' },
        { thumb: 'http://placekitten.com/90/180', payload: 'img14-payload' },
        { thumb: 'http://placekitten.com/90/110', payload: 'img15-payload' },
        { thumb: 'http://placekitten.com/200/130', payload: 'img16-payload' },
        { thumb: 'http://placekitten.com/90/180', payload: 'img17-payload' },
        { thumb: 'http://placekitten.com/90/110', payload: 'img18-payload' },
    ],
    description: 'Spazio da riempire con una descrizione su trigger evento<br>Per testare le thumbnails <b>cambiare le flag in isVisible nel mock</b><br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget egestas mi, at maximus risus. Vivamus quis eros vel orci hendrerit luctus a elementum massa. Ut posuere semper consectetur. Phasellus nec sem non justo pharetra commodo. Ut eget leo id odio accumsan ullamcorper. Morbi porttitor, eros ornare blandit fringilla, ex augue elementum leo, ac porttitor enim ligula at magna. Vivamus a massa eu lacus porttitor cursus. Aliquam elementum tellus eget ornare pellentesque. Pellentesque lacinia egestas auctor. Sed hendrerit sollicitudin erat, vitae condimentum urna maximus hendrerit. Pellentesque ut elit diam. Quisque tempor libero varius laoreet ornare. Vivamus ultricies luctus lorem eu aliquam.',
    controls: {
        description: {
            icon: 'n7-icon-info1',
            anchor: { payload: 'toggle-description' }
        },
        thumbs: {
            icon: 'n7-icon-images',
            anchor: { payload: 'toggle-thumbs' }
        },
        closedescription: {
            icon: 'n7-icon-close-circle',
            anchor: { payload: 'close-description' }
        }
    },
    isVisible: {
        description: false,
        thumbnails: true
    },
    classes: 'n7-image-viewer-tools__test',
    initial: 0,
};

const ɵ0$2 = (viewer) => viewer;
const IMAGE_VIEWER_MOCK = {
    images: [
        { type: 'image', url: 'http://placekitten.com/1920/1080', buildPyramid: false },
        { type: 'image', url: 'http://placekitten.com/500/600', buildPyramid: false },
        { type: 'image', url: 'http://placekitten.com/700/400', buildPyramid: false }
    ],
    viewerId: 'seadragon-viewer',
    libOptions: {
        /* SHOW GROUP */
        showNavigator: false,
        autoHideControls: false,
        /* SHOW BUTTONS */
        showRotationControl: false,
        showSequenceControl: true,
        showHomeControl: true,
        showZoomControl: true,
        /* SEQUENCE */
        sequenceMode: true,
        navigationControlAnchor: 'TOP_RIGHT',
    },
    _setViewer: ɵ0$2,
};

const INNER_TITLE_MOCK = {
    icon: { id: 'n7-icon-file3', style: { color: '#2E5BFF' } },
    // icon: 'n7-icon-file3', // simple icon
    image: 'https://picsum.photos/200',
    title: {
        main: {
            text: 'Main text',
            classes: 'bold',
        },
        secondary: {
            text: 'Secondary text',
            classes: 'italic',
        }
    },
    tools: 'Tools text',
    actions: {
        select: {
            label: 'Sort',
            options: [
                { text: 'Price', value: 'price' },
                { text: 'Alphabetic', value: 'alphabetic', selected: true },
                { text: 'By Date', value: 'by-date', disabled: true },
            ],
            payload: 'select-sorting'
        },
        search: {
            placeholder: 'Search',
            payload: 'search-input',
            button: {
                text: 'SEARCH',
                payload: 'search-button',
            }
        },
        buttons: [
            {
                text: 'BUTTON 1',
                anchor: {
                    payload: 'btn1',
                },
                icon: 'n7-icon-file3'
            },
            {
                text: 'BUTTON 2',
                anchor: {
                    href: '/examples'
                },
                classes: 'n7-btn-cta'
            },
        ]
    }
};

const INPUT_CHECKBOX_MOCK = {
    classes: 'checkbox-classes',
    checkboxes: [{
            id: 'check-00',
            label: 'Email',
        }, {
            id: 'check-01',
            label: 'A normal check'
        }, {
            id: 'check-02',
            label: 'A disabled check',
            disabled: true,
        }, {
            id: 'check-03',
            label: 'A checked check',
            checked: true,
        }, {
            id: 'check-04',
            label: 'A forced "ON" check',
            checked: true,
            disabled: true,
        }]
};

const INPUT_LINK_MOCK = {
    links: [
        {
            icon: 'n7-icon-archive', text: 'First filter', counter: 0, payload: 'first filter', classes: 'is-active'
        },
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', counter: 18, payload: 'second filter',
        },
        {
            icon: 'n7-icon-archive', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', counter: 18, payload: 'second filter',
        },
        {
            text: 'third filter', counter: 11, payload: 'third filter',
        },
        {
            text: 'lorem', counter: 7, payload: 'fourth filter',
        },
        {
            text: 'last filter', counter: 31, payload: 'last filter',
        },
        {
            icon: 'n7-icon-archive', text: 'First filter', counter: 1232143, payload: 'first filter', classes: 'is-active'
        },
        {
            text: 'second filter', counter: 18, payload: 'second filter',
        },
        {
            text: 'third filter', counter: 11, payload: 'third filter', classes: 'is-active'
        },
        {
            text: 'fourth filter', counter: 7, payload: 'fourth filter',
        },
        {
            text: 'last filter', counter: 3, payload: 'last filter',
        }
    ]
};

const INPUT_SELECT_MOCK = {
    id: 'input-select-1',
    options: [
        { value: '', label: 'Select...' },
        { value: 1, label: 'Option 1' },
        { value: 2, label: 'Option 2' },
        { value: 3, label: 'Option 3', selected: true },
        { value: 4, label: 'Option 4' },
    ],
    payload: 'select',
};

const INPUT_TEXT_MOCK = {
    id: 'input-text-1',
    label: 'SEARCH LABEL',
    placeholder: 'Search',
    icon: 'n7-icon-search',
    inputPayload: 'search-input',
    enterPayload: 'search-enter',
    iconPayload: 'search-icon',
};

const ITEM_PREVIEW_MOCK = {
    image: 'https://placeimg.com/600/600/nature',
    color: '#4D8FF2',
    title: 'Dummy title text',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    metadata: [
        {
            title: 'Group 1 <em>HTML Title</em>',
            classes: 'group1-class',
            items: [
                {
                    icon: 'n7-icon-home', label: 'name', value: '<em>HTML Value</em>', classes: 'n7-category-place'
                },
                { value: 'value' }
            ]
        },
        {
            title: 'Group 2',
            classes: '',
            items: [
                { icon: 'n7-icon-home', value: '7', classes: 'n7-category-place' },
                { icon: 'n7-icon-home', value: '2', classes: 'n7-category-family' },
                { icon: 'n7-icon-home', value: '4' },
                { icon: 'n7-icon-home' }
            ]
        },
        {
            classes: 'group3-class',
            items: [
                { icon: 'n7-icon-home', value: '2', classes: 'n7-category-place' },
                { icon: 'n7-icon-home', value: '1' },
                { icon: 'n7-icon-home', value: '7' }
            ]
        }
    ],
    anchor: {
        payload: 'https://www.netseven.it/',
        href: '/examples',
        target: '_blank'
    },
    classes: 'is-vertical has-image' // leave it empty for default horizontal layout or 'is-overlay'
};

const LOADER_MOCK = {
    classes: 'loader-test'
};

const MAP_MOCK = {
    containerId: 'map-canvas',
    tileLayers: [{
            url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
            options: {}
        }],
    initialView: {
        center: [51.505, -0.09],
        zoom: 13
    },
    markers: [
        {
            coords: [51.505, -0.09],
            template: 'This is the center of the map',
            title: 'London'
        }, {
            coords: [51.495, -0.1],
            template: 'Elephant and castle',
        }, {
            coords: [51.46687084654015, -0.2130156755447388],
            template: 'Putney bridge',
        }
    ]
};

/**
 * Mock Codebase
 */
const METADATA_VIEWER_MOCK = {
    classes: 'example-class',
    group: [{
            title: 'Metadata group lv1',
            items: [
                { label: 'Label', value: '<p>Secondo quanto stabilito dall\'articolo 121 della Costituzione della Repubblica italiana e dallo Statuto della Regione Sardegna (articolo 34 della legge costituzionale 3/1948), la Giunta è l\'organo esecutivo regionale che ha il compito di governare e amministrare la </p>' },
                { label: 'Label' },
            ],
            classes: 'example-class2',
            group: [
                {
                    title: 'Metadata group lv2',
                    items: [
                        { label: 'Label', value: 'Value' },
                    ],
                    group: [
                        {
                            group: [
                                {
                                    title: 'Metadata group lv3',
                                    items: [
                                        { label: 'Label', value: 'Value' },
                                        { label: 'Label', value: 'Value' },
                                        { label: 'Label', value: 'Value' },
                                        { label: 'Label', value: 'Value' },
                                    ],
                                }
                            ]
                        },
                        {
                            group: [
                                {
                                    title: 'Metadata group lv3',
                                    items: [
                                        { label: 'Label', value: 'Value' },
                                        { label: 'Label', value: 'Value' },
                                        { label: 'Label', value: 'Value' },
                                        { label: 'Label', value: 'Value' },
                                    ],
                                }
                            ]
                        }
                    ]
                },
                {
                    title: 'Metadata group lv1',
                    items: [
                        { label: 'Label', value: 'Value' },
                        { label: 'Label', value: 'Value' },
                    ],
                    group: [
                        {
                            title: 'Metadata group lv2',
                            items: [
                                { label: 'Label', value: 'Value' }
                            ]
                        }
                    ]
                }
            ]
        }]
};
/**
 * Mock Arianna Web
 */
//
// export const METADATA_VIEWER_MOCK: MetadataViewerData = {
// }
//
//

const NAV_MOCK = {
    items: [
        { text: 'Home', anchor: { href: 'https://google.com', target: '_blank', payload: 'clicked!' } },
        {
            text: 'Single level',
            anchor: { payload: 'clicked!' },
            image: 'http://placekitten.com/200/300',
        },
        {
            text: 'Single level 2',
            anchor: { payload: 'clicked!' },
            image: 'http://placekitten.com/10/10',
        },
        {
            text: 'Test SVG',
            anchor: { payload: 'clicked!' },
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Test.svg',
        },
        {
            text: 'Stuff',
            image: 'http://placekitten.com/200/300',
            icon: 'n7-icon-archway',
            anchor: { href: '/examples', target: '_blank', payload: 'clicked!' }
        },
        { text: 'Other stuff', anchor: { payload: 'clicked!' } },
        { text: 'Cats', anchor: { href: '/examples', target: '_blank', payload: 'clicked!' } }
    ],
};

const PAGINATION_MOCK = {
    first: { classes: 'is-disabled', text: 'First', anchor: { href: '/first' } },
    prev: { classes: 'is-disabled', anchor: { payload: 'prev' } },
    next: { text: 'Next', anchor: { href: '/next' } },
    last: { text: 'Last', anchor: { payload: 'last' } },
    links: [
        { text: '1', classes: 'is-active', anchor: { href: '/link-1', target: '_blank' } },
        { text: '2', anchor: { payload: 'page 2' } },
        { text: '3', anchor: { payload: 'page 3' } },
        { text: '4', anchor: { payload: 'page 4' } },
        { text: '5', anchor: { payload: 'page 5' } },
    ],
    select: {
        label: 'Numero di risultati',
        options: [
            { text: '10' },
            { text: '25', selected: true },
            { text: '50', disabled: true },
        ],
        payload: 'select',
    }
};

const SIDEBAR_HEADER_MOCK = {
    iconLeft: 'n7-icon-tree-icon',
    text: 'Albero di navigazione',
    additionalText: '10.324.592',
    iconRight: 'n7-icon-angle-left',
    classes: 'is-expanded',
    payload: 'header',
};

const SIGNUP_MOCK = {
    login: {
        email: {
            classes: 'email-extra-class',
            id: 'login-email',
            label: 'Email',
            inputType: 'email',
            payload: 'login-email'
        },
        password: {
            id: 'login-pwd',
            label: 'Password',
            inputType: 'password',
            show: {
                icon: 'far fa-eye',
                label: 'Mostra password',
                payload: 'login-show-pwd',
            },
            payload: 'login-pwd'
        },
        /* forgotPassword: {
          title: 'vai a recupero password',
          label: 'Password dimenticata?',
          payload: 'forgot-pwd',
        }, */
        submit: {
            label: 'Entra',
            payload: 'login-submit',
        },
    },
    signup: {
        name: {
            id: 'signup-name',
            label: 'Nome e cognome',
            inputType: 'text',
            error: 'Il campo Nome e Cognome è obbligatorio!',
            payload: 'signup-name'
        },
        email: {
            id: 'signup-email',
            label: 'Email',
            inputType: 'email',
            payload: 'signup-email'
        },
        password: {
            id: 'signup-pwd',
            label: 'Password',
            inputType: 'password',
            hint: 'La password deve avere fra i 6 e i 10 caratteri e contenere almeno una lettera maiuscola',
            show: {
                icon: 'far fa-eye',
                label: 'Mostra password',
                payload: 'signup-show-pwd',
            },
            payload: 'signup-pwd',
            error: 'Attenzione le password sono diverse',
        },
        rePassword: {
            id: 'signup-repwd',
            label: 'Ripeti Password',
            inputType: 'password',
            payload: 'signup-repwd',
            error: 'Attenzione le password sono diverse',
        },
        submit: {
            label: 'Entra',
            payload: 'signup-submit',
            error: 'Errore di invio dei dati al server',
        },
        footer: {
            label: 'Hai già un account?',
            action: {
                label: 'Entra',
                payload: 'go-login'
            }
        }
    },
    forgotPassword: {
        description: 'Inserisci l\'indirizzo email lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae lacus eleifend, vestibulum neque nec, dictum eros. Nunc vel risus leo',
        email: {
            id: 'forgot-password-email',
            label: 'Email',
            inputType: 'email',
            payload: 'forgotPassword-email'
        },
        submit: {
            label: 'Reset password',
            payload: 'forgotPassword-submit',
        },
        footer: {
            label: 'Entra nella piattaforma',
            action: {
                label: 'Entra',
                payload: 'go-app'
            }
        }
    }
};

const SIMPLE_AUTOCOMPLETE_MOCK = {
    suggestion: [
        { text: 'surfdome', anchor: { payload: 'dome', href: '/examples' } },
        { text: 'surfer joe', anchor: { payload: 'er joe', href: 'https://google.it', target: '_blank' } },
        { text: 'surface', anchor: { payload: 'ace' } },
        { text: 'surfcorner', anchor: { payload: 'corner' } },
        { text: 'windsurf', anchor: { payload: 'wind' } },
        { text: 'bodysurf', anchor: { payload: 'body' } },
        { text: 'autosurf', anchor: { payload: 'auto' } },
        { text: 'sidesurf', anchor: { payload: 'side' } },
        { text: 'ffixsurf', anchor: { payload: 'prefixsuffix' } },
    ],
    classes: 'surfing-autocomplete'
};

const TABLE_MOCK = {
    classes: 'test-layout-table',
    head: [
        {
            classes: 'HEADER',
            cells: [
                {
                    classes: 'CONTENT',
                    content: 'DATA - ORA'
                },
                {
                    classes: 'CONTENT',
                    content: 'SEZIONE'
                },
                {
                    classes: 'CONTENT',
                    content: 'PARAMETRO'
                },
                {
                    classes: 'CONTENT',
                    content: 'VALORE'
                }
            ]
        }
    ],
    body: [
        {
            classes: 'BODY',
            _meta: 'A',
            cells: [
                {
                    classes: 'CONTENT',
                    // _meta: '1x1',
                    payload: 'B',
                    content: '<span style="color:red;">10/01/2019 - 10:23</span>',
                    type: 'html'
                },
                {
                    classes: 'CONTENT',
                    // _meta: '1x2',
                    content: 'Ingresso Industriale',
                    type: 'html'
                },
                {
                    classes: 'bold',
                    // _meta: '1x3',
                    content: '<span style="color:blue;">&bullet;</span> N_NH4',
                    type: 'html'
                },
                {
                    content: '9 mg/l',
                    // _meta: '1x4',
                    type: 'html'
                }
            ]
        },
        {
            classes: 'BODY',
            _meta: 'B',
            cells: [
                {
                    classes: 'CONTENT',
                    _meta: '2x1',
                    payload: 'C',
                    content: '<span style="color:red;">12/01/2019 - 20:54</span>',
                    type: 'html'
                },
                {
                    classes: 'CONTENT',
                    _meta: '2x2',
                    content: 'Ingresso Civile',
                    type: 'html'
                },
                {
                    classes: 'bold',
                    _meta: '2x3',
                    content: '<span style="color:purple;">&bullet;</span> Ossigeno mg/l',
                    type: 'html'
                },
                {
                    content: '100 mg/l',
                    _meta: { id: '2x4', inputId: '_text_input_2x4' },
                    payload: { id: '2x4' },
                    type: 'html'
                }
            ]
        },
        {
            classes: 'BODY',
            _meta: 'C',
            cells: [
                {
                    classes: 'CONTENT',
                    _meta: '3x1',
                    payload: 'C',
                    content: '<span style="color:red;">9/01/2019 - 4:12</span>',
                    type: 'html'
                },
                {
                    classes: 'CONTENT',
                    _meta: '3x2',
                    content: 'Preaccumulo',
                    type: 'html'
                },
                {
                    classes: 'bold',
                    _meta: '3x3',
                    content: '<span style="color:purple;">&bullet;</span> Ossigeno mg/l',
                    type: 'html' // 'altro'
                },
                {
                    content: '100 mg/l',
                    _meta: { id: '3x4', inputId: '_text_input_3x4' },
                    payload: { id: '3x4' },
                    type: 'input:text'
                }
            ]
        },
        {
            classes: 'BODY',
            _meta: 'D',
            cells: [
                {
                    classes: 'CONTENT',
                    _meta: '4x1',
                    content: '8/01/2019 - 3:52',
                    type: 'html'
                },
                {
                    classes: 'CONTENT',
                    _meta: '4x2',
                    content: 'Preaccumulo',
                    type: 'html'
                },
                {
                    classes: 'bold',
                    // _meta: '4x3',
                    content: '<span style="color:green;">&bullet;</span> Redox V',
                    type: 'html'
                },
                {
                    classes: 'input-test',
                    content: '231 V',
                    type: 'html',
                    _meta: { id: 'NPT', inputId: '_text_input_NPT' },
                    payload: { id: 'NPT' }
                }
            ]
        }
    ]
};

const TAG_MOCK = {
    label: 'label: ',
    text: 'text',
    icon: 'n7-icon-close',
    payload: 'tag-payload',
    classes: 'tag1-class',
};

const TEXT_VIEWER_MOCK = {
    // TODO: update with mock values
    endpoint: 'http://staging.teipublisher.netseven.it/exist/apps/tei-publisher',
    docs: [
        {
            xml: 'test/seniles.xml',
            odd: 'test',
            id: 'seniles'
        },
        {
            xml: 'test/seniles.xml',
            odd: 'test',
            id: 'seniles2',
            channel: 'altrochannel'
        },
    ],
    facsimile: {
        uri: 'http://127.0.0.1:8182/iiif/2/',
        scans: ['001r.tif', '001v.tif', '002r.tif', '002v.tif', '003r.tif', '003v.tif', '004r.tif', '004v.tif', '005r.tif', '005v.tif', '006r.tif', '006v.tif', '007r.tif', '007v.tif', '008r.tif', '008v.tif', '009r.tif', '009v.tif', '010r.tif', '010v.tif', '011r.tif']
    }
};

const ɵ0$3 = (f, s) => f.content.charAt(0) === s.content.charAt(0), ɵ1$1 = (data, element) => `<div class="tooltip">${element.title}</div>`, ɵ2 = (timeline) => timeline;
const TIMELINE_MOCK = {
    containerID: 'demo-timeline',
    libOptions: {
        height: '500px',
        locale: 'it_IT',
        cluster: {
            // titleTemplate: '{count}',
            // fitOnDoubleClick: true,
            clusterCriteria: ɵ0$3
        },
        showTooltips: false,
        tooltip: {
            followMouse: false,
            template: ɵ1$1
        },
        width: '100%',
        minHeight: '350px',
        maxHeight: '800px',
        // zoomMax: 31557600000, // one year
        zoomFriction: 8
    },
    dataSet: [
        {
            id: 1,
            content: 'item 1',
            start: '2014-04-20'
        },
        {
            id: 2,
            content: 'item 2',
            start: '2014-04-14'
        },
        {
            id: 3,
            content: 'item 3',
            start: '2014-04-18'
        },
        {
            id: 4,
            content: 'item 4',
            start: '2014-04-16',
            end: '2014-04-19'
        },
        {
            id: 5,
            content: 'item 5',
            start: '2014-04-25'
        },
        {
            id: 6,
            content: 'item 6',
            start: '2014-04-27',
            type: 'point'
        }
    ],
    _setInstance: ɵ2
};

const TOAST_MOCK = {
    toasts: [{
            classes: 'is-warning',
            title: 'Title',
            text: 'Questo messaggio ha soltanto un titolo e del testo, è di tipo is-warning ed ha un tempo di 15 secondi',
            closeIcon: {
                icon: 'n7-icon-close',
                payload: 'closing'
            }
        }, {
            classes: 'is-warning',
            title: 'Title',
            text: 'Questo messaggio ha soltanto un titolo e del testo, è di tipo is-warning ed ha un tempo di 15 secondi',
        }, {
            classes: 'is-success',
            title: 'Titolo e close-icon',
            closeIcon: {
                icon: 'n7-icon-close',
                payload: 'closing'
            }
        }, {
            classes: 'is-error',
            text: 'Questo è un messaggio di tipo is-error con un pulsante che chiede all\'utente la conferma di presa visione.',
            actions: [{
                    text: 'HO CAPITO',
                    payload: 'ho capito',
                    classes: 'n7-btn-light'
                }]
        }, {
            classes: 'is-warning',
            text: 'Questo messaggio non ha titolo, è di tipo is-warning e seguono due pulsanti.',
            actions: [{
                    text: 'NO',
                    payload: 'NO'
                }, {
                    text: 'SI',
                    payload: 'SI',
                    classes: 'n7-btn-cta'
                }]
        }, {
            classes: 'is-warning',
            title: 'Title',
            text: 'Questo messaggio ha soltanto un titolo e del testo, è di tipo is-warning ed ha un tempo di 15 secondi',
        }
    ]
};

const TOOLTIP_CONTENT_MOCK = {
    title: 'Title',
    text: '<span>subtitle or text for the <strong>tooltip content</strong> component</span>',
    image: 'https://placeimg.com/150/150/tech/grayscale',
    actions: [
        {
            text: 'ClickMe',
            anchor: {
                payload: 'ClickMe'
            }
        }, {
            text: 'DontClickHim',
            anchor: {
                payload: 'DontClickHim'
            }
        }
    ]
};

const TREE_MOCK = {
    items: [
        {
            text: 'Collezione d\'arte',
            classes: 'is-collapsed',
            anchor: {
                href: 'https://google.it',
                target: '_blank'
            },
        },
        {
            text: 'Centro archivi',
            anchor: {
                href: '/home',
                target: '_blank'
            },
            classes: 'is-expanded',
            items: [
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle'
                    },
                    text: '5+1AA Agenzia di Architettura',
                    classes: 'is-collapsed',
                    anchor: { payload: '' },
                    iconright: 'n7-icon-images'
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-down',
                        payload: 'toggle'
                    },
                    text: 'ABDR Architetti Associati',
                    classes: 'is-expanded is-active',
                    anchor: { payload: '' },
                    items: [
                        {
                            toggle: {
                                icon: 'n7-icon-angle-down',
                                payload: 'toggle'
                            },
                            text: '5+1AA Agenzia di Architettura',
                            classes: 'is-expanded',
                            anchor: { payload: '' },
                            items: [
                                {
                                    toggle: {
                                        icon: 'n7-icon-angle-right',
                                        payload: 'toggle'
                                    },
                                    text: '5+1AA Agenzia di Architettura',
                                    classes: 'is-collapsed',
                                    anchor: { payload: '' }
                                },
                                {
                                    toggle: {
                                        icon: 'n7-icon-angle-down',
                                        payload: 'toggle'
                                    },
                                    text: 'ABDR Architetti Associati',
                                    classes: 'is-expanded',
                                    anchor: { payload: '' },
                                    items: [
                                        {
                                            toggle: {
                                                icon: 'n7-icon-angle-down',
                                                payload: 'toggle'
                                            },
                                            text: '5+1AA Agenzia di Architettura',
                                            classes: 'is-expanded',
                                            anchor: { payload: '' },
                                            items: [
                                                {
                                                    toggle: {
                                                        icon: 'n7-icon-angle-right',
                                                        payload: 'toggle'
                                                    },
                                                    text: '5+1AA Agenzia di Architettura',
                                                    classes: 'is-collapsed',
                                                    anchor: { payload: '' }
                                                },
                                                {
                                                    toggle: {
                                                        icon: 'n7-icon-angle-right',
                                                        payload: 'toggle'
                                                    },
                                                    text: 'ABDR Architetti Associati',
                                                    classes: 'is-collapsed',
                                                    anchor: { payload: '' }
                                                },
                                            ]
                                        },
                                        {
                                            toggle: {
                                                icon: 'n7-icon-angle-right',
                                                payload: 'toggle'
                                            },
                                            text: 'ABDR Architetti Associati',
                                            classes: 'is-collapsed',
                                            anchor: { payload: '' }
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            toggle: {
                                icon: 'n7-icon-angle-right',
                                payload: 'toggle'
                            },
                            text: 'ABDR Architetti Associati',
                            classes: 'is-collapsed',
                            anchor: { payload: '' }
                        },
                    ]
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle'
                    },
                    text: 'AWP',
                    classes: 'is-collapsed',
                    anchor: { payload: '' }
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle'
                    },
                    text: 'BOERI Cini',
                    classes: 'is-collapsed',
                    anchor: { payload: '' }
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle'
                    },
                    text: 'CAMPO BAEZA Alberto',
                    classes: 'is-collapsed',
                    anchor: { payload: '' }
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle'
                    },
                    text: 'CASSANI Matilde',
                    classes: 'is-collapsed',
                    anchor: { payload: '' }
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle'
                    },
                    text: 'GUERRI Danilo',
                    classes: 'is-collapsed',
                    anchor: { payload: '' }
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle'
                    },
                    text: 'Has childs, but is closed!',
                    classes: 'is-collapsed',
                    anchor: { payload: '' },
                    items: [
                        {
                            icon: 'n7-icon-file3',
                            text: 'Child: Cinema teatro Augusteo e stazione centrale della funicolare, Napoli ([1926] - [1927])',
                            anchor: { payload: '' },
                        },
                        {
                            classes: 'is-active',
                            icon: 'n7-icon-file3',
                            text: 'Child: Stadio comunale G.Berta, Firenze ([1929] - [1932])',
                            anchor: { payload: '' },
                        },
                        {
                            icon: 'n7-icon-file3',
                            text: 'Child: Monumento alla Bandiera, Roma (1931)',
                            anchor: { payload: '' },
                        },
                        {
                            img: 'http://placeimg.com/25/25/arch/grayscale',
                            text: 'Child: Brevetto hangar circolare con piattaforma anulare rotante (1932)',
                            anchor: { payload: '' },
                        },
                        {
                            img: 'http://placeimg.com/25/25/arch/grayscale',
                            text: 'Child: Stadio da 120.000 posti, Roma ([1933])',
                            anchor: { payload: '' },
                            classes: 'is-active'
                        },
                        {
                            icon: 'n7-icon-file3',
                            text: 'Child: Magazzino ([1934])',
                            anchor: { payload: '' },
                            classes: 'is-active',
                        },
                        {
                            icon: 'n7-icon-file3',
                            text: 'Child: Aviorimesse, Orvieto (TR), Orbetello (GR), Torre del Lago (LU), Marsala (TP), Trapani ([1935] - 1941)',
                            anchor: { payload: '' },
                        },
                    ]
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-down',
                        payload: 'toggle'
                    },
                    text: 'NERVI Pier Luigi',
                    classes: 'is-expanded',
                    anchor: { payload: '' }
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-down',
                        payload: 'toggle'
                    },
                    text: 'Attività Professionale',
                    classes: 'is-expanded',
                    anchor: { payload: '' },
                    items: [
                        {
                            icon: 'n7-icon-file3',
                            text: 'Cinema teatro Augusteo e stazione centrale della funicolare, Napoli ([1926] - [1927])',
                            anchor: { payload: '' },
                        },
                        {
                            classes: 'is-active',
                            icon: 'n7-icon-file3',
                            text: 'Stadio comunale G.Berta, Firenze ([1929] - [1932])',
                            anchor: { payload: '' },
                        },
                        {
                            icon: 'n7-icon-file3',
                            text: 'Monumento alla Bandiera, Roma (1931)',
                            anchor: { payload: '' },
                        },
                        {
                            img: 'http://placeimg.com/25/25/arch/grayscale',
                            text: 'Brevetto hangar circolare con piattaforma anulare rotante (1932)',
                            anchor: { payload: '' },
                        },
                        {
                            img: 'http://placeimg.com/25/25/arch/grayscale',
                            text: 'Stadio da 120.000 posti, Roma ([1933])',
                            anchor: { payload: '' },
                            classes: 'is-active'
                        },
                        {
                            icon: 'n7-icon-file3',
                            text: 'Magazzino ([1934])',
                            anchor: { payload: '' },
                            classes: 'is-active',
                        },
                        {
                            icon: 'n7-icon-file3',
                            text: 'Aviorimesse, Orvieto (TR), Orbetello (GR), Torre del Lago (LU), Marsala (TP), Trapani ([1935] - 1941)',
                            anchor: { payload: '' },
                        },
                    ]
                },
            ]
        },
    ]
};

const WIZARD_MOCK = {
    items: [
        {
            number: 1,
            text: 'First step',
            payload: '/',
            classes: ''
        },
        {
            number: 2,
            text: 'Second step',
            payload: '/',
            classes: 'is-active'
        },
        {
            number: 3,
            text: 'Third step',
            payload: '/',
            classes: ''
        },
        {
            number: 4,
            text: 'Fourth step',
            payload: '/',
            classes: ''
        },
    ]
};

/*
 * Public API Surface of dv-components-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ADVANCED_AUTOCOMPLETE_MOCK, ALERT_MOCK, AdvancedAutocompleteComponent, AlertComponent, AnchorWrapperComponent, BREADCRUMBS_MOCK, BUBBLECHART_MOCK, BreadcrumbsComponent, BubbleChartComponent, CAROUSEL_MOCK, CHART_MOCK, CONTENT_PLACEHOLDER_MOCK, CarouselComponent, ChartComponent, ContentPlaceholderComponent, DATA_WIDGET_MOCK, DATEPICKER_MOCK, DataWidgetComponent, DatepickerComponent, DvComponentsLibModule, FACET_HEADER_MOCK, FACET_MOCK, FACET_YEAR_RANGE_MOCK, FOOTER_MOCK, FacetComponent, FacetHeaderComponent, FacetYearRangeComponent, FooterComponent, HEADER_MOCK, HERO_MOCK, HeaderComponent, HeroComponent, IMAGE_VIEWER_MOCK, IMAGE_VIEWER_TOOLS_MOCK, INNER_TITLE_MOCK, INPUT_CHECKBOX_MOCK, INPUT_LINK_MOCK, INPUT_SELECT_MOCK, INPUT_TEXT_MOCK, ITEM_PREVIEW_MOCK, ImageViewerComponent, ImageViewerToolsComponent, InnerTitleComponent, InputCheckboxComponent, InputLinkComponent, InputSelectComponent, InputTextComponent, ItemPreviewComponent, LOADER_MOCK, LoaderComponent, MAP_MOCK, METADATA_VIEWER_MOCK, MapComponent, MetadataViewerComponent, NAV_MOCK, NavComponent, PAGINATION_MOCK, PaginationComponent, SIDEBAR_HEADER_MOCK, SIGNUP_MOCK, SIMPLE_AUTOCOMPLETE_MOCK, SidebarHeaderComponent, SignupComponent, SimpleAutocompleteComponent, TABLE_MOCK, TAG_MOCK, TEXT_VIEWER_MOCK, TIMELINE_MOCK, TOAST_MOCK, TOOLTIP_CONTENT_MOCK, TREE_MOCK, TableComponent, TagComponent, TextViewerComponent, TimelineComponent, ToastComponent, TooltipContentComponent, TreeComponent, WIZARD_MOCK, WizardComponent, ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=n7-frontend-components.js.map
