

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
    className?: string
}
export interface State {
}

class IconSnapchat extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
    }

    render() {
        let className = `muk-icon ${this.name}--snapchat ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M31.6 25.6q0-.5-.5-.6-1.5-.3-2.7-1.3t-1.8-2.4q-.1-.4-.1-.6 0-.3.4-.5t1-.4.9-.5.5-.8q0-.4-.4-.7t-.9-.3q-.3 0-.7.2t-.7.2q-.1 0-.3-.1.1-2.1.1-2.5 0-1.8-.3-2.6-.8-1.7-2.3-2.7t-3.4-.9q-4.5 0-6.2 3.6-.4.8-.4 2.6 0 .4.2 2.5-.1.1-.4.1-.2 0-.7-.2t-.6-.2q-.5 0-.9.3t-.4.7q0 .5.4.8t1 .5 1 .4.4.5q0 .2-.2.6-1.4 3.1-4.4 3.7-.5.1-.5.6 0 1.1 3.1 1.5 0 .2.1.6t.3.7.5.2q.3 0 .8-.1t.9-.1q.8 0 1.5.4t1.2.7 1.3.7 1.7.3q1 0 1.8-.3t1.3-.7 1.2-.7 1.5-.4q.3 0 .8.1t.9.1q.3 0 .5-.2t.3-.7.1-.6q3-.4 3-1.5zm5.7-5.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"></path></g>
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

export default IconSnapchat

