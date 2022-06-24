import Todo from "./todo";

const Todos = ({ todos, toggleTodo}) => {
    return (

        <div className="todos" >
            {todos.map((todo, index)=> <Todo {...todo} toggleTodo={toggleTodo} index={index} key={index}/>)}
        </div>
    )
}
export default Todos;