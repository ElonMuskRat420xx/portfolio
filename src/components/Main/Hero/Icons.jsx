import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

function Icons() {
  return (
    <>
      <div class="flex justify-left pt-2 gap-4 text-gray-700 text-5xl">
        <Link
          href="mailto:gnelson684@gmail.com"
          className="group cursor-pointer"
          aria-label="Email"
          title="Email"
        >
          <Icon icon="mdi:email" />
        </Link>

        <Link
          href="https://github.com/ElonMuskRat420xx"
          target="_blank"
          rel="noreferrer"
          className="group cursor-pointer"
          aria-label="Github"
          title="Github"
        >
          <Icon icon="mdi:github" />
        </Link>

        <Link
          href="https://nitter.glkn.xyz"
          target="_blank"
          rel="noreferrer"
          className="group cursor-pointer text-fore-subtle"
          aria-label="Twitter"
          title="Twitter"
        >
          <Icon icon="mdi:twitter" />
        </Link>
      </div>
    </>
  );
}

export default Icons;
