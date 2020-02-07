/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tree/tree.mock.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5tb2NrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90cmVlL3RyZWUubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxNQUFNLE9BQU8sU0FBUyxHQUFjO0lBQ2xDLEtBQUssRUFBRTtRQUNMO1lBQ0UsSUFBSSxFQUFFLG9CQUFvQjtZQUMxQixPQUFPLEVBQUUsY0FBYztZQUN2QixNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLG1CQUFtQjtnQkFDekIsTUFBTSxFQUFFLFFBQVE7YUFDakI7U0FDRjtRQUNEO1lBQ0UsSUFBSSxFQUFFLGdCQUFnQjtZQUN0QixNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLE9BQU87Z0JBQ2IsTUFBTSxFQUFFLFFBQVE7YUFDakI7WUFDRCxPQUFPLEVBQUUsYUFBYTtZQUN0QixLQUFLLEVBQUU7Z0JBQ0w7b0JBQ0UsTUFBTSxFQUFFO3dCQUNOLElBQUksRUFBRSxxQkFBcUI7d0JBQzNCLE9BQU8sRUFBRSxRQUFRO3FCQUNsQjtvQkFDRCxJQUFJLEVBQUUsK0JBQStCO29CQUNyQyxPQUFPLEVBQUUsY0FBYztvQkFDdkIsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtvQkFDdkIsU0FBUyxFQUFFLGdCQUFnQjtpQkFDNUI7Z0JBQ0Q7b0JBQ0UsTUFBTSxFQUFFO3dCQUNOLElBQUksRUFBRSxvQkFBb0I7d0JBQzFCLE9BQU8sRUFBRSxRQUFRO3FCQUNsQjtvQkFDRCxJQUFJLEVBQUUsMkJBQTJCO29CQUNqQyxPQUFPLEVBQUUsdUJBQXVCO29CQUNoQyxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO29CQUN2QixLQUFLLEVBQUU7d0JBQ0w7NEJBQ0UsTUFBTSxFQUFFO2dDQUNOLElBQUksRUFBRSxvQkFBb0I7Z0NBQzFCLE9BQU8sRUFBRSxRQUFROzZCQUNsQjs0QkFDRCxJQUFJ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QUFXOzRCQUNwQixJQUFJLEVBQUUsZUFBZTs0QkFDckIsSUFBSSxFQUFFLG9EQUFvRDs0QkFDMUQsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTt5QkFDeEI7d0JBQ0Q7NEJBQ0UsSUFBSSxFQUFFLGVBQWU7NEJBQ3JCLElBQUksRUFBRSxzQ0FBc0M7NEJBQzVDLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7eUJBQ3hCO3dCQUNEOzRCQUNFLEdBQUcsRUFBRSwwQ0FBMEM7NEJBQy9DLElBQUksRUFBRSxrRUFBa0U7NEJBQ3hFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7eUJBQ3hCO3dCQUNEOzRCQUNFLEdBQUcsRUFBRSwwQ0FBMEM7NEJBQy9DLElBQUksRUFBRSx3Q0FBd0M7NEJBQzlDLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7NEJBQ3ZCLE9BQU8sRUFBRSxXQUFXO3lCQUNyQjt3QkFDRDs0QkFDRSxJQUFJLEVBQUUsZUFBZTs0QkFDckIsSUFBSSxFQUFFLG9CQUFvQjs0QkFDMUIsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTs0QkFDdkIsT0FBTyxFQUFFLFdBQVc7eUJBQ3JCO3dCQUNEOzRCQUNFLElBQUksRUFBRSxlQUFlOzRCQUNyQixJQUFJLEVBQUUsdUdBQXVHOzRCQUM3RyxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO3lCQUN4QjtxQkFDRjtpQkFDRjthQUNGO1NBQ0Y7S0FDRjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVRyZWVEYXRhIH0gZnJvbSAnLi90cmVlJztcblxuZXhwb3J0IGNvbnN0IFRSRUVfTU9DSzogSVRyZWVEYXRhID0ge1xuICBpdGVtczogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdDb2xsZXppb25lIGRcXCdhcnRlJyxcbiAgICAgIGNsYXNzZXM6ICdpcy1jb2xsYXBzZWQnLFxuICAgICAgYW5jaG9yOiB7XG4gICAgICAgIGhyZWY6ICdodHRwczovL2dvb2dsZS5pdCcsXG4gICAgICAgIHRhcmdldDogJ19ibGFuaydcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnQ2VudHJvIGFyY2hpdmknLFxuICAgICAgYW5jaG9yOiB7XG4gICAgICAgIGhyZWY6ICcvaG9tZScsXG4gICAgICAgIHRhcmdldDogJ19ibGFuaydcbiAgICAgIH0sXG4gICAgICBjbGFzc2VzOiAnaXMtZXhwYW5kZWQnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRvZ2dsZToge1xuICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtcmlnaHQnLFxuICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRleHQ6ICc1KzFBQSBBZ2VuemlhIGRpIEFyY2hpdGV0dHVyYScsXG4gICAgICAgICAgY2xhc3NlczogJ2lzLWNvbGxhcHNlZCcsXG4gICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXG4gICAgICAgICAgaWNvbnJpZ2h0OiAnbjctaWNvbi1pbWFnZXMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0b2dnbGU6IHtcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLWRvd24nLFxuICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRleHQ6ICdBQkRSIEFyY2hpdGV0dGkgQXNzb2NpYXRpJyxcbiAgICAgICAgICBjbGFzc2VzOiAnaXMtZXhwYW5kZWQgaXMtYWN0aXZlJyxcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0b2dnbGU6IHtcbiAgICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1kb3duJyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB0ZXh0OiAnNSsxQUEgQWdlbnppYSBkaSBBcmNoaXRldHR1cmEnLFxuICAgICAgICAgICAgICBjbGFzc2VzOiAnaXMtZXhwYW5kZWQnLFxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0b2dnbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtcmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICc1KzFBQSBBZ2VuemlhIGRpIEFyY2hpdGV0dHVyYScsXG4gICAgICAgICAgICAgICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcbiAgICAgICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0b2dnbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtZG93bicsXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdGV4dDogJ0FCRFIgQXJjaGl0ZXR0aSBBc3NvY2lhdGknLFxuICAgICAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWV4cGFuZGVkJyxcbiAgICAgICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxuICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtZG93bicsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogJzUrMUFBIEFnZW56aWEgZGkgQXJjaGl0ZXR0dXJhJyxcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiAnaXMtZXhwYW5kZWQnLFxuICAgICAgICAgICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnNSsxQUEgQWdlbnppYSBkaSBBcmNoaXRldHR1cmEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQUJEUiBBcmNoaXRldHRpIEFzc29jaWF0aScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1jb2xsYXBzZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICB0b2dnbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQUJEUiBBcmNoaXRldHRpIEFzc29jaWF0aScsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWNvbGxhcHNlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0b2dnbGU6IHtcbiAgICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdGV4dDogJ0FCRFIgQXJjaGl0ZXR0aSBBc3NvY2lhdGknLFxuICAgICAgICAgICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdG9nZ2xlOiB7XG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXG4gICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdGV4dDogJ0FXUCcsXG4gICAgICAgICAgY2xhc3NlczogJ2lzLWNvbGxhcHNlZCcsXG4gICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRvZ2dsZToge1xuICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtcmlnaHQnLFxuICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRleHQ6ICdCT0VSSSBDaW5pJyxcbiAgICAgICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdG9nZ2xlOiB7XG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXG4gICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdGV4dDogJ0NBTVBPIEJBRVpBIEFsYmVydG8nLFxuICAgICAgICAgIGNsYXNzZXM6ICdpcy1jb2xsYXBzZWQnLFxuICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0b2dnbGU6IHtcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcbiAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiAnQ0FTU0FOSSBNYXRpbGRlJyxcbiAgICAgICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdG9nZ2xlOiB7XG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXG4gICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdGV4dDogJ0dVRVJSSSBEYW5pbG8nLFxuICAgICAgICAgIGNsYXNzZXM6ICdpcy1jb2xsYXBzZWQnLFxuICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0b2dnbGU6IHtcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcbiAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiAnSGFzIGNoaWxkcywgYnV0IGlzIGNsb3NlZCEnLFxuICAgICAgICAgIGNsYXNzZXM6ICdpcy1jb2xsYXBzZWQnLFxuICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxuICAgICAgICAgIGl0ZW1zOltcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnLFxuICAgICAgICAgICAgICB0ZXh0OiAnQ2hpbGQ6IENpbmVtYSB0ZWF0cm8gQXVndXN0ZW8gZSBzdGF6aW9uZSBjZW50cmFsZSBkZWxsYSBmdW5pY29sYXJlLCBOYXBvbGkgKFsxOTI2XSAtIFsxOTI3XSknLFxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1hY3RpdmUnLFxuICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1maWxlMycsXG4gICAgICAgICAgICAgIHRleHQ6ICdDaGlsZDogU3RhZGlvIGNvbXVuYWxlIEcuQmVydGEsIEZpcmVuemUgKFsxOTI5XSAtIFsxOTMyXSknLFxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGljb246ICduNy1pY29uLWZpbGUzJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0NoaWxkOiBNb251bWVudG8gYWxsYSBCYW5kaWVyYSwgUm9tYSAoMTkzMSknLFxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGltZzogJ2h0dHA6Ly9wbGFjZWltZy5jb20vMjUvMjUvYXJjaC9ncmF5c2NhbGUnLFxuICAgICAgICAgICAgICB0ZXh0OiAnQ2hpbGQ6IEJyZXZldHRvIGhhbmdhciBjaXJjb2xhcmUgY29uIHBpYXR0YWZvcm1hIGFudWxhcmUgcm90YW50ZSAoMTkzMiknLFxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGltZzogJ2h0dHA6Ly9wbGFjZWltZy5jb20vMjUvMjUvYXJjaC9ncmF5c2NhbGUnLFxuICAgICAgICAgICAgICB0ZXh0OiAnQ2hpbGQ6IFN0YWRpbyBkYSAxMjAuMDAwIHBvc3RpLCBSb21hIChbMTkzM10pJyxcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXG4gICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1hY3RpdmUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1maWxlMycsXG4gICAgICAgICAgICAgIHRleHQ6ICdDaGlsZDogTWFnYXp6aW5vIChbMTkzNF0pJyxcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXG4gICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1hY3RpdmUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnLFxuICAgICAgICAgICAgICB0ZXh0OiAnQ2hpbGQ6IEF2aW9yaW1lc3NlLCBPcnZpZXRvIChUUiksIE9yYmV0ZWxsbyAoR1IpLCBUb3JyZSBkZWwgTGFnbyAoTFUpLCBNYXJzYWxhIChUUCksIFRyYXBhbmkgKFsxOTM1XSAtIDE5NDEpJyxcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRvZ2dsZToge1xuICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtZG93bicsXG4gICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdGV4dDogJ05FUlZJIFBpZXIgTHVpZ2knLFxuICAgICAgICAgIGNsYXNzZXM6ICdpcy1leHBhbmRlZCcsXG4gICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRvZ2dsZToge1xuICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtZG93bicsXG4gICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdGV4dDogJ0F0dGl2aXTDoCBQcm9mZXNzaW9uYWxlJyxcbiAgICAgICAgICBjbGFzc2VzOiAnaXMtZXhwYW5kZWQnLFxuICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGljb246ICduNy1pY29uLWZpbGUzJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0NpbmVtYSB0ZWF0cm8gQXVndXN0ZW8gZSBzdGF6aW9uZSBjZW50cmFsZSBkZWxsYSBmdW5pY29sYXJlLCBOYXBvbGkgKFsxOTI2XSAtIFsxOTI3XSknLFxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1hY3RpdmUnLFxuICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1maWxlMycsXG4gICAgICAgICAgICAgIHRleHQ6ICdTdGFkaW8gY29tdW5hbGUgRy5CZXJ0YSwgRmlyZW56ZSAoWzE5MjldIC0gWzE5MzJdKScsXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnLFxuICAgICAgICAgICAgICB0ZXh0OiAnTW9udW1lbnRvIGFsbGEgQmFuZGllcmEsIFJvbWEgKDE5MzEpJyxcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpbWc6ICdodHRwOi8vcGxhY2VpbWcuY29tLzI1LzI1L2FyY2gvZ3JheXNjYWxlJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0JyZXZldHRvIGhhbmdhciBjaXJjb2xhcmUgY29uIHBpYXR0YWZvcm1hIGFudWxhcmUgcm90YW50ZSAoMTkzMiknLFxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGltZzogJ2h0dHA6Ly9wbGFjZWltZy5jb20vMjUvMjUvYXJjaC9ncmF5c2NhbGUnLFxuICAgICAgICAgICAgICB0ZXh0OiAnU3RhZGlvIGRhIDEyMC4wMDAgcG9zdGksIFJvbWEgKFsxOTMzXSknLFxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcbiAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWFjdGl2ZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGljb246ICduNy1pY29uLWZpbGUzJyxcbiAgICAgICAgICAgICAgdGV4dDogJ01hZ2F6emlubyAoWzE5MzRdKScsXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxuICAgICAgICAgICAgICBjbGFzc2VzOiAnaXMtYWN0aXZlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGljb246ICduNy1pY29uLWZpbGUzJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0F2aW9yaW1lc3NlLCBPcnZpZXRvIChUUiksIE9yYmV0ZWxsbyAoR1IpLCBUb3JyZSBkZWwgTGFnbyAoTFUpLCBNYXJzYWxhIChUUCksIFRyYXBhbmkgKFsxOTM1XSAtIDE5NDEpJyxcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgIF1cbiAgICB9LFxuICBdXG59Il19