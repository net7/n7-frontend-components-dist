/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/timeline/timeline.mock.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0 = /**
 * @param {?} f
 * @param {?} s
 * @return {?}
 */
function (f, s) { return f.content.charAt(0) === s.content.charAt(0); }, ɵ1 = /**
 * @param {?} data
 * @param {?} element
 * @return {?}
 */
function (data, element) { return "<div class=\"tooltip\">" + element.title + "</div>"; }, ɵ2 = /**
 * @param {?} timeline
 * @return {?}
 */
function (timeline) { return timeline; };
/** @type {?} */
export var TIMELINE_MOCK = {
    containerID: 'demo-timeline',
    libOptions: {
        height: '500px',
        locale: 'it_IT',
        cluster: {
            // titleTemplate: '{count}',
            // fitOnDoubleClick: true,
            clusterCriteria: (ɵ0)
        },
        showTooltips: false,
        tooltip: {
            followMouse: false,
            template: (ɵ1)
        },
        width: '100%',
        minHeight: '350px',
        maxHeight: '800px',
        // zoomMax: 31557600000, // one year
        zoomFriction: 8
    },
    dataSet: [
        {
            id: 1,
            content: 'item 1',
            start: '2014-04-20'
        },
        {
            id: 2,
            content: 'item 2',
            start: '2014-04-14'
        },
        {
            id: 3,
            content: 'item 3',
            start: '2014-04-18'
        },
        {
            id: 4,
            content: 'item 4',
            start: '2014-04-16',
            end: '2014-04-19'
        },
        {
            id: 5,
            content: 'item 5',
            start: '2014-04-25'
        },
        {
            id: 6,
            content: 'item 6',
            start: '2014-04-27',
            type: 'point'
        }
    ],
    _setInstance: (ɵ2)
};
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUubW9jay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGltZWxpbmUvdGltZWxpbmUubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBVXVCLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUEzQyxDQUEyQzs7Ozs7QUFLNUQsVUFBQyxJQUFJLEVBQUUsT0FBTyxJQUFLLE9BQUEsNEJBQXdCLE9BQU8sQ0FBQyxLQUFLLFdBQVEsRUFBN0MsQ0FBNkM7Ozs7QUEwQ2hFLFVBQUMsUUFBUSxJQUFLLE9BQUEsUUFBUSxFQUFSLENBQVE7O0FBdkR0QyxNQUFNLEtBQU8sYUFBYSxHQUFpQjtJQUN6QyxXQUFXLEVBQUUsZUFBZTtJQUM1QixVQUFVLEVBQUU7UUFDVixNQUFNLEVBQUUsT0FBTztRQUNmLE1BQU0sRUFBRSxPQUFPO1FBQ2YsT0FBTyxFQUFFOzs7WUFHUCxlQUFlLE1BQXVEO1NBQ3ZFO1FBQ0QsWUFBWSxFQUFFLEtBQUs7UUFDbkIsT0FBTyxFQUFFO1lBQ1AsV0FBVyxFQUFFLEtBQUs7WUFDbEIsUUFBUSxNQUFrRTtTQUMzRTtRQUNELEtBQUssRUFBRSxNQUFNO1FBQ2IsU0FBUyxFQUFFLE9BQU87UUFDbEIsU0FBUyxFQUFFLE9BQU87O1FBRWxCLFlBQVksRUFBRSxDQUFDO0tBQ2hCO0lBQ0QsT0FBTyxFQUFFO1FBQ1A7WUFDRSxFQUFFLEVBQUUsQ0FBQztZQUNMLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLEtBQUssRUFBRSxZQUFZO1NBQ3BCO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsQ0FBQztZQUNMLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLEtBQUssRUFBRSxZQUFZO1NBQ3BCO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsQ0FBQztZQUNMLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLEtBQUssRUFBRSxZQUFZO1NBQ3BCO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsQ0FBQztZQUNMLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLEtBQUssRUFBRSxZQUFZO1lBQ25CLEdBQUcsRUFBRSxZQUFZO1NBQ2xCO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsQ0FBQztZQUNMLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLEtBQUssRUFBRSxZQUFZO1NBQ3BCO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsQ0FBQztZQUNMLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLEtBQUssRUFBRSxZQUFZO1lBQ25CLElBQUksRUFBRSxPQUFPO1NBQ2Q7S0FDRjtJQUNELFlBQVksTUFBd0I7Q0FDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaW1lbGluZURhdGEgfSBmcm9tICcuL3RpbWVsaW5lJztcblxuZXhwb3J0IGNvbnN0IFRJTUVMSU5FX01PQ0s6IFRpbWVsaW5lRGF0YSA9IHtcbiAgY29udGFpbmVySUQ6ICdkZW1vLXRpbWVsaW5lJyxcbiAgbGliT3B0aW9uczoge1xuICAgIGhlaWdodDogJzUwMHB4JyxcbiAgICBsb2NhbGU6ICdpdF9JVCcsXG4gICAgY2x1c3Rlcjoge1xuICAgICAgLy8gdGl0bGVUZW1wbGF0ZTogJ3tjb3VudH0nLFxuICAgICAgLy8gZml0T25Eb3VibGVDbGljazogdHJ1ZSxcbiAgICAgIGNsdXN0ZXJDcml0ZXJpYTogKGYsIHMpID0+IGYuY29udGVudC5jaGFyQXQoMCkgPT09IHMuY29udGVudC5jaGFyQXQoMClcbiAgICB9LFxuICAgIHNob3dUb29sdGlwczogZmFsc2UsXG4gICAgdG9vbHRpcDoge1xuICAgICAgZm9sbG93TW91c2U6IGZhbHNlLFxuICAgICAgdGVtcGxhdGU6IChkYXRhLCBlbGVtZW50KSA9PiBgPGRpdiBjbGFzcz1cInRvb2x0aXBcIj4ke2VsZW1lbnQudGl0bGV9PC9kaXY+YFxuICAgIH0sXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtaW5IZWlnaHQ6ICczNTBweCcsXG4gICAgbWF4SGVpZ2h0OiAnODAwcHgnLFxuICAgIC8vIHpvb21NYXg6IDMxNTU3NjAwMDAwLCAvLyBvbmUgeWVhclxuICAgIHpvb21GcmljdGlvbjogOFxuICB9LFxuICBkYXRhU2V0OiBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBjb250ZW50OiAnaXRlbSAxJyxcbiAgICAgIHN0YXJ0OiAnMjAxNC0wNC0yMCdcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgY29udGVudDogJ2l0ZW0gMicsXG4gICAgICBzdGFydDogJzIwMTQtMDQtMTQnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMyxcbiAgICAgIGNvbnRlbnQ6ICdpdGVtIDMnLFxuICAgICAgc3RhcnQ6ICcyMDE0LTA0LTE4J1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDQsXG4gICAgICBjb250ZW50OiAnaXRlbSA0JyxcbiAgICAgIHN0YXJ0OiAnMjAxNC0wNC0xNicsXG4gICAgICBlbmQ6ICcyMDE0LTA0LTE5J1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDUsXG4gICAgICBjb250ZW50OiAnaXRlbSA1JyxcbiAgICAgIHN0YXJ0OiAnMjAxNC0wNC0yNSdcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA2LFxuICAgICAgY29udGVudDogJ2l0ZW0gNicsXG4gICAgICBzdGFydDogJzIwMTQtMDQtMjcnLFxuICAgICAgdHlwZTogJ3BvaW50J1xuICAgIH1cbiAgXSxcbiAgX3NldEluc3RhbmNlOiAodGltZWxpbmUpID0+IHRpbWVsaW5lXG59O1xuIl19