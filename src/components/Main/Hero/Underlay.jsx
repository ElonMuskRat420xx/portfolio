import React from "react";

//importing typewriter-effect
import Typewriter from "typewriter-effect";
import HeroButton from "../Buttons/HeroButton";

function TerminalWindow() {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Gregor Nelson", "Web Developer"],
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
        <div className="font-sans relative p-[2rem]">
          <TerminalWindow />
        </div>
      </div>
      <div className="HeroBtn">
        <HeroButton />
      </div>
    </>
  );
}
