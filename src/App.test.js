import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('placeholder test', () => {
  it('App should exist in document', () => {
    render(<App />);

    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
