import React from "react";
import { oswald } from "./fonts";
import Link from "next/link";

export default function Voucher() {
  return (
    <div
      id="voucher"
      className="max-w-screen lg:min-h-screen flex flex-col justify-center items-center gap-10 my-10 lg:my-0"
    >
      <div className="flex flex-col justify-center items-center gap-3 lg:gap-6 lg:w-1/2 mx-5 lg:mx-0 text-center lg:pt-16">
        <div className={`${oswald.className} font-bold text-4xl lg:text-8xl`}>
          GIFT <span className="text-outline-primary">VOUCHERS</span>
        </div>
        <div className={`${oswald.className} font-bold text-xl lg:text-4xl`}>
          THE PERFECT GIFT FOR BIRTHDAYS, NAME DAYS, ANNIVERSARIES OR HOLIDAYS!
        </div>
        <div className="hidden lg:block text-sm lg:text-md">
          Surprise Your Loved One with a Special Gift! Choose Your Budget, and
          We&apos;ll Handle the Rest. Our Experts Will Tailor a Memorable
          Experience.
        </div>
      </div>
      <div className="w-[89%] lg:h-[200px] flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2 h-[120px] sm:h-[200px] lg:h-full flex shadow-lg">
          <div className="bg-[url(giftcard.png)] bg-cover bg-center h-full w-[50%]"></div>
          <div className="w-[50%] flex flex-col justify-evenly items-center">
            <div className={`uppercase  lg:text-xl`}>Haircut</div>
            <div className="text-xs lg:text-md">70 PLN</div>
            <Link
              href={"https://booksy.com/pl-pl/s/8820_krakow?query=barber"}
              className={`${oswald.className} py-[2px] lg:py-2 px-4 bg-[#CCA43B] border-[1px] border-[#CCA43B] tracking-wider flex items-center gap-3 hover:brightness-90 duration-[250ms]`}
            >
              BUY
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 h-[120px] sm:h-[200px] lg:h-full flex shadow-lg">
          <div className="bg-[url(giftcard.png)] bg-cover bg-center h-full w-[50%]"></div>
          <div className="w-[50%] flex flex-col justify-evenly items-center text-center">
            <div className={`uppercase lg:text-xl`}>Haircut + Beard</div>
            <div className="text-xs lg:text-md">90 PLN</div>
            <Link
              href={"https://booksy.com/pl-pl/s/8820_krakow?query=barber"}
              className={`${oswald.className} py-[2px] lg:py-2 px-4 bg-[#CCA43B] border-[1px] border-[#CCA43B] tracking-wider flex items-center gap-3 hover:brightness-90 duration-[250ms]`}
            >
              BUY
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
