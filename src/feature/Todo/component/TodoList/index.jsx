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

    const deleteTodo = (idx) => {
        props.deleteTodo(idx);
    }

    return (
        <div>
            {props.todoList.map((todo, idx) => (
                <div 
                key={todo.id}
                >
                    <span
                        className={`${'todo'} ${todo.status === 'completed' ? 'completed' : ''}`} 
                        onClick={() => handleTodoClick(todo, idx)}
                        >{todo.title}
                    </span>
                    
                    <a 
                        data-id={idx} 
                        href="#"
                        onClick={() => deleteTodo(idx)}>
                        Delete
                    </a>
                </div>
            ))}
        </div>
    );
}

export default TodoList;