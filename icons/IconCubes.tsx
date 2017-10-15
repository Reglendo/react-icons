

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

class IconCubes extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--cubes ${this.props.addClass}`

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
                    <g><path d="M11.7 33.4l7-3.5v-5.7l-7 3v6.2zm-1.2-8.3l7.4-3.1-7.4-3.2L3.1 22zm19.8 8.3l7-3.5v-5.7l-7 3v6.2zm-1.1-8.3l7.3-3.1-7.3-3.2-7.4 3.2zM21 19.8l7-3v-4.9l-7 3v4.9zm-1.2-6.9l8.1-3.5L19.8 6l-8 3.5zm19.8 9.4v7.6q0 .7-.3 1.2t-.9.9l-8.2 4.1q-.5.2-1 .2t-1.1-.2L20 32q-.1 0-.2-.1 0 .1-.1.1l-8.2 4.1q-.4.2-1 .2t-1-.2L1.3 32q-.6-.3-1-.9T0 29.9v-7.6q0-.7.4-1.2t1-.9l7.9-3.4V9.5q0-.7.4-1.3t1.1-.8l8.1-3.5q.4-.2.9-.2t.9.2l8.2 3.5q.6.2 1 .8t.4 1.3v7.3l7.9 3.4q.7.3 1.1.9t.4 1.2z"></path></g>
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

export default IconCubes

