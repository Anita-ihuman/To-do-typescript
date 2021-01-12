import React,{useState} from 'react';
import { TodoListItem } from './TodoListItem';


const initialTodos: Array<Todo> = [
    { text: 'Wlk a dog', complete: true },
    { text: 'feed the dog', complete: true },
];
const App = () => {
    const [todos, setTodos] = useState(initialTodos)
    const toggleTodos: ToggleTodo = selectedTodo=> {
        const newTodos = todos.map(todo => {
            if (todo === selectedTodo) {
                return {
                    ...todo,
                    complete:!todo.complete
                }
            }
            return todo
        })
        setTodos(newTodos)
    }
    return (
        <>
            <TodoListItem todo={todos[0]} toggleTodos={toggleTodos} />
            <TodoListItem todo={todos[1]} toggleTodos={toggleTodos} />
        </>
    );
};

export default App;
