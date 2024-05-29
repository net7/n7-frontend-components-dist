export const TABLE_MOCK = {
    classes: 'test-layout-table',
    head: [
        {
            classes: 'HEADER',
            cells: [
                {
                    classes: 'CONTENT',
                    content: 'DATA - ORA',
                },
                {
                    classes: 'CONTENT',
                    content: 'SEZIONE',
                },
                {
                    classes: 'CONTENT',
                    content: 'PARAMETRO',
                },
                {
                    classes: 'CONTENT',
                    content: 'VALORE',
                },
            ],
        },
    ],
    body: [
        {
            // first row
            classes: 'BODY',
            _meta: 'A',
            cells: [
                {
                    classes: 'CONTENT',
                    // _meta: '1x1',
                    payload: 'B',
                    content: '<span style="color:red;">10/01/2019 - 10:23</span>',
                    type: 'html',
                },
                {
                    classes: 'CONTENT',
                    // _meta: '1x2',
                    content: 'Ingresso Industriale',
                    type: 'html',
                },
                {
                    classes: 'bold',
                    // _meta: '1x3',
                    content: '<span style="color:blue;">&bullet;</span> N_NH4',
                    type: 'html',
                },
                {
                    content: '9 mg/l',
                    // _meta: '1x4',
                    type: 'html',
                },
            ],
        },
        {
            // second row
            classes: 'BODY',
            _meta: 'B',
            cells: [
                {
                    classes: 'CONTENT',
                    _meta: '2x1',
                    payload: 'C',
                    content: '<span style="color:red;">12/01/2019 - 20:54</span>',
                    type: 'html',
                },
                {
                    classes: 'CONTENT',
                    _meta: '2x2',
                    content: 'Ingresso Civile',
                    type: 'html',
                },
                {
                    classes: 'bold',
                    _meta: '2x3',
                    content: '<span style="color:purple;">&bullet;</span> Ossigeno mg/l',
                    type: 'html',
                },
                {
                    content: '100 mg/l',
                    _meta: { id: '2x4', inputId: '_text_input_2x4' },
                    payload: { id: '2x4' },
                    type: 'html',
                },
            ],
        },
        {
            // third row
            classes: 'BODY',
            _meta: 'C',
            cells: [
                {
                    classes: 'CONTENT',
                    _meta: '3x1',
                    payload: 'C',
                    content: '<span style="color:red;">9/01/2019 - 4:12</span>',
                    type: 'html',
                },
                {
                    classes: 'CONTENT',
                    _meta: '3x2',
                    content: 'Preaccumulo',
                    type: 'html',
                },
                {
                    classes: 'bold',
                    _meta: '3x3',
                    content: '<span style="color:purple;">&bullet;</span> Ossigeno mg/l',
                    type: 'html', // 'altro'
                },
                {
                    content: '100 mg/l',
                    _meta: { id: '3x4', inputId: '_text_input_3x4' },
                    payload: { id: '3x4' },
                    type: 'input:text',
                },
            ],
        },
        {
            // fourth row
            classes: 'BODY',
            _meta: 'D',
            cells: [
                {
                    classes: 'CONTENT',
                    _meta: '4x1',
                    content: '8/01/2019 - 3:52',
                    type: 'html',
                },
                {
                    classes: 'CONTENT',
                    _meta: '4x2',
                    content: 'Preaccumulo',
                    type: 'html',
                },
                {
                    classes: 'bold',
                    // _meta: '4x3',
                    content: '<span style="color:green;">&bullet;</span> Redox V',
                    type: 'html',
                },
                {
                    classes: 'input-test',
                    content: '231 V',
                    type: 'html',
                    _meta: { id: 'NPT', inputId: '_text_input_NPT' },
                    payload: { id: 'NPT' },
                },
            ],
        },
    ],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2R2LWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS90YWJsZS5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBYztJQUNuQyxPQUFPLEVBQUUsbUJBQW1CO0lBQzVCLElBQUksRUFBRTtRQUNKO1lBQ0UsT0FBTyxFQUFFLFFBQVE7WUFDakIsS0FBSyxFQUFFO2dCQUNMO29CQUNFLE9BQU8sRUFBRSxTQUFTO29CQUNsQixPQUFPLEVBQUUsWUFBWTtpQkFDdEI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLFNBQVM7b0JBQ2xCLE9BQU8sRUFBRSxTQUFTO2lCQUNuQjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsU0FBUztvQkFDbEIsT0FBTyxFQUFFLFdBQVc7aUJBQ3JCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxTQUFTO29CQUNsQixPQUFPLEVBQUUsUUFBUTtpQkFDbEI7YUFDRjtTQUNGO0tBQ0Y7SUFDRCxJQUFJLEVBQUU7UUFDSjtZQUNFLFlBQVk7WUFDWixPQUFPLEVBQUUsTUFBTTtZQUNmLEtBQUssRUFBRSxHQUFHO1lBQ1YsS0FBSyxFQUFFO2dCQUNMO29CQUNFLE9BQU8sRUFBRSxTQUFTO29CQUNsQixnQkFBZ0I7b0JBQ2hCLE9BQU8sRUFBRSxHQUFHO29CQUNaLE9BQU8sRUFBRSxvREFBb0Q7b0JBQzdELElBQUksRUFBRSxNQUFNO2lCQUNiO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxTQUFTO29CQUNsQixnQkFBZ0I7b0JBQ2hCLE9BQU8sRUFBRSxzQkFBc0I7b0JBQy9CLElBQUksRUFBRSxNQUFNO2lCQUNiO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxNQUFNO29CQUNmLGdCQUFnQjtvQkFDaEIsT0FBTyxFQUFFLGlEQUFpRDtvQkFDMUQsSUFBSSxFQUFFLE1BQU07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dCI6WyJpbXBvcnQgeyBUYWJsZURhdGEgfSBmcm9tICcuL3RhYmxlJztcblxuZXhwb3J0IGNvbnN0IFRBQkxFX01PQ0s6IFRhYmxlRGF0YSA9IHtcbiAgY2xhc3NlczogJ3Rlc3QtbGF5b3V0LXRhYmxlJyxcbiAgaGVhZDogW1xuICAgIHtcbiAgICAgIGNsYXNzZXM6ICdIRUFERVInLFxuICAgICAgY2VsbHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzZXM6ICdDT05URU5UJyxcbiAgICAgICAgICBjb250ZW50OiAnREFUQSAtIE9SQScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc2VzOiAnQ09OVEVOVCcsXG4gICAgICAgICAgY29udGVudDogJ1NFWklPTkUnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NlczogJ0NPTlRFTlQnLFxuICAgICAgICAgIGNvbnRlbnQ6ICdQQVJBTUVUUk8nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NlczogJ0NPTlRFTlQnLFxuICAgICAgICAgIGNvbnRlbnQ6ICdWQUxPUkUnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxuICBib2R5OiBbXG4gICAge1xuICAgICAgLy8gZmlyc3Qgcm93XG4gICAgICBjbGFzc2VzOiAnQk9EWScsXG4gICAgICBfbWV0YTogJ0EnLFxuICAgICAgY2VsbHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzZXM6ICdDT05URU5UJyxcbiAgICAgICAgICAvLyBfbWV0YTogJzF4MScsXG4gICAgICAgICAgcGF5bG9hZDogJ0InLFxuICAgICAgICAgIGNvbnRlbnQ6ICc8c3BhbiBzdHlsZT1cImNvbG9yOnJlZDtcIj4xMC8wMS8yMDE5IC0gMTA6MjM8L3NwYW4+JyxcbiAgICAgICAgICB0eXBlOiAnaHRtbCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc2VzOiAnQ09OVEVOVCcsXG4gICAgICAgICAgLy8gX21ldGE6ICcxeDInLFxuICAgICAgICAgIGNvbnRlbnQ6ICdJbmdyZXNzbyBJbmR1c3RyaWFsZScsXG4gICAgICAgICAgdHlwZTogJ2h0bWwnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NlczogJ2JvbGQnLFxuICAgICAgICAgIC8vIF9tZXRhOiAnMXgzJyxcbiAgICAgICAgICBjb250ZW50OiAnPHNwYW4gc3R5bGU9XCJjb2xvcjpibHVlO1wiPiZidWxsZXQ7PC9zcGFuPiBOX05INCcsXG4gICAgICAgICAgdHlwZTogJ2h0bWwnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY29udGVudDogJzkgbWcvbCcsXG4gICAgICAgICAgLy8gX21ldGE6ICcxeDQnLFxuICAgICAgICAgIHR5cGU6ICdodG1sJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBzZWNvbmQgcm93XG4gICAgICBjbGFzc2VzOiAnQk9EWScsXG4gICAgICBfbWV0YTogJ0InLFxuICAgICAgY2VsbHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzZXM6ICdDT05URU5UJyxcbiAgICAgICAgICBfbWV0YTogJzJ4MScsXG4gICAgICAgICAgcGF5bG9hZDogJ0MnLFxuICAgICAgICAgIGNvbnRlbnQ6ICc8c3BhbiBzdHlsZT1cImNvbG9yOnJlZDtcIj4xMi8wMS8yMDE5IC0gMjA6NTQ8L3NwYW4+JyxcbiAgICAgICAgICB0eXBlOiAnaHRtbCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc2VzOiAnQ09OVEVOVCcsXG4gICAgICAgICAgX21ldGE6ICcyeDInLFxuICAgICAgICAgIGNvbnRlbnQ6ICdJbmdyZXNzbyBDaXZpbGUnLFxuICAgICAgICAgIHR5cGU6ICdodG1sJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzZXM6ICdib2xkJyxcbiAgICAgICAgICBfbWV0YTogJzJ4MycsXG4gICAgICAgICAgY29udGVudDogJzxzcGFuIHN0eWxlPVwiY29sb3I6cHVycGxlO1wiPiZidWxsZXQ7PC9zcGFuPiBPc3NpZ2VubyBtZy9sJyxcbiAgICAgICAgICB0eXBlOiAnaHRtbCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjb250ZW50OiAnMTAwIG1nL2wnLFxuICAgICAgICAgIF9tZXRhOiB7IGlkOiAnMng0JywgaW5wdXRJZDogJ190ZXh0X2lucHV0XzJ4NCcgfSxcbiAgICAgICAgICBwYXlsb2FkOiB7IGlkOiAnMng0JyB9LFxuICAgICAgICAgIHR5cGU6ICdodG1sJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyB0aGlyZCByb3dcbiAgICAgIGNsYXNzZXM6ICdCT0RZJyxcbiAgICAgIF9tZXRhOiAnQycsXG4gICAgICBjZWxsczogW1xuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NlczogJ0NPTlRFTlQnLFxuICAgICAgICAgIF9tZXRhOiAnM3gxJyxcbiAgICAgICAgICBwYXlsb2FkOiAnQycsXG4gICAgICAgICAgY29udGVudDogJzxzcGFuIHN0eWxlPVwiY29sb3I6cmVkO1wiPjkvMDEvMjAxOSAtIDQ6MTI8L3NwYW4+JyxcbiAgICAgICAgICB0eXBlOiAnaHRtbCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc2VzOiAnQ09OVEVOVCcsXG4gICAgICAgICAgX21ldGE6ICczeDInLFxuICAgICAgICAgIGNvbnRlbnQ6ICdQcmVhY2N1bXVsbycsXG4gICAgICAgICAgdHlwZTogJ2h0bWwnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NlczogJ2JvbGQnLFxuICAgICAgICAgIF9tZXRhOiAnM3gzJyxcbiAgICAgICAgICBjb250ZW50OiAnPHNwYW4gc3R5bGU9XCJjb2xvcjpwdXJwbGU7XCI+JmJ1bGxldDs8L3NwYW4+IE9zc2lnZW5vIG1nL2wnLFxuICAgICAgICAgIHR5cGU6ICdodG1sJywgLy8gJ2FsdHJvJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY29udGVudDogJzEwMCBtZy9sJyxcbiAgICAgICAgICBfbWV0YTogeyBpZDogJzN4NCcsIGlucHV0SWQ6ICdfdGV4dF9pbnB1dF8zeDQnIH0sXG4gICAgICAgICAgcGF5bG9hZDogeyBpZDogJzN4NCcgfSxcbiAgICAgICAgICB0eXBlOiAnaW5wdXQ6dGV4dCcsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgLy8gZm91cnRoIHJvd1xuICAgICAgY2xhc3NlczogJ0JPRFknLFxuICAgICAgX21ldGE6ICdEJyxcbiAgICAgIGNlbGxzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc2VzOiAnQ09OVEVOVCcsXG4gICAgICAgICAgX21ldGE6ICc0eDEnLFxuICAgICAgICAgIGNvbnRlbnQ6ICc4LzAxLzIwMTkgLSAzOjUyJyxcbiAgICAgICAgICB0eXBlOiAnaHRtbCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc2VzOiAnQ09OVEVOVCcsXG4gICAgICAgICAgX21ldGE6ICc0eDInLFxuICAgICAgICAgIGNvbnRlbnQ6ICdQcmVhY2N1bXVsbycsXG4gICAgICAgICAgdHlwZTogJ2h0bWwnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NlczogJ2JvbGQnLFxuICAgICAgICAgIC8vIF9tZXRhOiAnNHgzJyxcbiAgICAgICAgICBjb250ZW50OiAnPHNwYW4gc3R5bGU9XCJjb2xvcjpncmVlbjtcIj4mYnVsbGV0Ozwvc3Bhbj4gUmVkb3ggVicsXG4gICAgICAgICAgdHlwZTogJ2h0bWwnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NlczogJ2lucHV0LXRlc3QnLFxuICAgICAgICAgIGNvbnRlbnQ6ICcyMzEgVicsXG4gICAgICAgICAgdHlwZTogJ2h0bWwnLFxuICAgICAgICAgIF9tZXRhOiB7IGlkOiAnTlBUJywgaW5wdXRJZDogJ190ZXh0X2lucHV0X05QVCcgfSxcbiAgICAgICAgICBwYXlsb2FkOiB7IGlkOiAnTlBUJyB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxufTtcbiJdfQ==