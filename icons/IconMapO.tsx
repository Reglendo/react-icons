

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

class IconMapO extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--map-o ${this.props.addClass}`

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
                    <g><path d="M39.2 2.8q.6.4.6 1.1v27.3q0 .4-.3.7t-.5.4l-12.4 5q-.5.2-1 0l-11.9-4.8-12 4.8q-.2.1-.5.1t-.7-.2q-.5-.4-.5-1.1V8.8q0-.4.2-.7t.6-.4l12.4-5q.5-.2.9 0l12 4.8L38 2.7q.7-.2 1.2.1zM14.3 5.4v24.7l11.2 4.5V9.9zM2.5 9.7v24.6L13 30.1V5.4zm34.8 20.6V5.7L26.7 9.9v24.7z"></path></g>
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

export default IconMapO

