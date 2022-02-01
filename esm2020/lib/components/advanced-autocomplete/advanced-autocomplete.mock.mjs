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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtYXV0b2NvbXBsZXRlLm1vY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYWR2YW5jZWQtYXV0b2NvbXBsZXRlL2FkdmFuY2VkLWF1dG9jb21wbGV0ZS5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUE2QjtJQUNsRSxPQUFPLEVBQUU7UUFDUDtZQUNFLEtBQUssRUFBRTtnQkFDTCxLQUFLLEVBQUUsT0FBTztnQkFDZCxJQUFJLEVBQUUsZUFBZTtnQkFDckIsT0FBTyxFQUFFLGNBQWM7Z0JBQ3ZCLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsT0FBTztpQkFDakI7YUFDRjtZQUNELEtBQUssRUFBRTtnQkFDTCxFQUFFLEtBQUssRUFBRSx5QkFBeUIsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBRTtnQkFDckYsRUFBRSxLQUFLLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUN4RSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxxQkFBcUIsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUN2RztvQkFDRSxLQUFLLEVBQUUsaUJBQWlCO29CQUN4QixRQUFRLEVBQUUsQ0FBQzs0QkFDVCxHQUFHLEVBQUUsU0FBUzs0QkFDZCxLQUFLLEVBQUUsT0FBTzt5QkFDZixDQUFDO29CQUNGLE1BQU0sRUFBRTt3QkFDTixPQUFPLEVBQUUsTUFBTTtxQkFDaEI7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsS0FBSyxFQUFFLGlCQUFpQjtvQkFD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QUEyQztZQUNqRCxNQUFNLEVBQUU7Z0JBQ04sT0FBTyxFQUFFLFdBQVc7YUFDckI7U0FDRjtLQUNGO0lBQ0QsUUFBUSxFQUFFLHNGQUFzRjtDQUNqRyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWR2YW5jZWRBdXRvY29tcGxldGVEYXRhIH0gZnJvbSAnLi9hZHZhbmNlZC1hdXRvY29tcGxldGUnO1xuXG5leHBvcnQgY29uc3QgQURWQU5DRURfQVVUT0NPTVBMRVRFX01PQ0s6IEFkdmFuY2VkQXV0b2NvbXBsZXRlRGF0YSA9IHtcbiAgcmVzdWx0czogW1xuICAgIHtcbiAgICAgIGdyb3VwOiB7XG4gICAgICAgIHRpdGxlOiAnQm9va3MnLFxuICAgICAgICBpY29uOiAnbjctaWNvbi1maWxlMycsXG4gICAgICAgIGNsYXNzZXM6ICdjb2xvci1wZW9wbGUnLFxuICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICBwYXlsb2FkOiAnYm9va3MnLFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0aXRsZTogJ0xhYmVsIHJpc3VsdGF0byBjb24gdXJsJywgYW5jaG9yOiB7IGhyZWY6ICcvZXhhbXBsZXMnLCB0YXJnZXQ6ICdfYmxhbmsnIH0gfSxcbiAgICAgICAgeyB0aXRsZTogJ0xhYmVsIHJpc3VsdGF0byBzZW56YSBtZXRhZGF0bycsIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzMScgfSB9LFxuICAgICAgICB7IHRpdGxlOiAnTGFiZWwgcmlzdWx0YXRvJywgbWV0YWRhdGE6IFt7IHZhbHVlOiAnTWV0YWRhdG8gYWdnaXVudGl2bycgfV0sIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzMicgfSB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdMYWJlbCByaXN1bHRhdG8nLFxuICAgICAgICAgIG1ldGFkYXRhOiBbe1xuICAgICAgICAgICAga2V5OiAnbWV0YWtleScsXG4gICAgICAgICAgICB2YWx1ZTogJ3ZhbHVlJ1xuICAgICAgICAgIH1dLFxuICAgICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgICAgcGF5bG9hZDogJ3JlczInXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdMYWJlbCByaXN1bHRhdG8nLFxuICAgICAgICAgIG1ldGFkYXRhOiBbe1xuICAgICAgICAgICAga2V5OiAnbWV0YWtleScsXG4gICAgICAgICAgICB2YWx1ZTogJ3ZhbHVlJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ21ldGFrZXkyJyxcbiAgICAgICAgICAgIHZhbHVlOiAndmFsdWUyJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ21ldGFrZXkzJyxcbiAgICAgICAgICAgIHZhbHVlOiAndmFsdWUzJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ21ldGFrZXk0JyxcbiAgICAgICAgICAgIHZhbHVlOiAndmFsdWU0J1xuICAgICAgICAgIH1dLFxuICAgICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgICAgcGF5bG9hZDogJ3JlczMnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdMYWJlbCByaXN1bHRhdG8nLFxuICAgICAgICAgIG1ldGFkYXRhOiBbe1xuICAgICAgICAgICAga2V5OiAnb25seSBtZXRha2V5JyxcbiAgICAgICAgICAgIHZhbHVlOiAnb25seSBtZXRhdmFsdWUnXG4gICAgICAgICAgfV0sXG4gICAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgICBwYXlsb2FkOiAncmVzNCdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHsgdGl0bGU6ICdMYWJlbCByaXN1bHRhdG8nLCBhbmNob3I6IHsgcGF5bG9hZDogJ3JlczUnIH0gfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBncm91cDoge1xuICAgICAgICB0aXRsZTogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvcicsXG4gICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgIHBheWxvYWQ6ICdtb3ZpZXMnLFxuICAgICAgICAgIGhyZWY6ICcvZXhhbXBsZXMnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRpdGxlOiAnTGFiZWwgcmlzdWx0YXRvJywgbWV0YWRhdGE6IFt7IHZhbHVlOiAnTWV0YWRhdG8gYWdnaXVudGl2bycgfV0sIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzNicgfSB9LFxuICAgICAgICB7IHRpdGxlOiAnTGFiZWwgcmlzdWx0YXRvJywgbWV0YWRhdGE6IFt7IHZhbHVlOiAnTWV0YWRhdG8gYWdnaXVudGl2bycgfV0sIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzNycgfSB9LFxuICAgICAgICB7IHRpdGxlOiAnTGFiZWwgcmlzdWx0YXRvJywgbWV0YWRhdGE6IFt7IHZhbHVlOiAnTWV0YWRhdG8gYWdnaXVudGl2bycgfV0sIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzOCcgfSB9LFxuICAgICAgICB7IHRpdGxlOiAnTGFiZWwgcmlzdWx0YXRvJywgbWV0YWRhdGE6IFt7IHZhbHVlOiAnTWV0YWRhdG8gYWdnaXVudGl2bycgfV0sIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzOScgfSB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgbWV0YWRhdGE6IFt7IHZhbHVlOiAnTWV0YWRhdG8gZXN0ZXJubycgfV0sIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzMTAnIH0gfSxcbiAgICAgICAgeyBtZXRhZGF0YTogW3sgdmFsdWU6ICdNZXRhZGF0byBlc3Rlcm5vJyB9XSwgYW5jaG9yOiB7IHBheWxvYWQ6ICdyZXMxMScgfSB9LFxuICAgICAgICB7IG1ldGFkYXRhOiBbeyB2YWx1ZTogJ01ldGFkYXRvIGVzdGVybm8nIH1dLCBhbmNob3I6IHsgcGF5bG9hZDogJ3JlczEyJyB9IH0sXG4gICAgICAgIHsgbWV0YWRhdGE6IFt7IHZhbHVlOiAnTWV0YWRhdG8gZXN0ZXJubycgfV0sIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzMTMnIH0gfSxcbiAgICAgIF1cbiAgICB9XG4gIF0sXG4gIGFjdGlvbnM6IHtcbiAgICBhZHZhbmNlZDoge1xuICAgICAgdGV4dDogJ1JpY2VyY2EgQXZhbnphdGEnLFxuICAgICAgYW5jaG9yOiB7XG4gICAgICAgIHBheWxvYWQ6ICdhZHZhbmNlZC1zZWFyY2gnLFxuICAgICAgICBocmVmOiAnaHR0cHM6Ly9nb29nbGUuaXQnLFxuICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnXG4gICAgICB9XG4gICAgfSxcbiAgICBzaG93TW9yZToge1xuICAgICAgdGV4dDogJ1Zpc3VhbGl6emEgdHV0dGkgaSA5OCByaXN1bHRhdGkgcGVyIFwiYW5nXCInLFxuICAgICAgYW5jaG9yOiB7XG4gICAgICAgIHBheWxvYWQ6ICdzaG93LW1vcmUnLFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZmFsbGJhY2s6ICdTcGlhY2VudGksIG5vbiDDqCBzdGF0byB0cm92YXRvIG5lc3N1biByaXN1bHRhdG8uIDxicj4gUmlwcm92YSBjb24gdW5hIG51b3ZhIHJpY2VyY2EuJ1xufTtcbiJdfQ==