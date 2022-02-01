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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2R2LWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS90YWJsZS5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBYztJQUNuQyxPQUFPLEVBQUUsbUJBQW1CO0lBQzVCLElBQUksRUFBRTtRQUNKO1lBQ0UsT0FBTyxFQUFFLFFBQVE7WUFDakIsS0FBSyxFQUFFO2dCQUNMO29CQUNFLE9BQU8sRUFBRSxTQUFTO29CQUNsQixPQUFPLEVBQUUsWUFBWTtpQkFDdEI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLFNBQVM7b0JBQ2xCLE9BQU8sRUFBRSxTQUFTO2lCQUNuQjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsU0FBUztvQkFDbEIsT0FBTyxFQUFFLFdBQVc7aUJBQ3JCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxTQUFTO29CQUNsQixPQUFPLEVBQUUsUUFBUTtpQkFDbEI7YUFDRjtTQUNGO0tBQ0Y7SUFDRCxJQUFJLEVBQUU7UUFDSjtZQUNFLE9BQU8sRUFBRSxNQUFNO1lBQ2YsS0FBSyxFQUFFLEdBQUc7WUFDVixLQUFLLEVBQUU7Z0JBQ0w7b0JBQ0UsT0FBTyxFQUFFLFNBQVM7b0JBQ2xCLGdCQUFnQjtvQkFDaEIsT0FBTyxFQUFFLEdBQUc7b0JBQ1osT0FBTyxFQUFFLG9EQUFvRDtvQkFDN0QsSUFBSSxFQUFFLE1BQU07aUJBQ2I7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLFNBQVM7b0JBQ2xCLGdCQUFnQjtvQkFDaEIsT0FBTyxFQUFFLHNCQUFzQjtvQkFDL0IsSUFBSSxFQUFFLE1BQU07aUJBQ2I7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLE1BQU07b0JBQ2YsZ0JBQWdCO29CQUNoQixPQUFPLEVBQUUsaURBQWlEO29CQUMxRCxJQUFJLEVBQUUsTUFBTTtpQkFDYjtnQkFD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O1xuXG5leHBvcnQgY29uc3QgVEFCTEVfTU9DSzogVGFibGVEYXRhID0ge1xuICBjbGFzc2VzOiAndGVzdC1sYXlvdXQtdGFibGUnLFxuICBoZWFkOiBbXG4gICAge1xuICAgICAgY2xhc3NlczogJ0hFQURFUicsXG4gICAgICBjZWxsczogW1xuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NlczogJ0NPTlRFTlQnLFxuICAgICAgICAgIGNvbnRlbnQ6ICdEQVRBIC0gT1JBJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NlczogJ0NPTlRFTlQnLFxuICAgICAgICAgIGNvbnRlbnQ6ICdTRVpJT05FJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NlczogJ0NPTlRFTlQnLFxuICAgICAgICAgIGNvbnRlbnQ6ICdQQVJBTUVUUk8nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc2VzOiAnQ09OVEVOVCcsXG4gICAgICAgICAgY29udGVudDogJ1ZBTE9SRSdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXSxcbiAgYm9keTogW1xuICAgIHsgLy8gZmlyc3Qgcm93XG4gICAgICBjbGFzc2VzOiAnQk9EWScsXG4gICAgICBfbWV0YTogJ0EnLFxuICAgICAgY2VsbHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzZXM6ICdDT05URU5UJyxcbiAgICAgICAgICAvLyBfbWV0YTogJzF4MScsXG4gICAgICAgICAgcGF5bG9hZDogJ0InLFxuICAgICAgICAgIGNvbnRlbnQ6ICc8c3BhbiBzdHlsZT1cImNvbG9yOnJlZDtcIj4xMC8wMS8yMDE5IC0gMTA6MjM8L3NwYW4+JyxcbiAgICAgICAgICB0eXBlOiAnaHRtbCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzZXM6ICdDT05URU5UJyxcbiAgICAgICAgICAvLyBfbWV0YTogJzF4MicsXG4gICAgICAgICAgY29udGVudDogJ0luZ3Jlc3NvIEluZHVzdHJpYWxlJyxcbiAgICAgICAgICB0eXBlOiAnaHRtbCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzZXM6ICdib2xkJyxcbiAgICAgICAgICAvLyBfbWV0YTogJzF4MycsXG4gICAgICAgICAgY29udGVudDogJzxzcGFuIHN0eWxlPVwiY29sb3I6Ymx1ZTtcIj4mYnVsbGV0Ozwvc3Bhbj4gTl9OSDQnLFxuICAgICAgICAgIHR5cGU6ICdodG1sJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY29udGVudDogJzkgbWcvbCcsXG4gICAgICAgICAgLy8gX21ldGE6ICcxeDQnLFxuICAgICAgICAgIHR5cGU6ICdodG1sJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7IC8vIHNlY29uZCByb3dcbiAgICAgIGNsYXNzZXM6ICdCT0RZJyxcbiAgICAgIF9tZXRhOiAnQicsXG4gICAgICBjZWxsczogW1xuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NlczogJ0NPTlRFTlQnLFxuICAgICAgICAgIF9tZXRhOiAnMngxJyxcbiAgICAgICAgICBwYXlsb2FkOiAnQycsXG4gICAgICAgICAgY29udGVudDogJzxzcGFuIHN0eWxlPVwiY29sb3I6cmVkO1wiPjEyLzAxLzIwMTkgLSAyMDo1NDwvc3Bhbj4nLFxuICAgICAgICAgIHR5cGU6ICdodG1sJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NlczogJ0NPTlRFTlQnLFxuICAgICAgICAgIF9tZXRhOiAnMngyJyxcbiAgICAgICAgICBjb250ZW50OiAnSW5ncmVzc28gQ2l2aWxlJyxcbiAgICAgICAgICB0eXBlOiAnaHRtbCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzZXM6ICdib2xkJyxcbiAgICAgICAgICBfbWV0YTogJzJ4MycsXG4gICAgICAgICAgY29udGVudDogJzxzcGFuIHN0eWxlPVwiY29sb3I6cHVycGxlO1wiPiZidWxsZXQ7PC9zcGFuPiBPc3NpZ2VubyBtZy9sJyxcbiAgICAgICAgICB0eXBlOiAnaHRtbCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRlbnQ6ICcxMDAgbWcvbCcsXG4gICAgICAgICAgX21ldGE6IHsgaWQ6ICcyeDQnLCBpbnB1dElkOiAnX3RleHRfaW5wdXRfMng0JyB9LFxuICAgICAgICAgIHBheWxvYWQ6IHsgaWQ6ICcyeDQnIH0sXG4gICAgICAgICAgdHlwZTogJ2h0bWwnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHsgLy8gdGhpcmQgcm93XG4gICAgICBjbGFzc2VzOiAnQk9EWScsXG4gICAgICBfbWV0YTogJ0MnLFxuICAgICAgY2VsbHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzZXM6ICdDT05URU5UJyxcbiAgICAgICAgICBfbWV0YTogJzN4MScsXG4gICAgICAgICAgcGF5bG9hZDogJ0MnLFxuICAgICAgICAgIGNvbnRlbnQ6ICc8c3BhbiBzdHlsZT1cImNvbG9yOnJlZDtcIj45LzAxLzIwMTkgLSA0OjEyPC9zcGFuPicsXG4gICAgICAgICAgdHlwZTogJ2h0bWwnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc2VzOiAnQ09OVEVOVCcsXG4gICAgICAgICAgX21ldGE6ICczeDInLFxuICAgICAgICAgIGNvbnRlbnQ6ICdQcmVhY2N1bXVsbycsXG4gICAgICAgICAgdHlwZTogJ2h0bWwnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc2VzOiAnYm9sZCcsXG4gICAgICAgICAgX21ldGE6ICczeDMnLFxuICAgICAgICAgIGNvbnRlbnQ6ICc8c3BhbiBzdHlsZT1cImNvbG9yOnB1cnBsZTtcIj4mYnVsbGV0Ozwvc3Bhbj4gT3NzaWdlbm8gbWcvbCcsXG4gICAgICAgICAgdHlwZTogJ2h0bWwnLy8gJ2FsdHJvJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY29udGVudDogJzEwMCBtZy9sJyxcbiAgICAgICAgICBfbWV0YTogeyBpZDogJzN4NCcsIGlucHV0SWQ6ICdfdGV4dF9pbnB1dF8zeDQnIH0sXG4gICAgICAgICAgcGF5bG9hZDogeyBpZDogJzN4NCcgfSxcbiAgICAgICAgICB0eXBlOiAnaW5wdXQ6dGV4dCdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAgeyAvLyBmb3VydGggcm93XG4gICAgICBjbGFzc2VzOiAnQk9EWScsXG4gICAgICBfbWV0YTogJ0QnLFxuICAgICAgY2VsbHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzZXM6ICdDT05URU5UJyxcbiAgICAgICAgICBfbWV0YTogJzR4MScsXG4gICAgICAgICAgY29udGVudDogJzgvMDEvMjAxOSAtIDM6NTInLFxuICAgICAgICAgIHR5cGU6ICdodG1sJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NlczogJ0NPTlRFTlQnLFxuICAgICAgICAgIF9tZXRhOiAnNHgyJyxcbiAgICAgICAgICBjb250ZW50OiAnUHJlYWNjdW11bG8nLFxuICAgICAgICAgIHR5cGU6ICdodG1sJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NlczogJ2JvbGQnLFxuICAgICAgICAgIC8vIF9tZXRhOiAnNHgzJyxcbiAgICAgICAgICBjb250ZW50OiAnPHNwYW4gc3R5bGU9XCJjb2xvcjpncmVlbjtcIj4mYnVsbGV0Ozwvc3Bhbj4gUmVkb3ggVicsXG4gICAgICAgICAgdHlwZTogJ2h0bWwnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc2VzOiAnaW5wdXQtdGVzdCcsXG4gICAgICAgICAgY29udGVudDogJzIzMSBWJyxcbiAgICAgICAgICB0eXBlOiAnaHRtbCcsXG4gICAgICAgICAgX21ldGE6IHsgaWQ6ICdOUFQnLCBpbnB1dElkOiAnX3RleHRfaW5wdXRfTlBUJyB9LFxuICAgICAgICAgIHBheWxvYWQ6IHsgaWQ6ICdOUFQnIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufTtcbiJdfQ==