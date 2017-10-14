

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

class IconCab extends React.Component<Props, State> {

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
                    <g><path d="m35.4 20q1.8 0 3.1 1.3t1.3 3v7.5q0 0.3-0.2 0.4t-0.5 0.2h-1.8v1.3q0 1.5-1.1 2.6t-2.7 1.1-2.6-1.1-1.1-2.6v-1.3h-19.9v1.3q0 1.5-1 2.6t-2.7 1.1-2.6-1.1-1.1-2.6v-1.3h-1.9q-0.3 0-0.4-0.2t-0.2-0.4v-7.5q0-1.8 1.3-3t3-1.3h0.6l2-8.1q0.5-1.9 2-3.1t3.5-1.2h2.5v-4.4q0-0.2 0.2-0.4t0.4-0.2h8.7q0.3 0 0.5 0.2t0.1 0.4v4.4h2.5q1.9 0 3.5 1.2t2 3.1l2.1 8.1h0.5z m-29.2 9.3q1.3 0 2.2-0.9t0.9-2.2-0.9-2.2-2.2-0.9-2.2 0.9-0.9 2.2 0.9 2.2 2.2 0.9z m3.8-9.3h19.7l-1.7-6.9q0-0.2-0.3-0.4t-0.4-0.2h-14.9q-0.2 0-0.4 0.2t-0.3 0.4z m23.5 9.3q1.3 0 2.2-0.9t0.9-2.2-0.9-2.2-2.2-0.9-2.2 0.9-0.9 2.2 0.9 2.2 2.2 0.9z"></path></g>
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

export default IconCab

