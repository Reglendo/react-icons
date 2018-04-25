
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

class IconDatabase extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--database ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M20.1 17.1q5.3 0 9.9-.9t7.3-2.9v3.8q0 1.6-2.3 2.9t-6.3 2.1-8.6.8-8.6-.8T5.3 20 3 17.1v-3.8q2.7 1.9 7.3 2.9t9.8.9zm0 17.2q5.3 0 9.9-1t7.3-2.8v3.8q0 1.5-2.3 2.8t-6.3 2.1-8.6.8-8.6-.8-6.2-2.1T3 34.3v-3.8q2.7 1.9 7.3 2.8t9.8 1zm0-8.6q5.3 0 9.9-.9t7.3-2.9v3.8q0 1.6-2.3 2.9t-6.3 2.1-8.6.7-8.6-.7-6.2-2.1T3 25.7v-3.8q2.7 1.9 7.3 2.9t9.8.9zm0-25.7q4.7 0 8.6.8T35 2.9t2.3 2.8v2.9q0 1.5-2.3 2.8t-6.3 2.1-8.6.8-8.6-.8-6.2-2.1T3 8.6V5.7q0-1.5 2.3-2.8T11.6.8t8.5-.8z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconDatabase;
