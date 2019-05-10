export interface ITestComponentData {
    id: string;
    title: string;
    body: string;
}
export declare class TestComponent {
    data: ITestComponentData;
    emit: any;
    onClick(data: any): void;
}
