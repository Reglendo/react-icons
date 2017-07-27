

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

class IconTint extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    }

    render() {
        let className = `${this.name} ${this.name}--tint ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m19.9 25.7q0-0.8-0.4-1.5 0 0-0.4-0.5t-0.5-0.9-0.6-1-0.5-1.1q0-0.3-0.4-0.3t-0.5 0.3q-0.2 0.5-0.5 1.1t-0.5 1-0.6 0.9-0.3 0.5q-0.5 0.7-0.5 1.5 0 1.2 0.9 2t2 0.9 2-0.9 0.8-2z m11.5-2.8q0 4.7-3.4 8t-8.1 3.4-8.1-3.4-3.3-8q0-3.3 1.8-6.2 0.1-0.2 1.4-2t2.3-3.4 2.2-3.9 1.8-4.5q0.2-0.7 0.8-1.1t1.1-0.4 1.2 0.4 0.7 1.1q0.7 2 1.9 4.5t2.2 3.9 2.3 3.4 1.3 2q1.9 2.9 1.9 6.2z"></path></g>
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

export default IconTint

