"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo.png";

import styles from "./logo.module.scss";

const Logo: React.FC = () => {
  return (
    <Link href={"/"} className={styles.container}>
      <Image 
        src={logo} 
        alt="Logo" 
        width={142} 
        height={24} 
        className={styles.logo}
      />
    </Link>
  )
};

export default Logo;
