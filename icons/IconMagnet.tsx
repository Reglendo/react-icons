

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

class IconMagnet extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    }

    render() {
        let className = `${this.name} ${this.name}--magnet ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m37.3 18.6v2.8q0 4.5-2.2 8.1t-6.1 5.6-8.9 2-8.8-2-6.1-5.6-2.2-8.1v-2.8q0-0.6 0.4-1t1-0.5h8.6q0.6 0 1 0.5t0.4 1v2.8q0 1.2 0.6 2t1.1 1.3 1.6 0.7 1.5 0.3 0.9 0 1 0 1.5-0.3 1.5-0.7 1.2-1.3 0.6-2v-2.8q0-0.6 0.4-1t1-0.5h8.6q0.5 0 1 0.5t0.4 1z m-22.9-14.3v8.6q0 0.5-0.4 1t-1 0.4h-8.6q-0.6 0-1-0.4t-0.4-1v-8.6q0-0.6 0.4-1t1-0.4h8.6q0.6 0 1 0.4t0.4 1z m22.9 0v8.6q0 0.5-0.4 1t-1 0.4h-8.6q-0.6 0-1-0.4t-0.4-1v-8.6q0-0.6 0.4-1t1-0.4h8.6q0.5 0 1 0.4t0.4 1z"></path></g>
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

export default IconMagnet

