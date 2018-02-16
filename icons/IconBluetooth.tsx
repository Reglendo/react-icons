
import * as React from "react"

export const IconBluetooth: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--bluetooth ${props.addClass} ${props.className}`
    return (
            <span className={className} style={props.style} title={props.title}>
                {props.textFirst && textEl }
                <svg className={`muk-icon__image`} preserveAspectRatio='xMidYMid meet'
                     fill={props.color}
                     stroke={props.color}
                     strokeWidth={0}
                     height={props.size}
                     width={props.size}
                     viewBox={props.viewBox}
                >
                    <g><path d="M21.8 23.5l3.3 3.3-3.4 3.3zm0-13.6l3.3 3.3-3.3 3.3zm-3 27.3l10.4-10.4-6.8-6.8 6.8-6.8L18.8 2.8v13.7l-5.6-5.7-2.1 2 7.1 7.2-7.1 7.2 2.1 2 5.6-5.6v13.6zM34.9 20q0 4.7-.7 8.2t-2 5.7-3.1 3.6-4.1 2-4.9.5-4.9-.5-4-2-3.1-3.6-2-5.7-.7-8.2.7-8.2 2-5.7 3.1-3.6 4-2 4.9-.5 4.9.5 4.1 2 3.1 3.6 2 5.7.7 8.2z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconBluetooth.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconBluetooth;
