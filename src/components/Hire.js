import React from "react";
import Image from "next/image";
// import HireMe from "../../public/images/hireme.png";
import Link from "next/link";
import { CircularText } from "./Icons";

const Hire = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute">
      <div className="w-48 flex items-center justify-center relative md:w-24">
        <CircularText className="fill-dark dark:fill-light animate-spin-slow w-60 " />
        <Link
          href="mailto:anasmohd4697@gmail.com"
          className="flex items-center  
           justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
           bg-dark text-light shadow-md border border-solid border-dark w-20 h-20  rounded-full 
           font-semibold hover:bg-light hover:text-dark
           hover:border-dark dark:bg-light dark:text-dark
             hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
             md:w-12 md:h-12 md:text-[10px]
           "
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default Hire;
