

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

class IconTable extends React.Component<Props, State> {

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
                    <g><path d="m12.9 30.7v-4.3q0-0.3-0.2-0.5t-0.5-0.2h-7.1q-0.3 0-0.5 0.2t-0.2 0.5v4.3q0 0.3 0.2 0.5t0.5 0.2h7.1q0.3 0 0.5-0.2t0.2-0.5z m0-8.6v-4.2q0-0.4-0.2-0.6t-0.5-0.2h-7.1q-0.3 0-0.5 0.2t-0.2 0.6v4.2q0 0.4 0.2 0.6t0.5 0.2h7.1q0.3 0 0.5-0.2t0.2-0.6z m11.5 8.6v-4.3q0-0.3-0.2-0.5t-0.6-0.2h-7.1q-0.3 0-0.5 0.2t-0.2 0.5v4.3q0 0.3 0.2 0.5t0.5 0.2h7.1q0.4 0 0.6-0.2t0.2-0.5z m-11.5-17.1v-4.3q0-0.3-0.2-0.5t-0.5-0.2h-7.1q-0.3 0-0.5 0.2t-0.2 0.5v4.3q0 0.3 0.2 0.5t0.5 0.2h7.1q0.3 0 0.5-0.2t0.2-0.5z m11.5 8.5v-4.2q0-0.4-0.2-0.6t-0.6-0.2h-7.1q-0.3 0-0.5 0.2t-0.2 0.6v4.2q0 0.4 0.2 0.6t0.5 0.2h7.1q0.4 0 0.6-0.2t0.2-0.6z m11.4 8.6v-4.3q0-0.3-0.2-0.5t-0.5-0.2h-7.2q-0.3 0-0.5 0.2t-0.2 0.5v4.3q0 0.3 0.2 0.5t0.5 0.2h7.2q0.3 0 0.5-0.2t0.2-0.5z m-11.4-17.1v-4.3q0-0.3-0.2-0.5t-0.6-0.2h-7.1q-0.3 0-0.5 0.2t-0.2 0.5v4.3q0 0.3 0.2 0.5t0.5 0.2h7.1q0.4 0 0.6-0.2t0.2-0.5z m11.4 8.5v-4.2q0-0.4-0.2-0.6t-0.5-0.2h-7.2q-0.3 0-0.5 0.2t-0.2 0.6v4.2q0 0.4 0.2 0.6t0.5 0.2h7.2q0.3 0 0.5-0.2t0.2-0.6z m0-8.5v-4.3q0-0.3-0.2-0.5t-0.5-0.2h-7.2q-0.3 0-0.5 0.2t-0.2 0.5v4.3q0 0.3 0.2 0.5t0.5 0.2h7.2q0.3 0 0.5-0.2t0.2-0.5z m2.8-7.2v24.3q0 1.5-1 2.5t-2.5 1.1h-30q-1.5 0-2.5-1.1t-1.1-2.5v-24.3q0-1.4 1-2.5t2.6-1h30q1.4 0 2.5 1t1 2.5z"></path></g>
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

export default IconTable

