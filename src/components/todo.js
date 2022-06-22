const Todo = ({ text, complete, toggleTodo, index }) => {
    return (
        <div className="todo">
            <p>{text}
            </p>
            <input type="checkbox" checked={complete} onChange={() => toggleTodo(index)} />
        </div>
    )
}
export default Todo;