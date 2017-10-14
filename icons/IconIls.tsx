

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

class IconIls extends React.Component<Props, State> {

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
                    <g><path d="m26.6 13.9v11.1q0 0.3-0.2 0.5t-0.5 0.2h-3.5q-0.4 0-0.6-0.2t-0.2-0.5v-11.1q0-2.5-1.7-4.3t-4.3-1.7h-6.1v25.7q0 0.3-0.2 0.5t-0.5 0.2h-3.6q-0.3 0-0.5-0.2t-0.2-0.5v-30q0-0.3 0.2-0.5t0.5-0.2h10.4q3 0 5.5 1.4t4.1 4.1 1.4 5.5z m8.6-10.3v19.6q0 3-1.5 5.6t-4 4-5.6 1.5h-10.3q-0.3 0-0.5-0.2t-0.2-0.5v-21.5q0-0.3 0.2-0.5t0.5-0.2h3.6q0.3 0 0.5 0.2t0.2 0.5v17.2h6q2.5 0 4.3-1.8t1.8-4.3v-19.6q0-0.3 0.2-0.5t0.5-0.2h3.6q0.3 0 0.5 0.2t0.2 0.5z"></path></g>
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

export default IconIls

