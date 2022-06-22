import { render, screen, fireEvent } from '@testing-library/react';
import Todo from './todo';

test('renders Todo with text "clean room" that is completed.', async () => {
    let props = {
        text: "clean room",
        complete: true
    }
    render(<Todo {...props}/>)
    expect(await screen.findByText(/clean room/)).toBeInTheDocument();
    expect(await screen.getByRole('checkbox').checked).toBeTruthy();
});

test('renders Todo with text "do dishes" that is not completed.', async () => {
    let props = {
        text: "do dishes",
        complete: false
    }
    render(<Todo {...props}/>)
    expect(await screen.findByText(/do dishes/)).toBeInTheDocument();
    expect(await screen.getByRole('checkbox').checked).toBeFalsy();
});

test('calls function when clicked', () => {
    let props = {
        index: 0,
        toggleTodo: jest.fn()
    }
    render(<Todo {...props}/>)
    fireEvent.click(screen.getByRole('checkbox'))
    expect(props.toggleTodo).toHaveBeenCalledWith(props.index);
});
