/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/header/header.mock.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
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
            { text: 'Shiny Stuff', icon: 'n7-icon-home', anchor: { payload: '/shiny-stuff' } },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLm1vY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxNQUFNLEtBQU8sV0FBVyxHQUFlO0lBQ3JDLElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSw0Q0FBNEM7UUFDbkQsS0FBSyxFQUFFLFNBQVM7UUFDaEIsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixNQUFNLEVBQUU7WUFDTixPQUFPLEVBQUUsMEJBQTBCO1lBQ25DLElBQUksRUFBRSxXQUFXO1NBQ2xCO0tBQ0Y7SUFDRCxHQUFHLEVBQUU7UUFDSCxLQUFLLEVBQUU7WUFDTCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBRTtZQUN2RixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUU7WUFDdEUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxFQUFFO1lBQ2xGO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUN4QixJQUFJLEVBQUUsY0FBYztnQkFDcEIsTUFBTSxFQUFFO29CQUNOLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsRUFBRTtvQkFDM0U7d0JBQ0UsSUFBSSxFQUFFLHVDQUF1Qzt3QkFDN0MsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRTt3QkFDbEMsSUFBSSxFQUFFLGNBQWM7cUJBQ3JCO29CQUNELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsRUFBRTtpQkFDakY7YUFDRjtZQUNELEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsRUFBRTtZQUNsRixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUU7U0FDckU7S0FDRjtJQUNELE1BQU0sRUFBRTtRQUNOLElBQUksRUFBRSxlQUFlO1FBQ3JCLE9BQU8sRUFBRSxnQkFBZ0I7S0FDMUI7SUFDRCxPQUFPLEVBQUU7UUFDUDtZQUNFLElBQUksRUFBRSxjQUFjO1lBQ3BCLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsS0FBSzthQUNaO1lBQ0QsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtTQUM5QjtRQUNEO1lBQ0UsSUFBSSxFQUFFLGtCQUFrQjtZQUN4QixNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFO1NBQ2pDO0tBQ0Y7SUFDRCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUseUNBQXlDO1FBQzlDLElBQUksRUFBRSxzQkFBc0I7UUFDNUIsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFO0tBQzVDO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFO1lBQ0osT0FBTyxFQUFFLGFBQWE7U0FDdkI7UUFDRCxLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUUsY0FBYztTQUN4QjtLQUNGO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFkZXJEYXRhIH0gZnJvbSAnLi9oZWFkZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhFQURFUl9NT0NLOiBIZWFkZXJEYXRhID0ge1xyXG4gIGxvZ286IHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly9wbGFjZWltZy5jb20vMTI4LzEyOC9hbnkvZ3JheXNjYWxlJyxcclxuICAgIHRpdGxlOiAnRGF0YVZpeicsXHJcbiAgICBzdWJ0aXRsZTogJ0RhdGEgdmlzdWFsaXphdGlvbicsXHJcbiAgICBhbmNob3I6IHtcclxuICAgICAgcGF5bG9hZDogJ2h0dHBzOi8vd3d3Lm5ldHNldmVuLml0LycsXHJcbiAgICAgIGhyZWY6ICcvZXhhbXBsZXMnXHJcbiAgICB9XHJcbiAgfSxcclxuICBuYXY6IHtcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHsgdGV4dDogJ0hvbWUnLCBpY29uOiAnbjctaWNvbi1ob21lJywgYW5jaG9yOiB7IGhyZWY6ICcvZXhhbXBsZXMnLCB0YXJnZXQ6ICdfYmxhbmsnIH0gfSxcclxuICAgICAgeyB0ZXh0OiAnU3R1ZmYnLCBpY29uOiAnbjctaWNvbi1ob21lJywgYW5jaG9yOiB7IHBheWxvYWQ6ICcvc3R1ZmYnIH0gfSxcclxuICAgICAgeyB0ZXh0OiAnT3RoZXIgU3R1ZmYnLCBpY29uOiAnbjctaWNvbi1ob21lJywgYW5jaG9yOiB7IHBheWxvYWQ6ICcvb3RoZXItc3R1ZmYnIH0gfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdEcm9wZG93bicsXHJcbiAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcvJyB9LFxyXG4gICAgICAgIGljb246ICduNy1pY29uLWhvbWUnLFxyXG4gICAgICAgIHN1Ym5hdjogW1xyXG4gICAgICAgICAgeyB0ZXh0OiAnU3VibGV2ZWwgMScsIGljb246ICduNy1pY29uLWhvbWUnLCBhbmNob3I6IHsgaHJlZjogJy9leGFtcGxlcycgfSB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnU3VibGV2ZWwgMiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCcsXHJcbiAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnL3N1YmxldmVsLTInIH0sXHJcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLWhvbWUnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnU3VibGV2ZWwgMycsIGljb246ICduNy1pY29uLWhvbWUnLCBhbmNob3I6IHsgcGF5bG9hZDogJy9zdWJsZXZlbC0zJyB9IH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgdGV4dDogJ1NoaW55IFN0dWZmJywgaWNvbjogJ243LWljb24taG9tZScsIGFuY2hvcjogeyBwYXlsb2FkOiAnL3NoaW55LXN0dWZmJyB9IH0sXHJcbiAgICAgIHsgdGV4dDogJ0NhdHMnLCBpY29uOiAnbjctaWNvbi1ob21lJywgYW5jaG9yOiB7IHBheWxvYWQ6ICcvY2F0cycgfSB9XHJcbiAgICBdXHJcbiAgfSxcclxuICBzZWFyY2g6IHtcclxuICAgIGhpbnQ6ICdTZWFyY2ggKGhpbnQpJyxcclxuICAgIHBheWxvYWQ6ICdzZWFyY2ggcGF5bG9hZCdcclxuICB9LFxyXG4gIGFjdGlvbnM6IFtcclxuICAgIHtcclxuICAgICAgaWNvbjogJ243LWljb24tYmVsbCcsXHJcbiAgICAgIGJhZGdlOiB7XHJcbiAgICAgICAgdGV4dDogJzIwMCdcclxuICAgICAgfSxcclxuICAgICAgYW5jaG9yOiB7IGhyZWY6ICcvZXhhbXBsZXMnIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGljb246ICduNy1pY29uLWZhY2Vib29rJyxcclxuICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcvZmFjZWJvb2snIH1cclxuICAgIH1cclxuICBdLFxyXG4gIHVzZXI6IHtcclxuICAgIGltZzogJ2h0dHBzOi8vcGxhY2VpbWcuY29tLzE1MC8xNTAvYW55L3Blb3BsZScsXHJcbiAgICBuYW1lOiAnTWFzc2ltaWxpYW5vIFNwaW5vc2EnLFxyXG4gICAgYW5jaG9yOiB7IGhyZWY6ICcvdXNlcicsIHRhcmdldDogJ19ibGFuaycgfVxyXG4gIH0sXHJcbiAgbWVudVRvZ2dsZToge1xyXG4gICAgb3Blbjoge1xyXG4gICAgICBwYXlsb2FkOiAnbW9iaWxlLW9wZW4nXHJcbiAgICB9LFxyXG4gICAgY2xvc2U6IHtcclxuICAgICAgcGF5bG9hZDogJ21vYmlsZS1jbG9zZSdcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiJdfQ==