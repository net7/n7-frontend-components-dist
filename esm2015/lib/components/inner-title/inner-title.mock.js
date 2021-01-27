export const INNER_TITLE_MOCK = {
    icon: { id: 'n7-icon-file3', style: { color: '#2E5BFF' } },
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
        }
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
            payload: 'select-sorting'
        },
        search: {
            placeholder: 'Search',
            payload: 'search-input',
            button: {
                text: 'SEARCH',
                payload: 'search-button',
            }
        },
        buttons: [
            {
                text: 'BUTTON 1',
                anchor: {
                    payload: 'btn1',
                },
                icon: 'n7-icon-file3'
            },
            {
                text: 'BUTTON 2',
                anchor: {
                    href: '/examples'
                },
                classes: 'n7-btn-cta'
            },
        ]
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItdGl0bGUubW9jay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaW5uZXItdGl0bGUvaW5uZXItdGl0bGUubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBbUI7SUFDOUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQUU7SUFDMUQsd0NBQXdDO0lBQ3hDLEtBQUssRUFBRSwyQkFBMkI7SUFDbEMsS0FBSyxFQUFFO1FBQ0wsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLFdBQVc7WUFDakIsT0FBTyxFQUFFLE1BQU07U0FDaEI7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsZ0JBQWdCO1lBQ3RCLE9BQU8sRUFBRSxRQUFRO1NBQ2xCO0tBQ0Y7SUFDRCxLQUFLLEVBQUUsWUFBWTtJQUNuQixPQUFPLEVBQUU7UUFDUCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsTUFBTTtZQUNiLE9BQU8sRUFBRTtnQkFDUCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtnQkFDakMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtnQkFDM0QsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTthQUN0RDtZQUNELE9BQU8sRUFBRSxnQkFBZ0I7U0FDMUI7UUFDRCxNQUFNLEVBQUU7WUFDTixXQUFXLEVBQUUsUUFBUTtZQUNyQixPQUFPLEVBQUUsY0FBYztZQUN2QixNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsT0FBTyxFQUFFLGVBQWU7YUFDekI7U0FDRjtRQUNELE9BQU8sRUFBRTtZQUNQO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFLE1BQU07aUJBQ2hCO2dCQUNELElBQUksRUFBRSxlQUFlO2FBQ3RCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsV0FBVztpQkFDbEI7Z0JBQ0QsT0FBTyxFQUFFLFlBQVk7YUFDdEI7U0FDRjtLQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElubmVyVGl0bGVEYXRhIH0gZnJvbSAnLi9pbm5lci10aXRsZSc7XHJcblxyXG5leHBvcnQgY29uc3QgSU5ORVJfVElUTEVfTU9DSzogSW5uZXJUaXRsZURhdGEgPSB7XHJcbiAgaWNvbjogeyBpZDogJ243LWljb24tZmlsZTMnLCBzdHlsZTogeyBjb2xvcjogJyMyRTVCRkYnIH0gfSwgLy8gaWNvbiB3aXRoIHN0eWxlXHJcbiAgLy8gaWNvbjogJ243LWljb24tZmlsZTMnLCAvLyBzaW1wbGUgaWNvblxyXG4gIGltYWdlOiAnaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzIwMCcsXHJcbiAgdGl0bGU6IHtcclxuICAgIG1haW46IHtcclxuICAgICAgdGV4dDogJ01haW4gdGV4dCcsXHJcbiAgICAgIGNsYXNzZXM6ICdib2xkJyxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgdGV4dDogJ1NlY29uZGFyeSB0ZXh0JyxcclxuICAgICAgY2xhc3NlczogJ2l0YWxpYycsXHJcbiAgICB9XHJcbiAgfSxcclxuICB0b29sczogJ1Rvb2xzIHRleHQnLFxyXG4gIGFjdGlvbnM6IHtcclxuICAgIHNlbGVjdDoge1xyXG4gICAgICBsYWJlbDogJ1NvcnQnLFxyXG4gICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgeyB0ZXh0OiAnUHJpY2UnLCB2YWx1ZTogJ3ByaWNlJyB9LFxyXG4gICAgICAgIHsgdGV4dDogJ0FscGhhYmV0aWMnLCB2YWx1ZTogJ2FscGhhYmV0aWMnLCBzZWxlY3RlZDogdHJ1ZSB9LFxyXG4gICAgICAgIHsgdGV4dDogJ0J5IERhdGUnLCB2YWx1ZTogJ2J5LWRhdGUnLCBkaXNhYmxlZDogdHJ1ZSB9LFxyXG4gICAgICBdLFxyXG4gICAgICBwYXlsb2FkOiAnc2VsZWN0LXNvcnRpbmcnXHJcbiAgICB9LFxyXG4gICAgc2VhcmNoOiB7XHJcbiAgICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoJyxcclxuICAgICAgcGF5bG9hZDogJ3NlYXJjaC1pbnB1dCcsXHJcbiAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgIHRleHQ6ICdTRUFSQ0gnLFxyXG4gICAgICAgIHBheWxvYWQ6ICdzZWFyY2gtYnV0dG9uJyxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGJ1dHRvbnM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdCVVRUT04gMScsXHJcbiAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICBwYXlsb2FkOiAnYnRuMScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpY29uOiAnbjctaWNvbi1maWxlMydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdCVVRUT04gMicsXHJcbiAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICBocmVmOiAnL2V4YW1wbGVzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xhc3NlczogJ243LWJ0bi1jdGEnXHJcbiAgICAgIH0sXHJcbiAgICBdXHJcbiAgfVxyXG59O1xyXG4iXX0=