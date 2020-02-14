/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtYXV0b2NvbXBsZXRlLm1vY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FkdmFuY2VkLWF1dG9jb21wbGV0ZS9hZHZhbmNlZC1hdXRvY29tcGxldGUubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE1BQU0sS0FBTywwQkFBMEIsR0FBOEI7SUFDbkUsT0FBTyxFQUFFO1FBQ1A7WUFDRSxLQUFLLEVBQUU7Z0JBQ0wsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCLE9BQU8sRUFBRSxjQUFjO2dCQUN2QixNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFLE9BQU87aUJBQ2pCO2FBQ0Y7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsRUFBQyxLQUFLLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUM7Z0JBQ25GLEVBQUMsS0FBSyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBQztnQkFDdEUsRUFBQyxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBQztnQkFDckc7b0JBQ0UsS0FBSyxFQUFFLGlCQUFpQjtvQkFDeEIsUUFBUSxFQUFFLENBQUM7NEJBQ1QsR0FBRyxFQUFFLFNBQVM7NEJBQ2QsS0FBSyxFQUFFLE9BQU87eUJBQ2YsQ0FBQztvQkFDRixNQUFNLEVBQUU7d0JBQ04sT0FBTyxFQUFFLE1BQU07cUJBQ2hCO2lCQUNGO2dCQUNEO29CQUNFLEtBQUssRUFBRSxpQkFBaUI7b0JBQ3hCLFFBQVEsRUFBRSxDQUFDOzRC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O2dCQUNOLE9BQU8sRUFBRSxXQUFXO2FBQ3JCO1NBQ0Y7S0FDRjtJQUNELFFBQVEsRUFBRSxzRkFBc0Y7Q0FDakciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQWR2YW5jZWRBdXRvY29tcGxldGVEYXRhIH0gZnJvbSAnLi9hZHZhbmNlZC1hdXRvY29tcGxldGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFEVkFOQ0VEX0FVVE9DT01QTEVURV9NT0NLOiBJQWR2YW5jZWRBdXRvY29tcGxldGVEYXRhID0ge1xyXG4gIHJlc3VsdHM6IFtcclxuICAgIHtcclxuICAgICAgZ3JvdXA6IHtcclxuICAgICAgICB0aXRsZTogJ0Jvb2tzJyxcclxuICAgICAgICBpY29uOiAnbjctaWNvbi1maWxlMycsXHJcbiAgICAgICAgY2xhc3NlczogJ2NvbG9yLXBlb3BsZScsXHJcbiAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICBwYXlsb2FkOiAnYm9va3MnLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgaXRlbXM6IFtcclxuICAgICAgICB7dGl0bGU6ICdMYWJlbCByaXN1bHRhdG8gY29uIHVybCcsIGFuY2hvcjogeyBocmVmOiAnL2V4YW1wbGVzJywgdGFyZ2V0OiAnX2JsYW5rJyB9fSxcclxuICAgICAgICB7dGl0bGU6ICdMYWJlbCByaXN1bHRhdG8gc2VuemEgbWV0YWRhdG8nLCBhbmNob3I6IHsgcGF5bG9hZDogJ3JlczEnIH19LFxyXG4gICAgICAgIHt0aXRsZTogJ0xhYmVsIHJpc3VsdGF0bycsIG1ldGFkYXRhOiBbeyB2YWx1ZTogJ01ldGFkYXRvIGFnZ2l1bnRpdm8nIH1dLCBhbmNob3I6IHsgcGF5bG9hZDogJ3JlczInIH19LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiAnTGFiZWwgcmlzdWx0YXRvJyxcclxuICAgICAgICAgIG1ldGFkYXRhOiBbe1xyXG4gICAgICAgICAgICBrZXk6ICdtZXRha2V5JyxcclxuICAgICAgICAgICAgdmFsdWU6ICd2YWx1ZSdcclxuICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICAgIHBheWxvYWQ6ICdyZXMyJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6ICdMYWJlbCByaXN1bHRhdG8nLFxyXG4gICAgICAgICAgbWV0YWRhdGE6IFt7XHJcbiAgICAgICAgICAgIGtleTogJ21ldGFrZXknLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ3ZhbHVlJ1xyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBrZXk6ICdtZXRha2V5MicsXHJcbiAgICAgICAgICAgIHZhbHVlOiAndmFsdWUyJ1xyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBrZXk6ICdtZXRha2V5MycsXHJcbiAgICAgICAgICAgIHZhbHVlOiAndmFsdWUzJ1xyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBrZXk6ICdtZXRha2V5NCcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAndmFsdWU0J1xyXG4gICAgICAgICAgfV0sXHJcbiAgICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgICAgcGF5bG9hZDogJ3JlczMnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogJ0xhYmVsIHJpc3VsdGF0bycsXHJcbiAgICAgICAgICBtZXRhZGF0YTogW3tcclxuICAgICAgICAgICAga2V5OiAnb25seSBtZXRha2V5JyxcclxuICAgICAgICAgICAgdmFsdWU6ICdvbmx5IG1ldGF2YWx1ZSdcclxuICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICAgIHBheWxvYWQ6ICdyZXM0J1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge3RpdGxlOiAnTGFiZWwgcmlzdWx0YXRvJywgYW5jaG9yOiB7IHBheWxvYWQ6ICdyZXM1JyB9fSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGdyb3VwOiB7XHJcbiAgICAgICAgdGl0bGU6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3InLFxyXG4gICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgcGF5bG9hZDogJ21vdmllcycsXHJcbiAgICAgICAgICBocmVmOiAnL2V4YW1wbGVzJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgaXRlbXM6IFtcclxuICAgICAgICB7dGl0bGU6ICdMYWJlbCByaXN1bHRhdG8nLCBtZXRhZGF0YTogW3sgdmFsdWU6ICdNZXRhZGF0byBhZ2dpdW50aXZvJyB9XSwgYW5jaG9yOiB7IHBheWxvYWQ6ICdyZXM2JyB9fSxcclxuICAgICAgICB7dGl0bGU6ICdMYWJlbCByaXN1bHRhdG8nLCBtZXRhZGF0YTogW3sgdmFsdWU6ICdNZXRhZGF0byBhZ2dpdW50aXZvJyB9XSwgYW5jaG9yOiB7IHBheWxvYWQ6ICdyZXM3JyB9fSxcclxuICAgICAgICB7dGl0bGU6ICdMYWJlbCByaXN1bHRhdG8nLCBtZXRhZGF0YTogW3sgdmFsdWU6ICdNZXRhZGF0byBhZ2dpdW50aXZvJyB9XSwgYW5jaG9yOiB7IHBheWxvYWQ6ICdyZXM4JyB9fSxcclxuICAgICAgICB7dGl0bGU6ICdMYWJlbCByaXN1bHRhdG8nLCBtZXRhZGF0YTogW3sgdmFsdWU6ICdNZXRhZGF0byBhZ2dpdW50aXZvJyB9XSwgYW5jaG9yOiB7IHBheWxvYWQ6ICdyZXM5JyB9fSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgeyBtZXRhZGF0YTogW3sgdmFsdWU6ICdNZXRhZGF0byBlc3Rlcm5vJyB9XSwgYW5jaG9yOiB7IHBheWxvYWQ6ICdyZXMxMCcgfX0sXHJcbiAgICAgICAgeyBtZXRhZGF0YTogW3sgdmFsdWU6ICdNZXRhZGF0byBlc3Rlcm5vJyB9XSwgYW5jaG9yOiB7IHBheWxvYWQ6ICdyZXMxMScgfX0sXHJcbiAgICAgICAgeyBtZXRhZGF0YTogW3sgdmFsdWU6ICdNZXRhZGF0byBlc3Rlcm5vJyB9XSwgYW5jaG9yOiB7IHBheWxvYWQ6ICdyZXMxMicgfX0sXHJcbiAgICAgICAgeyBtZXRhZGF0YTogW3sgdmFsdWU6ICdNZXRhZGF0byBlc3Rlcm5vJyB9XSwgYW5jaG9yOiB7IHBheWxvYWQ6ICdyZXMxMycgfX0sXHJcbiAgICAgIF1cclxuICAgIH1cclxuICBdLFxyXG4gIGFjdGlvbnM6IHtcclxuICAgIGFkdmFuY2VkOiB7XHJcbiAgICAgIHRleHQ6ICdSaWNlcmNhIEF2YW56YXRhJyxcclxuICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgcGF5bG9hZDogJ2FkdmFuY2VkLXNlYXJjaCcsXHJcbiAgICAgICAgaHJlZjogJ2h0dHBzOi8vZ29vZ2xlLml0JyxcclxuICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaG93TW9yZToge1xyXG4gICAgICB0ZXh0OiAnVmlzdWFsaXp6YSB0dXR0aSBpIDk4IHJpc3VsdGF0aSBwZXIgXCJhbmdcIicsXHJcbiAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgIHBheWxvYWQ6ICdzaG93LW1vcmUnLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBmYWxsYmFjazogJ1NwaWFjZW50aSwgbm9uIMOoIHN0YXRvIHRyb3ZhdG8gbmVzc3VuIHJpc3VsdGF0by4gPGJyPiBSaXByb3ZhIGNvbiB1bmEgbnVvdmEgcmljZXJjYS4nXHJcbn07XHJcbiJdfQ==