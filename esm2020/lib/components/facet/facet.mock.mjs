export const FACET_MOCK = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQubW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2R2LWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9mYWNldC9mYWNldC5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBYztJQUNuQyxPQUFPLEVBQUUsZUFBZTtJQUN4QixRQUFRLEVBQUUsQ0FBQztZQUNULE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsTUFBTSxFQUFFO2dCQUNOO29CQUNFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVc7aUJBQzNGO2dCQUNEO29CQUNFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRO2lCQUN4RTtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJO2lCQUN2RjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUTtpQkFDeEU7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSTtpQkFDeEY7YUFDRjtTQUNGLEVBQUU7WUFDRCxPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLE1BQU0sRUFBRSxDQUFDO29CQUNQLElBQUksRUFBRSxNQUFNO29CQUNaLEVB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Q0FBQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7cUJBQ2hDO29CQUNELE9BQU8sRUFBRSxRQUFRO2lCQUNsQjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsUUFBUTtvQkFDZCxFQUFFLEVBQUUsZ0JBQWdCO29CQUNwQixrQkFBa0I7b0JBQ2xCLE9BQU8sRUFBRTt3QkFDUCxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTt3QkFDakMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7d0JBQy9CLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO3dCQUMvQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO3dCQUMvQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtxQkFDaEM7b0JBQ0QsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCLENBQUM7U0FDSCxDQUFDO0NBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhY2V0RGF0YSB9IGZyb20gJy4vZmFjZXQnO1xuXG5leHBvcnQgY29uc3QgRkFDRVRfTU9DSzogRmFjZXREYXRhID0ge1xuICBjbGFzc2VzOiAnZmFjZXQtd3JhcHBlcicsXG4gIHNlY3Rpb25zOiBbe1xuICAgIGNsYXNzZXM6ICdmYWNldC1zZWN0aW9uLTEnLFxuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICB0eXBlOiAnY2hlY2tib3gnLCBpZDogJ2NoZWNrYm94LTEnLCBsYWJlbDogJ0VtYWlsJywgcGF5bG9hZDogJ2VtYWlsJywgY2xhc3NlczogJ2lzLWFjdGl2ZSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdjaGVja2JveCcsIGlkOiAnY2hlY2tib3gtMicsIGxhYmVsOiAnQ2hlY2sgMicsIHBheWxvYWQ6ICdjaGVjazInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnY2hlY2tib3gnLCBpZDogJ2NoZWNrYm94LTMnLCBsYWJlbDogJ0NoZWNrIDMnLCBwYXlsb2FkOiAnY2hlY2szJywgY2hlY2tlZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2NoZWNrYm94JywgaWQ6ICdjaGVja2JveC00JywgbGFiZWw6ICdDaGVjayA0JywgcGF5bG9hZDogJ2NoZWNrNCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdjaGVja2JveCcsIGlkOiAnY2hlY2tib3gtNScsIGxhYmVsOiAnQ2hlY2sgNScsIHBheWxvYWQ6ICdjaGVjazUnLCBkaXNhYmxlZDogdHJ1ZVxuICAgICAgfVxuICAgIF1cbiAgfSwge1xuICAgIGNsYXNzZXM6ICdmYWNldC1zZWN0aW9uLTInLFxuICAgIGlucHV0czogW3tcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGlkOiAnaW5wdXQtdGV4dC0xJyxcbiAgICAgIGxhYmVsOiAnU0VBUkNIIExBQkVMJyxcbiAgICAgIC8vIGRpc2FibGVkOiB0cnVlLFxuICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2gnLFxuICAgICAgaWNvbjogJ243LWljb24tc2VhcmNoJyxcbiAgICAgIGlucHV0UGF5bG9hZDogJ3NlYXJjaC1pbnB1dCcsXG4gICAgICBlbnRlclBheWxvYWQ6ICdzZWFyY2gtZW50ZXInLFxuICAgICAgaWNvblBheWxvYWQ6ICdzZWFyY2gtaWNvbicsXG4gICAgfV1cbiAgfSwge1xuICAgIC8vIG43LWZhY2V0X19zZWN0aW9uLWlucHV0LWxpbmtzIHZpZW5lIHVzYXRvIHBlciBzdGlsYXJlIGlsIHdyYXBwZXIgZGVpIGxpbmtzXG4gICAgY2xhc3NlczogJ2ZhY2V0LXNlY3Rpb24tMyBuNy1mYWNldF9fc2VjdGlvbi1pbnB1dC1saW5rcycsXG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdsaW5rJywgaWNvbjogJ243LWljb24tYXJjaGl2ZScsIHRleHQ6ICdGaXJzdCBmaWx0ZXInLCBjb3VudGVyOiAwLCBwYXlsb2FkOiAnZmlyc3QgZmlsdGVyJywgY2xhc3NlczogJ2lzLWFjdGl2ZSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdsaW5rJywgdGV4dDogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZScsIGNvdW50ZXI6IDE4LCBwYXlsb2FkOiAnc2Vjb25kIGZpbHRlcicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnbGluaycsIGljb246ICduNy1pY29uLWFyY2hpdmUnLCB0ZXh0OiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlJywgY291bnRlcjogMTgsIHBheWxvYWQ6ICdzZWNvbmQgZmlsdGVyJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdsaW5rJywgdGV4dDogJ3RoaXJkIGZpbHRlcicsIGNvdW50ZXI6IDExLCBwYXlsb2FkOiAndGhpcmQgZmlsdGVyJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdsaW5rJywgdGV4dDogJ2xvcmVtJywgY291bnRlcjogNywgcGF5bG9hZDogJ2ZvdXJ0aCBmaWx0ZXInLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2xpbmsnLCB0ZXh0OiAnbGFzdCBmaWx0ZXInLCBjb3VudGVyOiAzMSwgcGF5bG9hZDogJ2xhc3QgZmlsdGVyJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdsaW5rJywgaWNvbjogJ243LWljb24tYXJjaGl2ZScsIHRleHQ6ICdGaXJzdCBmaWx0ZXInLCBjb3VudGVyOiAxMjMyMTQzLCBwYXlsb2FkOiAnZmlyc3QgZmlsdGVyJywgY2xhc3NlczogJ2lzLWFjdGl2ZSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdsaW5rJywgdGV4dDogJ3NlY29uZCBmaWx0ZXInLCBjb3VudGVyOiAxOCwgcGF5bG9hZDogJ3NlY29uZCBmaWx0ZXInLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2xpbmsnLCB0ZXh0OiAndGhpcmQgZmlsdGVyJywgY291bnRlcjogMTEsIHBheWxvYWQ6ICd0aGlyZCBmaWx0ZXInLCBjbGFzc2VzOiAnaXMtYWN0aXZlJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2xpbmsnLCB0ZXh0OiAnZm91cnRoIGZpbHRlcicsIGNvdW50ZXI6IDcsIHBheWxvYWQ6ICdmb3VydGggZmlsdGVyJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdsaW5rJywgdGV4dDogJ2xhc3QgZmlsdGVyJywgY291bnRlcjogMywgcGF5bG9hZDogJ2xhc3QgZmlsdGVyJyxcbiAgICAgIH1cbiAgICBdXG4gIH0sIHtcbiAgICBjbGFzc2VzOiAnZmFjZXQtc2VjdGlvbi00JyxcbiAgICBpbnB1dHM6IFt7XG4gICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgIGlkOiAnaW5wdXQtc2VsZWN0LTEnLFxuICAgICAgLy8gZGlzYWJsZWQ6IHRydWUsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIHsgdmFsdWU6ICcnLCBsYWJlbDogJ1NlbGVjdC4uLicgfSxcbiAgICAgICAgeyB2YWx1ZTogMSwgbGFiZWw6ICdPcHRpb24gMScgfSxcbiAgICAgICAgeyB2YWx1ZTogMiwgbGFiZWw6ICdPcHRpb24gMicsIGRpc2FibGVkOiB0cnVlIH0sXG4gICAgICAgIHsgdmFsdWU6IDMsIGxhYmVsOiAnT3B0aW9uIDMnLCBzZWxlY3RlZDogdHJ1ZSB9LFxuICAgICAgICB7IHZhbHVlOiA0LCBsYWJlbDogJ09wdGlvbiA0JyB9LFxuICAgICAgXSxcbiAgICAgIHBheWxvYWQ6ICdzZWxlY3QnLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICBpZDogJ2lucHV0LXNlbGVjdC0xJyxcbiAgICAgIC8vIGRpc2FibGVkOiB0cnVlLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICB7IHZhbHVlOiAnJywgbGFiZWw6ICdTZWxlY3QuLi4nIH0sXG4gICAgICAgIHsgdmFsdWU6IDEsIGxhYmVsOiAnT3B0aW9uIDEnIH0sXG4gICAgICAgIHsgdmFsdWU6IDIsIGxhYmVsOiAnT3B0aW9uIDInIH0sXG4gICAgICAgIHsgdmFsdWU6IDMsIGxhYmVsOiAnT3B0aW9uIDMnLCBzZWxlY3RlZDogdHJ1ZSB9LFxuICAgICAgICB7IHZhbHVlOiA0LCBsYWJlbDogJ09wdGlvbiA0JyB9LFxuICAgICAgXSxcbiAgICAgIHBheWxvYWQ6ICdzZWxlY3QnLFxuICAgIH1dXG4gIH1dXG59O1xuIl19