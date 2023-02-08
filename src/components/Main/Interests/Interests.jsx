import React from "react";

function InterestsSection() {
  return (
    <div className="h-full px-2 py-2 mt-2 font-primary" id="about">
      <div className="flex flex-col justify-left items-left">
        <header className="inline-flex items-baseline justify-between w-full align-top border-b-2 mb-3">
          <div className="block">
            <h2 className="mx-auto my-2 text-4xl font-semibold text-gray-700 leading-snugish">
              Interests
            </h2>
          </div>
        </header>
        <div className="mx-auto my-4 text-2xl font-regular text-gray-700 leading-snugish">
        Interests Section
        </div>
      </div>
    </div>
  );
}

export default InterestsSection;
