import React from "react";

import Link from "next/link";

function HeroButton() {
  return (
    <div className="flex gap-[2rem] mt-6 sm:mb-6">
      <div className="sm:col-span-1 xl:col-span-1">
        <Link href="/Contact">
          <button
            type="button"
            className="font-regular
                    px-6 sm:px-4 xl:px-6 py-4 w-64 sm:w-52 md:w-56 2xl:w-60 text-xl h-25 transition-all
                    rounded overflow-hidden border-2 border-transparent
                    bg-[#1e222a] text-[#fdfdfd] hover:outline-none hover:bg-transparent hover:text-[#1e222a] hover:border-[#1e222a] focus:outline-none
                   "
          >
            Contact
          </button>
        </Link>
      </div>
      <div className="sm:col-span-1 xl:col-span-1">
        <Link href="/Resume">
          <button
            type="button"
            className="font-regular
                    px-6 sm:px-4 xl:px-6 py-4 w-64 sm:w-52 md:w-56 2xl:w-60 text-xl h-25 transition-all
                    rounded overflow-hidden border-2 border-transparent
                    text-[#1e222a] bg-transparent border-[#1e222a] hover:outline-none hover:bg-[#1e222a] hover:text-[#fdfdfd] hover:border-[#1e222a] focus:outline-none
                   "
          >
            Download Resume
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HeroButton;
