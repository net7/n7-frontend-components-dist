export const SIGNUP_MOCK = {
    login: {
        email: {
            classes: 'email-extra-class',
            id: 'login-email',
            label: 'Email',
            inputType: 'email',
            payload: 'login-email',
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
            payload: 'login-pwd',
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
            payload: 'signup-name',
        },
        email: {
            id: 'signup-email',
            label: 'Email',
            inputType: 'email',
            payload: 'signup-email',
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
                payload: 'go-login',
            },
        },
    },
    forgotPassword: {
        description: "Inserisci l'indirizzo email lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae lacus eleifend, vestibulum neque nec, dictum eros. Nunc vel risus leo",
        email: {
            id: 'forgot-password-email',
            label: 'Email',
            inputType: 'email',
            payload: 'forgotPassword-email',
        },
        submit: {
            label: 'Reset password',
            payload: 'forgotPassword-submit',
        },
        footer: {
            label: 'Entra nella piattaforma',
            action: {
                label: 'Entra',
                payload: 'go-app',
            },
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLm1vY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBZTtJQUNyQyxLQUFLLEVBQUU7UUFDTCxLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUUsbUJBQW1CO1lBQzVCLEVBQUUsRUFBRSxhQUFhO1lBQ2pCLEtBQUssRUFBRSxPQUFPO1lBQ2QsU0FBUyxFQUFFLE9BQU87WUFDbEIsT0FBTyxFQUFFLGFBQWE7U0FDdkI7UUFDRCxRQUFRLEVBQUU7WUFDUixFQUFFLEVBQUUsV0FBVztZQUNmLEtBQUssRUFBRSxVQUFVO1lBQ2pCLFNBQVMsRUFBRSxVQUFVO1lBQ3JCLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsWUFBWTtnQkFDbEIsS0FBSyxFQUFFLGlCQUFpQjtnQkFDeEIsT0FBTyxFQUFFLGdCQUFnQjthQUMxQjtZQUNELE9BQU8sRUFBRSxXQUFXO1NBQ3JCO1FBQ0Q7Ozs7YUFJSztRQUNMLE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxPQUFPO1lBQ2QsT0FBTyxFQUFFLGNBQWM7U0FDeEI7UUFDRDs7Ozs7O1lBTUk7S0FDTDtJQUNELE1BQU0sRUFBRTtRQUNOLElBQUksRUFBRTtZQUNKLEVBQUUsRUFBRSxhQUFhO1lBQ2pCLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsU0FBUyxFQUFFLE1BQU07WUFDakIsS0FBSyxFQUFFLHlDQUF5QztZQUNoRCxPQUFPLEVBQUUsYUFBYTtTQUN2QjtRQUNELEtBQUssRUFBRTtZQUNMLEVBQUUsRUFBRSxjQUFjO1lBQ2xCLEtBQUssRUFBRSxPQUFPO1lBQ2QsU0FBUyxFQUFFLE9BQU87WUFDbEIsT0FBTyxFQUFFLGNBQWM7U0FDeEI7UUFDRCxRQUFRLEVBQUU7WUFDUixFQUFFLEVBQUUsWUFBWTtZQUNoQixLQUFLLEVBQUUsVUFBVTtZQUNqQixTQUFTLEVBQUUsVUFBVTtZQUNyQixJQUFJLEVBQUUsMEZBQTBGO1lBQ2hHLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsWUFBWTtnQkFDbEIsS0FBSyxFQUFFLGlCQUFpQjtnQkFDeEIsT0FBTyxFQUFFLGlCQUFpQjthQUMzQjtZQUNELE9BQU8sRUFBRSxZQUFZO1lBQ3JCLEtBQUssRUFBRSxxQ0FBcUM7U0FDN0M7UUFDRCxVQUFVLEVBQUU7WUFDVixFQUFFLEVBQUUsY0FBYztZQUNsQixLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCLFNBQVMsRUFBRSxVQUFVO1lBQ3JCLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLEtBQUssRUFBRSxxQ0FBcUM7U0FDN0M7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsT0FBTztZQUNkLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLEtBQUssRUFBRSxvQ0FBb0M7U0FDNUM7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUscUJBQXFCO1lBQzVCLE1BQU0sRUFBRTtnQkFDTixLQUFLLEVBQUUsT0FBTztnQkFDZCxPQUFPLEVBQUUsVUFBVTthQUNwQjtTQUNGO0tBQ0Y7SUFDRCxjQUFjLEVBQUU7UUFDZCxXQUFXLEVBQ1QsMEtBQTBLO1FBQzVLLEtBQUssRUFBRTtZQUNMLEVBQUUsRUFBRSx1QkFBdUI7WUFDM0IsS0FBSyxFQUFFLE9BQU87WUFDZCxTQUFTLEVBQUUsT0FBTztZQUNsQixPQUFPLEVBQUUsc0JBQXNCO1NBQ2hDO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLGdCQUFnQjtZQUN2QixPQUFPLEVBQUUsdUJBQXVCO1NBQ2pDO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLHlCQUF5QjtZQUNoQyxNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLE9BQU87Z0JBQ2QsT0FBTyxFQUFFLFFBQVE7YUFDbEI7U0FDRjtLQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpZ251cERhdGEgfSBmcm9tICcuL3NpZ251cCc7XG5cbmV4cG9ydCBjb25zdCBTSUdOVVBfTU9DSzogU2lnbnVwRGF0YSA9IHtcbiAgbG9naW46IHtcbiAgICBlbWFpbDoge1xuICAgICAgY2xhc3NlczogJ2VtYWlsLWV4dHJhLWNsYXNzJyxcbiAgICAgIGlkOiAnbG9naW4tZW1haWwnLFxuICAgICAgbGFiZWw6ICdFbWFpbCcsXG4gICAgICBpbnB1dFR5cGU6ICdlbWFpbCcsXG4gICAgICBwYXlsb2FkOiAnbG9naW4tZW1haWwnLFxuICAgIH0sXG4gICAgcGFzc3dvcmQ6IHtcbiAgICAgIGlkOiAnbG9naW4tcHdkJyxcbiAgICAgIGxhYmVsOiAnUGFzc3dvcmQnLFxuICAgICAgaW5wdXRUeXBlOiAncGFzc3dvcmQnLFxuICAgICAgc2hvdzoge1xuICAgICAgICBpY29uOiAnZmFyIGZhLWV5ZScsXG4gICAgICAgIGxhYmVsOiAnTW9zdHJhIHBhc3N3b3JkJyxcbiAgICAgICAgcGF5bG9hZDogJ2xvZ2luLXNob3ctcHdkJyxcbiAgICAgIH0sXG4gICAgICBwYXlsb2FkOiAnbG9naW4tcHdkJyxcbiAgICB9LFxuICAgIC8qIGZvcmdvdFBhc3N3b3JkOiB7XG4gICAgICB0aXRsZTogJ3ZhaSBhIHJlY3VwZXJvIHBhc3N3b3JkJyxcbiAgICAgIGxhYmVsOiAnUGFzc3dvcmQgZGltZW50aWNhdGE/JyxcbiAgICAgIHBheWxvYWQ6ICdmb3Jnb3QtcHdkJyxcbiAgICB9LCAqL1xuICAgIHN1Ym1pdDoge1xuICAgICAgbGFiZWw6ICdFbnRyYScsXG4gICAgICBwYXlsb2FkOiAnbG9naW4tc3VibWl0JyxcbiAgICB9LFxuICAgIC8qIGZvb3Rlcjoge1xuICAgICAgbGFiZWw6ICdOb24gaGFpIHVuIGFjY291bnQ/JyxcbiAgICAgIGFjdGlvbjoge1xuICAgICAgICBsYWJlbDogJ1JlZ2lzdHJhdGknLFxuICAgICAgICBwYXlsb2FkOiAnZ28tc2lnbnVwJ1xuICAgICAgfVxuICAgIH0gKi9cbiAgfSxcbiAgc2lnbnVwOiB7XG4gICAgbmFtZToge1xuICAgICAgaWQ6ICdzaWdudXAtbmFtZScsXG4gICAgICBsYWJlbDogJ05vbWUgZSBjb2dub21lJyxcbiAgICAgIGlucHV0VHlwZTogJ3RleHQnLFxuICAgICAgZXJyb3I6ICdJbCBjYW1wbyBOb21lIGUgQ29nbm9tZSDDqCBvYmJsaWdhdG9yaW8hJyxcbiAgICAgIHBheWxvYWQ6ICdzaWdudXAtbmFtZScsXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgaWQ6ICdzaWdudXAtZW1haWwnLFxuICAgICAgbGFiZWw6ICdFbWFpbCcsXG4gICAgICBpbnB1dFR5cGU6ICdlbWFpbCcsXG4gICAgICBwYXlsb2FkOiAnc2lnbnVwLWVtYWlsJyxcbiAgICB9LFxuICAgIHBhc3N3b3JkOiB7XG4gICAgICBpZDogJ3NpZ251cC1wd2QnLFxuICAgICAgbGFiZWw6ICdQYXNzd29yZCcsXG4gICAgICBpbnB1dFR5cGU6ICdwYXNzd29yZCcsXG4gICAgICBoaW50OiAnTGEgcGFzc3dvcmQgZGV2ZSBhdmVyZSBmcmEgaSA2IGUgaSAxMCBjYXJhdHRlcmkgZSBjb250ZW5lcmUgYWxtZW5vIHVuYSBsZXR0ZXJhIG1haXVzY29sYScsXG4gICAgICBzaG93OiB7XG4gICAgICAgIGljb246ICdmYXIgZmEtZXllJyxcbiAgICAgICAgbGFiZWw6ICdNb3N0cmEgcGFzc3dvcmQnLFxuICAgICAgICBwYXlsb2FkOiAnc2lnbnVwLXNob3ctcHdkJyxcbiAgICAgIH0sXG4gICAgICBwYXlsb2FkOiAnc2lnbnVwLXB3ZCcsXG4gICAgICBlcnJvcjogJ0F0dGVuemlvbmUgbGUgcGFzc3dvcmQgc29ubyBkaXZlcnNlJyxcbiAgICB9LFxuICAgIHJlUGFzc3dvcmQ6IHtcbiAgICAgIGlkOiAnc2lnbnVwLXJlcHdkJyxcbiAgICAgIGxhYmVsOiAnUmlwZXRpIFBhc3N3b3JkJyxcbiAgICAgIGlucHV0VHlwZTogJ3Bhc3N3b3JkJyxcbiAgICAgIHBheWxvYWQ6ICdzaWdudXAtcmVwd2QnLFxuICAgICAgZXJyb3I6ICdBdHRlbnppb25lIGxlIHBhc3N3b3JkIHNvbm8gZGl2ZXJzZScsXG4gICAgfSxcbiAgICBzdWJtaXQ6IHtcbiAgICAgIGxhYmVsOiAnRW50cmEnLFxuICAgICAgcGF5bG9hZDogJ3NpZ251cC1zdWJtaXQnLFxuICAgICAgZXJyb3I6ICdFcnJvcmUgZGkgaW52aW8gZGVpIGRhdGkgYWwgc2VydmVyJyxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgbGFiZWw6ICdIYWkgZ2nDoCB1biBhY2NvdW50PycsXG4gICAgICBhY3Rpb246IHtcbiAgICAgICAgbGFiZWw6ICdFbnRyYScsXG4gICAgICAgIHBheWxvYWQ6ICdnby1sb2dpbicsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGZvcmdvdFBhc3N3b3JkOiB7XG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkluc2VyaXNjaSBsJ2luZGlyaXp6byBlbWFpbCBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBbGlxdWFtIHZpdGFlIGxhY3VzIGVsZWlmZW5kLCB2ZXN0aWJ1bHVtIG5lcXVlIG5lYywgZGljdHVtIGVyb3MuIE51bmMgdmVsIHJpc3VzIGxlb1wiLFxuICAgIGVtYWlsOiB7XG4gICAgICBpZDogJ2ZvcmdvdC1wYXNzd29yZC1lbWFpbCcsXG4gICAgICBsYWJlbDogJ0VtYWlsJyxcbiAgICAgIGlucHV0VHlwZTogJ2VtYWlsJyxcbiAgICAgIHBheWxvYWQ6ICdmb3Jnb3RQYXNzd29yZC1lbWFpbCcsXG4gICAgfSxcbiAgICBzdWJtaXQ6IHtcbiAgICAgIGxhYmVsOiAnUmVzZXQgcGFzc3dvcmQnLFxuICAgICAgcGF5bG9hZDogJ2ZvcmdvdFBhc3N3b3JkLXN1Ym1pdCcsXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIGxhYmVsOiAnRW50cmEgbmVsbGEgcGlhdHRhZm9ybWEnLFxuICAgICAgYWN0aW9uOiB7XG4gICAgICAgIGxhYmVsOiAnRW50cmEnLFxuICAgICAgICBwYXlsb2FkOiAnZ28tYXBwJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iXX0=