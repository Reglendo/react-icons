

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
    className?: string
}
export interface State {
}

class IconMarsStroke extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
    }

    render() {
        let className = `muk-icon ${this.name}--mars-stroke ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M35.9 2.9q.5 0 1 .4t.4 1v9.3q0 .3-.2.5t-.5.2h-1.5q-.3 0-.5-.2t-.2-.5V7.7l-4.7 4.8 3.1 3.1q.2.2.2.5t-.2.5l-1 1.1q-.2.2-.5.2t-.5-.2l-3.2-3.2-1.7 1.8q2.8 3.5 2.8 8 0 2.6-1 5T25 33.4t-4.2 2.7-4.9 1-5-1-4.1-2.7T4 29.3t-1-5 1-5 2.8-4.1 4.1-2.8 5-1q4.5 0 8 2.8l1.7-1.7-3.8-3.8q-.2-.3-.2-.6t.2-.4l1-1.1q.2-.2.5-.2t.5.2l3.8 3.9 4.8-4.8h-5.8q-.3 0-.5-.2t-.2-.5V3.6q0-.3.2-.5t.5-.2h9.3zm-20 31.4q4.1 0 7-2.9t3-7.1-3-7.1-7-2.9-7.1 2.9-2.9 7.1 2.9 7.1 7.1 2.9z"></path></g>
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

export default IconMarsStroke

