import RandomizeButton from './RandomizeButton';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('<RandomizeButton />', () => {
  it('should trigger the clickHandler function it receives as props', () => {
    const state = {
      value: 0,
      increment: function () {
        this.value = 1;
      },
    };

    render(
      <>
        <div>{state.value}</div>
        <RandomizeButton clickHandler={state.increment()} />
      </>
    );

    userEvent.click(screen.getByRole('button'));
    expect(state.value).toBe(1);
  });
});
