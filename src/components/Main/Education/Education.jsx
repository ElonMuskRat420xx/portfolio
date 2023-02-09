import React from "react";

function EducationSection() {
  return (
    <div className="px-2 py-2 mt-2 font-primary" id="about">
      <div className="flex flex-col justify-left items-left">
        <header className="inline-flex items-baseline justify-between w-full align-top border-b-2 mb-3">
          <div className="block">
            <h2 className="mx-auto my-2 text-4xl font-semibold text-gray-700 leading-snugish">
              Education
            </h2>
          </div>
        </header>
        <div className="my-4 text-2xl font-regular text-gray-700 leading-snugish">
          <section className="pb-4 mt-4 mb-4 border-b-2 break-inside-avoid">
            <header>
              <h3 className="flex-grow font-semibold text-gray-700 leading-snugish">
                {" "}
                College{" "}
              </h3>
              <p className="leading-normal  text-gray-550">
                {" "}
                2018 – Present | Associate of Science/Continuing {" "}
              </p>
            </header>
            <p className="mt-1 leading-normal  text-gray-650">
              <span className="font-semibold text-gray-700 leading-snugish">
                {" "}
                Major:{" "}
              </span>{" "}
              Computer Science
            </p>
            <p className="mt-1 leading-normal  text-gray-650"></p>
            <p className="leading-normal text-gray-700 ">
              <span className="font-semibold text-gray-700 leading-snugish">
                {" "}
                GPA:{" "}
              </span>{" "}
              x
            </p>
          </section>
          <section className="pb-4 mt-4 mb-4 border-b-2 break-inside-avoid">
            <header>
              <h3 className="flex-grow font-semibold text-gray-700 leading-snugish">
                {" "}
                Community College{" "}
              </h3>
              <p className="leading-normal  text-gray-550">
                {" "}
                2018 – Present | Associate of Science/Continuing Education{" "}
              </p>
            </header>
            <p className="mt-1 leading-normal  text-gray-650">
              <span className="font-semibold text-gray-700 leading-snugish">
                {" "}
                Major:{" "}
              </span>{" "}
              Computer Science
            </p>
            <p className="mt-1 leading-normal  text-gray-650"></p>
            <p className="leading-normal text-gray-700 ">
              <span className="font-semibold text-gray-700 leading-snugish">
                {" "}
                GPA:{" "}
              </span>{" "}
              x 
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default EducationSection;
