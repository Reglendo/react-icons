

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

class IconToggleOff extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--toggle-off ${this.props.addClass}`

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
                    <g><path d="M22.4 20q0-2-.8-3.9T19.4 13t-3.1-2.2-3.9-.7-3.8.7T5.4 13t-2.1 3.1-.8 3.9.8 3.9T5.4 27t3.2 2.2 3.8.7 3.9-.7 3.1-2.2 2.2-3.1.8-3.9zm14.9 0q0-2-.8-3.9T34.4 13t-3.2-2.2-3.9-.7h-7.5q2.3 1.7 3.7 4.3t1.3 5.6-1.3 5.6-3.7 4.3h7.5q2 0 3.9-.7t3.2-2.2 2.1-3.1.8-3.9zm2.5 0q0 2.5-1 4.8t-2.7 4-3.9 2.6-4.9 1H12.4q-2.5 0-4.8-1t-4-2.6-2.6-4T0 20t1-4.8 2.6-4 4-2.6 4.8-1h14.9q2.6 0 4.9 1t3.9 2.6 2.7 4 1 4.8z"></path></g>
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

export default IconToggleOff

