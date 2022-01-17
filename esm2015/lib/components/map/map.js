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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9tYXAvbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixTQUFTO0FBQ1QsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFpRXRFLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFBekI7UUFLRSx1Q0FBdUM7UUFDL0IsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUV4Qiw2Q0FBNkM7UUFDckMsZ0JBQVcsR0FBRyxHQUFTLEVBQUU7WUFBQyxPQUFBLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQyxTQUFTLENBQUM7Z0JBQ2hDLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQzthQUMvQyxDQUFDLENBQUE7VUFBQSxDQUFBO0lBdUNKLENBQUM7SUFyQ0MseUNBQXlDO0lBRXpDLHFCQUFxQjtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDbEMseUJBQXlCO2dCQUN6QixNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0JBQzNDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDM0MseUNBQXlDO2dCQUN6QyxNQUFNLE9BQU8sbUNBQVEsS0FBSyxHQUFLLEtBQUssQ0FBRSxDQUFDO2dCQUN2QyxlQUFlO2dCQUNmLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQy9DLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMzRixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDckMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pELENBQUMsQ0FBQyxDQUFDO2dCQUVILG9CQUFvQjtnQkFDcEIsb0NBQW9DO2dCQUVwQyxxQkFBcUI7Z0JBQ3JCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ3JCLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBQ3hFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO3dCQUNoQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDcEUsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDdEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWU7d0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ25FO2dCQUVELDBCQUEwQjtnQkFDMUIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7b0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBO0FBbERVO0lBQVIsS0FBSyxFQUFFOzswQ0FBZTtBQUVkO0lBQVIsS0FBSyxFQUFFOzswQ0FBVztBQUhSLFlBQVk7SUFKeEIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsZ0lBQXlCO0tBQzFCLENBQUM7R0FDVyxZQUFZLENBbUR4QjtTQW5EWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE1BUC50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGlsZUxheWVyT3B0aW9ucywgTWFwT3B0aW9ucyB9IGZyb20gJ2xlYWZsZXQnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgVGlsZUxheWVyJ3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgdXJsIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBvcHRpb25zIChyZXF1aXJlZClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUaWxlTGF5ZXJEYXRhIHtcbiAgdXJsOiBzdHJpbmc7XG4gIG9wdGlvbnM6IFRpbGVMYXllck9wdGlvbnM7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBNYXJrZXIncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBjb29yZHMgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHRpdGxlIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB0ZW1wbGF0ZSAocmVxdWlyZWQpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWFya2VyRGF0YSB7XG4gIGNvb3JkczogW251bWJlciwgbnVtYmVyXTtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIHRlbXBsYXRlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBNYXBDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJJZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgdGlsZUxheWVycyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgaW5pdGlhbFZpZXcgKHJlcXVpcmVkKVxuICogLSBjZW50ZXIgKHJlcXVpcmVkKVxuICogLSB6b29tIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBtYXJrZXJzIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNYXBEYXRhIHtcbiAgLyoqIElkIG9mIHRoZSBtYXAgY29udGFpbmVyIGVsZW1lbnQgKi9cbiAgY29udGFpbmVySWQ6IHN0cmluZztcbiAgLyoqIExlYWZsZXQgbWFwIGxheWVycyAqL1xuICB0aWxlTGF5ZXJzOiBUaWxlTGF5ZXJEYXRhW107XG4gIC8qKiBMZWFmbGV0IG1hcCBvcHRpb25zICovXG4gIGxpYk9wdGlvbnM/OiBNYXBPcHRpb25zO1xuICAvKiogTGVhZmxldCBjbHVzdGVyIG9wdGlvbnMgKi9cbiAgY2x1c3RlckxpYk9wdGlvbnM/OiBhbnk7XG4gIC8qKiBDb29yZGluYXRlcyBvZiB0aGUgaW5pdGlhbCB2aWV3ICovXG4gIGluaXRpYWxWaWV3OiB7XG4gICAgLyoqIENvb3JkaW5hdGVzIHR1cGxlICovXG4gICAgY2VudGVyOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIC8qKiBab29tIGRpc3RhbmNlICovXG4gICAgem9vbTogbnVtYmVyO1xuICB9O1xuICAvKiogQ29sbGVjdGlvbiBvZiBtYXAgbWFya2VycyAqL1xuICBtYXJrZXJzPzogTWFya2VyRGF0YVtdO1xuICAvKiogU2V0cyB0aGUgbWFwIGluc3RhbmNlIHRvIHRoZSBnaXZlbiBwYXJhbWV0ZXIgKi9cbiAgX3NldEluc3RhbmNlPzogRnVuY3Rpb247XG4gIC8qKiBTZXRzIHRoZSBtYXJrZXIgbGF5ZXIgdG8gdGhlIGdpdmVuIHBhcmFtZXRlciAqL1xuICBfc2V0TWFya2VyTGF5ZXI/OiBGdW5jdGlvbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctbWFwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hcC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBNYXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcbiAgQElucHV0KCkgZGF0YTogTWFwRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgLyoqIEtub3dzIGlmIHRoZSBjb21wb25lbnQgaXMgbG9hZGVkICovXG4gIHByaXZhdGUgX2xvYWRlZCA9IGZhbHNlO1xuXG4gIC8qKiBEeW5hbWljYWxseSBsb2FkIHJlcXVpcmVkIG5vZGUgbW9kdWxlcyAqL1xuICBwcml2YXRlIGxvYWRNb2R1bGVzID0gYXN5bmMgKCkgPT4gKHtcbiAgICBsZWFmbGV0OiBhd2FpdCBpbXBvcnQoJ2xlYWZsZXQnKSxcbiAgICBjbHVzdGVyOiBhd2FpdCBpbXBvcnQoJ2xlYWZsZXQubWFya2VyY2x1c3RlcicpXG4gIH0pXG5cbiAgLy8gcHJpdmF0ZSBvbk1hcENsaWNrID0gKGUpID0+IChlLmxhdGxuZylcblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRhdGEgfHwgdGhpcy5fbG9hZGVkKSByZXR1cm47XG4gICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubG9hZE1vZHVsZXMoKS50aGVuKChtb2R1bGVzKSA9PiB7XG4gICAgICAgIC8qKiBNb2R1bGUgZGVmaW5pdGlvbnMgKi9cbiAgICAgICAgY29uc3QgeyBkZWZhdWx0OiBsZmxldCB9ID0gbW9kdWxlcy5sZWFmbGV0O1xuICAgICAgICBjb25zdCB7IGRlZmF1bHQ6IGNsc3RyIH0gPSBtb2R1bGVzLmNsdXN0ZXI7XG4gICAgICAgIC8vIE1lcmdlIGNsdXN0ZXIgYW5kIGxlYWZsZXQgaW50byBsZWFmbGV0XG4gICAgICAgIGNvbnN0IGxlYWZsZXQgPSB7IC4uLmxmbGV0LCAuLi5jbHN0ciB9O1xuICAgICAgICAvLyBDcmVhdGUgYSBtYXBcbiAgICAgICAgY29uc3QgeyBjZW50ZXIsIHpvb20gfSA9IHRoaXMuZGF0YS5pbml0aWFsVmlldztcbiAgICAgICAgY29uc3QgbWFwID0gbGVhZmxldC5tYXAodGhpcy5kYXRhLmNvbnRhaW5lcklkLCB0aGlzLmRhdGEubGliT3B0aW9ucykuc2V0VmlldyhjZW50ZXIsIHpvb20pO1xuICAgICAgICB0aGlzLmRhdGEudGlsZUxheWVycy5mb3JFYWNoKChsYXllcikgPT4ge1xuICAgICAgICAgIGxlYWZsZXQudGlsZUxheWVyKGxheWVyLnVybCwgbGF5ZXIub3B0aW9ucykuYWRkVG8obWFwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyoqIEhhbmRsZSBldmVudHMgKi9cbiAgICAgICAgLy8gbWFwLm9uKCdjbGljaycsIHRoaXMub25NYXBDbGljayk7XG5cbiAgICAgICAgLyoqIEhhbmRsZSBtYXJrZXJzICovXG4gICAgICAgIGlmICh0aGlzLmRhdGEubWFya2Vycykge1xuICAgICAgICAgIGNvbnN0IG1hcmtlcnMgPSBsZWFmbGV0Lm1hcmtlckNsdXN0ZXJHcm91cCh0aGlzLmRhdGEuY2x1c3RlckxpYk9wdGlvbnMpO1xuICAgICAgICAgIHRoaXMuZGF0YS5tYXJrZXJzLmZvckVhY2goKG1yaykgPT4ge1xuICAgICAgICAgICAgbGVhZmxldC5tYXJrZXIobXJrLmNvb3JkcykuYWRkVG8obWFya2VycykuYmluZFBvcHVwKG1yay50ZW1wbGF0ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbWFwLmFkZExheWVyKG1hcmtlcnMpO1xuICAgICAgICAgIGlmICh0aGlzLmRhdGEuX3NldE1hcmtlckxheWVyKSB0aGlzLmRhdGEuX3NldE1hcmtlckxheWVyKG1hcmtlcnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXNzaWduIHRoZSBtYXAgaW5zdGFuY2VcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5fc2V0SW5zdGFuY2UpIHRoaXMuZGF0YS5fc2V0SW5zdGFuY2UobWFwKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=