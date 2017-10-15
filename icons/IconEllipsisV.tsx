

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

class IconEllipsisV extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--ellipsis-v ${this.props.addClass}`

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
                    <g><path d="M24.1 27.9v4.2q0 .9-.7 1.6t-1.5.6h-4.3q-.9 0-1.5-.6t-.6-1.6v-4.2q0-.9.6-1.6t1.5-.6h4.3q.9 0 1.5.6t.7 1.6zm0-11.5v4.3q0 .9-.7 1.5t-1.5.7h-4.3q-.9 0-1.5-.7t-.6-1.5v-4.3q0-.9.6-1.5t1.5-.6h4.3q.9 0 1.5.6t.7 1.5zm0-11.4v4.3q0 .9-.7 1.5t-1.5.6h-4.3q-.9 0-1.5-.6t-.6-1.5V5q0-.9.6-1.5t1.5-.6h4.3q.9 0 1.5.6t.7 1.5z"></path></g>
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

export default IconEllipsisV

