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
export const BUBBLECHART_MOCK = dataSource;
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9, ɵ10, ɵ11, ɵ12, ɵ13, ɵ14, ɵ15, ɵ16, ɵ17, ɵ18, ɵ19, ɵ20, ɵ21, ɵ22, ɵ23, ɵ24, ɵ25, ɵ26, ɵ27, ɵ28, ɵ29 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0Lm1vY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2J1YmJsZS1jaGFydC9idWJibGUtY2hhcnQubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztNQUdNLE1BQU0sR0FBRyxJQUFJOztNQUNiLE9BQU8sR0FBRyxHQUFHOzs7OztBQWNXLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7OztBQUNWLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUM7Ozs7QUFFaEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQzs7OztBQU94QixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7QUFDVixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDOzs7O0FBRWhCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUM7Ozs7QUFxQnhCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7OztBQUNWLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUM7Ozs7QUFFaEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQzs7OztBQU94QixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7QUFDVixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDOzs7O0FBRWhCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUM7Ozs7QUFxQnhCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7OztBQUNWLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUM7Ozs7QUFFaEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQzs7OztBQU94QixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7QUFDVixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDOzs7O0FBRWhCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUM7Ozs7QUFxQnhCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7OztBQUNWLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUM7Ozs7QUFFaEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQzs7OztBQU94QixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7QUFDVixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDOzs7O0FBRWhCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUM7Ozs7QUFxQnhC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QU8sR0FBQyxDQUFDO1FBQ2hCLGFBQWEsRUFBRSxDQUFDLElBQUk7UUFDcEIsZ0JBQWdCLEVBQUUsSUFBSTtRQUN0QixtQkFBbUIsRUFBRSxDQUFDO1FBQ3RCLGFBQWEsRUFBRSxJQUFJO0tBQ3BCO0lBQ0Qsa0JBQWtCLEVBQUMsQ0FBQztDQUNyQjs7QUFJRCxNQUFNLE9BQU8sZ0JBQWdCLEdBQXFCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQnViYmxlQ2hhcnREYXRhIH0gZnJvbSAnLi9idWJibGUtY2hhcnQnO1xyXG5cclxuXHJcbmNvbnN0IGNXaWR0aCA9IDEwMDA7XHJcbmNvbnN0IGNIZWlnaHQgPSA1MDA7XHJcblxyXG52YXIgZGF0YVNvdXJjZSA9IHtcclxuICBjb250YWluZXJJZDogXCJidWJibGVDaGFydENvbnRhaW5lclwiLFxyXG4gIGNvbnRhaW5lcldpZHRoIDogY1dpZHRoLFxyXG4gIGNvbnRhaW5lckhlaWdodCA6IGNIZWlnaHQsXHJcbiAgaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkOiB0cnVlLFxyXG4gIGJ1YmJsZXNEYXRhIDogW1xyXG4gICAgICB7XHJcbiAgICAgICAgICBcImlkXCI6XCJtbG5CdWJibGVcIixcclxuICAgICAgICAgIFwidGV4dHNcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgaWQ6XCJtbG5cIixcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTWlsYW5vXCIsXHJcbiAgICAgICAgICAgICAgICAgIHhfZnVuY3Rpb246IChkKSA9PiBkLngsXHJcbiAgICAgICAgICAgICAgICAgIHlfZnVuY3Rpb246IChkKSA9PiBkLnktKGQucmFkaXVzLzkpLFxyXG4gICAgICAgICAgICAgICAgICBcInVzZXJfc2VsZWN0XCI6XCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplX2Z1bmN0aW9uOiAoZCkgPT4gZC5yYWRpdXMvNSxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgICAgICAgXCJjbGFzc2VzXCI6XCJtb25vc3BhY2UtdGV4dFwiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGlkOlwibWxuVmFsdWVcIixcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiOS43NDZcIixcclxuICAgICAgICAgICAgICAgICAgeF9mdW5jdGlvbjogKGQpID0+IGQueCxcclxuICAgICAgICAgICAgICAgICAgeV9mdW5jdGlvbjogKGQpID0+IGQueSsoZC5yYWRpdXMvOSksXHJcbiAgICAgICAgICAgICAgICAgIFwidXNlcl9zZWxlY3RcIjpcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemVfZnVuY3Rpb246IChkKSA9PiBkLnJhZGl1cy82LFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICBcImNsYXNzZXNcIjpcIlwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIHg6IGNXaWR0aC8yKzUwLFxyXG4gICAgICAgICAgeTogY0hlaWdodC8yKzUwLFxyXG4gICAgICAgICAgXCJyYWRpdXNcIjo5NzQ2Lzc1LFxyXG4gICAgICAgICAgY29sb3I6XCIjNzlhZDg3XCIsXHJcbiAgICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcclxuICAgICAgICAgIHNlbGVjdGFibGU6IHRydWUsXHJcbiAgICAgICAgICBwYXlsb2FkOntcclxuICAgICAgICAgICAgaWQ6IFwibWxuQnViYmxlXCJcclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICAgXCJpZFwiOlwibmFwbEJ1YmJsZVwiLFxyXG4gICAgICAgICAgXCJ0ZXh0c1wiOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBpZDpcIm5hcFwiLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJOYXBvbGlcIixcclxuICAgICAgICAgICAgICAgICAgeF9mdW5jdGlvbjogKGQpID0+IGQueCxcclxuICAgICAgICAgICAgICAgICAgeV9mdW5jdGlvbjogKGQpID0+IGQueS0oZC5yYWRpdXMvOSksXHJcbiAgICAgICAgICAgICAgICAgIFwidXNlcl9zZWxlY3RcIjpcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemVfZnVuY3Rpb246IChkKSA9PiBkLnJhZGl1cy81LFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICBcImNsYXNzZXNcIjpcIlwiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGlkOlwibmFwVmFsdWVcIixcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiMy45ODFcIixcclxuICAgICAgICAgICAgICAgICAgeF9mdW5jdGlvbjogKGQpID0+IGQueCxcclxuICAgICAgICAgICAgICAgICAgeV9mdW5jdGlvbjogKGQpID0+IGQueSsoZC5yYWRpdXMvOSksXHJcbiAgICAgICAgICAgICAgICAgIFwidXNlcl9zZWxlY3RcIjpcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemVfZnVuY3Rpb246IChkKSA9PiBkLnJhZGl1cy81LFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZWRcIixcclxuICAgICAgICAgICAgICAgICAgXCJjbGFzc2VzXCI6XCJcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICB4OiBjV2lkdGgtMTIwLFxyXG4gICAgICAgICAgeTogY0hlaWdodC0xMjAsXHJcbiAgICAgICAgICBcInJhZGl1c1wiOjM5ODEvNDUsXHJcbiAgICAgICAgICBjb2xvcjpcIiNkMTliMTNcIixcclxuICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgIHNlbGVjdGFibGU6IHRydWUsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGlkOiBcIm5hcGxCdWJibGVcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgICBcImlkXCI6XCJyb21CdWJibGVcIixcclxuICAgICAgICAgIFwidGV4dHNcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgaWQ6XCJyb21cIixcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiUm9tYVwiLFxyXG4gICAgICAgICAgICAgICAgICB4X2Z1bmN0aW9uOiAoZCkgPT4gZC54LFxyXG4gICAgICAgICAgICAgICAgICB5X2Z1bmN0aW9uOiAoZCkgPT4gZC55LShkLnJhZGl1cy85KSxcclxuICAgICAgICAgICAgICAgICAgXCJ1c2VyX3NlbGVjdFwiOlwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZV9mdW5jdGlvbjogKGQpID0+IGQucmFkaXVzLzUsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3Nlc1wiOlwiXCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgaWQ6XCJyb21WYWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCI0LjUyM1wiLFxyXG4gICAgICAgICAgICAgICAgICB4X2Z1bmN0aW9uOiAoZCkgPT4gZC54LFxyXG4gICAgICAgICAgICAgICAgICB5X2Z1bmN0aW9uOiAoZCkgPT4gZC55KyhkLnJhZGl1cy85KSxcclxuICAgICAgICAgICAgICAgICAgXCJ1c2VyX3NlbGVjdFwiOlwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZV9mdW5jdGlvbjogKGQpID0+IGQucmFkaXVzLzUsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcImNsYXNzZXNcIjpcIlwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIHg6IGNXaWR0aCAtIChjV2lkdGgvNC41KSxcclxuICAgICAgICAgIHk6IChjSGVpZ2h0LzgpLFxyXG4gICAgICAgICAgXCJyYWRpdXNcIjo0NTIzLzMwLFxyXG4gICAgICAgICAgc2VsZWN0ZWQ6dHJ1ZSxcclxuICAgICAgICAgIHNlbGVjdGFibGU6IHRydWUsXHJcbiAgICAgICAgICBjb2xvcjpcIiM2MTg0ZWRcIixcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgaWQ6IFwicm9tQnViYmxlXCJcclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICAgXCJpZFwiOlwic3B6QnViYmxlXCIsXHJcbiAgICAgICAgICBcInRleHRzXCI6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGlkOlwic3B6XCIsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNwYXppb1wiLFxyXG4gICAgICAgICAgICAgICAgICB4X2Z1bmN0aW9uOiAoZCkgPT4gZC54LFxyXG4gICAgICAgICAgICAgICAgICB5X2Z1bmN0aW9uOiAoZCkgPT4gZC55LShkLnJhZGl1cy85KSxcclxuICAgICAgICAgICAgICAgICAgXCJ1c2VyX3NlbGVjdFwiOlwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZV9mdW5jdGlvbjogKGQpID0+IGQucmFkaXVzLzUsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3Nlc1wiOlwiXCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgaWQ6XCJzcHpWYWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCIzLjk4MVwiLFxyXG4gICAgICAgICAgICAgICAgICB4X2Z1bmN0aW9uOiAoZCkgPT4gZC54LFxyXG4gICAgICAgICAgICAgICAgICB5X2Z1bmN0aW9uOiAoZCkgPT4gZC55KyhkLnJhZGl1cy85KSxcclxuICAgICAgICAgICAgICAgICAgXCJ1c2VyX3NlbGVjdFwiOlwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZV9mdW5jdGlvbjogKGQpID0+IGQucmFkaXVzLzUsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImdyZWVuXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3Nlc1wiOlwiXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgeDogKGNXaWR0aC8zLjUpLFxyXG4gICAgICAgICAgeTogY0hlaWdodC0oY0hlaWdodC8zLjUpLFxyXG4gICAgICAgICAgXCJyYWRpdXNcIjozOTgxLzY1LFxyXG4gICAgICAgICAgY29sb3I6XCIjZDE5YjEzXCIsXHJcbiAgICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcclxuICAgICAgICAgIHNlbGVjdGFibGU6IHRydWUsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGlkOiBcInNwekJ1YmJsZVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjpcImx1Y0J1YmJsZVwiLFxyXG4gICAgICAgICAgXCJ0ZXh0c1wiOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBpZDpcImx1Y1wiLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJMdWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgIHhfZnVuY3Rpb246IChkKSA9PiBkLngsXHJcbiAgICAgICAgICAgICAgICAgIHlfZnVuY3Rpb246IChkKSA9PiBkLnktKGQucmFkaXVzLzkpLFxyXG4gICAgICAgICAgICAgICAgICBcInVzZXJfc2VsZWN0XCI6XCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplX2Z1bmN0aW9uOiAoZCkgPT4gZC5yYWRpdXMvNSxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgXCJjbGFzc2VzXCI6XCJcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBpZDpcImx1Y1ZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIjIuMzQyXCIsXHJcbiAgICAgICAgICAgICAgICAgIHhfZnVuY3Rpb246IChkKSA9PiBkLngsXHJcbiAgICAgICAgICAgICAgICAgIHlfZnVuY3Rpb246IChkKSA9PiBkLnkrKGQucmFkaXVzLzkpLFxyXG4gICAgICAgICAgICAgICAgICBcInVzZXJfc2VsZWN0XCI6XCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplX2Z1bmN0aW9uOiAoZCkgPT4gZC5yYWRpdXMvNSxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3Nlc1wiOlwiXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgeDogMjAwLFxyXG4gICAgICAgICAgeTogMjAwLFxyXG4gICAgICAgICAgcmFkaXVzOjIzNDIvMjUsXHJcbiAgICAgICAgICBzZWxlY3RhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgY29sb3I6XCIjNjE4NGVkXCIsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGlkOiBcImx1Y0J1YmJsZVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICBdLFxyXG4gIGZvcmNlU2ltdWxhdGlvbkRhdGE6IHtcclxuICAgIHhQdWxsOiBjV2lkdGgvMixcclxuICAgIHhQdWxsU3RyZW5ndGg6IC0wLjAxLFxyXG4gICAgeVB1bGw6IGNIZWlnaHQvMixcclxuICAgIHlQdWxsU3RyZW5ndGg6IC0wLjAxLFxyXG4gICAgY29sbGlzaW9uU3RyZW5naDogMC45OSxcclxuICAgIGNvbGxpc2lvbkl0ZXJhdGlvbnM6IDEsXHJcbiAgICB2ZWxvY2l0eURlY2F5OiAwLjY1XHJcbiAgfSxcclxuICBtYXhCdWJibGVzU2VsZWN0ZWQ6M1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBCVUJCTEVDSEFSVF9NT0NLOiBJQnViYmxlQ2hhcnREYXRhID0gZGF0YVNvdXJjZTtcclxuIl19