

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

class IconSuperscript extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--superscript ${this.props.addClass}`

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
                    <g><path d="M23 30.6v3.7h-5.5l-3.6-5.6-.5-1q-.2-.2-.2-.4h-.1l-.2.4q-.2.5-.6 1l-3.4 5.6H3.1v-3.7H6l4.4-6.5L6.2 18h-3v-3.8h6.1l3.1 5.1q.1.1.6 1l.2.4h.1q0-.2.2-.4l.6-1 3.1-5.1h5.7V18h-2.8L16 23.9l4.6 6.7H23zm14.2-15.2V20H25.8l-.1-.6q-.1-.6-.1-1 0-1.5.6-2.6t1.4-2 1.9-1.4 1.9-1.2 1.4-1.2.6-1.5q0-.8-.6-1.4t-1.6-.5q-1.1 0-2.2.9-.3.2-.8.8l-2.3-2.1q.6-.8 1.4-1.4 1.8-1.5 4.2-1.5 2.4 0 4 1.4T37 8.2q0 1.2-.6 2.3T35 12.2t-1.8 1.3-1.8 1.1-1.5 1.2-.6 1.4h5.1v-1.8h2.8z"></path></g>
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

export default IconSuperscript

