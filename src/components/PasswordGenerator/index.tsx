"use client";

import { useState } from "react";

import generatePasswordsArray from "@/utils/generatePasswordsArray";

import styles from "./passwordGeneratorForm.module.scss";

import Title from "../Title";
import Checkbox from "./Checkbox";

import Copy from "@/assets/svg/copy.svg";
import Input from "../Input";

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
    <>
      <Title text="Генератор паролей" />
      <div className={styles.form}>
        <div className={styles.settings}>
          <span className={styles.label}>Длина пароля</span>
          <Input
            type="number"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            placeholder="Введите число"
            min={1}
            max={100}
          />

          <div className={styles.checkboxes}>
            <Checkbox
              flag={useUppercase}
              text="Использовать прописные буквы"
              onChange={(e) => setUseUppercase(e.target.checked)}
            />
            <Checkbox
              flag={useLowercase}
              text="Использовать строчные буквы"
              onChange={(e) => setUseLowercase(e.target.checked)}
            />

            <Checkbox
              flag={useNumbers}
              text="Использовать цифры"
              onChange={(e) => setUseNumbers(e.target.checked)}
            />

            <Checkbox
              flag={useSymbols}
              text="Использовать символы: %, *, ), ?, @, #, $, ~"
              onChange={(e) => setUseSymbols(e.target.checked)}
            />

            <Checkbox
              flag={avoidRepetition}
              text="Избегать повторения символов"
              onChange={(e) => setAvoidRepetition(e.target.checked)}
            />
          </div>

          <button onClick={generatePassword} className={styles.generateButton}>
            Сгенерировать пароли
          </button>
        </div>

        <div className={styles.results}>
          <span className={styles.label}>Результаты</span>
          {generatedPasswords.map((password, index) => (
            <div key={index} className={styles.passwordItem}>
              {password}
              <div
                className={styles.copyButton}
                onClick={() => navigator.clipboard.writeText(password)}
              >
                <Copy className={styles.copyButton} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PasswordGeneratorForm;
