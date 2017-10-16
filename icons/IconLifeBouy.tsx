

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

class IconLifeBouy extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--life-bouy ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M20 0q4.1 0 7.8 1.6t6.4 4.2 4.2 6.4T40 20t-1.6 7.8-4.2 6.4-6.4 4.2T20 40t-7.8-1.6-6.4-4.2-4.2-6.4T0 20t1.6-7.8 4.2-6.4 6.4-4.2T20 0zm0 2.9q-4.2 0-8.1 2l4.4 4.3q1.8-.6 3.7-.6t3.7.6l4.4-4.3q-3.9-2-8.1-2zM4.9 28.1l4.3-4.4q-.6-1.8-.6-3.7t.6-3.7l-4.3-4.4q-2 3.9-2 8.1t2 8.1zm15.1 9q4.2 0 8.1-2l-4.4-4.3q-1.8.6-3.7.6t-3.7-.6l-4.4 4.3q3.9 2 8.1 2zm0-8.5q3.6 0 6.1-2.5t2.5-6.1-2.5-6.1-6.1-2.5-6.1 2.5-2.5 6.1 2.5 6.1 6.1 2.5zm10.8-4.9l4.3 4.4q2-3.9 2-8.1t-2-8.1l-4.3 4.4q.6 1.8.6 3.7t-.6 3.7z"></path></g>
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

export default IconLifeBouy

