/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/facet/facet.mock.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var FACET_MOCK = {
    classes: 'facet-wrapper',
    sections: [{
            classes: 'facet-section-1',
            inputs: [
                { type: 'checkbox', id: 'checkbox-1', label: 'Email', payload: 'email', classes: 'is-active' },
                { type: 'checkbox', id: 'checkbox-2', label: 'Check 2', payload: 'check2' },
                { type: 'checkbox', id: 'checkbox-3', label: 'Check 3', payload: 'check3', checked: true },
                { type: 'checkbox', id: 'checkbox-4', label: 'Check 4', payload: 'check4' },
                { type: 'checkbox', id: 'checkbox-5', label: 'Check 5', payload: 'check5', disabled: true }
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
                { type: 'link', icon: 'n7-icon-archive', text: 'First filter', counter: 0, payload: 'first filter', classes: 'is-active' },
                { type: 'link', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', counter: 18, payload: 'second filter', },
                { type: 'link', icon: 'n7-icon-archive', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', counter: 18, payload: 'second filter', },
                { type: 'link', text: 'third filter', counter: 11, payload: 'third filter', },
                { type: 'link', text: 'lorem', counter: 7, payload: 'fourth filter', },
                { type: 'link', text: 'last filter', counter: 31, payload: 'last filter', },
                { type: 'link', icon: 'n7-icon-archive', text: 'First filter', counter: 1232143, payload: 'first filter', classes: 'is-active' },
                { type: 'link', text: 'second filter', counter: 18, payload: 'second filter', },
                { type: 'link', text: 'third filter', counter: 11, payload: 'third filter', classes: 'is-active' },
                { type: 'link', text: 'fourth filter', counter: 7, payload: 'fourth filter', },
                { type: 'link', text: 'last filter', counter: 3, payload: 'last filter', }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQubW9jay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmFjZXQvZmFjZXQubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxNQUFNLEtBQU8sVUFBVSxHQUFlO0lBQ3BDLE9BQU8sRUFBRSxlQUFlO0lBQ3hCLFFBQVEsRUFBRSxDQUFDO1lBQ1QsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixNQUFNLEVBQUU7Z0JBQ04sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUU7Z0JBQzlGLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRTtnQkFDM0UsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7Z0JBQzFGLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRTtnQkFDM0UsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7YUFDNUY7U0FDRixFQUFFO1lBQ0QsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixNQUFNLEVBQUUsQ0FBQztvQkFDUCxJQUFJLEVBQUUsTUFBTTtvQkFDWixFQUFFLEVBQUUsY0FBYztvQkFDbEIsS0FBSyxFQUFF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QVE7b0JBQ2QsRUFBRSxFQUFFLGdCQUFnQjs7b0JBRXBCLE9BQU8sRUFBRTt3QkFDUCxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTt3QkFDakMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7d0JBQy9CLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO3dCQUMvQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO3dCQUMvQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtxQkFDaEM7b0JBQ0QsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCLENBQUM7U0FDSCxDQUFDO0NBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJRmFjZXREYXRhIH0gZnJvbSAnLi9mYWNldCc7XHJcblxyXG5leHBvcnQgY29uc3QgRkFDRVRfTU9DSzogSUZhY2V0RGF0YSA9IHtcclxuICBjbGFzc2VzOiAnZmFjZXQtd3JhcHBlcicsXHJcbiAgc2VjdGlvbnM6IFt7XHJcbiAgICBjbGFzc2VzOiAnZmFjZXQtc2VjdGlvbi0xJyxcclxuICAgIGlucHV0czogW1xyXG4gICAgICB7IHR5cGU6ICdjaGVja2JveCcsIGlkOiAnY2hlY2tib3gtMScsIGxhYmVsOiAnRW1haWwnLCBwYXlsb2FkOiAnZW1haWwnLCBjbGFzc2VzOiAnaXMtYWN0aXZlJyB9LFxyXG4gICAgICB7IHR5cGU6ICdjaGVja2JveCcsIGlkOiAnY2hlY2tib3gtMicsIGxhYmVsOiAnQ2hlY2sgMicsIHBheWxvYWQ6ICdjaGVjazInIH0sXHJcbiAgICAgIHsgdHlwZTogJ2NoZWNrYm94JywgaWQ6ICdjaGVja2JveC0zJywgbGFiZWw6ICdDaGVjayAzJywgcGF5bG9hZDogJ2NoZWNrMycsIGNoZWNrZWQ6IHRydWUgfSxcclxuICAgICAgeyB0eXBlOiAnY2hlY2tib3gnLCBpZDogJ2NoZWNrYm94LTQnLCBsYWJlbDogJ0NoZWNrIDQnLCBwYXlsb2FkOiAnY2hlY2s0JyB9LFxyXG4gICAgICB7IHR5cGU6ICdjaGVja2JveCcsIGlkOiAnY2hlY2tib3gtNScsIGxhYmVsOiAnQ2hlY2sgNScsIHBheWxvYWQ6ICdjaGVjazUnLCBkaXNhYmxlZDogdHJ1ZSB9XHJcbiAgICBdXHJcbiAgfSwge1xyXG4gICAgY2xhc3NlczogJ2ZhY2V0LXNlY3Rpb24tMicsXHJcbiAgICBpbnB1dHM6IFt7XHJcbiAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgaWQ6ICdpbnB1dC10ZXh0LTEnLFxyXG4gICAgICBsYWJlbDogJ1NFQVJDSCBMQUJFTCcsXHJcbiAgICAgIC8vIGRpc2FibGVkOiB0cnVlLFxyXG4gICAgICBwbGFjZWhvbGRlcjogJ1NlYXJjaCcsXHJcbiAgICAgIGljb246ICduNy1pY29uLXNlYXJjaCcsXHJcbiAgICAgIGlucHV0UGF5bG9hZDogJ3NlYXJjaC1pbnB1dCcsXHJcbiAgICAgIGVudGVyUGF5bG9hZDogJ3NlYXJjaC1lbnRlcicsXHJcbiAgICAgIGljb25QYXlsb2FkOiAnc2VhcmNoLWljb24nLFxyXG4gICAgfV1cclxuICB9LCB7XHJcbiAgICAvLyBuNy1mYWNldF9fc2VjdGlvbi1pbnB1dC1saW5rcyB2aWVuZSB1c2F0byBwZXIgc3RpbGFyZSBpbCB3cmFwcGVyIGRlaSBsaW5rc1xyXG4gICAgY2xhc3NlczogJ2ZhY2V0LXNlY3Rpb24tMyBuNy1mYWNldF9fc2VjdGlvbi1pbnB1dC1saW5rcycsXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgeyB0eXBlOiAnbGluaycsIGljb246ICduNy1pY29uLWFyY2hpdmUnLCB0ZXh0OiAnRmlyc3QgZmlsdGVyJywgY291bnRlcjogMCwgcGF5bG9hZDogJ2ZpcnN0IGZpbHRlcicsIGNsYXNzZXM6ICdpcy1hY3RpdmUnIH0sXHJcbiAgICAgIHsgdHlwZTogJ2xpbmsnLCB0ZXh0OiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlJywgY291bnRlcjogMTgsIHBheWxvYWQ6ICdzZWNvbmQgZmlsdGVyJywgfSxcclxuICAgICAgeyB0eXBlOiAnbGluaycsIGljb246ICduNy1pY29uLWFyY2hpdmUnLCB0ZXh0OiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlJywgY291bnRlcjogMTgsIHBheWxvYWQ6ICdzZWNvbmQgZmlsdGVyJywgfSxcclxuICAgICAgeyB0eXBlOiAnbGluaycsIHRleHQ6ICd0aGlyZCBmaWx0ZXInLCBjb3VudGVyOiAxMSwgcGF5bG9hZDogJ3RoaXJkIGZpbHRlcicsIH0sXHJcbiAgICAgIHsgdHlwZTogJ2xpbmsnLCB0ZXh0OiAnbG9yZW0nLCBjb3VudGVyOiA3LCBwYXlsb2FkOiAnZm91cnRoIGZpbHRlcicsIH0sXHJcbiAgICAgIHsgdHlwZTogJ2xpbmsnLCB0ZXh0OiAnbGFzdCBmaWx0ZXInLCBjb3VudGVyOiAzMSwgcGF5bG9hZDogJ2xhc3QgZmlsdGVyJywgfSxcclxuICAgICAgeyB0eXBlOiAnbGluaycsIGljb246ICduNy1pY29uLWFyY2hpdmUnLCB0ZXh0OiAnRmlyc3QgZmlsdGVyJywgY291bnRlcjogMTIzMjE0MywgcGF5bG9hZDogJ2ZpcnN0IGZpbHRlcicsIGNsYXNzZXM6ICdpcy1hY3RpdmUnIH0sXHJcbiAgICAgIHsgdHlwZTogJ2xpbmsnLCB0ZXh0OiAnc2Vjb25kIGZpbHRlcicsIGNvdW50ZXI6IDE4LCBwYXlsb2FkOiAnc2Vjb25kIGZpbHRlcicsIH0sXHJcbiAgICAgIHsgdHlwZTogJ2xpbmsnLCB0ZXh0OiAndGhpcmQgZmlsdGVyJywgY291bnRlcjogMTEsIHBheWxvYWQ6ICd0aGlyZCBmaWx0ZXInLCBjbGFzc2VzOiAnaXMtYWN0aXZlJyB9LFxyXG4gICAgICB7IHR5cGU6ICdsaW5rJywgdGV4dDogJ2ZvdXJ0aCBmaWx0ZXInLCBjb3VudGVyOiA3LCBwYXlsb2FkOiAnZm91cnRoIGZpbHRlcicsIH0sXHJcbiAgICAgIHsgdHlwZTogJ2xpbmsnLCB0ZXh0OiAnbGFzdCBmaWx0ZXInLCBjb3VudGVyOiAzLCBwYXlsb2FkOiAnbGFzdCBmaWx0ZXInLCB9XHJcbiAgICBdXHJcbiAgfSwge1xyXG4gICAgY2xhc3NlczogJ2ZhY2V0LXNlY3Rpb24tNCcsXHJcbiAgICBpbnB1dHM6IFt7XHJcbiAgICAgIHR5cGU6ICdzZWxlY3QnLFxyXG4gICAgICBpZDogJ2lucHV0LXNlbGVjdC0xJyxcclxuICAgICAgLy8gZGlzYWJsZWQ6IHRydWUsXHJcbiAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICB7IHZhbHVlOiAnJywgbGFiZWw6ICdTZWxlY3QuLi4nIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMSwgbGFiZWw6ICdPcHRpb24gMScgfSxcclxuICAgICAgICB7IHZhbHVlOiAyLCBsYWJlbDogJ09wdGlvbiAyJywgZGlzYWJsZWQ6IHRydWUgfSxcclxuICAgICAgICB7IHZhbHVlOiAzLCBsYWJlbDogJ09wdGlvbiAzJywgc2VsZWN0ZWQ6IHRydWUgfSxcclxuICAgICAgICB7IHZhbHVlOiA0LCBsYWJlbDogJ09wdGlvbiA0JyB9LFxyXG4gICAgICBdLFxyXG4gICAgICBwYXlsb2FkOiAnc2VsZWN0JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHR5cGU6ICdzZWxlY3QnLFxyXG4gICAgICBpZDogJ2lucHV0LXNlbGVjdC0xJyxcclxuICAgICAgLy8gZGlzYWJsZWQ6IHRydWUsXHJcbiAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICB7IHZhbHVlOiAnJywgbGFiZWw6ICdTZWxlY3QuLi4nIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMSwgbGFiZWw6ICdPcHRpb24gMScgfSxcclxuICAgICAgICB7IHZhbHVlOiAyLCBsYWJlbDogJ09wdGlvbiAyJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDMsIGxhYmVsOiAnT3B0aW9uIDMnLCBzZWxlY3RlZDogdHJ1ZSB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDQsIGxhYmVsOiAnT3B0aW9uIDQnIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIHBheWxvYWQ6ICdzZWxlY3QnLFxyXG4gICAgfV1cclxuICB9XVxyXG59Il19