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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQubW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2R2LWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9jaGFydC9jaGFydC5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBYztJQUVuQyxXQUFXLEVBQUUsWUFBWTtJQUN6QixVQUFVLEVBQUU7UUFDVixLQUFLLEVBQUU7WUFDTCxNQUFNLEVBQUUsR0FBRztZQUNYLEtBQUssRUFBRSxJQUFJO1lBQ1gsSUFBSSxFQUFFLE1BQU07WUFDWixPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO1NBQ3hCO1FBQ0QsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtRQUM5QixNQUFNLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxxQkFBcUIsQ0FBQztRQUN0RCxJQUFJLEVBQUU7WUFDSixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDO1lBQzlCLFFBQVEsRUFBRSxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRTtTQUMvQztRQUNELE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO1FBQzVDLE1BQU0sRUFBRTtZQUNOO2dCQUNFLElBQUksRUFBRSxlQUFlO2dCQUNyQixJQUFJLEVBQUU7b0JBQ0osQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLENBQUM7b0JBQzFDLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxDQUFDO29CQUMxQyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sQ0FBQztvQkFDMUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLENBQUM7b0JBQzFDLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxDQUFDO29CQUMxQyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sQ0FBQztvQkFDMUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLENBQUM7b0JBQzFDLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxDQUFDO29CQUMxQyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sQ0FBQztvQkFDMUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLENBQUM7b0JBQzFDLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxDQUFDO29CQUMxQyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sQ0FBQztvQkFDMUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLENBQUM7b0JBQzFDLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxDQUFDO29CQUMxQyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sQ0FBQztvQkFDMUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLENBQUM7b0JBQzFDLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxDQUFDO2lCQUFDO2FBQzlDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLElBQUksRUFBRTtvQkFDSixDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sQ0FBQztvQkFDMUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLENBQUM7b0JBQzFDLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxDQUFDO29CQUMxQyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sQ0FBQztvQkFDMUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLENBQUM7b0JBQzFDLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxDQUFDO29CQUMxQyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sQ0FBQztvQkFDMUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLENBQUM7b0JBQzFDLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxDQUFDO29CQUMxQyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sQ0FBQztvQkFDMUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLENBQUM7b0JBQzFDLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxD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RUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtLQUNsRDtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFydERhdGEgfSBmcm9tICcuL2NoYXJ0JztcblxuZXhwb3J0IGNvbnN0IENIQVJUX01PQ0s6IENoYXJ0RGF0YSA9IHtcblxuICBjb250YWluZXJJZDogJ3Rlc3QtQ2hhcnQnLFxuICBsaWJPcHRpb25zOiB7XG4gICAgY2hhcnQ6IHtcbiAgICAgIGhlaWdodDogNTUwLFxuICAgICAgd2lkdGg6IDE1MDAsXG4gICAgICB0eXBlOiAnYXJlYScsXG4gICAgICB0b29sYmFyOiB7IHNob3c6IHRydWUgfVxuICAgIH0sXG4gICAgZGF0YUxhYmVsczogeyBlbmFibGVkOiBmYWxzZSB9LFxuICAgIGNvbG9yczogWydyZ2JhKDE2Myw1NSwxMTksIDEpJywgJ3JnYmEoMTQ2LDkzLDI1NSwgMSknXSxcbiAgICBmaWxsOiB7XG4gICAgICBjb2xvcnM6IFsnI2EzMzc3NycsICcjOTI1REZGJ10sXG4gICAgICBncmFkaWVudDogeyBvcGFjaXR5RnJvbTogMC41LCBvcGFjaXR5VG86IDAuMSB9XG4gICAgfSxcbiAgICBzdHJva2U6IHsgY3VydmU6ICdzdHJhaWdodCcsIHdpZHRoOiBbMiwgMV0gfSxcbiAgICBzZXJpZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1JlZGRpc2ggdmFsdWUnLFxuICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgW25ldyBEYXRlKCcyMDE5LTA4LTAxJykuZ2V0VGltZSgpLCA3NzAuMTddLFxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0wMicpLmdldFRpbWUoKSwgNjQ1LjAzXSxcbiAgICAgICAgICBbbmV3IERhdGUoJzIwMTktMDgtMDMnKS5nZXRUaW1lKCksIDcwOS4zMl0sXG4gICAgICAgICAgW25ldyBEYXRlKCcyMDE5LTA4LTA0JykuZ2V0VGltZSgpLCA3MDguMTFdLFxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0wNScpLmdldFRpbWUoKSwgNzA2LjU5XSxcbiAgICAgICAgICBbbmV3IERhdGUoJzIwMTktMDgtMDYnKS5nZXRUaW1lKCksIDYwNy4yOF0sXG4gICAgICAgICAgW25ldyBEYXRlKCcyMDE5LTA4LTA3JykuZ2V0VGltZSgpLCA0OTQuNTldLFxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0wOCcpLmdldFRpbWUoKSwgNjM2LjgxXSxcbiAgICAgICAgICBbbmV3IERhdGUoJzIwMTktMDgtMDknKS5nZXRUaW1lKCksIDcwOS4wNF0sXG4gICAgICAgICAgW25ldyBEYXRlKCcyMDE5LTA4LTEwJykuZ2V0VGltZSgpLCA3MTcuMzFdLFxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0xMScpLmdldFRpbWUoKSwgODA1LjYxXSxcbiAgICAgICAgICBbbmV3IERhdGUoJzIwMTktMDgtMTInKS5nZXRUaW1lKCksIDc1OC42MF0sXG4gICAgICAgICAgW25ldyBEYXRlKCcyMDE5LTA4LTEzJykuZ2V0VGltZSgpLCA2MTIuODJdLFxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0xNCcpLmdldFRpbWUoKSwgNjA4LjkwXSxcbiAgICAgICAgICBbbmV3IERhdGUoJzIwMTktMDgtMTUnKS5nZXRUaW1lKCksIDczNC42OF0sXG4gICAgICAgICAgW25ldyBEYXRlKCcyMDE5LTA4LTE2JykuZ2V0VGltZSgpLCA4MzguNTRdLFxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0xNycpLmdldFRpbWUoKSwgNjkyLjg4XV1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdQdXJwbGUgdmFsdWUnLFxuICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgW25ldyBEYXRlKCcyMDE5LTA4LTAxJykuZ2V0VGltZSgpLCA5MjcuMDRdLFxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0wMicpLmdldFRpbWUoKSwgOTQ0LjY2XSxcbiAgICAgICAgICBbbmV3IERhdGUoJzIwMTktMDgtMDMnKS5nZXRUaW1lKCksIDg2MC44NF0sXG4gICAgICAgICAgW25ldyBEYXRlKCcyMDE5LTA4LTA0JykuZ2V0VGltZSgpLCA4NjcuMjhdLFxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0wNScpLmdldFRpbWUoKSwgOTQ3LjU1XSxcbiAgICAgICAgICBbbmV3IERhdGUoJzIwMTktMDgtMDYnKS5nZXRUaW1lKCksIDc5OC45NF0sXG4gICAgICAgICAgW25ldyBEYXRlKCcyMDE5LTA4LTA3JykuZ2V0VGltZSgpLCA3NTcuNjZdLFxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0wOCcpLmdldFRpbWUoKSwgNzI5LjU3XSxcbiAgICAgICAgICBbbmV3IERhdGUoJzIwMTktMDgtMDknKS5nZXRUaW1lKCksIDY3OS41OF0sXG4gICAgICAgICAgW25ldyBEYXRlKCcyMDE5LTA4LTEwJykuZ2V0VGltZSgpLCA2MTguNzhdLFxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0xMScpLmdldFRpbWUoKSwgODA1LjYxXSxcbiAgICAgICAgICBbbmV3IERhdGUoJzIwMTktMDgtMTInKS5nZXRUaW1lKCksIDc5MS4xOF0sXG4gICAgICAgICAgW25ldyBEYXRlKCcyMDE5LTA4LTEzJykuZ2V0VGltZSgpLCA5MTMuNzhdLFxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0xNCcpLmdldFRpbWUoKSwgNjA4LjkwXSxcbiAgICAgICAgICBbbmV3IERhdGUoJzIwMTktMDgtMTUnKS5nZXRUaW1lKCksIDYxMS44OF0sXG4gICAgICAgICAgW25ldyBEYXRlKCcyMDE5LTA4LTE2JykuZ2V0VGltZSgpLCA3NDQuMDJdLFxuICAgICAgICAgIFtuZXcgRGF0ZSgnMjAxOS0wOC0xNycpLmdldFRpbWUoKSwgNjAwLjQ2XV1cbiAgICAgIH1cbiAgICBdLFxuICAgIGdyaWQ6IHtcbiAgICAgIGJvcmRlckNvbG9yOiAnI2U3ZTdlNycsXG4gICAgICBzdHJva2VEYXNoQXJyYXk6IDMsXG4gICAgICB4YXhpczogeyBsaW5lczogeyBzaG93OiB0cnVlIH0gfVxuICAgIH0sXG4gICAgbWFya2VyczogeyBzaXplOiAzLCBob3ZlcjogeyBzaXplOiA2IH0gfSxcbiAgICB4YXhpczoge1xuICAgICAgYXhpc0JvcmRlcjogeyBzaG93OiB0cnVlLCBjb2xvcjogJyNmNGY2ZmMnIH0sXG4gICAgICBsYWJlbHM6IHt9LFxuICAgICAgdHlwZTogJ2RhdGV0aW1lJyxcbiAgICAgIHRpY2tBbW91bnQ6IDZcbiAgICB9LFxuICAgIHlheGlzOiBbXG4gICAgICB7XG4gICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgIHNob3dBbHdheXM6IGZhbHNlLFxuICAgICAgICBvcHBvc2l0ZTogZmFsc2UsXG4gICAgICAgIHJldmVyc2VkOiBmYWxzZSxcbiAgICAgICAgbG9nYXJpdGhtaWM6IGZhbHNlLFxuICAgICAgICBmb3JjZU5pY2VTY2FsZTogZmFsc2UsXG4gICAgICAgIGZsb2F0aW5nOiBmYWxzZSxcbiAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICBtaW5XaWR0aDogMCxcbiAgICAgICAgICBtYXhXaWR0aDogMTYwLFxuICAgICAgICAgIG9mZnNldFg6IDAsXG4gICAgICAgICAgb2Zmc2V0WTogMCxcbiAgICAgICAgICByb3RhdGU6IDAsXG4gICAgICAgICAgcGFkZGluZzogMjAsXG4gICAgICAgICAgc3R5bGU6IHsgZm9udFNpemU6ICcxMXB4JywgY3NzQ2xhc3M6ICcnIH1cbiAgICAgICAgfSxcbiAgICAgICAgYXhpc0JvcmRlcjoge1xuICAgICAgICAgIHNob3c6IHRydWUsIGNvbG9yOiAnI2Y0ZjZmYycsIG9mZnNldFg6IDAsIG9mZnNldFk6IDBcbiAgICAgICAgfSxcbiAgICAgICAgYXhpc1RpY2tzOiB7XG4gICAgICAgICAgc2hvdzogZmFsc2UsIGNvbG9yOiAnIzc4OTA5QycsIHdpZHRoOiA2LCBvZmZzZXRYOiAwLCBvZmZzZXRZOiAwXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgdGV4dDogJ1AgVG90YWxlIMKwQycsIHJvdGF0ZTogOTAsIG9mZnNldFk6IDAsIG9mZnNldFg6IDAsIHN0eWxlOiB7IGZvbnRTaXplOiAnMTFweCcsIGNzc0NsYXNzOiAnJyB9XG4gICAgICAgIH0sXG4gICAgICAgIHRvb2x0aXA6IHsgZW5hYmxlZDogZmFsc2UsIG9mZnNldFg6IDAgfSxcbiAgICAgICAgY3Jvc3NoYWlyczogeyBzaG93OiB0cnVlLCBwb3NpdGlvbjogJ2Zyb250Jywgc3Ryb2tlOiB7IGNvbG9yOiAnI2I2YjZiNicsIHdpZHRoOiAxLCBkYXNoQXJyYXk6IDAgfSB9XG4gICAgICB9XG4gICAgXSxcbiAgICBsZWdlbmQ6IHsgc2hvdzogdHJ1ZSB9LFxuICAgIHRvb2x0aXA6IHt9LFxuICAgIGFubm90YXRpb25zOiB7IHlheGlzOiBbXSwgeGF4aXM6IFtdLCBwb2ludHM6IFtdIH1cbiAgfVxufTtcbiJdfQ==