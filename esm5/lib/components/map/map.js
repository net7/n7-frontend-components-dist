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
                    if (_this.data._setMarkerLayer)
                        _this.data._setMarkerLayer(markers_1);
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
            template: "<div *ngIf=\"data\" class=\"n7-map\">\r\n  <div class=\"n7-map__container\" [id]=\"data.containerId\"></div>\r\n</div>\r\n"
        })
    ], MapComponent);
    return MapComponent;
}());
export { MapComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9tYXAvbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixTQUFTO0FBQ1QsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUErRHRFO0lBQUE7UUFBQSxpQkFtREM7UUE5Q0MsdUNBQXVDO1FBQy9CLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFeEIsNkNBQTZDO1FBQ3JDLGdCQUFXLEdBQUc7Ozs7Ozt3QkFDWCxxQkFBTSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUE7O3dCQUFoQyxVQUFPLEdBQUUsU0FBdUI7d0JBQ3ZCLHFCQUFNLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFBOzRCQUZkLHNCQUFBLENBRWhDLFVBQU8sR0FBRSxTQUFxQzsrQkFDOUM7d0JBRUYseUNBQXlDO3NCQUZ2Qzs7O2FBQUEsQ0FBQTtJQXVDSixDQUFDO0lBckNDLHlDQUF5QztJQUV6Qyw0Q0FBcUIsR0FBckI7UUFBQSxpQkFrQ0M7UUFqQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFPO2dCQUM5Qix5QkFBeUI7Z0JBQ2pCLElBQUEsK0JBQWMsQ0FBcUI7Z0JBQ25DLElBQUEsK0JBQWMsQ0FBcUI7Z0JBQzNDLHlDQUF5QztnQkFDekMsSUFBTSxPQUFPLHlCQUFRLEtBQUssR0FBSyxLQUFLLENBQUUsQ0FBQztnQkFDdkMsZUFBZTtnQkFDVCxJQUFBLDJCQUF3QyxFQUF0QyxrQkFBTSxFQUFFLGNBQThCLENBQUM7Z0JBQy9DLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMzRixLQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO29CQUNqQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDekQsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsb0JBQW9CO2dCQUNwQixvQ0FBb0M7Z0JBRXBDLHFCQUFxQjtnQkFDckIsSUFBSSxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDckIsSUFBTSxTQUFPLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUM7b0JBQzdDLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7d0JBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNwRSxDQUFDLENBQUMsQ0FBQztvQkFDSCxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQU8sQ0FBQyxDQUFDO29CQUN0QixJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsZUFBZTt3QkFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFPLENBQUMsQ0FBQztpQkFDbkU7Z0JBRUQsMEJBQTBCO2dCQUMxQixJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtvQkFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxRCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWpEUTtRQUFSLEtBQUssRUFBRTs7OENBQWU7SUFFZDtRQUFSLEtBQUssRUFBRTs7OENBQVc7SUFIUixZQUFZO1FBSnhCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLHNJQUF5QjtTQUMxQixDQUFDO09BQ1csWUFBWSxDQW1EeEI7SUFBRCxtQkFBQztDQUFBLEFBbkRELElBbURDO1NBbkRZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBNQVAudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGlsZUxheWVyT3B0aW9ucywgTWFwT3B0aW9ucyB9IGZyb20gJ2xlYWZsZXQnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgVGlsZUxheWVyJ3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IHVybCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBvcHRpb25zIChyZXF1aXJlZClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGlsZUxheWVyRGF0YSB7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgb3B0aW9uczogVGlsZUxheWVyT3B0aW9ucztcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgTWFya2VyJ3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGNvb3JkcyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSB0aXRsZSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB0ZW1wbGF0ZSAocmVxdWlyZWQpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlckRhdGEge1xyXG4gIGNvb3JkczogW251bWJlciwgbnVtYmVyXTtcclxuICB0aXRsZT86IHN0cmluZztcclxuICB0ZW1wbGF0ZTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBNYXBDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgY29udGFpbmVySWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgdGlsZUxheWVycyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBpbml0aWFsVmlldyAocmVxdWlyZWQpXHJcbiAqIC0gY2VudGVyIChyZXF1aXJlZClcclxuICogLSB6b29tIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IG1hcmtlcnMgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBNYXBEYXRhIHtcclxuICAvKiogSWQgb2YgdGhlIG1hcCBjb250YWluZXIgZWxlbWVudCAqL1xyXG4gIGNvbnRhaW5lcklkOiBzdHJpbmc7XHJcbiAgLyoqIExlYWZsZXQgbWFwIGxheWVycyAqL1xyXG4gIHRpbGVMYXllcnM6IFRpbGVMYXllckRhdGFbXTtcclxuICAvKiogTGVhZmxldCBtYXAgb3B0aW9ucyAqL1xyXG4gIGxpYk9wdGlvbnM/OiBNYXBPcHRpb25zO1xyXG4gIC8qKiBDb29yZGluYXRlcyBvZiB0aGUgaW5pdGlhbCB2aWV3ICovXHJcbiAgaW5pdGlhbFZpZXc6IHtcclxuICAgIC8qKiBDb29yZGluYXRlcyB0dXBsZSAqL1xyXG4gICAgY2VudGVyOiBbbnVtYmVyLCBudW1iZXJdO1xyXG4gICAgLyoqIFpvb20gZGlzdGFuY2UgKi9cclxuICAgIHpvb206IG51bWJlcjtcclxuICB9O1xyXG4gIC8qKiBDb2xsZWN0aW9uIG9mIG1hcCBtYXJrZXJzICovXHJcbiAgbWFya2Vycz86IE1hcmtlckRhdGFbXTtcclxuICAvKiogU2V0cyB0aGUgbWFwIGluc3RhbmNlIHRvIHRoZSBnaXZlbiBwYXJhbWV0ZXIgKi9cclxuICBfc2V0SW5zdGFuY2U/OiBGdW5jdGlvbjtcclxuICAvKiogU2V0cyB0aGUgbWFya2VyIGxheWVyIHRvIHRoZSBnaXZlbiBwYXJhbWV0ZXIgKi9cclxuICBfc2V0TWFya2VyTGF5ZXI/OiBGdW5jdGlvbjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1tYXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXAuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hcENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IE1hcERhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgLyoqIEtub3dzIGlmIHRoZSBjb21wb25lbnQgaXMgbG9hZGVkICovXHJcbiAgcHJpdmF0ZSBfbG9hZGVkID0gZmFsc2U7XHJcblxyXG4gIC8qKiBEeW5hbWljYWxseSBsb2FkIHJlcXVpcmVkIG5vZGUgbW9kdWxlcyAqL1xyXG4gIHByaXZhdGUgbG9hZE1vZHVsZXMgPSBhc3luYyAoKSA9PiAoe1xyXG4gICAgbGVhZmxldDogYXdhaXQgaW1wb3J0KCdsZWFmbGV0JyksXHJcbiAgICBjbHVzdGVyOiBhd2FpdCBpbXBvcnQoJ2xlYWZsZXQubWFya2VyY2x1c3RlcicpXHJcbiAgfSlcclxuXHJcbiAgLy8gcHJpdmF0ZSBvbk1hcENsaWNrID0gKGUpID0+IChlLmxhdGxuZylcclxuXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmRhdGEgfHwgdGhpcy5fbG9hZGVkKSByZXR1cm47XHJcbiAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZE1vZHVsZXMoKS50aGVuKChtb2R1bGVzKSA9PiB7XHJcbiAgICAgICAgLyoqIE1vZHVsZSBkZWZpbml0aW9ucyAqL1xyXG4gICAgICAgIGNvbnN0IHsgZGVmYXVsdDogbGZsZXQgfSA9IG1vZHVsZXMubGVhZmxldDtcclxuICAgICAgICBjb25zdCB7IGRlZmF1bHQ6IGNsc3RyIH0gPSBtb2R1bGVzLmNsdXN0ZXI7XHJcbiAgICAgICAgLy8gTWVyZ2UgY2x1c3RlciBhbmQgbGVhZmxldCBpbnRvIGxlYWZsZXRcclxuICAgICAgICBjb25zdCBsZWFmbGV0ID0geyAuLi5sZmxldCwgLi4uY2xzdHIgfTtcclxuICAgICAgICAvLyBDcmVhdGUgYSBtYXBcclxuICAgICAgICBjb25zdCB7IGNlbnRlciwgem9vbSB9ID0gdGhpcy5kYXRhLmluaXRpYWxWaWV3O1xyXG4gICAgICAgIGNvbnN0IG1hcCA9IGxlYWZsZXQubWFwKHRoaXMuZGF0YS5jb250YWluZXJJZCwgdGhpcy5kYXRhLmxpYk9wdGlvbnMpLnNldFZpZXcoY2VudGVyLCB6b29tKTtcclxuICAgICAgICB0aGlzLmRhdGEudGlsZUxheWVycy5mb3JFYWNoKChsYXllcikgPT4ge1xyXG4gICAgICAgICAgbGVhZmxldC50aWxlTGF5ZXIobGF5ZXIudXJsLCBsYXllci5vcHRpb25zKS5hZGRUbyhtYXApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvKiogSGFuZGxlIGV2ZW50cyAqL1xyXG4gICAgICAgIC8vIG1hcC5vbignY2xpY2snLCB0aGlzLm9uTWFwQ2xpY2spO1xyXG5cclxuICAgICAgICAvKiogSGFuZGxlIG1hcmtlcnMgKi9cclxuICAgICAgICBpZiAodGhpcy5kYXRhLm1hcmtlcnMpIHtcclxuICAgICAgICAgIGNvbnN0IG1hcmtlcnMgPSBsZWFmbGV0Lm1hcmtlckNsdXN0ZXJHcm91cCgpO1xyXG4gICAgICAgICAgdGhpcy5kYXRhLm1hcmtlcnMuZm9yRWFjaCgobXJrKSA9PiB7XHJcbiAgICAgICAgICAgIGxlYWZsZXQubWFya2VyKG1yay5jb29yZHMpLmFkZFRvKG1hcmtlcnMpLmJpbmRQb3B1cChtcmsudGVtcGxhdGUpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBtYXAuYWRkTGF5ZXIobWFya2Vycyk7XHJcbiAgICAgICAgICBpZiAodGhpcy5kYXRhLl9zZXRNYXJrZXJMYXllcikgdGhpcy5kYXRhLl9zZXRNYXJrZXJMYXllcihtYXJrZXJzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFzc2lnbiB0aGUgbWFwIGluc3RhbmNlXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5fc2V0SW5zdGFuY2UpIHRoaXMuZGF0YS5fc2V0SW5zdGFuY2UobWFwKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19