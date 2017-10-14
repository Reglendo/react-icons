

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

class IconCommenting extends React.Component<Props, State> {

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
                    <g><path d="m14.3 20q0-1.2-0.9-2t-2-0.9-2 0.9-0.8 2 0.8 2 2 0.9 2-0.9 0.9-2z m8.6 0q0-1.2-0.9-2t-2-0.9-2 0.9-0.9 2 0.9 2 2 0.9 2-0.9 0.9-2z m8.5 0q0-1.2-0.8-2t-2-0.9-2 0.9-0.9 2 0.9 2 2 0.9 2-0.9 0.8-2z m8.6 0q0 3.9-2.7 7.2t-7.3 5.2-10 1.9q-2.5 0-4.7-0.4-3.9 3.8-9.7 5.1-1.2 0.2-1.9 0.3-0.3 0-0.5-0.1t-0.3-0.4q-0.1-0.4 0.4-0.9 0.1-0.1 0.5-0.5t0.6-0.5 0.5-0.5 0.6-0.8 0.4-0.8 0.5-1 0.3-1.3 0.3-1.6q-3.3-2.1-5.1-4.9t-1.9-6q0-3.9 2.7-7.2t7.3-5.2 10-1.9 10 1.9 7.3 5.2 2.7 7.2z"></path></g>
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

export default IconCommenting

