
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

class IconOdnoklassnikiSquare extends React.Component<Props, {}> {
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
        const className = `muk-icon muk-icon--odnoklassniki-square ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M23.7 12.9q0 1.5-1 2.6t-2.6 1-2.5-1-1-2.6 1-2.5 2.5-1 2.6 1 1 2.5zm4.8 8.1q-.3-.4-.7-.7t-1-.2-1.4.6q-.2.2-.6.5t-1.8.7-2.9.4-2.7-.4-1.9-.8l-.6-.4q-.7-.5-1.4-.6t-1.1.2-.6.7q-.5 1.1 0 1.7t1.9 1.7q1.9 1.1 5.1 1.4L17.6 27q-3.1 3.2-4.2 4.3-.5.4-.5 1.1t.5 1.2l.2.2q.4.5 1.1.5t1.2-.5l4.3-4.3q2.5 2.6 4.2 4.3.5.5 1.2.5t1.2-.5l.2-.2q.5-.5.5-1.2t-.5-1.1L22.7 27l-1.2-1.2q3.2-.3 5.1-1.4 1.5-1 1.9-1.7t0-1.7zm-1.1-8.1q0-2.9-2.1-5.1t-5.2-2.1T15 7.8t-2.1 5.1 2.1 5.2 5.1 2.1 5.2-2.1 2.1-5.2zm9.9-3.6v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconOdnoklassnikiSquare;
