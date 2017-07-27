

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

class IconFloppyO extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    }

    render() {
        let className = `${this.name} ${this.name}--floppy-o ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m11.6 34.3h17.1v-8.6h-17.1v8.6z m20 0h2.8v-20q0-0.3-0.2-0.9t-0.4-0.7l-6.3-6.3q-0.2-0.2-0.8-0.5t-0.8-0.2v9.3q0 0.9-0.7 1.5t-1.5 0.6h-12.8q-0.9 0-1.6-0.6t-0.6-1.5v-9.3h-2.8v28.6h2.8v-9.3q0-0.9 0.6-1.5t1.6-0.6h18.5q0.9 0 1.5 0.6t0.7 1.5v9.3z m-8.6-20.7v-7.2q0-0.3-0.2-0.5t-0.5-0.2h-4.3q-0.3 0-0.5 0.2t-0.2 0.5v7.2q0 0.3 0.2 0.5t0.5 0.2h4.3q0.3 0 0.5-0.2t0.2-0.5z m14.3 0.7v20.7q0 0.9-0.6 1.5t-1.6 0.6h-30q-0.8 0-1.5-0.6t-0.6-1.5v-30q0-0.9 0.6-1.5t1.5-0.6h20.8q0.9 0 1.9 0.4t1.7 1.1l6.3 6.2q0.6 0.6 1 1.7t0.5 2z"></path></g>
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

export default IconFloppyO

