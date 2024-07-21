import React, { useState } from "react";

const NewBoxForm = () => {
    const initialFormState = {
        color: '',
        width: '',
        height: ''
    }
    const initialInvalidState = {
        color: true,
        width: true,
        height: true
    }
    const initialTouchedState = {
        color: false,
        width: false,
        height: false
    }
    const [formData, setFormData] = useState(initialFormState);
    const [isInvalid, setIsInvalid] = useState(initialInvalidState);
    const [isTouched, setIsTouched] = useState(initialTouchedState);
    console.log(isTouched);
    const handleChange = e => {
        console.log(isTouched);
        setIsTouched(isTouched[e.target.name] = true);
        console.log(isTouched);
        const {name, value} = e.target;
        if(value === '') {
            setIsInvalid(isInvalid[e.target.name] = true);
        } else {
            setIsInvalid(isInvalid[e.target.name] = false);
        }

        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { color } = formData;
        if(!isInvalid) {
            alert(`${color} box added!`);
            setFormData(initialFormState);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Create Box</h3>
            <label htmlFor="color">Color</label>
            <input
                type="text"
                placeholder="color"
                name="color"
                id="color"
                value={formData.color}
                onChange={handleChange}
            />
            {isInvalid.color && isTouched.color && <span style={{color: 'red'}}>Color cannot be blank!</span>}
            
            <label htmlFor="width">Width</label>
            <input
                type="number"
                placeholder="width"
                name="width"
                id="width"
                value={formData.width}
                onChange={handleChange}
            />
            {isInvalid.width && isTouched.width && <span style={{color: 'red'}}>Width cannot be blank!</span>}
            
            <label htmlFor="height">height</label>
            <input
                type="number"
                placeholder="height"
                name="height"
                id="height"
                value={formData.height}
                onChange={handleChange}
            />
            {isInvalid.height && isTouched.height && <span style={{color: 'red'}}>Height cannot be blank!</span>}
            <button>Add Box</button>
        </form>
    )
}

export default NewBoxForm;