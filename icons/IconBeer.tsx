
import * as React from "react"

export const IconBeer: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--beer ${props.addClass} ${props.className}`
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
                    <g><path d="M14.8 20v-8.6H9.1v5.7q0 1.2.8 2.1t2 .8h2.9zm22.8 10v4.3H11.9V30l2.9-4.3h-2.9q-3.5 0-6-2.5t-2.5-6.1V10L1.9 8.6l.7-2.9h10.8l.7-2.8h21.4l.7 4.2-1.4.8v17.8z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconBeer.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconBeer;
