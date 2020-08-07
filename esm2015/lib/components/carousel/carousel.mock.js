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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwubW9jay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQWlCO0lBQ3pDLFdBQVcsRUFBRSxlQUFlO0lBQzVCLE9BQU8sRUFBRSxNQUFNO0lBQ2YsVUFBVSxFQUFFO1FBQ1YsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLEVBQUUsQ0FBQztRQUNQLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsT0FBTyxFQUFFLElBQUk7UUFDYixJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSxJQUFJO1FBQ1osUUFBUSxFQUFFLENBQUM7UUFDWCxTQUFTLEVBQUUsR0FBRztLQU9mO0lBQ0QsTUFBTSxFQUFFO1FBQ047WUFDRSxPQUFPLEVBQUUsZUFBZTtZQUN4QixLQUFLLEVBQUU7Z0JBQ0wsRUFBRSxJQUFJLEVBQUUsdUZBQXVGLEVBQUU7Z0JBQ2pHLEVBQUUsS0FBSyxFQUFFLDJCQUEyQixFQUFFO2dCQUN0QyxFQUFFLElBQUksRUFBRSxxSkFBcUosRUFBRTtnQkFDL0o7b0JBQ0UsUUFBUSxFQUFFO3dCQUNSLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO3dCQUN4QyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtxQkFDekM7aUJBQ0Y7Z0JBQ0QsRUFDQzthQUNGO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxRQUFRO2dCQUNkLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsY0FBYztpQkFHeEI7YUFDRjtZQUNELFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUU7b0JBQ0wsR0FBRyxFQUFFLGtGQUFrRjtvQkFDdkYsTUFBTSxFQUFFLDZDQUE2QztvQkFDckQsTUFBTSxFQUFFLEdBQUc7b0JBQ1gsS0FBSyxFQUFFLEdBQUc7aUJBQ1g7YUFDRjtTQUNGLEVBQUU7WUFDRCxPQUFPLEVBQUUsZUFBZTtZQUN4QixLQUFLLEVBQUU7Z0JBQ0wsRUFBRSxJQUFJLEVBQUUsdUZBQXVGLEVBQUU7Z0JBQ2pHLEVBQUUsS0FBSyxFQUFFLDJCQUEyQixFQUFFO2dCQUN0QyxFQUFFLElBQUksRUFBRSxxSkFBcUosRUFBRTtnQkFDL0o7b0JBQ0UsUUFBUSxFQUFFO3dCQUNSLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO3dCQUN4QyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtxQkFDekM7aUJBQ0Y7Z0JBQ0QsRUFDQzthQUNGO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxRQUFRO2dCQUNkLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsZUFBZTtpQkFHekI7YUFDRjtZQUNELFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUU7b0JBQ0wsR0FBRyxFQUFFLGtGQUFrRjtvQkFDdkYsTUFBTSxFQUFFLDZDQUE2QztvQkFDckQsTUFBTSxFQUFFLEdBQUc7b0JBQ1gsS0FBSyxFQUFFLEdBQUc7aUJBQ1g7YUFDRjtTQUNGLEVBQUU7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUU7Z0JBQ2xDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO2dCQUM1QjtvQkFDRSxRQUFRLEVBQUU7d0JBQ1IsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRTt3QkFDaEQsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO3FCQUNsQjtpQkFDRjtnQkFDRCxFQUNDO2FBQ0Y7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsY0FBYztpQkFDeEI7YUFDRjtZQUNELFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUUsK0NBQStDO2FBQ3ZEO1NBQ0YsRUFBRTtZQUNELEtBQUssRUFBRTtnQkFDTCxFQUFFLElBQUksRUFBRSxxR0FBcUcsRUFBRTtnQkFDL0csRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUU7Z0JBQ2xDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO2dCQUM1QjtvQkFDRSxRQUFRLEVBQUU7d0JBQ1IsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRTt3QkFDaEQsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO3FCQUNsQjtpQkFDRjtnQkFDRCxFQUNDO2FBQ0Y7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsZUFBZTtpQkFDekI7YUFDRjtZQUNELFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUUsK0NBQStDO2FBQ3ZEO1NBQ0YsRUFBRTtZQUNELEtBQUssRUFBRTtnQkFDTCxFQUFFLEtBQUssRUFBRSwrR0FBK0csRUFBRTthQUMzSDtZQUNELFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUUsUUFBUTthQUNoQjtTQUNGO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2Fyb3VzZWxEYXRhIH0gZnJvbSAnLi9jYXJvdXNlbCc7XG5cbmV4cG9ydCBjb25zdCBDQVJPVVNFTF9NT0NLOiBDYXJvdXNlbERhdGEgPSB7XG4gIGNvbnRhaW5lcklkOiAnY2Fyb3VzZWwtcm9vdCcsXG4gIGNsYXNzZXM6ICdkZW1vJyxcbiAgbGliT3B0aW9uczoge1xuICAgIGNvdW50OiAxLFxuICAgIG1vdmU6IDEsXG4gICAgLy8gdG91Y2g6IHRydWUsXG4gICAgLy8gbW9kZTogJ2FsaWduJyxcbiAgICBidXR0b25zOiB0cnVlLFxuICAgIGRvdHM6IHRydWUsXG4gICAgcmV3aW5kOiB0cnVlLFxuICAgIGF1dG9wbGF5OiAwLFxuICAgIGFuaW1hdGlvbjogNTAwLFxuICAgIC8vIHJlc3BvbnNpdmU6IHtcbiAgICAvLyAgIDA6IHsgY291bnQ6IDEuNSwgYnV0dG9uczogZmFsc2UgfSxcbiAgICAvLyAgIDQ4MDogeyBjb3VudDogMi41LCBidXR0b25zOiBmYWxzZSB9LFxuICAgIC8vICAgNzY4OiB7IGNvdW50OiAzLCB0b3VjaDogZmFsc2UgfSxcbiAgICAvLyAgIDE0NDA6IHsgY291bnQ6IDQsIHRvdWNoOiBmYWxzZSB9LFxuICAgIC8vIH0sXG4gIH0sXG4gIHNsaWRlczogW1xuICAgIHtcbiAgICAgIGNsYXNzZXM6ICdleGFtcGxlLWNsYXNzJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ0N1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4nIH0sXG4gICAgICAgIHsgdGl0bGU6ICdMb3JlbSBEb25lYyBzZWQgb2RpbyBkdWkuJyB9LFxuICAgICAgICB7IHRleHQ6ICdNb3JiaSBsZW8gcmlzdXMsIHBvcnRhIGFjIGNvbnNlY3RldHVyIGFjLCB2ZXN0aWJ1bHVtIGF0IGVyb3MuIEN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4nIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBtZXRhZGF0YTogW1xuICAgICAgICAgICAgeyBrZXk6ICdNZXRhZGF0byAxJywgdmFsdWU6ICdWYWxvcmUgMScgfSxcbiAgICAgICAgICAgIHsga2V5OiAnTWV0YWRhdG8gMicsIHZhbHVlOiAnVmFsb3JlIDInIH0sXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBhY3Rpb246IHtcbiAgICAgICAgdGV4dDogJ0FjdGlvbicsXG4gICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgIHBheWxvYWQ6ICdmaXJzdC1idXR0b24nLFxuICAgICAgICAgIC8vIGhyZWY6ICcvZXhhbXBsZXMnLFxuICAgICAgICAgIC8vIHRhcmdldDogJ19ibGFuaydcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgdmlkZW86IHtcbiAgICAgICAgICB1cmw6ICdodHRwOi8vd3d3LmdpdWxpb2FuZHJlaW5pLml0L2dhbGFzc2lhLWFyaW9zdG8vZ2FsYXNzaWEtYXJpb3N0by1ob21lLWNhcm91c2VsLm1wNCcsXG4gICAgICAgICAgcG9zdGVyOiAnaHR0cHM6Ly9wbGFjZWltZy5jb20vNjQwLzQ4MC9hcmNoL2dyYXlzY2FsZScsXG4gICAgICAgICAgaGVpZ2h0OiAzMzQsXG4gICAgICAgICAgd2lkdGg6IDY0MCxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGNsYXNzZXM6ICdleGFtcGxlLWNsYXNzJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ0N1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4nIH0sXG4gICAgICAgIHsgdGl0bGU6ICdMb3JlbSBEb25lYyBzZWQgb2RpbyBkdWkuJyB9LFxuICAgICAgICB7IHRleHQ6ICdNb3JiaSBsZW8gcmlzdXMsIHBvcnRhIGFjIGNvbnNlY3RldHVyIGFjLCB2ZXN0aWJ1bHVtIGF0IGVyb3MuIEN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4nIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBtZXRhZGF0YTogW1xuICAgICAgICAgICAgeyBrZXk6ICdNZXRhZGF0byAxJywgdmFsdWU6ICdWYWxvcmUgMScgfSxcbiAgICAgICAgICAgIHsga2V5OiAnTWV0YWRhdG8gMicsIHZhbHVlOiAnVmFsb3JlIDInIH0sXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBhY3Rpb246IHtcbiAgICAgICAgdGV4dDogJ0FjdGlvbicsXG4gICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgIHBheWxvYWQ6ICdzZWNvbmQtYnV0dG9uJyxcbiAgICAgICAgICAvLyBocmVmOiAnL2V4YW1wbGVzJyxcbiAgICAgICAgICAvLyB0YXJnZXQ6ICdfYmxhbmsnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgIHZpZGVvOiB7XG4gICAgICAgICAgdXJsOiAnaHR0cDovL3d3dy5naXVsaW9hbmRyZWluaS5pdC9nYWxhc3NpYS1hcmlvc3RvL2dhbGFzc2lhLWFyaW9zdG8taG9tZS1jYXJvdXNlbC5tcDQnLFxuICAgICAgICAgIHBvc3RlcjogJ2h0dHBzOi8vcGxhY2VpbWcuY29tLzY0MC80ODAvYXJjaC9ncmF5c2NhbGUnLFxuICAgICAgICAgIGhlaWdodDogMzM0LFxuICAgICAgICAgIHdpZHRoOiA2NDAsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRpdGxlOiAnTGEgcmVnaW5hIGRlbGxhIG5vdHRlJyB9LFxuICAgICAgICB7IHRleHQ6ICdJbCBmbGF1dG8gbWFnaWNvJyB9LFxuICAgICAgICB7XG4gICAgICAgICAgbWV0YWRhdGE6IFtcbiAgICAgICAgICAgIHsga2V5OiAnUmVnaWEgZGkgJywgdmFsdWU6ICdSb2JlcnRvIGRpIFNpbW9uZScgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6ICcxOTU1JyB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBhY3Rpb246IHtcbiAgICAgICAgdGV4dDogJ0lMIENPU1RVTUUgPicsXG4gICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgIHBheWxvYWQ6ICd0aGlyZC1idXR0b24nXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9wbGFjZWltZy5jb20vODAwLzQwMC9uYXR1cmUvZ3JheXNjYWxlJ1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1wiTGEgdmVuZGV0dGEgZGVsbFxcJ2luZmVybm8gcmlib2xsZSBuZWwgbWlvIGN1b3JlLCBNb3J0ZSBlIGRpc3BlcmF6aW9uZSBtXFwnaW5maWFtbWFuIHR1dHRcXCdpbnRvcm5vIVwiJyB9LFxuICAgICAgICB7IHRpdGxlOiAnTGEgcmVnaW5hIGRlbGxhIG5vdHRlJyB9LFxuICAgICAgICB7IHRleHQ6ICdJbCBmbGF1dG8gbWFnaWNvJyB9LFxuICAgICAgICB7XG4gICAgICAgICAgbWV0YWRhdGE6IFtcbiAgICAgICAgICAgIHsga2V5OiAnUmVnaWEgZGkgJywgdmFsdWU6ICdSb2JlcnRvIGRpIFNpbW9uZScgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6ICcxOTU1JyB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBhY3Rpb246IHtcbiAgICAgICAgdGV4dDogJ0lMIENPU1RVTUUgPicsXG4gICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgIHBheWxvYWQ6ICdmb3VydGgtYnV0dG9uJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vcGxhY2VpbWcuY29tLzgwMC80MDAvbmF0dXJlL2dyYXlzY2FsZSdcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRpdGxlOiAnVU5BIENPTExFWklPTkUgVU5JQ0EuIE9MVFJFIDMwTUlMQSBDT1NUVU1JIENSRUFUSSBBRCBBUlRFIERBSSBNQUVTVFJJIEZJT1JFTlRJTkkgUEVSIExFIFNDRU5FIFBJVSBQUkVTVElHSU9TRScgfVxuICAgICAgXSxcbiAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgY29sb3I6ICd0b21hdG8nXG4gICAgICB9XG4gICAgfVxuICBdLFxufTtcbiJdfQ==