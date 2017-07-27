

import * as React from "react"

export interface Props {
    size?: number
    text?: string
    title?: string
    style?: any
    addClass?: string
    viewBox?: string
}
export interface State {
}

class IconJsfiddle extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    }

    render() {
        let className = `${this.name} ${this.name}--jsfiddle ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m34.9 17.6q2.2 0.9 3.5 2.8t1.4 4.3q0 3.2-2.3 5.5t-5.6 2.2q0 0-0.2 0t-0.2 0h-23.6q-3.3-0.2-5.6-2.4t-2.3-5.5q0-2.1 1.1-3.9t2.8-2.9q-0.2-0.7-0.2-1.6 0-2.2 1.6-3.8t3.8-1.5q1.9 0 3.4 1.1 1.4-3 4.3-4.8t6.3-1.8q3.3 0 6 1.5t4.3 4.3 1.6 5.8q0 0.1-0.1 0.3t0 0.4z m-25.8 5.2q0 2.3 1.6 3.7t4.1 1.4q2.6 0 4.6-1.9-0.3-0.4-0.9-1.1t-0.9-1q-1.3 1.2-2.8 1.2-1 0-1.8-0.6t-0.7-1.7q0-1 0.7-1.7t1.8-0.7q0.9 0 1.6 0.5t1.5 1 1.2 1.5 1.4 1.6 1.5 1.4 1.8 1.1 2.4 0.4q2.4 0 4-1.4t1.6-3.7q0-2.3-1.6-3.7t-4.1-1.4q-2.7 0-4.6 1.9 0.2 0.3 0.5 0.7t0.7 0.7 0.6 0.7q1.3-1.3 2.7-1.3 1 0 1.8 0.7t0.8 1.6q0 1.1-0.7 1.8t-1.9 0.7q-0.8 0-1.6-0.4t-1.4-1.1-1.2-1.5-1.4-1.6-1.5-1.4-1.8-1.1-2.3-0.4q-2.4 0-4.1 1.4t-1.6 3.7z"></path></g>
                </svg>
                {this.props.text ? (
                    <span className={`${this.name}__text`}>
                        {this.props.text}
                    </span>
                ) : null}
            </span>
        )
    }
}

export default IconJsfiddle

