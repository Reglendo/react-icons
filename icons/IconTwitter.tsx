

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

class IconTwitter extends React.Component<Props, State> {

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
                    <g><path d="m37.7 9.1q-1.5 2.2-3.7 3.7 0.1 0.3 0.1 1 0 2.9-0.9 5.8t-2.6 5.5-4.1 4.7-5.7 3.3-7.2 1.2q-6.1 0-11.1-3.3 0.8 0.1 1.7 0.1 5 0 9-3-2.4-0.1-4.2-1.5t-2.6-3.5q0.8 0.1 1.4 0.1 1 0 1.9-0.3-2.5-0.5-4.1-2.5t-1.7-4.6v0q1.5 0.8 3.3 0.9-1.5-1-2.4-2.6t-0.8-3.4q0-2 0.9-3.7 2.7 3.4 6.6 5.4t8.3 2.2q-0.2-0.9-0.2-1.7 0-3 2.1-5.1t5.1-2.1q3.2 0 5.3 2.3 2.4-0.5 4.6-1.7-0.8 2.5-3.2 3.9 2.1-0.2 4.2-1.1z"></path></g>
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

export default IconTwitter

