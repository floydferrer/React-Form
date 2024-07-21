import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
    const INITIAL_STATE = [
        {id: uuidv4(), color: 'red', height: 200, width: 200},
        {id: uuidv4(), color: 'blue', height: 200, width: 200},
        {id: uuidv4(), color: 'green', height: 200, width: 200}
    ]
    const [boxes, setBoxes] = useState(INITIAL_STATE)
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, { ...newBox, id: uuidv4() }])
    }
    
    const removeBox = (id) => {
        setBoxes(boxes.filter(box => box.id !== id.target.parentElement.id));
    }

    return (
        <div>
            <h1>Box Creator</h1>
            <NewBoxForm addBox={addBox}/>
            {boxes.map(({id, color, width, height}) =>
                <Box
                    removeBox={removeBox}        
                    id={id}
                    color={color}
                    width={width}
                    height={height}
                    key={id}
                />)}
        </div>
    )
}

export default BoxList;