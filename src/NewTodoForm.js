import React, { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
    const initialState = {
        name: ''
    }

    const [formData, setFormData] = useState(initialState);
    const [isInvalid, setIsInvalid] = useState(true);
    const [isTouched, setIsTouched] = useState(false);
    const handleChange = e => {
        setIsTouched(true);
        const {name, value} = e.target;
        if(value === '') {
            setIsInvalid(true);
        } else {
            setIsInvalid(false);
        }

        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name } = formData;
        if(!isInvalid) {
            alert(`New task added!`);
            addTodo({...formData})
            setFormData(initialState);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Create Todo</h3>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                placeholder="name"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
            />
            {isInvalid && isTouched && <span style={{color: 'red'}}>Color cannot be blank!</span>}
            
            <button role="button">Add Todo</button>
        </form>
    )
}

export default NewTodoForm;