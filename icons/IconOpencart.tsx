

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

class IconOpencart extends React.Component<Props, State> {

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
                    <g><path d="m26.7 31.6q0 1.2-0.9 2.1t-2 0.8-2-0.8-0.9-2.1 0.9-2 2-0.8 2 0.8 0.9 2z m-13.1 0q0 1.2-0.9 2.1t-2 0.8-2.1-0.8-0.8-2.1 0.8-2 2.1-0.8 2 0.8 0.9 2z m-13.6-26.1q1 1 1.9 1.8t2.2 1.5 2.3 1.1 2.9 0.8 3.5 0.5 4.4 0.3 5.3 0.2 6.6 0q2.4 0 4.2 0.1t3.2 0.3 2.2 0.5 1.2 0.7 0.4 0.9-0.3 1.1-1 1.3-1.6 1.6-2 1.9-2.4 2.1q-3.3 2.7-5 4.3 0.5-0.9 1.3-1.9t1.7-1.9 1.6-1.7 1.5-1.6 0.9-1.4 0.2-1.2-0.8-1-2-0.7-3.6-0.4-5.3-0.1q-2.9 0-5.5-0.1t-4.5-0.4-3.5-0.8-2.8-0.9-2.2-1-1.6-1.2-1.2-1.3-0.9-1.2-0.7-1.2-0.6-1z"></path></g>
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

export default IconOpencart

