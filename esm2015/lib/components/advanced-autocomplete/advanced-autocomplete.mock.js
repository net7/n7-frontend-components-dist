/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/advanced-autocomplete/advanced-autocomplete.mock.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const ADVANCED_AUTOCOMPLETE_MOCK = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtYXV0b2NvbXBsZXRlLm1vY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FkdmFuY2VkLWF1dG9jb21wbGV0ZS9hZHZhbmNlZC1hdXRvY29tcGxldGUubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxNQUFNLE9BQU8sMEJBQTBCLEdBQThCO0lBQ25FLE9BQU8sRUFBRTtRQUNQO1lBQ0UsS0FBSyxFQUFFO2dCQUNMLEtBQUssRUFBRSxPQUFPO2dCQUNkLElBQUksRUFBRSxlQUFlO2dCQUNyQixPQUFPLEVBQUUsY0FBYztnQkFDdkIsTUFBTSxFQUFFO29CQUNOLE9BQU8sRUFBRSxPQUFPO2lCQUNqQjthQUNGO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLEVBQUMsS0FBSyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFDO2dCQUNuRixFQUFDLEtBQUssRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUM7Z0JBQ3RFLEVBQUMsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLHFCQUFxQixFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUM7Z0JBQ3JHO29CQUNFLEtBQUssRUFBRSxpQkFBaUI7b0JBQ3hCLFFBQVEsRUFBRSxDQUFDOzRCQUNULEdBQUcsRUFBRSxTQUFTOzRCQUNkLEtBQUssRUFBRSxPQUFPO3lCQUNmLENBQUM7b0JBQ0YsTUFBTSxFQUFFO3dCQUNOLE9BQU8sRUFBRSxNQUFNO3FCQUNoQjtpQkFDRjtnQkFDRDtvQkFDRSxLQUFLLEVBQUUsaUJBQWlCO29CQUN4QixRQUFRLEVBQUUsQ0FBQzs0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RTtnQkFDTixPQUFPLEVBQUUsV0FBVzthQUNyQjtTQUNGO0tBQ0Y7SUFDRCxRQUFRLEVBQUUsc0ZBQXNGO0NBQ2pHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFkdmFuY2VkQXV0b2NvbXBsZXRlRGF0YSB9IGZyb20gJy4vYWR2YW5jZWQtYXV0b2NvbXBsZXRlJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRFZBTkNFRF9BVVRPQ09NUExFVEVfTU9DSzogSUFkdmFuY2VkQXV0b2NvbXBsZXRlRGF0YSA9IHtcclxuICByZXN1bHRzOiBbXHJcbiAgICB7XHJcbiAgICAgIGdyb3VwOiB7XHJcbiAgICAgICAgdGl0bGU6ICdCb29rcycsXHJcbiAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnLFxyXG4gICAgICAgIGNsYXNzZXM6ICdjb2xvci1wZW9wbGUnLFxyXG4gICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgcGF5bG9hZDogJ2Jvb2tzJyxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAge3RpdGxlOiAnTGFiZWwgcmlzdWx0YXRvIGNvbiB1cmwnLCBhbmNob3I6IHsgaHJlZjogJy9leGFtcGxlcycsIHRhcmdldDogJ19ibGFuaycgfX0sXHJcbiAgICAgICAge3RpdGxlOiAnTGFiZWwgcmlzdWx0YXRvIHNlbnphIG1ldGFkYXRvJywgYW5jaG9yOiB7IHBheWxvYWQ6ICdyZXMxJyB9fSxcclxuICAgICAgICB7dGl0bGU6ICdMYWJlbCByaXN1bHRhdG8nLCBtZXRhZGF0YTogW3sgdmFsdWU6ICdNZXRhZGF0byBhZ2dpdW50aXZvJyB9XSwgYW5jaG9yOiB7IHBheWxvYWQ6ICdyZXMyJyB9fSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogJ0xhYmVsIHJpc3VsdGF0bycsXHJcbiAgICAgICAgICBtZXRhZGF0YTogW3tcclxuICAgICAgICAgICAga2V5OiAnbWV0YWtleScsXHJcbiAgICAgICAgICAgIHZhbHVlOiAndmFsdWUnXHJcbiAgICAgICAgICB9XSxcclxuICAgICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgICBwYXlsb2FkOiAncmVzMidcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiAnTGFiZWwgcmlzdWx0YXRvJyxcclxuICAgICAgICAgIG1ldGFkYXRhOiBbe1xyXG4gICAgICAgICAgICBrZXk6ICdtZXRha2V5JyxcclxuICAgICAgICAgICAgdmFsdWU6ICd2YWx1ZSdcclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAga2V5OiAnbWV0YWtleTInLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ3ZhbHVlMidcclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAga2V5OiAnbWV0YWtleTMnLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ3ZhbHVlMydcclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAga2V5OiAnbWV0YWtleTQnLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ3ZhbHVlNCdcclxuICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICAgIHBheWxvYWQ6ICdyZXMzJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6ICdMYWJlbCByaXN1bHRhdG8nLFxyXG4gICAgICAgICAgbWV0YWRhdGE6IFt7XHJcbiAgICAgICAgICAgIGtleTogJ29ubHkgbWV0YWtleScsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnb25seSBtZXRhdmFsdWUnXHJcbiAgICAgICAgICB9XSxcclxuICAgICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgICBwYXlsb2FkOiAncmVzNCdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHt0aXRsZTogJ0xhYmVsIHJpc3VsdGF0bycsIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzNScgfX0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBncm91cDoge1xyXG4gICAgICAgIHRpdGxlOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yJyxcclxuICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgIHBheWxvYWQ6ICdtb3ZpZXMnLFxyXG4gICAgICAgICAgaHJlZjogJy9leGFtcGxlcydcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAge3RpdGxlOiAnTGFiZWwgcmlzdWx0YXRvJywgbWV0YWRhdGE6IFt7IHZhbHVlOiAnTWV0YWRhdG8gYWdnaXVudGl2bycgfV0sIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzNicgfX0sXHJcbiAgICAgICAge3RpdGxlOiAnTGFiZWwgcmlzdWx0YXRvJywgbWV0YWRhdGE6IFt7IHZhbHVlOiAnTWV0YWRhdG8gYWdnaXVudGl2bycgfV0sIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzNycgfX0sXHJcbiAgICAgICAge3RpdGxlOiAnTGFiZWwgcmlzdWx0YXRvJywgbWV0YWRhdGE6IFt7IHZhbHVlOiAnTWV0YWRhdG8gYWdnaXVudGl2bycgfV0sIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzOCcgfX0sXHJcbiAgICAgICAge3RpdGxlOiAnTGFiZWwgcmlzdWx0YXRvJywgbWV0YWRhdGE6IFt7IHZhbHVlOiAnTWV0YWRhdG8gYWdnaXVudGl2bycgfV0sIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzOScgfX0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpdGVtczogW1xyXG4gICAgICAgIHsgbWV0YWRhdGE6IFt7IHZhbHVlOiAnTWV0YWRhdG8gZXN0ZXJubycgfV0sIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzMTAnIH19LFxyXG4gICAgICAgIHsgbWV0YWRhdGE6IFt7IHZhbHVlOiAnTWV0YWRhdG8gZXN0ZXJubycgfV0sIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzMTEnIH19LFxyXG4gICAgICAgIHsgbWV0YWRhdGE6IFt7IHZhbHVlOiAnTWV0YWRhdG8gZXN0ZXJubycgfV0sIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzMTInIH19LFxyXG4gICAgICAgIHsgbWV0YWRhdGE6IFt7IHZhbHVlOiAnTWV0YWRhdG8gZXN0ZXJubycgfV0sIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzMTMnIH19LFxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgXSxcclxuICBhY3Rpb25zOiB7XHJcbiAgICBhZHZhbmNlZDoge1xyXG4gICAgICB0ZXh0OiAnUmljZXJjYSBBdmFuemF0YScsXHJcbiAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgIHBheWxvYWQ6ICdhZHZhbmNlZC1zZWFyY2gnLFxyXG4gICAgICAgIGhyZWY6ICdodHRwczovL2dvb2dsZS5pdCcsXHJcbiAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2hvd01vcmU6IHtcclxuICAgICAgdGV4dDogJ1Zpc3VhbGl6emEgdHV0dGkgaSA5OCByaXN1bHRhdGkgcGVyIFwiYW5nXCInLFxyXG4gICAgICBhbmNob3I6IHtcclxuICAgICAgICBwYXlsb2FkOiAnc2hvdy1tb3JlJyxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZmFsbGJhY2s6ICdTcGlhY2VudGksIG5vbiDDqCBzdGF0byB0cm92YXRvIG5lc3N1biByaXN1bHRhdG8uIDxicj4gUmlwcm92YSBjb24gdW5hIG51b3ZhIHJpY2VyY2EuJ1xyXG59O1xyXG4iXX0=