

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

class IconBan extends React.Component<Props, State> {

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
                    <g><path d="M32.3 19.9q0-3.6-2-6.6L13.5 30.2q3.1 1.9 6.6 1.9 2.5 0 4.8-.9t3.8-2.6 2.6-3.9 1-4.8zM10 26.6L26.8 9.8q-3-2.1-6.7-2.1-3.3 0-6.1 1.7t-4.4 4.4T8 19.9q0 3.6 2 6.7zm27.3-6.7q0 3.5-1.4 6.7t-3.6 5.5-5.5 3.7-6.7 1.3-6.6-1.3T8 32.1t-3.6-5.5T3 19.9t1.4-6.7T8 7.8t5.5-3.7 6.6-1.4 6.7 1.4 5.5 3.7 3.6 5.4 1.4 6.7z"></path></g>
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

export default IconBan

