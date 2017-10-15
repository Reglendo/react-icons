

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

class IconBuilding extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--building ${this.props.addClass}`

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
                    <g><path d="M34.5 0q.6 0 1 .4t.4 1v37.2q0 .5-.4 1t-1 .4H5.9q-.6 0-1-.4t-.4-1V1.4q0-.6.4-1t1-.4h28.6zM15.9 6.4v1.5q0 .3.2.5t.5.2h1.5q.3 0 .5-.2t.2-.5V6.4q0-.3-.2-.5t-.5-.2h-1.5q-.3 0-.5.2t-.2.5zm0 5.7v1.5q0 .3.2.5t.5.2h1.5q.3 0 .5-.2t.2-.5v-1.5q0-.3-.2-.5t-.5-.2h-1.5q-.3 0-.5.2t-.2.5zm0 5.8v1.4q0 .3.2.5t.5.2h1.5q.3 0 .5-.2t.2-.5v-1.4q0-.4-.2-.6t-.5-.2h-1.5q-.3 0-.5.2t-.2.6zm0 5.7V25q0 .3.2.5t.5.2h1.5q.3 0 .5-.2t.2-.5v-1.4q0-.3-.2-.5t-.5-.2h-1.5q-.3 0-.5.2t-.2.5zm-2.8 7.1v-1.4q0-.3-.2-.5t-.5-.2h-1.5q-.3 0-.5.2t-.2.5v1.4q0 .3.2.5t.5.2h1.5q.3 0 .5-.2t.2-.5zm0-5.7v-1.4q0-.3-.2-.5t-.5-.2h-1.5q-.3 0-.5.2t-.2.5V25q0 .3.2.5t.5.2h1.5q.3 0 .5-.2t.2-.5zm0-5.7v-1.4q0-.4-.2-.6t-.5-.2h-1.5q-.3 0-.5.2t-.2.6v1.4q0 .3.2.5t.5.2h1.5q.3 0 .5-.2t.2-.5zm0-5.7v-1.5q0-.3-.2-.5t-.5-.2h-1.5q-.3 0-.5.2t-.2.5v1.5q0 .3.2.5t.5.2h1.5q.3 0 .5-.2t.2-.5zm0-5.7V6.4q0-.3-.2-.5t-.5-.2h-1.5q-.3 0-.5.2t-.2.5v1.5q0 .3.2.5t.5.2h1.5q.3 0 .5-.2t.2-.5zm11.4 28.5v-4.3q0-.3-.2-.5t-.5-.2h-7.2q-.3 0-.5.2t-.2.5v4.3q0 .3.2.5t.5.2h7.2q.3 0 .5-.2t.2-.5zm0-11.4v-1.4q0-.3-.2-.5t-.5-.2h-1.4q-.4 0-.6.2t-.2.5V25q0 .3.2.5t.6.2h1.4q.3 0 .5-.2t.2-.5zm0-5.7v-1.4q0-.4-.2-.6t-.5-.2h-1.4q-.4 0-.6.2t-.2.6v1.4q0 .3.2.5t.6.2h1.4q.3 0 .5-.2t.2-.5zm0-5.7v-1.5q0-.3-.2-.5t-.5-.2h-1.4q-.4 0-.6.2t-.2.5v1.5q0 .3.2.5t.6.2h1.4q.3 0 .5-.2t.2-.5zm0-5.7V6.4q0-.3-.2-.5t-.5-.2h-1.4q-.4 0-.6.2t-.2.5v1.5q0 .3.2.5t.6.2h1.4q.3 0 .5-.2t.2-.5zm5.7 22.8v-1.4q0-.3-.2-.5t-.5-.2h-1.4q-.3 0-.5.2t-.2.5v1.4q0 .3.2.5t.5.2h1.4q.3 0 .5-.2t.2-.5zm0-5.7v-1.4q0-.3-.2-.5t-.5-.2h-1.4q-.3 0-.5.2t-.2.5V25q0 .3.2.5t.5.2h1.4q.3 0 .5-.2t.2-.5zm0-5.7v-1.4q0-.4-.2-.6t-.5-.2h-1.4q-.3 0-.5.2t-.2.6v1.4q0 .3.2.5t.5.2h1.4q.3 0 .5-.2t.2-.5zm0-5.7v-1.5q0-.3-.2-.5t-.5-.2h-1.4q-.3 0-.5.2t-.2.5v1.5q0 .3.2.5t.5.2h1.4q.3 0 .5-.2t.2-.5zm0-5.7V6.4q0-.3-.2-.5t-.5-.2h-1.4q-.3 0-.5.2t-.2.5v1.5q0 .3.2.5t.5.2h1.4q.3 0 .5-.2t.2-.5z"></path></g>
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

export default IconBuilding

