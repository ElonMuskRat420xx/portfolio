import Link from "next/link";
import React from "react";

function AboutSection() {
  return (
    <>
      <div className="px-8 py-8 h-auto font-primary">
        <div className="flex flex-col justify-left items-left">
          <div className="w-full text-left lg:w-7/12 lg:text-left pl-4 lg:pl-20">
            <div className="w-full lg:w-2/3">
              <h1 className="mb-0 text-5xl font-bold text-gray-750">About</h1>
              <p className="m-0 ml-2 text-2xl font-regular text-gray-700 leading-snugish">
                As a Mechanical Engineering undergraduate, I am passionate about
                exploring the many facets of engineering and technology. My
                interests include classic cars, finance and trading, Linux, free
                software, web development, and blockchain technology. I am
                constantly looking for new opportunities to expand my knowledge
                and challenge myself. I believe that technology has the
                potential to create a more equitable and sustainable world, and
                I strive to use my knowledge and skills to help make that vision
                a reality.{" "}
              </p>

              <div className="flex flex-row justify-left lg:justify-start items-end">
                <Link href="/Resume">
                  <button className="bg-gray-800 hover:bg-[#1e222a] text-white font-bold my-4 py-2 px-4 rounded-[2px] flex items-center gap-2">
                    Resume
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
