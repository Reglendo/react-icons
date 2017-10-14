

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

class IconCameraRetro extends React.Component<Props, State> {

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
                    <g><path d="m20.7 18.6q0-0.3-0.2-0.5t-0.5-0.2q-1.5 0-2.5 1t-1.1 2.5q0 0.3 0.2 0.5t0.5 0.2 0.6-0.2 0.2-0.5q0-0.9 0.6-1.5t1.5-0.6q0.3 0 0.5-0.2t0.2-0.5z m5 2.9q0 2.3-1.7 4t-4 1.7-4-1.7-1.7-4 1.7-4.1 4-1.6 4 1.6 1.7 4.1z m-22.8 12.8h34.2v-2.9h-34.2v2.9z m25.7-12.8q0-3.6-2.5-6.1t-6.1-2.5-6.1 2.5-2.5 6.1 2.5 6 6.1 2.5 6.1-2.5 2.5-6z m-22.9-14.4h8.6v-2.8h-8.6v2.8z m-2.8 4.3h34.2v-5.7h-18.4l-1.5 2.9h-14.3v2.8z m37.1-5.7v28.6q0 1.2-0.8 2t-2.1 0.8h-34.2q-1.2 0-2.1-0.8t-0.8-2v-28.6q0-1.2 0.8-2t2.1-0.8h34.2q1.2 0 2.1 0.8t0.8 2z"></path></g>
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

export default IconCameraRetro

