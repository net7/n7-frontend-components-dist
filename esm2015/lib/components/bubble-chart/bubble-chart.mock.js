/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/bubble-chart/bubble-chart.mock.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0Lm1vY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2J1YmJsZS1jaGFydC9idWJibGUtY2hhcnQubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7TUFHTSxNQUFNLEdBQUcsSUFBSTs7TUFDYixPQUFPLEdBQUcsR0FBRzs7Ozs7QUFjVyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7QUFDVixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDOzs7O0FBRWhCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUM7Ozs7QUFPeEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7O0FBQ1YsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQzs7OztBQUVoQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDOzs7O0FBcUJ4QixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7QUFDVixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDOzs7O0FBRWhCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUM7Ozs7QUFPeEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7O0FBQ1YsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQzs7OztBQUVoQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDOzs7O0FBcUJ4QixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7QUFDVixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDOzs7O0FBRWhCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUM7Ozs7QUFPeEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7O0FBQ1YsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQzs7OztBQUVoQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDOzs7O0FBcUJ4QixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7QUFDVixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDOzs7O0FBRWhCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUM7Ozs7QUFPeEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7O0FBQ1YsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQzs7OztBQUVoQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDOzs7O0FBcUJ4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QUFPLEdBQUMsQ0FBQztRQUNoQixhQUFhLEVBQUUsQ0FBQyxJQUFJO1FBQ3BCLGdCQUFnQixFQUFFLElBQUk7UUFDdEIsbUJBQW1CLEVBQUUsQ0FBQztRQUN0QixhQUFhLEVBQUUsSUFBSTtLQUNwQjtJQUNELGtCQUFrQixFQUFDLENBQUM7Q0FDckI7O0FBSUQsTUFBTSxPQUFPLGdCQUFnQixHQUFxQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUJ1YmJsZUNoYXJ0RGF0YSB9IGZyb20gJy4vYnViYmxlLWNoYXJ0JztcblxuXG5jb25zdCBjV2lkdGggPSAxMDAwO1xuY29uc3QgY0hlaWdodCA9IDUwMDtcblxudmFyIGRhdGFTb3VyY2UgPSB7XG4gIGNvbnRhaW5lcklkOiBcImJ1YmJsZUNoYXJ0Q29udGFpbmVyXCIsXG4gIGNvbnRhaW5lcldpZHRoIDogY1dpZHRoLFxuICBjb250YWluZXJIZWlnaHQgOiBjSGVpZ2h0LFxuICBpc0ZvcmNlU2ltdWxhdGlvbkVuYWJsZWQ6IHRydWUsXG4gIGJ1YmJsZXNEYXRhIDogW1xuICAgICAge1xuICAgICAgICAgIFwiaWRcIjpcIm1sbkJ1YmJsZVwiLFxuICAgICAgICAgIFwidGV4dHNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZDpcIm1sblwiLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTWlsYW5vXCIsXG4gICAgICAgICAgICAgICAgICB4X2Z1bmN0aW9uOiAoZCkgPT4gZC54LFxuICAgICAgICAgICAgICAgICAgeV9mdW5jdGlvbjogKGQpID0+IGQueS0oZC5yYWRpdXMvOSksXG4gICAgICAgICAgICAgICAgICBcInVzZXJfc2VsZWN0XCI6XCJub25lXCIsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZV9mdW5jdGlvbjogKGQpID0+IGQucmFkaXVzLzUsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJncmVlblwiLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc2VzXCI6XCJtb25vc3BhY2UtdGV4dFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlkOlwibWxuVmFsdWVcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIjkuNzQ2XCIsXG4gICAgICAgICAgICAgICAgICB4X2Z1bmN0aW9uOiAoZCkgPT4gZC54LFxuICAgICAgICAgICAgICAgICAgeV9mdW5jdGlvbjogKGQpID0+IGQueSsoZC5yYWRpdXMvOSksXG4gICAgICAgICAgICAgICAgICBcInVzZXJfc2VsZWN0XCI6XCJub25lXCIsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZV9mdW5jdGlvbjogKGQpID0+IGQucmFkaXVzLzYsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc2VzXCI6XCJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICB4OiBjV2lkdGgvMis1MCxcbiAgICAgICAgICB5OiBjSGVpZ2h0LzIrNTAsXG4gICAgICAgICAgXCJyYWRpdXNcIjo5NzQ2Lzc1LFxuICAgICAgICAgIGNvbG9yOlwiIzc5YWQ4N1wiLFxuICAgICAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgICAgIHNlbGVjdGFibGU6IHRydWUsXG4gICAgICAgICAgcGF5bG9hZDp7XG4gICAgICAgICAgICBpZDogXCJtbG5CdWJibGVcIlxuICAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgXCJpZFwiOlwibmFwbEJ1YmJsZVwiLFxuICAgICAgICAgIFwidGV4dHNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZDpcIm5hcFwiLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTmFwb2xpXCIsXG4gICAgICAgICAgICAgICAgICB4X2Z1bmN0aW9uOiAoZCkgPT4gZC54LFxuICAgICAgICAgICAgICAgICAgeV9mdW5jdGlvbjogKGQpID0+IGQueS0oZC5yYWRpdXMvOSksXG4gICAgICAgICAgICAgICAgICBcInVzZXJfc2VsZWN0XCI6XCJub25lXCIsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZV9mdW5jdGlvbjogKGQpID0+IGQucmFkaXVzLzUsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc2VzXCI6XCJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZDpcIm5hcFZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCIzLjk4MVwiLFxuICAgICAgICAgICAgICAgICAgeF9mdW5jdGlvbjogKGQpID0+IGQueCxcbiAgICAgICAgICAgICAgICAgIHlfZnVuY3Rpb246IChkKSA9PiBkLnkrKGQucmFkaXVzLzkpLFxuICAgICAgICAgICAgICAgICAgXCJ1c2VyX3NlbGVjdFwiOlwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemVfZnVuY3Rpb246IChkKSA9PiBkLnJhZGl1cy81LFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmVkXCIsXG4gICAgICAgICAgICAgICAgICBcImNsYXNzZXNcIjpcIlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIHg6IGNXaWR0aC0xMjAsXG4gICAgICAgICAgeTogY0hlaWdodC0xMjAsXG4gICAgICAgICAgXCJyYWRpdXNcIjozOTgxLzQ1LFxuICAgICAgICAgIGNvbG9yOlwiI2QxOWIxM1wiLFxuICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgICBzZWxlY3RhYmxlOiB0cnVlLFxuICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIGlkOiBcIm5hcGxCdWJibGVcIlxuICAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgXCJpZFwiOlwicm9tQnViYmxlXCIsXG4gICAgICAgICAgXCJ0ZXh0c1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlkOlwicm9tXCIsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJSb21hXCIsXG4gICAgICAgICAgICAgICAgICB4X2Z1bmN0aW9uOiAoZCkgPT4gZC54LFxuICAgICAgICAgICAgICAgICAgeV9mdW5jdGlvbjogKGQpID0+IGQueS0oZC5yYWRpdXMvOSksXG4gICAgICAgICAgICAgICAgICBcInVzZXJfc2VsZWN0XCI6XCJub25lXCIsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZV9mdW5jdGlvbjogKGQpID0+IGQucmFkaXVzLzUsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc2VzXCI6XCJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZDpcInJvbVZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCI0LjUyM1wiLFxuICAgICAgICAgICAgICAgICAgeF9mdW5jdGlvbjogKGQpID0+IGQueCxcbiAgICAgICAgICAgICAgICAgIHlfZnVuY3Rpb246IChkKSA9PiBkLnkrKGQucmFkaXVzLzkpLFxuICAgICAgICAgICAgICAgICAgXCJ1c2VyX3NlbGVjdFwiOlwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemVfZnVuY3Rpb246IChkKSA9PiBkLnJhZGl1cy81LFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmVkXCIsXG4gICAgICAgICAgICAgICAgICBcImNsYXNzZXNcIjpcIlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIHg6IGNXaWR0aCAtIChjV2lkdGgvNC41KSxcbiAgICAgICAgICB5OiAoY0hlaWdodC84KSxcbiAgICAgICAgICBcInJhZGl1c1wiOjQ1MjMvMzAsXG4gICAgICAgICAgc2VsZWN0ZWQ6dHJ1ZSxcbiAgICAgICAgICBzZWxlY3RhYmxlOiB0cnVlLFxuICAgICAgICAgIGNvbG9yOlwiIzYxODRlZFwiLFxuICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIGlkOiBcInJvbUJ1YmJsZVwiXG4gICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICBcImlkXCI6XCJzcHpCdWJibGVcIixcbiAgICAgICAgICBcInRleHRzXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWQ6XCJzcHpcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNwYXppb1wiLFxuICAgICAgICAgICAgICAgICAgeF9mdW5jdGlvbjogKGQpID0+IGQueCxcbiAgICAgICAgICAgICAgICAgIHlfZnVuY3Rpb246IChkKSA9PiBkLnktKGQucmFkaXVzLzkpLFxuICAgICAgICAgICAgICAgICAgXCJ1c2VyX3NlbGVjdFwiOlwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemVfZnVuY3Rpb246IChkKSA9PiBkLnJhZGl1cy81LFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3Nlc1wiOlwiXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWQ6XCJzcHpWYWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiMy45ODFcIixcbiAgICAgICAgICAgICAgICAgIHhfZnVuY3Rpb246IChkKSA9PiBkLngsXG4gICAgICAgICAgICAgICAgICB5X2Z1bmN0aW9uOiAoZCkgPT4gZC55KyhkLnJhZGl1cy85KSxcbiAgICAgICAgICAgICAgICAgIFwidXNlcl9zZWxlY3RcIjpcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplX2Z1bmN0aW9uOiAoZCkgPT4gZC5yYWRpdXMvNSxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImdyZWVuXCIsXG4gICAgICAgICAgICAgICAgICBcImNsYXNzZXNcIjpcIlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIHg6IChjV2lkdGgvMy41KSxcbiAgICAgICAgICB5OiBjSGVpZ2h0LShjSGVpZ2h0LzMuNSksXG4gICAgICAgICAgXCJyYWRpdXNcIjozOTgxLzY1LFxuICAgICAgICAgIGNvbG9yOlwiI2QxOWIxM1wiLFxuICAgICAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgICAgIHNlbGVjdGFibGU6IHRydWUsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgaWQ6IFwic3B6QnViYmxlXCJcbiAgICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgIFwiaWRcIjpcImx1Y0J1YmJsZVwiLFxuICAgICAgICAgIFwidGV4dHNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZDpcImx1Y1wiLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTHVjZVwiLFxuICAgICAgICAgICAgICAgICAgeF9mdW5jdGlvbjogKGQpID0+IGQueCxcbiAgICAgICAgICAgICAgICAgIHlfZnVuY3Rpb246IChkKSA9PiBkLnktKGQucmFkaXVzLzkpLFxuICAgICAgICAgICAgICAgICAgXCJ1c2VyX3NlbGVjdFwiOlwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemVfZnVuY3Rpb246IChkKSA9PiBkLnJhZGl1cy81LFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3Nlc1wiOlwiXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWQ6XCJsdWNWYWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiMi4zNDJcIixcbiAgICAgICAgICAgICAgICAgIHhfZnVuY3Rpb246IChkKSA9PiBkLngsXG4gICAgICAgICAgICAgICAgICB5X2Z1bmN0aW9uOiAoZCkgPT4gZC55KyhkLnJhZGl1cy85KSxcbiAgICAgICAgICAgICAgICAgIFwidXNlcl9zZWxlY3RcIjpcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplX2Z1bmN0aW9uOiAoZCkgPT4gZC5yYWRpdXMvNSxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc2VzXCI6XCJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICB4OiAyMDAsXG4gICAgICAgICAgeTogMjAwLFxuICAgICAgICAgIHJhZGl1czoyMzQyLzI1LFxuICAgICAgICAgIHNlbGVjdGFibGU6IHRydWUsXG4gICAgICAgICAgY29sb3I6XCIjNjE4NGVkXCIsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgaWQ6IFwibHVjQnViYmxlXCJcbiAgICAgICAgICB9XG4gICAgICB9XG4gIF0sXG4gIGZvcmNlU2ltdWxhdGlvbkRhdGE6IHtcbiAgICB4UHVsbDogY1dpZHRoLzIsXG4gICAgeFB1bGxTdHJlbmd0aDogLTAuMDEsXG4gICAgeVB1bGw6IGNIZWlnaHQvMixcbiAgICB5UHVsbFN0cmVuZ3RoOiAtMC4wMSxcbiAgICBjb2xsaXNpb25TdHJlbmdoOiAwLjk5LFxuICAgIGNvbGxpc2lvbkl0ZXJhdGlvbnM6IDEsXG4gICAgdmVsb2NpdHlEZWNheTogMC42NVxuICB9LFxuICBtYXhCdWJibGVzU2VsZWN0ZWQ6M1xufVxuXG5cblxuZXhwb3J0IGNvbnN0IEJVQkJMRUNIQVJUX01PQ0s6IElCdWJibGVDaGFydERhdGEgPSBkYXRhU291cmNlO1xuIl19