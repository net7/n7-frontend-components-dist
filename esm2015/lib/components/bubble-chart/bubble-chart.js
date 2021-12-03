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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQvYnViYmxlLWNoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2QkFBNkI7QUFDN0IsaUJBQWlCO0FBQ2pCLDZCQUE2QjtBQUM3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUF3R3RFLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBQWpDO1FBT1UsWUFBTyxHQUFHLEtBQUssQ0FBQztRQTJCeEIsU0FBSSxHQUFHLEdBQUcsRUFBRTtZQUNWLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDcEIsTUFBTSxFQUNKLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUN6QixLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFDM0IsVUFBVSxFQUFFLE9BQU8sRUFDbkIsYUFBYSxFQUNkLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNkLE1BQU0sYUFBYSxHQUFHLHlGQUF5RixDQUFDO1lBRWhILElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN4QiwyREFBMkQ7Z0JBQzNELE9BQU8sQ0FBQyxJQUFJLENBQUMsa0VBQWtFLENBQUMsQ0FBQztnQkFDakYsT0FBTzthQUNSO1lBRUQsSUFBSSxDQUFDLEdBQUcsRUFBRTtpQkFDUCxVQUFVLEVBQUU7aUJBQ1osUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxPQUFPLFVBQVUsS0FBSyxRQUFRLEVBQUU7Z0JBQ2xDLENBQUMsR0FBRyxFQUFFO3FCQUNILFVBQVUsRUFBRTtxQkFDWixRQUFRLENBQUMsVUFBVSxDQUFDO3FCQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQzVC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QVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO29CQUMzQixJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQztvQkFDakIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNaLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTt3QkFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUM5QjtnQkFDSCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FnVEYsQ0FBQTtBQS9VVTtJQUFSLEtBQUssRUFBRTs7a0RBQXVCO0FBRXRCO0lBQVIsS0FBSyxFQUFFOztrREFBVztBQUhSLG9CQUFvQjtJQUpoQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLHlKQUFrQztLQUNuQyxDQUFDO0dBQ1csb0JBQW9CLENBZ1ZoQztTQWhWWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBCVUJCTEVDSEFSVC50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlckNvbnRlbnRDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBCdWJibGVDaGFydENvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJJZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJXaWR0aCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJIZWlnaHQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgYnViYmxlc0RhdGEgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcmVzZXQgKG9wdGlvbmFsKVxyXG4qL1xyXG5leHBvcnQgaW50ZXJmYWNlIEJ1YmJsZUNoYXJ0RGF0YSB7XHJcbiAgLyoqXHJcbiAgICogdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBidWJibGUtY2hhcnRcclxuICAgKi9cclxuICBjb250YWluZXJJZDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHRvdGFsIHdpZHRoIGZvciB0aGUgYnViYmxlLWNoYXJ0XHJcbiAgICovXHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICAvKipcclxuICAgKiB0b3RhbCBoZWlnaHQgZm9yIHRoZSBidWJibGUtY2hhcnRcclxuICAgKi9cclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBkYXRhIGFib3V0IHRoZSBidWJibGVzXHJcbiAgICovXHJcbiAgZGF0YTogQnViYmxlQ2hhcnREYXRhSXRlbVtdO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgY3NzIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGxpc3Qgb2YgSUQncyBvZiBzZWxlY3RlZCBpdGVtc1xyXG4gICAqIChzZWxlY3RlZCBpdGVtcyB3aWxsIHJlbmRlciB3aXRoIGEgJ1gnIGljb24pXHJcbiAgICovXHJcbiAgc2VsZWN0ZWQ/OiBzdHJpbmdbXTtcclxuICAvKipcclxuICAgKiBTcGVjaWZ5IGEgbGlzdCBvZiB0eXBlT2ZFbnRpdHkgdHlwZXMgKGRvbWFpbiksXHJcbiAgICogYW5kIGEgbGlzdCBvZiBjb2xvcnMgKHJhbmdlKSwgd2hpY2ggd2lsbCBiZSBtYXBwZWQgdG9nZXRoZXIuXHJcbiAgICovXHJcbiAgY29sb3JNYXRjaD86IHtcclxuICAgIGRvbWFpbjogc3RyaW5nW107XHJcbiAgICByYW5nZTogc3RyaW5nW107XHJcbiAgfTtcclxuICAvKipcclxuICAgKiBEZWZpbmUgYSBtYXggYW5kIG1pbiBzaXplIGZvciB0aGUgYnViYmxlc1xyXG4gICAqL1xyXG4gIHNpemVSYW5nZTogW251bWJlciwgbnVtYmVyXTtcclxuICAvKipcclxuICAgKiBJZiBkZWZpbmVkLCB0cmFuc2l0aW9uIHdpbGwgYmUgYWN0aXZhdGVkXHJcbiAgICogYW5kIHRoZSB2YWx1ZSB3aWxsIGJlIHVzZWQgYXMgZHVyYXRpb25cclxuICAgKi9cclxuICB0cmFuc2l0aW9uPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIElmIHNldCB0byBmYWxzZSwgc3RvcHMgdGhlIHNodWZmbGluZyBvZiB0aGUgZGF0YVxyXG4gICAqIGJlZm9yZSByZW5kZXJpbmcuXHJcbiAgICovXHJcbiAgc2h1ZmZsZT86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogRGVmaW5lcyB0aGUgZm9udC1mYW1pbHkgYW5kIHRoZSBmb250LXdlaWdodCBmb3IgZWFjaCB0ZXh0IGdyb3VwXHJcbiAgICovXHJcbiAgZm9udFJlbmRlcmluZz86IHtcclxuICAgIGxhYmVsPzoge1xyXG4gICAgICBmYW1pbHk/OiBzdHJpbmc7XHJcbiAgICAgIHdlaWdodD86IHN0cmluZztcclxuICAgIH07XHJcbiAgICBjb3VudGVyPzoge1xyXG4gICAgICBmYW1pbHk/OiBzdHJpbmc7XHJcbiAgICAgIHdlaWdodD86IHN0cmluZztcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogZXhwb3NlIHRoZSBkcmF3IGZ1bmN0aW9uIG91dHNpZGUgb2YgbjctZnJvbnRlbmQvY29tcG9uZW50cyBsaWJyYXJ5XHJcbiAgICogdGhpcyBpcyBuZWVkZWQgdG8gcmVkcmF3IGJ1YmJsZS1jaGFydC1jb21wb25lbnQgb24gY29tbWFuZFxyXG4gICAqL1xyXG4gIHNldERyYXc/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEQzQ2hhcnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgZW50aXR5IChyZXF1aXJlZClcclxuICogLSBpZCAocmVxdWlyZWQpXHJcbiAqIC0gbGFiZWwgKG9wdGlvbmFsKVxyXG4gKiAtIHR5cGVPZkVudGl0eSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjb3VudCAocmVxdWlyZWQpXHJcbiovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQnViYmxlQ2hhcnREYXRhSXRlbSB7XHJcbiAgZW50aXR5OiB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgICB0eXBlT2ZFbnRpdHk/OiBzdHJpbmc7XHJcbiAgfTtcclxuICBjb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWJ1YmJsZS1jaGFydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2J1YmJsZS1jaGFydC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQnViYmxlQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcclxuICBASW5wdXQoKSBkYXRhOiBCdWJibGVDaGFydERhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBkMztcclxuXHJcbiAgcHJpdmF0ZSBfbG9hZGVkID0gZmFsc2U7XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcclxuICAgIC8qXHJcbiAgICAgV2FpdHMgZm9yIHRoZSBkb20gdG8gYmUgbG9hZGVkLCB0aGVuIGZpcmVzIHRoZSBkcmF3IGZ1bmN0aW9uXHJcbiAgICAgdGhhdCByZW5kZXJzIHRoZSBjaGFydC5cclxuICAgICovXHJcbiAgICBpZiAodGhpcy5kYXRhKSB7XHJcbiAgICAgIGlmICh0aGlzLl9sb2FkZWQpIHJldHVybjtcclxuICAgICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaW1wb3J0KCdkMycpLnRoZW4oKG1vZHVsZSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5kMyA9IG1vZHVsZTtcclxuICAgICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuc2V0RHJhdykge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuc2V0RHJhdyh0aGlzLmRyYXcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZCkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIGRyYXcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGQzIH0gPSB0aGlzO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBjb250YWluZXJJZCwgZGF0YSwgaGVpZ2h0LFxyXG4gICAgICB3aWR0aCwgc2VsZWN0ZWQsIHRyYW5zaXRpb24sXHJcbiAgICAgIGNvbG9yTWF0Y2gsIHNodWZmbGUsXHJcbiAgICAgIGZvbnRSZW5kZXJpbmdcclxuICAgIH0gPSB0aGlzLmRhdGE7XHJcbiAgICBjb25zdCBjbG9zZUljb25QYXRoID0gJ00gLTUwLDQwIEwtNDAsNTAgMCwxMCA0MCw1MCA1MCw0MCAxMCwwIDUwLC00MCA0MCwtNTAgMCwtMTAgLTQwLC01MCAtNTAsLTQwIC0xMCwwIC01MCw0MCc7XHJcblxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEpKSB7XHJcbiAgICAgIC8vIENoZWNrIGlmIGl0IGlzIHBvc3NpYmxlIHRvIGRyYXcgd2l0aCB0aGUgY3VycmVudCBkYXRhc2V0XHJcbiAgICAgIGNvbnNvbGUud2FybignKG43LWJ1YmJsZS1jaGFydCkgVGhlIGRhdGEgb2JqZWN0IGlzIG5vdCBpbiB0aGUgZXhwZWN0ZWQgZm9ybWF0IScpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHQgPSBkM1xyXG4gICAgICAudHJhbnNpdGlvbigpXHJcbiAgICAgIC5kdXJhdGlvbigwKTtcclxuICAgIGlmICh0eXBlb2YgdHJhbnNpdGlvbiA9PT0gJ251bWJlcicpIHtcclxuICAgICAgdCA9IGQzXHJcbiAgICAgICAgLnRyYW5zaXRpb24oKVxyXG4gICAgICAgIC5kdXJhdGlvbih0cmFuc2l0aW9uKVxyXG4gICAgICAgIC5lYXNlKGQzLmVhc2VDdWJpY0luT3V0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb2xvck1hcCA9IGQzLnNjYWxlT3JkaW5hbCgpXHJcbiAgICAgIC5kb21haW4oY29sb3JNYXRjaCA/IGNvbG9yTWF0Y2guZG9tYWluIDogWydwZXJzb25hJywgJ2x1b2dvJywgJ29yZ2FuaXp6YXppb25lJywgJ2Nvc2Egbm90ZXZvbGUnXSlcclxuICAgICAgLnJhbmdlKGNvbG9yTWF0Y2ggPyBjb2xvck1hdGNoLnJhbmdlIDogZDMuc2NoZW1lVGFibGVhdTEwKTtcclxuXHJcbiAgICBjb25zdCBzaXplU2NhbGUgPSBkMyAvLyBtYXAgZW50aXR5IGNvdW50IHRvIGJ1YmJsZSBzaXplXHJcbiAgICAgIC5zY2FsZUxpbmVhcigpXHJcbiAgICAgIC5kb21haW4oWzAsIGQzLm1heChkYXRhLCAoZCkgPT4gK2QuY291bnQpXSlcclxuICAgICAgLnJhbmdlKFszLCBkMy5tYXgoZGF0YSwgKGQpID0+ICtkLmNvdW50KV0pO1xyXG5cclxuICAgIGNvbnN0IHBhY2sgPSAoY2hpbGRyZW4pID0+IGQzXHJcbiAgICAgIC5wYWNrKClcclxuICAgICAgLnNpemUoW3dpZHRoIC0gMiwgaGVpZ2h0IC0gMl0pXHJcbiAgICAgIC5wYWRkaW5nKDEuNSkoXHJcbiAgICAgICAgZDMuaGllcmFyY2h5KHsgY2hpbGRyZW4gfSkuc3VtKChkKSA9PiBzaXplU2NhbGUoZC5jb3VudCkpXHJcbiAgICAgICk7XHJcblxyXG4gICAgY29uc3Qgcm9vdCA9ICgpID0+IHsgLy8gaWYgc2h1ZmZsZSBpcyB1bmRlZmluZWQgb3IgdHJ1ZSwgc2h1ZmZsZSB0aGUgZGF0YVxyXG4gICAgICBpZiAodHlwZW9mIHNodWZmbGUgPT09ICd1bmRlZmluZWQnIHx8IHNodWZmbGUpIHtcclxuICAgICAgICBjb25zdCBzaHVmZkRhdGEgPSBkYXRhLnNsaWNlKCk7IC8vIGRvIG5vdCBtb2RpZnkgdGhlIHNvdXJjZSBkYXRhIVxyXG4gICAgICAgIHJldHVybiBwYWNrKGQzLnNodWZmbGUoc2h1ZmZEYXRhKSk7XHJcbiAgICAgIH0gLy8gaWYgc2h1ZmZsZSBpcyBzZXQgdG8gZmFsc2UsIHNraXAgdGhlIGRhdGEgc2h1ZmZsZVxyXG4gICAgICByZXR1cm4gcGFjayhkYXRhKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc3ZnID0gZDNcclxuICAgICAgLnNlbGVjdChgIyR7Y29udGFpbmVySWR9YClcclxuICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCBbMCwgMCwgd2lkdGgsIGhlaWdodF0pXHJcbiAgICAgIC5hdHRyKCdmb250LWZhbWlseScsICdWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWYnKVxyXG4gICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnbWlkZGxlJyk7XHJcblxyXG4gICAgY29uc3QgbGVhZiA9IHN2Zy5zZWxlY3RBbGwoJ2cnKS5kYXRhKHJvb3QoKS5sZWF2ZXMoKSwgKGQpID0+IGQuZGF0YS5lbnRpdHkuaWQpO1xyXG4gICAgbGVhZlxyXG4gICAgICAudHJhbnNpdGlvbih0KSAvLyB1cGRhdGUgdHJhbnNpdGlvbiBvbiA8Zz5cclxuICAgICAgLmF0dHIoJ2ZpbGwtb3BhY2l0eScsIDEpXHJcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCkgPT4gYHRyYW5zbGF0ZSgke2QueCArIDF9LCR7ZC55ICsgMX0pYClcclxuICAgICAgLmF0dHIoJ2ZvbnQtc2l6ZScsIChkKSA9PiB7XHJcbiAgICAgICAgbGV0IHNpemUgPSBkLnIgLyA1LjU7XHJcbiAgICAgICAgc2l6ZSAqPSAxO1xyXG4gICAgICAgIHNpemUgKz0gMTtcclxuICAgICAgICByZXR1cm4gYCR7TWF0aC5yb3VuZChzaXplKX1weGA7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGxlYWYuc2VsZWN0QWxsKCcuY2xvc2UtaWNvbicpLnJlbW92ZSgpOyAvLyBjbGVhciBhbGwgZXhpc3RpbmcgY2xvc2UgaWNvbnNcclxuICAgIGlmIChzZWxlY3RlZCkge1xyXG4gICAgICBsZWFmIC8vIHJlbmRlciBuZWNlc3NhcnkgY2xvc2UgaWNvbnNcclxuICAgICAgICAuZmlsdGVyKChkKSA9PiBzZWxlY3RlZC5pbmNsdWRlcyhkLmRhdGEuZW50aXR5LmlkKSlcclxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcclxuICAgICAgICAuYXR0cignY2xhc3MnLCAnY2xvc2UtaWNvbicpXHJcbiAgICAgICAgLmF0dHIoJ2QnLCBjbG9zZUljb25QYXRoKVxyXG4gICAgICAgIC5hdHRyKCdmaWxsJywgJyNmZmYnKVxyXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGQuciAvIDQgPiAzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgc2NhbGUoLjA4KSB0cmFuc2xhdGUoMCwgJHtkLnIgKiAxMCAtIDgwfSlgO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuICdzY2FsZSguMDgpJztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsZWFmXHJcbiAgICAgIC5zZWxlY3QoJ2NpcmNsZScpXHJcbiAgICAgIC50cmFuc2l0aW9uKHQpIC8vIHVwZGF0ZSB0cmFuc2l0aW9uIG9uIDxjaXJjbGU+XHJcbiAgICAgIC5hdHRyKCdmaWxsLW9wYWNpdHknLCAxKVxyXG4gICAgICAuYXR0cigncicsIChkKSA9PiBkLnIpO1xyXG5cclxuICAgIGxlYWZcclxuICAgICAgLnNlbGVjdCgndGV4dCcpXHJcbiAgICAgIC5hdHRyKCdmb250LWZhbWlseScsICgpID0+IHtcclxuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmxhYmVsICYmIGZvbnRSZW5kZXJpbmcubGFiZWwuZmFtaWx5KSB7XHJcbiAgICAgICAgICByZXR1cm4gZm9udFJlbmRlcmluZy5sYWJlbC5mYW1pbHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnaW5oZXJpdCc7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hdHRyKCdmb250LXdlaWdodCcsICgpID0+IHtcclxuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmxhYmVsICYmIGZvbnRSZW5kZXJpbmcubGFiZWwud2VpZ2h0KSB7XHJcbiAgICAgICAgICByZXR1cm4gZm9udFJlbmRlcmluZy5sYWJlbC53ZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnaW5oZXJpdCc7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5zZWxlY3RBbGwoJ3RzcGFuJylcclxuICAgICAgLmRhdGEoKGQpID0+IHtcclxuICAgICAgICBpZiAoZC5yIC8gNCA+IDQuNSkge1xyXG4gICAgICAgICAgLy8gc2hvdyB0ZXh0IGFuZCBudW1iZXIgdGhyZXNoaG9sZFxyXG4gICAgICAgICAgbGV0IGxhYmVsID0gKFxyXG4gICAgICAgICAgICBkLmRhdGEuZW50aXR5LmxhYmVsLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgICAgICsgZC5kYXRhLmVudGl0eS5sYWJlbC5zbGljZSgxKVxyXG4gICAgICAgICAgKS5zcGxpdCgvICsvZyk7XHJcbiAgICAgICAgICBpZiAobGFiZWwubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnNsaWNlKDAsIDMpO1xyXG4gICAgICAgICAgICBsYWJlbFsyXSArPSAn4oCmJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBsYWJlbDtcclxuICAgICAgICB9IGlmIChkLnIgLyA0ID4gMi41KSB7XHJcbiAgICAgICAgICAvLyBzaG93IHRleHQgdGhyZXNoaG9sZFxyXG4gICAgICAgICAgbGV0IGxhYmVsID0gKFxyXG4gICAgICAgICAgICBkLmRhdGEuZW50aXR5LmxhYmVsLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgICAgICsgZC5kYXRhLmVudGl0eS5sYWJlbC5zbGljZSgxKVxyXG4gICAgICAgICAgKS5zcGxpdCgvICsvZyk7XHJcbiAgICAgICAgICBpZiAobGFiZWwubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnNsaWNlKDAsIDMpO1xyXG4gICAgICAgICAgICBsYWJlbFsyXSArPSAn4oCmJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBsYWJlbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB9KVxyXG4gICAgICAuam9pbigndHNwYW4nKVxyXG4gICAgICAuYXR0cigneCcsIDApXHJcbiAgICAgIC5hdHRyKCd5JywgKGQsIGksIG5vZGVzKSA9PiBgJHtpIC0gKG5vZGVzLmxlbmd0aCArIDEpIC8gMiArIDAuOTd9ZW1gKVxyXG4gICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXHJcbiAgICAgIC50ZXh0KChkKSA9PiBkKTtcclxuXHJcbiAgICBsZWFmXHJcbiAgICAgIC5zZWxlY3QoJy5sYWJlbC1jb3VudCcpXHJcbiAgICAgIC5hdHRyKCdmb250LWZhbWlseScsICgpID0+IHtcclxuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIgJiYgZm9udFJlbmRlcmluZy5jb3VudGVyLmZhbWlseSkge1xyXG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcuY291bnRlci5mYW1pbHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnaW5oZXJpdCc7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hdHRyKCdmb250LXdlaWdodCcsICgpID0+IHtcclxuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIgJiYgZm9udFJlbmRlcmluZy5jb3VudGVyLndlaWdodCkge1xyXG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcuY291bnRlci53ZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnaW5oZXJpdCc7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJylcclxuICAgICAgLnRleHQoKGQpID0+IHtcclxuICAgICAgICBpZiAoZC5yIC8gNCA+IDIuNSkge1xyXG4gICAgICAgICAgLy8gc2hvdyB0ZXh0IGFuZCBudW1iZXIgdGhyZXNoaG9sZFxyXG4gICAgICAgICAgcmV0dXJuIGQuZGF0YS5jb3VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB9KVxyXG4gICAgICAuYXR0cigneScsIChkKSA9PiB7XHJcbiAgICAgICAgbGV0IGxhYmVsTGVuZ3RoID0gZC5kYXRhLmVudGl0eS5sYWJlbC5zcGxpdCgvICsvZyk7XHJcbiAgICAgICAgaWYgKGxhYmVsTGVuZ3RoLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgIGxhYmVsTGVuZ3RoID0gbGFiZWxMZW5ndGguc2xpY2UoMCwgMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBgJHtsYWJlbExlbmd0aC5sZW5ndGggLSAobGFiZWxMZW5ndGgubGVuZ3RoICsgMSkgLyAyICsgMC45N31lbWA7XHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgICBjb25zdCBnID0gbGVhZi5lbnRlcigpLmFwcGVuZCgnZycpO1xyXG5cclxuICAgIGcuYXR0cigndHJhbnNmb3JtJywgKGQpID0+IGB0cmFuc2xhdGUoJHtkLnggKyAxfSwke2QueSArIDF9KWApXHJcbiAgICAgIC5hdHRyKCdmb250LXNpemUnLCAoZCkgPT4ge1xyXG4gICAgICAgIGxldCBzaXplID0gZC5yIC8gNS41O1xyXG4gICAgICAgIHNpemUgKj0gMTtcclxuICAgICAgICBzaXplICs9IDE7XHJcbiAgICAgICAgcmV0dXJuIGAke01hdGgucm91bmQoc2l6ZSl9cHhgO1xyXG4gICAgICB9KVxyXG4gICAgICAuYXR0cignY3Vyc29yJywgJ3BvaW50ZXInKVxyXG4gICAgICAub24oJ2NsaWNrJywgKGV2ZW50LCBkKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbkNsaWNrKGQuZGF0YS5lbnRpdHkuaWQpO1xyXG4gICAgICB9KVxyXG4gICAgICAuYXR0cignaWQnLCAoZCkgPT4gYGdfJHtkLmRhdGEuZW50aXR5LmlkfWApXHJcbiAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXHJcbiAgICAgIC5hdHRyKCdpZCcsIChkKSA9PiB7IGQubGVhZlVpZCA9IGQuZGF0YS5lbnRpdHkuaWQ7IH0pXHJcbiAgICAgIC5hdHRyKCdyJywgMClcclxuICAgICAgLnRyYW5zaXRpb24odCkgLy8gZW50ZXIoKSB0cmFuc2l0aW9uIG9uIDxjaXJjbGU+XHJcbiAgICAgIC5hdHRyKCdmaWxsLW9wYWNpdHknLCAxKVxyXG4gICAgICAuYXR0cignZmlsbCcsIChkKSA9PiBjb2xvck1hcChkLmRhdGEuZW50aXR5LnR5cGVPZkVudGl0eSkpXHJcbiAgICAgIC5hdHRyKCdyJywgKGQpID0+IGQucik7XHJcblxyXG4gICAgZy5hcHBlbmQoJ2NsaXBQYXRoJylcclxuICAgICAgLmF0dHIoJ2lkJywgKGQpID0+IHsgZC5jbGlwVWlkID0gYENsaXAtJHtkLmRhdGEuZW50aXR5LmlkfWA7IH0pXHJcbiAgICAgIC5hcHBlbmQoJ3VzZScpXHJcbiAgICAgIC5hdHRyKCd4bGluazpocmVmJywgKGQpID0+IGQubGVhZlVpZC5ocmVmKTtcclxuXHJcbiAgICBnLmFwcGVuZCgndGV4dCcpXHJcbiAgICAgIC5hdHRyKCdmb250LWZhbWlseScsICgpID0+IHtcclxuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmxhYmVsICYmIGZvbnRSZW5kZXJpbmcubGFiZWwuZmFtaWx5KSB7XHJcbiAgICAgICAgICByZXR1cm4gZm9udFJlbmRlcmluZy5sYWJlbC5mYW1pbHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnaW5oZXJpdCc7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hdHRyKCdmb250LXdlaWdodCcsICgpID0+IHtcclxuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcubGFiZWwgJiYgZm9udFJlbmRlcmluZy5sYWJlbC53ZWlnaHQpIHtcclxuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmxhYmVsLndlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICdpbmhlcml0JztcclxuICAgICAgfSlcclxuICAgICAgLnNlbGVjdEFsbCgndHNwYW4nKVxyXG4gICAgICAuZGF0YSgoZCkgPT4ge1xyXG4gICAgICAgIGlmIChkLnIgLyA0ID4gNC41KSB7XHJcbiAgICAgICAgICAvLyBzaG93IHRleHQgYW5kIG51bWJlciB0aHJlc2hob2xkXHJcbiAgICAgICAgICBsZXQgbGFiZWwgPSAoXHJcbiAgICAgICAgICAgIGQuZGF0YS5lbnRpdHkubGFiZWwuY2hhckF0KDApLnRvVXBwZXJDYXNlKClcclxuICAgICAgICAgICAgKyBkLmRhdGEuZW50aXR5LmxhYmVsLnNsaWNlKDEpXHJcbiAgICAgICAgICApLnNwbGl0KC8gKy9nKTtcclxuICAgICAgICAgIGlmIChsYWJlbC5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgIGxhYmVsID0gbGFiZWwuc2xpY2UoMCwgMyk7XHJcbiAgICAgICAgICAgIGxhYmVsWzJdICs9ICfigKYnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xyXG4gICAgICAgIH0gaWYgKGQuciAvIDQgPiAyLjUpIHtcclxuICAgICAgICAgIC8vIHNob3cgdGV4dCB0aHJlc2hob2xkXHJcbiAgICAgICAgICBsZXQgbGFiZWwgPSAoXHJcbiAgICAgICAgICAgIGQuZGF0YS5lbnRpdHkubGFiZWwuY2hhckF0KDApLnRvVXBwZXJDYXNlKClcclxuICAgICAgICAgICAgKyBkLmRhdGEuZW50aXR5LmxhYmVsLnNsaWNlKDEpXHJcbiAgICAgICAgICApLnNwbGl0KC8gKy9nKTtcclxuICAgICAgICAgIGlmIChsYWJlbC5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgIGxhYmVsID0gbGFiZWwuc2xpY2UoMCwgMyk7XHJcbiAgICAgICAgICAgIGxhYmVsWzJdICs9ICfigKYnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5qb2luKCd0c3BhbicpXHJcbiAgICAgIC5hdHRyKCd4JywgMClcclxuICAgICAgLmF0dHIoJ3knLCAoZCwgaSwgbm9kZXMpID0+IGAke2kgLSAobm9kZXMubGVuZ3RoICsgMSkgLyAyICsgMC45N31lbWApXHJcbiAgICAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJylcclxuICAgICAgLnRleHQoKGQpID0+IGQpXHJcbiAgICAgIC5hdHRyKCdmaWxsLW9wYWNpdHknLCAwKVxyXG4gICAgICAudHJhbnNpdGlvbih0KSAvLyBlbnRlcigpIHRyYW5zaXRpb24gb24gPHRzcGFuPlxyXG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMSk7XHJcblxyXG4gICAgZy5hcHBlbmQoJ3RleHQnKSAvLyBDb3VudCBsYWJlbFxyXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGFiZWwtY291bnQnKVxyXG4gICAgICAuYXR0cignZm9udC1mYW1pbHknLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGZvbnRSZW5kZXJpbmcgJiYgZm9udFJlbmRlcmluZy5jb3VudGVyICYmIGZvbnRSZW5kZXJpbmcuY291bnRlci5mYW1pbHkpIHtcclxuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmNvdW50ZXIuZmFtaWx5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJ2luaGVyaXQnO1xyXG4gICAgICB9KVxyXG4gICAgICAuYXR0cignZm9udC13ZWlnaHQnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGZvbnRSZW5kZXJpbmcgJiYgZm9udFJlbmRlcmluZy5jb3VudGVyICYmIGZvbnRSZW5kZXJpbmcuY291bnRlci53ZWlnaHQpIHtcclxuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmNvdW50ZXIud2VpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJ2luaGVyaXQnO1xyXG4gICAgICB9KVxyXG4gICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXHJcbiAgICAgIC50ZXh0KChkKSA9PiB7XHJcbiAgICAgICAgaWYgKGQuciAvIDQgPiAyLjUpIHtcclxuICAgICAgICAgIC8vIHNob3cgdGV4dCBhbmQgbnVtYmVyIHRocmVzaGhvbGRcclxuICAgICAgICAgIHJldHVybiBkLmRhdGEuY291bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgICAgfSlcclxuICAgICAgLmF0dHIoJ3knLCAoZCkgPT4ge1xyXG4gICAgICAgIGxldCBsYWJlbExlbmd0aCA9IGQuZGF0YS5lbnRpdHkubGFiZWwuc3BsaXQoLyArL2cpO1xyXG4gICAgICAgIGlmIChsYWJlbExlbmd0aC5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICBsYWJlbExlbmd0aCA9IGxhYmVsTGVuZ3RoLnNsaWNlKDAsIDMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYCR7bGFiZWxMZW5ndGgubGVuZ3RoIC0gKGxhYmVsTGVuZ3RoLmxlbmd0aCArIDEpIC8gMiArIDAuOTd9ZW1gO1xyXG4gICAgICB9KVxyXG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMClcclxuICAgICAgLnRyYW5zaXRpb24odCkgLy8gZW50ZXIoKSB0cmFuc2l0aW9uIG9uIDx0ZXh0PlxyXG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMSk7XHJcblxyXG4gICAgbGVhZlxyXG4gICAgICAuZXhpdCgpIC8vIEVYSVQgQ1lDTEVcclxuICAgICAgLnJlbW92ZSgpO1xyXG5cclxuICAgIGlmIChzZWxlY3RlZCkge1xyXG4gICAgICBnLmZpbHRlcigoZCkgPT4gc2VsZWN0ZWQuaW5jbHVkZXMoZC5sZWFmVWlkKSkgLy8gYXBwZW5kICdYJyBpY29uIC8vIG9ubHkgZm9yIHNlbGVjdGVkIGJ1YmJsZXNcclxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcclxuICAgICAgICAuYXR0cignZCcsIGNsb3NlSWNvblBhdGgpXHJcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2Nsb3NlLWljb24nKVxyXG4gICAgICAgIC5hdHRyKCdmaWxsJywgKGQpID0+IHtcclxuICAgICAgICAgIGlmIChkLnIgLyA0ID4gMi41KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnI2ZmZic7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGQuciAvIDQgPiAzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgc2NhbGUoLjA4KSB0cmFuc2xhdGUoMCwgJHtkLnIgKiAxMCAtIDgwfSlgO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuICdzY2FsZSguMDgpJztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVtaXQoJ2QzZW5kJywgZGF0YSk7IC8vIGNvbW11bmljYXRlIGVuZCBvZiBkcmF3XHJcbiAgfVxyXG59XHJcbiJdfQ==