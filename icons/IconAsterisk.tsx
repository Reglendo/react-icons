

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

class IconAsterisk extends React.Component<Props, State> {

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
                    <g><path d="m34.6 23.4q1 0.6 1.3 1.8t-0.3 2.1l-1.4 2.5q-0.6 1-1.7 1.3t-2.2-0.3l-5.9-3.4v6.9q0 1.1-0.9 2t-2 0.8h-2.9q-1.1 0-2-0.8t-0.8-2v-6.9l-6 3.4q-1 0.6-2.1 0.3t-1.8-1.3l-1.4-2.5q-0.6-1-0.3-2.1t1.4-1.8l5.9-3.4-5.9-3.4q-1.1-0.6-1.4-1.8t0.3-2.1l1.4-2.5q0.6-1 1.8-1.3t2.1 0.3l6 3.4v-6.9q0-1.1 0.8-2t2-0.8h2.9q1.2 0 2 0.8t0.9 2v6.9l5.9-3.4q1-0.6 2.2-0.3t1.7 1.3l1.4 2.5q0.6 1 0.3 2.1t-1.3 1.8l-6 3.4z"></path></g>
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

export default IconAsterisk

