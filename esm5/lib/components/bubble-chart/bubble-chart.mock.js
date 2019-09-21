/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var cWidth = 1000;
/** @type {?} */
var cHeight = 500;
var ɵ0 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.x; }, ɵ1 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.y - (d.radius / 9); }, ɵ2 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.radius / 5; }, ɵ3 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.x; }, ɵ4 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.y + (d.radius / 9); }, ɵ5 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.radius / 6; }, ɵ6 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.x; }, ɵ7 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.y - (d.radius / 9); }, ɵ8 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.radius / 5; }, ɵ9 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.x; }, ɵ10 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.y + (d.radius / 9); }, ɵ11 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.radius / 5; }, ɵ12 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.x; }, ɵ13 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.y - (d.radius / 9); }, ɵ14 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.radius / 5; }, ɵ15 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.x; }, ɵ16 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.y + (d.radius / 9); }, ɵ17 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.radius / 5; }, ɵ18 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.x; }, ɵ19 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.y - (d.radius / 9); }, ɵ20 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.radius / 5; }, ɵ21 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.x; }, ɵ22 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.y + (d.radius / 9); }, ɵ23 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.radius / 5; }, ɵ24 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.x; }, ɵ25 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.y - (d.radius / 9); }, ɵ26 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.radius / 5; }, ɵ27 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.x; }, ɵ28 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.y + (d.radius / 9); }, ɵ29 = /**
 * @param {?} d
 * @return {?}
 */
function (d) { return d.radius / 5; };
/** @type {?} */
var dataSource = {
    containerId: "bubbleChartContainer",
    containerWidth: cWidth,
    containerHeight: cHeight,
    isForceSimulationEnabled: true,
    bubblesData: [
        {
            "id": "mlnBubble",
            "texts": [
                {
                    id: "mln",
                    label: "Milano",
                    x_function: (ɵ0),
                    y_function: (ɵ1),
                    "user_select": "none",
                    fontSize_function: (ɵ2),
                    color: "green",
                    "classes": "monospace-text"
                },
                {
                    id: "mlnValue",
                    label: "9.746",
                    x_function: (ɵ3),
                    y_function: (ɵ4),
                    "user_select": "none",
                    fontSize_function: (ɵ5),
                    color: "white",
                    "classes": ""
                }
            ],
            x: cWidth / 2 + 50,
            y: cHeight / 2 + 50,
            "radius": 9746 / 75,
            color: "#79ad87",
            selected: true,
            selectable: true,
            payload: {
                id: "mlnBubble"
            }
        },
        {
            "id": "naplBubble",
            "texts": [
                {
                    id: "nap",
                    label: "Napoli",
                    x_function: (ɵ6),
                    y_function: (ɵ7),
                    "user_select": "none",
                    fontSize_function: (ɵ8),
                    color: "white",
                    "classes": ""
                },
                {
                    id: "napValue",
                    label: "3.981",
                    x_function: (ɵ9),
                    y_function: (ɵ10),
                    "user_select": "none",
                    fontSize_function: (ɵ11),
                    color: "red",
                    "classes": ""
                }
            ],
            x: cWidth - 120,
            y: cHeight - 120,
            "radius": 3981 / 45,
            color: "#d19b13",
            selected: false,
            selectable: true,
            payload: {
                id: "naplBubble"
            }
        },
        {
            "id": "romBubble",
            "texts": [
                {
                    id: "rom",
                    label: "Roma",
                    x_function: (ɵ12),
                    y_function: (ɵ13),
                    "user_select": "none",
                    fontSize_function: (ɵ14),
                    color: "white",
                    "classes": ""
                },
                {
                    id: "romValue",
                    label: "4.523",
                    x_function: (ɵ15),
                    y_function: (ɵ16),
                    "user_select": "none",
                    fontSize_function: (ɵ17),
                    color: "red",
                    "classes": ""
                }
            ],
            x: cWidth - (cWidth / 4.5),
            y: (cHeight / 8),
            "radius": 4523 / 30,
            selected: true,
            selectable: true,
            color: "#6184ed",
            payload: {
                id: "romBubble"
            }
        },
        {
            "id": "spzBubble",
            "texts": [
                {
                    id: "spz",
                    label: "Spazio",
                    x_function: (ɵ18),
                    y_function: (ɵ19),
                    "user_select": "none",
                    fontSize_function: (ɵ20),
                    color: "white",
                    "classes": ""
                },
                {
                    id: "spzValue",
                    label: "3.981",
                    x_function: (ɵ21),
                    y_function: (ɵ22),
                    "user_select": "none",
                    fontSize_function: (ɵ23),
                    color: "green",
                    "classes": ""
                }
            ],
            x: (cWidth / 3.5),
            y: cHeight - (cHeight / 3.5),
            "radius": 3981 / 65,
            color: "#d19b13",
            selected: true,
            selectable: true,
            payload: {
                id: "spzBubble"
            }
        },
        {
            "id": "lucBubble",
            "texts": [
                {
                    id: "luc",
                    label: "Luce",
                    x_function: (ɵ24),
                    y_function: (ɵ25),
                    "user_select": "none",
                    fontSize_function: (ɵ26),
                    color: "white",
                    "classes": ""
                },
                {
                    id: "lucValue",
                    label: "2.342",
                    x_function: (ɵ27),
                    y_function: (ɵ28),
                    "user_select": "none",
                    fontSize_function: (ɵ29),
                    color: "red",
                    "classes": ""
                }
            ],
            x: 200,
            y: 200,
            radius: 2342 / 25,
            selectable: true,
            color: "#6184ed",
            payload: {
                id: "lucBubble"
            }
        }
    ],
    forceSimulationData: {
        xPull: cWidth / 2,
        xPullStrength: -0.01,
        yPull: cHeight / 2,
        yPullStrength: -0.01,
        collisionStrengh: 0.99,
        collisionIterations: 1,
        velocityDecay: 0.65
    },
    maxBubblesSelected: 3
};
/** @type {?} */
export var BUBBLECHART_MOCK = dataSource;
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9, ɵ10, ɵ11, ɵ12, ɵ13, ɵ14, ɵ15, ɵ16, ɵ17, ɵ18, ɵ19, ɵ20, ɵ21, ɵ22, ɵ23, ɵ24, ɵ25, ɵ26, ɵ27, ɵ28, ɵ29 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0Lm1vY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2J1YmJsZS1jaGFydC9idWJibGUtY2hhcnQubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztJQUdNLE1BQU0sR0FBRyxJQUFJOztJQUNiLE9BQU8sR0FBRyxHQUFHOzs7OztBQWNXLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLENBQUMsRUFBSCxDQUFHOzs7O0FBQ1YsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsRUFBaEIsQ0FBZ0I7Ozs7QUFFaEIsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBVixDQUFVOzs7O0FBT3hCLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLENBQUMsRUFBSCxDQUFHOzs7O0FBQ1YsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsRUFBaEIsQ0FBZ0I7Ozs7QUFFaEIsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBVixDQUFVOzs7O0FBcUJ4QixVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxDQUFDLEVBQUgsQ0FBRzs7OztBQUNWLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLEVBQWhCLENBQWdCOzs7O0FBRWhCLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQVYsQ0FBVTs7OztBQU94QixVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxD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LElBQUk7WUFDaEIsS0FBSyxFQUFDLFNBQVM7WUFDZixPQUFPLEVBQUU7Z0JBQ1AsRUFBRSxFQUFFLFdBQVc7YUFDaEI7U0FDSjtLQUNKO0lBQ0QsbUJBQW1CLEVBQUU7UUFDbkIsS0FBSyxFQUFFLE1BQU0sR0FBQyxDQUFDO1FBQ2YsYUFBYSxFQUFFLENBQUMsSUFBSTtRQUNwQixLQUFLLEVBQUUsT0FBTyxHQUFDLENBQUM7UUFDaEIsYUFBYSxFQUFFLENBQUMsSUFBSTtRQUNwQixnQkFBZ0IsRUFBRSxJQUFJO1FBQ3RCLG1CQUFtQixFQUFFLENBQUM7UUFDdEIsYUFBYSxFQUFFLElBQUk7S0FDcEI7SUFDRCxrQkFBa0IsRUFBQyxDQUFDO0NBQ3JCOztBQUlELE1BQU0sS0FBTyxnQkFBZ0IsR0FBcUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElCdWJibGVDaGFydERhdGEgfSBmcm9tICcuL2J1YmJsZS1jaGFydCc7XG5cblxuY29uc3QgY1dpZHRoID0gMTAwMDtcbmNvbnN0IGNIZWlnaHQgPSA1MDA7XG5cbnZhciBkYXRhU291cmNlID0ge1xuICBjb250YWluZXJJZDogXCJidWJibGVDaGFydENvbnRhaW5lclwiLFxuICBjb250YWluZXJXaWR0aCA6IGNXaWR0aCxcbiAgY29udGFpbmVySGVpZ2h0IDogY0hlaWdodCxcbiAgaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkOiB0cnVlLFxuICBidWJibGVzRGF0YSA6IFtcbiAgICAgIHtcbiAgICAgICAgICBcImlkXCI6XCJtbG5CdWJibGVcIixcbiAgICAgICAgICBcInRleHRzXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWQ6XCJtbG5cIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk1pbGFub1wiLFxuICAgICAgICAgICAgICAgICAgeF9mdW5jdGlvbjogKGQpID0+IGQueCxcbiAgICAgICAgICAgICAgICAgIHlfZnVuY3Rpb246IChkKSA9PiBkLnktKGQucmFkaXVzLzkpLFxuICAgICAgICAgICAgICAgICAgXCJ1c2VyX3NlbGVjdFwiOlwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemVfZnVuY3Rpb246IChkKSA9PiBkLnJhZGl1cy81LFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiZ3JlZW5cIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3Nlc1wiOlwibW9ub3NwYWNlLXRleHRcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZDpcIm1sblZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCI5Ljc0NlwiLFxuICAgICAgICAgICAgICAgICAgeF9mdW5jdGlvbjogKGQpID0+IGQueCxcbiAgICAgICAgICAgICAgICAgIHlfZnVuY3Rpb246IChkKSA9PiBkLnkrKGQucmFkaXVzLzkpLFxuICAgICAgICAgICAgICAgICAgXCJ1c2VyX3NlbGVjdFwiOlwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemVfZnVuY3Rpb246IChkKSA9PiBkLnJhZGl1cy82LFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3Nlc1wiOlwiXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgeDogY1dpZHRoLzIrNTAsXG4gICAgICAgICAgeTogY0hlaWdodC8yKzUwLFxuICAgICAgICAgIFwicmFkaXVzXCI6OTc0Ni83NSxcbiAgICAgICAgICBjb2xvcjpcIiM3OWFkODdcIixcbiAgICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgICAgICBzZWxlY3RhYmxlOiB0cnVlLFxuICAgICAgICAgIHBheWxvYWQ6e1xuICAgICAgICAgICAgaWQ6IFwibWxuQnViYmxlXCJcbiAgICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgIFwiaWRcIjpcIm5hcGxCdWJibGVcIixcbiAgICAgICAgICBcInRleHRzXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWQ6XCJuYXBcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk5hcG9saVwiLFxuICAgICAgICAgICAgICAgICAgeF9mdW5jdGlvbjogKGQpID0+IGQueCxcbiAgICAgICAgICAgICAgICAgIHlfZnVuY3Rpb246IChkKSA9PiBkLnktKGQucmFkaXVzLzkpLFxuICAgICAgICAgICAgICAgICAgXCJ1c2VyX3NlbGVjdFwiOlwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemVfZnVuY3Rpb246IChkKSA9PiBkLnJhZGl1cy81LFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3Nlc1wiOlwiXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWQ6XCJuYXBWYWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiMy45ODFcIixcbiAgICAgICAgICAgICAgICAgIHhfZnVuY3Rpb246IChkKSA9PiBkLngsXG4gICAgICAgICAgICAgICAgICB5X2Z1bmN0aW9uOiAoZCkgPT4gZC55KyhkLnJhZGl1cy85KSxcbiAgICAgICAgICAgICAgICAgIFwidXNlcl9zZWxlY3RcIjpcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplX2Z1bmN0aW9uOiAoZCkgPT4gZC5yYWRpdXMvNSxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc2VzXCI6XCJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICB4OiBjV2lkdGgtMTIwLFxuICAgICAgICAgIHk6IGNIZWlnaHQtMTIwLFxuICAgICAgICAgIFwicmFkaXVzXCI6Mzk4MS80NSxcbiAgICAgICAgICBjb2xvcjpcIiNkMTliMTNcIixcbiAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBpZDogXCJuYXBsQnViYmxlXCJcbiAgICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgIFwiaWRcIjpcInJvbUJ1YmJsZVwiLFxuICAgICAgICAgIFwidGV4dHNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZDpcInJvbVwiLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiUm9tYVwiLFxuICAgICAgICAgICAgICAgICAgeF9mdW5jdGlvbjogKGQpID0+IGQueCxcbiAgICAgICAgICAgICAgICAgIHlfZnVuY3Rpb246IChkKSA9PiBkLnktKGQucmFkaXVzLzkpLFxuICAgICAgICAgICAgICAgICAgXCJ1c2VyX3NlbGVjdFwiOlwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemVfZnVuY3Rpb246IChkKSA9PiBkLnJhZGl1cy81LFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3Nlc1wiOlwiXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWQ6XCJyb21WYWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiNC41MjNcIixcbiAgICAgICAgICAgICAgICAgIHhfZnVuY3Rpb246IChkKSA9PiBkLngsXG4gICAgICAgICAgICAgICAgICB5X2Z1bmN0aW9uOiAoZCkgPT4gZC55KyhkLnJhZGl1cy85KSxcbiAgICAgICAgICAgICAgICAgIFwidXNlcl9zZWxlY3RcIjpcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplX2Z1bmN0aW9uOiAoZCkgPT4gZC5yYWRpdXMvNSxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc2VzXCI6XCJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICB4OiBjV2lkdGggLSAoY1dpZHRoLzQuNSksXG4gICAgICAgICAgeTogKGNIZWlnaHQvOCksXG4gICAgICAgICAgXCJyYWRpdXNcIjo0NTIzLzMwLFxuICAgICAgICAgIHNlbGVjdGVkOnRydWUsXG4gICAgICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBjb2xvcjpcIiM2MTg0ZWRcIixcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBpZDogXCJyb21CdWJibGVcIlxuICAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgXCJpZFwiOlwic3B6QnViYmxlXCIsXG4gICAgICAgICAgXCJ0ZXh0c1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlkOlwic3B6XCIsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJTcGF6aW9cIixcbiAgICAgICAgICAgICAgICAgIHhfZnVuY3Rpb246IChkKSA9PiBkLngsXG4gICAgICAgICAgICAgICAgICB5X2Z1bmN0aW9uOiAoZCkgPT4gZC55LShkLnJhZGl1cy85KSxcbiAgICAgICAgICAgICAgICAgIFwidXNlcl9zZWxlY3RcIjpcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplX2Z1bmN0aW9uOiAoZCkgPT4gZC5yYWRpdXMvNSxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICBcImNsYXNzZXNcIjpcIlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlkOlwic3B6VmFsdWVcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIjMuOTgxXCIsXG4gICAgICAgICAgICAgICAgICB4X2Z1bmN0aW9uOiAoZCkgPT4gZC54LFxuICAgICAgICAgICAgICAgICAgeV9mdW5jdGlvbjogKGQpID0+IGQueSsoZC5yYWRpdXMvOSksXG4gICAgICAgICAgICAgICAgICBcInVzZXJfc2VsZWN0XCI6XCJub25lXCIsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZV9mdW5jdGlvbjogKGQpID0+IGQucmFkaXVzLzUsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJncmVlblwiLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc2VzXCI6XCJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICB4OiAoY1dpZHRoLzMuNSksXG4gICAgICAgICAgeTogY0hlaWdodC0oY0hlaWdodC8zLjUpLFxuICAgICAgICAgIFwicmFkaXVzXCI6Mzk4MS82NSxcbiAgICAgICAgICBjb2xvcjpcIiNkMTliMTNcIixcbiAgICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgICAgICBzZWxlY3RhYmxlOiB0cnVlLFxuICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIGlkOiBcInNwekJ1YmJsZVwiXG4gICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICBcImlkXCI6XCJsdWNCdWJibGVcIixcbiAgICAgICAgICBcInRleHRzXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWQ6XCJsdWNcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkx1Y2VcIixcbiAgICAgICAgICAgICAgICAgIHhfZnVuY3Rpb246IChkKSA9PiBkLngsXG4gICAgICAgICAgICAgICAgICB5X2Z1bmN0aW9uOiAoZCkgPT4gZC55LShkLnJhZGl1cy85KSxcbiAgICAgICAgICAgICAgICAgIFwidXNlcl9zZWxlY3RcIjpcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplX2Z1bmN0aW9uOiAoZCkgPT4gZC5yYWRpdXMvNSxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICBcImNsYXNzZXNcIjpcIlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlkOlwibHVjVmFsdWVcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIjIuMzQyXCIsXG4gICAgICAgICAgICAgICAgICB4X2Z1bmN0aW9uOiAoZCkgPT4gZC54LFxuICAgICAgICAgICAgICAgICAgeV9mdW5jdGlvbjogKGQpID0+IGQueSsoZC5yYWRpdXMvOSksXG4gICAgICAgICAgICAgICAgICBcInVzZXJfc2VsZWN0XCI6XCJub25lXCIsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZV9mdW5jdGlvbjogKGQpID0+IGQucmFkaXVzLzUsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZWRcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3Nlc1wiOlwiXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgeDogMjAwLFxuICAgICAgICAgIHk6IDIwMCxcbiAgICAgICAgICByYWRpdXM6MjM0Mi8yNSxcbiAgICAgICAgICBzZWxlY3RhYmxlOiB0cnVlLFxuICAgICAgICAgIGNvbG9yOlwiIzYxODRlZFwiLFxuICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIGlkOiBcImx1Y0J1YmJsZVwiXG4gICAgICAgICAgfVxuICAgICAgfVxuICBdLFxuICBmb3JjZVNpbXVsYXRpb25EYXRhOiB7XG4gICAgeFB1bGw6IGNXaWR0aC8yLFxuICAgIHhQdWxsU3RyZW5ndGg6IC0wLjAxLFxuICAgIHlQdWxsOiBjSGVpZ2h0LzIsXG4gICAgeVB1bGxTdHJlbmd0aDogLTAuMDEsXG4gICAgY29sbGlzaW9uU3RyZW5naDogMC45OSxcbiAgICBjb2xsaXNpb25JdGVyYXRpb25zOiAxLFxuICAgIHZlbG9jaXR5RGVjYXk6IDAuNjVcbiAgfSxcbiAgbWF4QnViYmxlc1NlbGVjdGVkOjNcbn1cblxuXG5cbmV4cG9ydCBjb25zdCBCVUJCTEVDSEFSVF9NT0NLOiBJQnViYmxlQ2hhcnREYXRhID0gZGF0YVNvdXJjZTtcbiJdfQ==