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
                anchor: {
                    payload: 'books',
                }
            },
            items: [
                { title: 'Label risultato con url', anchor: { href: '/examples', target: '_blank' } },
                { title: 'Label risultato senza metadato', anchor: { payload: 'res1' } },
                { title: 'Label risultato', metadata: [{ value: 'Metadato aggiuntivo' }], anchor: { payload: 'res2' } },
                {
                    title: 'Label risultato',
                    metadata: [{
                            key: 'metakey',
                            value: 'value'
                        }],
                    anchor: {
                        payload: 'res2'
                    }
                },
                {
                    title: 'Label risultato',
                    metadata: [{
                            key: 'metakey',
                            value: 'value'
                        }, {
                            key: 'metakey2',
                            value: 'value2'
                        }, {
                            key: 'metakey3',
                            value: 'value3'
                        }, {
                            key: 'metakey4',
                            value: 'value4'
                        }],
                    anchor: {
                        payload: 'res3'
                    }
                },
                {
                    title: 'Label risultato',
                    metadata: [{
                            key: 'only metakey',
                            value: 'only metavalue'
                        }],
                    anchor: {
                        payload: 'res4'
                    }
                },
                { title: 'Label risultato', anchor: { payload: 'res5' } },
            ],
        },
        {
            group: {
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                anchor: {
                    payload: 'movies',
                    href: '/examples'
                }
            },
            items: [
                { title: 'Label risultato', metadata: [{ value: 'Metadato aggiuntivo' }], anchor: { payload: 'res6' } },
                { title: 'Label risultato', metadata: [{ value: 'Metadato aggiuntivo' }], anchor: { payload: 'res7' } },
                { title: 'Label risultato', metadata: [{ value: 'Metadato aggiuntivo' }], anchor: { payload: 'res8' } },
                { title: 'Label risultato', metadata: [{ value: 'Metadato aggiuntivo' }], anchor: { payload: 'res9' } },
            ],
        },
        {
            items: [
                { metadata: [{ value: 'Metadato esterno' }], anchor: { payload: 'res10' } },
                { metadata: [{ value: 'Metadato esterno' }], anchor: { payload: 'res11' } },
                { metadata: [{ value: 'Metadato esterno' }], anchor: { payload: 'res12' } },
                { metadata: [{ value: 'Metadato esterno' }], anchor: { payload: 'res13' } },
            ]
        }
    ],
    actions: {
        advanced: {
            text: 'Ricerca Avanzata',
            anchor: {
                payload: 'advanced-search',
                href: 'https://google.it',
                target: '_blank'
            }
        },
        showMore: {
            text: 'Visualizza tutti i 98 risultati per "ang"',
            anchor: {
                payload: 'show-more',
            }
        }
    },
    fallback: 'Spiacenti, non è stato trovato nessun risultato. <br> Riprova con una nuova ricerca.'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtYXV0b2NvbXBsZXRlLm1vY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FkdmFuY2VkLWF1dG9jb21wbGV0ZS9hZHZhbmNlZC1hdXRvY29tcGxldGUubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxNQUFNLEtBQU8sMEJBQTBCLEdBQThCO0lBQ25FLE9BQU8sRUFBRTtRQUNQO1lBQ0UsS0FBSyxFQUFFO2dCQUNMLEtBQUssRUFBRSxPQUFPO2dCQUNkLElBQUksRUFBRSxlQUFlO2dCQUNyQixPQUFPLEVBQUUsY0FBYztnQkFDdkIsTUFBTSxFQUFFO29CQUNOLE9BQU8sRUFBRSxPQUFPO2lCQUNqQjthQUNGO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLEVBQUMsS0FBSyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFDO2dCQUNuRixFQUFDLEtBQUssRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUM7Z0JBQ3RFLEVBQUMsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLHFCQUFxQixFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUM7Z0JBQ3JHO29CQUNFLEtBQUssRUFBRSxpQkFBaUI7b0JBQ3hCLFFBQVEsRUFBRSxDQUFDOzRCQUNULEdBQUcsRUFBRSxTQUFTOzRCQUNkLEtBQUssRUFBRSxPQUFPO3lCQUNmLENBQUM7b0JBQ0YsTUFBTSxFQUFFO3dCQUNOLE9BQU8sRUFBRSxNQUFNO3FCQUNoQjtpQkFDRjtnQkFDRDtvQkFDRSxLQUFLLEVBQUUsaUJBQWlCO29CQUN4QixRQUFRLEVBQUUsQ0FBQzs0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RTtnQkFDTixPQUFPLEVBQUUsV0FBVzthQUNyQjtTQUNGO0tBQ0Y7SUFDRCxRQUFRLEVBQUUsc0ZBQXNGO0NBQ2pHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFkdmFuY2VkQXV0b2NvbXBsZXRlRGF0YSB9IGZyb20gJy4vYWR2YW5jZWQtYXV0b2NvbXBsZXRlJztcblxuZXhwb3J0IGNvbnN0IEFEVkFOQ0VEX0FVVE9DT01QTEVURV9NT0NLOiBJQWR2YW5jZWRBdXRvY29tcGxldGVEYXRhID0ge1xuICByZXN1bHRzOiBbXG4gICAge1xuICAgICAgZ3JvdXA6IHtcbiAgICAgICAgdGl0bGU6ICdCb29rcycsXG4gICAgICAgIGljb246ICduNy1pY29uLWZpbGUzJyxcbiAgICAgICAgY2xhc3NlczogJ2NvbG9yLXBlb3BsZScsXG4gICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgIHBheWxvYWQ6ICdib29rcycsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBpdGVtczogW1xuICAgICAgICB7dGl0bGU6ICdMYWJlbCByaXN1bHRhdG8gY29uIHVybCcsIGFuY2hvcjogeyBocmVmOiAnL2V4YW1wbGVzJywgdGFyZ2V0OiAnX2JsYW5rJyB9fSxcbiAgICAgICAge3RpdGxlOiAnTGFiZWwgcmlzdWx0YXRvIHNlbnphIG1ldGFkYXRvJywgYW5jaG9yOiB7IHBheWxvYWQ6ICdyZXMxJyB9fSxcbiAgICAgICAge3RpdGxlOiAnTGFiZWwgcmlzdWx0YXRvJywgbWV0YWRhdGE6IFt7IHZhbHVlOiAnTWV0YWRhdG8gYWdnaXVudGl2bycgfV0sIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzMicgfX0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ0xhYmVsIHJpc3VsdGF0bycsXG4gICAgICAgICAgbWV0YWRhdGE6IFt7XG4gICAgICAgICAgICBrZXk6ICdtZXRha2V5JyxcbiAgICAgICAgICAgIHZhbHVlOiAndmFsdWUnXG4gICAgICAgICAgfV0sXG4gICAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgICBwYXlsb2FkOiAncmVzMidcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ0xhYmVsIHJpc3VsdGF0bycsXG4gICAgICAgICAgbWV0YWRhdGE6IFt7XG4gICAgICAgICAgICBrZXk6ICdtZXRha2V5JyxcbiAgICAgICAgICAgIHZhbHVlOiAndmFsdWUnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnbWV0YWtleTInLFxuICAgICAgICAgICAgdmFsdWU6ICd2YWx1ZTInXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnbWV0YWtleTMnLFxuICAgICAgICAgICAgdmFsdWU6ICd2YWx1ZTMnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnbWV0YWtleTQnLFxuICAgICAgICAgICAgdmFsdWU6ICd2YWx1ZTQnXG4gICAgICAgICAgfV0sXG4gICAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgICBwYXlsb2FkOiAncmVzMydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ0xhYmVsIHJpc3VsdGF0bycsXG4gICAgICAgICAgbWV0YWRhdGE6IFt7XG4gICAgICAgICAgICBrZXk6ICdvbmx5IG1ldGFrZXknLFxuICAgICAgICAgICAgdmFsdWU6ICdvbmx5IG1ldGF2YWx1ZSdcbiAgICAgICAgICB9XSxcbiAgICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgIHBheWxvYWQ6ICdyZXM0J1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge3RpdGxlOiAnTGFiZWwgcmlzdWx0YXRvJywgYW5jaG9yOiB7IHBheWxvYWQ6ICdyZXM1JyB9fSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBncm91cDoge1xuICAgICAgICB0aXRsZTogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvcicsXG4gICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgIHBheWxvYWQ6ICdtb3ZpZXMnLFxuICAgICAgICAgIGhyZWY6ICcvZXhhbXBsZXMnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBpdGVtczogW1xuICAgICAgICB7dGl0bGU6ICdMYWJlbCByaXN1bHRhdG8nLCBtZXRhZGF0YTogW3sgdmFsdWU6ICdNZXRhZGF0byBhZ2dpdW50aXZvJyB9XSwgYW5jaG9yOiB7IHBheWxvYWQ6ICdyZXM2JyB9fSxcbiAgICAgICAge3RpdGxlOiAnTGFiZWwgcmlzdWx0YXRvJywgbWV0YWRhdGE6IFt7IHZhbHVlOiAnTWV0YWRhdG8gYWdnaXVudGl2bycgfV0sIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzNycgfX0sXG4gICAgICAgIHt0aXRsZTogJ0xhYmVsIHJpc3VsdGF0bycsIG1ldGFkYXRhOiBbeyB2YWx1ZTogJ01ldGFkYXRvIGFnZ2l1bnRpdm8nIH1dLCBhbmNob3I6IHsgcGF5bG9hZDogJ3JlczgnIH19LFxuICAgICAgICB7dGl0bGU6ICdMYWJlbCByaXN1bHRhdG8nLCBtZXRhZGF0YTogW3sgdmFsdWU6ICdNZXRhZGF0byBhZ2dpdW50aXZvJyB9XSwgYW5jaG9yOiB7IHBheWxvYWQ6ICdyZXM5JyB9fSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBpdGVtczogW1xuICAgICAgICB7IG1ldGFkYXRhOiBbeyB2YWx1ZTogJ01ldGFkYXRvIGVzdGVybm8nIH1dLCBhbmNob3I6IHsgcGF5bG9hZDogJ3JlczEwJyB9fSxcbiAgICAgICAgeyBtZXRhZGF0YTogW3sgdmFsdWU6ICdNZXRhZGF0byBlc3Rlcm5vJyB9XSwgYW5jaG9yOiB7IHBheWxvYWQ6ICdyZXMxMScgfX0sXG4gICAgICAgIHsgbWV0YWRhdGE6IFt7IHZhbHVlOiAnTWV0YWRhdG8gZXN0ZXJubycgfV0sIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzMTInIH19LFxuICAgICAgICB7IG1ldGFkYXRhOiBbeyB2YWx1ZTogJ01ldGFkYXRvIGVzdGVybm8nIH1dLCBhbmNob3I6IHsgcGF5bG9hZDogJ3JlczEzJyB9fSxcbiAgICAgIF1cbiAgICB9XG4gIF0sXG4gIGFjdGlvbnM6IHtcbiAgICBhZHZhbmNlZDoge1xuICAgICAgdGV4dDogJ1JpY2VyY2EgQXZhbnphdGEnLFxuICAgICAgYW5jaG9yOiB7XG4gICAgICAgIHBheWxvYWQ6ICdhZHZhbmNlZC1zZWFyY2gnLFxuICAgICAgICBocmVmOiAnaHR0cHM6Ly9nb29nbGUuaXQnLFxuICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnXG4gICAgICB9XG4gICAgfSxcbiAgICBzaG93TW9yZToge1xuICAgICAgdGV4dDogJ1Zpc3VhbGl6emEgdHV0dGkgaSA5OCByaXN1bHRhdGkgcGVyIFwiYW5nXCInLFxuICAgICAgYW5jaG9yOiB7XG4gICAgICAgIHBheWxvYWQ6ICdzaG93LW1vcmUnLFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZmFsbGJhY2s6ICdTcGlhY2VudGksIG5vbiDDqCBzdGF0byB0cm92YXRvIG5lc3N1biByaXN1bHRhdG8uIDxicj4gUmlwcm92YSBjb24gdW5hIG51b3ZhIHJpY2VyY2EuJ1xufTtcbiJdfQ==