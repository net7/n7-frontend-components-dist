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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2R2LWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS90YWJsZS5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBYztJQUNuQyxPQUFPLEVBQUUsbUJBQW1CO0lBQzVCLElBQUksRUFBRTtRQUNKO1lBQ0UsT0FBTyxFQUFFLFFBQVE7WUFDakIsS0FBSyxFQUFFO2dCQUNMO29CQUNFLE9BQU8sRUFBRSxTQUFTO29CQUNsQixPQUFPLEVBQUUsWUFBWTtpQkFDdEI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLFNBQVM7b0JBQ2xCLE9BQU8sRUFBRSxTQUFTO2lCQUNuQjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsU0FBUztvQkFDbEIsT0FBTyxFQUFFLFdBQVc7aUJBQ3JCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxTQUFTO29CQUNsQixPQUFPLEVBQUUsUUFBUTtpQkFDbEI7YUFDRjtTQUNGO0tBQ0Y7SUFDRCxJQUFJLEVBQUU7UUFDSjtZQUNFLE9BQU8sRUFBRSxNQUFNO1lBQ2YsS0FBSyxFQUFFLEdBQUc7WUFDVixLQUFLLEVBQUU7Z0JBQ0w7b0JBQ0UsT0FBTyxFQUFFLFNBQVM7b0JBQ2xCLGdCQUFnQjtvQkFDaEIsT0FBTyxFQUFFLEdBQUc7b0JBQ1osT0FBTyxFQUFFLG9EQUFvRDtvQkFDN0QsSUFBSSxFQUFFLE1BQU07aUJBQ2I7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLFNBQVM7b0JBQ2xCLGdCQUFnQjtvQkFDaEIsT0FBTyxFQUFFLHNCQUFzQjtvQkFDL0IsSUFBSSxFQUFFLE1BQU07aUJBQ2I7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLE1BQU07b0JBQ2YsZ0JBQWdCO29CQUNoQixPQUFPLEVBQUUsaURBQWlEO29CQUMxRCxJQUFJLEVBQUUsTUFBTTtpQkFDYjtnQkFD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O1xyXG5cclxuZXhwb3J0IGNvbnN0IFRBQkxFX01PQ0s6IFRhYmxlRGF0YSA9IHtcclxuICBjbGFzc2VzOiAndGVzdC1sYXlvdXQtdGFibGUnLFxyXG4gIGhlYWQ6IFtcclxuICAgIHtcclxuICAgICAgY2xhc3NlczogJ0hFQURFUicsXHJcbiAgICAgIGNlbGxzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2xhc3NlczogJ0NPTlRFTlQnLFxyXG4gICAgICAgICAgY29udGVudDogJ0RBVEEgLSBPUkEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjbGFzc2VzOiAnQ09OVEVOVCcsXHJcbiAgICAgICAgICBjb250ZW50OiAnU0VaSU9ORSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNsYXNzZXM6ICdDT05URU5UJyxcclxuICAgICAgICAgIGNvbnRlbnQ6ICdQQVJBTUVUUk8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjbGFzc2VzOiAnQ09OVEVOVCcsXHJcbiAgICAgICAgICBjb250ZW50OiAnVkFMT1JFJ1xyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgYm9keTogW1xyXG4gICAgeyAvLyBmaXJzdCByb3dcclxuICAgICAgY2xhc3NlczogJ0JPRFknLFxyXG4gICAgICBfbWV0YTogJ0EnLFxyXG4gICAgICBjZWxsczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNsYXNzZXM6ICdDT05URU5UJyxcclxuICAgICAgICAgIC8vIF9tZXRhOiAnMXgxJyxcclxuICAgICAgICAgIHBheWxvYWQ6ICdCJyxcclxuICAgICAgICAgIGNvbnRlbnQ6ICc8c3BhbiBzdHlsZT1cImNvbG9yOnJlZDtcIj4xMC8wMS8yMDE5IC0gMTA6MjM8L3NwYW4+JyxcclxuICAgICAgICAgIHR5cGU6ICdodG1sJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2xhc3NlczogJ0NPTlRFTlQnLFxyXG4gICAgICAgICAgLy8gX21ldGE6ICcxeDInLFxyXG4gICAgICAgICAgY29udGVudDogJ0luZ3Jlc3NvIEluZHVzdHJpYWxlJyxcclxuICAgICAgICAgIHR5cGU6ICdodG1sJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2xhc3NlczogJ2JvbGQnLFxyXG4gICAgICAgICAgLy8gX21ldGE6ICcxeDMnLFxyXG4gICAgICAgICAgY29udGVudDogJzxzcGFuIHN0eWxlPVwiY29sb3I6Ymx1ZTtcIj4mYnVsbGV0Ozwvc3Bhbj4gTl9OSDQnLFxyXG4gICAgICAgICAgdHlwZTogJ2h0bWwnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAnOSBtZy9sJyxcclxuICAgICAgICAgIC8vIF9tZXRhOiAnMXg0JyxcclxuICAgICAgICAgIHR5cGU6ICdodG1sJ1xyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHsgLy8gc2Vjb25kIHJvd1xyXG4gICAgICBjbGFzc2VzOiAnQk9EWScsXHJcbiAgICAgIF9tZXRhOiAnQicsXHJcbiAgICAgIGNlbGxzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2xhc3NlczogJ0NPTlRFTlQnLFxyXG4gICAgICAgICAgX21ldGE6ICcyeDEnLFxyXG4gICAgICAgICAgcGF5bG9hZDogJ0MnLFxyXG4gICAgICAgICAgY29udGVudDogJzxzcGFuIHN0eWxlPVwiY29sb3I6cmVkO1wiPjEyLzAxLzIwMTkgLSAyMDo1NDwvc3Bhbj4nLFxyXG4gICAgICAgICAgdHlwZTogJ2h0bWwnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjbGFzc2VzOiAnQ09OVEVOVCcsXHJcbiAgICAgICAgICBfbWV0YTogJzJ4MicsXHJcbiAgICAgICAgICBjb250ZW50OiAnSW5ncmVzc28gQ2l2aWxlJyxcclxuICAgICAgICAgIHR5cGU6ICdodG1sJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2xhc3NlczogJ2JvbGQnLFxyXG4gICAgICAgICAgX21ldGE6ICcyeDMnLFxyXG4gICAgICAgICAgY29udGVudDogJzxzcGFuIHN0eWxlPVwiY29sb3I6cHVycGxlO1wiPiZidWxsZXQ7PC9zcGFuPiBPc3NpZ2VubyBtZy9sJyxcclxuICAgICAgICAgIHR5cGU6ICdodG1sJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJzEwMCBtZy9sJyxcclxuICAgICAgICAgIF9tZXRhOiB7IGlkOiAnMng0JywgaW5wdXRJZDogJ190ZXh0X2lucHV0XzJ4NCcgfSxcclxuICAgICAgICAgIHBheWxvYWQ6IHsgaWQ6ICcyeDQnIH0sXHJcbiAgICAgICAgICB0eXBlOiAnaHRtbCdcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7IC8vIHRoaXJkIHJvd1xyXG4gICAgICBjbGFzc2VzOiAnQk9EWScsXHJcbiAgICAgIF9tZXRhOiAnQycsXHJcbiAgICAgIGNlbGxzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2xhc3NlczogJ0NPTlRFTlQnLFxyXG4gICAgICAgICAgX21ldGE6ICczeDEnLFxyXG4gICAgICAgICAgcGF5bG9hZDogJ0MnLFxyXG4gICAgICAgICAgY29udGVudDogJzxzcGFuIHN0eWxlPVwiY29sb3I6cmVkO1wiPjkvMDEvMjAxOSAtIDQ6MTI8L3NwYW4+JyxcclxuICAgICAgICAgIHR5cGU6ICdodG1sJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2xhc3NlczogJ0NPTlRFTlQnLFxyXG4gICAgICAgICAgX21ldGE6ICczeDInLFxyXG4gICAgICAgICAgY29udGVudDogJ1ByZWFjY3VtdWxvJyxcclxuICAgICAgICAgIHR5cGU6ICdodG1sJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2xhc3NlczogJ2JvbGQnLFxyXG4gICAgICAgICAgX21ldGE6ICczeDMnLFxyXG4gICAgICAgICAgY29udGVudDogJzxzcGFuIHN0eWxlPVwiY29sb3I6cHVycGxlO1wiPiZidWxsZXQ7PC9zcGFuPiBPc3NpZ2VubyBtZy9sJyxcclxuICAgICAgICAgIHR5cGU6ICdodG1sJy8vICdhbHRybydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICcxMDAgbWcvbCcsXHJcbiAgICAgICAgICBfbWV0YTogeyBpZDogJzN4NCcsIGlucHV0SWQ6ICdfdGV4dF9pbnB1dF8zeDQnIH0sXHJcbiAgICAgICAgICBwYXlsb2FkOiB7IGlkOiAnM3g0JyB9LFxyXG4gICAgICAgICAgdHlwZTogJ2lucHV0OnRleHQnXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAgeyAvLyBmb3VydGggcm93XHJcbiAgICAgIGNsYXNzZXM6ICdCT0RZJyxcclxuICAgICAgX21ldGE6ICdEJyxcclxuICAgICAgY2VsbHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjbGFzc2VzOiAnQ09OVEVOVCcsXHJcbiAgICAgICAgICBfbWV0YTogJzR4MScsXHJcbiAgICAgICAgICBjb250ZW50OiAnOC8wMS8yMDE5IC0gMzo1MicsXHJcbiAgICAgICAgICB0eXBlOiAnaHRtbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNsYXNzZXM6ICdDT05URU5UJyxcclxuICAgICAgICAgIF9tZXRhOiAnNHgyJyxcclxuICAgICAgICAgIGNvbnRlbnQ6ICdQcmVhY2N1bXVsbycsXHJcbiAgICAgICAgICB0eXBlOiAnaHRtbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNsYXNzZXM6ICdib2xkJyxcclxuICAgICAgICAgIC8vIF9tZXRhOiAnNHgzJyxcclxuICAgICAgICAgIGNvbnRlbnQ6ICc8c3BhbiBzdHlsZT1cImNvbG9yOmdyZWVuO1wiPiZidWxsZXQ7PC9zcGFuPiBSZWRveCBWJyxcclxuICAgICAgICAgIHR5cGU6ICdodG1sJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2xhc3NlczogJ2lucHV0LXRlc3QnLFxyXG4gICAgICAgICAgY29udGVudDogJzIzMSBWJyxcclxuICAgICAgICAgIHR5cGU6ICdodG1sJyxcclxuICAgICAgICAgIF9tZXRhOiB7IGlkOiAnTlBUJywgaW5wdXRJZDogJ190ZXh0X2lucHV0X05QVCcgfSxcclxuICAgICAgICAgIHBheWxvYWQ6IHsgaWQ6ICdOUFQnIH1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICBdXHJcbn07XHJcbiJdfQ==