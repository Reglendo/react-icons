

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

class IconEraser extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    }

    render() {
        let className = `${this.name} ${this.name}--eraser ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m18.6 30.6l7-7.9h-16l-6.9 7.9h15.9z m21-22.3q0.4 0.7 0.2 1.5t-0.6 1.3l-18.6 21.3q-0.8 0.9-2 0.9h-15.9q-0.8 0-1.5-0.4t-1-1.2q-0.3-0.7-0.2-1.5t0.7-1.3l18.6-21.3q0.8-0.9 2-0.9h15.9q0.8 0 1.5 0.4t0.9 1.2z"></path></g>
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

export default IconEraser

