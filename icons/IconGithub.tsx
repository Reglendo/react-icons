

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

class IconGithub extends React.Component<Props, State> {

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
                    <g><path d="m20.1 2.9q4.7 0 8.6 2.3t6.3 6.2 2.3 8.6q0 5.6-3.3 10.1t-8.4 6.2q-0.6 0.1-0.9-0.2t-0.3-0.7q0 0 0-1.7t0-3q0-2.1-1.2-3.1 1.3-0.2 2.3-0.4t2.1-0.9 1.8-1.5 1.2-2.3 0.5-3.4q0-2.7-1.8-4.6 0.8-2-0.2-4.5-0.6-0.2-1.8 0.2t-2 1l-0.9 0.5q-2-0.6-4.3-0.6t-4.2 0.6q-0.4-0.2-1-0.6t-1.9-0.8-1.9-0.3q-1 2.5-0.1 4.5-1.8 1.9-1.8 4.6 0 1.9 0.5 3.4t1.1 2.3 1.8 1.5 2.1 0.9 2.3 0.4q-0.9 0.8-1.1 2.3-0.4 0.2-1 0.3t-1.3 0.1-1.4-0.5-1.3-1.4q-0.4-0.7-1-1.1t-1.1-0.6l-0.5 0q-0.5 0-0.6 0.1t-0.1 0.2 0.2 0.3 0.2 0.3l0.2 0.1q0.5 0.2 1 0.9t0.7 1.1l0.2 0.5q0.3 0.9 1 1.4t1.5 0.7 1.5 0.1 1.3-0.1l0.5 0q0 0.8 0 1.9t0 1.2q0 0.5-0.3 0.7t-0.9 0.2q-5.2-1.7-8.4-6.2t-3.3-10.1q0-4.7 2.3-8.6t6.2-6.2 8.6-2.3z m-10.6 24.6q0.1-0.2-0.2-0.3-0.2-0.1-0.2 0.1-0.1 0.1 0.1 0.2 0.2 0.2 0.3 0z m0.7 0.7q0.1-0.1-0.1-0.3-0.2-0.2-0.3-0.1-0.2 0.1 0 0.4 0.3 0.2 0.4 0z m0.7 1q0.2-0.1 0-0.4-0.2-0.3-0.4-0.1-0.2 0.1 0 0.4t0.4 0.1z m0.9 1q0.2-0.2-0.1-0.4-0.3-0.3-0.4-0.1-0.2 0.2 0 0.4 0.3 0.3 0.5 0.1z m1.3 0.5q0-0.2-0.3-0.3-0.4-0.1-0.4 0.1t0.2 0.4q0.4 0.1 0.5-0.2z m1.4 0.1q0-0.2-0.4-0.2-0.4 0-0.4 0.2 0 0.3 0.4 0.3 0.4 0 0.4-0.3z m1.3-0.2q-0.1-0.2-0.4-0.2-0.4 0.1-0.3 0.4t0.4 0.1 0.3-0.3z"></path></g>
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

export default IconGithub

