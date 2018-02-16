
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

class IconPiedPiperAlt extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--pied-piper-alt ${p.addClass} ${p.className}`
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
                        <g><path d="M24.2 20.7q1.5-.1 2.9.4t2.3 1.1 2 1.9 1.7 2.1 1.5 2.4q.7 1.1 1.6 2.2t1.5 1.6 1.9 1.7q-.9.6-2.1 1.2t-2.8 1.2-2.2.9q-.9-.7-1.5-2.3t-.9-3.2-.6-3.6-.9-3.4-1.4-2.4-2.4-1l-.2.1h-.2l.3.3q.1.1.6.5t.5.4.3.4.4.4.2.4.2.6.1.6.1.8v1.8q0 .7-.2 1t-.2 1.2-.3 1q-.6 0-2 .2t-1.9.2q-.8 0-1.4-.2-.1-.3-.1-.9 0-1.5.1-1.9 0-.3.6-.8t1.1-1.2.6-1q-.5-.1-.9.4-.7 1.1-2.2 2t-2.7.9q-.5 0-1.5-1.2T14 24.7t-1.7-1.9q-.1-.1-.5-.6-9.6 2.2-10.2 2.2-.3 0-.6-.2t-.2-.5q0-.3.2-.6t.4-.2l9.7-2.1q-.2-.3-.2-.5t.1-.4.3-.2.4-.2.5 0 .4-.1q0-.1.3-.2t.3-.1q.3 0 .6.3t.4.7q3.2-.8 3.4-.8.3 0 .6.2t.2.6q0 .3-.2.5t-.4.3l-3.6.8-.1.3q0 .5 1.7 2.3t2 1.9q1 0 2.4-1.6t1.4-2.6q0-.7-.4-1t-1.1-.4-1-.2-.4-.7q0-.3.2-.7l-1.4-.4q.9-.8.9-2.3 0-.5-.1-1.1 1.6-.4 2.8-.4.9 0 1.4.1t1 .1.6.3.4.5.3.7.4.9.4 1.2l1-.5q0 .8-.4 1.2t-.9.4-.8.1-.3.4zm1.2-4.7q-.1-.1-.2-.3t-.3-.3-.2-.2-.2-.2l-.1-.2-.2-.1-.2-.1-.1-.1q-.2-.1-.3-.1t-.4-.1-.5 0h-1.4q-2.5 0-4.3.9.4-.6.8-1t1-.5 1.3-.8.9-.7 1-1.1.9-1l.6.6q.4.4.6.8t.7.2h.3v1.5h.4q4.9-1.8 7.4-3.7.5-.5 1-.8t.8-.8.7-.6.6-.6.4-.7.5-.7.5-.7.5-1 .6-1l.1-.2q0 1-.8 2.7-1.6 3.3-4.1 5.3t-6.1 2.8q-.2.1-.8.1t-1 .2-.8.3q.1.4.5.9t.5.7q0 .2-.6.6zm-4.3 18.3q.7-.5 2.6-1t2.9-.4q.1 0 .4.3t.6.8.5 1 .5 1.1.2.6q-2.4.9-4.8.9-1.2 0-2.5-.2zm-4.8-12.9l1-.2 2.1 3.5-1.4 1zm9.9 10.3l.1.3q0 .1-.3.3t-1 .3-1 .1-1.1.2-.6.1l-.2-.9q.5 0 1.2-.1t1.5-.2 1.2-.1h.3zm-9-12.5l-1.9.4-.1-.3q.2 0 .6-.2t.7-.1q.4 0 .7.2zm3.9 12.6h.6l.2 1.7-.8.2v-1.9zM38.7 2.2zm0 0v.1l-.1.1.1-.1zm0 0z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconPiedPiperAlt;
