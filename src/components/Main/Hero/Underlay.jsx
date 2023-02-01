import React from "react";

//importing typewriter-effect
import Typewriter from "typewriter-effect";
import HeroButton from "../Buttons/HeroButton";
import Icons from "./Icons";

function TerminalWindow() {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Hi,I'm", "Gregor Nelson" , ""],
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {}}
      />
    </>
  );
}

export default function Underlay() {
  return (
    <>
      <div className="TypewriterFont text-9xl">
        <div className="mb-4 text-9xl font-sans text-gray-750 relative p-[2rem]">
          <TerminalWindow />
        </div>
      </div>
      <div className="HeroBtn">
  
        <HeroButton />

        <Icons/>
      </div>
    </>
  );
}
