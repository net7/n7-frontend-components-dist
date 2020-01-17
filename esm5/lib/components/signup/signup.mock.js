/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var SIGNUP_MOCK = {
    login: {
        email: {
            classes: 'email-extra-class',
            id: 'login-email',
            label: 'Email',
            inputType: 'email',
            payload: 'login-email'
        },
        password: {
            id: 'login-pwd',
            label: 'Password',
            inputType: 'password',
            show: {
                icon: 'far fa-eye',
                label: 'Mostra password',
                payload: 'login-show-pwd',
            },
            payload: 'login-pwd'
        },
        /* forgotPassword: {
              title: 'vai a recupero password',
              label: 'Password dimenticata?',
              payload: 'forgot-pwd',
            }, */
        submit: {
            label: 'Entra',
            payload: 'login-submit',
        },
    },
    signup: {
        name: {
            id: 'signup-name',
            label: 'Nome e cognome',
            inputType: 'text',
            error: 'Il campo Nome e Cognome è obbligatorio!',
            payload: 'signup-name'
        },
        email: {
            id: 'signup-email',
            label: 'Email',
            inputType: 'email',
            payload: 'signup-email'
        },
        password: {
            id: 'signup-pwd',
            label: 'Password',
            inputType: 'password',
            hint: 'La password deve avere fra i 6 e i 10 caratteri e contenere almeno una lettera maiuscola',
            show: {
                icon: 'far fa-eye',
                label: 'Mostra password',
                payload: 'signup-show-pwd',
            },
            payload: 'signup-pwd',
            error: 'Attenzione le password sono diverse',
        },
        rePassword: {
            id: 'signup-repwd',
            label: 'Ripeti Password',
            inputType: 'password',
            payload: 'signup-repwd',
            error: 'Attenzione le password sono diverse',
        },
        submit: {
            label: 'Entra',
            payload: 'signup-submit',
            error: 'Errore di invio dei dati al server',
        },
        footer: {
            label: 'Hai già un account?',
            action: {
                label: 'Entra',
                payload: 'go-login'
            }
        }
    },
    forgotPassword: {
        description: 'Inserisci l\'indirizzo email lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae lacus eleifend, vestibulum neque nec, dictum eros. Nunc vel risus leo',
        email: {
            id: 'forgot-password-email',
            label: 'Email',
            inputType: 'email',
            payload: 'forgotPassword-email'
        },
        submit: {
            label: 'Reset password',
            payload: 'forgotPassword-submit',
        },
        footer: {
            label: 'Entra nella piattaforma',
            action: {
                label: 'Entra',
                payload: 'go-app'
            }
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLm1vY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NpZ251cC9zaWdudXAubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE1BQU0sS0FBTyxXQUFXLEdBQWdCO0lBQ3RDLEtBQUssRUFBRTtRQUNMLEtBQUssRUFBRTtZQUNMLE9BQU8sRUFBRSxtQkFBbUI7WUFDNUIsRUFBRSxFQUFFLGFBQWE7WUFDakIsS0FBSyxFQUFFLE9BQU87WUFDZCxTQUFTLEVBQUUsT0FBTztZQUNsQixPQUFPLEVBQUUsYUFBYTtTQUN2QjtRQUNELFFBQVEsRUFBRTtZQUNSLEVBQUUsRUFBRSxXQUFXO1lBQ2YsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLFVBQVU7WUFDckIsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxZQUFZO2dCQUNsQixLQUFLLEVBQUUsaUJBQWlCO2dCQUN4QixPQUFPLEVBQUUsZ0JBQWdCO2FBQzFCO1lBQ0QsT0FBTyxFQUFFLFdBQVc7U0FDckI7Ozs7OztRQU1ELE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxPQUFPO1lBQ2QsT0FBTyxFQUFFLGNBQWM7U0FDeEI7S0FRRjtJQUNELE1BQU0sRUFBRTtRQUNOLElBQUksRUFBRTtZQUNKLEVBQUUsRUFBRSxhQUFhO1lBQ2pCLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsU0FBUyxFQUFFLE1BQU07WUFDakIsS0FBSyxFQUFFLHlDQUF5QztZQUNoRCxPQUFPLEVBQUUsYUFBYTtTQUN2QjtRQUNELEtBQUssRUFBRTtZQUNMLEVBQUUsRUFBRSxjQUFjO1lBQ2xCLEtBQUssRUFBRSxPQUFPO1lBQ2QsU0FBUyxFQUFFLE9BQU87WUFDbEIsT0FBTyxFQUFFLGNBQWM7U0FDeEI7UUFDRCxRQUFRLEVBQUU7WUFDUixFQUFFLEVBQUUsWUFBWTtZQUNoQixLQUFLLEVBQUUsVUFBVTtZQUNqQixTQUFTLEVBQUUsVUFBVTtZQUNyQixJQUFJLEVBQUUsMEZBQTBGO1lBQ2hHLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsWUFBWTtnQkFDbEIsS0FBSyxFQUFFLGlCQUFpQjtnQkFDeEIsT0FBTyxFQUFFLGlCQUFpQjthQUMzQjtZQUNELE9BQU8sRUFBRSxZQUFZO1lBQ3JCLEtBQUssRUFBRSxxQ0FBcUM7U0FDN0M7UUFDRCxVQUFVLEVBQUU7WUFDVixFQUFFLEVBQUUsY0FBYztZQUNsQixLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCLFNBQVMsRUFBRSxVQUFVO1lBQ3JCLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLEtBQUssRUFBRSxxQ0FBcUM7U0FDN0M7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsT0FBTztZQUNkLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLEtBQUssRUFBRSxvQ0FBb0M7U0FDNUM7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUscUJBQXFCO1lBQzVCLE1BQU0sRUFBRTtnQkFDTixLQUFLLEVBQUUsT0FBTztnQkFDZCxPQUFPLEVBQUUsVUFBVTthQUNwQjtTQUNGO0tBQ0Y7SUFDRCxjQUFjLEVBQUU7UUFDZCxXQUFXLEVBQUUsMktBQTJLO1FBQ3hMLEtBQUssRUFBRTtZQUNMLEVBQUUsRUFBRSx1QkFBdUI7WUFDM0IsS0FBSyxFQUFFLE9BQU87WUFDZCxTQUFTLEVBQUUsT0FBTztZQUNsQixPQUFPLEVBQUUsc0JBQXNCO1NBQ2hDO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLGdCQUFnQjtZQUN2QixPQUFPLEVBQUUsdUJBQXVCO1NBQ2pDO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLHlCQUF5QjtZQUNoQyxNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLE9BQU87Z0JBQ2QsT0FBTyxFQUFFLFFBQVE7YUFDbEI7U0FDRjtLQUNGO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU2lnbnVwRGF0YSB9IGZyb20gJy4vc2lnbnVwJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOVVBfTU9DSzogSVNpZ251cERhdGEgPSB7XHJcbiAgbG9naW46IHtcclxuICAgIGVtYWlsOiB7XHJcbiAgICAgIGNsYXNzZXM6ICdlbWFpbC1leHRyYS1jbGFzcycsXHJcbiAgICAgIGlkOiAnbG9naW4tZW1haWwnLFxyXG4gICAgICBsYWJlbDogJ0VtYWlsJyxcclxuICAgICAgaW5wdXRUeXBlOiAnZW1haWwnLFxyXG4gICAgICBwYXlsb2FkOiAnbG9naW4tZW1haWwnXHJcbiAgICB9LFxyXG4gICAgcGFzc3dvcmQ6IHtcclxuICAgICAgaWQ6ICdsb2dpbi1wd2QnLFxyXG4gICAgICBsYWJlbDogJ1Bhc3N3b3JkJyxcclxuICAgICAgaW5wdXRUeXBlOiAncGFzc3dvcmQnLFxyXG4gICAgICBzaG93OiB7XHJcbiAgICAgICAgaWNvbjogJ2ZhciBmYS1leWUnLFxyXG4gICAgICAgIGxhYmVsOiAnTW9zdHJhIHBhc3N3b3JkJyxcclxuICAgICAgICBwYXlsb2FkOiAnbG9naW4tc2hvdy1wd2QnLFxyXG4gICAgICB9LFxyXG4gICAgICBwYXlsb2FkOiAnbG9naW4tcHdkJ1xyXG4gICAgfSxcclxuICAgIC8qIGZvcmdvdFBhc3N3b3JkOiB7XHJcbiAgICAgIHRpdGxlOiAndmFpIGEgcmVjdXBlcm8gcGFzc3dvcmQnLFxyXG4gICAgICBsYWJlbDogJ1Bhc3N3b3JkIGRpbWVudGljYXRhPycsXHJcbiAgICAgIHBheWxvYWQ6ICdmb3Jnb3QtcHdkJyxcclxuICAgIH0sICovXHJcbiAgICBzdWJtaXQ6IHtcclxuICAgICAgbGFiZWw6ICdFbnRyYScsXHJcbiAgICAgIHBheWxvYWQ6ICdsb2dpbi1zdWJtaXQnLFxyXG4gICAgfSxcclxuICAgIC8qIGZvb3Rlcjoge1xyXG4gICAgICBsYWJlbDogJ05vbiBoYWkgdW4gYWNjb3VudD8nLFxyXG4gICAgICBhY3Rpb246IHtcclxuICAgICAgICBsYWJlbDogJ1JlZ2lzdHJhdGknLFxyXG4gICAgICAgIHBheWxvYWQ6ICdnby1zaWdudXAnXHJcbiAgICAgIH1cclxuICAgIH0gKi9cclxuICB9LFxyXG4gIHNpZ251cDoge1xyXG4gICAgbmFtZToge1xyXG4gICAgICBpZDogJ3NpZ251cC1uYW1lJyxcclxuICAgICAgbGFiZWw6ICdOb21lIGUgY29nbm9tZScsXHJcbiAgICAgIGlucHV0VHlwZTogJ3RleHQnLFxyXG4gICAgICBlcnJvcjogJ0lsIGNhbXBvIE5vbWUgZSBDb2dub21lIMOoIG9iYmxpZ2F0b3JpbyEnLFxyXG4gICAgICBwYXlsb2FkOiAnc2lnbnVwLW5hbWUnXHJcbiAgICB9LFxyXG4gICAgZW1haWw6IHtcclxuICAgICAgaWQ6ICdzaWdudXAtZW1haWwnLFxyXG4gICAgICBsYWJlbDogJ0VtYWlsJyxcclxuICAgICAgaW5wdXRUeXBlOiAnZW1haWwnLFxyXG4gICAgICBwYXlsb2FkOiAnc2lnbnVwLWVtYWlsJ1xyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkOiB7XHJcbiAgICAgIGlkOiAnc2lnbnVwLXB3ZCcsXHJcbiAgICAgIGxhYmVsOiAnUGFzc3dvcmQnLFxyXG4gICAgICBpbnB1dFR5cGU6ICdwYXNzd29yZCcsXHJcbiAgICAgIGhpbnQ6ICdMYSBwYXNzd29yZCBkZXZlIGF2ZXJlIGZyYSBpIDYgZSBpIDEwIGNhcmF0dGVyaSBlIGNvbnRlbmVyZSBhbG1lbm8gdW5hIGxldHRlcmEgbWFpdXNjb2xhJyxcclxuICAgICAgc2hvdzoge1xyXG4gICAgICAgIGljb246ICdmYXIgZmEtZXllJyxcclxuICAgICAgICBsYWJlbDogJ01vc3RyYSBwYXNzd29yZCcsXHJcbiAgICAgICAgcGF5bG9hZDogJ3NpZ251cC1zaG93LXB3ZCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHBheWxvYWQ6ICdzaWdudXAtcHdkJyxcclxuICAgICAgZXJyb3I6ICdBdHRlbnppb25lIGxlIHBhc3N3b3JkIHNvbm8gZGl2ZXJzZScsXHJcbiAgICB9LFxyXG4gICAgcmVQYXNzd29yZDoge1xyXG4gICAgICBpZDogJ3NpZ251cC1yZXB3ZCcsXHJcbiAgICAgIGxhYmVsOiAnUmlwZXRpIFBhc3N3b3JkJyxcclxuICAgICAgaW5wdXRUeXBlOiAncGFzc3dvcmQnLFxyXG4gICAgICBwYXlsb2FkOiAnc2lnbnVwLXJlcHdkJyxcclxuICAgICAgZXJyb3I6ICdBdHRlbnppb25lIGxlIHBhc3N3b3JkIHNvbm8gZGl2ZXJzZScsXHJcbiAgICB9LFxyXG4gICAgc3VibWl0OiB7XHJcbiAgICAgIGxhYmVsOiAnRW50cmEnLFxyXG4gICAgICBwYXlsb2FkOiAnc2lnbnVwLXN1Ym1pdCcsXHJcbiAgICAgIGVycm9yOiAnRXJyb3JlIGRpIGludmlvIGRlaSBkYXRpIGFsIHNlcnZlcicsXHJcbiAgICB9LFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgIGxhYmVsOiAnSGFpIGdpw6AgdW4gYWNjb3VudD8nLFxyXG4gICAgICBhY3Rpb246IHtcclxuICAgICAgICBsYWJlbDogJ0VudHJhJyxcclxuICAgICAgICBwYXlsb2FkOiAnZ28tbG9naW4nXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGZvcmdvdFBhc3N3b3JkOiB7XHJcbiAgICBkZXNjcmlwdGlvbjogJ0luc2VyaXNjaSBsXFwnaW5kaXJpenpvIGVtYWlsIGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFsaXF1YW0gdml0YWUgbGFjdXMgZWxlaWZlbmQsIHZlc3RpYnVsdW0gbmVxdWUgbmVjLCBkaWN0dW0gZXJvcy4gTnVuYyB2ZWwgcmlzdXMgbGVvJyxcclxuICAgIGVtYWlsOiB7XHJcbiAgICAgIGlkOiAnZm9yZ290LXBhc3N3b3JkLWVtYWlsJyxcclxuICAgICAgbGFiZWw6ICdFbWFpbCcsXHJcbiAgICAgIGlucHV0VHlwZTogJ2VtYWlsJyxcclxuICAgICAgcGF5bG9hZDogJ2ZvcmdvdFBhc3N3b3JkLWVtYWlsJ1xyXG4gICAgfSxcclxuICAgIHN1Ym1pdDoge1xyXG4gICAgICBsYWJlbDogJ1Jlc2V0IHBhc3N3b3JkJyxcclxuICAgICAgcGF5bG9hZDogJ2ZvcmdvdFBhc3N3b3JkLXN1Ym1pdCcsXHJcbiAgICB9LFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgIGxhYmVsOiAnRW50cmEgbmVsbGEgcGlhdHRhZm9ybWEnLFxyXG4gICAgICBhY3Rpb246IHtcclxuICAgICAgICBsYWJlbDogJ0VudHJhJyxcclxuICAgICAgICBwYXlsb2FkOiAnZ28tYXBwJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59Il19