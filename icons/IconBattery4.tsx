
import * as React from "react"

export const IconBattery4: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--battery-4 ${props.addClass} ${props.className}`
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
                    <g><path d="M33.6 13.3v13.4H4.5V13.3h29.1zm2.3 10.1h2.2v-6.8h-2.2v-5q0-.2-.2-.4t-.4-.2H2.8q-.2 0-.4.2t-.2.4v16.8q0 .2.2.4t.4.2h32.5q.2 0 .4-.2t.2-.4v-5zm4.4-6.8v6.8q0 .9-.6 1.5t-1.6.7v2.8q0 1.2-.8 2t-2 .8H2.8q-1.2 0-2-.8t-.8-2V11.6q0-1.2.8-2t2-.8h32.5q1.2 0 2 .8t.8 2v2.8q.9 0 1.6.7t.6 1.5z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconBattery4.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
