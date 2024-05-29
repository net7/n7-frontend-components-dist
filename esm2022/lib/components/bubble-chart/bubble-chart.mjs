//---------------------------
// BUBBLECHART.ts
//---------------------------
/**
 * The bubble chart is drawn using d3js, a library to create and update anything in svg.
 *
 * LEGEND:
 * - svg -> the canvas/<svg> element where everything will be drawn on (appended).
 * - g -> <g> is a group of svg elements.
 * - leaf -> this is the svg circle, the bubble.
 * - text -> this is all the text inside the circle.
 * - tspan -> this is just one line of text.
 *
 * What are "join, enter, update, exit?"
 * https://observablehq.com/@d3/learn-d3-joins?collection=@d3/learn-d3
 * https://observablehq.com/@thetylerwolf/day-18-join-enter-update-exit
 *
 * Each line can have a different width, but all of the text inside a circle
 * needs to be scaled by a constant factor.
 * https://observablehq.com/@mbostock/fit-text-to-circle
 */
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class BubbleChartComponent {
    constructor() {
        this._loaded = false;
        /**
         * Reference for much of the new text scaling code comes from:
         * https://observablehq.com/@mbostock/fit-text-to-circle
         */
        this.measureWidth = (text) => {
            const context = document.createElement('canvas').getContext('2d');
            // measure text with the correct font family and weight
            if (this.data?.fontRendering?.label?.family &&
                this.data?.fontRendering?.label?.weight) {
                context.font = `${this.data.fontRendering.label.weight} ${this.data.fontRendering.label.family}`;
            }
            // calculated width + padding
            return context.measureText(text).width * 1.15;
        };
        this.isValidNumber = (value) => !Number.isNaN(Number.parseFloat(value));
        this.draw = () => {
            const { d3 } = this;
            const { containerId, data, height, width, selected, transition, colorMatch, shuffle, fontRendering, } = this.data;
            // SVG shape path for the close icon
            const closeIconPath = 'M -50,40 L-40,50 0,10 40,50 50,40 10,0 50,-40 40,-50 0,-10 -40,-50 -50,-40 -10,0 -50,40';
            const defaultLineHeight = 13;
            // word count before truncating with ellipsis
            const ellipsisThreshold = 4;
            const textScalingFactor = 1;
            if (!Array.isArray(data)) {
                // Check if it is possible to draw with the current dataset
                console.warn('(n7-bubble-chart) The data object is not in the expected format!');
                return;
            }
            // animation settings used to render changes in the chart
            let t = d3.transition().duration(0);
            if (typeof transition === 'number') {
                t = d3.transition().duration(transition).ease(d3.easeCubicInOut);
            }
            // calculate the bubble background color from it's type (domain)
            const colorMap = d3
                .scaleOrdinal()
                .domain(colorMatch
                ? colorMatch.domain
                : ['persona', 'luogo', 'organizzazione', 'cosa notevole'])
                .range(colorMatch ? colorMatch.range : d3.schemeTableau10);
            // calculate how big the radius of the bubble should be
            const sizeScale = d3 // map entity count to bubble size
                .scaleLinear()
                .domain([0, d3.max(data, (d) => +d.count)])
                .range([3, d3.max(data, (d) => +d.count)]);
            // pack is a d3js method which calculates the bubble's x & y position in the chart
            // circle packing reference: https://observablehq.com/@d3/pack
            const pack = (children) => d3
                .pack()
                .size([width - 2, height - 2])
                .padding(1.5)(d3.hierarchy({ children }).sum((d) => sizeScale(d.count)));
            // the bubbles are packed in a single level tree, this is the root
            // see circle packing reference: https://observablehq.com/@d3/pack
            const root = () => {
                // if shuffle is undefined or true, shuffle the data
                if (typeof shuffle === 'undefined' || shuffle) {
                    const shuffData = data.slice(); // do not modify the source data!
                    return pack(d3.shuffle(shuffData));
                } // if shuffle is set to false, skip the data shuffle
                return pack(data);
            };
            // svg canvas where all the bubbles are drawn
            const svg = d3
                .select(`#${containerId}`)
                .attr('viewBox', [0, 0, width, height])
                .style('font', '10px Verdana, Geneva, sans-serif')
                .style('max-width', '100%')
                .attr('text-anchor', 'middle');
            this.removeUnneededNodes(svg);
            // a leaf of the "pack tree" corresponds to a bubble
            const leaf = svg
                .selectAll('g')
                .data(root().leaves(), (d) => d.data.entity.id);
            leaf
                .transition(t) // update transition on <g>
                .attr('fill-opacity', 1)
                .attr('transform', (d) => `translate(${d.x + 1},${d.y + 1})`);
            // clear all existing close icons from the bubbles
            leaf.selectAll('.close-icon').remove();
            if (selected) {
                leaf // render only the necessary close icons
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
            // g represents a "group of svg items"
            // items grouped together can be added / removed / scaled together
            const g = leaf.enter().append('g');
            g.attr('transform', (d) => `translate(${d.x + 1},${d.y + 1})`)
                .attr('cursor', 'pointer')
                .on('click', (event, d) => {
                this.onClick(d.data.entity.id);
            })
                .attr('id', (d) => `g_${d.data.entity.id}`)
                .append('circle')
                .attr('id', (d) => {
                d.leafUid = d.data.entity.id;
            })
                .attr('r', 0)
                .transition(t) // enter() transition on <circle>
                .attr('fill-opacity', 1)
                .attr('fill', (d) => colorMap(d.data.entity.typeOfEntity))
                .attr('r', (d) => d.r);
            // prevents the text from overflowing the bubble
            g.append('clipPath')
                .attr('id', (d) => {
                d.clipUid = `Clip-${d.data.entity.id}`;
            })
                .append('use')
                .attr('xlink:href', (d) => d.leafUid.href);
            /** NEW TEXT LOGIC */
            g.append('text')
                .attr('font-family', () => {
                if (fontRendering &&
                    fontRendering.label &&
                    fontRendering.label.family) {
                    return fontRendering.label.family;
                }
                return 'inherit';
            })
                .attr('font-weight', () => {
                if (fontRendering &&
                    fontRendering &&
                    fontRendering.label &&
                    fontRendering.label.weight) {
                    return fontRendering.label.weight;
                }
                return 'inherit';
            })
                .attr('fill', 'white')
                .each((d) => {
                // Capitalize the first letter of the label
                d.data.entity.label =
                    d.data.entity.label.charAt(0).toUpperCase() +
                        d.data.entity.label.slice(1);
                // 1. initialize meta object
                if (!d._meta || typeof d._meta !== 'object')
                    d._meta = {};
                // 2. tokenize label & count into words
                const words = d.data.entity.label.split(/[\s]+/g); // To hyphenate: /\s+|(?<=-)/
                // Truncate with ellipsis if the label is longer than the threshold
                if (words.length > ellipsisThreshold) {
                    words.splice(ellipsisThreshold, words.length - ellipsisThreshold);
                    words[ellipsisThreshold - 1] += '…';
                }
                // add counter
                if (d.r / 4 > 2.5) {
                    // show text threshold
                    if (!words[words.length - 1])
                        words.pop();
                    if (!words[0])
                        words.shift();
                }
                if (d.r / 4 > 4.5) {
                    // show number threshold
                    words.push(`${d.data.count}`);
                }
                d._meta.words = words;
                d._meta.lineHeight = defaultLineHeight;
                const targetWidth = Math.sqrt(this.measureWidth(d._meta.words.join(' ').trim()) * defaultLineHeight);
                // 3. build lines of text
                d._meta.lines = [];
                let line;
                let lineWidth0 = Infinity;
                for (let i = 0, n = d._meta.words.length; i < n; i += 1) {
                    const lineText1 = (line ? `${line.text} ` : '') + words[i];
                    const lineWidth1 = this.measureWidth(lineText1);
                    if ((lineWidth0 + lineWidth1) / 2 < targetWidth && i !== n - 1) {
                        line.width = lineWidth0;
                        lineWidth0 = lineWidth1;
                        line.text = lineText1;
                    }
                    else {
                        // if line is too long or this is the last line (counter), push to next line
                        lineWidth0 = this.measureWidth(words[i]);
                        line = { width: lineWidth0, text: words[i] };
                        d._meta.lines.push(line);
                    }
                }
                // 4. compute the bounding radius
                let radius = 0;
                for (let i = 0, n = d._meta.lines.length; i < n; i += 1) {
                    const dy = (Math.abs(i - n / 2) + 0.8) * d._meta.lineHeight;
                    const dx = d._meta.lines[i].width / 2;
                    radius = Math.max(radius, Math.sqrt(dx * dx + dy * dy));
                }
                d._meta.textRadius = radius;
                return d;
            })
                .attr('transform', (d) => {
                const scale = ((d.r * 0.8) / d._meta.textRadius) * textScalingFactor;
                return `scale(${scale})`;
            })
                .filter((d) => d.r / 4 > 2.5)
                .selectAll('tspan')
                .data((d) => d._meta.lines)
                .enter()
                .append('tspan')
                .attr('x', 0)
                .attr('y', (d, i, n) => (i - n.length / 2 + 0.8) * defaultLineHeight)
                .attr('class', (d, i, n) => 
            // if it's the last label and a valid number, mark as counter
            i === n.length - 1 && this.isValidNumber(d.text)
                ? 'label-counter'
                : 'label-text')
                .text((d) => d.text)
                .attr('fill-opacity', 0)
                .transition(t) // enter() transition on <tspan>
                .attr('fill-opacity', 1);
            // custom style for the counter
            g.selectAll('tspan.label-counter')
                .attr('font-family', () => {
                if (fontRendering &&
                    fontRendering.counter &&
                    fontRendering.counter.family) {
                    return fontRendering.counter.family;
                }
                return 'inherit';
            })
                .attr('font-weight', () => {
                if (fontRendering &&
                    fontRendering.counter &&
                    fontRendering.counter.weight) {
                    return fontRendering.counter.weight;
                }
                return 'inherit';
            });
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
            // communicate end of draw
            this.emit('d3end', data);
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
    removeUnneededNodes(svg) {
        // select all nodes and rejoin data
        const nodes = svg.selectAll('g').data(this.data);
        // remove excess nodes
        nodes.exit().remove();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: BubbleChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: BubbleChartComponent, selector: "n7-bubble-chart", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-bubble-chart {{ data.classes || '' }}\">\n  <svg #bubbleChart id=\"{{data.containerId}}\"></svg>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: BubbleChartComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-bubble-chart', template: "<div *ngIf=\"data\" class=\"n7-bubble-chart {{ data.classes || '' }}\">\n  <svg #bubbleChart id=\"{{data.containerId}}\"></svg>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZHYtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2J1YmJsZS1jaGFydC9idWJibGUtY2hhcnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnViYmxlLWNoYXJ0L2J1YmJsZS1jaGFydC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixpQkFBaUI7QUFDakIsNkJBQTZCO0FBRTdCOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUF1QixNQUFNLGVBQWUsQ0FBQzs7O0FBMEh0RSxNQUFNLE9BQU8sb0JBQW9CO0lBSmpDO1FBV1UsWUFBTyxHQUFHLEtBQUssQ0FBQztRQTJCeEI7OztXQUdHO1FBQ0gsaUJBQVksR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3RCLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xFLHVEQUF1RDtZQUN2RCxJQUNFLElBQUksQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxNQUFNO2dCQUN2QyxJQUFJLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUN2QyxDQUFDO2dCQUNELE9BQU8sQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNuRyxDQUFDO1lBQ0QsNkJBQTZCO1lBQzdCLE9BQU8sT0FBTyxDQUFDLFdB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QUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO3dCQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQy9CLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFxQkQsbUJBQW1CLENBQUMsR0FBRztRQUNyQixtQ0FBbUM7UUFDbkMsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELHNCQUFzQjtRQUN0QixLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs4R0ExRFUsb0JBQW9CO2tHQUFwQixvQkFBb0IsK0ZDakpqQywySUFHQTs7MkZEOElhLG9CQUFvQjtrQkFKaEMsU0FBUzsrQkFDRSxpQkFBaUI7OEJBSWxCLElBQUk7c0JBQVosS0FBSztnQkFFRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQlVCQkxFQ0hBUlQudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogVGhlIGJ1YmJsZSBjaGFydCBpcyBkcmF3biB1c2luZyBkM2pzLCBhIGxpYnJhcnkgdG8gY3JlYXRlIGFuZCB1cGRhdGUgYW55dGhpbmcgaW4gc3ZnLlxuICpcbiAqIExFR0VORDpcbiAqIC0gc3ZnIC0+IHRoZSBjYW52YXMvPHN2Zz4gZWxlbWVudCB3aGVyZSBldmVyeXRoaW5nIHdpbGwgYmUgZHJhd24gb24gKGFwcGVuZGVkKS5cbiAqIC0gZyAtPiA8Zz4gaXMgYSBncm91cCBvZiBzdmcgZWxlbWVudHMuXG4gKiAtIGxlYWYgLT4gdGhpcyBpcyB0aGUgc3ZnIGNpcmNsZSwgdGhlIGJ1YmJsZS5cbiAqIC0gdGV4dCAtPiB0aGlzIGlzIGFsbCB0aGUgdGV4dCBpbnNpZGUgdGhlIGNpcmNsZS5cbiAqIC0gdHNwYW4gLT4gdGhpcyBpcyBqdXN0IG9uZSBsaW5lIG9mIHRleHQuXG4gKlxuICogV2hhdCBhcmUgXCJqb2luLCBlbnRlciwgdXBkYXRlLCBleGl0P1wiXG4gKiBodHRwczovL29ic2VydmFibGVocS5jb20vQGQzL2xlYXJuLWQzLWpvaW5zP2NvbGxlY3Rpb249QGQzL2xlYXJuLWQzXG4gKiBodHRwczovL29ic2VydmFibGVocS5jb20vQHRoZXR5bGVyd29sZi9kYXktMTgtam9pbi1lbnRlci11cGRhdGUtZXhpdFxuICpcbiAqIEVhY2ggbGluZSBjYW4gaGF2ZSBhIGRpZmZlcmVudCB3aWR0aCwgYnV0IGFsbCBvZiB0aGUgdGV4dCBpbnNpZGUgYSBjaXJjbGVcbiAqIG5lZWRzIHRvIGJlIHNjYWxlZCBieSBhIGNvbnN0YW50IGZhY3Rvci5cbiAqIGh0dHBzOi8vb2JzZXJ2YWJsZWhxLmNvbS9AbWJvc3RvY2svZml0LXRleHQtdG8tY2lyY2xlXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgRDNDaGFydCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGVudGl0eSAocmVxdWlyZWQpXG4gKiAtIGlkIChyZXF1aXJlZClcbiAqIC0gbGFiZWwgKG9wdGlvbmFsKVxuICogLSB0eXBlT2ZFbnRpdHkgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNvdW50IChyZXF1aXJlZClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBCdWJibGVDaGFydERhdGFJdGVtIHtcbiAgZW50aXR5OiB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBsYWJlbD86IHN0cmluZztcbiAgICB0eXBlT2ZFbnRpdHk/OiBzdHJpbmc7XG4gIH07XG4gIGNvdW50OiBudW1iZXI7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBhIENpcmNsZSdzIG5vZGUgZGF0YVxuICovXG5leHBvcnQgaW50ZXJmYWNlIENpcmNsZU5vZGUge1xuICBjbGlwVWlkOiBzdHJpbmc7XG4gIGRhdGE6IEJ1YmJsZUNoYXJ0RGF0YUl0ZW07XG4gIGRlcHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBsZWFmVWlkOiBzdHJpbmc7XG4gIHBhcmVudDogTm9kZTtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHI6IG51bWJlcjtcbiAgdmFsdWU6IG51bWJlcjtcbiAgLyoqIER5bmFtaWMgZGF0YSBmb3IgaW50ZXJuYWwgbG9naWMgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBCdWJibGVDaGFydENvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGNvbnRhaW5lcklkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJXaWR0aCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY29udGFpbmVySGVpZ2h0IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBidWJibGVzRGF0YSAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSByZXNldCAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQnViYmxlQ2hhcnREYXRhIHtcbiAgLyoqXG4gICAqIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgYnViYmxlLWNoYXJ0XG4gICAqL1xuICBjb250YWluZXJJZDogc3RyaW5nO1xuICAvKipcbiAgICogdG90YWwgd2lkdGggZm9yIHRoZSBidWJibGUtY2hhcnRcbiAgICovXG4gIHdpZHRoOiBudW1iZXI7XG4gIC8qKlxuICAgKiB0b3RhbCBoZWlnaHQgZm9yIHRoZSBidWJibGUtY2hhcnRcbiAgICovXG4gIGhlaWdodDogbnVtYmVyO1xuICAvKipcbiAgICogZGF0YSBhYm91dCB0aGUgYnViYmxlc1xuICAgKi9cbiAgZGF0YTogQnViYmxlQ2hhcnREYXRhSXRlbVtdO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBjc3MgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIGxpc3Qgb2YgSUQncyBvZiBzZWxlY3RlZCBpdGVtc1xuICAgKiAoc2VsZWN0ZWQgaXRlbXMgd2lsbCByZW5kZXIgd2l0aCBhICdYJyBpY29uKVxuICAgKi9cbiAgc2VsZWN0ZWQ/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICAqIFNwZWNpZnkgYSBsaXN0IG9mIHR5cGVPZkVudGl0eSB0eXBlcyAoZG9tYWluKSxcbiAgICogYW5kIGEgbGlzdCBvZiBjb2xvcnMgKHJhbmdlKSwgd2hpY2ggd2lsbCBiZSBtYXBwZWQgdG9nZXRoZXIuXG4gICAqL1xuICBjb2xvck1hdGNoPzoge1xuICAgIGRvbWFpbjogc3RyaW5nW107XG4gICAgcmFuZ2U6IHN0cmluZ1tdO1xuICB9O1xuICAvKipcbiAgICogRGVmaW5lIGEgbWF4IGFuZCBtaW4gc2l6ZSBmb3IgdGhlIGJ1YmJsZXNcbiAgICovXG4gIHNpemVSYW5nZTogW251bWJlciwgbnVtYmVyXTtcbiAgLyoqXG4gICAqIElmIGRlZmluZWQsIHRyYW5zaXRpb24gd2lsbCBiZSBhY3RpdmF0ZWRcbiAgICogYW5kIHRoZSB2YWx1ZSB3aWxsIGJlIHVzZWQgYXMgZHVyYXRpb25cbiAgICovXG4gIHRyYW5zaXRpb24/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBJZiBzZXQgdG8gZmFsc2UsIHN0b3BzIHRoZSBzaHVmZmxpbmcgb2YgdGhlIGRhdGFcbiAgICogYmVmb3JlIHJlbmRlcmluZy5cbiAgICovXG4gIHNodWZmbGU/OiBib29sZWFuO1xuICAvKipcbiAgICogRGVmaW5lcyB0aGUgZm9udC1mYW1pbHkgYW5kIHRoZSBmb250LXdlaWdodCBmb3IgZWFjaCB0ZXh0IGdyb3VwXG4gICAqL1xuICBmb250UmVuZGVyaW5nPzoge1xuICAgIGxhYmVsPzoge1xuICAgICAgZmFtaWx5Pzogc3RyaW5nO1xuICAgICAgd2VpZ2h0Pzogc3RyaW5nO1xuICAgIH07XG4gICAgY291bnRlcj86IHtcbiAgICAgIGZhbWlseT86IHN0cmluZztcbiAgICAgIHdlaWdodD86IHN0cmluZztcbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBleHBvc2UgdGhlIGRyYXcgZnVuY3Rpb24gb3V0c2lkZSBvZiBuNy1mcm9udGVuZC9jb21wb25lbnRzIGxpYnJhcnlcbiAgICogdGhpcyBpcyBuZWVkZWQgdG8gcmVkcmF3IGJ1YmJsZS1jaGFydC1jb21wb25lbnQgb24gY29tbWFuZFxuICAgKi9cbiAgc2V0RHJhdz86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctYnViYmxlLWNoYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1YmJsZS1jaGFydC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQnViYmxlQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcbiAgQElucHV0KCkgZGF0YTogQnViYmxlQ2hhcnREYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBwcml2YXRlIGQzO1xuXG4gIHByaXZhdGUgX2xvYWRlZCA9IGZhbHNlO1xuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICAvKlxuICAgICBXYWl0cyBmb3IgdGhlIGRvbSB0byBiZSBsb2FkZWQsIHRoZW4gZmlyZXMgdGhlIGRyYXcgZnVuY3Rpb25cbiAgICAgdGhhdCByZW5kZXJzIHRoZSBjaGFydC5cbiAgICAqL1xuICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgIGlmICh0aGlzLl9sb2FkZWQpIHJldHVybjtcbiAgICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaW1wb3J0KCdkMycpLnRoZW4oKG1vZHVsZSkgPT4ge1xuICAgICAgICAgIHRoaXMuZDMgPSBtb2R1bGU7XG4gICAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuc2V0RHJhdykge1xuICAgICAgICAgICAgdGhpcy5kYXRhLnNldERyYXcodGhpcy5kcmF3KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb25DbGljayhwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cblxuICAvKipcbiAgICogUmVmZXJlbmNlIGZvciBtdWNoIG9mIHRoZSBuZXcgdGV4dCBzY2FsaW5nIGNvZGUgY29tZXMgZnJvbTpcbiAgICogaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0BtYm9zdG9jay9maXQtdGV4dC10by1jaXJjbGVcbiAgICovXG4gIG1lYXN1cmVXaWR0aCA9ICh0ZXh0KSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLmdldENvbnRleHQoJzJkJyk7XG4gICAgLy8gbWVhc3VyZSB0ZXh0IHdpdGggdGhlIGNvcnJlY3QgZm9udCBmYW1pbHkgYW5kIHdlaWdodFxuICAgIGlmIChcbiAgICAgIHRoaXMuZGF0YT8uZm9udFJlbmRlcmluZz8ubGFiZWw/LmZhbWlseSAmJlxuICAgICAgdGhpcy5kYXRhPy5mb250UmVuZGVyaW5nPy5sYWJlbD8ud2VpZ2h0XG4gICAgKSB7XG4gICAgICBjb250ZXh0LmZvbnQgPSBgJHt0aGlzLmRhdGEuZm9udFJlbmRlcmluZy5sYWJlbC53ZWlnaHR9ICR7dGhpcy5kYXRhLmZvbnRSZW5kZXJpbmcubGFiZWwuZmFtaWx5fWA7XG4gICAgfVxuICAgIC8vIGNhbGN1bGF0ZWQgd2lkdGggKyBwYWRkaW5nXG4gICAgcmV0dXJuIGNvbnRleHQubWVhc3VyZVRleHQodGV4dCkud2lkdGggKiAxLjE1O1xuICB9O1xuXG4gIGlzVmFsaWROdW1iZXIgPSAodmFsdWUpID0+ICFOdW1iZXIuaXNOYU4oTnVtYmVyLnBhcnNlRmxvYXQodmFsdWUpKTtcblxuICByZW1vdmVVbm5lZWRlZE5vZGVzKHN2Zykge1xuICAgIC8vIHNlbGVjdCBhbGwgbm9kZXMgYW5kIHJlam9pbiBkYXRhXG4gICAgY29uc3Qgbm9kZXMgPSBzdmcuc2VsZWN0QWxsKCdnJykuZGF0YSh0aGlzLmRhdGEpO1xuICAgIC8vIHJlbW92ZSBleGNlc3Mgbm9kZXNcbiAgICBub2Rlcy5leGl0KCkucmVtb3ZlKCk7XG4gIH1cblxuICBkcmF3ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZDMgfSA9IHRoaXM7XG4gICAgY29uc3Qge1xuICAgICAgY29udGFpbmVySWQsXG4gICAgICBkYXRhLFxuICAgICAgaGVpZ2h0LFxuICAgICAgd2lkdGgsXG4gICAgICBzZWxlY3RlZCxcbiAgICAgIHRyYW5zaXRpb24sXG4gICAgICBjb2xvck1hdGNoLFxuICAgICAgc2h1ZmZsZSxcbiAgICAgIGZvbnRSZW5kZXJpbmcsXG4gICAgfSA9IHRoaXMuZGF0YTtcbiAgICAvLyBTVkcgc2hhcGUgcGF0aCBmb3IgdGhlIGNsb3NlIGljb25cbiAgICBjb25zdCBjbG9zZUljb25QYXRoID1cbiAgICAgICdNIC01MCw0MCBMLTQwLDUwIDAsMTAgNDAsNTAgNTAsNDAgMTAsMCA1MCwtNDAgNDAsLTUwIDAsLTEwIC00MCwtNTAgLTUwLC00MCAtMTAsMCAtNTAsNDAnO1xuICAgIGNvbnN0IGRlZmF1bHRMaW5lSGVpZ2h0ID0gMTM7XG4gICAgLy8gd29yZCBjb3VudCBiZWZvcmUgdHJ1bmNhdGluZyB3aXRoIGVsbGlwc2lzXG4gICAgY29uc3QgZWxsaXBzaXNUaHJlc2hvbGQgPSA0O1xuICAgIGNvbnN0IHRleHRTY2FsaW5nRmFjdG9yID0gMTtcblxuICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgcG9zc2libGUgdG8gZHJhdyB3aXRoIHRoZSBjdXJyZW50IGRhdGFzZXRcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJyhuNy1idWJibGUtY2hhcnQpIFRoZSBkYXRhIG9iamVjdCBpcyBub3QgaW4gdGhlIGV4cGVjdGVkIGZvcm1hdCEnXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGFuaW1hdGlvbiBzZXR0aW5ncyB1c2VkIHRvIHJlbmRlciBjaGFuZ2VzIGluIHRoZSBjaGFydFxuICAgIGxldCB0ID0gZDMudHJhbnNpdGlvbigpLmR1cmF0aW9uKDApO1xuICAgIGlmICh0eXBlb2YgdHJhbnNpdGlvbiA9PT0gJ251bWJlcicpIHtcbiAgICAgIHQgPSBkMy50cmFuc2l0aW9uKCkuZHVyYXRpb24odHJhbnNpdGlvbikuZWFzZShkMy5lYXNlQ3ViaWNJbk91dCk7XG4gICAgfVxuXG4gICAgLy8gY2FsY3VsYXRlIHRoZSBidWJibGUgYmFja2dyb3VuZCBjb2xvciBmcm9tIGl0J3MgdHlwZSAoZG9tYWluKVxuICAgIGNvbnN0IGNvbG9yTWFwID0gZDNcbiAgICAgIC5zY2FsZU9yZGluYWwoKVxuICAgICAgLmRvbWFpbihcbiAgICAgICAgY29sb3JNYXRjaFxuICAgICAgICAgID8gY29sb3JNYXRjaC5kb21haW5cbiAgICAgICAgICA6IFsncGVyc29uYScsICdsdW9nbycsICdvcmdhbml6emF6aW9uZScsICdjb3NhIG5vdGV2b2xlJ11cbiAgICAgIClcbiAgICAgIC5yYW5nZShjb2xvck1hdGNoID8gY29sb3JNYXRjaC5yYW5nZSA6IGQzLnNjaGVtZVRhYmxlYXUxMCk7XG5cbiAgICAvLyBjYWxjdWxhdGUgaG93IGJpZyB0aGUgcmFkaXVzIG9mIHRoZSBidWJibGUgc2hvdWxkIGJlXG4gICAgY29uc3Qgc2l6ZVNjYWxlID0gZDMgLy8gbWFwIGVudGl0eSBjb3VudCB0byBidWJibGUgc2l6ZVxuICAgICAgLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIGQzLm1heChkYXRhLCAoZCkgPT4gK2QuY291bnQpXSlcbiAgICAgIC5yYW5nZShbMywgZDMubWF4KGRhdGEsIChkKSA9PiArZC5jb3VudCldKTtcblxuICAgIC8vIHBhY2sgaXMgYSBkM2pzIG1ldGhvZCB3aGljaCBjYWxjdWxhdGVzIHRoZSBidWJibGUncyB4ICYgeSBwb3NpdGlvbiBpbiB0aGUgY2hhcnRcbiAgICAvLyBjaXJjbGUgcGFja2luZyByZWZlcmVuY2U6IGh0dHBzOi8vb2JzZXJ2YWJsZWhxLmNvbS9AZDMvcGFja1xuICAgIGNvbnN0IHBhY2sgPSAoY2hpbGRyZW4pID0+XG4gICAgICBkM1xuICAgICAgICAucGFjaygpXG4gICAgICAgIC5zaXplKFt3aWR0aCAtIDIsIGhlaWdodCAtIDJdKVxuICAgICAgICAucGFkZGluZygxLjUpKFxuICAgICAgICBkMy5oaWVyYXJjaHkoeyBjaGlsZHJlbiB9KS5zdW0oKGQpID0+IHNpemVTY2FsZShkLmNvdW50KSlcbiAgICAgICk7XG5cbiAgICAvLyB0aGUgYnViYmxlcyBhcmUgcGFja2VkIGluIGEgc2luZ2xlIGxldmVsIHRyZWUsIHRoaXMgaXMgdGhlIHJvb3RcbiAgICAvLyBzZWUgY2lyY2xlIHBhY2tpbmcgcmVmZXJlbmNlOiBodHRwczovL29ic2VydmFibGVocS5jb20vQGQzL3BhY2tcbiAgICBjb25zdCByb290ID0gKCkgPT4ge1xuICAgICAgLy8gaWYgc2h1ZmZsZSBpcyB1bmRlZmluZWQgb3IgdHJ1ZSwgc2h1ZmZsZSB0aGUgZGF0YVxuICAgICAgaWYgKHR5cGVvZiBzaHVmZmxlID09PSAndW5kZWZpbmVkJyB8fCBzaHVmZmxlKSB7XG4gICAgICAgIGNvbnN0IHNodWZmRGF0YSA9IGRhdGEuc2xpY2UoKTsgLy8gZG8gbm90IG1vZGlmeSB0aGUgc291cmNlIGRhdGEhXG4gICAgICAgIHJldHVybiBwYWNrKGQzLnNodWZmbGUoc2h1ZmZEYXRhKSk7XG4gICAgICB9IC8vIGlmIHNodWZmbGUgaXMgc2V0IHRvIGZhbHNlLCBza2lwIHRoZSBkYXRhIHNodWZmbGVcbiAgICAgIHJldHVybiBwYWNrKGRhdGEpO1xuICAgIH07XG5cbiAgICAvLyBzdmcgY2FudmFzIHdoZXJlIGFsbCB0aGUgYnViYmxlcyBhcmUgZHJhd25cbiAgICBjb25zdCBzdmcgPSBkM1xuICAgICAgLnNlbGVjdChgIyR7Y29udGFpbmVySWR9YClcbiAgICAgIC5hdHRyKCd2aWV3Qm94JywgWzAsIDAsIHdpZHRoLCBoZWlnaHRdKVxuICAgICAgLnN0eWxlKCdmb250JywgJzEwcHggVmVyZGFuYSwgR2VuZXZhLCBzYW5zLXNlcmlmJylcbiAgICAgIC5zdHlsZSgnbWF4LXdpZHRoJywgJzEwMCUnKVxuICAgICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpO1xuXG4gICAgdGhpcy5yZW1vdmVVbm5lZWRlZE5vZGVzKHN2Zyk7XG5cbiAgICAvLyBhIGxlYWYgb2YgdGhlIFwicGFjayB0cmVlXCIgY29ycmVzcG9uZHMgdG8gYSBidWJibGVcbiAgICBjb25zdCBsZWFmID0gc3ZnXG4gICAgICAuc2VsZWN0QWxsKCdnJylcbiAgICAgIC5kYXRhKHJvb3QoKS5sZWF2ZXMoKSwgKGQpID0+IGQuZGF0YS5lbnRpdHkuaWQpO1xuICAgIGxlYWZcbiAgICAgIC50cmFuc2l0aW9uKHQpIC8vIHVwZGF0ZSB0cmFuc2l0aW9uIG9uIDxnPlxuICAgICAgLmF0dHIoJ2ZpbGwtb3BhY2l0eScsIDEpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQpID0+IGB0cmFuc2xhdGUoJHtkLnggKyAxfSwke2QueSArIDF9KWApO1xuXG4gICAgLy8gY2xlYXIgYWxsIGV4aXN0aW5nIGNsb3NlIGljb25zIGZyb20gdGhlIGJ1YmJsZXNcbiAgICBsZWFmLnNlbGVjdEFsbCgnLmNsb3NlLWljb24nKS5yZW1vdmUoKTtcbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIGxlYWYgLy8gcmVuZGVyIG9ubHkgdGhlIG5lY2Vzc2FyeSBjbG9zZSBpY29uc1xuICAgICAgICAuZmlsdGVyKChkKSA9PiBzZWxlY3RlZC5pbmNsdWRlcyhkLmRhdGEuZW50aXR5LmlkKSlcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdjbG9zZS1pY29uJylcbiAgICAgICAgLmF0dHIoJ2QnLCBjbG9zZUljb25QYXRoKVxuICAgICAgICAuYXR0cignZmlsbCcsICcjZmZmJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIChkKSA9PiB7XG4gICAgICAgICAgaWYgKGQuciAvIDQgPiAzKSB7XG4gICAgICAgICAgICByZXR1cm4gYHNjYWxlKC4wOCkgdHJhbnNsYXRlKDAsICR7ZC5yICogMTAgLSA4MH0pYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICdzY2FsZSguMDgpJztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGVhZlxuICAgICAgLnNlbGVjdCgnY2lyY2xlJylcbiAgICAgIC50cmFuc2l0aW9uKHQpIC8vIHVwZGF0ZSB0cmFuc2l0aW9uIG9uIDxjaXJjbGU+XG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMSlcbiAgICAgIC5hdHRyKCdyJywgKGQpID0+IGQucik7XG5cbiAgICAvLyBnIHJlcHJlc2VudHMgYSBcImdyb3VwIG9mIHN2ZyBpdGVtc1wiXG4gICAgLy8gaXRlbXMgZ3JvdXBlZCB0b2dldGhlciBjYW4gYmUgYWRkZWQgLyByZW1vdmVkIC8gc2NhbGVkIHRvZ2V0aGVyXG4gICAgY29uc3QgZyA9IGxlYWYuZW50ZXIoKS5hcHBlbmQoJ2cnKTtcblxuICAgIGcuYXR0cigndHJhbnNmb3JtJywgKGQpID0+IGB0cmFuc2xhdGUoJHtkLnggKyAxfSwke2QueSArIDF9KWApXG4gICAgICAuYXR0cignY3Vyc29yJywgJ3BvaW50ZXInKVxuICAgICAgLm9uKCdjbGljaycsIChldmVudCwgZCkgPT4ge1xuICAgICAgICB0aGlzLm9uQ2xpY2soZC5kYXRhLmVudGl0eS5pZCk7XG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2lkJywgKGQpID0+IGBnXyR7ZC5kYXRhLmVudGl0eS5pZH1gKVxuICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgIC5hdHRyKCdpZCcsIChkKSA9PiB7XG4gICAgICAgIGQubGVhZlVpZCA9IGQuZGF0YS5lbnRpdHkuaWQ7XG4gICAgICB9KVxuICAgICAgLmF0dHIoJ3InLCAwKVxuICAgICAgLnRyYW5zaXRpb24odCkgLy8gZW50ZXIoKSB0cmFuc2l0aW9uIG9uIDxjaXJjbGU+XG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMSlcbiAgICAgIC5hdHRyKCdmaWxsJywgKGQpID0+IGNvbG9yTWFwKGQuZGF0YS5lbnRpdHkudHlwZU9mRW50aXR5KSlcbiAgICAgIC5hdHRyKCdyJywgKGQpID0+IGQucik7XG5cbiAgICAvLyBwcmV2ZW50cyB0aGUgdGV4dCBmcm9tIG92ZXJmbG93aW5nIHRoZSBidWJibGVcbiAgICBnLmFwcGVuZCgnY2xpcFBhdGgnKVxuICAgICAgLmF0dHIoJ2lkJywgKGQpID0+IHtcbiAgICAgICAgZC5jbGlwVWlkID0gYENsaXAtJHtkLmRhdGEuZW50aXR5LmlkfWA7XG4gICAgICB9KVxuICAgICAgLmFwcGVuZCgndXNlJylcbiAgICAgIC5hdHRyKCd4bGluazpocmVmJywgKGQpID0+IGQubGVhZlVpZC5ocmVmKTtcblxuICAgIC8qKiBORVcgVEVYVCBMT0dJQyAqL1xuICAgIGcuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdmb250LWZhbWlseScsICgpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGZvbnRSZW5kZXJpbmcgJiZcbiAgICAgICAgICBmb250UmVuZGVyaW5nLmxhYmVsICYmXG4gICAgICAgICAgZm9udFJlbmRlcmluZy5sYWJlbC5mYW1pbHlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcubGFiZWwuZmFtaWx5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnaW5oZXJpdCc7XG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2ZvbnQtd2VpZ2h0JywgKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZm9udFJlbmRlcmluZyAmJlxuICAgICAgICAgIGZvbnRSZW5kZXJpbmcgJiZcbiAgICAgICAgICBmb250UmVuZGVyaW5nLmxhYmVsICYmXG4gICAgICAgICAgZm9udFJlbmRlcmluZy5sYWJlbC53ZWlnaHRcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcubGFiZWwud2VpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnaW5oZXJpdCc7XG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgICAgLmVhY2goKGQ6IENpcmNsZU5vZGUpID0+IHtcbiAgICAgICAgLy8gQ2FwaXRhbGl6ZSB0aGUgZmlyc3QgbGV0dGVyIG9mIHRoZSBsYWJlbFxuICAgICAgICBkLmRhdGEuZW50aXR5LmxhYmVsID1cbiAgICAgICAgICBkLmRhdGEuZW50aXR5LmxhYmVsLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICtcbiAgICAgICAgICBkLmRhdGEuZW50aXR5LmxhYmVsLnNsaWNlKDEpO1xuICAgICAgICAvLyAxLiBpbml0aWFsaXplIG1ldGEgb2JqZWN0XG4gICAgICAgIGlmICghZC5fbWV0YSB8fCB0eXBlb2YgZC5fbWV0YSAhPT0gJ29iamVjdCcpIGQuX21ldGEgPSB7fTtcbiAgICAgICAgLy8gMi4gdG9rZW5pemUgbGFiZWwgJiBjb3VudCBpbnRvIHdvcmRzXG4gICAgICAgIGNvbnN0IHdvcmRzID0gZC5kYXRhLmVudGl0eS5sYWJlbC5zcGxpdCgvW1xcc10rL2cpOyAvLyBUbyBoeXBoZW5hdGU6IC9cXHMrfCg/PD0tKS9cbiAgICAgICAgLy8gVHJ1bmNhdGUgd2l0aCBlbGxpcHNpcyBpZiB0aGUgbGFiZWwgaXMgbG9uZ2VyIHRoYW4gdGhlIHRocmVzaG9sZFxuICAgICAgICBpZiAod29yZHMubGVuZ3RoID4gZWxsaXBzaXNUaHJlc2hvbGQpIHtcbiAgICAgICAgICB3b3Jkcy5zcGxpY2UoZWxsaXBzaXNUaHJlc2hvbGQsIHdvcmRzLmxlbmd0aCAtIGVsbGlwc2lzVGhyZXNob2xkKTtcbiAgICAgICAgICB3b3Jkc1tlbGxpcHNpc1RocmVzaG9sZCAtIDFdICs9ICfigKYnO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFkZCBjb3VudGVyXG4gICAgICAgIGlmIChkLnIgLyA0ID4gMi41KSB7XG4gICAgICAgICAgLy8gc2hvdyB0ZXh0IHRocmVzaG9sZFxuICAgICAgICAgIGlmICghd29yZHNbd29yZHMubGVuZ3RoIC0gMV0pIHdvcmRzLnBvcCgpO1xuICAgICAgICAgIGlmICghd29yZHNbMF0pIHdvcmRzLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGQuciAvIDQgPiA0LjUpIHtcbiAgICAgICAgICAvLyBzaG93IG51bWJlciB0aHJlc2hvbGRcbiAgICAgICAgICB3b3Jkcy5wdXNoKGAke2QuZGF0YS5jb3VudH1gKTtcbiAgICAgICAgfVxuICAgICAgICBkLl9tZXRhLndvcmRzID0gd29yZHM7XG4gICAgICAgIGQuX21ldGEubGluZUhlaWdodCA9IGRlZmF1bHRMaW5lSGVpZ2h0O1xuICAgICAgICBjb25zdCB0YXJnZXRXaWR0aCA9IE1hdGguc3FydChcbiAgICAgICAgICB0aGlzLm1lYXN1cmVXaWR0aChkLl9tZXRhLndvcmRzLmpvaW4oJyAnKS50cmltKCkpICogZGVmYXVsdExpbmVIZWlnaHRcbiAgICAgICAgKTtcbiAgICAgICAgLy8gMy4gYnVpbGQgbGluZXMgb2YgdGV4dFxuICAgICAgICBkLl9tZXRhLmxpbmVzID0gW107XG4gICAgICAgIGxldCBsaW5lO1xuICAgICAgICBsZXQgbGluZVdpZHRoMCA9IEluZmluaXR5O1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbiA9IGQuX21ldGEud29yZHMubGVuZ3RoOyBpIDwgbjsgaSArPSAxKSB7XG4gICAgICAgICAgY29uc3QgbGluZVRleHQxID0gKGxpbmUgPyBgJHtsaW5lLnRleHR9IGAgOiAnJykgKyB3b3Jkc1tpXTtcbiAgICAgICAgICBjb25zdCBsaW5lV2lkdGgxID0gdGhpcy5tZWFzdXJlV2lkdGgobGluZVRleHQxKTtcbiAgICAgICAgICBpZiAoKGxpbmVXaWR0aDAgKyBsaW5lV2lkdGgxKSAvIDIgPCB0YXJnZXRXaWR0aCAmJiBpICE9PSBuIC0gMSkge1xuICAgICAgICAgICAgbGluZS53aWR0aCA9IGxpbmVXaWR0aDA7XG4gICAgICAgICAgICBsaW5lV2lkdGgwID0gbGluZVdpZHRoMTtcbiAgICAgICAgICAgIGxpbmUudGV4dCA9IGxpbmVUZXh0MTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgbGluZSBpcyB0b28gbG9uZyBvciB0aGlzIGlzIHRoZSBsYXN0IGxpbmUgKGNvdW50ZXIpLCBwdXNoIHRvIG5leHQgbGluZVxuICAgICAgICAgICAgbGluZVdpZHRoMCA9IHRoaXMubWVhc3VyZVdpZHRoKHdvcmRzW2ldKTtcbiAgICAgICAgICAgIGxpbmUgPSB7IHdpZHRoOiBsaW5lV2lkdGgwLCB0ZXh0OiB3b3Jkc1tpXSB9O1xuICAgICAgICAgICAgZC5fbWV0YS5saW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyA0LiBjb21wdXRlIHRoZSBib3VuZGluZyByYWRpdXNcbiAgICAgICAgbGV0IHJhZGl1cyA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBuID0gZC5fbWV0YS5saW5lcy5sZW5ndGg7IGkgPCBuOyBpICs9IDEpIHtcbiAgICAgICAgICBjb25zdCBkeSA9IChNYXRoLmFicyhpIC0gbiAvIDIpICsgMC44KSAqIGQuX21ldGEubGluZUhlaWdodDtcbiAgICAgICAgICBjb25zdCBkeCA9IGQuX21ldGEubGluZXNbaV0ud2lkdGggLyAyO1xuICAgICAgICAgIHJhZGl1cyA9IE1hdGgubWF4KHJhZGl1cywgTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KSk7XG4gICAgICAgIH1cbiAgICAgICAgZC5fbWV0YS50ZXh0UmFkaXVzID0gcmFkaXVzO1xuICAgICAgICByZXR1cm4gZDtcbiAgICAgIH0pXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQpID0+IHtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSAoKGQuciAqIDAuOCkgLyBkLl9tZXRhLnRleHRSYWRpdXMpICogdGV4dFNjYWxpbmdGYWN0b3I7XG4gICAgICAgIHJldHVybiBgc2NhbGUoJHtzY2FsZX0pYDtcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChkKSA9PiBkLnIgLyA0ID4gMi41KVxuICAgICAgLnNlbGVjdEFsbCgndHNwYW4nKVxuICAgICAgLmRhdGEoKGQpID0+IGQuX21ldGEubGluZXMpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgndHNwYW4nKVxuICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgLmF0dHIoJ3knLCAoZCwgaSwgbikgPT4gKGkgLSBuLmxlbmd0aCAvIDIgKyAwLjgpICogZGVmYXVsdExpbmVIZWlnaHQpXG4gICAgICAuYXR0cignY2xhc3MnLCAoZCwgaSwgbikgPT5cbiAgICAgICAgLy8gaWYgaXQncyB0aGUgbGFzdCBsYWJlbCBhbmQgYSB2YWxpZCBudW1iZXIsIG1hcmsgYXMgY291bnRlclxuICAgICAgICBpID09PSBuLmxlbmd0aCAtIDEgJiYgdGhpcy5pc1ZhbGlkTnVtYmVyKGQudGV4dClcbiAgICAgICAgICA/ICdsYWJlbC1jb3VudGVyJ1xuICAgICAgICAgIDogJ2xhYmVsLXRleHQnXG4gICAgICApXG4gICAgICAudGV4dCgoZCkgPT4gZC50ZXh0KVxuICAgICAgLmF0dHIoJ2ZpbGwtb3BhY2l0eScsIDApXG4gICAgICAudHJhbnNpdGlvbih0KSAvLyBlbnRlcigpIHRyYW5zaXRpb24gb24gPHRzcGFuPlxuICAgICAgLmF0dHIoJ2ZpbGwtb3BhY2l0eScsIDEpO1xuXG4gICAgLy8gY3VzdG9tIHN0eWxlIGZvciB0aGUgY291bnRlclxuICAgIGcuc2VsZWN0QWxsKCd0c3Bhbi5sYWJlbC1jb3VudGVyJylcbiAgICAgIC5hdHRyKCdmb250LWZhbWlseScsICgpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGZvbnRSZW5kZXJpbmcgJiZcbiAgICAgICAgICBmb250UmVuZGVyaW5nLmNvdW50ZXIgJiZcbiAgICAgICAgICBmb250UmVuZGVyaW5nLmNvdW50ZXIuZmFtaWx5XG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmNvdW50ZXIuZmFtaWx5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnaW5oZXJpdCc7XG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2ZvbnQtd2VpZ2h0JywgKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZm9udFJlbmRlcmluZyAmJlxuICAgICAgICAgIGZvbnRSZW5kZXJpbmcuY291bnRlciAmJlxuICAgICAgICAgIGZvbnRSZW5kZXJpbmcuY291bnRlci53ZWlnaHRcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcuY291bnRlci53ZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdpbmhlcml0JztcbiAgICAgIH0pO1xuXG4gICAgbGVhZlxuICAgICAgLmV4aXQoKSAvLyBFWElUIENZQ0xFXG4gICAgICAucmVtb3ZlKCk7XG5cbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIGcuZmlsdGVyKChkKSA9PiBzZWxlY3RlZC5pbmNsdWRlcyhkLmxlYWZVaWQpKSAvLyBhcHBlbmQgJ1gnIGljb24gLy8gb25seSBmb3Igc2VsZWN0ZWQgYnViYmxlc1xuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmF0dHIoJ2QnLCBjbG9zZUljb25QYXRoKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnY2xvc2UtaWNvbicpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgKGQpID0+IHtcbiAgICAgICAgICBpZiAoZC5yIC8gNCA+IDIuNSkge1xuICAgICAgICAgICAgcmV0dXJuICcjZmZmJztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICd0cmFuc3BhcmVudCc7XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCkgPT4ge1xuICAgICAgICAgIGlmIChkLnIgLyA0ID4gMykge1xuICAgICAgICAgICAgcmV0dXJuIGBzY2FsZSguMDgpIHRyYW5zbGF0ZSgwLCAke2QuciAqIDEwIC0gODB9KWA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAnc2NhbGUoLjA4KSc7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGNvbW11bmljYXRlIGVuZCBvZiBkcmF3XG4gICAgdGhpcy5lbWl0KCdkM2VuZCcsIGRhdGEpO1xuICB9O1xufVxuIiwiPGRpdiAqbmdJZj1cImRhdGFcIiBjbGFzcz1cIm43LWJ1YmJsZS1jaGFydCB7eyBkYXRhLmNsYXNzZXMgfHwgJycgfX1cIj5cbiAgPHN2ZyAjYnViYmxlQ2hhcnQgaWQ9XCJ7e2RhdGEuY29udGFpbmVySWR9fVwiPjwvc3ZnPlxuPC9kaXY+XG4iXX0=