

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

class IconBellSlashO extends React.Component<Props, State> {

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
                    <g><path d="m20.2 35.5q0-0.3-0.3-0.3-1.2 0-2-0.8t-0.8-2q0-0.3-0.3-0.3t-0.3 0.3q0 1.4 1 2.4t2.4 1q0.3 0 0.3-0.3z m-10.4-9.2l17-14.7q-0.8-1.8-2.6-2.9t-4.3-1.1q-1.8 0-3.3 0.6t-2.4 1.6-1.3 2-0.5 2q0 7.4-2.6 12.5z m26.2 3.6q0 1-0.7 1.8t-1.8 0.7h-8.7q0 2.1-1.4 3.5t-3.5 1.5-3.5-1.5-1.5-3.5l2.9-2.5h14.7q-3.2-3.6-4.4-8.9l2.1-1.9q1.2 7 5.8 10.8z m1.7-27l1.6 1.9q0.2 0.2 0.2 0.4t-0.2 0.5l-36.4 31.5q-0.2 0.1-0.4 0.1t-0.4-0.2l-1.7-1.9q-0.1-0.2-0.1-0.4t0.2-0.5l3.6-3.1q-0.4-0.6-0.4-1.3 1-0.8 1.8-1.7t1.6-2.3 1.5-3.1 1-4 0.3-5q0-3 2.3-5.5t6-3.1q-0.2-0.3-0.2-0.7 0-0.8 0.6-1.4t1.3-0.5 1.3 0.6 0.5 1.3q0 0.4-0.1 0.7 2.4 0.4 4.2 1.6t2.9 3.1l8.1-7.1q0.2-0.1 0.5-0.1t0.4 0.2z"></path></g>
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

export default IconBellSlashO

