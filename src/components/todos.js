import Todo from "./todo";

const Todos = ({ todos, toggleTodo, id}) => {
    return (

        <div className="todos" key={id} >
            {todos.map((todo, index)=> <Todo {...todo} toggleTodo={toggleTodo} index={index}/>)}
        </div>
    )
}
export default Todos;