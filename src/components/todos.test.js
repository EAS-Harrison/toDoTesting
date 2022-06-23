import { render, screen } from '@testing-library/react';
import Todos from './todos';

test('renders learn react link', () => {

    let todos = {
        text: "clean room",
        complete: false,
        index: 0
    }
    //export const Todos = ({ todos, toggleTodo})
    render(<Todos todos={todos} toggleTodo={()=>{}} />)




});
