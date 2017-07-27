

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

class IconPaperclip extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    }

    render() {
        let className = `${this.name} ${this.name}--paperclip ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m35.8 30.9q0 2.6-1.7 4.4t-4.4 1.8q-3 0-5.2-2.3l-17.4-17.3q-2.5-2.6-2.5-6.1 0-3.5 2.4-6t6-2.5q3.6 0 6.1 2.6l13.5 13.5q0.3 0.2 0.3 0.5 0 0.3-0.7 1t-1.1 0.7q-0.2 0-0.5-0.2l-13.5-13.6q-1.8-1.7-4-1.7-2.4 0-4 1.7t-1.7 4q0 2.4 1.7 4.1l17.4 17.3q1.4 1.4 3.2 1.4 1.4 0 2.4-0.9t0.9-2.4q0-1.8-1.4-3.2l-13-13q-0.6-0.5-1.3-0.5-0.7 0-1.1 0.4t-0.4 1.1q0 0.7 0.6 1.3l9.1 9.1q0.2 0.3 0.2 0.5 0 0.4-0.7 1.1t-1 0.7q-0.3 0-0.5-0.3l-9.2-9.1q-1.4-1.4-1.4-3.3 0-1.9 1.3-3.1t3.1-1.3q2 0 3.3 1.4l13 13q2.2 2.2 2.2 5.2z"></path></g>
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

export default IconPaperclip

