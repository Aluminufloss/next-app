"use client";

import { useState } from "react";

import generatePasswordsArray from "@/utils/generatePasswordsArray";

import styles from "@/styles/components/passwordGeneratorForm.module.scss";

const PasswordGeneratorForm: React.FC = () => {
  const [length, setLength] = useState<number>(8);
  const [useUppercase, setUseUppercase] = useState<boolean>(true);
  const [useLowercase, setUseLowercase] = useState<boolean>(true);
  const [useNumbers, setUseNumbers] = useState<boolean>(false);
  const [useSymbols, setUseSymbols] = useState<boolean>(false);
  const [avoidRepetition, setAvoidRepetition] = useState<boolean>(false);
  const [generatedPasswords, setGeneratedPasswords] = useState<string[]>([]);

  const generatePassword = () => {
    const array = generatePasswordsArray({
      length,
      avoidRepetition,
      flags: {
        useUppercase,
        useLowercase,
        useNumbers,
        useSymbols,
      },
    });
    setGeneratedPasswords(array);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Генератор паролей</h1>

      <div className={styles.form}>
        <div className={styles.settings}>
          <label className={styles.label}>Длина пароля</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            placeholder="Введите число"
            className={styles.input}
            min={1}
          />

          <div className={styles.checkboxes}>
            <label>
              <input
                type="checkbox"
                checked={useUppercase}
                onChange={(e) => setUseUppercase(e.target.checked)}
              />
              Использовать прописные буквы
            </label>
            <label>
              <input
                type="checkbox"
                checked={useLowercase}
                onChange={(e) => setUseLowercase(e.target.checked)}
              />
              Использовать строчные буквы
            </label>
            <label>
              <input
                type="checkbox"
                checked={useNumbers}
                onChange={(e) => setUseNumbers(e.target.checked)}
              />
              Использовать цифры
            </label>
            <label>
              <input
                type="checkbox"
                checked={useSymbols}
                onChange={(e) => setUseSymbols(e.target.checked)}
              />
              Использовать символы: %, *, ), ?, @, #, $, ~
            </label>
            <label>
              <input
                type="checkbox"
                checked={avoidRepetition}
                onChange={(e) => setAvoidRepetition(e.target.checked)}
              />
              Избегать повторения символов
            </label>
          </div>

          <button onClick={generatePassword} className={styles.generateButton}>
            Сгенерировать пароли
          </button>
        </div>

        <div className={styles.results}>
          <h3>Результаты</h3>
          {generatedPasswords.map((password, index) => (
            <div key={index} className={styles.passwordItem}>
              {password}
              <button
                className={styles.copyButton}
                onClick={() => navigator.clipboard.writeText(password)}
              >
                📋
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PasswordGeneratorForm;
