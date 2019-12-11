/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/image-viewer/image-viewer.mock.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const IMAGE_VIEWER_MOCK = {
    images: [
        { type: 'image', url: "/assets/images/large-image.jpg", buildPyramid: false }
    ],
    thumbs: [
        { url: 'http://placekitten.com/200/130', classes: 'is-active' },
        { url: 'http://placekitten.com/90/180' },
        { url: 'http://placekitten.com/90/110' }
    ],
    viewerId: "seadragon-viewer",
    libOptions: {
        /* SHOW GROUP */
        showNavigator: false,
        //shows the mini-map
        autoHideControls: false,
        /* SHOW BUTTONS */
        showRotationControl: false,
        showSequenceControl: false,
        showHomeControl: true,
        showZoomControl: true,
        /* SEQUENCE */
        sequenceMode: true,
        //allows having multiple images (as in array of images + zoomed image)
        showReferenceStrip: false,
        //shows the images array (default: horizontally)
        navigationControlAnchor: 'TOP_RIGHT',
    },
    _setViewer: (/**
     * @param {?} viewer
     * @return {?}
     */
    (viewer) => console.log(viewer)),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLm1vY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ltYWdlLXZpZXdlci9pbWFnZS12aWV3ZXIubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxNQUFNLE9BQU8saUJBQWlCLEdBQXFCO0lBQ2pELE1BQU0sRUFBRTtRQUNOLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUMsZ0NBQWdDLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBQztLQUMzRTtJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUMsR0FBRyxFQUFFLGdDQUFnQyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUM7UUFDN0QsRUFBQyxHQUFHLEVBQUUsK0JBQStCLEVBQUM7UUFDdEMsRUFBQyxHQUFHLEVBQUUsK0JBQStCLEVBQUM7S0FDdkM7SUFDRCxRQUFRLEVBQUUsa0JBQWtCO0lBRTNCLFVBQVUsRUFBRTs7UUFFWCxhQUFhLEVBQWEsS0FBSzs7UUFDL0IsZ0JBQWdCLEVBQVUsS0FBSzs7UUFHL0IsbUJBQW1CLEVBQU8sS0FBSztRQUMvQixtQkFBbUIsRUFBTyxLQUFLO1FBQy9CLGVBQWUsRUFBVyxJQUFJO1FBQzlCLGVBQWUsRUFBVyxJQUFJOztRQUc5QixZQUFZLEVBQWMsSUFBSTs7UUFDOUIsa0JBQWtCLEVBQVEsS0FBSzs7UUFFL0IsdUJBQXVCLEVBQUcsV0FBVztLQUNyQztJQUVELFVBQVU7Ozs7SUFBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtDQUM5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElJbWFnZVZpZXdlckRhdGEgfSBmcm9tICcuL2ltYWdlLXZpZXdlcic7XG5cbmV4cG9ydCBjb25zdCBJTUFHRV9WSUVXRVJfTU9DSzogSUltYWdlVmlld2VyRGF0YSA9IHtcbiAgaW1hZ2VzOiBbXG4gICAge3R5cGU6ICdpbWFnZScsIHVybDpcIi9hc3NldHMvaW1hZ2VzL2xhcmdlLWltYWdlLmpwZ1wiLCBidWlsZFB5cmFtaWQ6IGZhbHNlfVxuICBdLFxuICB0aHVtYnM6IFtcbiAgICB7dXJsOiAnaHR0cDovL3BsYWNla2l0dGVuLmNvbS8yMDAvMTMwJywgY2xhc3NlczogJ2lzLWFjdGl2ZSd9LFxuICAgIHt1cmw6ICdodHRwOi8vcGxhY2VraXR0ZW4uY29tLzkwLzE4MCd9LFxuICAgIHt1cmw6ICdodHRwOi8vcGxhY2VraXR0ZW4uY29tLzkwLzExMCd9XG4gIF0sXG4gIHZpZXdlcklkOiBcInNlYWRyYWdvbi12aWV3ZXJcIixcblxuICAgbGliT3B0aW9uczoge1xuICAgIC8qIFNIT1cgR1JPVVAgKi9cbiAgICBzaG93TmF2aWdhdG9yICAgICAgICAgICA6IGZhbHNlLCAvL3Nob3dzIHRoZSBtaW5pLW1hcFxuICAgIGF1dG9IaWRlQ29udHJvbHMgICAgICAgIDogZmFsc2UsXG5cbiAgICAvKiBTSE9XIEJVVFRPTlMgKi9cbiAgICBzaG93Um90YXRpb25Db250cm9sICAgICA6IGZhbHNlLFxuICAgIHNob3dTZXF1ZW5jZUNvbnRyb2wgICAgIDogZmFsc2UsXG4gICAgc2hvd0hvbWVDb250cm9sICAgICAgICAgOiB0cnVlLFxuICAgIHNob3dab29tQ29udHJvbCAgICAgICAgIDogdHJ1ZSxcblxuICAgIC8qIFNFUVVFTkNFICovXG4gICAgc2VxdWVuY2VNb2RlICAgICAgICAgICAgOiB0cnVlLCAgICAgICAvL2FsbG93cyBoYXZpbmcgbXVsdGlwbGUgaW1hZ2VzIChhcyBpbiBhcnJheSBvZiBpbWFnZXMgKyB6b29tZWQgaW1hZ2UpXG4gICAgc2hvd1JlZmVyZW5jZVN0cmlwICAgICAgOiBmYWxzZSwgICAgICAvL3Nob3dzIHRoZSBpbWFnZXMgYXJyYXkgKGRlZmF1bHQ6IGhvcml6b250YWxseSlcblxuICAgIG5hdmlnYXRpb25Db250cm9sQW5jaG9yIDogJ1RPUF9SSUdIVCcsXG4gICB9LFxuXG4gICBfc2V0Vmlld2VyIDogKHZpZXdlcikgPT4gY29uc29sZS5sb2codmlld2VyKSxcbn0iXX0=