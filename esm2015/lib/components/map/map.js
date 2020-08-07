//---------------------------
// MAP.ts
//---------------------------
import { __awaiter, __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let MapComponent = class MapComponent {
    constructor() {
        /** Knows if the component is loaded */
        this._loaded = false;
        /** Dynamically load required node modules */
        this.loadModules = () => __awaiter(this, void 0, void 0, function* () {
            return ({
                leaflet: yield import('leaflet'),
                cluster: yield import('leaflet.markercluster')
            });
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
                const leaflet = Object.assign(Object.assign({}, lflet), clstr);
                // Create a map
                const { center, zoom } = this.data.initialView;
                const map = leaflet.map(this.data.containerId).setView(center, zoom);
                this.data.tileLayers.forEach((layer) => {
                    leaflet.tileLayer(layer.url, layer.options).addTo(map);
                });
                /** Handle events */
                // map.on('click', this.onMapClick);
                /** Handle markers */
                if (this.data.markers) {
                    const markers = leaflet.markerClusterGroup();
                    this.data.markers.forEach((mrk) => {
                        leaflet.marker(mrk.coords).addTo(markers).bindPopup(mrk.template);
                    });
                    map.addLayer(markers);
                }
                // Assign the map instance
                if (this.data._setInstance)
                    this.data._setInstance(map);
            });
        });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], MapComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MapComponent.prototype, "emit", void 0);
MapComponent = __decorate([
    Component({
        selector: 'n7-map',
        template: "<div *ngIf=\"data\" class=\"n7-map\">\n  <div class=\"n7-map__container\" [id]=\"data.containerId\"></div>\n</div>\n"
    })
], MapComponent);
export { MapComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9tYXAvbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixTQUFTO0FBQ1QsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUEyRHRFLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFBekI7UUFLRSx1Q0FBdUM7UUFDL0IsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUV4Qiw2Q0FBNkM7UUFDckMsZ0JBQVcsR0FBRyxHQUFTLEVBQUU7WUFBQyxPQUFBLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQyxTQUFTLENBQUM7Z0JBQ2hDLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQzthQUMvQyxDQUFDLENBQUE7VUFBQSxDQUFBO0lBc0NKLENBQUM7SUFwQ0MseUNBQXlDO0lBRXpDLHFCQUFxQjtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDbEMseUJBQXlCO2dCQUN6QixNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0JBQzNDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDM0MseUNBQXlDO2dCQUN6QyxNQUFNLE9BQU8sbUNBQVEsS0FBSyxHQUFLLEtBQUssQ0FBRSxDQUFDO2dCQUN2QyxlQUFlO2dCQUNmLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQy9DLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDckMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pELENBQUMsQ0FBQyxDQUFDO2dCQUVILG9CQUFvQjtnQkFDcEIsb0NBQW9DO2dCQUVwQyxxQkFBcUI7Z0JBQ3JCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ3JCLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO29CQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTt3QkFDaEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3BFLENBQUMsQ0FBQyxDQUFDO29CQUNILEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3ZCO2dCQUVELDBCQUEwQjtnQkFDMUIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7b0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBO0FBakRVO0lBQVIsS0FBSyxFQUFFOzswQ0FBZTtBQUVkO0lBQVIsS0FBSyxFQUFFOzswQ0FBVztBQUhSLFlBQVk7SUFKeEIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsZ0lBQXlCO0tBQzFCLENBQUM7R0FDVyxZQUFZLENBa0R4QjtTQWxEWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE1BUC50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR3JpZExheWVyT3B0aW9ucyB9IGZyb20gJ2xlYWZsZXQnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgVGlsZUxheWVyJ3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgdXJsIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBvcHRpb25zIChyZXF1aXJlZClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUaWxlTGF5ZXJEYXRhIHtcbiAgdXJsOiBzdHJpbmc7XG4gIG9wdGlvbnM6IEdyaWRMYXllck9wdGlvbnM7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBNYXJrZXIncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBjb29yZHMgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHRpdGxlIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB0ZW1wbGF0ZSAocmVxdWlyZWQpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWFya2VyRGF0YSB7XG4gIGNvb3JkczogW251bWJlciwgbnVtYmVyXTtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIHRlbXBsYXRlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBNYXBDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJJZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgdGlsZUxheWVycyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgaW5pdGlhbFZpZXcgKHJlcXVpcmVkKVxuICogLSBjZW50ZXIgKHJlcXVpcmVkKVxuICogLSB6b29tIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBtYXJrZXJzIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNYXBEYXRhIHtcbiAgLyoqIElkIG9mIHRoZSBtYXAgY29udGFpbmVyIGVsZW1lbnQgKi9cbiAgY29udGFpbmVySWQ6IHN0cmluZztcbiAgLyoqIExlYWZsZXQgbWFwIGxheWVycyAqL1xuICB0aWxlTGF5ZXJzOiBUaWxlTGF5ZXJEYXRhW107XG4gIC8qKiBDb29yZGluYXRlcyBvZiB0aGUgaW5pdGlhbCB2aWV3ICovXG4gIGluaXRpYWxWaWV3OiB7XG4gICAgLyoqIENvb3JkaW5hdGVzIHR1cGxlICovXG4gICAgY2VudGVyOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIC8qKiBab29tIGRpc3RhbmNlICovXG4gICAgem9vbTogbnVtYmVyO1xuICB9O1xuICAvKiogQ29sbGVjdGlvbiBvZiBtYXAgbWFya2VycyAqL1xuICBtYXJrZXJzPzogTWFya2VyRGF0YVtdO1xuICAvKiogU2V0cyB0aGUgbWFwIGluc3RhbmNlIHRvIHRoZSBnaXZlbiBwYXJhbWV0ZXIgKi9cbiAgX3NldEluc3RhbmNlPzogRnVuY3Rpb247XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LW1hcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXAuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTWFwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG4gIEBJbnB1dCgpIGRhdGE6IE1hcERhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIC8qKiBLbm93cyBpZiB0aGUgY29tcG9uZW50IGlzIGxvYWRlZCAqL1xuICBwcml2YXRlIF9sb2FkZWQgPSBmYWxzZTtcblxuICAvKiogRHluYW1pY2FsbHkgbG9hZCByZXF1aXJlZCBub2RlIG1vZHVsZXMgKi9cbiAgcHJpdmF0ZSBsb2FkTW9kdWxlcyA9IGFzeW5jICgpID0+ICh7XG4gICAgbGVhZmxldDogYXdhaXQgaW1wb3J0KCdsZWFmbGV0JyksXG4gICAgY2x1c3RlcjogYXdhaXQgaW1wb3J0KCdsZWFmbGV0Lm1hcmtlcmNsdXN0ZXInKVxuICB9KVxuXG4gIC8vIHByaXZhdGUgb25NYXBDbGljayA9IChlKSA9PiAoZS5sYXRsbmcpXG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kYXRhIHx8IHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xuICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRNb2R1bGVzKCkudGhlbigobW9kdWxlcykgPT4ge1xuICAgICAgICAvKiogTW9kdWxlIGRlZmluaXRpb25zICovXG4gICAgICAgIGNvbnN0IHsgZGVmYXVsdDogbGZsZXQgfSA9IG1vZHVsZXMubGVhZmxldDtcbiAgICAgICAgY29uc3QgeyBkZWZhdWx0OiBjbHN0ciB9ID0gbW9kdWxlcy5jbHVzdGVyO1xuICAgICAgICAvLyBNZXJnZSBjbHVzdGVyIGFuZCBsZWFmbGV0IGludG8gbGVhZmxldFxuICAgICAgICBjb25zdCBsZWFmbGV0ID0geyAuLi5sZmxldCwgLi4uY2xzdHIgfTtcbiAgICAgICAgLy8gQ3JlYXRlIGEgbWFwXG4gICAgICAgIGNvbnN0IHsgY2VudGVyLCB6b29tIH0gPSB0aGlzLmRhdGEuaW5pdGlhbFZpZXc7XG4gICAgICAgIGNvbnN0IG1hcCA9IGxlYWZsZXQubWFwKHRoaXMuZGF0YS5jb250YWluZXJJZCkuc2V0VmlldyhjZW50ZXIsIHpvb20pO1xuICAgICAgICB0aGlzLmRhdGEudGlsZUxheWVycy5mb3JFYWNoKChsYXllcikgPT4ge1xuICAgICAgICAgIGxlYWZsZXQudGlsZUxheWVyKGxheWVyLnVybCwgbGF5ZXIub3B0aW9ucykuYWRkVG8obWFwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyoqIEhhbmRsZSBldmVudHMgKi9cbiAgICAgICAgLy8gbWFwLm9uKCdjbGljaycsIHRoaXMub25NYXBDbGljayk7XG5cbiAgICAgICAgLyoqIEhhbmRsZSBtYXJrZXJzICovXG4gICAgICAgIGlmICh0aGlzLmRhdGEubWFya2Vycykge1xuICAgICAgICAgIGNvbnN0IG1hcmtlcnMgPSBsZWFmbGV0Lm1hcmtlckNsdXN0ZXJHcm91cCgpO1xuICAgICAgICAgIHRoaXMuZGF0YS5tYXJrZXJzLmZvckVhY2goKG1yaykgPT4ge1xuICAgICAgICAgICAgbGVhZmxldC5tYXJrZXIobXJrLmNvb3JkcykuYWRkVG8obWFya2VycykuYmluZFBvcHVwKG1yay50ZW1wbGF0ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbWFwLmFkZExheWVyKG1hcmtlcnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXNzaWduIHRoZSBtYXAgaW5zdGFuY2VcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5fc2V0SW5zdGFuY2UpIHRoaXMuZGF0YS5fc2V0SW5zdGFuY2UobWFwKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=