import React from 'react';
import { Interface } from 'readline';
import './TodoListItem.css';

interface TodoListItemProps {
    todo: Todo;
    toggleTodos: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodos  }) => {
    return <li>
        <label  className={todo.complete ? 'complete' : undefined}>
            <input
                type='checkbox'
                checked={todo.complete}
                onChange={() => toggleTodos(todo)}/>
            {todo.text}
        </label>
    </li>;
};
