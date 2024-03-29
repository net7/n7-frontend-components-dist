export const TOAST_MOCK = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QubW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2R2LWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy90b2FzdC90b2FzdC5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBYztJQUNuQyxNQUFNLEVBQUUsQ0FBQztZQUNQLE9BQU8sRUFBRSxZQUFZO1lBQ3JCLEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLHVHQUF1RztZQUM3RyxTQUFTLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCLE9BQU8sRUFBRSxTQUFTO2FBQ25CO1NBQ0YsRUFBRTtZQUNELE9BQU8sRUFBRSxZQUFZO1lBQ3JCLEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLHVHQUF1RztTQUM5RyxFQUFFO1lBQ0QsT0FBTyxFQUFFLFlBQVk7WUFDckIsS0FBSyxFQUFFLHFCQUFxQjtZQUM1QixTQUFTLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCLE9BQU8sRUFBRSxTQUFTO2FBQ25CO1NBQ0YsRUFBRTtZQUNELE9BQU8sRUFBRSxVQUFVO1lBQ25CLElBQUksRUFBRSw2R0FBNkc7WUFDbkgsT0FBTyxFQUFFLENBQUM7b0JBQ1IsSUFBSSxFQUFFLFdBQVc7b0JBQ2pCLE9BQU8sRUFBRSxXQUFXO29CQUNwQixPQUFPLEVBQUUsY0FBYztpQkFDeEIsQ0FBQztTQUNILEVBQUU7WUFDRCxPQUFPLEVBQUUsWUFBWTtZQUNyQixJQUFJLEVBQUUsOEVBQThFO1lBQ3BGLE9BQU8sRUFBRSxDQUFDO29CQUNSLElBQUksRUFBRSxJQUFJO29CQUNWLE9BQU8sRUFBRSxJQUFJO2lCQUNkLEVBQUU7b0JBQ0QsSUFBSSxFQUFFLElBQUk7b0JBQ1YsT0FBTyxFQUFFLElBQUk7b0JBQ2IsT0FBTyxFQUFFLFlBQVk7aUJBQ3RCLENBQUM7U0FDSCxFQUFFO1lBQ0QsT0FBTyxFQUFFLFlBQVk7WUFDckIsS0FBSyxFQUFFLE9BQU87WUFDZCxJQUFJLEVBQUUsdUdBQXVHO1NBQzlHO0tBQ0E7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG9hc3REYXRhIH0gZnJvbSAnLi90b2FzdCc7XHJcblxyXG5leHBvcnQgY29uc3QgVE9BU1RfTU9DSzogVG9hc3REYXRhID0ge1xyXG4gIHRvYXN0czogW3sgLy8gYXJyYXkgb2YgdG9hc3QgYm94ZXNcclxuICAgIGNsYXNzZXM6ICdpcy13YXJuaW5nJyxcclxuICAgIHRpdGxlOiAnVGl0bGUnLFxyXG4gICAgdGV4dDogJ1F1ZXN0byBtZXNzYWdnaW8gaGEgc29sdGFudG8gdW4gdGl0b2xvIGUgZGVsIHRlc3RvLCDDqCBkaSB0aXBvIGlzLXdhcm5pbmcgZWQgaGEgdW4gdGVtcG8gZGkgMTUgc2Vjb25kaScsXHJcbiAgICBjbG9zZUljb246IHtcclxuICAgICAgaWNvbjogJ243LWljb24tY2xvc2UnLFxyXG4gICAgICBwYXlsb2FkOiAnY2xvc2luZydcclxuICAgIH1cclxuICB9LCB7IC8vIGFycmF5IG9mIHRvYXN0IGJveGVzXHJcbiAgICBjbGFzc2VzOiAnaXMtd2FybmluZycsXHJcbiAgICB0aXRsZTogJ1RpdGxlJyxcclxuICAgIHRleHQ6ICdRdWVzdG8gbWVzc2FnZ2lvIGhhIHNvbHRhbnRvIHVuIHRpdG9sbyBlIGRlbCB0ZXN0bywgw6ggZGkgdGlwbyBpcy13YXJuaW5nIGVkIGhhIHVuIHRlbXBvIGRpIDE1IHNlY29uZGknLFxyXG4gIH0sIHtcclxuICAgIGNsYXNzZXM6ICdpcy1zdWNjZXNzJyxcclxuICAgIHRpdGxlOiAnVGl0b2xvIGUgY2xvc2UtaWNvbicsXHJcbiAgICBjbG9zZUljb246IHtcclxuICAgICAgaWNvbjogJ243LWljb24tY2xvc2UnLFxyXG4gICAgICBwYXlsb2FkOiAnY2xvc2luZydcclxuICAgIH1cclxuICB9LCB7XHJcbiAgICBjbGFzc2VzOiAnaXMtZXJyb3InLFxyXG4gICAgdGV4dDogJ1F1ZXN0byDDqCB1biBtZXNzYWdnaW8gZGkgdGlwbyBpcy1lcnJvciBjb24gdW4gcHVsc2FudGUgY2hlIGNoaWVkZSBhbGxcXCd1dGVudGUgbGEgY29uZmVybWEgZGkgcHJlc2EgdmlzaW9uZS4nLFxyXG4gICAgYWN0aW9uczogW3tcclxuICAgICAgdGV4dDogJ0hPIENBUElUTycsXHJcbiAgICAgIHBheWxvYWQ6ICdobyBjYXBpdG8nLFxyXG4gICAgICBjbGFzc2VzOiAnbjctYnRuLWxpZ2h0J1xyXG4gICAgfV1cclxuICB9LCB7XHJcbiAgICBjbGFzc2VzOiAnaXMtd2FybmluZycsXHJcbiAgICB0ZXh0OiAnUXVlc3RvIG1lc3NhZ2dpbyBub24gaGEgdGl0b2xvLCDDqCBkaSB0aXBvIGlzLXdhcm5pbmcgZSBzZWd1b25vIGR1ZSBwdWxzYW50aS4nLFxyXG4gICAgYWN0aW9uczogW3tcclxuICAgICAgdGV4dDogJ05PJyxcclxuICAgICAgcGF5bG9hZDogJ05PJ1xyXG4gICAgfSwge1xyXG4gICAgICB0ZXh0OiAnU0knLFxyXG4gICAgICBwYXlsb2FkOiAnU0knLFxyXG4gICAgICBjbGFzc2VzOiAnbjctYnRuLWN0YSdcclxuICAgIH1dXHJcbiAgfSwgeyAvLyBhcnJheSBvZiB0b2FzdCBib3hlc1xyXG4gICAgY2xhc3NlczogJ2lzLXdhcm5pbmcnLFxyXG4gICAgdGl0bGU6ICdUaXRsZScsXHJcbiAgICB0ZXh0OiAnUXVlc3RvIG1lc3NhZ2dpbyBoYSBzb2x0YW50byB1biB0aXRvbG8gZSBkZWwgdGVzdG8sIMOoIGRpIHRpcG8gaXMtd2FybmluZyBlZCBoYSB1biB0ZW1wbyBkaSAxNSBzZWNvbmRpJyxcclxuICB9XHJcbiAgXVxyXG59O1xyXG4iXX0=