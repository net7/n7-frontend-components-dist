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
            cluster: await import('leaflet.markercluster')
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
                const map = leaflet.map(this.data.containerId, this.data.libOptions).setView(center, zoom);
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
}
MapComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: MapComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MapComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: MapComponent, selector: "n7-map", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-map\">\n  <div class=\"n7-map__container\" [id]=\"data.containerId\"></div>\n</div>\n", directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: MapComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-map', template: "<div *ngIf=\"data\" class=\"n7-map\">\n  <div class=\"n7-map__container\" [id]=\"data.containerId\"></div>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZHYtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL21hcC9tYXAudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvbWFwL21hcC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixTQUFTO0FBQ1QsNkJBQTZCO0FBRTdCLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUF1QixNQUFNLGVBQWUsQ0FBQzs7O0FBaUV0RSxNQUFNLE9BQU8sWUFBWTtJQUp6QjtRQVNFLHVDQUF1QztRQUMvQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXhCLDZDQUE2QztRQUNyQyxnQkFBVyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNqQyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ2hDLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQztTQUMvQyxDQUFDLENBQUE7S0F1Q0g7SUFyQ0MseUNBQXlDO0lBRXpDLHFCQUFxQjtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDbEMseUJBQXlCO2dCQUN6QixNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0JBQzNDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDM0MseUNBQXlDO2dCQUN6QyxNQUFNLE9BQU8sR0FBRyxFQUFFLEdBQUcsS0FBSyxFQUFFLEdBQUcsS0FBSyxFQUFFLENBQUM7Z0JBQ3ZDLGVBQWU7Z0JBQ2YsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFDL0MsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzNGLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO29CQUNyQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDekQsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsb0JBQW9CO2dCQUNwQixvQ0FBb0M7Z0JBRXBDLHFCQUFxQjtnQkFDckIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDckIsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQkFDeEUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7d0JBQ2hDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNwRSxDQUFDLENBQUMsQ0FBQztvQkFDSCxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN0QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZTt3QkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDbkU7Z0JBRUQsMEJBQTBCO2dCQUMxQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtvQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxRCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7eUdBbERVLFlBQVk7NkZBQVosWUFBWSxzRkNyRXpCLHNIQUdBOzJGRGtFYSxZQUFZO2tCQUp4QixTQUFTOytCQUNFLFFBQVE7OEJBSVQsSUFBSTtzQkFBWixLQUFLO2dCQUVHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBNQVAudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRpbGVMYXllck9wdGlvbnMsIE1hcE9wdGlvbnMgfSBmcm9tICdsZWFmbGV0JztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFRpbGVMYXllcidzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IHVybCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgb3B0aW9ucyAocmVxdWlyZWQpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGlsZUxheWVyRGF0YSB7XG4gIHVybDogc3RyaW5nO1xuICBvcHRpb25zOiBUaWxlTGF5ZXJPcHRpb25zO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgTWFya2VyJ3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgY29vcmRzIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSB0aXRsZSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdGVtcGxhdGUgKHJlcXVpcmVkKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlckRhdGEge1xuICBjb29yZHM6IFtudW1iZXIsIG51bWJlcl07XG4gIHRpdGxlPzogc3RyaW5nO1xuICB0ZW1wbGF0ZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgTWFwQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgY29udGFpbmVySWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHRpbGVMYXllcnMgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGluaXRpYWxWaWV3IChyZXF1aXJlZClcbiAqIC0gY2VudGVyIChyZXF1aXJlZClcbiAqIC0gem9vbSAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgbWFya2VycyAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWFwRGF0YSB7XG4gIC8qKiBJZCBvZiB0aGUgbWFwIGNvbnRhaW5lciBlbGVtZW50ICovXG4gIGNvbnRhaW5lcklkOiBzdHJpbmc7XG4gIC8qKiBMZWFmbGV0IG1hcCBsYXllcnMgKi9cbiAgdGlsZUxheWVyczogVGlsZUxheWVyRGF0YVtdO1xuICAvKiogTGVhZmxldCBtYXAgb3B0aW9ucyAqL1xuICBsaWJPcHRpb25zPzogTWFwT3B0aW9ucztcbiAgLyoqIExlYWZsZXQgY2x1c3RlciBvcHRpb25zICovXG4gIGNsdXN0ZXJMaWJPcHRpb25zPzogYW55O1xuICAvKiogQ29vcmRpbmF0ZXMgb2YgdGhlIGluaXRpYWwgdmlldyAqL1xuICBpbml0aWFsVmlldzoge1xuICAgIC8qKiBDb29yZGluYXRlcyB0dXBsZSAqL1xuICAgIGNlbnRlcjogW251bWJlciwgbnVtYmVyXTtcbiAgICAvKiogWm9vbSBkaXN0YW5jZSAqL1xuICAgIHpvb206IG51bWJlcjtcbiAgfTtcbiAgLyoqIENvbGxlY3Rpb24gb2YgbWFwIG1hcmtlcnMgKi9cbiAgbWFya2Vycz86IE1hcmtlckRhdGFbXTtcbiAgLyoqIFNldHMgdGhlIG1hcCBpbnN0YW5jZSB0byB0aGUgZ2l2ZW4gcGFyYW1ldGVyICovXG4gIF9zZXRJbnN0YW5jZT86IEZ1bmN0aW9uO1xuICAvKiogU2V0cyB0aGUgbWFya2VyIGxheWVyIHRvIHRoZSBnaXZlbiBwYXJhbWV0ZXIgKi9cbiAgX3NldE1hcmtlckxheWVyPzogRnVuY3Rpb247XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LW1hcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXAuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTWFwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG4gIEBJbnB1dCgpIGRhdGE6IE1hcERhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIC8qKiBLbm93cyBpZiB0aGUgY29tcG9uZW50IGlzIGxvYWRlZCAqL1xuICBwcml2YXRlIF9sb2FkZWQgPSBmYWxzZTtcblxuICAvKiogRHluYW1pY2FsbHkgbG9hZCByZXF1aXJlZCBub2RlIG1vZHVsZXMgKi9cbiAgcHJpdmF0ZSBsb2FkTW9kdWxlcyA9IGFzeW5jICgpID0+ICh7XG4gICAgbGVhZmxldDogYXdhaXQgaW1wb3J0KCdsZWFmbGV0JyksXG4gICAgY2x1c3RlcjogYXdhaXQgaW1wb3J0KCdsZWFmbGV0Lm1hcmtlcmNsdXN0ZXInKVxuICB9KVxuXG4gIC8vIHByaXZhdGUgb25NYXBDbGljayA9IChlKSA9PiAoZS5sYXRsbmcpXG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kYXRhIHx8IHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xuICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRNb2R1bGVzKCkudGhlbigobW9kdWxlcykgPT4ge1xuICAgICAgICAvKiogTW9kdWxlIGRlZmluaXRpb25zICovXG4gICAgICAgIGNvbnN0IHsgZGVmYXVsdDogbGZsZXQgfSA9IG1vZHVsZXMubGVhZmxldDtcbiAgICAgICAgY29uc3QgeyBkZWZhdWx0OiBjbHN0ciB9ID0gbW9kdWxlcy5jbHVzdGVyO1xuICAgICAgICAvLyBNZXJnZSBjbHVzdGVyIGFuZCBsZWFmbGV0IGludG8gbGVhZmxldFxuICAgICAgICBjb25zdCBsZWFmbGV0ID0geyAuLi5sZmxldCwgLi4uY2xzdHIgfTtcbiAgICAgICAgLy8gQ3JlYXRlIGEgbWFwXG4gICAgICAgIGNvbnN0IHsgY2VudGVyLCB6b29tIH0gPSB0aGlzLmRhdGEuaW5pdGlhbFZpZXc7XG4gICAgICAgIGNvbnN0IG1hcCA9IGxlYWZsZXQubWFwKHRoaXMuZGF0YS5jb250YWluZXJJZCwgdGhpcy5kYXRhLmxpYk9wdGlvbnMpLnNldFZpZXcoY2VudGVyLCB6b29tKTtcbiAgICAgICAgdGhpcy5kYXRhLnRpbGVMYXllcnMuZm9yRWFjaCgobGF5ZXIpID0+IHtcbiAgICAgICAgICBsZWFmbGV0LnRpbGVMYXllcihsYXllci51cmwsIGxheWVyLm9wdGlvbnMpLmFkZFRvKG1hcCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qKiBIYW5kbGUgZXZlbnRzICovXG4gICAgICAgIC8vIG1hcC5vbignY2xpY2snLCB0aGlzLm9uTWFwQ2xpY2spO1xuXG4gICAgICAgIC8qKiBIYW5kbGUgbWFya2VycyAqL1xuICAgICAgICBpZiAodGhpcy5kYXRhLm1hcmtlcnMpIHtcbiAgICAgICAgICBjb25zdCBtYXJrZXJzID0gbGVhZmxldC5tYXJrZXJDbHVzdGVyR3JvdXAodGhpcy5kYXRhLmNsdXN0ZXJMaWJPcHRpb25zKTtcbiAgICAgICAgICB0aGlzLmRhdGEubWFya2Vycy5mb3JFYWNoKChtcmspID0+IHtcbiAgICAgICAgICAgIGxlYWZsZXQubWFya2VyKG1yay5jb29yZHMpLmFkZFRvKG1hcmtlcnMpLmJpbmRQb3B1cChtcmsudGVtcGxhdGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIG1hcC5hZGRMYXllcihtYXJrZXJzKTtcbiAgICAgICAgICBpZiAodGhpcy5kYXRhLl9zZXRNYXJrZXJMYXllcikgdGhpcy5kYXRhLl9zZXRNYXJrZXJMYXllcihtYXJrZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFzc2lnbiB0aGUgbWFwIGluc3RhbmNlXG4gICAgICAgIGlmICh0aGlzLmRhdGEuX3NldEluc3RhbmNlKSB0aGlzLmRhdGEuX3NldEluc3RhbmNlKG1hcCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiPGRpdiAqbmdJZj1cImRhdGFcIiBjbGFzcz1cIm43LW1hcFwiPlxuICA8ZGl2IGNsYXNzPVwibjctbWFwX19jb250YWluZXJcIiBbaWRdPVwiZGF0YS5jb250YWluZXJJZFwiPjwvZGl2PlxuPC9kaXY+XG4iXX0=