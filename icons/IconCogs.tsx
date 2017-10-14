

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

class IconCogs extends React.Component<Props, State> {

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
                    <g><path d="m18.6 20q0-2.2-1.6-3.8t-3.7-1.5-3.8 1.5-1.5 3.8 1.5 3.8 3.8 1.5 3.7-1.5 1.6-3.8z m16 10.6q0-1-0.8-1.8t-1.9-0.8-1.9 0.8-0.8 1.8q0 1.1 0.8 1.9t1.9 0.8 1.9-0.8 0.8-1.9z m0-21.2q0-1.1-0.8-1.9t-1.9-0.8-1.9 0.8-0.8 1.9q0 1.1 0.8 1.8t1.9 0.8 1.9-0.8 0.8-1.8z m-8 8.7v3.9q0 0.2-0.2 0.4t-0.3 0.2l-3.2 0.5q-0.2 0.7-0.7 1.6 0.7 0.9 1.9 2.3 0.1 0.2 0.1 0.5 0 0.2-0.1 0.3-0.5 0.7-1.7 1.9t-1.7 1.2q-0.2 0-0.4-0.1l-2.4-1.9q-0.7 0.4-1.6 0.7-0.2 2.2-0.5 3.2-0.1 0.5-0.6 0.5h-3.8q-0.3 0-0.5-0.2t-0.2-0.3l-0.4-3.2q-0.7-0.2-1.6-0.7l-2.4 1.9q-0.2 0.1-0.5 0.1-0.2 0-0.4-0.1-3-2.8-3-3.3 0-0.2 0.2-0.4 0.2-0.3 0.8-1.1t1-1.3q-0.5-0.9-0.7-1.7l-3.2-0.5q-0.2 0-0.4-0.2t-0.1-0.4v-3.9q0-0.2 0.1-0.4t0.4-0.2l3.2-0.5q0.2-0.7 0.7-1.6-0.7-0.9-1.9-2.3-0.2-0.3-0.2-0.5 0-0.2 0.2-0.4 0.4-0.6 1.7-1.8t1.6-1.2q0.3 0 0.5 0.1l2.4 1.9q0.7-0.4 1.6-0.7 0.2-2.2 0.4-3.2 0.2-0.5 0.7-0.5h3.8q0.2 0 0.4 0.2t0.2 0.3l0.5 3.2q0.7 0.2 1.6 0.7l2.4-1.9q0.2-0.1 0.4-0.1 0.3 0 0.5 0.1 3 2.8 3 3.3 0 0.2-0.2 0.4-0.2 0.4-0.8 1.2t-1 1.2q0.5 1 0.7 1.7l3.2 0.5q0.2 0 0.3 0.2t0.2 0.4z m13.3 11.1v2.9q0 0.3-3.1 0.6-0.3 0.6-0.6 1.1 1 2.4 1 2.9 0 0.1-0.1 0.1-2.5 1.5-2.5 1.5-0.2 0-1-1t-1.1-1.4q-0.4 0-0.6 0t-0.6 0q-0.3 0.4-1.1 1.4t-1 1q0 0-2.5-1.5-0.1 0-0.1-0.1 0-0.5 1-2.9-0.3-0.5-0.6-1.1-3.1-0.3-3.1-0.6v-2.9q0-0.4 3.1-0.7 0.3-0.6 0.6-1-1-2.4-1-2.9 0-0.1 0.1-0.2 0 0 0.7-0.4t1.2-0.7 0.6-0.3q0.2 0 1 1t1.1 1.4q0.4-0.1 0.6-0.1t0.6 0.1q1.1-1.5 1.9-2.4l0.2 0q0 0 2.5 1.4 0.1 0.1 0.1 0.2 0 0.5-1.1 2.9 0.4 0.4 0.7 1 3.1 0.3 3.1 0.7z m0-21.3v2.9q0 0.4-3.1 0.7-0.3 0.5-0.6 1 1 2.4 1 2.9 0 0.1-0.1 0.2-2.5 1.4-2.5 1.4-0.2 0-1-0.9t-1.1-1.5q-0.4 0.1-0.6 0.1t-0.6-0.1q-0.3 0.5-1.1 1.5t-1 0.9q0 0-2.5-1.4-0.1-0.1-0.1-0.2 0-0.5 1-2.9-0.3-0.5-0.6-1-3.1-0.3-3.1-0.7v-2.9q0-0.3 3.1-0.6 0.3-0.6 0.6-1.1-1-2.4-1-2.9 0-0.1 0.1-0.1 0-0.1 0.7-0.4t1.2-0.7 0.6-0.4q0.2 0 1 1t1.1 1.4q0.4 0 0.6 0t0.6 0q1.1-1.5 1.9-2.3l0.2-0.1q0 0 2.5 1.5 0.1 0 0.1 0.1 0 0.5-1.1 2.9 0.4 0.5 0.7 1.1 3.1 0.3 3.1 0.6z"></path></g>
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

export default IconCogs

