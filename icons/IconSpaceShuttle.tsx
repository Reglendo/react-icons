

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

class IconSpaceShuttle extends React.Component<Props, State> {

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
                    <g><path d="m11.3 24.1q-2 1.1-4.9 1.1h-2.3v-1.1h-1.2q-0.2 0-0.4-0.4t-0.2-1.1q0-0.4 0.2-0.9-1.1 0-1.8-0.2t-0.7-0.3 0.7-0.4 1.8-0.2q-0.2-0.5-0.2-0.9 0-0.6 0.2-1t0.4-0.5h1.2v-1.1h2.3q2.9 0 4.9 1.1h20.3q0.7 0.2 1.9 0.4t1.5 0.2q1.6 0.3 2.7 0.8t1.5 0.8 0.4 0.8-0.4 0.7-1.5 0.9-2.7 0.7q-0.3 0.1-1.5 0.3t-1.9 0.3h-20.3z m20.4-4.6q1 0.6 1 1.7t-1 1.6l1.5 0.6q1.2-0.9 1.2-2.2t-1.2-2.3z m-20.3 4.9h18.5q-4 0.7-8.3 1.4-1.1 0-2.1 0.5t-1.5 0.8l-0.5 0.5-5.3 5.2q-0.4 0.5-1.2 0.8t-1.7 0.4h-1.7l-1.7-8.5h0.5q2.9 0 5-1.1z m-5-7.6h-0.5l1.7-8.5h1.7q0.9 0 1.7 0.4t1.2 0.8l5.3 5.3q0.1 0 0.2 0.1t0.5 0.5 0.9 0.5 1.2 0.4 1.3 0.2l8.3 1.5h-18.5q-2.1-1.2-5-1.2z"></path></g>
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

export default IconSpaceShuttle

