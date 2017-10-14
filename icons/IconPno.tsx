

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
}
export interface State {
}

class IconPno extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
    }

    render() {
        let className = `muk-icon ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                {this.props.text && this.props.textFirst &&
                    <span className={`muk-icon__text`}>
                        {this.props.text}
                    </span>
                }
                <svg className={`muk-icon__image`} preserveAspectRatio='xMidYMid meet'
                     fill={this.props.color}
                     stroke={this.props.color}
                     strokeWidth={0}
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><g style={{"fillOpacity":1,"stroke":"none","strokeWidth":1,"strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":1}} id="text4471">    <path d="m 2.9125977,14.525146 4.6801757,0 q 2.0874024,0 3.2006836,0.930176 1.120606,0.922852 1.120606,2.636719 0,1.721191 -1.120606,2.651367 -1.1132812,0.922852 -3.2006836,0.922852 l -1.8603515,0 0,3.793945 -2.8198242,0 0,-10.935059 z m 2.8198242,2.043458 0,3.054199 1.5600586,0 q 0.8203125,0 1.2670898,-0.395508 0.4467774,-0.402832 0.4467774,-1.135254 0,-0.732422 -0.4467774,-1.12793 Q 8.112793,16.568604 7.2924805,16.568604 l -1.5600586,0 z" style={{"fillOpacity":1}} id="path4135"></path>    <path d="m 13.898926,14.525146 3.149414,0 3.977051,7.5 0,-7.5 2.673339,0 0,10.935059 -3.149414,0 -3.97705,-7.5 0,7.5 -2.67334,0 0,-10.935059 z" style={{"fillOpacity":1}} id="path4137"></path>    <path d="m 31.462402,16.37085 q -1.289062,0 -1.999511,0.952148 -0.71045,0.952148 -0.71045,2.680664 0,1.721192 0.71045,2.67334 0.710449,0.952148 1.999511,0.952148 1.296387,0 2.006836,-0.952148 0.710449,-0.952148 0.710449,-2.67334 0,-1.728516 -0.710449,-2.680664 -0.710449,-0.952148 -2.006836,-0.952148 z m 0,-2.043457 q 2.636719,0 4.13086,1.508789 1.49414,1.508789 1.49414,4.16748 0,2.651367 -1.49414,4.160156 -1.494141,1.508789 -4.13086,1.508789 -2.629394,0 -4.130859,-1.508789 -1.494141,-1.508789 -1.494141,-4.160156 0,-2.658691 1.494141,-4.16748 1.501465,-1.508789 4.130859,-1.508789 z" style={{"fillOpacity":1}} id="path4139"></path>  </g></g>
                </svg>
                {this.props.text && !this.props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {this.props.text}
                    </span>
                }
            </span>
        )
    }
}

export default IconPno

