"use client";

import styles from "./calculator.module.scss";
import Title from "../Title";
import useCalculator from "@/utils/hooks/useCalculator";
import handleOperators from "@/utils/handleOperators";

const Calculator: React.FC = () => {
  const {
    displayValue,
    inputDigit,
    inputDot,
    clearDisplay,
    performCalculation,
    result,
    previousValue,
    currentExpression,
    setOperator,
    setPreviousValue,
    setDisplayValue,
    setWaitingForNewValue,
  } = useCalculator();

  const handleClick = (operator: string) => {
    handleOperators({
      operator,
      setOperator,
      displayValue,
      previousValue,
      setPreviousValue,
      setDisplayValue,
      setWaitingForNewValue,
    });
  };

  return (
    <div className={styles.container}>
      <Title
        text="Калькулятор"
        description="Очень Простой калькулятор обычный - только стандартные функции калькулятора: сложение, вычитание, умножение и деление. Простой калькулятор работает на смартфонах и ПК даже без интернета, не требует установки, быстро загружается и работает онлайн."
      />
      <div className={styles.calculator}>
        <div className={styles.display}>
          <div className={styles.tempResult}>{currentExpression}</div>
          <div className={styles.expression}>{displayValue}</div>
        </div>
        <div className={styles.buttons}>
          <button onClick={clearDisplay} className={styles.operatorSecondary}>
            C
          </button>
          <button
            onClick={() => handleClick("+/-")}
            className={styles.operatorSecondary}
          >
            +/-
          </button>
          <button
            onClick={() => handleClick("%")}
            className={styles.operatorSecondary}
          >
            %
          </button>
          <button onClick={() => handleClick("/")} className={styles.operator}>
            ÷
          </button>

          <button onClick={() => inputDigit("7")}>7</button>
          <button onClick={() => inputDigit("8")}>8</button>
          <button onClick={() => inputDigit("9")}>9</button>
          <button onClick={() => handleClick("*")} className={styles.operator}>
            ×
          </button>

          <button onClick={() => inputDigit("4")}>4</button>
          <button onClick={() => inputDigit("5")}>5</button>
          <button onClick={() => inputDigit("6")}>6</button>
          <button onClick={() => handleClick("-")} className={styles.operator}>
            -
          </button>

          <button onClick={() => inputDigit("1")}>1</button>
          <button onClick={() => inputDigit("2")}>2</button>
          <button onClick={() => inputDigit("3")}>3</button>
          <button onClick={() => handleClick("+")} className={styles.operator}>
            +
          </button>

          <button onClick={() => inputDigit("0")} className={styles.zero}>
            0
          </button>
          <button onClick={inputDot}>.</button>
          <button onClick={performCalculation} className={styles.operator}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
