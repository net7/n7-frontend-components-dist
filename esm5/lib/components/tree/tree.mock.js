/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tree/tree.mock.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var TREE_MOCK = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5tb2NrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90cmVlL3RyZWUubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxNQUFNLEtBQU8sU0FBUyxHQUFhO0lBQ2pDLEtBQUssRUFBRTtRQUNMO1lBQ0UsSUFBSSxFQUFFLG9CQUFvQjtZQUMxQixPQUFPLEVBQUUsY0FBYztZQUN2QixNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLG1CQUFtQjtnQkFDekIsTUFBTSxFQUFFLFFBQVE7YUFDakI7U0FDRjtRQUNEO1lBQ0UsSUFBSSxFQUFFLGdCQUFnQjtZQUN0QixNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLE9BQU87Z0JBQ2IsTUFBTSxFQUFFLFFBQVE7YUFDakI7WUFDRCxPQUFPLEVBQUUsYUFBYTtZQUN0QixLQUFLLEVBQUU7Z0JBQ0w7b0JBQ0UsTUFBTSxFQUFFO3dCQUNOLElBQUksRUFBRSxxQkFBcUI7d0JBQzNCLE9BQU8sRUFBRSxRQUFRO3FCQUNsQjtvQkFDRCxJQUFJLEVBQUUsK0JBQStCO29CQUNyQyxPQUFPLEVBQUUsY0FBYztvQkFDdkIsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtvQkFDdkIsU0FBUyxFQUFFLGdCQUFnQjtpQkFDNUI7Z0JBQ0Q7b0JBQ0UsTUFBTSxFQUFFO3dCQUNOLElBQUksRUFBRSxvQkFBb0I7d0JBQzFCLE9BQU8sRUFBRSxRQUFRO3FCQUNsQjtvQkFDRCxJQUFJLEVBQUUsMkJBQTJCO29CQUNqQyxPQUFPLEVBQUUsdUJBQXVCO29CQUNoQyxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO29CQUN2QixLQUFLLEVBQUU7d0JBQ0w7NEJBQ0UsTUFBTSxFQUFFO2dDQUNOLElBQUksRUFBRSxvQkFBb0I7Z0NBQzFCLE9BQU8sRUFBRSxRQUFROzZCQUNsQjs0QkFDRCxJQUFJ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QUFXOzRCQUNwQixJQUFJLEVBQUUsZUFBZTs0QkFDckIsSUFBSSxFQUFFLG9EQUFvRDs0QkFDMUQsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTt5QkFDeEI7d0JBQ0Q7NEJBQ0UsSUFBSSxFQUFFLGVBQWU7NEJBQ3JCLElBQUksRUFBRSxzQ0FBc0M7NEJBQzVDLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7eUJBQ3hCO3dCQUNEOzRCQUNFLEdBQUcsRUFBRSwwQ0FBMEM7NEJBQy9DLElBQUksRUFBRSxrRUFBa0U7NEJBQ3hFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7eUJBQ3hCO3dCQUNEOzRCQUNFLEdBQUcsRUFBRSwwQ0FBMEM7NEJBQy9DLElBQUksRUFBRSx3Q0FBd0M7NEJBQzlDLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7NEJBQ3ZCLE9BQU8sRUFBRSxXQUFXO3lCQUNyQjt3QkFDRDs0QkFDRSxJQUFJLEVBQUUsZUFBZTs0QkFDckIsSUFBSSxFQUFFLG9CQUFvQjs0QkFDMUIsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTs0QkFDdkIsT0FBTyxFQUFFLFdBQVc7eUJBQ3JCO3dCQUNEOzRCQUNFLElBQUksRUFBRSxlQUFlOzRCQUNyQixJQUFJLEVBQUUsdUdBQXVHOzRCQUM3RyxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO3lCQUN4QjtxQkFDRjtpQkFDRjthQUNGO1NBQ0Y7S0FDRjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJlZURhdGEgfSBmcm9tICcuL3RyZWUnO1xuXG5leHBvcnQgY29uc3QgVFJFRV9NT0NLOiBUcmVlRGF0YSA9IHtcbiAgaXRlbXM6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnQ29sbGV6aW9uZSBkXFwnYXJ0ZScsXG4gICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcbiAgICAgIGFuY2hvcjoge1xuICAgICAgICBocmVmOiAnaHR0cHM6Ly9nb29nbGUuaXQnLFxuICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0NlbnRybyBhcmNoaXZpJyxcbiAgICAgIGFuY2hvcjoge1xuICAgICAgICBocmVmOiAnL2hvbWUnLFxuICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnXG4gICAgICB9LFxuICAgICAgY2xhc3NlczogJ2lzLWV4cGFuZGVkJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0b2dnbGU6IHtcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcbiAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiAnNSsxQUEgQWdlbnppYSBkaSBBcmNoaXRldHR1cmEnLFxuICAgICAgICAgIGNsYXNzZXM6ICdpcy1jb2xsYXBzZWQnLFxuICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxuICAgICAgICAgIGljb25yaWdodDogJ243LWljb24taW1hZ2VzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdG9nZ2xlOiB7XG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1kb3duJyxcbiAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiAnQUJEUiBBcmNoaXRldHRpIEFzc29jaWF0aScsXG4gICAgICAgICAgY2xhc3NlczogJ2lzLWV4cGFuZGVkIGlzLWFjdGl2ZScsXG4gICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdG9nZ2xlOiB7XG4gICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtZG93bicsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdGV4dDogJzUrMUFBIEFnZW56aWEgZGkgQXJjaGl0ZXR0dXJhJyxcbiAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWV4cGFuZGVkJyxcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdG9nZ2xlOiB7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnNSsxQUEgQWdlbnppYSBkaSBBcmNoaXRldHR1cmEnLFxuICAgICAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWNvbGxhcHNlZCcsXG4gICAgICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdG9nZ2xlOiB7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLWRvd24nLFxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdBQkRSIEFyY2hpdGV0dGkgQXNzb2NpYXRpJyxcbiAgICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1leHBhbmRlZCcsXG4gICAgICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICB0b2dnbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLWRvd24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICc1KzFBQSBBZ2VuemlhIGRpIEFyY2hpdGV0dHVyYScsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWV4cGFuZGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJzUrMUFBIEFnZW56aWEgZGkgQXJjaGl0ZXR0dXJhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWNvbGxhcHNlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0FCRFIgQXJjaGl0ZXR0aSBBc3NvY2lhdGknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0FCRFIgQXJjaGl0ZXR0aSBBc3NvY2lhdGknLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1jb2xsYXBzZWQnLFxuICAgICAgICAgICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdG9nZ2xlOiB7XG4gICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtcmlnaHQnLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHRleHQ6ICdBQkRSIEFyY2hpdGV0dGkgQXNzb2NpYXRpJyxcbiAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWNvbGxhcHNlZCcsXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRvZ2dsZToge1xuICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtcmlnaHQnLFxuICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRleHQ6ICdBV1AnLFxuICAgICAgICAgIGNsYXNzZXM6ICdpcy1jb2xsYXBzZWQnLFxuICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0b2dnbGU6IHtcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcbiAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiAnQk9FUkkgQ2luaScsXG4gICAgICAgICAgY2xhc3NlczogJ2lzLWNvbGxhcHNlZCcsXG4gICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRvZ2dsZToge1xuICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtcmlnaHQnLFxuICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRleHQ6ICdDQU1QTyBCQUVaQSBBbGJlcnRvJyxcbiAgICAgICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdG9nZ2xlOiB7XG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXG4gICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdGV4dDogJ0NBU1NBTkkgTWF0aWxkZScsXG4gICAgICAgICAgY2xhc3NlczogJ2lzLWNvbGxhcHNlZCcsXG4gICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRvZ2dsZToge1xuICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtcmlnaHQnLFxuICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRleHQ6ICdHVUVSUkkgRGFuaWxvJyxcbiAgICAgICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdG9nZ2xlOiB7XG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXG4gICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdGV4dDogJ0hhcyBjaGlsZHMsIGJ1dCBpcyBjbG9zZWQhJyxcbiAgICAgICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1maWxlMycsXG4gICAgICAgICAgICAgIHRleHQ6ICdDaGlsZDogQ2luZW1hIHRlYXRybyBBdWd1c3RlbyBlIHN0YXppb25lIGNlbnRyYWxlIGRlbGxhIGZ1bmljb2xhcmUsIE5hcG9saSAoWzE5MjZdIC0gWzE5MjddKScsXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWFjdGl2ZScsXG4gICAgICAgICAgICAgIGljb246ICduNy1pY29uLWZpbGUzJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0NoaWxkOiBTdGFkaW8gY29tdW5hbGUgRy5CZXJ0YSwgRmlyZW56ZSAoWzE5MjldIC0gWzE5MzJdKScsXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnLFxuICAgICAgICAgICAgICB0ZXh0OiAnQ2hpbGQ6IE1vbnVtZW50byBhbGxhIEJhbmRpZXJhLCBSb21hICgxOTMxKScsXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaW1nOiAnaHR0cDovL3BsYWNlaW1nLmNvbS8yNS8yNS9hcmNoL2dyYXlzY2FsZScsXG4gICAgICAgICAgICAgIHRleHQ6ICdDaGlsZDogQnJldmV0dG8gaGFuZ2FyIGNpcmNvbGFyZSBjb24gcGlhdHRhZm9ybWEgYW51bGFyZSByb3RhbnRlICgxOTMyKScsXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaW1nOiAnaHR0cDovL3BsYWNlaW1nLmNvbS8yNS8yNS9hcmNoL2dyYXlzY2FsZScsXG4gICAgICAgICAgICAgIHRleHQ6ICdDaGlsZDogU3RhZGlvIGRhIDEyMC4wMDAgcG9zdGksIFJvbWEgKFsxOTMzXSknLFxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWFjdGl2ZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGljb246ICduNy1pY29uLWZpbGUzJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0NoaWxkOiBNYWdhenppbm8gKFsxOTM0XSknLFxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWFjdGl2ZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1maWxlMycsXG4gICAgICAgICAgICAgIHRleHQ6ICdDaGlsZDogQXZpb3JpbWVzc2UsIE9ydmlldG8gKFRSKSwgT3JiZXRlbGxvIChHUiksIFRvcnJlIGRlbCBMYWdvIChMVSksIE1hcnNhbGEgKFRQKSwgVHJhcGFuaSAoWzE5MzVdIC0gMTk0MSknLFxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdG9nZ2xlOiB7XG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1kb3duJyxcbiAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiAnTkVSVkkgUGllciBMdWlnaScsXG4gICAgICAgICAgY2xhc3NlczogJ2lzLWV4cGFuZGVkJyxcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdG9nZ2xlOiB7XG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1kb3duJyxcbiAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiAnQXR0aXZpdMOgIFByb2Zlc3Npb25hbGUnLFxuICAgICAgICAgIGNsYXNzZXM6ICdpcy1leHBhbmRlZCcsXG4gICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnLFxuICAgICAgICAgICAgICB0ZXh0OiAnQ2luZW1hIHRlYXRybyBBdWd1c3RlbyBlIHN0YXppb25lIGNlbnRyYWxlIGRlbGxhIGZ1bmljb2xhcmUsIE5hcG9saSAoWzE5MjZdIC0gWzE5MjddKScsXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWFjdGl2ZScsXG4gICAgICAgICAgICAgIGljb246ICduNy1pY29uLWZpbGUzJyxcbiAgICAgICAgICAgICAgdGV4dDogJ1N0YWRpbyBjb211bmFsZSBHLkJlcnRhLCBGaXJlbnplIChbMTkyOV0gLSBbMTkzMl0pJyxcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1maWxlMycsXG4gICAgICAgICAgICAgIHRleHQ6ICdNb251bWVudG8gYWxsYSBCYW5kaWVyYSwgUm9tYSAoMTkzMSknLFxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGltZzogJ2h0dHA6Ly9wbGFjZWltZy5jb20vMjUvMjUvYXJjaC9ncmF5c2NhbGUnLFxuICAgICAgICAgICAgICB0ZXh0OiAnQnJldmV0dG8gaGFuZ2FyIGNpcmNvbGFyZSBjb24gcGlhdHRhZm9ybWEgYW51bGFyZSByb3RhbnRlICgxOTMyKScsXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaW1nOiAnaHR0cDovL3BsYWNlaW1nLmNvbS8yNS8yNS9hcmNoL2dyYXlzY2FsZScsXG4gICAgICAgICAgICAgIHRleHQ6ICdTdGFkaW8gZGEgMTIwLjAwMCBwb3N0aSwgUm9tYSAoWzE5MzNdKScsXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxuICAgICAgICAgICAgICBjbGFzc2VzOiAnaXMtYWN0aXZlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnLFxuICAgICAgICAgICAgICB0ZXh0OiAnTWFnYXp6aW5vIChbMTkzNF0pJyxcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXG4gICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1hY3RpdmUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnLFxuICAgICAgICAgICAgICB0ZXh0OiAnQXZpb3JpbWVzc2UsIE9ydmlldG8gKFRSKSwgT3JiZXRlbGxvIChHUiksIFRvcnJlIGRlbCBMYWdvIChMVSksIE1hcnNhbGEgKFRQKSwgVHJhcGFuaSAoWzE5MzVdIC0gMTk0MSknLFxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgXVxuICAgIH0sXG4gIF1cbn07XG4iXX0=