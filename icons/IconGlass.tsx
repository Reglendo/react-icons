

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

class IconGlass extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    }

    render() {
        let className = `${this.name} ${this.name}--glass ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m37.9 4.2q0 0.7-0.9 1.7l-14.1 14.1v17.1h7.1q0.6 0 1 0.5t0.4 1-0.4 1-1 0.4h-20q-0.6 0-1-0.4t-0.4-1 0.4-1 1-0.5h7.1v-17.1l-14.1-14.1q-0.9-1-0.9-1.7 0-0.6 0.4-0.9t0.8-0.4 1 0h31.4q0.5 0 1 0t0.8 0.4 0.4 0.9z"></path></g>
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

export default IconGlass

