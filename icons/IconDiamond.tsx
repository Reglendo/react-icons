

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

class IconDiamond extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--diamond ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M4.1 17.5l12.1 12.9-5.8-12.9H4.1zm15.8 15l6.7-15H13.1zM10.4 15l4-7.4H9.3L3.7 15h6.7zm13.1 15.4l12.1-12.9h-6.2zM13.3 15h13.2l-4-7.4h-5.3zm16 0H36l-5.6-7.4h-5.1zM32 5.6l7.5 9.9q.3.4.3.8t-.4.8L20.8 37q-.4.4-.9.4T19 37L.3 17.1q-.3-.3-.3-.8t.3-.8l7.4-9.9q.4-.5 1-.5h22.4q.6 0 .9.5z"></path></g>
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

export default IconDiamond

