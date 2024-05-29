export const ADVANCED_AUTOCOMPLETE_MOCK = {
    results: [
        {
            group: {
                title: 'Books',
                icon: 'n7-icon-file3',
                classes: 'color-people',
                anchor: {
                    payload: 'books',
                },
            },
            items: [
                {
                    title: 'Label risultato con url',
                    anchor: { href: '/examples', target: '_blank' },
                },
                {
                    title: 'Label risultato senza metadato',
                    anchor: { payload: 'res1' },
                },
                {
                    title: 'Label risultato',
                    metadata: [{ value: 'Metadato aggiuntivo' }],
                    anchor: { payload: 'res2' },
                },
                {
                    title: 'Label risultato',
                    metadata: [
                        {
                            key: 'metakey',
                            value: 'value',
                        },
                    ],
                    anchor: {
                        payload: 'res2',
                    },
                },
                {
                    title: 'Label risultato',
                    metadata: [
                        {
                            key: 'metakey',
                            value: 'value',
                        },
                        {
                            key: 'metakey2',
                            value: 'value2',
                        },
                        {
                            key: 'metakey3',
                            value: 'value3',
                        },
                        {
                            key: 'metakey4',
                            value: 'value4',
                        },
                    ],
                    anchor: {
                        payload: 'res3',
                    },
                },
                {
                    title: 'Label risultato',
                    metadata: [
                        {
                            key: 'only metakey',
                            value: 'only metavalue',
                        },
                    ],
                    anchor: {
                        payload: 'res4',
                    },
                },
                { title: 'Label risultato', anchor: { payload: 'res5' } },
            ],
        },
        {
            group: {
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                anchor: {
                    payload: 'movies',
                    href: '/examples',
                },
            },
            items: [
                {
                    title: 'Label risultato',
                    metadata: [{ value: 'Metadato aggiuntivo' }],
                    anchor: { payload: 'res6' },
                },
                {
                    title: 'Label risultato',
                    metadata: [{ value: 'Metadato aggiuntivo' }],
                    anchor: { payload: 'res7' },
                },
                {
                    title: 'Label risultato',
                    metadata: [{ value: 'Metadato aggiuntivo' }],
                    anchor: { payload: 'res8' },
                },
                {
                    title: 'Label risultato',
                    metadata: [{ value: 'Metadato aggiuntivo' }],
                    anchor: { payload: 'res9' },
                },
            ],
        },
        {
            items: [
                {
                    metadata: [{ value: 'Metadato esterno' }],
                    anchor: { payload: 'res10' },
                },
                {
                    metadata: [{ value: 'Metadato esterno' }],
                    anchor: { payload: 'res11' },
                },
                {
                    metadata: [{ value: 'Metadato esterno' }],
                    anchor: { payload: 'res12' },
                },
                {
                    metadata: [{ value: 'Metadato esterno' }],
                    anchor: { payload: 'res13' },
                },
            ],
        },
    ],
    actions: {
        advanced: {
            text: 'Ricerca Avanzata',
            anchor: {
                payload: 'advanced-search',
                href: 'https://google.it',
                target: '_blank',
            },
        },
        showMore: {
            text: 'Visualizza tutti i 98 risultati per "ang"',
            anchor: {
                payload: 'show-more',
            },
        },
    },
    fallback: 'Spiacenti, non è stato trovato nessun risultato. <br> Riprova con una nuova ricerca.',
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtYXV0b2NvbXBsZXRlLm1vY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYWR2YW5jZWQtYXV0b2NvbXBsZXRlL2FkdmFuY2VkLWF1dG9jb21wbGV0ZS5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUE2QjtJQUNsRSxPQUFPLEVBQUU7UUFDUDtZQUNFLEtBQUssRUFBRTtnQkFDTCxLQUFLLEVBQUUsT0FBTztnQkFDZCxJQUFJLEVBQUUsZUFBZTtnQkFDckIsT0FBTyxFQUFFLGNBQWM7Z0JBQ3ZCLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsT0FBTztpQkFDakI7YUFDRjtZQUNELEtBQUssRUFBRTtnQkFDTDtvQkFDRSxLQUFLLEVBQUUseUJBQXlCO29CQUNoQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7aUJBQ2hEO2dCQUNEO29CQUNFLEtBQUssRUFBRSxnQ0FBZ0M7b0JBQ3ZDLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUU7aUJBQzVCO2dCQUNEO29CQUNFLEtBQUssRUFBRSxpQkFBaUI7b0JBQ3hCLFFBQVEsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLHFCQUFxQixFQUFFLENBQUM7b0JBQzVDLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUU7aUJBQzVCO2dCQUNEO29CQUNFLEtBQUssRUFBRSxpQkFBaUI7b0JBQ3hCLFFBQVEsRUFBRTt3QkFDUjs0QkFDRSxHQUFHLEVBQUUsU0FBUzs0QkFDZCxLQUFLLEVBQUUsT0FBTzt5QkFDZjtxQkFDRjtvQkFDRCxNQUFNLEVBQUU7d0JBQ04sT0FBTyxFQUFFLE1BQU07cUJBQ2hCO2lCQUNGO2dCQUNEO29CQUNFLEtBQUss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QUN6QixNQUFNLEVBQUUsUUFBUTthQUNqQjtTQUNGO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLDJDQUEyQztZQUNqRCxNQUFNLEVBQUU7Z0JBQ04sT0FBTyxFQUFFLFdBQVc7YUFDckI7U0FDRjtLQUNGO0lBQ0QsUUFBUSxFQUNOLHNGQUFzRjtDQUN6RixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWR2YW5jZWRBdXRvY29tcGxldGVEYXRhIH0gZnJvbSAnLi9hZHZhbmNlZC1hdXRvY29tcGxldGUnO1xuXG5leHBvcnQgY29uc3QgQURWQU5DRURfQVVUT0NPTVBMRVRFX01PQ0s6IEFkdmFuY2VkQXV0b2NvbXBsZXRlRGF0YSA9IHtcbiAgcmVzdWx0czogW1xuICAgIHtcbiAgICAgIGdyb3VwOiB7XG4gICAgICAgIHRpdGxlOiAnQm9va3MnLFxuICAgICAgICBpY29uOiAnbjctaWNvbi1maWxlMycsXG4gICAgICAgIGNsYXNzZXM6ICdjb2xvci1wZW9wbGUnLFxuICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICBwYXlsb2FkOiAnYm9va3MnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ0xhYmVsIHJpc3VsdGF0byBjb24gdXJsJyxcbiAgICAgICAgICBhbmNob3I6IHsgaHJlZjogJy9leGFtcGxlcycsIHRhcmdldDogJ19ibGFuaycgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnTGFiZWwgcmlzdWx0YXRvIHNlbnphIG1ldGFkYXRvJyxcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJ3JlczEnIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ0xhYmVsIHJpc3VsdGF0bycsXG4gICAgICAgICAgbWV0YWRhdGE6IFt7IHZhbHVlOiAnTWV0YWRhdG8gYWdnaXVudGl2bycgfV0sXG4gICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICdyZXMyJyB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdMYWJlbCByaXN1bHRhdG8nLFxuICAgICAgICAgIG1ldGFkYXRhOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ21ldGFrZXknLFxuICAgICAgICAgICAgICB2YWx1ZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgIHBheWxvYWQ6ICdyZXMyJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdMYWJlbCByaXN1bHRhdG8nLFxuICAgICAgICAgIG1ldGFkYXRhOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ21ldGFrZXknLFxuICAgICAgICAgICAgICB2YWx1ZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ21ldGFrZXkyJyxcbiAgICAgICAgICAgICAgdmFsdWU6ICd2YWx1ZTInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiAnbWV0YWtleTMnLFxuICAgICAgICAgICAgICB2YWx1ZTogJ3ZhbHVlMycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6ICdtZXRha2V5NCcsXG4gICAgICAgICAgICAgIHZhbHVlOiAndmFsdWU0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgIHBheWxvYWQ6ICdyZXMzJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdMYWJlbCByaXN1bHRhdG8nLFxuICAgICAgICAgIG1ldGFkYXRhOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ29ubHkgbWV0YWtleScsXG4gICAgICAgICAgICAgIHZhbHVlOiAnb25seSBtZXRhdmFsdWUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgICAgcGF5bG9hZDogJ3JlczQnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHsgdGl0bGU6ICdMYWJlbCByaXN1bHRhdG8nLCBhbmNob3I6IHsgcGF5bG9hZDogJ3JlczUnIH0gfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBncm91cDoge1xuICAgICAgICB0aXRsZTpcbiAgICAgICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yJyxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgcGF5bG9hZDogJ21vdmllcycsXG4gICAgICAgICAgaHJlZjogJy9leGFtcGxlcycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnTGFiZWwgcmlzdWx0YXRvJyxcbiAgICAgICAgICBtZXRhZGF0YTogW3sgdmFsdWU6ICdNZXRhZGF0byBhZ2dpdW50aXZvJyB9XSxcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJ3JlczYnIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ0xhYmVsIHJpc3VsdGF0bycsXG4gICAgICAgICAgbWV0YWRhdGE6IFt7IHZhbHVlOiAnTWV0YWRhdG8gYWdnaXVudGl2bycgfV0sXG4gICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICdyZXM3JyB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdMYWJlbCByaXN1bHRhdG8nLFxuICAgICAgICAgIG1ldGFkYXRhOiBbeyB2YWx1ZTogJ01ldGFkYXRvIGFnZ2l1bnRpdm8nIH1dLFxuICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzOCcgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnTGFiZWwgcmlzdWx0YXRvJyxcbiAgICAgICAgICBtZXRhZGF0YTogW3sgdmFsdWU6ICdNZXRhZGF0byBhZ2dpdW50aXZvJyB9XSxcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJ3JlczknIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1ldGFkYXRhOiBbeyB2YWx1ZTogJ01ldGFkYXRvIGVzdGVybm8nIH1dLFxuICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzMTAnIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBtZXRhZGF0YTogW3sgdmFsdWU6ICdNZXRhZGF0byBlc3Rlcm5vJyB9XSxcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJ3JlczExJyB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbWV0YWRhdGE6IFt7IHZhbHVlOiAnTWV0YWRhdG8gZXN0ZXJubycgfV0sXG4gICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICdyZXMxMicgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1ldGFkYXRhOiBbeyB2YWx1ZTogJ01ldGFkYXRvIGVzdGVybm8nIH1dLFxuICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAncmVzMTMnIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG4gIGFjdGlvbnM6IHtcbiAgICBhZHZhbmNlZDoge1xuICAgICAgdGV4dDogJ1JpY2VyY2EgQXZhbnphdGEnLFxuICAgICAgYW5jaG9yOiB7XG4gICAgICAgIHBheWxvYWQ6ICdhZHZhbmNlZC1zZWFyY2gnLFxuICAgICAgICBocmVmOiAnaHR0cHM6Ly9nb29nbGUuaXQnLFxuICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNob3dNb3JlOiB7XG4gICAgICB0ZXh0OiAnVmlzdWFsaXp6YSB0dXR0aSBpIDk4IHJpc3VsdGF0aSBwZXIgXCJhbmdcIicsXG4gICAgICBhbmNob3I6IHtcbiAgICAgICAgcGF5bG9hZDogJ3Nob3ctbW9yZScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGZhbGxiYWNrOlxuICAgICdTcGlhY2VudGksIG5vbiDDqCBzdGF0byB0cm92YXRvIG5lc3N1biByaXN1bHRhdG8uIDxicj4gUmlwcm92YSBjb24gdW5hIG51b3ZhIHJpY2VyY2EuJyxcbn07XG4iXX0=