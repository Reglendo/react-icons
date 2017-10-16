

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

class IconSliders extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--sliders ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M10.9 31.4v2.9H3v-2.9h7.9zm7.8-2.8q.6 0 1 .4t.4 1v5.7q0 .6-.4 1t-1 .4H13q-.6 0-1-.4t-.4-1V30q0-.6.4-1t1-.4h5.7zm3.6-8.6v2.9H3V20h19.3zM8 8.6v2.8H3V8.6h5zm29.3 22.8v2.9H20.9v-2.9h16.4zM15.9 5.7q.5 0 1 .4t.4 1v5.8q0 .5-.4 1t-1 .4h-5.8q-.5 0-1-.4t-.4-1V7.1q0-.5.4-1t1-.4h5.8zm14.2 11.4q.6 0 1 .5t.5 1v5.7q0 .6-.5 1t-1 .4h-5.7q-.5 0-1-.4t-.4-1v-5.7q0-.6.4-1t1-.5h5.7zm7.2 2.9v2.9h-5V20h5zm0-11.4v2.8H18V8.6h19.3z"></path></g>
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

export default IconSliders

