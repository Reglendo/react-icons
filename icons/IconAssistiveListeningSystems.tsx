

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

class IconAssistiveListeningSystems extends React.Component<Props, State> {

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
                    <g><path d="m2.9 38.6q0 0.5-0.5 1t-1 0.4-1-0.4-0.4-1 0.4-1 1-0.5 1 0.5 0.5 1z m4.2-4.3q0 0.6-0.4 1t-1 0.4-1-0.4-0.4-1 0.4-1 1-0.4 1 0.4 0.4 1z m1-8.2l5.8 5.8-2 2-5.8-5.8z m7.6-0.4q0 0.6-0.4 1t-1 0.4-1-0.4-0.4-1 0.4-1 1-0.4 1 0.4 0.4 1z m15.8-7.1q0 1.3-0.3 2.4t-0.8 2.1-1 1.5-1.2 1.4q-0.7 0.8-1 1.2t-0.7 1.1-0.6 1.5-0.2 1.6q0 3.6-2.5 6.1t-6.1 2.5q-0.5 0-1-0.4t-0.4-1 0.4-1 1-0.5q2.4 0 4.1-1.6t1.7-4.1q0-1.2 0.2-2.3t0.8-2.1 1-1.4 1.2-1.4q0.9-1.1 1.3-1.7t0.8-1.6 0.4-2.3q0-4.2-2.9-7.1t-7.1-2.9-7 2.9-3 7.1q0 0.6-0.4 1t-1 0.4-1-0.4-0.4-1q0-2.6 1-5t2.7-4.1 4.2-2.8 4.9-1 5 1 4.1 2.8 2.8 4.1 1 5z m-11.5 2.8q0 0.6-0.4 1t-1 0.5-1-0.5-0.5-1 0.5-1 1-0.4 1 0.4 0.4 1z m6.4-2.8q0 0.5-0.4 1t-1 0.4-1-0.4-0.4-1q0-2.1-1.5-3.6t-3.5-1.4q-2.1 0-3.6 1.4t-1.4 3.6q0 0.6-0.4 1t-1.1 0.4-1-0.4-0.4-1q0-3.3 2.3-5.6t5.6-2.3 5.5 2.3 2.3 5.6z m8.8-6.5q0.2 0.6 0 1.1t-0.8 0.8q-0.2 0.1-0.5 0.1-0.4 0-0.8-0.3t-0.5-0.7q-1.5-3.9-5-6.5-0.5-0.4-0.6-1t0.3-1q0.4-0.5 0.9-0.6t1.1 0.3q4.1 3 5.9 7.8z m4.7-1.8q0.2 0.6 0 1.1t-0.8 0.8q-0.3 0.1-0.5 0.1-1 0-1.4-1-2-5.3-6.6-8.7-0.5-0.4-0.6-1t0.3-1q0.4-0.5 1-0.6t1 0.3q5.2 3.9 7.6 10z"></path></g>
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

export default IconAssistiveListeningSystems

