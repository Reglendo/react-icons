
import * as React from "react"

export const IconInstagram: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--instagram ${props.addClass} ${props.className}`
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
                    <g><path d="M33.4 31.8V17.4h-3q.4 1.4.4 2.9 0 2.8-1.4 5.2t-3.9 3.7-5.3 1.4q-4.4 0-7.6-3t-3.1-7.3q0-1.5.5-2.9H6.8v14.4q0 .6.4 1t1 .4H32q.6 0 1-.4t.4-1zm-6.3-11.9q0-2.7-2.1-4.7t-4.8-1.9q-2.9 0-4.9 1.9t-2 4.7 2 4.8 4.9 1.9q2.8 0 4.8-1.9t2.1-4.8zm6.3-8V8.2q0-.6-.4-1.1t-1.1-.4H28q-.7 0-1.1.4t-.5 1.1v3.7q0 .6.5 1.1t1.1.4h3.9q.6 0 1.1-.4t.4-1.1zm3.9-4.6v25.4q0 1.9-1.3 3.1t-3.1 1.3H7.4q-1.8 0-3.1-1.3T3 32.7V7.3q0-1.9 1.3-3.1t3.1-1.3h25.5q1.8 0 3.1 1.3t1.3 3.1z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconInstagram.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
