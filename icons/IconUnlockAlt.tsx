
import * as React from "react"

export const IconUnlockAlt: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--unlock-alt ${props.addClass} ${props.className}`
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
                    <g><path d="M30.6 17.1q.9 0 1.5.7t.6 1.5v12.8q0 .9-.6 1.6t-1.5.6H9.1q-.8 0-1.5-.6T7 32.1V19.3q0-.9.6-1.5t1.5-.7h.8V10q0-4.1 2.9-7.1T19.9 0t7 2.9 3 7.1q0 .6-.5 1t-1 .4H27q-.6 0-1-.4t-.4-1q0-2.4-1.7-4t-4-1.7T15.8 6t-1.7 4v7.1h16.5z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconUnlockAlt.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconUnlockAlt;
