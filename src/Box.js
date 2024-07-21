import React from "react";
import './Box.css'

const Box = ({color, width, height}) => {
    return (
        <div
            className='Box'
            style={{
                backgroundColor: color,
                height: `${height}px`,
                width: `${width}px`,
            }}
        >
        </div>
    )
}

export default Box;