//---------------------------
// MAP.ts
//---------------------------
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class MapComponent {
    constructor() {
        /** Knows if the component is loaded */
        this._loaded = false;
        /** Dynamically load required node modules */
        this.loadModules = async () => ({
            leaflet: await import('leaflet'),
            cluster: await import('leaflet.markercluster'),
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
                const leaflet = { ...lflet, ...clstr };
                // Create a map
                const { center, zoom } = this.data.initialView;
                const map = leaflet
                    .map(this.data.containerId, this.data.libOptions)
                    .setView(center, zoom);
                this.data.tileLayers.forEach((layer) => {
                    leaflet.tileLayer(layer.url, layer.options).addTo(map);
                });
                /** Handle events */
                // map.on('click', this.onMapClick);
                /** Handle markers */
                if (this.data.markers) {
                    const markers = leaflet.markerClusterGroup(this.data.clusterLibOptions);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: MapComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: MapComponent, selector: "n7-map", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-map\">\n  <div class=\"n7-map__container\" [id]=\"data.containerId\"></div>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: MapComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-map', template: "<div *ngIf=\"data\" class=\"n7-map\">\n  <div class=\"n7-map__container\" [id]=\"data.containerId\"></div>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZHYtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL21hcC9tYXAudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvbWFwL21hcC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixTQUFTO0FBQ1QsNkJBQTZCO0FBQzdCLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUF1QixNQUFNLGVBQWUsQ0FBQzs7O0FBZ0V0RSxNQUFNLE9BQU8sWUFBWTtJQUp6QjtRQVNFLHVDQUF1QztRQUMvQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXhCLDZDQUE2QztRQUNyQyxnQkFBVyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNqQyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ2hDLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQztTQUMvQyxDQUFDLENBQUM7S0EyQ0o7SUF6Q0MseUNBQXlDO0lBRXpDLHFCQUFxQjtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDbEMseUJBQXlCO2dCQUN6QixNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0JBQzNDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDM0MseUNBQXlDO2dCQUN6QyxNQUFNLE9BQU8sR0FBRyxFQUFFLEdBQUcsS0FBSyxFQUFFLEdBQUcsS0FBSyxFQUFFLENBQUM7Z0JBQ3ZDLGVBQWU7Z0JBQ2YsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFDL0MsTUFBTSxHQUFHLEdBQUcsT0FBTztxQkFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO3FCQUNoRCxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDckMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pELENBQUMsQ0FBQyxDQUFDO2dCQUVILG9CQUFvQjtnQkFDcEIsb0NBQW9DO2dCQUVwQyxxQkFBcUI7Z0JBQ3JCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDdEIsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUM1QixDQUFDO29CQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO3dCQUNoQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDcEUsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDdEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWU7d0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3BFLENBQUM7Z0JBRUQsMEJBQTBCO2dCQUMxQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtvQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxRCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs4R0F0RFUsWUFBWTtrR0FBWixZQUFZLHNGQ25FekIsc0hBR0E7OzJGRGdFYSxZQUFZO2tCQUp4QixTQUFTOytCQUNFLFFBQVE7OEJBSVQsSUFBSTtzQkFBWixLQUFLO2dCQUVHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBNQVAudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlckNvbnRlbnRDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaWxlTGF5ZXJPcHRpb25zLCBNYXBPcHRpb25zIH0gZnJvbSAnbGVhZmxldCc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBUaWxlTGF5ZXIncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSB1cmwgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IG9wdGlvbnMgKHJlcXVpcmVkKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVMYXllckRhdGEge1xuICB1cmw6IHN0cmluZztcbiAgb3B0aW9uczogVGlsZUxheWVyT3B0aW9ucztcbn1cbi8qKlxuICogSW50ZXJmYWNlIGZvciBNYXJrZXIncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBjb29yZHMgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHRpdGxlIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB0ZW1wbGF0ZSAocmVxdWlyZWQpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWFya2VyRGF0YSB7XG4gIGNvb3JkczogW251bWJlciwgbnVtYmVyXTtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIHRlbXBsYXRlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBNYXBDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJJZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgdGlsZUxheWVycyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgaW5pdGlhbFZpZXcgKHJlcXVpcmVkKVxuICogLSBjZW50ZXIgKHJlcXVpcmVkKVxuICogLSB6b29tIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBtYXJrZXJzIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNYXBEYXRhIHtcbiAgLyoqIElkIG9mIHRoZSBtYXAgY29udGFpbmVyIGVsZW1lbnQgKi9cbiAgY29udGFpbmVySWQ6IHN0cmluZztcbiAgLyoqIExlYWZsZXQgbWFwIGxheWVycyAqL1xuICB0aWxlTGF5ZXJzOiBUaWxlTGF5ZXJEYXRhW107XG4gIC8qKiBMZWFmbGV0IG1hcCBvcHRpb25zICovXG4gIGxpYk9wdGlvbnM/OiBNYXBPcHRpb25zO1xuICAvKiogTGVhZmxldCBjbHVzdGVyIG9wdGlvbnMgKi9cbiAgY2x1c3RlckxpYk9wdGlvbnM/OiBhbnk7XG4gIC8qKiBDb29yZGluYXRlcyBvZiB0aGUgaW5pdGlhbCB2aWV3ICovXG4gIGluaXRpYWxWaWV3OiB7XG4gICAgLyoqIENvb3JkaW5hdGVzIHR1cGxlICovXG4gICAgY2VudGVyOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIC8qKiBab29tIGRpc3RhbmNlICovXG4gICAgem9vbTogbnVtYmVyO1xuICB9O1xuICAvKiogQ29sbGVjdGlvbiBvZiBtYXAgbWFya2VycyAqL1xuICBtYXJrZXJzPzogTWFya2VyRGF0YVtdO1xuICAvKiogU2V0cyB0aGUgbWFwIGluc3RhbmNlIHRvIHRoZSBnaXZlbiBwYXJhbWV0ZXIgKi9cbiAgX3NldEluc3RhbmNlPzogKG1hcCkgPT4gdm9pZDtcbiAgLyoqIFNldHMgdGhlIG1hcmtlciBsYXllciB0byB0aGUgZ2l2ZW4gcGFyYW1ldGVyICovXG4gIF9zZXRNYXJrZXJMYXllcj86IChtYXJrZXJMYXllcikgPT4gdm9pZDtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctbWFwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hcC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTWFwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG4gIEBJbnB1dCgpIGRhdGE6IE1hcERhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIC8qKiBLbm93cyBpZiB0aGUgY29tcG9uZW50IGlzIGxvYWRlZCAqL1xuICBwcml2YXRlIF9sb2FkZWQgPSBmYWxzZTtcblxuICAvKiogRHluYW1pY2FsbHkgbG9hZCByZXF1aXJlZCBub2RlIG1vZHVsZXMgKi9cbiAgcHJpdmF0ZSBsb2FkTW9kdWxlcyA9IGFzeW5jICgpID0+ICh7XG4gICAgbGVhZmxldDogYXdhaXQgaW1wb3J0KCdsZWFmbGV0JyksXG4gICAgY2x1c3RlcjogYXdhaXQgaW1wb3J0KCdsZWFmbGV0Lm1hcmtlcmNsdXN0ZXInKSxcbiAgfSk7XG5cbiAgLy8gcHJpdmF0ZSBvbk1hcENsaWNrID0gKGUpID0+IChlLmxhdGxuZylcblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRhdGEgfHwgdGhpcy5fbG9hZGVkKSByZXR1cm47XG4gICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubG9hZE1vZHVsZXMoKS50aGVuKChtb2R1bGVzKSA9PiB7XG4gICAgICAgIC8qKiBNb2R1bGUgZGVmaW5pdGlvbnMgKi9cbiAgICAgICAgY29uc3QgeyBkZWZhdWx0OiBsZmxldCB9ID0gbW9kdWxlcy5sZWFmbGV0O1xuICAgICAgICBjb25zdCB7IGRlZmF1bHQ6IGNsc3RyIH0gPSBtb2R1bGVzLmNsdXN0ZXI7XG4gICAgICAgIC8vIE1lcmdlIGNsdXN0ZXIgYW5kIGxlYWZsZXQgaW50byBsZWFmbGV0XG4gICAgICAgIGNvbnN0IGxlYWZsZXQgPSB7IC4uLmxmbGV0LCAuLi5jbHN0ciB9O1xuICAgICAgICAvLyBDcmVhdGUgYSBtYXBcbiAgICAgICAgY29uc3QgeyBjZW50ZXIsIHpvb20gfSA9IHRoaXMuZGF0YS5pbml0aWFsVmlldztcbiAgICAgICAgY29uc3QgbWFwID0gbGVhZmxldFxuICAgICAgICAgIC5tYXAodGhpcy5kYXRhLmNvbnRhaW5lcklkLCB0aGlzLmRhdGEubGliT3B0aW9ucylcbiAgICAgICAgICAuc2V0VmlldyhjZW50ZXIsIHpvb20pO1xuICAgICAgICB0aGlzLmRhdGEudGlsZUxheWVycy5mb3JFYWNoKChsYXllcikgPT4ge1xuICAgICAgICAgIGxlYWZsZXQudGlsZUxheWVyKGxheWVyLnVybCwgbGF5ZXIub3B0aW9ucykuYWRkVG8obWFwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyoqIEhhbmRsZSBldmVudHMgKi9cbiAgICAgICAgLy8gbWFwLm9uKCdjbGljaycsIHRoaXMub25NYXBDbGljayk7XG5cbiAgICAgICAgLyoqIEhhbmRsZSBtYXJrZXJzICovXG4gICAgICAgIGlmICh0aGlzLmRhdGEubWFya2Vycykge1xuICAgICAgICAgIGNvbnN0IG1hcmtlcnMgPSBsZWFmbGV0Lm1hcmtlckNsdXN0ZXJHcm91cChcbiAgICAgICAgICAgIHRoaXMuZGF0YS5jbHVzdGVyTGliT3B0aW9uc1xuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5kYXRhLm1hcmtlcnMuZm9yRWFjaCgobXJrKSA9PiB7XG4gICAgICAgICAgICBsZWFmbGV0Lm1hcmtlcihtcmsuY29vcmRzKS5hZGRUbyhtYXJrZXJzKS5iaW5kUG9wdXAobXJrLnRlbXBsYXRlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBtYXAuYWRkTGF5ZXIobWFya2Vycyk7XG4gICAgICAgICAgaWYgKHRoaXMuZGF0YS5fc2V0TWFya2VyTGF5ZXIpIHRoaXMuZGF0YS5fc2V0TWFya2VyTGF5ZXIobWFya2Vycyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBc3NpZ24gdGhlIG1hcCBpbnN0YW5jZVxuICAgICAgICBpZiAodGhpcy5kYXRhLl9zZXRJbnN0YW5jZSkgdGhpcy5kYXRhLl9zZXRJbnN0YW5jZShtYXApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIjxkaXYgKm5nSWY9XCJkYXRhXCIgY2xhc3M9XCJuNy1tYXBcIj5cbiAgPGRpdiBjbGFzcz1cIm43LW1hcF9fY29udGFpbmVyXCIgW2lkXT1cImRhdGEuY29udGFpbmVySWRcIj48L2Rpdj5cbjwvZGl2PlxuIl19