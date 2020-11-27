import { Anchor, Icon } from 'dv-components-lib/lib/shared-interfaces';
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
    /** Icon in the top-right corner of the annotation */
    icon?: Icon;
    /** Annotated text */
    body: string;
    /** Annotation comment */
    comment?: string;
    /** HTML Classes */
    classes?: string;
}
export declare class AnnotationComponent {
    data: AnnotationData;
    emit: any;
    onClick(payload: any): void;
}
