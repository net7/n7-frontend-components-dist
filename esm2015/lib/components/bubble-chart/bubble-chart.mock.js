/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const cWidth = 1000;
/** @type {?} */
const cHeight = 500;
const ɵ0 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.x, ɵ1 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.y - (d.radius / 9), ɵ2 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.radius / 5, ɵ3 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.x, ɵ4 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.y + (d.radius / 9), ɵ5 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.radius / 6, ɵ6 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.x, ɵ7 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.y - (d.radius / 9), ɵ8 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.radius / 5, ɵ9 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.x, ɵ10 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.y + (d.radius / 9), ɵ11 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.radius / 5, ɵ12 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.x, ɵ13 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.y - (d.radius / 9), ɵ14 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.radius / 5, ɵ15 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.x, ɵ16 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.y + (d.radius / 9), ɵ17 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.radius / 5, ɵ18 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.x, ɵ19 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.y - (d.radius / 9), ɵ20 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.radius / 5, ɵ21 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.x, ɵ22 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.y + (d.radius / 9), ɵ23 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.radius / 5, ɵ24 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.x, ɵ25 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.y - (d.radius / 9), ɵ26 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.radius / 5, ɵ27 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.x, ɵ28 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.y + (d.radius / 9), ɵ29 = /**
 * @param {?} d
 * @return {?}
 */
(d) => d.radius / 5;
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
            hasCloseIcon: true,
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
            hasCloseIcon: false,
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
            hasCloseIcon: true,
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
            hasCloseIcon: true,
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
            hasCloseIcon: false,
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
    }
};
/** @type {?} */
export const BUBBLECHART_MOCK = dataSource;
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9, ɵ10, ɵ11, ɵ12, ɵ13, ɵ14, ɵ15, ɵ16, ɵ17, ɵ18, ɵ19, ɵ20, ɵ21, ɵ22, ɵ23, ɵ24, ɵ25, ɵ26, ɵ27, ɵ28, ɵ29 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0Lm1vY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2J1YmJsZS1jaGFydC9idWJibGUtY2hhcnQubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztNQUdNLE1BQU0sR0FBRyxJQUFJOztNQUNiLE9BQU8sR0FBRyxHQUFHOzs7OztBQWNXLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7OztBQUNWLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUM7Ozs7QUFFaEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQzs7OztBQU94QixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7QUFDVixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDOzs7O0FBRWhCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUM7Ozs7QUFvQnhCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7OztBQUNWLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUM7Ozs7QUFFaEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQzs7OztBQU94QixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7QUFDVixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDOzs7O0FBRWhCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUM7Ozs7QUFvQnhCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7OztBQUNWLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUM7Ozs7QUFFaEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQzs7OztBQU94QixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7QUFDVixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDOzs7O0FBRWhCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUM7Ozs7QUFvQnhCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7OztBQUNWLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUM7Ozs7QUFFaEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQzs7OztBQU94QixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7QUFDVixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDOzs7O0FBRWhCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUM7Ozs7QUFvQnhCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7OztBQUNWLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUM7Ozs7QUFFaEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQzs7OztBQU94QixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7QUFDVixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDOzs7O0FBRWhCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUM7O0lBN0psRCxVQUFVLEdBQUc7SUFDZixXQUFXLEVBQUUsc0JBQXNCO0lBQ25DLGNBQWMsRUFBRyxNQUFNO0lBQ3ZCLGVBQWUsRUFBRyxPQUFPO0lBQ3pCLHdCQUF3QixFQUFFLElBQUk7SUFDOUIsV0FBVyxFQUFHO1FBQ1Y7WUFDSSxJQUFJLEVBQUMsV0FBVztZQUNoQixPQUFPLEVBQUU7Z0JBQ0w7b0JBQ0ksRUFBRSxFQUFDLEtBQUs7b0JBQ1IsS0FBSyxFQUFFLFFBQVE7b0JBQ2YsVUFBVSxNQUFZO29CQUN0QixVQUFVLE1BQXlCO29CQUNuQyxhQUFhLEVBQUMsTUFBTTtvQkFDcEIsaUJBQWlCLE1BQW1CO29CQUNwQyxLQUFLLEVBQUUsT0FBTztvQkFDZCxTQUFTLEVBQUMsZ0JBQWdCO2lCQUM3QjtnQkFDRDtvQkFDSSxFQUFFLEVBQUMsVUFBVTtvQkFDYixLQUFLLEVBQUUsT0FBTztvQkFDZCxVQUFVLE1BQVk7b0JBQ3RCLFVBQVUsTUFBeUI7b0JBQ25DLGFBQWEsRUFBQyxNQUFNO29CQUNwQixpQkFBaUIsTUFBbUI7b0JBQ3BDLEtBQUssRUFBRSxPQUFPO29CQUNkLFNBQVMsRUFBQyxFQUFFO2lCQUNmO2FBQ0o7WUFDRCxDQUFDLEVBQUUsTUFBTSxHQUFDLENBQUMsR0FBQyxFQUFFO1lBQ2QsQ0FBQyxFQUFFLE9BQU8sR0FBQyxDQUFDLEdBQUMsRUFBRTtZQUNmLFFBQVEsRUFBQyxJQUFJLEdBQUMsRUFBRTtZQUNoQixLQUFLLEVBQUMsU0FBUztZQUNmLFlBQVksRUFBRSxJQUFJO1lBQ2xCLE9BQU8sRUFBQztnQkFDTixFQUFFLEVBQUUsV0FBVzthQUNoQjtTQUNKO1FBQ0Q7WUFDSSxJQUFJLEVBQUMsWUFBWTtZQUNqQixPQUFPLEVBQUU7Z0JBQ0w7b0JBQ0ksRUFBRSxFQUFDLEtBQUs7b0JBQ1IsS0FBSyxFQUFFLFFBQVE7b0JBQ2YsVUFBVSxNQUFZO29CQUN0QixVQUFVLE1BQXlCO29CQUNuQyxhQUFhLEVBQUMsTUFBTTtvQkFDcEIsaUJBQWlCLE1BQW1CO29CQUNwQyxLQUFLLEVBQUUsT0FBTztvQkFDZCxTQUFTLEVBQUMsRUFBRTtpQkFDZjtnQkFDRDtvQkFDSSxFQUFFLEVBQUMsVUFBVTtvQkFDYixLQUFLLEVBQUUsT0FBTztvQkFDZCxVQUFVLE1BQVk7b0JBQ3RCLFVBQVUsT0FBeUI7b0JBQ25DLGFBQWEsRUFBQyxNQUFNO29CQUNwQixpQkFBaUIsT0FBbUI7b0JBQ3BDLEtBQUssRUFBRSxLQUFLO29CQUNaLFNBQVMsRUFBQyxFQUFFO2lCQUNmO2FBQ0o7WUFDRCxDQUFDLEVBQUUsTUFBTSxHQUFDLEdBQUc7WUFDYixDQUFDLEVBQUUsT0FBTyxHQUFDLEdBQUc7WUFDZCxRQUFRLEVBQUMsSUFBSSxHQUFDLEVBQUU7WUFDaEIsS0FBSyxFQUFDLFNBQVM7WUFDZixZQUFZLEVBQUUsS0FBSztZQUNuQixPQUFPLEVBQUU7Z0JBQ1AsRUFBRSxFQUFFLFlBQVk7YUFDakI7U0FDSjtRQUNEO1lBQ0ksSUFBSSxFQUFDLFdBQVc7WUFDaEIsT0FBTyxFQUFFO2dCQUNMO29CQUNJLEVBQUUsRUFBQyxLQUFLO29CQUNSLEtBQUssRUFBRSxNQUFNO29CQUNiLFVBQVUsT0FBWTtvQkFDdEIsVUFBVSxPQUF5QjtvQkFDbkMsYUFBYSxFQUFDLE1BQU07b0JBQ3BCLGlCQUFpQixPQUFtQjtvQkFDcEMsS0FBSyxFQUFFLE9BQU87b0JBQ2QsU0FBUyxFQUFDLEVBQUU7aUJBQ2Y7Z0JBQ0Q7b0JBQ0ksRUFBRSxFQUFDLFVBQVU7b0JBQ2IsS0FBSyxFQUFFLE9BQU87b0JBQ2QsVUFBVSxPQUFZO29CQUN0QixVQUFVLE9BQXlCO29CQUNuQyxhQUFhLEVBQUMsTUFBTTtvQkFDcEIsaUJBQWlCLE9BQW1CO29CQUNwQyxLQUFLLEVBQUUsS0FBSztvQkFDWixTQUFTLEVBQUMsRUFBRTtpQkFDZjthQUNKO1lBQ0QsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLE1BQU0sR0FBQyxHQUFHLENBQUM7WUFDeEIsQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFDLENBQUMsQ0FBQztZQUNkLFFBQVEsRUFBQyxJQUFJLEdBQUMsRUFBRTtZQUNoQixZQUFZLEVBQUMsSUFBSTtZQUNqQixLQUFLLEVBQUMsU0FBUztZQUNmLE9BQU8sRUFBRTtnQkFDUCxFQUFFLEVBQUUsV0FBVzthQUNoQjtTQUNKO1FBQ0Q7WUFDSSxJQUFJLEVBQUMsV0FBVztZQUNoQixPQUFPLEVBQUU7Z0JBQ0w7b0JBQ0ksRUFBRSxFQUFDLEtBQUs7b0JBQ1IsS0FBSyxFQUFFLFFBQVE7b0JBQ2YsVUFBVSxPQUFZO29CQUN0QixVQUFVLE9BQXlCO29CQUNuQyxhQUFhLEVBQUMsTUFBTTtvQkFDcEIsaUJBQWlCLE9BQW1CO29CQUNwQyxLQUFLLEVBQUUsT0FBTztvQkFDZCxTQUFTLEVBQUMsRUFBRTtpQkFDZjtnQkFDRDtvQkFDSSxFQUFFLEVBQUMsVUFBVTtvQkFDYixLQUFLLEVBQUUsT0FBTztvQkFDZCxVQUFVLE9BQVk7b0JBQ3RCLFVBQVUsT0FBeUI7b0JBQ25DLGFBQWEsRUFBQyxNQUFNO29CQUNwQixpQkFBaUIsT0FBbUI7b0JBQ3BDLEtBQUssRUFBRSxPQUFPO29CQUNkLFNBQVMsRUFBQyxFQUFFO2lCQUNmO2FBQ0o7WUFDRCxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUMsR0FBRyxDQUFDO1lBQ2YsQ0FBQyxFQUFFLE9BQU8sR0FBQyxDQUFDLE9BQU8sR0FBQyxHQUFHLENBQUM7WUFDeEIsUUFBUSxFQUFDLElBQUksR0FBQyxFQUFFO1lBQ2hCLEtBQUssRUFBQyxTQUFTO1lBQ2YsWUFBWSxFQUFFLElBQUk7WUFDbEIsT0FBTyxFQUFFO2dCQUNQLEVBQUUsRUFBRSxXQUFXO2FBQ2hCO1NBQ0o7UUFDRDtZQUNJLElBQUksRUFBQyxXQUFXO1lBQ2hCLE9BQU8sRUFBRTtnQkFDTDtvQkFDSSxFQUFFLEVBQUMsS0FBSztvQkFDUixLQUFLLEVBQUUsTUFBTTtvQkFDYixVQUFVLE9BQVk7b0JBQ3RCLFVBQVUsT0FBeUI7b0JBQ25DLGFBQWEsRUFBQyxNQUFNO29CQUNwQixpQkFBaUIsT0FBbUI7b0JBQ3BDLEtBQUssRUFBRSxPQUFPO29CQUNkLFNBQVMsRUFBQyxFQUFFO2lCQUNmO2dCQUNEO29CQUNJLEVBQUUsRUFBQyxVQUFVO29CQUNiLEtBQUssRUFBRSxPQUFPO29CQUNkLFVBQVUsT0FBWTtvQkFDdEIsVUFBVSxPQUF5QjtvQkFDbkMsYUFBYSxFQUFDLE1BQU07b0JBQ3BCLGlCQUFpQixPQUFtQjtvQkFDcEMsS0FBSyxFQUFFLEtBQUs7b0JBQ1osU0FBUyxFQUFDLEVBQUU7aUJBQ2Y7YUFDSjtZQUNELENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixNQUFNLEVBQUMsSUFBSSxHQUFDLEVBQUU7WUFDZCxZQUFZLEVBQUMsS0FBSztZQUNsQixLQUFLLEVBQUMsU0FBUztZQUNmLE9BQU8sRUFBRTtnQkFDUCxFQUFFLEVBQUUsV0FBVzthQUNoQjtTQUNKO0tBQ0o7SUFDRCxtQkFBbUIsRUFBRTtRQUNuQixLQUFLLEVBQUUsTUFBTSxHQUFDLENBQUM7UUFDZixhQUFhLEVBQUUsQ0FBQyxJQUFJO1FBQ3BCLEtBQUssRUFBRSxPQUFPLEdBQUMsQ0FBQztRQUNoQixhQUFhLEVBQUUsQ0FBQyxJQUFJO1FBQ3BCLGdCQUFnQixFQUFFLElBQUk7UUFDdEIsbUJBQW1CLEVBQUUsQ0FBQztRQUN0QixhQUFhLEVBQUUsSUFBSTtLQUNwQjtDQUNGOztBQUlELE1BQU0sT0FBTyxnQkFBZ0IsR0FBcUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElCdWJibGVDaGFydERhdGEgfSBmcm9tICcuL2J1YmJsZS1jaGFydCc7XHJcblxyXG5cclxuY29uc3QgY1dpZHRoID0gMTAwMDtcclxuY29uc3QgY0hlaWdodCA9IDUwMDtcclxuXHJcbnZhciBkYXRhU291cmNlID0ge1xyXG4gIGNvbnRhaW5lcklkOiBcImJ1YmJsZUNoYXJ0Q29udGFpbmVyXCIsXHJcbiAgY29udGFpbmVyV2lkdGggOiBjV2lkdGgsXHJcbiAgY29udGFpbmVySGVpZ2h0IDogY0hlaWdodCxcclxuICBpc0ZvcmNlU2ltdWxhdGlvbkVuYWJsZWQ6IHRydWUsXHJcbiAgYnViYmxlc0RhdGEgOiBbXHJcbiAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjpcIm1sbkJ1YmJsZVwiLFxyXG4gICAgICAgICAgXCJ0ZXh0c1wiOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBpZDpcIm1sblwiLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJNaWxhbm9cIixcclxuICAgICAgICAgICAgICAgICAgeF9mdW5jdGlvbjogKGQpID0+IGQueCxcclxuICAgICAgICAgICAgICAgICAgeV9mdW5jdGlvbjogKGQpID0+IGQueS0oZC5yYWRpdXMvOSksXHJcbiAgICAgICAgICAgICAgICAgIFwidXNlcl9zZWxlY3RcIjpcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemVfZnVuY3Rpb246IChkKSA9PiBkLnJhZGl1cy81LFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJncmVlblwiLFxyXG4gICAgICAgICAgICAgICAgICBcImNsYXNzZXNcIjpcIm1vbm9zcGFjZS10ZXh0XCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgaWQ6XCJtbG5WYWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCI5Ljc0NlwiLFxyXG4gICAgICAgICAgICAgICAgICB4X2Z1bmN0aW9uOiAoZCkgPT4gZC54LFxyXG4gICAgICAgICAgICAgICAgICB5X2Z1bmN0aW9uOiAoZCkgPT4gZC55KyhkLnJhZGl1cy85KSxcclxuICAgICAgICAgICAgICAgICAgXCJ1c2VyX3NlbGVjdFwiOlwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZV9mdW5jdGlvbjogKGQpID0+IGQucmFkaXVzLzYsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3Nlc1wiOlwiXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgeDogY1dpZHRoLzIrNTAsXHJcbiAgICAgICAgICB5OiBjSGVpZ2h0LzIrNTAsXHJcbiAgICAgICAgICBcInJhZGl1c1wiOjk3NDYvNzUsXHJcbiAgICAgICAgICBjb2xvcjpcIiM3OWFkODdcIixcclxuICAgICAgICAgIGhhc0Nsb3NlSWNvbjogdHJ1ZSxcclxuICAgICAgICAgIHBheWxvYWQ6e1xyXG4gICAgICAgICAgICBpZDogXCJtbG5CdWJibGVcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgICBcImlkXCI6XCJuYXBsQnViYmxlXCIsXHJcbiAgICAgICAgICBcInRleHRzXCI6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGlkOlwibmFwXCIsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk5hcG9saVwiLFxyXG4gICAgICAgICAgICAgICAgICB4X2Z1bmN0aW9uOiAoZCkgPT4gZC54LFxyXG4gICAgICAgICAgICAgICAgICB5X2Z1bmN0aW9uOiAoZCkgPT4gZC55LShkLnJhZGl1cy85KSxcclxuICAgICAgICAgICAgICAgICAgXCJ1c2VyX3NlbGVjdFwiOlwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZV9mdW5jdGlvbjogKGQpID0+IGQucmFkaXVzLzUsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3Nlc1wiOlwiXCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgaWQ6XCJuYXBWYWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCIzLjk4MVwiLFxyXG4gICAgICAgICAgICAgICAgICB4X2Z1bmN0aW9uOiAoZCkgPT4gZC54LFxyXG4gICAgICAgICAgICAgICAgICB5X2Z1bmN0aW9uOiAoZCkgPT4gZC55KyhkLnJhZGl1cy85KSxcclxuICAgICAgICAgICAgICAgICAgXCJ1c2VyX3NlbGVjdFwiOlwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZV9mdW5jdGlvbjogKGQpID0+IGQucmFkaXVzLzUsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcImNsYXNzZXNcIjpcIlwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIHg6IGNXaWR0aC0xMjAsXHJcbiAgICAgICAgICB5OiBjSGVpZ2h0LTEyMCxcclxuICAgICAgICAgIFwicmFkaXVzXCI6Mzk4MS80NSxcclxuICAgICAgICAgIGNvbG9yOlwiI2QxOWIxM1wiLFxyXG4gICAgICAgICAgaGFzQ2xvc2VJY29uOiBmYWxzZSxcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgaWQ6IFwibmFwbEJ1YmJsZVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjpcInJvbUJ1YmJsZVwiLFxyXG4gICAgICAgICAgXCJ0ZXh0c1wiOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBpZDpcInJvbVwiLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJSb21hXCIsXHJcbiAgICAgICAgICAgICAgICAgIHhfZnVuY3Rpb246IChkKSA9PiBkLngsXHJcbiAgICAgICAgICAgICAgICAgIHlfZnVuY3Rpb246IChkKSA9PiBkLnktKGQucmFkaXVzLzkpLFxyXG4gICAgICAgICAgICAgICAgICBcInVzZXJfc2VsZWN0XCI6XCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplX2Z1bmN0aW9uOiAoZCkgPT4gZC5yYWRpdXMvNSxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgXCJjbGFzc2VzXCI6XCJcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBpZDpcInJvbVZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIjQuNTIzXCIsXHJcbiAgICAgICAgICAgICAgICAgIHhfZnVuY3Rpb246IChkKSA9PiBkLngsXHJcbiAgICAgICAgICAgICAgICAgIHlfZnVuY3Rpb246IChkKSA9PiBkLnkrKGQucmFkaXVzLzkpLFxyXG4gICAgICAgICAgICAgICAgICBcInVzZXJfc2VsZWN0XCI6XCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplX2Z1bmN0aW9uOiAoZCkgPT4gZC5yYWRpdXMvNSxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3Nlc1wiOlwiXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgeDogY1dpZHRoIC0gKGNXaWR0aC80LjUpLFxyXG4gICAgICAgICAgeTogKGNIZWlnaHQvOCksXHJcbiAgICAgICAgICBcInJhZGl1c1wiOjQ1MjMvMzAsXHJcbiAgICAgICAgICBoYXNDbG9zZUljb246dHJ1ZSxcclxuICAgICAgICAgIGNvbG9yOlwiIzYxODRlZFwiLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBpZDogXCJyb21CdWJibGVcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgICBcImlkXCI6XCJzcHpCdWJibGVcIixcclxuICAgICAgICAgIFwidGV4dHNcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgaWQ6XCJzcHpcIixcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU3BhemlvXCIsXHJcbiAgICAgICAgICAgICAgICAgIHhfZnVuY3Rpb246IChkKSA9PiBkLngsXHJcbiAgICAgICAgICAgICAgICAgIHlfZnVuY3Rpb246IChkKSA9PiBkLnktKGQucmFkaXVzLzkpLFxyXG4gICAgICAgICAgICAgICAgICBcInVzZXJfc2VsZWN0XCI6XCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplX2Z1bmN0aW9uOiAoZCkgPT4gZC5yYWRpdXMvNSxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgXCJjbGFzc2VzXCI6XCJcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBpZDpcInNwelZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIjMuOTgxXCIsXHJcbiAgICAgICAgICAgICAgICAgIHhfZnVuY3Rpb246IChkKSA9PiBkLngsXHJcbiAgICAgICAgICAgICAgICAgIHlfZnVuY3Rpb246IChkKSA9PiBkLnkrKGQucmFkaXVzLzkpLFxyXG4gICAgICAgICAgICAgICAgICBcInVzZXJfc2VsZWN0XCI6XCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplX2Z1bmN0aW9uOiAoZCkgPT4gZC5yYWRpdXMvNSxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgICAgICAgXCJjbGFzc2VzXCI6XCJcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICB4OiAoY1dpZHRoLzMuNSksXHJcbiAgICAgICAgICB5OiBjSGVpZ2h0LShjSGVpZ2h0LzMuNSksXHJcbiAgICAgICAgICBcInJhZGl1c1wiOjM5ODEvNjUsXHJcbiAgICAgICAgICBjb2xvcjpcIiNkMTliMTNcIixcclxuICAgICAgICAgIGhhc0Nsb3NlSWNvbjogdHJ1ZSxcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgaWQ6IFwic3B6QnViYmxlXCJcclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICAgXCJpZFwiOlwibHVjQnViYmxlXCIsXHJcbiAgICAgICAgICBcInRleHRzXCI6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGlkOlwibHVjXCIsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkx1Y2VcIixcclxuICAgICAgICAgICAgICAgICAgeF9mdW5jdGlvbjogKGQpID0+IGQueCxcclxuICAgICAgICAgICAgICAgICAgeV9mdW5jdGlvbjogKGQpID0+IGQueS0oZC5yYWRpdXMvOSksXHJcbiAgICAgICAgICAgICAgICAgIFwidXNlcl9zZWxlY3RcIjpcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemVfZnVuY3Rpb246IChkKSA9PiBkLnJhZGl1cy81LFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICBcImNsYXNzZXNcIjpcIlwiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGlkOlwibHVjVmFsdWVcIixcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiMi4zNDJcIixcclxuICAgICAgICAgICAgICAgICAgeF9mdW5jdGlvbjogKGQpID0+IGQueCxcclxuICAgICAgICAgICAgICAgICAgeV9mdW5jdGlvbjogKGQpID0+IGQueSsoZC5yYWRpdXMvOSksXHJcbiAgICAgICAgICAgICAgICAgIFwidXNlcl9zZWxlY3RcIjpcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemVfZnVuY3Rpb246IChkKSA9PiBkLnJhZGl1cy81LFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZWRcIixcclxuICAgICAgICAgICAgICAgICAgXCJjbGFzc2VzXCI6XCJcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICB4OiAyMDAsXHJcbiAgICAgICAgICB5OiAyMDAsXHJcbiAgICAgICAgICByYWRpdXM6MjM0Mi8yNSxcclxuICAgICAgICAgIGhhc0Nsb3NlSWNvbjpmYWxzZSxcclxuICAgICAgICAgIGNvbG9yOlwiIzYxODRlZFwiLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBpZDogXCJsdWNCdWJibGVcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXSxcclxuICBmb3JjZVNpbXVsYXRpb25EYXRhOiB7XHJcbiAgICB4UHVsbDogY1dpZHRoLzIsXHJcbiAgICB4UHVsbFN0cmVuZ3RoOiAtMC4wMSxcclxuICAgIHlQdWxsOiBjSGVpZ2h0LzIsXHJcbiAgICB5UHVsbFN0cmVuZ3RoOiAtMC4wMSxcclxuICAgIGNvbGxpc2lvblN0cmVuZ2g6IDAuOTksXHJcbiAgICBjb2xsaXNpb25JdGVyYXRpb25zOiAxLFxyXG4gICAgdmVsb2NpdHlEZWNheTogMC42NVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQlVCQkxFQ0hBUlRfTU9DSzogSUJ1YmJsZUNoYXJ0RGF0YSA9IGRhdGFTb3VyY2U7XHJcbiJdfQ==