
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

class IconBadge extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--badge ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M14.315 18.373q-.166-.07-.398-.044-.298-.003-.66.272-.363.275-.625.592l-9.4 13.566q-.261.378-.291.731-.03.353.07.579.102.164.268.233.366.153.861-.066l6.372-3.127.183 5.869q.037.442.37.581.166.07.398.045.33-.045.694-.259.363-.214.591-.606l9.4-13.566q.261-.378.325-.717.063-.34-.105-.592-.1-.165-.267-.234l-7.786-3.257z"></path><path d="M27.115 18.456q.166-.07.398-.045.298-.002.66.273.363.275.625.592l9.4 13.566q.261.378.291.731.03.353-.07.579-.102.164-.268.233-.366.153-.861-.066l-6.372-3.127-.183 5.869q-.037.442-.37.58-.166.07-.398.046-.33-.045-.694-.259-.363-.214-.591-.606l-9.4-13.566q-.261-.378-.325-.717-.063-.34.105-.593.1-.164.267-.233l7.786-3.257z"></path><path d="M31.567 15.592l2.64 2.555q.597.511.341 1.363-.17.767-.937.937l-3.578.937 1.022 3.493q.17.852-.426 1.363-.51.597-1.277.341l-3.578-1.022-.852 3.578q-.256.767-1.023 1.022h-.34q-.597 0-.937-.34l-2.641-2.642-2.556 2.641q-.511.511-1.278.341-.767-.17-1.022-1.022l-.852-3.578-3.578 1.022q-.767.256-1.363-.34-.597-.512-.341-1.364l1.022-3.493-3.578-.937q-.766-.17-1.022-.937-.17-.852.426-1.363l2.64-2.555-2.64-2.556q-.596-.511-.426-1.363.256-.767 1.022-.937l3.578-.937-1.022-3.493q-.256-.852.34-1.363.597-.597 1.364-.341l3.578 1.022.852-3.578q.255-.852 1.022-1.022.767-.17 1.278.34l2.556 2.642 2.64-2.641q.512-.511 1.278-.341.767.17 1.023 1.022l.852 3.578 3.578-1.022q.766-.256 1.277.34.597.512.426 1.364l-1.022 3.493 3.578.937q.767.17.937.937.256.852-.34 1.363z"></path><path d="M30.518 15.597l2.335 2.26q.527.452.301 1.205-.15.678-.828.829l-3.163.828.903 3.088q.151.753-.376 1.205-.452.527-1.13.301l-3.163-.903-.753 3.163q-.226.678-.904.904h-.302q-.527 0-.828-.301l-2.335-2.335-2.26 2.335q-.451.451-1.13.3-.677-.15-.903-.903l-.753-3.163-3.164.903q-.677.226-1.205-.3-.527-.453-.3-1.206l.903-3.088-3.163-.828q-.678-.151-.904-.829-.15-.753.376-1.205l2.335-2.26-2.335-2.26q-.527-.451-.376-1.204.226-.678.904-.829l3.163-.828-.904-3.088q-.226-.753.301-1.205.528-.527 1.205-.301l3.164.903.753-3.163q.226-.753.904-.904.678-.15 1.13.301l2.26 2.335L22.61 3.02q.452-.451 1.13-.3.678.15.904.903l.753 3.163 3.163-.903q.678-.226 1.13.3.527.453.376 1.206l-.903 3.088 3.163.828q.678.151.828.829.226.753-.3 1.205z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconBadge;
