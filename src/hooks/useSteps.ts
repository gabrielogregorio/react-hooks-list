import { useState } from 'react';

const INITIAL_STATE = 0;

export type returnUseStepsType = {
  step: number;
  nextStep: Function;
  prevStep: Function;
  reset: Function;
};

const useSteps = (): returnUseStepsType => {
  const [step, setStep] = useState<number>(INITIAL_STATE);

  function nextStep() {
    setStep((prev) => prev + 1);
  }

  function prevStep() {
    setStep((prev) => prev - 1);
  }

  function reset() {
    setStep(INITIAL_STATE);
  }

  return { step, nextStep, prevStep, reset };
};

export default useSteps;
