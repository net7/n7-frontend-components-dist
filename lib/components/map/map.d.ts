import { AfterContentChecked } from '@angular/core';
import { TileLayerOptions } from 'leaflet';
/**
 * Interface for TileLayer's "data"
 *
 * @property url (required)
 * @property options (required)
 */
import * as ɵngcc0 from '@angular/core';
export interface TileLayerData {
    url: string;
    options: TileLayerOptions;
}
/**
 * Interface for Marker's "data"
 *
 * @property coords (required)
 * @property title (optional)
 * @property template (required)
 */
export interface MarkerData {
    coords: [number, number];
    title?: string;
    template: string;
}
/**
 * Interface for MapComponent's "data"
 *
 * @property containerId (required)
 * @property tileLayers (required)
 * @property initialView (required)
 * - center (required)
 * - zoom (required)
 * @property markers (optional)
 */
export interface MapData {
    /** Id of the map container element */
    containerId: string;
    /** Leaflet map layers */
    tileLayers: TileLayerData[];
    /** Coordinates of the initial view */
    initialView: {
        /** Coordinates tuple */
        center: [number, number];
        /** Zoom distance */
        zoom: number;
    };
    /** Collection of map markers */
    markers?: MarkerData[];
    /** Sets the map instance to the given parameter */
    _setInstance?: Function;
}
export declare class MapComponent implements AfterContentChecked {
    data: MapData;
    emit: any;
    /** Knows if the component is loaded */
    private _loaded;
    /** Dynamically load required node modules */
    private loadModules;
    ngAfterContentChecked(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MapComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MapComponent, "n7-map", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmQudHMiLCJzb3VyY2VzIjpbIm1hcC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGlsZUxheWVyT3B0aW9ucyB9IGZyb20gJ2xlYWZsZXQnO1xyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBUaWxlTGF5ZXIncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgdXJsIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IG9wdGlvbnMgKHJlcXVpcmVkKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBUaWxlTGF5ZXJEYXRhIHtcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgb3B0aW9uczogVGlsZUxheWVyT3B0aW9ucztcclxufVxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBNYXJrZXIncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgY29vcmRzIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHRpdGxlIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHRlbXBsYXRlIChyZXF1aXJlZClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFya2VyRGF0YSB7XHJcbiAgICBjb29yZHM6IFtudW1iZXIsIG51bWJlcl07XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIHRlbXBsYXRlOiBzdHJpbmc7XHJcbn1cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgTWFwQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGNvbnRhaW5lcklkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHRpbGVMYXllcnMgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgaW5pdGlhbFZpZXcgKHJlcXVpcmVkKVxyXG4gKiAtIGNlbnRlciAocmVxdWlyZWQpXHJcbiAqIC0gem9vbSAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBtYXJrZXJzIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFwRGF0YSB7XHJcbiAgICAvKiogSWQgb2YgdGhlIG1hcCBjb250YWluZXIgZWxlbWVudCAqL1xyXG4gICAgY29udGFpbmVySWQ6IHN0cmluZztcclxuICAgIC8qKiBMZWFmbGV0IG1hcCBsYXllcnMgKi9cclxuICAgIHRpbGVMYXllcnM6IFRpbGVMYXllckRhdGFbXTtcclxuICAgIC8qKiBDb29yZGluYXRlcyBvZiB0aGUgaW5pdGlhbCB2aWV3ICovXHJcbiAgICBpbml0aWFsVmlldzoge1xyXG4gICAgICAgIC8qKiBDb29yZGluYXRlcyB0dXBsZSAqL1xyXG4gICAgICAgIGNlbnRlcjogW251bWJlciwgbnVtYmVyXTtcclxuICAgICAgICAvKiogWm9vbSBkaXN0YW5jZSAqL1xyXG4gICAgICAgIHpvb206IG51bWJlcjtcclxuICAgIH07XHJcbiAgICAvKiogQ29sbGVjdGlvbiBvZiBtYXAgbWFya2VycyAqL1xyXG4gICAgbWFya2Vycz86IE1hcmtlckRhdGFbXTtcclxuICAgIC8qKiBTZXRzIHRoZSBtYXAgaW5zdGFuY2UgdG8gdGhlIGdpdmVuIHBhcmFtZXRlciAqL1xyXG4gICAgX3NldEluc3RhbmNlPzogRnVuY3Rpb247XHJcbn1cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTWFwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XHJcbiAgICBkYXRhOiBNYXBEYXRhO1xyXG4gICAgZW1pdDogYW55O1xyXG4gICAgLyoqIEtub3dzIGlmIHRoZSBjb21wb25lbnQgaXMgbG9hZGVkICovXHJcbiAgICBwcml2YXRlIF9sb2FkZWQ7XHJcbiAgICAvKiogRHluYW1pY2FsbHkgbG9hZCByZXF1aXJlZCBub2RlIG1vZHVsZXMgKi9cclxuICAgIHByaXZhdGUgbG9hZE1vZHVsZXM7XHJcbiAgICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZDtcclxufVxyXG4iXX0=