import calculate from "./calculate";

type OptionsType = {
  operator: string;
  displayValue: string;
  previousValue: string | null;
  setPreviousValue: (value: string | null) => void;
  setDisplayValue: (value: string) => void;
  setOperator: (value: string | null) => void;
  setWaitingForNewValue: (value: boolean) => void;
};

const handleOperators = (options: OptionsType) => {
  const inputValue = parseFloat(options.displayValue);

  if (options.operator === "%") {
    const calculatedResult = inputValue / 100;
    options.setDisplayValue(String(calculatedResult));
    options.setWaitingForNewValue(true);
    return;
  } else if (options.operator === "+/-") {
    const calculatedResult = -inputValue;
    options.setDisplayValue(String(calculatedResult));
    options.setWaitingForNewValue(true);
    return;
  }

  if (options.previousValue === null) {
    options.setPreviousValue(options.displayValue);
  } else {
    const calculatedResult = calculate({
      prev: parseFloat(options.previousValue),
      next: inputValue,
      operator: options.operator,
    });

    options.setDisplayValue(String(calculatedResult)); 
    options.setPreviousValue(String(calculatedResult));
  }

  options.setOperator(options.operator);
  options.setWaitingForNewValue(true); 
};

export default handleOperators;
