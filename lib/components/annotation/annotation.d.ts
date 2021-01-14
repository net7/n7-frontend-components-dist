import { Anchor, Icon } from '../../shared-interfaces';
/**
 * Interface for AnnotationComponent's "data"
 *
 * @property user (required)
 *  - image (optional)
 *  - name (required)
 *  - anchor (optional)
 * @property date (required)
 * @property notebook (required)
 *  - name (required)
 *  - anchor (optional)
 * @property icon (optional)
 * @property body (required)
 * @property comment (optional)
 * @property classes (optional)
 */
export interface AnnotationData {
    /** User data */
    user: {
        /** Profile picture */
        image: string;
        /** User full name */
        name: string;
        /** Navigate to user page */
        anchor?: Anchor;
    };
    /** Date string */
    date: string;
    /** Parent notebook data */
    notebook: {
        /** Notebook title */
        name: string;
        /** Notebook navigation */
        anchor: Anchor;
    };
    /** View the annotation in a minimal form */
    isCollapsed: boolean;
    /** Menu in the top-right corner of the annotation */
    menu?: {
        icon: Icon;
        actions: {
            label: string;
            payload: any;
        }[];
        notebooks: {
            header: {
                label: string;
                icon: Icon;
                payload: any;
            };
            items: {
                label: string;
                payload: any;
            }[];
        };
        classes?: string;
    };
    /** Annotated text */
    body: string;
    /** Annotation comment */
    comment?: string;
    /** HTML Classes */
    classes?: string;
    /** element click payload */
    payload?: any;
    /** additional data useful for the component's logic */
    _meta?: any;
}
export declare class AnnotationComponent {
    data: AnnotationData;
    emit: any;
    onClick(ev: Event, payload: any): void;
    onContainerClick(target: HTMLElement, payload: any): void;
}
