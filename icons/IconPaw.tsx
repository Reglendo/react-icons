
import * as React from "react"

export const IconPaw: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--paw ${props.addClass} ${props.className}`
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
                    <g><path d="M18.9 10.5q0 1.4-.4 2.6t-1.4 2-2.4.9q-1.7 0-3-1.3t-2.1-3-.7-3.4q0-1.3.5-2.5t1.4-2.1 2.3-.8q1.7 0 3.1 1.2t2 3.1.7 3.3zm-7.6 10.8q0 1.8-1 3.1t-2.6 1.3q-1.7 0-3.2-1.2t-2.2-3-.8-3.4q0-1.8.9-3.1t2.7-1.3q1.7 0 3.2 1.2t2.2 3 .8 3.4zm8.8-.6q2.6 0 5.7 2.2t5.1 5.3 2 5.7q0 1-.3 1.7t-1.1 1-1.5.4-1.7.1q-1.5 0-4.2-1t-4-1q-1.5 0-4.3 1t-4.5 1q-4.1 0-4.1-3.2 0-2 1.3-4.3t3.1-4.3 4.2-3.3 4.3-1.3zm5.3-4.7q-1.4 0-2.3-.9t-1.4-2-.5-2.6q0-1.6.7-3.3t2-3.1T27 2.9q1.4 0 2.4.8t1.4 2.1.4 2.5q0 1.7-.7 3.4t-2 3-3.1 1.3zm9.7-2.3q1.7 0 2.6 1.3t.9 3.1q0 1.7-.7 3.4t-2.3 3-3.1 1.2q-1.8 0-2.7-1.3t-.9-3.1q0-1.6.7-3.4t2.3-3 3.2-1.2z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconPaw.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconPaw;
