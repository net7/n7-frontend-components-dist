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
                {
                    text: 'Cum sociis natoque penatibus<br /> et magnis dis parturient montes, nascetur ridiculus mus.',
                },
                { title: 'Lorem Donec sed odio dui.' },
                {
                    text: '<i>Morbi leo risus, porta ac consectetur ac</i>, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                },
                {
                    image: {
                        src: 'assets/images/heart.svg',
                        classes: 'some test classes',
                    },
                },
                {
                    metadata: [
                        { key: 'Metadato 1', value: 'Valore 1' },
                        { key: 'Metadato 2', value: 'Valore 2' },
                    ],
                },
                {},
            ],
            action: {
                text: 'Action',
                anchor: {
                    payload: 'first-button',
                    // href: '/examples',
                    // target: '_blank'
                },
            },
            background: {
                video: {
                    url: 'http://www.giulioandreini.it/galassia-ariosto/galassia-ariosto-home-carousel.mp4',
                    poster: 'https://placeimg.com/640/480/arch/grayscale',
                    height: 334,
                    width: 640,
                },
            },
        },
        {
            classes: 'example-class',
            items: [
                {
                    text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                },
                { title: 'Lorem Donec sed odio dui.' },
                {
                    text: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                },
                {
                    metadata: [
                        { key: 'Metadato 1', value: 'Valore 1' },
                        { key: 'Metadato 2', value: 'Valore 2' },
                    ],
                },
                {},
            ],
            action: {
                text: 'Action',
                anchor: {
                    payload: 'second-button',
                    // href: '/examples',
                    // target: '_blank'
                },
            },
            background: {
                video: {
                    url: 'http://www.giulioandreini.it/galassia-ariosto/galassia-ariosto-home-carousel.mp4',
                    poster: 'https://placeimg.com/640/480/arch/grayscale',
                    height: 334,
                    width: 640,
                },
            },
        },
        {
            items: [
                { title: 'La regina della notte' },
                { text: 'Il flauto magico' },
                {
                    metadata: [
                        { key: 'Regia di ', value: 'Roberto di Simone' },
                        { value: '1955' },
                    ],
                },
                {},
            ],
            action: {
                text: 'IL COSTUME >',
                anchor: {
                    payload: 'third-button',
                },
            },
            background: {
                image: 'https://placeimg.com/800/400/nature/grayscale',
            },
        },
        {
            items: [
                {
                    text: "\"La vendetta dell'inferno ribolle nel mio cuore, Morte e disperazione m'infiamman tutt'intorno!\"",
                },
                { title: 'La regina della notte' },
                { text: 'Il flauto magico' },
                {
                    metadata: [
                        { key: 'Regia di ', value: 'Roberto di Simone' },
                        { value: '1955' },
                    ],
                },
                {},
            ],
            action: {
                text: 'IL COSTUME >',
                anchor: {
                    payload: 'fourth-button',
                },
            },
            background: {
                image: 'https://placeimg.com/800/400/nature/grayscale',
            },
        },
        {
            items: [
                {
                    title: 'UNA COLLEZIONE UNICA. OLTRE 30MILA COSTUMI CREATI AD ARTE DAI MAESTRI FIORENTINI PER LE SCENE PIU PRESTIGIOSE',
                },
            ],
            background: {
                color: 'tomato',
            },
        },
    ],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwubW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2R2LWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBaUI7SUFDekMsV0FBVyxFQUFFLGVBQWU7SUFDNUIsT0FBTyxFQUFFLE1BQU07SUFDZixVQUFVLEVBQUU7UUFDVixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksRUFBRSxDQUFDO1FBQ1AsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixPQUFPLEVBQUUsSUFBSTtRQUNiLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFLElBQUk7UUFDWixRQUFRLEVBQUUsQ0FBQztRQUNYLFNBQVMsRUFBRSxHQUFHO1FBQ2QsZ0JBQWdCO1FBQ2hCLHVDQUF1QztRQUN2Qyx5Q0FBeUM7UUFDekMscUNBQXFDO1FBQ3JDLHNDQUFzQztRQUN0QyxLQUFLO0tBQ047SUFDRCxNQUFNLEVBQUU7UUFDTjtZQUNFLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLEtBQUssRUFBRTtnQkFDTDtvQkFDRSxJQUFJLEVBQUUsNkZBQTZGO2lCQUNwRztnQkFDRCxFQUFFLEtBQUssRUFBRSwyQkFBMkIsRUFBRTtnQkFDdEM7b0JBQ0UsSUFBSSxFQUFFLDRKQUE0SjtpQkFDbks7Z0JBQ0Q7b0JBQ0UsS0FBSyxFQUFFO3dCQUNMLEdBQUcsRUFBRSx5QkFBeUI7d0JBQzlCLE9BQU8sRUFBRSxtQkFBbUI7cUJBQzdCO2lCQUNGO2dCQUNEO29CQUNFLFFBQVEsRUFBRTt3QkFDUixFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTt3QkFDeEMsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7cUJBQ3pDO2lCQUNGO2dCQUNELEVBQUU7YUFDSDtZQUNELE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsUUFBUTtnQkFDZCxNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLHFCQUFxQjtvQkFDckIsbUJBQW1CO2lCQUNwQjthQUNGO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLEtBQUssRUFBRTtvQkFDTCxHQUFHLEVBQUUsa0ZBQWtGO29CQUN2RixNQUFNLEVBQUUsNkNBQTZDO29CQUNyRCxNQUFNLEVBQUUsR0FBRztvQkFDWCxLQUFLLEVBQUUsR0FBRztpQkFDWDthQUNGO1NBQ0Y7UUFDRDtZQUNFLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLEtBQUssRUFBRTtnQkFDTDtvQkFDRSxJQUFJLEVBQUUsdUZBQXVGO2lCQUM5RjtnQkFDRCxFQUFFLEtBQUssRUFBRSwyQkFBMkIsRUFBRTtnQkFDdEM7b0JBQ0UsSUFBSSxFQUFFLHFKQUFxSjtpQkFDNUo7Z0JBQ0Q7b0JBQ0UsUUFBUSxFQUFFO3dCQUNSLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO3dCQUN4QyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtxQkFDekM7aUJBQ0Y7Z0JBQ0QsRUFBRTthQUNIO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxRQUFRO2dCQUNkLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsZUFBZTtvQkFDeEIscUJBQXFCO29CQUNyQixtQkFBbUI7aUJBQ3BCO2FBQ0Y7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFO29CQUNMLEdBQUcsRUFBRSxrRkFBa0Y7b0JBQ3ZGLE1BQU0sRUFBRSw2Q0FBNkM7b0JBQ3JELE1BQU0sRUFBRSxHQUFHO29CQUNYLEtBQUssRUFBRSxHQUFHO2lCQUNYO2FBQ0Y7U0FDRjtRQUNEO1lBQ0UsS0FBSyxFQUFFO2dCQUNMLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFO2dCQUNsQyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRTtnQkFDNUI7b0JBQ0UsUUFBUSxFQUFFO3dCQUNSLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUU7d0JBQ2hELEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtxQkFDbEI7aUJBQ0Y7Z0JBQ0QsRUFBRTthQUNIO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxjQUFjO2dCQUNwQixNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFLGNBQWM7aUJBQ3hCO2FBQ0Y7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLCtDQUErQzthQUN2RDtTQUNGO1FBQ0Q7WUFDRSxLQUFLLEVBQUU7Z0JBQ0w7b0JBQ0UsSUFBSSxFQUFFLG9HQUFvRztpQkFDM0c7Z0JBQ0QsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUU7Z0JBQ2xDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO2dCQUM1QjtvQkFDRSxRQUFRLEVBQUU7d0JBQ1IsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRTt3QkFDaEQsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO3FCQUNsQjtpQkFDRjtnQkFDRCxFQUFFO2FBQ0g7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsZUFBZTtpQkFDekI7YUFDRjtZQUNELFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUUsK0NBQStDO2FBQ3ZEO1NBQ0Y7UUFDRDtZQUNFLEtBQUssRUFBRTtnQkFDTDtvQkFDRSxLQUFLLEVBQ0gsK0dBQStHO2lCQUNsSDthQUNGO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLEtBQUssRUFBRSxRQUFRO2FBQ2hCO1NBQ0Y7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJvdXNlbERhdGEgfSBmcm9tICcuL2Nhcm91c2VsJztcblxuZXhwb3J0IGNvbnN0IENBUk9VU0VMX01PQ0s6IENhcm91c2VsRGF0YSA9IHtcbiAgY29udGFpbmVySWQ6ICdjYXJvdXNlbC1yb290JyxcbiAgY2xhc3NlczogJ2RlbW8nLFxuICBsaWJPcHRpb25zOiB7XG4gICAgY291bnQ6IDEsXG4gICAgbW92ZTogMSxcbiAgICAvLyB0b3VjaDogdHJ1ZSxcbiAgICAvLyBtb2RlOiAnYWxpZ24nLFxuICAgIGJ1dHRvbnM6IHRydWUsXG4gICAgZG90czogdHJ1ZSxcbiAgICByZXdpbmQ6IHRydWUsXG4gICAgYXV0b3BsYXk6IDAsXG4gICAgYW5pbWF0aW9uOiA1MDAsXG4gICAgLy8gcmVzcG9uc2l2ZToge1xuICAgIC8vICAgMDogeyBjb3VudDogMS41LCBidXR0b25zOiBmYWxzZSB9LFxuICAgIC8vICAgNDgwOiB7IGNvdW50OiAyLjUsIGJ1dHRvbnM6IGZhbHNlIH0sXG4gICAgLy8gICA3Njg6IHsgY291bnQ6IDMsIHRvdWNoOiBmYWxzZSB9LFxuICAgIC8vICAgMTQ0MDogeyBjb3VudDogNCwgdG91Y2g6IGZhbHNlIH0sXG4gICAgLy8gfSxcbiAgfSxcbiAgc2xpZGVzOiBbXG4gICAge1xuICAgICAgY2xhc3NlczogJ2V4YW1wbGUtY2xhc3MnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzPGJyIC8+IGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuJyxcbiAgICAgICAgfSxcbiAgICAgICAgeyB0aXRsZTogJ0xvcmVtIERvbmVjIHNlZCBvZGlvIGR1aS4nIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnPGk+TW9yYmkgbGVvIHJpc3VzLCBwb3J0YSBhYyBjb25zZWN0ZXR1ciBhYzwvaT4sIHZlc3RpYnVsdW0gYXQgZXJvcy4gQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgc3JjOiAnYXNzZXRzL2ltYWdlcy9oZWFydC5zdmcnLFxuICAgICAgICAgICAgY2xhc3NlczogJ3NvbWUgdGVzdCBjbGFzc2VzJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbWV0YWRhdGE6IFtcbiAgICAgICAgICAgIHsga2V5OiAnTWV0YWRhdG8gMScsIHZhbHVlOiAnVmFsb3JlIDEnIH0sXG4gICAgICAgICAgICB7IGtleTogJ01ldGFkYXRvIDInLCB2YWx1ZTogJ1ZhbG9yZSAyJyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHt9LFxuICAgICAgXSxcbiAgICAgIGFjdGlvbjoge1xuICAgICAgICB0ZXh0OiAnQWN0aW9uJyxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgcGF5bG9hZDogJ2ZpcnN0LWJ1dHRvbicsXG4gICAgICAgICAgLy8gaHJlZjogJy9leGFtcGxlcycsXG4gICAgICAgICAgLy8gdGFyZ2V0OiAnX2JsYW5rJ1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgdmlkZW86IHtcbiAgICAgICAgICB1cmw6ICdodHRwOi8vd3d3LmdpdWxpb2FuZHJlaW5pLml0L2dhbGFzc2lhLWFyaW9zdG8vZ2FsYXNzaWEtYXJpb3N0by1ob21lLWNhcm91c2VsLm1wNCcsXG4gICAgICAgICAgcG9zdGVyOiAnaHR0cHM6Ly9wbGFjZWltZy5jb20vNjQwLzQ4MC9hcmNoL2dyYXlzY2FsZScsXG4gICAgICAgICAgaGVpZ2h0OiAzMzQsXG4gICAgICAgICAgd2lkdGg6IDY0MCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBjbGFzc2VzOiAnZXhhbXBsZS1jbGFzcycsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0N1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4nLFxuICAgICAgICB9LFxuICAgICAgICB7IHRpdGxlOiAnTG9yZW0gRG9uZWMgc2VkIG9kaW8gZHVpLicgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdNb3JiaSBsZW8gcmlzdXMsIHBvcnRhIGFjIGNvbnNlY3RldHVyIGFjLCB2ZXN0aWJ1bHVtIGF0IGVyb3MuIEN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbWV0YWRhdGE6IFtcbiAgICAgICAgICAgIHsga2V5OiAnTWV0YWRhdG8gMScsIHZhbHVlOiAnVmFsb3JlIDEnIH0sXG4gICAgICAgICAgICB7IGtleTogJ01ldGFkYXRvIDInLCB2YWx1ZTogJ1ZhbG9yZSAyJyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHt9LFxuICAgICAgXSxcbiAgICAgIGFjdGlvbjoge1xuICAgICAgICB0ZXh0OiAnQWN0aW9uJyxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgcGF5bG9hZDogJ3NlY29uZC1idXR0b24nLFxuICAgICAgICAgIC8vIGhyZWY6ICcvZXhhbXBsZXMnLFxuICAgICAgICAgIC8vIHRhcmdldDogJ19ibGFuaydcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgIHZpZGVvOiB7XG4gICAgICAgICAgdXJsOiAnaHR0cDovL3d3dy5naXVsaW9hbmRyZWluaS5pdC9nYWxhc3NpYS1hcmlvc3RvL2dhbGFzc2lhLWFyaW9zdG8taG9tZS1jYXJvdXNlbC5tcDQnLFxuICAgICAgICAgIHBvc3RlcjogJ2h0dHBzOi8vcGxhY2VpbWcuY29tLzY0MC80ODAvYXJjaC9ncmF5c2NhbGUnLFxuICAgICAgICAgIGhlaWdodDogMzM0LFxuICAgICAgICAgIHdpZHRoOiA2NDAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0aXRsZTogJ0xhIHJlZ2luYSBkZWxsYSBub3R0ZScgfSxcbiAgICAgICAgeyB0ZXh0OiAnSWwgZmxhdXRvIG1hZ2ljbycgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1ldGFkYXRhOiBbXG4gICAgICAgICAgICB7IGtleTogJ1JlZ2lhIGRpICcsIHZhbHVlOiAnUm9iZXJ0byBkaSBTaW1vbmUnIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiAnMTk1NScgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7fSxcbiAgICAgIF0sXG4gICAgICBhY3Rpb246IHtcbiAgICAgICAgdGV4dDogJ0lMIENPU1RVTUUgPicsXG4gICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgIHBheWxvYWQ6ICd0aGlyZC1idXR0b24nLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL3BsYWNlaW1nLmNvbS84MDAvNDAwL25hdHVyZS9ncmF5c2NhbGUnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIlxcXCJMYSB2ZW5kZXR0YSBkZWxsJ2luZmVybm8gcmlib2xsZSBuZWwgbWlvIGN1b3JlLCBNb3J0ZSBlIGRpc3BlcmF6aW9uZSBtJ2luZmlhbW1hbiB0dXR0J2ludG9ybm8hXFxcIlwiLFxuICAgICAgICB9LFxuICAgICAgICB7IHRpdGxlOiAnTGEgcmVnaW5hIGRlbGxhIG5vdHRlJyB9LFxuICAgICAgICB7IHRleHQ6ICdJbCBmbGF1dG8gbWFnaWNvJyB9LFxuICAgICAgICB7XG4gICAgICAgICAgbWV0YWRhdGE6IFtcbiAgICAgICAgICAgIHsga2V5OiAnUmVnaWEgZGkgJywgdmFsdWU6ICdSb2JlcnRvIGRpIFNpbW9uZScgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6ICcxOTU1JyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHt9LFxuICAgICAgXSxcbiAgICAgIGFjdGlvbjoge1xuICAgICAgICB0ZXh0OiAnSUwgQ09TVFVNRSA+JyxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgcGF5bG9hZDogJ2ZvdXJ0aC1idXR0b24nLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL3BsYWNlaW1nLmNvbS84MDAvNDAwL25hdHVyZS9ncmF5c2NhbGUnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTpcbiAgICAgICAgICAgICdVTkEgQ09MTEVaSU9ORSBVTklDQS4gT0xUUkUgMzBNSUxBIENPU1RVTUkgQ1JFQVRJIEFEIEFSVEUgREFJIE1BRVNUUkkgRklPUkVOVElOSSBQRVIgTEUgU0NFTkUgUElVIFBSRVNUSUdJT1NFJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgIGNvbG9yOiAndG9tYXRvJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbn07XG4iXX0=