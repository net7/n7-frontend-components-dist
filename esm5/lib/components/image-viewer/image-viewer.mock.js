/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var IMAGE_VIEWER_MOCK = {
    // viewerWidth: 700,
    viewerHeight: 400,
    images: [
        { type: 'image', url: "/assets/images/large-image.jpg", buildPyramid: false },
        { type: 'image', url: "http://placekitten.com/2000/800", buildPyramid: false },
        { type: 'image', url: "http://placekitten.com/800/1400", buildPyramid: false }
    ],
    viewerId: "seadragon-viewer",
    libOptions: {
        /* SHOW GROUP */
        showNavigator: false,
        //shows the mini-map
        autoHideControls: false,
        /* SHOW BUTTONS */
        showRotationControl: false,
        showSequenceControl: true,
        showHomeControl: true,
        showZoomControl: true,
        /* SEQUENCE */
        sequenceMode: true,
        //allows having multiple images (as in array of images + zoomed image)
        showReferenceStrip: false,
        //shows the images array (default: horizontally)
        navigationControlAnchor: 'TOP_RIGHT'
    },
    _setViewer: (/**
     * @param {?} viewer
     * @return {?}
     */
    function (viewer) { return console.log(viewer); }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLm1vY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ltYWdlLXZpZXdlci9pbWFnZS12aWV3ZXIubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE1BQU0sS0FBTyxpQkFBaUIsR0FBcUI7O0lBR2pELFlBQVksRUFBRSxHQUFHO0lBQ2pCLE1BQU0sRUFBRTtRQUNOLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUMsZ0NBQWdDLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBQztRQUMxRSxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFDLGlDQUFpQyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUM7UUFDM0UsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBQyxpQ0FBaUMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFDO0tBQzVFO0lBQ0QsUUFBUSxFQUFFLGtCQUFrQjtJQUMzQixVQUFVLEVBQUU7O1FBRVgsYUFBYSxFQUFhLEtBQUs7O1FBQy9CLGdCQUFnQixFQUFVLEtBQUs7O1FBRy9CLG1CQUFtQixFQUFPLEtBQUs7UUFDL0IsbUJBQW1CLEVBQU8sSUFBSTtRQUM5QixlQUFlLEVBQVcsSUFBSTtRQUM5QixlQUFlLEVBQVcsSUFBSTs7UUFHOUIsWUFBWSxFQUFjLElBQUk7O1FBQzlCLGtCQUFrQixFQUFRLEtBQUs7O1FBRS9CLHVCQUF1QixFQUFHLFdBQVc7S0FDckM7SUFFRCxVQUFVOzs7O0lBQUcsVUFBQyxNQUFNLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFuQixDQUFtQixDQUFBO0NBQzlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUltYWdlVmlld2VyRGF0YSB9IGZyb20gJy4vaW1hZ2Utdmlld2VyJztcblxuZXhwb3J0IGNvbnN0IElNQUdFX1ZJRVdFUl9NT0NLOiBJSW1hZ2VWaWV3ZXJEYXRhID0ge1xuXG4gIC8vIHZpZXdlcldpZHRoOiA3MDAsXG4gIHZpZXdlckhlaWdodDogNDAwLFxuICBpbWFnZXM6IFtcbiAgICB7dHlwZTogJ2ltYWdlJywgdXJsOlwiL2Fzc2V0cy9pbWFnZXMvbGFyZ2UtaW1hZ2UuanBnXCIsIGJ1aWxkUHlyYW1pZDogZmFsc2V9LFxuICAgIHt0eXBlOiAnaW1hZ2UnLCB1cmw6XCJodHRwOi8vcGxhY2VraXR0ZW4uY29tLzIwMDAvODAwXCIsIGJ1aWxkUHlyYW1pZDogZmFsc2V9LFxuICAgIHt0eXBlOiAnaW1hZ2UnLCB1cmw6XCJodHRwOi8vcGxhY2VraXR0ZW4uY29tLzgwMC8xNDAwXCIsIGJ1aWxkUHlyYW1pZDogZmFsc2V9XG4gIF0sXG4gIHZpZXdlcklkOiBcInNlYWRyYWdvbi12aWV3ZXJcIixcbiAgIGxpYk9wdGlvbnM6IHtcbiAgICAvKiBTSE9XIEdST1VQICovXG4gICAgc2hvd05hdmlnYXRvciAgICAgICAgICAgOiBmYWxzZSwgLy9zaG93cyB0aGUgbWluaS1tYXBcbiAgICBhdXRvSGlkZUNvbnRyb2xzICAgICAgICA6IGZhbHNlLFxuICAgIFxuICAgIC8qIFNIT1cgQlVUVE9OUyAqL1xuICAgIHNob3dSb3RhdGlvbkNvbnRyb2wgICAgIDogZmFsc2UsXG4gICAgc2hvd1NlcXVlbmNlQ29udHJvbCAgICAgOiB0cnVlLFxuICAgIHNob3dIb21lQ29udHJvbCAgICAgICAgIDogdHJ1ZSxcbiAgICBzaG93Wm9vbUNvbnRyb2wgICAgICAgICA6IHRydWUsXG5cbiAgICAvKiBTRVFVRU5DRSAqL1xuICAgIHNlcXVlbmNlTW9kZSAgICAgICAgICAgIDogdHJ1ZSwgICAgICAgLy9hbGxvd3MgaGF2aW5nIG11bHRpcGxlIGltYWdlcyAoYXMgaW4gYXJyYXkgb2YgaW1hZ2VzICsgem9vbWVkIGltYWdlKVxuICAgIHNob3dSZWZlcmVuY2VTdHJpcCAgICAgIDogZmFsc2UsICAgICAgLy9zaG93cyB0aGUgaW1hZ2VzIGFycmF5IChkZWZhdWx0OiBob3Jpem9udGFsbHkpXG5cbiAgICBuYXZpZ2F0aW9uQ29udHJvbEFuY2hvciA6ICdUT1BfUklHSFQnXG4gICB9LFxuXG4gICBfc2V0Vmlld2VyIDogKHZpZXdlcikgPT4gY29uc29sZS5sb2codmlld2VyKSxcbn0iXX0=