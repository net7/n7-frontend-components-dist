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
    },
    slides: [
        {
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
                    payload: 'first-button',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwubW9jay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQWlCO0lBQ3pDLFdBQVcsRUFBRSxlQUFlO0lBQzVCLE9BQU8sRUFBRSxNQUFNO0lBQ2YsVUFBVSxFQUFFO1FBQ1YsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLEVBQUUsQ0FBQztRQUNQLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsT0FBTyxFQUFFLElBQUk7UUFDYixJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSxJQUFJO1FBQ1osUUFBUSxFQUFFLENBQUM7UUFDWCxTQUFTLEVBQUUsR0FBRztLQU9mO0lBQ0QsTUFBTSxFQUFFO1FBQ047WUFDRSxPQUFPLEVBQUUsZUFBZTtZQUN4QixLQUFLLEVBQUU7Z0JBQ0wsRUFBRSxJQUFJLEVBQUUsdUZBQXVGLEVBQUU7Z0JBQ2pHLEVBQUUsS0FBSyxFQUFFLDJCQUEyQixFQUFFO2dCQUN0QyxFQUFFLElBQUksRUFBRSxxSkFBcUosRUFBRTtnQkFDL0o7b0JBQ0UsUUFBUSxFQUFFO3dCQUNSLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO3dCQUN4QyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtxQkFDekM7aUJBQ0Y7Z0JBQ0QsRUFDQzthQUNGO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxRQUFRO2dCQUNkLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsY0FBYztpQkFHeEI7YUFDRjtZQUNELFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUU7b0JBQ0wsR0FBRyxFQUFFLGtGQUFrRjtvQkFDdkYsTUFBTSxFQUFFLDZDQUE2QztvQkFDckQsTUFBTSxFQUFFLEdBQUc7b0JBQ1gsS0FBSyxFQUFFLEdBQUc7aUJBQ1g7YUFDRjtTQUNGLEVBQUU7WUFDRCxPQUFPLEVBQUUsZUFBZTtZQUN4QixLQUFLLEVBQUU7Z0JBQ0wsRUFBRSxJQUFJLEVBQUUsdUZBQXVGLEVBQUU7Z0JBQ2pHLEVBQUUsS0FBSyxFQUFFLDJCQUEyQixFQUFFO2dCQUN0QyxFQUFFLElBQUksRUFBRSxxSkFBcUosRUFBRTtnQkFDL0o7b0JBQ0UsUUFBUSxFQUFFO3dCQUNSLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO3dCQUN4QyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtxQkFDekM7aUJBQ0Y7Z0JBQ0QsRUFDQzthQUNGO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxRQUFRO2dCQUNkLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsZUFBZTtpQkFHekI7YUFDRjtZQUNELFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUU7b0JBQ0wsR0FBRyxFQUFFLGtGQUFrRjtvQkFDdkYsTUFBTSxFQUFFLDZDQUE2QztvQkFDckQsTUFBTSxFQUFFLEdBQUc7b0JBQ1gsS0FBSyxFQUFFLEdBQUc7aUJBQ1g7YUFDRjtTQUNGLEVBQUU7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUU7Z0JBQ2xDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO2dCQUM1QjtvQkFDRSxRQUFRLEVBQUU7d0JBQ1IsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRTt3QkFDaEQsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO3FCQUNsQjtpQkFDRjtnQkFDRCxFQUNDO2FBQ0Y7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsY0FBYztpQkFDeEI7YUFDRjtZQUNELFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUUsK0NBQStDO2FBQ3ZEO1NBQ0YsRUFBRTtZQUNELEtBQUssRUFBRTtnQkFDTCxFQUFFLElBQUksRUFBRSxxR0FBcUcsRUFBRTtnQkFDL0csRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUU7Z0JBQ2xDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO2dCQUM1QjtvQkFDRSxRQUFRLEVBQUU7d0JBQ1IsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRTt3QkFDaEQsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO3FCQUNsQjtpQkFDRjtnQkFDRCxFQUNDO2FBQ0Y7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsZUFBZTtpQkFDekI7YUFDRjtZQUNELFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUUsK0NBQStDO2FBQ3ZEO1NBQ0YsRUFBRTtZQUNELEtBQUssRUFBRTtnQkFDTCxFQUFFLEtBQUssRUFBRSwrR0FBK0csRUFBRTthQUMzSDtZQUNELFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUUsUUFBUTthQUNoQjtTQUNGO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2Fyb3VzZWxEYXRhIH0gZnJvbSAnLi9jYXJvdXNlbCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0FST1VTRUxfTU9DSzogQ2Fyb3VzZWxEYXRhID0ge1xyXG4gIGNvbnRhaW5lcklkOiAnY2Fyb3VzZWwtcm9vdCcsXHJcbiAgY2xhc3NlczogJ2RlbW8nLFxyXG4gIGxpYk9wdGlvbnM6IHtcclxuICAgIGNvdW50OiAxLFxyXG4gICAgbW92ZTogMSxcclxuICAgIC8vIHRvdWNoOiB0cnVlLFxyXG4gICAgLy8gbW9kZTogJ2FsaWduJyxcclxuICAgIGJ1dHRvbnM6IHRydWUsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgcmV3aW5kOiB0cnVlLFxyXG4gICAgYXV0b3BsYXk6IDAsXHJcbiAgICBhbmltYXRpb246IDUwMCxcclxuICAgIC8vIHJlc3BvbnNpdmU6IHtcclxuICAgIC8vICAgMDogeyBjb3VudDogMS41LCBidXR0b25zOiBmYWxzZSB9LFxyXG4gICAgLy8gICA0ODA6IHsgY291bnQ6IDIuNSwgYnV0dG9uczogZmFsc2UgfSxcclxuICAgIC8vICAgNzY4OiB7IGNvdW50OiAzLCB0b3VjaDogZmFsc2UgfSxcclxuICAgIC8vICAgMTQ0MDogeyBjb3VudDogNCwgdG91Y2g6IGZhbHNlIH0sXHJcbiAgICAvLyB9LFxyXG4gIH0sXHJcbiAgc2xpZGVzOiBbXHJcbiAgICB7XHJcbiAgICAgIGNsYXNzZXM6ICdleGFtcGxlLWNsYXNzJyxcclxuICAgICAgaXRlbXM6IFtcclxuICAgICAgICB7IHRleHQ6ICdDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuJyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICdMb3JlbSBEb25lYyBzZWQgb2RpbyBkdWkuJyB9LFxyXG4gICAgICAgIHsgdGV4dDogJ01vcmJpIGxlbyByaXN1cywgcG9ydGEgYWMgY29uc2VjdGV0dXIgYWMsIHZlc3RpYnVsdW0gYXQgZXJvcy4gQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLicgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXRhZGF0YTogW1xyXG4gICAgICAgICAgICB7IGtleTogJ01ldGFkYXRvIDEnLCB2YWx1ZTogJ1ZhbG9yZSAxJyB9LFxyXG4gICAgICAgICAgICB7IGtleTogJ01ldGFkYXRvIDInLCB2YWx1ZTogJ1ZhbG9yZSAyJyB9LFxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgYWN0aW9uOiB7XHJcbiAgICAgICAgdGV4dDogJ0FjdGlvbicsXHJcbiAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICBwYXlsb2FkOiAnZmlyc3QtYnV0dG9uJyxcclxuICAgICAgICAgIC8vIGhyZWY6ICcvZXhhbXBsZXMnLFxyXG4gICAgICAgICAgLy8gdGFyZ2V0OiAnX2JsYW5rJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYmFja2dyb3VuZDoge1xyXG4gICAgICAgIHZpZGVvOiB7XHJcbiAgICAgICAgICB1cmw6ICdodHRwOi8vd3d3LmdpdWxpb2FuZHJlaW5pLml0L2dhbGFzc2lhLWFyaW9zdG8vZ2FsYXNzaWEtYXJpb3N0by1ob21lLWNhcm91c2VsLm1wNCcsXHJcbiAgICAgICAgICBwb3N0ZXI6ICdodHRwczovL3BsYWNlaW1nLmNvbS82NDAvNDgwL2FyY2gvZ3JheXNjYWxlJyxcclxuICAgICAgICAgIGhlaWdodDogMzM0LFxyXG4gICAgICAgICAgd2lkdGg6IDY0MCxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgY2xhc3NlczogJ2V4YW1wbGUtY2xhc3MnLFxyXG4gICAgICBpdGVtczogW1xyXG4gICAgICAgIHsgdGV4dDogJ0N1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4nIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ0xvcmVtIERvbmVjIHNlZCBvZGlvIGR1aS4nIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnTW9yYmkgbGVvIHJpc3VzLCBwb3J0YSBhYyBjb25zZWN0ZXR1ciBhYywgdmVzdGlidWx1bSBhdCBlcm9zLiBDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuJyB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGFkYXRhOiBbXHJcbiAgICAgICAgICAgIHsga2V5OiAnTWV0YWRhdG8gMScsIHZhbHVlOiAnVmFsb3JlIDEnIH0sXHJcbiAgICAgICAgICAgIHsga2V5OiAnTWV0YWRhdG8gMicsIHZhbHVlOiAnVmFsb3JlIDInIH0sXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBhY3Rpb246IHtcclxuICAgICAgICB0ZXh0OiAnQWN0aW9uJyxcclxuICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgIHBheWxvYWQ6ICdzZWNvbmQtYnV0dG9uJyxcclxuICAgICAgICAgIC8vIGhyZWY6ICcvZXhhbXBsZXMnLFxyXG4gICAgICAgICAgLy8gdGFyZ2V0OiAnX2JsYW5rJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYmFja2dyb3VuZDoge1xyXG4gICAgICAgIHZpZGVvOiB7XHJcbiAgICAgICAgICB1cmw6ICdodHRwOi8vd3d3LmdpdWxpb2FuZHJlaW5pLml0L2dhbGFzc2lhLWFyaW9zdG8vZ2FsYXNzaWEtYXJpb3N0by1ob21lLWNhcm91c2VsLm1wNCcsXHJcbiAgICAgICAgICBwb3N0ZXI6ICdodHRwczovL3BsYWNlaW1nLmNvbS82NDAvNDgwL2FyY2gvZ3JheXNjYWxlJyxcclxuICAgICAgICAgIGhlaWdodDogMzM0LFxyXG4gICAgICAgICAgd2lkdGg6IDY0MCxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgaXRlbXM6IFtcclxuICAgICAgICB7IHRpdGxlOiAnTGEgcmVnaW5hIGRlbGxhIG5vdHRlJyB9LFxyXG4gICAgICAgIHsgdGV4dDogJ0lsIGZsYXV0byBtYWdpY28nIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0YWRhdGE6IFtcclxuICAgICAgICAgICAgeyBrZXk6ICdSZWdpYSBkaSAnLCB2YWx1ZTogJ1JvYmVydG8gZGkgU2ltb25lJyB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiAnMTk1NScgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgYWN0aW9uOiB7XHJcbiAgICAgICAgdGV4dDogJ0lMIENPU1RVTUUgPicsXHJcbiAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICBwYXlsb2FkOiAndGhpcmQtYnV0dG9uJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYmFja2dyb3VuZDoge1xyXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9wbGFjZWltZy5jb20vODAwLzQwMC9uYXR1cmUvZ3JheXNjYWxlJ1xyXG4gICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgeyB0ZXh0OiAnXCJMYSB2ZW5kZXR0YSBkZWxsXFwnaW5mZXJubyByaWJvbGxlIG5lbCBtaW8gY3VvcmUsIE1vcnRlIGUgZGlzcGVyYXppb25lIG1cXCdpbmZpYW1tYW4gdHV0dFxcJ2ludG9ybm8hXCInIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ0xhIHJlZ2luYSBkZWxsYSBub3R0ZScgfSxcclxuICAgICAgICB7IHRleHQ6ICdJbCBmbGF1dG8gbWFnaWNvJyB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGFkYXRhOiBbXHJcbiAgICAgICAgICAgIHsga2V5OiAnUmVnaWEgZGkgJywgdmFsdWU6ICdSb2JlcnRvIGRpIFNpbW9uZScgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogJzE5NTUnIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIGFjdGlvbjoge1xyXG4gICAgICAgIHRleHQ6ICdJTCBDT1NUVU1FID4nLFxyXG4gICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgcGF5bG9hZDogJ2ZvdXJ0aC1idXR0b24nXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL3BsYWNlaW1nLmNvbS84MDAvNDAwL25hdHVyZS9ncmF5c2NhbGUnXHJcbiAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgaXRlbXM6IFtcclxuICAgICAgICB7IHRpdGxlOiAnVU5BIENPTExFWklPTkUgVU5JQ0EuIE9MVFJFIDMwTUlMQSBDT1NUVU1JIENSRUFUSSBBRCBBUlRFIERBSSBNQUVTVFJJIEZJT1JFTlRJTkkgUEVSIExFIFNDRU5FIFBJVSBQUkVTVElHSU9TRScgfVxyXG4gICAgICBdLFxyXG4gICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgY29sb3I6ICd0b21hdG8nXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBdLFxyXG59O1xyXG4iXX0=