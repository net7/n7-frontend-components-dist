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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLm1vY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvaW1hZ2Utdmlld2VyL2ltYWdlLXZpZXdlci5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFvQjtJQUNoRCxNQUFNLEVBQUU7UUFDTixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLGtDQUFrQyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUU7UUFDL0UsaUZBQWlGO1FBQ2pGLGdGQUFnRjtLQUNqRjtJQUNELFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsY0FBYyxFQUFFLEtBQUs7SUFDckIsVUFBVSxFQUFFO1FBQ1YsZ0JBQWdCO1FBQ2hCLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLGdCQUFnQixFQUFFLEtBQUs7UUFFdkIsa0JBQWtCO1FBQ2xCLG1CQUFtQixFQUFFLEtBQUs7UUFDMUIsbUJBQW1CLEVBQUUsSUFBSTtRQUN6QixlQUFlLEVBQUUsSUFBSTtRQUNyQixlQUFlLEVBQUUsSUFBSTtRQUNyQixnQ0FBZ0M7UUFFaEMsY0FBYztRQUNkLFlBQVksRUFBRSxJQUFJO1FBQ2xCLHVCQUF1QixFQUFFLFdBQVc7S0FDckM7SUFFRCxVQUFVLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU07Q0FDL0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEltYWdlVmlld2VyRGF0YSB9IGZyb20gJy4vaW1hZ2Utdmlld2VyJztcblxuZXhwb3J0IGNvbnN0IElNQUdFX1ZJRVdFUl9NT0NLOiBJbWFnZVZpZXdlckRhdGEgPSB7XG4gIGltYWdlczogW1xuICAgIHsgdHlwZTogJ2ltYWdlJywgdXJsOiAnaHR0cDovL3BsYWNla2l0dGVuLmNvbS8xOTIwLzEwODAnLCBidWlsZFB5cmFtaWQ6IGZhbHNlIH0sXG4gICAgLy8geyB0eXBlOiAnaW1hZ2UnLCB1cmw6ICdodHRwOi8vcGxhY2VraXR0ZW4uY29tLzUwMC82MDAnLCBidWlsZFB5cmFtaWQ6IGZhbHNlIH0sXG4gICAgLy8geyB0eXBlOiAnaW1hZ2UnLCB1cmw6ICdodHRwOi8vcGxhY2VraXR0ZW4uY29tLzcwMC80MDAnLCBidWlsZFB5cmFtaWQ6IGZhbHNlIH1cbiAgXSxcbiAgdmlld2VySWQ6ICdzZWFkcmFnb24tdmlld2VyJyxcbiAgaGlkZU5hdmlnYXRpb246IGZhbHNlLFxuICBsaWJPcHRpb25zOiB7XG4gICAgLyogU0hPVyBHUk9VUCAqL1xuICAgIHNob3dOYXZpZ2F0b3I6IGZhbHNlLCAvLyBzaG93cyB0aGUgbWluaS1tYXBcbiAgICBhdXRvSGlkZUNvbnRyb2xzOiBmYWxzZSxcblxuICAgIC8qIFNIT1cgQlVUVE9OUyAqL1xuICAgIHNob3dSb3RhdGlvbkNvbnRyb2w6IGZhbHNlLFxuICAgIHNob3dTZXF1ZW5jZUNvbnRyb2w6IHRydWUsXG4gICAgc2hvd0hvbWVDb250cm9sOiB0cnVlLFxuICAgIHNob3dab29tQ29udHJvbDogdHJ1ZSxcbiAgICAvLyBzaG93TmF2aWdhdGlvbkNvbnRyb2w6IGZhbHNlLFxuXG4gICAgLyogU0VRVUVOQ0UgKi9cbiAgICBzZXF1ZW5jZU1vZGU6IHRydWUsIC8vIGFsbG93cyBoYXZpbmcgbXVsdGlwbGUgaW1hZ2VzIChhcyBpbiBhcnJheSBvZiBpbWFnZXMgKyB6b29tZWQgaW1hZ2UpXG4gICAgbmF2aWdhdGlvbkNvbnRyb2xBbmNob3I6ICdUT1BfUklHSFQnLFxuICB9LFxuXG4gIF9zZXRWaWV3ZXI6ICh2aWV3ZXIpID0+IHZpZXdlcixcbn07XG4iXX0=