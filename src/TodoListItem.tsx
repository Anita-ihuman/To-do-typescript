import React from 'react';

import './TodoListItem.css';
import { Todo, ToggleTodo } from './Type';

interface TodoListItemProps {
    todo: Todo;
    toggleTodos: ToggleTodo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodos }) => {
    return (
        <li>
            <label className={todo.complete ? 'complete' : undefined}>
                <input type="checkbox" checked={todo.complete} onChange={() => toggleTodos(todo)} />
                {todo.text}
            </label>
        </li>
    );
};

export default TodoListItem;
