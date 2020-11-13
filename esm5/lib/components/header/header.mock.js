export var HEADER_MOCK = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLm1vY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsSUFBTSxXQUFXLEdBQWU7SUFDckMsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLDRDQUE0QztRQUNuRCxLQUFLLEVBQUUsU0FBUztRQUNoQixRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLE1BQU0sRUFBRTtZQUNOLE9BQU8sRUFBRSwwQkFBMEI7WUFDbkMsSUFBSSxFQUFFLFdBQVc7U0FDbEI7S0FDRjtJQUNELEdBQUcsRUFBRTtRQUNILEtBQUssRUFBRTtZQUNMLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFO1lBQ3ZGLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRTtZQUN0RSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLEVBQUU7WUFDbEY7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ3hCLElBQUksRUFBRSxjQUFjO2dCQUNwQixNQUFNLEVBQUU7b0JBQ04sRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFFO29CQUMzRTt3QkFDRSxJQUFJLEVBQUUsdUNBQXVDO3dCQUM3QyxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFO3dCQUNsQyxJQUFJLEVBQUUsY0FBYztxQkFDckI7b0JBQ0QsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxFQUFFO2lCQUNqRjthQUNGO1lBQ0QsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFO1NBQ3JFO0tBQ0Y7SUFDRCxNQUFNLEVBQUU7UUFDTixJQUFJLEVBQUUsZUFBZTtRQUNyQixPQUFPLEVBQUUsZ0JBQWdCO0tBQzFCO0lBQ0QsT0FBTyxFQUFFO1FBQ1A7WUFDRSxJQUFJLEVBQUUsY0FBYztZQUNwQixLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLEtBQUs7YUFDWjtZQUNELE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7U0FDOUI7UUFDRDtZQUNFLElBQUksRUFBRSxrQkFBa0I7WUFDeEIsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRTtTQUNqQztLQUNGO0lBQ0QsT0FBTyxFQUFFO1FBQ1A7WUFDRSxJQUFJLEVBQUUsUUFBUTtZQUNkLElBQUksRUFBRSxjQUFjO1lBQ3BCLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7WUFDN0IsT0FBTyxFQUFFLFFBQVE7U0FDbEI7UUFDRDtZQUNFLElBQUksRUFBRSxTQUFTO1lBQ2YsSUFBSSxFQUFFLGNBQWM7WUFDcEIsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtZQUM3QixPQUFPLEVBQUUsbUJBQW1CO1NBQzdCO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsT0FBTztZQUNiLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7WUFDN0IsT0FBTyxFQUFFLFFBQVE7U0FDbEI7S0FDRjtJQUNELElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSx5Q0FBeUM7UUFDOUMsSUFBSSxFQUFFLHNCQUFzQjtRQUM1QixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7S0FDNUM7SUFDRCxVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUU7WUFDSixPQUFPLEVBQUUsYUFBYTtTQUN2QjtRQUNELEtBQUssRUFBRTtZQUNMLE9BQU8sRUFBRSxjQUFjO1NBQ3hCO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVhZGVyRGF0YSB9IGZyb20gJy4vaGVhZGVyJztcblxuZXhwb3J0IGNvbnN0IEhFQURFUl9NT0NLOiBIZWFkZXJEYXRhID0ge1xuICBsb2dvOiB7XG4gICAgaW1hZ2U6ICdodHRwczovL3BsYWNlaW1nLmNvbS8xMjgvMTI4L2FueS9ncmF5c2NhbGUnLFxuICAgIHRpdGxlOiAnRGF0YVZpeicsXG4gICAgc3VidGl0bGU6ICdEYXRhIHZpc3VhbGl6YXRpb24nLFxuICAgIGFuY2hvcjoge1xuICAgICAgcGF5bG9hZDogJ2h0dHBzOi8vd3d3Lm5ldHNldmVuLml0LycsXG4gICAgICBocmVmOiAnL2V4YW1wbGVzJ1xuICAgIH1cbiAgfSxcbiAgbmF2OiB7XG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGV4dDogJ0hvbWUnLCBpY29uOiAnbjctaWNvbi1ob21lJywgYW5jaG9yOiB7IGhyZWY6ICcvZXhhbXBsZXMnLCB0YXJnZXQ6ICdfYmxhbmsnIH0gfSxcbiAgICAgIHsgdGV4dDogJ1N0dWZmJywgaWNvbjogJ243LWljb24taG9tZScsIGFuY2hvcjogeyBwYXlsb2FkOiAnL3N0dWZmJyB9IH0sXG4gICAgICB7IHRleHQ6ICdPdGhlciBTdHVmZicsIGljb246ICduNy1pY29uLWhvbWUnLCBhbmNob3I6IHsgcGF5bG9hZDogJy9vdGhlci1zdHVmZicgfSB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnRHJvcGRvd24nLFxuICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJy8nIH0sXG4gICAgICAgIGljb246ICduNy1pY29uLWhvbWUnLFxuICAgICAgICBzdWJuYXY6IFtcbiAgICAgICAgICB7IHRleHQ6ICdTdWJsZXZlbCAxJywgaWNvbjogJ243LWljb24taG9tZScsIGFuY2hvcjogeyBocmVmOiAnL2V4YW1wbGVzJyB9IH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ1N1YmxldmVsIDIgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQnLFxuICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcvc3VibGV2ZWwtMicgfSxcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLWhvbWUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IHRleHQ6ICdTdWJsZXZlbCAzJywgaWNvbjogJ243LWljb24taG9tZScsIGFuY2hvcjogeyBwYXlsb2FkOiAnL3N1YmxldmVsLTMnIH0gfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgeyB0ZXh0OiAnQ2F0cycsIGljb246ICduNy1pY29uLWhvbWUnLCBhbmNob3I6IHsgcGF5bG9hZDogJy9jYXRzJyB9IH1cbiAgICBdXG4gIH0sXG4gIHNlYXJjaDoge1xuICAgIGhpbnQ6ICdTZWFyY2ggKGhpbnQpJyxcbiAgICBwYXlsb2FkOiAnc2VhcmNoIHBheWxvYWQnXG4gIH0sXG4gIGFjdGlvbnM6IFtcbiAgICB7XG4gICAgICBpY29uOiAnbjctaWNvbi1iZWxsJyxcbiAgICAgIGJhZGdlOiB7XG4gICAgICAgIHRleHQ6ICcyMDAnXG4gICAgICB9LFxuICAgICAgYW5jaG9yOiB7IGhyZWY6ICcvZXhhbXBsZXMnIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246ICduNy1pY29uLWZhY2Vib29rJyxcbiAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnL2ZhY2Vib29rJyB9XG4gICAgfVxuICBdLFxuICBidXR0b25zOiBbXG4gICAge1xuICAgICAgdGV4dDogJ0xvZyBJbicsXG4gICAgICBpY29uOiAnbjctaWNvbi1iZWxsJyxcbiAgICAgIGFuY2hvcjogeyBocmVmOiAnL2V4YW1wbGVzJyB9LFxuICAgICAgY2xhc3NlczogJ243LWJ0bidcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdTaWduIFVwJyxcbiAgICAgIGljb246ICduNy1pY29uLWJlbGwnLFxuICAgICAgYW5jaG9yOiB7IGhyZWY6ICcvZXhhbXBsZXMnIH0sXG4gICAgICBjbGFzc2VzOiAnbjctYnRuIG43LWJ0bi1jdGEnXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnT3RoZXInLFxuICAgICAgYW5jaG9yOiB7IGhyZWY6ICcvZXhhbXBsZXMnIH0sXG4gICAgICBjbGFzc2VzOiAnbjctYnRuJ1xuICAgIH1cbiAgXSxcbiAgdXNlcjoge1xuICAgIGltZzogJ2h0dHBzOi8vcGxhY2VpbWcuY29tLzE1MC8xNTAvYW55L3Blb3BsZScsXG4gICAgbmFtZTogJ01hc3NpbWlsaWFubyBTcGlub3NhJyxcbiAgICBhbmNob3I6IHsgaHJlZjogJy91c2VyJywgdGFyZ2V0OiAnX2JsYW5rJyB9XG4gIH0sXG4gIG1lbnVUb2dnbGU6IHtcbiAgICBvcGVuOiB7XG4gICAgICBwYXlsb2FkOiAnbW9iaWxlLW9wZW4nXG4gICAgfSxcbiAgICBjbG9zZToge1xuICAgICAgcGF5bG9hZDogJ21vYmlsZS1jbG9zZSdcbiAgICB9XG4gIH1cbn07XG4iXX0=