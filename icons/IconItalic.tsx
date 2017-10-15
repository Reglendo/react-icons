

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
        let className = `muk-icon ${this.name}--italic ${this.props.addClass}`

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
                    <g><path d="M8.5 37.1l.4-1.9q.1 0 1.8-.5t2.5-.8q.6-.8.9-2.3 0-.1 1.4-6.4T18 13t1.2-6.6v-.5q-.5-.3-1.2-.4t-1.6-.2-1.3-.1l.5-2.3q.7 0 2.6.1t3.4.2 2.7 0h2.2q1.2 0 2.7-.2t2.2-.1q-.2.8-.5 1.9-.6.3-2.2.7t-2.5.7q-.1.4-.3 1t-.2.9-.1 1-.2.9q-.6 3.3-1.9 9.4t-1.8 7.9q0 .2-.3 1.3t-.4 2-.4 1.9-.1 1.3v.4q.4.1 4.2.7-.1.9-.4 2.2h-1.4q-.7 0-2-.2t-1.9-.2h-4.6q-1.1 0-3.2.2t-2.7.2z"></path></g>
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

