
import * as React from "react"

export const IconTerminal: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--terminal ${props.addClass} ${props.className}`
    return (
            <span className={className} style={props.style} title={props.title}>
                {props.textFirst && textEl }
                <svg className={`muk-icon__image`} preserveAspectRatio='xMidYMid meet'
                     fill={props.color}
                     stroke={props.color}
                     strokeWidth={0}
                     height={props.size}
                     width={props.size}
                     viewBox={props.viewBox}
                >
                    <g><path d="M14.6 21.9L4.2 32.3q-.3.3-.6.3t-.5-.3L2 31.2q-.2-.2-.2-.5t.2-.5l8.8-8.8L2 12.7q-.2-.3-.2-.6t.2-.5l1.1-1.1q.3-.2.5-.2t.6.2l10.4 10.4q.2.2.2.5t-.2.5zm24 10.2v1.5q0 .3-.2.5t-.5.2H16.5q-.3 0-.5-.2t-.2-.5v-1.5q0-.3.2-.5t.5-.2h21.4q.3 0 .5.2t.2.5z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconTerminal.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconTerminal;
