

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

class IconHandODown extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    }

    render() {
        let className = `${this.name} ${this.name}--hand-o-down ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m34.4 21.4q0-1.8-0.7-4.1t-1.4-4.3-0.7-3.7v-0.7h-14.3v0.7q0 0.8-0.3 1.5t-0.8 1.4-1 1.1-1.2 1.1q-0.2 0.2-0.4 0.3-1.8 1.6-3.2 2.5-0.5 0.3-1.5 0.8-0.1 0-0.5 0.2t-0.8 0.5-0.8 0.4-0.7 0.5-0.2 0.4q0 1.6 0.6 2.6t2.2 1q1 0 1.9-0.4t1.5-0.7 1.2-0.7 1.1-0.4v12.9q0 1.1 0.9 2t2 0.8q1.1 0 2-0.8t0.8-2v-7.4q1.1 0.8 2.3 0.8 1.6 0 2.7-1.2 0.7 0.4 1.5 0.4t1.7-0.4 1.1-1.1q0.6 0.1 1.3 0.1 1.9 0 2.8-1t0.9-3.1z m-2.8-17.1q0-0.6-0.5-1t-1-0.4-1 0.4-0.4 1 0.4 1 1 0.4 1-0.4 0.5-1z m5.7 17q0 3.2-1.7 5.2t-4.9 1.9l-0.1 0q-1.7 1.4-4 1.4-0.5 0-0.9-0.1-1.2 0.7-2.7 0.8v3.8q0 2.3-1.7 4t-4 1.7q-2.3 0-4-1.7t-1.7-4v-8.4q-1.2 0.5-2.9 0.5-2.7 0-4.2-1.8t-1.5-4.6q0-0.8 0.4-1.6t1.1-1.2 1.4-0.9 1.6-0.8 1.4-0.7q1.2-0.8 2.9-2.3 0 0 0.3-0.3t0.5-0.4 0.5-0.5 0.5-0.5 0.4-0.5 0.3-0.5 0.1-0.5v-6.4q0-1.2 0.9-2.1t2-0.8h14.3q1.2 0 2 0.8t0.8 2.1v6.4q0 1.3 1.3 5 1.6 4.2 1.6 7z"></path></g>
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

export default IconHandODown

