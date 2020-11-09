import { __decorate, __metadata } from "tslib";
//---------------------------
// BUBBLECHART.ts
//---------------------------
import { Component, Input } from '@angular/core';
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
export { BubbleChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQvYnViYmxlLWNoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2QkFBNkI7QUFDN0IsaUJBQWlCO0FBQ2pCLDZCQUE2QjtBQUM3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUF3R3RFLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBQWpDO1FBT1UsWUFBTyxHQUFHLEtBQUssQ0FBQztRQTJCeEIsU0FBSSxHQUFHLEdBQUcsRUFBRTtZQUNWLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDcEIsTUFBTSxFQUNKLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUN6QixLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFDM0IsVUFBVSxFQUFFLE9BQU8sRUFDbkIsYUFBYSxFQUNkLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNkLE1BQU0sYUFBYSxHQUFHLHlGQUF5RixDQUFDO1lBRWhILElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN4QiwyREFBMkQ7Z0JBQzNELE9BQU8sQ0FBQyxJQUFJLENBQUMsa0VBQWtFLENBQUMsQ0FBQztnQkFDakYsT0FBTzthQUNSO1lBRUQsSUFBSSxDQUFDLEdBQUcsRUFBRTtpQkFDUCxVQUFVLEVBQUU7aUJBQ1osUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxPQUFPLFVBQVUsS0FBSyxRQUFRLEVBQUU7Z0JBQ2xDLENBQUMsR0FBRyxFQUFFO3FCQUNILFVBQVUsRUFBRTtxQkFDWixRQUFRLENBQUMsVUFBVSxDQUFDO3FCQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQzVC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QUcsRUFBRTtnQkFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDO29CQUNqQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ1osSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO3dCQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQzlCO2dCQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQWdURixDQUFBO0FBL1VVO0lBQVIsS0FBSyxFQUFFOztrREFBdUI7QUFFdEI7SUFBUixLQUFLLEVBQUU7O2tEQUFXO0FBSFIsb0JBQW9CO0lBSmhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IseUpBQWtDO0tBQ25DLENBQUM7R0FDVyxvQkFBb0IsQ0FnVmhDO1NBaFZZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEJVQkJMRUNIQVJULnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEJ1YmJsZUNoYXJ0Q29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGNvbnRhaW5lcklkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNvbnRhaW5lcldpZHRoIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNvbnRhaW5lckhlaWdodCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBidWJibGVzRGF0YSAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBpc0ZvcmNlU2ltdWxhdGlvbkVuYWJsZWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSByZXNldCAob3B0aW9uYWwpXHJcbiovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQnViYmxlQ2hhcnREYXRhIHtcclxuICAvKipcclxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGJ1YmJsZS1jaGFydFxyXG4gICAqL1xyXG4gIGNvbnRhaW5lcklkOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogdG90YWwgd2lkdGggZm9yIHRoZSBidWJibGUtY2hhcnRcclxuICAgKi9cclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIHRvdGFsIGhlaWdodCBmb3IgdGhlIGJ1YmJsZS1jaGFydFxyXG4gICAqL1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIGRhdGEgYWJvdXQgdGhlIGJ1YmJsZXNcclxuICAgKi9cclxuICBkYXRhOiBCdWJibGVDaGFydERhdGFJdGVtW107XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBjc3MgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogbGlzdCBvZiBJRCdzIG9mIHNlbGVjdGVkIGl0ZW1zXHJcbiAgICogKHNlbGVjdGVkIGl0ZW1zIHdpbGwgcmVuZGVyIHdpdGggYSAnWCcgaWNvbilcclxuICAgKi9cclxuICBzZWxlY3RlZD86IHN0cmluZ1tdO1xyXG4gIC8qKlxyXG4gICAqIFNwZWNpZnkgYSBsaXN0IG9mIHR5cGVPZkVudGl0eSB0eXBlcyAoZG9tYWluKSxcclxuICAgKiBhbmQgYSBsaXN0IG9mIGNvbG9ycyAocmFuZ2UpLCB3aGljaCB3aWxsIGJlIG1hcHBlZCB0b2dldGhlci5cclxuICAgKi9cclxuICBjb2xvck1hdGNoPzoge1xyXG4gICAgZG9tYWluOiBzdHJpbmdbXTtcclxuICAgIHJhbmdlOiBzdHJpbmdbXTtcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIERlZmluZSBhIG1heCBhbmQgbWluIHNpemUgZm9yIHRoZSBidWJibGVzXHJcbiAgICovXHJcbiAgc2l6ZVJhbmdlOiBbbnVtYmVyLCBudW1iZXJdO1xyXG4gIC8qKlxyXG4gICAqIElmIGRlZmluZWQsIHRyYW5zaXRpb24gd2lsbCBiZSBhY3RpdmF0ZWRcclxuICAgKiBhbmQgdGhlIHZhbHVlIHdpbGwgYmUgdXNlZCBhcyBkdXJhdGlvblxyXG4gICAqL1xyXG4gIHRyYW5zaXRpb24/OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogSWYgc2V0IHRvIGZhbHNlLCBzdG9wcyB0aGUgc2h1ZmZsaW5nIG9mIHRoZSBkYXRhXHJcbiAgICogYmVmb3JlIHJlbmRlcmluZy5cclxuICAgKi9cclxuICBzaHVmZmxlPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBEZWZpbmVzIHRoZSBmb250LWZhbWlseSBhbmQgdGhlIGZvbnQtd2VpZ2h0IGZvciBlYWNoIHRleHQgZ3JvdXBcclxuICAgKi9cclxuICBmb250UmVuZGVyaW5nPzoge1xyXG4gICAgbGFiZWw/OiB7XHJcbiAgICAgIGZhbWlseT86IHN0cmluZztcclxuICAgICAgd2VpZ2h0Pzogc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIGNvdW50ZXI/OiB7XHJcbiAgICAgIGZhbWlseT86IHN0cmluZztcclxuICAgICAgd2VpZ2h0Pzogc3RyaW5nO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBleHBvc2UgdGhlIGRyYXcgZnVuY3Rpb24gb3V0c2lkZSBvZiBuNy1mcm9udGVuZC9jb21wb25lbnRzIGxpYnJhcnlcclxuICAgKiB0aGlzIGlzIG5lZWRlZCB0byByZWRyYXcgYnViYmxlLWNoYXJ0LWNvbXBvbmVudCBvbiBjb21tYW5kXHJcbiAgICovXHJcbiAgc2V0RHJhdz86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgRDNDaGFydCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBlbnRpdHkgKHJlcXVpcmVkKVxyXG4gKiAtIGlkIChyZXF1aXJlZClcclxuICogLSBsYWJlbCAob3B0aW9uYWwpXHJcbiAqIC0gdHlwZU9mRW50aXR5IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNvdW50IChyZXF1aXJlZClcclxuKi9cclxuZXhwb3J0IGludGVyZmFjZSBCdWJibGVDaGFydERhdGFJdGVtIHtcclxuICBlbnRpdHk6IHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBsYWJlbD86IHN0cmluZztcclxuICAgIHR5cGVPZkVudGl0eT86IHN0cmluZztcclxuICB9O1xyXG4gIGNvdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctYnViYmxlLWNoYXJ0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnViYmxlLWNoYXJ0Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdWJibGVDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IEJ1YmJsZUNoYXJ0RGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBwcml2YXRlIGQzO1xyXG5cclxuICBwcml2YXRlIF9sb2FkZWQgPSBmYWxzZTtcclxuXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xyXG4gICAgLypcclxuICAgICBXYWl0cyBmb3IgdGhlIGRvbSB0byBiZSBsb2FkZWQsIHRoZW4gZmlyZXMgdGhlIGRyYXcgZnVuY3Rpb25cclxuICAgICB0aGF0IHJlbmRlcnMgdGhlIGNoYXJ0LlxyXG4gICAgKi9cclxuICAgIGlmICh0aGlzLmRhdGEpIHtcclxuICAgICAgaWYgKHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xyXG4gICAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpbXBvcnQoJ2QzJykudGhlbigobW9kdWxlKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmQzID0gbW9kdWxlO1xyXG4gICAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICAgICAgICBpZiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5zZXREcmF3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zZXREcmF3KHRoaXMuZHJhdyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbGljayhwYXlsb2FkKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgZHJhdyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZDMgfSA9IHRoaXM7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGNvbnRhaW5lcklkLCBkYXRhLCBoZWlnaHQsXHJcbiAgICAgIHdpZHRoLCBzZWxlY3RlZCwgdHJhbnNpdGlvbixcclxuICAgICAgY29sb3JNYXRjaCwgc2h1ZmZsZSxcclxuICAgICAgZm9udFJlbmRlcmluZ1xyXG4gICAgfSA9IHRoaXMuZGF0YTtcclxuICAgIGNvbnN0IGNsb3NlSWNvblBhdGggPSAnTSAtNTAsNDAgTC00MCw1MCAwLDEwIDQwLDUwIDUwLDQwIDEwLDAgNTAsLTQwIDQwLC01MCAwLC0xMCAtNDAsLTUwIC01MCwtNDAgLTEwLDAgLTUwLDQwJztcclxuXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkpIHtcclxuICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgcG9zc2libGUgdG8gZHJhdyB3aXRoIHRoZSBjdXJyZW50IGRhdGFzZXRcclxuICAgICAgY29uc29sZS53YXJuKCcobjctYnViYmxlLWNoYXJ0KSBUaGUgZGF0YSBvYmplY3QgaXMgbm90IGluIHRoZSBleHBlY3RlZCBmb3JtYXQhJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdCA9IGQzXHJcbiAgICAgIC50cmFuc2l0aW9uKClcclxuICAgICAgLmR1cmF0aW9uKDApO1xyXG4gICAgaWYgKHR5cGVvZiB0cmFuc2l0aW9uID09PSAnbnVtYmVyJykge1xyXG4gICAgICB0ID0gZDNcclxuICAgICAgICAudHJhbnNpdGlvbigpXHJcbiAgICAgICAgLmR1cmF0aW9uKHRyYW5zaXRpb24pXHJcbiAgICAgICAgLmVhc2UoZDMuZWFzZUN1YmljSW5PdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbG9yTWFwID0gZDMuc2NhbGVPcmRpbmFsKClcclxuICAgICAgLmRvbWFpbihjb2xvck1hdGNoID8gY29sb3JNYXRjaC5kb21haW4gOiBbJ3BlcnNvbmEnLCAnbHVvZ28nLCAnb3JnYW5penphemlvbmUnLCAnY29zYSBub3Rldm9sZSddKVxyXG4gICAgICAucmFuZ2UoY29sb3JNYXRjaCA/IGNvbG9yTWF0Y2gucmFuZ2UgOiBkMy5zY2hlbWVUYWJsZWF1MTApO1xyXG5cclxuICAgIGNvbnN0IHNpemVTY2FsZSA9IGQzIC8vIG1hcCBlbnRpdHkgY291bnQgdG8gYnViYmxlIHNpemVcclxuICAgICAgLnNjYWxlTGluZWFyKClcclxuICAgICAgLmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIChkKSA9PiArZC5jb3VudCldKVxyXG4gICAgICAucmFuZ2UoWzMsIGQzLm1heChkYXRhLCAoZCkgPT4gK2QuY291bnQpXSk7XHJcblxyXG4gICAgY29uc3QgcGFjayA9IChjaGlsZHJlbikgPT4gZDNcclxuICAgICAgLnBhY2soKVxyXG4gICAgICAuc2l6ZShbd2lkdGggLSAyLCBoZWlnaHQgLSAyXSlcclxuICAgICAgLnBhZGRpbmcoMS41KShcclxuICAgICAgICBkMy5oaWVyYXJjaHkoeyBjaGlsZHJlbiB9KS5zdW0oKGQpID0+IHNpemVTY2FsZShkLmNvdW50KSlcclxuICAgICAgKTtcclxuXHJcbiAgICBjb25zdCByb290ID0gKCkgPT4geyAvLyBpZiBzaHVmZmxlIGlzIHVuZGVmaW5lZCBvciB0cnVlLCBzaHVmZmxlIHRoZSBkYXRhXHJcbiAgICAgIGlmICh0eXBlb2Ygc2h1ZmZsZSA9PT0gJ3VuZGVmaW5lZCcgfHwgc2h1ZmZsZSkge1xyXG4gICAgICAgIGNvbnN0IHNodWZmRGF0YSA9IGRhdGEuc2xpY2UoKTsgLy8gZG8gbm90IG1vZGlmeSB0aGUgc291cmNlIGRhdGEhXHJcbiAgICAgICAgcmV0dXJuIHBhY2soZDMuc2h1ZmZsZShzaHVmZkRhdGEpKTtcclxuICAgICAgfSAvLyBpZiBzaHVmZmxlIGlzIHNldCB0byBmYWxzZSwgc2tpcCB0aGUgZGF0YSBzaHVmZmxlXHJcbiAgICAgIHJldHVybiBwYWNrKGRhdGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzdmcgPSBkM1xyXG4gICAgICAuc2VsZWN0KGAjJHtjb250YWluZXJJZH1gKVxyXG4gICAgICAuYXR0cigndmlld0JveCcsIFswLCAwLCB3aWR0aCwgaGVpZ2h0XSlcclxuICAgICAgLmF0dHIoJ2ZvbnQtZmFtaWx5JywgJ1ZlcmRhbmEsIEdlbmV2YSwgc2Fucy1zZXJpZicpXHJcbiAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKTtcclxuXHJcbiAgICBjb25zdCBsZWFmID0gc3ZnLnNlbGVjdEFsbCgnZycpLmRhdGEocm9vdCgpLmxlYXZlcygpLCAoZCkgPT4gZC5kYXRhLmVudGl0eS5pZCk7XHJcbiAgICBsZWFmXHJcbiAgICAgIC50cmFuc2l0aW9uKHQpIC8vIHVwZGF0ZSB0cmFuc2l0aW9uIG9uIDxnPlxyXG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMSlcclxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIChkKSA9PiBgdHJhbnNsYXRlKCR7ZC54ICsgMX0sJHtkLnkgKyAxfSlgKVxyXG4gICAgICAuYXR0cignZm9udC1zaXplJywgKGQpID0+IHtcclxuICAgICAgICBsZXQgc2l6ZSA9IGQuciAvIDUuNTtcclxuICAgICAgICBzaXplICo9IDE7XHJcbiAgICAgICAgc2l6ZSArPSAxO1xyXG4gICAgICAgIHJldHVybiBgJHtNYXRoLnJvdW5kKHNpemUpfXB4YDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgbGVhZi5zZWxlY3RBbGwoJy5jbG9zZS1pY29uJykucmVtb3ZlKCk7IC8vIGNsZWFyIGFsbCBleGlzdGluZyBjbG9zZSBpY29uc1xyXG4gICAgaWYgKHNlbGVjdGVkKSB7XHJcbiAgICAgIGxlYWYgLy8gcmVuZGVyIG5lY2Vzc2FyeSBjbG9zZSBpY29uc1xyXG4gICAgICAgIC5maWx0ZXIoKGQpID0+IHNlbGVjdGVkLmluY2x1ZGVzKGQuZGF0YS5lbnRpdHkuaWQpKVxyXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxyXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdjbG9zZS1pY29uJylcclxuICAgICAgICAuYXR0cignZCcsIGNsb3NlSWNvblBhdGgpXHJcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnI2ZmZicpXHJcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIChkKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZC5yIC8gNCA+IDMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBzY2FsZSguMDgpIHRyYW5zbGF0ZSgwLCAke2QuciAqIDEwIC0gODB9KWA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gJ3NjYWxlKC4wOCknO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxlYWZcclxuICAgICAgLnNlbGVjdCgnY2lyY2xlJylcclxuICAgICAgLnRyYW5zaXRpb24odCkgLy8gdXBkYXRlIHRyYW5zaXRpb24gb24gPGNpcmNsZT5cclxuICAgICAgLmF0dHIoJ2ZpbGwtb3BhY2l0eScsIDEpXHJcbiAgICAgIC5hdHRyKCdyJywgKGQpID0+IGQucik7XHJcblxyXG4gICAgbGVhZlxyXG4gICAgICAuc2VsZWN0KCd0ZXh0JylcclxuICAgICAgLmF0dHIoJ2ZvbnQtZmFtaWx5JywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcubGFiZWwgJiYgZm9udFJlbmRlcmluZy5sYWJlbC5mYW1pbHkpIHtcclxuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmxhYmVsLmZhbWlseTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICdpbmhlcml0JztcclxuICAgICAgfSlcclxuICAgICAgLmF0dHIoJ2ZvbnQtd2VpZ2h0JywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcubGFiZWwgJiYgZm9udFJlbmRlcmluZy5sYWJlbC53ZWlnaHQpIHtcclxuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmxhYmVsLndlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICdpbmhlcml0JztcclxuICAgICAgfSlcclxuICAgICAgLnNlbGVjdEFsbCgndHNwYW4nKVxyXG4gICAgICAuZGF0YSgoZCkgPT4ge1xyXG4gICAgICAgIGlmIChkLnIgLyA0ID4gNC41KSB7XHJcbiAgICAgICAgICAvLyBzaG93IHRleHQgYW5kIG51bWJlciB0aHJlc2hob2xkXHJcbiAgICAgICAgICBsZXQgbGFiZWwgPSAoXHJcbiAgICAgICAgICAgIGQuZGF0YS5lbnRpdHkubGFiZWwuY2hhckF0KDApLnRvVXBwZXJDYXNlKClcclxuICAgICAgICAgICAgKyBkLmRhdGEuZW50aXR5LmxhYmVsLnNsaWNlKDEpXHJcbiAgICAgICAgICApLnNwbGl0KC8gKy9nKTtcclxuICAgICAgICAgIGlmIChsYWJlbC5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgIGxhYmVsID0gbGFiZWwuc2xpY2UoMCwgMyk7XHJcbiAgICAgICAgICAgIGxhYmVsWzJdICs9ICfigKYnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xyXG4gICAgICAgIH0gaWYgKGQuciAvIDQgPiAyLjUpIHtcclxuICAgICAgICAgIC8vIHNob3cgdGV4dCB0aHJlc2hob2xkXHJcbiAgICAgICAgICBsZXQgbGFiZWwgPSAoXHJcbiAgICAgICAgICAgIGQuZGF0YS5lbnRpdHkubGFiZWwuY2hhckF0KDApLnRvVXBwZXJDYXNlKClcclxuICAgICAgICAgICAgKyBkLmRhdGEuZW50aXR5LmxhYmVsLnNsaWNlKDEpXHJcbiAgICAgICAgICApLnNwbGl0KC8gKy9nKTtcclxuICAgICAgICAgIGlmIChsYWJlbC5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgIGxhYmVsID0gbGFiZWwuc2xpY2UoMCwgMyk7XHJcbiAgICAgICAgICAgIGxhYmVsWzJdICs9ICfigKYnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5qb2luKCd0c3BhbicpXHJcbiAgICAgIC5hdHRyKCd4JywgMClcclxuICAgICAgLmF0dHIoJ3knLCAoZCwgaSwgbm9kZXMpID0+IGAke2kgLSAobm9kZXMubGVuZ3RoICsgMSkgLyAyICsgMC45N31lbWApXHJcbiAgICAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJylcclxuICAgICAgLnRleHQoKGQpID0+IGQpO1xyXG5cclxuICAgIGxlYWZcclxuICAgICAgLnNlbGVjdCgnLmxhYmVsLWNvdW50JylcclxuICAgICAgLmF0dHIoJ2ZvbnQtZmFtaWx5JywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcuY291bnRlciAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIuZmFtaWx5KSB7XHJcbiAgICAgICAgICByZXR1cm4gZm9udFJlbmRlcmluZy5jb3VudGVyLmZhbWlseTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICdpbmhlcml0JztcclxuICAgICAgfSlcclxuICAgICAgLmF0dHIoJ2ZvbnQtd2VpZ2h0JywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcuY291bnRlciAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIud2VpZ2h0KSB7XHJcbiAgICAgICAgICByZXR1cm4gZm9udFJlbmRlcmluZy5jb3VudGVyLndlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICdpbmhlcml0JztcclxuICAgICAgfSlcclxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxyXG4gICAgICAudGV4dCgoZCkgPT4ge1xyXG4gICAgICAgIGlmIChkLnIgLyA0ID4gMi41KSB7XHJcbiAgICAgICAgICAvLyBzaG93IHRleHQgYW5kIG51bWJlciB0aHJlc2hob2xkXHJcbiAgICAgICAgICByZXR1cm4gZC5kYXRhLmNvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hdHRyKCd5JywgKGQpID0+IHtcclxuICAgICAgICBsZXQgbGFiZWxMZW5ndGggPSBkLmRhdGEuZW50aXR5LmxhYmVsLnNwbGl0KC8gKy9nKTtcclxuICAgICAgICBpZiAobGFiZWxMZW5ndGgubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgbGFiZWxMZW5ndGggPSBsYWJlbExlbmd0aC5zbGljZSgwLCAzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGAke2xhYmVsTGVuZ3RoLmxlbmd0aCAtIChsYWJlbExlbmd0aC5sZW5ndGggKyAxKSAvIDIgKyAwLjk3fWVtYDtcclxuICAgICAgfSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGcgPSBsZWFmLmVudGVyKCkuYXBwZW5kKCdnJyk7XHJcblxyXG4gICAgZy5hdHRyKCd0cmFuc2Zvcm0nLCAoZCkgPT4gYHRyYW5zbGF0ZSgke2QueCArIDF9LCR7ZC55ICsgMX0pYClcclxuICAgICAgLmF0dHIoJ2ZvbnQtc2l6ZScsIChkKSA9PiB7XHJcbiAgICAgICAgbGV0IHNpemUgPSBkLnIgLyA1LjU7XHJcbiAgICAgICAgc2l6ZSAqPSAxO1xyXG4gICAgICAgIHNpemUgKz0gMTtcclxuICAgICAgICByZXR1cm4gYCR7TWF0aC5yb3VuZChzaXplKX1weGA7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hdHRyKCdjdXJzb3InLCAncG9pbnRlcicpXHJcbiAgICAgIC5vbignY2xpY2snLCAoZCkgPT4ge1xyXG4gICAgICAgIHRoaXMub25DbGljayhkLmRhdGEuZW50aXR5LmlkKTtcclxuICAgICAgfSlcclxuICAgICAgLmF0dHIoJ2lkJywgKGQpID0+IGBnXyR7ZC5kYXRhLmVudGl0eS5pZH1gKVxyXG4gICAgICAuYXBwZW5kKCdjaXJjbGUnKVxyXG4gICAgICAuYXR0cignaWQnLCAoZCkgPT4geyBkLmxlYWZVaWQgPSBkLmRhdGEuZW50aXR5LmlkOyB9KVxyXG4gICAgICAuYXR0cigncicsIDApXHJcbiAgICAgIC50cmFuc2l0aW9uKHQpIC8vIGVudGVyKCkgdHJhbnNpdGlvbiBvbiA8Y2lyY2xlPlxyXG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMSlcclxuICAgICAgLmF0dHIoJ2ZpbGwnLCAoZCkgPT4gY29sb3JNYXAoZC5kYXRhLmVudGl0eS50eXBlT2ZFbnRpdHkpKVxyXG4gICAgICAuYXR0cigncicsIChkKSA9PiBkLnIpO1xyXG5cclxuICAgIGcuYXBwZW5kKCdjbGlwUGF0aCcpXHJcbiAgICAgIC5hdHRyKCdpZCcsIChkKSA9PiB7IGQuY2xpcFVpZCA9IGBDbGlwLSR7ZC5kYXRhLmVudGl0eS5pZH1gOyB9KVxyXG4gICAgICAuYXBwZW5kKCd1c2UnKVxyXG4gICAgICAuYXR0cigneGxpbms6aHJlZicsIChkKSA9PiBkLmxlYWZVaWQuaHJlZik7XHJcblxyXG4gICAgZy5hcHBlbmQoJ3RleHQnKVxyXG4gICAgICAuYXR0cignZm9udC1mYW1pbHknLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGZvbnRSZW5kZXJpbmcgJiYgZm9udFJlbmRlcmluZy5sYWJlbCAmJiBmb250UmVuZGVyaW5nLmxhYmVsLmZhbWlseSkge1xyXG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcubGFiZWwuZmFtaWx5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJ2luaGVyaXQnO1xyXG4gICAgICB9KVxyXG4gICAgICAuYXR0cignZm9udC13ZWlnaHQnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGZvbnRSZW5kZXJpbmcgJiYgZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmxhYmVsICYmIGZvbnRSZW5kZXJpbmcubGFiZWwud2VpZ2h0KSB7XHJcbiAgICAgICAgICByZXR1cm4gZm9udFJlbmRlcmluZy5sYWJlbC53ZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnaW5oZXJpdCc7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5zZWxlY3RBbGwoJ3RzcGFuJylcclxuICAgICAgLmRhdGEoKGQpID0+IHtcclxuICAgICAgICBpZiAoZC5yIC8gNCA+IDQuNSkge1xyXG4gICAgICAgICAgLy8gc2hvdyB0ZXh0IGFuZCBudW1iZXIgdGhyZXNoaG9sZFxyXG4gICAgICAgICAgbGV0IGxhYmVsID0gKFxyXG4gICAgICAgICAgICBkLmRhdGEuZW50aXR5LmxhYmVsLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgICAgICsgZC5kYXRhLmVudGl0eS5sYWJlbC5zbGljZSgxKVxyXG4gICAgICAgICAgKS5zcGxpdCgvICsvZyk7XHJcbiAgICAgICAgICBpZiAobGFiZWwubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnNsaWNlKDAsIDMpO1xyXG4gICAgICAgICAgICBsYWJlbFsyXSArPSAn4oCmJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBsYWJlbDtcclxuICAgICAgICB9IGlmIChkLnIgLyA0ID4gMi41KSB7XHJcbiAgICAgICAgICAvLyBzaG93IHRleHQgdGhyZXNoaG9sZFxyXG4gICAgICAgICAgbGV0IGxhYmVsID0gKFxyXG4gICAgICAgICAgICBkLmRhdGEuZW50aXR5LmxhYmVsLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgICAgICsgZC5kYXRhLmVudGl0eS5sYWJlbC5zbGljZSgxKVxyXG4gICAgICAgICAgKS5zcGxpdCgvICsvZyk7XHJcbiAgICAgICAgICBpZiAobGFiZWwubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnNsaWNlKDAsIDMpO1xyXG4gICAgICAgICAgICBsYWJlbFsyXSArPSAn4oCmJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBsYWJlbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB9KVxyXG4gICAgICAuam9pbigndHNwYW4nKVxyXG4gICAgICAuYXR0cigneCcsIDApXHJcbiAgICAgIC5hdHRyKCd5JywgKGQsIGksIG5vZGVzKSA9PiBgJHtpIC0gKG5vZGVzLmxlbmd0aCArIDEpIC8gMiArIDAuOTd9ZW1gKVxyXG4gICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXHJcbiAgICAgIC50ZXh0KChkKSA9PiBkKVxyXG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMClcclxuICAgICAgLnRyYW5zaXRpb24odCkgLy8gZW50ZXIoKSB0cmFuc2l0aW9uIG9uIDx0c3Bhbj5cclxuICAgICAgLmF0dHIoJ2ZpbGwtb3BhY2l0eScsIDEpO1xyXG5cclxuICAgIGcuYXBwZW5kKCd0ZXh0JykgLy8gQ291bnQgbGFiZWxcclxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xhYmVsLWNvdW50JylcclxuICAgICAgLmF0dHIoJ2ZvbnQtZmFtaWx5JywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcuY291bnRlciAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIuZmFtaWx5KSB7XHJcbiAgICAgICAgICByZXR1cm4gZm9udFJlbmRlcmluZy5jb3VudGVyLmZhbWlseTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICdpbmhlcml0JztcclxuICAgICAgfSlcclxuICAgICAgLmF0dHIoJ2ZvbnQtd2VpZ2h0JywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcuY291bnRlciAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIud2VpZ2h0KSB7XHJcbiAgICAgICAgICByZXR1cm4gZm9udFJlbmRlcmluZy5jb3VudGVyLndlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICdpbmhlcml0JztcclxuICAgICAgfSlcclxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxyXG4gICAgICAudGV4dCgoZCkgPT4ge1xyXG4gICAgICAgIGlmIChkLnIgLyA0ID4gMi41KSB7XHJcbiAgICAgICAgICAvLyBzaG93IHRleHQgYW5kIG51bWJlciB0aHJlc2hob2xkXHJcbiAgICAgICAgICByZXR1cm4gZC5kYXRhLmNvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hdHRyKCd5JywgKGQpID0+IHtcclxuICAgICAgICBsZXQgbGFiZWxMZW5ndGggPSBkLmRhdGEuZW50aXR5LmxhYmVsLnNwbGl0KC8gKy9nKTtcclxuICAgICAgICBpZiAobGFiZWxMZW5ndGgubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgbGFiZWxMZW5ndGggPSBsYWJlbExlbmd0aC5zbGljZSgwLCAzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGAke2xhYmVsTGVuZ3RoLmxlbmd0aCAtIChsYWJlbExlbmd0aC5sZW5ndGggKyAxKSAvIDIgKyAwLjk3fWVtYDtcclxuICAgICAgfSlcclxuICAgICAgLmF0dHIoJ2ZpbGwtb3BhY2l0eScsIDApXHJcbiAgICAgIC50cmFuc2l0aW9uKHQpIC8vIGVudGVyKCkgdHJhbnNpdGlvbiBvbiA8dGV4dD5cclxuICAgICAgLmF0dHIoJ2ZpbGwtb3BhY2l0eScsIDEpO1xyXG5cclxuICAgIGxlYWZcclxuICAgICAgLmV4aXQoKSAvLyBFWElUIENZQ0xFXHJcbiAgICAgIC5yZW1vdmUoKTtcclxuXHJcbiAgICBpZiAoc2VsZWN0ZWQpIHtcclxuICAgICAgZy5maWx0ZXIoKGQpID0+IHNlbGVjdGVkLmluY2x1ZGVzKGQubGVhZlVpZCkpIC8vIGFwcGVuZCAnWCcgaWNvbiAvLyBvbmx5IGZvciBzZWxlY3RlZCBidWJibGVzXHJcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXHJcbiAgICAgICAgLmF0dHIoJ2QnLCBjbG9zZUljb25QYXRoKVxyXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdjbG9zZS1pY29uJylcclxuICAgICAgICAuYXR0cignZmlsbCcsIChkKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZC5yIC8gNCA+IDIuNSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyNmZmYnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuICd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQpID0+IHtcclxuICAgICAgICAgIGlmIChkLnIgLyA0ID4gMykge1xyXG4gICAgICAgICAgICByZXR1cm4gYHNjYWxlKC4wOCkgdHJhbnNsYXRlKDAsICR7ZC5yICogMTAgLSA4MH0pYDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiAnc2NhbGUoLjA4KSc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbWl0KCdkM2VuZCcsIGRhdGEpOyAvLyBjb21tdW5pY2F0ZSBlbmQgb2YgZHJhd1xyXG4gIH1cclxufVxyXG4iXX0=