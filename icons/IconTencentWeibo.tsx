
import * as React from "react"

export const IconTencentWeibo: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--tencent-weibo ${props.addClass} ${props.className}`
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
                    <g><path d="M24.3 12.8q0 1.8-1.3 3t-3 1.3q-1.4 0-2.5-.8-1.4 1.5-2.6 3.3-5.5 8.2-4.5 19.1.1.5-.2.9t-.8.4h-.1q-.5 0-.8-.3t-.4-.8q-.3-2.8-.1-5.5t.7-4.8 1.2-4.2 1.5-3.4 1.7-2.8q1.3-2 2.9-3.7-.3-.8-.3-1.7 0-1.8 1.2-3.1T20 8.5t3 1.2 1.3 3.1zm8.5.2q0 3.5-1.7 6.5t-4.8 4.8-6.5 1.7q-1.4 0-2.9-.3-.5-.1-.8-.5t-.1-.9q.1-.5.5-.7t.9-.2q1.1.3 2.4.3 2.2 0 4.1-.8t3.5-2.3 2.2-3.4.9-4.2-.9-4.1-2.2-3.5-3.5-2.2-4.1-.9-4.2.9-3.4 2.2-2.3 3.5-.8 4.1q0 2.6 1.2 4.9.2.4 0 .9t-.5.6-.9.1-.7-.6Q6.8 16.2 6.8 13q0-2.6 1-5.1t2.8-4.1T14.7 1t5.1-1q3.5 0 6.5 1.7t4.8 4.8 1.7 6.5z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconTencentWeibo.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconTencentWeibo;
