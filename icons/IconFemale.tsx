
import * as React from "react"

export const IconFemale: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--female ${props.addClass} ${props.className}`
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
                    <g><path d="M34.1 23.6q0 .9-.7 1.5t-1.5.6q-1.1 0-1.8-.9l-5-7.7h-1v3l5.5 9.2q.2.3.2.7 0 .6-.4 1t-1 .4h-4.3v6.1q0 1-.8 1.8t-1.7.7H18q-1 0-1.8-.7t-.7-1.8v-6.1h-4.3q-.6 0-1-.4t-.4-1q0-.4.2-.7l5.5-9.2v-3h-1l-5.1 7.7q-.6.9-1.8.9-.8 0-1.5-.6t-.6-1.5q0-.7.4-1.2l5.7-8.6q1.6-2.4 3.9-2.4h8.6q2.3 0 3.9 2.4l5.7 8.6q.4.5.4 1.2zM24.8 5.7q0 2.1-1.5 3.6t-3.5 1.4-3.6-1.4-1.4-3.6 1.4-3.5T19.8.7t3.5 1.5 1.5 3.5z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconFemale.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
