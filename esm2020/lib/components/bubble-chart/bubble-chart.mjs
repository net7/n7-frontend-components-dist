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
            if (this.data?.fontRendering?.label?.family && this.data?.fontRendering?.label?.weight) {
                context.font = `${this.data.fontRendering.label.weight} ${this.data.fontRendering.label.family}`;
            }
            // calculated width + padding
            return context.measureText(text).width * 1.15;
        };
        this.isValidNumber = (value) => !Number.isNaN(Number.parseFloat(value));
        this.draw = () => {
            const { d3 } = this;
            const { containerId, data, height, width, selected, transition, colorMatch, shuffle, fontRendering } = this.data;
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
            let t = d3
                .transition()
                .duration(0);
            if (typeof transition === 'number') {
                t = d3
                    .transition()
                    .duration(transition)
                    .ease(d3.easeCubicInOut);
            }
            // calculate the bubble background color from it's type (domain)
            const colorMap = d3.scaleOrdinal()
                .domain(colorMatch ? colorMatch.domain : ['persona', 'luogo', 'organizzazione', 'cosa notevole'])
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
                // .attr('font-family', 'Verdana, Geneva, sans-serif')
                // .attr('font-size', '10px')
                .style('font', '10px Verdana, Geneva, sans-serif')
                .style('max-width', '100%')
                .attr('text-anchor', 'middle');
            this.removeUnneededNodes(svg);
            // a leaf of the "pack tree" corresponds to a bubble
            const leaf = svg.selectAll('g').data(root().leaves(), (d) => d.data.entity.id);
            leaf
                .transition(t) // update transition on <g>
                .attr('fill-opacity', 1)
                .attr('transform', (d) => `translate(${d.x + 1},${d.y + 1})`);
            // .attr('font-size', (d) => {
            //   let size = d.r / 5.5;
            //   size *= 1;
            //   size += 1;
            //   return `${Math.round(size)}px`;
            // });
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
                .attr('id', (d) => { d.leafUid = d.data.entity.id; })
                .attr('r', 0)
                .transition(t) // enter() transition on <circle>
                .attr('fill-opacity', 1)
                .attr('fill', (d) => colorMap(d.data.entity.typeOfEntity))
                .attr('r', (d) => d.r);
            // prevents the text from overflowing the bubble
            g.append('clipPath')
                .attr('id', (d) => { d.clipUid = `Clip-${d.data.entity.id}`; })
                .append('use')
                .attr('xlink:href', (d) => d.leafUid.href);
            /** NEW TEXT LOGIC */
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
                .attr('fill', 'white')
                .each((d) => {
                // Capitalize the first letter of the label
                d.data.entity.label = d.data.entity
                    .label.charAt(0).toUpperCase()
                    + d.data.entity.label.slice(1);
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
                .filter((d) => (d.r / 4 > 2.5))
                .selectAll('tspan')
                .data((d) => d._meta.lines)
                .enter()
                .append('tspan')
                .attr('x', 0)
                .attr('y', (d, i, n) => (i - n.length / 2 + 0.8) * defaultLineHeight)
                .attr('class', (d, i, n) => (
            // if it's the last label and a valid number, mark as counter
            i === n.length - 1 && this.isValidNumber(d.text) ? 'label-counter' : 'label-text'))
                .text((d) => d.text)
                .attr('fill-opacity', 0)
                .transition(t) // enter() transition on <tspan>
                .attr('fill-opacity', 1);
            // custom style for the counter
            g.selectAll('tspan.label-counter')
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
        const nodes = svg.selectAll('g')
            .data(this.data);
        // remove excess nodes
        nodes.exit().remove();
    }
}
BubbleChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BubbleChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BubbleChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: BubbleChartComponent, selector: "n7-bubble-chart", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-bubble-chart {{ data.classes || '' }}\">\n    <svg #bubbleChart id=\"{{data.containerId}}\"></svg>\n</div>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BubbleChartComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-bubble-chart', template: "<div *ngIf=\"data\" class=\"n7-bubble-chart {{ data.classes || '' }}\">\n    <svg #bubbleChart id=\"{{data.containerId}}\"></svg>\n</div>" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZHYtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2J1YmJsZS1jaGFydC9idWJibGUtY2hhcnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnViYmxlLWNoYXJ0L2J1YmJsZS1jaGFydC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixpQkFBaUI7QUFDakIsNkJBQTZCO0FBRTdCOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUF1QixNQUFNLGVBQWUsQ0FBQzs7O0FBMEh0RSxNQUFNLE9BQU8sb0JBQW9CO0lBSmpDO1FBV1UsWUFBTyxHQUFHLEtBQUssQ0FBQztRQTJCeEI7OztXQUdHO1FBQ0gsaUJBQVksR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3RCLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xFLHVEQUF1RDtZQUN2RCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtnQkFDdEYsT0FBTyxDQUFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2xHO1lBQ0QsNkJBQTZCO1lBQzdCLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJ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LENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQWtCRCxtQkFBbUIsQ0FBQyxHQUFHO1FBQ3JCLG1DQUFtQztRQUNuQyxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQzthQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLHNCQUFzQjtRQUN0QixLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7aUhBeERVLG9CQUFvQjtxR0FBcEIsb0JBQW9CLCtGQ2pKakMsMklBRU07MkZEK0lPLG9CQUFvQjtrQkFKaEMsU0FBUzsrQkFDRSxpQkFBaUI7OEJBSWxCLElBQUk7c0JBQVosS0FBSztnQkFFRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQlVCQkxFQ0hBUlQudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogVGhlIGJ1YmJsZSBjaGFydCBpcyBkcmF3biB1c2luZyBkM2pzLCBhIGxpYnJhcnkgdG8gY3JlYXRlIGFuZCB1cGRhdGUgYW55dGhpbmcgaW4gc3ZnLlxuICpcbiAqIExFR0VORDpcbiAqIC0gc3ZnIC0+IHRoZSBjYW52YXMvPHN2Zz4gZWxlbWVudCB3aGVyZSBldmVyeXRoaW5nIHdpbGwgYmUgZHJhd24gb24gKGFwcGVuZGVkKS5cbiAqIC0gZyAtPiA8Zz4gaXMgYSBncm91cCBvZiBzdmcgZWxlbWVudHMuXG4gKiAtIGxlYWYgLT4gdGhpcyBpcyB0aGUgc3ZnIGNpcmNsZSwgdGhlIGJ1YmJsZS5cbiAqIC0gdGV4dCAtPiB0aGlzIGlzIGFsbCB0aGUgdGV4dCBpbnNpZGUgdGhlIGNpcmNsZS5cbiAqIC0gdHNwYW4gLT4gdGhpcyBpcyBqdXN0IG9uZSBsaW5lIG9mIHRleHQuXG4gKlxuICogV2hhdCBhcmUgXCJqb2luLCBlbnRlciwgdXBkYXRlLCBleGl0P1wiXG4gKiBodHRwczovL29ic2VydmFibGVocS5jb20vQGQzL2xlYXJuLWQzLWpvaW5zP2NvbGxlY3Rpb249QGQzL2xlYXJuLWQzXG4gKiBodHRwczovL29ic2VydmFibGVocS5jb20vQHRoZXR5bGVyd29sZi9kYXktMTgtam9pbi1lbnRlci11cGRhdGUtZXhpdFxuICpcbiAqIEVhY2ggbGluZSBjYW4gaGF2ZSBhIGRpZmZlcmVudCB3aWR0aCwgYnV0IGFsbCBvZiB0aGUgdGV4dCBpbnNpZGUgYSBjaXJjbGVcbiAqIG5lZWRzIHRvIGJlIHNjYWxlZCBieSBhIGNvbnN0YW50IGZhY3Rvci5cbiAqIGh0dHBzOi8vb2JzZXJ2YWJsZWhxLmNvbS9AbWJvc3RvY2svZml0LXRleHQtdG8tY2lyY2xlXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgRDNDaGFydCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGVudGl0eSAocmVxdWlyZWQpXG4gKiAtIGlkIChyZXF1aXJlZClcbiAqIC0gbGFiZWwgKG9wdGlvbmFsKVxuICogLSB0eXBlT2ZFbnRpdHkgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNvdW50IChyZXF1aXJlZClcbiovXG5leHBvcnQgaW50ZXJmYWNlIEJ1YmJsZUNoYXJ0RGF0YUl0ZW0ge1xuICBlbnRpdHk6IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGxhYmVsPzogc3RyaW5nO1xuICAgIHR5cGVPZkVudGl0eT86IHN0cmluZztcbiAgfTtcbiAgY291bnQ6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGEgQ2lyY2xlJ3Mgbm9kZSBkYXRhXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2lyY2xlTm9kZSB7XG4gIGNsaXBVaWQ6IHN0cmluZztcbiAgZGF0YTogQnViYmxlQ2hhcnREYXRhSXRlbTtcbiAgZGVwdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGxlYWZVaWQ6IHN0cmluZztcbiAgcGFyZW50OiBOb2RlO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgcjogbnVtYmVyO1xuICB2YWx1ZTogbnVtYmVyO1xuICAvKiogRHluYW1pYyBkYXRhIGZvciBpbnRlcm5hbCBsb2dpYyAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEJ1YmJsZUNoYXJ0Q29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgY29udGFpbmVySWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNvbnRhaW5lcldpZHRoIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJIZWlnaHQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGJ1YmJsZXNEYXRhIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBpc0ZvcmNlU2ltdWxhdGlvbkVuYWJsZWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHJlc2V0IChvcHRpb25hbClcbiovXG5leHBvcnQgaW50ZXJmYWNlIEJ1YmJsZUNoYXJ0RGF0YSB7XG4gIC8qKlxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGJ1YmJsZS1jaGFydFxuICAgKi9cbiAgY29udGFpbmVySWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIHRvdGFsIHdpZHRoIGZvciB0aGUgYnViYmxlLWNoYXJ0XG4gICAqL1xuICB3aWR0aDogbnVtYmVyO1xuICAvKipcbiAgICogdG90YWwgaGVpZ2h0IGZvciB0aGUgYnViYmxlLWNoYXJ0XG4gICAqL1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIGRhdGEgYWJvdXQgdGhlIGJ1YmJsZXNcbiAgICovXG4gIGRhdGE6IEJ1YmJsZUNoYXJ0RGF0YUl0ZW1bXTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgY3NzIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBsaXN0IG9mIElEJ3Mgb2Ygc2VsZWN0ZWQgaXRlbXNcbiAgICogKHNlbGVjdGVkIGl0ZW1zIHdpbGwgcmVuZGVyIHdpdGggYSAnWCcgaWNvbilcbiAgICovXG4gIHNlbGVjdGVkPzogc3RyaW5nW107XG4gIC8qKlxuICAgKiBTcGVjaWZ5IGEgbGlzdCBvZiB0eXBlT2ZFbnRpdHkgdHlwZXMgKGRvbWFpbiksXG4gICAqIGFuZCBhIGxpc3Qgb2YgY29sb3JzIChyYW5nZSksIHdoaWNoIHdpbGwgYmUgbWFwcGVkIHRvZ2V0aGVyLlxuICAgKi9cbiAgY29sb3JNYXRjaD86IHtcbiAgICBkb21haW46IHN0cmluZ1tdO1xuICAgIHJhbmdlOiBzdHJpbmdbXTtcbiAgfTtcbiAgLyoqXG4gICAqIERlZmluZSBhIG1heCBhbmQgbWluIHNpemUgZm9yIHRoZSBidWJibGVzXG4gICAqL1xuICBzaXplUmFuZ2U6IFtudW1iZXIsIG51bWJlcl07XG4gIC8qKlxuICAgKiBJZiBkZWZpbmVkLCB0cmFuc2l0aW9uIHdpbGwgYmUgYWN0aXZhdGVkXG4gICAqIGFuZCB0aGUgdmFsdWUgd2lsbCBiZSB1c2VkIGFzIGR1cmF0aW9uXG4gICAqL1xuICB0cmFuc2l0aW9uPzogbnVtYmVyO1xuICAvKipcbiAgICogSWYgc2V0IHRvIGZhbHNlLCBzdG9wcyB0aGUgc2h1ZmZsaW5nIG9mIHRoZSBkYXRhXG4gICAqIGJlZm9yZSByZW5kZXJpbmcuXG4gICAqL1xuICBzaHVmZmxlPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGZvbnQtZmFtaWx5IGFuZCB0aGUgZm9udC13ZWlnaHQgZm9yIGVhY2ggdGV4dCBncm91cFxuICAgKi9cbiAgZm9udFJlbmRlcmluZz86IHtcbiAgICBsYWJlbD86IHtcbiAgICAgIGZhbWlseT86IHN0cmluZztcbiAgICAgIHdlaWdodD86IHN0cmluZztcbiAgICB9O1xuICAgIGNvdW50ZXI/OiB7XG4gICAgICBmYW1pbHk/OiBzdHJpbmc7XG4gICAgICB3ZWlnaHQ/OiBzdHJpbmc7XG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogZXhwb3NlIHRoZSBkcmF3IGZ1bmN0aW9uIG91dHNpZGUgb2YgbjctZnJvbnRlbmQvY29tcG9uZW50cyBsaWJyYXJ5XG4gICAqIHRoaXMgaXMgbmVlZGVkIHRvIHJlZHJhdyBidWJibGUtY2hhcnQtY29tcG9uZW50IG9uIGNvbW1hbmRcbiAgICovXG4gIHNldERyYXc/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWJ1YmJsZS1jaGFydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9idWJibGUtY2hhcnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQnViYmxlQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcbiAgQElucHV0KCkgZGF0YTogQnViYmxlQ2hhcnREYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBwcml2YXRlIGQzO1xuXG4gIHByaXZhdGUgX2xvYWRlZCA9IGZhbHNlO1xuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICAvKlxuICAgICBXYWl0cyBmb3IgdGhlIGRvbSB0byBiZSBsb2FkZWQsIHRoZW4gZmlyZXMgdGhlIGRyYXcgZnVuY3Rpb25cbiAgICAgdGhhdCByZW5kZXJzIHRoZSBjaGFydC5cbiAgICAqL1xuICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgIGlmICh0aGlzLl9sb2FkZWQpIHJldHVybjtcbiAgICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaW1wb3J0KCdkMycpLnRoZW4oKG1vZHVsZSkgPT4ge1xuICAgICAgICAgIHRoaXMuZDMgPSBtb2R1bGU7XG4gICAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuc2V0RHJhdykge1xuICAgICAgICAgICAgdGhpcy5kYXRhLnNldERyYXcodGhpcy5kcmF3KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb25DbGljayhwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cblxuICAvKipcbiAgICogUmVmZXJlbmNlIGZvciBtdWNoIG9mIHRoZSBuZXcgdGV4dCBzY2FsaW5nIGNvZGUgY29tZXMgZnJvbTpcbiAgICogaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0BtYm9zdG9jay9maXQtdGV4dC10by1jaXJjbGVcbiAgICovXG4gIG1lYXN1cmVXaWR0aCA9ICh0ZXh0KSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLmdldENvbnRleHQoJzJkJyk7XG4gICAgLy8gbWVhc3VyZSB0ZXh0IHdpdGggdGhlIGNvcnJlY3QgZm9udCBmYW1pbHkgYW5kIHdlaWdodFxuICAgIGlmICh0aGlzLmRhdGE/LmZvbnRSZW5kZXJpbmc/LmxhYmVsPy5mYW1pbHkgJiYgdGhpcy5kYXRhPy5mb250UmVuZGVyaW5nPy5sYWJlbD8ud2VpZ2h0KSB7XG4gICAgICBjb250ZXh0LmZvbnQgPSBgJHt0aGlzLmRhdGEuZm9udFJlbmRlcmluZy5sYWJlbC53ZWlnaHR9ICR7dGhpcy5kYXRhLmZvbnRSZW5kZXJpbmcubGFiZWwuZmFtaWx5fWA7XG4gICAgfVxuICAgIC8vIGNhbGN1bGF0ZWQgd2lkdGggKyBwYWRkaW5nXG4gICAgcmV0dXJuIGNvbnRleHQubWVhc3VyZVRleHQodGV4dCkud2lkdGggKiAxLjE1O1xuICB9O1xuXG4gIGlzVmFsaWROdW1iZXIgPSAodmFsdWUpID0+ICFOdW1iZXIuaXNOYU4oTnVtYmVyLnBhcnNlRmxvYXQodmFsdWUpKTtcblxuICByZW1vdmVVbm5lZWRlZE5vZGVzKHN2Zykge1xuICAgIC8vIHNlbGVjdCBhbGwgbm9kZXMgYW5kIHJlam9pbiBkYXRhXG4gICAgY29uc3Qgbm9kZXMgPSBzdmcuc2VsZWN0QWxsKCdnJylcbiAgICAgIC5kYXRhKHRoaXMuZGF0YSk7XG4gICAgLy8gcmVtb3ZlIGV4Y2VzcyBub2Rlc1xuICAgIG5vZGVzLmV4aXQoKS5yZW1vdmUoKTtcbiAgfVxuXG4gIGRyYXcgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBkMyB9ID0gdGhpcztcbiAgICBjb25zdCB7XG4gICAgICBjb250YWluZXJJZCwgZGF0YSwgaGVpZ2h0LFxuICAgICAgd2lkdGgsIHNlbGVjdGVkLCB0cmFuc2l0aW9uLFxuICAgICAgY29sb3JNYXRjaCwgc2h1ZmZsZSxcbiAgICAgIGZvbnRSZW5kZXJpbmdcbiAgICB9ID0gdGhpcy5kYXRhO1xuICAgIC8vIFNWRyBzaGFwZSBwYXRoIGZvciB0aGUgY2xvc2UgaWNvblxuICAgIGNvbnN0IGNsb3NlSWNvblBhdGggPSAnTSAtNTAsNDAgTC00MCw1MCAwLDEwIDQwLDUwIDUwLDQwIDEwLDAgNTAsLTQwIDQwLC01MCAwLC0xMCAtNDAsLTUwIC01MCwtNDAgLTEwLDAgLTUwLDQwJztcbiAgICBjb25zdCBkZWZhdWx0TGluZUhlaWdodCA9IDEzO1xuICAgIC8vIHdvcmQgY291bnQgYmVmb3JlIHRydW5jYXRpbmcgd2l0aCBlbGxpcHNpc1xuICAgIGNvbnN0IGVsbGlwc2lzVGhyZXNob2xkID0gNDtcbiAgICBjb25zdCB0ZXh0U2NhbGluZ0ZhY3RvciA9IDE7XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIC8vIENoZWNrIGlmIGl0IGlzIHBvc3NpYmxlIHRvIGRyYXcgd2l0aCB0aGUgY3VycmVudCBkYXRhc2V0XG4gICAgICBjb25zb2xlLndhcm4oJyhuNy1idWJibGUtY2hhcnQpIFRoZSBkYXRhIG9iamVjdCBpcyBub3QgaW4gdGhlIGV4cGVjdGVkIGZvcm1hdCEnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBhbmltYXRpb24gc2V0dGluZ3MgdXNlZCB0byByZW5kZXIgY2hhbmdlcyBpbiB0aGUgY2hhcnRcbiAgICBsZXQgdCA9IGQzXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oMCk7XG4gICAgaWYgKHR5cGVvZiB0cmFuc2l0aW9uID09PSAnbnVtYmVyJykge1xuICAgICAgdCA9IGQzXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKHRyYW5zaXRpb24pXG4gICAgICAgIC5lYXNlKGQzLmVhc2VDdWJpY0luT3V0KTtcbiAgICB9XG5cbiAgICAvLyBjYWxjdWxhdGUgdGhlIGJ1YmJsZSBiYWNrZ3JvdW5kIGNvbG9yIGZyb20gaXQncyB0eXBlIChkb21haW4pXG4gICAgY29uc3QgY29sb3JNYXAgPSBkMy5zY2FsZU9yZGluYWwoKVxuICAgICAgLmRvbWFpbihjb2xvck1hdGNoID8gY29sb3JNYXRjaC5kb21haW4gOiBbJ3BlcnNvbmEnLCAnbHVvZ28nLCAnb3JnYW5penphemlvbmUnLCAnY29zYSBub3Rldm9sZSddKVxuICAgICAgLnJhbmdlKGNvbG9yTWF0Y2ggPyBjb2xvck1hdGNoLnJhbmdlIDogZDMuc2NoZW1lVGFibGVhdTEwKTtcblxuICAgIC8vIGNhbGN1bGF0ZSBob3cgYmlnIHRoZSByYWRpdXMgb2YgdGhlIGJ1YmJsZSBzaG91bGQgYmVcbiAgICBjb25zdCBzaXplU2NhbGUgPSBkMyAvLyBtYXAgZW50aXR5IGNvdW50IHRvIGJ1YmJsZSBzaXplXG4gICAgICAuc2NhbGVMaW5lYXIoKVxuICAgICAgLmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIChkKSA9PiArZC5jb3VudCldKVxuICAgICAgLnJhbmdlKFszLCBkMy5tYXgoZGF0YSwgKGQpID0+ICtkLmNvdW50KV0pO1xuXG4gICAgLy8gcGFjayBpcyBhIGQzanMgbWV0aG9kIHdoaWNoIGNhbGN1bGF0ZXMgdGhlIGJ1YmJsZSdzIHggJiB5IHBvc2l0aW9uIGluIHRoZSBjaGFydFxuICAgIC8vIGNpcmNsZSBwYWNraW5nIHJlZmVyZW5jZTogaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0BkMy9wYWNrXG4gICAgY29uc3QgcGFjayA9IChjaGlsZHJlbikgPT4gZDNcbiAgICAgIC5wYWNrKClcbiAgICAgIC5zaXplKFt3aWR0aCAtIDIsIGhlaWdodCAtIDJdKVxuICAgICAgLnBhZGRpbmcoMS41KShcbiAgICAgICAgZDMuaGllcmFyY2h5KHsgY2hpbGRyZW4gfSkuc3VtKChkKSA9PiBzaXplU2NhbGUoZC5jb3VudCkpXG4gICAgICApO1xuXG4gICAgLy8gdGhlIGJ1YmJsZXMgYXJlIHBhY2tlZCBpbiBhIHNpbmdsZSBsZXZlbCB0cmVlLCB0aGlzIGlzIHRoZSByb290XG4gICAgLy8gc2VlIGNpcmNsZSBwYWNraW5nIHJlZmVyZW5jZTogaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0BkMy9wYWNrXG4gICAgY29uc3Qgcm9vdCA9ICgpID0+IHsgLy8gaWYgc2h1ZmZsZSBpcyB1bmRlZmluZWQgb3IgdHJ1ZSwgc2h1ZmZsZSB0aGUgZGF0YVxuICAgICAgaWYgKHR5cGVvZiBzaHVmZmxlID09PSAndW5kZWZpbmVkJyB8fCBzaHVmZmxlKSB7XG4gICAgICAgIGNvbnN0IHNodWZmRGF0YSA9IGRhdGEuc2xpY2UoKTsgLy8gZG8gbm90IG1vZGlmeSB0aGUgc291cmNlIGRhdGEhXG4gICAgICAgIHJldHVybiBwYWNrKGQzLnNodWZmbGUoc2h1ZmZEYXRhKSk7XG4gICAgICB9IC8vIGlmIHNodWZmbGUgaXMgc2V0IHRvIGZhbHNlLCBza2lwIHRoZSBkYXRhIHNodWZmbGVcbiAgICAgIHJldHVybiBwYWNrKGRhdGEpO1xuICAgIH07XG5cbiAgICAvLyBzdmcgY2FudmFzIHdoZXJlIGFsbCB0aGUgYnViYmxlcyBhcmUgZHJhd25cbiAgICBjb25zdCBzdmcgPSBkM1xuICAgICAgLnNlbGVjdChgIyR7Y29udGFpbmVySWR9YClcbiAgICAgIC5hdHRyKCd2aWV3Qm94JywgWzAsIDAsIHdpZHRoLCBoZWlnaHRdKVxuICAgICAgLy8gLmF0dHIoJ2ZvbnQtZmFtaWx5JywgJ1ZlcmRhbmEsIEdlbmV2YSwgc2Fucy1zZXJpZicpXG4gICAgICAvLyAuYXR0cignZm9udC1zaXplJywgJzEwcHgnKVxuICAgICAgLnN0eWxlKCdmb250JywgJzEwcHggVmVyZGFuYSwgR2VuZXZhLCBzYW5zLXNlcmlmJylcbiAgICAgIC5zdHlsZSgnbWF4LXdpZHRoJywgJzEwMCUnKVxuICAgICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpO1xuXG4gICAgdGhpcy5yZW1vdmVVbm5lZWRlZE5vZGVzKHN2Zyk7XG5cbiAgICAvLyBhIGxlYWYgb2YgdGhlIFwicGFjayB0cmVlXCIgY29ycmVzcG9uZHMgdG8gYSBidWJibGVcbiAgICBjb25zdCBsZWFmID0gc3ZnLnNlbGVjdEFsbCgnZycpLmRhdGEocm9vdCgpLmxlYXZlcygpLCAoZCkgPT4gZC5kYXRhLmVudGl0eS5pZCk7XG4gICAgbGVhZlxuICAgICAgLnRyYW5zaXRpb24odCkgLy8gdXBkYXRlIHRyYW5zaXRpb24gb24gPGc+XG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMSlcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCkgPT4gYHRyYW5zbGF0ZSgke2QueCArIDF9LCR7ZC55ICsgMX0pYCk7XG4gICAgLy8gLmF0dHIoJ2ZvbnQtc2l6ZScsIChkKSA9PiB7XG4gICAgLy8gICBsZXQgc2l6ZSA9IGQuciAvIDUuNTtcbiAgICAvLyAgIHNpemUgKj0gMTtcbiAgICAvLyAgIHNpemUgKz0gMTtcbiAgICAvLyAgIHJldHVybiBgJHtNYXRoLnJvdW5kKHNpemUpfXB4YDtcbiAgICAvLyB9KTtcblxuICAgIC8vIGNsZWFyIGFsbCBleGlzdGluZyBjbG9zZSBpY29ucyBmcm9tIHRoZSBidWJibGVzXG4gICAgbGVhZi5zZWxlY3RBbGwoJy5jbG9zZS1pY29uJykucmVtb3ZlKCk7XG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICBsZWFmIC8vIHJlbmRlciBvbmx5IHRoZSBuZWNlc3NhcnkgY2xvc2UgaWNvbnNcbiAgICAgICAgLmZpbHRlcigoZCkgPT4gc2VsZWN0ZWQuaW5jbHVkZXMoZC5kYXRhLmVudGl0eS5pZCkpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnY2xvc2UtaWNvbicpXG4gICAgICAgIC5hdHRyKCdkJywgY2xvc2VJY29uUGF0aClcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnI2ZmZicpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCkgPT4ge1xuICAgICAgICAgIGlmIChkLnIgLyA0ID4gMykge1xuICAgICAgICAgICAgcmV0dXJuIGBzY2FsZSguMDgpIHRyYW5zbGF0ZSgwLCAke2QuciAqIDEwIC0gODB9KWA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAnc2NhbGUoLjA4KSc7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxlYWZcbiAgICAgIC5zZWxlY3QoJ2NpcmNsZScpXG4gICAgICAudHJhbnNpdGlvbih0KSAvLyB1cGRhdGUgdHJhbnNpdGlvbiBvbiA8Y2lyY2xlPlxuICAgICAgLmF0dHIoJ2ZpbGwtb3BhY2l0eScsIDEpXG4gICAgICAuYXR0cigncicsIChkKSA9PiBkLnIpO1xuXG4gICAgLy8gZyByZXByZXNlbnRzIGEgXCJncm91cCBvZiBzdmcgaXRlbXNcIlxuICAgIC8vIGl0ZW1zIGdyb3VwZWQgdG9nZXRoZXIgY2FuIGJlIGFkZGVkIC8gcmVtb3ZlZCAvIHNjYWxlZCB0b2dldGhlclxuICAgIGNvbnN0IGcgPSBsZWFmLmVudGVyKCkuYXBwZW5kKCdnJyk7XG5cbiAgICBnLmF0dHIoJ3RyYW5zZm9ybScsIChkKSA9PiBgdHJhbnNsYXRlKCR7ZC54ICsgMX0sJHtkLnkgKyAxfSlgKVxuICAgICAgLmF0dHIoJ2N1cnNvcicsICdwb2ludGVyJylcbiAgICAgIC5vbignY2xpY2snLCAoZXZlbnQsIGQpID0+IHtcbiAgICAgICAgdGhpcy5vbkNsaWNrKGQuZGF0YS5lbnRpdHkuaWQpO1xuICAgICAgfSlcbiAgICAgIC5hdHRyKCdpZCcsIChkKSA9PiBgZ18ke2QuZGF0YS5lbnRpdHkuaWR9YClcbiAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAuYXR0cignaWQnLCAoZCkgPT4geyBkLmxlYWZVaWQgPSBkLmRhdGEuZW50aXR5LmlkOyB9KVxuICAgICAgLmF0dHIoJ3InLCAwKVxuICAgICAgLnRyYW5zaXRpb24odCkgLy8gZW50ZXIoKSB0cmFuc2l0aW9uIG9uIDxjaXJjbGU+XG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMSlcbiAgICAgIC5hdHRyKCdmaWxsJywgKGQpID0+IGNvbG9yTWFwKGQuZGF0YS5lbnRpdHkudHlwZU9mRW50aXR5KSlcbiAgICAgIC5hdHRyKCdyJywgKGQpID0+IGQucik7XG5cbiAgICAvLyBwcmV2ZW50cyB0aGUgdGV4dCBmcm9tIG92ZXJmbG93aW5nIHRoZSBidWJibGVcbiAgICBnLmFwcGVuZCgnY2xpcFBhdGgnKVxuICAgICAgLmF0dHIoJ2lkJywgKGQpID0+IHsgZC5jbGlwVWlkID0gYENsaXAtJHtkLmRhdGEuZW50aXR5LmlkfWA7IH0pXG4gICAgICAuYXBwZW5kKCd1c2UnKVxuICAgICAgLmF0dHIoJ3hsaW5rOmhyZWYnLCAoZCkgPT4gZC5sZWFmVWlkLmhyZWYpO1xuXG4gICAgLyoqIE5FVyBURVhUIExPR0lDICovXG4gICAgZy5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2ZvbnQtZmFtaWx5JywgKCkgPT4ge1xuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmxhYmVsICYmIGZvbnRSZW5kZXJpbmcubGFiZWwuZmFtaWx5KSB7XG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcubGFiZWwuZmFtaWx5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnaW5oZXJpdCc7XG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2ZvbnQtd2VpZ2h0JywgKCkgPT4ge1xuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcubGFiZWwgJiYgZm9udFJlbmRlcmluZy5sYWJlbC53ZWlnaHQpIHtcbiAgICAgICAgICByZXR1cm4gZm9udFJlbmRlcmluZy5sYWJlbC53ZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdpbmhlcml0JztcbiAgICAgIH0pXG4gICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXG4gICAgICAuZWFjaCgoZDogQ2lyY2xlTm9kZSkgPT4ge1xuICAgICAgICAvLyBDYXBpdGFsaXplIHRoZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIGxhYmVsXG4gICAgICAgIGQuZGF0YS5lbnRpdHkubGFiZWwgPSBkLmRhdGEuZW50aXR5XG4gICAgICAgICAgLmxhYmVsLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgKyBkLmRhdGEuZW50aXR5LmxhYmVsLnNsaWNlKDEpO1xuICAgICAgICAvLyAxLiBpbml0aWFsaXplIG1ldGEgb2JqZWN0XG4gICAgICAgIGlmICghZC5fbWV0YSB8fCB0eXBlb2YgZC5fbWV0YSAhPT0gJ29iamVjdCcpIGQuX21ldGEgPSB7fTtcbiAgICAgICAgLy8gMi4gdG9rZW5pemUgbGFiZWwgJiBjb3VudCBpbnRvIHdvcmRzXG4gICAgICAgIGNvbnN0IHdvcmRzID0gZC5kYXRhLmVudGl0eS5sYWJlbC5zcGxpdCgvW1xcc10rL2cpOyAvLyBUbyBoeXBoZW5hdGU6IC9cXHMrfCg/PD0tKS9cbiAgICAgICAgLy8gVHJ1bmNhdGUgd2l0aCBlbGxpcHNpcyBpZiB0aGUgbGFiZWwgaXMgbG9uZ2VyIHRoYW4gdGhlIHRocmVzaG9sZFxuICAgICAgICBpZiAod29yZHMubGVuZ3RoID4gZWxsaXBzaXNUaHJlc2hvbGQpIHtcbiAgICAgICAgICB3b3Jkcy5zcGxpY2UoZWxsaXBzaXNUaHJlc2hvbGQsIHdvcmRzLmxlbmd0aCAtIGVsbGlwc2lzVGhyZXNob2xkKTtcbiAgICAgICAgICB3b3Jkc1tlbGxpcHNpc1RocmVzaG9sZCAtIDFdICs9ICfigKYnO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFkZCBjb3VudGVyXG4gICAgICAgIGlmIChkLnIgLyA0ID4gMi41KSB7XG4gICAgICAgICAgLy8gc2hvdyB0ZXh0IHRocmVzaG9sZFxuICAgICAgICAgIGlmICghd29yZHNbd29yZHMubGVuZ3RoIC0gMV0pIHdvcmRzLnBvcCgpO1xuICAgICAgICAgIGlmICghd29yZHNbMF0pIHdvcmRzLnNoaWZ0KCk7XG4gICAgICAgIH0gaWYgKGQuciAvIDQgPiA0LjUpIHtcbiAgICAgICAgICAvLyBzaG93IG51bWJlciB0aHJlc2hvbGRcbiAgICAgICAgICB3b3Jkcy5wdXNoKGAke2QuZGF0YS5jb3VudH1gKTtcbiAgICAgICAgfVxuICAgICAgICBkLl9tZXRhLndvcmRzID0gd29yZHM7XG4gICAgICAgIGQuX21ldGEubGluZUhlaWdodCA9IGRlZmF1bHRMaW5lSGVpZ2h0O1xuICAgICAgICBjb25zdCB0YXJnZXRXaWR0aCA9IE1hdGguc3FydChcbiAgICAgICAgICB0aGlzLm1lYXN1cmVXaWR0aChkLl9tZXRhLndvcmRzLmpvaW4oJyAnKS50cmltKCkpICogZGVmYXVsdExpbmVIZWlnaHRcbiAgICAgICAgKTtcbiAgICAgICAgLy8gMy4gYnVpbGQgbGluZXMgb2YgdGV4dFxuICAgICAgICBkLl9tZXRhLmxpbmVzID0gW107XG4gICAgICAgIGxldCBsaW5lO1xuICAgICAgICBsZXQgbGluZVdpZHRoMCA9IEluZmluaXR5O1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbiA9IGQuX21ldGEud29yZHMubGVuZ3RoOyBpIDwgbjsgaSArPSAxKSB7XG4gICAgICAgICAgY29uc3QgbGluZVRleHQxID0gKGxpbmUgPyBgJHtsaW5lLnRleHR9IGAgOiAnJykgKyB3b3Jkc1tpXTtcbiAgICAgICAgICBjb25zdCBsaW5lV2lkdGgxID0gdGhpcy5tZWFzdXJlV2lkdGgobGluZVRleHQxKTtcbiAgICAgICAgICBpZiAoKGxpbmVXaWR0aDAgKyBsaW5lV2lkdGgxKSAvIDIgPCB0YXJnZXRXaWR0aCAmJiBpICE9PSBuIC0gMSkge1xuICAgICAgICAgICAgbGluZS53aWR0aCA9IGxpbmVXaWR0aDA7XG4gICAgICAgICAgICBsaW5lV2lkdGgwID0gbGluZVdpZHRoMTtcbiAgICAgICAgICAgIGxpbmUudGV4dCA9IGxpbmVUZXh0MTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgbGluZSBpcyB0b28gbG9uZyBvciB0aGlzIGlzIHRoZSBsYXN0IGxpbmUgKGNvdW50ZXIpLCBwdXNoIHRvIG5leHQgbGluZVxuICAgICAgICAgICAgbGluZVdpZHRoMCA9IHRoaXMubWVhc3VyZVdpZHRoKHdvcmRzW2ldKTtcbiAgICAgICAgICAgIGxpbmUgPSB7IHdpZHRoOiBsaW5lV2lkdGgwLCB0ZXh0OiB3b3Jkc1tpXSB9O1xuICAgICAgICAgICAgZC5fbWV0YS5saW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyA0LiBjb21wdXRlIHRoZSBib3VuZGluZyByYWRpdXNcbiAgICAgICAgbGV0IHJhZGl1cyA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBuID0gZC5fbWV0YS5saW5lcy5sZW5ndGg7IGkgPCBuOyBpICs9IDEpIHtcbiAgICAgICAgICBjb25zdCBkeSA9IChNYXRoLmFicyhpIC0gbiAvIDIpICsgMC44KSAqIGQuX21ldGEubGluZUhlaWdodDtcbiAgICAgICAgICBjb25zdCBkeCA9IGQuX21ldGEubGluZXNbaV0ud2lkdGggLyAyO1xuICAgICAgICAgIHJhZGl1cyA9IE1hdGgubWF4KHJhZGl1cywgTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KSk7XG4gICAgICAgIH1cbiAgICAgICAgZC5fbWV0YS50ZXh0UmFkaXVzID0gcmFkaXVzO1xuICAgICAgICByZXR1cm4gZDtcbiAgICAgIH0pXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQpID0+IHtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSAoKGQuciAqIDAuOCkgLyBkLl9tZXRhLnRleHRSYWRpdXMpICogdGV4dFNjYWxpbmdGYWN0b3I7XG4gICAgICAgIHJldHVybiBgc2NhbGUoJHtzY2FsZX0pYDtcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChkKSA9PiAoZC5yIC8gNCA+IDIuNSkpXG4gICAgICAuc2VsZWN0QWxsKCd0c3BhbicpXG4gICAgICAuZGF0YSgoZCkgPT4gZC5fbWV0YS5saW5lcylcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCd0c3BhbicpXG4gICAgICAuYXR0cigneCcsIDApXG4gICAgICAuYXR0cigneScsIChkLCBpLCBuKSA9PiAoaSAtIG4ubGVuZ3RoIC8gMiArIDAuOCkgKiBkZWZhdWx0TGluZUhlaWdodClcbiAgICAgIC5hdHRyKCdjbGFzcycsIChkLCBpLCBuKSA9PiAoXG4gICAgICAgIC8vIGlmIGl0J3MgdGhlIGxhc3QgbGFiZWwgYW5kIGEgdmFsaWQgbnVtYmVyLCBtYXJrIGFzIGNvdW50ZXJcbiAgICAgICAgaSA9PT0gbi5sZW5ndGggLSAxICYmIHRoaXMuaXNWYWxpZE51bWJlcihkLnRleHQpID8gJ2xhYmVsLWNvdW50ZXInIDogJ2xhYmVsLXRleHQnXG4gICAgICApKVxuICAgICAgLnRleHQoKGQpID0+IGQudGV4dClcbiAgICAgIC5hdHRyKCdmaWxsLW9wYWNpdHknLCAwKVxuICAgICAgLnRyYW5zaXRpb24odCkgLy8gZW50ZXIoKSB0cmFuc2l0aW9uIG9uIDx0c3Bhbj5cbiAgICAgIC5hdHRyKCdmaWxsLW9wYWNpdHknLCAxKTtcblxuICAgIC8vIGN1c3RvbSBzdHlsZSBmb3IgdGhlIGNvdW50ZXJcbiAgICBnLnNlbGVjdEFsbCgndHNwYW4ubGFiZWwtY291bnRlcicpXG4gICAgICAuYXR0cignZm9udC1mYW1pbHknLCAoKSA9PiB7XG4gICAgICAgIGlmIChmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcuY291bnRlciAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIuZmFtaWx5KSB7XG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcuY291bnRlci5mYW1pbHk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdpbmhlcml0JztcbiAgICAgIH0pXG4gICAgICAuYXR0cignZm9udC13ZWlnaHQnLCAoKSA9PiB7XG4gICAgICAgIGlmIChmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcuY291bnRlciAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIud2VpZ2h0KSB7XG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcuY291bnRlci53ZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdpbmhlcml0JztcbiAgICAgIH0pO1xuXG4gICAgbGVhZlxuICAgICAgLmV4aXQoKSAvLyBFWElUIENZQ0xFXG4gICAgICAucmVtb3ZlKCk7XG5cbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIGcuZmlsdGVyKChkKSA9PiBzZWxlY3RlZC5pbmNsdWRlcyhkLmxlYWZVaWQpKSAvLyBhcHBlbmQgJ1gnIGljb24gLy8gb25seSBmb3Igc2VsZWN0ZWQgYnViYmxlc1xuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmF0dHIoJ2QnLCBjbG9zZUljb25QYXRoKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnY2xvc2UtaWNvbicpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgKGQpID0+IHtcbiAgICAgICAgICBpZiAoZC5yIC8gNCA+IDIuNSkge1xuICAgICAgICAgICAgcmV0dXJuICcjZmZmJztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICd0cmFuc3BhcmVudCc7XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCkgPT4ge1xuICAgICAgICAgIGlmIChkLnIgLyA0ID4gMykge1xuICAgICAgICAgICAgcmV0dXJuIGBzY2FsZSguMDgpIHRyYW5zbGF0ZSgwLCAke2QuciAqIDEwIC0gODB9KWA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAnc2NhbGUoLjA4KSc7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGNvbW11bmljYXRlIGVuZCBvZiBkcmF3XG4gICAgdGhpcy5lbWl0KCdkM2VuZCcsIGRhdGEpO1xuICB9O1xufVxuIiwiPGRpdiAqbmdJZj1cImRhdGFcIiBjbGFzcz1cIm43LWJ1YmJsZS1jaGFydCB7eyBkYXRhLmNsYXNzZXMgfHwgJycgfX1cIj5cbiAgICA8c3ZnICNidWJibGVDaGFydCBpZD1cInt7ZGF0YS5jb250YWluZXJJZH19XCI+PC9zdmc+XG48L2Rpdj4iXX0=