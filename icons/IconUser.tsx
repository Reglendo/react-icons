

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

class IconUser extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    }

    render() {
        let className = `${this.name} ${this.name}--user ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m35.9 31.4q0 2.6-1.6 4.2t-4.3 1.5h-19.5q-2.7 0-4.4-1.5t-1.6-4.2q0-1.2 0.1-2.3t0.3-2.5 0.6-2.4 0.9-2.2 1.4-1.8 1.9-1.2 2.5-0.4q0.2 0 1 0.5t1.6 1 2.4 1.1 3 0.5 3-0.5 2.4-1.1 1.7-1 0.9-0.5q1.4 0 2.5 0.4t1.9 1.2 1.4 1.8 0.9 2.2 0.6 2.4 0.4 2.5 0 2.3z m-7.1-20q0 3.6-2.5 6.1t-6.1 2.5-6-2.5-2.6-6.1 2.6-6 6-2.5 6.1 2.5 2.5 6z"></path></g>
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

export default IconUser

