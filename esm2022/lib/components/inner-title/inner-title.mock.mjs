export const INNER_TITLE_MOCK = {
    icon: { id: 'n7-icon-file3', style: { color: '#2E5BFF' } }, // icon with style
    // icon: 'n7-icon-file3', // simple icon
    image: 'https://picsum.photos/200',
    title: {
        main: {
            text: 'Main text',
            classes: 'bold',
        },
        secondary: {
            text: 'Secondary text',
            classes: 'italic',
        },
    },
    tools: 'Tools text',
    actions: {
        select: {
            label: 'Sort',
            options: [
                { text: 'Price', value: 'price' },
                { text: 'Alphabetic', value: 'alphabetic', selected: true },
                { text: 'By Date', value: 'by-date', disabled: true },
            ],
            payload: 'select-sorting',
        },
        search: {
            placeholder: 'Search',
            payload: 'search-input',
            button: {
                text: 'SEARCH',
                payload: 'search-button',
            },
        },
        buttons: [
            {
                text: 'BUTTON 1',
                anchor: {
                    payload: 'btn1',
                },
                icon: 'n7-icon-file3',
            },
            {
                text: 'BUTTON 2',
                anchor: {
                    href: '/examples',
                },
                classes: 'n7-btn-cta',
            },
        ],
    },
    classes: 'mock-inner-title',
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItdGl0bGUubW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2R2LWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9pbm5lci10aXRsZS9pbm5lci10aXRsZS5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFtQjtJQUM5QyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLGtCQUFrQjtJQUM5RSx3Q0FBd0M7SUFDeEMsS0FBSyxFQUFFLDJCQUEyQjtJQUNsQyxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsV0FBVztZQUNqQixPQUFPLEVBQUUsTUFBTTtTQUNoQjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxnQkFBZ0I7WUFDdEIsT0FBTyxFQUFFLFFBQVE7U0FDbEI7S0FDRjtJQUNELEtBQUssRUFBRSxZQUFZO0lBQ25CLE9BQU8sRUFBRTtRQUNQLE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxNQUFNO1lBQ2IsT0FBTyxFQUFFO2dCQUNQLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO2dCQUNqQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO2dCQUMzRCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO2FBQ3REO1lBQ0QsT0FBTyxFQUFFLGdCQUFnQjtTQUMxQjtRQUNELE1BQU0sRUFBRTtZQUNOLFdBQVcsRUFBRSxRQUFRO1lBQ3JCLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsUUFBUTtnQkFDZCxPQUFPLEVBQUUsZUFBZTthQUN6QjtTQUNGO1FBQ0QsT0FBTyxFQUFFO1lBQ1A7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsTUFBTTtpQkFDaEI7Z0JBQ0QsSUFBSSxFQUFFLGVBQWU7YUFDdEI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxXQUFXO2lCQUNsQjtnQkFDRCxPQUFPLEVBQUUsWUFBWTthQUN0QjtTQUNGO0tBQ0Y7SUFDRCxPQUFPLEVBQUUsa0JBQWtCO0NBQzVCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbm5lclRpdGxlRGF0YSB9IGZyb20gJy4vaW5uZXItdGl0bGUnO1xuXG5leHBvcnQgY29uc3QgSU5ORVJfVElUTEVfTU9DSzogSW5uZXJUaXRsZURhdGEgPSB7XG4gIGljb246IHsgaWQ6ICduNy1pY29uLWZpbGUzJywgc3R5bGU6IHsgY29sb3I6ICcjMkU1QkZGJyB9IH0sIC8vIGljb24gd2l0aCBzdHlsZVxuICAvLyBpY29uOiAnbjctaWNvbi1maWxlMycsIC8vIHNpbXBsZSBpY29uXG4gIGltYWdlOiAnaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzIwMCcsXG4gIHRpdGxlOiB7XG4gICAgbWFpbjoge1xuICAgICAgdGV4dDogJ01haW4gdGV4dCcsXG4gICAgICBjbGFzc2VzOiAnYm9sZCcsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIHRleHQ6ICdTZWNvbmRhcnkgdGV4dCcsXG4gICAgICBjbGFzc2VzOiAnaXRhbGljJyxcbiAgICB9LFxuICB9LFxuICB0b29sczogJ1Rvb2xzIHRleHQnLFxuICBhY3Rpb25zOiB7XG4gICAgc2VsZWN0OiB7XG4gICAgICBsYWJlbDogJ1NvcnQnLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICB7IHRleHQ6ICdQcmljZScsIHZhbHVlOiAncHJpY2UnIH0sXG4gICAgICAgIHsgdGV4dDogJ0FscGhhYmV0aWMnLCB2YWx1ZTogJ2FscGhhYmV0aWMnLCBzZWxlY3RlZDogdHJ1ZSB9LFxuICAgICAgICB7IHRleHQ6ICdCeSBEYXRlJywgdmFsdWU6ICdieS1kYXRlJywgZGlzYWJsZWQ6IHRydWUgfSxcbiAgICAgIF0sXG4gICAgICBwYXlsb2FkOiAnc2VsZWN0LXNvcnRpbmcnLFxuICAgIH0sXG4gICAgc2VhcmNoOiB7XG4gICAgICBwbGFjZWhvbGRlcjogJ1NlYXJjaCcsXG4gICAgICBwYXlsb2FkOiAnc2VhcmNoLWlucHV0JyxcbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICB0ZXh0OiAnU0VBUkNIJyxcbiAgICAgICAgcGF5bG9hZDogJ3NlYXJjaC1idXR0b24nLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJ1dHRvbnM6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0JVVFRPTiAxJyxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgcGF5bG9hZDogJ2J0bjEnLFxuICAgICAgICB9LFxuICAgICAgICBpY29uOiAnbjctaWNvbi1maWxlMycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnQlVUVE9OIDInLFxuICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICBocmVmOiAnL2V4YW1wbGVzJyxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NlczogJ243LWJ0bi1jdGEnLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBjbGFzc2VzOiAnbW9jay1pbm5lci10aXRsZScsXG59O1xuIl19