export const TEXT_VIEWER_MOCK = {
    // TODO: update with mock values
    endpoint: 'http://staging.teipublisher.netseven.it/exist/apps/tei-publisher',
    docs: [
        {
            xml: 'test/seniles.xml',
            odd: 'test',
            id: 'seniles'
        },
        {
            xml: 'test/seniles.xml',
            odd: 'test',
            id: 'seniles2',
            channel: 'altrochannel'
        },
    ],
    facsimile: {
        uri: 'http://127.0.0.1:8182/iiif/2/',
        scans: ['001r.tif', '001v.tif', '002r.tif', '002v.tif', '003r.tif', '003v.tif', '004r.tif', '004v.tif', '005r.tif', '005v.tif', '006r.tif', '006v.tif', '007r.tif', '007v.tif', '008r.tif', '008v.tif', '009r.tif', '009v.tif', '010r.tif', '010v.tif', '011r.tif']
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC12aWV3ZXIubW9jay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGV4dC12aWV3ZXIvdGV4dC12aWV3ZXIubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBbUI7SUFDOUMsZ0NBQWdDO0lBQ2hDLFFBQVEsRUFBRSxrRUFBa0U7SUFDNUUsSUFBSSxFQUFFO1FBQ0o7WUFDRSxHQUFHLEVBQUUsa0JBQWtCO1lBQ3ZCLEdBQUcsRUFBRSxNQUFNO1lBQ1gsRUFBRSxFQUFFLFNBQVM7U0FDZDtRQUNEO1lBQ0UsR0FBRyxFQUFFLGtCQUFrQjtZQUN2QixHQUFHLEVBQUUsTUFBTTtZQUNYLEVBQUUsRUFBRSxVQUFVO1lBQ2QsT0FBTyxFQUFFLGNBQWM7U0FDeEI7S0FDRjtJQUNELFNBQVMsRUFBRTtRQUNULEdBQUcsRUFBRSwrQkFBK0I7UUFDcEMsS0FBSyxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUM7S0FDcFE7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dFZpZXdlckRhdGEgfSBmcm9tICcuL3RleHQtdmlld2VyJztcblxuZXhwb3J0IGNvbnN0IFRFWFRfVklFV0VSX01PQ0s6IFRleHRWaWV3ZXJEYXRhID0ge1xuICAvLyBUT0RPOiB1cGRhdGUgd2l0aCBtb2NrIHZhbHVlc1xuICBlbmRwb2ludDogJ2h0dHA6Ly9zdGFnaW5nLnRlaXB1Ymxpc2hlci5uZXRzZXZlbi5pdC9leGlzdC9hcHBzL3RlaS1wdWJsaXNoZXInLFxuICBkb2NzOiBbXG4gICAge1xuICAgICAgeG1sOiAndGVzdC9zZW5pbGVzLnhtbCcsXG4gICAgICBvZGQ6ICd0ZXN0JyxcbiAgICAgIGlkOiAnc2VuaWxlcydcbiAgICB9LFxuICAgIHtcbiAgICAgIHhtbDogJ3Rlc3Qvc2VuaWxlcy54bWwnLFxuICAgICAgb2RkOiAndGVzdCcsXG4gICAgICBpZDogJ3NlbmlsZXMyJyxcbiAgICAgIGNoYW5uZWw6ICdhbHRyb2NoYW5uZWwnXG4gICAgfSxcbiAgXSxcbiAgZmFjc2ltaWxlOiB7XG4gICAgdXJpOiAnaHR0cDovLzEyNy4wLjAuMTo4MTgyL2lpaWYvMi8nLFxuICAgIHNjYW5zOiBbJzAwMXIudGlmJywgJzAwMXYudGlmJywgJzAwMnIudGlmJywgJzAwMnYudGlmJywgJzAwM3IudGlmJywgJzAwM3YudGlmJywgJzAwNHIudGlmJywgJzAwNHYudGlmJywgJzAwNXIudGlmJywgJzAwNXYudGlmJywgJzAwNnIudGlmJywgJzAwNnYudGlmJywgJzAwN3IudGlmJywgJzAwN3YudGlmJywgJzAwOHIudGlmJywgJzAwOHYudGlmJywgJzAwOXIudGlmJywgJzAwOXYudGlmJywgJzAxMHIudGlmJywgJzAxMHYudGlmJywgJzAxMXIudGlmJ11cbiAgfVxufTtcbiJdfQ==