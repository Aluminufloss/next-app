"use client"

import { useEffect, useState } from 'react';

import styles from '@/styles/components/header.module.scss';

import Logo from './Logo';
import User from './User';
import LinksGroup from './LinksGroup';

const Header: React.FC = () => {
  const [name, setName] = useState<string>("Ваше имя");

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    
    if (savedName) {
      setName(savedName);
    }
  }, []);

  return (
    <header className={styles.header}>
      <Logo />
      <LinksGroup />
      <User userName={name} />
    </header>
  )
}

export default Header;