export const TREE_MOCK = {
    items: [
        {
            text: "Collezione d'arte",
            classes: 'is-collapsed',
            anchor: {
                href: 'https://google.it',
                target: '_blank',
            },
        },
        {
            text: 'Centro archivi',
            anchor: {
                href: '/home',
                target: '_blank',
            },
            classes: 'is-expanded',
            items: [
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle',
                    },
                    text: '5+1AA Agenzia di Architettura',
                    classes: 'is-collapsed',
                    anchor: { payload: '' },
                    iconright: 'n7-icon-images',
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-down',
                        payload: 'toggle',
                    },
                    text: 'ABDR Architetti Associati',
                    classes: 'is-expanded is-active',
                    anchor: { payload: '' },
                    items: [
                        {
                            toggle: {
                                icon: 'n7-icon-angle-down',
                                payload: 'toggle',
                            },
                            text: '5+1AA Agenzia di Architettura',
                            classes: 'is-expanded',
                            anchor: { payload: '' },
                            items: [
                                {
                                    toggle: {
                                        icon: 'n7-icon-angle-right',
                                        payload: 'toggle',
                                    },
                                    text: '5+1AA Agenzia di Architettura',
                                    classes: 'is-collapsed',
                                    anchor: { payload: '' },
                                },
                                {
                                    toggle: {
                                        icon: 'n7-icon-angle-down',
                                        payload: 'toggle',
                                    },
                                    text: 'ABDR Architetti Associati',
                                    classes: 'is-expanded',
                                    anchor: { payload: '' },
                                    items: [
                                        {
                                            toggle: {
                                                icon: 'n7-icon-angle-down',
                                                payload: 'toggle',
                                            },
                                            text: '5+1AA Agenzia di Architettura',
                                            classes: 'is-expanded',
                                            anchor: { payload: '' },
                                            items: [
                                                {
                                                    toggle: {
                                                        icon: 'n7-icon-angle-right',
                                                        payload: 'toggle',
                                                    },
                                                    text: '5+1AA Agenzia di Architettura',
                                                    classes: 'is-collapsed',
                                                    anchor: { payload: '' },
                                                },
                                                {
                                                    toggle: {
                                                        icon: 'n7-icon-angle-right',
                                                        payload: 'toggle',
                                                    },
                                                    text: 'ABDR Architetti Associati',
                                                    classes: 'is-collapsed',
                                                    anchor: { payload: '' },
                                                },
                                            ],
                                        },
                                        {
                                            toggle: {
                                                icon: 'n7-icon-angle-right',
                                                payload: 'toggle',
                                            },
                                            text: 'ABDR Architetti Associati',
                                            classes: 'is-collapsed',
                                            anchor: { payload: '' },
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            toggle: {
                                icon: 'n7-icon-angle-right',
                                payload: 'toggle',
                            },
                            text: 'ABDR Architetti Associati',
                            classes: 'is-collapsed',
                            anchor: { payload: '' },
                        },
                    ],
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle',
                    },
                    text: 'AWP',
                    classes: 'is-collapsed',
                    anchor: { payload: '' },
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle',
                    },
                    text: 'BOERI Cini',
                    classes: 'is-collapsed',
                    anchor: { payload: '' },
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle',
                    },
                    text: 'CAMPO BAEZA Alberto',
                    classes: 'is-collapsed',
                    anchor: { payload: '' },
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle',
                    },
                    text: 'CASSANI Matilde',
                    classes: 'is-collapsed',
                    anchor: { payload: '' },
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle',
                    },
                    text: 'GUERRI Danilo',
                    classes: 'is-collapsed',
                    anchor: { payload: '' },
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle',
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
                            classes: 'is-active',
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
                    ],
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-down',
                        payload: 'toggle',
                    },
                    text: 'NERVI Pier Luigi',
                    classes: 'is-expanded',
                    anchor: { payload: '' },
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-down',
                        payload: 'toggle',
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
                            classes: 'is-active',
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
                    ],
                },
            ],
        },
    ],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5tb2NrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZHYtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL3RyZWUvdHJlZS5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBYTtJQUNqQyxLQUFLLEVBQUU7UUFDTDtZQUNFLElBQUksRUFBRSxtQkFBbUI7WUFDekIsT0FBTyxFQUFFLGNBQWM7WUFDdkIsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLE1BQU0sRUFBRSxRQUFRO2FBQ2pCO1NBQ0Y7UUFDRDtZQUNFLElBQUksRUFBRSxnQkFBZ0I7WUFDdEIsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxPQUFPO2dCQUNiLE1BQU0sRUFBRSxRQUFRO2FBQ2pCO1lBQ0QsT0FBTyxFQUFFLGFBQWE7WUFDdEIsS0FBSyxFQUFFO2dCQUNMO29CQUNFLE1BQU0sRUFBRTt3QkFDTixJQUFJLEVBQUUscUJBQXFCO3dCQUMzQixPQUFPLEVBQUUsUUFBUTtxQkFDbEI7b0JBQ0QsSUFBSSxFQUFFLCtCQUErQjtvQkFDckMsT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7b0JBQ3ZCLFNBQVMsRUFBRSxnQkFBZ0I7aUJBQzVCO2dCQUNEO29CQUNFLE1BQU0sRUFBRTt3QkFDTixJQUFJLEVBQUUsb0JBQW9CO3dCQUMxQixPQUFPLEVBQUUsUUFBUTtxQkFDbEI7b0JBQ0QsSUFBSSxFQUFFLDJCQUEyQjtvQkFDakMsT0FBTyxFQUFFLHVCQUF1QjtvQkFDaEMsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtvQkFDdkIsS0FBSyxFQUFFO3dCQUNMOzRCQUNFLE1BQU0sRUFBRTtnQ0FDTixJQUFJLEVBQUUsb0JBQW9CO2dDQUMxQixPQUFPLEVBQUUsUUFBUTs2QkFDbEI7NEJBQ0QsSUFBSSxFQUFFLCtCQUErQjs0QkFDckMsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7NEJBQ3ZCLEtBQUssRUFBRTtnQ0FDTDtvQ0FDRSxNQUFNLEVBQUU7d0NBQ04sSUFBSSxFQUFFLHFCQUFxQjt3Q0FDM0IsT0FBTyxFQUFFLFFBQVE7cUNBQ2xCO29DQUNELElBQUksRUFBRSwrQkFBK0I7b0NBQ3JDLE9BQU8sRUFBRSxjQUFjO29DQUN2QixNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO2lDQUN4QjtnQ0FDRDtvQ0FDRSxNQUFNLEVBQUU7d0NBQ04sSUFBSSxFQUFFLG9CQUFvQjt3Q0FDMUIsT0FBTyxFQUFFLFFBQVE7cUNBQ2xCO29DQUNELElBQUksRUFBRSwyQkFBMkI7b0NBQ2pDLE9BQU8sRUFBRSxhQUFhO29DQUN0QixNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO29DQUN2QixLQUFLLEVBQUU7d0NBQ0w7NENBQ0UsTUFBTSxFQUFFO2dEQUNOLElBQUksRUFBRSxvQkFBb0I7Z0RBQzFCLE9BQU8sRUFBRSxRQUFROzZDQUNsQjs0Q0FDRCxJQUFJLEVBQUUsK0JBQStCOzRDQUNyQyxPQUFPLEVBQUUsYUFBYTs0Q0FDdEIsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTs0Q0FDdkIsS0FBSyxFQUFFO2dEQUNMO29EQUNFLE1BQU0sRUFBRTt3REFDTixJQUFJLEVBQUUscUJBQXFCO3dEQUMzQixPQUFPLEVBQUUsUUFBUTtxREFDbEI7b0RBQ0QsSUFBSSxFQUFFLCtCQUErQjtvREFDckMsT0FBTyxFQUFFLGNBQWM7b0RBQ3ZCLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7aURBQ3hCO2dEQUNEO29EQUNFLE1BQU0sRUFBRTt3REFDTixJQUFJLEVBQUUscUJBQXFCO3dEQUMzQixPQUFPLEVBQUUsUUFBUTtxREFDbEI7b0RBQ0QsSUFBSSxFQUFFLDJCQUEyQjtvREFDakMsT0FBTyxFQUFFLGNBQWM7b0RBQ3ZCLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7aURBQ3hCOzZDQUNGO3lDQUNGO3dDQUNEOzRDQUNFLE1BQU0sRUFBRTtnREFDTixJQUFJLEVBQUUscUJBQXFCO2dEQUMzQixPQUFPLEVBQUUsUUFBUTs2Q0FDbEI7NENBQ0QsSUFBSSxFQUFFLDJCQUEyQjs0Q0FDakMsT0FBTyxFQUFFLGNBQWM7NENBQ3ZCLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7eUNBQ3hCO3FDQUNGO2lDQUNGOzZCQUNGO3lCQUNGO3dCQUNEOzRCQUNFLE1BQU0sRUFBRTtnQ0FDTixJQUFJLEVBQUUscUJBQXFCO2dDQUMzQixPQUFPLEVBQUUsUUFBUTs2QkFDbEI7NEJBQ0QsSUFBSSxFQUFFLDJCQUEyQjs0QkFDakMsT0FBTyxFQUFFLGNBQWM7NEJBQ3ZCLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7eUJBQ3hCO3FCQUNGO2lCQUNGO2dCQUNEO29CQUNFLE1BQU0sRUFBRTt3QkFDTixJQUFJLEVBQUUscUJBQXFCO3dCQUMzQixPQUFPLEVBQUUsUUFBUTtxQkFDbEI7b0JBQ0QsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7aUJBQ3hCO2dCQUNEO29CQUNFLE1BQU0sRUFBRTt3QkFDTixJQUFJLEVBQUUscUJBQXFCO3dCQUMzQixPQUFPLEVBQUUsUUFBUTtxQkFDbEI7b0JBQ0QsSUFBSSxFQUFFLFlBQVk7b0JBQ2xCLE9BQU8sRUFBRSxjQUFjO29CQUN2QixNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO2lCQUN4QjtnQkFDRDtvQkFDRSxNQUFNLEVBQUU7d0JBQ04sSUFBSSxFQUFFLHFCQUFxQjt3QkFDM0IsT0FBTyxFQUFFLFFBQVE7cUJBQ2xCO29CQUNELElBQUksRUFBRSxxQkFBcUI7b0JBQzNCLE9BQU8sRUFBRSxjQUFjO29CQUN2QixNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO2lCQUN4QjtnQkFDRDtvQkFDRSxNQUFNLEVBQUU7d0JBQ04sSUFBSSxFQUFFLHFCQUFxQjt3QkFDM0IsT0FBTyxFQUFFLFFBQVE7cUJBQ2xCO29CQUNELElBQUksRUFBRSxpQkFBaUI7b0JBQ3ZCLE9BQU8sRUFBRSxjQUFjO29CQUN2QixNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO2lCQUN4QjtnQkFDRDtvQkFDRSxNQUFNLEVBQUU7d0JBQ04sSUFBSSxFQUFFLHFCQUFxQjt3QkFDM0IsT0FBTyxFQUFFLFFBQVE7cUJBQ2xCO29CQUNELElBQUksRUFBRSxlQUFlO29CQUNyQixPQUFPLEVBQUUsY0FBYztvQkFDdkIsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtpQkFDeEI7Z0JBQ0Q7b0JBQ0UsTUFBTSxFQUFFO3dCQUNOLElBQUksRUFBRSxxQkFBcUI7d0JBQzNCLE9BQU8sRUFBRSxRQUFRO3FCQUNsQjtvQkFDRCxJQUFJLEVBQUUsNEJBQTRCO29CQUNsQyxPQUFPLEVBQUUsY0FBYztvQkFDdkIsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtvQkFDdkIsS0FBSyxFQUFFO3dCQUNMOzRCQUNFLElBQUksRUFBRSxlQUFlOzRCQUNyQixJQUFJLEVBQUUsOEZBQThGOzRCQUNwRyxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO3lCQUN4Qjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsV0FBVzs0QkFDcEIsSUFBSSxFQUFFLGVBQWU7NEJBQ3JCLElBQUksRUFBRSwyREFBMkQ7NEJBQ2pFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7eUJBQ3hCO3dCQUNEOzRCQUNFLElBQUksRUFBRSxlQUFlOzRCQUNyQixJQUFJLEVBQUUsNkNBQTZDOzRCQUNuRCxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO3lCQUN4Qjt3QkFDRDs0QkFDRSxHQUFHLEVBQUUsMENBQTBDOzRCQUMvQyxJQUFJLEVBQUUseUVBQXlFOzRCQUMvRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO3lCQUN4Qjt3QkFDRDs0QkFDRSxHQUFHLEVBQUUsMENBQTBDOzRCQUMvQyxJQUFJLEVBQUUsK0NBQStDOzRCQUNyRCxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFOzRCQUN2QixPQUFPLEVBQUUsV0FBVzt5QkFDckI7d0JBQ0Q7NEJBQ0UsSUFBSSxFQUFFLGVBQWU7NEJBQ3JCLElBQUksRUFBRSwyQkFBMkI7NEJBQ2pDLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7NEJBQ3ZCLE9BQU8sRUFBRSxXQUFXO3lCQUNyQjt3QkFDRDs0QkFDRSxJQUFJLEVBQUUsZUFBZTs0QkFDckIsSUFBSSxFQUFFLDhHQUE4Rzs0QkFDcEgsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTt5QkFDeEI7cUJBQ0Y7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsTUFBTSxFQUFFO3dCQUNOLElBQUksRUFBRSxvQkFBb0I7d0JBQzFCLE9BQU8sRUFBRSxRQUFRO3FCQUNsQjtvQkFDRCxJQUFJLEVBQUUsa0JBQWtCO29CQUN4QixPQUFPLEVBQUUsYUFBYTtvQkFDdEIsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtpQkFDeEI7Z0JBQ0Q7b0JBQ0UsTUFBTSxFQUFFO3dCQUNOLElBQUksRUFBRSxvQkFBb0I7d0JBQzFCLE9BQU8sRUFBRSxRQUFRO3FCQUNsQjtvQkFDRCxJQUFJLEVBQUUsd0JBQXdCO29CQUM5QixPQUFPLEVBQUUsYUFBYTtvQkFDdEIsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtvQkFDdkIsS0FBSyxFQUFFO3dCQUNMOzRCQUNFLElBQUksRUFBRSxlQUFlOzRCQUNyQixJQUFJLEVBQUUsdUZBQXVGOzRCQUM3RixNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO3lCQUN4Qjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsV0FBVzs0QkFDcEIsSUFBSSxFQUFFLGVBQWU7NEJBQ3JCLElBQUksRUFBRSxvREFBb0Q7NEJBQzFELE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7eUJBQ3hCO3dCQUNEOzRCQUNFLElBQUksRUFBRSxlQUFlOzRCQUNyQixJQUFJLEVBQUUsc0NBQXNDOzRCQUM1QyxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO3lCQUN4Qjt3QkFDRDs0QkFDRSxHQUFHLEVBQUUsMENBQTBDOzRCQUMvQyxJQUFJLEVBQUUsa0VBQWtFOzRCQUN4RSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO3lCQUN4Qjt3QkFDRDs0QkFDRSxHQUFHLEVBQUUsMENBQTBDOzRCQUMvQyxJQUFJLEVBQUUsd0NBQXdDOzRCQUM5QyxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFOzRCQUN2QixPQUFPLEVBQUUsV0FBVzt5QkFDckI7d0JBQ0Q7NEJBQ0UsSUFBSSxFQUFFLGVBQWU7NEJBQ3JCLElBQUksRUFBRSxvQkFBb0I7NEJBQzFCLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7NEJBQ3ZCLE9BQU8sRUFBRSxXQUFXO3lCQUNyQjt3QkFDRDs0QkFDRSxJQUFJLEVBQUUsZUFBZTs0QkFDckIsSUFBSSxFQUFFLHVHQUF1Rzs0QkFDN0csTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTt5QkFDeEI7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJlZURhdGEgfSBmcm9tICcuL3RyZWUnO1xuXG5leHBvcnQgY29uc3QgVFJFRV9NT0NLOiBUcmVlRGF0YSA9IHtcbiAgaXRlbXM6IFtcbiAgICB7XG4gICAgICB0ZXh0OiBcIkNvbGxlemlvbmUgZCdhcnRlXCIsXG4gICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcbiAgICAgIGFuY2hvcjoge1xuICAgICAgICBocmVmOiAnaHR0cHM6Ly9nb29nbGUuaXQnLFxuICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdDZW50cm8gYXJjaGl2aScsXG4gICAgICBhbmNob3I6IHtcbiAgICAgICAgaHJlZjogJy9ob21lJyxcbiAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJyxcbiAgICAgIH0sXG4gICAgICBjbGFzc2VzOiAnaXMtZXhwYW5kZWQnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRvZ2dsZToge1xuICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtcmlnaHQnLFxuICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiAnNSsxQUEgQWdlbnppYSBkaSBBcmNoaXRldHR1cmEnLFxuICAgICAgICAgIGNsYXNzZXM6ICdpcy1jb2xsYXBzZWQnLFxuICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxuICAgICAgICAgIGljb25yaWdodDogJ243LWljb24taW1hZ2VzJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRvZ2dsZToge1xuICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtZG93bicsXG4gICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRleHQ6ICdBQkRSIEFyY2hpdGV0dGkgQXNzb2NpYXRpJyxcbiAgICAgICAgICBjbGFzc2VzOiAnaXMtZXhwYW5kZWQgaXMtYWN0aXZlJyxcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0b2dnbGU6IHtcbiAgICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1kb3duJyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdGV4dDogJzUrMUFBIEFnZW56aWEgZGkgQXJjaGl0ZXR0dXJhJyxcbiAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWV4cGFuZGVkJyxcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdG9nZ2xlOiB7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZScsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdGV4dDogJzUrMUFBIEFnZW56aWEgZGkgQXJjaGl0ZXR0dXJhJyxcbiAgICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1jb2xsYXBzZWQnLFxuICAgICAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0b2dnbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtZG93bicsXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdBQkRSIEFyY2hpdGV0dGkgQXNzb2NpYXRpJyxcbiAgICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1leHBhbmRlZCcsXG4gICAgICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICB0b2dnbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLWRvd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZScsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnNSsxQUEgQWdlbnppYSBkaSBBcmNoaXRldHR1cmEnLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1leHBhbmRlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtcmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnNSsxQUEgQWdlbnppYSBkaSBBcmNoaXRldHR1cmEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdBQkRSIEFyY2hpdGV0dGkgQXNzb2NpYXRpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWNvbGxhcHNlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJyxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdBQkRSIEFyY2hpdGV0dGkgQXNzb2NpYXRpJyxcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcbiAgICAgICAgICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRvZ2dsZToge1xuICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdGV4dDogJ0FCRFIgQXJjaGl0ZXR0aSBBc3NvY2lhdGknLFxuICAgICAgICAgICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0b2dnbGU6IHtcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcbiAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGV4dDogJ0FXUCcsXG4gICAgICAgICAgY2xhc3NlczogJ2lzLWNvbGxhcHNlZCcsXG4gICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0b2dnbGU6IHtcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcbiAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGV4dDogJ0JPRVJJIENpbmknLFxuICAgICAgICAgIGNsYXNzZXM6ICdpcy1jb2xsYXBzZWQnLFxuICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdG9nZ2xlOiB7XG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXG4gICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRleHQ6ICdDQU1QTyBCQUVaQSBBbGJlcnRvJyxcbiAgICAgICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRvZ2dsZToge1xuICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtcmlnaHQnLFxuICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiAnQ0FTU0FOSSBNYXRpbGRlJyxcbiAgICAgICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRvZ2dsZToge1xuICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtcmlnaHQnLFxuICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiAnR1VFUlJJIERhbmlsbycsXG4gICAgICAgICAgY2xhc3NlczogJ2lzLWNvbGxhcHNlZCcsXG4gICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0b2dnbGU6IHtcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcbiAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGV4dDogJ0hhcyBjaGlsZHMsIGJ1dCBpcyBjbG9zZWQhJyxcbiAgICAgICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1maWxlMycsXG4gICAgICAgICAgICAgIHRleHQ6ICdDaGlsZDogQ2luZW1hIHRlYXRybyBBdWd1c3RlbyBlIHN0YXppb25lIGNlbnRyYWxlIGRlbGxhIGZ1bmljb2xhcmUsIE5hcG9saSAoWzE5MjZdIC0gWzE5MjddKScsXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWFjdGl2ZScsXG4gICAgICAgICAgICAgIGljb246ICduNy1pY29uLWZpbGUzJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0NoaWxkOiBTdGFkaW8gY29tdW5hbGUgRy5CZXJ0YSwgRmlyZW56ZSAoWzE5MjldIC0gWzE5MzJdKScsXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnLFxuICAgICAgICAgICAgICB0ZXh0OiAnQ2hpbGQ6IE1vbnVtZW50byBhbGxhIEJhbmRpZXJhLCBSb21hICgxOTMxKScsXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaW1nOiAnaHR0cDovL3BsYWNlaW1nLmNvbS8yNS8yNS9hcmNoL2dyYXlzY2FsZScsXG4gICAgICAgICAgICAgIHRleHQ6ICdDaGlsZDogQnJldmV0dG8gaGFuZ2FyIGNpcmNvbGFyZSBjb24gcGlhdHRhZm9ybWEgYW51bGFyZSByb3RhbnRlICgxOTMyKScsXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaW1nOiAnaHR0cDovL3BsYWNlaW1nLmNvbS8yNS8yNS9hcmNoL2dyYXlzY2FsZScsXG4gICAgICAgICAgICAgIHRleHQ6ICdDaGlsZDogU3RhZGlvIGRhIDEyMC4wMDAgcG9zdGksIFJvbWEgKFsxOTMzXSknLFxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWFjdGl2ZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1maWxlMycsXG4gICAgICAgICAgICAgIHRleHQ6ICdDaGlsZDogTWFnYXp6aW5vIChbMTkzNF0pJyxcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXG4gICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1hY3RpdmUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnLFxuICAgICAgICAgICAgICB0ZXh0OiAnQ2hpbGQ6IEF2aW9yaW1lc3NlLCBPcnZpZXRvIChUUiksIE9yYmV0ZWxsbyAoR1IpLCBUb3JyZSBkZWwgTGFnbyAoTFUpLCBNYXJzYWxhIChUUCksIFRyYXBhbmkgKFsxOTM1XSAtIDE5NDEpJyxcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0b2dnbGU6IHtcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLWRvd24nLFxuICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiAnTkVSVkkgUGllciBMdWlnaScsXG4gICAgICAgICAgY2xhc3NlczogJ2lzLWV4cGFuZGVkJyxcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRvZ2dsZToge1xuICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtZG93bicsXG4gICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRleHQ6ICdBdHRpdml0w6AgUHJvZmVzc2lvbmFsZScsXG4gICAgICAgICAgY2xhc3NlczogJ2lzLWV4cGFuZGVkJyxcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1maWxlMycsXG4gICAgICAgICAgICAgIHRleHQ6ICdDaW5lbWEgdGVhdHJvIEF1Z3VzdGVvIGUgc3RhemlvbmUgY2VudHJhbGUgZGVsbGEgZnVuaWNvbGFyZSwgTmFwb2xpIChbMTkyNl0gLSBbMTkyN10pJyxcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc2VzOiAnaXMtYWN0aXZlJyxcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnLFxuICAgICAgICAgICAgICB0ZXh0OiAnU3RhZGlvIGNvbXVuYWxlIEcuQmVydGEsIEZpcmVuemUgKFsxOTI5XSAtIFsxOTMyXSknLFxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGljb246ICduNy1pY29uLWZpbGUzJyxcbiAgICAgICAgICAgICAgdGV4dDogJ01vbnVtZW50byBhbGxhIEJhbmRpZXJhLCBSb21hICgxOTMxKScsXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaW1nOiAnaHR0cDovL3BsYWNlaW1nLmNvbS8yNS8yNS9hcmNoL2dyYXlzY2FsZScsXG4gICAgICAgICAgICAgIHRleHQ6ICdCcmV2ZXR0byBoYW5nYXIgY2lyY29sYXJlIGNvbiBwaWF0dGFmb3JtYSBhbnVsYXJlIHJvdGFudGUgKDE5MzIpJyxcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpbWc6ICdodHRwOi8vcGxhY2VpbWcuY29tLzI1LzI1L2FyY2gvZ3JheXNjYWxlJyxcbiAgICAgICAgICAgICAgdGV4dDogJ1N0YWRpbyBkYSAxMjAuMDAwIHBvc3RpLCBSb21hIChbMTkzM10pJyxcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXG4gICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1hY3RpdmUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnLFxuICAgICAgICAgICAgICB0ZXh0OiAnTWFnYXp6aW5vIChbMTkzNF0pJyxcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXG4gICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1hY3RpdmUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnLFxuICAgICAgICAgICAgICB0ZXh0OiAnQXZpb3JpbWVzc2UsIE9ydmlldG8gKFRSKSwgT3JiZXRlbGxvIChHUiksIFRvcnJlIGRlbCBMYWdvIChMVSksIE1hcnNhbGEgKFRQKSwgVHJhcGFuaSAoWzE5MzVdIC0gMTk0MSknLFxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXSxcbn07XG4iXX0=