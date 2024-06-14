import { Oswald } from "next/font/google";
import { Unbounded } from "next/font/google";

export const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"] });
export const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
