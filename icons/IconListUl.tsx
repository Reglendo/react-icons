

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

class IconListUl extends React.Component<Props, State> {

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
                    <g><path d="m8.6 31.4q0 1.8-1.3 3.1t-3 1.2-3.1-1.2-1.2-3.1 1.3-3 3-1.3 3 1.3 1.3 3z m0-11.4q0 1.8-1.3 3t-3 1.3-3.1-1.3-1.2-3 1.3-3 3-1.3 3 1.3 1.3 3z m31.4 9.3v4.3q0 0.3-0.2 0.5t-0.5 0.2h-27.2q-0.2 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h27.2q0.3 0 0.5 0.2t0.2 0.5z m-31.4-20.7q0 1.8-1.3 3t-3 1.3-3.1-1.3-1.2-3 1.3-3.1 3-1.2 3 1.2 1.3 3.1z m31.4 9.3v4.2q0 0.3-0.2 0.5t-0.5 0.3h-27.2q-0.2 0-0.5-0.3t-0.2-0.5v-4.2q0-0.3 0.2-0.5t0.5-0.3h27.2q0.3 0 0.5 0.3t0.2 0.5z m0-11.5v4.3q0 0.3-0.2 0.5t-0.5 0.2h-27.2q-0.2 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h27.2q0.3 0 0.5 0.2t0.2 0.5z"></path></g>
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

export default IconListUl

