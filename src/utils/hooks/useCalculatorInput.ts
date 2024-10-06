import { useState } from "react";

type OptionsType = {
  waitingForNewValue: boolean;
  setWaitingForNewValue: (value: boolean) => void;
  setResult: (value: string) => void;
};

const useCalculatorInput = (options: OptionsType) => {
  const [displayValue, setDisplayValue] = useState<string>("0");

  const inputDigit = (digit: string) => {
    if (options.waitingForNewValue) {
      setDisplayValue(digit);
      options.setWaitingForNewValue(false);
    } else {
      setDisplayValue((prevValue) =>
        prevValue === "0" ? digit : prevValue + digit
      );
    }
  };

  const inputDot = () => {
    if (!displayValue.includes(".")) {
      setDisplayValue(displayValue + ".");
    }
  };

  const clearDisplay = () => {
    setDisplayValue("0");
    options.setResult("");
    options.setWaitingForNewValue(false);
  };

  return {
    displayValue,
    setDisplayValue,
    inputDigit,
    inputDot,
    clearDisplay,
  };
};

export default useCalculatorInput;
