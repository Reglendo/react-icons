

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

class IconDesktop extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    }

    render() {
        let className = `${this.name} ${this.name}--desktop ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m37.2 22v-17.3q0-0.3-0.2-0.4t-0.5-0.2h-33.2q-0.2 0-0.4 0.2t-0.2 0.4v17.3q0 0.3 0.2 0.5t0.4 0.2h33.2q0.3 0 0.5-0.2t0.2-0.5z m2.7-17.3v22.6q0 1.4-1 2.4t-2.4 0.9h-11.3q0 0.8 0.4 1.6t0.6 1.5 0.4 0.9q0 0.6-0.4 1t-1 0.3h-10.6q-0.5 0-0.9-0.3t-0.4-1q0-0.3 0.3-0.9t0.7-1.5 0.3-1.6h-11.3q-1.3 0-2.3-0.9t-1-2.4v-22.6q0-1.4 1-2.3t2.3-1h33.2q1.4 0 2.4 1t1 2.3z"></path></g>
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

export default IconDesktop

