"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function NavMobile({ session, search = true }: any) {
  const [menu, setMenu] = useState(false);
  const menuRef = useRef<any>(null);

  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };
  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenu(false);
    }
  };

  useEffect(() => {
    if (menu) {
      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [menu]);

  useEffect(() => {
    if (menu) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [menu]);
  return (
    <>
      {menu && (
        <>
          <div className="z-[299] fixed left-0 top-0 h-[100dvh] w-[100%] bg-[#00000080]"></div>
          <div
            ref={menuRef}
            className={`font-[300] text-white z-[300] animate-slide-from-right shadow fixed right-0 top-0 h-[100dvh] w-[80%] max-w-[300px] bg-[#363636] flex flex-col`}
          >
            <div
              className={`flex ${
                session && "justify-between"
              } p-3 shadow-sm bg-[#00000010]`}
            >
              <XMarkIcon
                className="min-w-7 max-w-7 ml-2 mr-4 cursor-pointer"
                onClick={() => setMenu(false)}
              />
              <Link
                onClick={() => setMenu(false)}
                href={"/"}
                className={`text-xl xs:text-2xl flex items-center brightness-[90%] font-bold`}
              >
                TrimStudio
              </Link>
            </div>
            <div className="flex-grow flex flex-col justify-between text-md mt-2">
              <div className="flex flex-col">
                <div
                  onClick={() => {
                    setMenu(false);
                    scrolltoHash("about");
                  }}
                  className="px-5 py-3 flex items-center gap-1.5 justify-center"
                >
                  About us
                </div>
                <div
                  onClick={() => {
                    setMenu(false);
                    scrolltoHash("book");
                  }}
                  className="px-5 py-3 flex items-center gap-1.5 justify-center"
                >
                  Book
                </div>
                <div
                  onClick={() => {
                    setMenu(false);
                    scrolltoHash("voucher");
                  }}
                  className="px-5 py-3 flex items-center gap-1.5 justify-center"
                >
                  Vouchers
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <>
        <Link
          href={"/"}
          className="bg-[url(herologo.png)] w-[70px] h-[35px] bg-cover bg-center ml-5"
        ></Link>
        <div className="mr-5">
          <Bars3Icon className="w-7 text-white" onClick={() => setMenu(true)} />
        </div>
      </>
    </>
  );
}
