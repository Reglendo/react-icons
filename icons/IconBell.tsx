

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

class IconBell extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--bell ${this.props.addClass}`

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
                    <g><path d="M20.4 37.9q0-.4-.4-.4-1.3 0-2.3-1t-.9-2.2q0-.4-.4-.4t-.3.4q0 1.6 1.1 2.8t2.8 1.1q.4 0 .4-.3zm18.2-6.5q0 1.2-.9 2t-2 .9h-10q0 2.4-1.7 4T20 40t-4-1.7-1.7-4h-10q-1.2 0-2-.9t-.9-2q1.1-.9 2.1-1.9t1.9-2.7T7 23.3t1.1-4.6.5-5.8q0-3.4 2.6-6.3T18 3q-.1-.4-.1-.9 0-.8.6-1.5T20 0t1.5.6.6 1.5q0 .5-.1.9 4.2.6 6.8 3.6t2.6 6.3q0 3.1.5 5.8t1.1 4.6 1.6 3.5 1.9 2.7 2.1 1.9z"></path></g>
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

export default IconBell

