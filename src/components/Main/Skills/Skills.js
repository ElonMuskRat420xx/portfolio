import React from "react";
import SkillIcons from "./Icons";

function SkillsSection() {
  return (
    <div className="px-8 py-8 h-auto font-primary">
      <div className="flex flex-col justify-left items-left">
        <div className="w-full text-left lg:text-left pl-4 lg:pl-20">
          <div className="w-full lg:w-2/3">
            <h1 className="text-7xl font-bold text-gray-750">Skills</h1>
            <h2 className="mx-auto my-2 text-4xl font-semibold text-gray-700 leading-snugish">
              Technologies I Have Used
            </h2>
            <div className="mx-auto my-4 text-2xl font-regular text-gray-700 leading-snugish">
              <SkillIcons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
