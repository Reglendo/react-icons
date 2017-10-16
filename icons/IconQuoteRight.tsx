

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

class IconQuoteRight extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--quote-right ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M18.6 7.1v15.8q0 2.3-.9 4.4t-2.4 3.6-3.7 2.5-4.4.9H5.8q-.6 0-1-.4t-.4-1V30q0-.6.4-1t1-.4h1.4q2.4 0 4.1-1.7t1.6-4v-.8q0-.8-.6-1.5t-1.5-.6h-5Q4 20 2.7 18.8t-1.2-3.1V7.1q0-1.7 1.3-3t3-1.2h8.6q1.7 0 3 1.2t1.2 3zm20 0v15.8q0 2.3-.9 4.4t-2.4 3.6-3.7 2.5-4.4.9h-1.4q-.6 0-1-.4t-.4-1V30q0-.6.4-1t1-.4h1.4q2.4 0 4.1-1.7t1.6-4v-.8q0-.8-.6-1.5t-1.5-.6h-5q-1.8 0-3.1-1.2t-1.2-3.1V7.1q0-1.7 1.3-3t3-1.2h8.6q1.7 0 3 1.2t1.2 3z"></path></g>
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

export default IconQuoteRight

