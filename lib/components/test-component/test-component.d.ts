export interface ITestComponentData {
    id: string;
    title: string;
    body: string;
}
/**
 * TestComponent <dv-test-component>
 *
 * example:
 * ```html
 * <dv-test-component [data]="{
 *   'id': 'test-component-id',
 *   'title': 'test component title',
 *   'body': 'test body...'
 * }"></dv-test-component>
 * ```
 */
export declare class TestComponent {
    data: ITestComponentData;
    emit: any;
    /**
     * click event
     *
     * @param data
     * @returns
     * @memberof TestComponent
     */
    onClick(data: any): void;
}
