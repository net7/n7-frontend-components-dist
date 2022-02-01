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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLm1vY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBZTtJQUNyQyxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsNENBQTRDO1FBQ25ELEtBQUssRUFBRSxTQUFTO1FBQ2hCLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsTUFBTSxFQUFFO1lBQ04sT0FBTyxFQUFFLDBCQUEwQjtZQUNuQyxJQUFJLEVBQUUsV0FBVztTQUNsQjtLQUNGO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsS0FBSyxFQUFFO1lBQ0wsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUU7WUFDdkYsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFO1lBQ3RFLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsRUFBRTtZQUNsRjtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDeEIsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLE1BQU0sRUFBRTtvQkFDTixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUU7b0JBQzNFO3dCQUNFLElBQUksRUFBRSx1Q0FBdUM7d0JBQzdDLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUU7d0JBQ2xDLElBQUksRUFBRSxjQUFjO3FCQUNyQjtvQkFDRCxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLEVBQUU7aUJBQ2pGO2FBQ0Y7WUFDRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUU7U0FDckU7S0FDRjtJQUNELE1BQU0sRUFBRTtRQUNOLElBQUksRUFBRSxlQUFlO1FBQ3JCLE9BQU8sRUFBRSxnQkFBZ0I7S0FDMUI7SUFDRCxPQUFPLEVBQUU7UUFDUDtZQUNFLElBQUksRUFBRSxjQUFjO1lBQ3BCLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsS0FBSzthQUNaO1lBQ0QsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtTQUM5QjtRQUNEO1lBQ0UsSUFBSSxFQUFFLGtCQUFrQjtZQUN4QixNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFO1NBQ2pDO0tBQ0Y7SUFDRCxPQUFPLEVBQUU7UUFDUDtZQUNFLElBQUksRUFBRSxRQUFRO1lBQ2QsSUFBSSxFQUFFLGNBQWM7WUFDcEIsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtZQUM3QixPQUFPLEVBQUUsUUFBUTtTQUNsQjtRQUNEO1lBQ0UsSUFBSSxFQUFFLFNBQVM7WUFDZixJQUFJLEVBQUUsY0FBYztZQUNwQixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQzdCLE9BQU8sRUFBRSxtQkFBbUI7U0FDN0I7UUFDRDtZQUNFLElBQUksRUFBRSxPQUFPO1lBQ2IsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtZQUM3QixPQUFPLEVBQUUsUUFBUTtTQUNsQjtLQUNGO0lBQ0QsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLHlDQUF5QztRQUM5QyxJQUFJLEVBQUUsc0JBQXNCO1FBQzVCLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRTtLQUM1QztJQUNELFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRTtZQUNKLE9BQU8sRUFBRSxhQUFhO1NBQ3ZCO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsT0FBTyxFQUFFLGNBQWM7U0FDeEI7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFkZXJEYXRhIH0gZnJvbSAnLi9oZWFkZXInO1xuXG5leHBvcnQgY29uc3QgSEVBREVSX01PQ0s6IEhlYWRlckRhdGEgPSB7XG4gIGxvZ286IHtcbiAgICBpbWFnZTogJ2h0dHBzOi8vcGxhY2VpbWcuY29tLzEyOC8xMjgvYW55L2dyYXlzY2FsZScsXG4gICAgdGl0bGU6ICdEYXRhVml6JyxcbiAgICBzdWJ0aXRsZTogJ0RhdGEgdmlzdWFsaXphdGlvbicsXG4gICAgYW5jaG9yOiB7XG4gICAgICBwYXlsb2FkOiAnaHR0cHM6Ly93d3cubmV0c2V2ZW4uaXQvJyxcbiAgICAgIGhyZWY6ICcvZXhhbXBsZXMnXG4gICAgfVxuICB9LFxuICBuYXY6IHtcbiAgICBpdGVtczogW1xuICAgICAgeyB0ZXh0OiAnSG9tZScsIGljb246ICduNy1pY29uLWhvbWUnLCBhbmNob3I6IHsgaHJlZjogJy9leGFtcGxlcycsIHRhcmdldDogJ19ibGFuaycgfSB9LFxuICAgICAgeyB0ZXh0OiAnU3R1ZmYnLCBpY29uOiAnbjctaWNvbi1ob21lJywgYW5jaG9yOiB7IHBheWxvYWQ6ICcvc3R1ZmYnIH0gfSxcbiAgICAgIHsgdGV4dDogJ090aGVyIFN0dWZmJywgaWNvbjogJ243LWljb24taG9tZScsIGFuY2hvcjogeyBwYXlsb2FkOiAnL290aGVyLXN0dWZmJyB9IH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdEcm9wZG93bicsXG4gICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnLycgfSxcbiAgICAgICAgaWNvbjogJ243LWljb24taG9tZScsXG4gICAgICAgIHN1Ym5hdjogW1xuICAgICAgICAgIHsgdGV4dDogJ1N1YmxldmVsIDEnLCBpY29uOiAnbjctaWNvbi1ob21lJywgYW5jaG9yOiB7IGhyZWY6ICcvZXhhbXBsZXMnIH0gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnU3VibGV2ZWwgMiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCcsXG4gICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJy9zdWJsZXZlbC0yJyB9LFxuICAgICAgICAgICAgaWNvbjogJ243LWljb24taG9tZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgdGV4dDogJ1N1YmxldmVsIDMnLCBpY29uOiAnbjctaWNvbi1ob21lJywgYW5jaG9yOiB7IHBheWxvYWQ6ICcvc3VibGV2ZWwtMycgfSB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7IHRleHQ6ICdDYXRzJywgaWNvbjogJ243LWljb24taG9tZScsIGFuY2hvcjogeyBwYXlsb2FkOiAnL2NhdHMnIH0gfVxuICAgIF1cbiAgfSxcbiAgc2VhcmNoOiB7XG4gICAgaGludDogJ1NlYXJjaCAoaGludCknLFxuICAgIHBheWxvYWQ6ICdzZWFyY2ggcGF5bG9hZCdcbiAgfSxcbiAgYWN0aW9uczogW1xuICAgIHtcbiAgICAgIGljb246ICduNy1pY29uLWJlbGwnLFxuICAgICAgYmFkZ2U6IHtcbiAgICAgICAgdGV4dDogJzIwMCdcbiAgICAgIH0sXG4gICAgICBhbmNob3I6IHsgaHJlZjogJy9leGFtcGxlcycgfVxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogJ243LWljb24tZmFjZWJvb2snLFxuICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcvZmFjZWJvb2snIH1cbiAgICB9XG4gIF0sXG4gIGJ1dHRvbnM6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnTG9nIEluJyxcbiAgICAgIGljb246ICduNy1pY29uLWJlbGwnLFxuICAgICAgYW5jaG9yOiB7IGhyZWY6ICcvZXhhbXBsZXMnIH0sXG4gICAgICBjbGFzc2VzOiAnbjctYnRuJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1NpZ24gVXAnLFxuICAgICAgaWNvbjogJ243LWljb24tYmVsbCcsXG4gICAgICBhbmNob3I6IHsgaHJlZjogJy9leGFtcGxlcycgfSxcbiAgICAgIGNsYXNzZXM6ICduNy1idG4gbjctYnRuLWN0YSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdPdGhlcicsXG4gICAgICBhbmNob3I6IHsgaHJlZjogJy9leGFtcGxlcycgfSxcbiAgICAgIGNsYXNzZXM6ICduNy1idG4nXG4gICAgfVxuICBdLFxuICB1c2VyOiB7XG4gICAgaW1nOiAnaHR0cHM6Ly9wbGFjZWltZy5jb20vMTUwLzE1MC9hbnkvcGVvcGxlJyxcbiAgICBuYW1lOiAnTWFzc2ltaWxpYW5vIFNwaW5vc2EnLFxuICAgIGFuY2hvcjogeyBocmVmOiAnL3VzZXInLCB0YXJnZXQ6ICdfYmxhbmsnIH1cbiAgfSxcbiAgbWVudVRvZ2dsZToge1xuICAgIG9wZW46IHtcbiAgICAgIHBheWxvYWQ6ICdtb2JpbGUtb3BlbidcbiAgICB9LFxuICAgIGNsb3NlOiB7XG4gICAgICBwYXlsb2FkOiAnbW9iaWxlLWNsb3NlJ1xuICAgIH1cbiAgfVxufTtcbiJdfQ==