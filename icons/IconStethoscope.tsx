

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

class IconStethoscope extends React.Component<Props, State> {

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
                    <g><path d="M33.1 15.7q0-.6-.5-1t-1-.4-1 .4-.4 1 .4 1 1 .4 1-.4.5-1zm2.8 0q0 1.4-.8 2.5t-2 1.6v8.8q0 3.5-3 6t-7 2.5-7.1-2.5-2.9-6v-3q-3.7-.4-6.1-2.8t-2.5-5.7V5.7q0-.6.4-1t1-.4h.4q.4-.6 1-1t1.5-.4q1.2 0 2 .8t.8 2-.8 2-2 .9q-.8 0-1.4-.4v8.9q0 2.4 2.1 4.1t5 1.7 5-1.7 2.1-4.1V8.2q-.6.4-1.4.4-1.2 0-2-.9t-.8-2 .8-2 2-.8q.8 0 1.5.4t1 1h.4q.6 0 1 .4t.4 1v11.4q0 3.3-2.5 5.7t-6.1 2.8v3q0 2.3 2.1 4t5.1 1.7 5-1.7 2.1-4v-8.8q-1.3-.5-2.1-1.6t-.7-2.5q0-1.8 1.2-3t3-1.3 3.1 1.3 1.2 3z"></path></g>
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

export default IconStethoscope

