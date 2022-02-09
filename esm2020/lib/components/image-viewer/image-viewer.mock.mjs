export const IMAGE_VIEWER_MOCK = {
    images: [
        { type: 'image', url: 'http://placekitten.com/1920/1080', buildPyramid: false },
        // { type: 'image', url: 'http://placekitten.com/500/600', buildPyramid: false },
        // { type: 'image', url: 'http://placekitten.com/700/400', buildPyramid: false }
    ],
    viewerId: 'seadragon-viewer',
    hideNavigation: false,
    libOptions: {
        /* SHOW GROUP */
        showNavigator: false,
        autoHideControls: false,
        /* SHOW BUTTONS */
        showRotationControl: false,
        showSequenceControl: true,
        showHomeControl: true,
        showZoomControl: true,
        // showNavigationControl: false,
        /* SEQUENCE */
        sequenceMode: true,
        navigationControlAnchor: 'TOP_RIGHT',
    },
    _setViewer: (viewer) => viewer,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLm1vY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvaW1hZ2Utdmlld2VyL2ltYWdlLXZpZXdlci5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFvQjtJQUNoRCxNQUFNLEVBQUU7UUFDTixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLGtDQUFrQyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUU7UUFDL0UsaUZBQWlGO1FBQ2pGLGdGQUFnRjtLQUNqRjtJQUNELFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsY0FBYyxFQUFFLEtBQUs7SUFDckIsVUFBVSxFQUFFO1FBQ1YsZ0JBQWdCO1FBQ2hCLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLGdCQUFnQixFQUFFLEtBQUs7UUFFdkIsa0JBQWtCO1FBQ2xCLG1CQUFtQixFQUFFLEtBQUs7UUFDMUIsbUJBQW1CLEVBQUUsSUFBSTtRQUN6QixlQUFlLEVBQUUsSUFBSTtRQUNyQixlQUFlLEVBQUUsSUFBSTtRQUNyQixnQ0FBZ0M7UUFFaEMsY0FBYztRQUNkLFlBQVksRUFBRSxJQUFJO1FBQ2xCLHVCQUF1QixFQUFFLFdBQVc7S0FDckM7SUFFRCxVQUFVLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU07Q0FDL0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEltYWdlVmlld2VyRGF0YSB9IGZyb20gJy4vaW1hZ2Utdmlld2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBJTUFHRV9WSUVXRVJfTU9DSzogSW1hZ2VWaWV3ZXJEYXRhID0ge1xyXG4gIGltYWdlczogW1xyXG4gICAgeyB0eXBlOiAnaW1hZ2UnLCB1cmw6ICdodHRwOi8vcGxhY2VraXR0ZW4uY29tLzE5MjAvMTA4MCcsIGJ1aWxkUHlyYW1pZDogZmFsc2UgfSxcclxuICAgIC8vIHsgdHlwZTogJ2ltYWdlJywgdXJsOiAnaHR0cDovL3BsYWNla2l0dGVuLmNvbS81MDAvNjAwJywgYnVpbGRQeXJhbWlkOiBmYWxzZSB9LFxyXG4gICAgLy8geyB0eXBlOiAnaW1hZ2UnLCB1cmw6ICdodHRwOi8vcGxhY2VraXR0ZW4uY29tLzcwMC80MDAnLCBidWlsZFB5cmFtaWQ6IGZhbHNlIH1cclxuICBdLFxyXG4gIHZpZXdlcklkOiAnc2VhZHJhZ29uLXZpZXdlcicsXHJcbiAgaGlkZU5hdmlnYXRpb246IGZhbHNlLFxyXG4gIGxpYk9wdGlvbnM6IHtcclxuICAgIC8qIFNIT1cgR1JPVVAgKi9cclxuICAgIHNob3dOYXZpZ2F0b3I6IGZhbHNlLCAvLyBzaG93cyB0aGUgbWluaS1tYXBcclxuICAgIGF1dG9IaWRlQ29udHJvbHM6IGZhbHNlLFxyXG5cclxuICAgIC8qIFNIT1cgQlVUVE9OUyAqL1xyXG4gICAgc2hvd1JvdGF0aW9uQ29udHJvbDogZmFsc2UsXHJcbiAgICBzaG93U2VxdWVuY2VDb250cm9sOiB0cnVlLFxyXG4gICAgc2hvd0hvbWVDb250cm9sOiB0cnVlLFxyXG4gICAgc2hvd1pvb21Db250cm9sOiB0cnVlLFxyXG4gICAgLy8gc2hvd05hdmlnYXRpb25Db250cm9sOiBmYWxzZSxcclxuXHJcbiAgICAvKiBTRVFVRU5DRSAqL1xyXG4gICAgc2VxdWVuY2VNb2RlOiB0cnVlLCAvLyBhbGxvd3MgaGF2aW5nIG11bHRpcGxlIGltYWdlcyAoYXMgaW4gYXJyYXkgb2YgaW1hZ2VzICsgem9vbWVkIGltYWdlKVxyXG4gICAgbmF2aWdhdGlvbkNvbnRyb2xBbmNob3I6ICdUT1BfUklHSFQnLFxyXG4gIH0sXHJcblxyXG4gIF9zZXRWaWV3ZXI6ICh2aWV3ZXIpID0+IHZpZXdlcixcclxufTtcclxuIl19