

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

class IconHospitalO extends React.Component<Props, State> {

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
                    <g><path d="m13.1 29.3v1.4q0 0.3-0.2 0.5t-0.5 0.2h-1.5q-0.3 0-0.5-0.2t-0.2-0.5v-1.4q0-0.3 0.2-0.5t0.5-0.2h1.5q0.2 0 0.5 0.2t0.2 0.5z m0-5.7v1.4q0 0.3-0.2 0.5t-0.5 0.2h-1.5q-0.3 0-0.5-0.2t-0.2-0.5v-1.4q0-0.3 0.2-0.5t0.5-0.2h1.5q0.2 0 0.5 0.2t0.2 0.5z m5.7 0v1.4q0 0.3-0.2 0.5t-0.5 0.2h-1.5q-0.2 0-0.5-0.2t-0.2-0.5v-1.4q0-0.3 0.2-0.5t0.5-0.2h1.5q0.3 0 0.5 0.2t0.2 0.5z m-5.7-5.7v1.4q0 0.3-0.2 0.5t-0.5 0.2h-1.5q-0.3 0-0.5-0.2t-0.2-0.5v-1.4q0-0.3 0.2-0.5t0.5-0.3h1.5q0.2 0 0.5 0.3t0.2 0.5z m17.1 11.4v1.4q0 0.3-0.2 0.5t-0.5 0.2h-1.4q-0.3 0-0.5-0.2t-0.2-0.5v-1.4q0-0.3 0.2-0.5t0.5-0.2h1.4q0.3 0 0.5 0.2t0.2 0.5z m-5.7-5.7v1.4q0 0.3-0.2 0.5t-0.5 0.2h-1.4q-0.3 0-0.5-0.2t-0.3-0.5v-1.4q0-0.3 0.3-0.5t0.5-0.2h1.4q0.3 0 0.5 0.2t0.2 0.5z m-5.7-5.7v1.4q0 0.3-0.2 0.5t-0.5 0.2h-1.5q-0.2 0-0.5-0.2t-0.2-0.5v-1.4q0-0.3 0.2-0.5t0.5-0.3h1.5q0.3 0 0.5 0.3t0.2 0.5z m11.4 5.7v1.4q0 0.3-0.2 0.5t-0.5 0.2h-1.4q-0.3 0-0.5-0.2t-0.2-0.5v-1.4q0-0.3 0.2-0.5t0.5-0.2h1.4q0.3 0 0.5 0.2t0.2 0.5z m-5.7-5.7v1.4q0 0.3-0.2 0.5t-0.5 0.2h-1.4q-0.3 0-0.5-0.2t-0.3-0.5v-1.4q0-0.3 0.3-0.5t0.5-0.3h1.4q0.3 0 0.5 0.3t0.2 0.5z m5.7 0v1.4q0 0.3-0.2 0.5t-0.5 0.2h-1.4q-0.3 0-0.5-0.2t-0.2-0.5v-1.4q0-0.3 0.2-0.5t0.5-0.3h1.4q0.3 0 0.5 0.3t0.2 0.5z m-5.7 19.2h8.6v-25.7h-5.7v0.7q0 0.9-0.7 1.6t-1.5 0.6h-10q-0.9 0-1.5-0.6t-0.6-1.6v-0.7h-5.7v25.7h8.5v-5q0-0.2 0.2-0.5t0.5-0.2h7.2q0.3 0 0.5 0.2t0.2 0.5v5z m0-26.4v-7.1q0-0.3-0.2-0.5t-0.5-0.2h-1.4q-0.3 0-0.5 0.2t-0.3 0.5v2.1h-2.8v-2.1q0-0.3-0.2-0.5t-0.5-0.2h-1.5q-0.2 0-0.5 0.2t-0.2 0.5v7.1q0 0.3 0.2 0.5t0.5 0.2h1.5q0.3 0 0.5-0.2t0.2-0.5v-2.1h2.8v2.1q0 0.3 0.3 0.5t0.5 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m11.4-0.7v28.6q0 0.5-0.4 1t-1 0.4h-28.6q-0.6 0-1-0.4t-0.4-1v-28.6q0-0.6 0.4-1t1-0.4h7.2v-6.5q0-0.8 0.6-1.5t1.5-0.6h10q0.9 0 1.5 0.6t0.7 1.5v6.5h7.1q0.6 0 1 0.4t0.4 1z"></path></g>
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

export default IconHospitalO

