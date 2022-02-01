export const SIGNUP_MOCK = {
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
        /* footer: {
          label: 'Non hai un account?',
          action: {
            label: 'Registrati',
            payload: 'go-signup'
          }
        } */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLm1vY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBZTtJQUNyQyxLQUFLLEVBQUU7UUFDTCxLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUUsbUJBQW1CO1lBQzVCLEVBQUUsRUFBRSxhQUFhO1lBQ2pCLEtBQUssRUFBRSxPQUFPO1lBQ2QsU0FBUyxFQUFFLE9BQU87WUFDbEIsT0FBTyxFQUFFLGFBQWE7U0FDdkI7UUFDRCxRQUFRLEVBQUU7WUFDUixFQUFFLEVBQUUsV0FBVztZQUNmLEtBQUssRUFBRSxVQUFVO1lBQ2pCLFNBQVMsRUFBRSxVQUFVO1lBQ3JCLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsWUFBWTtnQkFDbEIsS0FBSyxFQUFFLGlCQUFpQjtnQkFDeEIsT0FBTyxFQUFFLGdCQUFnQjthQUMxQjtZQUNELE9BQU8sRUFBRSxXQUFXO1NBQ3JCO1FBQ0Q7Ozs7YUFJSztRQUNMLE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxPQUFPO1lBQ2QsT0FBTyxFQUFFLGNBQWM7U0FDeEI7UUFDRDs7Ozs7O1lBTUk7S0FDTDtJQUNELE1BQU0sRUFBRTtRQUNOLElBQUksRUFBRTtZQUNKLEVBQUUsRUFBRSxhQUFhO1lBQ2pCLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsU0FBUyxFQUFFLE1BQU07WUFDakIsS0FBSyxFQUFFLHlDQUF5QztZQUNoRCxPQUFPLEVBQUUsYUFBYTtTQUN2QjtRQUNELEtBQUssRUFBRTtZQUNMLEVBQUUsRUFBRSxjQUFjO1lBQ2xCLEtBQUssRUFBRSxPQUFPO1lBQ2QsU0FBUyxFQUFFLE9BQU87WUFDbEIsT0FBTyxFQUFFLGNBQWM7U0FDeEI7UUFDRCxRQUFRLEVBQUU7WUFDUixFQUFFLEVBQUUsWUFBWTtZQUNoQixLQUFLLEVBQUUsVUFBVTtZQUNqQixTQUFTLEVBQUUsVUFBVTtZQUNyQixJQUFJLEVBQUUsMEZBQTBGO1lBQ2hHLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsWUFBWTtnQkFDbEIsS0FBSyxFQUFFLGlCQUFpQjtnQkFDeEIsT0FBTyxFQUFFLGlCQUFpQjthQUMzQjtZQUNELE9BQU8sRUFBRSxZQUFZO1lBQ3JCLEtBQUssRUFBRSxxQ0FBcUM7U0FDN0M7UUFDRCxVQUFVLEVBQUU7WUFDVixFQUFFLEVBQUUsY0FBYztZQUNsQixLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCLFNBQVMsRUFBRSxVQUFVO1lBQ3JCLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLEtBQUssRUFBRSxxQ0FBcUM7U0FDN0M7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsT0FBTztZQUNkLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLEtBQUssRUFBRSxvQ0FBb0M7U0FDNUM7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUscUJBQXFCO1lBQzVCLE1BQU0sRUFBRTtnQkFDTixLQUFLLEVBQUUsT0FBTztnQkFDZCxPQUFPLEVBQUUsVUFBVTthQUNwQjtTQUNGO0tBQ0Y7SUFDRCxjQUFjLEVBQUU7UUFDZCxXQUFXLEVBQUUsMktBQTJLO1FBQ3hMLEtBQUssRUFBRTtZQUNMLEVBQUUsRUFBRSx1QkFBdUI7WUFDM0IsS0FBSyxFQUFFLE9BQU87WUFDZCxTQUFTLEVBQUUsT0FBTztZQUNsQixPQUFPLEVBQUUsc0JBQXNCO1NBQ2hDO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLGdCQUFnQjtZQUN2QixPQUFPLEVBQUUsdUJBQXVCO1NBQ2pDO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLHlCQUF5QjtZQUNoQyxNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLE9BQU87Z0JBQ2QsT0FBTyxFQUFFLFFBQVE7YUFDbEI7U0FDRjtLQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpZ251cERhdGEgfSBmcm9tICcuL3NpZ251cCc7XG5cbmV4cG9ydCBjb25zdCBTSUdOVVBfTU9DSzogU2lnbnVwRGF0YSA9IHtcbiAgbG9naW46IHtcbiAgICBlbWFpbDoge1xuICAgICAgY2xhc3NlczogJ2VtYWlsLWV4dHJhLWNsYXNzJyxcbiAgICAgIGlkOiAnbG9naW4tZW1haWwnLFxuICAgICAgbGFiZWw6ICdFbWFpbCcsXG4gICAgICBpbnB1dFR5cGU6ICdlbWFpbCcsXG4gICAgICBwYXlsb2FkOiAnbG9naW4tZW1haWwnXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgaWQ6ICdsb2dpbi1wd2QnLFxuICAgICAgbGFiZWw6ICdQYXNzd29yZCcsXG4gICAgICBpbnB1dFR5cGU6ICdwYXNzd29yZCcsXG4gICAgICBzaG93OiB7XG4gICAgICAgIGljb246ICdmYXIgZmEtZXllJyxcbiAgICAgICAgbGFiZWw6ICdNb3N0cmEgcGFzc3dvcmQnLFxuICAgICAgICBwYXlsb2FkOiAnbG9naW4tc2hvdy1wd2QnLFxuICAgICAgfSxcbiAgICAgIHBheWxvYWQ6ICdsb2dpbi1wd2QnXG4gICAgfSxcbiAgICAvKiBmb3Jnb3RQYXNzd29yZDoge1xuICAgICAgdGl0bGU6ICd2YWkgYSByZWN1cGVybyBwYXNzd29yZCcsXG4gICAgICBsYWJlbDogJ1Bhc3N3b3JkIGRpbWVudGljYXRhPycsXG4gICAgICBwYXlsb2FkOiAnZm9yZ290LXB3ZCcsXG4gICAgfSwgKi9cbiAgICBzdWJtaXQ6IHtcbiAgICAgIGxhYmVsOiAnRW50cmEnLFxuICAgICAgcGF5bG9hZDogJ2xvZ2luLXN1Ym1pdCcsXG4gICAgfSxcbiAgICAvKiBmb290ZXI6IHtcbiAgICAgIGxhYmVsOiAnTm9uIGhhaSB1biBhY2NvdW50PycsXG4gICAgICBhY3Rpb246IHtcbiAgICAgICAgbGFiZWw6ICdSZWdpc3RyYXRpJyxcbiAgICAgICAgcGF5bG9hZDogJ2dvLXNpZ251cCdcbiAgICAgIH1cbiAgICB9ICovXG4gIH0sXG4gIHNpZ251cDoge1xuICAgIG5hbWU6IHtcbiAgICAgIGlkOiAnc2lnbnVwLW5hbWUnLFxuICAgICAgbGFiZWw6ICdOb21lIGUgY29nbm9tZScsXG4gICAgICBpbnB1dFR5cGU6ICd0ZXh0JyxcbiAgICAgIGVycm9yOiAnSWwgY2FtcG8gTm9tZSBlIENvZ25vbWUgw6ggb2JibGlnYXRvcmlvIScsXG4gICAgICBwYXlsb2FkOiAnc2lnbnVwLW5hbWUnXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgaWQ6ICdzaWdudXAtZW1haWwnLFxuICAgICAgbGFiZWw6ICdFbWFpbCcsXG4gICAgICBpbnB1dFR5cGU6ICdlbWFpbCcsXG4gICAgICBwYXlsb2FkOiAnc2lnbnVwLWVtYWlsJ1xuICAgIH0sXG4gICAgcGFzc3dvcmQ6IHtcbiAgICAgIGlkOiAnc2lnbnVwLXB3ZCcsXG4gICAgICBsYWJlbDogJ1Bhc3N3b3JkJyxcbiAgICAgIGlucHV0VHlwZTogJ3Bhc3N3b3JkJyxcbiAgICAgIGhpbnQ6ICdMYSBwYXNzd29yZCBkZXZlIGF2ZXJlIGZyYSBpIDYgZSBpIDEwIGNhcmF0dGVyaSBlIGNvbnRlbmVyZSBhbG1lbm8gdW5hIGxldHRlcmEgbWFpdXNjb2xhJyxcbiAgICAgIHNob3c6IHtcbiAgICAgICAgaWNvbjogJ2ZhciBmYS1leWUnLFxuICAgICAgICBsYWJlbDogJ01vc3RyYSBwYXNzd29yZCcsXG4gICAgICAgIHBheWxvYWQ6ICdzaWdudXAtc2hvdy1wd2QnLFxuICAgICAgfSxcbiAgICAgIHBheWxvYWQ6ICdzaWdudXAtcHdkJyxcbiAgICAgIGVycm9yOiAnQXR0ZW56aW9uZSBsZSBwYXNzd29yZCBzb25vIGRpdmVyc2UnLFxuICAgIH0sXG4gICAgcmVQYXNzd29yZDoge1xuICAgICAgaWQ6ICdzaWdudXAtcmVwd2QnLFxuICAgICAgbGFiZWw6ICdSaXBldGkgUGFzc3dvcmQnLFxuICAgICAgaW5wdXRUeXBlOiAncGFzc3dvcmQnLFxuICAgICAgcGF5bG9hZDogJ3NpZ251cC1yZXB3ZCcsXG4gICAgICBlcnJvcjogJ0F0dGVuemlvbmUgbGUgcGFzc3dvcmQgc29ubyBkaXZlcnNlJyxcbiAgICB9LFxuICAgIHN1Ym1pdDoge1xuICAgICAgbGFiZWw6ICdFbnRyYScsXG4gICAgICBwYXlsb2FkOiAnc2lnbnVwLXN1Ym1pdCcsXG4gICAgICBlcnJvcjogJ0Vycm9yZSBkaSBpbnZpbyBkZWkgZGF0aSBhbCBzZXJ2ZXInLFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICBsYWJlbDogJ0hhaSBnacOgIHVuIGFjY291bnQ/JyxcbiAgICAgIGFjdGlvbjoge1xuICAgICAgICBsYWJlbDogJ0VudHJhJyxcbiAgICAgICAgcGF5bG9hZDogJ2dvLWxvZ2luJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZm9yZ290UGFzc3dvcmQ6IHtcbiAgICBkZXNjcmlwdGlvbjogJ0luc2VyaXNjaSBsXFwnaW5kaXJpenpvIGVtYWlsIGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFsaXF1YW0gdml0YWUgbGFjdXMgZWxlaWZlbmQsIHZlc3RpYnVsdW0gbmVxdWUgbmVjLCBkaWN0dW0gZXJvcy4gTnVuYyB2ZWwgcmlzdXMgbGVvJyxcbiAgICBlbWFpbDoge1xuICAgICAgaWQ6ICdmb3Jnb3QtcGFzc3dvcmQtZW1haWwnLFxuICAgICAgbGFiZWw6ICdFbWFpbCcsXG4gICAgICBpbnB1dFR5cGU6ICdlbWFpbCcsXG4gICAgICBwYXlsb2FkOiAnZm9yZ290UGFzc3dvcmQtZW1haWwnXG4gICAgfSxcbiAgICBzdWJtaXQ6IHtcbiAgICAgIGxhYmVsOiAnUmVzZXQgcGFzc3dvcmQnLFxuICAgICAgcGF5bG9hZDogJ2ZvcmdvdFBhc3N3b3JkLXN1Ym1pdCcsXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIGxhYmVsOiAnRW50cmEgbmVsbGEgcGlhdHRhZm9ybWEnLFxuICAgICAgYWN0aW9uOiB7XG4gICAgICAgIGxhYmVsOiAnRW50cmEnLFxuICAgICAgICBwYXlsb2FkOiAnZ28tYXBwJ1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbiJdfQ==