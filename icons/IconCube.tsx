

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

class IconCube extends React.Component<Props, State> {

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
                    <g><path d="m21.5 36.4l14.3-7.8v-14.2l-14.3 5.2v16.8z m-1.4-19.3l15.5-5.7-15.5-5.7-15.6 5.7z m18.5-5.7v17.2q0 0.8-0.4 1.4t-1.1 1.1l-15.7 8.5q-0.6 0.4-1.3 0.4t-1.4-0.4l-15.7-8.5q-0.7-0.4-1.1-1.1t-0.4-1.4v-17.2q0-0.9 0.5-1.6t1.4-1.1l15.7-5.7q0.5-0.1 1-0.1t1 0.1l15.7 5.8q0.8 0.3 1.3 1t0.5 1.6z"></path></g>
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

export default IconCube

