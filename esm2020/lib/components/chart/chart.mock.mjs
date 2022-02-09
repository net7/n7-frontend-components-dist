export const CHART_MOCK = {
    containerId: 'test-Chart',
    libOptions: {
        chart: {
            height: 550,
            width: 1500,
            type: 'area',
            toolbar: { show: true }
        },
        dataLabels: { enabled: false },
        colors: ['rgba(163,55,119, 1)', 'rgba(146,93,255, 1)'],
        fill: {
            colors: ['#a33777', '#925DFF'],
            gradient: { opacityFrom: 0.5, opacityTo: 0.1 }
        },
        stroke: { curve: 'straight', width: [2, 1] },
        series: [
            {
                name: 'Reddish value',
                data: [
                    [new Date('2019-08-01').getTime(), 770.17],
                    [new Date('2019-08-02').getTime(), 645.03],
                    [new Date('2019-08-03').getTime(), 709.32],
                    [new Date('2019-08-04').getTime(), 708.11],
                    [new Date('2019-08-05').getTime(), 706.59],
                    [new Date('2019-08-06').getTime(), 607.28],
                    [new Date('2019-08-07').getTime(), 494.59],
                    [new Date('2019-08-08').getTime(), 636.81],
                    [new Date('2019-08-09').getTime(), 709.04],
                    [new Date('2019-08-10').getTime(), 717.31],
                    [new Date('2019-08-11').getTime(), 805.61],
                    [new Date('2019-08-12').getTime(), 758.60],
                    [new Date('2019-08-13').getTime(), 612.82],
                    [new Date('2019-08-14').getTime(), 608.90],
                    [new Date('2019-08-15').getTime(), 734.68],
                    [new Date('2019-08-16').getTime(), 838.54],
                    [new Date('2019-08-17').getTime(), 692.88]
                ]
            },
            {
                name: 'Purple value',
                data: [
                    [new Date('2019-08-01').getTime(), 927.04],
                    [new Date('2019-08-02').getTime(), 944.66],
                    [new Date('2019-08-03').getTime(), 860.84],
                    [new Date('2019-08-04').getTime(), 867.28],
                    [new Date('2019-08-05').getTime(), 947.55],
                    [new Date('2019-08-06').getTime(), 798.94],
                    [new Date('2019-08-07').getTime(), 757.66],
                    [new Date('2019-08-08').getTime(), 729.57],
                    [new Date('2019-08-09').getTime(), 679.58],
                    [new Date('2019-08-10').getTime(), 618.78],
                    [new Date('2019-08-11').getTime(), 805.61],
                    [new Date('2019-08-12').getTime(), 791.18],
                    [new Date('2019-08-13').getTime(), 913.78],
                    [new Date('2019-08-14').getTime(), 608.90],
                    [new Date('2019-08-15').getTime(), 611.88],
                    [new Date('2019-08-16').getTime(), 744.02],
                    [new Date('2019-08-17').getTime(), 600.46]
                ]
            }
        ],
        grid: {
            borderColor: '#e7e7e7',
            strokeDashArray: 3,
            xaxis: { lines: { show: true } }
        },
        markers: { size: 3, hover: { size: 6 } },
        xaxis: {
            axisBorder: { show: true, color: '#f4f6fc' },
            labels: {},
            type: 'datetime',
            tickAmount: 6
        },
        yaxis: [
            {
                show: true,
                showAlways: false,
                opposite: false,
                reversed: false,
                logarithmic: false,
                forceNiceScale: false,
                floating: false,
                labels: {
                    show: true,
                    minWidth: 0,
                    maxWidth: 160,
                    offsetX: 0,
                    offsetY: 0,
                    rotate: 0,
                    padding: 20,
                    style: { fontSize: '11px', cssClass: '' }
                },
                axisBorder: {
                    show: true, color: '#f4f6fc', offsetX: 0, offsetY: 0
                },
                axisTicks: {
                    show: false, color: '#78909C', width: 6, offsetX: 0, offsetY: 0
                },
                title: {
                    text: 'P Totale °C', rotate: 90, offsetY: 0, offsetX: 0, style: { fontSize: '11px', cssClass: '' }
                },
                tooltip: { enabled: false, offsetX: 0 },
                crosshairs: { show: true, position: 'front', stroke: { color: '#b6b6b6', width: 1, dashArray: 0 } }
            }
        ],
        legend: { show: true },
        tooltip: {},
        annotations: { yaxis: [], xaxis: [], points: [] }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQubW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2R2LWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9jaGFydC9jaGFydC5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBYztJQUVuQyxXQUFXLEVBQUUsWUFBWTtJQUN6QixVQUFVLEVBQUU7UUFDVixLQUFLLEVBQUU7WUFDTCxNQUFNLEVBQUUsR0FBRztZQUNYLEtBQUssRUFBRSxJQUFJO1lBQ1gsSUFBSSxFQUFFLE1BQU07WUFDWixPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO1NBQ3hCO1FBQ0QsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtRQUM5QixNQUFNLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxxQkFBcUIsQ0FBQztRQUN0RCxJQUFJLEVBQUU7WUFDSixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDO1lBQzlCLFFBQVEsRUFBRSxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRTtTQUMvQztRQUNELE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO1FBQzVDLE1BQU0sRUFBRTtZQUNOO2dCQUNFLElBQUksRUFBRSxlQUFlO2dCQUNyQixJQUFJLEVBQUU7b0JBQ0osQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLENBQUM7b0JBQzFDLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxDQUFDO29CQUMxQyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sQ0FBQztvQkFDMUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLENBQUM7b0JBQzFDLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxDQUFDO29CQUMxQyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sQ0FBQztvQkFDMUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLENBQUM7b0JBQzFDLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxDQUFDO29CQUMxQyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sQ0FBQztvQkFDMUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLENBQUM7b0JBQzFDLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxDQUFDO29CQUMxQyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sQ0FBQztvQkFDMUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLENBQUM7b0JBQzFDLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxDQUFDO29CQUMxQyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sQ0FBQztvQkFDMUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLENBQUM7b0JBQzFDLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxDQUFDO2lCQUFDO2FBQzlDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLElBQUksRUFBRTtvQkFDSixDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sQ0FBQztvQkFDMUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLENBQUM7b0JBQzFDLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxDQUFDO29CQUMxQyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sQ0FBQztvQkFDMUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLENBQUM7b0JBQzFDLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxDQUFDO29CQUMxQyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sQ0FBQztvQkFDMUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLENBQUM7b0JBQzFDLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxDQUFDO29CQUMxQyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sQ0FBQztvQkFDMUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLENBQUM7b0JBQzFDLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxD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RUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtLQUNsRDtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFydERhdGEgfSBmcm9tICcuL2NoYXJ0JztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFSVF9NT0NLOiBDaGFydERhdGEgPSB7XHJcblxyXG4gIGNvbnRhaW5lcklkOiAndGVzdC1DaGFydCcsXHJcbiAgbGliT3B0aW9uczoge1xyXG4gICAgY2hhcnQ6IHtcclxuICAgICAgaGVpZ2h0OiA1NTAsXHJcbiAgICAgIHdpZHRoOiAxNTAwLFxyXG4gICAgICB0eXBlOiAnYXJlYScsXHJcbiAgICAgIHRvb2xiYXI6IHsgc2hvdzogdHJ1ZSB9XHJcbiAgICB9LFxyXG4gICAgZGF0YUxhYmVsczogeyBlbmFibGVkOiBmYWxzZSB9LFxyXG4gICAgY29sb3JzOiBbJ3JnYmEoMTYzLDU1LDExOSwgMSknLCAncmdiYSgxNDYsOTMsMjU1LCAxKSddLFxyXG4gICAgZmlsbDoge1xyXG4gICAgICBjb2xvcnM6IFsnI2EzMzc3NycsICcjOTI1REZGJ10sXHJcbiAgICAgIGdyYWRpZW50OiB7IG9wYWNpdHlGcm9tOiAwLjUsIG9wYWNpdHlUbzogMC4xIH1cclxuICAgIH0sXHJcbiAgICBzdHJva2U6IHsgY3VydmU6ICdzdHJhaWdodCcsIHdpZHRoOiBbMiwgMV0gfSxcclxuICAgIHNlcmllczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1JlZGRpc2ggdmFsdWUnLFxyXG4gICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0wMScpLmdldFRpbWUoKSwgNzcwLjE3XSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0wMicpLmdldFRpbWUoKSwgNjQ1LjAzXSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0wMycpLmdldFRpbWUoKSwgNzA5LjMyXSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0wNCcpLmdldFRpbWUoKSwgNzA4LjExXSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0wNScpLmdldFRpbWUoKSwgNzA2LjU5XSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0wNicpLmdldFRpbWUoKSwgNjA3LjI4XSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0wNycpLmdldFRpbWUoKSwgNDk0LjU5XSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0wOCcpLmdldFRpbWUoKSwgNjM2LjgxXSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0wOScpLmdldFRpbWUoKSwgNzA5LjA0XSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0xMCcpLmdldFRpbWUoKSwgNzE3LjMxXSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0xMScpLmdldFRpbWUoKSwgODA1LjYxXSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0xMicpLmdldFRpbWUoKSwgNzU4LjYwXSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0xMycpLmdldFRpbWUoKSwgNjEyLjgyXSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0xNCcpLmdldFRpbWUoKSwgNjA4LjkwXSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0xNScpLmdldFRpbWUoKSwgNzM0LjY4XSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0xNicpLmdldFRpbWUoKSwgODM4LjU0XSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0xNycpLmdldFRpbWUoKSwgNjkyLjg4XV1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdQdXJwbGUgdmFsdWUnLFxyXG4gICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0wMScpLmdldFRpbWUoKSwgOTI3LjA0XSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0wMicpLmdldFRpbWUoKSwgOTQ0LjY2XSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0wMycpLmdldFRpbWUoKSwgODYwLjg0XSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0wNCcpLmdldFRpbWUoKSwgODY3LjI4XSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0wNScpLmdldFRpbWUoKSwgOTQ3LjU1XSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0wNicpLmdldFRpbWUoKSwgNzk4Ljk0XSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0wNycpLmdldFRpbWUoKSwgNzU3LjY2XSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0wOCcpLmdldFRpbWUoKSwgNzI5LjU3XSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0wOScpLmdldFRpbWUoKSwgNjc5LjU4XSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0xMCcpLmdldFRpbWUoKSwgNjE4Ljc4XSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0xMScpLmdldFRpbWUoKSwgODA1LjYxXSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0xMicpLmdldFRpbWUoKSwgNzkxLjE4XSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0xMycpLmdldFRpbWUoKSwgOTEzLjc4XSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0xNCcpLmdldFRpbWUoKSwgNjA4LjkwXSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0xNScpLmdldFRpbWUoKSwgNjExLjg4XSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0xNicpLmdldFRpbWUoKSwgNzQ0LjAyXSxcclxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0xNycpLmdldFRpbWUoKSwgNjAwLjQ2XV1cclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgIGdyaWQ6IHtcclxuICAgICAgYm9yZGVyQ29sb3I6ICcjZTdlN2U3JyxcclxuICAgICAgc3Ryb2tlRGFzaEFycmF5OiAzLFxyXG4gICAgICB4YXhpczogeyBsaW5lczogeyBzaG93OiB0cnVlIH0gfVxyXG4gICAgfSxcclxuICAgIG1hcmtlcnM6IHsgc2l6ZTogMywgaG92ZXI6IHsgc2l6ZTogNiB9IH0sXHJcbiAgICB4YXhpczoge1xyXG4gICAgICBheGlzQm9yZGVyOiB7IHNob3c6IHRydWUsIGNvbG9yOiAnI2Y0ZjZmYycgfSxcclxuICAgICAgbGFiZWxzOiB7fSxcclxuICAgICAgdHlwZTogJ2RhdGV0aW1lJyxcclxuICAgICAgdGlja0Ftb3VudDogNlxyXG4gICAgfSxcclxuICAgIHlheGlzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgIHNob3dBbHdheXM6IGZhbHNlLFxyXG4gICAgICAgIG9wcG9zaXRlOiBmYWxzZSxcclxuICAgICAgICByZXZlcnNlZDogZmFsc2UsXHJcbiAgICAgICAgbG9nYXJpdGhtaWM6IGZhbHNlLFxyXG4gICAgICAgIGZvcmNlTmljZVNjYWxlOiBmYWxzZSxcclxuICAgICAgICBmbG9hdGluZzogZmFsc2UsXHJcbiAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgbWluV2lkdGg6IDAsXHJcbiAgICAgICAgICBtYXhXaWR0aDogMTYwLFxyXG4gICAgICAgICAgb2Zmc2V0WDogMCxcclxuICAgICAgICAgIG9mZnNldFk6IDAsXHJcbiAgICAgICAgICByb3RhdGU6IDAsXHJcbiAgICAgICAgICBwYWRkaW5nOiAyMCxcclxuICAgICAgICAgIHN0eWxlOiB7IGZvbnRTaXplOiAnMTFweCcsIGNzc0NsYXNzOiAnJyB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBheGlzQm9yZGVyOiB7XHJcbiAgICAgICAgICBzaG93OiB0cnVlLCBjb2xvcjogJyNmNGY2ZmMnLCBvZmZzZXRYOiAwLCBvZmZzZXRZOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBheGlzVGlja3M6IHtcclxuICAgICAgICAgIHNob3c6IGZhbHNlLCBjb2xvcjogJyM3ODkwOUMnLCB3aWR0aDogNiwgb2Zmc2V0WDogMCwgb2Zmc2V0WTogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgIHRleHQ6ICdQIFRvdGFsZSDCsEMnLCByb3RhdGU6IDkwLCBvZmZzZXRZOiAwLCBvZmZzZXRYOiAwLCBzdHlsZTogeyBmb250U2l6ZTogJzExcHgnLCBjc3NDbGFzczogJycgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9vbHRpcDogeyBlbmFibGVkOiBmYWxzZSwgb2Zmc2V0WDogMCB9LFxyXG4gICAgICAgIGNyb3NzaGFpcnM6IHsgc2hvdzogdHJ1ZSwgcG9zaXRpb246ICdmcm9udCcsIHN0cm9rZTogeyBjb2xvcjogJyNiNmI2YjYnLCB3aWR0aDogMSwgZGFzaEFycmF5OiAwIH0gfVxyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgbGVnZW5kOiB7IHNob3c6IHRydWUgfSxcclxuICAgIHRvb2x0aXA6IHt9LFxyXG4gICAgYW5ub3RhdGlvbnM6IHsgeWF4aXM6IFtdLCB4YXhpczogW10sIHBvaW50czogW10gfVxyXG4gIH1cclxufTtcclxuIl19