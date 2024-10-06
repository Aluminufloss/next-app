"use client";

import { useState } from "react";
import styles from "./calculator.module.scss";
import Title from "../Title";

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState<boolean>(false);
  const [result, setResult] = useState<string | null>(null); 
  const [expression, setExpression] = useState<string>(""); 

  const inputDigit = (digit: string) => {
    if (waitingForNewValue) {
      setDisplayValue(digit);
      setWaitingForNewValue(false);
    } else {
      setDisplayValue((prevValue) =>
        prevValue === "0" ? digit : prevValue + digit
      );
    }

    setExpression((prev) => prev + digit);
  };

  const inputDot = () => {
    if (!displayValue.includes(".")) {
      setDisplayValue(displayValue + ".");
      setExpression((prev) => prev + ".");
    }
  };

  const clearDisplay = () => {
    setDisplayValue("0");
    setPreviousValue(null);
    setOperator(null);
    setResult(null);
    setExpression(""); 
  };

  const handleOperator = (nextOperator: string) => {
    const inputValue = parseFloat(displayValue);

    if (previousValue === null) {
      setPreviousValue(displayValue);
    } else if (operator) {
      const calculatedResult = calculate(parseFloat(previousValue), inputValue, operator);
      setDisplayValue(String(calculatedResult));
      setPreviousValue(String(calculatedResult));
      setResult(String(calculatedResult));
    }

    setOperator(nextOperator);
    setExpression((prev) => prev + ` <span class="${styles.operatorRed}">${nextOperator}</span>`); 
    setWaitingForNewValue(true);
  };

  const calculate = (prev: number, next: number, operator: string) => {
    switch (operator) {
      case "+":
        return prev + next;
      case "-":
        return prev - next;
      case "*":
        return prev * next;
      case "/":
        return prev / next;
      default:
        return next;
    }
  };

  const performCalculation = () => {
    if (operator && previousValue) {
      const finalResult = calculate(
        parseFloat(previousValue),
        parseFloat(displayValue),
        operator
      );
      setDisplayValue(String(finalResult));
      setPreviousValue(null);
      setOperator(null);
      setWaitingForNewValue(true);
      setResult(null);
      setExpression(String(finalResult)); 
    }
  };
  return (
    <div className={styles.container}>
      <Title
        text="Калькулятор"
        description="Очень Простой калькулятор обычный - только стандартные функции калькулятора: сложение, вычитание, умножение и деление. Простой калькулятор работает на смартфонах и ПК даже без интернета, не требует установки, быстро загружается и работает онлайн."
      />
      <div className={styles.calculator}>
        <div className={styles.display}>
          <div className={styles.tempResult}>
            {result}
          </div>
          <div className={styles.expression}>
            {expression}
          </div>
        </div>
      <div className={styles.buttons}>
        <button onClick={clearDisplay} className={styles.operatorSecondary}>C</button>
        <button onClick={() => handleOperator("+/-")} className={styles.operatorSecondary}>+/-</button>
        <button onClick={() => handleOperator("%")} className={styles.operatorSecondary}>%</button>
        <button onClick={() => handleOperator("/")} className={styles.operator}>÷</button>

        <button onClick={() => inputDigit("7")}>7</button>
        <button onClick={() => inputDigit("8")}>8</button>
        <button onClick={() => inputDigit("9")}>9</button>
        <button onClick={() => handleOperator("*")} className={styles.operator}>×</button>

        <button onClick={() => inputDigit("4")}>4</button>
        <button onClick={() => inputDigit("5")}>5</button>
        <button onClick={() => inputDigit("6")}>6</button>
        <button onClick={() => handleOperator("-")} className={styles.operator}>-</button>

        <button onClick={() => inputDigit("1")}>1</button>
        <button onClick={() => inputDigit("2")}>2</button>
        <button onClick={() => inputDigit("3")}>3</button>
        <button onClick={() => handleOperator("+")} className={styles.operator}>+</button>

        <button onClick={() => inputDigit("0")} className={styles.zero}>0</button>
        <button onClick={inputDot}>.</button>
        <button onClick={performCalculation} className={styles.operator}>=</button>
      </div>
    </div>
    </div>
  );
};

export default Calculator;
