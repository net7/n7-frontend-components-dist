import { AfterContentChecked } from '@angular/core';
import { GridLayerOptions } from 'leaflet';
/**
 * Interface for TileLayer's "data"
 *
 * @property url (required)
 * @property options (required)
 */
export interface TileLayerData {
    url: string;
    options: GridLayerOptions;
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
}
