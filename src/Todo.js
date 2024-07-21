import React from "react";
import './Todo.css'

const Todo = ({id, name, removeTodo}) => {
    return (
        <div
            className='Todo'
            id={id}
        >
            {name}
            <button
                onClick={removeTodo}
                className="Todo-btn"
                role="button"
            >
                X
            </button>
        </div>
    )
}

export default Todo;