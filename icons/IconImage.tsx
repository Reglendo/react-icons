

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

class IconImage extends React.Component<Props, State> {

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
                    <g><path d="m13.3 13.4q0 1.6-1.2 2.8t-2.8 1.1-2.8-1.1-1.2-2.8 1.2-2.9 2.8-1.1 2.8 1.1 1.2 2.9z m21.3 7.9v9.3h-29.3v-4l6.7-6.6 3.3 3.3 10.6-10.6z m1.9-14.6h-33.2q-0.2 0-0.4 0.2t-0.2 0.5v25.2q0 0.3 0.2 0.5t0.4 0.2h33.2q0.3 0 0.5-0.2t0.2-0.5v-25.2q0-0.3-0.2-0.5t-0.5-0.2z m3.4 0.7v25.2q0 1.4-1 2.4t-2.4 0.9h-33.2q-1.3 0-2.3-0.9t-1-2.4v-25.2q0-1.4 1-2.4t2.3-0.9h33.2q1.4 0 2.4 0.9t1 2.4z"></path></g>
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

export default IconImage

