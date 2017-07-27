

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

class IconRocket extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    }

    render() {
        let className = `${this.name} ${this.name}--rocket ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m33.1 10q0-0.9-0.6-1.5t-1.5-0.6-1.5 0.6-0.6 1.5 0.6 1.5 1.5 0.6 1.5-0.6 0.6-1.5z m5-6.4q0 5.5-1.6 9.6t-5.7 8q-1.8 1.8-4.4 4l-0.4 8.4q0 0.4-0.4 0.6l-8.5 5q-0.2 0.1-0.4 0.1-0.3 0-0.5-0.2l-1.4-1.4q-0.3-0.4-0.2-0.8l1.9-6.1-6.3-6.3-6.1 1.9q-0.1 0-0.2 0-0.4 0-0.6-0.2l-1.4-1.4q-0.4-0.4-0.1-0.9l5-8.5q0.2-0.4 0.6-0.4l8.4-0.4q2.2-2.6 4-4.4 4.2-4.2 8-5.8t9.6-1.5q0.3 0 0.5 0.2t0.2 0.5z"></path></g>
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

export default IconRocket

