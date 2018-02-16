
import * as React from "react"

export const IconWpbeginner: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--wpbeginner ${props.addClass} ${props.className}`
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
                    <g><path d="M8.6 18.6h3.5v-5H8.6v5zM27.3 26v-2.1q-2.4.8-5.5.9-3 0-5.8-1.1T11.1 21v2.1q2 1.8 4.8 2.9t6 1.1q2.9 0 5.4-1.1zm-13-7.4h14.3v-5H14.3v5zm25.7-.7q0 4.1-2.2 7.8 2 2.3 2 5.1 0 3.5-2.9 6t-7 2.5q-2.7 0-5-1.2T21.3 35h-2.6q-1.3 1.9-3.6 3.1t-5 1.2q-4.1 0-7-2.5t-2.9-6q0-2.8 2-5.1Q0 22 0 17.9q0-4.7 2.7-8.6T10 3 20 .7 30 3t7.3 6.3 2.7 8.6z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconWpbeginner.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconWpbeginner;
