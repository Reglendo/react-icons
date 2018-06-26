
import * as React from "react"
export interface Props { 
    size?: number 
    text?: string | Element | JSX.Element
    title?: string 
    style?: any 
    addClass?: string 
    viewBox?: string 
    color?: string 
    textFirst?: boolean 
    className?: string 
}

class IconVolumeDown extends React.Component<Props, {}> {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text }
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--volume-down ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M24.1 7.9v24.2q0 .6-.4 1t-1 .5-1-.5l-7.4-7.4H8.4q-.6 0-1-.4t-.4-1v-8.6q0-.6.4-1t1-.4h5.9l7.4-7.4q.4-.5 1-.5t1 .5.4 1zM32.7 20q0 1.7-.9 3.2t-2.5 2q-.3.2-.6.2-.6 0-1-.5t-.4-1q0-.4.2-.8t.7-.5.7-.5.7-.8.3-1.3-.3-1.3-.7-.8-.7-.5-.7-.5-.2-.8q0-.6.4-1t1-.5q.3 0 .6.2 1.5.6 2.5 2t.9 3.2z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconVolumeDown;
