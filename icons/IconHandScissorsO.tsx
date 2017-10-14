

import * as React from "react"

export interface Props {
    size?: number
    text?: string
    title?: string
    style?: any
    addClass?: string
    viewBox?: string
    color?: string
    textFirst?: boolean
}
export interface State {
}

class IconHandScissorsO extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
    }

    render() {
        let className = `muk-icon ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                {this.props.text && this.props.textFirst &&
                    <span className={`muk-icon__text`}>
                        {this.props.text}
                    </span>
                }
                <svg className={`muk-icon__image`} preserveAspectRatio='xMidYMid meet'
                     fill={this.props.color}
                     stroke={this.props.color}
                     strokeWidth={0}
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m23.9 37.1h-3.9q-3.6 0-5-3.1-0.6-1.1-0.6-2.3v-0.1q-1.3-0.7-2.2-2t-0.8-2.8q0-0.9 0.1-1.1h-5.8q-2.4 0-4-1.7t-1.7-4 1.7-4 4-1.7h2.5l-0.9-0.4q-1.7-0.6-2.7-2.1t-1-3.2q0-2.4 1.6-4.1t4.1-1.6q1 0 2 0.3l14 5.4h9q2.4 0 4 1.6t1.7 4.1v14.9q0 2-1.2 3.5t-3.1 2l-7.6 1.9q-2.1 0.5-4.2 0.5z m-1-15.8l-3.5 1.6-3.6 1.6q-0.7 0.3-1.1 0.9t-0.4 1.4q0 1 0.7 1.7t1.8 0.8q0.6 0 1-0.2l7.6-3.5q-1.1-0.2-1.8-1.1t-0.7-2v-1.2z m7.1 6.9q0-1-0.7-1.8t-1.8-0.7q-0.6 0-1 0.2l-6.5 3q-0.6 0.3-0.8 0.4t-0.7 0.3-0.7 0.6-0.3 0.6-0.2 0.9q0 1.1 0.7 1.8t1.8 0.8q0.5 0 0.9-0.2l7.8-3.6q0.7-0.3 1.1-0.9t0.4-1.4z m-5.2-16.8l-14.5-5.5q-0.5-0.2-1-0.2-1.2 0-2 0.9t-0.9 2q0 0.9 0.5 1.6t1.4 1.1l11.7 4.4v1.4h-14.3q-1.2 0-2 0.9t-0.8 2 0.8 2 2 0.9h12l5.2-2.4v-4.4q0-1.4 1-2.4l2.5-2.3h-1.6z m-0.9 22.9q1.9 0 3.5-0.4l7.6-1.9q0.9-0.3 1.5-1.1t0.6-1.7v-14.9q0-1.2-0.8-2t-2-0.9h-6.9l-3 2.8q-0.8 0.8-0.8 1.9v6.6q0 1 0.7 1.7t1.8 0.7 1.7-0.8 0.8-1.8v-4.6h0.7v4.6q0 1.6-1.3 2.5 1.2 0.2 1.9 1.1t0.8 2.1q0 1-0.5 1.8t-1.4 1.1l-6.9 3.2h2.1z"></path></g>
                </svg>
                {this.props.text && !this.props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {this.props.text}
                    </span>
                }
            </span>
        )
    }
}

export default IconHandScissorsO

