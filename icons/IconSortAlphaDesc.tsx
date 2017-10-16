

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

class IconSortAlphaDesc extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--sort-alpha-desc ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M27.6 32h3.9l-1.6-4.9-.2-1.1q-.1-.3-.1-.4h-.1v.4q0 .1-.1.4t-.2.7zm-10.2.1q0 .3-.2.6l-7.1 7.1q-.2.2-.5.2t-.5-.2l-7.2-7.1q-.3-.4-.1-.8.1-.5.6-.5h4.3V.7q0-.3.2-.5t.5-.2h4.3q.3 0 .5.2t.2.5v30.7h4.3q.3 0 .5.2t.2.5zm20.7 5.5V40h-6.5v-2.4h1.7l-1-3.2h-5.5l-1 3.2h1.7V40h-6.4v-2.4h1.5l5.2-14.7h3.6l5.1 14.7h1.6zm-2-25.7v5.2h-13v-2l8.2-11.8q.3-.4.5-.6l.2-.2h-6.2v2.6h-2.6V0h12.6v2l-8.2 11.8q-.2.2-.5.6l-.2.2v.1l.3-.1h6.2v-2.7h2.7z"></path></g>
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

export default IconSortAlphaDesc

