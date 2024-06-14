"use client";
import React, { useEffect, useState } from "react";
import { oswald } from "../ui/fonts";
import Image from "next/image";
import Link from "next/link";
import NavMobile from "./NavbarMobile";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`hidden lg:flex w-screen h-[70px] text-white font-[300] fixed justify-evenly items-center border-b-[1px] border-[#ffffff14] ${
          scrolled
            ? "bg-[#363636] transition-bg duration-500"
            : "transition-bg duration-500"
        }`}
      >
        <Link
          href={"/"}
          className="bg-[url(herologo.png)] w-[80px] h-[40px] bg-cover bg-center"
        ></Link>
        <div className="flex gap-6">
          <div className="cursor-pointer" onClick={() => scrolltoHash("about")}>
            About us
          </div>
          <div className="cursor-pointer" onClick={() => scrolltoHash("book")}>
            Book
          </div>
          <div
            className="cursor-pointer"
            onClick={() => scrolltoHash("voucher")}
          >
            Vouchers
          </div>
        </div>
        <div>
          <button
            onClick={() => scrolltoHash("voucher")}
            className={`${oswald.className} tracking-wider px-7 py-3 border-[1px] font-bold border-[#fff] text-white hover:bg-[#CCA43B] hover:border-[#CCA43B] transition duration-[250ms]`}
          >
            BUY VOUCHER
          </button>
        </div>
      </div>
      <div
        className={` lg:hidden fixed w-screen flex items-center justify-between border-b-[1px] border-[#ffffff14] h-[60px] ${
          scrolled
            ? "bg-[#363636] transition-bg duration-500"
            : "transition-bg duration-500"
        }`}
      >
        <NavMobile />
      </div>
    </>
  );
}
