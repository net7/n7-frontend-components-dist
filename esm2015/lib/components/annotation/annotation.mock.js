export const ANNOTATION_MOCK = {
    _meta: { uid: 'mock-annotation-01' },
    payload: 'collapse',
    user: {
        image: 'https://placeimg.com/400/600/people',
        name: 'John Doe',
        anchor: {
            payload: 'user-page',
        }
    },
    isCollapsed: false,
    date: '18 minutes ago',
    notebook: {
        name: 'notebook-2019',
        anchor: { href: '/notebook-2019', target: '_blank' }
    },
    menu: {
        icon: {
            id: 'n7-icon-angle-down',
            payload: 'view-menu'
        },
        actions: [{
                label: 'Change notebook',
                payload: 'change-notebook'
            }, {
                label: 'Delete',
                payload: 'delete'
            }],
        notebooks: {
            header: {
                label: 'Current notebook',
                icon: {
                    id: 'n7-icon-caret-down',
                },
                payload: 'view-notebooks'
            },
            items: [{
                    label: 'Notebook II',
                    payload: 'change-with-other'
                }, {
                    label: 'Last but not least',
                    payload: 'change-with-last'
                }]
        }
    },
    body: 'To annotate or not to annotate, that is the question',
    comment: 'A quote by W.Shakespeare'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi5tb2NrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hbm5vdGF0aW9uL2Fubm90YXRpb24ubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQW1CO0lBQzdDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxvQkFBb0IsRUFBRTtJQUNwQyxPQUFPLEVBQUUsVUFBVTtJQUNuQixJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUscUNBQXFDO1FBQzVDLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRTtZQUNOLE9BQU8sRUFBRSxXQUFXO1NBQ3JCO0tBQ0Y7SUFDRCxXQUFXLEVBQUUsS0FBSztJQUNsQixJQUFJLEVBQUUsZ0JBQWdCO0lBQ3RCLFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxlQUFlO1FBQ3JCLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFO0tBQ3JEO0lBQ0QsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFO1lBQ0osRUFBRSxFQUFFLG9CQUFvQjtZQUN4QixPQUFPLEVBQUUsV0FBVztTQUNyQjtRQUNELE9BQU8sRUFBRSxDQUFDO2dCQUNSLEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCLE9BQU8sRUFBRSxpQkFBaUI7YUFDM0IsRUFBRTtnQkFDRCxLQUFLLEVBQUUsUUFBUTtnQkFDZixPQUFPLEVBQUUsUUFBUTthQUNsQixDQUFDO1FBQ0YsU0FBUyxFQUFFO1lBQ1QsTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRSxrQkFBa0I7Z0JBQ3pCLElBQUksRUFBRTtvQkFDSixFQUFFLEVBQUUsb0JBQW9CO2lCQUN6QjtnQkFDRCxPQUFPLEVBQUUsZ0JBQWdCO2FBQzFCO1lBQ0QsS0FBSyxFQUFFLENBQUM7b0JBQ04sS0FBSyxFQUFFLGFBQWE7b0JBQ3BCLE9BQU8sRUFBRSxtQkFBbUI7aUJBQzdCLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLG9CQUFvQjtvQkFDM0IsT0FBTyxFQUFFLGtCQUFrQjtpQkFDNUIsQ0FBQztTQUNIO0tBQ0Y7SUFDRCxJQUFJLEVBQUUsc0RBQXNEO0lBQzVELE9BQU8sRUFBRSwwQkFBMEI7Q0FDcEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFubm90YXRpb25EYXRhIH0gZnJvbSAnLi9hbm5vdGF0aW9uJztcblxuZXhwb3J0IGNvbnN0IEFOTk9UQVRJT05fTU9DSzogQW5ub3RhdGlvbkRhdGEgPSB7XG4gIF9tZXRhOiB7IHVpZDogJ21vY2stYW5ub3RhdGlvbi0wMScgfSxcbiAgcGF5bG9hZDogJ2NvbGxhcHNlJyxcbiAgdXNlcjoge1xuICAgIGltYWdlOiAnaHR0cHM6Ly9wbGFjZWltZy5jb20vNDAwLzYwMC9wZW9wbGUnLFxuICAgIG5hbWU6ICdKb2huIERvZScsXG4gICAgYW5jaG9yOiB7XG4gICAgICBwYXlsb2FkOiAndXNlci1wYWdlJyxcbiAgICB9XG4gIH0sXG4gIGlzQ29sbGFwc2VkOiBmYWxzZSxcbiAgZGF0ZTogJzE4IG1pbnV0ZXMgYWdvJyxcbiAgbm90ZWJvb2s6IHtcbiAgICBuYW1lOiAnbm90ZWJvb2stMjAxOScsXG4gICAgYW5jaG9yOiB7IGhyZWY6ICcvbm90ZWJvb2stMjAxOScsIHRhcmdldDogJ19ibGFuaycgfVxuICB9LFxuICBtZW51OiB7XG4gICAgaWNvbjoge1xuICAgICAgaWQ6ICduNy1pY29uLWFuZ2xlLWRvd24nLFxuICAgICAgcGF5bG9hZDogJ3ZpZXctbWVudSdcbiAgICB9LFxuICAgIGFjdGlvbnM6IFt7XG4gICAgICBsYWJlbDogJ0NoYW5nZSBub3RlYm9vaycsXG4gICAgICBwYXlsb2FkOiAnY2hhbmdlLW5vdGVib29rJ1xuICAgIH0sIHtcbiAgICAgIGxhYmVsOiAnRGVsZXRlJyxcbiAgICAgIHBheWxvYWQ6ICdkZWxldGUnXG4gICAgfV0sXG4gICAgbm90ZWJvb2tzOiB7XG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgbGFiZWw6ICdDdXJyZW50IG5vdGVib29rJyxcbiAgICAgICAgaWNvbjoge1xuICAgICAgICAgIGlkOiAnbjctaWNvbi1jYXJldC1kb3duJyxcbiAgICAgICAgfSxcbiAgICAgICAgcGF5bG9hZDogJ3ZpZXctbm90ZWJvb2tzJ1xuICAgICAgfSxcbiAgICAgIGl0ZW1zOiBbe1xuICAgICAgICBsYWJlbDogJ05vdGVib29rIElJJyxcbiAgICAgICAgcGF5bG9hZDogJ2NoYW5nZS13aXRoLW90aGVyJ1xuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogJ0xhc3QgYnV0IG5vdCBsZWFzdCcsXG4gICAgICAgIHBheWxvYWQ6ICdjaGFuZ2Utd2l0aC1sYXN0J1xuICAgICAgfV1cbiAgICB9XG4gIH0sXG4gIGJvZHk6ICdUbyBhbm5vdGF0ZSBvciBub3QgdG8gYW5ub3RhdGUsIHRoYXQgaXMgdGhlIHF1ZXN0aW9uJyxcbiAgY29tbWVudDogJ0EgcXVvdGUgYnkgVy5TaGFrZXNwZWFyZSdcbn07XG4iXX0=