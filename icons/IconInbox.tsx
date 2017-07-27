

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

class IconInbox extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    }

    render() {
        let className = `${this.name} ${this.name}--inbox ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m25.8 21.4h7.1q0 0-0.1-0.1t0-0.2l-4.8-11.1h-15.8l-4.7 11.1q0 0 0 0.2t-0.1 0.1h7.1l2.1 4.3h7.1z m11.5 0.7v10.8q0 0.5-0.4 1t-1 0.4h-31.5q-0.6 0-1-0.4t-0.4-1v-10.8q0-1.4 0.6-2.7l5.3-12.4q0.2-0.5 0.8-0.9t1.2-0.4h18.5q0.6 0 1.2 0.4t0.8 0.9l5.3 12.4q0.6 1.3 0.6 2.7z"></path></g>
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

export default IconInbox

