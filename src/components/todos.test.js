import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Todos from './todos';

test('Rendering Todos component and the text "test" is present', () => {

    let todos = [{ text: "test" }]
    let funky = jest.fn();
    render(<Todos todos={todos} toggleTodo={funky} />)
    expect(screen.getByText(/test/)).toBeInTheDocument();
});

test('Rendering Todos component and the text "test" twice, and "bob" is presnt', () => {
    let toggle = jest.fn()
    let todos = [{ text: "test" }, { text: "bob" }, { text: "test" }]
    render(<Todos todos={todos} toggleTodo={toggle} />)
    expect(screen.getAllByText(/test/)).toHaveLength(2);
    expect(screen.getByText(/bob/)).toBeInTheDocument();
});

test('renders checkbox', () => {

    let todos = [{ key: 0 }]
    render(<Todos todos={todos} />)
    expect(screen.getByRole('checkbox').checked).toBeFalsy();
});

test('renders the same as the last Snapshot', () => {
    let todos = [{ text: "test", toggleTodo: () => { } }]
    const tree = renderer
        .create(<Todos todos={todos} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
