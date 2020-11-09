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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtYXV0b2NvbXBsZXRlLm1vY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FkdmFuY2VkLWF1dG9jb21wbGV0ZS9hZHZhbmNlZC1hdXRvY29tcGxldGUubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsTUFBTSwwQkFBMEIsR0FBNkI7SUFDbEUsT0FBTyxFQUFFO1FBQ1A7WUFDRSxLQUFLLEVBQUU7Z0JBQ0wsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCLE9BQU8sRUFBRSxjQUFjO2dCQUN2QixNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFLE9BQU87aUJBQ2pCO2FBQ0Y7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsRUFBRSxLQUFLLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUU7Z0JBQ3JGLEVBQUUsS0FBSyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDeEUsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDdkc7b0JBQ0UsS0FBSyxFQUFFLGlCQUFpQjtvQkFDeEIsUUFBUSxFQUFFLENBQUM7NEJBQ1QsR0FBRyxFQUFFLFNBQVM7NEJBQ2QsS0FBSyxFQUFFLE9BQU87eUJBQ2YsQ0FBQztvQkFDRixNQUFNLEVBQUU7d0JBQ04sT0FBTyxFQUFFLE1BQU07cUJBQ2hCO2lCQUNGO2dCQUNEO29CQUNFLEtBQUssRUFBRSxpQkFBaUI7b0JBQ3hCLFFBQVEsRUFBRSxDQUFDOzRC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O2dCQUNOLE9BQU8sRUFBRSxXQUFXO2FBQ3JCO1NBQ0Y7S0FDRjtJQUNELFFBQVEsRUFBRSxzRkFBc0Y7Q0FDakcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFkdmFuY2VkQXV0b2NvbXBsZXRlRGF0YSB9IGZyb20gJy4vYWR2YW5jZWQtYXV0b2NvbXBsZXRlJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRFZBTkNFRF9BVVRPQ09NUExFVEVfTU9DSzogQWR2YW5jZWRBdXRvY29tcGxldGVEYXRhID0ge1xyXG4gIHJlc3VsdHM6IFtcclxuICAgIHtcclxuICAgICAgZ3JvdXA6IHtcclxuICAgICAgICB0aXRsZTogJ0Jvb2tzJyxcclxuICAgICAgICBpY29uOiAnbjctaWNvbi1maWxlMycsXHJcbiAgICAgICAgY2xhc3NlczogJ2NvbG9yLXBlb3BsZScsXHJcbiAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICBwYXlsb2FkOiAnYm9va3MnLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgaXRlbXM6IFtcclxuICAgICAgICB7IHRpdGxlOiAnTGFiZWwgcmlzdWx0YXRvIGNvbiB1cmwnLCBhbmNob3I6IHsgaHJlZjogJy9leGFtcGxlcycsIHRhcmdldDogJ19ibGFuaycgfSB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICdMYWJlbCByaXN1bHRhdG8gc2VuemEgbWV0YWRhdG8nLCBhbmNob3I6IHsgcGF5bG9hZDogJ3JlczEnIH0gfSxcclxuICAgICAgICB7IHRpdGxlOiAnTGFiZWwgcmlzdWx0YXRvJywgbWV0YWRhdGE6IFt7IHZhbHVlOiAnTWV0YWRhdG8gYWdnaXVudGl2bycgfV0sIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzMicgfSB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiAnTGFiZWwgcmlzdWx0YXRvJyxcclxuICAgICAgICAgIG1ldGFkYXRhOiBbe1xyXG4gICAgICAgICAgICBrZXk6ICdtZXRha2V5JyxcclxuICAgICAgICAgICAgdmFsdWU6ICd2YWx1ZSdcclxuICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICAgIHBheWxvYWQ6ICdyZXMyJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6ICdMYWJlbCByaXN1bHRhdG8nLFxyXG4gICAgICAgICAgbWV0YWRhdGE6IFt7XHJcbiAgICAgICAgICAgIGtleTogJ21ldGFrZXknLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ3ZhbHVlJ1xyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBrZXk6ICdtZXRha2V5MicsXHJcbiAgICAgICAgICAgIHZhbHVlOiAndmFsdWUyJ1xyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBrZXk6ICdtZXRha2V5MycsXHJcbiAgICAgICAgICAgIHZhbHVlOiAndmFsdWUzJ1xyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBrZXk6ICdtZXRha2V5NCcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAndmFsdWU0J1xyXG4gICAgICAgICAgfV0sXHJcbiAgICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgICAgcGF5bG9hZDogJ3JlczMnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogJ0xhYmVsIHJpc3VsdGF0bycsXHJcbiAgICAgICAgICBtZXRhZGF0YTogW3tcclxuICAgICAgICAgICAga2V5OiAnb25seSBtZXRha2V5JyxcclxuICAgICAgICAgICAgdmFsdWU6ICdvbmx5IG1ldGF2YWx1ZSdcclxuICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICAgIHBheWxvYWQ6ICdyZXM0J1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ0xhYmVsIHJpc3VsdGF0bycsIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzNScgfSB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZ3JvdXA6IHtcclxuICAgICAgICB0aXRsZTogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvcicsXHJcbiAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICBwYXlsb2FkOiAnbW92aWVzJyxcclxuICAgICAgICAgIGhyZWY6ICcvZXhhbXBsZXMnXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBpdGVtczogW1xyXG4gICAgICAgIHsgdGl0bGU6ICdMYWJlbCByaXN1bHRhdG8nLCBtZXRhZGF0YTogW3sgdmFsdWU6ICdNZXRhZGF0byBhZ2dpdW50aXZvJyB9XSwgYW5jaG9yOiB7IHBheWxvYWQ6ICdyZXM2JyB9IH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ0xhYmVsIHJpc3VsdGF0bycsIG1ldGFkYXRhOiBbeyB2YWx1ZTogJ01ldGFkYXRvIGFnZ2l1bnRpdm8nIH1dLCBhbmNob3I6IHsgcGF5bG9hZDogJ3JlczcnIH0gfSxcclxuICAgICAgICB7IHRpdGxlOiAnTGFiZWwgcmlzdWx0YXRvJywgbWV0YWRhdGE6IFt7IHZhbHVlOiAnTWV0YWRhdG8gYWdnaXVudGl2bycgfV0sIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzOCcgfSB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICdMYWJlbCByaXN1bHRhdG8nLCBtZXRhZGF0YTogW3sgdmFsdWU6ICdNZXRhZGF0byBhZ2dpdW50aXZvJyB9XSwgYW5jaG9yOiB7IHBheWxvYWQ6ICdyZXM5JyB9IH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpdGVtczogW1xyXG4gICAgICAgIHsgbWV0YWRhdGE6IFt7IHZhbHVlOiAnTWV0YWRhdG8gZXN0ZXJubycgfV0sIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzMTAnIH0gfSxcclxuICAgICAgICB7IG1ldGFkYXRhOiBbeyB2YWx1ZTogJ01ldGFkYXRvIGVzdGVybm8nIH1dLCBhbmNob3I6IHsgcGF5bG9hZDogJ3JlczExJyB9IH0sXHJcbiAgICAgICAgeyBtZXRhZGF0YTogW3sgdmFsdWU6ICdNZXRhZGF0byBlc3Rlcm5vJyB9XSwgYW5jaG9yOiB7IHBheWxvYWQ6ICdyZXMxMicgfSB9LFxyXG4gICAgICAgIHsgbWV0YWRhdGE6IFt7IHZhbHVlOiAnTWV0YWRhdG8gZXN0ZXJubycgfV0sIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzMTMnIH0gfSxcclxuICAgICAgXVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgYWN0aW9uczoge1xyXG4gICAgYWR2YW5jZWQ6IHtcclxuICAgICAgdGV4dDogJ1JpY2VyY2EgQXZhbnphdGEnLFxyXG4gICAgICBhbmNob3I6IHtcclxuICAgICAgICBwYXlsb2FkOiAnYWR2YW5jZWQtc2VhcmNoJyxcclxuICAgICAgICBocmVmOiAnaHR0cHM6Ly9nb29nbGUuaXQnLFxyXG4gICAgICAgIHRhcmdldDogJ19ibGFuaydcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNob3dNb3JlOiB7XHJcbiAgICAgIHRleHQ6ICdWaXN1YWxpenphIHR1dHRpIGkgOTggcmlzdWx0YXRpIHBlciBcImFuZ1wiJyxcclxuICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgcGF5bG9hZDogJ3Nob3ctbW9yZScsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGZhbGxiYWNrOiAnU3BpYWNlbnRpLCBub24gw6ggc3RhdG8gdHJvdmF0byBuZXNzdW4gcmlzdWx0YXRvLiA8YnI+IFJpcHJvdmEgY29uIHVuYSBudW92YSByaWNlcmNhLidcclxufTtcclxuIl19