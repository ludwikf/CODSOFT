"use client";
import React from "react";

export default function Footer() {
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  return (
    <div className="max-w-screen h-[100px] bg-black text-white flex justify-evenly lg:justify-center items-center lg:gap-[100px]">
      <div className="bg-[url(herologo.png)] w-[100px] h-[50px] bg-cover bg-center"></div>
      <div className="flex flex-col lg:flex-row lg:gap-5 text-sm lg:text-md text-[#ffffffe0]">
        <div className="cursor-pointer" onClick={() => scrolltoHash("about")}>
          ABOUT
        </div>
        <div className="cursor-pointer" onClick={() => scrolltoHash("book")}>
          BOOK
        </div>
        <div className="cursor-pointer" onClick={() => scrolltoHash("voucher")}>
          VOUCHERS
        </div>
      </div>
    </div>
  );
}
