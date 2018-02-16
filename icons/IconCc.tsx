
import * as React from "react"

export const IconCc: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--cc ${props.addClass} ${props.className}`
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
                    <g><path d="M15.2 22.2h4.1q-.3 3-2 4.8t-4.1 1.8q-3.2 0-5-2.3t-1.8-6.1q0-3.8 1.8-6.1t4.6-2.3q2.8 0 4.5 1.7t1.9 4.8h-4q-.1-1.2-.7-1.9t-1.6-.7q-1.1 0-1.7 1.2t-.6 3.4q0 1 .1 1.7t.4 1.3.7 1 1.3.4q1.9 0 2.1-2.7zm13.9 0h4q-.3 3-1.9 4.8T27 28.8q-3.1 0-4.9-2.3t-1.8-6.1q0-3.8 1.8-6.1t4.5-2.3q2.9 0 4.5 1.7t1.9 4.8h-4q-.1-1.2-.7-1.9t-1.5-.7q-1.1 0-1.8 1.2t-.6 3.4q0 1 .1 1.7t.4 1.3.8 1 1.2.4q1 0 1.5-.8t.7-1.9zm6.9-2.3q0-4.1-.3-6t-1.2-3.1q-.1-.2-.2-.3t-.4-.3-.3-.2Q31.9 8.8 20 8.8 7.9 8.8 6.3 10q-.1.1-.4.2t-.4.3-.3.3q-.9 1.1-1.1 3.1t-.3 6q0 4 .3 5.9t1.1 3.1q.1.2.3.3t.4.3.3.2q.9.7 4.7 1t9.1.3q11.9 0 13.6-1.3.1 0 .3-.2t.4-.2.2-.4q.9-1.1 1.2-3t.3-6zm3.8-14.8v29.8H0V5.1h39.8z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconCc.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconCc;
