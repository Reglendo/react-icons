

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

class IconBitbucketSquare extends React.Component<Props, State> {

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
                    <g><path d="M21.9 19.4q0-.9-.9-1.5t-1.7 0q-1 .5-1 1.6t1 1.6q.9.5 1.8-.1t.8-1.6zm1.8-.3q.2 1.4-.8 2.7t-2.4 1.3-2.7-.9-1.3-2.5q0-1.1.6-2.1t1.6-1.4q1.6-.7 3.2.2t1.8 2.7zm3.9-8.8q-.5.5-1.2.8t-1.2.4-1.4.1q-3.5.5-7.3 0-1-.1-1.4-.2t-1.2-.3-1.2-.8q.3-.4.8-.7t.9-.3 1.1-.2q4.4-.8 9.1 0 .7.1 1.1.2t1 .3.9.7zm.9 16.7q0-.2.1-.6t.1-.7-.4-.4q-3.6 2.4-8.2 2.4T12 25.3l-.3.1-.1.3q.6 3.5.9 4.7 1.1 1.8 4.6 2.4 5.5 1 9.5-1.2.8-.4 1.1-1.1t.5-1.9.3-1.6zm2.9-15.5q.2-1.2-.2-1.7-.9-1.2-3.4-1.9-4.9-1.4-10.9-.8-3 .2-5.1 1-.8.3-1.3.6t-1 .7-.7 1.2q.2 1.5.4 3.1t.7 3.8.5 3.1q0 .1.1.7t.2.8.2.6.5.6q2.4 1.8 6.4 2.2 5.8.7 9.8-1.4.5-.3.9-.5t.7-.6.4-.9q1.1-6 1.8-10.6zm5.9-2.2v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"></path></g>
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

export default IconBitbucketSquare

