
import * as React from "react"

export const IconTumblr: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--tumblr ${props.addClass} ${props.className}`
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
                    <g><path d="M29.1 29.7l1.8 5.3q-.6.7-2.5 1.4t-4 .7q-2.3.1-4.2-.5T17 34.9t-2.1-2.4-1.3-2.6-.3-2.7V15.1H9.5v-4.8q1.6-.6 2.9-1.6t2-2 1.3-2.2.8-2.3.3-1.9q0-.1.1-.2t.2-.1h5.4v9.5H30v5.6h-7.5v11.5q0 .7.2 1.3t.5 1.2 1.1.9 1.8.3q1.7 0 3-.6z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconTumblr.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
