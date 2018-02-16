
import * as React from "react"

export const IconYahoo: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--yahoo ${props.addClass} ${props.className}`
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
                    <g><path d="M22.2 21.4l.3 15.7q-1.4-.2-2.4-.2-.9 0-2.3.2l.3-15.7q-.9-1.6-3.8-6.6T9.5 6.4 5.4 0q1.3.3 2.4.3 1 0 2.5-.3 1.4 2.5 3 5.1t3.7 6.2 3.1 5.1q.8-1.4 2.5-4t2.6-4.2 2.3-4T29.9 0q1.2.3 2.4.3 1.3 0 2.6-.3-.7.9-1.4 2t-1.1 1.7-1.3 2.2-1 1.8q-3.3 5.6-7.9 13.7z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconYahoo.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconYahoo;
