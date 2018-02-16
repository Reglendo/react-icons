
import * as React from "react"

export const IconImage: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--image ${props.addClass} ${props.className}`
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
                    <g><path d="M13.3 13.4q0 1.6-1.2 2.8t-2.8 1.1-2.8-1.1-1.2-2.8 1.2-2.9 2.8-1.1 2.8 1.1 1.2 2.9zm21.3 7.9v9.3H5.3v-4L12 20l3.3 3.3 10.6-10.6zm1.9-14.6H3.3q-.2 0-.4.2t-.2.5v25.2q0 .3.2.5t.4.2h33.2q.3 0 .5-.2t.2-.5V7.4q0-.3-.2-.5t-.5-.2zm3.4.7v25.2q0 1.4-1 2.4t-2.4.9H3.3Q2 35.9 1 35t-1-2.4V7.4Q0 6 1 5t2.3-.9h33.2q1.4 0 2.4.9t1 2.4z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconImage.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconImage;
