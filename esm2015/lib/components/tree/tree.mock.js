export const TREE_MOCK = {
    items: [
        {
            text: 'Collezione d\'arte',
            classes: 'is-collapsed',
            anchor: {
                href: 'https://google.it',
                target: '_blank'
            },
        },
        {
            text: 'Centro archivi',
            anchor: {
                href: '/home',
                target: '_blank'
            },
            classes: 'is-expanded',
            items: [
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle'
                    },
                    text: '5+1AA Agenzia di Architettura',
                    classes: 'is-collapsed',
                    anchor: { payload: '' },
                    iconright: 'n7-icon-images'
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-down',
                        payload: 'toggle'
                    },
                    text: 'ABDR Architetti Associati',
                    classes: 'is-expanded is-active',
                    anchor: { payload: '' },
                    items: [
                        {
                            toggle: {
                                icon: 'n7-icon-angle-down',
                                payload: 'toggle'
                            },
                            text: '5+1AA Agenzia di Architettura',
                            classes: 'is-expanded',
                            anchor: { payload: '' },
                            items: [
                                {
                                    toggle: {
                                        icon: 'n7-icon-angle-right',
                                        payload: 'toggle'
                                    },
                                    text: '5+1AA Agenzia di Architettura',
                                    classes: 'is-collapsed',
                                    anchor: { payload: '' }
                                },
                                {
                                    toggle: {
                                        icon: 'n7-icon-angle-down',
                                        payload: 'toggle'
                                    },
                                    text: 'ABDR Architetti Associati',
                                    classes: 'is-expanded',
                                    anchor: { payload: '' },
                                    items: [
                                        {
                                            toggle: {
                                                icon: 'n7-icon-angle-down',
                                                payload: 'toggle'
                                            },
                                            text: '5+1AA Agenzia di Architettura',
                                            classes: 'is-expanded',
                                            anchor: { payload: '' },
                                            items: [
                                                {
                                                    toggle: {
                                                        icon: 'n7-icon-angle-right',
                                                        payload: 'toggle'
                                                    },
                                                    text: '5+1AA Agenzia di Architettura',
                                                    classes: 'is-collapsed',
                                                    anchor: { payload: '' }
                                                },
                                                {
                                                    toggle: {
                                                        icon: 'n7-icon-angle-right',
                                                        payload: 'toggle'
                                                    },
                                                    text: 'ABDR Architetti Associati',
                                                    classes: 'is-collapsed',
                                                    anchor: { payload: '' }
                                                },
                                            ]
                                        },
                                        {
                                            toggle: {
                                                icon: 'n7-icon-angle-right',
                                                payload: 'toggle'
                                            },
                                            text: 'ABDR Architetti Associati',
                                            classes: 'is-collapsed',
                                            anchor: { payload: '' }
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            toggle: {
                                icon: 'n7-icon-angle-right',
                                payload: 'toggle'
                            },
                            text: 'ABDR Architetti Associati',
                            classes: 'is-collapsed',
                            anchor: { payload: '' }
                        },
                    ]
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle'
                    },
                    text: 'AWP',
                    classes: 'is-collapsed',
                    anchor: { payload: '' }
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle'
                    },
                    text: 'BOERI Cini',
                    classes: 'is-collapsed',
                    anchor: { payload: '' }
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle'
                    },
                    text: 'CAMPO BAEZA Alberto',
                    classes: 'is-collapsed',
                    anchor: { payload: '' }
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle'
                    },
                    text: 'CASSANI Matilde',
                    classes: 'is-collapsed',
                    anchor: { payload: '' }
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle'
                    },
                    text: 'GUERRI Danilo',
                    classes: 'is-collapsed',
                    anchor: { payload: '' }
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle'
                    },
                    text: 'Has childs, but is closed!',
                    classes: 'is-collapsed',
                    anchor: { payload: '' },
                    items: [
                        {
                            icon: 'n7-icon-file3',
                            text: 'Child: Cinema teatro Augusteo e stazione centrale della funicolare, Napoli ([1926] - [1927])',
                            anchor: { payload: '' },
                        },
                        {
                            classes: 'is-active',
                            icon: 'n7-icon-file3',
                            text: 'Child: Stadio comunale G.Berta, Firenze ([1929] - [1932])',
                            anchor: { payload: '' },
                        },
                        {
                            icon: 'n7-icon-file3',
                            text: 'Child: Monumento alla Bandiera, Roma (1931)',
                            anchor: { payload: '' },
                        },
                        {
                            img: 'http://placeimg.com/25/25/arch/grayscale',
                            text: 'Child: Brevetto hangar circolare con piattaforma anulare rotante (1932)',
                            anchor: { payload: '' },
                        },
                        {
                            img: 'http://placeimg.com/25/25/arch/grayscale',
                            text: 'Child: Stadio da 120.000 posti, Roma ([1933])',
                            anchor: { payload: '' },
                            classes: 'is-active'
                        },
                        {
                            icon: 'n7-icon-file3',
                            text: 'Child: Magazzino ([1934])',
                            anchor: { payload: '' },
                            classes: 'is-active',
                        },
                        {
                            icon: 'n7-icon-file3',
                            text: 'Child: Aviorimesse, Orvieto (TR), Orbetello (GR), Torre del Lago (LU), Marsala (TP), Trapani ([1935] - 1941)',
                            anchor: { payload: '' },
                        },
                    ]
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-down',
                        payload: 'toggle'
                    },
                    text: 'NERVI Pier Luigi',
                    classes: 'is-expanded',
                    anchor: { payload: '' }
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-down',
                        payload: 'toggle'
                    },
                    text: 'Attività Professionale',
                    classes: 'is-expanded',
                    anchor: { payload: '' },
                    items: [
                        {
                            icon: 'n7-icon-file3',
                            text: 'Cinema teatro Augusteo e stazione centrale della funicolare, Napoli ([1926] - [1927])',
                            anchor: { payload: '' },
                        },
                        {
                            classes: 'is-active',
                            icon: 'n7-icon-file3',
                            text: 'Stadio comunale G.Berta, Firenze ([1929] - [1932])',
                            anchor: { payload: '' },
                        },
                        {
                            icon: 'n7-icon-file3',
                            text: 'Monumento alla Bandiera, Roma (1931)',
                            anchor: { payload: '' },
                        },
                        {
                            img: 'http://placeimg.com/25/25/arch/grayscale',
                            text: 'Brevetto hangar circolare con piattaforma anulare rotante (1932)',
                            anchor: { payload: '' },
                        },
                        {
                            img: 'http://placeimg.com/25/25/arch/grayscale',
                            text: 'Stadio da 120.000 posti, Roma ([1933])',
                            anchor: { payload: '' },
                            classes: 'is-active'
                        },
                        {
                            icon: 'n7-icon-file3',
                            text: 'Magazzino ([1934])',
                            anchor: { payload: '' },
                            classes: 'is-active',
                        },
                        {
                            icon: 'n7-icon-file3',
                            text: 'Aviorimesse, Orvieto (TR), Orbetello (GR), Torre del Lago (LU), Marsala (TP), Trapani ([1935] - 1941)',
                            anchor: { payload: '' },
                        },
                    ]
                },
            ]
        },
    ]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5tb2NrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90cmVlL3RyZWUubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQWE7SUFDakMsS0FBSyxFQUFFO1FBQ0w7WUFDRSxJQUFJLEVBQUUsb0JBQW9CO1lBQzFCLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsbUJBQW1CO2dCQUN6QixNQUFNLEVBQUUsUUFBUTthQUNqQjtTQUNGO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsZ0JBQWdCO1lBQ3RCLE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsT0FBTztnQkFDYixNQUFNLEVBQUUsUUFBUTthQUNqQjtZQUNELE9BQU8sRUFBRSxhQUFhO1lBQ3RCLEtBQUssRUFBRTtnQkFDTDtvQkFDRSxNQUFNLEVBQUU7d0JBQ04sSUFBSSxFQUFFLHFCQUFxQjt3QkFDM0IsT0FBTyxFQUFFLFFBQVE7cUJBQ2xCO29CQUNELElBQUksRUFBRSwrQkFBK0I7b0JBQ3JDLE9BQU8sRUFBRSxjQUFjO29CQUN2QixNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO29CQUN2QixTQUFTLEVBQUUsZ0JBQWdCO2lCQUM1QjtnQkFDRDtvQkFDRSxNQUFNLEVBQUU7d0JBQ04sSUFBSSxFQUFFLG9CQUFvQjt3QkFDMUIsT0FBTyxFQUFFLFFBQVE7cUJBQ2xCO29CQUNELElBQUksRUFBRSwyQkFBMkI7b0JBQ2pDLE9BQU8sRUFBRSx1QkFBdUI7b0JBQ2hDLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7b0JBQ3ZCLEtBQUssRUFBRTt3QkFDTDs0QkFDRSxNQUFNLEVBQUU7Z0NBQ04sSUFBSSxFQUFFLG9CQUFvQjtnQ0FDMUIsT0FBTyxFQUFFLFFBQVE7NkJBQ2xCOzRCQUNELElBQUks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QVc7NEJBQ3BCLElBQUksRUFBRSxlQUFlOzRCQUNyQixJQUFJLEVBQUUsb0RBQW9EOzRCQUMxRCxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO3lCQUN4Qjt3QkFDRDs0QkFDRSxJQUFJLEVBQUUsZUFBZTs0QkFDckIsSUFBSSxFQUFFLHNDQUFzQzs0QkFDNUMsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTt5QkFDeEI7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLDBDQUEwQzs0QkFDL0MsSUFBSSxFQUFFLGtFQUFrRTs0QkFDeEUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTt5QkFDeEI7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLDBDQUEwQzs0QkFDL0MsSUFBSSxFQUFFLHdDQUF3Qzs0QkFDOUMsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTs0QkFDdkIsT0FBTyxFQUFFLFdBQVc7eUJBQ3JCO3dCQUNEOzRCQUNFLElBQUksRUFBRSxlQUFlOzRCQUNyQixJQUFJLEVBQUUsb0JBQW9COzRCQUMxQixNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFOzRCQUN2QixPQUFPLEVBQUUsV0FBVzt5QkFDckI7d0JBQ0Q7NEJBQ0UsSUFBSSxFQUFFLGVBQWU7NEJBQ3JCLElBQUksRUFBRSx1R0FBdUc7NEJBQzdHLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7eUJBQ3hCO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyZWVEYXRhIH0gZnJvbSAnLi90cmVlJztcclxuXHJcbmV4cG9ydCBjb25zdCBUUkVFX01PQ0s6IFRyZWVEYXRhID0ge1xyXG4gIGl0ZW1zOiBbXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICdDb2xsZXppb25lIGRcXCdhcnRlJyxcclxuICAgICAgY2xhc3NlczogJ2lzLWNvbGxhcHNlZCcsXHJcbiAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgIGhyZWY6ICdodHRwczovL2dvb2dsZS5pdCcsXHJcbiAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJ1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogJ0NlbnRybyBhcmNoaXZpJyxcclxuICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgaHJlZjogJy9ob21lJyxcclxuICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnXHJcbiAgICAgIH0sXHJcbiAgICAgIGNsYXNzZXM6ICdpcy1leHBhbmRlZCcsXHJcbiAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdG9nZ2xlOiB7XHJcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcclxuICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB0ZXh0OiAnNSsxQUEgQWdlbnppYSBkaSBBcmNoaXRldHR1cmEnLFxyXG4gICAgICAgICAgY2xhc3NlczogJ2lzLWNvbGxhcHNlZCcsXHJcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcclxuICAgICAgICAgIGljb25yaWdodDogJ243LWljb24taW1hZ2VzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdG9nZ2xlOiB7XHJcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLWRvd24nLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRleHQ6ICdBQkRSIEFyY2hpdGV0dGkgQXNzb2NpYXRpJyxcclxuICAgICAgICAgIGNsYXNzZXM6ICdpcy1leHBhbmRlZCBpcy1hY3RpdmUnLFxyXG4gICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXHJcbiAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdG9nZ2xlOiB7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1kb3duJyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB0ZXh0OiAnNSsxQUEgQWdlbnppYSBkaSBBcmNoaXRldHR1cmEnLFxyXG4gICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1leHBhbmRlZCcsXHJcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXHJcbiAgICAgICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgdG9nZ2xlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtcmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICc1KzFBQSBBZ2VuemlhIGRpIEFyY2hpdGV0dHVyYScsXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1jb2xsYXBzZWQnLFxyXG4gICAgICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgdG9nZ2xlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtZG93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgdGV4dDogJ0FCRFIgQXJjaGl0ZXR0aSBBc3NvY2lhdGknLFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc2VzOiAnaXMtZXhwYW5kZWQnLFxyXG4gICAgICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcclxuICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b2dnbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtZG93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogJzUrMUFBIEFnZW56aWEgZGkgQXJjaGl0ZXR0dXJhJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1leHBhbmRlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnNSsxQUEgQWdlbnppYSBkaSBBcmNoaXRldHR1cmEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1jb2xsYXBzZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQUJEUiBBcmNoaXRldHRpIEFzc29jaWF0aScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWNvbGxhcHNlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0FCRFIgQXJjaGl0ZXR0aSBBc3NvY2lhdGknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWNvbGxhcHNlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdG9nZ2xlOiB7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgdGV4dDogJ0FCRFIgQXJjaGl0ZXR0aSBBc3NvY2lhdGknLFxyXG4gICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1jb2xsYXBzZWQnLFxyXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0b2dnbGU6IHtcclxuICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtcmlnaHQnLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRleHQ6ICdBV1AnLFxyXG4gICAgICAgICAgY2xhc3NlczogJ2lzLWNvbGxhcHNlZCcsXHJcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdG9nZ2xlOiB7XHJcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcclxuICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB0ZXh0OiAnQk9FUkkgQ2luaScsXHJcbiAgICAgICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcclxuICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0b2dnbGU6IHtcclxuICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtcmlnaHQnLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRleHQ6ICdDQU1QTyBCQUVaQSBBbGJlcnRvJyxcclxuICAgICAgICAgIGNsYXNzZXM6ICdpcy1jb2xsYXBzZWQnLFxyXG4gICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRvZ2dsZToge1xyXG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGV4dDogJ0NBU1NBTkkgTWF0aWxkZScsXHJcbiAgICAgICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcclxuICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0b2dnbGU6IHtcclxuICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtcmlnaHQnLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRleHQ6ICdHVUVSUkkgRGFuaWxvJyxcclxuICAgICAgICAgIGNsYXNzZXM6ICdpcy1jb2xsYXBzZWQnLFxyXG4gICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRvZ2dsZToge1xyXG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGV4dDogJ0hhcyBjaGlsZHMsIGJ1dCBpcyBjbG9zZWQhJyxcclxuICAgICAgICAgIGNsYXNzZXM6ICdpcy1jb2xsYXBzZWQnLFxyXG4gICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXHJcbiAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnLFxyXG4gICAgICAgICAgICAgIHRleHQ6ICdDaGlsZDogQ2luZW1hIHRlYXRybyBBdWd1c3RlbyBlIHN0YXppb25lIGNlbnRyYWxlIGRlbGxhIGZ1bmljb2xhcmUsIE5hcG9saSAoWzE5MjZdIC0gWzE5MjddKScsXHJcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBjbGFzc2VzOiAnaXMtYWN0aXZlJyxcclxuICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1maWxlMycsXHJcbiAgICAgICAgICAgICAgdGV4dDogJ0NoaWxkOiBTdGFkaW8gY29tdW5hbGUgRy5CZXJ0YSwgRmlyZW56ZSAoWzE5MjldIC0gWzE5MzJdKScsXHJcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1maWxlMycsXHJcbiAgICAgICAgICAgICAgdGV4dDogJ0NoaWxkOiBNb251bWVudG8gYWxsYSBCYW5kaWVyYSwgUm9tYSAoMTkzMSknLFxyXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaW1nOiAnaHR0cDovL3BsYWNlaW1nLmNvbS8yNS8yNS9hcmNoL2dyYXlzY2FsZScsXHJcbiAgICAgICAgICAgICAgdGV4dDogJ0NoaWxkOiBCcmV2ZXR0byBoYW5nYXIgY2lyY29sYXJlIGNvbiBwaWF0dGFmb3JtYSBhbnVsYXJlIHJvdGFudGUgKDE5MzIpJyxcclxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGltZzogJ2h0dHA6Ly9wbGFjZWltZy5jb20vMjUvMjUvYXJjaC9ncmF5c2NhbGUnLFxyXG4gICAgICAgICAgICAgIHRleHQ6ICdDaGlsZDogU3RhZGlvIGRhIDEyMC4wMDAgcG9zdGksIFJvbWEgKFsxOTMzXSknLFxyXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxyXG4gICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1hY3RpdmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1maWxlMycsXHJcbiAgICAgICAgICAgICAgdGV4dDogJ0NoaWxkOiBNYWdhenppbm8gKFsxOTM0XSknLFxyXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxyXG4gICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1hY3RpdmUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnLFxyXG4gICAgICAgICAgICAgIHRleHQ6ICdDaGlsZDogQXZpb3JpbWVzc2UsIE9ydmlldG8gKFRSKSwgT3JiZXRlbGxvIChHUiksIFRvcnJlIGRlbCBMYWdvIChMVSksIE1hcnNhbGEgKFRQKSwgVHJhcGFuaSAoWzE5MzVdIC0gMTk0MSknLFxyXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdG9nZ2xlOiB7XHJcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLWRvd24nLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRleHQ6ICdORVJWSSBQaWVyIEx1aWdpJyxcclxuICAgICAgICAgIGNsYXNzZXM6ICdpcy1leHBhbmRlZCcsXHJcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdG9nZ2xlOiB7XHJcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLWRvd24nLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRleHQ6ICdBdHRpdml0w6AgUHJvZmVzc2lvbmFsZScsXHJcbiAgICAgICAgICBjbGFzc2VzOiAnaXMtZXhwYW5kZWQnLFxyXG4gICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXHJcbiAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnLFxyXG4gICAgICAgICAgICAgIHRleHQ6ICdDaW5lbWEgdGVhdHJvIEF1Z3VzdGVvIGUgc3RhemlvbmUgY2VudHJhbGUgZGVsbGEgZnVuaWNvbGFyZSwgTmFwb2xpIChbMTkyNl0gLSBbMTkyN10pJyxcclxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1hY3RpdmUnLFxyXG4gICAgICAgICAgICAgIGljb246ICduNy1pY29uLWZpbGUzJyxcclxuICAgICAgICAgICAgICB0ZXh0OiAnU3RhZGlvIGNvbXVuYWxlIEcuQmVydGEsIEZpcmVuemUgKFsxOTI5XSAtIFsxOTMyXSknLFxyXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnLFxyXG4gICAgICAgICAgICAgIHRleHQ6ICdNb251bWVudG8gYWxsYSBCYW5kaWVyYSwgUm9tYSAoMTkzMSknLFxyXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaW1nOiAnaHR0cDovL3BsYWNlaW1nLmNvbS8yNS8yNS9hcmNoL2dyYXlzY2FsZScsXHJcbiAgICAgICAgICAgICAgdGV4dDogJ0JyZXZldHRvIGhhbmdhciBjaXJjb2xhcmUgY29uIHBpYXR0YWZvcm1hIGFudWxhcmUgcm90YW50ZSAoMTkzMiknLFxyXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaW1nOiAnaHR0cDovL3BsYWNlaW1nLmNvbS8yNS8yNS9hcmNoL2dyYXlzY2FsZScsXHJcbiAgICAgICAgICAgICAgdGV4dDogJ1N0YWRpbyBkYSAxMjAuMDAwIHBvc3RpLCBSb21hIChbMTkzM10pJyxcclxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcclxuICAgICAgICAgICAgICBjbGFzc2VzOiAnaXMtYWN0aXZlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnLFxyXG4gICAgICAgICAgICAgIHRleHQ6ICdNYWdhenppbm8gKFsxOTM0XSknLFxyXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxyXG4gICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1hY3RpdmUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnLFxyXG4gICAgICAgICAgICAgIHRleHQ6ICdBdmlvcmltZXNzZSwgT3J2aWV0byAoVFIpLCBPcmJldGVsbG8gKEdSKSwgVG9ycmUgZGVsIExhZ28gKExVKSwgTWFyc2FsYSAoVFApLCBUcmFwYW5pIChbMTkzNV0gLSAxOTQxKScsXHJcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgXVxyXG4gICAgfSxcclxuICBdXHJcbn07XHJcbiJdfQ==