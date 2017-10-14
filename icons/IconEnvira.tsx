

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

class IconEnvira extends React.Component<Props, State> {

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
                    <g><path d="m20 18.2q-2.3-4.4-3.6-6.2-3.1-4.5-7.7-7.1-0.8-0.4-1.6-0.8-2-0.9-2.1-0.7t0.8 0.8l0.9 0.7q1.3 1 2.5 2.1t2.1 2.6 1.5 2.5 1.6 3q0.2 0.3 0.3 0.5 1 1.9 1.9 3.4t2.2 3.5 2.6 3.3 2.9 2.8 3.3 2q3.4 1.5 3.4 1.3 0.1 0-1.1-0.8-1.1-0.8-1.8-1.3-1.7-1.3-4-4.7t-4.1-6.9z m-7.7 12.1q-1.7-1.3-3-2.8t-2.2-3.2-1.6-3.4-1.3-4.2-1.1-4.6-1.4-5.6-1.7-6.5q6.1 0 11.1 0.8t8.5 2.1 6 3.2 4.2 3.8 2.4 4.5 1.3 4.4 0.2 4.4-0.2 3.9-0.4 3.2-0.3 2.4l7.2 7.3h-2.3l-6.3-6.4q-0.5 0.1-2 0.4t-2.7 0.4-3.1 0.1-3.6-0.4-3.8-1.3-3.9-2.5z"></path></g>
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

export default IconEnvira

