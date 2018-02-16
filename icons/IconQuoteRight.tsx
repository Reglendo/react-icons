
import * as React from "react"

export const IconQuoteRight: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--quote-right ${props.addClass} ${props.className}`
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
                    <g><path d="M18.6 7.1v15.8q0 2.3-.9 4.4t-2.4 3.6-3.7 2.5-4.4.9H5.8q-.6 0-1-.4t-.4-1V30q0-.6.4-1t1-.4h1.4q2.4 0 4.1-1.7t1.6-4v-.8q0-.8-.6-1.5t-1.5-.6h-5Q4 20 2.7 18.8t-1.2-3.1V7.1q0-1.7 1.3-3t3-1.2h8.6q1.7 0 3 1.2t1.2 3zm20 0v15.8q0 2.3-.9 4.4t-2.4 3.6-3.7 2.5-4.4.9h-1.4q-.6 0-1-.4t-.4-1V30q0-.6.4-1t1-.4h1.4q2.4 0 4.1-1.7t1.6-4v-.8q0-.8-.6-1.5t-1.5-.6h-5q-1.8 0-3.1-1.2t-1.2-3.1V7.1q0-1.7 1.3-3t3-1.2h8.6q1.7 0 3 1.2t1.2 3z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconQuoteRight.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconQuoteRight;
