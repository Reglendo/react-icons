

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

class IconLaptop extends React.Component<Props, State> {

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
                    <g><path d="m8.6 28q-1.3 0-2.3-1t-1-2.3v-14.7q0-1.3 1-2.3t2.3-1h22.6q1.4 0 2.4 1t1 2.3v14.7q0 1.3-1 2.3t-2.4 1h-22.6z m-0.6-18v14.7q0 0.2 0.2 0.4t0.4 0.2h22.6q0.3 0 0.5-0.2t0.2-0.4v-14.7q0-0.2-0.2-0.4t-0.5-0.2h-22.6q-0.2 0-0.4 0.2t-0.2 0.4z m28.5 19.3h3.4v2q0 0.8-1 1.4t-2.4 0.6h-33.2q-1.3 0-2.3-0.6t-1-1.4v-2h36.5z m-14.9 2q0.3 0 0.3-0.3t-0.3-0.4h-3.3q-0.4 0-0.4 0.4t0.4 0.3h3.3z"></path></g>
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

export default IconLaptop

