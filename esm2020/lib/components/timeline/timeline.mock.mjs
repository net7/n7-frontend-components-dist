export const TIMELINE_MOCK = {
    containerID: 'demo-timeline',
    libOptions: {
        height: '500px',
        locale: 'it_IT',
        cluster: {
            // contentTemplate: '{count}',
            // fitOnDoubleClick: true,
            clusterCriteria: (f, s) => f.content.charAt(0) === s.content.charAt(0)
        },
        showTooltips: false,
        tooltip: {
            followMouse: false,
            template: (data, element) => `<div class="tooltip">${element.content}</div>`
        },
        width: '100%',
        minHeight: '350px',
        maxHeight: '800px',
        // zoomMax: 31557600000, // one year
        zoomFriction: 8
    },
    dataSet: [
        {
            id: 788,
            content: 'Luigi Capuana, Fiabe e favole classiche',
            start: '01-01-1882',
            end: '01-01-1913'
        },
        {
            id: 786,
            content: 'Fernan Caballero, Cuentos, adivinanzas y refranes populares',
            start: '01-01-1921'
        },
        {
            id: 784,
            content: 'Charles Perrault, I racconti di mamma oca',
            start: '01-01-1697'
        },
        {
            id: 782,
            content: 'Fratelli Grimm, Fiabe del focolare',
            start: '01-01-1812'
        },
        {
            id: 776,
            content: 'Giovanni Francesco Straparola, Le piacevoli notti',
            start: '01-01-1550'
        },
        {
            id: 773,
            content: 'Autore ignoto, Novellino',
            start: '01-01-1201',
            end: '01-01-1300'
        },
        {
            id: 770,
            content: 'Italo Calvino, Fiabe Italiane',
            start: '01-01-1956'
        },
        {
            id: 764,
            content: 'Giovan Battista Basile, Lo Cunto de li Cunti',
            start: '01-01-1634',
            end: '01-01-1636'
        },
        {
            id: 756,
            content: 'Hans Christian Andersen, Fiabe',
            start: '01-01-1843'
        },
        {
            id: 752,
            content: 'Fedro, Fabulae',
            start: '01-01-1',
            end: '01-01-100'
        },
        {
            id: 717,
            content: 'Esopo, Favole (Aἰσώπου μῦθοι)',
            start: '-01-01-600',
            end: '-01-01-501'
        },
        {
            id: 710,
            content: 'Elsie Spicer Eels, Fairy tales from Brazil',
            start: '01-01-1918'
        },
        {
            id: 700,
            content: 'Guido Gozzano, Fiabe per “Il Corriere dei Piccoli”',
            start: '01-01-1909',
            end: '01-01-1914'
        },
        {
            id: 694,
            content: 'Aleksandr Nikolaevič Afanas’ev, Favole popolari russe (Narodnye russkie skazki)',
            start: '01-01-1855',
            end: '01-01-1864'
        },
        {
            id: 689,
            content: 'Autori sconosciuti, Le mille e una notte (ألف ليلة وليلة‎)',
            start: '01-01-1001',
            end: '01-01-1100'
        },
        {
            id: 687,
            content: 'Gianni Rodari, Favole al telefono',
            start: '01-01-1962'
        },
        {
            id: 681,
            content: 'Giuseppe Pitrè, Fiabe, novelle e racconti popolari siciliani',
            start: '01-01-1875'
        },
        {
            id: 673,
            content: 'Verità e Menzogna',
            start: '-01-01-1300',
            end: '-01-01-1201'
        },
        {
            id: 671,
            content: 'Il principe predestinato',
            start: '-01-01-1300',
            end: '-01-01-1201'
        },
        {
            id: 669,
            content: 'La Cenerentola Egiziana',
            start: '-01-01-1300',
            end: '-01-01-1201'
        }
    ],
    _setInstance: (timeline) => timeline
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUubW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2R2LWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy90aW1lbGluZS90aW1lbGluZS5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBaUI7SUFDekMsV0FBVyxFQUFFLGVBQWU7SUFDNUIsVUFBVSxFQUFFO1FBQ1YsTUFBTSxFQUFFLE9BQU87UUFDZixNQUFNLEVBQUUsT0FBTztRQUNmLE9BQU8sRUFBRTtZQUNQLDhCQUE4QjtZQUM5QiwwQkFBMEI7WUFDMUIsZUFBZSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3ZFO1FBQ0QsWUFBWSxFQUFFLEtBQUs7UUFDbkIsT0FBTyxFQUFFO1lBQ1AsV0FBVyxFQUFFLEtBQUs7WUFDbEIsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsd0JBQXdCLE9BQU8sQ0FBQyxPQUFPLFFBQVE7U0FDN0U7UUFDRCxLQUFLLEVBQUUsTUFBTTtRQUNiLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLG9DQUFvQztRQUNwQyxZQUFZLEVBQUUsQ0FBQztLQUNoQjtJQUNELE9BQU8sRUFBRTtRQUNQO1lBQ0UsRUFBRSxFQUFFLEdBQUc7WUFDUCxPQUFPLEVBQUUseUNBQXlDO1lBQ2xELEtBQUssRUFBRSxZQUFZO1lBQ25CLEdBQUcsRUFBRSxZQUFZO1NBQ2xCO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsR0FBRztZQUNQLE9BQU8sRUFBRSw2REFBNkQ7WUFDdEUsS0FBSyxFQUFFLFlBQVk7U0FDcEI7UUFDRDtZQUNFLEVBQUUsRUFBRSxHQUFHO1lBQ1AsT0FBTyxFQUFFLDJDQUEyQztZQUNwRCxLQUFLLEVBQUUsWUFBWTtTQUNwQjtRQUNEO1lBQ0UsRUFBRSxFQUFFLEdBQUc7WUFDUCxPQUFPLEVBQUUsb0NBQW9DO1lBQzdDLEtBQUssRUFBRSxZQUFZO1NBQ3BCO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsR0FBRztZQUNQLE9BQU8sRUFBRSxtREFBbUQ7WUFDNUQsS0FBSyxFQUFFLFlBQVk7U0FDcEI7UUFDRDtZQUNFLEVBQUUsRUFBRSxHQUFHO1lBQ1AsT0FBTyxFQUFFLDBCQUEwQjtZQUNuQyxLQUFLLEVBQUUsWUFBWTtZQUNuQixHQUFHLEVBQUUsWUFBWTtTQUNsQjtRQUNEO1lBQ0UsRUFBRSxFQUFFLEdBQUc7WUFDUCxPQUFPLEVBQUUsK0JBQStCO1lBQ3hDLEtBQUssRUFBRSxZQUFZO1NBQ3BCO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsR0FBRztZQUNQLE9BQU8sRUFBRSw4Q0FBOEM7WUFDdkQsS0FBSyxFQUFFLFlBQVk7WUFDbkIsR0FBRyxFQUFFLFlBQVk7U0FDbEI7UUFDRDtZQUNFLEVBQUUsRUFBRSxHQUFHO1lBQ1AsT0FBTyxFQUFFLGdDQUFnQztZQUN6QyxLQUFLLEVBQUUsWUFBWTtTQUNwQjtRQUNEO1lBQ0UsRUFBRSxFQUFFLEdBQUc7WUFDUCxPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLEtBQUssRUFBRSxTQUFTO1lBQ2hCLEdBQUcsRUFBRSxXQUFXO1NBQ2pCO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsR0FBRztZQUNQLE9BQU8sRUFBRSwrQkFBK0I7WUFDeEMsS0FBSyxFQUFFLFlBQVk7WUFDbkIsR0FBRyxFQUFFLFlBQVk7U0FDbEI7UUFDRDtZQUNFLEVBQUUsRUFBRSxHQUFHO1lBQ1AsT0FBTyxFQUFFLDRDQUE0QztZQUNyRCxLQUFLLEVBQUUsWUFBWTtTQUNwQjtRQUNEO1lBQ0UsRUFBRSxFQUFFLEdBQUc7WUFDUCxPQUFPLEVBQUUsb0RBQW9EO1lBQzdELEtBQUssRUFBRSxZQUFZO1lBQ25CLEdBQUcsRUFBRSxZQUFZO1NBQ2xCO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsR0FBRztZQUNQLE9BQU8sRUFBRSxpRkFBaUY7WUFDMUYsS0FBSyxFQUFFLFlBQVk7WUFDbkIsR0FBRyxFQUFFLFlBQVk7U0FDbEI7UUFDRDtZQUNFLEVBQUUsRUFBRSxHQUFHO1lBQ1AsT0FBTyxFQUFFLDREQUE0RDtZQUNyRSxLQUFLLEVBQUUsWUFBWTtZQUNuQixHQUFHLEVBQUUsWUFBWTtTQUNsQjtRQUNEO1lBQ0UsRUFBRSxFQUFFLEdBQUc7WUFDUCxPQUFPLEVBQUUsbUNBQW1DO1lBQzVDLEtBQUssRUFBRSxZQUFZO1NBQ3BCO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsR0FBRztZQUNQLE9BQU8sRUFBRSw4REFBOEQ7WUFDdkUsS0FBSyxFQUFFLFlBQVk7U0FDcEI7UUFDRDtZQUNFLEVBQUUsRUFBRSxHQUFHO1lBQ1AsT0FBTyxFQUFFLG1CQUFtQjtZQUM1QixLQUFLLEVBQUUsYUFBYTtZQUNwQixHQUFHLEVBQUUsYUFBYTtTQUNuQjtRQUNEO1lBQ0UsRUFBRSxFQUFFLEdBQUc7WUFDUCxPQUFPLEVBQUUsMEJBQTBCO1lBQ25DLEtBQUssRUFBRSxhQUFhO1lBQ3BCLEdBQUcsRUFBRSxhQUFhO1NBQ25CO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsR0FBRztZQUNQLE9BQU8sRUFBRSx5QkFBeUI7WUFDbEMsS0FBSyxFQUFFLGFBQWE7WUFDcEIsR0FBRyxFQUFFLGFBQWE7U0FDbkI7S0FDRjtJQUNELFlBQVksRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUTtDQUNyQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGltZWxpbmVEYXRhIH0gZnJvbSAnLi90aW1lbGluZSc7XHJcblxyXG5leHBvcnQgY29uc3QgVElNRUxJTkVfTU9DSzogVGltZWxpbmVEYXRhID0ge1xyXG4gIGNvbnRhaW5lcklEOiAnZGVtby10aW1lbGluZScsXHJcbiAgbGliT3B0aW9uczoge1xyXG4gICAgaGVpZ2h0OiAnNTAwcHgnLFxyXG4gICAgbG9jYWxlOiAnaXRfSVQnLFxyXG4gICAgY2x1c3Rlcjoge1xyXG4gICAgICAvLyBjb250ZW50VGVtcGxhdGU6ICd7Y291bnR9JyxcclxuICAgICAgLy8gZml0T25Eb3VibGVDbGljazogdHJ1ZSxcclxuICAgICAgY2x1c3RlckNyaXRlcmlhOiAoZiwgcykgPT4gZi5jb250ZW50LmNoYXJBdCgwKSA9PT0gcy5jb250ZW50LmNoYXJBdCgwKVxyXG4gICAgfSxcclxuICAgIHNob3dUb29sdGlwczogZmFsc2UsXHJcbiAgICB0b29sdGlwOiB7XHJcbiAgICAgIGZvbGxvd01vdXNlOiBmYWxzZSxcclxuICAgICAgdGVtcGxhdGU6IChkYXRhLCBlbGVtZW50KSA9PiBgPGRpdiBjbGFzcz1cInRvb2x0aXBcIj4ke2VsZW1lbnQuY29udGVudH08L2Rpdj5gXHJcbiAgICB9LFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIG1pbkhlaWdodDogJzM1MHB4JyxcclxuICAgIG1heEhlaWdodDogJzgwMHB4JyxcclxuICAgIC8vIHpvb21NYXg6IDMxNTU3NjAwMDAwLCAvLyBvbmUgeWVhclxyXG4gICAgem9vbUZyaWN0aW9uOiA4XHJcbiAgfSxcclxuICBkYXRhU2V0OiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiA3ODgsXHJcbiAgICAgIGNvbnRlbnQ6ICdMdWlnaSBDYXB1YW5hLCBGaWFiZSBlIGZhdm9sZSBjbGFzc2ljaGUnLFxyXG4gICAgICBzdGFydDogJzAxLTAxLTE4ODInLFxyXG4gICAgICBlbmQ6ICcwMS0wMS0xOTEzJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDc4NixcclxuICAgICAgY29udGVudDogJ0Zlcm5hbiBDYWJhbGxlcm8sIEN1ZW50b3MsIGFkaXZpbmFuemFzIHkgcmVmcmFuZXMgcG9wdWxhcmVzJyxcclxuICAgICAgc3RhcnQ6ICcwMS0wMS0xOTIxJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDc4NCxcclxuICAgICAgY29udGVudDogJ0NoYXJsZXMgUGVycmF1bHQsIEkgcmFjY29udGkgZGkgbWFtbWEgb2NhJyxcclxuICAgICAgc3RhcnQ6ICcwMS0wMS0xNjk3J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDc4MixcclxuICAgICAgY29udGVudDogJ0ZyYXRlbGxpIEdyaW1tLCBGaWFiZSBkZWwgZm9jb2xhcmUnLFxyXG4gICAgICBzdGFydDogJzAxLTAxLTE4MTInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNzc2LFxyXG4gICAgICBjb250ZW50OiAnR2lvdmFubmkgRnJhbmNlc2NvIFN0cmFwYXJvbGEsIExlIHBpYWNldm9saSBub3R0aScsXHJcbiAgICAgIHN0YXJ0OiAnMDEtMDEtMTU1MCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA3NzMsXHJcbiAgICAgIGNvbnRlbnQ6ICdBdXRvcmUgaWdub3RvLCBOb3ZlbGxpbm8nLFxyXG4gICAgICBzdGFydDogJzAxLTAxLTEyMDEnLFxyXG4gICAgICBlbmQ6ICcwMS0wMS0xMzAwJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDc3MCxcclxuICAgICAgY29udGVudDogJ0l0YWxvIENhbHZpbm8sIEZpYWJlIEl0YWxpYW5lJyxcclxuICAgICAgc3RhcnQ6ICcwMS0wMS0xOTU2J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDc2NCxcclxuICAgICAgY29udGVudDogJ0dpb3ZhbiBCYXR0aXN0YSBCYXNpbGUsIExvIEN1bnRvIGRlIGxpIEN1bnRpJyxcclxuICAgICAgc3RhcnQ6ICcwMS0wMS0xNjM0JyxcclxuICAgICAgZW5kOiAnMDEtMDEtMTYzNidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA3NTYsXHJcbiAgICAgIGNvbnRlbnQ6ICdIYW5zIENocmlzdGlhbiBBbmRlcnNlbiwgRmlhYmUnLFxyXG4gICAgICBzdGFydDogJzAxLTAxLTE4NDMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNzUyLFxyXG4gICAgICBjb250ZW50OiAnRmVkcm8sIEZhYnVsYWUnLFxyXG4gICAgICBzdGFydDogJzAxLTAxLTEnLFxyXG4gICAgICBlbmQ6ICcwMS0wMS0xMDAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNzE3LFxyXG4gICAgICBjb250ZW50OiAnRXNvcG8sIEZhdm9sZSAoQeG8sM+Dz47PgM6/z4Ugzrzhv6bOuM6/zrkpJyxcclxuICAgICAgc3RhcnQ6ICctMDEtMDEtNjAwJyxcclxuICAgICAgZW5kOiAnLTAxLTAxLTUwMSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA3MTAsXHJcbiAgICAgIGNvbnRlbnQ6ICdFbHNpZSBTcGljZXIgRWVscywgRmFpcnkgdGFsZXMgZnJvbSBCcmF6aWwnLFxyXG4gICAgICBzdGFydDogJzAxLTAxLTE5MTgnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNzAwLFxyXG4gICAgICBjb250ZW50OiAnR3VpZG8gR296emFubywgRmlhYmUgcGVyIOKAnElsIENvcnJpZXJlIGRlaSBQaWNjb2xp4oCdJyxcclxuICAgICAgc3RhcnQ6ICcwMS0wMS0xOTA5JyxcclxuICAgICAgZW5kOiAnMDEtMDEtMTkxNCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA2OTQsXHJcbiAgICAgIGNvbnRlbnQ6ICdBbGVrc2FuZHIgTmlrb2xhZXZpxI0gQWZhbmFz4oCZZXYsIEZhdm9sZSBwb3BvbGFyaSBydXNzZSAoTmFyb2RueWUgcnVzc2tpZSBza2F6a2kpJyxcclxuICAgICAgc3RhcnQ6ICcwMS0wMS0xODU1JyxcclxuICAgICAgZW5kOiAnMDEtMDEtMTg2NCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA2ODksXHJcbiAgICAgIGNvbnRlbnQ6ICdBdXRvcmkgc2Nvbm9zY2l1dGksIExlIG1pbGxlIGUgdW5hIG5vdHRlICjYo9mE2YEg2YTZitmE2Kkg2YjZhNmK2YTYqeKAjiknLFxyXG4gICAgICBzdGFydDogJzAxLTAxLTEwMDEnLFxyXG4gICAgICBlbmQ6ICcwMS0wMS0xMTAwJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDY4NyxcclxuICAgICAgY29udGVudDogJ0dpYW5uaSBSb2RhcmksIEZhdm9sZSBhbCB0ZWxlZm9ubycsXHJcbiAgICAgIHN0YXJ0OiAnMDEtMDEtMTk2MidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA2ODEsXHJcbiAgICAgIGNvbnRlbnQ6ICdHaXVzZXBwZSBQaXRyw6gsIEZpYWJlLCBub3ZlbGxlIGUgcmFjY29udGkgcG9wb2xhcmkgc2ljaWxpYW5pJyxcclxuICAgICAgc3RhcnQ6ICcwMS0wMS0xODc1J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDY3MyxcclxuICAgICAgY29udGVudDogJ1Zlcml0w6AgZSBNZW56b2duYScsXHJcbiAgICAgIHN0YXJ0OiAnLTAxLTAxLTEzMDAnLFxyXG4gICAgICBlbmQ6ICctMDEtMDEtMTIwMSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA2NzEsXHJcbiAgICAgIGNvbnRlbnQ6ICdJbCBwcmluY2lwZSBwcmVkZXN0aW5hdG8nLFxyXG4gICAgICBzdGFydDogJy0wMS0wMS0xMzAwJyxcclxuICAgICAgZW5kOiAnLTAxLTAxLTEyMDEnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNjY5LFxyXG4gICAgICBjb250ZW50OiAnTGEgQ2VuZXJlbnRvbGEgRWdpemlhbmEnLFxyXG4gICAgICBzdGFydDogJy0wMS0wMS0xMzAwJyxcclxuICAgICAgZW5kOiAnLTAxLTAxLTEyMDEnXHJcbiAgICB9XHJcbiAgXSxcclxuICBfc2V0SW5zdGFuY2U6ICh0aW1lbGluZSkgPT4gdGltZWxpbmVcclxufTtcclxuIl19