import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick:PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
};

function TodoList(props) {

    const {} = props;

    const handleTodoClick = (todo, idx) => {
        if (!props.onTodoClick) return;

        props.onTodoClick(todo, idx);
    }

    return (
        <ul>
            {props.todoList.map((todo, idx) => (
                <li 
                className={todo.status === 'completed' ? 'completed' : '' } 
                key={todo.id}
                onClick={() => handleTodoClick(todo, idx)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;