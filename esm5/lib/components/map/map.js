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
                var map = leaflet.map(_this.data.containerId).setView(center, zoom);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9tYXAvbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixTQUFTO0FBQ1QsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUEyRHRFO0lBQUE7UUFBQSxpQkFrREM7UUE3Q0MsdUNBQXVDO1FBQy9CLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFeEIsNkNBQTZDO1FBQ3JDLGdCQUFXLEdBQUc7Ozs7Ozt3QkFDWCxxQkFBTSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUE7O3dCQUFoQyxVQUFPLEdBQUUsU0FBdUI7d0JBQ3ZCLHFCQUFNLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFBOzRCQUZkLHNCQUFBLENBRWhDLFVBQU8sR0FBRSxTQUFxQzsrQkFDOUM7d0JBRUYseUNBQXlDO3NCQUZ2Qzs7O2FBQUEsQ0FBQTtJQXNDSixDQUFDO0lBcENDLHlDQUF5QztJQUV6Qyw0Q0FBcUIsR0FBckI7UUFBQSxpQkFpQ0M7UUFoQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFPO2dCQUM5Qix5QkFBeUI7Z0JBQ2pCLElBQUEsK0JBQWMsQ0FBcUI7Z0JBQ25DLElBQUEsK0JBQWMsQ0FBcUI7Z0JBQzNDLHlDQUF5QztnQkFDekMsSUFBTSxPQUFPLHlCQUFRLEtBQUssR0FBSyxLQUFLLENBQUUsQ0FBQztnQkFDdkMsZUFBZTtnQkFDVCxJQUFBLDJCQUF3QyxFQUF0QyxrQkFBTSxFQUFFLGNBQThCLENBQUM7Z0JBQy9DLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNyRSxLQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO29CQUNqQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDekQsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsb0JBQW9CO2dCQUNwQixvQ0FBb0M7Z0JBRXBDLHFCQUFxQjtnQkFDckIsSUFBSSxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDckIsSUFBTSxTQUFPLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUM7b0JBQzdDLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7d0JBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNwRSxDQUFDLENBQUMsQ0FBQztvQkFDSCxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQU8sQ0FBQyxDQUFDO2lCQUN2QjtnQkFFRCwwQkFBMEI7Z0JBQzFCLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZO29CQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBaERRO1FBQVIsS0FBSyxFQUFFOzs4Q0FBZTtJQUVkO1FBQVIsS0FBSyxFQUFFOzs4Q0FBVztJQUhSLFlBQVk7UUFKeEIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsZ0lBQXlCO1NBQzFCLENBQUM7T0FDVyxZQUFZLENBa0R4QjtJQUFELG1CQUFDO0NBQUEsQUFsREQsSUFrREM7U0FsRFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBNQVAudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdyaWRMYXllck9wdGlvbnMgfSBmcm9tICdsZWFmbGV0JztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFRpbGVMYXllcidzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IHVybCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgb3B0aW9ucyAocmVxdWlyZWQpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGlsZUxheWVyRGF0YSB7XG4gIHVybDogc3RyaW5nO1xuICBvcHRpb25zOiBHcmlkTGF5ZXJPcHRpb25zO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgTWFya2VyJ3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgY29vcmRzIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSB0aXRsZSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdGVtcGxhdGUgKHJlcXVpcmVkKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlckRhdGEge1xuICBjb29yZHM6IFtudW1iZXIsIG51bWJlcl07XG4gIHRpdGxlPzogc3RyaW5nO1xuICB0ZW1wbGF0ZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgTWFwQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgY29udGFpbmVySWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHRpbGVMYXllcnMgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGluaXRpYWxWaWV3IChyZXF1aXJlZClcbiAqIC0gY2VudGVyIChyZXF1aXJlZClcbiAqIC0gem9vbSAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgbWFya2VycyAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWFwRGF0YSB7XG4gIC8qKiBJZCBvZiB0aGUgbWFwIGNvbnRhaW5lciBlbGVtZW50ICovXG4gIGNvbnRhaW5lcklkOiBzdHJpbmc7XG4gIC8qKiBMZWFmbGV0IG1hcCBsYXllcnMgKi9cbiAgdGlsZUxheWVyczogVGlsZUxheWVyRGF0YVtdO1xuICAvKiogQ29vcmRpbmF0ZXMgb2YgdGhlIGluaXRpYWwgdmlldyAqL1xuICBpbml0aWFsVmlldzoge1xuICAgIC8qKiBDb29yZGluYXRlcyB0dXBsZSAqL1xuICAgIGNlbnRlcjogW251bWJlciwgbnVtYmVyXTtcbiAgICAvKiogWm9vbSBkaXN0YW5jZSAqL1xuICAgIHpvb206IG51bWJlcjtcbiAgfTtcbiAgLyoqIENvbGxlY3Rpb24gb2YgbWFwIG1hcmtlcnMgKi9cbiAgbWFya2Vycz86IE1hcmtlckRhdGFbXTtcbiAgLyoqIFNldHMgdGhlIG1hcCBpbnN0YW5jZSB0byB0aGUgZ2l2ZW4gcGFyYW1ldGVyICovXG4gIF9zZXRJbnN0YW5jZT86IEZ1bmN0aW9uO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1tYXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWFwLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE1hcENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuICBASW5wdXQoKSBkYXRhOiBNYXBEYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICAvKiogS25vd3MgaWYgdGhlIGNvbXBvbmVudCBpcyBsb2FkZWQgKi9cbiAgcHJpdmF0ZSBfbG9hZGVkID0gZmFsc2U7XG5cbiAgLyoqIER5bmFtaWNhbGx5IGxvYWQgcmVxdWlyZWQgbm9kZSBtb2R1bGVzICovXG4gIHByaXZhdGUgbG9hZE1vZHVsZXMgPSBhc3luYyAoKSA9PiAoe1xuICAgIGxlYWZsZXQ6IGF3YWl0IGltcG9ydCgnbGVhZmxldCcpLFxuICAgIGNsdXN0ZXI6IGF3YWl0IGltcG9ydCgnbGVhZmxldC5tYXJrZXJjbHVzdGVyJylcbiAgfSlcblxuICAvLyBwcml2YXRlIG9uTWFwQ2xpY2sgPSAoZSkgPT4gKGUubGF0bG5nKVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGF0YSB8fCB0aGlzLl9sb2FkZWQpIHJldHVybjtcbiAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkTW9kdWxlcygpLnRoZW4oKG1vZHVsZXMpID0+IHtcbiAgICAgICAgLyoqIE1vZHVsZSBkZWZpbml0aW9ucyAqL1xuICAgICAgICBjb25zdCB7IGRlZmF1bHQ6IGxmbGV0IH0gPSBtb2R1bGVzLmxlYWZsZXQ7XG4gICAgICAgIGNvbnN0IHsgZGVmYXVsdDogY2xzdHIgfSA9IG1vZHVsZXMuY2x1c3RlcjtcbiAgICAgICAgLy8gTWVyZ2UgY2x1c3RlciBhbmQgbGVhZmxldCBpbnRvIGxlYWZsZXRcbiAgICAgICAgY29uc3QgbGVhZmxldCA9IHsgLi4ubGZsZXQsIC4uLmNsc3RyIH07XG4gICAgICAgIC8vIENyZWF0ZSBhIG1hcFxuICAgICAgICBjb25zdCB7IGNlbnRlciwgem9vbSB9ID0gdGhpcy5kYXRhLmluaXRpYWxWaWV3O1xuICAgICAgICBjb25zdCBtYXAgPSBsZWFmbGV0Lm1hcCh0aGlzLmRhdGEuY29udGFpbmVySWQpLnNldFZpZXcoY2VudGVyLCB6b29tKTtcbiAgICAgICAgdGhpcy5kYXRhLnRpbGVMYXllcnMuZm9yRWFjaCgobGF5ZXIpID0+IHtcbiAgICAgICAgICBsZWFmbGV0LnRpbGVMYXllcihsYXllci51cmwsIGxheWVyLm9wdGlvbnMpLmFkZFRvKG1hcCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qKiBIYW5kbGUgZXZlbnRzICovXG4gICAgICAgIC8vIG1hcC5vbignY2xpY2snLCB0aGlzLm9uTWFwQ2xpY2spO1xuXG4gICAgICAgIC8qKiBIYW5kbGUgbWFya2VycyAqL1xuICAgICAgICBpZiAodGhpcy5kYXRhLm1hcmtlcnMpIHtcbiAgICAgICAgICBjb25zdCBtYXJrZXJzID0gbGVhZmxldC5tYXJrZXJDbHVzdGVyR3JvdXAoKTtcbiAgICAgICAgICB0aGlzLmRhdGEubWFya2Vycy5mb3JFYWNoKChtcmspID0+IHtcbiAgICAgICAgICAgIGxlYWZsZXQubWFya2VyKG1yay5jb29yZHMpLmFkZFRvKG1hcmtlcnMpLmJpbmRQb3B1cChtcmsudGVtcGxhdGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIG1hcC5hZGRMYXllcihtYXJrZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFzc2lnbiB0aGUgbWFwIGluc3RhbmNlXG4gICAgICAgIGlmICh0aGlzLmRhdGEuX3NldEluc3RhbmNlKSB0aGlzLmRhdGEuX3NldEluc3RhbmNlKG1hcCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19