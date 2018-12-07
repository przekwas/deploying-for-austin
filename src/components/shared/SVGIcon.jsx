import React from 'react';



export const SVGIcon = ({
    className = '',
    style = {},
    fill = '#fff',
    width = '100%',
    height = '100%',
    viewbox = '0 0 32 32',
}) => 
    <svg
        className={className}
        style={style}
        fill={fill}
        width={width}
        height={height}
        viewbox={viewbox}
    >
        <path d='' fill={fill} />

    </svg>



export default SVGIcon;