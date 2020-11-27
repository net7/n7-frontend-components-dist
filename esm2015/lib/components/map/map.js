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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9tYXAvbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixTQUFTO0FBQ1QsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUE2RHRFLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFBekI7UUFLRSx1Q0FBdUM7UUFDL0IsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUV4Qiw2Q0FBNkM7UUFDckMsZ0JBQVcsR0FBRyxHQUFTLEVBQUU7WUFBQyxPQUFBLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQyxTQUFTLENBQUM7Z0JBQ2hDLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQzthQUMvQyxDQUFDLENBQUE7VUFBQSxDQUFBO0lBc0NKLENBQUM7SUFwQ0MseUNBQXlDO0lBRXpDLHFCQUFxQjtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDbEMseUJBQXlCO2dCQUN6QixNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0JBQzNDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDM0MseUNBQXlDO2dCQUN6QyxNQUFNLE9BQU8sbUNBQVEsS0FBSyxHQUFLLEtBQUssQ0FBRSxDQUFDO2dCQUN2QyxlQUFlO2dCQUNmLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQy9DLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMzRixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDckMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pELENBQUMsQ0FBQyxDQUFDO2dCQUVILG9CQUFvQjtnQkFDcEIsb0NBQW9DO2dCQUVwQyxxQkFBcUI7Z0JBQ3JCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ3JCLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO29CQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTt3QkFDaEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3BFLENBQUMsQ0FBQyxDQUFDO29CQUNILEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3ZCO2dCQUVELDBCQUEwQjtnQkFDMUIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7b0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBO0FBakRVO0lBQVIsS0FBSyxFQUFFOzswQ0FBZTtBQUVkO0lBQVIsS0FBSyxFQUFFOzswQ0FBVztBQUhSLFlBQVk7SUFKeEIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsZ0lBQXlCO0tBQzFCLENBQUM7R0FDVyxZQUFZLENBa0R4QjtTQWxEWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE1BUC50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGlsZUxheWVyT3B0aW9ucywgTWFwT3B0aW9ucyB9IGZyb20gJ2xlYWZsZXQnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgVGlsZUxheWVyJ3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgdXJsIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBvcHRpb25zIChyZXF1aXJlZClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUaWxlTGF5ZXJEYXRhIHtcbiAgdXJsOiBzdHJpbmc7XG4gIG9wdGlvbnM6IFRpbGVMYXllck9wdGlvbnM7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBNYXJrZXIncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBjb29yZHMgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHRpdGxlIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB0ZW1wbGF0ZSAocmVxdWlyZWQpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWFya2VyRGF0YSB7XG4gIGNvb3JkczogW251bWJlciwgbnVtYmVyXTtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIHRlbXBsYXRlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBNYXBDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJJZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgdGlsZUxheWVycyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgaW5pdGlhbFZpZXcgKHJlcXVpcmVkKVxuICogLSBjZW50ZXIgKHJlcXVpcmVkKVxuICogLSB6b29tIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBtYXJrZXJzIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNYXBEYXRhIHtcbiAgLyoqIElkIG9mIHRoZSBtYXAgY29udGFpbmVyIGVsZW1lbnQgKi9cbiAgY29udGFpbmVySWQ6IHN0cmluZztcbiAgLyoqIExlYWZsZXQgbWFwIGxheWVycyAqL1xuICB0aWxlTGF5ZXJzOiBUaWxlTGF5ZXJEYXRhW107XG4gIC8qKiBMZWFmbGV0IG1hcCBvcHRpb25zICovXG4gIGxpYk9wdGlvbnM/OiBNYXBPcHRpb25zO1xuICAvKiogQ29vcmRpbmF0ZXMgb2YgdGhlIGluaXRpYWwgdmlldyAqL1xuICBpbml0aWFsVmlldzoge1xuICAgIC8qKiBDb29yZGluYXRlcyB0dXBsZSAqL1xuICAgIGNlbnRlcjogW251bWJlciwgbnVtYmVyXTtcbiAgICAvKiogWm9vbSBkaXN0YW5jZSAqL1xuICAgIHpvb206IG51bWJlcjtcbiAgfTtcbiAgLyoqIENvbGxlY3Rpb24gb2YgbWFwIG1hcmtlcnMgKi9cbiAgbWFya2Vycz86IE1hcmtlckRhdGFbXTtcbiAgLyoqIFNldHMgdGhlIG1hcCBpbnN0YW5jZSB0byB0aGUgZ2l2ZW4gcGFyYW1ldGVyICovXG4gIF9zZXRJbnN0YW5jZT86IEZ1bmN0aW9uO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1tYXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWFwLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE1hcENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuICBASW5wdXQoKSBkYXRhOiBNYXBEYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICAvKiogS25vd3MgaWYgdGhlIGNvbXBvbmVudCBpcyBsb2FkZWQgKi9cbiAgcHJpdmF0ZSBfbG9hZGVkID0gZmFsc2U7XG5cbiAgLyoqIER5bmFtaWNhbGx5IGxvYWQgcmVxdWlyZWQgbm9kZSBtb2R1bGVzICovXG4gIHByaXZhdGUgbG9hZE1vZHVsZXMgPSBhc3luYyAoKSA9PiAoe1xuICAgIGxlYWZsZXQ6IGF3YWl0IGltcG9ydCgnbGVhZmxldCcpLFxuICAgIGNsdXN0ZXI6IGF3YWl0IGltcG9ydCgnbGVhZmxldC5tYXJrZXJjbHVzdGVyJylcbiAgfSlcblxuICAvLyBwcml2YXRlIG9uTWFwQ2xpY2sgPSAoZSkgPT4gKGUubGF0bG5nKVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGF0YSB8fCB0aGlzLl9sb2FkZWQpIHJldHVybjtcbiAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkTW9kdWxlcygpLnRoZW4oKG1vZHVsZXMpID0+IHtcbiAgICAgICAgLyoqIE1vZHVsZSBkZWZpbml0aW9ucyAqL1xuICAgICAgICBjb25zdCB7IGRlZmF1bHQ6IGxmbGV0IH0gPSBtb2R1bGVzLmxlYWZsZXQ7XG4gICAgICAgIGNvbnN0IHsgZGVmYXVsdDogY2xzdHIgfSA9IG1vZHVsZXMuY2x1c3RlcjtcbiAgICAgICAgLy8gTWVyZ2UgY2x1c3RlciBhbmQgbGVhZmxldCBpbnRvIGxlYWZsZXRcbiAgICAgICAgY29uc3QgbGVhZmxldCA9IHsgLi4ubGZsZXQsIC4uLmNsc3RyIH07XG4gICAgICAgIC8vIENyZWF0ZSBhIG1hcFxuICAgICAgICBjb25zdCB7IGNlbnRlciwgem9vbSB9ID0gdGhpcy5kYXRhLmluaXRpYWxWaWV3O1xuICAgICAgICBjb25zdCBtYXAgPSBsZWFmbGV0Lm1hcCh0aGlzLmRhdGEuY29udGFpbmVySWQsIHRoaXMuZGF0YS5saWJPcHRpb25zKS5zZXRWaWV3KGNlbnRlciwgem9vbSk7XG4gICAgICAgIHRoaXMuZGF0YS50aWxlTGF5ZXJzLmZvckVhY2goKGxheWVyKSA9PiB7XG4gICAgICAgICAgbGVhZmxldC50aWxlTGF5ZXIobGF5ZXIudXJsLCBsYXllci5vcHRpb25zKS5hZGRUbyhtYXApO1xuICAgICAgICB9KTtcblxuICAgICAgICAvKiogSGFuZGxlIGV2ZW50cyAqL1xuICAgICAgICAvLyBtYXAub24oJ2NsaWNrJywgdGhpcy5vbk1hcENsaWNrKTtcblxuICAgICAgICAvKiogSGFuZGxlIG1hcmtlcnMgKi9cbiAgICAgICAgaWYgKHRoaXMuZGF0YS5tYXJrZXJzKSB7XG4gICAgICAgICAgY29uc3QgbWFya2VycyA9IGxlYWZsZXQubWFya2VyQ2x1c3Rlckdyb3VwKCk7XG4gICAgICAgICAgdGhpcy5kYXRhLm1hcmtlcnMuZm9yRWFjaCgobXJrKSA9PiB7XG4gICAgICAgICAgICBsZWFmbGV0Lm1hcmtlcihtcmsuY29vcmRzKS5hZGRUbyhtYXJrZXJzKS5iaW5kUG9wdXAobXJrLnRlbXBsYXRlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBtYXAuYWRkTGF5ZXIobWFya2Vycyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBc3NpZ24gdGhlIG1hcCBpbnN0YW5jZVxuICAgICAgICBpZiAodGhpcy5kYXRhLl9zZXRJbnN0YW5jZSkgdGhpcy5kYXRhLl9zZXRJbnN0YW5jZShtYXApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==