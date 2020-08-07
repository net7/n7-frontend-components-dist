export var FACET_MOCK = {
    classes: 'facet-wrapper',
    sections: [{
            classes: 'facet-section-1',
            inputs: [
                {
                    type: 'checkbox', id: 'checkbox-1', label: 'Email', payload: 'email', classes: 'is-active'
                },
                {
                    type: 'checkbox', id: 'checkbox-2', label: 'Check 2', payload: 'check2'
                },
                {
                    type: 'checkbox', id: 'checkbox-3', label: 'Check 3', payload: 'check3', checked: true
                },
                {
                    type: 'checkbox', id: 'checkbox-4', label: 'Check 4', payload: 'check4'
                },
                {
                    type: 'checkbox', id: 'checkbox-5', label: 'Check 5', payload: 'check5', disabled: true
                }
            ]
        }, {
            classes: 'facet-section-2',
            inputs: [{
                    type: 'text',
                    id: 'input-text-1',
                    label: 'SEARCH LABEL',
                    // disabled: true,
                    placeholder: 'Search',
                    icon: 'n7-icon-search',
                    inputPayload: 'search-input',
                    enterPayload: 'search-enter',
                    iconPayload: 'search-icon',
                }]
        }, {
            // n7-facet__section-input-links viene usato per stilare il wrapper dei links
            classes: 'facet-section-3 n7-facet__section-input-links',
            inputs: [
                {
                    type: 'link', icon: 'n7-icon-archive', text: 'First filter', counter: 0, payload: 'first filter', classes: 'is-active'
                },
                {
                    type: 'link', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', counter: 18, payload: 'second filter',
                },
                {
                    type: 'link', icon: 'n7-icon-archive', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', counter: 18, payload: 'second filter',
                },
                {
                    type: 'link', text: 'third filter', counter: 11, payload: 'third filter',
                },
                {
                    type: 'link', text: 'lorem', counter: 7, payload: 'fourth filter',
                },
                {
                    type: 'link', text: 'last filter', counter: 31, payload: 'last filter',
                },
                {
                    type: 'link', icon: 'n7-icon-archive', text: 'First filter', counter: 1232143, payload: 'first filter', classes: 'is-active'
                },
                {
                    type: 'link', text: 'second filter', counter: 18, payload: 'second filter',
                },
                {
                    type: 'link', text: 'third filter', counter: 11, payload: 'third filter', classes: 'is-active'
                },
                {
                    type: 'link', text: 'fourth filter', counter: 7, payload: 'fourth filter',
                },
                {
                    type: 'link', text: 'last filter', counter: 3, payload: 'last filter',
                }
            ]
        }, {
            classes: 'facet-section-4',
            inputs: [{
                    type: 'select',
                    id: 'input-select-1',
                    // disabled: true,
                    options: [
                        { value: '', label: 'Select...' },
                        { value: 1, label: 'Option 1' },
                        { value: 2, label: 'Option 2', disabled: true },
                        { value: 3, label: 'Option 3', selected: true },
                        { value: 4, label: 'Option 4' },
                    ],
                    payload: 'select',
                },
                {
                    type: 'select',
                    id: 'input-select-1',
                    // disabled: true,
                    options: [
                        { value: '', label: 'Select...' },
                        { value: 1, label: 'Option 1' },
                        { value: 2, label: 'Option 2' },
                        { value: 3, label: 'Option 3', selected: true },
                        { value: 4, label: 'Option 4' },
                    ],
                    payload: 'select',
                }]
        }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQubW9jay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmFjZXQvZmFjZXQubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsSUFBTSxVQUFVLEdBQWM7SUFDbkMsT0FBTyxFQUFFLGVBQWU7SUFDeEIsUUFBUSxFQUFFLENBQUM7WUFDVCxPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLE1BQU0sRUFBRTtnQkFDTjtvQkFDRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXO2lCQUMzRjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUTtpQkFDeEU7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSTtpQkFDdkY7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVE7aUJBQ3hFO2dCQUNEO29CQUNFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUk7aUJBQ3hGO2FBQ0Y7U0FDRixFQUFFO1lBQ0QsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixNQUFNLEVBQUUsQ0FBQztvQkFDUCxJQUFJLEVBQUUsTUFBTTtvQkFDWixFQUFFLEVBQUUsY0FBYztvQkFDbEIs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VUFBVSxFQUFFO3FCQUNoQztvQkFDRCxPQUFPLEVBQUUsUUFBUTtpQkFDbEI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsRUFBRSxFQUFFLGdCQUFnQjtvQkFDcEIsa0JBQWtCO29CQUNsQixPQUFPLEVBQUU7d0JBQ1AsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7d0JBQ2pDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO3dCQUMvQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTt3QkFDL0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTt3QkFDL0MsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7cUJBQ2hDO29CQUNELE9BQU8sRUFBRSxRQUFRO2lCQUNsQixDQUFDO1NBQ0gsQ0FBQztDQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYWNldERhdGEgfSBmcm9tICcuL2ZhY2V0JztcblxuZXhwb3J0IGNvbnN0IEZBQ0VUX01PQ0s6IEZhY2V0RGF0YSA9IHtcbiAgY2xhc3NlczogJ2ZhY2V0LXdyYXBwZXInLFxuICBzZWN0aW9uczogW3tcbiAgICBjbGFzc2VzOiAnZmFjZXQtc2VjdGlvbi0xJyxcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2NoZWNrYm94JywgaWQ6ICdjaGVja2JveC0xJywgbGFiZWw6ICdFbWFpbCcsIHBheWxvYWQ6ICdlbWFpbCcsIGNsYXNzZXM6ICdpcy1hY3RpdmUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnY2hlY2tib3gnLCBpZDogJ2NoZWNrYm94LTInLCBsYWJlbDogJ0NoZWNrIDInLCBwYXlsb2FkOiAnY2hlY2syJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2NoZWNrYm94JywgaWQ6ICdjaGVja2JveC0zJywgbGFiZWw6ICdDaGVjayAzJywgcGF5bG9hZDogJ2NoZWNrMycsIGNoZWNrZWQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdjaGVja2JveCcsIGlkOiAnY2hlY2tib3gtNCcsIGxhYmVsOiAnQ2hlY2sgNCcsIHBheWxvYWQ6ICdjaGVjazQnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnY2hlY2tib3gnLCBpZDogJ2NoZWNrYm94LTUnLCBsYWJlbDogJ0NoZWNrIDUnLCBwYXlsb2FkOiAnY2hlY2s1JywgZGlzYWJsZWQ6IHRydWVcbiAgICAgIH1cbiAgICBdXG4gIH0sIHtcbiAgICBjbGFzc2VzOiAnZmFjZXQtc2VjdGlvbi0yJyxcbiAgICBpbnB1dHM6IFt7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBpZDogJ2lucHV0LXRleHQtMScsXG4gICAgICBsYWJlbDogJ1NFQVJDSCBMQUJFTCcsXG4gICAgICAvLyBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoJyxcbiAgICAgIGljb246ICduNy1pY29uLXNlYXJjaCcsXG4gICAgICBpbnB1dFBheWxvYWQ6ICdzZWFyY2gtaW5wdXQnLFxuICAgICAgZW50ZXJQYXlsb2FkOiAnc2VhcmNoLWVudGVyJyxcbiAgICAgIGljb25QYXlsb2FkOiAnc2VhcmNoLWljb24nLFxuICAgIH1dXG4gIH0sIHtcbiAgICAvLyBuNy1mYWNldF9fc2VjdGlvbi1pbnB1dC1saW5rcyB2aWVuZSB1c2F0byBwZXIgc3RpbGFyZSBpbCB3cmFwcGVyIGRlaSBsaW5rc1xuICAgIGNsYXNzZXM6ICdmYWNldC1zZWN0aW9uLTMgbjctZmFjZXRfX3NlY3Rpb24taW5wdXQtbGlua3MnLFxuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICB0eXBlOiAnbGluaycsIGljb246ICduNy1pY29uLWFyY2hpdmUnLCB0ZXh0OiAnRmlyc3QgZmlsdGVyJywgY291bnRlcjogMCwgcGF5bG9hZDogJ2ZpcnN0IGZpbHRlcicsIGNsYXNzZXM6ICdpcy1hY3RpdmUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnbGluaycsIHRleHQ6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUnLCBjb3VudGVyOiAxOCwgcGF5bG9hZDogJ3NlY29uZCBmaWx0ZXInLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2xpbmsnLCBpY29uOiAnbjctaWNvbi1hcmNoaXZlJywgdGV4dDogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZScsIGNvdW50ZXI6IDE4LCBwYXlsb2FkOiAnc2Vjb25kIGZpbHRlcicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnbGluaycsIHRleHQ6ICd0aGlyZCBmaWx0ZXInLCBjb3VudGVyOiAxMSwgcGF5bG9hZDogJ3RoaXJkIGZpbHRlcicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnbGluaycsIHRleHQ6ICdsb3JlbScsIGNvdW50ZXI6IDcsIHBheWxvYWQ6ICdmb3VydGggZmlsdGVyJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdsaW5rJywgdGV4dDogJ2xhc3QgZmlsdGVyJywgY291bnRlcjogMzEsIHBheWxvYWQ6ICdsYXN0IGZpbHRlcicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnbGluaycsIGljb246ICduNy1pY29uLWFyY2hpdmUnLCB0ZXh0OiAnRmlyc3QgZmlsdGVyJywgY291bnRlcjogMTIzMjE0MywgcGF5bG9hZDogJ2ZpcnN0IGZpbHRlcicsIGNsYXNzZXM6ICdpcy1hY3RpdmUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnbGluaycsIHRleHQ6ICdzZWNvbmQgZmlsdGVyJywgY291bnRlcjogMTgsIHBheWxvYWQ6ICdzZWNvbmQgZmlsdGVyJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdsaW5rJywgdGV4dDogJ3RoaXJkIGZpbHRlcicsIGNvdW50ZXI6IDExLCBwYXlsb2FkOiAndGhpcmQgZmlsdGVyJywgY2xhc3NlczogJ2lzLWFjdGl2ZSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdsaW5rJywgdGV4dDogJ2ZvdXJ0aCBmaWx0ZXInLCBjb3VudGVyOiA3LCBwYXlsb2FkOiAnZm91cnRoIGZpbHRlcicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnbGluaycsIHRleHQ6ICdsYXN0IGZpbHRlcicsIGNvdW50ZXI6IDMsIHBheWxvYWQ6ICdsYXN0IGZpbHRlcicsXG4gICAgICB9XG4gICAgXVxuICB9LCB7XG4gICAgY2xhc3NlczogJ2ZhY2V0LXNlY3Rpb24tNCcsXG4gICAgaW5wdXRzOiBbe1xuICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICBpZDogJ2lucHV0LXNlbGVjdC0xJyxcbiAgICAgIC8vIGRpc2FibGVkOiB0cnVlLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICB7IHZhbHVlOiAnJywgbGFiZWw6ICdTZWxlY3QuLi4nIH0sXG4gICAgICAgIHsgdmFsdWU6IDEsIGxhYmVsOiAnT3B0aW9uIDEnIH0sXG4gICAgICAgIHsgdmFsdWU6IDIsIGxhYmVsOiAnT3B0aW9uIDInLCBkaXNhYmxlZDogdHJ1ZSB9LFxuICAgICAgICB7IHZhbHVlOiAzLCBsYWJlbDogJ09wdGlvbiAzJywgc2VsZWN0ZWQ6IHRydWUgfSxcbiAgICAgICAgeyB2YWx1ZTogNCwgbGFiZWw6ICdPcHRpb24gNCcgfSxcbiAgICAgIF0sXG4gICAgICBwYXlsb2FkOiAnc2VsZWN0JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgaWQ6ICdpbnB1dC1zZWxlY3QtMScsXG4gICAgICAvLyBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgeyB2YWx1ZTogJycsIGxhYmVsOiAnU2VsZWN0Li4uJyB9LFxuICAgICAgICB7IHZhbHVlOiAxLCBsYWJlbDogJ09wdGlvbiAxJyB9LFxuICAgICAgICB7IHZhbHVlOiAyLCBsYWJlbDogJ09wdGlvbiAyJyB9LFxuICAgICAgICB7IHZhbHVlOiAzLCBsYWJlbDogJ09wdGlvbiAzJywgc2VsZWN0ZWQ6IHRydWUgfSxcbiAgICAgICAgeyB2YWx1ZTogNCwgbGFiZWw6ICdPcHRpb24gNCcgfSxcbiAgICAgIF0sXG4gICAgICBwYXlsb2FkOiAnc2VsZWN0JyxcbiAgICB9XVxuICB9XVxufTtcbiJdfQ==