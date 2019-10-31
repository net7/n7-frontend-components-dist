import { CommonModule } from '@angular/common';
import { select } from 'd3-selection';
import { forceSimulation, forceX, forceY, forceCollide } from 'd3-force';
import ApexCharts from 'apexcharts/dist/apexcharts.common.js';
import { __assign } from 'tslib';
import openseadragon from 'openseadragon';
import { Component, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AdvancedAutocompleteComponent = /** @class */ (function () {
    function AdvancedAutocompleteComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    AdvancedAutocompleteComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    AdvancedAutocompleteComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-advanced-autocomplete',
                    template: "<div *ngIf=\"data\" \r\n     class=\"n7-advanced-autocomplete\"\r\n     [ngClass]=\"{ 'is-empty' : (data.results && data.results.length == 0), 'is-loading': !data.results }\">\r\n    <!-- If there are some results -->\r\n    <ng-container *ngIf=\"data.results && data.results.length > 0\">\r\n        <ng-container *ngTemplateOutlet=\"hasLoaded\"></ng-container>\r\n    </ng-container>\r\n    <!-- If no results are found -->\r\n    <ng-container *ngIf=\"data.results && data.results.length == 0\">\r\n        <ng-container *ngTemplateOutlet=\"isEmpty\"></ng-container>\r\n    </ng-container>\r\n    <!-- If is loading -->\r\n    <ng-container *ngIf=\"!data.results\">\r\n        <ng-container *ngTemplateOutlet=\"isLoading\"></ng-container>\r\n    </ng-container>\r\n</div>\r\n\r\n<!-- Template: Is empty -->\r\n<ng-template #isEmpty>\r\n    <div class=\"n7-advanced-autocomplete__empty\" [innerHTML]=\"data.fallback\"></div>\r\n</ng-template>\r\n\r\n<!-- Template: Is loading -->\r\n<ng-template #isLoading>\r\n    <!-- Layout appends loader-component here -->\r\n    <span class=\"n7-advanced-autocomplete__loader\" \r\n          id=\"n7-advanced-autocomplete__loader\">\r\n    </span>\r\n</ng-template>\r\n\r\n<!-- Template: Has loaded -->\r\n<ng-template #hasLoaded>\r\n    <!-- Search results -->\r\n    <div class=\"n7-advanced-autocomplete__results\">\r\n        <!-- Render groups -->\r\n        <ng-container *ngFor=\"let res of data.results\">\r\n            <div *ngIf=\"res.group\" class=\"n7-advanced-autocomplete__group\">\r\n                <div class=\"n7-advanced-autocomplete__group-title-wrapper {{ res.group.classes || '' }}\"\r\n                     (click)=\"onClick(res.group.payload)\">\r\n                    <span *ngIf=\"res.group.icon\" class=\"n7-advanced-autocomplete__group-icon {{ res.group.icon }}\"></span>\r\n                    <span class=\"n7-advanced-autocomplete__group-title\">{{res.group.title}}</span>\r\n                </div>\r\n                <div class=\"n7-advanced-autocomplete__items\">\r\n                    <ng-container *ngTemplateOutlet=\"items; context:{$implicit: res.group.items}\"></ng-container>\r\n                </div>\r\n            </div>\r\n        </ng-container>\r\n        <!-- Render items -->\r\n        <ng-container *ngTemplateOutlet=\"items; context:{$implicit: data.results}\"></ng-container>\r\n    </div>\r\n    <!-- Actions -->\r\n    <div *ngIf=\"data.actions\" \r\n            class=\"n7-advanced-autocomplete__action-bar\">\r\n        <button *ngIf=\"data.actions.advanced\" \r\n                (click)=\"onClick(data.actions.advanced.payload)\"\r\n                class=\"n7-btn n7-advanced-autocomplete__advanced-search\">\r\n            {{data.actions.advanced.text}}\r\n        </button>\r\n        <button *ngIf=\"data.actions.showMore\" \r\n                (click)=\"onClick(data.actions.showMore.payload)\"\r\n                class=\"n7-btn n7-btn-cta n7-advanced-autocomplete__show-more\">\r\n            {{data.actions.showMore.text}}\r\n        </button>\r\n    </div>\r\n</ng-template>\r\n\r\n<!-- Template: Items -->\r\n<ng-template #items let-items>\r\n    <div *ngFor=\"let item of items\" \r\n         class=\"n7-advanced-autocomplete__item\"\r\n         (click)=\"onClick(item.payload)\">\r\n        <!-- Skip items that are groups -->\r\n        <ng-container *ngIf=\"item.label && item.value\">\r\n            <span class=\"n7-advanced-autocomplete__item-label\">\r\n                {{item.label}}\r\n            </span>\r\n            <span class=\"n7-advanced-autocomplete__item-value\">\r\n                {{item.value}}\r\n            </span>\r\n        </ng-container>\r\n    </div>\r\n</ng-template>"
                }] }
    ];
    AdvancedAutocompleteComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return AdvancedAutocompleteComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    AlertComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
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
    return AlertComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    BreadcrumbsComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
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
    return BreadcrumbsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BubbleChartComponent = /** @class */ (function () {
    function BubbleChartComponent() {
        this._loaded = false;
        this.bubbles = null;
        this.genericBubble = null;
        this.bubbleChart = null;
    }
    /**
     * @return {?}
     */
    BubbleChartComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
        function () { return _this.makeBubbleChart(); }));
        if (this.data.setUpdateReference)
            this.data.setUpdateReference(this.update.bind(this));
    };
    /** Makes the whole bubble chart */
    /**
     * Makes the whole bubble chart
     * @return {?}
     */
    BubbleChartComponent.prototype.makeBubbleChart = /**
     * Makes the whole bubble chart
     * @return {?}
     */
    function () {
        var _this = this;
        select("#" + this.data.containerId).selectAll("*").remove();
        /** @type {?} */
        var pot = document.getElementById("" + this.data.containerId);
        pot.style.width = this.data.containerWidth + 'px';
        pot.style.height = this.data.containerHeight + 'px';
        this.bubbleChart = select("#" + this.data.containerId)
            .append('svg')
            .attr('width', this.data.containerWidth)
            .attr('height', this.data.containerHeight);
        this.bubbles = this.data.bubblesData;
        this.initBubbles();
        if (this.data.isForceSimulationEnabled)
            this.setBubbleChartSimulation();
        this.update();
        if (this.bubbleChart) {
            this.bubbleChart.selectAll("#" + this.data.containerId + " g circle, #" + this.data.containerId + " g text").on('click', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                if (!_this.emit)
                    return;
                _this.emit('click', { source: "bubble", bubblePayload: d.payload, bubble: d });
            }));
            this.bubbleChart.selectAll('circle[b-type="x_inner_circle"], text[b-type="x_inner_label"]').on('click', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                if (d.hasCloseIcon) {
                    if (!_this.emit)
                        return;
                    _this.emit('click', { source: "close", bubblePayload: d.payload, bubble: d });
                }
                else {
                    _this.emit('click', { source: "bubble", bubblePayload: d.payload, bubble: d });
                }
            }));
            this.bubbleChart.selectAll("#" + this.data.containerId + " g").on('mouseenter', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                if (!_this.emit)
                    return;
                _this.emit('mouse_enter', { bubblePayload: d.payload, bubble: d });
            }));
            this.bubbleChart.selectAll("#" + this.data.containerId + " g").on('mouseleave', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                if (!_this.emit)
                    return;
                _this.emit('mouse_leave', { bubblePayload: d.payload, bubble: d });
            }));
        }
        if (this.data.setBubbleChart)
            this.data.setBubbleChart(this.bubbleChart);
    };
    /** Visually updates the bubble chart */
    /**
     * Visually updates the bubble chart
     * @return {?}
     */
    BubbleChartComponent.prototype.update = /**
     * Visually updates the bubble chart
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.data)
            return;
        if (this.genericBubble && this.genericBubble.attr) {
            this.genericBubble.attr('cx', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.x = Math.max(d.radius, Math.min(_this.data.containerWidth - d.radius, d.x)); }))
                .attr('cy', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.y = Math.max(d.radius, Math.min(_this.data.containerHeight - d.radius, d.y)); }));
        }
        if (this.data && this.data.bubblesData)
            this.data.bubblesData.forEach((/**
             * @param {?} c
             * @return {?}
             */
            function (c) {
                c.texts.forEach((/**
                 * @param {?} tx
                 * @return {?}
                 */
                function (tx) {
                    /** @type {?} */
                    var txt = _this.bubbleChart.select("text[id=" + tx.id + "]");
                    txt.attr("dy", tx.y_function);
                    txt.attr("dx", tx.x_function);
                }));
            }));
        if (this.bubbleChart) {
            this.bubbleChart.selectAll('circle[b-type="x_inner_circle"]')
                .attr("cy", (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.y + (d.radius / 2); }))
                .attr("cx", (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.x; }))
                .attr("opacity", (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return (d.hasCloseIcon ? 1 : 0); }));
        }
        if (this.bubbleChart) {
            this.bubbleChart.selectAll('text[b-type="x_inner_label"]')
                .attr("dy", (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.y + (d.radius / 2) + 6; }))
                .attr("dx", (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.x; }))
                .attr("opacity", (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return (d.hasCloseIcon ? 1 : 0); }));
        }
    };
    /** Initialized the chart's bubbles */
    /**
     * Initialized the chart's bubbles
     * @private
     * @return {?}
     */
    BubbleChartComponent.prototype.initBubbles = /**
     * Initialized the chart's bubbles
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.bubbleChart)
            this.genericBubble = this.bubbleChart.selectAll("#" + this.data.containerId + " g")
                .data(this.bubbles)
                .enter()
                .append('g')
                .attr("id", (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.id; }))
                .append('circle')
                .attr('r', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return Math.max(0, d.radius - 5.05); }))
                .attr("cx", (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.x; }))
                .attr("cy", (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.y; }))
                .attr('padding', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return 50; }))
                .attr("class", (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.classes; }))
                .style('fill', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.color; }));
        if (this.data && this.data.bubblesData && this.bubbleChart)
            this.data.bubblesData.forEach((/**
             * @param {?} c
             * @return {?}
             */
            function (c) {
                /** @type {?} */
                var group = _this.bubbleChart.select("g[id=" + c.id + "]");
                c.texts.forEach((/**
                 * @param {?} tx
                 * @return {?}
                 */
                function (tx) {
                    group.append("text")
                        .style("text-anchor", "middle")
                        .attr("dx", tx.x_function)
                        .attr("dy", tx.y_function)
                        .text(tx.label)
                        .attr("font-size", tx.fontSize_function)
                        .attr("fill", tx.color)
                        .attr("id", tx.id)
                        .attr("class", tx.classes);
                }));
            }));
        if (this.bubbleChart)
            this.bubbleChart.selectAll("#" + this.data.containerId + " g")
                .append('circle')
                .attr('r', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return 10; }))
                .attr('padding', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return 50; }))
                .style('fill', "white")
                .attr('cx', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.x; }))
                .attr('cy', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.y; }))
                .attr("b-type", "x_inner_circle")
                .attr("class", "circle_x-inner-circle");
        if (this.bubbleChart)
            this.bubbleChart.selectAll("#" + this.data.containerId + " g")
                .append("text")
                .style("user-select", "none")
                .style("text-anchor", "middle")
                .attr("fill", "black")
                .html("&#10005;")
                .attr("font-family", "sans-serif")
                .attr("font-size", 15)
                .attr("b-type", "x_inner_label")
                .attr("class", "circle_x-label");
    };
    /** Sets the bubble chart force simulation */
    /**
     * Sets the bubble chart force simulation
     * @private
     * @return {?}
     */
    BubbleChartComponent.prototype.setBubbleChartSimulation = /**
     * Sets the bubble chart force simulation
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var tmpSimulationData = (this.data && this.data.forceSimulationData ? this.data.forceSimulationData : {});
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
        // var simulation = 
        forceSimulation()
            .velocityDecay(velocityDecay)
            .force("x", forceX(xPull).strength(xPullStrength))
            .force("y", forceY(yPull).strength(yPullStrength))
            .force("collide", forceCollide().radius((/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return d.radius; })).strength(collisionStrength).iterations(collisionIterations))
            .nodes(this.bubbles)
            .on('tick', this.update.bind(this));
        //   .stop()
        // for (var i = 0; i < 300; i++) {
        //   simulation.tick()
        // }
    };
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
    return BubbleChartComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
        this._loaded = false;
    }
    /**
     * @return {?}
     */
    ChartComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.data || this._loaded)
            return;
        this._loaded = true;
        setTimeout((/**
         * @return {?}
         */
        function () {
            var _a = _this.data, containerId = _a.containerId, libOptions = _a.libOptions;
            /** @type {?} */
            var chart = new ApexCharts(document.querySelector("#" + containerId), libOptions);
            chart.render();
            if (_this.data.setChart)
                _this.data.setChart(chart);
        }));
    };
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
    return ChartComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FacetComponent = /** @class */ (function () {
    function FacetComponent() {
    }
    /**
     * @param {?} inputPayload
     * @param {?=} value
     * @return {?}
     */
    FacetComponent.prototype.onChange = /**
     * @param {?} inputPayload
     * @param {?=} value
     * @return {?}
     */
    function (inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload: inputPayload, value: value });
    };
    FacetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-facet',
                    template: "<div *ngIf=\"data\" class=\"n7-facet\">\r\n    <div *ngFor=\"let section of data.sections\" class=\"n7-facet__section {{ section.classes || '' }}\">\r\n        <div *ngFor=\"let input of section.inputs\"\r\n            class=\"n7-facet__section-input n7-facet__section-input-{{ input.type }} {{ input.classes || '' }}\">\r\n\r\n            <ng-container [ngSwitch]=\"input.type\">\r\n\r\n                <!-- Checkbox -->\r\n                <ng-container *ngSwitchCase=\"'checkbox'\">\r\n                    <input type=\"checkbox\" id=\"{{ input.id }}\" class=\"n7-facet__input-checkbox-input\"\r\n                        [checked]=\"input.checked\"\r\n                        [disabled]=\"input.disabled\"\r\n                        (change)=\"onChange(input.payload, $event.target.checked)\">\r\n                    <label *ngIf=\"input.label\" class=\"n7-facet__checkbox-label\" for=\"{{ input.id }}\">\r\n                        {{ input.label }}\r\n                    </label>\r\n                </ng-container>\r\n\r\n                <!-- Text -->\r\n                <ng-container *ngSwitchCase=\"'text'\">\r\n                    <label *ngIf=\"input.label\" class=\"n7-facet__input-text-label\" for=\"{{ input.id }}\">\r\n                        {{ input.label }}\r\n                    </label>\r\n                    <div class=\"n7-facet__input-text-wrapper\">\r\n                        <input type=\"text\" id=\"{{ input.id }}\" class=\"n7-facet__input-text {{input.classes || ''}}\"\r\n                            placeholder=\"{{input.placeholder || ''}}\"\r\n                            [value]=\"input.value || null\"\r\n                            [disabled]=\"input.disabled\"\r\n                            (input)=\"onChange(input.inputPayload, $event.target.value)\"\r\n                            (keyup.enter)=\"onChange(input.enterPayload, $event.target.value)\">\r\n                        <span *ngIf=\"input.icon\" class=\"n7-facet__input-text-icon {{input.icon || ''}}\" \r\n                            (click)=\"onChange(input.iconPayload)\">\r\n                        </span>\r\n                    </div>\r\n                </ng-container>\r\n\r\n                <!-- Link -->\r\n                <ng-container *ngSwitchCase=\"'link'\">\r\n                    <div class=\"n7-facet__input-link {{ input.classes || '' }}\"\r\n                        (click)=\"onChange(input.payload)\">\r\n                        <span *ngIf=\"input.icon\" class=\"n7-facet__input-link-icon {{ input.icon }}\"></span>\r\n                        <span class=\"n7-facet__input-link-text\">{{ input.text }}</span>\r\n                        <span *ngIf=\"input.counter\" class=\"n7-facet__input-link-counter\">{{ input.counter }}</span>\r\n                    </div>\r\n                </ng-container>\r\n\r\n                <!-- Select -->\r\n                <ng-container *ngSwitchCase=\"'select'\">\r\n                    <label *ngIf=\"input.label\" for=\"{{ input.id }}\">{{ input.label }}</label>\r\n                    <select (change)=\"onChange(input.payload, $event.target.value)\" \r\n                        id=\"{{ input.id }}\"\r\n                        class=\"n7-facet__input-select {{ input.classes || '' }}\"\r\n                        [disabled]=\"input.disabled\">\r\n                        <option *ngFor=\"let option of input.options\" \r\n                            [value]=\"option.value\" \r\n                            [disabled]=\"option.disabled\" \r\n                            [selected]=\"option.selected\">{{ option.label }}</option>\r\n                    </select>\r\n                </ng-container>\r\n            </ng-container>\r\n\r\n        </div>\r\n    </div>\r\n</div>"
                }] }
    ];
    FacetComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return FacetComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FacetHeaderComponent = /** @class */ (function () {
    function FacetHeaderComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    FacetHeaderComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    FacetHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-facet-header',
                    template: "<div *ngIf=\"data\" class=\"n7-facet-header {{ data.classes || '' }}\">\r\n    <span class=\"n7-facet-header__icon-left {{ data.iconLeft }}\" \r\n          *ngIf=\"data.iconLeft\">\r\n    </span>\r\n    <span class=\"n7-facet-header__text-wrapper\">\r\n        <span class=\"n7-facet-header__text\">\r\n            {{data.text}}\r\n        </span>\r\n        <span class=\"n7-facet-header__secondary-text\" *ngIf=\"data.additionalText\">\r\n            {{data.additionalText}}\r\n        </span>\r\n    </span>\r\n    <span *ngIf=\"data.iconRight\" \r\n          class=\"n7-facet-header__icon-right {{ data.iconRight }}\"\r\n        (click)=\"onClick(data.payload)\">\r\n    </span>\r\n</div>"
                }] }
    ];
    FacetHeaderComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return FacetHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FacetYearRangeComponent = /** @class */ (function () {
    function FacetYearRangeComponent() {
    }
    /**
     * @param {?} payload
     * @param {?} selected
     * @return {?}
     */
    FacetYearRangeComponent.prototype.onChange = /**
     * @param {?} payload
     * @param {?} selected
     * @return {?}
     */
    function (payload, selected) {
        switch (payload) {
            case 'in-date':
                // find index of selected option
                /** @type {?} */
                var opts = this.data.inDate.options;
                this.data.inDate._meta = opts.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) { return o.value == selected; })).value;
                /** @type {?} */
                var sliceIndex = opts.findIndex((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) { return o.value == selected; }))
                // make new array of possible years
                ;
                // make new array of possible years
                /** @type {?} */
                var newOptions = opts.slice(sliceIndex, opts.length)
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
                this.emit('change', {
                    payload: payload,
                    value: {
                        from: this.data.inDate._meta,
                        to: this.data.outDate._meta
                    }
                });
                break;
            default:
                break;
        }
    };
    FacetYearRangeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-facet-year-range',
                    template: "<div *ngIf=\"data\" class=\"n7-facet-year-range\">\r\n\r\n    <!-- Select starting year -->\r\n    <div class=\"n7-facet-year-range__in\">\r\n        <label class=\"n7-facet-year-range__in-label\">\r\n            {{ data.inDate.text }}\r\n        </label>\r\n        <select (change)=\"onChange(data.inDate.payload, $event.target.value)\"\r\n            class=\"n7-facet-year-range__in-select {{ data.inDate.classes || '' }}\">\r\n            <!-- Placeholder option -->\r\n            <option *ngIf=\"data.inDate.placeholder.length > 0\" value=\"{{ data.inDate.placeholder }}\" disabled selected>\r\n                {{ data.inDate.placeholder }}\r\n            </option>\r\n            <option *ngFor=\"let opt of data.inDate.options\" value=\"{{ opt.value }}\">\r\n                {{ opt.value }}\r\n            </option>\r\n        </select>\r\n    </div>\r\n\r\n    <!-- Select final year -->\r\n    <div class=\"n7-facet-year-range__out\">\r\n        <label class=\"n7-facet-year-range__out-label\">\r\n            {{ data.outDate.text }}\r\n        </label>\r\n        <select (change)=\"onChange(data.outDate.payload, $event.target.value)\"\r\n                class=\"n7-facet-year-range__out-select {{ data.outDate.classes || '' }}\"\r\n                formControlName=\"outDate\">\r\n            <!-- Placeholder option -->\r\n            <option *ngIf=\"data.outDate.placeholder.length > 0\" value=\"{{ data.outDate.placeholder }}\" disabled selected>\r\n                {{ data.outDate.placeholder }}\r\n            </option>\r\n            <option *ngFor=\"let opt of data.outDate.options\" value=\"{{ opt.value }}\">\r\n                {{ opt.value }}\r\n            </option>\r\n        </select>\r\n    </div>\r\n</div>"
                }] }
    ];
    FacetYearRangeComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return FacetYearRangeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    FooterComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    FooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-footer',
                    template: "<div *ngIf=\"data\" class=\"n7-footer {{data.classes || ''}}\">\r\n    <div class=\"n7-footer__content\">\r\n        <!-- Loop footer content columns -->\r\n        <div class=\"n7-footer__column {{column.classes || ''}}\" *ngFor=\"let column of data.columns\">\r\n            <ng-container *ngTemplateOutlet=\"footerColumn; context:{$implicit: column}\"></ng-container>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Template: Columns -->\r\n<ng-template #footerColumn let-column>\r\n    <h2 *ngIf=\"column.title\" class=\"n7-footer__column-title\">\r\n        {{ column.title }}\r\n    </h2>\r\n    <p *ngIf=\"column.text\" \r\n       class=\"n7-footer__column-text\"\r\n       [innerHTML]=\"column.text\">\r\n    </p>\r\n    <div *ngIf=\"column.links\" class=\"n7-footer__column-nav\">\r\n        <ul class=\"n7-footer__column-nav-list\">\r\n            <li *ngFor=\"let link of column.links\"\r\n                class=\"n7-footer__column-nav-item {{link.classes || ''}}\">\r\n                <a class=\"n7-footer__column-nav-link\" \r\n                   (click)=\"onClick(link.payload)\">\r\n                    {{ link.text }}\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n    <div *ngIf=\"column.images\" class=\"n7-footer__column-images\">\r\n        <img *ngFor=\"let image of column.images\" \r\n             src=\"{{ image.url }}\" \r\n             [attr.alt]=\"image.alttext\"\r\n             (click)=\"onClick(image.payload)\"\r\n             class=\"{{image.classes || ''}}\">\r\n    </div>\r\n</ng-template>"
                }] }
    ];
    FooterComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return FooterComponent;
}());

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
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    HeaderComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        // console.log(type, payload);
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    /**
     * @param {?} payload
     * @param {?} keyCode
     * @param {?} value
     * @return {?}
     */
    HeaderComponent.prototype.onKeyUp = /**
     * @param {?} payload
     * @param {?} keyCode
     * @param {?} value
     * @return {?}
     */
    function (payload, keyCode, value) {
        if (!this.emit)
            return;
        this.emit('keyUp', { payload: payload, keyCode: keyCode, value: value });
    };
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
    return HeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HeroComponent = /** @class */ (function () {
    function HeroComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    HeroComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    HeroComponent.prototype.onInputChange = /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    function (payload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload: payload, value: value });
    };
    /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    HeroComponent.prototype.onInputEnter = /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    function (payload, value) {
        if (!this.emit)
            return;
        this.emit('enter', { inputPayload: payload, value: value });
    };
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
    return HeroComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ItemPreviewComponent = /** @class */ (function () {
    function ItemPreviewComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    ItemPreviewComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    ItemPreviewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-item-preview',
                    template: "<div *ngIf=\"data\" \r\n     class=\"n7-item-preview {{data.classes || ''}}\" \r\n     [ngClass]=\"{ 'has-image' : !!data.image }\"\r\n     (click)=\"onClick(data.payload)\">\r\n\r\n    <!-- Image -->\r\n    <div class=\"n7-item-preview__image\"\r\n         *ngIf=\"data.image\"\r\n         [style.background-image] = \"'url(' + data.image + ')'\">       \r\n    </div>         \r\n    \r\n    <div class=\"n7-item-preview__content\">\r\n\r\n        <!-- Title and text -->\r\n        <div class=\"n7-item-preview__title-text\">\r\n            <h1 class=\"n7-item-preview__title\">\r\n                {{ data.title }}\r\n            </h1>\r\n            <p class=\"n7-item-preview__text\" *ngIf=\"data.text\">\r\n                {{ data.text }}\r\n            </p>\r\n        </div>\r\n\r\n        <!-- Metadata -->\r\n        <div class=\"n7-item-preview__metadata\" *ngIf=\"data.metadata\">       \r\n            <div class=\"n7-item-preview__metadata-group {{ meta.classes || '' }}\" *ngFor=\"let meta of data.metadata\">\r\n                <h3 class=\"n7-item-preview__metadata-group-title\" *ngIf=\"meta.title\">\r\n                {{ meta.title }}\r\n                </h3>\r\n                <div class=\"n7-item-preview__metadata-item {{ item.classes || '' }}\" *ngFor=\"let item of meta.items\">\r\n                    <span class=\"n7-item-preview__metadata-item-icon {{item.icon}}\">  </span>\r\n                    <span class=\"n7-item-preview__metadata-item-label\" *ngIf=\"item.label\">{{item.label}}: </span>\r\n                    <span class=\"n7-item-preview__metadata-item-value\" *ngIf=\"item.value\">{{item.value}}</span>\r\n                </div>\r\n            </div>\r\n        </div>   \r\n    </div>\r\n</div>\r\n"
                }] }
    ];
    ItemPreviewComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return ItemPreviewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InnerTitleComponent = /** @class */ (function () {
    function InnerTitleComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    InnerTitleComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    InnerTitleComponent.prototype.onChange = /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    function (payload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload: payload, value: value });
    };
    /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    InnerTitleComponent.prototype.onInputChange = /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    function (payload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload: payload, value: value });
    };
    /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    InnerTitleComponent.prototype.onInputEnter = /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    function (payload, value) {
        if (!this.emit)
            return;
        this.emit('search', { inputPayload: payload, value: value });
    };
    InnerTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-inner-title',
                    template: "<div *ngIf=\"data\" class=\"n7-inner-title\">\r\n    <span *ngIf=\"data.icon\" class=\"n7-inner-title__icon-left {{data.icon || ''}}\"></span>\r\n\r\n    <div class=\"n7-inner-title__wrapper-texts\">\r\n        <div class=\"n7-inner-title__title {{data.title.main.classes || ''}}\">\r\n            {{data.title.main.text}}\r\n        </div>\r\n        <div *ngIf=\"data.title.secondary\" \r\n             class=\"n7-inner-title__subtitle {{data.title.secondary.classes || ''}}\">\r\n            {{data.title.secondary.text}}\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"n7-inner-title__tools\">\r\n        <!-- Toolbar label -->\r\n        <div *ngIf=\"data.tools\"\r\n            class=\"n7-inner-title__tools-label \">\r\n            {{data.tools}}\r\n        </div>\r\n        <!-- Actions -->\r\n        <ng-container *ngIf=\"data.actions\">\r\n            <ng-container *ngTemplateOutlet=\"actions; \r\n                        context:{$implicit: data.actions}\">\r\n            </ng-container>\r\n        </ng-container>\r\n        \r\n    </div>\r\n\r\n\r\n</div>\r\n\r\n<!-- Template actions -->\r\n<ng-template #actions let-action>\r\n    <ng-container *ngIf=\"action.select\">\r\n        <ng-container *ngTemplateOutlet=\"select;\r\n                      context:{$implicit: action.select}\">\r\n        </ng-container>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"action.search\">\r\n        <ng-container *ngTemplateOutlet=\"search; \r\n                      context:{$implicit: action.search}\">\r\n        </ng-container>\r\n    </ng-container>\r\n    \r\n    <ng-container *ngIf=\"action.buttons\">\r\n        <ng-container *ngTemplateOutlet=\"buttons;\r\n                      context:{$implicit: action.buttons}\">\r\n        </ng-container>\r\n    </ng-container>\r\n</ng-template>\r\n    \r\n<!-- Template sorting -->\r\n<ng-template #select let-select>\r\n<div class=\"n7-inner-title__sorting\">\r\n    <span *ngIf=\"select.label\"\r\n          class=\"n7-inner-title__sorting-label \">\r\n        {{select.label}}\r\n    </span>\r\n    <select (change)=\"onChange(select.payload, $event.target.value)\"\r\n            class=\"n7-inner-title__sorting-select\">\r\n        <option *ngFor=\"let opt of select.options\"\r\n                class=\"n7-inner-title__sorting-option \">\r\n            {{opt.value}}\r\n        </option>\r\n    </select>\r\n</div>\r\n</ng-template>\r\n\r\n<!-- Template search -->\r\n<ng-template #search let-search>\r\n    <div class=\"n7-inner-title__search\">\r\n        <input type=\"text\" \r\n            class=\"n7-inner-title__search-bar \" \r\n            placeholder=\"{{search.placeholder}}\"\r\n            (input)=\"onInputChange(search.payload, $event.target.value)\"\r\n            (keyup.enter)=\"onInputEnter(search.payload, $event.target.value)\">\r\n     <button *ngIf=\"search.button\" \r\n             (click)=\"onClick(search.button.payload)\"\r\n             class=\"n7-btn n7-inner-title__search-button \">\r\n         {{search.button.text}}\r\n     </button>\r\n    </div>\r\n</ng-template>\r\n\r\n<!-- Template buttons -->\r\n<ng-template #buttons let-buttons>\r\n    <div class=\"n7-inner-title__buttons-wrapper\">\r\n        <div *ngFor=\"let btn of buttons\"\r\n            class=\"n7-inner-title__single-button-wrapper\">\r\n            <button (click)=\"onClick(btn.payload)\" \r\n                    class=\"n7-btn n7-inner-title__buttons-action {{btn.classes || ''}}\">\r\n                {{btn.text}}\r\n            </button>\r\n        </div>\r\n    </div>\r\n</ng-template>"
                }] }
    ];
    InnerTitleComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return InnerTitleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
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
    return LoaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MetadataViewerComponent = /** @class */ (function () {
    function MetadataViewerComponent() {
    }
    MetadataViewerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-metadata-viewer',
                    template: "<div *ngIf=\"data\" class=\"n7-metadata-viewer\">\r\n    <!-- Metadata groups wrapper -->\r\n    <div class=\"n7-metadata-viewer__wrapper {{ data.classes  || ''}}\" \r\n          *ngFor=\"let grp of data.group\">\r\n        <!-- For each data group, render it -->\r\n        <ng-container *ngTemplateOutlet=\"group; context:{$implicit: grp}\"></ng-container>\r\n    </div>\r\n</div>\r\n\r\n<!-- Template for Metadata.group -->\r\n<ng-template #group let-grp>\r\n    <div *ngIf=\"grp.title || grp.items\" class=\"n7-metadata-viewer__group {{ grp.classes || '' }}\">\r\n        <div class=\"n7-metadata-viewer__group-title\" *ngIf=\"grp.title\">{{grp.title}}</div>\r\n        <div class=\"n7-metadata-viewer__group-content\" *ngIf=\"grp.items\">\r\n            <div class=\"n7-metadata-viewer__item\" *ngFor=\"let i of grp.items\">\r\n                <span class=\"n7-metadata-viewer__item-label\">{{i.label}} </span>\r\n                <span class=\"n7-metadata-viewer__item-value\">{{i.value}} </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Render all child groups -->\r\n    <div *ngIf=\"grp.group\">\r\n        <div class=\"n7-metadata-viewer__group-wrapper\"\r\n              *ngFor=\"let grp of grp.group\">\r\n            <ng-container *ngTemplateOutlet=\"group; context:{$implicit: grp}\"></ng-container>\r\n        </div>\r\n    </div>\r\n</ng-template>"
                }] }
    ];
    MetadataViewerComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return MetadataViewerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    NavComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
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
    return NavComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    PaginationComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    PaginationComponent.prototype.onChange = /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    function (payload, value) {
        if (!this.emit)
            return;
        // needs to also emit selected value
        this.emit('change', { inputPayload: payload, value: value });
    };
    PaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-pagination',
                    template: "<nav class=\"n7-pagination {{data.classes || ''}}\" \r\n     *ngIf=\"data\"\r\n     [ngClass]=\"{ 'has-results-select' : data.select }\">\r\n    <ul class=n7-pagination__items>\r\n\r\n        <li class=\"n7-pagination__first {{data.first.classes || ''}}\" *ngIf=\"data.first\">\r\n            <a class=\"n7-pagination__first-link {{ data.first.text ? 'has-text' : '' }}\" \r\n               (click)=\"onClick(data.first.payload)\">\r\n                <span class=\"n7-pagination__first-icon n7-icon-angle-double-left\"></span>\r\n                <span class=\"n7-pagination__first-label\" *ngIf=\"data.first.text\">\r\n                    {{ data.first.text }}\r\n                </span>\r\n            </a>\r\n        </li>\r\n        <li class=\"n7-pagination__prev {{data.prev.classes || ''}}\" *ngIf=\"data.prev\">\r\n            <a class=\"n7-pagination__prev-link {{ data.prev.text ? 'has-text' : '' }}\" \r\n               (click)=\"onClick(data.prev.payload)\">\r\n                <span class=\"n7-pagination__prev-icon n7-icon-angle-left\"></span>\r\n                <span class=\"n7-pagination__prev-label\" *ngIf=\"data.prev.text\">\r\n                    {{ data.prev.text }}\r\n                </span>\r\n            </a>\r\n        </li>\r\n\r\n        <li class=\"n7-pagination__page {{page.classes || ''}}\" *ngFor=\"let page of data.links\">\r\n            <a class=\"n7-pagination__page-link\" (click)=\"onClick(page.payload)\">{{ page.text }}</a>\r\n        </li>\r\n\r\n        <li class=\"n7-pagination__next {{data.next.classes || ''}}\" *ngIf=\"data.next\">\r\n            <a class=\"n7-pagination__next-link {{ data.next.text ? 'has-text' : '' }}\" \r\n               (click)=\"onClick(data.next.payload)\">\r\n                <span class=\"n7-pagination__next-label\" *ngIf=\"data.next.text\">\r\n                    {{ data.next.text }}\r\n                </span>\r\n                <span class=\"n7-pagination__next-icon n7-icon-angle-right\"></span>\r\n            </a>\r\n        </li>\r\n        <li class=\"n7-pagination__last {{data.last.classes || ''}}\" *ngIf=\"data.last\">\r\n            <a class=\"n7-pagination__last-link {{ data.last.text ? 'has-text' : '' }}\" \r\n               (click)=\"onClick(data.last.payload)\">\r\n                <span class=\"n7-pagination__last-label\" *ngIf=\"data.last.text\">\r\n                    {{ data.last.text }}\r\n                </span>\r\n                <span class=\"n7-pagination__last-icon  n7-icon-angle-double-right\"></span>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n    \r\n    <div class=\"n7-pagination__setting\"\r\n         *ngIf=\"data.select\">\r\n        <span class=\"n7-pagination__setting-label\"\r\n              *ngIf=\"data.select.label\">\r\n            {{data.select.label}}\r\n        </span>\r\n        <select *ngIf=\"data.select.options\" \r\n                name=\"n7-pagination__select-size\" \r\n                class=\"n7-pagination__setting-select\"\r\n                (change)=\"onChange(data.select.payload, $event.target.value)\"\r\n                [disabled]=\"data.select.disabled\">\r\n            <option *ngFor=\"let opt of data.select.options\"\r\n                    [disabled]=\"opt.disabled\"\r\n                    [selected]=\"opt.selected\">\r\n                {{opt.text}}\r\n            </option>\r\n        </select>\r\n    </div>\r\n</nav>"
                }] }
    ];
    PaginationComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return PaginationComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SidebarHeaderComponent = /** @class */ (function () {
    function SidebarHeaderComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    SidebarHeaderComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    SidebarHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-sidebar-header',
                    template: "<div *ngIf=\"data\" class=\"n7-sidebar-header {{ data.classes || ''}}\">\r\n    <span class=\"n7-sidebar-header__icon-left {{ data.iconLeft }}\" \r\n          *ngIf=\"data.iconLeft\">\r\n    </span>\r\n    <span class=\"n7-sidebar-header__text-wrapper\"\r\n          *ngIf=\"data.text || data.additionalText\">\r\n        <span class=\"n7-sidebar-header__text\">\r\n            {{data.text}}\r\n        </span>\r\n        <span class=\"n7-sidebar-header__secondary-text\" \r\n              *ngIf=\"data.additionalText\">\r\n            {{data.additionalText}}\r\n        </span>\r\n    </span>\r\n    <span *ngIf=\"data.iconRight\"\r\n          class=\"n7-sidebar-header__icon-right {{ data.iconRight }}\" \r\n          (click)=\"onClick(data.payload)\"></span>\r\n</div>"
                }] }
    ];
    SidebarHeaderComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return SidebarHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SimpleAutocompleteComponent = /** @class */ (function () {
    function SimpleAutocompleteComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    SimpleAutocompleteComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    SimpleAutocompleteComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-simple-autocomplete',
                    template: "<div *ngIf=\"data\" class=\"n7-simple-autocomplete\">\r\n    <ul class=\"n7-simple-autocomplete__list {{data.classes || ''}}\">\r\n        <li *ngFor=\"let suggestion of data.suggestion\" \r\n            class=\"n7-simple-autocomplete__item\"\r\n            (click)=\"onClick(suggestion.payload)\">\r\n            <span *ngIf=\"suggestion.prefix\" class=\"n7-simple-autocomplete__prefix\">{{suggestion.prefix}}</span>\r\n            <span class=\"n7-simple-autocomplete__typed\">{{suggestion.match}}</span>\r\n            <span *ngIf=\"suggestion.suffix\" class=\"n7-simple-autocomplete__suffix\">{{suggestion.suffix}}</span>\r\n        </li>\r\n    </ul> \r\n</div>"
                }] }
    ];
    SimpleAutocompleteComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return SimpleAutocompleteComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TableComponent = /** @class */ (function () {
    function TableComponent() {
    }
    /**
     * @param {?} cell_payload
     * @return {?}
     */
    TableComponent.prototype.onCellClick = /**
     * @param {?} cell_payload
     * @return {?}
     */
    function (cell_payload) {
        if (!this.emit)
            return;
        this.emit('cellClick', cell_payload);
    };
    /**
     * @param {?} cell_payload
     * @return {?}
     */
    TableComponent.prototype.onCellDblClick = /**
     * @param {?} cell_payload
     * @return {?}
     */
    function (cell_payload) {
        if (!this.emit)
            return;
        this.emit('cellDblClick', cell_payload);
    };
    /**
     * @param {?} cell_payload
     * @param {?} cell_value
     * @return {?}
     */
    TableComponent.prototype.onInputTextChange = /**
     * @param {?} cell_payload
     * @param {?} cell_value
     * @return {?}
     */
    function (cell_payload, cell_value) {
        if (!this.emit)
            return;
        /** @type {?} */
        var textChange_payload = { tc_payload: cell_payload, val: cell_value };
        this.emit('inputTextChange', textChange_payload);
    };
    TableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-table',
                    template: "<section class=\"n7-table {{data.classes || ''}}\" *ngIf=\"data\">\r\n    <table class=\"n7-table__table\">\r\n    \t<thead class=\"n7-table__table-header\" *ngIf=\"data.head\">\r\n            <tr class=\"n7-table__table-header-row {{row.classes || ''}}\"\r\n                *ngFor=\"let row of data.head\">\r\n                <th class=\"n7-table__table-header-cell {{cell.classes || ''}}\"\r\n                    *ngFor=\"let cell of row.cells\"\r\n                    (click)=\"onCellClick(cell.payload)\"\r\n                    [innerHTML]=\"cell.content\">\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n\r\n        <tbody class=\"n7-table__table-body\" *ngIf=\"data.body\">\r\n            <tr class=\"n7-table__table-body-row {{row.classes || ''}}\"\r\n                *ngFor=\"let row of data.body; let rowHead of data.head\">\r\n                <td class=\"n7-table__table-body-cell {{cell.classes || ''}}\"\r\n                    *ngFor=\"let cell of row.cells; let cellHead of rowHead.cells\"\r\n                    (click)=\"onCellClick(cell.payload)\"\r\n                    (dblclick)=\"onCellDblClick(cell.payload)\"\r\n                    [attr.data-label]=\"cellHead.content\">\r\n                    <span   class=\"n7-table__table-body-cell-innerhtml\"\r\n                            *ngIf=\"!cell.type || cell.type=='html'\"\r\n                            [innerHTML]=\"cell.content\"></span>\r\n                    <input  class=\"n7-table__table-body-cell-inputtext\"\r\n                            *ngIf=\"cell.type=='input:text'\"\r\n                            type=\"text\" placeholder=\"{{cell.content}}\"\r\n                            id=\"{{cell._meta.input_id}}\"\r\n                            (keyup.enter)=\"onInputTextChange(cell.payload, $event.target.value)\"/>                        \r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n\r\n        <tfoot class=\"n7-table__table-footer\" *ngIf=\"data.foot\">\r\n            <tr class=\"n7-table__table-footer-row {{row.classes || ''}}\"\r\n                *ngFor=\"let row of data.foot\">\r\n                <td class=\"n7-table__table-footer-cell {{cell.classes || ''}}\"\r\n                    *ngFor=\"let cell of row.cells\"\r\n                    (click)=\"onCellClick(cell.payload)\"\r\n                    [innerHTML]=\"cell.content\">\r\n                </td>\r\n            </tr>\r\n        </tfoot>        \r\n \t </table> \r\n</section>"
                }] }
    ];
    TableComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return TableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TagComponent = /** @class */ (function () {
    function TagComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    TagComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
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
    return TagComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * ImageViewerComponent <n7-image-viewer>
 *
 */
var ImageViewerComponent = /** @class */ (function () {
    function ImageViewerComponent() {
        this._loaded = false;
    }
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.data || this._loaded)
            return;
        this._loaded = true;
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var prefixUrl = !_this.data.prefixUrl ? "//openseadragon.github.io/openseadragon/images/" : _this.data.prefixUrl;
            /** @type {?} */
            var viewer = openseadragon(__assign({ id: _this.data.viewerId, prefixUrl: prefixUrl, tileSources: _this.data.images, zoomInButton: "n7-image-viewer-zoom-in", zoomOutButton: "n7-image-viewer-zoom-out", homeButton: "n7-image-viewer-home", fullPageButton: "n7-image-viewer-full-screen" }, _this.data.libOptions));
            _this.data._setViewer(viewer);
        }));
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    ImageViewerComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit("thumbclick", payload);
    };
    ImageViewerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-image-viewer',
                    template: "<div *ngIf=\"data\" class=\"n7-image-viewer {{data.classes || ''}}\">\r\n    <!-- OSD viewer -->\r\n    <div id=\"{{data.viewerId}}\" class=\"n7-image-viewer__viewer\">\r\n    </div>\r\n\r\n    <!-- Thumbs -->\r\n    <div class=\"n7-image-viewer__thumbs\" *ngIf=\"data.thumbs\">\r\n        <ul class=\"n7-image-viewer__thumb-list\">\r\n            <li *ngFor=\"let thumb of data.thumbs\" \r\n                class=\"n7-image-viewer__thumb-item {{thumb.classes || ''}}\"\r\n                [ngStyle]=\"{'background-image': 'url(' + thumb.url + ')'}\"\r\n                (click)=\"onClick(thumb.payload)\">\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n    <!-- Zoom controls -->\r\n    <div class=\"n7-image-viewer__controls\">\r\n        <ul class=\"n7-image-viewer__controls-list\">\r\n            <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-zoom-in\">\r\n                <span class=\"n7-icon-search-plus\"></span>\r\n            </li>\r\n            <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-zoom-out\">\r\n                <span class=\"n7-icon-search-minus\"></span>\r\n            </li>\r\n            <!--\r\n            <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-home\">\r\n                <span class=\"n7-icon-home\"></span>\r\n            </li>\r\n            <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-full-screen\">\r\n                <span class=\"n7-icon-expand-arrows\"></span>\r\n            </li>\r\n            -->\r\n        </ul>\r\n    </div>\r\n</div>"
                }] }
    ];
    ImageViewerComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return ImageViewerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToastComponent = /** @class */ (function () {
    function ToastComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    ToastComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
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
    return ToastComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TreeComponent = /** @class */ (function () {
    function TreeComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    TreeComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    TreeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-tree',
                    template: "<div *ngIf=\"data\" class=\"n7-tree\">\r\n    <!-- Start recursive rendering -->\r\n    <ng-container *ngTemplateOutlet=\"recursiveTree; context:{$implicit: data.items}\"></ng-container>\r\n\r\n    <!-- Template for recursive children rendering -->\r\n    <ng-template #recursiveTree let-node>\r\n        <div class=\"n7-tree__item {{ item.classes || '' }}\" *ngFor=\"let item of node\">\r\n            <div class=\"n7-tree__item-contents\">\r\n                <!-- Render expand/collapse arrow -->\r\n                <span *ngIf=\"item.toggle\" \r\n                      class=\"n7-tree__item-toggle {{ item.toggle.icon }}\"\r\n                      (click)=\"onClick(item.toggle.payload)\">\r\n                </span>\r\n                <!-- Render the node -->\r\n                <div class=\"n7-tree__item-details\"\r\n                     (click)=\"onClick(item.payload)\">\r\n                    <span *ngIf=\"item.icon\" class=\"n7-tree__item-icon {{ item.icon }}\"></span>\r\n                    <img class=\"n7-tree__item-img\" *ngIf=\"item.img\" src=\"{{ item.img }}\" alt=\"{{ item.text }}\"/>\r\n                    <span class=\"n7-tree__item-text\">{{ item.text }}</span>\r\n                    <span class=\"n7-tree__item-right-icon n7-icon-images\"></span>\r\n                </div>\r\n            </div>\r\n            <!-- Check for more child nodes and render them -->\r\n            <div class=\"n7-tree__children-wrapper\" *ngIf=\"item.items\">\r\n                <ng-container *ngTemplateOutlet=\"recursiveTree; context:{$implicit: item.items}\"></ng-container>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n</div>"
                }] }
    ];
    TreeComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return TreeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WizardComponent = /** @class */ (function () {
    function WizardComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    WizardComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
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
    return WizardComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [
    AdvancedAutocompleteComponent,
    AlertComponent,
    BreadcrumbsComponent,
    BubbleChartComponent,
    ChartComponent,
    FacetComponent,
    FacetHeaderComponent,
    FacetYearRangeComponent,
    FooterComponent,
    HeaderComponent,
    ImageViewerComponent,
    HeroComponent,
    ItemPreviewComponent,
    InnerTitleComponent,
    LoaderComponent,
    MetadataViewerComponent,
    NavComponent,
    PaginationComponent,
    SidebarHeaderComponent,
    SimpleAutocompleteComponent,
    TableComponent,
    TagComponent,
    ToastComponent,
    TreeComponent,
    WizardComponent,
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ADVANCED_AUTOCOMPLETE_MOCK = {
    results: [
        {
            group: {
                title: 'Books',
                icon: 'n7-icon-file3',
                classes: 'color-people',
                items: [
                    { label: 'Label risultato', value: 'Metadato aggiuntivo', payload: 'res1' },
                    { label: 'Label risultato', value: 'Metadato aggiuntivo', payload: 'res2' },
                    { label: 'Label risultato', value: 'Metadato aggiuntivo', payload: 'res3' },
                    { label: 'Label risultato', value: 'Metadato aggiuntivo', payload: 'res4' },
                    { label: 'Label risultato', value: 'Metadato aggiuntivo', payload: 'res5' },
                ],
                payload: 'books',
            }
        },
        {
            group: {
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                items: [
                    { label: 'Label risultato', value: 'Metadato aggiuntivo', payload: 'res6' },
                    { label: 'Label risultato', value: 'Metadato aggiuntivo', payload: 'res7' },
                    { label: 'Label risultato', value: 'Metadato aggiuntivo', payload: 'res8' },
                    { label: 'Label risultato', value: 'Metadato aggiuntivo', payload: 'res9' },
                ],
                payload: 'movies',
            }
        },
        { label: 'Label risultato', value: 'Metadato esterno', payload: 'res10' },
        { label: 'Label risultato', value: 'Metadato esterno', payload: 'res11' },
        { label: 'Label risultato', value: 'Metadato esterno', payload: 'res12' },
        { label: 'Label risultato', value: 'Metadato esterno', payload: 'res13' },
    ],
    actions: {
        advanced: {
            text: 'Ricerca Avanzata',
            payload: 'advanced-search',
        },
        showMore: {
            text: 'Visualizza tutti i 98 risultati per "ang"',
            payload: 'show-more',
        }
    },
    fallback: 'Spiacenti, non è stato trovato nessun risultato. <br> Riprova con una nuova ricerca.'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ALERT_MOCK = {
    text: "\n  This is an alert for the user with some <strong>bold</strong> and <i>italic</i> text.\n  This is an alert for the user with some <strong>bold</strong> and <i>italic</i> text.\n  ",
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
var BREADCRUMBS_MOCK = {
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
var cWidth = 1000;
/** @type {?} */
var cHeight = 500;
var ɵ0 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.x; }, ɵ1 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.y - (d.radius / 9); }, ɵ2 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.radius / 5; }, ɵ3 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.x; }, ɵ4 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.y + (d.radius / 9); }, ɵ5 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.radius / 6; }, ɵ6 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.x; }, ɵ7 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.y - (d.radius / 9); }, ɵ8 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.radius / 5; }, ɵ9 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.x; }, ɵ10 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.y + (d.radius / 9); }, ɵ11 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.radius / 5; }, ɵ12 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.x; }, ɵ13 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.y - (d.radius / 9); }, ɵ14 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.radius / 5; }, ɵ15 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.x; }, ɵ16 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.y + (d.radius / 9); }, ɵ17 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.radius / 5; }, ɵ18 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.x; }, ɵ19 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.y - (d.radius / 9); }, ɵ20 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.radius / 5; }, ɵ21 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.x; }, ɵ22 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.y + (d.radius / 9); }, ɵ23 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.radius / 5; }, ɵ24 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.x; }, ɵ25 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.y - (d.radius / 9); }, ɵ26 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.radius / 5; }, ɵ27 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.x; }, ɵ28 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.y + (d.radius / 9); }, ɵ29 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.radius / 5; };
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
var BUBBLECHART_MOCK = dataSource;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CHART_MOCK = {
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
var FACET_MOCK = {
    classes: 'facet-wrapper',
    sections: [{
            classes: 'facet-section-1',
            inputs: [
                { type: 'checkbox', id: 'checkbox-1', label: 'Email', payload: 'email', classes: 'is-active' },
                { type: 'checkbox', id: 'checkbox-2', label: 'Check 2', payload: 'check2' },
                { type: 'checkbox', id: 'checkbox-3', label: 'Check 3', payload: 'check3', checked: true },
                { type: 'checkbox', id: 'checkbox-4', label: 'Check 4', payload: 'check4' },
                { type: 'checkbox', id: 'checkbox-5', label: 'Check 5', payload: 'check5', disabled: true }
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
                { type: 'link', icon: 'n7-icon-archive', text: 'First filter', counter: 20, payload: 'first filter', classes: 'is-active' },
                { type: 'link', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', counter: 18, payload: 'second filter', },
                { type: 'link', icon: 'n7-icon-archive', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', counter: 18, payload: 'second filter', },
                { type: 'link', text: 'third filter', counter: 11, payload: 'third filter', },
                { type: 'link', text: 'lorem', counter: 7, payload: 'fourth filter', },
                { type: 'link', text: 'last filter', counter: 31, payload: 'last filter', },
                { type: 'link', icon: 'n7-icon-archive', text: 'First filter', counter: 1232143, payload: 'first filter', classes: 'is-active' },
                { type: 'link', text: 'second filter', counter: 18, payload: 'second filter', },
                { type: 'link', text: 'third filter', counter: 11, payload: 'third filter', classes: 'is-active' },
                { type: 'link', text: 'fourth filter', counter: 7, payload: 'fourth filter', },
                { type: 'link', text: 'last filter', counter: 3, payload: 'last filter', }
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var FACET_HEADER_MOCK = {
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
var FACET_YEAR_RANGE_MOCK = {
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
var FOOTER_MOCK = {
    columns: [
        {
            classes: 'col-class',
            title: 'Arianna Web, archivio digitale online',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit elit nunc, at porta ex accumsan id. Fusce quis lobortis sem, non ornare tellus.',
            images: [
                {
                    url: 'https://via.placeholder.com/80',
                    alttext: 'Logo 1'
                },
                {
                    url: 'https://via.placeholder.com/80',
                    alttext: 'Logo 2'
                }
            ]
        },
        {
            title: 'Privacy e info',
            links: [
                {
                    text: 'Info su Arianna Web',
                    payload: 'https://www.google.it',
                    classes: 'link-class'
                },
                {
                    text: 'Privacy policy',
                    payload: 'https://www.google.it',
                    classes: 'link-class'
                },
                {
                    text: 'Cooklie policy',
                    payload: 'https://www.google.it'
                },
                {
                    text: 'Termini e condizioni',
                    payload: 'https://www.google.it'
                }
            ]
        },
        {
            text: 'Arianna Web is powered by Hyperborea.<br><a href="#" target="_blank">www.hyperborea.com</a>',
        }
    ]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var HEADER_MOCK = {
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
var IMAGE_VIEWER_MOCK = {
    images: [
        { type: 'image', url: "/assets/images/large-image.jpg", buildPyramid: false }
    ],
    thumbs: [
        { url: 'http://placekitten.com/200/130', classes: 'is-active' },
        { url: 'http://placekitten.com/90/180' },
        { url: 'http://placekitten.com/90/110' }
    ],
    viewerId: "seadragon-viewer",
    libOptions: {
        /* SHOW GROUP */
        showNavigator: false,
        //shows the mini-map
        autoHideControls: false,
        /* SHOW BUTTONS */
        showRotationControl: false,
        showSequenceControl: false,
        showHomeControl: true,
        showZoomControl: true,
        /* SEQUENCE */
        sequenceMode: true,
        //allows having multiple images (as in array of images + zoomed image)
        showReferenceStrip: false,
        //shows the images array (default: horizontally)
        navigationControlAnchor: 'TOP_RIGHT',
    },
    _setViewer: (/**
     * @param {?} viewer
     * @return {?}
     */
    function (viewer) { return console.log(viewer); }),
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var HERO_MOCK = {
    title: "Il più bell'archivio che tu abbia mai visto",
    text: "\n  La <strong>Fondazione Cerratelli</strong> \u00E8 uno spazio espositivo che raccoglie un'importante \n  collezione di costumi <em>teatrali e cinematografici</em>. Sua sede si trova dal 3 dicembre \n  2011 presso la villa Roncioni a Pugnano, frazione del comune di San Giuliano Terme.\n  ",
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
var ITEM_PREVIEW_MOCK = {
    image: 'https://placeimg.com/600/600/nature',
    title: 'Dummy title text',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    metadata: [
        {
            title: 'Group 1',
            classes: 'group1-class',
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
            classes: 'group3-class',
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
var INNER_TITLE_MOCK = {
    icon: 'n7-icon-file3',
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
                { value: 'Alphabetic', payload: 'alphabetic' },
                { value: 'By Date', payload: 'date' },
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
            { text: 'BUTTON 1', payload: 'btn1' },
            { text: 'BUTTON 2', payload: 'btn2', classes: 'n7-btn-cta' },
        ]
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LOADER_MOCK = {
    classes: 'loader-test'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Mock Codebase
 * @type {?}
 */
var METADATA_VIEWER_MOCK = {
    classes: 'example-class',
    group: [{
            title: 'Metadata group lv1',
            items: [
                { label: 'Label', value: 'Value' },
                { label: 'Label', value: 'Value' },
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
}
/**
 * Mock Arianna Web
 */
// 
// export const METADATA_VIEWER_MOCK: IMetadataViewerData = {
// }
// 
// 
;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NAV_MOCK = {
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
var PAGINATION_MOCK = {
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
    ],
    select: {
        label: 'Numero di risultati',
        options: [
            { text: "10" },
            { text: "25", selected: true },
            { text: "50", disabled: true },
        ],
        payload: 'select',
    }
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
var SIDEBAR_HEADER_MOCK = {
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
var SIMPLE_AUTOCOMPLETE_MOCK = {
    suggestion: [
        { match: 'surf', suffix: 'dome', payload: 'dome' },
        { match: 'surf', suffix: 'er joe', payload: 'er joe' },
        { match: 'surf', suffix: 'ace', payload: 'ace' },
        { match: 'surf', suffix: 'corner', payload: 'corner' },
        { match: 'surf', prefix: 'wind', payload: 'wind' },
        { match: 'surf', prefix: 'body', payload: 'body' },
        { match: 'surf', prefix: 'auto', payload: 'auto' },
        { match: 'surf', prefix: 'side', payload: 'side' },
        { match: 'surf', prefix: 'prefix', suffix: 'suffix', payload: 'prefixsuffix' },
    ],
    classes: 'surfing-autocomplete'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var TABLE_MOCK = {
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
var TAG_MOCK = {
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
var TOAST_MOCK = {
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
var TREE_MOCK = {
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
                    text: 'Has childs, but is closed!',
                    classes: 'is-collapsed',
                    payload: '',
                    items: [
                        {
                            icon: 'n7-icon-file3',
                            text: 'Child: Cinema teatro Augusteo e stazione centrale della funicolare, Napoli ([1926] - [1927])',
                            payload: '',
                        },
                        {
                            classes: 'is-active',
                            icon: 'n7-icon-file3',
                            text: 'Child: Stadio comunale G.Berta, Firenze ([1929] - [1932])',
                            payload: '',
                        },
                        {
                            icon: 'n7-icon-file3',
                            text: 'Child: Monumento alla Bandiera, Roma (1931)',
                            payload: '',
                        },
                        {
                            img: 'http://placeimg.com/25/25/arch/grayscale',
                            text: 'Child: Brevetto hangar circolare con piattaforma anulare rotante (1932)',
                            payload: '',
                        },
                        {
                            img: 'http://placeimg.com/25/25/arch/grayscale',
                            text: 'Child: Stadio da 120.000 posti, Roma ([1933])',
                            payload: '',
                            classes: 'is-active'
                        },
                        {
                            icon: 'n7-icon-file3',
                            text: 'Child: Magazzino ([1934])',
                            payload: '',
                            classes: 'is-active',
                        },
                        {
                            icon: 'n7-icon-file3',
                            text: 'Child: Aviorimesse, Orvieto (TR), Orbetello (GR), Torre del Lago (LU), Marsala (TP), Trapani ([1935] - 1941)',
                            payload: '',
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
var WIZARD_MOCK = {
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

export { DvComponentsLibModule, AdvancedAutocompleteComponent, AlertComponent, BreadcrumbsComponent, BubbleChartComponent, ChartComponent, FacetComponent, FacetHeaderComponent, FacetYearRangeComponent, FooterComponent, HeaderComponent, ImageViewerComponent, HeroComponent, ItemPreviewComponent, InnerTitleComponent, LoaderComponent, MetadataViewerComponent, NavComponent, PaginationComponent, SidebarHeaderComponent, SimpleAutocompleteComponent, TableComponent, TagComponent, ToastComponent, TreeComponent, WizardComponent, ADVANCED_AUTOCOMPLETE_MOCK, ALERT_MOCK, BREADCRUMBS_MOCK, BUBBLECHART_MOCK, CHART_MOCK, FACET_MOCK, FACET_HEADER_MOCK, FACET_YEAR_RANGE_MOCK, FOOTER_MOCK, HEADER_MOCK, IMAGE_VIEWER_MOCK, HERO_MOCK, ITEM_PREVIEW_MOCK, INNER_TITLE_MOCK, LOADER_MOCK, METADATA_VIEWER_MOCK, NAV_MOCK, PAGINATION_MOCK, SIDEBAR_HEADER_MOCK, SIMPLE_AUTOCOMPLETE_MOCK, TABLE_MOCK, TAG_MOCK, TOAST_MOCK, TREE_MOCK, WIZARD_MOCK };

//# sourceMappingURL=n7-frontend-components.js.map