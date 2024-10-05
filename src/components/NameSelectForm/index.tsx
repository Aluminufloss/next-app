"use client";

import { useState, useEffect } from "react";

import useStore from "@/store";

import styles from "@/styles/components/nameForm.module.scss";
import Link from "next/link";

const NameSelectForm: React.FC = () => {
  const [inputName, setInputName] = useState("");
  const { name, setName } = useStore();

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    if (savedName) {
      setName(savedName);
    }
  }, [setName]);

  const handleSaveName = () => {
    if (inputName) {
      localStorage.setItem("name", inputName);
      setName(inputName);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.text}>Начать</h2>
      <label className={styles.label}>Ваше имя</label>
      <input
        className={styles.input}
        type="text"
        placeholder="Как вас зовут?"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <span className={styles.separator} />
      <div className={styles.linksGroup}>
        <Link className={styles.link} href="#">
          Открыть калькулятор
        </Link>
        <Link className={styles.link} href="#">
          Открыть генератор
        </Link>
      </div>
    </div>
  );
};

export default NameSelectForm;
