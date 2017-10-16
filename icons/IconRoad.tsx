

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

class IconRoad extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--road ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M23.1 22.1V22l-.5-6.7q-.1-.2-.3-.4t-.4-.2H18q-.3 0-.5.2t-.2.4l-.5 6.7v.1q0 .2.2.4t.4.2h5.1q.2 0 .4-.2t.2-.4zm15.7 9.7q0 1.5-.9 1.5H23.3q.2 0 .4-.2t.2-.5l-.4-5.3q-.1-.3-.3-.5t-.4-.2h-5.7q-.3 0-.5.2t-.2.5l-.4 5.3q0 .3.2.5t.4.2H2q-1 0-1-1.5 0-1.1.6-2.4l8.6-21.7q.2-.4.6-.7t.8-.3h7q-.3 0-.5.2t-.2.5l-.3 4q0 .3.2.4t.4.2h3.5q.2 0 .4-.2t.2-.4l-.3-4q-.1-.3-.3-.5t-.4-.2h7q.4 0 .8.3t.5.7l8.7 21.7q.5 1.3.5 2.4z"></path></g>
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

export default IconRoad

