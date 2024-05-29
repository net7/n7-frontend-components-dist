export const IMAGE_VIEWER_MOCK = {
    images: [
        {
            type: 'image',
            url: 'http://placekitten.com/1920/1080',
            buildPyramid: false,
        },
        // { type: 'image', url: 'http://placekitten.com/500/600', buildPyramid: false },
        // { type: 'image', url: 'http://placekitten.com/700/400', buildPyramid: false }
    ],
    viewerId: 'seadragon-viewer',
    hideNavigation: false,
    libOptions: {
        /* SHOW GROUP */
        showNavigator: false, // shows the mini-map
        autoHideControls: false,
        /* SHOW BUTTONS */
        showRotationControl: false,
        showSequenceControl: true,
        showHomeControl: true,
        showZoomControl: true,
        // showNavigationControl: false,
        /* SEQUENCE */
        sequenceMode: true, // allows having multiple images (as in array of images + zoomed image)
        navigationControlAnchor: 'TOP_RIGHT',
    },
    _setViewer: (viewer) => viewer,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLm1vY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvaW1hZ2Utdmlld2VyL2ltYWdlLXZpZXdlci5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFvQjtJQUNoRCxNQUFNLEVBQUU7UUFDTjtZQUNFLElBQUksRUFBRSxPQUFPO1lBQ2IsR0FBRyxFQUFFLGtDQUFrQztZQUN2QyxZQUFZLEVBQUUsS0FBSztTQUNwQjtRQUNELGlGQUFpRjtRQUNqRixnRkFBZ0Y7S0FDakY7SUFDRCxRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLFVBQVUsRUFBRTtRQUNWLGdCQUFnQjtRQUNoQixhQUFhLEVBQUUsS0FBSyxFQUFFLHFCQUFxQjtRQUMzQyxnQkFBZ0IsRUFBRSxLQUFLO1FBRXZCLGtCQUFrQjtRQUNsQixtQkFBbUIsRUFBRSxLQUFLO1FBQzFCLG1CQUFtQixFQUFFLElBQUk7UUFDekIsZUFBZSxFQUFFLElBQUk7UUFDckIsZUFBZSxFQUFFLElBQUk7UUFDckIsZ0NBQWdDO1FBRWhDLGNBQWM7UUFDZCxZQUFZLEVBQUUsSUFBSSxFQUFFLHVFQUF1RTtRQUMzRix1QkFBdUIsRUFBRSxXQUFXO0tBQ3JDO0lBRUQsVUFBVSxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNO0NBQy9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbWFnZVZpZXdlckRhdGEgfSBmcm9tICcuL2ltYWdlLXZpZXdlcic7XG5cbmV4cG9ydCBjb25zdCBJTUFHRV9WSUVXRVJfTU9DSzogSW1hZ2VWaWV3ZXJEYXRhID0ge1xuICBpbWFnZXM6IFtcbiAgICB7XG4gICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgdXJsOiAnaHR0cDovL3BsYWNla2l0dGVuLmNvbS8xOTIwLzEwODAnLFxuICAgICAgYnVpbGRQeXJhbWlkOiBmYWxzZSxcbiAgICB9LFxuICAgIC8vIHsgdHlwZTogJ2ltYWdlJywgdXJsOiAnaHR0cDovL3BsYWNla2l0dGVuLmNvbS81MDAvNjAwJywgYnVpbGRQeXJhbWlkOiBmYWxzZSB9LFxuICAgIC8vIHsgdHlwZTogJ2ltYWdlJywgdXJsOiAnaHR0cDovL3BsYWNla2l0dGVuLmNvbS83MDAvNDAwJywgYnVpbGRQeXJhbWlkOiBmYWxzZSB9XG4gIF0sXG4gIHZpZXdlcklkOiAnc2VhZHJhZ29uLXZpZXdlcicsXG4gIGhpZGVOYXZpZ2F0aW9uOiBmYWxzZSxcbiAgbGliT3B0aW9uczoge1xuICAgIC8qIFNIT1cgR1JPVVAgKi9cbiAgICBzaG93TmF2aWdhdG9yOiBmYWxzZSwgLy8gc2hvd3MgdGhlIG1pbmktbWFwXG4gICAgYXV0b0hpZGVDb250cm9sczogZmFsc2UsXG5cbiAgICAvKiBTSE9XIEJVVFRPTlMgKi9cbiAgICBzaG93Um90YXRpb25Db250cm9sOiBmYWxzZSxcbiAgICBzaG93U2VxdWVuY2VDb250cm9sOiB0cnVlLFxuICAgIHNob3dIb21lQ29udHJvbDogdHJ1ZSxcbiAgICBzaG93Wm9vbUNvbnRyb2w6IHRydWUsXG4gICAgLy8gc2hvd05hdmlnYXRpb25Db250cm9sOiBmYWxzZSxcblxuICAgIC8qIFNFUVVFTkNFICovXG4gICAgc2VxdWVuY2VNb2RlOiB0cnVlLCAvLyBhbGxvd3MgaGF2aW5nIG11bHRpcGxlIGltYWdlcyAoYXMgaW4gYXJyYXkgb2YgaW1hZ2VzICsgem9vbWVkIGltYWdlKVxuICAgIG5hdmlnYXRpb25Db250cm9sQW5jaG9yOiAnVE9QX1JJR0hUJyxcbiAgfSxcblxuICBfc2V0Vmlld2VyOiAodmlld2VyKSA9PiB2aWV3ZXIsXG59O1xuIl19