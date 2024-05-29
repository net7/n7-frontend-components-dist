export const FACET_MOCK = {
    classes: 'facet-wrapper',
    sections: [
        {
            classes: 'facet-section-1',
            inputs: [
                {
                    type: 'checkbox',
                    id: 'checkbox-1',
                    label: 'Email',
                    payload: 'email',
                    classes: 'is-active',
                },
                {
                    type: 'checkbox',
                    id: 'checkbox-2',
                    label: 'Check 2',
                    payload: 'check2',
                },
                {
                    type: 'checkbox',
                    id: 'checkbox-3',
                    label: 'Check 3',
                    payload: 'check3',
                    checked: true,
                },
                {
                    type: 'checkbox',
                    id: 'checkbox-4',
                    label: 'Check 4',
                    payload: 'check4',
                },
                {
                    type: 'checkbox',
                    id: 'checkbox-5',
                    label: 'Check 5',
                    payload: 'check5',
                    disabled: true,
                },
            ],
        },
        {
            classes: 'facet-section-2',
            inputs: [
                {
                    type: 'text',
                    id: 'input-text-1',
                    label: 'SEARCH LABEL',
                    // disabled: true,
                    placeholder: 'Search',
                    icon: 'n7-icon-search',
                    inputPayload: 'search-input',
                    enterPayload: 'search-enter',
                    iconPayload: 'search-icon',
                },
            ],
        },
        {
            // n7-facet__section-input-links viene usato per stilare il wrapper dei links
            classes: 'facet-section-3 n7-facet__section-input-links',
            inputs: [
                {
                    type: 'link',
                    icon: 'n7-icon-archive',
                    text: 'First filter',
                    counter: 0,
                    payload: 'first filter',
                    classes: 'is-active',
                },
                {
                    type: 'link',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                    counter: 18,
                    payload: 'second filter',
                },
                {
                    type: 'link',
                    icon: 'n7-icon-archive',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                    counter: 18,
                    payload: 'second filter',
                },
                {
                    type: 'link',
                    text: 'third filter',
                    counter: 11,
                    payload: 'third filter',
                },
                {
                    type: 'link',
                    text: 'lorem',
                    counter: 7,
                    payload: 'fourth filter',
                },
                {
                    type: 'link',
                    text: 'last filter',
                    counter: 31,
                    payload: 'last filter',
                },
                {
                    type: 'link',
                    icon: 'n7-icon-archive',
                    text: 'First filter',
                    counter: 1232143,
                    payload: 'first filter',
                    classes: 'is-active',
                },
                {
                    type: 'link',
                    text: 'second filter',
                    counter: 18,
                    payload: 'second filter',
                },
                {
                    type: 'link',
                    text: 'third filter',
                    counter: 11,
                    payload: 'third filter',
                    classes: 'is-active',
                },
                {
                    type: 'link',
                    text: 'fourth filter',
                    counter: 7,
                    payload: 'fourth filter',
                },
                {
                    type: 'link',
                    text: 'last filter',
                    counter: 3,
                    payload: 'last filter',
                },
            ],
        },
        {
            classes: 'facet-section-4',
            inputs: [
                {
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
                },
            ],
        },
    ],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQubW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2R2LWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9mYWNldC9mYWNldC5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBYztJQUNuQyxPQUFPLEVBQUUsZUFBZTtJQUN4QixRQUFRLEVBQUU7UUFDUjtZQUNFLE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsTUFBTSxFQUFFO2dCQUNOO29CQUNFLElBQUksRUFBRSxVQUFVO29CQUNoQixFQUFFLEVBQUUsWUFBWTtvQkFDaEIsS0FBSyxFQUFFLE9BQU87b0JBQ2QsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLE9BQU8sRUFBRSxXQUFXO2lCQUNyQjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsVUFBVTtvQkFDaEIsRUFBRSxFQUFFLFlBQVk7b0JBQ2hCLEtBQUssRUFBRSxTQUFTO29CQUNoQixPQUFPLEVBQUUsUUFBUTtpQkFDbEI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLEVBQUUsRUFBRSxZQUFZO29CQUNoQixLQUFLLEVBQUUsU0FBUztvQkFDaEIsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLE9BQU8sRUFBRSxJQUFJO2lCQUNkO2dCQUNEO29CQUNFLElBQUksRUFBRSxVQUFVO29CQUNoQixFQUFFLEVBQUUsWUFBWTtvQkFDaEIsS0FBSyxFQUFFLFNBQVM7b0JBQ2hCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsVUFBVTtvQkFDaEIsRUFBRSxFQUFFLFlBQVk7b0JBQ2hCLEtBQUssRUFBRSxTQUFTO29CQUNoQixPQUFPLEVBQUUsUUFBUTtvQkFDakIsUUFBUSxFQUFFLElBQUk7aUJBQ2Y7YUFDRjtTQUNGO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLE1BQU0sRUFBRTtn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Qy9DLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7d0JBQy9DLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO3FCQUNoQztvQkFDRCxPQUFPLEVBQUUsUUFBUTtpQkFDbEI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsRUFBRSxFQUFFLGdCQUFnQjtvQkFDcEIsa0JBQWtCO29CQUNsQixPQUFPLEVBQUU7d0JBQ1AsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7d0JBQ2pDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO3dCQUMvQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTt3QkFDL0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTt3QkFDL0MsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7cUJBQ2hDO29CQUNELE9BQU8sRUFBRSxRQUFRO2lCQUNsQjthQUNGO1NBQ0Y7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYWNldERhdGEgfSBmcm9tICcuL2ZhY2V0JztcblxuZXhwb3J0IGNvbnN0IEZBQ0VUX01PQ0s6IEZhY2V0RGF0YSA9IHtcbiAgY2xhc3NlczogJ2ZhY2V0LXdyYXBwZXInLFxuICBzZWN0aW9uczogW1xuICAgIHtcbiAgICAgIGNsYXNzZXM6ICdmYWNldC1zZWN0aW9uLTEnLFxuICAgICAgaW5wdXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgICAgIGlkOiAnY2hlY2tib3gtMScsXG4gICAgICAgICAgbGFiZWw6ICdFbWFpbCcsXG4gICAgICAgICAgcGF5bG9hZDogJ2VtYWlsJyxcbiAgICAgICAgICBjbGFzc2VzOiAnaXMtYWN0aXZlJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgICAgaWQ6ICdjaGVja2JveC0yJyxcbiAgICAgICAgICBsYWJlbDogJ0NoZWNrIDInLFxuICAgICAgICAgIHBheWxvYWQ6ICdjaGVjazInLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICBpZDogJ2NoZWNrYm94LTMnLFxuICAgICAgICAgIGxhYmVsOiAnQ2hlY2sgMycsXG4gICAgICAgICAgcGF5bG9hZDogJ2NoZWNrMycsXG4gICAgICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgICAgaWQ6ICdjaGVja2JveC00JyxcbiAgICAgICAgICBsYWJlbDogJ0NoZWNrIDQnLFxuICAgICAgICAgIHBheWxvYWQ6ICdjaGVjazQnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICBpZDogJ2NoZWNrYm94LTUnLFxuICAgICAgICAgIGxhYmVsOiAnQ2hlY2sgNScsXG4gICAgICAgICAgcGF5bG9hZDogJ2NoZWNrNScsXG4gICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3NlczogJ2ZhY2V0LXNlY3Rpb24tMicsXG4gICAgICBpbnB1dHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICBpZDogJ2lucHV0LXRleHQtMScsXG4gICAgICAgICAgbGFiZWw6ICdTRUFSQ0ggTEFCRUwnLFxuICAgICAgICAgIC8vIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoJyxcbiAgICAgICAgICBpY29uOiAnbjctaWNvbi1zZWFyY2gnLFxuICAgICAgICAgIGlucHV0UGF5bG9hZDogJ3NlYXJjaC1pbnB1dCcsXG4gICAgICAgICAgZW50ZXJQYXlsb2FkOiAnc2VhcmNoLWVudGVyJyxcbiAgICAgICAgICBpY29uUGF5bG9hZDogJ3NlYXJjaC1pY29uJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBuNy1mYWNldF9fc2VjdGlvbi1pbnB1dC1saW5rcyB2aWVuZSB1c2F0byBwZXIgc3RpbGFyZSBpbCB3cmFwcGVyIGRlaSBsaW5rc1xuICAgICAgY2xhc3NlczogJ2ZhY2V0LXNlY3Rpb24tMyBuNy1mYWNldF9fc2VjdGlvbi1pbnB1dC1saW5rcycsXG4gICAgICBpbnB1dHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgICAgICBpY29uOiAnbjctaWNvbi1hcmNoaXZlJyxcbiAgICAgICAgICB0ZXh0OiAnRmlyc3QgZmlsdGVyJyxcbiAgICAgICAgICBjb3VudGVyOiAwLFxuICAgICAgICAgIHBheWxvYWQ6ICdmaXJzdCBmaWx0ZXInLFxuICAgICAgICAgIGNsYXNzZXM6ICdpcy1hY3RpdmUnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgICAgIHRleHQ6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUnLFxuICAgICAgICAgIGNvdW50ZXI6IDE4LFxuICAgICAgICAgIHBheWxvYWQ6ICdzZWNvbmQgZmlsdGVyJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgICAgICBpY29uOiAnbjctaWNvbi1hcmNoaXZlJyxcbiAgICAgICAgICB0ZXh0OiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlJyxcbiAgICAgICAgICBjb3VudGVyOiAxOCxcbiAgICAgICAgICBwYXlsb2FkOiAnc2Vjb25kIGZpbHRlcicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnbGluaycsXG4gICAgICAgICAgdGV4dDogJ3RoaXJkIGZpbHRlcicsXG4gICAgICAgICAgY291bnRlcjogMTEsXG4gICAgICAgICAgcGF5bG9hZDogJ3RoaXJkIGZpbHRlcicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnbGluaycsXG4gICAgICAgICAgdGV4dDogJ2xvcmVtJyxcbiAgICAgICAgICBjb3VudGVyOiA3LFxuICAgICAgICAgIHBheWxvYWQ6ICdmb3VydGggZmlsdGVyJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgICAgICB0ZXh0OiAnbGFzdCBmaWx0ZXInLFxuICAgICAgICAgIGNvdW50ZXI6IDMxLFxuICAgICAgICAgIHBheWxvYWQ6ICdsYXN0IGZpbHRlcicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnbGluaycsXG4gICAgICAgICAgaWNvbjogJ243LWljb24tYXJjaGl2ZScsXG4gICAgICAgICAgdGV4dDogJ0ZpcnN0IGZpbHRlcicsXG4gICAgICAgICAgY291bnRlcjogMTIzMjE0MyxcbiAgICAgICAgICBwYXlsb2FkOiAnZmlyc3QgZmlsdGVyJyxcbiAgICAgICAgICBjbGFzc2VzOiAnaXMtYWN0aXZlJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgICAgICB0ZXh0OiAnc2Vjb25kIGZpbHRlcicsXG4gICAgICAgICAgY291bnRlcjogMTgsXG4gICAgICAgICAgcGF5bG9hZDogJ3NlY29uZCBmaWx0ZXInLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgICAgIHRleHQ6ICd0aGlyZCBmaWx0ZXInLFxuICAgICAgICAgIGNvdW50ZXI6IDExLFxuICAgICAgICAgIHBheWxvYWQ6ICd0aGlyZCBmaWx0ZXInLFxuICAgICAgICAgIGNsYXNzZXM6ICdpcy1hY3RpdmUnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgICAgIHRleHQ6ICdmb3VydGggZmlsdGVyJyxcbiAgICAgICAgICBjb3VudGVyOiA3LFxuICAgICAgICAgIHBheWxvYWQ6ICdmb3VydGggZmlsdGVyJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgICAgICB0ZXh0OiAnbGFzdCBmaWx0ZXInLFxuICAgICAgICAgIGNvdW50ZXI6IDMsXG4gICAgICAgICAgcGF5bG9hZDogJ2xhc3QgZmlsdGVyJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBjbGFzc2VzOiAnZmFjZXQtc2VjdGlvbi00JyxcbiAgICAgIGlucHV0czogW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICAgICAgaWQ6ICdpbnB1dC1zZWxlY3QtMScsXG4gICAgICAgICAgLy8gZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgeyB2YWx1ZTogJycsIGxhYmVsOiAnU2VsZWN0Li4uJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogMSwgbGFiZWw6ICdPcHRpb24gMScgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IDIsIGxhYmVsOiAnT3B0aW9uIDInLCBkaXNhYmxlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogMywgbGFiZWw6ICdPcHRpb24gMycsIHNlbGVjdGVkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiA0LCBsYWJlbDogJ09wdGlvbiA0JyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcGF5bG9hZDogJ3NlbGVjdCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgICAgICBpZDogJ2lucHV0LXNlbGVjdC0xJyxcbiAgICAgICAgICAvLyBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICB7IHZhbHVlOiAnJywgbGFiZWw6ICdTZWxlY3QuLi4nIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiAxLCBsYWJlbDogJ09wdGlvbiAxJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogMiwgbGFiZWw6ICdPcHRpb24gMicgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IDMsIGxhYmVsOiAnT3B0aW9uIDMnLCBzZWxlY3RlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogNCwgbGFiZWw6ICdPcHRpb24gNCcgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHBheWxvYWQ6ICdzZWxlY3QnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxufTtcbiJdfQ==