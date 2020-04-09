/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/header/header.mock.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLm1vY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxNQUFNLE9BQU8sV0FBVyxHQUFlO0lBQ3JDLElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSw0Q0FBNEM7UUFDbkQsS0FBSyxFQUFFLFNBQVM7UUFDaEIsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixNQUFNLEVBQUU7WUFDTixPQUFPLEVBQUUsMEJBQTBCO1lBQ25DLElBQUksRUFBRSxXQUFXO1NBQ2xCO0tBQ0Y7SUFDRCxHQUFHLEVBQUU7UUFDSCxLQUFLLEVBQUU7WUFDTCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBRTtZQUN2RixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUU7WUFDdEUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxFQUFFO1lBQ2xGO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUN4QixJQUFJLEVBQUUsY0FBYztnQkFDcEIsTUFBTSxFQUFFO29CQUNOLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsRUFBRTtvQkFDM0U7d0JBQ0UsSUFBSSxFQUFFLHVDQUF1Qzt3QkFDN0MsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRTt3QkFDbEMsSUFBSSxFQUFFLGNBQWM7cUJBQ3JCO29CQUNELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsRUFBRTtpQkFDakY7YUFDRjtZQUNELEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsRUFBRTtZQUNsRixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUU7U0FDckU7S0FDRjtJQUNELE1BQU0sRUFBRTtRQUNOLElBQUksRUFBRSxlQUFlO1FBQ3JCLE9BQU8sRUFBRSxnQkFBZ0I7S0FDMUI7SUFDRCxPQUFPLEVBQUU7UUFDUDtZQUNFLElBQUksRUFBRSxjQUFjO1lBQ3BCLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsS0FBSzthQUNaO1lBQ0QsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtTQUM5QjtRQUNEO1lBQ0UsSUFBSSxFQUFFLGtCQUFrQjtZQUN4QixNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFO1NBQ2pDO0tBQ0Y7SUFDRCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUseUNBQXlDO1FBQzlDLElBQUksRUFBRSxzQkFBc0I7UUFDNUIsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFO0tBQzVDO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFO1lBQ0osT0FBTyxFQUFFLGFBQWE7U0FDdkI7UUFDRCxLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUUsY0FBYztTQUN4QjtLQUNGO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFkZXJEYXRhIH0gZnJvbSAnLi9oZWFkZXInO1xuXG5leHBvcnQgY29uc3QgSEVBREVSX01PQ0s6IEhlYWRlckRhdGEgPSB7XG4gIGxvZ286IHtcbiAgICBpbWFnZTogJ2h0dHBzOi8vcGxhY2VpbWcuY29tLzEyOC8xMjgvYW55L2dyYXlzY2FsZScsXG4gICAgdGl0bGU6ICdEYXRhVml6JyxcbiAgICBzdWJ0aXRsZTogJ0RhdGEgdmlzdWFsaXphdGlvbicsXG4gICAgYW5jaG9yOiB7XG4gICAgICBwYXlsb2FkOiAnaHR0cHM6Ly93d3cubmV0c2V2ZW4uaXQvJyxcbiAgICAgIGhyZWY6ICcvZXhhbXBsZXMnXG4gICAgfVxuICB9LFxuICBuYXY6IHtcbiAgICBpdGVtczogW1xuICAgICAgeyB0ZXh0OiAnSG9tZScsIGljb246ICduNy1pY29uLWhvbWUnLCBhbmNob3I6IHsgaHJlZjogJy9leGFtcGxlcycsIHRhcmdldDogJ19ibGFuaycgfSB9LFxuICAgICAgeyB0ZXh0OiAnU3R1ZmYnLCBpY29uOiAnbjctaWNvbi1ob21lJywgYW5jaG9yOiB7IHBheWxvYWQ6ICcvc3R1ZmYnIH0gfSxcbiAgICAgIHsgdGV4dDogJ090aGVyIFN0dWZmJywgaWNvbjogJ243LWljb24taG9tZScsIGFuY2hvcjogeyBwYXlsb2FkOiAnL290aGVyLXN0dWZmJyB9IH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdEcm9wZG93bicsXG4gICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnLycgfSxcbiAgICAgICAgaWNvbjogJ243LWljb24taG9tZScsXG4gICAgICAgIHN1Ym5hdjogW1xuICAgICAgICAgIHsgdGV4dDogJ1N1YmxldmVsIDEnLCBpY29uOiAnbjctaWNvbi1ob21lJywgYW5jaG9yOiB7IGhyZWY6ICcvZXhhbXBsZXMnIH0gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnU3VibGV2ZWwgMiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCcsXG4gICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJy9zdWJsZXZlbC0yJyB9LFxuICAgICAgICAgICAgaWNvbjogJ243LWljb24taG9tZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgdGV4dDogJ1N1YmxldmVsIDMnLCBpY29uOiAnbjctaWNvbi1ob21lJywgYW5jaG9yOiB7IHBheWxvYWQ6ICcvc3VibGV2ZWwtMycgfSB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7IHRleHQ6ICdTaGlueSBTdHVmZicsIGljb246ICduNy1pY29uLWhvbWUnLCBhbmNob3I6IHsgcGF5bG9hZDogJy9zaGlueS1zdHVmZicgfSB9LFxuICAgICAgeyB0ZXh0OiAnQ2F0cycsIGljb246ICduNy1pY29uLWhvbWUnLCBhbmNob3I6IHsgcGF5bG9hZDogJy9jYXRzJyB9IH1cbiAgICBdXG4gIH0sXG4gIHNlYXJjaDoge1xuICAgIGhpbnQ6ICdTZWFyY2ggKGhpbnQpJyxcbiAgICBwYXlsb2FkOiAnc2VhcmNoIHBheWxvYWQnXG4gIH0sXG4gIGFjdGlvbnM6IFtcbiAgICB7XG4gICAgICBpY29uOiAnbjctaWNvbi1iZWxsJyxcbiAgICAgIGJhZGdlOiB7XG4gICAgICAgIHRleHQ6ICcyMDAnXG4gICAgICB9LFxuICAgICAgYW5jaG9yOiB7IGhyZWY6ICcvZXhhbXBsZXMnIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246ICduNy1pY29uLWZhY2Vib29rJyxcbiAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnL2ZhY2Vib29rJyB9XG4gICAgfVxuICBdLFxuICB1c2VyOiB7XG4gICAgaW1nOiAnaHR0cHM6Ly9wbGFjZWltZy5jb20vMTUwLzE1MC9hbnkvcGVvcGxlJyxcbiAgICBuYW1lOiAnTWFzc2ltaWxpYW5vIFNwaW5vc2EnLFxuICAgIGFuY2hvcjogeyBocmVmOiAnL3VzZXInLCB0YXJnZXQ6ICdfYmxhbmsnIH1cbiAgfSxcbiAgbWVudVRvZ2dsZToge1xuICAgIG9wZW46IHtcbiAgICAgIHBheWxvYWQ6ICdtb2JpbGUtb3BlbidcbiAgICB9LFxuICAgIGNsb3NlOiB7XG4gICAgICBwYXlsb2FkOiAnbW9iaWxlLWNsb3NlJ1xuICAgIH1cbiAgfVxufTtcbiJdfQ==