
import * as React from "react"

export const IconPlane: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--plane ${props.addClass} ${props.className}`
    return (
            <span className={className} style={props.style} title={props.title}>
                {props.text && props.textFirst &&
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
                <svg className={`muk-icon__image`} preserveAspectRatio='xMidYMid meet'
                     fill={props.color}
                     stroke={props.color}
                     strokeWidth={0}
                     height={props.size}
                     width={props.size}
                     viewBox={props.viewBox}
                >
                    <g><path d="M34.7 3.6q1 1.1.3 3.3t-2.4 3.8L29 14.3l3.5 15.5q.2.5-.2.8l-2.9 2.1q-.1.2-.4.2-.1 0-.2-.1-.3 0-.4-.3l-6.3-11.4-5.7 5.8 1.1 4.4q.2.3-.1.6l-2.2 2.2q-.2.2-.5.2-.4-.1-.6-.3l-4.2-5.6-5.6-4.2Q4 24 4 23.6q0-.2.2-.5l2.1-2.2q.2-.2.6-.2H7l4.4 1.2 5.7-5.8L5.8 9.9q-.3-.2-.4-.5 0-.4.2-.6l2.9-2.9q.3-.3.7-.2L24 9.3l3.6-3.6q1.7-1.7 3.8-2.4t3.3.3z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconPlane.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
