/// <reference types="react" />
import * as React from "react";
export interface Props {
    size?: number;
    text?: string | Element | JSX.Element;
    title?: string;
    style?: any;
    addClass?: string;
    viewBox?: string;
    color?: string;
    textFirst?: boolean;
    className?: string;
}
declare class IconHeartO extends React.Component<Props, {}> {
    shouldComponentUpdate(nextProps: any): boolean;
    static defaultProps: Props;
    render(): JSX.Element;
}
export default IconHeartO;
