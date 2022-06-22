import { Todo } from "./todo";

export const Todos = ({ todos, toggleTodo}) => {
    return (
        <div className="todos">
            {todos.map((todo, index)=> <Todo {...todo} toggleTodo={toggleTodo} index={index}/>)}
        </div>
    )
}