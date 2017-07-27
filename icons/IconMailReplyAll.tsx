

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

class IconMailReplyAll extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    }

    render() {
        let className = `${this.name} ${this.name}--mail-reply-all ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m14.3 24.2v1.5q0 1-0.9 1.3-0.3 0.1-0.5 0.1-0.6 0-1-0.4l-11.5-11.4q-0.4-0.4-0.4-1t0.4-1l11.5-11.4q0.6-0.7 1.5-0.4 0.9 0.4 0.9 1.4v1.5l-8.9 8.9q-0.4 0.4-0.4 1t0.4 1z m25.7 0.8q0 1.3-0.4 3t-0.8 3.1-1.1 2.8-0.9 2l-0.5 0.9q-0.1 0.3-0.6 0.3-0.1 0-0.2 0-0.5-0.2-0.5-0.7 1-9-2.4-12.6-1.4-1.6-3.8-2.5t-5.9-1.2v5.6q0 1-0.9 1.3-0.3 0.1-0.6 0.1-0.6 0-1-0.4l-11.4-11.4q-0.4-0.4-0.4-1t0.4-1l11.4-11.4q0.7-0.7 1.6-0.4 0.9 0.4 0.9 1.4v5.8q9.1 0.6 13.3 4.9 3.8 3.9 3.8 11.4z"></path></g>
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

export default IconMailReplyAll

