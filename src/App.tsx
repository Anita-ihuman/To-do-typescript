import React, { useState, ChangeEvent, FormEvent } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { ToggleTodo, Todo, AddTodo } from './Type';

const initialTodos: Array<Todo> = [
    { text: 'Wlk a dog', complete: true },
    { text: 'feed the dog', complete: true },
];

const App = () => {
    const [todos, setTodos] = useState(initialTodos);

    const toggleTodos: ToggleTodo = (selectedTodo) => {
        const newTodos = todos.map((todo) => {
            if (todo === selectedTodo) {
                return {
                    ...todo,
                    complete: !todo.complete,
                };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const addTodo: AddTodo = (newTodo) => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { text: newTodo, complete: false }]);
        }
    };

    return (
        <>
            <TodoList todos={todos} toggleTodos={toggleTodos} />
            <AddTodoForm addTodo={addTodo} />
        </>
    );
};

export default App;
