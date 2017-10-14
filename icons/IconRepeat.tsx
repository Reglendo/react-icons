

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

class IconRepeat extends React.Component<Props, State> {

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
                    <g><path d="M37.3 5.7v10q0 .6-.4 1t-1 .4h-10q-1 0-1.4-.9-.3-.8.4-1.5l3-3.1q-3.3-3-7.8-3-2.3 0-4.4.9t-3.6 2.4-2.5 3.7-.9 4.4.9 4.4 2.5 3.7 3.6 2.4 4.4.9q2.7 0 5.1-1.1t4-3.3q.1-.2.5-.3.3 0 .5.2l3.1 3.1q.2.2.2.5t-.2.5q-2.4 2.9-5.9 4.5t-7.3 1.6q-3.4 0-6.6-1.3T8 32.1t-3.6-5.4T3 20t1.4-6.7T8 7.9t5.5-3.7 6.6-1.3q3.3 0 6.4 1.2T32 7.6l2.9-2.9q.6-.7 1.5-.3.9.4.9 1.3z"></path></g>
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

export default IconRepeat

