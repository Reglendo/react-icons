
import * as React from "react"

export const IconAsterisk: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--asterisk ${props.addClass} ${props.className}`
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
                    <g><path d="M34.6 23.4q1 .6 1.3 1.8t-.3 2.1l-1.4 2.5q-.6 1-1.7 1.3t-2.2-.3l-5.9-3.4v6.9q0 1.1-.9 2t-2 .8h-2.9q-1.1 0-2-.8t-.8-2v-6.9l-6 3.4q-1 .6-2.1.3t-1.8-1.3l-1.4-2.5q-.6-1-.3-2.1t1.4-1.8l5.9-3.4-5.9-3.4q-1.1-.6-1.4-1.8t.3-2.1l1.4-2.5q.6-1 1.8-1.3t2.1.3l6 3.4V5.7q0-1.1.8-2t2-.8h2.9q1.2 0 2 .8t.9 2v6.9l5.9-3.4q1-.6 2.2-.3t1.7 1.3l1.4 2.5q.6 1 .3 2.1t-1.3 1.8l-6 3.4z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconAsterisk.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
