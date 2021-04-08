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
                    const markers = leaflet.markerClusterGroup();
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
        template: "<div *ngIf=\"data\" class=\"n7-map\">\r\n  <div class=\"n7-map__container\" [id]=\"data.containerId\"></div>\r\n</div>\r\n"
    })
], MapComponent);
export { MapComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9tYXAvbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixTQUFTO0FBQ1QsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUErRHRFLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFBekI7UUFLRSx1Q0FBdUM7UUFDL0IsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUV4Qiw2Q0FBNkM7UUFDckMsZ0JBQVcsR0FBRyxHQUFTLEVBQUU7WUFBQyxPQUFBLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQyxTQUFTLENBQUM7Z0JBQ2hDLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQzthQUMvQyxDQUFDLENBQUE7VUFBQSxDQUFBO0lBdUNKLENBQUM7SUFyQ0MseUNBQXlDO0lBRXpDLHFCQUFxQjtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDbEMseUJBQXlCO2dCQUN6QixNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0JBQzNDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDM0MseUNBQXlDO2dCQUN6QyxNQUFNLE9BQU8sbUNBQVEsS0FBSyxHQUFLLEtBQUssQ0FBRSxDQUFDO2dCQUN2QyxlQUFlO2dCQUNmLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQy9DLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMzRixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDckMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pELENBQUMsQ0FBQyxDQUFDO2dCQUVILG9CQUFvQjtnQkFDcEIsb0NBQW9DO2dCQUVwQyxxQkFBcUI7Z0JBQ3JCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ3JCLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO29CQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTt3QkFDaEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3BFLENBQUMsQ0FBQyxDQUFDO29CQUNILEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3RCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlO3dCQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNuRTtnQkFFRCwwQkFBMEI7Z0JBQzFCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO29CQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTtBQWxEVTtJQUFSLEtBQUssRUFBRTs7MENBQWU7QUFFZDtJQUFSLEtBQUssRUFBRTs7MENBQVc7QUFIUixZQUFZO0lBSnhCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLHNJQUF5QjtLQUMxQixDQUFDO0dBQ1csWUFBWSxDQW1EeEI7U0FuRFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIE1BUC50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaWxlTGF5ZXJPcHRpb25zLCBNYXBPcHRpb25zIH0gZnJvbSAnbGVhZmxldCc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBUaWxlTGF5ZXIncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgdXJsIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IG9wdGlvbnMgKHJlcXVpcmVkKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBUaWxlTGF5ZXJEYXRhIHtcclxuICB1cmw6IHN0cmluZztcclxuICBvcHRpb25zOiBUaWxlTGF5ZXJPcHRpb25zO1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBNYXJrZXIncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgY29vcmRzIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHRpdGxlIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHRlbXBsYXRlIChyZXF1aXJlZClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFya2VyRGF0YSB7XHJcbiAgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdO1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIHRlbXBsYXRlOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIE1hcENvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJJZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSB0aWxlTGF5ZXJzIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGluaXRpYWxWaWV3IChyZXF1aXJlZClcclxuICogLSBjZW50ZXIgKHJlcXVpcmVkKVxyXG4gKiAtIHpvb20gKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgbWFya2VycyAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE1hcERhdGEge1xyXG4gIC8qKiBJZCBvZiB0aGUgbWFwIGNvbnRhaW5lciBlbGVtZW50ICovXHJcbiAgY29udGFpbmVySWQ6IHN0cmluZztcclxuICAvKiogTGVhZmxldCBtYXAgbGF5ZXJzICovXHJcbiAgdGlsZUxheWVyczogVGlsZUxheWVyRGF0YVtdO1xyXG4gIC8qKiBMZWFmbGV0IG1hcCBvcHRpb25zICovXHJcbiAgbGliT3B0aW9ucz86IE1hcE9wdGlvbnM7XHJcbiAgLyoqIENvb3JkaW5hdGVzIG9mIHRoZSBpbml0aWFsIHZpZXcgKi9cclxuICBpbml0aWFsVmlldzoge1xyXG4gICAgLyoqIENvb3JkaW5hdGVzIHR1cGxlICovXHJcbiAgICBjZW50ZXI6IFtudW1iZXIsIG51bWJlcl07XHJcbiAgICAvKiogWm9vbSBkaXN0YW5jZSAqL1xyXG4gICAgem9vbTogbnVtYmVyO1xyXG4gIH07XHJcbiAgLyoqIENvbGxlY3Rpb24gb2YgbWFwIG1hcmtlcnMgKi9cclxuICBtYXJrZXJzPzogTWFya2VyRGF0YVtdO1xyXG4gIC8qKiBTZXRzIHRoZSBtYXAgaW5zdGFuY2UgdG8gdGhlIGdpdmVuIHBhcmFtZXRlciAqL1xyXG4gIF9zZXRJbnN0YW5jZT86IEZ1bmN0aW9uO1xyXG4gIC8qKiBTZXRzIHRoZSBtYXJrZXIgbGF5ZXIgdG8gdGhlIGdpdmVuIHBhcmFtZXRlciAqL1xyXG4gIF9zZXRNYXJrZXJMYXllcj86IEZ1bmN0aW9uO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LW1hcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21hcC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XHJcbiAgQElucHV0KCkgZGF0YTogTWFwRGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICAvKiogS25vd3MgaWYgdGhlIGNvbXBvbmVudCBpcyBsb2FkZWQgKi9cclxuICBwcml2YXRlIF9sb2FkZWQgPSBmYWxzZTtcclxuXHJcbiAgLyoqIER5bmFtaWNhbGx5IGxvYWQgcmVxdWlyZWQgbm9kZSBtb2R1bGVzICovXHJcbiAgcHJpdmF0ZSBsb2FkTW9kdWxlcyA9IGFzeW5jICgpID0+ICh7XHJcbiAgICBsZWFmbGV0OiBhd2FpdCBpbXBvcnQoJ2xlYWZsZXQnKSxcclxuICAgIGNsdXN0ZXI6IGF3YWl0IGltcG9ydCgnbGVhZmxldC5tYXJrZXJjbHVzdGVyJylcclxuICB9KVxyXG5cclxuICAvLyBwcml2YXRlIG9uTWFwQ2xpY2sgPSAoZSkgPT4gKGUubGF0bG5nKVxyXG5cclxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZGF0YSB8fCB0aGlzLl9sb2FkZWQpIHJldHVybjtcclxuICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5sb2FkTW9kdWxlcygpLnRoZW4oKG1vZHVsZXMpID0+IHtcclxuICAgICAgICAvKiogTW9kdWxlIGRlZmluaXRpb25zICovXHJcbiAgICAgICAgY29uc3QgeyBkZWZhdWx0OiBsZmxldCB9ID0gbW9kdWxlcy5sZWFmbGV0O1xyXG4gICAgICAgIGNvbnN0IHsgZGVmYXVsdDogY2xzdHIgfSA9IG1vZHVsZXMuY2x1c3RlcjtcclxuICAgICAgICAvLyBNZXJnZSBjbHVzdGVyIGFuZCBsZWFmbGV0IGludG8gbGVhZmxldFxyXG4gICAgICAgIGNvbnN0IGxlYWZsZXQgPSB7IC4uLmxmbGV0LCAuLi5jbHN0ciB9O1xyXG4gICAgICAgIC8vIENyZWF0ZSBhIG1hcFxyXG4gICAgICAgIGNvbnN0IHsgY2VudGVyLCB6b29tIH0gPSB0aGlzLmRhdGEuaW5pdGlhbFZpZXc7XHJcbiAgICAgICAgY29uc3QgbWFwID0gbGVhZmxldC5tYXAodGhpcy5kYXRhLmNvbnRhaW5lcklkLCB0aGlzLmRhdGEubGliT3B0aW9ucykuc2V0VmlldyhjZW50ZXIsIHpvb20pO1xyXG4gICAgICAgIHRoaXMuZGF0YS50aWxlTGF5ZXJzLmZvckVhY2goKGxheWVyKSA9PiB7XHJcbiAgICAgICAgICBsZWFmbGV0LnRpbGVMYXllcihsYXllci51cmwsIGxheWVyLm9wdGlvbnMpLmFkZFRvKG1hcCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8qKiBIYW5kbGUgZXZlbnRzICovXHJcbiAgICAgICAgLy8gbWFwLm9uKCdjbGljaycsIHRoaXMub25NYXBDbGljayk7XHJcblxyXG4gICAgICAgIC8qKiBIYW5kbGUgbWFya2VycyAqL1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEubWFya2Vycykge1xyXG4gICAgICAgICAgY29uc3QgbWFya2VycyA9IGxlYWZsZXQubWFya2VyQ2x1c3Rlckdyb3VwKCk7XHJcbiAgICAgICAgICB0aGlzLmRhdGEubWFya2Vycy5mb3JFYWNoKChtcmspID0+IHtcclxuICAgICAgICAgICAgbGVhZmxldC5tYXJrZXIobXJrLmNvb3JkcykuYWRkVG8obWFya2VycykuYmluZFBvcHVwKG1yay50ZW1wbGF0ZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIG1hcC5hZGRMYXllcihtYXJrZXJzKTtcclxuICAgICAgICAgIGlmICh0aGlzLmRhdGEuX3NldE1hcmtlckxheWVyKSB0aGlzLmRhdGEuX3NldE1hcmtlckxheWVyKG1hcmtlcnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQXNzaWduIHRoZSBtYXAgaW5zdGFuY2VcclxuICAgICAgICBpZiAodGhpcy5kYXRhLl9zZXRJbnN0YW5jZSkgdGhpcy5kYXRhLl9zZXRJbnN0YW5jZShtYXApO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=