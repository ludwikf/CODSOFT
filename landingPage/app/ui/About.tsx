import React from "react";
import { oswald } from "./fonts";

export default function About() {
  return (
    <>
      <div className="hidden lg:flex lg:h-[50vh] xl:h-[70vh] justify-center items-center">
        <div
          className={`${oswald.className} w-[89%] font-bold text-center text-4xl xl:text-6xl uppercase xl:pt-10`}
        >
          Hey there! We&apos;re all about giving{" "}
          <span className="text-outline-primary">guys</span> the chance to{" "}
          <span className="text-outline-primary">kick back</span>, sip on some
          whiskey, and let our pros handle their{" "}
          <span className="text-outline-primary">haircuts and beards</span>.
          Whether you speak English or Polish, our{" "}
          <span className="text-outline-primary">friendly staff</span> is here
          to give you some killer advice and help you look your{" "}
          <span className="text-outline-primary">best</span>.
        </div>
      </div>
      <div id="about" className="lg:h-[100vh] flex justify-center items-center">
        <div className="w-[89%] lg:h-[80%] flex flex-col lg:flex-row">
          <div className="flex flex-col gap-5 lg:w-1/2 h-full justify-center mt-5">
            <div
              className={`${oswald.className} text-4xl lg:text-7xl xl:text-8xl font-bold px-4 lg:px-10`}
            >
              GET TO KNOW OUR{" "}
              <span className="text-outline-primary">SALOON</span>
            </div>
            <div
              className={`${oswald.className} font-bold text-xl lg:text-2xl px-4 lg:px-10`}
            >
              OUR PARLOR IS LOCATED IN THE HEART OF WARSAW
            </div>

            <div className="px-4 lg:px-10 lg:w-[85%]">
              Our spot isn&apos;t just a barber shop, it&apos;s a hangout where
              you can dive into guy talk without a worry. Every client gets a
              free drink, which you can enjoy in our classic interiors blending
              vintage with industrial vibes. Need to surf the web? No
              sweat—we&apos;ve got free WiFi waiting for you!
            </div>
          </div>
          <div className="bg-[url(bg1.png)] bg-cover bg-center w-[100%] lg:w-1/2 h-[200px] sm:h-[400px] lg:h-[100%] my-5"></div>
        </div>
      </div>
    </>
  );
}
