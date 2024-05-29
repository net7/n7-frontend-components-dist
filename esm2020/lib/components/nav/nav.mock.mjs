export const NAV_MOCK = {
    items: [
        { text: 'Home', anchor: { href: 'https://google.com', target: '_blank', payload: 'clicked!' } },
        {
            text: 'Single level',
            anchor: { payload: 'clicked!' },
            image: 'http://placekitten.com/200/300',
        },
        {
            text: 'Single level 2',
            anchor: { payload: 'clicked!' },
            image: 'http://placekitten.com/10/10',
        },
        {
            text: 'Test SVG',
            anchor: { payload: 'clicked!' },
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Test.svg',
        },
        {
            text: 'Stuff',
            image: 'http://placekitten.com/200/300',
            icon: {
                id: 'n7-icon-archway',
                payload: 'icon-primary',
            },
            iconSecondary: {
                id: 'n7-icon-bell',
                payload: 'icon-secondary',
            },
            anchor: { href: '/examples', target: '_blank', payload: 'clicked!' }
        },
        { text: 'Other stuff', anchor: { payload: 'clicked!' } },
        { text: 'Cats', anchor: { href: '/examples', target: '_blank', payload: 'clicked!' } }
    ],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2Lm1vY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvbmF2L25hdi5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBWTtJQUMvQixLQUFLLEVBQUU7UUFDTCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFO1FBQy9GO1lBQ0UsSUFBSSxFQUFFLGNBQWM7WUFDcEIsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRTtZQUMvQixLQUFLLEVBQUUsZ0NBQWdDO1NBQ3hDO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsZ0JBQWdCO1lBQ3RCLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUU7WUFDL0IsS0FBSyxFQUFFLDhCQUE4QjtTQUN0QztRQUNEO1lBQ0UsSUFBSSxFQUFFLFVBQVU7WUFDaEIsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRTtZQUMvQixLQUFLLEVBQUUsOERBQThEO1NBQ3RFO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxnQ0FBZ0M7WUFDdkMsSUFBSSxFQUFFO2dCQUNKLEVBQUUsRUFBRSxpQkFBaUI7Z0JBQ3JCLE9BQU8sRUFBRSxjQUFjO2FBQ3hCO1lBQ0QsYUFBYSxFQUFFO2dCQUNiLEVBQUUsRUFBRSxjQUFjO2dCQUNsQixPQUFPLEVBQUUsZ0JBQWdCO2FBQzFCO1lBQ0QsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUU7U0FDckU7UUFDRCxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFO1FBQ3hELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFO0tBQ3ZGO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdkRhdGEgfSBmcm9tICcuL25hdic7XG5cbmV4cG9ydCBjb25zdCBOQVZfTU9DSzogTmF2RGF0YSA9IHtcbiAgaXRlbXM6IFtcbiAgICB7IHRleHQ6ICdIb21lJywgYW5jaG9yOiB7IGhyZWY6ICdodHRwczovL2dvb2dsZS5jb20nLCB0YXJnZXQ6ICdfYmxhbmsnLCBwYXlsb2FkOiAnY2xpY2tlZCEnIH0gfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnU2luZ2xlIGxldmVsJyxcbiAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnY2xpY2tlZCEnIH0sXG4gICAgICBpbWFnZTogJ2h0dHA6Ly9wbGFjZWtpdHRlbi5jb20vMjAwLzMwMCcsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnU2luZ2xlIGxldmVsIDInLFxuICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICdjbGlja2VkIScgfSxcbiAgICAgIGltYWdlOiAnaHR0cDovL3BsYWNla2l0dGVuLmNvbS8xMC8xMCcsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnVGVzdCBTVkcnLFxuICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICdjbGlja2VkIScgfSxcbiAgICAgIGltYWdlOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9iL2JkL1Rlc3Quc3ZnJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdTdHVmZicsXG4gICAgICBpbWFnZTogJ2h0dHA6Ly9wbGFjZWtpdHRlbi5jb20vMjAwLzMwMCcsXG4gICAgICBpY29uOiB7XG4gICAgICAgIGlkOiAnbjctaWNvbi1hcmNod2F5JyxcbiAgICAgICAgcGF5bG9hZDogJ2ljb24tcHJpbWFyeScsXG4gICAgICB9LFxuICAgICAgaWNvblNlY29uZGFyeToge1xuICAgICAgICBpZDogJ243LWljb24tYmVsbCcsXG4gICAgICAgIHBheWxvYWQ6ICdpY29uLXNlY29uZGFyeScsXG4gICAgICB9LFxuICAgICAgYW5jaG9yOiB7IGhyZWY6ICcvZXhhbXBsZXMnLCB0YXJnZXQ6ICdfYmxhbmsnLCBwYXlsb2FkOiAnY2xpY2tlZCEnIH1cbiAgICB9LFxuICAgIHsgdGV4dDogJ090aGVyIHN0dWZmJywgYW5jaG9yOiB7IHBheWxvYWQ6ICdjbGlja2VkIScgfSB9LFxuICAgIHsgdGV4dDogJ0NhdHMnLCBhbmNob3I6IHsgaHJlZjogJy9leGFtcGxlcycsIHRhcmdldDogJ19ibGFuaycsIHBheWxvYWQ6ICdjbGlja2VkIScgfSB9XG4gIF0sXG59O1xuIl19