

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

class IconSunO extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--sun-o ${this.props.addClass}`

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
                    <g><path d="M32.9 20q0-2.6-1.1-5t-2.7-4.1T25 8.2t-5-1.1-5 1.1-4.1 2.7T8.2 15t-1.1 5 1.1 5 2.7 4.1 4.1 2.7 5 1.1 5-1.1 4.1-2.7 2.7-4.1 1.1-5zm6.1 6.2q-.1.3-.4.4l-6.5 2.2v6.8q0 .4-.3.6-.4.2-.7.1l-6.5-2.1-4 5.5q-.2.3-.6.3t-.6-.3l-4-5.5-6.5 2.1q-.3.1-.7-.1-.3-.2-.3-.6v-6.8l-6.5-2.2q-.3-.1-.4-.4-.1-.4.1-.7l4-5.5-4-5.5q-.2-.3-.1-.7.1-.3.4-.4l6.5-2.2V4.4q0-.4.3-.6.4-.2.7-.1l6.5 2.1 4-5.5q.2-.3.6-.3t.6.3l4 5.5 6.5-2.1q.3-.1.7.1.3.2.3.6v6.8l6.5 2.2q.3.1.4.4.1.4-.1.7l-4 5.5 4 5.5q.2.3.1.7z"></path></g>
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

export default IconSunO

