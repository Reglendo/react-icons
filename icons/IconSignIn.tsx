

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

class IconSignIn extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--sign-in ${this.props.addClass}`

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
                    <g><path d="M29.4 20q0 .6-.4 1L16.9 33.1q-.5.5-1 .5t-1-.5-.5-1v-6.4h-10q-.5 0-1-.4t-.4-1v-8.6q0-.6.4-1t1-.4h10V7.9q0-.6.5-1t1-.5 1 .5L29 19q.4.4.4 1zm7.9-7.9v15.8q0 2.6-1.9 4.5t-4.5 1.9h-7.2q-.3 0-.5-.2t-.2-.5V32q0-.3.3-.4t.4-.2h7.2q1.4 0 2.5-1t1-2.5V12.1q0-1.4-1-2.5t-2.5-1h-7l-.3-.1h-.2l-.2-.1-.2-.2V6.3q0-.3.3-.4t.4-.2h7.2q2.6 0 4.5 1.9t1.9 4.5z"></path></g>
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

export default IconSignIn

