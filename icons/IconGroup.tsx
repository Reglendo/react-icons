

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

class IconGroup extends React.Component<Props, State> {

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
                    <g><path d="m12.3 20q-3.4 0.1-5.5 2.7h-2.8q-1.7 0-2.8-0.9t-1.2-2.4q0-7.4 2.6-7.4 0.1 0 0.9 0.5t2 0.8 2.5 0.5q1.4 0 2.7-0.5-0.1 0.8-0.1 1.4 0 2.9 1.7 5.3z m22.3 13.2q0 2.5-1.6 4t-4 1.4h-18.1q-2.6 0-4.1-1.4t-1.5-4q0-1.1 0.1-2.1t0.3-2.3 0.5-2.2 0.9-2.1 1.3-1.6 1.8-1.2 2.3-0.4q0.2 0 0.9 0.5t1.5 1 2.2 1 2.8 0.4 2.8-0.4 2.3-1 1.5-1 0.9-0.5q1.2 0 2.3 0.4t1.8 1.2 1.2 1.6 0.9 2.1 0.6 2.2 0.3 2.3 0.1 2.1z m-21.3-26.5q0 2.2-1.6 3.8t-3.7 1.5-3.8-1.5-1.5-3.8 1.5-3.7 3.8-1.6 3.7 1.6 1.6 3.7z m14.6 8q0 3.3-2.3 5.6t-5.7 2.4-5.6-2.4-2.3-5.6 2.3-5.7 5.6-2.3 5.7 2.3 2.3 5.7z m12 4.7q0 1.6-1.2 2.4t-2.9 0.9h-2.7q-2.2-2.6-5.5-2.7 1.6-2.4 1.6-5.3 0-0.6-0.1-1.4 1.4 0.5 2.8 0.5 1.2 0 2.5-0.5t2-0.8 0.9-0.5q2.6 0 2.6 7.4z m-2.7-12.7q0 2.2-1.5 3.8t-3.8 1.5-3.8-1.5-1.5-3.8 1.5-3.7 3.8-1.6 3.8 1.6 1.5 3.7z"></path></g>
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

export default IconGroup

