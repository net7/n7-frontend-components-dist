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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5tb2NrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90cmVlL3RyZWUubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxNQUFNLEtBQU8sU0FBUyxHQUFjO0lBQ2xDLEtBQUssRUFBRTtRQUNMO1lBQ0UsSUFBSSxFQUFFLG9CQUFvQjtZQUMxQixPQUFPLEVBQUUsY0FBYztZQUN2QixNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLG1CQUFtQjtnQkFDekIsTUFBTSxFQUFFLFFBQVE7YUFDakI7U0FDRjtRQUNEO1lBQ0UsSUFBSSxFQUFFLGdCQUFnQjtZQUN0QixNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLE9BQU87Z0JBQ2IsTUFBTSxFQUFFLFFBQVE7YUFDakI7WUFDRCxPQUFPLEVBQUUsYUFBYTtZQUN0QixLQUFLLEVBQUU7Z0JBQ0w7b0JBQ0UsTUFBTSxFQUFFO3dCQUNOLElBQUksRUFBRSxxQkFBcUI7d0JBQzNCLE9BQU8sRUFBRSxRQUFRO3FCQUNsQjtvQkFDRCxJQUFJLEVBQUUsK0JBQStCO29CQUNyQyxPQUFPLEVBQUUsY0FBYztvQkFDdkIsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtvQkFDdkIsU0FBUyxFQUFFLGdCQUFnQjtpQkFDNUI7Z0JBQ0Q7b0JBQ0UsTUFBTSxFQUFFO3dCQUNOLElBQUksRUFBRSxvQkFBb0I7d0JBQzFCLE9BQU8sRUFBRSxRQUFRO3FCQUNsQjtvQkFDRCxJQUFJLEVBQUUsMkJBQTJCO29CQUNqQyxPQUFPLEVBQUUsdUJBQXVCO29CQUNoQyxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO29CQUN2QixLQUFLLEVBQUU7d0JBQ0w7NEJBQ0UsTUFBTSxFQUFFO2dDQUNOLElBQUksRUFBRSxvQkFBb0I7Z0NBQzFCLE9BQU8sRUFBRSxRQUFROzZCQUNsQjs0QkFDRCxJQUFJ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QUFXOzRCQUNwQixJQUFJLEVBQUUsZUFBZTs0QkFDckIsSUFBSSxFQUFFLG9EQUFvRDs0QkFDMUQsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTt5QkFDeEI7d0JBQ0Q7NEJBQ0UsSUFBSSxFQUFFLGVBQWU7NEJBQ3JCLElBQUksRUFBRSxzQ0FBc0M7NEJBQzVDLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7eUJBQ3hCO3dCQUNEOzRCQUNFLEdBQUcsRUFBRSwwQ0FBMEM7NEJBQy9DLElBQUksRUFBRSxrRUFBa0U7NEJBQ3hFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7eUJBQ3hCO3dCQUNEOzRCQUNFLEdBQUcsRUFBRSwwQ0FBMEM7NEJBQy9DLElBQUksRUFBRSx3Q0FBd0M7NEJBQzlDLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7NEJBQ3ZCLE9BQU8sRUFBRSxXQUFXO3lCQUNyQjt3QkFDRDs0QkFDRSxJQUFJLEVBQUUsZUFBZTs0QkFDckIsSUFBSSxFQUFFLG9CQUFvQjs0QkFDMUIsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTs0QkFDdkIsT0FBTyxFQUFFLFdBQVc7eUJBQ3JCO3dCQUNEOzRCQUNFLElBQUksRUFBRSxlQUFlOzRCQUNyQixJQUFJLEVBQUUsdUdBQXVHOzRCQUM3RyxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO3lCQUN4QjtxQkFDRjtpQkFDRjthQUNGO1NBQ0Y7S0FDRjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVRyZWVEYXRhIH0gZnJvbSAnLi90cmVlJztcclxuXHJcbmV4cG9ydCBjb25zdCBUUkVFX01PQ0s6IElUcmVlRGF0YSA9IHtcclxuICBpdGVtczogW1xyXG4gICAge1xyXG4gICAgICB0ZXh0OiAnQ29sbGV6aW9uZSBkXFwnYXJ0ZScsXHJcbiAgICAgIGNsYXNzZXM6ICdpcy1jb2xsYXBzZWQnLFxyXG4gICAgICBhbmNob3I6IHtcclxuICAgICAgICBocmVmOiAnaHR0cHM6Ly9nb29nbGUuaXQnLFxyXG4gICAgICAgIHRhcmdldDogJ19ibGFuaydcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICdDZW50cm8gYXJjaGl2aScsXHJcbiAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgIGhyZWY6ICcvaG9tZScsXHJcbiAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJ1xyXG4gICAgICB9LFxyXG4gICAgICBjbGFzc2VzOiAnaXMtZXhwYW5kZWQnLFxyXG4gICAgICBpdGVtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRvZ2dsZToge1xyXG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGV4dDogJzUrMUFBIEFnZW56aWEgZGkgQXJjaGl0ZXR0dXJhJyxcclxuICAgICAgICAgIGNsYXNzZXM6ICdpcy1jb2xsYXBzZWQnLFxyXG4gICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXHJcbiAgICAgICAgICBpY29ucmlnaHQ6ICduNy1pY29uLWltYWdlcydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRvZ2dsZToge1xyXG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1kb3duJyxcclxuICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB0ZXh0OiAnQUJEUiBBcmNoaXRldHRpIEFzc29jaWF0aScsXHJcbiAgICAgICAgICBjbGFzc2VzOiAnaXMtZXhwYW5kZWQgaXMtYWN0aXZlJyxcclxuICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxyXG4gICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRvZ2dsZToge1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtZG93bicsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgdGV4dDogJzUrMUFBIEFnZW56aWEgZGkgQXJjaGl0ZXR0dXJhJyxcclxuICAgICAgICAgICAgICBjbGFzc2VzOiAnaXMtZXhwYW5kZWQnLFxyXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxyXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHRvZ2dsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnNSsxQUEgQWdlbnppYSBkaSBBcmNoaXRldHR1cmEnLFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcclxuICAgICAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHRvZ2dsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLWRvd24nLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdBQkRSIEFyY2hpdGV0dGkgQXNzb2NpYXRpJyxcclxuICAgICAgICAgICAgICAgICAgY2xhc3NlczogJ2lzLWV4cGFuZGVkJyxcclxuICAgICAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLWRvd24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICc1KzFBQSBBZ2VuemlhIGRpIEFyY2hpdGV0dHVyYScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiAnaXMtZXhwYW5kZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJzUrMUFBIEFnZW56aWEgZGkgQXJjaGl0ZXR0dXJhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0FCRFIgQXJjaGl0ZXR0aSBBc3NvY2lhdGknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1jb2xsYXBzZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b2dnbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtcmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdBQkRSIEFyY2hpdGV0dGkgQXNzb2NpYXRpJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1jb2xsYXBzZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRvZ2dsZToge1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtcmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHRleHQ6ICdBQkRSIEFyY2hpdGV0dGkgQXNzb2NpYXRpJyxcclxuICAgICAgICAgICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcclxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdG9nZ2xlOiB7XHJcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcclxuICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB0ZXh0OiAnQVdQJyxcclxuICAgICAgICAgIGNsYXNzZXM6ICdpcy1jb2xsYXBzZWQnLFxyXG4gICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRvZ2dsZToge1xyXG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1hbmdsZS1yaWdodCcsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGV4dDogJ0JPRVJJIENpbmknLFxyXG4gICAgICAgICAgY2xhc3NlczogJ2lzLWNvbGxhcHNlZCcsXHJcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdG9nZ2xlOiB7XHJcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcclxuICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB0ZXh0OiAnQ0FNUE8gQkFFWkEgQWxiZXJ0bycsXHJcbiAgICAgICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcclxuICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0b2dnbGU6IHtcclxuICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtcmlnaHQnLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRleHQ6ICdDQVNTQU5JIE1hdGlsZGUnLFxyXG4gICAgICAgICAgY2xhc3NlczogJ2lzLWNvbGxhcHNlZCcsXHJcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdG9nZ2xlOiB7XHJcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcclxuICAgICAgICAgICAgcGF5bG9hZDogJ3RvZ2dsZSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB0ZXh0OiAnR1VFUlJJIERhbmlsbycsXHJcbiAgICAgICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcclxuICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0b2dnbGU6IHtcclxuICAgICAgICAgICAgaWNvbjogJ243LWljb24tYW5nbGUtcmlnaHQnLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRleHQ6ICdIYXMgY2hpbGRzLCBidXQgaXMgY2xvc2VkIScsXHJcbiAgICAgICAgICBjbGFzc2VzOiAnaXMtY29sbGFwc2VkJyxcclxuICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxyXG4gICAgICAgICAgaXRlbXM6W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnLFxyXG4gICAgICAgICAgICAgIHRleHQ6ICdDaGlsZDogQ2luZW1hIHRlYXRybyBBdWd1c3RlbyBlIHN0YXppb25lIGNlbnRyYWxlIGRlbGxhIGZ1bmljb2xhcmUsIE5hcG9saSAoWzE5MjZdIC0gWzE5MjddKScsXHJcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBjbGFzc2VzOiAnaXMtYWN0aXZlJyxcclxuICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1maWxlMycsXHJcbiAgICAgICAgICAgICAgdGV4dDogJ0NoaWxkOiBTdGFkaW8gY29tdW5hbGUgRy5CZXJ0YSwgRmlyZW56ZSAoWzE5MjldIC0gWzE5MzJdKScsXHJcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1maWxlMycsXHJcbiAgICAgICAgICAgICAgdGV4dDogJ0NoaWxkOiBNb251bWVudG8gYWxsYSBCYW5kaWVyYSwgUm9tYSAoMTkzMSknLFxyXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaW1nOiAnaHR0cDovL3BsYWNlaW1nLmNvbS8yNS8yNS9hcmNoL2dyYXlzY2FsZScsXHJcbiAgICAgICAgICAgICAgdGV4dDogJ0NoaWxkOiBCcmV2ZXR0byBoYW5nYXIgY2lyY29sYXJlIGNvbiBwaWF0dGFmb3JtYSBhbnVsYXJlIHJvdGFudGUgKDE5MzIpJyxcclxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGltZzogJ2h0dHA6Ly9wbGFjZWltZy5jb20vMjUvMjUvYXJjaC9ncmF5c2NhbGUnLFxyXG4gICAgICAgICAgICAgIHRleHQ6ICdDaGlsZDogU3RhZGlvIGRhIDEyMC4wMDAgcG9zdGksIFJvbWEgKFsxOTMzXSknLFxyXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxyXG4gICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1hY3RpdmUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1maWxlMycsXHJcbiAgICAgICAgICAgICAgdGV4dDogJ0NoaWxkOiBNYWdhenppbm8gKFsxOTM0XSknLFxyXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxyXG4gICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1hY3RpdmUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnLFxyXG4gICAgICAgICAgICAgIHRleHQ6ICdDaGlsZDogQXZpb3JpbWVzc2UsIE9ydmlldG8gKFRSKSwgT3JiZXRlbGxvIChHUiksIFRvcnJlIGRlbCBMYWdvIChMVSksIE1hcnNhbGEgKFRQKSwgVHJhcGFuaSAoWzE5MzVdIC0gMTk0MSknLFxyXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdG9nZ2xlOiB7XHJcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLWRvd24nLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRleHQ6ICdORVJWSSBQaWVyIEx1aWdpJyxcclxuICAgICAgICAgIGNsYXNzZXM6ICdpcy1leHBhbmRlZCcsXHJcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdG9nZ2xlOiB7XHJcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLWFuZ2xlLWRvd24nLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRleHQ6ICdBdHRpdml0w6AgUHJvZmVzc2lvbmFsZScsXHJcbiAgICAgICAgICBjbGFzc2VzOiAnaXMtZXhwYW5kZWQnLFxyXG4gICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXHJcbiAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnLFxyXG4gICAgICAgICAgICAgIHRleHQ6ICdDaW5lbWEgdGVhdHJvIEF1Z3VzdGVvIGUgc3RhemlvbmUgY2VudHJhbGUgZGVsbGEgZnVuaWNvbGFyZSwgTmFwb2xpIChbMTkyNl0gLSBbMTkyN10pJyxcclxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1hY3RpdmUnLFxyXG4gICAgICAgICAgICAgIGljb246ICduNy1pY29uLWZpbGUzJyxcclxuICAgICAgICAgICAgICB0ZXh0OiAnU3RhZGlvIGNvbXVuYWxlIEcuQmVydGEsIEZpcmVuemUgKFsxOTI5XSAtIFsxOTMyXSknLFxyXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnLFxyXG4gICAgICAgICAgICAgIHRleHQ6ICdNb251bWVudG8gYWxsYSBCYW5kaWVyYSwgUm9tYSAoMTkzMSknLFxyXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaW1nOiAnaHR0cDovL3BsYWNlaW1nLmNvbS8yNS8yNS9hcmNoL2dyYXlzY2FsZScsXHJcbiAgICAgICAgICAgICAgdGV4dDogJ0JyZXZldHRvIGhhbmdhciBjaXJjb2xhcmUgY29uIHBpYXR0YWZvcm1hIGFudWxhcmUgcm90YW50ZSAoMTkzMiknLFxyXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaW1nOiAnaHR0cDovL3BsYWNlaW1nLmNvbS8yNS8yNS9hcmNoL2dyYXlzY2FsZScsXHJcbiAgICAgICAgICAgICAgdGV4dDogJ1N0YWRpbyBkYSAxMjAuMDAwIHBvc3RpLCBSb21hIChbMTkzM10pJyxcclxuICAgICAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJycgfSxcclxuICAgICAgICAgICAgICBjbGFzc2VzOiAnaXMtYWN0aXZlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnLFxyXG4gICAgICAgICAgICAgIHRleHQ6ICdNYWdhenppbm8gKFsxOTM0XSknLFxyXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnJyB9LFxyXG4gICAgICAgICAgICAgIGNsYXNzZXM6ICdpcy1hY3RpdmUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tZmlsZTMnLFxyXG4gICAgICAgICAgICAgIHRleHQ6ICdBdmlvcmltZXNzZSwgT3J2aWV0byAoVFIpLCBPcmJldGVsbG8gKEdSKSwgVG9ycmUgZGVsIExhZ28gKExVKSwgTWFyc2FsYSAoVFApLCBUcmFwYW5pIChbMTkzNV0gLSAxOTQxKScsXHJcbiAgICAgICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICcnIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgXVxyXG4gICAgfSxcclxuICBdXHJcbn0iXX0=