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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwubW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2R2LWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBaUI7SUFDekMsV0FBVyxFQUFFLGVBQWU7SUFDNUIsT0FBTyxFQUFFLE1BQU07SUFDZixVQUFVLEVBQUU7UUFDVixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksRUFBRSxDQUFDO1FBQ1AsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixPQUFPLEVBQUUsSUFBSTtRQUNiLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFLElBQUk7UUFDWixRQUFRLEVBQUUsQ0FBQztRQUNYLFNBQVMsRUFBRSxHQUFHO1FBQ2QsZ0JBQWdCO1FBQ2hCLHVDQUF1QztRQUN2Qyx5Q0FBeUM7UUFDekMscUNBQXFDO1FBQ3JDLHNDQUFzQztRQUN0QyxLQUFLO0tBQ047SUFDRCxNQUFNLEVBQUU7UUFDTjtZQUNFLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLEtBQUssRUFBRTtnQkFDTCxFQUFFLElBQUksRUFBRSw2RkFBNkYsRUFBRTtnQkFDdkcsRUFBRSxLQUFLLEVBQUUsMkJBQTJCLEVBQUU7Z0JBQ3RDLEVBQUUsSUFBSSxFQUFFLDRKQUE0SixFQUFFO2dCQUN0SztvQkFDRSxRQUFRLEVBQUU7d0JBQ1IsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7d0JBQ3hDLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO3FCQUN6QztpQkFDRjtnQkFDRCxFQUNDO2FBQ0Y7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsTUFBTSxFQUFFO29CQUNOLE9BQU8sRUFBRSxjQUFjO29CQUN2QixxQkFBcUI7b0JBQ3JCLG1CQUFtQjtpQkFDcEI7YUFDRjtZQUNELFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUU7b0JBQ0wsR0FBRyxFQUFFLGtGQUFrRjtvQkFDdkYsTUFBTSxFQUFFLDZDQUE2QztvQkFDckQsTUFBTSxFQUFFLEdBQUc7b0JBQ1gsS0FBSyxFQUFFLEdBQUc7aUJBQ1g7YUFDRjtTQUNGLEVBQUU7WUFDRCxPQUFPLEVBQUUsZUFBZTtZQUN4QixLQUFLLEVBQUU7Z0JBQ0wsRUFBRSxJQUFJLEVBQUUsdUZBQXVGLEVBQUU7Z0JBQ2pHLEVBQUUsS0FBSyxFQUFFLDJCQUEyQixFQUFFO2dCQUN0QyxFQUFFLElBQUksRUFBRSxxSkFBcUosRUFBRTtnQkFDL0o7b0JBQ0UsUUFBUSxFQUFFO3dCQUNSLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO3dCQUN4QyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtxQkFDekM7aUJBQ0Y7Z0JBQ0QsRUFDQzthQUNGO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxRQUFRO2dCQUNkLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsZUFBZTtvQkFDeEIscUJBQXFCO29CQUNyQixtQkFBbUI7aUJBQ3BCO2FBQ0Y7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFO29CQUNMLEdBQUcsRUFBRSxrRkFBa0Y7b0JBQ3ZGLE1BQU0sRUFBRSw2Q0FBNkM7b0JBQ3JELE1BQU0sRUFBRSxHQUFHO29CQUNYLEtBQUssRUFBRSxHQUFHO2lCQUNYO2FBQ0Y7U0FDRixFQUFFO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFO2dCQUNsQyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRTtnQkFDNUI7b0JBQ0UsUUFBUSxFQUFFO3dCQUNSLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUU7d0JBQ2hELEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtxQkFDbEI7aUJBQ0Y7Z0JBQ0QsRUFDQzthQUNGO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxjQUFjO2dCQUNwQixNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFLGNBQWM7aUJBQ3hCO2FBQ0Y7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLCtDQUErQzthQUN2RDtTQUNGLEVBQUU7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsRUFBRSxJQUFJLEVBQUUscUdBQXFHLEVBQUU7Z0JBQy9HLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFO2dCQUNsQyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRTtnQkFDNUI7b0JBQ0UsUUFBUSxFQUFFO3dCQUNSLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUU7d0JBQ2hELEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtxQkFDbEI7aUJBQ0Y7Z0JBQ0QsRUFDQzthQUNGO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxjQUFjO2dCQUNwQixNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFLGVBQWU7aUJBQ3pCO2FBQ0Y7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLCtDQUErQzthQUN2RDtTQUNGLEVBQUU7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsRUFBRSxLQUFLLEVBQUUsK0dBQStHLEVBQUU7YUFDM0g7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLFFBQVE7YUFDaEI7U0FDRjtLQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcm91c2VsRGF0YSB9IGZyb20gJy4vY2Fyb3VzZWwnO1xuXG5leHBvcnQgY29uc3QgQ0FST1VTRUxfTU9DSzogQ2Fyb3VzZWxEYXRhID0ge1xuICBjb250YWluZXJJZDogJ2Nhcm91c2VsLXJvb3QnLFxuICBjbGFzc2VzOiAnZGVtbycsXG4gIGxpYk9wdGlvbnM6IHtcbiAgICBjb3VudDogMSxcbiAgICBtb3ZlOiAxLFxuICAgIC8vIHRvdWNoOiB0cnVlLFxuICAgIC8vIG1vZGU6ICdhbGlnbicsXG4gICAgYnV0dG9uczogdHJ1ZSxcbiAgICBkb3RzOiB0cnVlLFxuICAgIHJld2luZDogdHJ1ZSxcbiAgICBhdXRvcGxheTogMCxcbiAgICBhbmltYXRpb246IDUwMCxcbiAgICAvLyByZXNwb25zaXZlOiB7XG4gICAgLy8gICAwOiB7IGNvdW50OiAxLjUsIGJ1dHRvbnM6IGZhbHNlIH0sXG4gICAgLy8gICA0ODA6IHsgY291bnQ6IDIuNSwgYnV0dG9uczogZmFsc2UgfSxcbiAgICAvLyAgIDc2ODogeyBjb3VudDogMywgdG91Y2g6IGZhbHNlIH0sXG4gICAgLy8gICAxNDQwOiB7IGNvdW50OiA0LCB0b3VjaDogZmFsc2UgfSxcbiAgICAvLyB9LFxuICB9LFxuICBzbGlkZXM6IFtcbiAgICB7XG4gICAgICBjbGFzc2VzOiAnZXhhbXBsZS1jbGFzcycsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzPGJyIC8+IGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuJyB9LFxuICAgICAgICB7IHRpdGxlOiAnTG9yZW0gRG9uZWMgc2VkIG9kaW8gZHVpLicgfSxcbiAgICAgICAgeyB0ZXh0OiAnPGk+TW9yYmkgbGVvIHJpc3VzLCBwb3J0YSBhYyBjb25zZWN0ZXR1ciBhYzwvaT4sIHZlc3RpYnVsdW0gYXQgZXJvcy4gQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLicgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1ldGFkYXRhOiBbXG4gICAgICAgICAgICB7IGtleTogJ01ldGFkYXRvIDEnLCB2YWx1ZTogJ1ZhbG9yZSAxJyB9LFxuICAgICAgICAgICAgeyBrZXk6ICdNZXRhZGF0byAyJywgdmFsdWU6ICdWYWxvcmUgMicgfSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGFjdGlvbjoge1xuICAgICAgICB0ZXh0OiAnQWN0aW9uJyxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgcGF5bG9hZDogJ2ZpcnN0LWJ1dHRvbicsXG4gICAgICAgICAgLy8gaHJlZjogJy9leGFtcGxlcycsXG4gICAgICAgICAgLy8gdGFyZ2V0OiAnX2JsYW5rJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICB2aWRlbzoge1xuICAgICAgICAgIHVybDogJ2h0dHA6Ly93d3cuZ2l1bGlvYW5kcmVpbmkuaXQvZ2FsYXNzaWEtYXJpb3N0by9nYWxhc3NpYS1hcmlvc3RvLWhvbWUtY2Fyb3VzZWwubXA0JyxcbiAgICAgICAgICBwb3N0ZXI6ICdodHRwczovL3BsYWNlaW1nLmNvbS82NDAvNDgwL2FyY2gvZ3JheXNjYWxlJyxcbiAgICAgICAgICBoZWlnaHQ6IDMzNCxcbiAgICAgICAgICB3aWR0aDogNjQwLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgY2xhc3NlczogJ2V4YW1wbGUtY2xhc3MnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLicgfSxcbiAgICAgICAgeyB0aXRsZTogJ0xvcmVtIERvbmVjIHNlZCBvZGlvIGR1aS4nIH0sXG4gICAgICAgIHsgdGV4dDogJ01vcmJpIGxlbyByaXN1cywgcG9ydGEgYWMgY29uc2VjdGV0dXIgYWMsIHZlc3RpYnVsdW0gYXQgZXJvcy4gQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLicgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1ldGFkYXRhOiBbXG4gICAgICAgICAgICB7IGtleTogJ01ldGFkYXRvIDEnLCB2YWx1ZTogJ1ZhbG9yZSAxJyB9LFxuICAgICAgICAgICAgeyBrZXk6ICdNZXRhZGF0byAyJywgdmFsdWU6ICdWYWxvcmUgMicgfSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGFjdGlvbjoge1xuICAgICAgICB0ZXh0OiAnQWN0aW9uJyxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgcGF5bG9hZDogJ3NlY29uZC1idXR0b24nLFxuICAgICAgICAgIC8vIGhyZWY6ICcvZXhhbXBsZXMnLFxuICAgICAgICAgIC8vIHRhcmdldDogJ19ibGFuaydcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgdmlkZW86IHtcbiAgICAgICAgICB1cmw6ICdodHRwOi8vd3d3LmdpdWxpb2FuZHJlaW5pLml0L2dhbGFzc2lhLWFyaW9zdG8vZ2FsYXNzaWEtYXJpb3N0by1ob21lLWNhcm91c2VsLm1wNCcsXG4gICAgICAgICAgcG9zdGVyOiAnaHR0cHM6Ly9wbGFjZWltZy5jb20vNjQwLzQ4MC9hcmNoL2dyYXlzY2FsZScsXG4gICAgICAgICAgaGVpZ2h0OiAzMzQsXG4gICAgICAgICAgd2lkdGg6IDY0MCxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGl0bGU6ICdMYSByZWdpbmEgZGVsbGEgbm90dGUnIH0sXG4gICAgICAgIHsgdGV4dDogJ0lsIGZsYXV0byBtYWdpY28nIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBtZXRhZGF0YTogW1xuICAgICAgICAgICAgeyBrZXk6ICdSZWdpYSBkaSAnLCB2YWx1ZTogJ1JvYmVydG8gZGkgU2ltb25lJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogJzE5NTUnIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGFjdGlvbjoge1xuICAgICAgICB0ZXh0OiAnSUwgQ09TVFVNRSA+JyxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgcGF5bG9hZDogJ3RoaXJkLWJ1dHRvbidcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL3BsYWNlaW1nLmNvbS84MDAvNDAwL25hdHVyZS9ncmF5c2NhbGUnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnXCJMYSB2ZW5kZXR0YSBkZWxsXFwnaW5mZXJubyByaWJvbGxlIG5lbCBtaW8gY3VvcmUsIE1vcnRlIGUgZGlzcGVyYXppb25lIG1cXCdpbmZpYW1tYW4gdHV0dFxcJ2ludG9ybm8hXCInIH0sXG4gICAgICAgIHsgdGl0bGU6ICdMYSByZWdpbmEgZGVsbGEgbm90dGUnIH0sXG4gICAgICAgIHsgdGV4dDogJ0lsIGZsYXV0byBtYWdpY28nIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBtZXRhZGF0YTogW1xuICAgICAgICAgICAgeyBrZXk6ICdSZWdpYSBkaSAnLCB2YWx1ZTogJ1JvYmVydG8gZGkgU2ltb25lJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogJzE5NTUnIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGFjdGlvbjoge1xuICAgICAgICB0ZXh0OiAnSUwgQ09TVFVNRSA+JyxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgcGF5bG9hZDogJ2ZvdXJ0aC1idXR0b24nXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9wbGFjZWltZy5jb20vODAwLzQwMC9uYXR1cmUvZ3JheXNjYWxlJ1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGl0bGU6ICdVTkEgQ09MTEVaSU9ORSBVTklDQS4gT0xUUkUgMzBNSUxBIENPU1RVTUkgQ1JFQVRJIEFEIEFSVEUgREFJIE1BRVNUUkkgRklPUkVOVElOSSBQRVIgTEUgU0NFTkUgUElVIFBSRVNUSUdJT1NFJyB9XG4gICAgICBdLFxuICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICBjb2xvcjogJ3RvbWF0bydcbiAgICAgIH1cbiAgICB9XG4gIF0sXG59O1xuIl19