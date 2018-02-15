
import * as React from "react"

export const IconCcVisa: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--cc-visa ${props.addClass} ${props.className}`
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
                    <g><path d="M34.6 21.6h-2.4q.2-.6 1.1-3.1l.1-.1q0-.2.1-.5t.2-.5l.2 1zM9.3 20.5l-1-5.2q-.2-.9-1.3-.9H2.3l-.1.2q5.5 1.4 7.1 5.9zm3.1-6.1l-2.8 7.7-.3-1.6q-.5-1.2-1.5-2.3t-2.3-1.5l2.4 8.9h3l4.6-11.2h-3.1zm2.5 11.2h2.9l1.8-11.2h-2.9zm13.4-10.9q-1.2-.5-2.6-.5-2.2 0-3.5 1t-1.4 2.7q0 1.8 2.5 3.1.9.4 1.2.7t.3.7q0 .5-.5.8t-1.2.2q-1.5 0-2.7-.5l-.4-.2-.4 2.5q1.3.6 3.2.6 2.3 0 3.7-1t1.4-2.8q0-1.9-2.5-3.1-.8-.4-1.2-.7t-.4-.7q0-.4.4-.7t1.3-.2q1.2-.1 2.1.4l.3.1zm7.4-.3h-2.2q-1.1 0-1.5.9l-4.3 10.3h3l.6-1.6h3.8q0 .3.3 1.6h2.7zm4.6-5.6v22.4q0 .9-.6 1.6t-1.6.6H2.2q-.9 0-1.5-.6T0 31.2V8.8q0-.9.7-1.6t1.5-.6h35.9q.9 0 1.6.6t.6 1.6z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconCcVisa.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
