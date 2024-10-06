"use client";

import { useState } from "react";
import Link from "next/link";

import useStore from "@/store";

import styles from "./nameForm.module.scss";

import Input from "../Input";

const NameSelectForm: React.FC = () => {
  const [inputName, setInputName] = useState("");
  const { setName } = useStore();

  const handleSaveName = () => {
    if (inputName.trim()) {
      localStorage.setItem("name", inputName);
      setName(inputName);
      setInputName("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSaveName();
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.text}>Начать</h2>
      <label className={styles.label}>Ваше имя</label>
      <Input
        type="text"
        placeholder="Как вас зовут?"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <span className={styles.separator} />
      <div className={styles.linksGroup}>
        <Link className={styles.link} href="/calculator">
          Открыть калькулятор
        </Link>
        <Link className={styles.link} href="/generator">
          Открыть генератор
        </Link>
      </div>
    </div>
  );
};

export default NameSelectForm;
