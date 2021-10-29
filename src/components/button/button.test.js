import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders button with', () => {

    render(<Button />)
    
    const buttonEl = screen.getByRole('button');

    expect(buttonEl).toBeInTheDocument();
})

