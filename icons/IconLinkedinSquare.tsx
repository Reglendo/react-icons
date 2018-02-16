
import * as React from "react"

export const IconLinkedinSquare: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--linkedin-square ${props.addClass} ${props.className}`
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
                    <g><path d="M8.3 31.6h5.1V16.1H8.3v15.5zm5.5-20.3q0-1.2-.8-1.9t-2.1-.8-2.1.8-.8 1.9q0 1.1.8 1.9t2 .8h.1q1.3 0 2.1-.8t.8-1.9zm13 20.3H32v-8.9q0-3.5-1.6-5.2t-4.3-1.8q-3.1 0-4.7 2.6v-2.2h-5.1v15.5h5.1v-8.7q0-.8.2-1.2.3-.8 1-1.4t1.7-.5q2.5 0 2.5 3.5v8.3zM37.3 9.3v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconLinkedinSquare.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconLinkedinSquare;
