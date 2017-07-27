

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

class IconBullhorn extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    }

    render() {
        let className = `${this.name} ${this.name}--bullhorn ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m37.1 14.3q1.2 0 2.1 0.8t0.8 2-0.8 2.1-2.1 0.8v8.6q0 1.1-0.8 2t-2 0.8q-9.3-7.7-18.1-8.5-1.3 0.5-2.1 1.5t-0.7 2.3 0.9 2q-0.4 0.8-0.5 1.5t0.2 1.3 0.7 1.2 1.1 1.1 1.3 1.2q-0.6 1.2-2.4 1.8t-3.8 0.3-2.9-1.3q-0.2-0.5-0.7-1.9t-0.7-2.1-0.5-2-0.4-2.3 0.1-2.2 0.5-2.4h-2.7q-1.5 0-2.5-1.1t-1.1-2.5v-4.3q0-1.5 1.1-2.5t2.5-1.1h10.7q9.7 0 20-8.5 1.1 0 2 0.8t0.8 2v8.6z m-2.8 13.5v-21.3q-8.8 6.7-17.2 7.6v6.1q8.5 0.9 17.2 7.6z"></path></g>
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

export default IconBullhorn

