

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

class IconComment extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--comment ${this.props.addClass}`

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
                    <g><path d="M40 20q0 3.9-2.7 7.2T30 32.4t-10 1.9q-1.6 0-3.2-.2-4.5 3.9-10.3 5.4-1.1.3-2.6.5-.3 0-.6-.2t-.4-.6v-.1q-.1-.1 0-.2t0-.3.1-.2l.1-.2.2-.2.2-.2.7-.7q.6-.6.7-.9t.7-.9.8-1.1.6-1.3.5-1.7Q4 29.2 2 26.3T0 20q0-2.9 1.6-5.5t4.2-4.6 6.4-3.1T20 5.7q5.4 0 10 1.9t7.3 5.2T40 20z"></path></g>
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

export default IconComment

