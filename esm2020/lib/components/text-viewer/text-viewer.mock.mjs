export const TEXT_VIEWER_MOCK = {
    // TODO: update with mock values
    endpoint: 'http://staging.teipublisher.netseven.it/exist/apps/tei-publisher',
    // endpoint: 'http://localhost:8081/exist/apps/tei-publisher',
    // endpoint: 'https://teipublisher.com/exist/apps/tei-publisher',
    docs: [
        {
            xml: 'petrarca/de-viris_i_23_3_2022_1648127195.xml',
            // xml: 'petrarca/petrarca_seniles-1_1654626178-1_1665152343.xml',
            rootPath: 'api/mrcparts',
            odd: 'petrarca_1-1',
            id: 'seniles',
            view: 'div',
            download: '',
            url: 'http://petrarca-sls.netseven.it/search_text_hl?root=1.4.2.2.6.8&query-text=kempen&resource-id=5&xml=petrarca/petrarca_seniles-1_1654626178-1_1665152343.xml&searchId=xml_text'
        },
        /* {
          // xml: 'test/graves6.xml',
          xml: 'mambrino/1660136990_SM1_commentary_082022-2.xml',
          odd: 'mambrino_2-0',
          id: 'seniles2',
          view: 'page',
          channel: 'altrochannel',
        }, */
    ],
    download: {
        label: 'Download',
        file: 'http://staging.teipublisher.netseven.it/exist/apps/tei-publisher/api/document/mambrino%2Fsm1_source_def_1647334393.xml',
        format: 'XML',
    },
    labels: {
        toc: 'table of contents',
        loading: 'loading',
        view: 'view',
        select: {
            label: 'Entità',
            type: {
                all: 'Tutti',
                person: 'Personaggi',
                place: 'Luoghi'
            }
        },
        index: {
            show: 'Riassunto',
            hide: 'Indici',
        },
    },
    facsimile: {
        uri: 'https://dh.dlls.univr.it/iiif/3/mambrino%2famadis-13_1-1558BNE%2f',
        // uri: 'http://127.0.0.1:8182/iiif/3/',
        scans: [],
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC12aWV3ZXIubW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2R2LWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy90ZXh0LXZpZXdlci90ZXh0LXZpZXdlci5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFtQjtJQUM5QyxnQ0FBZ0M7SUFDaEMsUUFBUSxFQUFFLGtFQUFrRTtJQUM1RSw4REFBOEQ7SUFDOUQsaUVBQWlFO0lBQ2pFLElBQUksRUFBRTtRQUNKO1lBQ0UsR0FBRyxFQUFFLDhDQUE4QztZQUNuRCxrRUFBa0U7WUFDbEUsUUFBUSxFQUFFLGNBQWM7WUFDeEIsR0FBRyxFQUFFLGNBQWM7WUFDbkIsRUFBRSxFQUFFLFNBQVM7WUFDYixJQUFJLEVBQUUsS0FBSztZQUNYLFFBQVEsRUFBRSxFQUFFO1lBQ1osR0FBRyxFQUFFLCtLQUErSztTQUNyTDtRQUNEOzs7Ozs7O2FBT0s7S0FDTjtJQUNELFFBQVEsRUFDTjtRQUNFLEtBQUssRUFBRSxVQUFVO1FBQ2pCLElBQUksRUFBRSx3SEFBd0g7UUFDOUgsTUFBTSxFQUFFLEtBQUs7S0FDZDtJQUNILE1BQU0sRUFBRTtRQUNOLEdBQUcsRUFBRSxtQkFBbUI7UUFDeEIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsUUFBUTtZQUNmLElBQUksRUFBRTtnQkFDSixHQUFHLEVBQUUsT0FBTztnQkFDWixNQUFNLEVBQUUsWUFBWTtnQkFDcEIsS0FBSyxFQUFFLFFBQVE7YUFDaEI7U0FDRjtRQUNELEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxXQUFXO1lBQ2pCLElBQUksRUFBRSxRQUFRO1NBQ2Y7S0FDRjtJQUNELFNBQVMsRUFBRTtRQUNULEdBQUcsRUFBRSxtRUFBbUU7UUFDeEUsd0NBQXdDO1FBQ3hDLEtBQUssRUFBRSxFQUFFO0tBQ1Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dFZpZXdlckRhdGEgfSBmcm9tICcuL3RleHQtdmlld2VyJztcblxuZXhwb3J0IGNvbnN0IFRFWFRfVklFV0VSX01PQ0s6IFRleHRWaWV3ZXJEYXRhID0ge1xuICAvLyBUT0RPOiB1cGRhdGUgd2l0aCBtb2NrIHZhbHVlc1xuICBlbmRwb2ludDogJ2h0dHA6Ly9zdGFnaW5nLnRlaXB1Ymxpc2hlci5uZXRzZXZlbi5pdC9leGlzdC9hcHBzL3RlaS1wdWJsaXNoZXInLFxuICAvLyBlbmRwb2ludDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MS9leGlzdC9hcHBzL3RlaS1wdWJsaXNoZXInLFxuICAvLyBlbmRwb2ludDogJ2h0dHBzOi8vdGVpcHVibGlzaGVyLmNvbS9leGlzdC9hcHBzL3RlaS1wdWJsaXNoZXInLFxuICBkb2NzOiBbXG4gICAge1xuICAgICAgeG1sOiAncGV0cmFyY2EvZGUtdmlyaXNfaV8yM18zXzIwMjJfMTY0ODEyNzE5NS54bWwnLFxuICAgICAgLy8geG1sOiAncGV0cmFyY2EvcGV0cmFyY2Ffc2VuaWxlcy0xXzE2NTQ2MjYxNzgtMV8xNjY1MTUyMzQzLnhtbCcsXG4gICAgICByb290UGF0aDogJ2FwaS9tcmNwYXJ0cycsXG4gICAgICBvZGQ6ICdwZXRyYXJjYV8xLTEnLFxuICAgICAgaWQ6ICdzZW5pbGVzJyxcbiAgICAgIHZpZXc6ICdkaXYnLFxuICAgICAgZG93bmxvYWQ6ICcnLFxuICAgICAgdXJsOiAnaHR0cDovL3BldHJhcmNhLXNscy5uZXRzZXZlbi5pdC9zZWFyY2hfdGV4dF9obD9yb290PTEuNC4yLjIuNi44JnF1ZXJ5LXRleHQ9a2VtcGVuJnJlc291cmNlLWlkPTUmeG1sPXBldHJhcmNhL3BldHJhcmNhX3NlbmlsZXMtMV8xNjU0NjI2MTc4LTFfMTY2NTE1MjM0My54bWwmc2VhcmNoSWQ9eG1sX3RleHQnXG4gICAgfSxcbiAgICAvKiB7XG4gICAgICAvLyB4bWw6ICd0ZXN0L2dyYXZlczYueG1sJyxcbiAgICAgIHhtbDogJ21hbWJyaW5vLzE2NjAxMzY5OTBfU00xX2NvbW1lbnRhcnlfMDgyMDIyLTIueG1sJyxcbiAgICAgIG9kZDogJ21hbWJyaW5vXzItMCcsXG4gICAgICBpZDogJ3NlbmlsZXMyJyxcbiAgICAgIHZpZXc6ICdwYWdlJyxcbiAgICAgIGNoYW5uZWw6ICdhbHRyb2NoYW5uZWwnLFxuICAgIH0sICovXG4gIF0sXG4gIGRvd25sb2FkOlxuICAgIHtcbiAgICAgIGxhYmVsOiAnRG93bmxvYWQnLFxuICAgICAgZmlsZTogJ2h0dHA6Ly9zdGFnaW5nLnRlaXB1Ymxpc2hlci5uZXRzZXZlbi5pdC9leGlzdC9hcHBzL3RlaS1wdWJsaXNoZXIvYXBpL2RvY3VtZW50L21hbWJyaW5vJTJGc20xX3NvdXJjZV9kZWZfMTY0NzMzNDM5My54bWwnLFxuICAgICAgZm9ybWF0OiAnWE1MJyxcbiAgICB9LFxuICBsYWJlbHM6IHtcbiAgICB0b2M6ICd0YWJsZSBvZiBjb250ZW50cycsXG4gICAgbG9hZGluZzogJ2xvYWRpbmcnLFxuICAgIHZpZXc6ICd2aWV3JyxcbiAgICBzZWxlY3Q6IHtcbiAgICAgIGxhYmVsOiAnRW50aXTDoCcsXG4gICAgICB0eXBlOiB7XG4gICAgICAgIGFsbDogJ1R1dHRpJyxcbiAgICAgICAgcGVyc29uOiAnUGVyc29uYWdnaScsXG4gICAgICAgIHBsYWNlOiAnTHVvZ2hpJ1xuICAgICAgfVxuICAgIH0sXG4gICAgaW5kZXg6IHtcbiAgICAgIHNob3c6ICdSaWFzc3VudG8nLFxuICAgICAgaGlkZTogJ0luZGljaScsXG4gICAgfSxcbiAgfSxcbiAgZmFjc2ltaWxlOiB7XG4gICAgdXJpOiAnaHR0cHM6Ly9kaC5kbGxzLnVuaXZyLml0L2lpaWYvMy9tYW1icmlubyUyZmFtYWRpcy0xM18xLTE1NThCTkUlMmYnLFxuICAgIC8vIHVyaTogJ2h0dHA6Ly8xMjcuMC4wLjE6ODE4Mi9paWlmLzMvJyxcbiAgICBzY2FuczogW10sXG4gIH0sXG59O1xuIl19