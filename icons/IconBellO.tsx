

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

class IconBellO extends React.Component<Props, State> {

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
                    <g><path d="m20.4 37.9q0-0.4-0.4-0.4-1.3 0-2.3-1t-0.9-2.2q0-0.4-0.4-0.4t-0.3 0.4q0 1.6 1.1 2.8t2.8 1.1q0.4 0 0.4-0.3z m-14.9-6.5h29q-5.9-6.7-5.9-18.5 0-1.2-0.6-2.4t-1.5-2.3-2.7-1.8-3.8-0.7-3.8 0.7-2.7 1.8-1.5 2.3-0.6 2.4q0 11.8-5.9 18.5z m33.1 0q0 1.2-0.9 2t-2 0.9h-10q0 2.4-1.7 4t-4 1.7-4-1.7-1.7-4h-10q-1.2 0-2-0.9t-0.9-2q1.1-0.9 2.1-1.9t1.9-2.7 1.6-3.5 1.1-4.6 0.5-5.8q0-3.4 2.6-6.3t6.8-3.6q-0.1-0.4-0.1-0.9 0-0.8 0.6-1.5t1.5-0.6 1.5 0.6 0.6 1.5q0 0.5-0.1 0.9 4.2 0.6 6.8 3.6t2.6 6.3q0 3.1 0.5 5.8t1.1 4.6 1.6 3.5 1.9 2.7 2.1 1.9z"></path></g>
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

export default IconBellO

