
import * as React from "react"

export const IconMailReply: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--mail-reply ${props.addClass} ${props.className}`
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
                    <g><path d="M40 25q0 3.7-2.8 10.1-.1.1-.3.5t-.3.7-.3.5q-.2.3-.6.3-.3 0-.5-.2t-.2-.5q0-.2.1-.6t0-.6q.1-1.5.1-2.7 0-2.3-.4-4t-1-3.1-1.8-2.3-2.4-1.5-3-1-3.4-.5-3.9-.1h-5v5.7q0 .6-.4 1t-1 .4-1-.4L.4 15.3q-.4-.4-.4-1t.4-1L11.9 1.9q.4-.5 1-.5t1 .5.4 1v5.7h5q15.9 0 19.5 9 1.2 3 1.2 7.4z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconMailReply.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconMailReply;
