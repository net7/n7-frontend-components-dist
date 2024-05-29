export const TOAST_MOCK = {
    toasts: [
        {
            // array of toast boxes
            classes: 'is-warning',
            title: 'Title',
            text: 'Questo messaggio ha soltanto un titolo e del testo, è di tipo is-warning ed ha un tempo di 15 secondi',
            closeIcon: {
                icon: 'n7-icon-close',
                payload: 'closing',
            },
        },
        {
            classes: 'is-warning',
            title: 'Title',
            text: 'Questo messaggio ha soltanto un titolo e del testo, è di tipo is-warning ed ha un tempo di 15 secondi',
        },
        {
            classes: 'is-success',
            title: 'Titolo e close-icon',
            closeIcon: {
                icon: 'n7-icon-close',
                payload: 'closing',
            },
        },
        {
            classes: 'is-error',
            text: "Questo è un messaggio di tipo is-error con un pulsante che chiede all'utente la conferma di presa visione.",
            actions: [
                {
                    text: 'HO CAPITO',
                    payload: 'ho capito',
                    classes: 'n7-btn-light',
                },
            ],
        },
        {
            classes: 'is-warning',
            text: 'Questo messaggio non ha titolo, è di tipo is-warning e seguono due pulsanti.',
            actions: [
                {
                    text: 'NO',
                    payload: 'NO',
                },
                {
                    text: 'SI',
                    payload: 'SI',
                    classes: 'n7-btn-cta',
                },
            ],
        },
        {
            classes: 'is-warning',
            title: 'Title',
            text: 'Questo messaggio ha soltanto un titolo e del testo, è di tipo is-warning ed ha un tempo di 15 secondi',
        },
        {
            classes: 'is-info',
            icon: 'n7-icon-bell',
            title: 'Toast & Icon',
            text: "Questo messaggio contiene un'icona di accompagnamento, è di tipo is-info ed ha un tempo di 15 secondi",
        },
    ],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QubW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2R2LWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy90b2FzdC90b2FzdC5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBYztJQUNuQyxNQUFNLEVBQUU7UUFDTjtZQUNFLHVCQUF1QjtZQUN2QixPQUFPLEVBQUUsWUFBWTtZQUNyQixLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSx1R0FBdUc7WUFDN0csU0FBUyxFQUFFO2dCQUNULElBQUksRUFBRSxlQUFlO2dCQUNyQixPQUFPLEVBQUUsU0FBUzthQUNuQjtTQUNGO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsWUFBWTtZQUNyQixLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSx1R0FBdUc7U0FDOUc7UUFDRDtZQUNFLE9BQU8sRUFBRSxZQUFZO1lBQ3JCLEtBQUssRUFBRSxxQkFBcUI7WUFDNUIsU0FBUyxFQUFFO2dCQUNULElBQUksRUFBRSxlQUFlO2dCQUNyQixPQUFPLEVBQUUsU0FBUzthQUNuQjtTQUNGO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsVUFBVTtZQUNuQixJQUFJLEVBQUUsNEdBQTRHO1lBQ2xILE9BQU8sRUFBRTtnQkFDUDtvQkFDRSxJQUFJLEVBQUUsV0FBVztvQkFDakIsT0FBTyxFQUFFLFdBQVc7b0JBQ3BCLE9BQU8sRUFBRSxjQUFjO2lCQUN4QjthQUNGO1NBQ0Y7UUFDRDtZQUNFLE9BQU8sRUFBRSxZQUFZO1lBQ3JCLElBQUksRUFBRSw4RUFBOEU7WUFDcEYsT0FBTyxFQUFFO2dCQUNQO29CQUNFLElBQUksRUFBRSxJQUFJO29CQUNWLE9BQU8sRUFBRSxJQUFJO2lCQUNkO2dCQUNEO29CQUNFLElBQUksRUFBRSxJQUFJO29CQUNWLE9BQU8sRUFBRSxJQUFJO29CQUNiLE9BQU8sRUFBRSxZQUFZO2lCQUN0QjthQUNGO1NBQ0Y7UUFDRDtZQUNFLE9BQU8sRUFBRSxZQUFZO1lBQ3JCLEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLHVHQUF1RztTQUM5RztRQUNEO1lBQ0UsT0FBTyxFQUFFLFNBQVM7WUFDbEIsSUFBSSxFQUFFLGNBQWM7WUFDcEIsS0FBSyxFQUFFLGNBQWM7WUFDckIsSUFBSSxFQUFFLHVHQUF1RztTQUM5RztLQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRvYXN0RGF0YSB9IGZyb20gJy4vdG9hc3QnO1xuXG5leHBvcnQgY29uc3QgVE9BU1RfTU9DSzogVG9hc3REYXRhID0ge1xuICB0b2FzdHM6IFtcbiAgICB7XG4gICAgICAvLyBhcnJheSBvZiB0b2FzdCBib3hlc1xuICAgICAgY2xhc3NlczogJ2lzLXdhcm5pbmcnLFxuICAgICAgdGl0bGU6ICdUaXRsZScsXG4gICAgICB0ZXh0OiAnUXVlc3RvIG1lc3NhZ2dpbyBoYSBzb2x0YW50byB1biB0aXRvbG8gZSBkZWwgdGVzdG8sIMOoIGRpIHRpcG8gaXMtd2FybmluZyBlZCBoYSB1biB0ZW1wbyBkaSAxNSBzZWNvbmRpJyxcbiAgICAgIGNsb3NlSWNvbjoge1xuICAgICAgICBpY29uOiAnbjctaWNvbi1jbG9zZScsXG4gICAgICAgIHBheWxvYWQ6ICdjbG9zaW5nJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBjbGFzc2VzOiAnaXMtd2FybmluZycsXG4gICAgICB0aXRsZTogJ1RpdGxlJyxcbiAgICAgIHRleHQ6ICdRdWVzdG8gbWVzc2FnZ2lvIGhhIHNvbHRhbnRvIHVuIHRpdG9sbyBlIGRlbCB0ZXN0bywgw6ggZGkgdGlwbyBpcy13YXJuaW5nIGVkIGhhIHVuIHRlbXBvIGRpIDE1IHNlY29uZGknLFxuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3NlczogJ2lzLXN1Y2Nlc3MnLFxuICAgICAgdGl0bGU6ICdUaXRvbG8gZSBjbG9zZS1pY29uJyxcbiAgICAgIGNsb3NlSWNvbjoge1xuICAgICAgICBpY29uOiAnbjctaWNvbi1jbG9zZScsXG4gICAgICAgIHBheWxvYWQ6ICdjbG9zaW5nJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBjbGFzc2VzOiAnaXMtZXJyb3InLFxuICAgICAgdGV4dDogXCJRdWVzdG8gw6ggdW4gbWVzc2FnZ2lvIGRpIHRpcG8gaXMtZXJyb3IgY29uIHVuIHB1bHNhbnRlIGNoZSBjaGllZGUgYWxsJ3V0ZW50ZSBsYSBjb25mZXJtYSBkaSBwcmVzYSB2aXNpb25lLlwiLFxuICAgICAgYWN0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0hPIENBUElUTycsXG4gICAgICAgICAgcGF5bG9hZDogJ2hvIGNhcGl0bycsXG4gICAgICAgICAgY2xhc3NlczogJ243LWJ0bi1saWdodCcsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3NlczogJ2lzLXdhcm5pbmcnLFxuICAgICAgdGV4dDogJ1F1ZXN0byBtZXNzYWdnaW8gbm9uIGhhIHRpdG9sbywgw6ggZGkgdGlwbyBpcy13YXJuaW5nIGUgc2VndW9ubyBkdWUgcHVsc2FudGkuJyxcbiAgICAgIGFjdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdOTycsXG4gICAgICAgICAgcGF5bG9hZDogJ05PJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdTSScsXG4gICAgICAgICAgcGF5bG9hZDogJ1NJJyxcbiAgICAgICAgICBjbGFzc2VzOiAnbjctYnRuLWN0YScsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3NlczogJ2lzLXdhcm5pbmcnLFxuICAgICAgdGl0bGU6ICdUaXRsZScsXG4gICAgICB0ZXh0OiAnUXVlc3RvIG1lc3NhZ2dpbyBoYSBzb2x0YW50byB1biB0aXRvbG8gZSBkZWwgdGVzdG8sIMOoIGRpIHRpcG8gaXMtd2FybmluZyBlZCBoYSB1biB0ZW1wbyBkaSAxNSBzZWNvbmRpJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNsYXNzZXM6ICdpcy1pbmZvJyxcbiAgICAgIGljb246ICduNy1pY29uLWJlbGwnLFxuICAgICAgdGl0bGU6ICdUb2FzdCAmIEljb24nLFxuICAgICAgdGV4dDogXCJRdWVzdG8gbWVzc2FnZ2lvIGNvbnRpZW5lIHVuJ2ljb25hIGRpIGFjY29tcGFnbmFtZW50bywgw6ggZGkgdGlwbyBpcy1pbmZvIGVkIGhhIHVuIHRlbXBvIGRpIDE1IHNlY29uZGlcIixcbiAgICB9LFxuICBdLFxufTtcbiJdfQ==