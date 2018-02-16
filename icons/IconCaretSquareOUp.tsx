
import * as React from "react"

export const IconCaretSquareOUp: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--caret-square-o-up ${props.addClass} ${props.className}`
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
                    <g><path d="M28.6 24.9q-.4.8-1.3.8H13q-.9 0-1.3-.8-.4-.7.1-1.4l7.2-10q.4-.6 1.1-.6t1.2.6l7.1 10q.6.7.2 1.4zm3 5.8V9.3q0-.3-.2-.5t-.5-.2H9.4q-.3 0-.5.2t-.2.5v21.4q0 .3.2.5t.5.2h21.5q.2 0 .5-.2t.2-.5zm5.7-21.4v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconCaretSquareOUp.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconCaretSquareOUp;
