

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

class IconComments extends React.Component<Props, State> {

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
                    <g><path d="m31.4 17.1q0 3.1-2.1 5.8t-5.7 4.1-7.9 1.6q-1.9 0-3.9-0.4-2.8 2-6.2 2.9-0.8 0.2-1.9 0.3h-0.1q-0.3 0-0.5-0.2t-0.2-0.4q0-0.1 0-0.2t0-0.1 0-0.1l0.1-0.2 0-0.1 0.1-0.1 0.1-0.1 0.1-0.1q0.1-0.1 0.5-0.6t0.6-0.6 0.5-0.7 0.6-0.8 0.4-1q-2.7-1.6-4.3-4t-1.6-5q0-3.1 2.1-5.7t5.7-4.2 7.9-1.5 7.9 1.5 5.7 4.2 2.1 5.7z m8.6 5.8q0 2.6-1.6 5t-4.3 3.9q0.2 0.5 0.4 1t0.6 0.8 0.5 0.7 0.6 0.7 0.5 0.5q0 0 0.1 0.1t0.1 0.1 0.1 0.1 0 0.2l0.1 0.1 0 0.1 0 0.1 0 0.2q0 0.3-0.3 0.5t-0.5 0.1q-1.1-0.1-1.9-0.3-3.4-0.9-6.2-2.9-2 0.4-3.9 0.4-6.1 0-10.6-3 1.3 0.1 2 0.1 3.6 0 6.9-1t5.9-2.9q2.8-2 4.3-4.7t1.5-5.7q0-1.7-0.5-3.4 2.9 1.6 4.5 4t1.7 5.2z"></path></g>
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

export default IconComments

