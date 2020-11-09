export const HEADER_MOCK = {
    logo: {
        image: 'https://placeimg.com/128/128/any/grayscale',
        title: 'DataViz',
        subtitle: 'Data visualization',
        anchor: {
            payload: 'https://www.netseven.it/',
            href: '/examples'
        }
    },
    nav: {
        items: [
            { text: 'Home', icon: 'n7-icon-home', anchor: { href: '/examples', target: '_blank' } },
            { text: 'Stuff', icon: 'n7-icon-home', anchor: { payload: '/stuff' } },
            { text: 'Other Stuff', icon: 'n7-icon-home', anchor: { payload: '/other-stuff' } },
            {
                text: 'Dropdown',
                anchor: { payload: '/' },
                icon: 'n7-icon-home',
                subnav: [
                    { text: 'Sublevel 1', icon: 'n7-icon-home', anchor: { href: '/examples' } },
                    {
                        text: 'Sublevel 2 Lorem ipsum dolor sit amet',
                        anchor: { payload: '/sublevel-2' },
                        icon: 'n7-icon-home'
                    },
                    { text: 'Sublevel 3', icon: 'n7-icon-home', anchor: { payload: '/sublevel-3' } }
                ]
            },
            { text: 'Cats', icon: 'n7-icon-home', anchor: { payload: '/cats' } }
        ]
    },
    search: {
        hint: 'Search (hint)',
        payload: 'search payload'
    },
    actions: [
        {
            icon: 'n7-icon-bell',
            badge: {
                text: '200'
            },
            anchor: { href: '/examples' }
        },
        {
            icon: 'n7-icon-facebook',
            anchor: { payload: '/facebook' }
        }
    ],
    buttons: [
        {
            text: 'Log In',
            icon: 'n7-icon-bell',
            anchor: { href: '/examples' },
            classes: 'n7-btn'
        },
        {
            text: 'Sign Up',
            icon: 'n7-icon-bell',
            anchor: { href: '/examples' },
            classes: 'n7-btn n7-btn-cta'
        },
        {
            text: 'Other',
            anchor: { href: '/examples' },
            classes: 'n7-btn'
        }
    ],
    user: {
        img: 'https://placeimg.com/150/150/any/people',
        name: 'Massimiliano Spinosa',
        anchor: { href: '/user', target: '_blank' }
    },
    menuToggle: {
        open: {
            payload: 'mobile-open'
        },
        close: {
            payload: 'mobile-close'
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLm1vY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQWU7SUFDckMsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLDRDQUE0QztRQUNuRCxLQUFLLEVBQUUsU0FBUztRQUNoQixRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLE1BQU0sRUFBRTtZQUNOLE9BQU8sRUFBRSwwQkFBMEI7WUFDbkMsSUFBSSxFQUFFLFdBQVc7U0FDbEI7S0FDRjtJQUNELEdBQUcsRUFBRTtRQUNILEtBQUssRUFBRTtZQUNMLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFO1lBQ3ZGLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRTtZQUN0RSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLEVBQUU7WUFDbEY7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ3hCLElBQUksRUFBRSxjQUFjO2dCQUNwQixNQUFNLEVBQUU7b0JBQ04sRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFFO29CQUMzRTt3QkFDRSxJQUFJLEVBQUUsdUNBQXVDO3dCQUM3QyxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFO3dCQUNsQyxJQUFJLEVBQUUsY0FBYztxQkFDckI7b0JBQ0QsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxFQUFFO2lCQUNqRjthQUNGO1lBQ0QsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFO1NBQ3JFO0tBQ0Y7SUFDRCxNQUFNLEVBQUU7UUFDTixJQUFJLEVBQUUsZUFBZTtRQUNyQixPQUFPLEVBQUUsZ0JBQWdCO0tBQzFCO0lBQ0QsT0FBTyxFQUFFO1FBQ1A7WUFDRSxJQUFJLEVBQUUsY0FBYztZQUNwQixLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLEtBQUs7YUFDWjtZQUNELE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7U0FDOUI7UUFDRDtZQUNFLElBQUksRUFBRSxrQkFBa0I7WUFDeEIsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRTtTQUNqQztLQUNGO0lBQ0QsT0FBTyxFQUFFO1FBQ1A7WUFDRSxJQUFJLEVBQUUsUUFBUTtZQUNkLElBQUksRUFBRSxjQUFjO1lBQ3BCLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7WUFDN0IsT0FBTyxFQUFFLFFBQVE7U0FDbEI7UUFDRDtZQUNFLElBQUksRUFBRSxTQUFTO1lBQ2YsSUFBSSxFQUFFLGNBQWM7WUFDcEIsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtZQUM3QixPQUFPLEVBQUUsbUJBQW1CO1NBQzdCO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsT0FBTztZQUNiLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7WUFDN0IsT0FBTyxFQUFFLFFBQVE7U0FDbEI7S0FDRjtJQUNELElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSx5Q0FBeUM7UUFDOUMsSUFBSSxFQUFFLHNCQUFzQjtRQUM1QixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7S0FDNUM7SUFDRCxVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUU7WUFDSixPQUFPLEVBQUUsYUFBYTtTQUN2QjtRQUNELEtBQUssRUFBRTtZQUNMLE9BQU8sRUFBRSxjQUFjO1NBQ3hCO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVhZGVyRGF0YSB9IGZyb20gJy4vaGVhZGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBIRUFERVJfTU9DSzogSGVhZGVyRGF0YSA9IHtcclxuICBsb2dvOiB7XHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vcGxhY2VpbWcuY29tLzEyOC8xMjgvYW55L2dyYXlzY2FsZScsXHJcbiAgICB0aXRsZTogJ0RhdGFWaXonLFxyXG4gICAgc3VidGl0bGU6ICdEYXRhIHZpc3VhbGl6YXRpb24nLFxyXG4gICAgYW5jaG9yOiB7XHJcbiAgICAgIHBheWxvYWQ6ICdodHRwczovL3d3dy5uZXRzZXZlbi5pdC8nLFxyXG4gICAgICBocmVmOiAnL2V4YW1wbGVzJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbmF2OiB7XHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7IHRleHQ6ICdIb21lJywgaWNvbjogJ243LWljb24taG9tZScsIGFuY2hvcjogeyBocmVmOiAnL2V4YW1wbGVzJywgdGFyZ2V0OiAnX2JsYW5rJyB9IH0sXHJcbiAgICAgIHsgdGV4dDogJ1N0dWZmJywgaWNvbjogJ243LWljb24taG9tZScsIGFuY2hvcjogeyBwYXlsb2FkOiAnL3N0dWZmJyB9IH0sXHJcbiAgICAgIHsgdGV4dDogJ090aGVyIFN0dWZmJywgaWNvbjogJ243LWljb24taG9tZScsIGFuY2hvcjogeyBwYXlsb2FkOiAnL290aGVyLXN0dWZmJyB9IH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnRHJvcGRvd24nLFxyXG4gICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnLycgfSxcclxuICAgICAgICBpY29uOiAnbjctaWNvbi1ob21lJyxcclxuICAgICAgICBzdWJuYXY6IFtcclxuICAgICAgICAgIHsgdGV4dDogJ1N1YmxldmVsIDEnLCBpY29uOiAnbjctaWNvbi1ob21lJywgYW5jaG9yOiB7IGhyZWY6ICcvZXhhbXBsZXMnIH0gfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1N1YmxldmVsIDIgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQnLFxyXG4gICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJy9zdWJsZXZlbC0yJyB9LFxyXG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1ob21lJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ1N1YmxldmVsIDMnLCBpY29uOiAnbjctaWNvbi1ob21lJywgYW5jaG9yOiB7IHBheWxvYWQ6ICcvc3VibGV2ZWwtMycgfSB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7IHRleHQ6ICdDYXRzJywgaWNvbjogJ243LWljb24taG9tZScsIGFuY2hvcjogeyBwYXlsb2FkOiAnL2NhdHMnIH0gfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAgc2VhcmNoOiB7XHJcbiAgICBoaW50OiAnU2VhcmNoIChoaW50KScsXHJcbiAgICBwYXlsb2FkOiAnc2VhcmNoIHBheWxvYWQnXHJcbiAgfSxcclxuICBhY3Rpb25zOiBbXHJcbiAgICB7XHJcbiAgICAgIGljb246ICduNy1pY29uLWJlbGwnLFxyXG4gICAgICBiYWRnZToge1xyXG4gICAgICAgIHRleHQ6ICcyMDAnXHJcbiAgICAgIH0sXHJcbiAgICAgIGFuY2hvcjogeyBocmVmOiAnL2V4YW1wbGVzJyB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpY29uOiAnbjctaWNvbi1mYWNlYm9vaycsXHJcbiAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnL2ZhY2Vib29rJyB9XHJcbiAgICB9XHJcbiAgXSxcclxuICBidXR0b25zOiBbXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICdMb2cgSW4nLFxyXG4gICAgICBpY29uOiAnbjctaWNvbi1iZWxsJyxcclxuICAgICAgYW5jaG9yOiB7IGhyZWY6ICcvZXhhbXBsZXMnIH0sXHJcbiAgICAgIGNsYXNzZXM6ICduNy1idG4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiAnU2lnbiBVcCcsXHJcbiAgICAgIGljb246ICduNy1pY29uLWJlbGwnLFxyXG4gICAgICBhbmNob3I6IHsgaHJlZjogJy9leGFtcGxlcycgfSxcclxuICAgICAgY2xhc3NlczogJ243LWJ0biBuNy1idG4tY3RhJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogJ090aGVyJyxcclxuICAgICAgYW5jaG9yOiB7IGhyZWY6ICcvZXhhbXBsZXMnIH0sXHJcbiAgICAgIGNsYXNzZXM6ICduNy1idG4nXHJcbiAgICB9XHJcbiAgXSxcclxuICB1c2VyOiB7XHJcbiAgICBpbWc6ICdodHRwczovL3BsYWNlaW1nLmNvbS8xNTAvMTUwL2FueS9wZW9wbGUnLFxyXG4gICAgbmFtZTogJ01hc3NpbWlsaWFubyBTcGlub3NhJyxcclxuICAgIGFuY2hvcjogeyBocmVmOiAnL3VzZXInLCB0YXJnZXQ6ICdfYmxhbmsnIH1cclxuICB9LFxyXG4gIG1lbnVUb2dnbGU6IHtcclxuICAgIG9wZW46IHtcclxuICAgICAgcGF5bG9hZDogJ21vYmlsZS1vcGVuJ1xyXG4gICAgfSxcclxuICAgIGNsb3NlOiB7XHJcbiAgICAgIHBheWxvYWQ6ICdtb2JpbGUtY2xvc2UnXHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iXX0=