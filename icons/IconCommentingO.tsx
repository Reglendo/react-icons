

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
                    <g><path d="m14.3 20q0 1.2-0.9 2t-2 0.9-2-0.9-0.8-2 0.8-2 2-0.9 2 0.9 0.9 2z m8.6 0q0 1.2-0.9 2t-2 0.9-2-0.9-0.9-2 0.9-2 2-0.9 2 0.9 0.9 2z m8.5 0q0 1.2-0.8 2t-2 0.9-2-0.9-0.9-2 0.9-2 2-0.9 2 0.9 0.8 2z m-11.4-11.4q-4.6 0-8.5 1.5t-6.3 4.2-2.3 5.7q0 2.5 1.6 4.8t4.4 3.9l2 1.1-0.6 2.1q-0.5 2.1-1.6 3.9 3.4-1.4 6.2-3.8l0.9-0.9 1.3 0.2q1.5 0.1 2.9 0.1 4.6 0 8.5-1.5t6.3-4.2 2.3-5.7-2.3-5.7-6.3-4.2-8.5-1.5z m20 11.4q0 3.9-2.7 7.2t-7.3 5.2-10 1.9q-1.6 0-3.2-0.2-4.5 3.9-10.3 5.4-1.1 0.3-2.6 0.5h-0.1q-0.3 0-0.6-0.2t-0.3-0.6v-0.1q-0.1-0.1 0-0.2t0-0.3 0.1-0.2l0.1-0.2 0.2-0.2 0.2-0.2q0.1-0.1 0.7-0.7t0.7-0.9 0.7-0.9 0.8-1.1 0.6-1.3 0.5-1.7q-3.5-2-5.5-4.9t-2-6.3q0-2.9 1.6-5.5t4.2-4.6 6.4-3.1 7.8-1.1 7.8 1.1 6.3 3.1 4.3 4.6 1.6 5.5z"></path></g>
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

