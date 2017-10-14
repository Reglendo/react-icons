

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

class IconNewspaperO extends React.Component<Props, State> {

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
                    <g><path d="M19.9 12.5h-7.5V20h7.5v-7.5zM22.4 25v2.5H9.9V25h12.5zm0-14.9v12.4H9.9V10.1h12.5zM34.8 25v2.5h-10V25h10zm0-5v2.5h-10V20h10zm0-5v2.5h-10V15h10zm0-4.9v2.4h-10v-2.4h10zM5 28.7V10.1H2.5v18.6q0 .5.4.9t.8.3.9-.3.4-.9zm32.3 0V7.6H7.5v21.1q0 .6-.3 1.2H36q.5 0 .9-.3t.4-.9zm2.5-23.6v23.6q0 1.5-1.1 2.6T36 32.4H3.7q-1.5 0-2.6-1.1T0 28.7V7.6h5V5.1h34.8z"></path></g>
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

export default IconNewspaperO

