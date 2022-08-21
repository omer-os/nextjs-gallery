import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function NavBar({ PageOn, setPageOn }) {
  const [OpenMenu, setOpenMenu] = useState(false);

  const MenuHandler = () => {
    setOpenMenu(!OpenMenu);
  };

  return (
    <div className="flex z-30 bg-black justify-between items-center px-10 py-5 border-b-[.001em] border-b-gray-600 sticky top-0 text-sm left-0">
      <a className="font-bold">cetin kolemen</a>

      <AnimatePresence exitBeforeEnter>
        <div
          className={`flex gap-5 sm:flex-row sm:relative flex-col fixed top-0 sm:w-max sm:h-max w-full h-full bg-black sm:justify-between justify-center sm:items-end items-center sm:text-sm text-xl transition-all text-black ${
            OpenMenu ? "left-full" : "left-0"
          } `}
        >
          <Link href="/">
            <a
              onClick={() => setPageOn("/")}
              className="line-item capitalize relative  px-2 py-1"
            >
              <div
                className={`z-20 relative ${
                  PageOn === "/"
                    ? "text-black"
                    : "text-white transition-all duration-300"
                }`}
              >
                gallery
              </div>
              {PageOn === "/" && (
                <motion.div
                  layoutId="bg"
                  className={`bg-gray-100 w-full h-full z-10 absolute top-0 left-0 rounded-md `}
                />
              )}
            </a>
          </Link>
          <Link href="/about-me">
            <a
              onClick={() => setPageOn("/about-me")}
              className="line-item capitalize relative  px-2 py-1"
            >
              <div
                className={`z-20 relative ${
                  PageOn === "/about-me"
                    ? "text-black"
                    : "text-white transition-all duration-300"
                }`}
              >
                about me
              </div>
              {PageOn === "/about-me" && (
                <motion.div
                  layoutId="bg"
                  className={`bg-gray-100 w-full h-full z-10 absolute top-0 left-0 rounded-md `}
                />
              )}
            </a>
          </Link>
          <Link href="/contact-me">
            <a
              onClick={() => setPageOn("/contact-me")}
              className="line-item capitalize relative  px-2 py-1"
            >
              <div
                className={`z-20 relative ${
                  PageOn === "/contact-me"
                    ? "text-black"
                    : "text-white transition-all duration-300"
                }`}
              >
                contact me
              </div>
              {PageOn === "/contact-me" && (
                <motion.div
                  layoutId="bg"
                  className={`bg-gray-100 w-full h-full z-10 absolute top-0 left-0 rounded-md `}
                />
              )}
            </a>
          </Link>

          <div
            className="menu-btn sm:hidden flex flex-col items-center gap-2 cursor-pointer z-50 fixed right-7 top-5"
            onClick={MenuHandler}
          >
            <div
              className={`
          line w-8 h-1 bg-white relative rounded-full transition-all duration-300 left-0 rotate-0 opacity-1 top-0
          ${OpenMenu ? "rotate-45 top-3" : ""}`}
            ></div>
            <div
              className={`
          line w-8 h-1 bg-white relative rounded-full transition-all duration-300 left-0 rotate-0 opacity-1 top-0
          ${OpenMenu ? "-left-[1em] opacity-0" : ""}`}
            ></div>
            <div
              className={`
          line w-8 h-1 bg-white relative rounded-full transition-all duration-300 left-0 rotate-0 opacity-1 top-0
          ${OpenMenu ? "-rotate-45 -top-3" : ""}`}
            ></div>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
}
