export const TEXT_VIEWER_MOCK = {
    // TODO: update with mock values
    endpoint: 'http://staging.teipublisher.netseven.it/exist/apps/tei-publisher',
    // endpoint: 'https://teipublisher.com/exist/apps/tei-publisher',
    docs: [
        // {
        //   xml: 'playground/seniles_4.xml',
        //   odd: 'muruca_1-0',
        //   id: 'seniles',
        //   view: 'div'
        // },
        // {
        //   xml: 'murucademo/La_volpe_e_l_uva_1615547140.xml',
        //   odd: 'demo_1-0',
        //   id: 'seniles',
        //   view: 'div',
        //   channel: 'altrochannel',
        //   translation: true
        // },
        {
            xml: 'mambrino/13_1_sm1_primi10caps-2_1623837525.xml',
            odd: 'sferamundi_1-1',
            id: 'seniles',
            view: 'page'
        },
        {
            xml: 'playground/sferacomm.xml',
            odd: 'sferamundi_1-1',
            id: 'seniles2',
            view: 'page',
            channel: 'altrochannel'
        },
    ],
    facsimile: {
        uri: 'http://127.0.0.1:8182/iiif/2/',
        scans: ['001r.tif', '001v.tif', '002r.tif', '002v.tif']
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC12aWV3ZXIubW9jay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGV4dC12aWV3ZXIvdGV4dC12aWV3ZXIubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBbUI7SUFDOUMsZ0NBQWdDO0lBQ2hDLFFBQVEsRUFBRSxrRUFBa0U7SUFDNUUsaUVBQWlFO0lBQ2pFLElBQUksRUFBRTtRQUNKLElBQUk7UUFDSixxQ0FBcUM7UUFDckMsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsS0FBSztRQUNMLElBQUk7UUFDSix1REFBdUQ7UUFDdkQscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsNkJBQTZCO1FBQzdCLHNCQUFzQjtRQUN0QixLQUFLO1FBQ0w7WUFDRSxHQUFHLEVBQUUsZ0RBQWdEO1lBQ3JELEdBQUcsRUFBRSxnQkFBZ0I7WUFDckIsRUFBRSxFQUFFLFNBQVM7WUFDYixJQUFJLEVBQUUsTUFBTTtTQUNiO1FBQ0Q7WUFDRSxHQUFHLEVBQUUsMEJBQTBCO1lBQy9CLEdBQUcsRUFBRSxnQkFBZ0I7WUFDckIsRUFBRSxFQUFFLFVBQVU7WUFDZCxJQUFJLEVBQUUsTUFBTTtZQUNaLE9BQU8sRUFBRSxjQUFjO1NBQ3hCO0tBQ0Y7SUFDRCxTQUFTLEVBQUU7UUFDVCxHQUFHLEVBQUUsK0JBQStCO1FBQ3BDLEtBQUssRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQztLQUN4RDtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0Vmlld2VyRGF0YSB9IGZyb20gJy4vdGV4dC12aWV3ZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRFWFRfVklFV0VSX01PQ0s6IFRleHRWaWV3ZXJEYXRhID0ge1xyXG4gIC8vIFRPRE86IHVwZGF0ZSB3aXRoIG1vY2sgdmFsdWVzXHJcbiAgZW5kcG9pbnQ6ICdodHRwOi8vc3RhZ2luZy50ZWlwdWJsaXNoZXIubmV0c2V2ZW4uaXQvZXhpc3QvYXBwcy90ZWktcHVibGlzaGVyJyxcclxuICAvLyBlbmRwb2ludDogJ2h0dHBzOi8vdGVpcHVibGlzaGVyLmNvbS9leGlzdC9hcHBzL3RlaS1wdWJsaXNoZXInLFxyXG4gIGRvY3M6IFtcclxuICAgIC8vIHtcclxuICAgIC8vICAgeG1sOiAncGxheWdyb3VuZC9zZW5pbGVzXzQueG1sJyxcclxuICAgIC8vICAgb2RkOiAnbXVydWNhXzEtMCcsXHJcbiAgICAvLyAgIGlkOiAnc2VuaWxlcycsXHJcbiAgICAvLyAgIHZpZXc6ICdkaXYnXHJcbiAgICAvLyB9LFxyXG4gICAgLy8ge1xyXG4gICAgLy8gICB4bWw6ICdtdXJ1Y2FkZW1vL0xhX3ZvbHBlX2VfbF91dmFfMTYxNTU0NzE0MC54bWwnLFxyXG4gICAgLy8gICBvZGQ6ICdkZW1vXzEtMCcsXHJcbiAgICAvLyAgIGlkOiAnc2VuaWxlcycsXHJcbiAgICAvLyAgIHZpZXc6ICdkaXYnLFxyXG4gICAgLy8gICBjaGFubmVsOiAnYWx0cm9jaGFubmVsJyxcclxuICAgIC8vICAgdHJhbnNsYXRpb246IHRydWVcclxuICAgIC8vIH0sXHJcbiAgICB7XHJcbiAgICAgIHhtbDogJ21hbWJyaW5vLzEzXzFfc20xX3ByaW1pMTBjYXBzLTJfMTYyMzgzNzUyNS54bWwnLFxyXG4gICAgICBvZGQ6ICdzZmVyYW11bmRpXzEtMScsXHJcbiAgICAgIGlkOiAnc2VuaWxlcycsXHJcbiAgICAgIHZpZXc6ICdwYWdlJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgeG1sOiAncGxheWdyb3VuZC9zZmVyYWNvbW0ueG1sJyxcclxuICAgICAgb2RkOiAnc2ZlcmFtdW5kaV8xLTEnLFxyXG4gICAgICBpZDogJ3NlbmlsZXMyJyxcclxuICAgICAgdmlldzogJ3BhZ2UnLFxyXG4gICAgICBjaGFubmVsOiAnYWx0cm9jaGFubmVsJ1xyXG4gICAgfSxcclxuICBdLFxyXG4gIGZhY3NpbWlsZToge1xyXG4gICAgdXJpOiAnaHR0cDovLzEyNy4wLjAuMTo4MTgyL2lpaWYvMi8nLFxyXG4gICAgc2NhbnM6IFsnMDAxci50aWYnLCAnMDAxdi50aWYnLCAnMDAyci50aWYnLCAnMDAydi50aWYnXVxyXG4gIH1cclxufTtcclxuIl19