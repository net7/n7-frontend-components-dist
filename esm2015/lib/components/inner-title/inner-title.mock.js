export const INNER_TITLE_MOCK = {
    icon: 'n7-icon-file3',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItdGl0bGUubW9jay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaW5uZXItdGl0bGUvaW5uZXItdGl0bGUubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBbUI7SUFDOUMsSUFBSSxFQUFFLGVBQWU7SUFDckIsS0FBSyxFQUFFLDJCQUEyQjtJQUNsQyxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsV0FBVztZQUNqQixPQUFPLEVBQUUsTUFBTTtTQUNoQjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxnQkFBZ0I7WUFDdEIsT0FBTyxFQUFFLFFBQVE7U0FDbEI7S0FDRjtJQUNELEtBQUssRUFBRSxZQUFZO0lBQ25CLE9BQU8sRUFBRTtRQUNQLE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxNQUFNO1lBQ2IsT0FBTyxFQUFFO2dCQUNQLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO2dCQUNqQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO2dCQUMzRCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO2FBQ3REO1lBQ0QsT0FBTyxFQUFFLGdCQUFnQjtTQUMxQjtRQUNELE1BQU0sRUFBRTtZQUNOLFdBQVcsRUFBRSxRQUFRO1lBQ3JCLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsUUFBUTtnQkFDZCxPQUFPLEVBQUUsZUFBZTthQUN6QjtTQUNGO1FBQ0QsT0FBTyxFQUFFO1lBQ1A7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsTUFBTTtpQkFDaEI7Z0JBQ0QsSUFBSSxFQUFFLGVBQWU7YUFDdEI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxXQUFXO2lCQUNsQjtnQkFDRCxPQUFPLEVBQUUsWUFBWTthQUN0QjtTQUNGO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5uZXJUaXRsZURhdGEgfSBmcm9tICcuL2lubmVyLXRpdGxlJztcclxuXHJcbmV4cG9ydCBjb25zdCBJTk5FUl9USVRMRV9NT0NLOiBJbm5lclRpdGxlRGF0YSA9IHtcclxuICBpY29uOiAnbjctaWNvbi1maWxlMycsXHJcbiAgaW1hZ2U6ICdodHRwczovL3BpY3N1bS5waG90b3MvMjAwJyxcclxuICB0aXRsZToge1xyXG4gICAgbWFpbjoge1xyXG4gICAgICB0ZXh0OiAnTWFpbiB0ZXh0JyxcclxuICAgICAgY2xhc3NlczogJ2JvbGQnLFxyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeToge1xyXG4gICAgICB0ZXh0OiAnU2Vjb25kYXJ5IHRleHQnLFxyXG4gICAgICBjbGFzc2VzOiAnaXRhbGljJyxcclxuICAgIH1cclxuICB9LFxyXG4gIHRvb2xzOiAnVG9vbHMgdGV4dCcsXHJcbiAgYWN0aW9uczoge1xyXG4gICAgc2VsZWN0OiB7XHJcbiAgICAgIGxhYmVsOiAnU29ydCcsXHJcbiAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICB7IHRleHQ6ICdQcmljZScsIHZhbHVlOiAncHJpY2UnIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnQWxwaGFiZXRpYycsIHZhbHVlOiAnYWxwaGFiZXRpYycsIHNlbGVjdGVkOiB0cnVlIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnQnkgRGF0ZScsIHZhbHVlOiAnYnktZGF0ZScsIGRpc2FibGVkOiB0cnVlIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIHBheWxvYWQ6ICdzZWxlY3Qtc29ydGluZydcclxuICAgIH0sXHJcbiAgICBzZWFyY2g6IHtcclxuICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2gnLFxyXG4gICAgICBwYXlsb2FkOiAnc2VhcmNoLWlucHV0JyxcclxuICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgdGV4dDogJ1NFQVJDSCcsXHJcbiAgICAgICAgcGF5bG9hZDogJ3NlYXJjaC1idXR0b24nLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYnV0dG9uczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ0JVVFRPTiAxJyxcclxuICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgIHBheWxvYWQ6ICdidG4xJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGljb246ICduNy1pY29uLWZpbGUzJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ0JVVFRPTiAyJyxcclxuICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgIGhyZWY6ICcvZXhhbXBsZXMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbGFzc2VzOiAnbjctYnRuLWN0YSdcclxuICAgICAgfSxcclxuICAgIF1cclxuICB9XHJcbn07XHJcbiJdfQ==