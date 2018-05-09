
import * as React from "react"
export interface Props { 
    size?: number 
    text?: string | Element
    title?: string 
    style?: any 
    addClass?: string 
    viewBox?: string 
    color?: string 
    textFirst?: boolean 
    className?: string 
}

class IconBellSlashO extends React.PureComponent<Props, {}> {
    shouldComponentUpdate(nextProps) { return false }
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--bell-slash-o ${p.className || ""}`
        return (
                <span className={className} style={p.style} title={p.title}>
                    {p.textFirst && textEl }
                    <svg className={`m-image`} preserveAspectRatio='xMidYMid meet'
                        fill={p.color}
                        stroke={p.color}
                        strokeWidth={0}
                        height={p.size}
                        width={p.size}
                        viewBox={p.viewBox}
                    >
                        <g className={`m-group`}><path d="M20.2 35.5q0-.3-.3-.3-1.2 0-2-.8t-.8-2q0-.3-.3-.3t-.3.3q0 1.4 1 2.4t2.4 1q.3 0 .3-.3zM9.8 26.3l17-14.7q-.8-1.8-2.6-2.9t-4.3-1.1q-1.8 0-3.3.6t-2.4 1.6-1.3 2-.5 2q0 7.4-2.6 12.5zM36 29.9q0 1-.7 1.8t-1.8.7h-8.7q0 2.1-1.4 3.5t-3.5 1.5-3.5-1.5-1.5-3.5l2.9-2.5h14.7q-3.2-3.6-4.4-8.9l2.1-1.9q1.2 7 5.8 10.8zm1.7-27l1.6 1.9q.2.2.2.4t-.2.5L2.9 37.2q-.2.1-.4.1t-.4-.2L.4 35.2q-.1-.2-.1-.4t.2-.5l3.6-3.1q-.4-.6-.4-1.3 1-.8 1.8-1.7t1.6-2.3 1.5-3.1 1-4 .3-5q0-3 2.3-5.5t6-3.1q-.2-.3-.2-.7 0-.8.6-1.4t1.3-.5 1.3.6.5 1.3q0 .4-.1.7 2.4.4 4.2 1.6t2.9 3.1l8.1-7.1q.2-.1.5-.1t.4.2z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconBellSlashO;
