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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtYXV0b2NvbXBsZXRlLm1vY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FkdmFuY2VkLWF1dG9jb21wbGV0ZS9hZHZhbmNlZC1hdXRvY29tcGxldGUubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsTUFBTSwwQkFBMEIsR0FBNkI7SUFDbEUsT0FBTyxFQUFFO1FBQ1A7WUFDRSxLQUFLLEVBQUU7Z0JBQ0wsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCLE9BQU8sRUFBRSxjQUFjO2dCQUN2QixNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFLE9BQU87aUJBQ2pCO2FBQ0Y7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsRUFBRSxLQUFLLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUU7Z0JBQ3JGLEVBQUUsS0FBSyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDeEUsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDdkc7b0JBQ0UsS0FBSyxFQUFFLGlCQUFpQjtvQkFDeEIsUUFBUSxFQUFFLENBQUM7NEJBQ1QsR0FBRyxFQUFFLFNBQVM7NEJBQ2QsS0FBSyxFQUFFLE9BQU87eUJBQ2YsQ0FBQztvQkFDRixNQUFNLEVBQUU7d0JBQ04sT0FBTyxFQUFFLE1BQU07cUJBQ2hCO2lCQUNGO2dCQUNEO29CQUNFLEtBQUssRUFBRSxpQkFBaUI7b0JBQ3hCLFFBQVEsRUFBRSxDQUFDOzRC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O2dCQUNOLE9BQU8sRUFBRSxXQUFXO2FBQ3JCO1NBQ0Y7S0FDRjtJQUNELFFBQVEsRUFBRSxzRkFBc0Y7Q0FDakcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFkdmFuY2VkQXV0b2NvbXBsZXRlRGF0YSB9IGZyb20gJy4vYWR2YW5jZWQtYXV0b2NvbXBsZXRlJztcblxuZXhwb3J0IGNvbnN0IEFEVkFOQ0VEX0FVVE9DT01QTEVURV9NT0NLOiBBZHZhbmNlZEF1dG9jb21wbGV0ZURhdGEgPSB7XG4gIHJlc3VsdHM6IFtcbiAgICB7XG4gICAgICBncm91cDoge1xuICAgICAgICB0aXRsZTogJ0Jvb2tzJyxcbiAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnLFxuICAgICAgICBjbGFzc2VzOiAnY29sb3ItcGVvcGxlJyxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgcGF5bG9hZDogJ2Jvb2tzJyxcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGl0bGU6ICdMYWJlbCByaXN1bHRhdG8gY29uIHVybCcsIGFuY2hvcjogeyBocmVmOiAnL2V4YW1wbGVzJywgdGFyZ2V0OiAnX2JsYW5rJyB9IH0sXG4gICAgICAgIHsgdGl0bGU6ICdMYWJlbCByaXN1bHRhdG8gc2VuemEgbWV0YWRhdG8nLCBhbmNob3I6IHsgcGF5bG9hZDogJ3JlczEnIH0gfSxcbiAgICAgICAgeyB0aXRsZTogJ0xhYmVsIHJpc3VsdGF0bycsIG1ldGFkYXRhOiBbeyB2YWx1ZTogJ01ldGFkYXRvIGFnZ2l1bnRpdm8nIH1dLCBhbmNob3I6IHsgcGF5bG9hZDogJ3JlczInIH0gfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnTGFiZWwgcmlzdWx0YXRvJyxcbiAgICAgICAgICBtZXRhZGF0YTogW3tcbiAgICAgICAgICAgIGtleTogJ21ldGFrZXknLFxuICAgICAgICAgICAgdmFsdWU6ICd2YWx1ZSdcbiAgICAgICAgICB9XSxcbiAgICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgIHBheWxvYWQ6ICdyZXMyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnTGFiZWwgcmlzdWx0YXRvJyxcbiAgICAgICAgICBtZXRhZGF0YTogW3tcbiAgICAgICAgICAgIGtleTogJ21ldGFrZXknLFxuICAgICAgICAgICAgdmFsdWU6ICd2YWx1ZSdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdtZXRha2V5MicsXG4gICAgICAgICAgICB2YWx1ZTogJ3ZhbHVlMidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdtZXRha2V5MycsXG4gICAgICAgICAgICB2YWx1ZTogJ3ZhbHVlMydcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdtZXRha2V5NCcsXG4gICAgICAgICAgICB2YWx1ZTogJ3ZhbHVlNCdcbiAgICAgICAgICB9XSxcbiAgICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgIHBheWxvYWQ6ICdyZXMzJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnTGFiZWwgcmlzdWx0YXRvJyxcbiAgICAgICAgICBtZXRhZGF0YTogW3tcbiAgICAgICAgICAgIGtleTogJ29ubHkgbWV0YWtleScsXG4gICAgICAgICAgICB2YWx1ZTogJ29ubHkgbWV0YXZhbHVlJ1xuICAgICAgICAgIH1dLFxuICAgICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgICAgcGF5bG9hZDogJ3JlczQnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7IHRpdGxlOiAnTGFiZWwgcmlzdWx0YXRvJywgYW5jaG9yOiB7IHBheWxvYWQ6ICdyZXM1JyB9IH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgZ3JvdXA6IHtcbiAgICAgICAgdGl0bGU6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3InLFxuICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICBwYXlsb2FkOiAnbW92aWVzJyxcbiAgICAgICAgICBocmVmOiAnL2V4YW1wbGVzJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0aXRsZTogJ0xhYmVsIHJpc3VsdGF0bycsIG1ldGFkYXRhOiBbeyB2YWx1ZTogJ01ldGFkYXRvIGFnZ2l1bnRpdm8nIH1dLCBhbmNob3I6IHsgcGF5bG9hZDogJ3JlczYnIH0gfSxcbiAgICAgICAgeyB0aXRsZTogJ0xhYmVsIHJpc3VsdGF0bycsIG1ldGFkYXRhOiBbeyB2YWx1ZTogJ01ldGFkYXRvIGFnZ2l1bnRpdm8nIH1dLCBhbmNob3I6IHsgcGF5bG9hZDogJ3JlczcnIH0gfSxcbiAgICAgICAgeyB0aXRsZTogJ0xhYmVsIHJpc3VsdGF0bycsIG1ldGFkYXRhOiBbeyB2YWx1ZTogJ01ldGFkYXRvIGFnZ2l1bnRpdm8nIH1dLCBhbmNob3I6IHsgcGF5bG9hZDogJ3JlczgnIH0gfSxcbiAgICAgICAgeyB0aXRsZTogJ0xhYmVsIHJpc3VsdGF0bycsIG1ldGFkYXRhOiBbeyB2YWx1ZTogJ01ldGFkYXRvIGFnZ2l1bnRpdm8nIH1dLCBhbmNob3I6IHsgcGF5bG9hZDogJ3JlczknIH0gfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBpdGVtczogW1xuICAgICAgICB7IG1ldGFkYXRhOiBbeyB2YWx1ZTogJ01ldGFkYXRvIGVzdGVybm8nIH1dLCBhbmNob3I6IHsgcGF5bG9hZDogJ3JlczEwJyB9IH0sXG4gICAgICAgIHsgbWV0YWRhdGE6IFt7IHZhbHVlOiAnTWV0YWRhdG8gZXN0ZXJubycgfV0sIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzMTEnIH0gfSxcbiAgICAgICAgeyBtZXRhZGF0YTogW3sgdmFsdWU6ICdNZXRhZGF0byBlc3Rlcm5vJyB9XSwgYW5jaG9yOiB7IHBheWxvYWQ6ICdyZXMxMicgfSB9LFxuICAgICAgICB7IG1ldGFkYXRhOiBbeyB2YWx1ZTogJ01ldGFkYXRvIGVzdGVybm8nIH1dLCBhbmNob3I6IHsgcGF5bG9hZDogJ3JlczEzJyB9IH0sXG4gICAgICBdXG4gICAgfVxuICBdLFxuICBhY3Rpb25zOiB7XG4gICAgYWR2YW5jZWQ6IHtcbiAgICAgIHRleHQ6ICdSaWNlcmNhIEF2YW56YXRhJyxcbiAgICAgIGFuY2hvcjoge1xuICAgICAgICBwYXlsb2FkOiAnYWR2YW5jZWQtc2VhcmNoJyxcbiAgICAgICAgaHJlZjogJ2h0dHBzOi8vZ29vZ2xlLml0JyxcbiAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJ1xuICAgICAgfVxuICAgIH0sXG4gICAgc2hvd01vcmU6IHtcbiAgICAgIHRleHQ6ICdWaXN1YWxpenphIHR1dHRpIGkgOTggcmlzdWx0YXRpIHBlciBcImFuZ1wiJyxcbiAgICAgIGFuY2hvcjoge1xuICAgICAgICBwYXlsb2FkOiAnc2hvdy1tb3JlJyxcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGZhbGxiYWNrOiAnU3BpYWNlbnRpLCBub24gw6ggc3RhdG8gdHJvdmF0byBuZXNzdW4gcmlzdWx0YXRvLiA8YnI+IFJpcHJvdmEgY29uIHVuYSBudW92YSByaWNlcmNhLidcbn07XG4iXX0=