import React, { useState } from 'react';
import { TodoListItem } from './TodoListItem';
import { TodoList } from './TodoList';
import AddTodoForm from './AddTodoForm';
import { ToggleTodo, Todo } from './Type';

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

    const addTodo = (newTodo: string) => {
        setTodos([...todos, { text: newTodo, complete: false }]);
    };

    return (
        <>
            <TodoList todos={todos} toggleTodos={toggleTodos} />
            <AddTodoForm />
        </>
    );
};

export default App;
