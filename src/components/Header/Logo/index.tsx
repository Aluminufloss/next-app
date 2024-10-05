"use client"

import Image from 'next/image';

import logo from '@/assets/logo.png';

import styles from '@/styles/components/header.module.scss';

const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <Image
        src={logo}
        alt="logo"
        width={142}
        height={24}
      />
    </div>
  )
}

export default Logo;