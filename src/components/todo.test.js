import { render, screen } from '@testing-library/react';
import Todo from './todo';

test('renders learn react link', () => {
    // ({ text, state, toggleTodo })

    const toggleTodo = (index) => {
        setTodos(todos.map((todo, idx) => idx === index ? { ...todo.complete = !todo.complete } : todo));
    }
    const todo = {
        text: "Test input",
        state: false,
        toggleTodo: toggleTodo
    }
    render(<Todo todo />);

});

/*
<Todo {...todo} toggleTodo={toggleTodo} />

export const Todo = ({ text, state, toggleTodo }) => {
    return (
        <div className="todo">
            <p>{text}
                <input type="checkbox" checked={state} onChange={toggleTodo} />
            </p>
        </div>
    )
}
*/