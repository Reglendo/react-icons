
import * as React from "react"

export const IconCcDinersClub: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--cc-diners-club ${props.addClass} ${props.className}`
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
                    <g><path d="M15 26V13.9q-1.8.7-3 2.4T10.9 20t1.1 3.7 3 2.3zm8.8-6q0-2.1-1.1-3.7t-3-2.4v12.2q1.8-.8 3-2.4t1.1-3.7zm3.8 0q0 2.8-1.4 5.1t-3.7 3.8-5.2 1.3q-2 0-3.9-.8t-3.3-2.2T7.9 24t-.8-4q0-2.8 1.4-5.2t3.7-3.7 5.1-1.4 5.2 1.4 3.7 3.7 1.4 5.2zm6.7.1q0-2.4-1-4.6t-2.5-3.6T27 9.6t-4.4-.8h-5.3q-3 0-5.6 1.4t-4.1 4T6 20.1q0 3 1.5 5.6t4.2 4 5.6 1.5h5.3q2.3 0 4.4-.9t3.8-2.3 2.5-3.6 1-4.3zm6-11.3v22.4q0 .9-.6 1.6t-1.6.6H2.2q-.9 0-1.5-.6T0 31.2V8.8q0-.9.7-1.6t1.5-.6h35.9q.9 0 1.6.6t.6 1.6z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconCcDinersClub.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
