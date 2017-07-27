

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

class IconFlagCheckered extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    }

    render() {
        let className = `${this.name} ${this.name}--flag-checkered ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m18.1 22.3v-4.2q-3.9 0.3-8.3 2.5v4.1q4.4-2.1 8.3-2.4z m0-9.1v-4.3q-3.7 0.1-8.3 2.7v4.1q4.6-2.4 8.3-2.5z m18.1 10v-4q-5.1 2.6-8.3 1.6v-4.9q-0.5-0.1-0.9-0.3-0.1-0.1-0.7-0.4t-0.7-0.4-0.7-0.3-0.8-0.3-0.7-0.3-0.8-0.3-0.7-0.2-0.9-0.1-0.9-0.1-0.9-0.1q-0.5 0-1.1 0.1v4.8h0.4q2.3 0 4.2 0.7t4.3 1.8q0.4 0.2 0.9 0.3v4.1q0.9 0.3 2 0.3 2.6 0 6.3-2z m0-9.3v-4.1q-3.6 2-6.6 2-1 0-1.7-0.2v4.3q3.2 0.9 8.3-2z m-29.2-7.8q0 0.7-0.4 1.4t-1 1v27.5q0 0.3-0.2 0.5t-0.5 0.2h-1.4q-0.3 0-0.5-0.2t-0.2-0.5v-27.5q-0.6-0.4-1-1t-0.4-1.4q0-1.2 0.8-2t2-0.8 2 0.8 0.8 2z m32 1.4v16.6q0 0.8-0.7 1.2-0.3 0.1-0.4 0.2-4.8 2.5-8 2.5-2 0-3.5-0.7l-0.6-0.3q-1.4-0.8-2.2-1.1t-1.9-0.6-2.5-0.3q-2.2 0-5.1 0.9t-5 2.3q-0.3 0.2-0.7 0.2-0.4 0-0.7-0.2-0.7-0.4-0.7-1.2v-16.2q0-0.8 0.6-1.2 0.8-0.4 1.8-0.9t2.4-1.1 3.4-1.1 3.3-0.4q2.5 0 4.6 0.6t4.5 1.9q0.9 0.4 2 0.4 2.6 0 6.7-2.4l0.7-0.4q0.7-0.3 1.4 0.1 0.6 0.4 0.6 1.2z"></path></g>
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

export default IconFlagCheckered

