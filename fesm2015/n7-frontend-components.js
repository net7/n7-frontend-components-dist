import { CommonModule } from '@angular/common';
import { select } from 'd3-selection';
import { forceSimulation, forceX, forceY, forceCollide } from 'd3-force';
import ApexCharts from 'apexcharts/dist/apexcharts.common.js';
import { Component, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlertComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
}
AlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-alert',
                template: "<div class=\"n7-alert {{data.classes || ''}} {{ data.icon ? 'has-icon' : '' }}\" *ngIf=\"data\" >\r\n    <span class=\"n7-alert__icon {{data.icon}}\" *ngIf=\"data.icon\"></span>\r\n    <div class=\"n7-alert__text\" [innerHTML]=\"data.text\">\r\n    </div>\r\n    <span class=\"n7-alert__close-button n7-icon-close\" \r\n          *ngIf=\"data.hasCloseButton\" \r\n          (click)=\"onClick(data.payload)\"></span>\r\n</div>"
            }] }
];
AlertComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BreadcrumbsComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
}
BreadcrumbsComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-breadcrumbs',
                template: "<div *ngIf=\"data\" class=\"n7-breadcrumbs {{ data.classes || '' }}\">\r\n    <nav class=\"n7-breadcrumbs__nav\">\r\n        <ol class=\"n7-breadcrumbs__list\">\r\n            <li *ngFor=\"let item of data.items\" class=\"n7-breadcrumbs__item {{ item.classes || '' }}\">\r\n                <a class=\"n7-breadcrumbs__label\" (click)=\"onClick(item.payload)\">{{ item.label }}</a>\r\n            </li>\r\n        </ol>\r\n    </nav>\r\n</div>\r\n"
            }] }
];
BreadcrumbsComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BubbleChartComponent {
    constructor() {
        this._loaded = false;
        this.selectedBubbles = 0;
        this.bubbles = null;
        this.genericBubble = null;
        this.bubbleChart = null;
        this.maxBubblesSelected = -1;
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        if (!this.data)
            return;
        if (this.data.reset === true) {
            this.data.reset = false;
            this._loaded = false;
        }
        if (this._loaded)
            return;
        this._loaded = true;
        setTimeout((/**
         * @return {?}
         */
        () => this.makeBubbleChart()));
    }
    /**
     * Makes the whole bubble chart
     * @return {?}
     */
    makeBubbleChart() {
        select(`#${this.data.containerId}`).selectAll("*").remove();
        /** @type {?} */
        var pot = document.getElementById(`${this.data.containerId}`);
        pot.style.width = this.data.containerWidth + 'px';
        pot.style.height = this.data.containerHeight + 'px';
        this.bubbleChart = select(`#${this.data.containerId}`)
            .append('svg')
            .attr('width', this.data.containerWidth)
            .attr('height', this.data.containerHeight);
        this.bubbles = this.data.bubblesData;
        if (this.data.maxBubblesSelected)
            this.maxBubblesSelected = this.data.maxBubblesSelected;
        this.selectedBubbles = 0;
        this.data.bubblesData.forEach((/**
         * @param {?} b
         * @return {?}
         */
        (b) => {
            if (b.selected)
                this.selectedBubbles++;
        }));
        this.initBubbles();
        if (this.data.isForceSimulationEnabled)
            this.setBubbleChartSimulation();
        this.update();
        if (this.bubbleChart)
            this.bubbleChart.selectAll(`#${this.data.containerId} g circle, #${this.data.containerId} g text`).on('click', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => {
                if (d.selectable) {
                    if (!d.selected)
                        this.selectbubbleIfPossible(d);
                }
            }));
        if (this.bubbleChart)
            this.bubbleChart.selectAll('circle[bubblesType="x_inner_circle"], text[bubblesType="x_inner_label"]').on('click', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => {
                if (d.selectable) {
                    if (!d.selected)
                        this.selectbubbleIfPossible(d);
                    else {
                        d.selected = false;
                        this.selectedBubbles--;
                        this.update();
                        if (!this.emit)
                            return;
                        this.emit('click', { source: "close", bubblePayload: d.payload });
                    }
                }
            }));
    }
    /**
     * @private
     * @param {?} bubble
     * @return {?}
     */
    selectbubbleIfPossible(bubble) {
        if (this.maxBubblesSelected < 0 || this.selectedBubbles < this.maxBubblesSelected) {
            bubble.selected = true;
            this.selectedBubbles++;
            this.update();
            if (!this.emit)
                return;
            this.emit('click', { source: "bubble", bubblePayload: bubble.payload });
        }
    }
    /**
     * Visually updates the bubble chart
     * @return {?}
     */
    update() {
        if (!this.data)
            return;
        if (this.genericBubble && this.genericBubble.attr) {
            this.genericBubble.attr('cx', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => { return d.x = Math.max(d.radius, Math.min(this.data.containerWidth - d.radius, d.x)); }))
                .attr('cy', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => { return d.y = Math.max(d.radius, Math.min(this.data.containerHeight - d.radius, d.y)); }));
        }
        if (this.data && this.data.bubblesData)
            this.data.bubblesData.forEach((/**
             * @param {?} c
             * @return {?}
             */
            (c) => {
                c.texts.forEach((/**
                 * @param {?} tx
                 * @return {?}
                 */
                tx => {
                    /** @type {?} */
                    var txt = this.bubbleChart.select(`text[bubblesElId=${tx.id}]`);
                    txt.attr("dy", tx.y_function);
                    txt.attr("dx", tx.x_function);
                }));
            }));
        if (this.bubbleChart) {
            this.bubbleChart.selectAll('circle[bubblesType="x_inner_circle"]')
                .attr("cy", (/**
             * @param {?} d
             * @return {?}
             */
            (d) => d.y + (d.radius / 2)))
                .attr("cx", (/**
             * @param {?} d
             * @return {?}
             */
            (d) => d.x))
                .attr("opacity", (/**
             * @param {?} d
             * @return {?}
             */
            (d) => (d.selected ? 1 : 0)));
        }
        if (this.bubbleChart) {
            this.bubbleChart.selectAll('text[bubblesType="x_inner_label"]')
                .attr("dy", (/**
             * @param {?} d
             * @return {?}
             */
            (d) => d.y + (d.radius / 2) + 6))
                .attr("dx", (/**
             * @param {?} d
             * @return {?}
             */
            (d) => d.x))
                .attr("opacity", (/**
             * @param {?} d
             * @return {?}
             */
            (d) => (d.selected ? 1 : 0)));
        }
    }
    /**
     * Initialized the chart's bubbles
     * @private
     * @return {?}
     */
    initBubbles() {
        if (this.bubbleChart)
            this.genericBubble = this.bubbleChart.selectAll(`#${this.data.containerId} g`)
                .data(this.bubbles)
                .enter()
                .append('g')
                .attr("bubblesElId", (/**
             * @param {?} d
             * @return {?}
             */
            (d) => d.id))
                .append('circle')
                .attr('r', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => Math.max(0, d.radius - 5.05)))
                .attr("cx", (/**
             * @param {?} d
             * @return {?}
             */
            (d) => d.x))
                .attr("cy", (/**
             * @param {?} d
             * @return {?}
             */
            (d) => d.y))
                .attr('padding', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => 50))
                .attr("class", (/**
             * @param {?} d
             * @return {?}
             */
            (d) => d.classes))
                .style('fill', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => d.color));
        if (this.data && this.data.bubblesData && this.bubbleChart)
            this.data.bubblesData.forEach((/**
             * @param {?} c
             * @return {?}
             */
            (c) => {
                /** @type {?} */
                let group = this.bubbleChart.select(`g[bubblesElId=${c.id}]`);
                c.texts.forEach((/**
                 * @param {?} tx
                 * @return {?}
                 */
                tx => {
                    group.append("text")
                        .style("text-anchor", "middle")
                        .attr("dx", tx.x_function)
                        .attr("dy", tx.y_function)
                        .text(tx.label)
                        .attr("font-size", tx.fontSize_function)
                        .attr("fill", tx.color)
                        .attr("bubblesElId", tx.id)
                        .attr("class", tx.classes);
                }));
            }));
        if (this.bubbleChart)
            this.bubbleChart.selectAll(`#${this.data.containerId} g`)
                .append('circle')
                .attr('r', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => 10))
                .attr('padding', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => 50))
                .style('fill', "white")
                .attr('cx', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => d.x))
                .attr('cy', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => d.y))
                .attr("bubblesType", "x_inner_circle")
                .attr("class", "circle_x-inner-circle");
        if (this.bubbleChart)
            this.bubbleChart.selectAll(`#${this.data.containerId} g`)
                .append("text")
                .style("user-select", "none")
                .style("text-anchor", "middle")
                .attr("fill", "black")
                .html("&#10005;")
                .attr("font-family", "sans-serif")
                .attr("font-size", 15)
                .attr("bubblesType", "x_inner_label")
                .attr("class", "circle_x-label");
    }
    /**
     * Sets the bubble chart force simulation
     * @private
     * @return {?}
     */
    setBubbleChartSimulation() {
        /** @type {?} */
        let tmpSimulationData = (this.data && this.data.forceSimulationData ? this.data.forceSimulationData : {});
        /** @type {?} */
        var xPull = (tmpSimulationData['xPull'] ? tmpSimulationData['xPull'] : this.data.containerWidth / 2);
        /** @type {?} */
        var xPullStrength = (tmpSimulationData['xPullStrength'] ? tmpSimulationData['xPullStrength'] : -0.01);
        /** @type {?} */
        var yPull = (tmpSimulationData['yPull'] ? tmpSimulationData['yPull'] : this.data.containerHeight / 2);
        /** @type {?} */
        var yPullStrength = (tmpSimulationData['yPullStrength'] ? tmpSimulationData['yPullStrength'] : -0.01);
        /** @type {?} */
        var collisionStrength = (tmpSimulationData['collisionStrengh'] ? tmpSimulationData['collisionStrengh'] : 0.99);
        /** @type {?} */
        var collisionIterations = (tmpSimulationData['collisionIterations'] ? tmpSimulationData['collisionIterations'] : 1);
        /** @type {?} */
        var velocityDecay = (tmpSimulationData['velocityDecay'] ? tmpSimulationData['velocityDecay'] : 0.99);
        forceSimulation()
            .velocityDecay(velocityDecay)
            .force("x", forceX(xPull).strength(xPullStrength))
            .force("y", forceY(yPull).strength(yPullStrength))
            .force("collide", forceCollide().radius((/**
         * @param {?} d
         * @return {?}
         */
        (d) => d.radius)).strength(collisionStrength).iterations(collisionIterations))
            .nodes(this.bubbles)
            .on('tick', this.update.bind(this));
    }
}
BubbleChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-bubble-chart',
                template: "<div *ngIf=\"data\" class=\"n7-bubble-chart {{ data.classes || '' }}\">\r\n    <div id=\"{{ data.containerId }}\"></div>\r\n</div>"
            }] }
];
BubbleChartComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChartComponent {
    constructor() {
        this._loaded = false;
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        if (!this.data || this._loaded)
            return;
        this._loaded = true;
        setTimeout((/**
         * @return {?}
         */
        () => {
            const { containerId, libOptions } = this.data;
            /** @type {?} */
            const chart = new ApexCharts(document.querySelector(`#${containerId}`), libOptions);
            chart.render();
            if (this.data.setChart)
                this.data.setChart(chart);
        }));
    }
}
ChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-chart',
                template: "<div *ngIf=\"data\" class=\"n7-chart {{ data.classes || '' }}\">\r\n    <div id=\"{{ data.containerId }}\"></div>\r\n</div>"
            }] }
];
ChartComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FacetComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    /**
     * @param {?} payload
     * @param {?} event
     * @return {?}
     */
    onCheck(payload, event) {
        if (!this.emit)
            return;
        /** @type {?} */
        let status = event.target.checked;
        this.emit('change', { inputPayload: payload, isChecked: status });
    }
    /**
     * @param {?} payload
     * @param {?} event
     * @return {?}
     */
    onInputChange(payload, event) {
        if (!this.emit)
            return;
        /** @type {?} */
        let value = event.target.value;
        this.emit('change', { inputPayload: payload, value });
    }
    /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    onInputEnter(payload, value) {
        if (!this.emit)
            return;
        this.emit('enter', { inputPayload: payload, value });
    }
}
FacetComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-facet',
                template: "<div *ngIf=\"data\" class=\"n7-facet\">\r\n    <!-- Checkboxes -->\r\n    <div class=\"n7-facet__check-wrapper\"*ngIf=\"data.checks\">\r\n        <div *ngFor=\"let check of data.checks; let i = index\" class=\"n7-facet__check {{check.classes || ''}}\">\r\n            <input type=\"checkbox\" \r\n                   class=\"n7-facet__check-input\" \r\n                   id=\"n7-facet-check-{{i}}\"\r\n                   (change)=\"onCheck(check.payload, $event)\">\r\n            <label class=\"n7-facet__check-label\" for=\"n7-facet-check-{{i}}\">\r\n                {{ check.label }}\r\n            </label>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Search bar -->\r\n    <div class=\"n7-facet__search-wrapper\" *ngIf=\"data.input\">\r\n        <label class=\"n7-facet__search-label\" for=\"n7-facet-search-input\">\r\n            {{ data.input.label }}\r\n        </label>\r\n        <div class=\"n7-facet__search-input-wrapper\">\r\n            <input type=\"text\" \r\n                class=\"n7-facet__search-input {{data.input.classes || ''}}\" \r\n                id=\"n7-facet-search-input\"\r\n                placeholder=\"{{data.input.placeholder || ''}}\" \r\n                (input)=\"onInputChange(data.input.payload, $event)\"\r\n                (keyup.enter)=\"onInputEnter(data.input.payload, $event)\">\r\n            <span class=\"n7-facet__search-icon {{data.input.icon || ''}}\"   \r\n                *ngIf=\"data.input.icon\"\r\n                (click)=\"onClick(data.input.payload)\">\r\n            </span>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Filters -->\r\n    <div *ngIf=\"data.filters\" class=\"n7-facet__filter-wrapper\">\r\n        <div *ngFor=\"let filter of data.filters\" \r\n             class=\"n7-facet__filter {{filter.classes || ''}}\"\r\n             (click)=\"onClick(filter.payload)\">\r\n            <span *ngIf=\"filter.icon\" class=\"n7-facet__filter-icon {{filter.icon}}\"></span>\r\n            <span class=\"n7-facet__filter-text\">{{ filter.text }}</span>\r\n            <span class=\"n7-facet__filter-counter\">{{ filter.counter }}</span>\r\n        </div>\r\n    </div>\r\n</div>"
            }] }
];
FacetComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FacetHeaderComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
}
FacetHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-facet-header',
                template: "<div *ngIf=\"data\" class=\"n7-facet-header\">\r\n    <span class=\"n7-facet-header__icon-left {{ data.iconLeft }}\" *ngIf=\"data.iconLeft\">\r\n    </span>\r\n    <span class=\"n7-facet-header__title\">\r\n        {{data.text}}\r\n    </span>\r\n    <span class=\"n7-facet-header__counter\" *ngIf=\"data.additionalText\">\r\n        {{data.additionalText}}\r\n    </span>\r\n    <span *ngIf=\"data.iconRight\" class=\"n7-facet-header__icon-right {{ data.iconRight }}\"\r\n        (click)=\"onClick(data.payload)\"></span>\r\n</div>"
            }] }
];
FacetHeaderComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FacetYearRangeComponent {
    /**
     * @param {?} payload
     * @param {?} selected
     * @return {?}
     */
    onChange(payload, selected) {
        switch (payload) {
            case 'in-date':
                // find index of selected option
                /** @type {?} */
                let opts = this.data.inDate.options;
                this.data.inDate._meta = opts.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => o.value == selected)).value;
                /** @type {?} */
                let sliceIndex = opts.findIndex((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => o.value == selected))
                // make new array of possible years
                ;
                // make new array of possible years
                /** @type {?} */
                let newOptions = opts.slice(sliceIndex, opts.length)
                // give new array to second <select>
                ;
                // give new array to second <select>
                this.data.outDate.options = newOptions;
                // remove placeholder and enable second <select>
                this.data.inDate.placeholder = '';
                this.data.outDate.classes = '';
                this.data.outDate.placeholder = 'choose';
                break;
            case 'out-date':
                this.data.outDate._meta = selected;
                this.data.outDate.placeholder = '';
                // emit selected facet parameters
                this.emit({
                    from: this.data.inDate._meta,
                    to: this.data.outDate._meta,
                });
                break;
            default:
                break;
        }
    }
}
FacetYearRangeComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-facet-year-range',
                template: "<div *ngIf=\"data\" class=\"n7-facet-year-range\">\r\n\r\n    <!-- select starting year -->\r\n    <div class=\"n7-facet-year-range__in\">\r\n        <label class=\"n7-facet-year-range__in-label\">\r\n            {{ data.inDate.text }}\r\n        </label>\r\n        <select (change)=\"onChange(data.inDate.payload, $event.target.value)\"\r\n            class=\"n7-facet-year-range__in-select {{ data.inDate.classes || '' }}\">\r\n            <!-- placeholder option -->\r\n            <option *ngIf=\"data.inDate.placeholder.length > 0\" value=\"{{ data.inDate.placeholder }}\" disabled selected>\r\n                {{ data.inDate.placeholder }}\r\n            </option>\r\n            <option *ngFor=\"let opt of data.inDate.options\" value=\"{{ opt.value }}\">\r\n                {{ opt.value }}\r\n            </option>\r\n        </select>\r\n    </div>\r\n\r\n    <!-- select final year -->\r\n    <div class=\"n7-facet-year-range__out\">\r\n        <label class=\"n7-facet-year-range__out-label\">\r\n            {{ data.outDate.text }}\r\n        </label>\r\n        <select (change)=\"onChange(data.outDate.payload, $event.target.value)\"\r\n                class=\"n7-facet-year-range__out-select {{ data.outDate.classes || '' }}\"\r\n                formControlName=\"outDate\">\r\n            <!-- placeholder option -->\r\n            <option *ngIf=\"data.outDate.placeholder.length > 0\" value=\"{{ data.outDate.placeholder }}\" disabled selected>\r\n                {{ data.outDate.placeholder }}\r\n            </option>\r\n            <option *ngFor=\"let opt of data.outDate.options\" value=\"{{ opt.value }}\">\r\n                {{ opt.value }}\r\n            </option>\r\n        </select>\r\n    </div>\r\n</div>"
            }] }
];
FacetYearRangeComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * HeaderComponent <n7-header>
 *
 * \@structure
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
class HeaderComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        // console.log(type, payload);
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    /**
     * @param {?} payload
     * @param {?} keyCode
     * @param {?} value
     * @return {?}
     */
    onKeyUp(payload, keyCode, value) {
        if (!this.emit)
            return;
        this.emit('keyUp', { payload, keyCode, value });
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-header',
                template: "<header *ngIf=\"data\" class=\"n7-header {{data.classes || ''}}\">\r\n    \r\n    <!-- Logo and title -->\r\n    <div class=\"n7-header__logo-title {{data.logo.classes || ''}}\">\r\n        <a class=\"n7-header__logo-link\" (click)=\"onClick(data.logo.payload)\">\r\n            <img class=\"n7-header__logo\"\r\n                *ngIf=\"data.logo.image\"\r\n                [src]=\"data.logo.image\"\r\n                alt=\"{{ data.logo.title }}\" />\r\n            <div class=\"n7-header__title-subtitle\">\r\n                <h1 class=\"n7-header__title\">\r\n                    {{ data.logo.title }}\r\n                </h1>\r\n                <h2 class=\"n7-header__subtitle\" *ngIf=\"data.logo.subtitle\">\r\n                    {{ data.logo.subtitle }}\r\n                </h2>\r\n            </div>\r\n        </a>\r\n    </div>\r\n\r\n    <!-- Main menu -->\r\n    <nav class=\"n7-header__nav {{data.nav.classes || ''}}\" *ngIf=\"data.nav\">\r\n        <div class=\"n7-header__nav-content\">\r\n            <ul class=\"n7-header__nav-list\">\r\n                <li class=\"n7-header__nav-item {{item.classes || ''}}\" *ngFor=\"let item of data.nav.items\">\r\n                    <a class=\"n7-header__nav-link\" *ngIf=\"item.payload\" (click)=\"onClick(item.payload)\">\r\n                        <span class=\"n7-header__nav-icon {{item.icon}}\" *ngIf=\"item.icon\"></span>\r\n                        <span class=\"n7-header__nav-label\" *ngIf=\"item.text\">\r\n                            {{ item.text }}\r\n                        </span>\r\n                    </a>\r\n\r\n                    <!-- Sublevel -->\r\n                    <ul class=\"n7-header__subnav-list\" *ngIf=\"item.subnav\">\r\n                        <li class=\"n7-header__subnav-item {{subitem.classes || ''}}\" *ngFor=\"let subitem of item.subnav\">\r\n                            <a class=\"n7-header__subnav-link\" (click)=\"onClick(subitem.payload)\">\r\n                                <span class=\"n7-header__subnav-icon {{subitem.icon}}\" *ngIf=\"subitem.icon\"></span>\r\n                                <span class=\"n7-header__subnav-label\" *ngIf=\"subitem.text\">\r\n                                    {{ subitem.text }}\r\n                                </span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n\r\n    <!-- Mobile menu toggle -->\r\n    <div class=\"n7-header__mobile-menu-toggle\">\r\n        <span class=\"n7-header__mobile-menu-icon n7-icon-menu\" \r\n              (click)=\"onClick(data.menuToggle.open.payload)\"></span>\r\n    </div>\r\n\r\n    <!-- Mobile menu close -->\r\n    <span class=\"n7-header__mobile-menu-close n7-icon-close\" \r\n          (click)=\"onClick(data.menuToggle.close.payload)\"></span>\r\n\r\n    <!-- Tools: search, notifications, use profile or login/signup -->\r\n    <div class=\"n7-header__tools\">\r\n        \r\n        <div class=\"n7-header__search {{data.search.classes || ''}}\" *ngIf=\"data.search\">\r\n            <input class=\"n7-header__search-input\" \r\n                   type=\"search\" \r\n                   name=\"search\" \r\n                   placeholder=\"{{ data.search.hint || ''}}\" \r\n                   (keyup)=\"onKeyUp(data.search.payload, $event.keyCode, $event.target.value)\"/>\r\n            <button class=\"n7-header__search-btn\" type=\"submit\" (click)=\"onClick(data.search.payload)\">\r\n                <span class=\"n7-header__search-btn-label\">\r\n                    Search\r\n                </span>\r\n            </button>\r\n        </div>\r\n        \r\n        <div class=\"n7-header__actions\" *ngIf=\"data.actions\">\r\n            <div class=\"n7-header__action {{ action.classes || '' }}\" *ngFor=\"let action of data.actions\">\r\n                <span class=\"n7-header__action-icon {{ action.icon }}\" (click)=\"onClick(action.payload)\"></span>\r\n                <span class=\"n7-header__action-badge {{ action.badge.text ? 'has-text' : '' }}\" *ngIf=\"action.badge\">\r\n                    {{ action.badge.text }}\r\n                </span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"n7-header__user {{data.user.classes || ''}}\" *ngIf=\"data.user\">\r\n            <img class=\"n7-header__user-img\" \r\n                 *ngIf=\"data.user.img\" \r\n                 [src]=\"data.user.img\" \r\n                 (click)=\"onClick(data.user.payload)\"/>\r\n            <p class=\"n7-header__user-name\" *ngIf=\"data.user.name\">\r\n                <span class=\"n7-header__user-name-label\">\r\n                    {{ data.user.name }}\r\n                </span>\r\n            </p>\r\n        </div>\r\n    </div>\r\n\r\n</header>\r\n\r\n"
            }] }
];
HeaderComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HeroComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    onInputChange(payload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload: payload, value });
    }
    /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    onInputEnter(payload, value) {
        if (!this.emit)
            return;
        this.emit('enter', { inputPayload: payload, value });
    }
}
HeroComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-hero',
                template: "<section *ngIf=\"data\" class=\"n7-hero {{data.classes || ''}}\" \r\n        [ngClass]=\"{ 'has-image' : !!data.image, 'has-background-image': !!data.backgroundImage }\"\r\n        [ngStyle]=\"{'background-image': 'url(' + data.backgroundImage + ')'}\">\r\n    <div class=\"n7-hero__content\">\r\n        \r\n        <div class=\"n7-hero__text-wrapper\">\r\n            <h1 class=\"n7-hero__title\">\r\n                {{data.title}}\r\n            </h1>\r\n            <p class=\"n7-hero__text\" *ngIf=\"data.text\" [innerHTML]=\"data.text\"></p>\r\n            <div class=\"n7-hero__input-wrapper\" *ngIf=\"data.input || data.button\">\r\n                <input type=\"text\" \r\n                       class=\"n7-hero__input\" \r\n                       placeholder=\"{{data.input.placeholder || ''}}\" \r\n                       *ngIf=\"data.input\" \r\n                       (input)=\"onInputChange(data.input.payload, $event.target.value)\" \r\n                       (keyup.enter)=\"onInputEnter(data.input.payload, $event.target.value)\">\r\n                <span class=\"n7-hero__input-icon {{data.input.icon || ''}}\" \r\n                      *ngIf=\"data.input && data.input.icon\" \r\n                      (click)=\"onClick(data.input.payload)\"></span>\r\n                <button class=\"n7-hero__btn n7-btn n7-btn-cta n7-btn-l\" \r\n                        *ngIf=\"data.button\" \r\n                        (click)=\"onClick(data.button.payload)\">\r\n                    {{data.button.text}}\r\n                </button>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"n7-hero__image-wrapper\" *ngIf=\"data.image\">\r\n            <img class=\"n7-hero__image\" src=\"{{data.image}}\" alt=\"\">\r\n        </div>\r\n\r\n    </div>\r\n</section>"
            }] }
];
HeroComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ItemPreviewComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
}
ItemPreviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-item-preview',
                template: "<div *ngIf=\"data\" \r\n     class=\"n7-item-preview {{data.classes || ''}}\" \r\n     [ngClass]=\"{ 'has-image' : !!data.image }\"\r\n     (click)=\"onClick(data.payload)\">\r\n\r\n    <!-- Image -->\r\n    <div class=\"n7-item-preview__image\"\r\n         *ngIf=\"data.image\"\r\n         [style.background-image] = \"'url(' + data.image + ')'\">       \r\n    </div>         \r\n    \r\n    <div class=\"n7-item-preview__content\">\r\n\r\n        <!-- Title and text -->\r\n        <div class=\"n7-item-preview__title-text\">\r\n            <h1 class=\"n7-item-preview__title\">\r\n                {{ data.title }}\r\n            </h1>\r\n            <p class=\"n7-item-preview__text\" *ngIf=\"data.text\">\r\n                {{ data.text }}\r\n            </p>\r\n        </div>\r\n\r\n        <!-- Metadata -->\r\n        <div class=\"n7-item-preview__metadata\" *ngIf=\"data.metadata\">       \r\n            <div class=\"n7-item-preview__metadata-group\" *ngFor=\"let meta of data.metadata\">\r\n                <h3 class=\"n7-item-preview__metadata-group-title\" *ngIf=\"meta.title\">\r\n                {{ meta.title }}\r\n                </h3>\r\n                <div class=\"n7-item-preview__metadata-item {{meta.classes}}\" *ngFor=\"let item of meta.items\">\r\n                    <span class=\"n7-item-preview__metadata-item-icon {{item.icon}}\">  </span>\r\n                    <span class=\"n7-item-preview__metadata-item-label\" *ngIf=\"item.label\">{{item.label}}: </span>\r\n                    <span class=\"n7-item-preview__metadata-item-value\" *ngIf=\"item.value\">{{item.value}}</span>\r\n                </div>\r\n            </div>\r\n        </div>   \r\n    </div>\r\n</div>\r\n"
            }] }
];
ItemPreviewComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoaderComponent {
}
LoaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-loader',
                template: "<div class=\"n7-loader {{data.classes || ''}}\">\r\n    Loading\r\n</div>"
            }] }
];
LoaderComponent.propDecorators = {
    data: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
}
NavComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-nav',
                template: "<nav class=\"n7-nav {{data.classes || ''}}\" *ngIf=\"data\">\r\n    <ul class=\"n7-nav__list\">\r\n        <li class=\"n7-nav__item {{X.classes || ''}}\" *ngFor=\"let X of data.items\">\r\n            <a class=\"n7-nav__link\" *ngIf=\"X.payload\" (click)=\"onClick(X.payload)\">\r\n                <span class=\"n7-nav__label\" *ngIf=\"X.text\">\r\n                    {{ X.text }}\r\n                </span>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</nav>"
            }] }
];
NavComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaginationComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
}
PaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-pagination',
                template: "<nav class=\"n7-pagination {{data.classes || ''}}\" *ngIf=\"data\">\r\n    <ul class=n7-pagination__items>\r\n\r\n        <li class=\"n7-pagination__first {{data.first.classes || ''}}\" *ngIf=\"data.first\">\r\n            <a class=\"n7-pagination__first-link {{ data.first.text ? 'has-text' : '' }}\" \r\n               (click)=\"onClick(data.first.payload)\">\r\n                <span class=\"n7-pagination__first-icon n7-icon-angle-double-left\"></span>\r\n                <span class=\"n7-pagination__first-label\" *ngIf=\"data.first.text\">\r\n                    {{ data.first.text }}\r\n                </span>\r\n            </a>\r\n        </li>\r\n        <li class=\"n7-pagination__prev {{data.prev.classes || ''}}\" *ngIf=\"data.prev\">\r\n            <a class=\"n7-pagination__prev-link {{ data.prev.text ? 'has-text' : '' }}\" \r\n               (click)=\"onClick(data.prev.payload)\">\r\n                <span class=\"n7-pagination__prev-icon n7-icon-angle-left\"></span>\r\n                <span class=\"n7-pagination__prev-label\" *ngIf=\"data.prev.text\">\r\n                    {{ data.prev.text }}\r\n                </span>\r\n            </a>\r\n        </li>\r\n\r\n        <li class=\"n7-pagination__page {{page.classes || ''}}\" *ngFor=\"let page of data.links\">\r\n            <a class=\"n7-pagination__page-link\" (click)=\"onClick(page.payload)\">{{ page.text }}</a>\r\n        </li>\r\n\r\n        <li class=\"n7-pagination__next {{data.next.classes || ''}}\" *ngIf=\"data.next\">\r\n            <a class=\"n7-pagination__next-link {{ data.next.text ? 'has-text' : '' }}\" \r\n               (click)=\"onClick(data.next.payload)\">\r\n                <span class=\"n7-pagination__next-label\" *ngIf=\"data.next.text\">\r\n                    {{ data.next.text }}\r\n                </span>\r\n                <span class=\"n7-pagination__next-icon n7-icon-angle-right\"></span>\r\n            </a>\r\n        </li>\r\n        <li class=\"n7-pagination__last {{data.last.classes || ''}}\" *ngIf=\"data.last\">\r\n            <a class=\"n7-pagination__last-link {{ data.last.text ? 'has-text' : '' }}\" \r\n               (click)=\"onClick(data.last.payload)\">\r\n                <span class=\"n7-pagination__last-label\" *ngIf=\"data.last.text\">\r\n                    {{ data.last.text }}\r\n                </span>\r\n                <span class=\"n7-pagination__last-icon  n7-icon-angle-double-right\"></span>\r\n            </a>\r\n        </li>\r\n\r\n    </ul> \r\n</nav>"
            }] }
];
PaginationComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SidebarHeaderComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
}
SidebarHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-sidebar-header',
                template: "<div *ngIf=\"data\" class=\"n7-sidebar-header\">\r\n    <span class=\"n7-sidebar-header__icon-left {{ data.iconLeft }}\" *ngIf=\"data.iconLeft\">\r\n    </span>\r\n    <span class=\"n7-sidebar-header__text\">\r\n        {{data.text}}\r\n    </span>\r\n    <span class=\"n7-sidebar-header__additional-text\" *ngIf=\"data.additionalText\">\r\n        {{data.additionalText}}\r\n    </span>\r\n    <span *ngIf=\"data.iconRight\"\r\n          class=\"n7-sidebar-header__icon-right {{ data.iconRight }}\" \r\n          (click)=\"onClick(data.payload)\"></span>\r\n</div>"
            }] }
];
SidebarHeaderComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableComponent {
    /**
     * @param {?} cell_payload
     * @return {?}
     */
    onCellClick(cell_payload) {
        if (!this.emit)
            return;
        this.emit('cellClick', cell_payload);
    }
    /**
     * @param {?} cell_payload
     * @return {?}
     */
    onCellDblClick(cell_payload) {
        if (!this.emit)
            return;
        this.emit('cellDblClick', cell_payload);
    }
    /**
     * @param {?} cell_payload
     * @param {?} cell_value
     * @return {?}
     */
    onInputTextChange(cell_payload, cell_value) {
        if (!this.emit)
            return;
        /** @type {?} */
        const textChange_payload = { tc_payload: cell_payload, val: cell_value };
        this.emit('inputTextChange', textChange_payload);
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-table',
                template: "<section class=\"n7-table {{data.classes || ''}}\" *ngIf=\"data\">\r\n    <table class=\"n7-table__table\">\r\n    \t<thead class=\"n7-table__table-header\" *ngIf=\"data.head\">\r\n            <tr class=\"n7-table__table-header-row {{row.classes || ''}}\"\r\n                *ngFor=\"let row of data.head\">\r\n                <th class=\"n7-table__table-header-cell {{cell.classes || ''}}\"\r\n                    *ngFor=\"let cell of row.cells\"\r\n                    (click)=\"onCellClick(cell.payload)\"\r\n                    [innerHTML]=\"cell.content\">\r\n                        <!-- {{ cell.content }} -->\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n\r\n        <tbody class=\"n7-table__table-body\" *ngIf=\"data.body\">\r\n            <tr class=\"n7-table__table-body-row {{row.classes || ''}}\"\r\n                *ngFor=\"let row of data.body; let rowHead of data.head\">\r\n                <td class=\"n7-table__table-body-cell {{cell.classes || ''}}\"\r\n                    *ngFor=\"let cell of row.cells; let cellHead of rowHead.cells\"\r\n                    (click)=\"onCellClick(cell.payload)\"\r\n                    (dblclick)=\"onCellDblClick(cell.payload)\"\r\n                    [attr.data-label]=\"cellHead.content\">\r\n                    <span   class=\"n7-table__table-body-cell-innerhtml\"\r\n                            *ngIf=\"!cell.type || cell.type=='html'\"\r\n                            [innerHTML]=\"cell.content\"></span>\r\n                    <input  class=\"n7-table__table-body-cell-inputtext\"\r\n                            *ngIf=\"cell.type=='input:text'\"\r\n                            type=\"text\" placeholder=\"{{cell.content}}\"\r\n                            id=\"{{cell._meta.input_id}}\"\r\n                            (keyup.enter)=\"onInputTextChange(cell.payload, $event.target.value)\"/>                        \r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n\r\n        <tfoot class=\"n7-table__table-footer\" *ngIf=\"data.foot\">\r\n            <tr class=\"n7-table__table-footer-row {{row.classes || ''}}\"\r\n                *ngFor=\"let row of data.foot\">\r\n                <td class=\"n7-table__table-footer-cell {{cell.classes || ''}}\"\r\n                    *ngFor=\"let cell of row.cells\"\r\n                    (click)=\"onCellClick(cell.payload)\"\r\n                    [innerHTML]=\"cell.content\">\r\n                        <!-- {{ cell.content }} -->\r\n                </td>\r\n            </tr>\r\n        </tfoot>        \r\n \t </table> \r\n</section>"
            }] }
];
TableComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TagComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit("click", payload);
    }
}
TagComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-tag',
                template: "<span class=\"n7-tag {{data.classes || ''}}\" *ngIf=\"data\">\r\n    <span class=\"n7-tag__label\" *ngIf=\"data.label\">\r\n        {{ data.label }}\r\n    </span>\r\n    <span class=\"n7-tag__text\" *ngIf=\"data.text\">\r\n        {{ data.text }}\r\n    </span>\r\n    <span class=\"n7-tag__icon {{data.icon}}\" *ngIf=\"data.icon\" (click)=\"onClick(data.payload)\"></span>\r\n</span>"
            }] }
];
TagComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToastComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
}
ToastComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-toast',
                template: "<div *ngIf=\"data\" class=\"n7-toast\">\r\n    <div class=\"n7-toast__column {{data.classes || ''}}\">\r\n\r\n        <!-- Toast boxes -->\r\n        <div class=\"n7-toast__box\" \r\n             *ngFor=\"let box of data.toasts\"\r\n             [ngClass]=\"{ 'has-actions' : !! (box.actions || box.closeIcon) }\">\r\n        \r\n            <!-- Toast text -->\r\n            <div class=\"n7-toast__content {{box.classes || ''}}\" *ngIf=\"box.title || box.text\">\r\n                <span class=\"n7-toast__title\" *ngIf=\"box.title\">{{ box.title }}</span>\r\n                <span class=\"n7-toast__text\" *ngIf=\"box.text\">{{ box.text }}</span>\r\n            </div>\r\n\r\n            <!-- Toast actions -->\r\n            <div class=\"n7-toast__actions\" *ngIf=\"box.actions || box.closeIcon\">\r\n                <span\r\n                class=\"n7-toast__closeIcon {{ box.closeIcon.icon }}\" \r\n                *ngIf=\"box.closeIcon\" \r\n                (click)=\"onClick(box.closeIcon.payload)\">\r\n                </span>\r\n                <span class=\"n7-toast__action-wrapper\" *ngIf=\"box.actions\">\r\n                    <span class=\"n7-toast__action-content\" *ngFor=\"let action of box.actions\">\r\n                        <button class=\"n7-toast__action-button n7-btn n7-btn-s {{action.classes || ''}}\"\r\n                                (click)=\"onClick(action.payload)\">\r\n                                {{action.text}}\r\n                        </button>\r\n                    </span>\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"
            }] }
];
ToastComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TreeComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
}
TreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-tree',
                template: "<div *ngIf=\"data\" class=\"n7-tree\">\r\n    <!-- Start recursive rendering -->\r\n    <ng-container *ngTemplateOutlet=\"recursiveTree; context:{$implicit: data.items}\"></ng-container>\r\n\r\n    <!-- Template for recursive children rendering -->\r\n    <ng-template #recursiveTree let-node>\r\n        <div class=\"n7-tree__item {{ item.classes || '' }}\" *ngFor=\"let item of node\">\r\n            <div class=\"n7-tree__item-contents\">\r\n                <!-- Render expand/collapse arrow -->\r\n                <span *ngIf=\"item.toggle\" \r\n                      class=\"n7-tree__item-toggle {{ item.toggle.icon }}\"\r\n                      (click)=\"onClick(item.toggle.payload)\">\r\n                </span>\r\n                <!-- Render the node -->\r\n                <div class=\"n7-tree__item-details\"\r\n                     (click)=\"onClick(item.payload)\">\r\n                    <span *ngIf=\"item.icon\" class=\"n7-tree__item-icon {{ item.icon }}\"></span>\r\n                    <img class=\"n7-tree__item-img\" *ngIf=\"item.img\" src=\"{{ item.img }}\" alt=\"{{ item.text }}\"/>\r\n                    <span class=\"n7-tree__item-text\">{{ item.text }}</span>\r\n                </div>\r\n            </div>\r\n            <!-- Check for more child nodes and render them -->\r\n            <div class=\"n7-tree__children-wrapper\" *ngIf=\"item.items\">\r\n                <ng-container *ngTemplateOutlet=\"recursiveTree; context:{$implicit: item.items}\"></ng-container>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n</div>"
            }] }
];
TreeComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WizardComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
}
WizardComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-wizard',
                template: "<div *ngIf=\"data\" class=\"n7-wizard {{ data.classes || '' }}\">\r\n  <ol class=\"n7-wizard__list\">\r\n      <li *ngFor=\"let item of data.items\" \r\n          class=\"n7-wizard__item {{ item.classes || '' }}\" \r\n          (click)=\"onClick(item.payload)\">\r\n            <span *ngIf=\"item.number\" class=\"n7-wizard__number\">{{ item.number }}</span>\r\n            <span *ngIf=\"item.text\" class=\"n7-wizard__text\">{{ item.text }}</span>\r\n      </li>\r\n  </ol>\r\n</div>"
            }] }
];
WizardComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [
    AlertComponent,
    BreadcrumbsComponent,
    BubbleChartComponent,
    ChartComponent,
    FacetComponent,
    FacetHeaderComponent,
    FacetYearRangeComponent,
    HeaderComponent,
    HeroComponent,
    ItemPreviewComponent,
    LoaderComponent,
    NavComponent,
    PaginationComponent,
    SidebarHeaderComponent,
    TableComponent,
    TagComponent,
    ToastComponent,
    TreeComponent,
    WizardComponent,
];
class DvComponentsLibModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ALERT_MOCK = {
    text: `
  This is an alert for the user with some <strong>bold</strong> and <i>italic</i> text.
  This is an alert for the user with some <strong>bold</strong> and <i>italic</i> text.
  `,
    hasCloseButton: true,
    payload: "close",
    icon: "n7-icon-bell",
    classes: "is-warning"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const BREADCRUMBS_MOCK = {
    items: [
        {
            label: 'Home',
            payload: '/'
        },
        {
            label: 'Costumi',
            payload: '/examples/loader-component'
        },
        {
            label: 'Giacche',
            payload: '/examples/list-component'
        },
        {
            label: 'Maniche',
            payload: '/examples/navbar-component'
        },
        {
            label: 'Manica',
            payload: '/examples/breadcrumbs-component'
        }
    ]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const cWidth = 1000;
/** @type {?} */
const cHeight = 500;
const ɵ0 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.x, ɵ1 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.y - (d.radius / 9), ɵ2 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.radius / 5, ɵ3 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.x, ɵ4 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.y + (d.radius / 9), ɵ5 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.radius / 6, ɵ6 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.x, ɵ7 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.y - (d.radius / 9), ɵ8 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.radius / 5, ɵ9 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.x, ɵ10 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.y + (d.radius / 9), ɵ11 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.radius / 5, ɵ12 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.x, ɵ13 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.y - (d.radius / 9), ɵ14 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.radius / 5, ɵ15 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.x, ɵ16 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.y + (d.radius / 9), ɵ17 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.radius / 5, ɵ18 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.x, ɵ19 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.y - (d.radius / 9), ɵ20 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.radius / 5, ɵ21 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.x, ɵ22 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.y + (d.radius / 9), ɵ23 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.radius / 5, ɵ24 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.x, ɵ25 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.y - (d.radius / 9), ɵ26 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.radius / 5, ɵ27 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.x, ɵ28 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.y + (d.radius / 9), ɵ29 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.radius / 5;
/** @type {?} */
var dataSource = {
    containerId: "bubbleChartContainer",
    containerWidth: cWidth,
    containerHeight: cHeight,
    isForceSimulationEnabled: true,
    bubblesData: [
        {
            "id": "mlnBubble",
            "texts": [
                {
                    id: "mln",
                    label: "Milano",
                    x_function: (ɵ0),
                    y_function: (ɵ1),
                    "user_select": "none",
                    fontSize_function: (ɵ2),
                    color: "green",
                    "classes": "monospace-text"
                },
                {
                    id: "mlnValue",
                    label: "9.746",
                    x_function: (ɵ3),
                    y_function: (ɵ4),
                    "user_select": "none",
                    fontSize_function: (ɵ5),
                    color: "white",
                    "classes": ""
                }
            ],
            x: cWidth / 2 + 50,
            y: cHeight / 2 + 50,
            "radius": 9746 / 75,
            color: "#79ad87",
            selected: true,
            selectable: true,
            payload: {
                id: "mlnBubble"
            }
        },
        {
            "id": "naplBubble",
            "texts": [
                {
                    id: "nap",
                    label: "Napoli",
                    x_function: (ɵ6),
                    y_function: (ɵ7),
                    "user_select": "none",
                    fontSize_function: (ɵ8),
                    color: "white",
                    "classes": ""
                },
                {
                    id: "napValue",
                    label: "3.981",
                    x_function: (ɵ9),
                    y_function: (ɵ10),
                    "user_select": "none",
                    fontSize_function: (ɵ11),
                    color: "red",
                    "classes": ""
                }
            ],
            x: cWidth - 120,
            y: cHeight - 120,
            "radius": 3981 / 45,
            color: "#d19b13",
            selected: false,
            selectable: true,
            payload: {
                id: "naplBubble"
            }
        },
        {
            "id": "romBubble",
            "texts": [
                {
                    id: "rom",
                    label: "Roma",
                    x_function: (ɵ12),
                    y_function: (ɵ13),
                    "user_select": "none",
                    fontSize_function: (ɵ14),
                    color: "white",
                    "classes": ""
                },
                {
                    id: "romValue",
                    label: "4.523",
                    x_function: (ɵ15),
                    y_function: (ɵ16),
                    "user_select": "none",
                    fontSize_function: (ɵ17),
                    color: "red",
                    "classes": ""
                }
            ],
            x: cWidth - (cWidth / 4.5),
            y: (cHeight / 8),
            "radius": 4523 / 30,
            selected: true,
            selectable: true,
            color: "#6184ed",
            payload: {
                id: "romBubble"
            }
        },
        {
            "id": "spzBubble",
            "texts": [
                {
                    id: "spz",
                    label: "Spazio",
                    x_function: (ɵ18),
                    y_function: (ɵ19),
                    "user_select": "none",
                    fontSize_function: (ɵ20),
                    color: "white",
                    "classes": ""
                },
                {
                    id: "spzValue",
                    label: "3.981",
                    x_function: (ɵ21),
                    y_function: (ɵ22),
                    "user_select": "none",
                    fontSize_function: (ɵ23),
                    color: "green",
                    "classes": ""
                }
            ],
            x: (cWidth / 3.5),
            y: cHeight - (cHeight / 3.5),
            "radius": 3981 / 65,
            color: "#d19b13",
            selected: true,
            selectable: true,
            payload: {
                id: "spzBubble"
            }
        },
        {
            "id": "lucBubble",
            "texts": [
                {
                    id: "luc",
                    label: "Luce",
                    x_function: (ɵ24),
                    y_function: (ɵ25),
                    "user_select": "none",
                    fontSize_function: (ɵ26),
                    color: "white",
                    "classes": ""
                },
                {
                    id: "lucValue",
                    label: "2.342",
                    x_function: (ɵ27),
                    y_function: (ɵ28),
                    "user_select": "none",
                    fontSize_function: (ɵ29),
                    color: "red",
                    "classes": ""
                }
            ],
            x: 200,
            y: 200,
            radius: 2342 / 25,
            selectable: true,
            color: "#6184ed",
            payload: {
                id: "lucBubble"
            }
        }
    ],
    forceSimulationData: {
        xPull: cWidth / 2,
        xPullStrength: -0.01,
        yPull: cHeight / 2,
        yPullStrength: -0.01,
        collisionStrengh: 0.99,
        collisionIterations: 1,
        velocityDecay: 0.65
    },
    maxBubblesSelected: 3
};
/** @type {?} */
const BUBBLECHART_MOCK = dataSource;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CHART_MOCK = {
    containerId: 'test-Chart',
    libOptions: {
        chart: {
            "height": 550,
            "width": 1500,
            "type": "area",
            "toolbar": { "show": true }
        },
        dataLabels: { "enabled": false },
        colors: ["rgba(163,55,119, 1)", "rgba(146,93,255, 1)"],
        fill: {
            "colors": ["#a33777", "#925DFF"],
            "gradient": { "opacityFrom": 0.5, "opacityTo": 0.1 }
        },
        stroke: { "curve": "straight", "width": [2, 1] },
        series: [
            {
                "name": "Reddish value",
                "data": [["2019-08-01", "770.17"], ["2019-08-02", "645.03"],
                    ["2019-08-03", "709.32"], ["2019-08-04", "708.11"],
                    ["2019-08-05", "706.59"], ["2019-08-06", "607.28"],
                    ["2019-08-07", "494.59"], ["2019-08-08", "636.81"],
                    ["2019-08-09", "709.04"], ["2019-08-10", "717.31"],
                    ["2019-08-11", "805.61"], ["2019-08-12", "758.60"],
                    ["2019-08-13", "612.82"], ["2019-08-14", "608.90"],
                    ["2019-08-15", "734.68"], ["2019-08-16", "838.54"],
                    ["2019-08-17", "692.88"]]
            },
            {
                "name": "Purple value",
                "data": [["2019-08-01", "927.04"], ["2019-08-02", "944.66"],
                    ["2019-08-03", "860.84"], ["2019-08-04", "867.28"],
                    ["2019-08-05", "947.55"], ["2019-08-06", "798.94"],
                    ["2019-08-07", "757.66"], ["2019-08-08", "729.57"],
                    ["2019-08-09", "679.58"], ["2019-08-10", "618.78"],
                    ["2019-08-11", "805.61"], ["2019-08-12", "791.18"],
                    ["2019-08-13", "913.78"], ["2019-08-14", "608.90"],
                    ["2019-08-15", "611.88"], ["2019-08-16", "744.02"],
                    ["2019-08-17", "600.46"]]
            }
        ],
        grid: {
            "borderColor": "#e7e7e7",
            "strokeDashArray": 3,
            "xaxis": { "lines": { "show": true } }
        },
        markers: { "size": 3, "hover": { "size": 6 } },
        xaxis: {
            "axisBorder": { "show": true, "color": "#f4f6fc" },
            "labels": {},
            "type": "datetime", "tickAmount": 6
        },
        yaxis: [
            {
                "show": true,
                "showAlways": false,
                "opposite": false,
                "reversed": false,
                "logarithmic": false,
                "forceNiceScale": false,
                "floating": false,
                "labels": {
                    "show": true,
                    "minWidth": 0,
                    "maxWidth": 160,
                    "offsetX": 0,
                    "offsetY": 0,
                    "rotate": 0,
                    "padding": 20,
                    "style": { "colors": [], "fontSize": "11px", "cssClass": "" }
                },
                "axisBorder": { "show": true, "color": "#f4f6fc", "offsetX": 0, "offsetY": 0 },
                "axisTicks": { "show": false, "color": "#78909C", "width": 6, "offsetX": 0, "offsetY": 0 },
                "title": { "text": "P Totale °C", "rotate": 90, "offsetY": 0, "offsetX": 0, "style": { "fontSize": "11px", "cssClass": "" } },
                "tooltip": { "enabled": false, "offsetX": 0 },
                "crosshairs": { "show": true, "position": "front", "stroke": { "color": "#b6b6b6", "width": 1, "dashArray": 0 } }
            }
        ],
        legend: { "show": true },
        tooltip: {},
        annotations: { "yaxis": [], "xaxis": [], "points": [] }
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const FACET_MOCK = {
    checks: [
        {
            label: 'Email',
            payload: 'email',
            classes: 'is-active',
        },
        { label: 'Check 2', payload: 'check2' },
        { label: 'Check 3', payload: 'check3' },
        { label: 'Check 4', payload: 'check4' },
        { label: 'Check 5', payload: 'check5' },
    ],
    input: {
        label: 'SEARCH LABEL',
        placeholder: 'Search',
        icon: 'n7-icon-search',
        payload: 'search',
    },
    filters: [
        {
            icon: 'n7-icon-archive',
            text: 'First filter',
            counter: 20,
            payload: 'first filter',
            classes: 'is-active'
        },
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
            counter: 18,
            payload: 'second filter',
        },
        {
            icon: 'n7-icon-archive',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
            counter: 18,
            payload: 'second filter',
        },
        {
            text: 'third filter',
            counter: 11,
            payload: 'third filter',
        },
        {
            text: 'lorem',
            counter: 7,
            payload: 'fourth filter',
        },
        {
            text: 'last filter',
            counter: 31,
            payload: 'last filter',
        },
        {
            icon: 'n7-icon-archive',
            text: 'First filter',
            counter: 1232143,
            payload: 'first filter',
            classes: 'is-active'
        },
        {
            text: 'second filter',
            counter: 18,
            payload: 'second filter',
        },
        {
            text: 'third filter',
            counter: 11,
            payload: 'third filter',
            classes: 'is-active'
        },
        {
            text: 'fourth filter',
            counter: 7,
            payload: 'fourth filter',
        },
        {
            text: 'last filter',
            counter: 3,
            payload: 'last filter',
        },
    ]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const FACET_HEADER_MOCK = {
    iconLeft: 'n7-icon-earth',
    text: 'Persone',
    additionalText: '24.319',
    iconRight: 'n7-icon-angle-left',
    classes: 'is-expanded',
    payload: 'header',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const HEADER_MOCK = {
    logo: {
        image: 'https://placeimg.com/128/128/any/grayscale',
        title: 'DataViz',
        subtitle: 'Data visualization',
        payload: 'https://www.netseven.it/'
    },
    nav: {
        items: [
            { text: 'Home', payload: '/', icon: 'n7-icon-home' },
            { text: 'Stuff', payload: '/s', icon: 'n7-icon-home' },
            { text: 'Other Stuff', payload: '/os', icon: 'n7-icon-home' },
            { text: 'Dropdown', payload: '/', icon: 'n7-icon-home', subnav: [
                    { text: 'Sublevel 1', payload: '/', icon: 'n7-icon-home' },
                    { text: 'Sublevel 2 Lorem ipsum dolor sit amet', payload: '/s', icon: 'n7-icon-home' },
                    { text: 'Sublevel 3', payload: '/os', icon: 'n7-icon-home' },
                ]
            },
            { text: 'Shiny Stuff', payload: '/shs', icon: 'n7-icon-home' },
            { text: 'Cats', payload: '/cats', icon: 'n7-icon-home' },
        ]
    },
    search: {
        hint: 'Search (hint)',
        payload: 'search payload',
    },
    actions: [
        { icon: 'n7-icon-bell', payload: '/', badge: {
                text: "200",
            },
        },
        { icon: 'n7-icon-facebook', payload: '/', badge: {}, },
    ],
    user: {
        img: 'https://placeimg.com/150/150/any/people',
        name: 'Massimiliano Spinosa'
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const HERO_MOCK = {
    title: "Il più bell'archivio che tu abbia mai visto",
    text: `
  La <strong>Fondazione Cerratelli</strong> è uno spazio espositivo che raccoglie un'importante 
  collezione di costumi <em>teatrali e cinematografici</em>. Sua sede si trova dal 3 dicembre 
  2011 presso la villa Roncioni a Pugnano, frazione del comune di San Giuliano Terme.
  `,
    input: {
        placeholder: "Cerca quello che vuoi",
        icon: "n7-icon-search1",
        payload: "input"
    },
    button: {
        text: "Cerca",
        payload: "button"
    },
    backgroundImage: "https://placeimg.com/1000/480/nature",
    image: "https://placeimg.com/600/600/nature"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ITEM_PREVIEW_MOCK = {
    image: 'https://placeimg.com/600/600/nature',
    title: 'Dummy title text',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    metadata: [
        {
            title: 'Group 1',
            classes: '',
            items: [
                { icon: 'n7-icon-home', label: 'name', value: 'value', classes: 'n7-category-place' },
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
            items: [
                { icon: 'n7-icon-home', value: '2', classes: 'n7-category-place' },
                { icon: 'n7-icon-home', value: '1' },
                { icon: 'n7-icon-home', value: '7' }
            ]
        }
    ],
    payload: 'https://www.netseven.it/',
    classes: 'is-vertical' // leave it empty for default horizontal layout or 'is-overlay'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOADER_MOCK = {
    classes: 'loader-test'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NAV_MOCK = {
    items: [
        { text: "Home", payload: "/" },
        { text: "Single level", payload: "/no_dropdown" },
        { text: "Stuff", payload: "/page1" },
        { text: "Other stuff", payload: "/page1/page2" },
        { text: "Cats", payload: "cats" }
    ],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PAGINATION_MOCK = {
    first: { payload: "first", classes: "is-disabled", text: "First" },
    prev: { payload: "prev", classes: "is-disabled" },
    next: { payload: "next", text: "Next" },
    last: { payload: "last", text: "Last" },
    links: [
        { text: "1", payload: 1, classes: "is-active" },
        { text: "2", payload: 2 },
        { text: "3", payload: 3 },
        { text: "4", payload: 4 },
        { text: "5", payload: 5 },
    ]
}
/*
If class
.has-hidden-icons
is added to the root element (.n7-pagination)
the icons for first, previous, next and last are hidden
*/ ;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const SIDEBAR_HEADER_MOCK = {
    iconLeft: 'n7-icon-tree-icon',
    text: 'Albero di navigazione',
    additionalText: '10.324.592',
    iconRight: 'n7-icon-angle-left',
    classes: 'is-expanded',
    payload: 'header',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
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
            //first row
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
            //second row
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
                    _meta: { id: '2x4', input_id: '_text_input_2x4' },
                    payload: { id: '2x4' },
                    type: 'html'
                }
            ]
        },
        {
            //third row
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
                    type: 'html' //'altro'
                },
                {
                    content: '100 mg/l',
                    _meta: { id: '3x4', input_id: '_text_input_3x4' },
                    payload: { id: '3x4' },
                    type: 'input:text'
                }
            ]
        },
        {
            //fourth row
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
                    //_meta: '4x3',
                    content: '<span style="color:green;">&bullet;</span> Redox V',
                    type: 'html'
                },
                {
                    classes: 'input-test',
                    content: '231 V',
                    type: 'html',
                    _meta: { id: 'NPT', input_id: '_text_input_NPT' },
                    payload: { id: 'NPT' }
                }
            ]
        }
    ]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TAG_MOCK = {
    label: "label: ",
    text: "text",
    icon: "n7-icon-close",
    payload: "tag-payload",
    classes: "tag1-class",
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TOAST_MOCK = {
    toasts: [{
            // array of toast boxes
            classes: 'is-warning',
            title: 'Title',
            text: 'Questo messaggio ha soltanto un titolo e del testo, è di tipo is-warning ed ha un tempo di 15 secondi',
            closeIcon: {
                icon: 'n7-icon-close',
                payload: 'closing'
            }
        }, {
            // array of toast boxes
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
            // array of toast boxes
            classes: 'is-warning',
            title: 'Title',
            text: 'Questo messaggio ha soltanto un titolo e del testo, è di tipo is-warning ed ha un tempo di 15 secondi',
        }
    ]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TREE_MOCK = {
    items: [
        {
            text: 'Collezione d\'arte',
            payload: 'collezione arte',
            classes: 'is-collapsed',
        },
        {
            text: 'Centro archivi',
            payload: 'centro archivi',
            classes: 'is-expanded',
            items: [
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle'
                    },
                    text: '5+1AA Agenzia di Architettura',
                    classes: 'is-collapsed',
                    payload: ''
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-down',
                        payload: 'toggle'
                    },
                    text: 'ABDR Architetti Associati',
                    classes: 'is-expanded is-active',
                    payload: '',
                    items: [
                        {
                            toggle: {
                                icon: 'n7-icon-angle-down',
                                payload: 'toggle'
                            },
                            text: '5+1AA Agenzia di Architettura',
                            classes: 'is-expanded',
                            payload: '',
                            items: [
                                {
                                    toggle: {
                                        icon: 'n7-icon-angle-right',
                                        payload: 'toggle'
                                    },
                                    text: '5+1AA Agenzia di Architettura',
                                    classes: 'is-collapsed',
                                    payload: ''
                                },
                                {
                                    toggle: {
                                        icon: 'n7-icon-angle-down',
                                        payload: 'toggle'
                                    },
                                    text: 'ABDR Architetti Associati',
                                    classes: 'is-expanded',
                                    payload: '',
                                    items: [
                                        {
                                            toggle: {
                                                icon: 'n7-icon-angle-down',
                                                payload: 'toggle'
                                            },
                                            text: '5+1AA Agenzia di Architettura',
                                            classes: 'is-expanded',
                                            payload: '',
                                            items: [
                                                {
                                                    toggle: {
                                                        icon: 'n7-icon-angle-right',
                                                        payload: 'toggle'
                                                    },
                                                    text: '5+1AA Agenzia di Architettura',
                                                    classes: 'is-collapsed',
                                                    payload: ''
                                                },
                                                {
                                                    toggle: {
                                                        icon: 'n7-icon-angle-right',
                                                        payload: 'toggle'
                                                    },
                                                    text: 'ABDR Architetti Associati',
                                                    classes: 'is-collapsed',
                                                    payload: ''
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
                                            payload: ''
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
                            payload: ''
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
                    payload: ''
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle'
                    },
                    text: 'BOERI Cini',
                    classes: 'is-collapsed',
                    payload: ''
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle'
                    },
                    text: 'CAMPO BAEZA Alberto',
                    classes: 'is-collapsed',
                    payload: ''
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle'
                    },
                    text: 'CASSANI Matilde',
                    classes: 'is-collapsed',
                    payload: ''
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle'
                    },
                    text: 'GUERRI Danilo',
                    classes: 'is-collapsed',
                    payload: ''
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle'
                    },
                    text: 'ISOLA Aimaro',
                    classes: 'is-collapsed',
                    payload: ''
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-down',
                        payload: 'toggle'
                    },
                    text: 'NERVI Pier Luigi',
                    classes: 'is-expanded',
                    payload: ''
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-down',
                        payload: 'toggle'
                    },
                    text: 'Attività Professionale',
                    classes: 'is-expanded',
                    payload: '',
                    items: [
                        {
                            icon: 'n7-icon-file3',
                            text: 'Cinema teatro Augusteo e stazione centrale della funicolare, Napoli ([1926] - [1927])',
                            payload: '',
                        },
                        {
                            classes: 'is-active',
                            icon: 'n7-icon-file3',
                            text: 'Stadio comunale G.Berta, Firenze ([1929] - [1932])',
                            payload: '',
                        },
                        {
                            icon: 'n7-icon-file3',
                            text: 'Monumento alla Bandiera, Roma (1931)',
                            payload: '',
                        },
                        {
                            img: 'http://placeimg.com/25/25/arch/grayscale',
                            text: 'Brevetto hangar circolare con piattaforma anulare rotante (1932)',
                            payload: '',
                        },
                        {
                            img: 'http://placeimg.com/25/25/arch/grayscale',
                            text: 'Stadio da 120.000 posti, Roma ([1933])',
                            payload: '',
                            classes: 'is-active'
                        },
                        {
                            icon: 'n7-icon-file3',
                            text: 'Magazzino ([1934])',
                            payload: '',
                            classes: 'is-active',
                        },
                        {
                            icon: 'n7-icon-file3',
                            text: 'Aviorimesse, Orvieto (TR), Orbetello (GR), Torre del Lago (LU), Marsala (TP), Trapani ([1935] - 1941)',
                            payload: '',
                        },
                    ]
                },
            ]
        },
    ]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DvComponentsLibModule, AlertComponent, BreadcrumbsComponent, BubbleChartComponent, ChartComponent, FacetComponent, FacetHeaderComponent, FacetYearRangeComponent, HeaderComponent, HeroComponent, ItemPreviewComponent, LoaderComponent, NavComponent, PaginationComponent, SidebarHeaderComponent, TableComponent, TagComponent, ToastComponent, TreeComponent, WizardComponent, ALERT_MOCK, BREADCRUMBS_MOCK, BUBBLECHART_MOCK, CHART_MOCK, FACET_MOCK, FACET_HEADER_MOCK, FACET_YEAR_RANGE_MOCK, HEADER_MOCK, HERO_MOCK, ITEM_PREVIEW_MOCK, LOADER_MOCK, NAV_MOCK, PAGINATION_MOCK, SIDEBAR_HEADER_MOCK, TABLE_MOCK, TAG_MOCK, TOAST_MOCK, TREE_MOCK, WIZARD_MOCK };

//# sourceMappingURL=n7-frontend-components.js.map