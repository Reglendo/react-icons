

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

class IconBitbucketSquare extends React.Component<Props, State> {

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
                    <g><path d="m21.9 19.4q0-0.9-0.9-1.5t-1.7 0q-1 0.5-1 1.6t1 1.6q0.9 0.5 1.8-0.1t0.8-1.6z m1.8-0.3q0.2 1.4-0.8 2.7t-2.4 1.3-2.7-0.9-1.3-2.5q0-1.1 0.6-2.1t1.6-1.4q1.6-0.7 3.2 0.2t1.8 2.7z m3.9-8.8q-0.5 0.5-1.2 0.8t-1.2 0.4-1.4 0.1q-3.5 0.5-7.3 0-1-0.1-1.4-0.2t-1.2-0.3-1.2-0.8q0.3-0.4 0.8-0.7t0.9-0.3 1.1-0.2q4.4-0.8 9.1 0 0.7 0.1 1.1 0.2t1 0.3 0.9 0.7z m0.9 16.7q0-0.2 0.1-0.6t0.1-0.7-0.4-0.4q-3.6 2.4-8.2 2.4t-8.1-2.4l-0.3 0.1-0.1 0.3q0.6 3.5 0.9 4.7 1.1 1.8 4.6 2.4 5.5 1 9.5-1.2 0.8-0.4 1.1-1.1t0.5-1.9 0.3-1.6z m2.9-15.5q0.2-1.2-0.2-1.7-0.9-1.2-3.4-1.9-4.9-1.4-10.9-0.8-3 0.2-5.1 1-0.8 0.3-1.3 0.6t-1 0.7-0.7 1.2q0.2 1.5 0.4 3.1t0.7 3.8 0.5 3.1q0 0.1 0.1 0.7t0.2 0.8 0.2 0.6 0.5 0.6q2.4 1.8 6.4 2.2 5.8 0.7 9.8-1.4 0.5-0.3 0.9-0.5t0.7-0.6 0.4-0.9q1.1-6 1.8-10.6z m5.9-2.2v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"></path></g>
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

export default IconBitbucketSquare

