

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

class IconFax extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    }

    render() {
        let className = `${this.name} ${this.name}--fax ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m6.4 8.6q1.5 0 2.5 1t1.1 2.5v24.3q0 1.5-1.1 2.5t-2.5 1.1h-2.8q-1.5 0-2.5-1t-1.1-2.6v-24.3q0-1.4 1.1-2.5t2.5-1h2.8z m30.7 3.6q1.3 0.8 2.1 2.1t0.8 2.8v17.2q0 2.4-1.7 4t-4 1.7h-19.3q-1.5 0-2.5-1t-1.1-2.6v-34.3q0-0.9 0.7-1.5t1.5-0.6h15q0.9 0 1.9 0.4t1.7 1.1l3.4 3.4q0.7 0.6 1.1 1.7t0.4 2v3.6z m-16.4 22.1v-2.9q0-0.3-0.2-0.5t-0.5-0.2h-2.9q-0.3 0-0.5 0.2t-0.2 0.5v2.9q0 0.3 0.2 0.5t0.5 0.2h2.9q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-2.9q0-0.3-0.2-0.5t-0.5-0.2h-2.9q-0.3 0-0.5 0.2t-0.2 0.5v2.9q0 0.3 0.2 0.5t0.5 0.2h2.9q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-2.9q0-0.3-0.2-0.5t-0.5-0.2h-2.9q-0.3 0-0.5 0.2t-0.2 0.5v2.9q0 0.3 0.2 0.5t0.5 0.2h2.9q0.3 0 0.5-0.2t0.2-0.5z m5.7 11.4v-2.9q0-0.3-0.2-0.5t-0.5-0.2h-2.8q-0.4 0-0.6 0.2t-0.2 0.5v2.9q0 0.3 0.2 0.5t0.6 0.2h2.8q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-2.9q0-0.3-0.2-0.5t-0.5-0.2h-2.8q-0.4 0-0.6 0.2t-0.2 0.5v2.9q0 0.3 0.2 0.5t0.6 0.2h2.8q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-2.9q0-0.3-0.2-0.5t-0.5-0.2h-2.8q-0.4 0-0.6 0.2t-0.2 0.5v2.9q0 0.3 0.2 0.5t0.6 0.2h2.8q0.3 0 0.5-0.2t0.2-0.5z m5.7 11.4v-2.9q0-0.3-0.2-0.5t-0.5-0.2h-2.8q-0.3 0-0.5 0.2t-0.2 0.5v2.9q0 0.3 0.2 0.5t0.5 0.2h2.8q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-2.9q0-0.3-0.2-0.5t-0.5-0.2h-2.8q-0.3 0-0.5 0.2t-0.2 0.5v2.9q0 0.3 0.2 0.5t0.5 0.2h2.8q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-2.9q0-0.3-0.2-0.5t-0.5-0.2h-2.8q-0.3 0-0.5 0.2t-0.2 0.5v2.9q0 0.3 0.2 0.5t0.5 0.2h2.8q0.3 0 0.5-0.2t0.2-0.5z m2.2-8.6v-5.7h-3.6q-0.9 0-1.5-0.7t-0.6-1.5v-3.5h-14.3v11.4h20z"></path></g>
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

export default IconFax

