import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  localStorage.clear();
});

test('renders the HashQuest learning dashboard', () => {
  render(<App />);
  expect(screen.getByText(/Learn the network behind the network/i)).toBeInTheDocument();
  expect(screen.getByText(/Question of the moment/i)).toBeInTheDocument();
});

test('switches the interface to Arabic RTL', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText('Language'), { target: { value: 'ar' } });
  expect(document.documentElement.dir).toBe('rtl');
  expect(screen.getByText(/تعلّم الشبكة/i)).toBeInTheDocument();
});
