

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
    className?: string
}
export interface State {
}

class IconDashboard extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
    }

    render() {
        let className = `muk-icon ${this.name}--dashboard ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M8.6 25.7q0-1.2-.9-2t-2-.8-2 .8-.8 2 .8 2 2 .9 2-.9.9-2zm4.3-10q0-1.2-.9-2t-2-.8-2 .8-.9 2 .9 2 2 .9 2-.9.9-2zm9.5 10.7l2.3-8.5q.1-.6-.2-1.1t-.9-.6-1 .1-.7.9l-2.3 8.5q-1.3.1-2.3 1t-1.5 2.2q-.4 1.7.5 3.3t2.6 2 3.3-.5 2-2.6q.3-1.3-.2-2.6t-1.6-2zm14.7-.7q0-1.2-.8-2t-2-.8-2 .8-.9 2 .9 2 2 .9 2-.9.8-2zM22.9 11.4q0-1.2-.9-2t-2-.8-2 .8-.9 2 .9 2 2 .9 2-.9.9-2zm10 4.3q0-1.2-.9-2t-2-.8-2 .8-.9 2 .9 2 2 .9 2-.9.9-2zm7.1 10q0 5.8-3.1 10.8-.5.6-1.3.6H4.4q-.8 0-1.3-.6Q0 31.6 0 25.7q0-4 1.6-7.8t4.2-6.3 6.4-4.3T20 5.7t7.8 1.6 6.4 4.3 4.2 6.3 1.6 7.8z"></path></g>
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

export default IconDashboard

