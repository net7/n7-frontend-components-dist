/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/advanced-autocomplete/advanced-autocomplete.mock.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var ADVANCED_AUTOCOMPLETE_MOCK = {
    results: [
        {
            group: {
                title: 'Books',
                icon: 'n7-icon-file3',
                classes: 'color-people',
                payload: 'books',
            },
            items: [
                { label: 'Label risultato senza metadato', payload: 'res1' },
                { label: 'Label risultato', value: ['Metadato aggiuntivo'], payload: 'res2' },
                {
                    label: 'Label risultato',
                    value: [
                        { key: "metakey", value: "value" }
                    ],
                    payload: 'res2'
                },
                { label: 'Label risultato',
                    value: [
                        { key: "metakey", value: "value" },
                        { key: "metakey2", value: "value2" },
                        { key: "metakey2", value: "value2" }
                    ],
                    payload: 'res3' },
                { label: 'Label risultato',
                    value: [
                        { key: "only metakey" },
                        { key: "only metakey" }
                    ],
                    payload: 'res4' },
                { label: 'Label risultato', value: ['Metadato aggiuntivo'], payload: 'res5' },
            ],
        },
        {
            group: {
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                payload: 'movies',
            },
            items: [
                { label: 'Label risultato', value: ['Metadato aggiuntivo'], payload: 'res6' },
                { label: 'Label risultato', value: ['Metadato aggiuntivo'], payload: 'res7' },
                { label: 'Label risultato', value: ['Metadato aggiuntivo'], payload: 'res8' },
                { label: 'Label risultato', value: ['Metadato aggiuntivo'], payload: 'res9' },
            ],
        },
        {
            items: [
                { label: 'Label risultato', value: ['Metadato esterno'], payload: 'res10' },
                { label: 'Label risultato', value: ['Metadato esterno'], payload: 'res11' },
                { label: 'Label risultato', value: ['Metadato esterno'], payload: 'res12' },
                { label: 'Label risultato', value: ['Metadato esterno'], payload: 'res13' },
            ]
        }
    ],
    actions: {
        advanced: {
            text: 'Ricerca Avanzata',
            payload: 'advanced-search',
        },
        showMore: {
            text: 'Visualizza tutti i 98 risultati per "ang"',
            payload: 'show-more',
        }
    },
    fallback: 'Spiacenti, non è stato trovato nessun risultato. <br> Riprova con una nuova ricerca.'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtYXV0b2NvbXBsZXRlLm1vY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FkdmFuY2VkLWF1dG9jb21wbGV0ZS9hZHZhbmNlZC1hdXRvY29tcGxldGUubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxNQUFNLEtBQU8sMEJBQTBCLEdBQThCO0lBQ25FLE9BQU8sRUFBRTtRQUNQO1lBQ0UsS0FBSyxFQUFFO2dCQUNMLEtBQUssRUFBRSxPQUFPO2dCQUNkLElBQUksRUFBRSxlQUFlO2dCQUNyQixPQUFPLEVBQUUsY0FBYztnQkFDdkIsT0FBTyxFQUFFLE9BQU87YUFDakI7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsRUFBQyxLQUFLLEVBQUUsZ0NBQWdDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBQztnQkFDMUQsRUFBQyxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMscUJBQXFCLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFDO2dCQUMzRTtvQkFDRSxLQUFLLEVBQUUsaUJBQWlCO29CQUN4QixLQUFLLEVBQUU7d0JBQ0wsRUFBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUM7cUJBQ2pDO29CQUNELE9BQU8sRUFBRSxNQUFNO2lCQUNoQjtnQkFDRCxFQUFDLEtBQUssRUFBRSxpQkFBaUI7b0JBQ3pCLEtBQUssRUFBRTt3QkFDTCxFQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBQzt3QkFDaEMsRUFBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUM7d0JBQ2xDLEVBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDO3FCQUNuQztvQkFDRCxPQUFPLEVBQUUsTUFBTSxFQUFDO2dCQUNoQixFQUFDLEtBQUssRUFBRSxpQkFBaUI7b0JBQ3pCLEtBQUssRUFBRTt3QkFDTCxFQUFDLEdBQUcsRUFBRSxjQUFjLEVBQUM7d0JBQ3JCLEVBQUMsR0FBRyxFQUFFLGNBQWMsRUFBQztxQkFDdEI7b0JBQ0QsT0FBTyxFQUFFLE1BQU0sRUFBQztnQkFDaEIsRUFBQyxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMscUJBQXFCLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFDO2FBQzVFO1NBQ0Y7UUFDRDtZQUNFLEtBQUssRUFBRTtnQkFDTCxLQUFLLEVBQUUsZ0ZBQWdGO2dCQUN2RixPQUFPLEVBQUUsUUFBUTthQUNsQjtZQUNELEtBQUssRUFBRTtnQkFDTCxFQUFDLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUM7Z0JBQzNFLEVBQUMsS0FBSyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBQztnQkFDM0UsRUFBQyxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMscUJBQXFCLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFDO2dCQUMzRSxFQUFDLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUM7YUFDNUU7U0FDRjtRQUNEO1lBQ0UsS0FBSyxFQUFFO2dCQUNMLEVBQUMsS0FBSyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQztnQkFDekUsRUFBQyxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDO2dCQUN6RSxFQUFDLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUM7Z0JBQ3pFLEVBQUMsS0FBSyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQzthQUMxRTtTQUNGO0tBQ0Y7SUFDRCxPQUFPLEVBQUU7UUFDUCxRQUFRLEVBQUU7WUFDUixJQUFJLEVBQUUsa0JBQWtCO1lBQ3hCLE9BQU8sRUFBRSxpQkFBaUI7U0FDM0I7UUFDRCxRQUFRLEVBQUU7WUFDUixJQUFJLEVBQUUsMkNBQTJDO1lBQ2pELE9BQU8sRUFBRSxXQUFXO1NBQ3JCO0tBQ0Y7SUFDRCxRQUFRLEVBQUUsc0ZBQXNGO0NBQ2pHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFkdmFuY2VkQXV0b2NvbXBsZXRlRGF0YSB9IGZyb20gJy4vYWR2YW5jZWQtYXV0b2NvbXBsZXRlJztcblxuZXhwb3J0IGNvbnN0IEFEVkFOQ0VEX0FVVE9DT01QTEVURV9NT0NLOiBJQWR2YW5jZWRBdXRvY29tcGxldGVEYXRhID0ge1xuICByZXN1bHRzOiBbXG4gICAge1xuICAgICAgZ3JvdXA6IHtcbiAgICAgICAgdGl0bGU6ICdCb29rcycsXG4gICAgICAgIGljb246ICduNy1pY29uLWZpbGUzJyxcbiAgICAgICAgY2xhc3NlczogJ2NvbG9yLXBlb3BsZScsXG4gICAgICAgIHBheWxvYWQ6ICdib29rcycsXG4gICAgICB9LFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge2xhYmVsOiAnTGFiZWwgcmlzdWx0YXRvIHNlbnphIG1ldGFkYXRvJywgcGF5bG9hZDogJ3JlczEnfSxcbiAgICAgICAge2xhYmVsOiAnTGFiZWwgcmlzdWx0YXRvJywgdmFsdWU6IFsnTWV0YWRhdG8gYWdnaXVudGl2byddLCBwYXlsb2FkOiAncmVzMid9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdMYWJlbCByaXN1bHRhdG8nLFxuICAgICAgICAgIHZhbHVlOiBbXG4gICAgICAgICAgICB7a2V5OiBcIm1ldGFrZXlcIiwgdmFsdWU6IFwidmFsdWVcIn1cbiAgICAgICAgICBdLFxuICAgICAgICAgIHBheWxvYWQ6ICdyZXMyJ1xuICAgICAgICB9LFxuICAgICAgICB7bGFiZWw6ICdMYWJlbCByaXN1bHRhdG8nLFxuICAgICAgICB2YWx1ZTogW1xuICAgICAgICAgIHtrZXk6IFwibWV0YWtleVwiLCB2YWx1ZTogXCJ2YWx1ZVwifSxcbiAgICAgICAgICB7a2V5OiBcIm1ldGFrZXkyXCIsIHZhbHVlOiBcInZhbHVlMlwifSxcbiAgICAgICAgICB7a2V5OiBcIm1ldGFrZXkyXCIsIHZhbHVlOiBcInZhbHVlMlwifVxuICAgICAgICBdLFxuICAgICAgICBwYXlsb2FkOiAncmVzMyd9LFxuICAgICAgICB7bGFiZWw6ICdMYWJlbCByaXN1bHRhdG8nLFxuICAgICAgICB2YWx1ZTogW1xuICAgICAgICAgIHtrZXk6IFwib25seSBtZXRha2V5XCJ9LFxuICAgICAgICAgIHtrZXk6IFwib25seSBtZXRha2V5XCJ9XG4gICAgICAgIF0sXG4gICAgICAgIHBheWxvYWQ6ICdyZXM0J30sXG4gICAgICAgIHtsYWJlbDogJ0xhYmVsIHJpc3VsdGF0bycsIHZhbHVlOiBbJ01ldGFkYXRvIGFnZ2l1bnRpdm8nXSwgcGF5bG9hZDogJ3JlczUnfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBncm91cDoge1xuICAgICAgICB0aXRsZTogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvcicsXG4gICAgICAgIHBheWxvYWQ6ICdtb3ZpZXMnLFxuICAgICAgfSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtsYWJlbDogJ0xhYmVsIHJpc3VsdGF0bycsIHZhbHVlOiBbJ01ldGFkYXRvIGFnZ2l1bnRpdm8nXSwgcGF5bG9hZDogJ3JlczYnfSxcbiAgICAgICAge2xhYmVsOiAnTGFiZWwgcmlzdWx0YXRvJywgdmFsdWU6IFsnTWV0YWRhdG8gYWdnaXVudGl2byddLCBwYXlsb2FkOiAncmVzNyd9LFxuICAgICAgICB7bGFiZWw6ICdMYWJlbCByaXN1bHRhdG8nLCB2YWx1ZTogWydNZXRhZGF0byBhZ2dpdW50aXZvJ10sIHBheWxvYWQ6ICdyZXM4J30sXG4gICAgICAgIHtsYWJlbDogJ0xhYmVsIHJpc3VsdGF0bycsIHZhbHVlOiBbJ01ldGFkYXRvIGFnZ2l1bnRpdm8nXSwgcGF5bG9hZDogJ3JlczknfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBpdGVtczogW1xuICAgICAgICB7bGFiZWw6ICdMYWJlbCByaXN1bHRhdG8nLCB2YWx1ZTogWydNZXRhZGF0byBlc3Rlcm5vJ10sIHBheWxvYWQ6ICdyZXMxMCd9LFxuICAgICAgICB7bGFiZWw6ICdMYWJlbCByaXN1bHRhdG8nLCB2YWx1ZTogWydNZXRhZGF0byBlc3Rlcm5vJ10sIHBheWxvYWQ6ICdyZXMxMSd9LFxuICAgICAgICB7bGFiZWw6ICdMYWJlbCByaXN1bHRhdG8nLCB2YWx1ZTogWydNZXRhZGF0byBlc3Rlcm5vJ10sIHBheWxvYWQ6ICdyZXMxMid9LFxuICAgICAgICB7bGFiZWw6ICdMYWJlbCByaXN1bHRhdG8nLCB2YWx1ZTogWydNZXRhZGF0byBlc3Rlcm5vJ10sIHBheWxvYWQ6ICdyZXMxMyd9LFxuICAgICAgXVxuICAgIH1cbiAgXSxcbiAgYWN0aW9uczoge1xuICAgIGFkdmFuY2VkOiB7XG4gICAgICB0ZXh0OiAnUmljZXJjYSBBdmFuemF0YScsXG4gICAgICBwYXlsb2FkOiAnYWR2YW5jZWQtc2VhcmNoJyxcbiAgICB9LFxuICAgIHNob3dNb3JlOiB7XG4gICAgICB0ZXh0OiAnVmlzdWFsaXp6YSB0dXR0aSBpIDk4IHJpc3VsdGF0aSBwZXIgXCJhbmdcIicsXG4gICAgICBwYXlsb2FkOiAnc2hvdy1tb3JlJyxcbiAgICB9XG4gIH0sXG4gIGZhbGxiYWNrOiAnU3BpYWNlbnRpLCBub24gw6ggc3RhdG8gdHJvdmF0byBuZXNzdW4gcmlzdWx0YXRvLiA8YnI+IFJpcHJvdmEgY29uIHVuYSBudW92YSByaWNlcmNhLidcbn0iXX0=