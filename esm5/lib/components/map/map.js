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
            template: "<div *ngIf=\"data\" class=\"n7-map\">\r\n  <div class=\"n7-map__container\" [id]=\"data.containerId\"></div>\r\n</div>\r\n"
        })
    ], MapComponent);
    return MapComponent;
}());
export { MapComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9tYXAvbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixTQUFTO0FBQ1QsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUEyRHRFO0lBQUE7UUFBQSxpQkFrREM7UUE3Q0MsdUNBQXVDO1FBQy9CLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFeEIsNkNBQTZDO1FBQ3JDLGdCQUFXLEdBQUc7Ozs7Ozt3QkFDWCxxQkFBTSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUE7O3dCQUFoQyxVQUFPLEdBQUUsU0FBdUI7d0JBQ3ZCLHFCQUFNLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFBOzRCQUZkLHNCQUFBLENBRWhDLFVBQU8sR0FBRSxTQUFxQzsrQkFDOUM7d0JBRUYseUNBQXlDO3NCQUZ2Qzs7O2FBQUEsQ0FBQTtJQXNDSixDQUFDO0lBcENDLHlDQUF5QztJQUV6Qyw0Q0FBcUIsR0FBckI7UUFBQSxpQkFpQ0M7UUFoQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFPO2dCQUM5Qix5QkFBeUI7Z0JBQ2pCLElBQUEsK0JBQWMsQ0FBcUI7Z0JBQ25DLElBQUEsK0JBQWMsQ0FBcUI7Z0JBQzNDLHlDQUF5QztnQkFDekMsSUFBTSxPQUFPLHlCQUFRLEtBQUssR0FBSyxLQUFLLENBQUUsQ0FBQztnQkFDdkMsZUFBZTtnQkFDVCxJQUFBLDJCQUF3QyxFQUF0QyxrQkFBTSxFQUFFLGNBQThCLENBQUM7Z0JBQy9DLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNyRSxLQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO29CQUNqQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDekQsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsb0JBQW9CO2dCQUNwQixvQ0FBb0M7Z0JBRXBDLHFCQUFxQjtnQkFDckIsSUFBSSxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDckIsSUFBTSxTQUFPLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUM7b0JBQzdDLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7d0JBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNwRSxDQUFDLENBQUMsQ0FBQztvQkFDSCxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQU8sQ0FBQyxDQUFDO2lCQUN2QjtnQkFFRCwwQkFBMEI7Z0JBQzFCLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZO29CQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBaERRO1FBQVIsS0FBSyxFQUFFOzs4Q0FBZTtJQUVkO1FBQVIsS0FBSyxFQUFFOzs4Q0FBVztJQUhSLFlBQVk7UUFKeEIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsc0lBQXlCO1NBQzFCLENBQUM7T0FDVyxZQUFZLENBa0R4QjtJQUFELG1CQUFDO0NBQUEsQUFsREQsSUFrREM7U0FsRFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIE1BUC50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaWxlTGF5ZXJPcHRpb25zIH0gZnJvbSAnbGVhZmxldCc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBUaWxlTGF5ZXIncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgdXJsIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IG9wdGlvbnMgKHJlcXVpcmVkKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBUaWxlTGF5ZXJEYXRhIHtcclxuICB1cmw6IHN0cmluZztcclxuICBvcHRpb25zOiBUaWxlTGF5ZXJPcHRpb25zO1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBNYXJrZXIncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgY29vcmRzIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHRpdGxlIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHRlbXBsYXRlIChyZXF1aXJlZClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFya2VyRGF0YSB7XHJcbiAgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdO1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIHRlbXBsYXRlOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIE1hcENvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJJZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSB0aWxlTGF5ZXJzIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGluaXRpYWxWaWV3IChyZXF1aXJlZClcclxuICogLSBjZW50ZXIgKHJlcXVpcmVkKVxyXG4gKiAtIHpvb20gKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgbWFya2VycyAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE1hcERhdGEge1xyXG4gIC8qKiBJZCBvZiB0aGUgbWFwIGNvbnRhaW5lciBlbGVtZW50ICovXHJcbiAgY29udGFpbmVySWQ6IHN0cmluZztcclxuICAvKiogTGVhZmxldCBtYXAgbGF5ZXJzICovXHJcbiAgdGlsZUxheWVyczogVGlsZUxheWVyRGF0YVtdO1xyXG4gIC8qKiBDb29yZGluYXRlcyBvZiB0aGUgaW5pdGlhbCB2aWV3ICovXHJcbiAgaW5pdGlhbFZpZXc6IHtcclxuICAgIC8qKiBDb29yZGluYXRlcyB0dXBsZSAqL1xyXG4gICAgY2VudGVyOiBbbnVtYmVyLCBudW1iZXJdO1xyXG4gICAgLyoqIFpvb20gZGlzdGFuY2UgKi9cclxuICAgIHpvb206IG51bWJlcjtcclxuICB9O1xyXG4gIC8qKiBDb2xsZWN0aW9uIG9mIG1hcCBtYXJrZXJzICovXHJcbiAgbWFya2Vycz86IE1hcmtlckRhdGFbXTtcclxuICAvKiogU2V0cyB0aGUgbWFwIGluc3RhbmNlIHRvIHRoZSBnaXZlbiBwYXJhbWV0ZXIgKi9cclxuICBfc2V0SW5zdGFuY2U/OiBGdW5jdGlvbjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1tYXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXAuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hcENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IE1hcERhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgLyoqIEtub3dzIGlmIHRoZSBjb21wb25lbnQgaXMgbG9hZGVkICovXHJcbiAgcHJpdmF0ZSBfbG9hZGVkID0gZmFsc2U7XHJcblxyXG4gIC8qKiBEeW5hbWljYWxseSBsb2FkIHJlcXVpcmVkIG5vZGUgbW9kdWxlcyAqL1xyXG4gIHByaXZhdGUgbG9hZE1vZHVsZXMgPSBhc3luYyAoKSA9PiAoe1xyXG4gICAgbGVhZmxldDogYXdhaXQgaW1wb3J0KCdsZWFmbGV0JyksXHJcbiAgICBjbHVzdGVyOiBhd2FpdCBpbXBvcnQoJ2xlYWZsZXQubWFya2VyY2x1c3RlcicpXHJcbiAgfSlcclxuXHJcbiAgLy8gcHJpdmF0ZSBvbk1hcENsaWNrID0gKGUpID0+IChlLmxhdGxuZylcclxuXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmRhdGEgfHwgdGhpcy5fbG9hZGVkKSByZXR1cm47XHJcbiAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZE1vZHVsZXMoKS50aGVuKChtb2R1bGVzKSA9PiB7XHJcbiAgICAgICAgLyoqIE1vZHVsZSBkZWZpbml0aW9ucyAqL1xyXG4gICAgICAgIGNvbnN0IHsgZGVmYXVsdDogbGZsZXQgfSA9IG1vZHVsZXMubGVhZmxldDtcclxuICAgICAgICBjb25zdCB7IGRlZmF1bHQ6IGNsc3RyIH0gPSBtb2R1bGVzLmNsdXN0ZXI7XHJcbiAgICAgICAgLy8gTWVyZ2UgY2x1c3RlciBhbmQgbGVhZmxldCBpbnRvIGxlYWZsZXRcclxuICAgICAgICBjb25zdCBsZWFmbGV0ID0geyAuLi5sZmxldCwgLi4uY2xzdHIgfTtcclxuICAgICAgICAvLyBDcmVhdGUgYSBtYXBcclxuICAgICAgICBjb25zdCB7IGNlbnRlciwgem9vbSB9ID0gdGhpcy5kYXRhLmluaXRpYWxWaWV3O1xyXG4gICAgICAgIGNvbnN0IG1hcCA9IGxlYWZsZXQubWFwKHRoaXMuZGF0YS5jb250YWluZXJJZCkuc2V0VmlldyhjZW50ZXIsIHpvb20pO1xyXG4gICAgICAgIHRoaXMuZGF0YS50aWxlTGF5ZXJzLmZvckVhY2goKGxheWVyKSA9PiB7XHJcbiAgICAgICAgICBsZWFmbGV0LnRpbGVMYXllcihsYXllci51cmwsIGxheWVyLm9wdGlvbnMpLmFkZFRvKG1hcCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8qKiBIYW5kbGUgZXZlbnRzICovXHJcbiAgICAgICAgLy8gbWFwLm9uKCdjbGljaycsIHRoaXMub25NYXBDbGljayk7XHJcblxyXG4gICAgICAgIC8qKiBIYW5kbGUgbWFya2VycyAqL1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEubWFya2Vycykge1xyXG4gICAgICAgICAgY29uc3QgbWFya2VycyA9IGxlYWZsZXQubWFya2VyQ2x1c3Rlckdyb3VwKCk7XHJcbiAgICAgICAgICB0aGlzLmRhdGEubWFya2Vycy5mb3JFYWNoKChtcmspID0+IHtcclxuICAgICAgICAgICAgbGVhZmxldC5tYXJrZXIobXJrLmNvb3JkcykuYWRkVG8obWFya2VycykuYmluZFBvcHVwKG1yay50ZW1wbGF0ZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIG1hcC5hZGRMYXllcihtYXJrZXJzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFzc2lnbiB0aGUgbWFwIGluc3RhbmNlXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5fc2V0SW5zdGFuY2UpIHRoaXMuZGF0YS5fc2V0SW5zdGFuY2UobWFwKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19