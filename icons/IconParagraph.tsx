

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

class IconParagraph extends React.Component<Props, State> {

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
                    <g><path d="M34 4.2v1.6q0 .7-.4 1.4t-.9.7h-1.2q-.6.2-.8.7v27.2q0 .5-.4.9t-1 .4h-2.4q-.6 0-1-.4t-.4-.9V8.6h-3.1v27.2q0 .5-.4.9t-1 .4h-2.4q-.6 0-1-.4t-.4-.9V24.7q-3.3-.3-5.5-1.3-2.8-1.3-4.2-4Q6 16.8 6 13.6q0-3.7 2-6.4 2-2.6 4.7-3.5 2.4-.8 9.3-.8h10.7q.5 0 .9.4t.4.9z"></path></g>
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

export default IconParagraph

