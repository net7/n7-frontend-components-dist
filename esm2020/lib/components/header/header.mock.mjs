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
    selects: [{
            id: 'language',
            // label: 'Language',
            options: [
                { value: 'en', label: 'English' },
                { value: 'it', label: 'Italian' },
                { value: 'de', label: 'German' }
            ],
            payload: 'language'
        }],
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
        payload: 'user'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLm1vY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBZTtJQUNyQyxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsNENBQTRDO1FBQ25ELEtBQUssRUFBRSxTQUFTO1FBQ2hCLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsTUFBTSxFQUFFO1lBQ04sT0FBTyxFQUFFLDBCQUEwQjtZQUNuQyxJQUFJLEVBQUUsV0FBVztTQUNsQjtLQUNGO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsS0FBSyxFQUFFO1lBQ0wsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUU7WUFDdkYsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFO1lBQ3RFLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsRUFBRTtZQUNsRjtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDeEIsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLE1BQU0sRUFBRTtvQkFDTixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUU7b0JBQzNFO3dCQUNFLElBQUksRUFBRSx1Q0FBdUM7d0JBQzdDLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUU7d0JBQ2xDLElBQUksRUFBRSxjQUFjO3FCQUNyQjtvQkFDRCxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLEVBQUU7aUJBQ2pGO2FBQ0Y7WUFDRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUU7U0FDckU7S0FDRjtJQUNELE1BQU0sRUFBRTtRQUNOLElBQUksRUFBRSxlQUFlO1FBQ3JCLE9BQU8sRUFBRSxnQkFBZ0I7S0FDMUI7SUFDRCxPQUFPLEVBQUU7UUFDUDtZQUNFLElBQUksRUFBRSxjQUFjO1lBQ3BCLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsS0FBSzthQUNaO1lBQ0QsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtTQUM5QjtRQUNEO1lBQ0UsSUFBSSxFQUFFLGtCQUFrQjtZQUN4QixNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFO1NBQ2pDO0tBQ0Y7SUFDRCxPQUFPLEVBQUUsQ0FBQztZQUNSLEVBQUUsRUFBRSxVQUFVO1lBQ2QscUJBQXFCO1lBQ3JCLE9BQU8sRUFBRTtnQkFDUCxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtnQkFDakMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7Z0JBQ2pDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO2FBQ2pDO1lBQ0QsT0FBTyxFQUFFLFVBQVU7U0FDcEIsQ0FBQztJQUNGLE9BQU8sRUFBRTtRQUNQO1lBQ0UsSUFBSSxFQUFFLFFBQVE7WUFDZCxJQUFJLEVBQUUsY0FBYztZQUNwQixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQzdCLE9BQU8sRUFBRSxRQUFRO1NBQ2xCO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsU0FBUztZQUNmLElBQUksRUFBRSxjQUFjO1lBQ3BCLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7WUFDN0IsT0FBTyxFQUFFLG1CQUFtQjtTQUM3QjtRQUNEO1lBQ0UsSUFBSSxFQUFFLE9BQU87WUFDYixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQzdCLE9BQU8sRUFBRSxRQUFRO1NBQ2xCO0tBQ0Y7SUFDRCxJQUFJLEVBQUU7UUFDSixXQUFXO1FBQ1gsb0RBQW9EO1FBQ3BELDJCQUEyQjtRQUMzQixLQUFLO1FBQ0wsS0FBSyxFQUFFLE9BQU87UUFDZCxVQUFVLEVBQUUsT0FBTztRQUNuQixLQUFLLEVBQUUsR0FBRztRQUNWLElBQUksRUFBRSxNQUFNO1FBQ1osSUFBSSxFQUFFLHNCQUFzQjtRQUM1Qiw4Q0FBOEM7UUFDOUMsT0FBTyxFQUFFLE1BQU07S0FDaEI7SUFDRCxVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUU7WUFDSixPQUFPLEVBQUUsYUFBYTtTQUN2QjtRQUNELEtBQUssRUFBRTtZQUNMLE9BQU8sRUFBRSxjQUFjO1NBQ3hCO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVhZGVyRGF0YSB9IGZyb20gJy4vaGVhZGVyJztcblxuZXhwb3J0IGNvbnN0IEhFQURFUl9NT0NLOiBIZWFkZXJEYXRhID0ge1xuICBsb2dvOiB7XG4gICAgaW1hZ2U6ICdodHRwczovL3BsYWNlaW1nLmNvbS8xMjgvMTI4L2FueS9ncmF5c2NhbGUnLFxuICAgIHRpdGxlOiAnRGF0YVZpeicsXG4gICAgc3VidGl0bGU6ICdEYXRhIHZpc3VhbGl6YXRpb24nLFxuICAgIGFuY2hvcjoge1xuICAgICAgcGF5bG9hZDogJ2h0dHBzOi8vd3d3Lm5ldHNldmVuLml0LycsXG4gICAgICBocmVmOiAnL2V4YW1wbGVzJ1xuICAgIH1cbiAgfSxcbiAgbmF2OiB7XG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGV4dDogJ0hvbWUnLCBpY29uOiAnbjctaWNvbi1ob21lJywgYW5jaG9yOiB7IGhyZWY6ICcvZXhhbXBsZXMnLCB0YXJnZXQ6ICdfYmxhbmsnIH0gfSxcbiAgICAgIHsgdGV4dDogJ1N0dWZmJywgaWNvbjogJ243LWljb24taG9tZScsIGFuY2hvcjogeyBwYXlsb2FkOiAnL3N0dWZmJyB9IH0sXG4gICAgICB7IHRleHQ6ICdPdGhlciBTdHVmZicsIGljb246ICduNy1pY29uLWhvbWUnLCBhbmNob3I6IHsgcGF5bG9hZDogJy9vdGhlci1zdHVmZicgfSB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnRHJvcGRvd24nLFxuICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJy8nIH0sXG4gICAgICAgIGljb246ICduNy1pY29uLWhvbWUnLFxuICAgICAgICBzdWJuYXY6IFtcbiAgICAgICAgICB7IHRleHQ6ICdTdWJsZXZlbCAxJywgaWNvbjogJ243LWljb24taG9tZScsIGFuY2hvcjogeyBocmVmOiAnL2V4YW1wbGVzJyB9IH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ1N1YmxldmVsIDIgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQnLFxuICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcvc3VibGV2ZWwtMicgfSxcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLWhvbWUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IHRleHQ6ICdTdWJsZXZlbCAzJywgaWNvbjogJ243LWljb24taG9tZScsIGFuY2hvcjogeyBwYXlsb2FkOiAnL3N1YmxldmVsLTMnIH0gfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgeyB0ZXh0OiAnQ2F0cycsIGljb246ICduNy1pY29uLWhvbWUnLCBhbmNob3I6IHsgcGF5bG9hZDogJy9jYXRzJyB9IH1cbiAgICBdXG4gIH0sXG4gIHNlYXJjaDoge1xuICAgIGhpbnQ6ICdTZWFyY2ggKGhpbnQpJyxcbiAgICBwYXlsb2FkOiAnc2VhcmNoIHBheWxvYWQnXG4gIH0sXG4gIGFjdGlvbnM6IFtcbiAgICB7XG4gICAgICBpY29uOiAnbjctaWNvbi1iZWxsJyxcbiAgICAgIGJhZGdlOiB7XG4gICAgICAgIHRleHQ6ICcyMDAnXG4gICAgICB9LFxuICAgICAgYW5jaG9yOiB7IGhyZWY6ICcvZXhhbXBsZXMnIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246ICduNy1pY29uLWZhY2Vib29rJyxcbiAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnL2ZhY2Vib29rJyB9XG4gICAgfVxuICBdLFxuICBzZWxlY3RzOiBbe1xuICAgIGlkOiAnbGFuZ3VhZ2UnLFxuICAgIC8vIGxhYmVsOiAnTGFuZ3VhZ2UnLFxuICAgIG9wdGlvbnM6IFtcbiAgICAgIHsgdmFsdWU6ICdlbicsIGxhYmVsOiAnRW5nbGlzaCcgfSxcbiAgICAgIHsgdmFsdWU6ICdpdCcsIGxhYmVsOiAnSXRhbGlhbicgfSxcbiAgICAgIHsgdmFsdWU6ICdkZScsIGxhYmVsOiAnR2VybWFuJyB9XG4gICAgXSxcbiAgICBwYXlsb2FkOiAnbGFuZ3VhZ2UnXG4gIH1dLFxuICBidXR0b25zOiBbXG4gICAge1xuICAgICAgdGV4dDogJ0xvZyBJbicsXG4gICAgICBpY29uOiAnbjctaWNvbi1iZWxsJyxcbiAgICAgIGFuY2hvcjogeyBocmVmOiAnL2V4YW1wbGVzJyB9LFxuICAgICAgY2xhc3NlczogJ243LWJ0bidcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdTaWduIFVwJyxcbiAgICAgIGljb246ICduNy1pY29uLWJlbGwnLFxuICAgICAgYW5jaG9yOiB7IGhyZWY6ICcvZXhhbXBsZXMnIH0sXG4gICAgICBjbGFzc2VzOiAnbjctYnRuIG43LWJ0bi1jdGEnXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnT3RoZXInLFxuICAgICAgYW5jaG9yOiB7IGhyZWY6ICcvZXhhbXBsZXMnIH0sXG4gICAgICBjbGFzc2VzOiAnbjctYnRuJ1xuICAgIH1cbiAgXSxcbiAgdXNlcjoge1xuICAgIC8vIGltYWdlOiB7XG4gICAgLy8gICBzcmM6ICdodHRwczovL3BsYWNlaW1nLmNvbS8xNTAvMTUwL2FueS9wZW9wbGUnLFxuICAgIC8vICAgYWx0OiAncHJvZmlsZSBwaWN0dXJlJ1xuICAgIC8vIH0sXG4gICAgY29sb3I6ICdjb3JhbCcsXG4gICAgbGFiZWxDb2xvcjogJ3doaXRlJyxcbiAgICBsYWJlbDogJ0EnLFxuICAgIHNpemU6ICc0MHB4JyxcbiAgICBuYW1lOiAnTWFzc2ltaWxpYW5vIFNwaW5vc2EnLFxuICAgIC8vIGFuY2hvcjogeyBocmVmOiAnL3VzZXInLCB0YXJnZXQ6ICdfYmxhbmsnIH1cbiAgICBwYXlsb2FkOiAndXNlcidcbiAgfSxcbiAgbWVudVRvZ2dsZToge1xuICAgIG9wZW46IHtcbiAgICAgIHBheWxvYWQ6ICdtb2JpbGUtb3BlbidcbiAgICB9LFxuICAgIGNsb3NlOiB7XG4gICAgICBwYXlsb2FkOiAnbW9iaWxlLWNsb3NlJ1xuICAgIH1cbiAgfVxufTtcbiJdfQ==