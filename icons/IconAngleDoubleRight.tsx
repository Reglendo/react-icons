

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

class IconAngleDoubleRight extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--angle-double-right ${this.props.addClass}`

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
                    <g><path d="M22.3 21.4q0 .3-.2.5L11.7 32.3q-.3.3-.6.3t-.5-.3l-1.1-1.1q-.2-.2-.2-.5t.2-.5l8.8-8.8-8.8-8.7q-.2-.3-.2-.6t.2-.5l1.1-1.1q.3-.2.5-.2t.6.2l10.4 10.4q.2.2.2.5zm8.6 0q0 .3-.3.5L20.2 32.3q-.2.3-.5.3t-.5-.3l-1.1-1.1q-.2-.2-.2-.5t.2-.5l8.8-8.8-8.8-8.7q-.2-.3-.2-.6t.2-.5l1.1-1.1q.2-.2.5-.2t.5.2l10.4 10.4q.3.2.3.5z"></path></g>
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

export default IconAngleDoubleRight

