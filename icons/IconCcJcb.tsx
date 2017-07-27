

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

class IconCcJcb extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    }

    render() {
        let className = `${this.name} ${this.name}--cc-jcb ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m34.2 21.8q0 0.4-0.3 0.8t-0.7 0.4q-0.1 0-0.3 0h-2.7v-2.4h2.7q0.2 0 0.3 0 0.4 0.1 0.7 0.4t0.3 0.8z m-0.4-3.7q0 0.4-0.2 0.7t-0.7 0.4q0 0-0.2 0h-2.5v-2.3h2.4q0.1 0 0.2 0t0.1 0q0.4 0.1 0.7 0.4t0.2 0.8z m-21.1 2.8v-5.4h-3.9v5.4q0 1-0.7 1.7t-1.8 0.6q-1.9 0-4.1-1v2q1 0.2 2.2 0.4t1.9 0.1l0.7 0q5.7 0 5.7-3.8z m12.5 3.2v-1.9q-1.7 0.9-3.5 1-1.8 0.1-2.9-0.7t-1.1-2.5 1.1-2.5 2.9-0.7q1.8 0.1 3.5 1v-1.9q-0.8-0.3-1.7-0.4t-1.4-0.2l-0.5 0q-2.2-0.1-3.8 0.3t-2.5 1-1.2 1.5-0.4 1.9 0.4 1.9 1.2 1.5 2.5 1 3.8 0.3q1.8-0.1 3.6-0.6z m12.9-2q0-0.9-0.8-1.5t-1.9-0.7v-0.1q1-0.1 1.6-0.7t0.6-1.4q0-0.9-0.8-1.5t-1.8-0.6q-0.1 0-0.2-0.1t-0.3 0h-8v9h8.6q1.3 0 2.2-0.7t0.8-1.7z m2.2-13.3v22.4q0 0.9-0.6 1.6t-1.6 0.6h-35.9q-0.9 0-1.5-0.6t-0.7-1.6v-22.4q0-0.9 0.7-1.6t1.5-0.6h35.9q0.9 0 1.6 0.6t0.6 1.6z"></path></g>
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

export default IconCcJcb

