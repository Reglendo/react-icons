

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

class IconSpotify extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    }

    render() {
        let className = `${this.name} ${this.name}--spotify ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m28.2 27q0-0.7-0.7-1.1-4.3-2.6-10-2.6-3 0-6.4 0.8-0.9 0.2-0.9 1.1 0 0.5 0.3 0.8t0.8 0.3q0.1 0 0.8-0.2 2.9-0.6 5.4-0.6 5.1 0 8.9 2.3 0.4 0.3 0.7 0.3 0.4 0 0.7-0.3t0.4-0.8z m2.1-4.8q0-0.9-0.8-1.4-5.3-3.1-12.2-3.1-3.4 0-6.8 0.9-1 0.3-1 1.5 0 0.5 0.3 0.9t1 0.4q0.1 0 0.8-0.2 2.7-0.7 5.6-0.7 6.2 0 10.9 2.8 0.5 0.3 0.9 0.3 0.5 0 0.9-0.4t0.4-1z m2.4-5.5q0-1.1-0.9-1.6-2.8-1.6-6.5-2.5t-7.7-0.8q-4.5 0-8.1 1.1-0.5 0.1-0.9 0.5t-0.3 1.1q0 0.7 0.5 1.2t1.1 0.4q0.2 0 0.9-0.1 3-0.9 6.8-0.9 3.6 0 7 0.8t5.6 2.1q0.5 0.3 0.9 0.3 0.7 0 1.1-0.5t0.5-1.1z m4.6 3.3q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"></path></g>
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

export default IconSpotify

