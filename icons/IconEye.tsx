
import * as React from "react"

export const IconEye: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--eye ${props.addClass} ${props.className}`
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
                    <g><path d="M37.1 21.4q-3.3-5.2-8.5-7.8 1.4 2.3 1.4 5 0 4.1-2.9 7t-7.1 3-7.1-3-2.9-7q0-2.7 1.4-5.1-5.1 2.7-8.5 7.9 2.9 4.6 7.4 7.3t9.7 2.7 9.7-2.7 7.4-7.3zm-16-8.5q0-.5-.3-.8t-.8-.3q-2.8 0-4.8 2t-2 4.8q0 .4.3.7t.8.3.7-.3.4-.7q0-2 1.3-3.3t3.3-1.4q.4 0 .8-.3t.3-.7zM40 21.4q0 .8-.4 1.6-3.2 5.1-8.4 8.2T20 34.3 8.8 31.2.4 23q-.4-.8-.4-1.6t.4-1.5q3.2-5.1 8.4-8.2T20 8.6t11.1 3.1 8.5 8.2q.4.8.4 1.5z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconEye.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
