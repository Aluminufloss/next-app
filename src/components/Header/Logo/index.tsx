"use client";

import Image from "next/image";

import logo from "@/assets/logo.png";

const Logo: React.FC = () => {
  return <Image src={logo} alt="logo" width={142} height={24} />;
};

export default Logo;
