
import * as React from "react"

export const IconArrowCircleODown: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--arrow-circle-o-down ${props.addClass} ${props.className}`
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
                    <g><path d="M28 20.7q0 .3-.2.6l-7.1 7.1q-.3.2-.6.2t-.5-.2l-7.1-7.2q-.3-.3-.2-.8.2-.4.7-.4h4.3v-7.9q0-.3.2-.5t.5-.2h4.3q.3 0 .5.2t.2.5V20h4.3q.3 0 .5.2t.2.5zM20.1 7.9q-3.3 0-6.1 1.6t-4.4 4.4T8 20t1.6 6.1 4.4 4.4 6.1 1.6 6.1-1.6 4.5-4.4 1.6-6.1-1.6-6.1-4.5-4.4-6.1-1.6zM37.3 20q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconArrowCircleODown.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconArrowCircleODown;
