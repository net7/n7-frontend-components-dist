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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItdGl0bGUubW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2R2LWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9pbm5lci10aXRsZS9pbm5lci10aXRsZS5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFtQjtJQUM5QyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsRUFBRTtJQUMxRCx3Q0FBd0M7SUFDeEMsS0FBSyxFQUFFLDJCQUEyQjtJQUNsQyxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsV0FBVztZQUNqQixPQUFPLEVBQUUsTUFBTTtTQUNoQjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxnQkFBZ0I7WUFDdEIsT0FBTyxFQUFFLFFBQVE7U0FDbEI7S0FDRjtJQUNELEtBQUssRUFBRSxZQUFZO0lBQ25CLE9BQU8sRUFBRTtRQUNQLE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxNQUFNO1lBQ2IsT0FBTyxFQUFFO2dCQUNQLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO2dCQUNqQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO2dCQUMzRCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO2FBQ3REO1lBQ0QsT0FBTyxFQUFFLGdCQUFnQjtTQUMxQjtRQUNELE1BQU0sRUFBRTtZQUNOLFdBQVcsRUFBRSxRQUFRO1lBQ3JCLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsUUFBUTtnQkFDZCxPQUFPLEVBQUUsZUFBZTthQUN6QjtTQUNGO1FBQ0QsT0FBTyxFQUFFO1lBQ1A7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsTUFBTTtpQkFDaEI7Z0JBQ0QsSUFBSSxFQUFFLGVBQWU7YUFDdEI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxXQUFXO2lCQUNsQjtnQkFDRCxPQUFPLEVBQUUsWUFBWTthQUN0QjtTQUNGO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5uZXJUaXRsZURhdGEgfSBmcm9tICcuL2lubmVyLXRpdGxlJztcblxuZXhwb3J0IGNvbnN0IElOTkVSX1RJVExFX01PQ0s6IElubmVyVGl0bGVEYXRhID0ge1xuICBpY29uOiB7IGlkOiAnbjctaWNvbi1maWxlMycsIHN0eWxlOiB7IGNvbG9yOiAnIzJFNUJGRicgfSB9LCAvLyBpY29uIHdpdGggc3R5bGVcbiAgLy8gaWNvbjogJ243LWljb24tZmlsZTMnLCAvLyBzaW1wbGUgaWNvblxuICBpbWFnZTogJ2h0dHBzOi8vcGljc3VtLnBob3Rvcy8yMDAnLFxuICB0aXRsZToge1xuICAgIG1haW46IHtcbiAgICAgIHRleHQ6ICdNYWluIHRleHQnLFxuICAgICAgY2xhc3NlczogJ2JvbGQnLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICB0ZXh0OiAnU2Vjb25kYXJ5IHRleHQnLFxuICAgICAgY2xhc3NlczogJ2l0YWxpYycsXG4gICAgfVxuICB9LFxuICB0b29sczogJ1Rvb2xzIHRleHQnLFxuICBhY3Rpb25zOiB7XG4gICAgc2VsZWN0OiB7XG4gICAgICBsYWJlbDogJ1NvcnQnLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICB7IHRleHQ6ICdQcmljZScsIHZhbHVlOiAncHJpY2UnIH0sXG4gICAgICAgIHsgdGV4dDogJ0FscGhhYmV0aWMnLCB2YWx1ZTogJ2FscGhhYmV0aWMnLCBzZWxlY3RlZDogdHJ1ZSB9LFxuICAgICAgICB7IHRleHQ6ICdCeSBEYXRlJywgdmFsdWU6ICdieS1kYXRlJywgZGlzYWJsZWQ6IHRydWUgfSxcbiAgICAgIF0sXG4gICAgICBwYXlsb2FkOiAnc2VsZWN0LXNvcnRpbmcnXG4gICAgfSxcbiAgICBzZWFyY2g6IHtcbiAgICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoJyxcbiAgICAgIHBheWxvYWQ6ICdzZWFyY2gtaW5wdXQnLFxuICAgICAgYnV0dG9uOiB7XG4gICAgICAgIHRleHQ6ICdTRUFSQ0gnLFxuICAgICAgICBwYXlsb2FkOiAnc2VhcmNoLWJ1dHRvbicsXG4gICAgICB9XG4gICAgfSxcbiAgICBidXR0b25zOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdCVVRUT04gMScsXG4gICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgIHBheWxvYWQ6ICdidG4xJyxcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnQlVUVE9OIDInLFxuICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICBocmVmOiAnL2V4YW1wbGVzJ1xuICAgICAgICB9LFxuICAgICAgICBjbGFzc2VzOiAnbjctYnRuLWN0YSdcbiAgICAgIH0sXG4gICAgXVxuICB9XG59O1xuIl19