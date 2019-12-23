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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLm1vY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NpZ251cC9zaWdudXAubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxNQUFNLEtBQU8sV0FBVyxHQUFnQjtJQUN0QyxLQUFLLEVBQUU7UUFDTCxLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUUsbUJBQW1CO1lBQzVCLEVBQUUsRUFBRSxhQUFhO1lBQ2pCLEtBQUssRUFBRSxPQUFPO1lBQ2QsU0FBUyxFQUFFLE9BQU87WUFDbEIsT0FBTyxFQUFFLGFBQWE7U0FDdkI7UUFDRCxRQUFRLEVBQUU7WUFDUixFQUFFLEVBQUUsV0FBVztZQUNmLEtBQUssRUFBRSxVQUFVO1lBQ2pCLFNBQVMsRUFBRSxVQUFVO1lBQ3JCLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsWUFBWTtnQkFDbEIsS0FBSyxFQUFFLGlCQUFpQjtnQkFDeEIsT0FBTyxFQUFFLGdCQUFnQjthQUMxQjtZQUNELE9BQU8sRUFBRSxXQUFXO1NBQ3JCOzs7Ozs7UUFNRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsT0FBTztZQUNkLE9BQU8sRUFBRSxjQUFjO1NBQ3hCO0tBUUY7SUFDRCxNQUFNLEVBQUU7UUFDTixJQUFJLEVBQUU7WUFDSixFQUFFLEVBQUUsYUFBYTtZQUNqQixLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLEtBQUssRUFBRSx5Q0FBeUM7WUFDaEQsT0FBTyxFQUFFLGFBQWE7U0FDdkI7UUFDRCxLQUFLLEVBQUU7WUFDTCxFQUFFLEVBQUUsY0FBYztZQUNsQixLQUFLLEVBQUUsT0FBTztZQUNkLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLE9BQU8sRUFBRSxjQUFjO1NBQ3hCO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsRUFBRSxFQUFFLFlBQVk7WUFDaEIsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLFVBQVU7WUFDckIsSUFBSSxFQUFFLDBGQUEwRjtZQUNoRyxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCLE9BQU8sRUFBRSxpQkFBaUI7YUFDM0I7WUFDRCxPQUFPLEVBQUUsWUFBWTtZQUNyQixLQUFLLEVBQUUscUNBQXFDO1NBQzdDO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsRUFBRSxFQUFFLGNBQWM7WUFDbEIsS0FBSyxFQUFFLGlCQUFpQjtZQUN4QixTQUFTLEVBQUUsVUFBVTtZQUNyQixPQUFPLEVBQUUsY0FBYztZQUN2QixLQUFLLEVBQUUscUNBQXFDO1NBQzdDO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLE9BQU87WUFDZCxPQUFPLEVBQUUsZUFBZTtZQUN4QixLQUFLLEVBQUUsb0NBQW9DO1NBQzVDO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLHFCQUFxQjtZQUM1QixNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLE9BQU87Z0JBQ2QsT0FBTyxFQUFFLFVBQVU7YUFDcEI7U0FDRjtLQUNGO0lBQ0QsY0FBYyxFQUFFO1FBQ2QsV0FBVyxFQUFFLDJLQUEySztRQUN4TCxLQUFLLEVBQUU7WUFDTCxFQUFFLEVBQUUsdUJBQXVCO1lBQzNCLEtBQUssRUFBRSxPQUFPO1lBQ2QsU0FBUyxFQUFFLE9BQU87WUFDbEIsT0FBTyxFQUFFLHNCQUFzQjtTQUNoQztRQUNELE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsT0FBTyxFQUFFLHVCQUF1QjtTQUNqQztRQUNELE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSx5QkFBeUI7WUFDaEMsTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRSxPQUFPO2dCQUNkLE9BQU8sRUFBRSxRQUFRO2FBQ2xCO1NBQ0Y7S0FDRjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVNpZ251cERhdGEgfSBmcm9tICcuL3NpZ251cCc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTlVQX01PQ0s6IElTaWdudXBEYXRhID0ge1xyXG4gIGxvZ2luOiB7XHJcbiAgICBlbWFpbDoge1xyXG4gICAgICBjbGFzc2VzOiAnZW1haWwtZXh0cmEtY2xhc3MnLFxyXG4gICAgICBpZDogJ2xvZ2luLWVtYWlsJyxcclxuICAgICAgbGFiZWw6ICdFbWFpbCcsXHJcbiAgICAgIGlucHV0VHlwZTogJ2VtYWlsJyxcclxuICAgICAgcGF5bG9hZDogJ2xvZ2luLWVtYWlsJ1xyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkOiB7XHJcbiAgICAgIGlkOiAnbG9naW4tcHdkJyxcclxuICAgICAgbGFiZWw6ICdQYXNzd29yZCcsXHJcbiAgICAgIGlucHV0VHlwZTogJ3Bhc3N3b3JkJyxcclxuICAgICAgc2hvdzoge1xyXG4gICAgICAgIGljb246ICdmYXIgZmEtZXllJyxcclxuICAgICAgICBsYWJlbDogJ01vc3RyYSBwYXNzd29yZCcsXHJcbiAgICAgICAgcGF5bG9hZDogJ2xvZ2luLXNob3ctcHdkJyxcclxuICAgICAgfSxcclxuICAgICAgcGF5bG9hZDogJ2xvZ2luLXB3ZCdcclxuICAgIH0sXHJcbiAgICAvKiBmb3Jnb3RQYXNzd29yZDoge1xyXG4gICAgICB0aXRsZTogJ3ZhaSBhIHJlY3VwZXJvIHBhc3N3b3JkJyxcclxuICAgICAgbGFiZWw6ICdQYXNzd29yZCBkaW1lbnRpY2F0YT8nLFxyXG4gICAgICBwYXlsb2FkOiAnZm9yZ290LXB3ZCcsXHJcbiAgICB9LCAqL1xyXG4gICAgc3VibWl0OiB7XHJcbiAgICAgIGxhYmVsOiAnRW50cmEnLFxyXG4gICAgICBwYXlsb2FkOiAnbG9naW4tc3VibWl0JyxcclxuICAgIH0sXHJcbiAgICAvKiBmb290ZXI6IHtcclxuICAgICAgbGFiZWw6ICdOb24gaGFpIHVuIGFjY291bnQ/JyxcclxuICAgICAgYWN0aW9uOiB7XHJcbiAgICAgICAgbGFiZWw6ICdSZWdpc3RyYXRpJyxcclxuICAgICAgICBwYXlsb2FkOiAnZ28tc2lnbnVwJ1xyXG4gICAgICB9XHJcbiAgICB9ICovXHJcbiAgfSxcclxuICBzaWdudXA6IHtcclxuICAgIG5hbWU6IHtcclxuICAgICAgaWQ6ICdzaWdudXAtbmFtZScsXHJcbiAgICAgIGxhYmVsOiAnTm9tZSBlIGNvZ25vbWUnLFxyXG4gICAgICBpbnB1dFR5cGU6ICd0ZXh0JyxcclxuICAgICAgZXJyb3I6ICdJbCBjYW1wbyBOb21lIGUgQ29nbm9tZSDDqCBvYmJsaWdhdG9yaW8hJyxcclxuICAgICAgcGF5bG9hZDogJ3NpZ251cC1uYW1lJ1xyXG4gICAgfSxcclxuICAgIGVtYWlsOiB7XHJcbiAgICAgIGlkOiAnc2lnbnVwLWVtYWlsJyxcclxuICAgICAgbGFiZWw6ICdFbWFpbCcsXHJcbiAgICAgIGlucHV0VHlwZTogJ2VtYWlsJyxcclxuICAgICAgcGF5bG9hZDogJ3NpZ251cC1lbWFpbCdcclxuICAgIH0sXHJcbiAgICBwYXNzd29yZDoge1xyXG4gICAgICBpZDogJ3NpZ251cC1wd2QnLFxyXG4gICAgICBsYWJlbDogJ1Bhc3N3b3JkJyxcclxuICAgICAgaW5wdXRUeXBlOiAncGFzc3dvcmQnLFxyXG4gICAgICBoaW50OiAnTGEgcGFzc3dvcmQgZGV2ZSBhdmVyZSBmcmEgaSA2IGUgaSAxMCBjYXJhdHRlcmkgZSBjb250ZW5lcmUgYWxtZW5vIHVuYSBsZXR0ZXJhIG1haXVzY29sYScsXHJcbiAgICAgIHNob3c6IHtcclxuICAgICAgICBpY29uOiAnZmFyIGZhLWV5ZScsXHJcbiAgICAgICAgbGFiZWw6ICdNb3N0cmEgcGFzc3dvcmQnLFxyXG4gICAgICAgIHBheWxvYWQ6ICdzaWdudXAtc2hvdy1wd2QnLFxyXG4gICAgICB9LFxyXG4gICAgICBwYXlsb2FkOiAnc2lnbnVwLXB3ZCcsXHJcbiAgICAgIGVycm9yOiAnQXR0ZW56aW9uZSBsZSBwYXNzd29yZCBzb25vIGRpdmVyc2UnLFxyXG4gICAgfSxcclxuICAgIHJlUGFzc3dvcmQ6IHtcclxuICAgICAgaWQ6ICdzaWdudXAtcmVwd2QnLFxyXG4gICAgICBsYWJlbDogJ1JpcGV0aSBQYXNzd29yZCcsXHJcbiAgICAgIGlucHV0VHlwZTogJ3Bhc3N3b3JkJyxcclxuICAgICAgcGF5bG9hZDogJ3NpZ251cC1yZXB3ZCcsXHJcbiAgICAgIGVycm9yOiAnQXR0ZW56aW9uZSBsZSBwYXNzd29yZCBzb25vIGRpdmVyc2UnLFxyXG4gICAgfSxcclxuICAgIHN1Ym1pdDoge1xyXG4gICAgICBsYWJlbDogJ0VudHJhJyxcclxuICAgICAgcGF5bG9hZDogJ3NpZ251cC1zdWJtaXQnLFxyXG4gICAgICBlcnJvcjogJ0Vycm9yZSBkaSBpbnZpbyBkZWkgZGF0aSBhbCBzZXJ2ZXInLFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICBsYWJlbDogJ0hhaSBnacOgIHVuIGFjY291bnQ/JyxcclxuICAgICAgYWN0aW9uOiB7XHJcbiAgICAgICAgbGFiZWw6ICdFbnRyYScsXHJcbiAgICAgICAgcGF5bG9hZDogJ2dvLWxvZ2luJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBmb3Jnb3RQYXNzd29yZDoge1xyXG4gICAgZGVzY3JpcHRpb246ICdJbnNlcmlzY2kgbFxcJ2luZGlyaXp6byBlbWFpbCBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBbGlxdWFtIHZpdGFlIGxhY3VzIGVsZWlmZW5kLCB2ZXN0aWJ1bHVtIG5lcXVlIG5lYywgZGljdHVtIGVyb3MuIE51bmMgdmVsIHJpc3VzIGxlbycsXHJcbiAgICBlbWFpbDoge1xyXG4gICAgICBpZDogJ2ZvcmdvdC1wYXNzd29yZC1lbWFpbCcsXHJcbiAgICAgIGxhYmVsOiAnRW1haWwnLFxyXG4gICAgICBpbnB1dFR5cGU6ICdlbWFpbCcsXHJcbiAgICAgIHBheWxvYWQ6ICdmb3Jnb3RQYXNzd29yZC1lbWFpbCdcclxuICAgIH0sXHJcbiAgICBzdWJtaXQ6IHtcclxuICAgICAgbGFiZWw6ICdSZXNldCBwYXNzd29yZCcsXHJcbiAgICAgIHBheWxvYWQ6ICdmb3Jnb3RQYXNzd29yZC1zdWJtaXQnLFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICBsYWJlbDogJ0VudHJhIG5lbGxhIHBpYXR0YWZvcm1hJyxcclxuICAgICAgYWN0aW9uOiB7XHJcbiAgICAgICAgbGFiZWw6ICdFbnRyYScsXHJcbiAgICAgICAgcGF5bG9hZDogJ2dvLWFwcCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSJdfQ==