import React from "react";
import { oswald } from "./fonts";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function Book() {
  return (
    <div
      id="book"
      className="max-w-screen h-[70vh] lg:h-screen bg-cover bg-top bg-[url(bg2.png)] flex justify-center items-center text-white"
    >
      <div className="text-center lg:w-1/3 flex flex-col mx-5 gap-5 items-center">
        <div
          className={`${oswald.className} text-5xl lg:text-7xl xl:text-8xl font-bold`}
        >
          BOOK YOUR VISIT <span className="text-outline-primary">NOW!</span>
        </div>
        <div className="font-[200]">
          Ready to Book? Dive into Men&apos;s Talk, Sip a Drink and Revel in
          Vintage Vibes
        </div>
        <Link
          href={"https://booksy.com/pl-pl/s/8820_krakow?query=barber"}
          className={`${oswald.className} text-sm py-4 lg:py-5 font-bold px-5 lg:px-9 max-w-[250px] text-black bg-[#CCA43B] border-[1px] border-[#CCA43B] tracking-wider flex justify-center items-center gap-3 hover:brightness-90 duration-[250ms]`}
        >
          BOOK YOUR VISIT
          <ArrowRightIcon className="w-5" />
        </Link>
      </div>
    </div>
  );
}
