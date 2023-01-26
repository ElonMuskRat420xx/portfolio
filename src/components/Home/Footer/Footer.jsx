import React from "react";
import SocialIcons from "./Icons";

function Footer() {
  return (
    <footer className="absolute w-full h-auto py-2 text-white bg-[#1e222a] flex flex-col justify-end items-center">
      <ul className="flex gap-6">
       <SocialIcons className="p-4"/>
      </ul>
    </footer>
  );
}

export default Footer;
