

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

class IconSkyatlas extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    }

    render() {
        let className = `${this.name} ${this.name}--skyatlas ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m32.8 17.9q2.9 0 4.9 1.9t2.1 4.7q0 3.1-2.2 5.1t-5.1 2q-1.7 0-3.2-0.5t-2.7-1.4-2.3-2.1-2.1-2.4-2-2.6-2.1-2.4-2.3-2.1-2.6-1.4-3.1-0.6q-3 0-4.9 1.8t-1.9 4.8q0 3 2.1 4.8t5.1 1.8q1.9 0 4-0.7t3.7-1.9q0.1-0.1 0.5-0.4t0.5-0.5 0.5-0.1q0.2 0 0.4 0.2t0.2 0.4q0 0.5-1.1 1.5-2 1.7-4.6 2.8t-5 1q-2.6 0-4.8-1.1t-3.5-3.2-1.3-4.7q0-3.9 2.7-6.6t6.8-2.6q2.3 0 4.4 0.8t3.6 2.2 2.9 3 2.7 3.2 2.6 3 2.9 2.2 3.4 0.9q1.9 0 3.2-1.2t1.3-3.2q0-1.8-1.2-3.1t-3.1-1.2q-0.6 0-1.6 0.3t-1.3 0.4q-0.4 0-0.7-0.3t-0.3-0.7q0-0.3 0.1-1.1t0.2-1.1q0-3.1-2.1-5.1t-5.1-2.1q-1.2 0-2.2 0.4t-1.6 0.8-1.1 0.8-0.7 0.3q-0.3 0-0.5-0.2t-0.2-0.5q0-0.3 0.5-0.9 1.2-1.3 2.9-2t3.5-0.7q3.7 0 6.2 2.5t2.5 6.1q0 0.7-0.1 1.3 1.1-0.3 2.2-0.3z"></path></g>
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

export default IconSkyatlas

