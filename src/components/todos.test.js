import { render, screen } from '@testing-library/react';
import Todos from './todos';

test('renders learn react link', () => {

    let todos = [{ text:"sdfsdf", toggleTodo: jest.fn(), key:0}]
    render(<Todos todos={todos} />)




});
