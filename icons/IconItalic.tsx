

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

class IconItalic extends React.Component<Props, State> {

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
                    <g><path d="m8.5 37.1l0.4-1.9q0.1 0 1.8-0.5t2.5-0.8q0.6-0.8 0.9-2.3 0-0.1 1.4-6.4t2.5-12.2 1.2-6.6v-0.5q-0.5-0.3-1.2-0.4t-1.6-0.2-1.3-0.1l0.5-2.3q0.7 0 2.6 0.1t3.4 0.2 2.7 0q1 0 2.2 0t2.7-0.2 2.2-0.1q-0.2 0.8-0.5 1.9-0.6 0.3-2.2 0.7t-2.5 0.7q-0.1 0.4-0.3 1t-0.2 0.9-0.1 1-0.2 0.9q-0.6 3.3-1.9 9.4t-1.8 7.9q0 0.2-0.3 1.3t-0.4 2-0.4 1.9-0.1 1.3l0 0.4q0.4 0.1 4.2 0.7-0.1 0.9-0.4 2.2-0.2 0-0.7 0t-0.7 0q-0.7 0-2-0.2t-1.9-0.2q-3.1 0-4.6 0-1.1 0-3.2 0.2t-2.7 0.2z"></path></g>
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

export default IconItalic

