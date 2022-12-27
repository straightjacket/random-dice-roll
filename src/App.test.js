import { render, screen } from '@testing-library/react';
import App from './App';

test('renders form element', () => {
  render(<App />);
  const formElement = screen.getByRole('form');
  expect(formElement).toBeInTheDocument();
});
