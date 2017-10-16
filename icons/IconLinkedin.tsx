

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

class IconLinkedin extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--linkedin ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M10.8 13.9v22.2H3.4V14h7.4zm.5-6.8q0 1.7-1.2 2.7t-3 1.1q-1.9 0-3-1.1T3 7.1q0-1.6 1.2-2.7t3-1.1 2.9 1.1 1.2 2.7zm26 16.3v12.7h-7.4V24.2q0-2.3-.9-3.6t-2.8-1.4q-1.4 0-2.3.8t-1.5 1.9q-.2.7-.2 1.8v12.4h-7.3V14h7.3v3.2h-.1q.5-.7 1-1.3t1.2-1.1 2-1 2.5-.4q3.8 0 6.2 2.6t2.3 7.4z"></path></g>
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

export default IconLinkedin

