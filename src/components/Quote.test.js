import Quote from './Quote';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('<Quote />', () => {
  it('should render the text passed into it', () => {
    render(<Quote>{'I am the quote.'}</Quote>);
    expect(screen.getByText(/I am the quote./)).toBeDefined();
  });
});
