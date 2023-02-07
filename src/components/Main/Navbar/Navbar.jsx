import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image.js";
import { useRouter } from "next/router";
import { navlinks } from "./Navlinks.jsx";
import Logo from "../../../../public/logo.png";
import { FaBars } from "react-icons/fa";

const NavItem = ({ href, title }) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <>
        <li
          className={`
          px-5 py-2 pt-1 md:pt-4 md:px-4 md:text-center 
          ${router.asPath === href ? "border-l-[1px] md:border-none" : ""} 
          `}
        >
          <p className="font-primary text-lg transition duration-500 ease-in-out transform md:hover:-translate-y-2 text-white font-semiSbold md:hover:text-[#7EC7A2]">
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
    <div className={` mx-auto bg-[#1e222a] w-full z-30`}>
      <nav className="block md:flex justify-between items-center p-2 px-8">
        <div className="flex justify-between">
          <div>
            <Link href="/">
              <Image
                priority="true"
                src={Logo}
                alt="logo"
                className="w-16 md:w-1/8 pl-30 my-2 transition-all transform hover:scale-75 cursor-pointer"
              />
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-white focus:outline-none"
              onClick={() => setShowMobileNav(!showMobileNav)}
            >
              <FaBars size={18} />
            </button>
          </div>
        </div>
        <div
          className={
            showMobileNav ? "block pt-3 transition-all" : "hidden md:block"
          }
        >
          <ul className="md:flex md:flex-row md:border-none">
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
