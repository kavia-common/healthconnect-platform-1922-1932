import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders HealthConnect header', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const headerEl = screen.getByText(/HealthConnect/i);
  expect(headerEl).toBeInTheDocument();
});
