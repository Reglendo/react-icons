
import * as React from "react"

export const IconScribd: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--scribd ${props.addClass} ${props.className}`
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
                    <g><path d="M36.5 34.6q0 2-1.4 3.4t-3.4 1.4-3.5-1.4-1.4-3.4q0-2 1.4-3.4t3.5-1.5 3.4 1.5 1.4 3.4zm-5.2-6.3q-2.6.3-4.3 2.3t-1.7 4.6q0 1.6.7 3.1-3.3 1.7-8.5 1.7-2.4 0-4.5-.5t-3.4-1.2-2.4-1.7-1.7-1.9-1-1.8-.6-1.5-.1-.9q0-.4.1-1t.4-1.2.8-1.3 1.5-1 2.1-.4 2.1.4 1.4.9.8 1.2.4 1.1 0 .8q0 .7-.5 1.8.7.6 1.9.9t2 .4h.9q2.6 0 4.3-1.1t1.6-3q0-.6-.2-1.1t-.7-1-1.1-.9-1.6-1-2.1-1-2.7-1.3l-.9-.4Q11.7 21 10.1 20t-2.7-2.3-1.6-2.8-.5-3.6q0-1.7.5-3.3t1.4-3.1 2.5-2.5T13.5.6t4.9-.6q2.7 0 4.9.6T27 2.1t2.4 2.1 1.5 2.3.4 2.3q0 1.1-.4 1.9t-.8 1.3-1.1.8-1 .4-.9.1h-.9l-.9-.1-1-.3-.9-.6-.8-1.1-.5-1.5-.3-2.2q-.3-.4-1.3-.6t-1.8-.2h-.8q-1.5 0-2.6.7t-1.6 1.5-.5 1.7q0 .6.1 1t.6 1 1.2 1.2 2.1 1.1 3.4 1.4q1.7.5 3.1 1.1t2.4 1.3 1.8 1.3 1.4 1.3.9 1.4.6 1.4.3 1.4.2 1.4 0 1.4z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconScribd.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconScribd;
