
import * as React from "react"
export interface Props { 
    size?: number 
    text?: string 
    title?: string 
    style?: any 
    addClass?: string 
    viewBox?: string 
    color?: string 
    textFirst?: boolean 
    className?: string 
}

class IconCrosshairs extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--crosshairs ${p.addClass} ${p.className}`
        return (
                <span className={className} style={p.style} title={p.title}>
                    {p.textFirst && textEl }
                    <svg className={`muk-icon__image`} preserveAspectRatio='xMidYMid meet'
                        fill={p.color}
                        stroke={p.color}
                        strokeWidth={0}
                        height={p.size}
                        width={p.size}
                        viewBox={p.viewBox}
                    >
                        <g><path d="M29.7 22.9h-2.4q-.6 0-1-.5t-.4-1v-2.8q0-.6.4-1t1-.5h2.4q-.7-2.4-2.5-4.2T23 10.4v2.5q0 .5-.4 1t-1 .4h-2.9q-.6 0-1-.4t-.4-1v-2.5q-2.4.7-4.2 2.5t-2.5 4.2H13q.6 0 1 .5t.4 1v2.8q0 .6-.4 1t-1 .5h-2.4q.7 2.4 2.5 4.2t4.2 2.5v-2.5q0-.5.4-1t1-.4h2.9q.6 0 1 .4t.4 1v2.5q2.4-.7 4.2-2.5t2.5-4.2zm7.6-4.3v2.8q0 .6-.4 1t-1 .5h-3.2q-.9 3.6-3.5 6.2T23 32.5v3.2q0 .6-.4 1t-1 .4h-2.9q-.6 0-1-.4t-.4-1v-3.2q-3.6-.8-6.2-3.4t-3.5-6.2H4.4q-.6 0-1-.5t-.4-1v-2.8q0-.6.4-1t1-.5h3.2q.8-3.6 3.5-6.2t6.2-3.4V4.3q0-.6.4-1t1-.4h2.9q.6 0 1 .4t.4 1v3.2q3.6.8 6.2 3.4t3.5 6.2h3.2q.5 0 1 .5t.4 1z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconCrosshairs;
