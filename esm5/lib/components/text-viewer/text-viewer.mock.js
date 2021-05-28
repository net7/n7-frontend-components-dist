export var TEXT_VIEWER_MOCK = {
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
        {
            xml: 'murucademo/La_volpe_e_l_uva_1615547140.xml',
            odd: 'demo_1-0',
            id: 'seniles',
            view: 'div',
            channel: 'altrochannel',
            translation: true
        },
    ],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC12aWV3ZXIubW9jay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGV4dC12aWV3ZXIvdGV4dC12aWV3ZXIubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsSUFBTSxnQkFBZ0IsR0FBbUI7SUFDOUMsZ0NBQWdDO0lBQ2hDLFFBQVEsRUFBRSxrRUFBa0U7SUFDNUUsaUVBQWlFO0lBQ2pFLElBQUksRUFBRTtRQUNKLElBQUk7UUFDSixxQ0FBcUM7UUFDckMsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsS0FBSztRQUNMO1lBQ0UsR0FBRyxFQUFFLDRDQUE0QztZQUNqRCxHQUFHLEVBQUUsVUFBVTtZQUNmLEVBQUUsRUFBRSxTQUFTO1lBQ2IsSUFBSSxFQUFFLEtBQUs7WUFDWCxPQUFPLEVBQUUsY0FBYztZQUN2QixXQUFXLEVBQUUsSUFBSTtTQUNsQjtLQWNGO0NBS0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHRWaWV3ZXJEYXRhIH0gZnJvbSAnLi90ZXh0LXZpZXdlcic7XG5cbmV4cG9ydCBjb25zdCBURVhUX1ZJRVdFUl9NT0NLOiBUZXh0Vmlld2VyRGF0YSA9IHtcbiAgLy8gVE9ETzogdXBkYXRlIHdpdGggbW9jayB2YWx1ZXNcbiAgZW5kcG9pbnQ6ICdodHRwOi8vc3RhZ2luZy50ZWlwdWJsaXNoZXIubmV0c2V2ZW4uaXQvZXhpc3QvYXBwcy90ZWktcHVibGlzaGVyJyxcbiAgLy8gZW5kcG9pbnQ6ICdodHRwczovL3RlaXB1Ymxpc2hlci5jb20vZXhpc3QvYXBwcy90ZWktcHVibGlzaGVyJyxcbiAgZG9jczogW1xuICAgIC8vIHtcbiAgICAvLyAgIHhtbDogJ3BsYXlncm91bmQvc2VuaWxlc180LnhtbCcsXG4gICAgLy8gICBvZGQ6ICdtdXJ1Y2FfMS0wJyxcbiAgICAvLyAgIGlkOiAnc2VuaWxlcycsXG4gICAgLy8gICB2aWV3OiAnZGl2J1xuICAgIC8vIH0sXG4gICAge1xuICAgICAgeG1sOiAnbXVydWNhZGVtby9MYV92b2xwZV9lX2xfdXZhXzE2MTU1NDcxNDAueG1sJyxcbiAgICAgIG9kZDogJ2RlbW9fMS0wJyxcbiAgICAgIGlkOiAnc2VuaWxlcycsXG4gICAgICB2aWV3OiAnZGl2JyxcbiAgICAgIGNoYW5uZWw6ICdhbHRyb2NoYW5uZWwnLFxuICAgICAgdHJhbnNsYXRpb246IHRydWVcbiAgICB9LFxuICAgIC8vIHtcbiAgICAvLyAgIHhtbDogJ3BsYXlncm91bmQvMTMxX1NGRVJBTVVOREkxXzE2MDYxNTI5MDEuLnhtbCcsXG4gICAgLy8gICBvZGQ6ICdzZmVyYW11bmRpXzEtMCcsXG4gICAgLy8gICBpZDogJ3NlbmlsZXMnLFxuICAgIC8vICAgdmlldzogJ3BhZ2UnXG4gICAgLy8gfSxcbiAgICAvLyB7XG4gICAgLy8gICB4bWw6ICdwbGF5Z3JvdW5kL3NmZXJhY29tbS54bWwnLFxuICAgIC8vICAgb2RkOiAnc2ZlcmFtdW5kaV8xLTAnLFxuICAgIC8vICAgaWQ6ICdzZW5pbGVzMicsXG4gICAgLy8gICB2aWV3OiAncGFnZScsXG4gICAgLy8gICBjaGFubmVsOiAnYWx0cm9jaGFubmVsJ1xuICAgIC8vIH0sXG4gIF0sXG4gIC8vIGZhY3NpbWlsZToge1xuICAvLyAgIHVyaTogJ2h0dHA6Ly8xMjcuMC4wLjE6ODE4Mi9paWlmLzIvJyxcbiAgLy8gICBzY2FuczogWycwMDFyLnRpZicsICcwMDF2LnRpZicsICcwMDJyLnRpZicsICcwMDJ2LnRpZiddXG4gIC8vIH1cbn07XG4iXX0=