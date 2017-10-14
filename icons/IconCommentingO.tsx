

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

class IconCommentingO extends React.Component<Props, State> {

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
                    <g><path d="M14.3 20q0 1.2-.9 2t-2 .9-2-.9-.8-2 .8-2 2-.9 2 .9.9 2zm8.6 0q0 1.2-.9 2t-2 .9-2-.9-.9-2 .9-2 2-.9 2 .9.9 2zm8.5 0q0 1.2-.8 2t-2 .9-2-.9-.9-2 .9-2 2-.9 2 .9.8 2zM20 8.6q-4.6 0-8.5 1.5t-6.3 4.2T2.9 20q0 2.5 1.6 4.8t4.4 3.9l2 1.1-.6 2.1q-.5 2.1-1.6 3.9 3.4-1.4 6.2-3.8l.9-.9 1.3.2q1.5.1 2.9.1 4.6 0 8.5-1.5t6.3-4.2 2.3-5.7-2.3-5.7-6.3-4.2T20 8.6zM40 20q0 3.9-2.7 7.2T30 32.4t-10 1.9q-1.6 0-3.2-.2-4.5 3.9-10.3 5.4-1.1.3-2.6.5h-.1q-.3 0-.6-.2t-.3-.6v-.1q-.1-.1 0-.2t0-.3.1-.2l.1-.2.2-.2.2-.2.7-.7q.6-.6.7-.9t.7-.9.8-1.1.6-1.3.5-1.7Q4 29.2 2 26.3T0 20q0-2.9 1.6-5.5t4.2-4.6 6.4-3.1T20 5.7t7.8 1.1 6.3 3.1 4.3 4.6T40 20z"></path></g>
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

export default IconCommentingO

