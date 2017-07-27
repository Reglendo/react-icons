

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

class IconBirthdayCake extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    }

    render() {
        let className = `${this.name} ${this.name}--birthday-cake ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m40 31.4v8.6h-40v-8.6q1 0 1.9-0.3t1.3-0.6 1.1-0.8q0.6-0.6 1.1-0.9t1.3-0.2 1.2 0.2 1.2 0.9q0.6 0.5 1 0.8t1.3 0.6 1.9 0.3q1.1 0 1.9-0.3t1.3-0.6 1.1-0.8q0.5-0.5 0.7-0.6t0.7-0.4 1-0.1q0.8 0 1.3 0.2t1.1 0.9q0.6 0.5 1.1 0.8t1.3 0.6 1.9 0.3 1.9-0.3 1.3-0.6 1-0.8q0.7-0.6 1.2-0.9t1.2-0.2q0.8 0 1.3 0.2t1.1 0.9q0.7 0.5 1.1 0.8t1.3 0.6 1.9 0.3z m0-7.1v4.3q-0.8 0-1.2-0.3t-1.2-0.8q-0.7-0.6-1.1-0.9t-1.3-0.6-1.9-0.3q-1 0-1.9 0.3t-1.3 0.6-1 0.9q-0.5 0.4-0.8 0.6t-0.6 0.3-1 0.2q-0.8 0-1.3-0.3t-1.1-0.8q-0.7-0.6-1.1-0.9t-1.3-0.6-1.9-0.3q-1 0-1.9 0.3t-1.3 0.6-1.1 0.9q-0.4 0.4-0.7 0.6t-0.7 0.3-1 0.2q-0.7 0-1.2-0.3t-1.2-0.8q-0.6-0.6-1-0.9t-1.3-0.6-1.9-0.3q-1.1 0-1.9 0.3t-1.3 0.6-1.1 0.9q-0.7 0.6-1.1 0.8t-1.3 0.3v-4.3q0-1.8 1.3-3t3-1.3h1.4v-10h5.7v10h5.7v-10h5.8v10h5.7v-10h5.7v10h1.4q1.8 0 3 1.3t1.3 3z m-28.6-19.3q0 1.7-0.8 2.6t-2 1q-1.2 0-2-0.9t-0.9-2q0-0.6 0.2-1.1t0.6-0.8 0.6-0.6 0.7-0.7 0.6-1 0.2-1.5q0.8 0 1.8 1.7t1 3.3z m11.5 0q0 1.7-0.8 2.6t-2.1 1q-1.2 0-2-0.9t-0.9-2q0-0.6 0.3-1.1t0.5-0.8 0.7-0.6 0.7-0.7 0.5-1 0.2-1.5q0.8 0 1.9 1.7t1 3.3z m11.4 0q0 1.7-0.8 2.6t-2.1 1q-1.2 0-2-0.9t-0.8-2q0-0.6 0.2-1.1t0.5-0.8 0.7-0.6 0.7-0.7 0.5-1 0.2-1.5q0.9 0 1.9 1.7t1 3.3z"></path></g>
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

export default IconBirthdayCake

