import { useState, useEffect } from "react";

import calculate from "../calculate";
import handleOperators from "../handleOperators";

import useCalculatorInput from "./useCalculatorInput";

const useCalculator = () => {
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState<boolean>(false);
  const [result, setResult] = useState<string | null>(null);

  const {
    displayValue,
    setDisplayValue,
    inputDigit,
    inputDot,
    clearDisplay,
  } = useCalculatorInput({
    waitingForNewValue,
    setWaitingForNewValue,
    setResult
  });

  const performCalculation = () => {
    if (operator && previousValue) {
      const finalResult = calculate({
        prev: parseFloat(previousValue),
        next: parseFloat(displayValue),
        operator,
      });

      setResult(String(finalResult));
      setDisplayValue(String(finalResult));
      setPreviousValue(null);
      setOperator(null);
      setWaitingForNewValue(true);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const { key } = event;
    if (!isNaN(Number(key))) {
      inputDigit(key);
    } else if (key === ".") {
      inputDot();
    } else if (key === "Backspace") {
      clearDisplay();
    } else if (["+", "-", "*", "/"].includes(key)) {
      handleOperators({
        operator: key,
        displayValue,
        previousValue,
        setOperator,
        setPreviousValue,
        setDisplayValue,
        setWaitingForNewValue,
      });

      setOperator(key);
    } else if (key === "Enter" || key === "=") {
      performCalculation();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const currentExpression = `${previousValue ?? ""} ${operator ?? ""} ${waitingForNewValue ? "" : displayValue}`;

  return {
    displayValue,
    setDisplayValue,
    currentExpression,
    inputDigit,
    previousValue,
    setWaitingForNewValue,
    setPreviousValue,
    inputDot,
    setResult,
    clearDisplay,
    operator,
    setOperator,
    performCalculation,
    result,
  };
};

export default useCalculator;
