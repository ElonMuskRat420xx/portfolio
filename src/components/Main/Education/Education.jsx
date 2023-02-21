import React from "react";
import Image from "next/image.js";
import Aberdeen from "../../../../public/assets/Aberdeen.svg";
import Nescol from "../../../../public/assets/Nescol.svg";
import Gordons from "../../../../public/assets/Gordons.svg";
import Scotch from "../../../../public/assets/Scotch.svg";

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
      {/* Education Section University Of Aberdeen  */}
      <div className="">
        <Image
          priority="true"
          src={Aberdeen}
          alt="Abedeen"
          className="w-[2rem]"
        />

        <div className="w-full py-2 ">
          <div className="flex justify-between flex-col sm:flex-row gap-2">
            <div className="">
              <div className="text-2xl font-medium text-gray-750 py-1">
                University Of Aberdeen
              </div>
              <div className="flex flex-row gap-2 text-gray-700">
                <div className="flex flex-row gap-[0.5rem] items-center">
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
                  <span className="text-xl">B-Eng Mechanical Engineering</span>
                </div>
                <div className="flex flex-row gap-[0.5rem] items-center">
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
                  <span className="text-xl">Aberdeen</span>
                </div>
              </div>
            </div>
            <div className="sm:text-right text-gray-700">
              <div className="flex flex-row gap-[0.5rem] items-center">
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

      {/* Education Section NESCOL */}

      <div className="pt-2">
        <Image priority="true" src={Nescol} alt="NESCOL" className="w-[4rem]" />

        <div className="w-full py-2 ">
          <div className="flex justify-between flex-col sm:flex-row gap-2">
            <div className="flex flex-col">
              <div className="text-2xl font-medium text-gray-750 py-1">
                North Eeast Scotland College
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex text-gray-700 flex-row gap-[0.5rem] sm:items-center">
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
                  <div className="flex flex-wrap gap-2 sm:gap-4">
                    <span className="text-xl">HND Mechanical Engineering</span>
                    <span className="text-xl">HNC Electrical Engineering</span>
                  </div>
                </div>

                <div className="text-gray-700 flex flex-row gap-[0.5rem] items-center">
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
                  <span className="text-xl">Aberdeen</span>
                </div>
              </div>
            </div>

            <div className="sm:text-right text-gray-700">
              <div className="flex flex-row gap-[0.5rem] items-center">
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
                <span className="text-xl">September 2014 – June 2017 </span>
              </div>
            </div>
          </div>

          <div className="py-2 border-b border-gray-200" />
        </div>
      </div>

      {/* Education Section RGC */}

      <div className="pt-2">
        <Image
          priority="true"
          src={Gordons}
          alt="Robert Gordons College"
          className="w-[3rem]"
        />

        <div className="w-full py-2 ">
          <div className="flex justify-between flex-col sm:flex-row gap-2">
            <div className="">
              <div className="text-2xl font-medium text-gray-750 py-1">
                Robert Gordons College
              </div>
              <div className="flex flex-row gap-2 text-gray-700">
                <div className="flex flex-row gap-[0.5rem] items-center">
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
                  <span className="text-xl">Aberdeen</span>
                </div>
              </div>
            </div>
            <div className="sm:text-right text-gray-700">
              <div className="flex flex-row gap-[0.5rem] items-center">
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
                <span className="text-xl">November 2009 – June 2014</span>
              </div>
            </div>
          </div>
          <div className="py-2 border-b border-gray-200" />
        </div>
      </div>

      {/* Education Section Scotch College  */}
      <div className="pt-2">
        <Image
          priority="true"
          src={Scotch}
          alt="Scotch College WA"
          className="w-[2.5rem]"
        />

        <div className="w-full py-2 ">
          <div className="flex justify-between flex-col sm:flex-row gap-2">
            <div className="">
              <div className="text-2xl font-medium text-gray-750 py-1">
                Scotch College
              </div>
              <div className="flex flex-row gap-2 text-gray-700">
                <div className="flex flex-row gap-[0.5rem] items-center">
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
                  <span className="text-xl">Perth Western Australia</span>
                </div>
              </div>
            </div>
            <div className="sm:text-right text-gray-700">
              <div className="flex flex-row gap-[0.5rem] items-center">
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
                <span className="text-xl">November 2007 – June 2009</span>
              </div>
            </div>
          </div>
          <div className="py-2 border-b border-gray-200" />
        </div>
      </div>

      {/* End Of Education Sections */}
    </div>
  );
}

export default EducationSection;
