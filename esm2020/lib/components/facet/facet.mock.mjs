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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQubW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2R2LWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9mYWNldC9mYWNldC5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBYztJQUNuQyxPQUFPLEVBQUUsZUFBZTtJQUN4QixRQUFRLEVBQUUsQ0FBQztZQUNULE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsTUFBTSxFQUFFO2dCQUNOO29CQUNFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVc7aUJBQzNGO2dCQUNEO29CQUNFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRO2lCQUN4RTtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJO2lCQUN2RjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUTtpQkFDeEU7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSTtpQkFDeEY7YUFDRjtTQUNGLEVBQUU7WUFDRCxPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLE1BQU0sRUFBRSxDQUFDO29CQUNQLElBQUksRUFBRSxNQUFNO29CQUNaLEVB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Q0FBQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7cUJBQ2hDO29CQUNELE9BQU8sRUFBRSxRQUFRO2lCQUNsQjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsUUFBUTtvQkFDZCxFQUFFLEVBQUUsZ0JBQWdCO29CQUNwQixrQkFBa0I7b0JBQ2xCLE9BQU8sRUFBRTt3QkFDUCxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTt3QkFDakMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7d0JBQy9CLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO3dCQUMvQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO3dCQUMvQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtxQkFDaEM7b0JBQ0QsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCLENBQUM7U0FDSCxDQUFDO0NBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhY2V0RGF0YSB9IGZyb20gJy4vZmFjZXQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZBQ0VUX01PQ0s6IEZhY2V0RGF0YSA9IHtcclxuICBjbGFzc2VzOiAnZmFjZXQtd3JhcHBlcicsXHJcbiAgc2VjdGlvbnM6IFt7XHJcbiAgICBjbGFzc2VzOiAnZmFjZXQtc2VjdGlvbi0xJyxcclxuICAgIGlucHV0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogJ2NoZWNrYm94JywgaWQ6ICdjaGVja2JveC0xJywgbGFiZWw6ICdFbWFpbCcsIHBheWxvYWQ6ICdlbWFpbCcsIGNsYXNzZXM6ICdpcy1hY3RpdmUnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiAnY2hlY2tib3gnLCBpZDogJ2NoZWNrYm94LTInLCBsYWJlbDogJ0NoZWNrIDInLCBwYXlsb2FkOiAnY2hlY2syJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogJ2NoZWNrYm94JywgaWQ6ICdjaGVja2JveC0zJywgbGFiZWw6ICdDaGVjayAzJywgcGF5bG9hZDogJ2NoZWNrMycsIGNoZWNrZWQ6IHRydWVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6ICdjaGVja2JveCcsIGlkOiAnY2hlY2tib3gtNCcsIGxhYmVsOiAnQ2hlY2sgNCcsIHBheWxvYWQ6ICdjaGVjazQnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiAnY2hlY2tib3gnLCBpZDogJ2NoZWNrYm94LTUnLCBsYWJlbDogJ0NoZWNrIDUnLCBwYXlsb2FkOiAnY2hlY2s1JywgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sIHtcclxuICAgIGNsYXNzZXM6ICdmYWNldC1zZWN0aW9uLTInLFxyXG4gICAgaW5wdXRzOiBbe1xyXG4gICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgIGlkOiAnaW5wdXQtdGV4dC0xJyxcclxuICAgICAgbGFiZWw6ICdTRUFSQ0ggTEFCRUwnLFxyXG4gICAgICAvLyBkaXNhYmxlZDogdHJ1ZSxcclxuICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2gnLFxyXG4gICAgICBpY29uOiAnbjctaWNvbi1zZWFyY2gnLFxyXG4gICAgICBpbnB1dFBheWxvYWQ6ICdzZWFyY2gtaW5wdXQnLFxyXG4gICAgICBlbnRlclBheWxvYWQ6ICdzZWFyY2gtZW50ZXInLFxyXG4gICAgICBpY29uUGF5bG9hZDogJ3NlYXJjaC1pY29uJyxcclxuICAgIH1dXHJcbiAgfSwge1xyXG4gICAgLy8gbjctZmFjZXRfX3NlY3Rpb24taW5wdXQtbGlua3MgdmllbmUgdXNhdG8gcGVyIHN0aWxhcmUgaWwgd3JhcHBlciBkZWkgbGlua3NcclxuICAgIGNsYXNzZXM6ICdmYWNldC1zZWN0aW9uLTMgbjctZmFjZXRfX3NlY3Rpb24taW5wdXQtbGlua3MnLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiAnbGluaycsIGljb246ICduNy1pY29uLWFyY2hpdmUnLCB0ZXh0OiAnRmlyc3QgZmlsdGVyJywgY291bnRlcjogMCwgcGF5bG9hZDogJ2ZpcnN0IGZpbHRlcicsIGNsYXNzZXM6ICdpcy1hY3RpdmUnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiAnbGluaycsIHRleHQ6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUnLCBjb3VudGVyOiAxOCwgcGF5bG9hZDogJ3NlY29uZCBmaWx0ZXInLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogJ2xpbmsnLCBpY29uOiAnbjctaWNvbi1hcmNoaXZlJywgdGV4dDogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZScsIGNvdW50ZXI6IDE4LCBwYXlsb2FkOiAnc2Vjb25kIGZpbHRlcicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiAnbGluaycsIHRleHQ6ICd0aGlyZCBmaWx0ZXInLCBjb3VudGVyOiAxMSwgcGF5bG9hZDogJ3RoaXJkIGZpbHRlcicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiAnbGluaycsIHRleHQ6ICdsb3JlbScsIGNvdW50ZXI6IDcsIHBheWxvYWQ6ICdmb3VydGggZmlsdGVyJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6ICdsaW5rJywgdGV4dDogJ2xhc3QgZmlsdGVyJywgY291bnRlcjogMzEsIHBheWxvYWQ6ICdsYXN0IGZpbHRlcicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiAnbGluaycsIGljb246ICduNy1pY29uLWFyY2hpdmUnLCB0ZXh0OiAnRmlyc3QgZmlsdGVyJywgY291bnRlcjogMTIzMjE0MywgcGF5bG9hZDogJ2ZpcnN0IGZpbHRlcicsIGNsYXNzZXM6ICdpcy1hY3RpdmUnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiAnbGluaycsIHRleHQ6ICdzZWNvbmQgZmlsdGVyJywgY291bnRlcjogMTgsIHBheWxvYWQ6ICdzZWNvbmQgZmlsdGVyJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6ICdsaW5rJywgdGV4dDogJ3RoaXJkIGZpbHRlcicsIGNvdW50ZXI6IDExLCBwYXlsb2FkOiAndGhpcmQgZmlsdGVyJywgY2xhc3NlczogJ2lzLWFjdGl2ZSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6ICdsaW5rJywgdGV4dDogJ2ZvdXJ0aCBmaWx0ZXInLCBjb3VudGVyOiA3LCBwYXlsb2FkOiAnZm91cnRoIGZpbHRlcicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiAnbGluaycsIHRleHQ6ICdsYXN0IGZpbHRlcicsIGNvdW50ZXI6IDMsIHBheWxvYWQ6ICdsYXN0IGZpbHRlcicsXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LCB7XHJcbiAgICBjbGFzc2VzOiAnZmFjZXQtc2VjdGlvbi00JyxcclxuICAgIGlucHV0czogW3tcclxuICAgICAgdHlwZTogJ3NlbGVjdCcsXHJcbiAgICAgIGlkOiAnaW5wdXQtc2VsZWN0LTEnLFxyXG4gICAgICAvLyBkaXNhYmxlZDogdHJ1ZSxcclxuICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgIHsgdmFsdWU6ICcnLCBsYWJlbDogJ1NlbGVjdC4uLicgfSxcclxuICAgICAgICB7IHZhbHVlOiAxLCBsYWJlbDogJ09wdGlvbiAxJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDIsIGxhYmVsOiAnT3B0aW9uIDInLCBkaXNhYmxlZDogdHJ1ZSB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDMsIGxhYmVsOiAnT3B0aW9uIDMnLCBzZWxlY3RlZDogdHJ1ZSB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDQsIGxhYmVsOiAnT3B0aW9uIDQnIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIHBheWxvYWQ6ICdzZWxlY3QnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdHlwZTogJ3NlbGVjdCcsXHJcbiAgICAgIGlkOiAnaW5wdXQtc2VsZWN0LTEnLFxyXG4gICAgICAvLyBkaXNhYmxlZDogdHJ1ZSxcclxuICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgIHsgdmFsdWU6ICcnLCBsYWJlbDogJ1NlbGVjdC4uLicgfSxcclxuICAgICAgICB7IHZhbHVlOiAxLCBsYWJlbDogJ09wdGlvbiAxJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDIsIGxhYmVsOiAnT3B0aW9uIDInIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMywgbGFiZWw6ICdPcHRpb24gMycsIHNlbGVjdGVkOiB0cnVlIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogNCwgbGFiZWw6ICdPcHRpb24gNCcgfSxcclxuICAgICAgXSxcclxuICAgICAgcGF5bG9hZDogJ3NlbGVjdCcsXHJcbiAgICB9XVxyXG4gIH1dXHJcbn07XHJcbiJdfQ==