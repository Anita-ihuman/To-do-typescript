/* eslint-disable import/extensions */
import React from 'react';
import TodoListItem from './TodoListItem';
import { ToggleTodo, Todo } from './Type';

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodos: ToggleTodo;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodos }) => {
    return (
        <ul>
            {todos.map((todo) => {
                return <TodoListItem key={todo.text} todo={todo} toggleTodos={toggleTodos} />;
            })}
        </ul>
    );
};

export default TodoList;
