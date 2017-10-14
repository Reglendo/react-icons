

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

class IconSkype extends React.Component<Props, State> {

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
                    <g><path d="m29.2 23.7q0-1.1-0.5-2t-1-1.5-1.7-1.1-1.8-0.8-2-0.5l-2.3-0.5q-0.6-0.2-1-0.3t-0.7-0.2-0.7-0.4-0.4-0.5-0.1-0.6q0-1.7 3.2-1.7 0.9 0 1.7 0.2t1.2 0.7 0.8 0.7 0.9 0.6 1.1 0.3q1.1 0 1.7-0.7t0.6-1.7q0-1.2-1.2-2.2t-3.2-1.5-4.1-0.6q-1.5 0-2.9 0.4t-2.7 1-2 2-0.7 2.8q0 1.4 0.4 2.4t1.3 1.7 1.8 1.1 2.3 0.7l3.2 0.8q2 0.5 2.5 0.8 0.7 0.5 0.7 1.4 0 0.8-0.9 1.4t-2.3 0.6q-1.1 0-2.1-0.4t-1.4-0.8-1-1-1-0.9-1.3-0.4q-1.1 0-1.6 0.7t-0.6 1.7q0 2 2.7 3.5t6.5 1.5q1.6 0 3.1-0.5t2.8-1.1 2-2.1 0.7-3z m8.1 4.9q0 3.5-2.5 6t-6.1 2.5q-2.9 0-5.2-1.7-1.7 0.3-3.4 0.3-3.1 0-6.1-1.2t-5-3.4-3.3-5-1.3-6.1q0-1.6 0.4-3.4-1.8-2.3-1.8-5.2 0-3.5 2.5-6t6.1-2.5q2.9 0 5.2 1.7 1.7-0.3 3.3-0.3 3.2 0 6.1 1.2t5.1 3.4 3.3 5 1.3 6.1q0 1.6-0.4 3.3 1.8 2.4 1.8 5.3z"></path></g>
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

export default IconSkype

