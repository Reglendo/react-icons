

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

class IconHashtag extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--hashtag ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M22.1 22.9l1.5-5.8h-5.7l-1.4 5.8h5.6zm17.2-11.3l-1.3 5q-.1.5-.7.5H30l-1.4 5.8h6.9q.4 0 .6.2.2.3.1.7l-1.2 5q-.1.5-.7.5H27l-1.8 7.3q-.2.5-.7.5h-5q-.4 0-.6-.2-.2-.3-.1-.6l1.7-7h-5.7L13 36.6q-.1.5-.7.5h-5q-.3 0-.5-.2-.2-.3-.2-.6l1.8-7h-7q-.3 0-.5-.3-.2-.2-.2-.6l1.3-5q.1-.5.7-.5H10l1.4-5.8H4.5q-.4 0-.6-.2-.2-.3-.1-.6l1.2-5q.1-.6.7-.6H13l1.8-7.3q.2-.5.7-.5h5q.4 0 .6.2.2.3.1.7l-1.7 6.9h5.7L27 3.4q.1-.5.7-.5h5q.3 0 .5.2.2.3.2.7l-1.8 6.9h7q.3 0 .5.3t.2.6z"></path></g>
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

export default IconHashtag

