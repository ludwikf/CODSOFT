"use client";
import React from "react";
import { oswald, unbounded } from "./fonts";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function Hero() {
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  return (
    <div className="max-w-screen h-screen bg-[url(hero.png)] bg-cover bg-center flex justify-center items-center">
      <div className="w-[90%] pt-10 md:pt-0">
        <div
          className={`text-5xl md:text-[83px] flex flex-col md:block md:w-[650px] text-white md:leading-[85px] ${oswald.className} font-bold`}
        >
          <span className="text-outline-primary md:mr-5">STYLISH</span>
          PLACE CREATED
          <span className=" text-outline-primary md:ml-5">FOR MEN</span>
        </div>
        <div
          className={`${unbounded.className} text-white md:text-lg my-10 sm:w-[50%] md:w-[500px]`}
        >
          English and Polish speaking place created to advise you and
          <span className="font-bold"> improve your look.</span>
        </div>
        <div
          className={`${oswald.className} font-bold text-[16px] flex flex-col md:flex-row gap-5 md:gap-0 `}
        >
          <Link
            href={"https://booksy.com/pl-pl/s/8820_krakow?query=barber"}
            className="max-w-[210px] text-sm md:text-md py-4 md:py-5 px-7 bg-[#CCA43B] border-[1px] border-[#CCA43B] tracking-wider mr-7 flex justify-center items-center gap-3 hover:brightness-90 duration-[250ms]"
          >
            BOOK YOUR VISIT
            <ArrowRightIcon className="w-5" />
          </Link>

          <button
            onClick={() => scrolltoHash("voucher")}
            className="max-w-[210px] text-sm md:text-md tracking-wider mr-7 px-7 py-4 md:py-5 border-[1px] border-[#fff] text-white hover:bg-[#CCA43B] hover:border-[#CCA43B] transition duration-[250ms]"
          >
            BUY VOUCHERS
          </button>
          <button
            onClick={() => scrolltoHash("about")}
            className="hidden md:block tracking-wider px-7 py-5 border-[1px] border-[#fff] text-white hover:bg-[#CCA43B] hover:border-[#CCA43B] transition duration-[250ms]"
          >
            CHECK SALOON
          </button>
        </div>
      </div>
    </div>
  );
}
