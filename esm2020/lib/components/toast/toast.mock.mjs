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
        }, {
            classes: 'is-info',
            icon: 'n7-icon-bell',
            title: 'Toast & Icon',
            text: 'Questo messaggio contiene un\'icona di accompagnamento, è di tipo is-info ed ha un tempo di 15 secondi',
        }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QubW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2R2LWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy90b2FzdC90b2FzdC5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBYztJQUNuQyxNQUFNLEVBQUUsQ0FBQztZQUNQLE9BQU8sRUFBRSxZQUFZO1lBQ3JCLEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLHVHQUF1RztZQUM3RyxTQUFTLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCLE9BQU8sRUFBRSxTQUFTO2FBQ25CO1NBQ0YsRUFBRTtZQUNELE9BQU8sRUFBRSxZQUFZO1lBQ3JCLEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLHVHQUF1RztTQUM5RyxFQUFFO1lBQ0QsT0FBTyxFQUFFLFlBQVk7WUFDckIsS0FBSyxFQUFFLHFCQUFxQjtZQUM1QixTQUFTLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCLE9BQU8sRUFBRSxTQUFTO2FBQ25CO1NBQ0YsRUFBRTtZQUNELE9BQU8sRUFBRSxVQUFVO1lBQ25CLElBQUksRUFBRSw2R0FBNkc7WUFDbkgsT0FBTyxFQUFFLENBQUM7b0JBQ1IsSUFBSSxFQUFFLFdBQVc7b0JBQ2pCLE9BQU8sRUFBRSxXQUFXO29CQUNwQixPQUFPLEVBQUUsY0FBYztpQkFDeEIsQ0FBQztTQUNILEVBQUU7WUFDRCxPQUFPLEVBQUUsWUFBWTtZQUNyQixJQUFJLEVBQUUsOEVBQThFO1lBQ3BGLE9BQU8sRUFBRSxDQUFDO29CQUNSLElBQUksRUFBRSxJQUFJO29CQUNWLE9BQU8sRUFBRSxJQUFJO2lCQUNkLEVBQUU7b0JBQ0QsSUFBSSxFQUFFLElBQUk7b0JBQ1YsT0FBTyxFQUFFLElBQUk7b0JBQ2IsT0FBTyxFQUFFLFlBQVk7aUJBQ3RCLENBQUM7U0FDSCxFQUFFO1lBQ0QsT0FBTyxFQUFFLFlBQVk7WUFDckIsS0FBSyxFQUFFLE9BQU87WUFDZCxJQUFJLEVBQUUsdUdBQXVHO1NBQzlHLEVBQUU7WUFDRCxPQUFPLEVBQUUsU0FBUztZQUNsQixJQUFJLEVBQUUsY0FBYztZQUNwQixLQUFLLEVBQUUsY0FBYztZQUNyQixJQUFJLEVBQUUsd0dBQXdHO1NBQy9HLENBQUM7Q0FDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG9hc3REYXRhIH0gZnJvbSAnLi90b2FzdCc7XG5cbmV4cG9ydCBjb25zdCBUT0FTVF9NT0NLOiBUb2FzdERhdGEgPSB7XG4gIHRvYXN0czogW3sgLy8gYXJyYXkgb2YgdG9hc3QgYm94ZXNcbiAgICBjbGFzc2VzOiAnaXMtd2FybmluZycsXG4gICAgdGl0bGU6ICdUaXRsZScsXG4gICAgdGV4dDogJ1F1ZXN0byBtZXNzYWdnaW8gaGEgc29sdGFudG8gdW4gdGl0b2xvIGUgZGVsIHRlc3RvLCDDqCBkaSB0aXBvIGlzLXdhcm5pbmcgZWQgaGEgdW4gdGVtcG8gZGkgMTUgc2Vjb25kaScsXG4gICAgY2xvc2VJY29uOiB7XG4gICAgICBpY29uOiAnbjctaWNvbi1jbG9zZScsXG4gICAgICBwYXlsb2FkOiAnY2xvc2luZydcbiAgICB9XG4gIH0sIHtcbiAgICBjbGFzc2VzOiAnaXMtd2FybmluZycsXG4gICAgdGl0bGU6ICdUaXRsZScsXG4gICAgdGV4dDogJ1F1ZXN0byBtZXNzYWdnaW8gaGEgc29sdGFudG8gdW4gdGl0b2xvIGUgZGVsIHRlc3RvLCDDqCBkaSB0aXBvIGlzLXdhcm5pbmcgZWQgaGEgdW4gdGVtcG8gZGkgMTUgc2Vjb25kaScsXG4gIH0sIHtcbiAgICBjbGFzc2VzOiAnaXMtc3VjY2VzcycsXG4gICAgdGl0bGU6ICdUaXRvbG8gZSBjbG9zZS1pY29uJyxcbiAgICBjbG9zZUljb246IHtcbiAgICAgIGljb246ICduNy1pY29uLWNsb3NlJyxcbiAgICAgIHBheWxvYWQ6ICdjbG9zaW5nJ1xuICAgIH1cbiAgfSwge1xuICAgIGNsYXNzZXM6ICdpcy1lcnJvcicsXG4gICAgdGV4dDogJ1F1ZXN0byDDqCB1biBtZXNzYWdnaW8gZGkgdGlwbyBpcy1lcnJvciBjb24gdW4gcHVsc2FudGUgY2hlIGNoaWVkZSBhbGxcXCd1dGVudGUgbGEgY29uZmVybWEgZGkgcHJlc2EgdmlzaW9uZS4nLFxuICAgIGFjdGlvbnM6IFt7XG4gICAgICB0ZXh0OiAnSE8gQ0FQSVRPJyxcbiAgICAgIHBheWxvYWQ6ICdobyBjYXBpdG8nLFxuICAgICAgY2xhc3NlczogJ243LWJ0bi1saWdodCdcbiAgICB9XVxuICB9LCB7XG4gICAgY2xhc3NlczogJ2lzLXdhcm5pbmcnLFxuICAgIHRleHQ6ICdRdWVzdG8gbWVzc2FnZ2lvIG5vbiBoYSB0aXRvbG8sIMOoIGRpIHRpcG8gaXMtd2FybmluZyBlIHNlZ3Vvbm8gZHVlIHB1bHNhbnRpLicsXG4gICAgYWN0aW9uczogW3tcbiAgICAgIHRleHQ6ICdOTycsXG4gICAgICBwYXlsb2FkOiAnTk8nXG4gICAgfSwge1xuICAgICAgdGV4dDogJ1NJJyxcbiAgICAgIHBheWxvYWQ6ICdTSScsXG4gICAgICBjbGFzc2VzOiAnbjctYnRuLWN0YSdcbiAgICB9XVxuICB9LCB7XG4gICAgY2xhc3NlczogJ2lzLXdhcm5pbmcnLFxuICAgIHRpdGxlOiAnVGl0bGUnLFxuICAgIHRleHQ6ICdRdWVzdG8gbWVzc2FnZ2lvIGhhIHNvbHRhbnRvIHVuIHRpdG9sbyBlIGRlbCB0ZXN0bywgw6ggZGkgdGlwbyBpcy13YXJuaW5nIGVkIGhhIHVuIHRlbXBvIGRpIDE1IHNlY29uZGknLFxuICB9LCB7XG4gICAgY2xhc3NlczogJ2lzLWluZm8nLFxuICAgIGljb246ICduNy1pY29uLWJlbGwnLFxuICAgIHRpdGxlOiAnVG9hc3QgJiBJY29uJyxcbiAgICB0ZXh0OiAnUXVlc3RvIG1lc3NhZ2dpbyBjb250aWVuZSB1blxcJ2ljb25hIGRpIGFjY29tcGFnbmFtZW50bywgw6ggZGkgdGlwbyBpcy1pbmZvIGVkIGhhIHVuIHRlbXBvIGRpIDE1IHNlY29uZGknLFxuICB9XVxufTtcbiJdfQ==