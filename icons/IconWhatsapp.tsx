

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

class IconWhatsapp extends React.Component<Props, State> {

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
                    <g><path d="m25 21.7q0.3 0 2.2 1t2 1.2q0 0.1 0 0.3 0 0.8-0.4 1.7-0.3 0.9-1.6 1.5t-2.2 0.6q-1.3 0-4.3-1.4-2.2-1-3.8-2.6t-3.3-4.2q-1.6-2.3-1.6-4.3v-0.2q0.1-2 1.7-3.5 0.5-0.5 1.2-0.5 0.1 0 0.4 0t0.4 0.1q0.4 0 0.6 0.1t0.3 0.6q0.2 0.5 0.8 2t0.5 1.7q0 0.5-0.8 1.3t-0.7 1q0 0.2 0.1 0.3 0.7 1.7 2.3 3.1 1.2 1.2 3.3 2.2 0.3 0.2 0.5 0.2 0.4 0 1.2-1.1t1.2-1.1z m-4.5 11.9q2.8 0 5.4-1.1t4.5-3 3-4.5 1.1-5.4-1.1-5.5-3-4.5-4.5-2.9-5.4-1.2-5.5 1.2-4.5 2.9-2.9 4.5-1.2 5.5q0 4.5 2.7 8.2l-1.7 5.2 5.4-1.8q3.5 2.4 7.7 2.4z m0-30.9q3.4 0 6.5 1.4t5.4 3.6 3.5 5.3 1.4 6.6-1.4 6.5-3.5 5.3-5.4 3.6-6.5 1.4q-4.4 0-8.2-2.1l-9.3 3 3-9.1q-2.4-3.9-2.4-8.6 0-3.5 1.4-6.6t3.6-5.3 5.3-3.6 6.6-1.4z"></path></g>
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

export default IconWhatsapp

