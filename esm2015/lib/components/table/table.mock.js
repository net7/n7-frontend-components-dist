export const TABLE_MOCK = {
    classes: 'test-layout-table',
    head: [
        {
            classes: 'HEADER',
            cells: [
                {
                    classes: 'CONTENT',
                    content: 'DATA - ORA'
                },
                {
                    classes: 'CONTENT',
                    content: 'SEZIONE'
                },
                {
                    classes: 'CONTENT',
                    content: 'PARAMETRO'
                },
                {
                    classes: 'CONTENT',
                    content: 'VALORE'
                }
            ]
        }
    ],
    body: [
        {
            classes: 'BODY',
            _meta: 'A',
            cells: [
                {
                    classes: 'CONTENT',
                    // _meta: '1x1',
                    payload: 'B',
                    content: '<span style="color:red;">10/01/2019 - 10:23</span>',
                    type: 'html'
                },
                {
                    classes: 'CONTENT',
                    // _meta: '1x2',
                    content: 'Ingresso Industriale',
                    type: 'html'
                },
                {
                    classes: 'bold',
                    // _meta: '1x3',
                    content: '<span style="color:blue;">&bullet;</span> N_NH4',
                    type: 'html'
                },
                {
                    content: '9 mg/l',
                    // _meta: '1x4',
                    type: 'html'
                }
            ]
        },
        {
            classes: 'BODY',
            _meta: 'B',
            cells: [
                {
                    classes: 'CONTENT',
                    _meta: '2x1',
                    payload: 'C',
                    content: '<span style="color:red;">12/01/2019 - 20:54</span>',
                    type: 'html'
                },
                {
                    classes: 'CONTENT',
                    _meta: '2x2',
                    content: 'Ingresso Civile',
                    type: 'html'
                },
                {
                    classes: 'bold',
                    _meta: '2x3',
                    content: '<span style="color:purple;">&bullet;</span> Ossigeno mg/l',
                    type: 'html'
                },
                {
                    content: '100 mg/l',
                    _meta: { id: '2x4', inputId: '_text_input_2x4' },
                    payload: { id: '2x4' },
                    type: 'html'
                }
            ]
        },
        {
            classes: 'BODY',
            _meta: 'C',
            cells: [
                {
                    classes: 'CONTENT',
                    _meta: '3x1',
                    payload: 'C',
                    content: '<span style="color:red;">9/01/2019 - 4:12</span>',
                    type: 'html'
                },
                {
                    classes: 'CONTENT',
                    _meta: '3x2',
                    content: 'Preaccumulo',
                    type: 'html'
                },
                {
                    classes: 'bold',
                    _meta: '3x3',
                    content: '<span style="color:purple;">&bullet;</span> Ossigeno mg/l',
                    type: 'html' // 'altro'
                },
                {
                    content: '100 mg/l',
                    _meta: { id: '3x4', inputId: '_text_input_3x4' },
                    payload: { id: '3x4' },
                    type: 'input:text'
                }
            ]
        },
        {
            classes: 'BODY',
            _meta: 'D',
            cells: [
                {
                    classes: 'CONTENT',
                    _meta: '4x1',
                    content: '8/01/2019 - 3:52',
                    type: 'html'
                },
                {
                    classes: 'CONTENT',
                    _meta: '4x2',
                    content: 'Preaccumulo',
                    type: 'html'
                },
                {
                    classes: 'bold',
                    // _meta: '4x3',
                    content: '<span style="color:green;">&bullet;</span> Redox V',
                    type: 'html'
                },
                {
                    classes: 'input-test',
                    content: '231 V',
                    type: 'html',
                    _meta: { id: 'NPT', inputId: '_text_input_NPT' },
                    payload: { id: 'NPT' }
                }
            ]
        }
    ]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9jay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGFibGUvdGFibGUubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQWM7SUFDbkMsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QixJQUFJLEVBQUU7UUFDSjtZQUNFLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLEtBQUssRUFBRTtnQkFDTDtvQkFDRSxPQUFPLEVBQUUsU0FBUztvQkFDbEIsT0FBTyxFQUFFLFlBQVk7aUJBQ3RCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxTQUFTO29CQUNsQixPQUFPLEVBQUUsU0FBUztpQkFDbkI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLFNBQVM7b0JBQ2xCLE9BQU8sRUFBRSxXQUFXO2lCQUNyQjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsU0FBUztvQkFDbEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCO2FBQ0Y7U0FDRjtLQUNGO0lBQ0QsSUFBSSxFQUFFO1FBQ0o7WUFDRSxPQUFPLEVBQUUsTUFBTTtZQUNmLEtBQUssRUFBRSxHQUFHO1lBQ1YsS0FBSyxFQUFFO2dCQUNMO29CQUNFLE9BQU8sRUFBRSxTQUFTO29CQUNsQixnQkFBZ0I7b0JBQ2hCLE9BQU8sRUFBRSxHQUFHO29CQUNaLE9BQU8sRUFBRSxvREFBb0Q7b0JBQzdELElBQUksRUFBRSxNQUFNO2lCQUNiO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxTQUFTO29CQUNsQixnQkFBZ0I7b0JBQ2hCLE9BQU8sRUFBRSxzQkFBc0I7b0JBQy9CLElBQUksRUFBRSxNQUFNO2lCQUNiO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxNQUFNO29CQUNmLGdCQUFnQjtvQkFDaEIsT0FBTyxFQUFFLGlEQUFpRDtvQkFDMUQsSUFBSSxFQUFFLE1BQU07aUJBQ2I7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLGdCQUFnQjtvQkFDaEIsSUFBSSxFQUFFLE1BQU07aUJBQ2I7YUFDRjtTQUNGO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsTUFBTTtZQUNmLEtBQUssRUFBRSxHQUFHO1lBQ1YsS0FBSyxFQUFFO2dCQUNMO29CQUNFLE9BQU8sRUFBRSxTQUFTO29CQUNsQixLQUFLLEVBQUUsS0FBSztvQkFDWixPQUFPLEVBQUUsR0FBRztvQkFDWixPQUFPLEVBQUUsb0RBQW9EO29CQUM3RCxJQUFJLEVBQUUsTUFBTTtpQkFDYjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsU0FBUztvQkFDbEIsS0FBSyxFQUFFLEtBQUs7b0JBQ1osT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsSUFBSSxFQUFFLE1BQU07aUJBQ2I7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLE1BQU07b0JBQ2YsS0FBSyxFQUFFLEtBQUs7b0JBQ1osT0FBTyxFQUFFLDJEQUEyRDtvQkFDcEUsSUFBSSxFQUFFLE1BQU07aUJBQ2I7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLFVBQVU7b0JBQ25CLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFO29CQUNoRCxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFO29CQUN0QixJQUFJLEVBQUUsTUFBTTtpQkFDYjthQUNGO1NBQ0Y7UUFDRDtZQUNFLE9BQU8sRUFBRSxNQUFNO1lBQ2YsS0FBSyxFQUFFLEdBQUc7WUFDVixLQUFLLEVBQUU7Z0JBQ0w7b0JBQ0UsT0FBTyxFQUFFLFNBQVM7b0JBQ2xCLEtBQUssRUFBRSxLQUFLO29CQUNaLE9BQU8sRUFBRSxHQUFHO29CQUNaLE9BQU8sRUFBRSxrREFBa0Q7b0JBQzNELElBQUksRUFBRSxNQUFNO2lCQUNiO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxTQUFTO29CQUNsQixLQUFLLEVBQUUsS0FBSztvQkFDWixPQUFPLEVBQUUsYUFBYTtvQkFDdEIsSUFBSSxFQUFFLE1BQU07aUJBQ2I7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLE1BQU07b0JBQ2YsS0FBSyxFQUFFLEtBQUs7b0JBQ1osT0FBTyxFQUFFLDJEQUEyRDtvQkFDcEUsSUFBSSxFQUFFLE1BQU0sQ0FBQSxVQUFVO2lCQUN2QjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsVUFBVTtvQkFDbkIsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUU7b0JBQ2hELE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUU7b0JBQ3RCLElBQUksRUFBRSxZQUFZO2lCQUNuQjthQUNGO1NBQ0Y7UUFDRDtZQUNFLE9BQU8sRUFBRSxNQUFNO1lBQ2YsS0FBSyxFQUFFLEdBQUc7WUFDVixLQUFLLEVBQUU7Z0JBQ0w7b0JBQ0UsT0FBTyxFQUFFLFNBQVM7b0JBQ2xCLEtBQUssRUFBRSxLQUFLO29CQUNaLE9BQU8sRUFBRSxrQkFBa0I7b0JBQzNCLElBQUksRUFBRSxNQUFNO2lCQUNiO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxTQUFTO29CQUNsQixLQUFLLEVBQUUsS0FBSztvQkFDWixPQUFPLEVBQUUsYUFBYTtvQkFDdEIsSUFBSSxFQUFFLE1BQU07aUJBQ2I7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLE1BQU07b0JBQ2YsZ0JBQWdCO29CQUNoQixPQUFPLEVBQUUsb0RBQW9EO29CQUM3RCxJQUFJLEVBQUUsTUFBTTtpQkFDYjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsWUFBWTtvQkFDckIsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLElBQUksRUFBRSxNQUFNO29CQUNaLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFO29CQUNoRCxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFO2lCQUN2QjthQUNGO1NBQ0Y7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWJsZURhdGEgfSBmcm9tICcuL3RhYmxlJztcblxuZXhwb3J0IGNvbnN0IFRBQkxFX01PQ0s6IFRhYmxlRGF0YSA9IHtcbiAgY2xhc3NlczogJ3Rlc3QtbGF5b3V0LXRhYmxlJyxcbiAgaGVhZDogW1xuICAgIHtcbiAgICAgIGNsYXNzZXM6ICdIRUFERVInLFxuICAgICAgY2VsbHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzZXM6ICdDT05URU5UJyxcbiAgICAgICAgICBjb250ZW50OiAnREFUQSAtIE9SQSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzZXM6ICdDT05URU5UJyxcbiAgICAgICAgICBjb250ZW50OiAnU0VaSU9ORSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzZXM6ICdDT05URU5UJyxcbiAgICAgICAgICBjb250ZW50OiAnUEFSQU1FVFJPJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NlczogJ0NPTlRFTlQnLFxuICAgICAgICAgIGNvbnRlbnQ6ICdWQUxPUkUnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF0sXG4gIGJvZHk6IFtcbiAgICB7IC8vIGZpcnN0IHJvd1xuICAgICAgY2xhc3NlczogJ0JPRFknLFxuICAgICAgX21ldGE6ICdBJyxcbiAgICAgIGNlbGxzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc2VzOiAnQ09OVEVOVCcsXG4gICAgICAgICAgLy8gX21ldGE6ICcxeDEnLFxuICAgICAgICAgIHBheWxvYWQ6ICdCJyxcbiAgICAgICAgICBjb250ZW50OiAnPHNwYW4gc3R5bGU9XCJjb2xvcjpyZWQ7XCI+MTAvMDEvMjAxOSAtIDEwOjIzPC9zcGFuPicsXG4gICAgICAgICAgdHlwZTogJ2h0bWwnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc2VzOiAnQ09OVEVOVCcsXG4gICAgICAgICAgLy8gX21ldGE6ICcxeDInLFxuICAgICAgICAgIGNvbnRlbnQ6ICdJbmdyZXNzbyBJbmR1c3RyaWFsZScsXG4gICAgICAgICAgdHlwZTogJ2h0bWwnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc2VzOiAnYm9sZCcsXG4gICAgICAgICAgLy8gX21ldGE6ICcxeDMnLFxuICAgICAgICAgIGNvbnRlbnQ6ICc8c3BhbiBzdHlsZT1cImNvbG9yOmJsdWU7XCI+JmJ1bGxldDs8L3NwYW4+IE5fTkg0JyxcbiAgICAgICAgICB0eXBlOiAnaHRtbCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRlbnQ6ICc5IG1nL2wnLFxuICAgICAgICAgIC8vIF9tZXRhOiAnMXg0JyxcbiAgICAgICAgICB0eXBlOiAnaHRtbCdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAgeyAvLyBzZWNvbmQgcm93XG4gICAgICBjbGFzc2VzOiAnQk9EWScsXG4gICAgICBfbWV0YTogJ0InLFxuICAgICAgY2VsbHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzZXM6ICdDT05URU5UJyxcbiAgICAgICAgICBfbWV0YTogJzJ4MScsXG4gICAgICAgICAgcGF5bG9hZDogJ0MnLFxuICAgICAgICAgIGNvbnRlbnQ6ICc8c3BhbiBzdHlsZT1cImNvbG9yOnJlZDtcIj4xMi8wMS8yMDE5IC0gMjA6NTQ8L3NwYW4+JyxcbiAgICAgICAgICB0eXBlOiAnaHRtbCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzZXM6ICdDT05URU5UJyxcbiAgICAgICAgICBfbWV0YTogJzJ4MicsXG4gICAgICAgICAgY29udGVudDogJ0luZ3Jlc3NvIENpdmlsZScsXG4gICAgICAgICAgdHlwZTogJ2h0bWwnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc2VzOiAnYm9sZCcsXG4gICAgICAgICAgX21ldGE6ICcyeDMnLFxuICAgICAgICAgIGNvbnRlbnQ6ICc8c3BhbiBzdHlsZT1cImNvbG9yOnB1cnBsZTtcIj4mYnVsbGV0Ozwvc3Bhbj4gT3NzaWdlbm8gbWcvbCcsXG4gICAgICAgICAgdHlwZTogJ2h0bWwnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjb250ZW50OiAnMTAwIG1nL2wnLFxuICAgICAgICAgIF9tZXRhOiB7IGlkOiAnMng0JywgaW5wdXRJZDogJ190ZXh0X2lucHV0XzJ4NCcgfSxcbiAgICAgICAgICBwYXlsb2FkOiB7IGlkOiAnMng0JyB9LFxuICAgICAgICAgIHR5cGU6ICdodG1sJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7IC8vIHRoaXJkIHJvd1xuICAgICAgY2xhc3NlczogJ0JPRFknLFxuICAgICAgX21ldGE6ICdDJyxcbiAgICAgIGNlbGxzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc2VzOiAnQ09OVEVOVCcsXG4gICAgICAgICAgX21ldGE6ICczeDEnLFxuICAgICAgICAgIHBheWxvYWQ6ICdDJyxcbiAgICAgICAgICBjb250ZW50OiAnPHNwYW4gc3R5bGU9XCJjb2xvcjpyZWQ7XCI+OS8wMS8yMDE5IC0gNDoxMjwvc3Bhbj4nLFxuICAgICAgICAgIHR5cGU6ICdodG1sJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NlczogJ0NPTlRFTlQnLFxuICAgICAgICAgIF9tZXRhOiAnM3gyJyxcbiAgICAgICAgICBjb250ZW50OiAnUHJlYWNjdW11bG8nLFxuICAgICAgICAgIHR5cGU6ICdodG1sJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NlczogJ2JvbGQnLFxuICAgICAgICAgIF9tZXRhOiAnM3gzJyxcbiAgICAgICAgICBjb250ZW50OiAnPHNwYW4gc3R5bGU9XCJjb2xvcjpwdXJwbGU7XCI+JmJ1bGxldDs8L3NwYW4+IE9zc2lnZW5vIG1nL2wnLFxuICAgICAgICAgIHR5cGU6ICdodG1sJy8vICdhbHRybydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRlbnQ6ICcxMDAgbWcvbCcsXG4gICAgICAgICAgX21ldGE6IHsgaWQ6ICczeDQnLCBpbnB1dElkOiAnX3RleHRfaW5wdXRfM3g0JyB9LFxuICAgICAgICAgIHBheWxvYWQ6IHsgaWQ6ICczeDQnIH0sXG4gICAgICAgICAgdHlwZTogJ2lucHV0OnRleHQnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHsgLy8gZm91cnRoIHJvd1xuICAgICAgY2xhc3NlczogJ0JPRFknLFxuICAgICAgX21ldGE6ICdEJyxcbiAgICAgIGNlbGxzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc2VzOiAnQ09OVEVOVCcsXG4gICAgICAgICAgX21ldGE6ICc0eDEnLFxuICAgICAgICAgIGNvbnRlbnQ6ICc4LzAxLzIwMTkgLSAzOjUyJyxcbiAgICAgICAgICB0eXBlOiAnaHRtbCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzZXM6ICdDT05URU5UJyxcbiAgICAgICAgICBfbWV0YTogJzR4MicsXG4gICAgICAgICAgY29udGVudDogJ1ByZWFjY3VtdWxvJyxcbiAgICAgICAgICB0eXBlOiAnaHRtbCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzZXM6ICdib2xkJyxcbiAgICAgICAgICAvLyBfbWV0YTogJzR4MycsXG4gICAgICAgICAgY29udGVudDogJzxzcGFuIHN0eWxlPVwiY29sb3I6Z3JlZW47XCI+JmJ1bGxldDs8L3NwYW4+IFJlZG94IFYnLFxuICAgICAgICAgIHR5cGU6ICdodG1sJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NlczogJ2lucHV0LXRlc3QnLFxuICAgICAgICAgIGNvbnRlbnQ6ICcyMzEgVicsXG4gICAgICAgICAgdHlwZTogJ2h0bWwnLFxuICAgICAgICAgIF9tZXRhOiB7IGlkOiAnTlBUJywgaW5wdXRJZDogJ190ZXh0X2lucHV0X05QVCcgfSxcbiAgICAgICAgICBwYXlsb2FkOiB7IGlkOiAnTlBUJyB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn07XG4iXX0=