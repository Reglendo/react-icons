
import * as React from "react"

export const IconLock: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--lock ${props.addClass} ${props.className}`
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
                    <g><path d="M14.1 17.1h11.5v-4.2q0-2.4-1.7-4.1t-4-1.7-4.1 1.7-1.7 4.1v4.2zm18.6 2.2v12.8q0 .9-.6 1.6t-1.5.6H9.1q-.8 0-1.5-.6T7 32.1V19.3q0-.9.6-1.5t1.5-.7h.8v-4.2q0-4.1 2.9-7.1t7.1-2.9 7 2.9 3 7.1v4.2h.7q.9 0 1.5.7t.6 1.5z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconLock.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconLock;
