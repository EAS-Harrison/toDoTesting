import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Todos from './todos';

test('Rendering Todos component and the text "test" is presnt', () => {

    let todos = [{ text:"test", toggleTodo: () => {}}]
    render(<Todos todos={todos} />)
    expect(screen.getByText(/test/)).toBeInTheDocument();
});

test('Rendering Todos component and the text "test" and "bob" is presnt', () => {

    let todos = [{ text:"test", toggleTodo: () => {}}, { text:"bob", toggleTodo: () => {}}]
    render(<Todos todos={todos} />)
    expect(screen.getByText(/test/)).toBeInTheDocument();
    expect(screen.getByText(/bob/)).toBeInTheDocument();
});

test('renders checkbox', () => {

    let todos = [{key:0}]
    render(<Todos todos={todos} />)
    expect(screen.getByRole('checkbox').checked).toBeFalsy();

});

test('renders the same as the last Snapshot', () => {
    let todos = [{ text:"test", toggleTodo: () => {}}]
    const tree = renderer
      .create(<Todos todos={todos} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });