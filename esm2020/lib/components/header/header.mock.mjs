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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLm1vY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBZTtJQUNyQyxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsNENBQTRDO1FBQ25ELEtBQUssRUFBRSxTQUFTO1FBQ2hCLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsTUFBTSxFQUFFO1lBQ04sT0FBTyxFQUFFLDBCQUEwQjtZQUNuQyxJQUFJLEVBQUUsV0FBVztTQUNsQjtLQUNGO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsS0FBSyxFQUFFO1lBQ0wsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUU7WUFDdkYsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFO1lBQ3RFLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsRUFBRTtZQUNsRjtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDeEIsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLE1BQU0sRUFBRTtvQkFDTixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUU7b0JBQzNFO3dCQUNFLElBQUksRUFBRSx1Q0FBdUM7d0JBQzdDLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUU7d0JBQ2xDLElBQUksRUFBRSxjQUFjO3FCQUNyQjtvQkFDRCxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLEVBQUU7aUJBQ2pGO2FBQ0Y7WUFDRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUU7U0FDckU7S0FDRjtJQUNELE1BQU0sRUFBRTtRQUNOLElBQUksRUFBRSxlQUFlO1FBQ3JCLE9BQU8sRUFBRSxnQkFBZ0I7S0FDMUI7SUFDRCxPQUFPLEVBQUU7UUFDUDtZQUNFLElBQUksRUFBRSxjQUFjO1lBQ3BCLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsS0FBSzthQUNaO1lBQ0QsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtTQUM5QjtRQUNEO1lBQ0UsSUFBSSxFQUFFLGtCQUFrQjtZQUN4QixNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFO1NBQ2pDO0tBQ0Y7SUFDRCxPQUFPLEVBQUU7UUFDUDtZQUNFLElBQUksRUFBRSxRQUFRO1lBQ2QsSUFBSSxFQUFFLGNBQWM7WUFDcEIsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtZQUM3QixPQUFPLEVBQUUsUUFBUTtTQUNsQjtRQUNEO1lBQ0UsSUFBSSxFQUFFLFNBQVM7WUFDZixJQUFJLEVBQUUsY0FBYztZQUNwQixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQzdCLE9BQU8sRUFBRSxtQkFBbUI7U0FDN0I7UUFDRDtZQUNFLElBQUksRUFBRSxPQUFPO1lBQ2IsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtZQUM3QixPQUFPLEVBQUUsUUFBUTtTQUNsQjtLQUNGO0lBQ0QsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLHlDQUF5QztRQUM5QyxJQUFJLEVBQUUsc0JBQXNCO1FBQzVCLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRTtLQUM1QztJQUNELFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRTtZQUNKLE9BQU8sRUFBRSxhQUFhO1NBQ3ZCO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsT0FBTyxFQUFFLGNBQWM7U0FDeEI7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFkZXJEYXRhIH0gZnJvbSAnLi9oZWFkZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhFQURFUl9NT0NLOiBIZWFkZXJEYXRhID0ge1xyXG4gIGxvZ286IHtcclxuICAgIGltYWdlOiAnaHR0cHM6Ly9wbGFjZWltZy5jb20vMTI4LzEyOC9hbnkvZ3JheXNjYWxlJyxcclxuICAgIHRpdGxlOiAnRGF0YVZpeicsXHJcbiAgICBzdWJ0aXRsZTogJ0RhdGEgdmlzdWFsaXphdGlvbicsXHJcbiAgICBhbmNob3I6IHtcclxuICAgICAgcGF5bG9hZDogJ2h0dHBzOi8vd3d3Lm5ldHNldmVuLml0LycsXHJcbiAgICAgIGhyZWY6ICcvZXhhbXBsZXMnXHJcbiAgICB9XHJcbiAgfSxcclxuICBuYXY6IHtcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHsgdGV4dDogJ0hvbWUnLCBpY29uOiAnbjctaWNvbi1ob21lJywgYW5jaG9yOiB7IGhyZWY6ICcvZXhhbXBsZXMnLCB0YXJnZXQ6ICdfYmxhbmsnIH0gfSxcclxuICAgICAgeyB0ZXh0OiAnU3R1ZmYnLCBpY29uOiAnbjctaWNvbi1ob21lJywgYW5jaG9yOiB7IHBheWxvYWQ6ICcvc3R1ZmYnIH0gfSxcclxuICAgICAgeyB0ZXh0OiAnT3RoZXIgU3R1ZmYnLCBpY29uOiAnbjctaWNvbi1ob21lJywgYW5jaG9yOiB7IHBheWxvYWQ6ICcvb3RoZXItc3R1ZmYnIH0gfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdEcm9wZG93bicsXHJcbiAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcvJyB9LFxyXG4gICAgICAgIGljb246ICduNy1pY29uLWhvbWUnLFxyXG4gICAgICAgIHN1Ym5hdjogW1xyXG4gICAgICAgICAgeyB0ZXh0OiAnU3VibGV2ZWwgMScsIGljb246ICduNy1pY29uLWhvbWUnLCBhbmNob3I6IHsgaHJlZjogJy9leGFtcGxlcycgfSB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnU3VibGV2ZWwgMiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCcsXHJcbiAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnL3N1YmxldmVsLTInIH0sXHJcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLWhvbWUnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnU3VibGV2ZWwgMycsIGljb246ICduNy1pY29uLWhvbWUnLCBhbmNob3I6IHsgcGF5bG9hZDogJy9zdWJsZXZlbC0zJyB9IH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgdGV4dDogJ0NhdHMnLCBpY29uOiAnbjctaWNvbi1ob21lJywgYW5jaG9yOiB7IHBheWxvYWQ6ICcvY2F0cycgfSB9XHJcbiAgICBdXHJcbiAgfSxcclxuICBzZWFyY2g6IHtcclxuICAgIGhpbnQ6ICdTZWFyY2ggKGhpbnQpJyxcclxuICAgIHBheWxvYWQ6ICdzZWFyY2ggcGF5bG9hZCdcclxuICB9LFxyXG4gIGFjdGlvbnM6IFtcclxuICAgIHtcclxuICAgICAgaWNvbjogJ243LWljb24tYmVsbCcsXHJcbiAgICAgIGJhZGdlOiB7XHJcbiAgICAgICAgdGV4dDogJzIwMCdcclxuICAgICAgfSxcclxuICAgICAgYW5jaG9yOiB7IGhyZWY6ICcvZXhhbXBsZXMnIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGljb246ICduNy1pY29uLWZhY2Vib29rJyxcclxuICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcvZmFjZWJvb2snIH1cclxuICAgIH1cclxuICBdLFxyXG4gIGJ1dHRvbnM6IFtcclxuICAgIHtcclxuICAgICAgdGV4dDogJ0xvZyBJbicsXHJcbiAgICAgIGljb246ICduNy1pY29uLWJlbGwnLFxyXG4gICAgICBhbmNob3I6IHsgaHJlZjogJy9leGFtcGxlcycgfSxcclxuICAgICAgY2xhc3NlczogJ243LWJ0bidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICdTaWduIFVwJyxcclxuICAgICAgaWNvbjogJ243LWljb24tYmVsbCcsXHJcbiAgICAgIGFuY2hvcjogeyBocmVmOiAnL2V4YW1wbGVzJyB9LFxyXG4gICAgICBjbGFzc2VzOiAnbjctYnRuIG43LWJ0bi1jdGEnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiAnT3RoZXInLFxyXG4gICAgICBhbmNob3I6IHsgaHJlZjogJy9leGFtcGxlcycgfSxcclxuICAgICAgY2xhc3NlczogJ243LWJ0bidcclxuICAgIH1cclxuICBdLFxyXG4gIHVzZXI6IHtcclxuICAgIGltZzogJ2h0dHBzOi8vcGxhY2VpbWcuY29tLzE1MC8xNTAvYW55L3Blb3BsZScsXHJcbiAgICBuYW1lOiAnTWFzc2ltaWxpYW5vIFNwaW5vc2EnLFxyXG4gICAgYW5jaG9yOiB7IGhyZWY6ICcvdXNlcicsIHRhcmdldDogJ19ibGFuaycgfVxyXG4gIH0sXHJcbiAgbWVudVRvZ2dsZToge1xyXG4gICAgb3Blbjoge1xyXG4gICAgICBwYXlsb2FkOiAnbW9iaWxlLW9wZW4nXHJcbiAgICB9LFxyXG4gICAgY2xvc2U6IHtcclxuICAgICAgcGF5bG9hZDogJ21vYmlsZS1jbG9zZSdcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiJdfQ==