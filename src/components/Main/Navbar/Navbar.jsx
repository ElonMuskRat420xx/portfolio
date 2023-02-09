import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image.js";
import { useRouter } from "next/router";
import { navlinks } from "./Navlinks.jsx";
import Logo from "../../../../public/logo.png";
import { BiMenuAltRight } from "react-icons/bi";

const NavItem = ({ href, title }) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <>
        <li
          className={`px-4 md:pt-4 md:px-4 md:text-left 
  ${router.asPath === href ? "border-l-[1px] sm:border-none" : ""} 
  sm:border-none
  `}
        >
          <p className="font-primary text-2xl transition duration-500 ease-in-out transform md:hover:-translate-y-2 text-white font-regular md:hover:text-[#7EC7A2]">
            {title}
          </p>
        </li>
      </>
    </Link>
  );
};

export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div
      className={` sm:absolute bg-[#111828] sm:h-full w-screen sm:w-auto z-10 flex justify-center items-center rounded-[1px]`}
    >
      <nav className="block md:flex md:flex-col justify-between items-left px-8 w-full">
        <div className="flex justify-between">
          <div className="sm:absolute sm:top-0 sm:p-2">
            <Link href="/">
              <Image
                priority="true"
                src={Logo}
                alt="logo"
                className="w-16 md:w-1/8 pl-30 my-2 transition-all transform hover:scale-75 cursor-pointer float-left"
              />
            </Link>
          </div>
          <div className="flex sm:hidden">
            <button
              type="button"
              className="focus:outline-none"
              onClick={() => setShowMobileNav(!showMobileNav)}
            >
              <BiMenuAltRight color="white" size="2.5rem" />
            </button>
          </div>
        </div>
        <div
          className={
            showMobileNav
              ? "flex pt-3 transition-all "
              : "hidden sm:flex sm:mt-auto"
          }
        >
          <ul className="sm:flex sm:flex-col sm:border-none float-left gap-4">
            {navlinks.map((item) => {
              return (
                <NavItem title={item.title} href={item.href} key={item.href} />
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
}
