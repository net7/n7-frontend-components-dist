export const HEADER_MOCK = {
    logo: {
        image: 'https://placeimg.com/128/128/any/grayscale',
        title: 'DataViz',
        subtitle: 'Data visualization',
        anchor: {
            payload: 'https://www.netseven.it/',
            href: '/examples',
        },
    },
    nav: {
        items: [
            {
                text: 'Home',
                icon: 'n7-icon-home',
                anchor: { href: '/examples', target: '_blank' },
            },
            { text: 'Stuff', icon: 'n7-icon-home', anchor: { payload: '/stuff' } },
            {
                text: 'Other Stuff',
                icon: 'n7-icon-home',
                anchor: { payload: '/other-stuff' },
            },
            {
                text: 'Dropdown',
                anchor: { payload: '/' },
                icon: 'n7-icon-home',
                subnav: [
                    {
                        text: 'Sublevel 1',
                        icon: 'n7-icon-home',
                        anchor: { href: '/examples' },
                    },
                    {
                        text: 'Sublevel 2 Lorem ipsum dolor sit amet',
                        anchor: { payload: '/sublevel-2' },
                        icon: 'n7-icon-home',
                    },
                    {
                        text: 'Sublevel 3',
                        icon: 'n7-icon-home',
                        anchor: { payload: '/sublevel-3' },
                    },
                ],
            },
            { text: 'Cats', icon: 'n7-icon-home', anchor: { payload: '/cats' } },
        ],
    },
    search: {
        hint: 'Search (hint)',
        payload: 'search payload',
    },
    actions: [
        {
            icon: 'n7-icon-bell',
            badge: {
                text: '200',
            },
            anchor: { href: '/examples' },
        },
        {
            icon: 'n7-icon-facebook',
            anchor: { payload: '/facebook' },
        },
    ],
    selects: [
        {
            id: 'language',
            // label: 'Language',
            options: [
                { value: 'en', label: 'English' },
                { value: 'it', label: 'Italian' },
                { value: 'de', label: 'German' },
            ],
            payload: 'language',
        },
    ],
    buttons: [
        {
            text: 'Log In',
            icon: 'n7-icon-bell',
            anchor: { href: '/examples' },
            classes: 'n7-btn',
        },
        {
            text: 'Sign Up',
            icon: 'n7-icon-bell',
            anchor: { href: '/examples' },
            classes: 'n7-btn n7-btn-cta',
        },
        {
            text: 'Other',
            anchor: { href: '/examples' },
            classes: 'n7-btn',
        },
    ],
    user: {
        // image: {
        //   src: 'https://placeimg.com/150/150/any/people',
        //   alt: 'profile picture'
        // },
        color: 'coral',
        labelColor: 'white',
        label: 'A',
        size: '40px',
        name: 'Massimiliano Spinosa',
        // anchor: { href: '/user', target: '_blank' }
        payload: 'user',
    },
    menuToggle: {
        open: {
            payload: 'mobile-open',
        },
        close: {
            payload: 'mobile-close',
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLm1vY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBZTtJQUNyQyxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsNENBQTRDO1FBQ25ELEtBQUssRUFBRSxTQUFTO1FBQ2hCLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsTUFBTSxFQUFFO1lBQ04sT0FBTyxFQUFFLDBCQUEwQjtZQUNuQyxJQUFJLEVBQUUsV0FBVztTQUNsQjtLQUNGO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsS0FBSyxFQUFFO1lBQ0w7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRTthQUNoRDtZQUNELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRTtZQUN0RTtnQkFDRSxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUU7YUFDcEM7WUFDRDtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDeEIsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLE1BQU0sRUFBRTtvQkFDTjt3QkFDRSxJQUFJLEVBQUUsWUFBWTt3QkFDbEIsSUFBSSxFQUFFLGNBQWM7d0JBQ3BCLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7cUJBQzlCO29CQUNEO3dCQUNFLElBQUksRUFBRSx1Q0FBdUM7d0JBQzdDLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUU7d0JBQ2xDLElBQUksRUFBRSxjQUFjO3FCQUNyQjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsWUFBWTt3QkFDbEIsSUFBSSxFQUFFLGNBQWM7d0JBQ3BCLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUU7cUJBQ25DO2lCQUNGO2FBQ0Y7WUFDRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUU7U0FDckU7S0FDRjtJQUNELE1BQU0sRUFBRTtRQUNOLElBQUksRUFBRSxlQUFlO1FBQ3JCLE9BQU8sRUFBRSxnQkFBZ0I7S0FDMUI7SUFDRCxPQUFPLEVBQUU7UUFDUDtZQUNFLElBQUksRUFBRSxjQUFjO1lBQ3BCLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsS0FBSzthQUNaO1lBQ0QsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtTQUM5QjtRQUNEO1lBQ0UsSUFBSSxFQUFFLGtCQUFrQjtZQUN4QixNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFO1NBQ2pDO0tBQ0Y7SUFDRCxPQUFPLEVBQUU7UUFDUDtZQUNFLEVBQUUsRUFBRSxVQUFVO1lBQ2QscUJBQXFCO1lBQ3JCLE9BQU8sRUFBRTtnQkFDUCxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtnQkFDakMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7Z0JBQ2pDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO2FBQ2pDO1lBQ0QsT0FBTyxFQUFFLFVBQVU7U0FDcEI7S0FDRjtJQUNELE9BQU8sRUFBRTtRQUNQO1lBQ0UsSUFBSSxFQUFFLFFBQVE7WUFDZCxJQUFJLEVBQUUsY0FBYztZQUNwQixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQzdCLE9BQU8sRUFBRSxRQUFRO1NBQ2xCO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsU0FBUztZQUNmLElBQUksRUFBRSxjQUFjO1lBQ3BCLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7WUFDN0IsT0FBTyxFQUFFLG1CQUFtQjtTQUM3QjtRQUNEO1lBQ0UsSUFBSSxFQUFFLE9BQU87WUFDYixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQzdCLE9BQU8sRUFBRSxRQUFRO1NBQ2xCO0tBQ0Y7SUFDRCxJQUFJLEVBQUU7UUFDSixXQUFXO1FBQ1gsb0RBQW9EO1FBQ3BELDJCQUEyQjtRQUMzQixLQUFLO1FBQ0wsS0FBSyxFQUFFLE9BQU87UUFDZCxVQUFVLEVBQUUsT0FBTztRQUNuQixLQUFLLEVBQUUsR0FBRztRQUNWLElBQUksRUFBRSxNQUFNO1FBQ1osSUFBSSxFQUFFLHNCQUFzQjtRQUM1Qiw4Q0FBOEM7UUFDOUMsT0FBTyxFQUFFLE1BQU07S0FDaEI7SUFDRCxVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUU7WUFDSixPQUFPLEVBQUUsYUFBYTtTQUN2QjtRQUNELEtBQUssRUFBRTtZQUNMLE9BQU8sRUFBRSxjQUFjO1NBQ3hCO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVhZGVyRGF0YSB9IGZyb20gJy4vaGVhZGVyJztcblxuZXhwb3J0IGNvbnN0IEhFQURFUl9NT0NLOiBIZWFkZXJEYXRhID0ge1xuICBsb2dvOiB7XG4gICAgaW1hZ2U6ICdodHRwczovL3BsYWNlaW1nLmNvbS8xMjgvMTI4L2FueS9ncmF5c2NhbGUnLFxuICAgIHRpdGxlOiAnRGF0YVZpeicsXG4gICAgc3VidGl0bGU6ICdEYXRhIHZpc3VhbGl6YXRpb24nLFxuICAgIGFuY2hvcjoge1xuICAgICAgcGF5bG9hZDogJ2h0dHBzOi8vd3d3Lm5ldHNldmVuLml0LycsXG4gICAgICBocmVmOiAnL2V4YW1wbGVzJyxcbiAgICB9LFxuICB9LFxuICBuYXY6IHtcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnSG9tZScsXG4gICAgICAgIGljb246ICduNy1pY29uLWhvbWUnLFxuICAgICAgICBhbmNob3I6IHsgaHJlZjogJy9leGFtcGxlcycsIHRhcmdldDogJ19ibGFuaycgfSxcbiAgICAgIH0sXG4gICAgICB7IHRleHQ6ICdTdHVmZicsIGljb246ICduNy1pY29uLWhvbWUnLCBhbmNob3I6IHsgcGF5bG9hZDogJy9zdHVmZicgfSB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnT3RoZXIgU3R1ZmYnLFxuICAgICAgICBpY29uOiAnbjctaWNvbi1ob21lJyxcbiAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcvb3RoZXItc3R1ZmYnIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnRHJvcGRvd24nLFxuICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJy8nIH0sXG4gICAgICAgIGljb246ICduNy1pY29uLWhvbWUnLFxuICAgICAgICBzdWJuYXY6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnU3VibGV2ZWwgMScsXG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1ob21lJyxcbiAgICAgICAgICAgIGFuY2hvcjogeyBocmVmOiAnL2V4YW1wbGVzJyB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ1N1YmxldmVsIDIgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQnLFxuICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcvc3VibGV2ZWwtMicgfSxcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLWhvbWUnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ1N1YmxldmVsIDMnLFxuICAgICAgICAgICAgaWNvbjogJ243LWljb24taG9tZScsXG4gICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJy9zdWJsZXZlbC0zJyB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgeyB0ZXh0OiAnQ2F0cycsIGljb246ICduNy1pY29uLWhvbWUnLCBhbmNob3I6IHsgcGF5bG9hZDogJy9jYXRzJyB9IH0sXG4gICAgXSxcbiAgfSxcbiAgc2VhcmNoOiB7XG4gICAgaGludDogJ1NlYXJjaCAoaGludCknLFxuICAgIHBheWxvYWQ6ICdzZWFyY2ggcGF5bG9hZCcsXG4gIH0sXG4gIGFjdGlvbnM6IFtcbiAgICB7XG4gICAgICBpY29uOiAnbjctaWNvbi1iZWxsJyxcbiAgICAgIGJhZGdlOiB7XG4gICAgICAgIHRleHQ6ICcyMDAnLFxuICAgICAgfSxcbiAgICAgIGFuY2hvcjogeyBocmVmOiAnL2V4YW1wbGVzJyB9LFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogJ243LWljb24tZmFjZWJvb2snLFxuICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcvZmFjZWJvb2snIH0sXG4gICAgfSxcbiAgXSxcbiAgc2VsZWN0czogW1xuICAgIHtcbiAgICAgIGlkOiAnbGFuZ3VhZ2UnLFxuICAgICAgLy8gbGFiZWw6ICdMYW5ndWFnZScsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIHsgdmFsdWU6ICdlbicsIGxhYmVsOiAnRW5nbGlzaCcgfSxcbiAgICAgICAgeyB2YWx1ZTogJ2l0JywgbGFiZWw6ICdJdGFsaWFuJyB9LFxuICAgICAgICB7IHZhbHVlOiAnZGUnLCBsYWJlbDogJ0dlcm1hbicgfSxcbiAgICAgIF0sXG4gICAgICBwYXlsb2FkOiAnbGFuZ3VhZ2UnLFxuICAgIH0sXG4gIF0sXG4gIGJ1dHRvbnM6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnTG9nIEluJyxcbiAgICAgIGljb246ICduNy1pY29uLWJlbGwnLFxuICAgICAgYW5jaG9yOiB7IGhyZWY6ICcvZXhhbXBsZXMnIH0sXG4gICAgICBjbGFzc2VzOiAnbjctYnRuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdTaWduIFVwJyxcbiAgICAgIGljb246ICduNy1pY29uLWJlbGwnLFxuICAgICAgYW5jaG9yOiB7IGhyZWY6ICcvZXhhbXBsZXMnIH0sXG4gICAgICBjbGFzc2VzOiAnbjctYnRuIG43LWJ0bi1jdGEnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ090aGVyJyxcbiAgICAgIGFuY2hvcjogeyBocmVmOiAnL2V4YW1wbGVzJyB9LFxuICAgICAgY2xhc3NlczogJ243LWJ0bicsXG4gICAgfSxcbiAgXSxcbiAgdXNlcjoge1xuICAgIC8vIGltYWdlOiB7XG4gICAgLy8gICBzcmM6ICdodHRwczovL3BsYWNlaW1nLmNvbS8xNTAvMTUwL2FueS9wZW9wbGUnLFxuICAgIC8vICAgYWx0OiAncHJvZmlsZSBwaWN0dXJlJ1xuICAgIC8vIH0sXG4gICAgY29sb3I6ICdjb3JhbCcsXG4gICAgbGFiZWxDb2xvcjogJ3doaXRlJyxcbiAgICBsYWJlbDogJ0EnLFxuICAgIHNpemU6ICc0MHB4JyxcbiAgICBuYW1lOiAnTWFzc2ltaWxpYW5vIFNwaW5vc2EnLFxuICAgIC8vIGFuY2hvcjogeyBocmVmOiAnL3VzZXInLCB0YXJnZXQ6ICdfYmxhbmsnIH1cbiAgICBwYXlsb2FkOiAndXNlcicsXG4gIH0sXG4gIG1lbnVUb2dnbGU6IHtcbiAgICBvcGVuOiB7XG4gICAgICBwYXlsb2FkOiAnbW9iaWxlLW9wZW4nLFxuICAgIH0sXG4gICAgY2xvc2U6IHtcbiAgICAgIHBheWxvYWQ6ICdtb2JpbGUtY2xvc2UnLFxuICAgIH0sXG4gIH0sXG59O1xuIl19