

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

class IconFont extends React.Component<Props, State> {

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
                    <g><path d="m17.7 12.5l-3.8 10q0.7 0 3 0.1t3.6 0q0.4 0 1.3 0-2-5.7-4.1-10.1z m-16.2 24.6l0-1.7q0.6-0.2 1.3-0.3t1.3-0.2 1.1-0.4 1-0.6 0.7-1.1l5.2-13.8 6.3-16.1h2.9q0.1 0.3 0.2 0.4l4.6 10.7q0.7 1.8 2.3 5.8t2.6 6.1q0.3 0.8 1.3 3.2t1.6 3.8q0.4 1 0.8 1.3 0.4 0.3 1.9 0.6t1.9 0.5q0.1 0.8 0.1 1.3 0 0.1 0 0.3t0 0.2q-1.4 0-4.2-0.1t-4.3-0.2q-1.7 0-4.8 0.1t-4 0.2q0-0.9 0.1-1.7l3-0.6q0 0 0.2-0.1t0.4-0.1 0.3-0.1 0.3-0.1 0.3-0.2 0.2-0.3 0-0.3q0-0.3-0.6-2.1t-1.7-4-0.9-2.2l-10-0.1q-0.6 1.3-1.7 4.4t-1.2 3.6q0 0.5 0.3 0.9t1 0.5 1.1 0.3 1.3 0.2 0.9 0.1q0 0.4 0 1.3 0 0.2 0 0.6-1.3 0-3.9-0.2t-3.9-0.3q-0.2 0-0.6 0.1t-0.5 0.1q-1.8 0.3-4.2 0.3z"></path></g>
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

export default IconFont

