

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

class IconMoney extends React.Component<Props, State> {

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
                    <g><path d="m15.9 25.3h8v-2h-2.6v-9.3h-2.4l-3.1 2.9 1.6 1.6q0.9-0.7 1.2-1.2h0v6h-2.7v2z m10.7-5.3q0 1.5-0.5 2.9t-1.2 2.8-2.1 2.1-2.9 0.8-2.8-0.8-2.1-2.1-1.3-2.8-0.4-2.9 0.4-2.9 1.3-2.8 2.1-2.1 2.8-0.8 2.9 0.8 2.1 2.1 1.2 2.8 0.5 2.9z m10.6 5.3v-10.6q-2.2 0-3.7-1.6t-1.6-3.7h-23.9q0 2.2-1.6 3.7t-3.7 1.6v10.6q2.2 0 3.7 1.6t1.6 3.7h23.9q0-2.2 1.6-3.7t3.7-1.6z m2.7-17.3v24q0 0.5-0.4 0.9t-1 0.4h-37.2q-0.5 0-0.9-0.4t-0.4-0.9v-24q0-0.5 0.4-0.9t0.9-0.4h37.2q0.6 0 1 0.4t0.4 0.9z"></path></g>
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

export default IconMoney

