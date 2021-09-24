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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwubW9jay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQWlCO0lBQ3pDLFdBQVcsRUFBRSxlQUFlO0lBQzVCLE9BQU8sRUFBRSxNQUFNO0lBQ2YsVUFBVSxFQUFFO1FBQ1YsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLEVBQUUsQ0FBQztRQUNQLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsT0FBTyxFQUFFLElBQUk7UUFDYixJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSxJQUFJO1FBQ1osUUFBUSxFQUFFLENBQUM7UUFDWCxTQUFTLEVBQUUsR0FBRztLQU9mO0lBQ0QsTUFBTSxFQUFFO1FBQ047WUFDRSxPQUFPLEVBQUUsZUFBZTtZQUN4QixLQUFLLEVBQUU7Z0JBQ0wsRUFBRSxJQUFJLEVBQUUsNkZBQTZGLEVBQUU7Z0JBQ3ZHLEVBQUUsS0FBSyxFQUFFLDJCQUEyQixFQUFFO2dCQUN0QyxFQUFFLElBQUksRUFBRSw0SkFBNEosRUFBRTtnQkFDdEs7b0JBQ0UsUUFBUSxFQUFFO3dCQUNSLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO3dCQUN4QyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtxQkFDekM7aUJBQ0Y7Z0JBQ0QsRUFDQzthQUNGO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxRQUFRO2dCQUNkLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsY0FBYztpQkFHeEI7YUFDRjtZQUNELFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUU7b0JBQ0wsR0FBRyxFQUFFLGtGQUFrRjtvQkFDdkYsTUFBTSxFQUFFLDZDQUE2QztvQkFDckQsTUFBTSxFQUFFLEdBQUc7b0JBQ1gsS0FBSyxFQUFFLEdBQUc7aUJBQ1g7YUFDRjtTQUNGLEVBQUU7WUFDRCxPQUFPLEVBQUUsZUFBZTtZQUN4QixLQUFLLEVBQUU7Z0JBQ0wsRUFBRSxJQUFJLEVBQUUsdUZBQXVGLEVBQUU7Z0JBQ2pHLEVBQUUsS0FBSyxFQUFFLDJCQUEyQixFQUFFO2dCQUN0QyxFQUFFLElBQUksRUFBRSxxSkFBcUosRUFBRTtnQkFDL0o7b0JBQ0UsUUFBUSxFQUFFO3dCQUNSLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO3dCQUN4QyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtxQkFDekM7aUJBQ0Y7Z0JBQ0QsRUFDQzthQUNGO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxRQUFRO2dCQUNkLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsZUFBZTtpQkFHekI7YUFDRjtZQUNELFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUU7b0JBQ0wsR0FBRyxFQUFFLGtGQUFrRjtvQkFDdkYsTUFBTSxFQUFFLDZDQUE2QztvQkFDckQsTUFBTSxFQUFFLEdBQUc7b0JBQ1gsS0FBSyxFQUFFLEdBQUc7aUJBQ1g7YUFDRjtTQUNGLEVBQUU7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUU7Z0JBQ2xDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO2dCQUM1QjtvQkFDRSxRQUFRLEVBQUU7d0JBQ1IsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRTt3QkFDaEQsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO3FCQUNsQjtpQkFDRjtnQkFDRCxFQUNDO2FBQ0Y7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsY0FBYztpQkFDeEI7YUFDRjtZQUNELFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUUsK0NBQStDO2FBQ3ZEO1NBQ0YsRUFBRTtZQUNELEtBQUssRUFBRTtnQkFDTCxFQUFFLElBQUksRUFBRSxxR0FBcUcsRUFBRTtnQkFDL0csRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUU7Z0JBQ2xDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO2dCQUM1QjtvQkFDRSxRQUFRLEVBQUU7d0JBQ1IsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRTt3QkFDaEQsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO3FCQUNsQjtpQkFDRjtnQkFDRCxFQUNDO2FBQ0Y7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsZUFBZTtpQkFDekI7YUFDRjtZQUNELFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUUsK0NBQStDO2FBQ3ZEO1NBQ0YsRUFBRTtZQUNELEtBQUssRUFBRTtnQkFDTCxFQUFFLEtBQUssRUFBRSwrR0FBK0csRUFBRTthQUMzSDtZQUNELFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUUsUUFBUTthQUNoQjtTQUNGO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2Fyb3VzZWxEYXRhIH0gZnJvbSAnLi9jYXJvdXNlbCc7XG5cbmV4cG9ydCBjb25zdCBDQVJPVVNFTF9NT0NLOiBDYXJvdXNlbERhdGEgPSB7XG4gIGNvbnRhaW5lcklkOiAnY2Fyb3VzZWwtcm9vdCcsXG4gIGNsYXNzZXM6ICdkZW1vJyxcbiAgbGliT3B0aW9uczoge1xuICAgIGNvdW50OiAxLFxuICAgIG1vdmU6IDEsXG4gICAgLy8gdG91Y2g6IHRydWUsXG4gICAgLy8gbW9kZTogJ2FsaWduJyxcbiAgICBidXR0b25zOiB0cnVlLFxuICAgIGRvdHM6IHRydWUsXG4gICAgcmV3aW5kOiB0cnVlLFxuICAgIGF1dG9wbGF5OiAwLFxuICAgIGFuaW1hdGlvbjogNTAwLFxuICAgIC8vIHJlc3BvbnNpdmU6IHtcbiAgICAvLyAgIDA6IHsgY291bnQ6IDEuNSwgYnV0dG9uczogZmFsc2UgfSxcbiAgICAvLyAgIDQ4MDogeyBjb3VudDogMi41LCBidXR0b25zOiBmYWxzZSB9LFxuICAgIC8vICAgNzY4OiB7IGNvdW50OiAzLCB0b3VjaDogZmFsc2UgfSxcbiAgICAvLyAgIDE0NDA6IHsgY291bnQ6IDQsIHRvdWNoOiBmYWxzZSB9LFxuICAgIC8vIH0sXG4gIH0sXG4gIHNsaWRlczogW1xuICAgIHtcbiAgICAgIGNsYXNzZXM6ICdleGFtcGxlLWNsYXNzJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ0N1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXM8YnIgLz4gZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4nIH0sXG4gICAgICAgIHsgdGl0bGU6ICdMb3JlbSBEb25lYyBzZWQgb2RpbyBkdWkuJyB9LFxuICAgICAgICB7IHRleHQ6ICc8aT5Nb3JiaSBsZW8gcmlzdXMsIHBvcnRhIGFjIGNvbnNlY3RldHVyIGFjPC9pPiwgdmVzdGlidWx1bSBhdCBlcm9zLiBDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuJyB9LFxuICAgICAgICB7XG4gICAgICAgICAgbWV0YWRhdGE6IFtcbiAgICAgICAgICAgIHsga2V5OiAnTWV0YWRhdG8gMScsIHZhbHVlOiAnVmFsb3JlIDEnIH0sXG4gICAgICAgICAgICB7IGtleTogJ01ldGFkYXRvIDInLCB2YWx1ZTogJ1ZhbG9yZSAyJyB9LFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgYWN0aW9uOiB7XG4gICAgICAgIHRleHQ6ICdBY3Rpb24nLFxuICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICBwYXlsb2FkOiAnZmlyc3QtYnV0dG9uJyxcbiAgICAgICAgICAvLyBocmVmOiAnL2V4YW1wbGVzJyxcbiAgICAgICAgICAvLyB0YXJnZXQ6ICdfYmxhbmsnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgIHZpZGVvOiB7XG4gICAgICAgICAgdXJsOiAnaHR0cDovL3d3dy5naXVsaW9hbmRyZWluaS5pdC9nYWxhc3NpYS1hcmlvc3RvL2dhbGFzc2lhLWFyaW9zdG8taG9tZS1jYXJvdXNlbC5tcDQnLFxuICAgICAgICAgIHBvc3RlcjogJ2h0dHBzOi8vcGxhY2VpbWcuY29tLzY0MC80ODAvYXJjaC9ncmF5c2NhbGUnLFxuICAgICAgICAgIGhlaWdodDogMzM0LFxuICAgICAgICAgIHdpZHRoOiA2NDAsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBjbGFzc2VzOiAnZXhhbXBsZS1jbGFzcycsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuJyB9LFxuICAgICAgICB7IHRpdGxlOiAnTG9yZW0gRG9uZWMgc2VkIG9kaW8gZHVpLicgfSxcbiAgICAgICAgeyB0ZXh0OiAnTW9yYmkgbGVvIHJpc3VzLCBwb3J0YSBhYyBjb25zZWN0ZXR1ciBhYywgdmVzdGlidWx1bSBhdCBlcm9zLiBDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuJyB9LFxuICAgICAgICB7XG4gICAgICAgICAgbWV0YWRhdGE6IFtcbiAgICAgICAgICAgIHsga2V5OiAnTWV0YWRhdG8gMScsIHZhbHVlOiAnVmFsb3JlIDEnIH0sXG4gICAgICAgICAgICB7IGtleTogJ01ldGFkYXRvIDInLCB2YWx1ZTogJ1ZhbG9yZSAyJyB9LFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgYWN0aW9uOiB7XG4gICAgICAgIHRleHQ6ICdBY3Rpb24nLFxuICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICBwYXlsb2FkOiAnc2Vjb25kLWJ1dHRvbicsXG4gICAgICAgICAgLy8gaHJlZjogJy9leGFtcGxlcycsXG4gICAgICAgICAgLy8gdGFyZ2V0OiAnX2JsYW5rJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICB2aWRlbzoge1xuICAgICAgICAgIHVybDogJ2h0dHA6Ly93d3cuZ2l1bGlvYW5kcmVpbmkuaXQvZ2FsYXNzaWEtYXJpb3N0by9nYWxhc3NpYS1hcmlvc3RvLWhvbWUtY2Fyb3VzZWwubXA0JyxcbiAgICAgICAgICBwb3N0ZXI6ICdodHRwczovL3BsYWNlaW1nLmNvbS82NDAvNDgwL2FyY2gvZ3JheXNjYWxlJyxcbiAgICAgICAgICBoZWlnaHQ6IDMzNCxcbiAgICAgICAgICB3aWR0aDogNjQwLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0aXRsZTogJ0xhIHJlZ2luYSBkZWxsYSBub3R0ZScgfSxcbiAgICAgICAgeyB0ZXh0OiAnSWwgZmxhdXRvIG1hZ2ljbycgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1ldGFkYXRhOiBbXG4gICAgICAgICAgICB7IGtleTogJ1JlZ2lhIGRpICcsIHZhbHVlOiAnUm9iZXJ0byBkaSBTaW1vbmUnIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiAnMTk1NScgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgYWN0aW9uOiB7XG4gICAgICAgIHRleHQ6ICdJTCBDT1NUVU1FID4nLFxuICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICBwYXlsb2FkOiAndGhpcmQtYnV0dG9uJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vcGxhY2VpbWcuY29tLzgwMC80MDAvbmF0dXJlL2dyYXlzY2FsZSdcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdcIkxhIHZlbmRldHRhIGRlbGxcXCdpbmZlcm5vIHJpYm9sbGUgbmVsIG1pbyBjdW9yZSwgTW9ydGUgZSBkaXNwZXJhemlvbmUgbVxcJ2luZmlhbW1hbiB0dXR0XFwnaW50b3JubyFcIicgfSxcbiAgICAgICAgeyB0aXRsZTogJ0xhIHJlZ2luYSBkZWxsYSBub3R0ZScgfSxcbiAgICAgICAgeyB0ZXh0OiAnSWwgZmxhdXRvIG1hZ2ljbycgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1ldGFkYXRhOiBbXG4gICAgICAgICAgICB7IGtleTogJ1JlZ2lhIGRpICcsIHZhbHVlOiAnUm9iZXJ0byBkaSBTaW1vbmUnIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiAnMTk1NScgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgYWN0aW9uOiB7XG4gICAgICAgIHRleHQ6ICdJTCBDT1NUVU1FID4nLFxuICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICBwYXlsb2FkOiAnZm91cnRoLWJ1dHRvbidcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL3BsYWNlaW1nLmNvbS84MDAvNDAwL25hdHVyZS9ncmF5c2NhbGUnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0aXRsZTogJ1VOQSBDT0xMRVpJT05FIFVOSUNBLiBPTFRSRSAzME1JTEEgQ09TVFVNSSBDUkVBVEkgQUQgQVJURSBEQUkgTUFFU1RSSSBGSU9SRU5USU5JIFBFUiBMRSBTQ0VORSBQSVUgUFJFU1RJR0lPU0UnIH1cbiAgICAgIF0sXG4gICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgIGNvbG9yOiAndG9tYXRvJ1xuICAgICAgfVxuICAgIH1cbiAgXSxcbn07XG4iXX0=