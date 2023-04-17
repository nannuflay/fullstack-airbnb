"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

useRouter;

import React from "react";

function Logo() {
  const router = useRouter();
  return (
    <Image
      alt="logo"
      className=" hidden md:block cursor-pointer"
      height={100}
      width={100}
      src={"/images/logo.png"}
    ></Image>
  );
}

export default Logo;
