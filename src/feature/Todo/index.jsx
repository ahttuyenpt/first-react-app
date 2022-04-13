import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './component/TodoList';
import './style.css';

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'code',
            status: 'completed',
        },
        {
            id: 3,
            title: 'sleep',
            status: 'new',
        }
    ];

    const [todoList, setTodoList] = useState(initTodoList);

    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList];

        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new'
        }
        
        setTodoList(newTodoList);
    };

    const deleteTodo = (idx) => {

        const newTodoList = [...todoList];

        let newTodo = newTodoList.filter((todoItem, i) => {
            return i !== idx;
        });
        
        setTodoList(newTodo);
    }

    const [newTodo, setNewTodo] = useState('');

    const addNewTodo = () => {
        const newTodoList = [...todoList];

        let newAddTodo = {
            title: newTodo,
            id: newTodoList.length + 1,
            status: 'new'
        };

        newTodoList.unshift(newAddTodo);

        setTodoList(newTodoList);

        setNewTodo('');
    }

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList = {todoList} onTodoClick={ handleTodoClick } deleteTodo={ deleteTodo } />
                <input type="text" value={newTodo} onChange={(event) => setNewTodo(event.target.value)} />
                <a href="#" onClick={addNewTodo}>Add</a>
        </div>
    );
}

export default TodoFeature;