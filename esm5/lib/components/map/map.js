//---------------------------
// MAP.ts
//---------------------------
import { __assign, __awaiter, __decorate, __generator, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var MapComponent = /** @class */ (function () {
    function MapComponent() {
        var _this = this;
        /** Knows if the component is loaded */
        this._loaded = false;
        /** Dynamically load required node modules */
        this.loadModules = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = {};
                        return [4 /*yield*/, import('leaflet')];
                    case 1:
                        _a.leaflet = _b.sent();
                        return [4 /*yield*/, import('leaflet.markercluster')];
                    case 2: return [2 /*return*/, (_a.cluster = _b.sent(),
                            _a)
                        // private onMapClick = (e) => (e.latlng)
                    ];
                }
            });
        }); };
    }
    // private onMapClick = (e) => (e.latlng)
    MapComponent.prototype.ngAfterContentChecked = function () {
        var _this = this;
        if (!this.data || this._loaded)
            return;
        this._loaded = true;
        setTimeout(function () {
            _this.loadModules().then(function (modules) {
                /** Module definitions */
                var lflet = modules.leaflet.default;
                var clstr = modules.cluster.default;
                // Merge cluster and leaflet into leaflet
                var leaflet = __assign(__assign({}, lflet), clstr);
                // Create a map
                var _a = _this.data.initialView, center = _a.center, zoom = _a.zoom;
                var map = leaflet.map(_this.data.containerId, _this.data.libOptions).setView(center, zoom);
                _this.data.tileLayers.forEach(function (layer) {
                    leaflet.tileLayer(layer.url, layer.options).addTo(map);
                });
                /** Handle events */
                // map.on('click', this.onMapClick);
                /** Handle markers */
                if (_this.data.markers) {
                    var markers_1 = leaflet.markerClusterGroup();
                    _this.data.markers.forEach(function (mrk) {
                        leaflet.marker(mrk.coords).addTo(markers_1).bindPopup(mrk.template);
                    });
                    map.addLayer(markers_1);
                }
                // Assign the map instance
                if (_this.data._setInstance)
                    _this.data._setInstance(map);
            });
        });
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
    return MapComponent;
}());
export { MapComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9tYXAvbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixTQUFTO0FBQ1QsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUE2RHRFO0lBQUE7UUFBQSxpQkFrREM7UUE3Q0MsdUNBQXVDO1FBQy9CLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFeEIsNkNBQTZDO1FBQ3JDLGdCQUFXLEdBQUc7Ozs7Ozt3QkFDWCxxQkFBTSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUE7O3dCQUFoQyxVQUFPLEdBQUUsU0FBdUI7d0JBQ3ZCLHFCQUFNLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFBOzRCQUZkLHNCQUFBLENBRWhDLFVBQU8sR0FBRSxTQUFxQzsrQkFDOUM7d0JBRUYseUNBQXlDO3NCQUZ2Qzs7O2FBQUEsQ0FBQTtJQXNDSixDQUFDO0lBcENDLHlDQUF5QztJQUV6Qyw0Q0FBcUIsR0FBckI7UUFBQSxpQkFpQ0M7UUFoQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFPO2dCQUM5Qix5QkFBeUI7Z0JBQ2pCLElBQUEsK0JBQWMsQ0FBcUI7Z0JBQ25DLElBQUEsK0JBQWMsQ0FBcUI7Z0JBQzNDLHlDQUF5QztnQkFDekMsSUFBTSxPQUFPLHlCQUFRLEtBQUssR0FBSyxLQUFLLENBQUUsQ0FBQztnQkFDdkMsZUFBZTtnQkFDVCxJQUFBLDJCQUF3QyxFQUF0QyxrQkFBTSxFQUFFLGNBQThCLENBQUM7Z0JBQy9DLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMzRixLQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO29CQUNqQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDekQsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsb0JBQW9CO2dCQUNwQixvQ0FBb0M7Z0JBRXBDLHFCQUFxQjtnQkFDckIsSUFBSSxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDckIsSUFBTSxTQUFPLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUM7b0JBQzdDLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7d0JBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNwRSxDQUFDLENBQUMsQ0FBQztvQkFDSCxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQU8sQ0FBQyxDQUFDO2lCQUN2QjtnQkFFRCwwQkFBMEI7Z0JBQzFCLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZO29CQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBaERRO1FBQVIsS0FBSyxFQUFFOzs4Q0FBZTtJQUVkO1FBQVIsS0FBSyxFQUFFOzs4Q0FBVztJQUhSLFlBQVk7UUFKeEIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsZ0lBQXlCO1NBQzFCLENBQUM7T0FDVyxZQUFZLENBa0R4QjtJQUFELG1CQUFDO0NBQUEsQUFsREQsSUFrREM7U0FsRFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBNQVAudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRpbGVMYXllck9wdGlvbnMsIE1hcE9wdGlvbnMgfSBmcm9tICdsZWFmbGV0JztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFRpbGVMYXllcidzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IHVybCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgb3B0aW9ucyAocmVxdWlyZWQpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGlsZUxheWVyRGF0YSB7XG4gIHVybDogc3RyaW5nO1xuICBvcHRpb25zOiBUaWxlTGF5ZXJPcHRpb25zO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgTWFya2VyJ3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgY29vcmRzIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSB0aXRsZSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdGVtcGxhdGUgKHJlcXVpcmVkKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlckRhdGEge1xuICBjb29yZHM6IFtudW1iZXIsIG51bWJlcl07XG4gIHRpdGxlPzogc3RyaW5nO1xuICB0ZW1wbGF0ZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgTWFwQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgY29udGFpbmVySWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHRpbGVMYXllcnMgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGluaXRpYWxWaWV3IChyZXF1aXJlZClcbiAqIC0gY2VudGVyIChyZXF1aXJlZClcbiAqIC0gem9vbSAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgbWFya2VycyAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWFwRGF0YSB7XG4gIC8qKiBJZCBvZiB0aGUgbWFwIGNvbnRhaW5lciBlbGVtZW50ICovXG4gIGNvbnRhaW5lcklkOiBzdHJpbmc7XG4gIC8qKiBMZWFmbGV0IG1hcCBsYXllcnMgKi9cbiAgdGlsZUxheWVyczogVGlsZUxheWVyRGF0YVtdO1xuICAvKiogTGVhZmxldCBtYXAgb3B0aW9ucyAqL1xuICBsaWJPcHRpb25zPzogTWFwT3B0aW9ucztcbiAgLyoqIENvb3JkaW5hdGVzIG9mIHRoZSBpbml0aWFsIHZpZXcgKi9cbiAgaW5pdGlhbFZpZXc6IHtcbiAgICAvKiogQ29vcmRpbmF0ZXMgdHVwbGUgKi9cbiAgICBjZW50ZXI6IFtudW1iZXIsIG51bWJlcl07XG4gICAgLyoqIFpvb20gZGlzdGFuY2UgKi9cbiAgICB6b29tOiBudW1iZXI7XG4gIH07XG4gIC8qKiBDb2xsZWN0aW9uIG9mIG1hcCBtYXJrZXJzICovXG4gIG1hcmtlcnM/OiBNYXJrZXJEYXRhW107XG4gIC8qKiBTZXRzIHRoZSBtYXAgaW5zdGFuY2UgdG8gdGhlIGdpdmVuIHBhcmFtZXRlciAqL1xuICBfc2V0SW5zdGFuY2U/OiBGdW5jdGlvbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctbWFwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hcC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBNYXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcbiAgQElucHV0KCkgZGF0YTogTWFwRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgLyoqIEtub3dzIGlmIHRoZSBjb21wb25lbnQgaXMgbG9hZGVkICovXG4gIHByaXZhdGUgX2xvYWRlZCA9IGZhbHNlO1xuXG4gIC8qKiBEeW5hbWljYWxseSBsb2FkIHJlcXVpcmVkIG5vZGUgbW9kdWxlcyAqL1xuICBwcml2YXRlIGxvYWRNb2R1bGVzID0gYXN5bmMgKCkgPT4gKHtcbiAgICBsZWFmbGV0OiBhd2FpdCBpbXBvcnQoJ2xlYWZsZXQnKSxcbiAgICBjbHVzdGVyOiBhd2FpdCBpbXBvcnQoJ2xlYWZsZXQubWFya2VyY2x1c3RlcicpXG4gIH0pXG5cbiAgLy8gcHJpdmF0ZSBvbk1hcENsaWNrID0gKGUpID0+IChlLmxhdGxuZylcblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRhdGEgfHwgdGhpcy5fbG9hZGVkKSByZXR1cm47XG4gICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubG9hZE1vZHVsZXMoKS50aGVuKChtb2R1bGVzKSA9PiB7XG4gICAgICAgIC8qKiBNb2R1bGUgZGVmaW5pdGlvbnMgKi9cbiAgICAgICAgY29uc3QgeyBkZWZhdWx0OiBsZmxldCB9ID0gbW9kdWxlcy5sZWFmbGV0O1xuICAgICAgICBjb25zdCB7IGRlZmF1bHQ6IGNsc3RyIH0gPSBtb2R1bGVzLmNsdXN0ZXI7XG4gICAgICAgIC8vIE1lcmdlIGNsdXN0ZXIgYW5kIGxlYWZsZXQgaW50byBsZWFmbGV0XG4gICAgICAgIGNvbnN0IGxlYWZsZXQgPSB7IC4uLmxmbGV0LCAuLi5jbHN0ciB9O1xuICAgICAgICAvLyBDcmVhdGUgYSBtYXBcbiAgICAgICAgY29uc3QgeyBjZW50ZXIsIHpvb20gfSA9IHRoaXMuZGF0YS5pbml0aWFsVmlldztcbiAgICAgICAgY29uc3QgbWFwID0gbGVhZmxldC5tYXAodGhpcy5kYXRhLmNvbnRhaW5lcklkLCB0aGlzLmRhdGEubGliT3B0aW9ucykuc2V0VmlldyhjZW50ZXIsIHpvb20pO1xuICAgICAgICB0aGlzLmRhdGEudGlsZUxheWVycy5mb3JFYWNoKChsYXllcikgPT4ge1xuICAgICAgICAgIGxlYWZsZXQudGlsZUxheWVyKGxheWVyLnVybCwgbGF5ZXIub3B0aW9ucykuYWRkVG8obWFwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyoqIEhhbmRsZSBldmVudHMgKi9cbiAgICAgICAgLy8gbWFwLm9uKCdjbGljaycsIHRoaXMub25NYXBDbGljayk7XG5cbiAgICAgICAgLyoqIEhhbmRsZSBtYXJrZXJzICovXG4gICAgICAgIGlmICh0aGlzLmRhdGEubWFya2Vycykge1xuICAgICAgICAgIGNvbnN0IG1hcmtlcnMgPSBsZWFmbGV0Lm1hcmtlckNsdXN0ZXJHcm91cCgpO1xuICAgICAgICAgIHRoaXMuZGF0YS5tYXJrZXJzLmZvckVhY2goKG1yaykgPT4ge1xuICAgICAgICAgICAgbGVhZmxldC5tYXJrZXIobXJrLmNvb3JkcykuYWRkVG8obWFya2VycykuYmluZFBvcHVwKG1yay50ZW1wbGF0ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbWFwLmFkZExheWVyKG1hcmtlcnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXNzaWduIHRoZSBtYXAgaW5zdGFuY2VcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5fc2V0SW5zdGFuY2UpIHRoaXMuZGF0YS5fc2V0SW5zdGFuY2UobWFwKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=