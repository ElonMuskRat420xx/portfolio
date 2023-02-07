import React from "react";
import Link from "next/link";
import { PaperIcon } from "../Icons/Paper";
import Icons from "./Icons";
import HeroButton from "../Buttons/HeroButton";

function Hero() {
  return (
    <div className="h-screen px-8 py-8 mt-4 font-primary" id="about">
      <div className="flex justify-left items-left">
        <div className="w-full text-left pl-4 lg:pl-20">
          <div className="w-full lg:w-2/3">
            <div className="block">
              <h1 className="text-7xl font-bold text-gray-750">
                Gregor L K Nelson
              </h1>
              <h2 className="mx-auto my-2 text-4xl font-semibold text-gray-700 leading-snugish">
                Mechanical &amp; Electrical Engineering Technician{" "}
              </h2>
              <h3 className="mx-auto my-2 font-semibold text-2xl text-gray-550 leading-snugish">
                Aberdeenshire, Scotland (AB54){" "}
              </h3>
            </div>
            <p className="mx-auto my-4 text-2xl font-regular text-gray-700 leading-snugish">
              I am an engineering undergraduate, passionate about Linux, free
              software and web development. I have always been fascinated by the
              power of technology and I strive to constantly learn and grow in
              my knowledge. I have been working on projects related to Linux,
              free software, and web development for the past few years and I am
              excited to continue learning and developing my skills.
            </p>
            <p className="mx-auto my-4 text-2xl font-regular text-gray-700 leading-snugish">
              My goal is to become a successful engineer who creates
              high-quality products that are innovative and user-friendly. I am
              passionate about providing solutions that are efficient and secure
              while still being easy to use. I strive to stay up to date with
              the latest trends in technology and software development, and I am
              always open to learning new things.
            </p>
            <p className="mx-auto my-4 text-2xl font-regular text-gray-700 leading-snugish">
              I am eager to work with others who share my same passion and
              enthusiasm for technology, and I want to be part of a team that is
              constantly pushing boundaries and striving for excellence. I am
              confident that I can be a valuable asset to any team and I look
              forward to the opportunity to grow and develop skills that will
              help me reach my goals.
            </p>
            <HeroButton/>
              <Icons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;