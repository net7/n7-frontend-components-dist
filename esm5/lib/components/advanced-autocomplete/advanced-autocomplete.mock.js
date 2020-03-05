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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtYXV0b2NvbXBsZXRlLm1vY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FkdmFuY2VkLWF1dG9jb21wbGV0ZS9hZHZhbmNlZC1hdXRvY29tcGxldGUubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxNQUFNLEtBQU8sMEJBQTBCLEdBQTZCO0lBQ2xFLE9BQU8sRUFBRTtRQUNQO1lBQ0UsS0FBSyxFQUFFO2dCQUNMLEtBQUssRUFBRSxPQUFPO2dCQUNkLElBQUksRUFBRSxlQUFlO2dCQUNyQixPQUFPLEVBQUUsY0FBYztnQkFDdkIsTUFBTSxFQUFFO29CQUNOLE9BQU8sRUFBRSxPQUFPO2lCQUNqQjthQUNGO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLEVBQUUsS0FBSyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFO2dCQUNyRixFQUFFLEtBQUssRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQ3hFLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLHFCQUFxQixFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQ3ZHO29CQUNFLEtBQUssRUFBRSxpQkFBaUI7b0JBQ3hCLFFBQVEsRUFBRSxDQUFDOzRCQUNULEdBQUcsRUFBRSxTQUFTOzRCQUNkLEtBQUssRUFBRSxPQUFPO3lCQUNmLENBQUM7b0JBQ0YsTUFBTSxFQUFFO3dCQUNOLE9BQU8sRUFBRSxNQUFNO3FCQUNoQjtpQkFDRjtnQkFDRDtvQkFDRSxLQUFLLEVBQUUsaUJBQWlCO29CQUN4QixRQUFRLEVBQUUsQ0FBQzs0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RTtnQkFDTixPQUFPLEVBQUUsV0FBVzthQUNyQjtTQUNGO0tBQ0Y7SUFDRCxRQUFRLEVBQUUsc0ZBQXNGO0NBQ2pHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWR2YW5jZWRBdXRvY29tcGxldGVEYXRhIH0gZnJvbSAnLi9hZHZhbmNlZC1hdXRvY29tcGxldGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFEVkFOQ0VEX0FVVE9DT01QTEVURV9NT0NLOiBBZHZhbmNlZEF1dG9jb21wbGV0ZURhdGEgPSB7XHJcbiAgcmVzdWx0czogW1xyXG4gICAge1xyXG4gICAgICBncm91cDoge1xyXG4gICAgICAgIHRpdGxlOiAnQm9va3MnLFxyXG4gICAgICAgIGljb246ICduNy1pY29uLWZpbGUzJyxcclxuICAgICAgICBjbGFzc2VzOiAnY29sb3ItcGVvcGxlJyxcclxuICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgIHBheWxvYWQ6ICdib29rcycsXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBpdGVtczogW1xyXG4gICAgICAgIHsgdGl0bGU6ICdMYWJlbCByaXN1bHRhdG8gY29uIHVybCcsIGFuY2hvcjogeyBocmVmOiAnL2V4YW1wbGVzJywgdGFyZ2V0OiAnX2JsYW5rJyB9IH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ0xhYmVsIHJpc3VsdGF0byBzZW56YSBtZXRhZGF0bycsIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzMScgfSB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICdMYWJlbCByaXN1bHRhdG8nLCBtZXRhZGF0YTogW3sgdmFsdWU6ICdNZXRhZGF0byBhZ2dpdW50aXZvJyB9XSwgYW5jaG9yOiB7IHBheWxvYWQ6ICdyZXMyJyB9IH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6ICdMYWJlbCByaXN1bHRhdG8nLFxyXG4gICAgICAgICAgbWV0YWRhdGE6IFt7XHJcbiAgICAgICAgICAgIGtleTogJ21ldGFrZXknLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ3ZhbHVlJ1xyXG4gICAgICAgICAgfV0sXHJcbiAgICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgICAgcGF5bG9hZDogJ3JlczInXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogJ0xhYmVsIHJpc3VsdGF0bycsXHJcbiAgICAgICAgICBtZXRhZGF0YTogW3tcclxuICAgICAgICAgICAga2V5OiAnbWV0YWtleScsXHJcbiAgICAgICAgICAgIHZhbHVlOiAndmFsdWUnXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGtleTogJ21ldGFrZXkyJyxcclxuICAgICAgICAgICAgdmFsdWU6ICd2YWx1ZTInXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGtleTogJ21ldGFrZXkzJyxcclxuICAgICAgICAgICAgdmFsdWU6ICd2YWx1ZTMnXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGtleTogJ21ldGFrZXk0JyxcclxuICAgICAgICAgICAgdmFsdWU6ICd2YWx1ZTQnXHJcbiAgICAgICAgICB9XSxcclxuICAgICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgICBwYXlsb2FkOiAncmVzMydcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiAnTGFiZWwgcmlzdWx0YXRvJyxcclxuICAgICAgICAgIG1ldGFkYXRhOiBbe1xyXG4gICAgICAgICAgICBrZXk6ICdvbmx5IG1ldGFrZXknLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ29ubHkgbWV0YXZhbHVlJ1xyXG4gICAgICAgICAgfV0sXHJcbiAgICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgICAgcGF5bG9hZDogJ3JlczQnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IHRpdGxlOiAnTGFiZWwgcmlzdWx0YXRvJywgYW5jaG9yOiB7IHBheWxvYWQ6ICdyZXM1JyB9IH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBncm91cDoge1xyXG4gICAgICAgIHRpdGxlOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yJyxcclxuICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgIHBheWxvYWQ6ICdtb3ZpZXMnLFxyXG4gICAgICAgICAgaHJlZjogJy9leGFtcGxlcydcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgeyB0aXRsZTogJ0xhYmVsIHJpc3VsdGF0bycsIG1ldGFkYXRhOiBbeyB2YWx1ZTogJ01ldGFkYXRvIGFnZ2l1bnRpdm8nIH1dLCBhbmNob3I6IHsgcGF5bG9hZDogJ3JlczYnIH0gfSxcclxuICAgICAgICB7IHRpdGxlOiAnTGFiZWwgcmlzdWx0YXRvJywgbWV0YWRhdGE6IFt7IHZhbHVlOiAnTWV0YWRhdG8gYWdnaXVudGl2bycgfV0sIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzNycgfSB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICdMYWJlbCByaXN1bHRhdG8nLCBtZXRhZGF0YTogW3sgdmFsdWU6ICdNZXRhZGF0byBhZ2dpdW50aXZvJyB9XSwgYW5jaG9yOiB7IHBheWxvYWQ6ICdyZXM4JyB9IH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ0xhYmVsIHJpc3VsdGF0bycsIG1ldGFkYXRhOiBbeyB2YWx1ZTogJ01ldGFkYXRvIGFnZ2l1bnRpdm8nIH1dLCBhbmNob3I6IHsgcGF5bG9hZDogJ3JlczknIH0gfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgeyBtZXRhZGF0YTogW3sgdmFsdWU6ICdNZXRhZGF0byBlc3Rlcm5vJyB9XSwgYW5jaG9yOiB7IHBheWxvYWQ6ICdyZXMxMCcgfSB9LFxyXG4gICAgICAgIHsgbWV0YWRhdGE6IFt7IHZhbHVlOiAnTWV0YWRhdG8gZXN0ZXJubycgfV0sIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzMTEnIH0gfSxcclxuICAgICAgICB7IG1ldGFkYXRhOiBbeyB2YWx1ZTogJ01ldGFkYXRvIGVzdGVybm8nIH1dLCBhbmNob3I6IHsgcGF5bG9hZDogJ3JlczEyJyB9IH0sXHJcbiAgICAgICAgeyBtZXRhZGF0YTogW3sgdmFsdWU6ICdNZXRhZGF0byBlc3Rlcm5vJyB9XSwgYW5jaG9yOiB7IHBheWxvYWQ6ICdyZXMxMycgfSB9LFxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgXSxcclxuICBhY3Rpb25zOiB7XHJcbiAgICBhZHZhbmNlZDoge1xyXG4gICAgICB0ZXh0OiAnUmljZXJjYSBBdmFuemF0YScsXHJcbiAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgIHBheWxvYWQ6ICdhZHZhbmNlZC1zZWFyY2gnLFxyXG4gICAgICAgIGhyZWY6ICdodHRwczovL2dvb2dsZS5pdCcsXHJcbiAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2hvd01vcmU6IHtcclxuICAgICAgdGV4dDogJ1Zpc3VhbGl6emEgdHV0dGkgaSA5OCByaXN1bHRhdGkgcGVyIFwiYW5nXCInLFxyXG4gICAgICBhbmNob3I6IHtcclxuICAgICAgICBwYXlsb2FkOiAnc2hvdy1tb3JlJyxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZmFsbGJhY2s6ICdTcGlhY2VudGksIG5vbiDDqCBzdGF0byB0cm92YXRvIG5lc3N1biByaXN1bHRhdG8uIDxicj4gUmlwcm92YSBjb24gdW5hIG51b3ZhIHJpY2VyY2EuJ1xyXG59O1xyXG4iXX0=