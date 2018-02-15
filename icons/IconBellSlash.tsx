
import * as React from "react"

export const IconBellSlash: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--bell-slash ${props.addClass} ${props.className}`
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
                    <g><path d="M30.2 19.1q1.2 7 5.8 10.8 0 1-.7 1.8t-1.8.7h-8.7q0 2.1-1.4 3.5t-3.5 1.5-3.5-1.5-1.5-3.5zM19.9 35.8q.3 0 .3-.3t-.3-.3q-1.2 0-2-.8t-.8-2q0-.3-.3-.3t-.3.3q0 1.4 1 2.4t2.4 1zm19.4-31q.2.2.2.4t-.2.5L2.9 37.2q-.2.1-.4.1t-.4-.2L.4 35.2q-.1-.2-.1-.4t.2-.5l3.6-3.1q-.4-.6-.4-1.3 1-.8 1.8-1.7t1.6-2.3 1.5-3.1 1-4 .3-5q0-3 2.3-5.5t6-3.1q-.2-.3-.2-.7 0-.8.6-1.4t1.3-.5 1.3.6.5 1.3q0 .4-.1.7 2.4.4 4.2 1.6t2.9 3.1l8.1-7.1q.2-.1.5-.1t.4.2z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconBellSlash.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
