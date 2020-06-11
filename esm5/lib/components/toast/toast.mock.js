export var TOAST_MOCK = {
    toasts: [{
            classes: 'is-warning',
            title: 'Title',
            text: 'Questo messaggio ha soltanto un titolo e del testo, è di tipo is-warning ed ha un tempo di 15 secondi',
            closeIcon: {
                icon: 'n7-icon-close',
                payload: 'closing'
            }
        }, {
            classes: 'is-warning',
            title: 'Title',
            text: 'Questo messaggio ha soltanto un titolo e del testo, è di tipo is-warning ed ha un tempo di 15 secondi',
        }, {
            classes: 'is-success',
            title: 'Titolo e close-icon',
            closeIcon: {
                icon: 'n7-icon-close',
                payload: 'closing'
            }
        }, {
            classes: 'is-error',
            text: 'Questo è un messaggio di tipo is-error con un pulsante che chiede all\'utente la conferma di presa visione.',
            actions: [{
                    text: 'HO CAPITO',
                    payload: 'ho capito',
                    classes: 'n7-btn-light'
                }]
        }, {
            classes: 'is-warning',
            text: 'Questo messaggio non ha titolo, è di tipo is-warning e seguono due pulsanti.',
            actions: [{
                    text: 'NO',
                    payload: 'NO'
                }, {
                    text: 'SI',
                    payload: 'SI',
                    classes: 'n7-btn-cta'
                }]
        }, {
            classes: 'is-warning',
            title: 'Title',
            text: 'Questo messaggio ha soltanto un titolo e del testo, è di tipo is-warning ed ha un tempo di 15 secondi',
        }
    ]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QubW9jay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdG9hc3QvdG9hc3QubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsSUFBTSxVQUFVLEdBQWM7SUFDbkMsTUFBTSxFQUFFLENBQUM7WUFDUCxPQUFPLEVBQUUsWUFBWTtZQUNyQixLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSx1R0FBdUc7WUFDN0csU0FBUyxFQUFFO2dCQUNULElBQUksRUFBRSxlQUFlO2dCQUNyQixPQUFPLEVBQUUsU0FBUzthQUNuQjtTQUNGLEVBQUU7WUFDRCxPQUFPLEVBQUUsWUFBWTtZQUNyQixLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSx1R0FBdUc7U0FDOUcsRUFBRTtZQUNELE9BQU8sRUFBRSxZQUFZO1lBQ3JCLEtBQUssRUFBRSxxQkFBcUI7WUFDNUIsU0FBUyxFQUFFO2dCQUNULElBQUksRUFBRSxlQUFlO2dCQUNyQixPQUFPLEVBQUUsU0FBUzthQUNuQjtTQUNGLEVBQUU7WUFDRCxPQUFPLEVBQUUsVUFBVTtZQUNuQixJQUFJLEVBQUUsNkdBQTZHO1lBQ25ILE9BQU8sRUFBRSxDQUFDO29CQUNSLElBQUksRUFBRSxXQUFXO29CQUNqQixPQUFPLEVBQUUsV0FBVztvQkFDcEIsT0FBTyxFQUFFLGNBQWM7aUJBQ3hCLENBQUM7U0FDSCxFQUFFO1lBQ0QsT0FBTyxFQUFFLFlBQVk7WUFDckIsSUFBSSxFQUFFLDhFQUE4RTtZQUNwRixPQUFPLEVBQUUsQ0FBQztvQkFDUixJQUFJLEVBQUUsSUFBSTtvQkFDVixPQUFPLEVBQUUsSUFBSTtpQkFDZCxFQUFFO29CQUNELElBQUksRUFBRSxJQUFJO29CQUNWLE9BQU8sRUFBRSxJQUFJO29CQUNiLE9BQU8sRUFBRSxZQUFZO2lCQUN0QixDQUFDO1NBQ0gsRUFBRTtZQUNELE9BQU8sRUFBRSxZQUFZO1lBQ3JCLEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLHVHQUF1RztTQUM5RztLQUNBO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRvYXN0RGF0YSB9IGZyb20gJy4vdG9hc3QnO1xuXG5leHBvcnQgY29uc3QgVE9BU1RfTU9DSzogVG9hc3REYXRhID0ge1xuICB0b2FzdHM6IFt7IC8vIGFycmF5IG9mIHRvYXN0IGJveGVzXG4gICAgY2xhc3NlczogJ2lzLXdhcm5pbmcnLFxuICAgIHRpdGxlOiAnVGl0bGUnLFxuICAgIHRleHQ6ICdRdWVzdG8gbWVzc2FnZ2lvIGhhIHNvbHRhbnRvIHVuIHRpdG9sbyBlIGRlbCB0ZXN0bywgw6ggZGkgdGlwbyBpcy13YXJuaW5nIGVkIGhhIHVuIHRlbXBvIGRpIDE1IHNlY29uZGknLFxuICAgIGNsb3NlSWNvbjoge1xuICAgICAgaWNvbjogJ243LWljb24tY2xvc2UnLFxuICAgICAgcGF5bG9hZDogJ2Nsb3NpbmcnXG4gICAgfVxuICB9LCB7IC8vIGFycmF5IG9mIHRvYXN0IGJveGVzXG4gICAgY2xhc3NlczogJ2lzLXdhcm5pbmcnLFxuICAgIHRpdGxlOiAnVGl0bGUnLFxuICAgIHRleHQ6ICdRdWVzdG8gbWVzc2FnZ2lvIGhhIHNvbHRhbnRvIHVuIHRpdG9sbyBlIGRlbCB0ZXN0bywgw6ggZGkgdGlwbyBpcy13YXJuaW5nIGVkIGhhIHVuIHRlbXBvIGRpIDE1IHNlY29uZGknLFxuICB9LCB7XG4gICAgY2xhc3NlczogJ2lzLXN1Y2Nlc3MnLFxuICAgIHRpdGxlOiAnVGl0b2xvIGUgY2xvc2UtaWNvbicsXG4gICAgY2xvc2VJY29uOiB7XG4gICAgICBpY29uOiAnbjctaWNvbi1jbG9zZScsXG4gICAgICBwYXlsb2FkOiAnY2xvc2luZydcbiAgICB9XG4gIH0sIHtcbiAgICBjbGFzc2VzOiAnaXMtZXJyb3InLFxuICAgIHRleHQ6ICdRdWVzdG8gw6ggdW4gbWVzc2FnZ2lvIGRpIHRpcG8gaXMtZXJyb3IgY29uIHVuIHB1bHNhbnRlIGNoZSBjaGllZGUgYWxsXFwndXRlbnRlIGxhIGNvbmZlcm1hIGRpIHByZXNhIHZpc2lvbmUuJyxcbiAgICBhY3Rpb25zOiBbe1xuICAgICAgdGV4dDogJ0hPIENBUElUTycsXG4gICAgICBwYXlsb2FkOiAnaG8gY2FwaXRvJyxcbiAgICAgIGNsYXNzZXM6ICduNy1idG4tbGlnaHQnXG4gICAgfV1cbiAgfSwge1xuICAgIGNsYXNzZXM6ICdpcy13YXJuaW5nJyxcbiAgICB0ZXh0OiAnUXVlc3RvIG1lc3NhZ2dpbyBub24gaGEgdGl0b2xvLCDDqCBkaSB0aXBvIGlzLXdhcm5pbmcgZSBzZWd1b25vIGR1ZSBwdWxzYW50aS4nLFxuICAgIGFjdGlvbnM6IFt7XG4gICAgICB0ZXh0OiAnTk8nLFxuICAgICAgcGF5bG9hZDogJ05PJ1xuICAgIH0sIHtcbiAgICAgIHRleHQ6ICdTSScsXG4gICAgICBwYXlsb2FkOiAnU0knLFxuICAgICAgY2xhc3NlczogJ243LWJ0bi1jdGEnXG4gICAgfV1cbiAgfSwgeyAvLyBhcnJheSBvZiB0b2FzdCBib3hlc1xuICAgIGNsYXNzZXM6ICdpcy13YXJuaW5nJyxcbiAgICB0aXRsZTogJ1RpdGxlJyxcbiAgICB0ZXh0OiAnUXVlc3RvIG1lc3NhZ2dpbyBoYSBzb2x0YW50byB1biB0aXRvbG8gZSBkZWwgdGVzdG8sIMOoIGRpIHRpcG8gaXMtd2FybmluZyBlZCBoYSB1biB0ZW1wbyBkaSAxNSBzZWNvbmRpJyxcbiAgfVxuICBdXG59O1xuIl19