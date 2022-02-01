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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5tb2NrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZHYtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL3RyZWUvdHJlZS5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBYTtJQUNqQyxLQUFLLEVBQUU7UUFDTDtZQUNFLElBQUksRUFBRSxvQkFBb0I7WUFDMUIsT0FBTyxFQUFFLGNBQWM7WUFDdkIsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLE1BQU0sRUFBRSxRQUFRO2FBQ2pCO1NBQ0Y7UUFDRDtZQUNFLElBQUksRUFBRSxnQkFBZ0I7WUFDdEIsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxPQUFPO2dCQUNiLE1BQU0sRUFBRSxRQUFRO2FBQ2pCO1lBQ0QsT0FBTyxFQUFFLGFBQWE7WUFDdEIsS0FBSyxFQUFFO2dCQUNMO29CQUNFLE1BQU0sRUFBRTt3QkFDTixJQUFJLEVBQUUscUJBQXFCO3dCQUMzQixPQUFPLEVBQUUsUUFBUTtxQkFDbEI7b0JBQ0QsSUFBSSxFQUFFLCtCQUErQjtvQkFDckMsT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7b0JBQ3ZCLFNBQVMsRUFBRSxnQkFBZ0I7aUJBQzVCO2dCQUNEO29CQUNFLE1BQU0sRUFBRTt3QkFDTixJQUFJLEVBQUUsb0JBQW9CO3dCQUMxQixPQUFPLEVBQUUsUUFBUTtxQkFDbEI7b0JBQ0QsSUFBSSxFQUFFLDJCQUEyQjtvQkFDakMsT0FBTyxFQUFFLHVCQUF1QjtvQkFDaEMsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtvQkFDdkIsS0FBSyxFQUFFO3dCQUNMOzRCQUNFLE1BQU0sRUFBRTtnQ0FDTixJQUFJLEVBQUUsb0JBQW9CO2dDQUMxQixPQUFPLEVBQUUsUUFB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RDs0QkFDRSxPQUFPLEVBQUUsV0FBVzs0QkFDcEIsSUFBSSxFQUFFLGVBQWU7NEJBQ3JCLElBQUksRUFBRSxvREFBb0Q7NEJBQzFELE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7eUJBQ3hCO3dCQUNEOzRCQUNFLElBQUksRUFBRSxlQUFlOzRCQUNyQixJQUFJLEVBQUUsc0NBQXNDOzRCQUM1QyxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO3lCQUN4Qjt3QkFDRDs0QkFDRSxHQUFHLEVBQUUsMENBQTBDOzRCQUMvQyxJQUFJLEVBQUUsa0VBQWtFOzRCQUN4RSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO3lCQUN4Qjt3QkFDRDs0QkFDRSxHQUFHLEVBQUUsMENBQTBDOzRCQUMvQyxJQUFJLEVBQUUsd0NBQXdDOzRCQUM5QyxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFOzRCQUN2QixPQUFPLEVBQUUsV0FBVzt5QkFDckI7d0JBQ0Q7NEJBQ0UsSUFBSSxFQUFFLGVBQWU7NEJBQ3JCLElBQUksRUFBRSxvQkFBb0I7NEJBQzFCLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7NEJBQ3ZCLE9BQU8sRUFBRSxXQUFXO3lCQUNyQjt3QkFDRDs0QkFDRSxJQUFJLEVBQUUsZUFBZTs0QkFDckIsSUFBSSxFQUFFLHVHQUF1Rzs0QkFDN0csTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTt5QkFDeEI7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJlZURhdGEgfSBmcm9tICcuL3RyZWUnO1xuXG5leHBvcnQgY29uc3QgVFJFRV9NT0NLOiBUcmVlRGF0YSA9IHtcbiAgaXRlbXM6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnQ29sbGV6aW9uZSBkXFwnYXJ0ZScsXG4gICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcbiAgICAgIGFuY2hvcjoge1xuICAgICAgICBocmVmOiAnaHR0cHM6Ly9nb29nbGUuaXQnLFxuICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0NlbnRybyBhcmNoaXZpJyxcbiAgICAgIGFuY2hvcjoge1xuICAgICAgICBocmVmOiAnL2hvbWUnLFxuICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnXG4gICAgICB9LFxuICAgICAgY2xhc3NlczogJ2lzLWV4cGFuZGVkJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0b2dnbGU6IHtcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcbiAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiAnNSsxQUEgQWdlbnppYSBkaSBBcmNoaXRldHR1cmEnLFxuICAgICAgICAgIGNsYXNzZXM6ICdpcy1jb2xsYXBzZWQnLFxuICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxuICAgICAgICAgIGljb25yaWdodDogJ243LWljb24taW1hZ2VzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdG9nZ2xlOiB7XG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1kb3duJyxcbiAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiAnQUJEUiBBcmNoaXRldHRpIEFzc29jaWF0aScsXG4gICAgICAgICAgY2xhc3NlczogJ2lzLWV4cGFuZGVkIGlzLWFjdGl2ZScsXG4gICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdG9nZ2xlOiB7XG4gICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtZG93bicsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdGV4dDogJzUrMUFBIEFnZW56aWEgZGkgQXJjaGl0ZXR0dXJhJyxcbiAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWV4cGFuZGVkJyxcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdG9nZ2xlOiB7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnNSsxQUEgQWdlbnppYSBkaSBBcmNoaXRldHR1cmEnLFxuICAgICAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWNvbGxhcHNlZCcsXG4gICAgICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdG9nZ2xlOiB7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLWRvd24nLFxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdBQkRSIEFyY2hpdGV0dGkgQXNzb2NpYXRpJyxcbiAgICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1leHBhbmRlZCcsXG4gICAgICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICB0b2dnbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLWRvd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICc1KzFBQSBBZ2VuemlhIGRpIEFyY2hpdGV0dHVyYScsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWV4cGFuZGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJzUrMUFBIEFnZW56aWEgZGkgQXJjaGl0ZXR0dXJhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWNvbGxhcHNlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0FCRFIgQXJjaGl0ZXR0aSBBc3NvY2lhdGknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0FCRFIgQXJjaGl0ZXR0aSBBc3NvY2lhdGknLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1jb2xsYXBzZWQnLFxuICAgICAgICAgICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdG9nZ2xlOiB7XG4gICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtcmlnaHQnLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHRleHQ6ICdBQkRSIEFyY2hpdGV0dGkgQXNzb2NpYXRpJyxcbiAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWNvbGxhcHNlZCcsXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRvZ2dsZToge1xuICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtcmlnaHQnLFxuICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRleHQ6ICdBV1AnLFxuICAgICAgICAgIGNsYXNzZXM6ICdpcy1jb2xsYXBzZWQnLFxuICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0b2dnbGU6IHtcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcbiAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiAnQk9FUkkgQ2luaScsXG4gICAgICAgICAgY2xhc3NlczogJ2lzLWNvbGxhcHNlZCcsXG4gICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRvZ2dsZToge1xuICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtcmlnaHQnLFxuICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRleHQ6ICdDQU1QTyBCQUVaQSBBbGJlcnRvJyxcbiAgICAgICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdG9nZ2xlOiB7XG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXG4gICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdGV4dDogJ0NBU1NBTkkgTWF0aWxkZScsXG4gICAgICAgICAgY2xhc3NlczogJ2lzLWNvbGxhcHNlZCcsXG4gICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRvZ2dsZToge1xuICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtcmlnaHQnLFxuICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRleHQ6ICdHVUVSUkkgRGFuaWxvJyxcbiAgICAgICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdG9nZ2xlOiB7XG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXG4gICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdGV4dDogJ0hhcyBjaGlsZHMsIGJ1dCBpcyBjbG9zZWQhJyxcbiAgICAgICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1maWxlMycsXG4gICAgICAgICAgICAgIHRleHQ6ICdDaGlsZDogQ2luZW1hIHRlYXRybyBBdWd1c3RlbyBlIHN0YXppb25lIGNlbnRyYWxlIGRlbGxhIGZ1bmljb2xhcmUsIE5hcG9saSAoWzE5MjZdIC0gWzE5MjddKScsXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWFjdGl2ZScsXG4gICAgICAgICAgICAgIGljb246ICduNy1pY29uLWZpbGUzJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0NoaWxkOiBTdGFkaW8gY29tdW5hbGUgRy5CZXJ0YSwgRmlyZW56ZSAoWzE5MjldIC0gWzE5MzJdKScsXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnLFxuICAgICAgICAgICAgICB0ZXh0OiAnQ2hpbGQ6IE1vbnVtZW50byBhbGxhIEJhbmRpZXJhLCBSb21hICgxOTMxKScsXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaW1nOiAnaHR0cDovL3BsYWNlaW1nLmNvbS8yNS8yNS9hcmNoL2dyYXlzY2FsZScsXG4gICAgICAgICAgICAgIHRleHQ6ICdDaGlsZDogQnJldmV0dG8gaGFuZ2FyIGNpcmNvbGFyZSBjb24gcGlhdHRhZm9ybWEgYW51bGFyZSByb3RhbnRlICgxOTMyKScsXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaW1nOiAnaHR0cDovL3BsYWNlaW1nLmNvbS8yNS8yNS9hcmNoL2dyYXlzY2FsZScsXG4gICAgICAgICAgICAgIHRleHQ6ICdDaGlsZDogU3RhZGlvIGRhIDEyMC4wMDAgcG9zdGksIFJvbWEgKFsxOTMzXSknLFxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWFjdGl2ZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGljb246ICduNy1pY29uLWZpbGUzJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0NoaWxkOiBNYWdhenppbm8gKFsxOTM0XSknLFxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWFjdGl2ZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1maWxlMycsXG4gICAgICAgICAgICAgIHRleHQ6ICdDaGlsZDogQXZpb3JpbWVzc2UsIE9ydmlldG8gKFRSKSwgT3JiZXRlbGxvIChHUiksIFRvcnJlIGRlbCBMYWdvIChMVSksIE1hcnNhbGEgKFRQKSwgVHJhcGFuaSAoWzE5MzVdIC0gMTk0MSknLFxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdG9nZ2xlOiB7XG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1kb3duJyxcbiAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiAnTkVSVkkgUGllciBMdWlnaScsXG4gICAgICAgICAgY2xhc3NlczogJ2lzLWV4cGFuZGVkJyxcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdG9nZ2xlOiB7XG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1kb3duJyxcbiAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiAnQXR0aXZpdMOgIFByb2Zlc3Npb25hbGUnLFxuICAgICAgICAgIGNsYXNzZXM6ICdpcy1leHBhbmRlZCcsXG4gICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnLFxuICAgICAgICAgICAgICB0ZXh0OiAnQ2luZW1hIHRlYXRybyBBdWd1c3RlbyBlIHN0YXppb25lIGNlbnRyYWxlIGRlbGxhIGZ1bmljb2xhcmUsIE5hcG9saSAoWzE5MjZdIC0gWzE5MjddKScsXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWFjdGl2ZScsXG4gICAgICAgICAgICAgIGljb246ICduNy1pY29uLWZpbGUzJyxcbiAgICAgICAgICAgICAgdGV4dDogJ1N0YWRpbyBjb211bmFsZSBHLkJlcnRhLCBGaXJlbnplIChbMTkyOV0gLSBbMTkzMl0pJyxcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1maWxlMycsXG4gICAgICAgICAgICAgIHRleHQ6ICdNb251bWVudG8gYWxsYSBCYW5kaWVyYSwgUm9tYSAoMTkzMSknLFxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGltZzogJ2h0dHA6Ly9wbGFjZWltZy5jb20vMjUvMjUvYXJjaC9ncmF5c2NhbGUnLFxuICAgICAgICAgICAgICB0ZXh0OiAnQnJldmV0dG8gaGFuZ2FyIGNpcmNvbGFyZSBjb24gcGlhdHRhZm9ybWEgYW51bGFyZSByb3RhbnRlICgxOTMyKScsXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaW1nOiAnaHR0cDovL3BsYWNlaW1nLmNvbS8yNS8yNS9hcmNoL2dyYXlzY2FsZScsXG4gICAgICAgICAgICAgIHRleHQ6ICdTdGFkaW8gZGEgMTIwLjAwMCBwb3N0aSwgUm9tYSAoWzE5MzNdKScsXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxuICAgICAgICAgICAgICBjbGFzc2VzOiAnaXMtYWN0aXZlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnLFxuICAgICAgICAgICAgICB0ZXh0OiAnTWFnYXp6aW5vIChbMTkzNF0pJyxcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXG4gICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1hY3RpdmUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnLFxuICAgICAgICAgICAgICB0ZXh0OiAnQXZpb3JpbWVzc2UsIE9ydmlldG8gKFRSKSwgT3JiZXRlbGxvIChHUiksIFRvcnJlIGRlbCBMYWdvIChMVSksIE1hcnNhbGEgKFRQKSwgVHJhcGFuaSAoWzE5MzVdIC0gMTk0MSknLFxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgXVxuICAgIH0sXG4gIF1cbn07XG4iXX0=