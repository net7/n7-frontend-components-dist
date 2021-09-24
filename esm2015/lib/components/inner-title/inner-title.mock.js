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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItdGl0bGUubW9jay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaW5uZXItdGl0bGUvaW5uZXItdGl0bGUubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBbUI7SUFDOUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQUU7SUFDMUQsd0NBQXdDO0lBQ3hDLEtBQUssRUFBRSwyQkFBMkI7SUFDbEMsS0FBSyxFQUFFO1FBQ0wsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLFdBQVc7WUFDakIsT0FBTyxFQUFFLE1BQU07U0FDaEI7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsZ0JBQWdCO1lBQ3RCLE9BQU8sRUFBRSxRQUFRO1NBQ2xCO0tBQ0Y7SUFDRCxLQUFLLEVBQUUsWUFBWTtJQUNuQixPQUFPLEVBQUU7UUFDUCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsTUFBTTtZQUNiLE9BQU8sRUFBRTtnQkFDUCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtnQkFDakMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtnQkFDM0QsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTthQUN0RDtZQUNELE9BQU8sRUFBRSxnQkFBZ0I7U0FDMUI7UUFDRCxNQUFNLEVBQUU7WUFDTixXQUFXLEVBQUUsUUFBUTtZQUNyQixPQUFPLEVBQUUsY0FBYztZQUN2QixNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsT0FBTyxFQUFFLGVBQWU7YUFDekI7U0FDRjtRQUNELE9BQU8sRUFBRTtZQUNQO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFLE1BQU07aUJBQ2hCO2dCQUNELElBQUksRUFBRSxlQUFlO2FBQ3RCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsV0FBVztpQkFDbEI7Z0JBQ0QsT0FBTyxFQUFFLFlBQVk7YUFDdEI7U0FDRjtLQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElubmVyVGl0bGVEYXRhIH0gZnJvbSAnLi9pbm5lci10aXRsZSc7XG5cbmV4cG9ydCBjb25zdCBJTk5FUl9USVRMRV9NT0NLOiBJbm5lclRpdGxlRGF0YSA9IHtcbiAgaWNvbjogeyBpZDogJ243LWljb24tZmlsZTMnLCBzdHlsZTogeyBjb2xvcjogJyMyRTVCRkYnIH0gfSwgLy8gaWNvbiB3aXRoIHN0eWxlXG4gIC8vIGljb246ICduNy1pY29uLWZpbGUzJywgLy8gc2ltcGxlIGljb25cbiAgaW1hZ2U6ICdodHRwczovL3BpY3N1bS5waG90b3MvMjAwJyxcbiAgdGl0bGU6IHtcbiAgICBtYWluOiB7XG4gICAgICB0ZXh0OiAnTWFpbiB0ZXh0JyxcbiAgICAgIGNsYXNzZXM6ICdib2xkJyxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgdGV4dDogJ1NlY29uZGFyeSB0ZXh0JyxcbiAgICAgIGNsYXNzZXM6ICdpdGFsaWMnLFxuICAgIH1cbiAgfSxcbiAgdG9vbHM6ICdUb29scyB0ZXh0JyxcbiAgYWN0aW9uczoge1xuICAgIHNlbGVjdDoge1xuICAgICAgbGFiZWw6ICdTb3J0JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgeyB0ZXh0OiAnUHJpY2UnLCB2YWx1ZTogJ3ByaWNlJyB9LFxuICAgICAgICB7IHRleHQ6ICdBbHBoYWJldGljJywgdmFsdWU6ICdhbHBoYWJldGljJywgc2VsZWN0ZWQ6IHRydWUgfSxcbiAgICAgICAgeyB0ZXh0OiAnQnkgRGF0ZScsIHZhbHVlOiAnYnktZGF0ZScsIGRpc2FibGVkOiB0cnVlIH0sXG4gICAgICBdLFxuICAgICAgcGF5bG9hZDogJ3NlbGVjdC1zb3J0aW5nJ1xuICAgIH0sXG4gICAgc2VhcmNoOiB7XG4gICAgICBwbGFjZWhvbGRlcjogJ1NlYXJjaCcsXG4gICAgICBwYXlsb2FkOiAnc2VhcmNoLWlucHV0JyxcbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICB0ZXh0OiAnU0VBUkNIJyxcbiAgICAgICAgcGF5bG9hZDogJ3NlYXJjaC1idXR0b24nLFxuICAgICAgfVxuICAgIH0sXG4gICAgYnV0dG9uczogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnQlVUVE9OIDEnLFxuICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICBwYXlsb2FkOiAnYnRuMScsXG4gICAgICAgIH0sXG4gICAgICAgIGljb246ICduNy1pY29uLWZpbGUzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0JVVFRPTiAyJyxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgaHJlZjogJy9leGFtcGxlcydcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NlczogJ243LWJ0bi1jdGEnXG4gICAgICB9LFxuICAgIF1cbiAgfVxufTtcbiJdfQ==