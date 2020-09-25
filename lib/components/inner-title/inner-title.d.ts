import { Anchor } from '../../shared-interfaces';
/**
 * Interface for InnerTitleComponent's "data"
 *
 * @property NAME (required|options) <--- TODO: update with interface properties
 */
import * as ɵngcc0 from '@angular/core';
export interface InnerTitleData {
    icon?: string;
    image?: string;
    title: {
        main: {
            text: string;
            classes?: any;
        };
        secondary?: {
            text: string;
            classes?: any;
        };
    };
    tools?: string;
    actions?: {
        select?: {
            label?: string;
            options: InnerTitleOptions[];
            payload?: any;
        };
        search?: {
            placeholder: string;
            payload: any;
            button?: {
                text: string;
                payload: any;
            };
            _meta?: any;
        };
        buttons?: InnerTitleButtons[];
    };
}
export interface InnerTitleOptions {
    text: string;
    value: string;
    disabled?: boolean;
    selected?: boolean;
}
export interface InnerTitleButtons {
    anchor: Anchor;
    text: string;
    classes?: any;
    icon?: any;
}
export declare class InnerTitleComponent {
    data: InnerTitleData;
    emit: any;
    onClick(payload: any): void;
    onChange(payload: any, value: any): void;
    onInputChange(payload: any, value: any): void;
    onInputEnter(payload: any, value: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InnerTitleComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<InnerTitleComponent, "n7-inner-title", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItdGl0bGUuZC50cyIsInNvdXJjZXMiOlsiaW5uZXItdGl0bGUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgSW5uZXJUaXRsZUNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBOQU1FIChyZXF1aXJlZHxvcHRpb25zKSA8LS0tIFRPRE86IHVwZGF0ZSB3aXRoIGludGVyZmFjZSBwcm9wZXJ0aWVzXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElubmVyVGl0bGVEYXRhIHtcclxuICAgIGljb24/OiBzdHJpbmc7XHJcbiAgICBpbWFnZT86IHN0cmluZztcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgbWFpbjoge1xyXG4gICAgICAgICAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGNsYXNzZXM/OiBhbnk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZWNvbmRhcnk/OiB7XHJcbiAgICAgICAgICAgIHRleHQ6IHN0cmluZztcclxuICAgICAgICAgICAgY2xhc3Nlcz86IGFueTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIHRvb2xzPzogc3RyaW5nO1xyXG4gICAgYWN0aW9ucz86IHtcclxuICAgICAgICBzZWxlY3Q/OiB7XHJcbiAgICAgICAgICAgIGxhYmVsPzogc3RyaW5nO1xyXG4gICAgICAgICAgICBvcHRpb25zOiBJbm5lclRpdGxlT3B0aW9uc1tdO1xyXG4gICAgICAgICAgICBwYXlsb2FkPzogYW55O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2VhcmNoPzoge1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICBwYXlsb2FkOiBhbnk7XHJcbiAgICAgICAgICAgIGJ1dHRvbj86IHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFueTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgX21ldGE/OiBhbnk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBidXR0b25zPzogSW5uZXJUaXRsZUJ1dHRvbnNbXTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJbm5lclRpdGxlT3B0aW9ucyB7XHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gICAgc2VsZWN0ZWQ/OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5uZXJUaXRsZUJ1dHRvbnMge1xyXG4gICAgYW5jaG9yOiBBbmNob3I7XHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICBjbGFzc2VzPzogYW55O1xyXG4gICAgaWNvbj86IGFueTtcclxufVxyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJbm5lclRpdGxlQ29tcG9uZW50IHtcclxuICAgIGRhdGE6IElubmVyVGl0bGVEYXRhO1xyXG4gICAgZW1pdDogYW55O1xyXG4gICAgb25DbGljayhwYXlsb2FkOiBhbnkpOiB2b2lkO1xyXG4gICAgb25DaGFuZ2UocGF5bG9hZDogYW55LCB2YWx1ZTogYW55KTogdm9pZDtcclxuICAgIG9uSW5wdXRDaGFuZ2UocGF5bG9hZDogYW55LCB2YWx1ZTogYW55KTogdm9pZDtcclxuICAgIG9uSW5wdXRFbnRlcihwYXlsb2FkOiBhbnksIHZhbHVlOiBhbnkpOiB2b2lkO1xyXG59XHJcbiJdfQ==