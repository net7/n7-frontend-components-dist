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
MapComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MapComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MapComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.2", type: MapComponent, selector: "n7-map", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-map\">\r\n  <div class=\"n7-map__container\" [id]=\"data.containerId\"></div>\r\n</div>\r\n", directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MapComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-map', template: "<div *ngIf=\"data\" class=\"n7-map\">\r\n  <div class=\"n7-map__container\" [id]=\"data.containerId\"></div>\r\n</div>\r\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZHYtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL21hcC9tYXAudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvbWFwL21hcC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixTQUFTO0FBQ1QsNkJBQTZCO0FBQzdCLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUF1QixNQUFNLGVBQWUsQ0FBQzs7O0FBZ0V0RSxNQUFNLE9BQU8sWUFBWTtJQUp6QjtRQVNFLHVDQUF1QztRQUMvQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXhCLDZDQUE2QztRQUNyQyxnQkFBVyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNqQyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ2hDLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQztTQUMvQyxDQUFDLENBQUM7S0F1Q0o7SUFyQ0MseUNBQXlDO0lBRXpDLHFCQUFxQjtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDbEMseUJBQXlCO2dCQUN6QixNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0JBQzNDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDM0MseUNBQXlDO2dCQUN6QyxNQUFNLE9BQU8sR0FBRyxFQUFFLEdBQUcsS0FBSyxFQUFFLEdBQUcsS0FBSyxFQUFFLENBQUM7Z0JBQ3ZDLGVBQWU7Z0JBQ2YsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFDL0MsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzNGLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO29CQUNyQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDekQsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsb0JBQW9CO2dCQUNwQixvQ0FBb0M7Z0JBRXBDLHFCQUFxQjtnQkFDckIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDckIsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQkFDeEUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7d0JBQ2hDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNwRSxDQUFDLENBQUMsQ0FBQztvQkFDSCxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN0QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZTt3QkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDbkU7Z0JBRUQsMEJBQTBCO2dCQUMxQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtvQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxRCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7eUdBbERVLFlBQVk7NkZBQVosWUFBWSxzRkNuRXpCLDRIQUdBOzJGRGdFYSxZQUFZO2tCQUp4QixTQUFTOytCQUNFLFFBQVE7OEJBSVQsSUFBSTtzQkFBWixLQUFLO2dCQUVHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIE1BUC50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlckNvbnRlbnRDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRpbGVMYXllck9wdGlvbnMsIE1hcE9wdGlvbnMgfSBmcm9tICdsZWFmbGV0JztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIFRpbGVMYXllcidzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB1cmwgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgb3B0aW9ucyAocmVxdWlyZWQpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVMYXllckRhdGEge1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIG9wdGlvbnM6IFRpbGVMYXllck9wdGlvbnM7XHJcbn1cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgTWFya2VyJ3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGNvb3JkcyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSB0aXRsZSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB0ZW1wbGF0ZSAocmVxdWlyZWQpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlckRhdGEge1xyXG4gIGNvb3JkczogW251bWJlciwgbnVtYmVyXTtcclxuICB0aXRsZT86IHN0cmluZztcclxuICB0ZW1wbGF0ZTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBNYXBDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgY29udGFpbmVySWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgdGlsZUxheWVycyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBpbml0aWFsVmlldyAocmVxdWlyZWQpXHJcbiAqIC0gY2VudGVyIChyZXF1aXJlZClcclxuICogLSB6b29tIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IG1hcmtlcnMgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBNYXBEYXRhIHtcclxuICAvKiogSWQgb2YgdGhlIG1hcCBjb250YWluZXIgZWxlbWVudCAqL1xyXG4gIGNvbnRhaW5lcklkOiBzdHJpbmc7XHJcbiAgLyoqIExlYWZsZXQgbWFwIGxheWVycyAqL1xyXG4gIHRpbGVMYXllcnM6IFRpbGVMYXllckRhdGFbXTtcclxuICAvKiogTGVhZmxldCBtYXAgb3B0aW9ucyAqL1xyXG4gIGxpYk9wdGlvbnM/OiBNYXBPcHRpb25zO1xyXG4gIC8qKiBMZWFmbGV0IGNsdXN0ZXIgb3B0aW9ucyAqL1xyXG4gIGNsdXN0ZXJMaWJPcHRpb25zPzogYW55O1xyXG4gIC8qKiBDb29yZGluYXRlcyBvZiB0aGUgaW5pdGlhbCB2aWV3ICovXHJcbiAgaW5pdGlhbFZpZXc6IHtcclxuICAgIC8qKiBDb29yZGluYXRlcyB0dXBsZSAqL1xyXG4gICAgY2VudGVyOiBbbnVtYmVyLCBudW1iZXJdO1xyXG4gICAgLyoqIFpvb20gZGlzdGFuY2UgKi9cclxuICAgIHpvb206IG51bWJlcjtcclxuICB9O1xyXG4gIC8qKiBDb2xsZWN0aW9uIG9mIG1hcCBtYXJrZXJzICovXHJcbiAgbWFya2Vycz86IE1hcmtlckRhdGFbXTtcclxuICAvKiogU2V0cyB0aGUgbWFwIGluc3RhbmNlIHRvIHRoZSBnaXZlbiBwYXJhbWV0ZXIgKi9cclxuICBfc2V0SW5zdGFuY2U/OiAobWFwKSA9PiB2b2lkO1xyXG4gIC8qKiBTZXRzIHRoZSBtYXJrZXIgbGF5ZXIgdG8gdGhlIGdpdmVuIHBhcmFtZXRlciAqL1xyXG4gIF9zZXRNYXJrZXJMYXllcj86IChtYXJrZXJMYXllcikgPT4gdm9pZDtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1tYXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXAuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hcENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IE1hcERhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgLyoqIEtub3dzIGlmIHRoZSBjb21wb25lbnQgaXMgbG9hZGVkICovXHJcbiAgcHJpdmF0ZSBfbG9hZGVkID0gZmFsc2U7XHJcblxyXG4gIC8qKiBEeW5hbWljYWxseSBsb2FkIHJlcXVpcmVkIG5vZGUgbW9kdWxlcyAqL1xyXG4gIHByaXZhdGUgbG9hZE1vZHVsZXMgPSBhc3luYyAoKSA9PiAoe1xyXG4gICAgbGVhZmxldDogYXdhaXQgaW1wb3J0KCdsZWFmbGV0JyksXHJcbiAgICBjbHVzdGVyOiBhd2FpdCBpbXBvcnQoJ2xlYWZsZXQubWFya2VyY2x1c3RlcicpXHJcbiAgfSk7XHJcblxyXG4gIC8vIHByaXZhdGUgb25NYXBDbGljayA9IChlKSA9PiAoZS5sYXRsbmcpXHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kYXRhIHx8IHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xyXG4gICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRNb2R1bGVzKCkudGhlbigobW9kdWxlcykgPT4ge1xyXG4gICAgICAgIC8qKiBNb2R1bGUgZGVmaW5pdGlvbnMgKi9cclxuICAgICAgICBjb25zdCB7IGRlZmF1bHQ6IGxmbGV0IH0gPSBtb2R1bGVzLmxlYWZsZXQ7XHJcbiAgICAgICAgY29uc3QgeyBkZWZhdWx0OiBjbHN0ciB9ID0gbW9kdWxlcy5jbHVzdGVyO1xyXG4gICAgICAgIC8vIE1lcmdlIGNsdXN0ZXIgYW5kIGxlYWZsZXQgaW50byBsZWFmbGV0XHJcbiAgICAgICAgY29uc3QgbGVhZmxldCA9IHsgLi4ubGZsZXQsIC4uLmNsc3RyIH07XHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgbWFwXHJcbiAgICAgICAgY29uc3QgeyBjZW50ZXIsIHpvb20gfSA9IHRoaXMuZGF0YS5pbml0aWFsVmlldztcclxuICAgICAgICBjb25zdCBtYXAgPSBsZWFmbGV0Lm1hcCh0aGlzLmRhdGEuY29udGFpbmVySWQsIHRoaXMuZGF0YS5saWJPcHRpb25zKS5zZXRWaWV3KGNlbnRlciwgem9vbSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnRpbGVMYXllcnMuZm9yRWFjaCgobGF5ZXIpID0+IHtcclxuICAgICAgICAgIGxlYWZsZXQudGlsZUxheWVyKGxheWVyLnVybCwgbGF5ZXIub3B0aW9ucykuYWRkVG8obWFwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLyoqIEhhbmRsZSBldmVudHMgKi9cclxuICAgICAgICAvLyBtYXAub24oJ2NsaWNrJywgdGhpcy5vbk1hcENsaWNrKTtcclxuXHJcbiAgICAgICAgLyoqIEhhbmRsZSBtYXJrZXJzICovXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5tYXJrZXJzKSB7XHJcbiAgICAgICAgICBjb25zdCBtYXJrZXJzID0gbGVhZmxldC5tYXJrZXJDbHVzdGVyR3JvdXAodGhpcy5kYXRhLmNsdXN0ZXJMaWJPcHRpb25zKTtcclxuICAgICAgICAgIHRoaXMuZGF0YS5tYXJrZXJzLmZvckVhY2goKG1yaykgPT4ge1xyXG4gICAgICAgICAgICBsZWFmbGV0Lm1hcmtlcihtcmsuY29vcmRzKS5hZGRUbyhtYXJrZXJzKS5iaW5kUG9wdXAobXJrLnRlbXBsYXRlKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgbWFwLmFkZExheWVyKG1hcmtlcnMpO1xyXG4gICAgICAgICAgaWYgKHRoaXMuZGF0YS5fc2V0TWFya2VyTGF5ZXIpIHRoaXMuZGF0YS5fc2V0TWFya2VyTGF5ZXIobWFya2Vycyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBc3NpZ24gdGhlIG1hcCBpbnN0YW5jZVxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuX3NldEluc3RhbmNlKSB0aGlzLmRhdGEuX3NldEluc3RhbmNlKG1hcCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgKm5nSWY9XCJkYXRhXCIgY2xhc3M9XCJuNy1tYXBcIj5cclxuICA8ZGl2IGNsYXNzPVwibjctbWFwX19jb250YWluZXJcIiBbaWRdPVwiZGF0YS5jb250YWluZXJJZFwiPjwvZGl2PlxyXG48L2Rpdj5cclxuIl19