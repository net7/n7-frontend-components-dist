/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/signup/signup.mock.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLm1vY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NpZ251cC9zaWdudXAubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxNQUFNLEtBQU8sV0FBVyxHQUFlO0lBQ3JDLEtBQUssRUFBRTtRQUNMLEtBQUssRUFBRTtZQUNMLE9BQU8sRUFBRSxtQkFBbUI7WUFDNUIsRUFBRSxFQUFFLGFBQWE7WUFDakIsS0FBSyxFQUFFLE9BQU87WUFDZCxTQUFTLEVBQUUsT0FBTztZQUNsQixPQUFPLEVBQUUsYUFBYTtTQUN2QjtRQUNELFFBQVEsRUFBRTtZQUNSLEVBQUUsRUFBRSxXQUFXO1lBQ2YsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLFVBQVU7WUFDckIsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxZQUFZO2dCQUNsQixLQUFLLEVBQUUsaUJBQWlCO2dCQUN4QixPQUFPLEVBQUUsZ0JBQWdCO2FBQzFCO1lBQ0QsT0FBTyxFQUFFLFdBQVc7U0FDckI7Ozs7OztRQU1ELE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxPQUFPO1lBQ2QsT0FBTyxFQUFFLGNBQWM7U0FDeEI7S0FRRjtJQUNELE1BQU0sRUFBRTtRQUNOLElBQUksRUFBRTtZQUNKLEVBQUUsRUFBRSxhQUFhO1lBQ2pCLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsU0FBUyxFQUFFLE1BQU07WUFDakIsS0FBSyxFQUFFLHlDQUF5QztZQUNoRCxPQUFPLEVBQUUsYUFBYTtTQUN2QjtRQUNELEtBQUssRUFBRTtZQUNMLEVBQUUsRUFBRSxjQUFjO1lBQ2xCLEtBQUssRUFBRSxPQUFPO1lBQ2QsU0FBUyxFQUFFLE9BQU87WUFDbEIsT0FBTyxFQUFFLGNBQWM7U0FDeEI7UUFDRCxRQUFRLEVBQUU7WUFDUixFQUFFLEVBQUUsWUFBWTtZQUNoQixLQUFLLEVBQUUsVUFBVTtZQUNqQixTQUFTLEVBQUUsVUFBVTtZQUNyQixJQUFJLEVBQUUsMEZBQTBGO1lBQ2hHLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsWUFBWTtnQkFDbEIsS0FBSyxFQUFFLGlCQUFpQjtnQkFDeEIsT0FBTyxFQUFFLGlCQUFpQjthQUMzQjtZQUNELE9BQU8sRUFBRSxZQUFZO1lBQ3JCLEtBQUssRUFBRSxxQ0FBcUM7U0FDN0M7UUFDRCxVQUFVLEVBQUU7WUFDVixFQUFFLEVBQUUsY0FBYztZQUNsQixLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCLFNBQVMsRUFBRSxVQUFVO1lBQ3JCLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLEtBQUssRUFBRSxxQ0FBcUM7U0FDN0M7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsT0FBTztZQUNkLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLEtBQUssRUFBRSxvQ0FBb0M7U0FDNUM7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUscUJBQXFCO1lBQzVCLE1BQU0sRUFBRTtnQkFDTixLQUFLLEVBQUUsT0FBTztnQkFDZCxPQUFPLEVBQUUsVUFBVTthQUNwQjtTQUNGO0tBQ0Y7SUFDRCxjQUFjLEVBQUU7UUFDZCxXQUFXLEVBQUUsMktBQTJLO1FBQ3hMLEtBQUssRUFBRTtZQUNMLEVBQUUsRUFBRSx1QkFBdUI7WUFDM0IsS0FBSyxFQUFFLE9BQU87WUFDZCxTQUFTLEVBQUUsT0FBTztZQUNsQixPQUFPLEVBQUUsc0JBQXNCO1NBQ2hDO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLGdCQUFnQjtZQUN2QixPQUFPLEVBQUUsdUJBQXVCO1NBQ2pDO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLHlCQUF5QjtZQUNoQyxNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLE9BQU87Z0JBQ2QsT0FBTyxFQUFFLFFBQVE7YUFDbEI7U0FDRjtLQUNGO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaWdudXBEYXRhIH0gZnJvbSAnLi9zaWdudXAnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05VUF9NT0NLOiBTaWdudXBEYXRhID0ge1xyXG4gIGxvZ2luOiB7XHJcbiAgICBlbWFpbDoge1xyXG4gICAgICBjbGFzc2VzOiAnZW1haWwtZXh0cmEtY2xhc3MnLFxyXG4gICAgICBpZDogJ2xvZ2luLWVtYWlsJyxcclxuICAgICAgbGFiZWw6ICdFbWFpbCcsXHJcbiAgICAgIGlucHV0VHlwZTogJ2VtYWlsJyxcclxuICAgICAgcGF5bG9hZDogJ2xvZ2luLWVtYWlsJ1xyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkOiB7XHJcbiAgICAgIGlkOiAnbG9naW4tcHdkJyxcclxuICAgICAgbGFiZWw6ICdQYXNzd29yZCcsXHJcbiAgICAgIGlucHV0VHlwZTogJ3Bhc3N3b3JkJyxcclxuICAgICAgc2hvdzoge1xyXG4gICAgICAgIGljb246ICdmYXIgZmEtZXllJyxcclxuICAgICAgICBsYWJlbDogJ01vc3RyYSBwYXNzd29yZCcsXHJcbiAgICAgICAgcGF5bG9hZDogJ2xvZ2luLXNob3ctcHdkJyxcclxuICAgICAgfSxcclxuICAgICAgcGF5bG9hZDogJ2xvZ2luLXB3ZCdcclxuICAgIH0sXHJcbiAgICAvKiBmb3Jnb3RQYXNzd29yZDoge1xyXG4gICAgICB0aXRsZTogJ3ZhaSBhIHJlY3VwZXJvIHBhc3N3b3JkJyxcclxuICAgICAgbGFiZWw6ICdQYXNzd29yZCBkaW1lbnRpY2F0YT8nLFxyXG4gICAgICBwYXlsb2FkOiAnZm9yZ290LXB3ZCcsXHJcbiAgICB9LCAqL1xyXG4gICAgc3VibWl0OiB7XHJcbiAgICAgIGxhYmVsOiAnRW50cmEnLFxyXG4gICAgICBwYXlsb2FkOiAnbG9naW4tc3VibWl0JyxcclxuICAgIH0sXHJcbiAgICAvKiBmb290ZXI6IHtcclxuICAgICAgbGFiZWw6ICdOb24gaGFpIHVuIGFjY291bnQ/JyxcclxuICAgICAgYWN0aW9uOiB7XHJcbiAgICAgICAgbGFiZWw6ICdSZWdpc3RyYXRpJyxcclxuICAgICAgICBwYXlsb2FkOiAnZ28tc2lnbnVwJ1xyXG4gICAgICB9XHJcbiAgICB9ICovXHJcbiAgfSxcclxuICBzaWdudXA6IHtcclxuICAgIG5hbWU6IHtcclxuICAgICAgaWQ6ICdzaWdudXAtbmFtZScsXHJcbiAgICAgIGxhYmVsOiAnTm9tZSBlIGNvZ25vbWUnLFxyXG4gICAgICBpbnB1dFR5cGU6ICd0ZXh0JyxcclxuICAgICAgZXJyb3I6ICdJbCBjYW1wbyBOb21lIGUgQ29nbm9tZSDDqCBvYmJsaWdhdG9yaW8hJyxcclxuICAgICAgcGF5bG9hZDogJ3NpZ251cC1uYW1lJ1xyXG4gICAgfSxcclxuICAgIGVtYWlsOiB7XHJcbiAgICAgIGlkOiAnc2lnbnVwLWVtYWlsJyxcclxuICAgICAgbGFiZWw6ICdFbWFpbCcsXHJcbiAgICAgIGlucHV0VHlwZTogJ2VtYWlsJyxcclxuICAgICAgcGF5bG9hZDogJ3NpZ251cC1lbWFpbCdcclxuICAgIH0sXHJcbiAgICBwYXNzd29yZDoge1xyXG4gICAgICBpZDogJ3NpZ251cC1wd2QnLFxyXG4gICAgICBsYWJlbDogJ1Bhc3N3b3JkJyxcclxuICAgICAgaW5wdXRUeXBlOiAncGFzc3dvcmQnLFxyXG4gICAgICBoaW50OiAnTGEgcGFzc3dvcmQgZGV2ZSBhdmVyZSBmcmEgaSA2IGUgaSAxMCBjYXJhdHRlcmkgZSBjb250ZW5lcmUgYWxtZW5vIHVuYSBsZXR0ZXJhIG1haXVzY29sYScsXHJcbiAgICAgIHNob3c6IHtcclxuICAgICAgICBpY29uOiAnZmFyIGZhLWV5ZScsXHJcbiAgICAgICAgbGFiZWw6ICdNb3N0cmEgcGFzc3dvcmQnLFxyXG4gICAgICAgIHBheWxvYWQ6ICdzaWdudXAtc2hvdy1wd2QnLFxyXG4gICAgICB9LFxyXG4gICAgICBwYXlsb2FkOiAnc2lnbnVwLXB3ZCcsXHJcbiAgICAgIGVycm9yOiAnQXR0ZW56aW9uZSBsZSBwYXNzd29yZCBzb25vIGRpdmVyc2UnLFxyXG4gICAgfSxcclxuICAgIHJlUGFzc3dvcmQ6IHtcclxuICAgICAgaWQ6ICdzaWdudXAtcmVwd2QnLFxyXG4gICAgICBsYWJlbDogJ1JpcGV0aSBQYXNzd29yZCcsXHJcbiAgICAgIGlucHV0VHlwZTogJ3Bhc3N3b3JkJyxcclxuICAgICAgcGF5bG9hZDogJ3NpZ251cC1yZXB3ZCcsXHJcbiAgICAgIGVycm9yOiAnQXR0ZW56aW9uZSBsZSBwYXNzd29yZCBzb25vIGRpdmVyc2UnLFxyXG4gICAgfSxcclxuICAgIHN1Ym1pdDoge1xyXG4gICAgICBsYWJlbDogJ0VudHJhJyxcclxuICAgICAgcGF5bG9hZDogJ3NpZ251cC1zdWJtaXQnLFxyXG4gICAgICBlcnJvcjogJ0Vycm9yZSBkaSBpbnZpbyBkZWkgZGF0aSBhbCBzZXJ2ZXInLFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICBsYWJlbDogJ0hhaSBnacOgIHVuIGFjY291bnQ/JyxcclxuICAgICAgYWN0aW9uOiB7XHJcbiAgICAgICAgbGFiZWw6ICdFbnRyYScsXHJcbiAgICAgICAgcGF5bG9hZDogJ2dvLWxvZ2luJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBmb3Jnb3RQYXNzd29yZDoge1xyXG4gICAgZGVzY3JpcHRpb246ICdJbnNlcmlzY2kgbFxcJ2luZGlyaXp6byBlbWFpbCBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBbGlxdWFtIHZpdGFlIGxhY3VzIGVsZWlmZW5kLCB2ZXN0aWJ1bHVtIG5lcXVlIG5lYywgZGljdHVtIGVyb3MuIE51bmMgdmVsIHJpc3VzIGxlbycsXHJcbiAgICBlbWFpbDoge1xyXG4gICAgICBpZDogJ2ZvcmdvdC1wYXNzd29yZC1lbWFpbCcsXHJcbiAgICAgIGxhYmVsOiAnRW1haWwnLFxyXG4gICAgICBpbnB1dFR5cGU6ICdlbWFpbCcsXHJcbiAgICAgIHBheWxvYWQ6ICdmb3Jnb3RQYXNzd29yZC1lbWFpbCdcclxuICAgIH0sXHJcbiAgICBzdWJtaXQ6IHtcclxuICAgICAgbGFiZWw6ICdSZXNldCBwYXNzd29yZCcsXHJcbiAgICAgIHBheWxvYWQ6ICdmb3Jnb3RQYXNzd29yZC1zdWJtaXQnLFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICBsYWJlbDogJ0VudHJhIG5lbGxhIHBpYXR0YWZvcm1hJyxcclxuICAgICAgYWN0aW9uOiB7XHJcbiAgICAgICAgbGFiZWw6ICdFbnRyYScsXHJcbiAgICAgICAgcGF5bG9hZDogJ2dvLWFwcCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIl19