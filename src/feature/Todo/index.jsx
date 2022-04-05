import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './component/TodoList';

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

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList = {todoList} onTodoClick={ handleTodoClick }/>
        </div>
    );
}

export default TodoFeature;