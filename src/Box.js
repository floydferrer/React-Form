import React from "react";
import './Box.css'

const Box = ({id, color, width, height, removeBox}) => {
    return (
        <div
            onClick={removeBox}
            role='box'
            className='Box'
            id={id}
            style={{
                backgroundColor: color,
                height: `${height}px`,
                width: `${width}px`,
            }}
        >
            <div
                className="Box-text"
                style={{
                    lineHeight: `${height}px`,
                    fontSize: `${height / 2}px`
                }}
            >
                X
            </div>
        </div>
    )
}

export default Box;