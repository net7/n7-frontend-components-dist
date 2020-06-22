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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9jay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGFibGUvdGFibGUubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQWM7SUFDbkMsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QixJQUFJLEVBQUU7UUFDSjtZQUNFLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLEtBQUssRUFBRTtnQkFDTDtvQkFDRSxPQUFPLEVBQUUsU0FBUztvQkFDbEIsT0FBTyxFQUFFLFlBQVk7aUJBQ3RCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxTQUFTO29CQUNsQixPQUFPLEVBQUUsU0FBUztpQkFDbkI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLFNBQVM7b0JBQ2xCLE9BQU8sRUFBRSxXQUFXO2lCQUNyQjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsU0FBUztvQkFDbEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCO2FBQ0Y7U0FDRjtLQUNGO0lBQ0QsSUFBSSxFQUFFO1FBQ0o7WUFDRSxPQUFPLEVBQUUsTUFBTTtZQUNmLEtBQUssRUFBRSxHQUFHO1lBQ1YsS0FBSyxFQUFFO2dCQUNMO29CQUNFLE9BQU8sRUFBRSxTQUFTO29CQUNsQixnQkFBZ0I7b0JBQ2hCLE9BQU8sRUFBRSxHQUFHO29CQUNaLE9BQU8sRUFBRSxvREFBb0Q7b0JBQzdELElBQUksRUFBRSxNQUFNO2lCQUNiO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxTQUFTO29CQUNsQixnQkFBZ0I7b0JBQ2hCLE9BQU8sRUFBRSxzQkFBc0I7b0JBQy9CLElBQUksRUFBRSxNQUFNO2lCQUNiO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxNQUFNO29CQUNmLGdCQUFnQjtvQkFDaEIsT0FBTyxFQUFFLGlEQUFpRDtvQkFDMUQsSUFBSSxFQUFFLE1BQU07aUJBQ2I7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLGdCQUFnQjtvQkFDaEIsSUFBSSxFQUFFLE1BQU07aUJBQ2I7YUFDRjtTQUNGO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsTUFBTTtZQUNmLEtBQUssRUFBRSxHQUFHO1lBQ1YsS0FBSyxFQUFFO2dCQUNMO29CQUNFLE9BQU8sRUFBRSxTQUFTO29CQUNsQixLQUFLLEVBQUUsS0FBSztvQkFDWixPQUFPLEVBQUUsR0FBRztvQkFDWixPQUFPLEVBQUUsb0RBQW9EO29CQUM3RCxJQUFJLEVBQUUsTUFBTTtpQkFDYjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsU0FBUztvQkFDbEIsS0FBSyxFQUFFLEtBQUs7b0JBQ1osT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsSUFBSSxFQUFFLE1BQU07aUJBQ2I7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLE1BQU07b0JBQ2YsS0FBSyxFQUFFLEtBQUs7b0JBQ1osT0FBTyxFQUFFLDJEQUEyRDtvQkFDcEUsSUFBSSxFQUFFLE1BQU07aUJBQ2I7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLFVBQVU7b0JBQ25CLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFO29CQUNoRCxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFO29CQUN0QixJQUFJLEVBQUUsTUFBTTtpQkFDYjthQUNGO1NBQ0Y7UUFDRDtZQUNFLE9BQU8sRUFBRSxNQUFNO1lBQ2YsS0FBSyxFQUFFLEdBQUc7WUFDVixLQUFLLEVBQUU7Z0JBQ0w7b0JBQ0UsT0FBTyxFQUFFLFNBQVM7b0JBQ2xCLEtBQUssRUFBRSxLQUFLO29CQUNaLE9BQU8sRUFBRSxHQUFHO29CQUNaLE9BQU8sRUFBRSxrREFBa0Q7b0JBQzNELElBQUksRUFBRSxNQUFNO2lCQUNiO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxTQUFTO29CQUNsQixLQUFLLEVBQUUsS0FBSztvQkFDWixPQUFPLEVBQUUsYUFBYTtvQkFDdEIsSUFBSSxFQUFFLE1BQU07aUJBQ2I7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLE1BQU07b0JBQ2YsS0FBSyxFQUFFLEtBQUs7b0JBQ1osT0FBTyxFQUFFLDJEQUEyRDtvQkFDcEUsSUFBSSxFQUFFLE1BQU0sQ0FBQSxVQUFVO2lCQUN2QjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsVUFBVTtvQkFDbkIsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUU7b0JBQ2hELE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUU7b0JBQ3RCLElBQUksRUFBRSxZQUFZO2lCQUNuQjthQUNGO1NBQ0Y7UUFDRDtZQUNFLE9BQU8sRUFBRSxNQUFNO1lBQ2YsS0FBSyxFQUFFLEdBQUc7WUFDVixLQUFLLEVBQUU7Z0JBQ0w7b0JBQ0UsT0FBTyxFQUFFLFNBQVM7b0JBQ2xCLEtBQUssRUFBRSxLQUFLO29CQUNaLE9BQU8sRUFBRSxrQkFBa0I7b0JBQzNCLElBQUksRUFBRSxNQUFNO2lCQUNiO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxTQUFTO29CQUNsQixLQUFLLEVBQUUsS0FBSztvQkFDWixPQUFPLEVBQUUsYUFBYTtvQkFDdEIsSUFBSSxFQUFFLE1BQU07aUJBQ2I7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLE1BQU07b0JBQ2YsZ0JBQWdCO29CQUNoQixPQUFPLEVBQUUsb0RBQW9EO29CQUM3RCxJQUFJLEVBQUUsTUFBTTtpQkFDYjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsWUFBWTtvQkFDckIsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLElBQUksRUFBRSxNQUFNO29CQUNaLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFO29CQUNoRCxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFO2lCQUN2QjthQUNGO1NBQ0Y7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWJsZURhdGEgfSBmcm9tICcuL3RhYmxlJztcclxuXHJcbmV4cG9ydCBjb25zdCBUQUJMRV9NT0NLOiBUYWJsZURhdGEgPSB7XHJcbiAgY2xhc3NlczogJ3Rlc3QtbGF5b3V0LXRhYmxlJyxcclxuICBoZWFkOiBbXHJcbiAgICB7XHJcbiAgICAgIGNsYXNzZXM6ICdIRUFERVInLFxyXG4gICAgICBjZWxsczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNsYXNzZXM6ICdDT05URU5UJyxcclxuICAgICAgICAgIGNvbnRlbnQ6ICdEQVRBIC0gT1JBJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2xhc3NlczogJ0NPTlRFTlQnLFxyXG4gICAgICAgICAgY29udGVudDogJ1NFWklPTkUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjbGFzc2VzOiAnQ09OVEVOVCcsXHJcbiAgICAgICAgICBjb250ZW50OiAnUEFSQU1FVFJPJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2xhc3NlczogJ0NPTlRFTlQnLFxyXG4gICAgICAgICAgY29udGVudDogJ1ZBTE9SRSdcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICBdLFxyXG4gIGJvZHk6IFtcclxuICAgIHsgLy8gZmlyc3Qgcm93XHJcbiAgICAgIGNsYXNzZXM6ICdCT0RZJyxcclxuICAgICAgX21ldGE6ICdBJyxcclxuICAgICAgY2VsbHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjbGFzc2VzOiAnQ09OVEVOVCcsXHJcbiAgICAgICAgICAvLyBfbWV0YTogJzF4MScsXHJcbiAgICAgICAgICBwYXlsb2FkOiAnQicsXHJcbiAgICAgICAgICBjb250ZW50OiAnPHNwYW4gc3R5bGU9XCJjb2xvcjpyZWQ7XCI+MTAvMDEvMjAxOSAtIDEwOjIzPC9zcGFuPicsXHJcbiAgICAgICAgICB0eXBlOiAnaHRtbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNsYXNzZXM6ICdDT05URU5UJyxcclxuICAgICAgICAgIC8vIF9tZXRhOiAnMXgyJyxcclxuICAgICAgICAgIGNvbnRlbnQ6ICdJbmdyZXNzbyBJbmR1c3RyaWFsZScsXHJcbiAgICAgICAgICB0eXBlOiAnaHRtbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNsYXNzZXM6ICdib2xkJyxcclxuICAgICAgICAgIC8vIF9tZXRhOiAnMXgzJyxcclxuICAgICAgICAgIGNvbnRlbnQ6ICc8c3BhbiBzdHlsZT1cImNvbG9yOmJsdWU7XCI+JmJ1bGxldDs8L3NwYW4+IE5fTkg0JyxcclxuICAgICAgICAgIHR5cGU6ICdodG1sJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJzkgbWcvbCcsXHJcbiAgICAgICAgICAvLyBfbWV0YTogJzF4NCcsXHJcbiAgICAgICAgICB0eXBlOiAnaHRtbCdcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7IC8vIHNlY29uZCByb3dcclxuICAgICAgY2xhc3NlczogJ0JPRFknLFxyXG4gICAgICBfbWV0YTogJ0InLFxyXG4gICAgICBjZWxsczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNsYXNzZXM6ICdDT05URU5UJyxcclxuICAgICAgICAgIF9tZXRhOiAnMngxJyxcclxuICAgICAgICAgIHBheWxvYWQ6ICdDJyxcclxuICAgICAgICAgIGNvbnRlbnQ6ICc8c3BhbiBzdHlsZT1cImNvbG9yOnJlZDtcIj4xMi8wMS8yMDE5IC0gMjA6NTQ8L3NwYW4+JyxcclxuICAgICAgICAgIHR5cGU6ICdodG1sJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2xhc3NlczogJ0NPTlRFTlQnLFxyXG4gICAgICAgICAgX21ldGE6ICcyeDInLFxyXG4gICAgICAgICAgY29udGVudDogJ0luZ3Jlc3NvIENpdmlsZScsXHJcbiAgICAgICAgICB0eXBlOiAnaHRtbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNsYXNzZXM6ICdib2xkJyxcclxuICAgICAgICAgIF9tZXRhOiAnMngzJyxcclxuICAgICAgICAgIGNvbnRlbnQ6ICc8c3BhbiBzdHlsZT1cImNvbG9yOnB1cnBsZTtcIj4mYnVsbGV0Ozwvc3Bhbj4gT3NzaWdlbm8gbWcvbCcsXHJcbiAgICAgICAgICB0eXBlOiAnaHRtbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICcxMDAgbWcvbCcsXHJcbiAgICAgICAgICBfbWV0YTogeyBpZDogJzJ4NCcsIGlucHV0SWQ6ICdfdGV4dF9pbnB1dF8yeDQnIH0sXHJcbiAgICAgICAgICBwYXlsb2FkOiB7IGlkOiAnMng0JyB9LFxyXG4gICAgICAgICAgdHlwZTogJ2h0bWwnXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAgeyAvLyB0aGlyZCByb3dcclxuICAgICAgY2xhc3NlczogJ0JPRFknLFxyXG4gICAgICBfbWV0YTogJ0MnLFxyXG4gICAgICBjZWxsczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNsYXNzZXM6ICdDT05URU5UJyxcclxuICAgICAgICAgIF9tZXRhOiAnM3gxJyxcclxuICAgICAgICAgIHBheWxvYWQ6ICdDJyxcclxuICAgICAgICAgIGNvbnRlbnQ6ICc8c3BhbiBzdHlsZT1cImNvbG9yOnJlZDtcIj45LzAxLzIwMTkgLSA0OjEyPC9zcGFuPicsXHJcbiAgICAgICAgICB0eXBlOiAnaHRtbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNsYXNzZXM6ICdDT05URU5UJyxcclxuICAgICAgICAgIF9tZXRhOiAnM3gyJyxcclxuICAgICAgICAgIGNvbnRlbnQ6ICdQcmVhY2N1bXVsbycsXHJcbiAgICAgICAgICB0eXBlOiAnaHRtbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNsYXNzZXM6ICdib2xkJyxcclxuICAgICAgICAgIF9tZXRhOiAnM3gzJyxcclxuICAgICAgICAgIGNvbnRlbnQ6ICc8c3BhbiBzdHlsZT1cImNvbG9yOnB1cnBsZTtcIj4mYnVsbGV0Ozwvc3Bhbj4gT3NzaWdlbm8gbWcvbCcsXHJcbiAgICAgICAgICB0eXBlOiAnaHRtbCcvLyAnYWx0cm8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAnMTAwIG1nL2wnLFxyXG4gICAgICAgICAgX21ldGE6IHsgaWQ6ICczeDQnLCBpbnB1dElkOiAnX3RleHRfaW5wdXRfM3g0JyB9LFxyXG4gICAgICAgICAgcGF5bG9hZDogeyBpZDogJzN4NCcgfSxcclxuICAgICAgICAgIHR5cGU6ICdpbnB1dDp0ZXh0J1xyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHsgLy8gZm91cnRoIHJvd1xyXG4gICAgICBjbGFzc2VzOiAnQk9EWScsXHJcbiAgICAgIF9tZXRhOiAnRCcsXHJcbiAgICAgIGNlbGxzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2xhc3NlczogJ0NPTlRFTlQnLFxyXG4gICAgICAgICAgX21ldGE6ICc0eDEnLFxyXG4gICAgICAgICAgY29udGVudDogJzgvMDEvMjAxOSAtIDM6NTInLFxyXG4gICAgICAgICAgdHlwZTogJ2h0bWwnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjbGFzc2VzOiAnQ09OVEVOVCcsXHJcbiAgICAgICAgICBfbWV0YTogJzR4MicsXHJcbiAgICAgICAgICBjb250ZW50OiAnUHJlYWNjdW11bG8nLFxyXG4gICAgICAgICAgdHlwZTogJ2h0bWwnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjbGFzc2VzOiAnYm9sZCcsXHJcbiAgICAgICAgICAvLyBfbWV0YTogJzR4MycsXHJcbiAgICAgICAgICBjb250ZW50OiAnPHNwYW4gc3R5bGU9XCJjb2xvcjpncmVlbjtcIj4mYnVsbGV0Ozwvc3Bhbj4gUmVkb3ggVicsXHJcbiAgICAgICAgICB0eXBlOiAnaHRtbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNsYXNzZXM6ICdpbnB1dC10ZXN0JyxcclxuICAgICAgICAgIGNvbnRlbnQ6ICcyMzEgVicsXHJcbiAgICAgICAgICB0eXBlOiAnaHRtbCcsXHJcbiAgICAgICAgICBfbWV0YTogeyBpZDogJ05QVCcsIGlucHV0SWQ6ICdfdGV4dF9pbnB1dF9OUFQnIH0sXHJcbiAgICAgICAgICBwYXlsb2FkOiB7IGlkOiAnTlBUJyB9XHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgXVxyXG59O1xyXG4iXX0=