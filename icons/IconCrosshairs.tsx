

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

class IconCrosshairs extends React.Component<Props, State> {

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
                    <g><path d="m29.7 22.9h-2.4q-0.6 0-1-0.5t-0.4-1v-2.8q0-0.6 0.4-1t1-0.5h2.4q-0.7-2.4-2.5-4.2t-4.2-2.5v2.5q0 0.5-0.4 1t-1 0.4h-2.9q-0.6 0-1-0.4t-0.4-1v-2.5q-2.4 0.7-4.2 2.5t-2.5 4.2h2.4q0.6 0 1 0.5t0.4 1v2.8q0 0.6-0.4 1t-1 0.5h-2.4q0.7 2.4 2.5 4.2t4.2 2.5v-2.5q0-0.5 0.4-1t1-0.4h2.9q0.6 0 1 0.4t0.4 1v2.5q2.4-0.7 4.2-2.5t2.5-4.2z m7.6-4.3v2.8q0 0.6-0.4 1t-1 0.5h-3.2q-0.9 3.6-3.5 6.2t-6.2 3.4v3.2q0 0.6-0.4 1t-1 0.4h-2.9q-0.6 0-1-0.4t-0.4-1v-3.2q-3.6-0.8-6.2-3.4t-3.5-6.2h-3.2q-0.6 0-1-0.5t-0.4-1v-2.8q0-0.6 0.4-1t1-0.5h3.2q0.8-3.6 3.5-6.2t6.2-3.4v-3.2q0-0.6 0.4-1t1-0.4h2.9q0.6 0 1 0.4t0.4 1v3.2q3.6 0.8 6.2 3.4t3.5 6.2h3.2q0.5 0 1 0.5t0.4 1z"></path></g>
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

export default IconCrosshairs

