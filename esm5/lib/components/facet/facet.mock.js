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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQubW9jay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmFjZXQvZmFjZXQubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsSUFBTSxVQUFVLEdBQWM7SUFDbkMsT0FBTyxFQUFFLGVBQWU7SUFDeEIsUUFBUSxFQUFFLENBQUM7WUFDVCxPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLE1BQU0sRUFBRTtnQkFDTjtvQkFDRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXO2lCQUMzRjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUTtpQkFDeEU7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSTtpQkFDdkY7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVE7aUJBQ3hFO2dCQUNEO29CQUNFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUk7aUJBQ3hGO2FBQ0Y7U0FDRixFQUFFO1lBQ0QsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixNQUFNLEVBQUUsQ0FBQztvQkFDUCxJQUFJLEVBQUUsTUFBTTtvQkFDWixFQUFFLEVBQUUsY0FBYztvQkFDbEIs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VUFBVSxFQUFFO3FCQUNoQztvQkFDRCxPQUFPLEVBQUUsUUFBUTtpQkFDbEI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsRUFBRSxFQUFFLGdCQUFnQjtvQkFDcEIsa0JBQWtCO29CQUNsQixPQUFPLEVBQUU7d0JBQ1AsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7d0JBQ2pDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO3dCQUMvQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTt3QkFDL0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTt3QkFDL0MsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7cUJBQ2hDO29CQUNELE9BQU8sRUFBRSxRQUFRO2lCQUNsQixDQUFDO1NBQ0gsQ0FBQztDQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYWNldERhdGEgfSBmcm9tICcuL2ZhY2V0JztcclxuXHJcbmV4cG9ydCBjb25zdCBGQUNFVF9NT0NLOiBGYWNldERhdGEgPSB7XHJcbiAgY2xhc3NlczogJ2ZhY2V0LXdyYXBwZXInLFxyXG4gIHNlY3Rpb25zOiBbe1xyXG4gICAgY2xhc3NlczogJ2ZhY2V0LXNlY3Rpb24tMScsXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6ICdjaGVja2JveCcsIGlkOiAnY2hlY2tib3gtMScsIGxhYmVsOiAnRW1haWwnLCBwYXlsb2FkOiAnZW1haWwnLCBjbGFzc2VzOiAnaXMtYWN0aXZlJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogJ2NoZWNrYm94JywgaWQ6ICdjaGVja2JveC0yJywgbGFiZWw6ICdDaGVjayAyJywgcGF5bG9hZDogJ2NoZWNrMidcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6ICdjaGVja2JveCcsIGlkOiAnY2hlY2tib3gtMycsIGxhYmVsOiAnQ2hlY2sgMycsIHBheWxvYWQ6ICdjaGVjazMnLCBjaGVja2VkOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiAnY2hlY2tib3gnLCBpZDogJ2NoZWNrYm94LTQnLCBsYWJlbDogJ0NoZWNrIDQnLCBwYXlsb2FkOiAnY2hlY2s0J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogJ2NoZWNrYm94JywgaWQ6ICdjaGVja2JveC01JywgbGFiZWw6ICdDaGVjayA1JywgcGF5bG9hZDogJ2NoZWNrNScsIGRpc2FibGVkOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LCB7XHJcbiAgICBjbGFzc2VzOiAnZmFjZXQtc2VjdGlvbi0yJyxcclxuICAgIGlucHV0czogW3tcclxuICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICBpZDogJ2lucHV0LXRleHQtMScsXHJcbiAgICAgIGxhYmVsOiAnU0VBUkNIIExBQkVMJyxcclxuICAgICAgLy8gZGlzYWJsZWQ6IHRydWUsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoJyxcclxuICAgICAgaWNvbjogJ243LWljb24tc2VhcmNoJyxcclxuICAgICAgaW5wdXRQYXlsb2FkOiAnc2VhcmNoLWlucHV0JyxcclxuICAgICAgZW50ZXJQYXlsb2FkOiAnc2VhcmNoLWVudGVyJyxcclxuICAgICAgaWNvblBheWxvYWQ6ICdzZWFyY2gtaWNvbicsXHJcbiAgICB9XVxyXG4gIH0sIHtcclxuICAgIC8vIG43LWZhY2V0X19zZWN0aW9uLWlucHV0LWxpbmtzIHZpZW5lIHVzYXRvIHBlciBzdGlsYXJlIGlsIHdyYXBwZXIgZGVpIGxpbmtzXHJcbiAgICBjbGFzc2VzOiAnZmFjZXQtc2VjdGlvbi0zIG43LWZhY2V0X19zZWN0aW9uLWlucHV0LWxpbmtzJyxcclxuICAgIGlucHV0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogJ2xpbmsnLCBpY29uOiAnbjctaWNvbi1hcmNoaXZlJywgdGV4dDogJ0ZpcnN0IGZpbHRlcicsIGNvdW50ZXI6IDAsIHBheWxvYWQ6ICdmaXJzdCBmaWx0ZXInLCBjbGFzc2VzOiAnaXMtYWN0aXZlJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogJ2xpbmsnLCB0ZXh0OiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlJywgY291bnRlcjogMTgsIHBheWxvYWQ6ICdzZWNvbmQgZmlsdGVyJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6ICdsaW5rJywgaWNvbjogJ243LWljb24tYXJjaGl2ZScsIHRleHQ6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUnLCBjb3VudGVyOiAxOCwgcGF5bG9hZDogJ3NlY29uZCBmaWx0ZXInLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogJ2xpbmsnLCB0ZXh0OiAndGhpcmQgZmlsdGVyJywgY291bnRlcjogMTEsIHBheWxvYWQ6ICd0aGlyZCBmaWx0ZXInLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogJ2xpbmsnLCB0ZXh0OiAnbG9yZW0nLCBjb3VudGVyOiA3LCBwYXlsb2FkOiAnZm91cnRoIGZpbHRlcicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiAnbGluaycsIHRleHQ6ICdsYXN0IGZpbHRlcicsIGNvdW50ZXI6IDMxLCBwYXlsb2FkOiAnbGFzdCBmaWx0ZXInLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogJ2xpbmsnLCBpY29uOiAnbjctaWNvbi1hcmNoaXZlJywgdGV4dDogJ0ZpcnN0IGZpbHRlcicsIGNvdW50ZXI6IDEyMzIxNDMsIHBheWxvYWQ6ICdmaXJzdCBmaWx0ZXInLCBjbGFzc2VzOiAnaXMtYWN0aXZlJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogJ2xpbmsnLCB0ZXh0OiAnc2Vjb25kIGZpbHRlcicsIGNvdW50ZXI6IDE4LCBwYXlsb2FkOiAnc2Vjb25kIGZpbHRlcicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiAnbGluaycsIHRleHQ6ICd0aGlyZCBmaWx0ZXInLCBjb3VudGVyOiAxMSwgcGF5bG9hZDogJ3RoaXJkIGZpbHRlcicsIGNsYXNzZXM6ICdpcy1hY3RpdmUnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiAnbGluaycsIHRleHQ6ICdmb3VydGggZmlsdGVyJywgY291bnRlcjogNywgcGF5bG9hZDogJ2ZvdXJ0aCBmaWx0ZXInLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogJ2xpbmsnLCB0ZXh0OiAnbGFzdCBmaWx0ZXInLCBjb3VudGVyOiAzLCBwYXlsb2FkOiAnbGFzdCBmaWx0ZXInLFxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSwge1xyXG4gICAgY2xhc3NlczogJ2ZhY2V0LXNlY3Rpb24tNCcsXHJcbiAgICBpbnB1dHM6IFt7XHJcbiAgICAgIHR5cGU6ICdzZWxlY3QnLFxyXG4gICAgICBpZDogJ2lucHV0LXNlbGVjdC0xJyxcclxuICAgICAgLy8gZGlzYWJsZWQ6IHRydWUsXHJcbiAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICB7IHZhbHVlOiAnJywgbGFiZWw6ICdTZWxlY3QuLi4nIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMSwgbGFiZWw6ICdPcHRpb24gMScgfSxcclxuICAgICAgICB7IHZhbHVlOiAyLCBsYWJlbDogJ09wdGlvbiAyJywgZGlzYWJsZWQ6IHRydWUgfSxcclxuICAgICAgICB7IHZhbHVlOiAzLCBsYWJlbDogJ09wdGlvbiAzJywgc2VsZWN0ZWQ6IHRydWUgfSxcclxuICAgICAgICB7IHZhbHVlOiA0LCBsYWJlbDogJ09wdGlvbiA0JyB9LFxyXG4gICAgICBdLFxyXG4gICAgICBwYXlsb2FkOiAnc2VsZWN0JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHR5cGU6ICdzZWxlY3QnLFxyXG4gICAgICBpZDogJ2lucHV0LXNlbGVjdC0xJyxcclxuICAgICAgLy8gZGlzYWJsZWQ6IHRydWUsXHJcbiAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICB7IHZhbHVlOiAnJywgbGFiZWw6ICdTZWxlY3QuLi4nIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMSwgbGFiZWw6ICdPcHRpb24gMScgfSxcclxuICAgICAgICB7IHZhbHVlOiAyLCBsYWJlbDogJ09wdGlvbiAyJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDMsIGxhYmVsOiAnT3B0aW9uIDMnLCBzZWxlY3RlZDogdHJ1ZSB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDQsIGxhYmVsOiAnT3B0aW9uIDQnIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIHBheWxvYWQ6ICdzZWxlY3QnLFxyXG4gICAgfV1cclxuICB9XVxyXG59O1xyXG4iXX0=