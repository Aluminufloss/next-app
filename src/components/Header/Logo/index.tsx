"use client";

import Image from "next/image";

import logo from "@/assets/logo.png";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href={"/"}>
      <Image 
        src={logo} 
        alt="Logo" 
        width={142} 
        height={24} 
      />
    </Link>
  )
};

export default Logo;
