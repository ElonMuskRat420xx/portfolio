import React from "react";

import Link from "next/link";

function HeroButton() {
  return (
    <div className="flex gap-4 my-8 mx-auto flex-row justify-center sm:justify-start w-full">
      <div className="">
        <Link href="/Connect">
          <button
            type="button"
            className="w-[14rem] font-regular
                    py-4 px-4 text-xl transition-all
                    rounded overflow-hidden border-2 border-transparent
                    bg-[#1e222a] text-[#fdfdfd] hover:outline-none hover:bg-transparent hover:text-[#1e222a] hover:border-[#1e222a] focus:outline-none
                   "
          >
            Contact
          </button>
        </Link>
      </div>
      <div className="">
        <Link
          href="/files/Resume.pdf"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button
            type="button"
            className="w-[14rem] font-regular
                    py-4 px-4 text-xl transition-all
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
