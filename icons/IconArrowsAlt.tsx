

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

class IconArrowsAlt extends React.Component<Props, State> {

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
                    <g><path d="m31.6 12.1l-7.9 7.9 7.9 7.9 3.3-3.2q0.6-0.7 1.5-0.3 0.9 0.4 0.9 1.3v10q0 0.6-0.4 1t-1 0.4h-10q-1 0-1.4-0.9-0.3-0.8 0.4-1.5l3.2-3.2-8-7.9-7.9 7.9 3.2 3.2q0.7 0.7 0.3 1.5-0.3 0.9-1.3 0.9h-10q-0.5 0-1-0.4t-0.4-1v-10q0-0.9 0.9-1.3 0.9-0.4 1.5 0.3l3.2 3.2 8-7.9-7.9-7.9-3.3 3.2q-0.4 0.4-1 0.4-0.2 0-0.5-0.1-0.9-0.4-0.9-1.3v-10q0-0.6 0.4-1t1-0.4h10q1 0 1.3 0.9 0.4 0.8-0.3 1.5l-3.2 3.2 7.9 7.9 8-7.9-3.2-3.2q-0.7-0.7-0.4-1.5 0.4-0.9 1.4-0.9h10q0.5 0 1 0.4t0.4 1v10q0 0.9-0.9 1.3-0.3 0.1-0.5 0.1-0.6 0-1-0.4z"></path></g>
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

export default IconArrowsAlt

