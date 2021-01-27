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
        template: "<div *ngIf=\"data\" class=\"n7-map\">\r\n  <div class=\"n7-map__container\" [id]=\"data.containerId\"></div>\r\n</div>\r\n"
    })
], MapComponent);
export { MapComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9tYXAvbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixTQUFTO0FBQ1QsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUE2RHRFLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFBekI7UUFLRSx1Q0FBdUM7UUFDL0IsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUV4Qiw2Q0FBNkM7UUFDckMsZ0JBQVcsR0FBRyxHQUFTLEVBQUU7WUFBQyxPQUFBLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQyxTQUFTLENBQUM7Z0JBQ2hDLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQzthQUMvQyxDQUFDLENBQUE7VUFBQSxDQUFBO0lBc0NKLENBQUM7SUFwQ0MseUNBQXlDO0lBRXpDLHFCQUFxQjtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDbEMseUJBQXlCO2dCQUN6QixNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0JBQzNDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDM0MseUNBQXlDO2dCQUN6QyxNQUFNLE9BQU8sbUNBQVEsS0FBSyxHQUFLLEtBQUssQ0FBRSxDQUFDO2dCQUN2QyxlQUFlO2dCQUNmLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQy9DLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMzRixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDckMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pELENBQUMsQ0FBQyxDQUFDO2dCQUVILG9CQUFvQjtnQkFDcEIsb0NBQW9DO2dCQUVwQyxxQkFBcUI7Z0JBQ3JCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ3JCLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO29CQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTt3QkFDaEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3BFLENBQUMsQ0FBQyxDQUFDO29CQUNILEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3ZCO2dCQUVELDBCQUEwQjtnQkFDMUIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7b0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBO0FBakRVO0lBQVIsS0FBSyxFQUFFOzswQ0FBZTtBQUVkO0lBQVIsS0FBSyxFQUFFOzswQ0FBVztBQUhSLFlBQVk7SUFKeEIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsc0lBQXlCO0tBQzFCLENBQUM7R0FDVyxZQUFZLENBa0R4QjtTQWxEWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gTUFQLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlckNvbnRlbnRDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRpbGVMYXllck9wdGlvbnMsIE1hcE9wdGlvbnMgfSBmcm9tICdsZWFmbGV0JztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIFRpbGVMYXllcidzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB1cmwgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgb3B0aW9ucyAocmVxdWlyZWQpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVMYXllckRhdGEge1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIG9wdGlvbnM6IFRpbGVMYXllck9wdGlvbnM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIE1hcmtlcidzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBjb29yZHMgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgdGl0bGUgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgdGVtcGxhdGUgKHJlcXVpcmVkKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBNYXJrZXJEYXRhIHtcclxuICBjb29yZHM6IFtudW1iZXIsIG51bWJlcl07XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgdGVtcGxhdGU6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgTWFwQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGNvbnRhaW5lcklkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHRpbGVMYXllcnMgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgaW5pdGlhbFZpZXcgKHJlcXVpcmVkKVxyXG4gKiAtIGNlbnRlciAocmVxdWlyZWQpXHJcbiAqIC0gem9vbSAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBtYXJrZXJzIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFwRGF0YSB7XHJcbiAgLyoqIElkIG9mIHRoZSBtYXAgY29udGFpbmVyIGVsZW1lbnQgKi9cclxuICBjb250YWluZXJJZDogc3RyaW5nO1xyXG4gIC8qKiBMZWFmbGV0IG1hcCBsYXllcnMgKi9cclxuICB0aWxlTGF5ZXJzOiBUaWxlTGF5ZXJEYXRhW107XHJcbiAgLyoqIExlYWZsZXQgbWFwIG9wdGlvbnMgKi9cclxuICBsaWJPcHRpb25zPzogTWFwT3B0aW9ucztcclxuICAvKiogQ29vcmRpbmF0ZXMgb2YgdGhlIGluaXRpYWwgdmlldyAqL1xyXG4gIGluaXRpYWxWaWV3OiB7XHJcbiAgICAvKiogQ29vcmRpbmF0ZXMgdHVwbGUgKi9cclxuICAgIGNlbnRlcjogW251bWJlciwgbnVtYmVyXTtcclxuICAgIC8qKiBab29tIGRpc3RhbmNlICovXHJcbiAgICB6b29tOiBudW1iZXI7XHJcbiAgfTtcclxuICAvKiogQ29sbGVjdGlvbiBvZiBtYXAgbWFya2VycyAqL1xyXG4gIG1hcmtlcnM/OiBNYXJrZXJEYXRhW107XHJcbiAgLyoqIFNldHMgdGhlIG1hcCBpbnN0YW5jZSB0byB0aGUgZ2l2ZW4gcGFyYW1ldGVyICovXHJcbiAgX3NldEluc3RhbmNlPzogRnVuY3Rpb247XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctbWFwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWFwLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcclxuICBASW5wdXQoKSBkYXRhOiBNYXBEYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIC8qKiBLbm93cyBpZiB0aGUgY29tcG9uZW50IGlzIGxvYWRlZCAqL1xyXG4gIHByaXZhdGUgX2xvYWRlZCA9IGZhbHNlO1xyXG5cclxuICAvKiogRHluYW1pY2FsbHkgbG9hZCByZXF1aXJlZCBub2RlIG1vZHVsZXMgKi9cclxuICBwcml2YXRlIGxvYWRNb2R1bGVzID0gYXN5bmMgKCkgPT4gKHtcclxuICAgIGxlYWZsZXQ6IGF3YWl0IGltcG9ydCgnbGVhZmxldCcpLFxyXG4gICAgY2x1c3RlcjogYXdhaXQgaW1wb3J0KCdsZWFmbGV0Lm1hcmtlcmNsdXN0ZXInKVxyXG4gIH0pXHJcblxyXG4gIC8vIHByaXZhdGUgb25NYXBDbGljayA9IChlKSA9PiAoZS5sYXRsbmcpXHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kYXRhIHx8IHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xyXG4gICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRNb2R1bGVzKCkudGhlbigobW9kdWxlcykgPT4ge1xyXG4gICAgICAgIC8qKiBNb2R1bGUgZGVmaW5pdGlvbnMgKi9cclxuICAgICAgICBjb25zdCB7IGRlZmF1bHQ6IGxmbGV0IH0gPSBtb2R1bGVzLmxlYWZsZXQ7XHJcbiAgICAgICAgY29uc3QgeyBkZWZhdWx0OiBjbHN0ciB9ID0gbW9kdWxlcy5jbHVzdGVyO1xyXG4gICAgICAgIC8vIE1lcmdlIGNsdXN0ZXIgYW5kIGxlYWZsZXQgaW50byBsZWFmbGV0XHJcbiAgICAgICAgY29uc3QgbGVhZmxldCA9IHsgLi4ubGZsZXQsIC4uLmNsc3RyIH07XHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgbWFwXHJcbiAgICAgICAgY29uc3QgeyBjZW50ZXIsIHpvb20gfSA9IHRoaXMuZGF0YS5pbml0aWFsVmlldztcclxuICAgICAgICBjb25zdCBtYXAgPSBsZWFmbGV0Lm1hcCh0aGlzLmRhdGEuY29udGFpbmVySWQsIHRoaXMuZGF0YS5saWJPcHRpb25zKS5zZXRWaWV3KGNlbnRlciwgem9vbSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnRpbGVMYXllcnMuZm9yRWFjaCgobGF5ZXIpID0+IHtcclxuICAgICAgICAgIGxlYWZsZXQudGlsZUxheWVyKGxheWVyLnVybCwgbGF5ZXIub3B0aW9ucykuYWRkVG8obWFwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLyoqIEhhbmRsZSBldmVudHMgKi9cclxuICAgICAgICAvLyBtYXAub24oJ2NsaWNrJywgdGhpcy5vbk1hcENsaWNrKTtcclxuXHJcbiAgICAgICAgLyoqIEhhbmRsZSBtYXJrZXJzICovXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5tYXJrZXJzKSB7XHJcbiAgICAgICAgICBjb25zdCBtYXJrZXJzID0gbGVhZmxldC5tYXJrZXJDbHVzdGVyR3JvdXAoKTtcclxuICAgICAgICAgIHRoaXMuZGF0YS5tYXJrZXJzLmZvckVhY2goKG1yaykgPT4ge1xyXG4gICAgICAgICAgICBsZWFmbGV0Lm1hcmtlcihtcmsuY29vcmRzKS5hZGRUbyhtYXJrZXJzKS5iaW5kUG9wdXAobXJrLnRlbXBsYXRlKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgbWFwLmFkZExheWVyKG1hcmtlcnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQXNzaWduIHRoZSBtYXAgaW5zdGFuY2VcclxuICAgICAgICBpZiAodGhpcy5kYXRhLl9zZXRJbnN0YW5jZSkgdGhpcy5kYXRhLl9zZXRJbnN0YW5jZShtYXApO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=