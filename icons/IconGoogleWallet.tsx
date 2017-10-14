

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

class IconGoogleWallet extends React.Component<Props, State> {

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
                    <g><path d="M9.6 15.1q.7 0 1.1.6 5.8 7.9 7.9 16.8H8.9q-2.8-9.6-8-16.3-.2-.3-.1-.7t.7-.4h8.1zm12.2 7.8q-1.1 4.3-2.7 8.6-1.8-6.8-5.6-13 .9-4.8.9-9.8 4.6 7.4 7.4 14.2zm2.1-15.4q5.2 7 8.4 15.2t4 16.8h-9.8q-.9-14.5-12-32h9.4zM39 20q0 9.2-2.2 17.7-1.4-12.2-7.8-23.6-.5-6.6-2.3-12.7-.1-.4.1-.6t.6-.3h7.8q.5 0 .8.3t.5.7Q39 10.4 39 20z"></path></g>
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

export default IconGoogleWallet

