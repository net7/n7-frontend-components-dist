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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5tb2NrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZHYtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL3RyZWUvdHJlZS5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBYTtJQUNqQyxLQUFLLEVBQUU7UUFDTDtZQUNFLElBQUksRUFBRSxvQkFBb0I7WUFDMUIsT0FBTyxFQUFFLGNBQWM7WUFDdkIsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLE1BQU0sRUFBRSxRQUFRO2FBQ2pCO1NBQ0Y7UUFDRDtZQUNFLElBQUksRUFBRSxnQkFBZ0I7WUFDdEIsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxPQUFPO2dCQUNiLE1BQU0sRUFBRSxRQUFRO2FBQ2pCO1lBQ0QsT0FBTyxFQUFFLGFBQWE7WUFDdEIsS0FBSyxFQUFFO2dCQUNMO29CQUNFLE1BQU0sRUFBRTt3QkFDTixJQUFJLEVBQUUscUJBQXFCO3dCQUMzQixPQUFPLEVBQUUsUUFBUTtxQkFDbEI7b0JBQ0QsSUFBSSxFQUFFLCtCQUErQjtvQkFDckMsT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7b0JBQ3ZCLFNBQVMsRUFBRSxnQkFBZ0I7aUJBQzVCO2dCQUNEO29CQUNFLE1BQU0sRUFBRTt3QkFDTixJQUFJLEVBQUUsb0JBQW9CO3dCQUMxQixPQUFPLEVBQUUsUUFBUTtxQkFDbEI7b0JBQ0QsSUFBSSxFQUFFLDJCQUEyQjtvQkFDakMsT0FBTyxFQUFFLHVCQUF1QjtvQkFDaEMsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtvQkFDdkIsS0FBSyxFQUFFO3dCQUNMOzRCQUNFLE1BQU0sRUFBRTtnQ0FDTixJQUFJLEVBQUUsb0JBQW9CO2dDQUMxQixPQUFPLEVBQUUsUUFB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RDs0QkFDRSxPQUFPLEVBQUUsV0FBVzs0QkFDcEIsSUFBSSxFQUFFLGVBQWU7NEJBQ3JCLElBQUksRUFBRSxvREFBb0Q7NEJBQzFELE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7eUJBQ3hCO3dCQUNEOzRCQUNFLElBQUksRUFBRSxlQUFlOzRCQUNyQixJQUFJLEVBQUUsc0NBQXNDOzRCQUM1QyxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO3lCQUN4Qjt3QkFDRDs0QkFDRSxHQUFHLEVBQUUsMENBQTBDOzRCQUMvQyxJQUFJLEVBQUUsa0VBQWtFOzRCQUN4RSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO3lCQUN4Qjt3QkFDRDs0QkFDRSxHQUFHLEVBQUUsMENBQTBDOzRCQUMvQyxJQUFJLEVBQUUsd0NBQXdDOzRCQUM5QyxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFOzRCQUN2QixPQUFPLEVBQUUsV0FBVzt5QkFDckI7d0JBQ0Q7NEJBQ0UsSUFBSSxFQUFFLGVBQWU7NEJBQ3JCLElBQUksRUFBRSxvQkFBb0I7NEJBQzFCLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7NEJBQ3ZCLE9BQU8sRUFBRSxXQUFXO3lCQUNyQjt3QkFDRDs0QkFDRSxJQUFJLEVBQUUsZUFBZTs0QkFDckIsSUFBSSxFQUFFLHVHQUF1Rzs0QkFDN0csTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTt5QkFDeEI7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJlZURhdGEgfSBmcm9tICcuL3RyZWUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRSRUVfTU9DSzogVHJlZURhdGEgPSB7XHJcbiAgaXRlbXM6IFtcclxuICAgIHtcclxuICAgICAgdGV4dDogJ0NvbGxlemlvbmUgZFxcJ2FydGUnLFxyXG4gICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcclxuICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgaHJlZjogJ2h0dHBzOi8vZ29vZ2xlLml0JyxcclxuICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiAnQ2VudHJvIGFyY2hpdmknLFxyXG4gICAgICBhbmNob3I6IHtcclxuICAgICAgICBocmVmOiAnL2hvbWUnLFxyXG4gICAgICAgIHRhcmdldDogJ19ibGFuaydcclxuICAgICAgfSxcclxuICAgICAgY2xhc3NlczogJ2lzLWV4cGFuZGVkJyxcclxuICAgICAgaXRlbXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0b2dnbGU6IHtcclxuICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtcmlnaHQnLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRleHQ6ICc1KzFBQSBBZ2VuemlhIGRpIEFyY2hpdGV0dHVyYScsXHJcbiAgICAgICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcclxuICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxyXG4gICAgICAgICAgaWNvbnJpZ2h0OiAnbjctaWNvbi1pbWFnZXMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0b2dnbGU6IHtcclxuICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtZG93bicsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGV4dDogJ0FCRFIgQXJjaGl0ZXR0aSBBc3NvY2lhdGknLFxyXG4gICAgICAgICAgY2xhc3NlczogJ2lzLWV4cGFuZGVkIGlzLWFjdGl2ZScsXHJcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcclxuICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0b2dnbGU6IHtcclxuICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLWRvd24nLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHRleHQ6ICc1KzFBQSBBZ2VuemlhIGRpIEFyY2hpdGV0dHVyYScsXHJcbiAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWV4cGFuZGVkJyxcclxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcclxuICAgICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB0b2dnbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgdGV4dDogJzUrMUFBIEFnZW56aWEgZGkgQXJjaGl0ZXR0dXJhJyxcclxuICAgICAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWNvbGxhcHNlZCcsXHJcbiAgICAgICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB0b2dnbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1kb3duJyxcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnQUJEUiBBcmNoaXRldHRpIEFzc29jaWF0aScsXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1leHBhbmRlZCcsXHJcbiAgICAgICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxyXG4gICAgICAgICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1kb3duJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnNSsxQUEgQWdlbnppYSBkaSBBcmNoaXRldHR1cmEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWV4cGFuZGVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtcmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICc1KzFBQSBBZ2VuemlhIGRpIEFyY2hpdGV0dHVyYScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWNvbGxhcHNlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtcmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdBQkRSIEFyY2hpdGV0dGkgQXNzb2NpYXRpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQUJEUiBBcmNoaXRldHRpIEFzc29jaWF0aScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0b2dnbGU6IHtcclxuICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB0ZXh0OiAnQUJEUiBBcmNoaXRldHRpIEFzc29jaWF0aScsXHJcbiAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWNvbGxhcHNlZCcsXHJcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRvZ2dsZToge1xyXG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGV4dDogJ0FXUCcsXHJcbiAgICAgICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcclxuICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0b2dnbGU6IHtcclxuICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtcmlnaHQnLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRleHQ6ICdCT0VSSSBDaW5pJyxcclxuICAgICAgICAgIGNsYXNzZXM6ICdpcy1jb2xsYXBzZWQnLFxyXG4gICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRvZ2dsZToge1xyXG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGV4dDogJ0NBTVBPIEJBRVpBIEFsYmVydG8nLFxyXG4gICAgICAgICAgY2xhc3NlczogJ2lzLWNvbGxhcHNlZCcsXHJcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdG9nZ2xlOiB7XHJcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcclxuICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB0ZXh0OiAnQ0FTU0FOSSBNYXRpbGRlJyxcclxuICAgICAgICAgIGNsYXNzZXM6ICdpcy1jb2xsYXBzZWQnLFxyXG4gICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRvZ2dsZToge1xyXG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGV4dDogJ0dVRVJSSSBEYW5pbG8nLFxyXG4gICAgICAgICAgY2xhc3NlczogJ2lzLWNvbGxhcHNlZCcsXHJcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdG9nZ2xlOiB7XHJcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcclxuICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB0ZXh0OiAnSGFzIGNoaWxkcywgYnV0IGlzIGNsb3NlZCEnLFxyXG4gICAgICAgICAgY2xhc3NlczogJ2lzLWNvbGxhcHNlZCcsXHJcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcclxuICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1maWxlMycsXHJcbiAgICAgICAgICAgICAgdGV4dDogJ0NoaWxkOiBDaW5lbWEgdGVhdHJvIEF1Z3VzdGVvIGUgc3RhemlvbmUgY2VudHJhbGUgZGVsbGEgZnVuaWNvbGFyZSwgTmFwb2xpIChbMTkyNl0gLSBbMTkyN10pJyxcclxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1hY3RpdmUnLFxyXG4gICAgICAgICAgICAgIGljb246ICduNy1pY29uLWZpbGUzJyxcclxuICAgICAgICAgICAgICB0ZXh0OiAnQ2hpbGQ6IFN0YWRpbyBjb211bmFsZSBHLkJlcnRhLCBGaXJlbnplIChbMTkyOV0gLSBbMTkzMl0pJyxcclxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGljb246ICduNy1pY29uLWZpbGUzJyxcclxuICAgICAgICAgICAgICB0ZXh0OiAnQ2hpbGQ6IE1vbnVtZW50byBhbGxhIEJhbmRpZXJhLCBSb21hICgxOTMxKScsXHJcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBpbWc6ICdodHRwOi8vcGxhY2VpbWcuY29tLzI1LzI1L2FyY2gvZ3JheXNjYWxlJyxcclxuICAgICAgICAgICAgICB0ZXh0OiAnQ2hpbGQ6IEJyZXZldHRvIGhhbmdhciBjaXJjb2xhcmUgY29uIHBpYXR0YWZvcm1hIGFudWxhcmUgcm90YW50ZSAoMTkzMiknLFxyXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaW1nOiAnaHR0cDovL3BsYWNlaW1nLmNvbS8yNS8yNS9hcmNoL2dyYXlzY2FsZScsXHJcbiAgICAgICAgICAgICAgdGV4dDogJ0NoaWxkOiBTdGFkaW8gZGEgMTIwLjAwMCBwb3N0aSwgUm9tYSAoWzE5MzNdKScsXHJcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXHJcbiAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWFjdGl2ZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGljb246ICduNy1pY29uLWZpbGUzJyxcclxuICAgICAgICAgICAgICB0ZXh0OiAnQ2hpbGQ6IE1hZ2F6emlubyAoWzE5MzRdKScsXHJcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXHJcbiAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWFjdGl2ZScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1maWxlMycsXHJcbiAgICAgICAgICAgICAgdGV4dDogJ0NoaWxkOiBBdmlvcmltZXNzZSwgT3J2aWV0byAoVFIpLCBPcmJldGVsbG8gKEdSKSwgVG9ycmUgZGVsIExhZ28gKExVKSwgTWFyc2FsYSAoVFApLCBUcmFwYW5pIChbMTkzNV0gLSAxOTQxKScsXHJcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0b2dnbGU6IHtcclxuICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtZG93bicsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGV4dDogJ05FUlZJIFBpZXIgTHVpZ2knLFxyXG4gICAgICAgICAgY2xhc3NlczogJ2lzLWV4cGFuZGVkJyxcclxuICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0b2dnbGU6IHtcclxuICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtZG93bicsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGV4dDogJ0F0dGl2aXTDoCBQcm9mZXNzaW9uYWxlJyxcclxuICAgICAgICAgIGNsYXNzZXM6ICdpcy1leHBhbmRlZCcsXHJcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcclxuICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1maWxlMycsXHJcbiAgICAgICAgICAgICAgdGV4dDogJ0NpbmVtYSB0ZWF0cm8gQXVndXN0ZW8gZSBzdGF6aW9uZSBjZW50cmFsZSBkZWxsYSBmdW5pY29sYXJlLCBOYXBvbGkgKFsxOTI2XSAtIFsxOTI3XSknLFxyXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWFjdGl2ZScsXHJcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnLFxyXG4gICAgICAgICAgICAgIHRleHQ6ICdTdGFkaW8gY29tdW5hbGUgRy5CZXJ0YSwgRmlyZW56ZSAoWzE5MjldIC0gWzE5MzJdKScsXHJcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1maWxlMycsXHJcbiAgICAgICAgICAgICAgdGV4dDogJ01vbnVtZW50byBhbGxhIEJhbmRpZXJhLCBSb21hICgxOTMxKScsXHJcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBpbWc6ICdodHRwOi8vcGxhY2VpbWcuY29tLzI1LzI1L2FyY2gvZ3JheXNjYWxlJyxcclxuICAgICAgICAgICAgICB0ZXh0OiAnQnJldmV0dG8gaGFuZ2FyIGNpcmNvbGFyZSBjb24gcGlhdHRhZm9ybWEgYW51bGFyZSByb3RhbnRlICgxOTMyKScsXHJcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBpbWc6ICdodHRwOi8vcGxhY2VpbWcuY29tLzI1LzI1L2FyY2gvZ3JheXNjYWxlJyxcclxuICAgICAgICAgICAgICB0ZXh0OiAnU3RhZGlvIGRhIDEyMC4wMDAgcG9zdGksIFJvbWEgKFsxOTMzXSknLFxyXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxyXG4gICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1hY3RpdmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1maWxlMycsXHJcbiAgICAgICAgICAgICAgdGV4dDogJ01hZ2F6emlubyAoWzE5MzRdKScsXHJcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXHJcbiAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWFjdGl2ZScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1maWxlMycsXHJcbiAgICAgICAgICAgICAgdGV4dDogJ0F2aW9yaW1lc3NlLCBPcnZpZXRvIChUUiksIE9yYmV0ZWxsbyAoR1IpLCBUb3JyZSBkZWwgTGFnbyAoTFUpLCBNYXJzYWxhIChUUCksIFRyYXBhbmkgKFsxOTM1XSAtIDE5NDEpJyxcclxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gIF1cclxufTtcclxuIl19