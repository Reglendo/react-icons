

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

class IconBinoculars extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--binoculars ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M15.7 7.1v17.2q0 .6-.4 1t-1 .4v12.9q0 .5-.4 1t-1 .4H1.4q-.6 0-1-.4t-.4-1V27.1L5.6 7.7q.1-.6.7-.6h9.4zm7.2 0v15.8h-5.8V7.1h5.8zm17.1 20v11.5q0 .6-.4 1t-1 .4H27.1q-.5 0-1-.4t-.4-1V25.7q-.6 0-1-.4t-.4-1V7.1h9.5q.5 0 .6.6zM16.4.7v5H8.6v-5q0-.3.2-.5t.5-.2h6.4q.3 0 .5.2t.2.5zm15 0v5h-7.8v-5q0-.3.2-.5t.5-.2h6.4q.3 0 .5.2t.2.5z"></path></g>
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

export default IconBinoculars

