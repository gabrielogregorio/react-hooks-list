import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import useSteps from '../hooks/useSteps';

const Component = () => {
  const { step, nextStep, prevStep, reset } = useSteps();

  return (
    <div>
      <h1>{step}</h1>
      <button type="button" onClick={() => nextStep()}>
        nextStep
      </button>
      <button type="button" onClick={() => prevStep()}>
        prevStep
      </button>
      <button type="button" onClick={() => reset()}>
        reset
      </button>
    </div>
  );
};

describe('useSteps.spec', () => {
  it('full component test', () => {
    render(<Component />);
    expect(screen.getByText('0')).toBeDefined();

    userEvent.click(screen.getByRole('button', { name: 'nextStep' }));
    expect(screen.getByText('1')).toBeDefined();

    userEvent.click(screen.getByRole('button', { name: 'nextStep' }));
    expect(screen.getByText('2')).toBeDefined();

    userEvent.click(screen.getByRole('button', { name: 'prevStep' }));
    expect(screen.getByText('1')).toBeDefined();

    userEvent.click(screen.getByRole('button', { name: 'nextStep' }));
    expect(screen.getByText('2')).toBeDefined();

    userEvent.click(screen.getByRole('button', { name: 'reset' }));
    expect(screen.getByText('0')).toBeDefined();

    userEvent.click(screen.getByRole('button', { name: 'nextStep' }));
    expect(screen.getByText('1')).toBeDefined();
  });
});
