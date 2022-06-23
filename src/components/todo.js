const Todo = ({ text, complete, toggleTodo, index }) => {
    return (
        <div className="todo">
            <p>{text}
                <input type="checkbox" checked={complete} onChange={() => toggleTodo(index)} />
            </p>
        </div>
    )
}
export default Todo;