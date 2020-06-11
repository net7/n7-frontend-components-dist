export var INNER_TITLE_MOCK = {
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
            { text: 'BUTTON 1', payload: 'btn1', icon: 'n7-icon-file3' },
            { text: 'BUTTON 2', payload: 'btn2', classes: 'n7-btn-cta' },
        ]
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItdGl0bGUubW9jay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaW5uZXItdGl0bGUvaW5uZXItdGl0bGUubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsSUFBTSxnQkFBZ0IsR0FBbUI7SUFDOUMsSUFBSSxFQUFFLGVBQWU7SUFDckIsS0FBSyxFQUFFLDJCQUEyQjtJQUNsQyxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsV0FBVztZQUNqQixPQUFPLEVBQUUsTUFBTTtTQUNoQjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxnQkFBZ0I7WUFDdEIsT0FBTyxFQUFFLFFBQVE7U0FDbEI7S0FDRjtJQUNELEtBQUssRUFBRSxZQUFZO0lBQ25CLE9BQU8sRUFBRTtRQUNQLE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxNQUFNO1lBQ2IsT0FBTyxFQUFFO2dCQUNQLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO2dCQUNqQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO2dCQUMzRCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO2FBQ3REO1lBQ0QsT0FBTyxFQUFFLGdCQUFnQjtTQUMxQjtRQUNELE1BQU0sRUFBRTtZQUNOLFdBQVcsRUFBRSxRQUFRO1lBQ3JCLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsUUFBUTtnQkFDZCxPQUFPLEVBQUUsZUFBZTthQUN6QjtTQUNGO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTtZQUM1RCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFO1NBQzdEO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5uZXJUaXRsZURhdGEgfSBmcm9tICcuL2lubmVyLXRpdGxlJztcblxuZXhwb3J0IGNvbnN0IElOTkVSX1RJVExFX01PQ0s6IElubmVyVGl0bGVEYXRhID0ge1xuICBpY29uOiAnbjctaWNvbi1maWxlMycsXG4gIGltYWdlOiAnaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzIwMCcsXG4gIHRpdGxlOiB7XG4gICAgbWFpbjoge1xuICAgICAgdGV4dDogJ01haW4gdGV4dCcsXG4gICAgICBjbGFzc2VzOiAnYm9sZCcsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIHRleHQ6ICdTZWNvbmRhcnkgdGV4dCcsXG4gICAgICBjbGFzc2VzOiAnaXRhbGljJyxcbiAgICB9XG4gIH0sXG4gIHRvb2xzOiAnVG9vbHMgdGV4dCcsXG4gIGFjdGlvbnM6IHtcbiAgICBzZWxlY3Q6IHtcbiAgICAgIGxhYmVsOiAnU29ydCcsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIHsgdGV4dDogJ1ByaWNlJywgdmFsdWU6ICdwcmljZScgfSxcbiAgICAgICAgeyB0ZXh0OiAnQWxwaGFiZXRpYycsIHZhbHVlOiAnYWxwaGFiZXRpYycsIHNlbGVjdGVkOiB0cnVlIH0sXG4gICAgICAgIHsgdGV4dDogJ0J5IERhdGUnLCB2YWx1ZTogJ2J5LWRhdGUnLCBkaXNhYmxlZDogdHJ1ZSB9LFxuICAgICAgXSxcbiAgICAgIHBheWxvYWQ6ICdzZWxlY3Qtc29ydGluZydcbiAgICB9LFxuICAgIHNlYXJjaDoge1xuICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2gnLFxuICAgICAgcGF5bG9hZDogJ3NlYXJjaC1pbnB1dCcsXG4gICAgICBidXR0b246IHtcbiAgICAgICAgdGV4dDogJ1NFQVJDSCcsXG4gICAgICAgIHBheWxvYWQ6ICdzZWFyY2gtYnV0dG9uJyxcbiAgICAgIH1cbiAgICB9LFxuICAgIGJ1dHRvbnM6IFtcbiAgICAgIHsgdGV4dDogJ0JVVFRPTiAxJywgcGF5bG9hZDogJ2J0bjEnLCBpY29uOiAnbjctaWNvbi1maWxlMycgfSxcbiAgICAgIHsgdGV4dDogJ0JVVFRPTiAyJywgcGF5bG9hZDogJ2J0bjInLCBjbGFzc2VzOiAnbjctYnRuLWN0YScgfSxcbiAgICBdXG4gIH1cbn07XG4iXX0=