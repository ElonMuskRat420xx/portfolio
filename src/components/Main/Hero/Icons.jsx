import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

function Icons() {
  return (
    <>
      <div className="flex justify-center sm:justify-start pt-2 gap-4 text-gray-700 text-2xl">
        <Link
          href="mailto:gnelson684@gmail.com"
          className="group cursor-pointer transition duration-500 ease-in-out transform md:hover:-translate-y-2 font-regular md:hover:text-[#7EC7A2] "
          aria-label="Email"
          title="Email"
        >
          <Icon icon="logos:google-gmail" />
        </Link>

        <Link
          href="https://github.com/ElonMuskRat420xx"
          target="_blank"
          rel="noreferrer"
          className="group cursor-pointer transition duration-500 ease-in-out transform md:hover:-translate-y-2 font-regular md:hover:text-[#7EC7A2] "
          aria-label="Github"
          title="Github"
        >
          <Icon icon="logos:github-icon" />
        </Link>

        <Link
          href="https://nitter.glkn.xyz"
          target="_blank"
          rel="noreferrer"
          className="group cursor-pointer transition duration-500 ease-in-out transform md:hover:-translate-y-2 font-regular md:hover:text-[#7EC7A2] "
          aria-label="Personal Nitter Instance"
          title="Nitter"
        >
          <Icon icon="logos:twitter" />
        </Link>

        <Link
          href="https://libreddit.glkn.xyz"
          target="_blank"
          rel="noreferrer"
          className="group cursor-pointer transition duration-500 ease-in-out transform md:hover:-translate-y-2 font-regular md:hover:text-[#7EC7A2] "
          aria-label="Personal Libreddit Instance"
          title="Libreddit"
        >
          <Icon icon="logos:reddit-icon" />
        </Link>
        <Link
          href="https://calendly.com/gregor-lk-nelson/30min"
          target="_blank"
          rel="noreferrer"
          className="group cursor-pointer transition duration-500 ease-in-out transform md:hover:-translate-y-2 font-regular md:hover:text-[#7EC7A2] "
          aria-label="Book A Meeting"
          title="Calendly"
        >
          <Icon icon="logos:google-calendar" />
        </Link>
      </div>
    </>
  );
}

export default Icons;
