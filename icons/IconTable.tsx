

import * as React from "react"

export interface Props {
    size?: number
    text?: string
    title?: string
    style?: any
    addClass?: string
    viewBox?: string
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
    }

    render() {
        let className = `${this.name} ${this.name}--table ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m12.9 30.7v-4.3q0-0.3-0.2-0.5t-0.5-0.2h-7.1q-0.3 0-0.5 0.2t-0.2 0.5v4.3q0 0.3 0.2 0.5t0.5 0.2h7.1q0.3 0 0.5-0.2t0.2-0.5z m0-8.6v-4.2q0-0.4-0.2-0.6t-0.5-0.2h-7.1q-0.3 0-0.5 0.2t-0.2 0.6v4.2q0 0.4 0.2 0.6t0.5 0.2h7.1q0.3 0 0.5-0.2t0.2-0.6z m11.5 8.6v-4.3q0-0.3-0.2-0.5t-0.6-0.2h-7.1q-0.3 0-0.5 0.2t-0.2 0.5v4.3q0 0.3 0.2 0.5t0.5 0.2h7.1q0.4 0 0.6-0.2t0.2-0.5z m-11.5-17.1v-4.3q0-0.3-0.2-0.5t-0.5-0.2h-7.1q-0.3 0-0.5 0.2t-0.2 0.5v4.3q0 0.3 0.2 0.5t0.5 0.2h7.1q0.3 0 0.5-0.2t0.2-0.5z m11.5 8.5v-4.2q0-0.4-0.2-0.6t-0.6-0.2h-7.1q-0.3 0-0.5 0.2t-0.2 0.6v4.2q0 0.4 0.2 0.6t0.5 0.2h7.1q0.4 0 0.6-0.2t0.2-0.6z m11.4 8.6v-4.3q0-0.3-0.2-0.5t-0.5-0.2h-7.2q-0.3 0-0.5 0.2t-0.2 0.5v4.3q0 0.3 0.2 0.5t0.5 0.2h7.2q0.3 0 0.5-0.2t0.2-0.5z m-11.4-17.1v-4.3q0-0.3-0.2-0.5t-0.6-0.2h-7.1q-0.3 0-0.5 0.2t-0.2 0.5v4.3q0 0.3 0.2 0.5t0.5 0.2h7.1q0.4 0 0.6-0.2t0.2-0.5z m11.4 8.5v-4.2q0-0.4-0.2-0.6t-0.5-0.2h-7.2q-0.3 0-0.5 0.2t-0.2 0.6v4.2q0 0.4 0.2 0.6t0.5 0.2h7.2q0.3 0 0.5-0.2t0.2-0.6z m0-8.5v-4.3q0-0.3-0.2-0.5t-0.5-0.2h-7.2q-0.3 0-0.5 0.2t-0.2 0.5v4.3q0 0.3 0.2 0.5t0.5 0.2h7.2q0.3 0 0.5-0.2t0.2-0.5z m2.8-7.2v24.3q0 1.5-1 2.5t-2.5 1.1h-30q-1.5 0-2.5-1.1t-1.1-2.5v-24.3q0-1.4 1-2.5t2.6-1h30q1.4 0 2.5 1t1 2.5z"></path></g>
                </svg>
                {this.props.text ? (
                    <span className={`${this.name}__text`}>
                        {this.props.text}
                    </span>
                ) : null}
            </span>
        )
    }
}

export default IconTable

