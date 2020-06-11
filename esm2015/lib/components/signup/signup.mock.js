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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLm1vY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NpZ251cC9zaWdudXAubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQWU7SUFDckMsS0FBSyxFQUFFO1FBQ0wsS0FBSyxFQUFFO1lBQ0wsT0FBTyxFQUFFLG1CQUFtQjtZQUM1QixFQUFFLEVBQUUsYUFBYTtZQUNqQixLQUFLLEVBQUUsT0FBTztZQUNkLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLE9BQU8sRUFBRSxhQUFhO1NBQ3ZCO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsRUFBRSxFQUFFLFdBQVc7WUFDZixLQUFLLEVBQUUsVUFBVTtZQUNqQixTQUFTLEVBQUUsVUFBVTtZQUNyQixJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCLE9BQU8sRUFBRSxnQkFBZ0I7YUFDMUI7WUFDRCxPQUFPLEVBQUUsV0FBVztTQUNyQjtRQUNEOzs7O2FBSUs7UUFDTCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsT0FBTztZQUNkLE9BQU8sRUFBRSxjQUFjO1NBQ3hCO0tBUUY7SUFDRCxNQUFNLEVBQUU7UUFDTixJQUFJLEVBQUU7WUFDSixFQUFFLEVBQUUsYUFBYTtZQUNqQixLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLEtBQUssRUFBRSx5Q0FBeUM7WUFDaEQsT0FBTyxFQUFFLGFBQWE7U0FDdkI7UUFDRCxLQUFLLEVBQUU7WUFDTCxFQUFFLEVBQUUsY0FBYztZQUNsQixLQUFLLEVBQUUsT0FBTztZQUNkLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLE9BQU8sRUFBRSxjQUFjO1NBQ3hCO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsRUFBRSxFQUFFLFlBQVk7WUFDaEIsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLFVBQVU7WUFDckIsSUFBSSxFQUFFLDBGQUEwRjtZQUNoRyxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCLE9BQU8sRUFBRSxpQkFBaUI7YUFDM0I7WUFDRCxPQUFPLEVBQUUsWUFBWTtZQUNyQixLQUFLLEVBQUUscUNBQXFDO1NBQzdDO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsRUFBRSxFQUFFLGNBQWM7WUFDbEIsS0FBSyxFQUFFLGlCQUFpQjtZQUN4QixTQUFTLEVBQUUsVUFBVTtZQUNyQixPQUFPLEVBQUUsY0FBYztZQUN2QixLQUFLLEVBQUUscUNBQXFDO1NBQzdDO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLE9BQU87WUFDZCxPQUFPLEVBQUUsZUFBZTtZQUN4QixLQUFLLEVBQUUsb0NBQW9DO1NBQzVDO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLHFCQUFxQjtZQUM1QixNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLE9BQU87Z0JBQ2QsT0FBTyxFQUFFLFVBQVU7YUFDcEI7U0FDRjtLQUNGO0lBQ0QsY0FBYyxFQUFFO1FBQ2QsV0FBVyxFQUFFLDJLQUEySztRQUN4TCxLQUFLLEVBQUU7WUFDTCxFQUFFLEVBQUUsdUJBQXVCO1lBQzNCLEtBQUssRUFBRSxPQUFPO1lBQ2QsU0FBUyxFQUFFLE9BQU87WUFDbEIsT0FBTyxFQUFFLHNCQUFzQjtTQUNoQztRQUNELE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsT0FBTyxFQUFFLHVCQUF1QjtTQUNqQztRQUNELE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSx5QkFBeUI7WUFDaEMsTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRSxPQUFPO2dCQUNkLE9BQU8sRUFBRSxRQUFRO2FBQ2xCO1NBQ0Y7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaWdudXBEYXRhIH0gZnJvbSAnLi9zaWdudXAnO1xuXG5leHBvcnQgY29uc3QgU0lHTlVQX01PQ0s6IFNpZ251cERhdGEgPSB7XG4gIGxvZ2luOiB7XG4gICAgZW1haWw6IHtcbiAgICAgIGNsYXNzZXM6ICdlbWFpbC1leHRyYS1jbGFzcycsXG4gICAgICBpZDogJ2xvZ2luLWVtYWlsJyxcbiAgICAgIGxhYmVsOiAnRW1haWwnLFxuICAgICAgaW5wdXRUeXBlOiAnZW1haWwnLFxuICAgICAgcGF5bG9hZDogJ2xvZ2luLWVtYWlsJ1xuICAgIH0sXG4gICAgcGFzc3dvcmQ6IHtcbiAgICAgIGlkOiAnbG9naW4tcHdkJyxcbiAgICAgIGxhYmVsOiAnUGFzc3dvcmQnLFxuICAgICAgaW5wdXRUeXBlOiAncGFzc3dvcmQnLFxuICAgICAgc2hvdzoge1xuICAgICAgICBpY29uOiAnZmFyIGZhLWV5ZScsXG4gICAgICAgIGxhYmVsOiAnTW9zdHJhIHBhc3N3b3JkJyxcbiAgICAgICAgcGF5bG9hZDogJ2xvZ2luLXNob3ctcHdkJyxcbiAgICAgIH0sXG4gICAgICBwYXlsb2FkOiAnbG9naW4tcHdkJ1xuICAgIH0sXG4gICAgLyogZm9yZ290UGFzc3dvcmQ6IHtcbiAgICAgIHRpdGxlOiAndmFpIGEgcmVjdXBlcm8gcGFzc3dvcmQnLFxuICAgICAgbGFiZWw6ICdQYXNzd29yZCBkaW1lbnRpY2F0YT8nLFxuICAgICAgcGF5bG9hZDogJ2ZvcmdvdC1wd2QnLFxuICAgIH0sICovXG4gICAgc3VibWl0OiB7XG4gICAgICBsYWJlbDogJ0VudHJhJyxcbiAgICAgIHBheWxvYWQ6ICdsb2dpbi1zdWJtaXQnLFxuICAgIH0sXG4gICAgLyogZm9vdGVyOiB7XG4gICAgICBsYWJlbDogJ05vbiBoYWkgdW4gYWNjb3VudD8nLFxuICAgICAgYWN0aW9uOiB7XG4gICAgICAgIGxhYmVsOiAnUmVnaXN0cmF0aScsXG4gICAgICAgIHBheWxvYWQ6ICdnby1zaWdudXAnXG4gICAgICB9XG4gICAgfSAqL1xuICB9LFxuICBzaWdudXA6IHtcbiAgICBuYW1lOiB7XG4gICAgICBpZDogJ3NpZ251cC1uYW1lJyxcbiAgICAgIGxhYmVsOiAnTm9tZSBlIGNvZ25vbWUnLFxuICAgICAgaW5wdXRUeXBlOiAndGV4dCcsXG4gICAgICBlcnJvcjogJ0lsIGNhbXBvIE5vbWUgZSBDb2dub21lIMOoIG9iYmxpZ2F0b3JpbyEnLFxuICAgICAgcGF5bG9hZDogJ3NpZ251cC1uYW1lJ1xuICAgIH0sXG4gICAgZW1haWw6IHtcbiAgICAgIGlkOiAnc2lnbnVwLWVtYWlsJyxcbiAgICAgIGxhYmVsOiAnRW1haWwnLFxuICAgICAgaW5wdXRUeXBlOiAnZW1haWwnLFxuICAgICAgcGF5bG9hZDogJ3NpZ251cC1lbWFpbCdcbiAgICB9LFxuICAgIHBhc3N3b3JkOiB7XG4gICAgICBpZDogJ3NpZ251cC1wd2QnLFxuICAgICAgbGFiZWw6ICdQYXNzd29yZCcsXG4gICAgICBpbnB1dFR5cGU6ICdwYXNzd29yZCcsXG4gICAgICBoaW50OiAnTGEgcGFzc3dvcmQgZGV2ZSBhdmVyZSBmcmEgaSA2IGUgaSAxMCBjYXJhdHRlcmkgZSBjb250ZW5lcmUgYWxtZW5vIHVuYSBsZXR0ZXJhIG1haXVzY29sYScsXG4gICAgICBzaG93OiB7XG4gICAgICAgIGljb246ICdmYXIgZmEtZXllJyxcbiAgICAgICAgbGFiZWw6ICdNb3N0cmEgcGFzc3dvcmQnLFxuICAgICAgICBwYXlsb2FkOiAnc2lnbnVwLXNob3ctcHdkJyxcbiAgICAgIH0sXG4gICAgICBwYXlsb2FkOiAnc2lnbnVwLXB3ZCcsXG4gICAgICBlcnJvcjogJ0F0dGVuemlvbmUgbGUgcGFzc3dvcmQgc29ubyBkaXZlcnNlJyxcbiAgICB9LFxuICAgIHJlUGFzc3dvcmQ6IHtcbiAgICAgIGlkOiAnc2lnbnVwLXJlcHdkJyxcbiAgICAgIGxhYmVsOiAnUmlwZXRpIFBhc3N3b3JkJyxcbiAgICAgIGlucHV0VHlwZTogJ3Bhc3N3b3JkJyxcbiAgICAgIHBheWxvYWQ6ICdzaWdudXAtcmVwd2QnLFxuICAgICAgZXJyb3I6ICdBdHRlbnppb25lIGxlIHBhc3N3b3JkIHNvbm8gZGl2ZXJzZScsXG4gICAgfSxcbiAgICBzdWJtaXQ6IHtcbiAgICAgIGxhYmVsOiAnRW50cmEnLFxuICAgICAgcGF5bG9hZDogJ3NpZ251cC1zdWJtaXQnLFxuICAgICAgZXJyb3I6ICdFcnJvcmUgZGkgaW52aW8gZGVpIGRhdGkgYWwgc2VydmVyJyxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgbGFiZWw6ICdIYWkgZ2nDoCB1biBhY2NvdW50PycsXG4gICAgICBhY3Rpb246IHtcbiAgICAgICAgbGFiZWw6ICdFbnRyYScsXG4gICAgICAgIHBheWxvYWQ6ICdnby1sb2dpbidcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGZvcmdvdFBhc3N3b3JkOiB7XG4gICAgZGVzY3JpcHRpb246ICdJbnNlcmlzY2kgbFxcJ2luZGlyaXp6byBlbWFpbCBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBbGlxdWFtIHZpdGFlIGxhY3VzIGVsZWlmZW5kLCB2ZXN0aWJ1bHVtIG5lcXVlIG5lYywgZGljdHVtIGVyb3MuIE51bmMgdmVsIHJpc3VzIGxlbycsXG4gICAgZW1haWw6IHtcbiAgICAgIGlkOiAnZm9yZ290LXBhc3N3b3JkLWVtYWlsJyxcbiAgICAgIGxhYmVsOiAnRW1haWwnLFxuICAgICAgaW5wdXRUeXBlOiAnZW1haWwnLFxuICAgICAgcGF5bG9hZDogJ2ZvcmdvdFBhc3N3b3JkLWVtYWlsJ1xuICAgIH0sXG4gICAgc3VibWl0OiB7XG4gICAgICBsYWJlbDogJ1Jlc2V0IHBhc3N3b3JkJyxcbiAgICAgIHBheWxvYWQ6ICdmb3Jnb3RQYXNzd29yZC1zdWJtaXQnLFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICBsYWJlbDogJ0VudHJhIG5lbGxhIHBpYXR0YWZvcm1hJyxcbiAgICAgIGFjdGlvbjoge1xuICAgICAgICBsYWJlbDogJ0VudHJhJyxcbiAgICAgICAgcGF5bG9hZDogJ2dvLWFwcCdcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG4iXX0=