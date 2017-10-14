

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
                    <g><path d="m39.2 2.8q0.6 0.4 0.6 1.1v27.3q0 0.4-0.3 0.7t-0.5 0.4l-12.4 5q-0.5 0.2-1 0l-11.9-4.8-12 4.8q-0.2 0.1-0.5 0.1-0.3 0-0.7-0.2-0.5-0.4-0.5-1.1v-27.3q0-0.4 0.2-0.7t0.6-0.4l12.4-5q0.5-0.2 0.9 0l12 4.8 11.9-4.8q0.7-0.2 1.2 0.1z m-24.9 2.6v24.7l11.2 4.5v-24.7z m-11.8 4.3v24.6l10.5-4.2v-24.7z m34.8 20.6v-24.6l-10.6 4.2v24.7z"></path></g>
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

