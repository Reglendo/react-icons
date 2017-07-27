

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

class IconGitSquare extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    }

    render() {
        let className = `${this.name} ${this.name}--git-square ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m16 29.2q0 1.5-2.1 1.5-2.4 0-2.4-1.4 0-1.5 2.2-1.5 2.3 0 2.3 1.4z m-0.8-10.4q0 1.9-1.7 1.9-1.7 0-1.7-1.9 0-2 1.7-2 0.8 0 1.3 0.6t0.4 1.4z m3.7-1.7v-2.8q-1.7 0.7-3 0.7-1.1-0.7-2.5-0.7-1.9 0-3.2 1.3t-1.3 3.2q0 1.1 0.6 2.3t1.7 1.5v0q-0.9 0.4-0.9 1.9 0 1.2 0.9 1.8v0q-2.5 0.8-2.5 3.1 0 1 0.5 1.8t1.2 1.1 1.6 0.6 1.8 0.2q5 0 5-4.2 0-1.5-1.1-2.2t-2.8-1.1q-0.6-0.1-1.2-0.4t-0.5-0.9q0-1 1.1-1.2 1.7-0.3 2.7-1.5t1-3q0-0.6-0.2-1.2 0.8-0.2 1.1-0.3z m1.3 9.4h3.1q-0.1-0.6-0.1-1.9v-8.6q0-1 0.1-1.5h-3.1q0.1 0.5 0.1 1.6v8.7q0 1.1-0.1 1.7z m11.4-0.4v-2.7q-0.7 0.5-1.5 0.5-1.2 0-1.2-1.8v-5.1h1.1q0.2 0 0.6 0.1t0.6 0v-2.6h-2.3q0-1.9 0-2.3h-3.1q0.1 0.5 0.1 1.2v1.1h-1.3v2.6q0.8-0.1 0.8-0.1 0.1 0 0.2 0t0.3 0v0.1h0v4.8q0 0.8 0 1.5t0.3 1.2 0.5 1.1 1 0.7 1.5 0.3q1.4 0 2.4-0.6z m-8-15.7q0-0.8-0.5-1.5t-1.4-0.6-1.3 0.6-0.5 1.5q0 0.8 0.5 1.4t1.3 0.5 1.4-0.6 0.5-1.3z m13.7-1.1v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"></path></g>
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

export default IconGitSquare

