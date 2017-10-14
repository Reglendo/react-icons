

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

class IconPaw extends React.Component<Props, State> {

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
                    <g><path d="m18.9 10.5q0 1.4-0.4 2.6t-1.4 2-2.4 0.9q-1.7 0-3-1.3t-2.1-3-0.7-3.4q0-1.3 0.5-2.5t1.4-2.1 2.3-0.8q1.7 0 3.1 1.2t2 3.1 0.7 3.3z m-7.6 10.8q0 1.8-1 3.1t-2.6 1.3q-1.7 0-3.2-1.2t-2.2-3-0.8-3.4q0-1.8 0.9-3.1t2.7-1.3q1.7 0 3.2 1.2t2.2 3 0.8 3.4z m8.8-0.6q2.6 0 5.7 2.2t5.1 5.3 2 5.7q0 1-0.3 1.7t-1.1 1-1.5 0.4-1.7 0.1q-1.5 0-4.2-1t-4-1q-1.5 0-4.3 1t-4.5 1q-4.1 0-4.1-3.2 0-2 1.3-4.3t3.1-4.3 4.2-3.3 4.3-1.3z m5.3-4.7q-1.4 0-2.3-0.9t-1.4-2-0.5-2.6q0-1.6 0.7-3.3t2-3.1 3.1-1.2q1.4 0 2.4 0.8t1.4 2.1 0.4 2.5q0 1.7-0.7 3.4t-2 3-3.1 1.3z m9.7-2.3q1.7 0 2.6 1.3t0.9 3.1q0 1.7-0.7 3.4t-2.3 3-3.1 1.2q-1.8 0-2.7-1.3t-0.9-3.1q0-1.6 0.7-3.4t2.3-3 3.2-1.2z"></path></g>
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

export default IconPaw

