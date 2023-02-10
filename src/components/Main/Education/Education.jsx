import React from "react";
import Image from "next/image.js";
import Aberdeen from "../../../../public/assets/Aberdeen.svg";
import Nescol from "../../../../public/assets/Nescol.svg";

function EducationSection() {
  return (
    <div className="px-2 py-2 mt-2 font-primary" id="education">
      {/* Start Education Block */}

      <header className="inline-flex items-baseline justify-between w-full align-top border-b-2 mb-3">
        <div className="block">
          <h2 className="mx-auto my-2 text-4xl font-semibold text-gray-700 leading-snugish">
            Education
          </h2>
        </div>
      </header>

      <div className="mb-5 ">
        <Image
          priority="true"
          src={Aberdeen}
          alt="Abedeen"
          className="flex-shrink-0 w-8 h-8 rounded-[2px] bg-cover"
        />

        <div className="w-full py-2 ">
          <div className="item-header">
            <div className="">
              <div className="text-2xl font-medium text-gray-750 py-1">
                B-Eng Mechanical Engineering
              </div>
              <div className="flex space-x-5 text-gray-700">
                <div className="item-header-info">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                  <span className="text-xl">University Of Aberdeen</span>
                </div>
                <div className="item-header-info">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-xl px-2">Aberdeen</span>
                </div>
              </div>
            </div>
            <div className="sm:text-right text-gray-700">
              <div className="item-header-info">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-xl">September 2017 – June 2021</span>
              </div>
            </div>
          </div>
          <div className="py-2 border-b border-gray-200" />
        </div>
      </div>
    </div>
  );
}

export default EducationSection;
