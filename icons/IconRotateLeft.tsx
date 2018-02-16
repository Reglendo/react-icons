
import * as React from "react"

export const IconRotateLeft: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--rotate-left ${props.addClass} ${props.className}`
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
                    <g><path d="M37.3 20q0 3.5-1.4 6.7t-3.6 5.4-5.5 3.7-6.7 1.3q-3.8 0-7.3-1.6T7 31q-.2-.3-.2-.5T7 30l3.1-3.1q.2-.2.5-.2.4.1.5.3 1.7 2.1 4 3.3t5 1.1q2.4 0 4.5-.9t3.6-2.4 2.5-3.7.9-4.4-.9-4.4-2.5-3.7-3.6-2.4-4.5-.9q-2.1 0-4.2.8t-3.5 2.2l3 3.1q.7.7.3 1.6-.3.8-1.3.8h-10q-.5 0-1-.4t-.4-1v-10q0-.9.9-1.3t1.5.3l2.9 2.9q2.4-2.3 5.5-3.5t6.3-1.2q3.5 0 6.7 1.3t5.5 3.7 3.6 5.4 1.4 6.7z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconRotateLeft.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconRotateLeft;
