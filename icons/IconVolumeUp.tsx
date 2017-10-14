

import * as React from "react"

export interface Props {
    size?: number
    text?: string
    title?: string
    style?: any
    addClass?: string
    viewBox?: string
    color?: string
    textFirst?: boolean
}
export interface State {
}

class IconVolumeUp extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
    }

    render() {
        let className = `muk-icon ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                {this.props.text && this.props.textFirst &&
                    <span className={`muk-icon__text`}>
                        {this.props.text}
                    </span>
                }
                <svg className={`muk-icon__image`} preserveAspectRatio='xMidYMid meet'
                     fill={this.props.color}
                     stroke={this.props.color}
                     strokeWidth={0}
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m18.6 7.9v24.2q0 0.6-0.4 1t-1 0.5-1-0.5l-7.4-7.4h-5.9q-0.6 0-1-0.4t-0.4-1v-8.6q0-0.6 0.4-1t1-0.4h5.9l7.4-7.4q0.4-0.5 1-0.5t1 0.5 0.4 1z m8.6 12.1q0 1.7-0.9 3.2t-2.5 2q-0.3 0.2-0.6 0.2-0.6 0-1-0.5t-0.4-1q0-0.4 0.2-0.8t0.7-0.5 0.7-0.5 0.7-0.8 0.3-1.3-0.3-1.3-0.7-0.8-0.7-0.5-0.7-0.5-0.2-0.8q0-0.6 0.4-1t1-0.5q0.3 0 0.6 0.2 1.5 0.6 2.5 2t0.9 3.2z m5.7 0q0 3.4-1.9 6.3t-5 4.2q-0.3 0.1-0.5 0.1-0.7 0-1.1-0.4t-0.4-1q0-0.9 0.9-1.3 1.2-0.7 1.7-1 1.6-1.2 2.5-3t1-3.9-1-3.9-2.5-3q-0.5-0.3-1.7-1-0.9-0.4-0.9-1.3 0-0.6 0.4-1t1-0.4q0.3 0 0.6 0.1 3.1 1.3 5 4.2t1.9 6.3z m5.7 0q0 5.1-2.8 9.4t-7.5 6.4q-0.3 0.1-0.6 0.1-0.6 0-1-0.5t-0.4-1q0-0.8 0.8-1.3 0.2-0.1 0.5-0.2t0.5-0.2q1.1-0.6 1.9-1.2 2.7-2 4.2-5t1.6-6.5-1.6-6.4-4.2-5.1q-0.8-0.6-1.9-1.2-0.1 0-0.5-0.2t-0.5-0.2q-0.8-0.5-0.8-1.3 0-0.6 0.4-1t1-0.5q0.3 0 0.6 0.1 4.7 2.1 7.5 6.4t2.8 9.4z"></path></g>
                </svg>
                {this.props.text && !this.props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {this.props.text}
                    </span>
                }
            </span>
        )
    }
}

export default IconVolumeUp

