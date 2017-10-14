

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

class IconTrain extends React.Component<Props, State> {

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
                    <g><path d="m27.3 0q4.1 0 7.1 2.1t2.9 5v20q0 2.9-2.8 5t-6.8 2.2l4.7 4.5q0.4 0.3 0.2 0.8t-0.7 0.4h-23.5q-0.5 0-0.7-0.4t0.2-0.8l4.7-4.5q-4-0.2-6.8-2.2t-2.8-5v-20q0-2.9 2.9-5t7.1-2.1h14.3z m-7.2 30q1.8 0 3.1-1.2t1.2-3.1-1.2-3-3.1-1.3-3 1.3-1.2 3 1.2 3.1 3 1.2z m12.9-12.9v-11.4h-25.7v11.4h25.7z"></path></g>
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

export default IconTrain

