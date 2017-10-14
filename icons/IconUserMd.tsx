

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

class IconUserMd extends React.Component<Props, State> {

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
                    <g><path d="M13.1 30q0 .6-.5 1t-1 .4-1-.4-.4-1 .4-1 1-.4 1 .4.5 1zm22.8 1.4q0 2.7-1.6 4.2T30 37.1H10.5q-2.7 0-4.4-1.5t-1.6-4.2q0-1.6.1-3t.6-3 1-3T8 20.1t2.7-1.4q-.5 1.2-.5 2.7V26q-1.3.4-2.1 1.5T7.4 30q0 1.8 1.2 3t3 1.3 3.1-1.3 1.2-3q0-1.4-.8-2.5t-2-1.5v-4.6q0-1.4.5-2 3 2.3 6.6 2.3t6.6-2.3q.6.6.6 2v1.5q-2.4 0-4.1 1.6t-1.7 4.1v2q-.7.6-.7 1.5t.7 1.6 1.5.6 1.5-.6.6-1.6q0-.9-.7-1.5v-2q0-1.2.9-2t2-.9 2 .9.8 2v2q-.7.6-.7 1.5t.6 1.6 1.5.6 1.6-.6.6-1.6q0-.9-.7-1.5v-2q0-1.5-.8-2.9t-2.1-2.1v-2.9q0-.5-.2-1.1t-.3-.8q1.5.3 2.7 1.3t1.8 2.3 1.1 3 .5 3 .1 3zm-7.1-20q0 3.6-2.5 6.1T20.2 20t-6-2.5-2.6-6.1 2.6-6 6-2.5 6.1 2.5 2.5 6z"></path></g>
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

export default IconUserMd

