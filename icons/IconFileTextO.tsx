
import * as React from "react"

export const IconFileTextO: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--file-text-o ${props.addClass} ${props.className}`
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
                    <g><path d="M35.8 8.5q.6.6 1 1.7t.5 1.9v25.8q0 .8-.6 1.5t-1.6.6h-30q-.9 0-1.5-.6T3 37.9V2.1q0-.8.6-1.5T5.1 0h20q.9 0 2 .4t1.7 1.1zM25.9 3v8.4h8.4q-.3-.6-.5-.9l-7-7q-.3-.2-.9-.5zm8.5 34.1V14.3h-9.3q-.9 0-1.5-.6t-.6-1.6V2.9H5.9v34.2h28.5zM11.6 17.9q0-.4.2-.6t.5-.2H28q.3 0 .5.2t.2.6v1.4q0 .3-.2.5t-.5.2H12.3q-.3 0-.5-.2t-.2-.5v-1.4zm16.4 5q.3 0 .5.2t.2.5V25q0 .3-.2.5t-.5.2H12.3q-.3 0-.5-.2t-.2-.5v-1.4q0-.3.2-.5t.5-.2H28zm0 5.7q.3 0 .5.2t.2.5v1.4q0 .3-.2.5t-.5.2H12.3q-.3 0-.5-.2t-.2-.5v-1.4q0-.3.2-.5t.5-.2H28z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconFileTextO.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconFileTextO;
