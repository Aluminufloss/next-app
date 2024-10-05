"use client";

import Link from "next/link";

import styles from '@/styles/components/header.module.scss';

const LinksGroup: React.FC = () => {
  return (
    <div className={styles.linksGroup}>
      <Link href="/" className={styles.link}>Главная</Link>
      <Link href="/about" className={styles.link}>Калькулятор</Link>
      <Link href="/contacts" className={styles.link}>генератор паролей</Link>
    </div>
  );
};

export default LinksGroup;