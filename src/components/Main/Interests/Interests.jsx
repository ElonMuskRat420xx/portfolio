import React from "react";

function InterestsSection() {
  return (
    <div className="px-2 py-2 mt-2 font-primary" id="interests">
      <div className="flex flex-col justify-left items-left">
        <header className="inline-flex items-baseline justify-between w-full align-top border-b-2 mb-3">
          <div className="block">
            <h2 className="mx-auto my-2 text-4xl font-semibold text-gray-700 leading-snugish">
              Interests
            </h2>
          </div>
        </header>
        <div className="mx-auto my-4 text-2xl font-regular text-gray-700 leading-snugish">
          {/* Interests Section 1 */}
          <section className="pb-4 mb-4 border-b-2 break-inside-avoid">
            <header>
              <h3 className="font-semibold text-gray-700 leading-snugish">
                <a href="" className="group">
                  {" "}
                  Automotive{" "}
                  <span className="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"></span>
                </a>
                <span className="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"></span>
              </h3>
            </header>
            <p className="mt-2 text-gray-700 leading-normal">Text</p>
          </section>
          {/* Interests Section 2 */}
          <section className="pb-4 mb-4 border-b-2 break-inside-avoid">
            <header>
              <h3 className="font-semibold text-gray-700 leading-snugish">
                <a href="" className="group">
                  {" "}
                  Technology{" "}
                  <span className="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"></span>
                </a>
                <span className="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"></span>
              </h3>
            </header>
            <p className="mt-2 text-gray-700 leading-normal">Text</p>
          </section>
          {/* Interests Section 3 */}
          <section className="pb-4 mb-4 border-b-2 break-inside-avoid">
            <header>
              <h3 className="font-semibold text-gray-700 leading-snugish">
                <a href="" className="group">
                  {" "}
                  Finance{" "}
                  <span className="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"></span>
                </a>
                <span className="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"></span>
              </h3>
            </header>
            <p className="mt-2 text-gray-700 leading-normal">Text</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default InterestsSection;
