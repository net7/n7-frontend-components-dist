(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('d3-selection'), require('d3-force'), require('apexcharts/dist/apexcharts.common.js'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@n7-frontend/components', ['exports', '@angular/common', 'd3-selection', 'd3-force', 'apexcharts/dist/apexcharts.common.js', '@angular/core'], factory) :
    (factory((global['n7-frontend'] = global['n7-frontend'] || {}, global['n7-frontend'].components = {}),global.ng.common,global['d3-selection'],global.d3_force,global.ApexCharts,global.ng.core));
}(this, (function (exports,common,d3_selection,d3_force,ApexCharts,core) { 'use strict';

    ApexCharts = ApexCharts && ApexCharts.hasOwnProperty('default') ? ApexCharts['default'] : ApexCharts;

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
            { type: core.Component, args: [{
                        selector: 'n7-alert',
                        template: "<div class=\"n7-alert {{data.classes || ''}} {{ data.icon ? 'has-icon' : '' }}\" *ngIf=\"data\" >\n    <span class=\"n7-alert__icon {{data.icon}}\" *ngIf=\"data.icon\"></span>\n    <div class=\"n7-alert__text\" [innerHTML]=\"data.text\">\n    </div>\n    <span class=\"n7-alert__close-button n7-icon-close\" \n          *ngIf=\"data.hasCloseButton\" \n          (click)=\"onClick(data.payload)\"></span>\n</div>"
                    }] }
        ];
        AlertComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }]
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
            { type: core.Component, args: [{
                        selector: 'n7-breadcrumbs',
                        template: "<div *ngIf=\"data\" class=\"n7-breadcrumbs {{ data.classes || '' }}\">\n    <nav class=\"n7-breadcrumbs__nav\">\n        <ol class=\"n7-breadcrumbs__list\">\n            <li *ngFor=\"let item of data.items\" class=\"n7-breadcrumbs__item {{ item.classes || '' }}\">\n                <a class=\"n7-breadcrumbs__label\" (click)=\"onClick(item.payload)\">{{ item.label }}</a>\n            </li>\n        </ol>\n    </nav>\n</div>\n"
                    }] }
        ];
        BreadcrumbsComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }]
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
            this.selectedBubbles = 0;
            this.bubbles = null;
            this.genericBubble = null;
            this.bubbleChart = null;
            this.maxBubblesSelected = -1;
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
                setTimeout(( /**
                 * @return {?}
                 */function () { return _this.makeBubbleChart(); }));
            };
        /** Makes the whole bubble chart */
        /**
         * Makes the whole bubble chart
         * @private
         * @return {?}
         */
        BubbleChartComponent.prototype.makeBubbleChart = /**
         * Makes the whole bubble chart
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                d3_selection.select("#" + this.data.containerId).selectAll("*").remove();
                /** @type {?} */
                var pot = document.getElementById("" + this.data.containerId);
                pot.style.width = this.data.containerWidth + 'px';
                pot.style.height = this.data.containerHeight + 'px';
                this.bubbleChart = d3_selection.select("#" + this.data.containerId)
                    .append('svg')
                    .attr('width', this.data.containerWidth)
                    .attr('height', this.data.containerHeight);
                this.bubbles = this.data.bubblesData;
                if (this.data.maxBubblesSelected)
                    this.maxBubblesSelected = this.data.maxBubblesSelected;
                this.selectedBubbles = 0;
                this.data.bubblesData.forEach(( /**
                 * @param {?} b
                 * @return {?}
                 */function (b) {
                    if (b.selected)
                        _this.selectedBubbles++;
                }));
                this.initBubbles();
                if (this.data.isForceSimulationEnabled)
                    this.setBubbleChartSimulation();
                this.update();
                if (this.bubbleChart)
                    this.bubbleChart.selectAll("#" + this.data.containerId + " g circle, #" + this.data.containerId + " g text").on('click', ( /**
                     * @param {?} d
                     * @return {?}
                     */function (d) {
                        if (d.selectable) {
                            if (!d.selected)
                                _this.selectbubbleIfPossible(d);
                        }
                    }));
                if (this.bubbleChart)
                    this.bubbleChart.selectAll('circle[bubblesType="x_inner_circle"], text[bubblesType="x_inner_label"]').on('click', ( /**
                     * @param {?} d
                     * @return {?}
                     */function (d) {
                        if (d.selectable) {
                            if (!d.selected)
                                _this.selectbubbleIfPossible(d);
                            else {
                                d.selected = false;
                                _this.selectedBubbles--;
                                _this.update();
                                if (!_this.emit)
                                    return;
                                if (d.selected)
                                    _this.emit('click', { source: "close", bubblePyload: d.payload });
                                //else
                                //  this.emit('click',{source:"bubble",bubblePyload: d.payload});
                            }
                        }
                    }));
            };
        /**
         * @private
         * @param {?} bubble
         * @return {?}
         */
        BubbleChartComponent.prototype.selectbubbleIfPossible = /**
         * @private
         * @param {?} bubble
         * @return {?}
         */
            function (bubble) {
                if (this.maxBubblesSelected < 0 || this.selectedBubbles < this.maxBubblesSelected) {
                    bubble.selected = true;
                    this.selectedBubbles++;
                    this.update();
                    if (!this.emit)
                        return;
                    this.emit('click', { source: "bubble", bubblePayload: bubble.payload });
                }
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
                    this.genericBubble.attr('cx', ( /**
                     * @param {?} d
                     * @return {?}
                     */function (d) { return d.x = Math.max(d.radius, Math.min(_this.data.containerWidth - d.radius, d.x)); }))
                        .attr('cy', ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) { return d.y = Math.max(d.radius, Math.min(_this.data.containerHeight - d.radius, d.y)); }));
                }
                if (this.data && this.data.bubblesData)
                    this.data.bubblesData.forEach(( /**
                     * @param {?} c
                     * @return {?}
                     */function (c) {
                        c.texts.forEach(( /**
                         * @param {?} tx
                         * @return {?}
                         */function (tx) {
                            /** @type {?} */
                            var txt = _this.bubbleChart.select("text[bubblesElId=" + tx.id + "]");
                            txt.attr("dy", tx.y_function);
                            txt.attr("dx", tx.x_function);
                        }));
                    }));
                if (this.bubbleChart) {
                    this.bubbleChart.selectAll('circle[bubblesType="x_inner_circle"]')
                        .attr("cy", ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) { return d.y + (d.radius / 2); }))
                        .attr("cx", ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) { return d.x; }))
                        .attr("opacity", ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) { return (d.selected ? 1 : 0); }));
                }
                if (this.bubbleChart) {
                    this.bubbleChart.selectAll('text[bubblesType="x_inner_label"]')
                        .attr("dy", ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) { return d.y + (d.radius / 2) + 6; }))
                        .attr("dx", ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) { return d.x; }))
                        .attr("opacity", ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) { return (d.selected ? 1 : 0); }));
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
                        .attr("bubblesElId", ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) { return d.id; }))
                        .append('circle')
                        .attr('r', ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) { return Math.max(0, d.radius - 5.05); }))
                        .attr("cx", ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) { return d.x; }))
                        .attr("cy", ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) { return d.y; }))
                        .attr('padding', ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) { return 50; }))
                        .attr("class", ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) { return d.classes; }))
                        .style('fill', ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) { return d.color; }));
                if (this.data && this.data.bubblesData && this.bubbleChart)
                    this.data.bubblesData.forEach(( /**
                     * @param {?} c
                     * @return {?}
                     */function (c) {
                        /** @type {?} */
                        var group = _this.bubbleChart.select("g[bubblesElId=" + c.id + "]");
                        c.texts.forEach(( /**
                         * @param {?} tx
                         * @return {?}
                         */function (tx) {
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
                    this.bubbleChart.selectAll("#" + this.data.containerId + " g")
                        .append('circle')
                        .attr('r', ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) { return 10; }))
                        .attr('padding', ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) { return 50; }))
                        .style('fill', "white")
                        .attr('cx', ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) { return d.x; }))
                        .attr('cy', ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) { return d.y; }))
                        .attr("bubblesType", "x_inner_circle")
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
                        .attr("bubblesType", "x_inner_label")
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
                d3_force.forceSimulation()
                    .velocityDecay(velocityDecay)
                    .force("x", d3_force.forceX(xPull).strength(xPullStrength))
                    .force("y", d3_force.forceY(yPull).strength(yPullStrength))
                    .force("collide", d3_force.forceCollide().radius(( /**
             * @param {?} d
             * @return {?}
             */function (d) { return d.radius; })).strength(collisionStrength).iterations(collisionIterations))
                    .nodes(this.bubbles)
                    .on('tick', this.update.bind(this));
            };
        BubbleChartComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'n7-bubble-chart',
                        template: "<div *ngIf=\"data\" class=\"n7-bubble-chart {{ data.classes || '' }}\">\n    <div id=\"{{ data.containerId }}\"></div>\n</div>"
                    }] }
        ];
        BubbleChartComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }]
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
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    var _a = _this.data, containerId = _a.containerId, libOptions = _a.libOptions;
                    /** @type {?} */
                    var chart = new ApexCharts(document.querySelector("#" + containerId), libOptions);
                    chart.render();
                    if (_this.data.setChart)
                        _this.data.setChart(chart);
                }));
            };
        ChartComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'n7-chart',
                        template: "<div *ngIf=\"data\" class=\"n7-chart {{ data.classes || '' }}\">\n    <div id=\"{{ data.containerId }}\"></div>\n</div>"
                    }] }
        ];
        ChartComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }]
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
         * @param {?} payload
         * @return {?}
         */
        FacetComponent.prototype.onClick = /**
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
         * @param {?} event
         * @return {?}
         */
        FacetComponent.prototype.onCheck = /**
         * @param {?} payload
         * @param {?} event
         * @return {?}
         */
            function (payload, event) {
                if (!this.emit)
                    return;
                /** @type {?} */
                var status = event.target.checked;
                this.emit('change', { inputPayload: payload, isChecked: status });
            };
        /**
         * @param {?} payload
         * @param {?} event
         * @return {?}
         */
        FacetComponent.prototype.onInputChange = /**
         * @param {?} payload
         * @param {?} event
         * @return {?}
         */
            function (payload, event) {
                if (!this.emit)
                    return;
                /** @type {?} */
                var value = event.target.value;
                this.emit('change', { inputPayload: payload, value: value });
            };
        /**
         * @param {?} payload
         * @param {?} value
         * @return {?}
         */
        FacetComponent.prototype.onInputEnter = /**
         * @param {?} payload
         * @param {?} value
         * @return {?}
         */
            function (payload, value) {
                if (!this.emit)
                    return;
                this.emit('enter', { inputPayload: payload, value: value });
            };
        FacetComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'n7-facet',
                        template: "<div *ngIf=\"data\" class=\"n7-facet\">\n    <!-- Checkboxes -->\n    <div class=\"n7-facet__check-wrapper\"*ngIf=\"data.checks\">\n        <div *ngFor=\"let check of data.checks; let i = index\" class=\"n7-facet__check {{check.classes || ''}}\">\n            <input type=\"checkbox\" \n                   class=\"n7-facet__check-input\" \n                   id=\"n7-facet-check-{{i}}\"\n                   (change)=\"onCheck(check.payload, $event)\">\n            <label class=\"n7-facet__check-label\" for=\"n7-facet-check-{{i}}\">\n                {{ check.label }}\n            </label>\n        </div>\n    </div>\n\n    <!-- Search bar -->\n    <div class=\"n7-facet__search-wrapper\" *ngIf=\"data.input\">\n        <label class=\"n7-facet__search-label\" for=\"n7-facet-search-input\">\n            LABEL\n        </label>\n        <div class=\"n7-facet__search-input-wrapper\">\n            <input type=\"text\" \n                class=\"n7-facet__search-input {{data.input.classes || ''}}\" \n                id=\"n7-facet-search-input\"\n                placeholder=\"{{data.input.placeholder || ''}}\" \n                (input)=\"onInputChange(data.input.payload, $event)\"\n                (keyup.enter)=\"onInputEnter(data.input.payload, $event)\">\n            <span class=\"n7-facet__search-icon {{data.input.icon || ''}}\"   \n                *ngIf=\"data.input.icon\"\n                (click)=\"onClick(data.input.payload)\">\n            </span>\n        </div>\n    </div>\n\n    <!-- Filters -->\n    <div *ngIf=\"data.filters\" class=\"n7-facet__filter-wrapper\">\n        <div *ngFor=\"let filter of data.filters\" \n             class=\"n7-facet__filter {{filter.classes || ''}}\"\n             (click)=\"onClick(filter.payload)\">\n            <span *ngIf=\"filter.icon\" class=\"n7-facet__filter-icon {{filter.icon}}\"></span>\n            <span class=\"n7-facet__filter-text\">{{ filter.text }}</span>\n            <span class=\"n7-facet__filter-counter\">{{ filter.counter }}</span>\n        </div>\n    </div>\n</div>"
                    }] }
        ];
        FacetComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }]
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
            { type: core.Component, args: [{
                        selector: 'n7-facet-header',
                        template: "<div *ngIf=\"data\" class=\"n7-facet-header\">\n    <span class=\"n7-facet-header__icon-left {{ data.iconLeft }}\" *ngIf=\"data.iconLeft\">\n    </span>\n    <span class=\"n7-facet-header__title\">\n        {{data.text}}\n    </span>\n    <span class=\"n7-facet-header__counter\" *ngIf=\"data.additionalText\">\n        {{data.additionalText}}\n    </span>\n    <span *ngIf=\"data.iconRight\" class=\"n7-facet-header__icon-right {{ data.iconRight }}\"\n        (click)=\"onClick(data.payload)\"></span>\n</div>"
                    }] }
        ];
        FacetHeaderComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }]
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
                        this.data.inDate._meta = opts.find(( /**
                         * @param {?} o
                         * @return {?}
                         */function (o) { return o.value == selected; })).value;
                        /** @type {?} */
                        var sliceIndex = opts.findIndex(( /**
                         * @param {?} o
                         * @return {?}
                         */function (o) { return o.value == selected; }));
                        // make new array of possible years
                        /** @type {?} */
                        var newOptions = opts.slice(sliceIndex, opts.length);
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
            };
        FacetYearRangeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'n7-facet-year-range',
                        template: "<div *ngIf=\"data\" class=\"n7-facet-year-range\">\n\n    <!-- select starting year -->\n    <div class=\"n7-facet-year-range__in\">\n        <label class=\"n7-facet-year-range__in-label\">\n            {{ data.inDate.text }}\n        </label>\n        <select (change)=\"onChange(data.inDate.payload, $event.target.value)\"\n            class=\"n7-facet-year-range__in-select {{ data.inDate.classes || '' }}\">\n            <!-- placeholder option -->\n            <option *ngIf=\"data.inDate.placeholder.length > 0\" value=\"{{ data.inDate.placeholder }}\" disabled selected>\n                {{ data.inDate.placeholder }}\n            </option>\n            <option *ngFor=\"let opt of data.inDate.options\" value=\"{{ opt.value }}\">\n                {{ opt.value }}\n            </option>\n        </select>\n    </div>\n\n    <!-- select final year -->\n    <div class=\"n7-facet-year-range__out\">\n        <label class=\"n7-facet-year-range__out-label\">\n            {{ data.outDate.text }}\n        </label>\n        <select (change)=\"onChange(data.outDate.payload, $event.target.value)\"\n                class=\"n7-facet-year-range__out-select {{ data.outDate.classes || '' }}\"\n                formControlName=\"outDate\">\n            <!-- placeholder option -->\n            <option *ngIf=\"data.outDate.placeholder.length > 0\" value=\"{{ data.outDate.placeholder }}\" disabled selected>\n                {{ data.outDate.placeholder }}\n            </option>\n            <option *ngFor=\"let opt of data.outDate.options\" value=\"{{ opt.value }}\">\n                {{ opt.value }}\n            </option>\n        </select>\n    </div>\n</div>"
                    }] }
        ];
        FacetYearRangeComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }]
        };
        return FacetYearRangeComponent;
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
            { type: core.Component, args: [{
                        selector: 'n7-header',
                        template: "<header *ngIf=\"data\" class=\"n7-header {{data.classes || ''}}\">\n    \n    <!-- Logo and title -->\n    <div class=\"n7-header__logo-title {{data.logo.classes || ''}}\">\n        <a class=\"n7-header__logo-link\" (click)=\"onClick(data.logo.payload)\">\n            <img class=\"n7-header__logo\"\n                *ngIf=\"data.logo.image\"\n                [src]=\"data.logo.image\"\n                alt=\"{{ data.logo.title }}\" />\n            <div class=\"n7-header__title-subtitle\">\n                <h1 class=\"n7-header__title\">\n                    {{ data.logo.title }}\n                </h1>\n                <h2 class=\"n7-header__subtitle\" *ngIf=\"data.logo.subtitle\">\n                    {{ data.logo.subtitle }}\n                </h2>\n            </div>\n        </a>\n    </div>\n\n    <!-- Main menu -->\n    <nav class=\"n7-header__nav {{data.nav.classes || ''}}\" *ngIf=\"data.nav\">\n        <div class=\"n7-header__nav-content\">\n            <ul class=\"n7-header__nav-list\">\n                <li class=\"n7-header__nav-item {{item.classes || ''}}\" *ngFor=\"let item of data.nav.items\">\n                    <a class=\"n7-header__nav-link\" *ngIf=\"item.payload\" (click)=\"onClick(item.payload)\">\n                        <span class=\"n7-header__nav-icon {{item.icon}}\" *ngIf=\"item.icon\"></span>\n                        <span class=\"n7-header__nav-label\" *ngIf=\"item.text\">\n                            {{ item.text }}\n                        </span>\n                    </a>\n\n                    <!-- Sublevel -->\n                    <ul class=\"n7-header__subnav-list\" *ngIf=\"item.subnav\">\n                        <li class=\"n7-header__subnav-item {{subitem.classes || ''}}\" *ngFor=\"let subitem of item.subnav\">\n                            <a class=\"n7-header__subnav-link\" (click)=\"onClick(subitem.payload)\">\n                                <span class=\"n7-header__subnav-icon {{subitem.icon}}\" *ngIf=\"subitem.icon\"></span>\n                                <span class=\"n7-header__subnav-label\" *ngIf=\"subitem.text\">\n                                    {{ subitem.text }}\n                                </span>\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n    </nav>\n\n    <!-- Mobile menu toggle -->\n    <div class=\"n7-header__mobile-menu-toggle\">\n        <span class=\"n7-header__mobile-menu-icon n7-icon-menu\" \n              (click)=\"onClick(data.menuToggle.open.payload)\"></span>\n    </div>\n\n    <!-- Mobile menu close -->\n    <span class=\"n7-header__mobile-menu-close n7-icon-close\" \n          (click)=\"onClick(data.menuToggle.close.payload)\"></span>\n\n    <!-- Tools: search, notifications, use profile or login/signup -->\n    <div class=\"n7-header__tools\">\n        \n        <div class=\"n7-header__search {{data.search.classes || ''}}\" *ngIf=\"data.search\">\n            <input class=\"n7-header__search-input\" \n                   type=\"search\" \n                   name=\"search\" \n                   placeholder=\"{{ data.search.hint || ''}}\" \n                   (keyup)=\"onKeyUp(data.search.payload, $event.keyCode, $event.target.value)\"/>\n            <button class=\"n7-header__search-btn\" type=\"submit\" (click)=\"onClick(data.search.payload)\">\n                <span class=\"n7-header__search-btn-label\">\n                    Search\n                </span>\n            </button>\n        </div>\n        \n        <div class=\"n7-header__actions\" *ngIf=\"data.actions\">\n            <div class=\"n7-header__action {{ action.classes || '' }}\" *ngFor=\"let action of data.actions\">\n                <span class=\"n7-header__action-icon {{ action.icon }}\" (click)=\"onClick(action.payload)\"></span>\n                <span class=\"n7-header__action-badge {{ action.badge.text ? 'has-text' : '' }}\" *ngIf=\"action.badge\">\n                    {{ action.badge.text }}\n                </span>\n            </div>\n        </div>\n\n        <div class=\"n7-header__user {{data.user.classes || ''}}\" *ngIf=\"data.user\">\n            <img class=\"n7-header__user-img\" \n                 *ngIf=\"data.user.img\" \n                 [src]=\"data.user.img\" \n                 (click)=\"onClick(data.user.payload)\"/>\n            <p class=\"n7-header__user-name\" *ngIf=\"data.user.name\">\n                <span class=\"n7-header__user-name-label\">\n                    {{ data.user.name }}\n                </span>\n            </p>\n        </div>\n    </div>\n\n</header>\n\n"
                    }] }
        ];
        HeaderComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }]
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
            { type: core.Component, args: [{
                        selector: 'n7-hero',
                        template: "<section *ngIf=\"data\" class=\"n7-hero {{data.classes || ''}}\" \n        [ngClass]=\"{ 'has-image' : !!data.image, 'has-background-image': !!data.backgroundImage }\"\n        [ngStyle]=\"{'background-image': 'url(' + data.backgroundImage + ')'}\">\n    <div class=\"n7-hero__content\">\n        \n        <div class=\"n7-hero__text-wrapper\">\n            <h1 class=\"n7-hero__title\">\n                {{data.title}}\n            </h1>\n            <p class=\"n7-hero__text\" *ngIf=\"data.text\" [innerHTML]=\"data.text\"></p>\n            <div class=\"n7-hero__input-wrapper\" *ngIf=\"data.input || data.button\">\n                <input type=\"text\" \n                       class=\"n7-hero__input\" \n                       placeholder=\"{{data.input.placeholder || ''}}\" \n                       *ngIf=\"data.input\" \n                       (input)=\"onInputChange(data.input.payload, $event.target.value)\" \n                       (keyup.enter)=\"onInputEnter(data.input.payload, $event.target.value)\">\n                <span class=\"n7-hero__input-icon {{data.input.icon || ''}}\" \n                      *ngIf=\"data.input && data.input.icon\" \n                      (click)=\"onClick(data.input.payload)\"></span>\n                <button class=\"n7-hero__btn n7-btn n7-btn-cta n7-btn-l\" \n                        *ngIf=\"data.button\" \n                        (click)=\"onClick(data.button.payload)\">\n                    {{data.button.text}}\n                </button>\n            </div>\n        </div>\n        \n        <div class=\"n7-hero__image-wrapper\" *ngIf=\"data.image\">\n            <img class=\"n7-hero__image\" src=\"{{data.image}}\" alt=\"\">\n        </div>\n\n    </div>\n</section>"
                    }] }
        ];
        HeroComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }]
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
            { type: core.Component, args: [{
                        selector: 'n7-item-preview',
                        template: "<div *ngIf=\"data\" \n     class=\"n7-item-preview {{data.classes || ''}}\" \n     [ngClass]=\"{ 'has-image' : !!data.image }\"\n     (click)=\"onClick(data.payload)\">\n\n    <!-- Image -->\n    <div class=\"n7-item-preview__image\"\n         *ngIf=\"data.image\"\n         [style.background-image] = \"'url(' + data.image + ')'\">       \n    </div>         \n    \n    <div class=\"n7-item-preview__content\">\n\n        <!-- Title and text -->\n        <div class=\"n7-item-preview__title-text\">\n            <h1 class=\"n7-item-preview__title\">\n                {{ data.title }}\n            </h1>\n            <p class=\"n7-item-preview__text\" *ngIf=\"data.text\">\n                {{ data.text }}\n            </p>\n        </div>\n\n        <!-- Metadata -->\n        <div class=\"n7-item-preview__metadata\" *ngIf=\"data.metadata\">       \n            <div class=\"n7-item-preview__metadata-group\" *ngFor=\"let meta of data.metadata\">\n                <h3 class=\"n7-item-preview__metadata-group-title\" *ngIf=\"meta.title\">\n                {{ meta.title }}\n                </h3>\n                <div class=\"n7-item-preview__metadata-item {{meta.classes}}\" *ngFor=\"let item of meta.items\">\n                    <span class=\"n7-item-preview__metadata-item-icon {{item.icon}}\">  </span>\n                    <span class=\"n7-item-preview__metadata-item-label\" *ngIf=\"item.label\">{{item.label}}: </span>\n                    <span class=\"n7-item-preview__metadata-item-value\" *ngIf=\"item.value\">{{item.value}}</span>\n                </div>\n            </div>\n        </div>   \n    </div>\n</div>\n"
                    }] }
        ];
        ItemPreviewComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }]
        };
        return ItemPreviewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoaderComponent = /** @class */ (function () {
        function LoaderComponent() {
        }
        LoaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'n7-loader',
                        template: "<div class=\"n7-loader {{data.classes || ''}}\">\n    Loading\n</div>"
                    }] }
        ];
        LoaderComponent.propDecorators = {
            data: [{ type: core.Input }]
        };
        return LoaderComponent;
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
            { type: core.Component, args: [{
                        selector: 'n7-nav',
                        template: "<nav class=\"n7-nav {{data.classes || ''}}\" *ngIf=\"data\">\n    <ul class=\"n7-nav__list\">\n        <li class=\"n7-nav__item {{X.classes || ''}}\" *ngFor=\"let X of data.items\">\n            <a class=\"n7-nav__link\" *ngIf=\"X.payload\" (click)=\"onClick(X.payload)\">\n                <span class=\"n7-nav__label\" *ngIf=\"X.text\">\n                    {{ X.text }}\n                </span>\n            </a>\n        </li>\n    </ul>\n</nav>"
                    }] }
        ];
        NavComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }]
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
        PaginationComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'n7-pagination',
                        template: "<nav class=\"n7-pagination {{data.classes || ''}}\" *ngIf=\"data\">\n    <ul class=n7-pagination__items>\n\n        <li class=\"n7-pagination__first {{data.first.classes || ''}}\" *ngIf=\"data.first\">\n            <a class=\"n7-pagination__first-link {{ data.first.text ? 'has-text' : '' }}\" \n               (click)=\"onClick(data.first.payload)\">\n                <span class=\"n7-pagination__first-icon n7-icon-angle-double-left\"></span>\n                <span class=\"n7-pagination__first-label\" *ngIf=\"data.first.text\">\n                    {{ data.first.text }}\n                </span>\n            </a>\n        </li>\n        <li class=\"n7-pagination__prev {{data.prev.classes || ''}}\" *ngIf=\"data.prev\">\n            <a class=\"n7-pagination__prev-link {{ data.prev.text ? 'has-text' : '' }}\" \n               (click)=\"onClick(data.prev.payload)\">\n                <span class=\"n7-pagination__prev-icon n7-icon-angle-left\"></span>\n                <span class=\"n7-pagination__prev-label\" *ngIf=\"data.prev.text\">\n                    {{ data.prev.text }}\n                </span>\n            </a>\n        </li>\n\n        <li class=\"n7-pagination__page {{page.classes || ''}}\" *ngFor=\"let page of data.links\">\n            <a class=\"n7-pagination__page-link\" (click)=\"onClick(page.payload)\">{{ page.text }}</a>\n        </li>\n\n        <li class=\"n7-pagination__next {{data.next.classes || ''}}\" *ngIf=\"data.next\">\n            <a class=\"n7-pagination__next-link {{ data.next.text ? 'has-text' : '' }}\" \n               (click)=\"onClick(data.next.payload)\">\n                <span class=\"n7-pagination__next-label\" *ngIf=\"data.next.text\">\n                    {{ data.next.text }}\n                </span>\n                <span class=\"n7-pagination__next-icon n7-icon-angle-right\"></span>\n            </a>\n        </li>\n        <li class=\"n7-pagination__last {{data.last.classes || ''}}\" *ngIf=\"data.last\">\n            <a class=\"n7-pagination__last-link {{ data.last.text ? 'has-text' : '' }}\" \n               (click)=\"onClick(data.last.payload)\">\n                <span class=\"n7-pagination__last-label\" *ngIf=\"data.last.text\">\n                    {{ data.last.text }}\n                </span>\n                <span class=\"n7-pagination__last-icon  n7-icon-angle-double-right\"></span>\n            </a>\n        </li>\n\n    </ul> \n</nav>"
                    }] }
        ];
        PaginationComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }]
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
            { type: core.Component, args: [{
                        selector: 'n7-sidebar-header',
                        template: "<div *ngIf=\"data\" class=\"n7-sidebar-header\">\n    <span class=\"n7-sidebar-header__icon-left {{ data.iconLeft }}\" *ngIf=\"data.iconLeft\">\n    </span>\n    <span class=\"n7-sidebar-header__text\">\n        {{data.text}}\n    </span>\n    <span class=\"n7-sidebar-header__additional-text\" *ngIf=\"data.additionalText\">\n        {{data.additionalText}}\n    </span>\n    <span *ngIf=\"data.iconRight\"\n          class=\"n7-sidebar-header__icon-right {{ data.iconRight }}\" \n          (click)=\"onClick(data.payload)\"></span>\n</div>"
                    }] }
        ];
        SidebarHeaderComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }]
        };
        return SidebarHeaderComponent;
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
            { type: core.Component, args: [{
                        selector: 'n7-table',
                        template: "<section class=\"n7-table {{data.classes || ''}}\" *ngIf=\"data\">\n    <table class=\"n7-table__table\">\n    \t<thead class=\"n7-table__table-header\" *ngIf=\"data.head\">\n            <tr class=\"n7-table__table-header-row {{row.classes || ''}}\"\n                *ngFor=\"let row of data.head\">\n                <th class=\"n7-table__table-header-cell {{cell.classes || ''}}\"\n                    *ngFor=\"let cell of row.cells\"\n                    (click)=\"onCellClick(cell.payload)\"\n                    [innerHTML]=\"cell.content\">\n                        <!-- {{ cell.content }} -->\n                </th>\n            </tr>\n        </thead>\n\n        <tbody class=\"n7-table__table-body\" *ngIf=\"data.body\">\n            <tr class=\"n7-table__table-body-row {{row.classes || ''}}\"\n                *ngFor=\"let row of data.body; let rowHead of data.head\">\n                <td class=\"n7-table__table-body-cell {{cell.classes || ''}}\"\n                    *ngFor=\"let cell of row.cells; let cellHead of rowHead.cells\"\n                    (click)=\"onCellClick(cell.payload)\"\n                    (dblclick)=\"onCellDblClick(cell.payload)\"\n                    [attr.data-label]=\"cellHead.content\">\n                    <span   class=\"n7-table__table-body-cell-innerhtml\"\n                            *ngIf=\"!cell.type || cell.type=='html'\"\n                            [innerHTML]=\"cell.content\"></span>\n                    <input  class=\"n7-table__table-body-cell-inputtext\"\n                            *ngIf=\"cell.type=='input:text'\"\n                            type=\"text\" placeholder=\"{{cell.content}}\"\n                            id=\"{{cell._meta.input_id}}\"\n                            (keyup.enter)=\"onInputTextChange(cell.payload, $event.target.value)\"/>                        \n                </td>\n            </tr>\n        </tbody>\n\n        <tfoot class=\"n7-table__table-footer\" *ngIf=\"data.foot\">\n            <tr class=\"n7-table__table-footer-row {{row.classes || ''}}\"\n                *ngFor=\"let row of data.foot\">\n                <td class=\"n7-table__table-footer-cell {{cell.classes || ''}}\"\n                    *ngFor=\"let cell of row.cells\"\n                    (click)=\"onCellClick(cell.payload)\"\n                    [innerHTML]=\"cell.content\">\n                        <!-- {{ cell.content }} -->\n                </td>\n            </tr>\n        </tfoot>        \n \t </table> \n</section>"
                    }] }
        ];
        TableComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }]
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
                this.emit("click", payload);
            };
        TagComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'n7-tag',
                        template: "<span class=\"n7-tag {{data.classes || ''}}\" *ngIf=\"data\">\n    <span class=\"n7-tag__label\" *ngIf=\"data.label\">\n        {{ data.label }}\n    </span>\n    <span class=\"n7-tag__text\" *ngIf=\"data.text\">\n        {{ data.text }}\n    </span>\n    <span class=\"n7-tag__icon {{data.icon}}\" *ngIf=\"data.icon\" (click)=\"onClick(data.payload)\"></span>\n</span>"
                    }] }
        ];
        TagComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }]
        };
        return TagComponent;
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
            { type: core.Component, args: [{
                        selector: 'n7-toast',
                        template: "<div *ngIf=\"data\" class=\"n7-toast\">\n    <div class=\"n7-toast__column {{data.classes || ''}}\">\n\n        <!-- Toast boxes -->\n        <div class=\"n7-toast__box\" \n             *ngFor=\"let box of data.toasts\"\n             [ngClass]=\"{ 'has-actions' : !! (box.actions || box.closeIcon) }\">\n        \n            <!-- Toast text -->\n            <div class=\"n7-toast__content {{box.classes || ''}}\" *ngIf=\"box.title || box.text\">\n                <span class=\"n7-toast__title\" *ngIf=\"box.title\">{{ box.title }}</span>\n                <span class=\"n7-toast__text\" *ngIf=\"box.text\">{{ box.text }}</span>\n            </div>\n\n            <!-- Toast actions -->\n            <div class=\"n7-toast__actions\" *ngIf=\"box.actions || box.closeIcon\">\n                <span\n                class=\"n7-toast__closeIcon {{ box.closeIcon.icon }}\" \n                *ngIf=\"box.closeIcon\" \n                (click)=\"onClick(box.closeIcon.payload)\">\n                </span>\n                <span class=\"n7-toast__action-wrapper\" *ngIf=\"box.actions\">\n                    <span class=\"n7-toast__action-content\" *ngFor=\"let action of box.actions\">\n                        <button class=\"n7-toast__action-button n7-btn n7-btn-s {{action.classes || ''}}\"\n                                (click)=\"onClick(action.payload)\">\n                                {{action.text}}\n                        </button>\n                    </span>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>"
                    }] }
        ];
        ToastComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }]
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
            { type: core.Component, args: [{
                        selector: 'n7-tree',
                        template: "<div *ngIf=\"data\" class=\"n7-tree\">\n    <!-- Start recursive rendering -->\n    <ng-container *ngTemplateOutlet=\"recursiveTree; context:{$implicit: data.items}\"></ng-container>\n\n    <!-- Template for recursive children rendering -->\n    <ng-template #recursiveTree let-node>\n        <div class=\"n7-tree__item {{ item.classes || '' }}\" *ngFor=\"let item of node\">\n            <div class=\"n7-tree__item-contents\">\n                <!-- Render expand/collapse arrow -->\n                <span *ngIf=\"item.toggle\" \n                      class=\"n7-tree__item-toggle {{ item.toggle.icon }}\"\n                      (click)=\"onClick(item.toggle.payload)\">\n                </span>\n                <!-- Render the node -->\n                <div class=\"n7-tree__item-details\"\n                     (click)=\"onClick(item.payload)\">\n                    <span *ngIf=\"item.icon\" class=\"n7-tree__item-icon {{ item.icon }}\"></span>\n                    <img class=\"n7-tree__item-img\" *ngIf=\"item.img\" src=\"{{ item.img }}\" alt=\"{{ item.text }}\"/>\n                    <span class=\"n7-tree__item-text\">{{ item.text }}</span>\n                </div>\n            </div>\n            <!-- Check for more child nodes and render them -->\n            <div class=\"n7-tree__children-wrapper\" *ngIf=\"item.items\">\n                <ng-container *ngTemplateOutlet=\"recursiveTree; context:{$implicit: item.items}\"></ng-container>\n            </div>\n        </div>\n    </ng-template>\n</div>"
                    }] }
        ];
        TreeComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }]
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
            { type: core.Component, args: [{
                        selector: 'n7-wizard',
                        template: "<div *ngIf=\"data\" class=\"n7-wizard {{ data.classes || '' }}\">\n  <ol class=\"n7-wizard__list\">\n      <li *ngFor=\"let item of data.items\" \n          class=\"n7-wizard__item {{ item.classes || '' }}\" \n          (click)=\"onClick(item.payload)\">\n            <span *ngIf=\"item.number\" class=\"n7-wizard__number\">{{ item.number }}</span>\n            <span *ngIf=\"item.text\" class=\"n7-wizard__text\">{{ item.text }}</span>\n      </li>\n  </ol>\n</div>"
                    }] }
        ];
        WizardComponent.propDecorators = {
            data: [{ type: core.Input }],
            emit: [{ type: core.Input }]
        };
        return WizardComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [
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
    var DvComponentsLibModule = /** @class */ (function () {
        function DvComponentsLibModule() {
        }
        DvComponentsLibModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            COMPONENTS,
                        ],
                        entryComponents: COMPONENTS,
                        imports: [common.CommonModule],
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
     */ function (d) { return d.x; }, ɵ1 = /**
     * @param {?} d
     * @return {?}
     */ function (d) { return d.y - (d.radius / 9); }, ɵ2 = /**
     * @param {?} d
     * @return {?}
     */ function (d) { return d.radius / 5; }, ɵ3 = /**
     * @param {?} d
     * @return {?}
     */ function (d) { return d.x; }, ɵ4 = /**
     * @param {?} d
     * @return {?}
     */ function (d) { return d.y + (d.radius / 9); }, ɵ5 = /**
     * @param {?} d
     * @return {?}
     */ function (d) { return d.radius / 6; }, ɵ6 = /**
     * @param {?} d
     * @return {?}
     */ function (d) { return d.x; }, ɵ7 = /**
     * @param {?} d
     * @return {?}
     */ function (d) { return d.y - (d.radius / 9); }, ɵ8 = /**
     * @param {?} d
     * @return {?}
     */ function (d) { return d.radius / 5; }, ɵ9 = /**
     * @param {?} d
     * @return {?}
     */ function (d) { return d.x; }, ɵ10 = /**
     * @param {?} d
     * @return {?}
     */ function (d) { return d.y + (d.radius / 9); }, ɵ11 = /**
     * @param {?} d
     * @return {?}
     */ function (d) { return d.radius / 5; }, ɵ12 = /**
     * @param {?} d
     * @return {?}
     */ function (d) { return d.x; }, ɵ13 = /**
     * @param {?} d
     * @return {?}
     */ function (d) { return d.y - (d.radius / 9); }, ɵ14 = /**
     * @param {?} d
     * @return {?}
     */ function (d) { return d.radius / 5; }, ɵ15 = /**
     * @param {?} d
     * @return {?}
     */ function (d) { return d.x; }, ɵ16 = /**
     * @param {?} d
     * @return {?}
     */ function (d) { return d.y + (d.radius / 9); }, ɵ17 = /**
     * @param {?} d
     * @return {?}
     */ function (d) { return d.radius / 5; }, ɵ18 = /**
     * @param {?} d
     * @return {?}
     */ function (d) { return d.x; }, ɵ19 = /**
     * @param {?} d
     * @return {?}
     */ function (d) { return d.y - (d.radius / 9); }, ɵ20 = /**
     * @param {?} d
     * @return {?}
     */ function (d) { return d.radius / 5; }, ɵ21 = /**
     * @param {?} d
     * @return {?}
     */ function (d) { return d.x; }, ɵ22 = /**
     * @param {?} d
     * @return {?}
     */ function (d) { return d.y + (d.radius / 9); }, ɵ23 = /**
     * @param {?} d
     * @return {?}
     */ function (d) { return d.radius / 5; }, ɵ24 = /**
     * @param {?} d
     * @return {?}
     */ function (d) { return d.x; }, ɵ25 = /**
     * @param {?} d
     * @return {?}
     */ function (d) { return d.y - (d.radius / 9); }, ɵ26 = /**
     * @param {?} d
     * @return {?}
     */ function (d) { return d.radius / 5; }, ɵ27 = /**
     * @param {?} d
     * @return {?}
     */ function (d) { return d.x; }, ɵ28 = /**
     * @param {?} d
     * @return {?}
     */ function (d) { return d.y + (d.radius / 9); }, ɵ29 = /**
     * @param {?} d
     * @return {?}
     */ function (d) { return d.radius / 5; };
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
    var LOADER_MOCK = {
        classes: 'loader-test'
    };

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
        ]
    };

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

    exports.DvComponentsLibModule = DvComponentsLibModule;
    exports.AlertComponent = AlertComponent;
    exports.BreadcrumbsComponent = BreadcrumbsComponent;
    exports.BubbleChartComponent = BubbleChartComponent;
    exports.ChartComponent = ChartComponent;
    exports.FacetComponent = FacetComponent;
    exports.FacetHeaderComponent = FacetHeaderComponent;
    exports.FacetYearRangeComponent = FacetYearRangeComponent;
    exports.HeaderComponent = HeaderComponent;
    exports.HeroComponent = HeroComponent;
    exports.ItemPreviewComponent = ItemPreviewComponent;
    exports.LoaderComponent = LoaderComponent;
    exports.NavComponent = NavComponent;
    exports.PaginationComponent = PaginationComponent;
    exports.SidebarHeaderComponent = SidebarHeaderComponent;
    exports.TableComponent = TableComponent;
    exports.TagComponent = TagComponent;
    exports.ToastComponent = ToastComponent;
    exports.TreeComponent = TreeComponent;
    exports.WizardComponent = WizardComponent;
    exports.ALERT_MOCK = ALERT_MOCK;
    exports.BREADCRUMBS_MOCK = BREADCRUMBS_MOCK;
    exports.BUBBLECHART_MOCK = BUBBLECHART_MOCK;
    exports.CHART_MOCK = CHART_MOCK;
    exports.FACET_MOCK = FACET_MOCK;
    exports.FACET_HEADER_MOCK = FACET_HEADER_MOCK;
    exports.FACET_YEAR_RANGE_MOCK = FACET_YEAR_RANGE_MOCK;
    exports.HEADER_MOCK = HEADER_MOCK;
    exports.HERO_MOCK = HERO_MOCK;
    exports.ITEM_PREVIEW_MOCK = ITEM_PREVIEW_MOCK;
    exports.LOADER_MOCK = LOADER_MOCK;
    exports.NAV_MOCK = NAV_MOCK;
    exports.PAGINATION_MOCK = PAGINATION_MOCK;
    exports.SIDEBAR_HEADER_MOCK = SIDEBAR_HEADER_MOCK;
    exports.TABLE_MOCK = TABLE_MOCK;
    exports.TAG_MOCK = TAG_MOCK;
    exports.TOAST_MOCK = TOAST_MOCK;
    exports.TREE_MOCK = TREE_MOCK;
    exports.WIZARD_MOCK = WIZARD_MOCK;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=n7-frontend-components.umd.js.map