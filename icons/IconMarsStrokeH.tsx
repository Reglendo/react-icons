

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

class IconMarsStrokeH extends React.Component<Props, State> {

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
                    <g><path d="M39.5 20.4q.4.4.4.9t-.4 1l-6.1 6.1q-.2.2-.5.2t-.5-.2l-.9-1q-.2-.2-.2-.4t.2-.5l3.8-3.8h-6.1v4.6q0 .3-.2.5t-.4.2h-1.4q-.3 0-.4-.2t-.2-.5v-4.6h-2.8q-.5 4.5-3.9 7.5T12 33.3q-3.5 0-6.4-1.8t-4.4-4.9T.1 20q.3-2.8 1.8-5.1t3.9-3.8T11 9.4q3.2-.2 6 1.1t4.7 3.9 2.1 5.6h2.8v-4.7q0-.2.2-.4t.4-.2h1.4q.3 0 .4.2t.2.4V20h6.1l-3.8-3.8q-.2-.2-.2-.5t.2-.5l.9-.9q.2-.2.5-.2t.5.2zM12 30.6q3.8 0 6.5-2.7t2.8-6.6-2.8-6.5T12 12t-6.6 2.8-2.7 6.5 2.7 6.6 6.6 2.7z"></path></g>
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

export default IconMarsStrokeH

