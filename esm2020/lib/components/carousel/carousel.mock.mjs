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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwubW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2R2LWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBaUI7SUFDekMsV0FBVyxFQUFFLGVBQWU7SUFDNUIsT0FBTyxFQUFFLE1BQU07SUFDZixVQUFVLEVBQUU7UUFDVixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksRUFBRSxDQUFDO1FBQ1AsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixPQUFPLEVBQUUsSUFBSTtRQUNiLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFLElBQUk7UUFDWixRQUFRLEVBQUUsQ0FBQztRQUNYLFNBQVMsRUFBRSxHQUFHO1FBQ2QsZ0JBQWdCO1FBQ2hCLHVDQUF1QztRQUN2Qyx5Q0FBeUM7UUFDekMscUNBQXFDO1FBQ3JDLHNDQUFzQztRQUN0QyxLQUFLO0tBQ047SUFDRCxNQUFNLEVBQUU7UUFDTjtZQUNFLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLEtBQUssRUFBRTtnQkFDTCxFQUFFLElBQUksRUFBRSw2RkFBNkYsRUFBRTtnQkFDdkcsRUFBRSxLQUFLLEVBQUUsMkJBQTJCLEVBQUU7Z0JBQ3RDLEVBQUUsSUFBSSxFQUFFLDRKQUE0SixFQUFFO2dCQUN0SztvQkFDRSxRQUFRLEVBQUU7d0JBQ1IsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7d0JBQ3hDLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO3FCQUN6QztpQkFDRjtnQkFDRCxFQUNDO2FBQ0Y7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsTUFBTSxFQUFFO29CQUNOLE9BQU8sRUFBRSxjQUFjO29CQUN2QixxQkFBcUI7b0JBQ3JCLG1CQUFtQjtpQkFDcEI7YUFDRjtZQUNELFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUU7b0JBQ0wsR0FBRyxFQUFFLGtGQUFrRjtvQkFDdkYsTUFBTSxFQUFFLDZDQUE2QztvQkFDckQsTUFBTSxFQUFFLEdBQUc7b0JBQ1gsS0FBSyxFQUFFLEdBQUc7aUJBQ1g7YUFDRjtTQUNGLEVBQUU7WUFDRCxPQUFPLEVBQUUsZUFBZTtZQUN4QixLQUFLLEVBQUU7Z0JBQ0wsRUFBRSxJQUFJLEVBQUUsdUZBQXVGLEVBQUU7Z0JBQ2pHLEVBQUUsS0FBSyxFQUFFLDJCQUEyQixFQUFFO2dCQUN0QyxFQUFFLElBQUksRUFBRSxxSkFBcUosRUFBRTtnQkFDL0o7b0JBQ0UsUUFBUSxFQUFFO3dCQUNSLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO3dCQUN4QyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtxQkFDekM7aUJBQ0Y7Z0JBQ0QsRUFDQzthQUNGO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxRQUFRO2dCQUNkLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsZUFBZTtvQkFDeEIscUJBQXFCO29CQUNyQixtQkFBbUI7aUJBQ3BCO2FBQ0Y7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFO29CQUNMLEdBQUcsRUFBRSxrRkFBa0Y7b0JBQ3ZGLE1BQU0sRUFBRSw2Q0FBNkM7b0JBQ3JELE1BQU0sRUFBRSxHQUFHO29CQUNYLEtBQUssRUFBRSxHQUFHO2lCQUNYO2FBQ0Y7U0FDRixFQUFFO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFO2dCQUNsQyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRTtnQkFDNUI7b0JBQ0UsUUFBUSxFQUFFO3dCQUNSLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUU7d0JBQ2hELEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtxQkFDbEI7aUJBQ0Y7Z0JBQ0QsRUFDQzthQUNGO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxjQUFjO2dCQUNwQixNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFLGNBQWM7aUJBQ3hCO2FBQ0Y7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLCtDQUErQzthQUN2RDtTQUNGLEVBQUU7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsRUFBRSxJQUFJLEVBQUUscUdBQXFHLEVBQUU7Z0JBQy9HLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFO2dCQUNsQyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRTtnQkFDNUI7b0JBQ0UsUUFBUSxFQUFFO3dCQUNSLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUU7d0JBQ2hELEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtxQkFDbEI7aUJBQ0Y7Z0JBQ0QsRUFDQzthQUNGO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxjQUFjO2dCQUNwQixNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFLGVBQWU7aUJBQ3pCO2FBQ0Y7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLCtDQUErQzthQUN2RDtTQUNGLEVBQUU7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsRUFBRSxLQUFLLEVBQUUsK0dBQStHLEVBQUU7YUFDM0g7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLFFBQVE7YUFDaEI7U0FDRjtLQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcm91c2VsRGF0YSB9IGZyb20gJy4vY2Fyb3VzZWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENBUk9VU0VMX01PQ0s6IENhcm91c2VsRGF0YSA9IHtcclxuICBjb250YWluZXJJZDogJ2Nhcm91c2VsLXJvb3QnLFxyXG4gIGNsYXNzZXM6ICdkZW1vJyxcclxuICBsaWJPcHRpb25zOiB7XHJcbiAgICBjb3VudDogMSxcclxuICAgIG1vdmU6IDEsXHJcbiAgICAvLyB0b3VjaDogdHJ1ZSxcclxuICAgIC8vIG1vZGU6ICdhbGlnbicsXHJcbiAgICBidXR0b25zOiB0cnVlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIHJld2luZDogdHJ1ZSxcclxuICAgIGF1dG9wbGF5OiAwLFxyXG4gICAgYW5pbWF0aW9uOiA1MDAsXHJcbiAgICAvLyByZXNwb25zaXZlOiB7XHJcbiAgICAvLyAgIDA6IHsgY291bnQ6IDEuNSwgYnV0dG9uczogZmFsc2UgfSxcclxuICAgIC8vICAgNDgwOiB7IGNvdW50OiAyLjUsIGJ1dHRvbnM6IGZhbHNlIH0sXHJcbiAgICAvLyAgIDc2ODogeyBjb3VudDogMywgdG91Y2g6IGZhbHNlIH0sXHJcbiAgICAvLyAgIDE0NDA6IHsgY291bnQ6IDQsIHRvdWNoOiBmYWxzZSB9LFxyXG4gICAgLy8gfSxcclxuICB9LFxyXG4gIHNsaWRlczogW1xyXG4gICAge1xyXG4gICAgICBjbGFzc2VzOiAnZXhhbXBsZS1jbGFzcycsXHJcbiAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgeyB0ZXh0OiAnQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1czxiciAvPiBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLicgfSxcclxuICAgICAgICB7IHRpdGxlOiAnTG9yZW0gRG9uZWMgc2VkIG9kaW8gZHVpLicgfSxcclxuICAgICAgICB7IHRleHQ6ICc8aT5Nb3JiaSBsZW8gcmlzdXMsIHBvcnRhIGFjIGNvbnNlY3RldHVyIGFjPC9pPiwgdmVzdGlidWx1bSBhdCBlcm9zLiBDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuJyB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGFkYXRhOiBbXHJcbiAgICAgICAgICAgIHsga2V5OiAnTWV0YWRhdG8gMScsIHZhbHVlOiAnVmFsb3JlIDEnIH0sXHJcbiAgICAgICAgICAgIHsga2V5OiAnTWV0YWRhdG8gMicsIHZhbHVlOiAnVmFsb3JlIDInIH0sXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBhY3Rpb246IHtcclxuICAgICAgICB0ZXh0OiAnQWN0aW9uJyxcclxuICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgIHBheWxvYWQ6ICdmaXJzdC1idXR0b24nLFxyXG4gICAgICAgICAgLy8gaHJlZjogJy9leGFtcGxlcycsXHJcbiAgICAgICAgICAvLyB0YXJnZXQ6ICdfYmxhbmsnXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgdmlkZW86IHtcclxuICAgICAgICAgIHVybDogJ2h0dHA6Ly93d3cuZ2l1bGlvYW5kcmVpbmkuaXQvZ2FsYXNzaWEtYXJpb3N0by9nYWxhc3NpYS1hcmlvc3RvLWhvbWUtY2Fyb3VzZWwubXA0JyxcclxuICAgICAgICAgIHBvc3RlcjogJ2h0dHBzOi8vcGxhY2VpbWcuY29tLzY0MC80ODAvYXJjaC9ncmF5c2NhbGUnLFxyXG4gICAgICAgICAgaGVpZ2h0OiAzMzQsXHJcbiAgICAgICAgICB3aWR0aDogNjQwLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICBjbGFzc2VzOiAnZXhhbXBsZS1jbGFzcycsXHJcbiAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgeyB0ZXh0OiAnQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLicgfSxcclxuICAgICAgICB7IHRpdGxlOiAnTG9yZW0gRG9uZWMgc2VkIG9kaW8gZHVpLicgfSxcclxuICAgICAgICB7IHRleHQ6ICdNb3JiaSBsZW8gcmlzdXMsIHBvcnRhIGFjIGNvbnNlY3RldHVyIGFjLCB2ZXN0aWJ1bHVtIGF0IGVyb3MuIEN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4nIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0YWRhdGE6IFtcclxuICAgICAgICAgICAgeyBrZXk6ICdNZXRhZGF0byAxJywgdmFsdWU6ICdWYWxvcmUgMScgfSxcclxuICAgICAgICAgICAgeyBrZXk6ICdNZXRhZGF0byAyJywgdmFsdWU6ICdWYWxvcmUgMicgfSxcclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIGFjdGlvbjoge1xyXG4gICAgICAgIHRleHQ6ICdBY3Rpb24nLFxyXG4gICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgcGF5bG9hZDogJ3NlY29uZC1idXR0b24nLFxyXG4gICAgICAgICAgLy8gaHJlZjogJy9leGFtcGxlcycsXHJcbiAgICAgICAgICAvLyB0YXJnZXQ6ICdfYmxhbmsnXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgdmlkZW86IHtcclxuICAgICAgICAgIHVybDogJ2h0dHA6Ly93d3cuZ2l1bGlvYW5kcmVpbmkuaXQvZ2FsYXNzaWEtYXJpb3N0by9nYWxhc3NpYS1hcmlvc3RvLWhvbWUtY2Fyb3VzZWwubXA0JyxcclxuICAgICAgICAgIHBvc3RlcjogJ2h0dHBzOi8vcGxhY2VpbWcuY29tLzY0MC80ODAvYXJjaC9ncmF5c2NhbGUnLFxyXG4gICAgICAgICAgaGVpZ2h0OiAzMzQsXHJcbiAgICAgICAgICB3aWR0aDogNjQwLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICBpdGVtczogW1xyXG4gICAgICAgIHsgdGl0bGU6ICdMYSByZWdpbmEgZGVsbGEgbm90dGUnIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnSWwgZmxhdXRvIG1hZ2ljbycgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXRhZGF0YTogW1xyXG4gICAgICAgICAgICB7IGtleTogJ1JlZ2lhIGRpICcsIHZhbHVlOiAnUm9iZXJ0byBkaSBTaW1vbmUnIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6ICcxOTU1JyB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBhY3Rpb246IHtcclxuICAgICAgICB0ZXh0OiAnSUwgQ09TVFVNRSA+JyxcclxuICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgIHBheWxvYWQ6ICd0aGlyZC1idXR0b24nXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL3BsYWNlaW1nLmNvbS84MDAvNDAwL25hdHVyZS9ncmF5c2NhbGUnXHJcbiAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgaXRlbXM6IFtcclxuICAgICAgICB7IHRleHQ6ICdcIkxhIHZlbmRldHRhIGRlbGxcXCdpbmZlcm5vIHJpYm9sbGUgbmVsIG1pbyBjdW9yZSwgTW9ydGUgZSBkaXNwZXJhemlvbmUgbVxcJ2luZmlhbW1hbiB0dXR0XFwnaW50b3JubyFcIicgfSxcclxuICAgICAgICB7IHRpdGxlOiAnTGEgcmVnaW5hIGRlbGxhIG5vdHRlJyB9LFxyXG4gICAgICAgIHsgdGV4dDogJ0lsIGZsYXV0byBtYWdpY28nIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0YWRhdGE6IFtcclxuICAgICAgICAgICAgeyBrZXk6ICdSZWdpYSBkaSAnLCB2YWx1ZTogJ1JvYmVydG8gZGkgU2ltb25lJyB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiAnMTk1NScgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgYWN0aW9uOiB7XHJcbiAgICAgICAgdGV4dDogJ0lMIENPU1RVTUUgPicsXHJcbiAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICBwYXlsb2FkOiAnZm91cnRoLWJ1dHRvbidcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vcGxhY2VpbWcuY29tLzgwMC80MDAvbmF0dXJlL2dyYXlzY2FsZSdcclxuICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICBpdGVtczogW1xyXG4gICAgICAgIHsgdGl0bGU6ICdVTkEgQ09MTEVaSU9ORSBVTklDQS4gT0xUUkUgMzBNSUxBIENPU1RVTUkgQ1JFQVRJIEFEIEFSVEUgREFJIE1BRVNUUkkgRklPUkVOVElOSSBQRVIgTEUgU0NFTkUgUElVIFBSRVNUSUdJT1NFJyB9XHJcbiAgICAgIF0sXHJcbiAgICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICBjb2xvcjogJ3RvbWF0bydcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIF0sXHJcbn07XHJcbiJdfQ==