import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

const TodoList = () => {
    const INITIAL_STATE = [
        {id: uuidv4(), name: 'Wake Up'},
        {id: uuidv4(), name: 'Pee'},
        {id: uuidv4(), name: 'Eat'},
        {id: uuidv4(), name: 'Poop'},
        {id: uuidv4(), name: 'Sleep'}
    ]
    const [todos, setTodos] = useState(INITIAL_STATE)
    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, { ...newTodo, id: uuidv4() }])
    }
    
    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id.target.parentElement.id));
    }

    return (
        <div>
            <h1>Todo Creator</h1>
            <NewTodoForm addTodo={addTodo}/>
            {todos.map(({id, name}) =>
                <Todo
                    removeTodo={removeTodo}        
                    id={id}
                    name={name}
                    key={id}
                />)}
        </div>
    )
}

export default TodoList;