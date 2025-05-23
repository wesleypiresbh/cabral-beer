
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

function Button({ children }) {
  return <button>{children}</button>;
}

test('renders Button component', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
