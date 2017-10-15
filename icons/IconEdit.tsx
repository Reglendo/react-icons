

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

class IconEdit extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--edit ${this.props.addClass}`

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
                    <g><path d="M19.8 26.4l2.6-2.6-3.4-3.4-2.6 2.6v1.3h2.2v2.1h1.2zm9.8-16q-.3-.4-.7 0l-7.8 7.8q-.4.4 0 .7t.7 0l7.8-7.8q.4-.4 0-.7zm1.8 13.2v4.3q0 2.6-1.9 4.5T25 34.3H6.4q-2.6 0-4.5-1.9T0 27.9V9.3q0-2.7 1.9-4.6t4.5-1.8H25q1.4 0 2.6.5.3.2.4.5.1.4-.2.7l-1.1 1.1q-.3.3-.7.1-.5-.1-1-.1H6.4Q5 5.7 3.9 6.8t-1 2.5v18.6q0 1.4 1 2.5t2.5 1H25q1.5 0 2.5-1t1.1-2.5V25q0-.2.2-.4l1.4-1.5q.3-.3.8-.1t.4.6zM29.3 7.1l6.4 6.5-15 15h-6.4v-6.5zm9.9 3l-2.1 2-6.4-6.4 2.1-2q.6-.7 1.5-.7t1.5.7l3.4 3.4q.6.6.6 1.5t-.6 1.5z"></path></g>
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

export default IconEdit

