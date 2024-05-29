export const CAROUSEL_MOCK = {
    containerId: 'carousel-root',
    classes: 'demo',
    libOptions: {
        count: 1,
        move: 1,
        // touch: true,
        // mode: 'align',
        buttons: true,
        dots: true,
        rewind: true,
        autoplay: 0,
        animation: 500,
        // responsive: {
        //   0: { count: 1.5, buttons: false },
        //   480: { count: 2.5, buttons: false },
        //   768: { count: 3, touch: false },
        //   1440: { count: 4, touch: false },
        // },
    },
    slides: [
        {
            classes: 'example-class',
            items: [
                { text: 'Cum sociis natoque penatibus<br /> et magnis dis parturient montes, nascetur ridiculus mus.' },
                { title: 'Lorem Donec sed odio dui.' },
                { text: '<i>Morbi leo risus, porta ac consectetur ac</i>, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.' },
                { image: { src: 'assets/images/heart.svg', classes: 'some test classes' } },
                {
                    metadata: [
                        { key: 'Metadato 1', value: 'Valore 1' },
                        { key: 'Metadato 2', value: 'Valore 2' },
                    ]
                },
                {}
            ],
            action: {
                text: 'Action',
                anchor: {
                    payload: 'first-button',
                    // href: '/examples',
                    // target: '_blank'
                }
            },
            background: {
                video: {
                    url: 'http://www.giulioandreini.it/galassia-ariosto/galassia-ariosto-home-carousel.mp4',
                    poster: 'https://placeimg.com/640/480/arch/grayscale',
                    height: 334,
                    width: 640,
                }
            }
        }, {
            classes: 'example-class',
            items: [
                { text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.' },
                { title: 'Lorem Donec sed odio dui.' },
                { text: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.' },
                {
                    metadata: [
                        { key: 'Metadato 1', value: 'Valore 1' },
                        { key: 'Metadato 2', value: 'Valore 2' },
                    ]
                },
                {}
            ],
            action: {
                text: 'Action',
                anchor: {
                    payload: 'second-button',
                    // href: '/examples',
                    // target: '_blank'
                }
            },
            background: {
                video: {
                    url: 'http://www.giulioandreini.it/galassia-ariosto/galassia-ariosto-home-carousel.mp4',
                    poster: 'https://placeimg.com/640/480/arch/grayscale',
                    height: 334,
                    width: 640,
                }
            }
        }, {
            items: [
                { title: 'La regina della notte' },
                { text: 'Il flauto magico' },
                {
                    metadata: [
                        { key: 'Regia di ', value: 'Roberto di Simone' },
                        { value: '1955' }
                    ]
                },
                {}
            ],
            action: {
                text: 'IL COSTUME >',
                anchor: {
                    payload: 'third-button'
                }
            },
            background: {
                image: 'https://placeimg.com/800/400/nature/grayscale'
            }
        }, {
            items: [
                { text: '"La vendetta dell\'inferno ribolle nel mio cuore, Morte e disperazione m\'infiamman tutt\'intorno!"' },
                { title: 'La regina della notte' },
                { text: 'Il flauto magico' },
                {
                    metadata: [
                        { key: 'Regia di ', value: 'Roberto di Simone' },
                        { value: '1955' }
                    ]
                },
                {}
            ],
            action: {
                text: 'IL COSTUME >',
                anchor: {
                    payload: 'fourth-button'
                }
            },
            background: {
                image: 'https://placeimg.com/800/400/nature/grayscale'
            }
        }, {
            items: [
                { title: 'UNA COLLEZIONE UNICA. OLTRE 30MILA COSTUMI CREATI AD ARTE DAI MAESTRI FIORENTINI PER LE SCENE PIU PRESTIGIOSE' }
            ],
            background: {
                color: 'tomato'
            }
        }
    ],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwubW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2R2LWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBaUI7SUFDekMsV0FBVyxFQUFFLGVBQWU7SUFDNUIsT0FBTyxFQUFFLE1BQU07SUFDZixVQUFVLEVBQUU7UUFDVixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksRUFBRSxDQUFDO1FBQ1AsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixPQUFPLEVBQUUsSUFBSTtRQUNiLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFLElBQUk7UUFDWixRQUFRLEVBQUUsQ0FBQztRQUNYLFNBQVMsRUFBRSxHQUFHO1FBQ2QsZ0JBQWdCO1FBQ2hCLHVDQUF1QztRQUN2Qyx5Q0FBeUM7UUFDekMscUNBQXFDO1FBQ3JDLHNDQUFzQztRQUN0QyxLQUFLO0tBQ047SUFDRCxNQUFNLEVBQUU7UUFDTjtZQUNFLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLEtBQUssRUFBRTtnQkFDTCxFQUFFLElBQUksRUFBRSw2RkFBNkYsRUFBRTtnQkFDdkcsRUFBRSxLQUFLLEVBQUUsMkJBQTJCLEVBQUU7Z0JBQ3RDLEVBQUUsSUFBSSxFQUFFLDRKQUE0SixFQUFFO2dCQUN0SyxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSx5QkFBeUIsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsRUFBRTtnQkFDM0U7b0JBQ0UsUUFBUSxFQUFFO3dCQUNSLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO3dCQUN4QyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtxQkFDekM7aUJBQ0Y7Z0JBQ0QsRUFDQzthQUNGO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxRQUFRO2dCQUNkLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsY0FBYztvQkFDdkIscUJBQXFCO29CQUNyQixtQkFBbUI7aUJBQ3BCO2FBQ0Y7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFO29CQUNMLEdBQUcsRUFBRSxrRkFBa0Y7b0JBQ3ZGLE1BQU0sRUFBRSw2Q0FBNkM7b0JBQ3JELE1BQU0sRUFBRSxHQUFHO29CQUNYLEtBQUssRUFBRSxHQUFHO2lCQUNYO2FBQ0Y7U0FDRixFQUFFO1lBQ0QsT0FBTyxFQUFFLGVBQWU7WUFDeEIsS0FBSyxFQUFFO2dCQUNMLEVBQUUsSUFBSSxFQUFFLHVGQUF1RixFQUFFO2dCQUNqRyxFQUFFLEtBQUssRUFBRSwyQkFBMkIsRUFBRTtnQkFDdEMsRUFBRSxJQUFJLEVBQUUscUpBQXFKLEVBQUU7Z0JBQy9KO29CQUNFLFFBQVEsRUFBRTt3QkFDUixFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTt3QkFDeEMsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7cUJBQ3pDO2lCQUNGO2dCQUNELEVBQ0M7YUFDRjtZQUNELE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsUUFBUTtnQkFDZCxNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLHFCQUFxQjtvQkFDckIsbUJBQW1CO2lCQUNwQjthQUNGO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLEtBQUssRUFBRTtvQkFDTCxHQUFHLEVBQUUsa0ZBQWtGO29CQUN2RixNQUFNLEVBQUUsNkNBQTZDO29CQUNyRCxNQUFNLEVBQUUsR0FBRztvQkFDWCxLQUFLLEVBQUUsR0FBRztpQkFDWDthQUNGO1NBQ0YsRUFBRTtZQUNELEtBQUssRUFBRTtnQkFDTCxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRTtnQkFDbEMsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7Z0JBQzVCO29CQUNFLFFBQVEsRUFBRTt3QkFDUixFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFO3dCQUNoRCxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7cUJBQ2xCO2lCQUNGO2dCQUNELEVBQ0M7YUFDRjtZQUNELE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsY0FBYztnQkFDcEIsTUFBTSxFQUFFO29CQUNOLE9BQU8sRUFBRSxjQUFjO2lCQUN4QjthQUNGO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLEtBQUssRUFBRSwrQ0FBK0M7YUFDdkQ7U0FDRixFQUFFO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLEVBQUUsSUFBSSxFQUFFLHFHQUFxRyxFQUFFO2dCQUMvRyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRTtnQkFDbEMsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7Z0JBQzVCO29CQUNFLFFBQVEsRUFBRTt3QkFDUixFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFO3dCQUNoRCxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7cUJBQ2xCO2lCQUNGO2dCQUNELEVBQ0M7YUFDRjtZQUNELE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsY0FBYztnQkFDcEIsTUFBTSxFQUFFO29CQUNOLE9BQU8sRUFBRSxlQUFlO2lCQUN6QjthQUNGO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLEtBQUssRUFBRSwrQ0FBK0M7YUFDdkQ7U0FDRixFQUFFO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLEVBQUUsS0FBSyxFQUFFLCtHQUErRyxFQUFFO2FBQzNIO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLEtBQUssRUFBRSxRQUFRO2FBQ2hCO1NBQ0Y7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJvdXNlbERhdGEgfSBmcm9tICcuL2Nhcm91c2VsJztcblxuZXhwb3J0IGNvbnN0IENBUk9VU0VMX01PQ0s6IENhcm91c2VsRGF0YSA9IHtcbiAgY29udGFpbmVySWQ6ICdjYXJvdXNlbC1yb290JyxcbiAgY2xhc3NlczogJ2RlbW8nLFxuICBsaWJPcHRpb25zOiB7XG4gICAgY291bnQ6IDEsXG4gICAgbW92ZTogMSxcbiAgICAvLyB0b3VjaDogdHJ1ZSxcbiAgICAvLyBtb2RlOiAnYWxpZ24nLFxuICAgIGJ1dHRvbnM6IHRydWUsXG4gICAgZG90czogdHJ1ZSxcbiAgICByZXdpbmQ6IHRydWUsXG4gICAgYXV0b3BsYXk6IDAsXG4gICAgYW5pbWF0aW9uOiA1MDAsXG4gICAgLy8gcmVzcG9uc2l2ZToge1xuICAgIC8vICAgMDogeyBjb3VudDogMS41LCBidXR0b25zOiBmYWxzZSB9LFxuICAgIC8vICAgNDgwOiB7IGNvdW50OiAyLjUsIGJ1dHRvbnM6IGZhbHNlIH0sXG4gICAgLy8gICA3Njg6IHsgY291bnQ6IDMsIHRvdWNoOiBmYWxzZSB9LFxuICAgIC8vICAgMTQ0MDogeyBjb3VudDogNCwgdG91Y2g6IGZhbHNlIH0sXG4gICAgLy8gfSxcbiAgfSxcbiAgc2xpZGVzOiBbXG4gICAge1xuICAgICAgY2xhc3NlczogJ2V4YW1wbGUtY2xhc3MnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1czxiciAvPiBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLicgfSxcbiAgICAgICAgeyB0aXRsZTogJ0xvcmVtIERvbmVjIHNlZCBvZGlvIGR1aS4nIH0sXG4gICAgICAgIHsgdGV4dDogJzxpPk1vcmJpIGxlbyByaXN1cywgcG9ydGEgYWMgY29uc2VjdGV0dXIgYWM8L2k+LCB2ZXN0aWJ1bHVtIGF0IGVyb3MuIEN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4nIH0sXG4gICAgICAgIHsgaW1hZ2U6IHsgc3JjOiAnYXNzZXRzL2ltYWdlcy9oZWFydC5zdmcnLCBjbGFzc2VzOiAnc29tZSB0ZXN0IGNsYXNzZXMnIH0gfSxcbiAgICAgICAge1xuICAgICAgICAgIG1ldGFkYXRhOiBbXG4gICAgICAgICAgICB7IGtleTogJ01ldGFkYXRvIDEnLCB2YWx1ZTogJ1ZhbG9yZSAxJyB9LFxuICAgICAgICAgICAgeyBrZXk6ICdNZXRhZGF0byAyJywgdmFsdWU6ICdWYWxvcmUgMicgfSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGFjdGlvbjoge1xuICAgICAgICB0ZXh0OiAnQWN0aW9uJyxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgcGF5bG9hZDogJ2ZpcnN0LWJ1dHRvbicsXG4gICAgICAgICAgLy8gaHJlZjogJy9leGFtcGxlcycsXG4gICAgICAgICAgLy8gdGFyZ2V0OiAnX2JsYW5rJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICB2aWRlbzoge1xuICAgICAgICAgIHVybDogJ2h0dHA6Ly93d3cuZ2l1bGlvYW5kcmVpbmkuaXQvZ2FsYXNzaWEtYXJpb3N0by9nYWxhc3NpYS1hcmlvc3RvLWhvbWUtY2Fyb3VzZWwubXA0JyxcbiAgICAgICAgICBwb3N0ZXI6ICdodHRwczovL3BsYWNlaW1nLmNvbS82NDAvNDgwL2FyY2gvZ3JheXNjYWxlJyxcbiAgICAgICAgICBoZWlnaHQ6IDMzNCxcbiAgICAgICAgICB3aWR0aDogNjQwLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgY2xhc3NlczogJ2V4YW1wbGUtY2xhc3MnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLicgfSxcbiAgICAgICAgeyB0aXRsZTogJ0xvcmVtIERvbmVjIHNlZCBvZGlvIGR1aS4nIH0sXG4gICAgICAgIHsgdGV4dDogJ01vcmJpIGxlbyByaXN1cywgcG9ydGEgYWMgY29uc2VjdGV0dXIgYWMsIHZlc3RpYnVsdW0gYXQgZXJvcy4gQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLicgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1ldGFkYXRhOiBbXG4gICAgICAgICAgICB7IGtleTogJ01ldGFkYXRvIDEnLCB2YWx1ZTogJ1ZhbG9yZSAxJyB9LFxuICAgICAgICAgICAgeyBrZXk6ICdNZXRhZGF0byAyJywgdmFsdWU6ICdWYWxvcmUgMicgfSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGFjdGlvbjoge1xuICAgICAgICB0ZXh0OiAnQWN0aW9uJyxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgcGF5bG9hZDogJ3NlY29uZC1idXR0b24nLFxuICAgICAgICAgIC8vIGhyZWY6ICcvZXhhbXBsZXMnLFxuICAgICAgICAgIC8vIHRhcmdldDogJ19ibGFuaydcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgdmlkZW86IHtcbiAgICAgICAgICB1cmw6ICdodHRwOi8vd3d3LmdpdWxpb2FuZHJlaW5pLml0L2dhbGFzc2lhLWFyaW9zdG8vZ2FsYXNzaWEtYXJpb3N0by1ob21lLWNhcm91c2VsLm1wNCcsXG4gICAgICAgICAgcG9zdGVyOiAnaHR0cHM6Ly9wbGFjZWltZy5jb20vNjQwLzQ4MC9hcmNoL2dyYXlzY2FsZScsXG4gICAgICAgICAgaGVpZ2h0OiAzMzQsXG4gICAgICAgICAgd2lkdGg6IDY0MCxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGl0bGU6ICdMYSByZWdpbmEgZGVsbGEgbm90dGUnIH0sXG4gICAgICAgIHsgdGV4dDogJ0lsIGZsYXV0byBtYWdpY28nIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBtZXRhZGF0YTogW1xuICAgICAgICAgICAgeyBrZXk6ICdSZWdpYSBkaSAnLCB2YWx1ZTogJ1JvYmVydG8gZGkgU2ltb25lJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogJzE5NTUnIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGFjdGlvbjoge1xuICAgICAgICB0ZXh0OiAnSUwgQ09TVFVNRSA+JyxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgcGF5bG9hZDogJ3RoaXJkLWJ1dHRvbidcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL3BsYWNlaW1nLmNvbS84MDAvNDAwL25hdHVyZS9ncmF5c2NhbGUnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnXCJMYSB2ZW5kZXR0YSBkZWxsXFwnaW5mZXJubyByaWJvbGxlIG5lbCBtaW8gY3VvcmUsIE1vcnRlIGUgZGlzcGVyYXppb25lIG1cXCdpbmZpYW1tYW4gdHV0dFxcJ2ludG9ybm8hXCInIH0sXG4gICAgICAgIHsgdGl0bGU6ICdMYSByZWdpbmEgZGVsbGEgbm90dGUnIH0sXG4gICAgICAgIHsgdGV4dDogJ0lsIGZsYXV0byBtYWdpY28nIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBtZXRhZGF0YTogW1xuICAgICAgICAgICAgeyBrZXk6ICdSZWdpYSBkaSAnLCB2YWx1ZTogJ1JvYmVydG8gZGkgU2ltb25lJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogJzE5NTUnIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGFjdGlvbjoge1xuICAgICAgICB0ZXh0OiAnSUwgQ09TVFVNRSA+JyxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgcGF5bG9hZDogJ2ZvdXJ0aC1idXR0b24nXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9wbGFjZWltZy5jb20vODAwLzQwMC9uYXR1cmUvZ3JheXNjYWxlJ1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGl0bGU6ICdVTkEgQ09MTEVaSU9ORSBVTklDQS4gT0xUUkUgMzBNSUxBIENPU1RVTUkgQ1JFQVRJIEFEIEFSVEUgREFJIE1BRVNUUkkgRklPUkVOVElOSSBQRVIgTEUgU0NFTkUgUElVIFBSRVNUSUdJT1NFJyB9XG4gICAgICBdLFxuICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICBjb2xvcjogJ3RvbWF0bydcbiAgICAgIH1cbiAgICB9XG4gIF0sXG59O1xuIl19