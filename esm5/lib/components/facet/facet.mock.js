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
                { type: 'link', icon: 'n7-icon-archive', text: 'First filter', counter: 20, payload: 'first filter', classes: 'is-active' },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQubW9jay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmFjZXQvZmFjZXQubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxNQUFNLEtBQU8sVUFBVSxHQUFlO0lBQ3BDLE9BQU8sRUFBRSxlQUFlO0lBQ3hCLFFBQVEsRUFBRSxDQUFDO1lBQ1QsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixNQUFNLEVBQUU7Z0JBQ04sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUU7Z0JBQzlGLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRTtnQkFDM0UsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7Z0JBQzFGLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRTtnQkFDM0UsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7YUFDNUY7U0FDRixFQUFFO1lBQ0QsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixNQUFNLEVBQUUsQ0FBQztvQkFDUCxJQUFJLEVBQUUsTUFBTTtvQkFDWixFQUFFLEVBQUUsY0FBYztvQkFDbEIsS0FBSyxFQUFF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QVE7b0JBQ2QsRUFBRSxFQUFFLGdCQUFnQjs7b0JBRXBCLE9BQU8sRUFBRTt3QkFDUCxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTt3QkFDakMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7d0JBQy9CLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO3dCQUMvQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO3dCQUMvQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtxQkFDaEM7b0JBQ0QsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCLENBQUM7U0FDSCxDQUFDO0NBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJRmFjZXREYXRhIH0gZnJvbSAnLi9mYWNldCc7XG5cbmV4cG9ydCBjb25zdCBGQUNFVF9NT0NLOiBJRmFjZXREYXRhID0ge1xuICBjbGFzc2VzOiAnZmFjZXQtd3JhcHBlcicsXG4gIHNlY3Rpb25zOiBbe1xuICAgIGNsYXNzZXM6ICdmYWNldC1zZWN0aW9uLTEnLFxuICAgIGlucHV0czogW1xuICAgICAgeyB0eXBlOiAnY2hlY2tib3gnLCBpZDogJ2NoZWNrYm94LTEnLCBsYWJlbDogJ0VtYWlsJywgcGF5bG9hZDogJ2VtYWlsJywgY2xhc3NlczogJ2lzLWFjdGl2ZScgfSxcbiAgICAgIHsgdHlwZTogJ2NoZWNrYm94JywgaWQ6ICdjaGVja2JveC0yJywgbGFiZWw6ICdDaGVjayAyJywgcGF5bG9hZDogJ2NoZWNrMicgfSxcbiAgICAgIHsgdHlwZTogJ2NoZWNrYm94JywgaWQ6ICdjaGVja2JveC0zJywgbGFiZWw6ICdDaGVjayAzJywgcGF5bG9hZDogJ2NoZWNrMycsIGNoZWNrZWQ6IHRydWUgfSxcbiAgICAgIHsgdHlwZTogJ2NoZWNrYm94JywgaWQ6ICdjaGVja2JveC00JywgbGFiZWw6ICdDaGVjayA0JywgcGF5bG9hZDogJ2NoZWNrNCcgfSxcbiAgICAgIHsgdHlwZTogJ2NoZWNrYm94JywgaWQ6ICdjaGVja2JveC01JywgbGFiZWw6ICdDaGVjayA1JywgcGF5bG9hZDogJ2NoZWNrNScsIGRpc2FibGVkOiB0cnVlIH1cbiAgICBdXG4gIH0sIHtcbiAgICBjbGFzc2VzOiAnZmFjZXQtc2VjdGlvbi0yJyxcbiAgICBpbnB1dHM6IFt7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBpZDogJ2lucHV0LXRleHQtMScsXG4gICAgICBsYWJlbDogJ1NFQVJDSCBMQUJFTCcsXG4gICAgICAvLyBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoJyxcbiAgICAgIGljb246ICduNy1pY29uLXNlYXJjaCcsXG4gICAgICBpbnB1dFBheWxvYWQ6ICdzZWFyY2gtaW5wdXQnLFxuICAgICAgZW50ZXJQYXlsb2FkOiAnc2VhcmNoLWVudGVyJyxcbiAgICAgIGljb25QYXlsb2FkOiAnc2VhcmNoLWljb24nLFxuICAgIH1dXG4gIH0sIHtcbiAgICAvLyBuNy1mYWNldF9fc2VjdGlvbi1pbnB1dC1saW5rcyB2aWVuZSB1c2F0byBwZXIgc3RpbGFyZSBpbCB3cmFwcGVyIGRlaSBsaW5rc1xuICAgIGNsYXNzZXM6ICdmYWNldC1zZWN0aW9uLTMgbjctZmFjZXRfX3NlY3Rpb24taW5wdXQtbGlua3MnLFxuICAgIGlucHV0czogW1xuICAgICAgeyB0eXBlOiAnbGluaycsIGljb246ICduNy1pY29uLWFyY2hpdmUnLCB0ZXh0OiAnRmlyc3QgZmlsdGVyJywgY291bnRlcjogMjAsIHBheWxvYWQ6ICdmaXJzdCBmaWx0ZXInLCBjbGFzc2VzOiAnaXMtYWN0aXZlJyB9LFxuICAgICAgeyB0eXBlOiAnbGluaycsIHRleHQ6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUnLCBjb3VudGVyOiAxOCwgcGF5bG9hZDogJ3NlY29uZCBmaWx0ZXInLCB9LFxuICAgICAgeyB0eXBlOiAnbGluaycsIGljb246ICduNy1pY29uLWFyY2hpdmUnLCB0ZXh0OiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlJywgY291bnRlcjogMTgsIHBheWxvYWQ6ICdzZWNvbmQgZmlsdGVyJywgfSxcbiAgICAgIHsgdHlwZTogJ2xpbmsnLCB0ZXh0OiAndGhpcmQgZmlsdGVyJywgY291bnRlcjogMTEsIHBheWxvYWQ6ICd0aGlyZCBmaWx0ZXInLCB9LFxuICAgICAgeyB0eXBlOiAnbGluaycsIHRleHQ6ICdsb3JlbScsIGNvdW50ZXI6IDcsIHBheWxvYWQ6ICdmb3VydGggZmlsdGVyJywgfSxcbiAgICAgIHsgdHlwZTogJ2xpbmsnLCB0ZXh0OiAnbGFzdCBmaWx0ZXInLCBjb3VudGVyOiAzMSwgcGF5bG9hZDogJ2xhc3QgZmlsdGVyJywgfSxcbiAgICAgIHsgdHlwZTogJ2xpbmsnLCBpY29uOiAnbjctaWNvbi1hcmNoaXZlJywgdGV4dDogJ0ZpcnN0IGZpbHRlcicsIGNvdW50ZXI6IDEyMzIxNDMsIHBheWxvYWQ6ICdmaXJzdCBmaWx0ZXInLCBjbGFzc2VzOiAnaXMtYWN0aXZlJyB9LFxuICAgICAgeyB0eXBlOiAnbGluaycsIHRleHQ6ICdzZWNvbmQgZmlsdGVyJywgY291bnRlcjogMTgsIHBheWxvYWQ6ICdzZWNvbmQgZmlsdGVyJywgfSxcbiAgICAgIHsgdHlwZTogJ2xpbmsnLCB0ZXh0OiAndGhpcmQgZmlsdGVyJywgY291bnRlcjogMTEsIHBheWxvYWQ6ICd0aGlyZCBmaWx0ZXInLCBjbGFzc2VzOiAnaXMtYWN0aXZlJyB9LFxuICAgICAgeyB0eXBlOiAnbGluaycsIHRleHQ6ICdmb3VydGggZmlsdGVyJywgY291bnRlcjogNywgcGF5bG9hZDogJ2ZvdXJ0aCBmaWx0ZXInLCB9LFxuICAgICAgeyB0eXBlOiAnbGluaycsIHRleHQ6ICdsYXN0IGZpbHRlcicsIGNvdW50ZXI6IDMsIHBheWxvYWQ6ICdsYXN0IGZpbHRlcicsIH1cbiAgICBdXG4gIH0sIHtcbiAgICBjbGFzc2VzOiAnZmFjZXQtc2VjdGlvbi00JyxcbiAgICBpbnB1dHM6IFt7XG4gICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgIGlkOiAnaW5wdXQtc2VsZWN0LTEnLFxuICAgICAgLy8gZGlzYWJsZWQ6IHRydWUsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIHsgdmFsdWU6ICcnLCBsYWJlbDogJ1NlbGVjdC4uLicgfSxcbiAgICAgICAgeyB2YWx1ZTogMSwgbGFiZWw6ICdPcHRpb24gMScgfSxcbiAgICAgICAgeyB2YWx1ZTogMiwgbGFiZWw6ICdPcHRpb24gMicsIGRpc2FibGVkOiB0cnVlIH0sXG4gICAgICAgIHsgdmFsdWU6IDMsIGxhYmVsOiAnT3B0aW9uIDMnLCBzZWxlY3RlZDogdHJ1ZSB9LFxuICAgICAgICB7IHZhbHVlOiA0LCBsYWJlbDogJ09wdGlvbiA0JyB9LFxuICAgICAgXSxcbiAgICAgIHBheWxvYWQ6ICdzZWxlY3QnLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICBpZDogJ2lucHV0LXNlbGVjdC0xJyxcbiAgICAgIC8vIGRpc2FibGVkOiB0cnVlLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICB7IHZhbHVlOiAnJywgbGFiZWw6ICdTZWxlY3QuLi4nIH0sXG4gICAgICAgIHsgdmFsdWU6IDEsIGxhYmVsOiAnT3B0aW9uIDEnIH0sXG4gICAgICAgIHsgdmFsdWU6IDIsIGxhYmVsOiAnT3B0aW9uIDInIH0sXG4gICAgICAgIHsgdmFsdWU6IDMsIGxhYmVsOiAnT3B0aW9uIDMnLCBzZWxlY3RlZDogdHJ1ZSB9LFxuICAgICAgICB7IHZhbHVlOiA0LCBsYWJlbDogJ09wdGlvbiA0JyB9LFxuICAgICAgXSxcbiAgICAgIHBheWxvYWQ6ICdzZWxlY3QnLFxuICAgIH1dXG4gIH1dXG59Il19