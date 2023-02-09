import React from "react";

function InterestsSection() {
  return (
    <div className="px-2 py-2 mt-2 font-primary" id="about">
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
          <section class="pb-4 mb-4 border-b-2 break-inside-avoid">
            <header>
              <h3 class="font-semibold text-gray-700 leading-snugish">
                <a href="" class="group">
                  {" "}
                  Automotive{" "}
                  <span class="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"></span>
                </a>
                <span class="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"></span>
              </h3>
            </header>
            <p class="mt-2 text-gray-700 leading-normal">
              {" "}
              A unique and streamlined developer portfolio site that combines
              the useful aspect of development portfolios with a blog using
              Next.js. Interface is clean and features graphics designed
              personally for use within the site.{" "}
            </p>
          </section>
          {/* Interests Section 2 */}
          <section class="pb-4 mb-4 border-b-2 break-inside-avoid">
            <header>
              <h3 class="font-semibold text-gray-700 leading-snugish">
                <a href="" class="group">
                  {" "}
                  Technology{" "}
                  <span class="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"></span>
                </a>
                <span class="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"></span>
              </h3>
            </header>
            <p class="mt-2 text-gray-700 leading-normal">
              {" "}
              A unique and streamlined developer portfolio site that combines
              the useful aspect of development portfolios with a blog using
              Next.js. Interface is clean and features graphics designed
              personally for use within the site.{" "}
            </p>
          </section>
          {/* Interests Section 3 */}
          <section class="pb-4 mb-4 border-b-2 break-inside-avoid">
            <header>
              <h3 class="font-semibold text-gray-700 leading-snugish">
                <a href="" class="group">
                  {" "}
                  Finance{" "}
                  <span class="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"></span>
                </a>
                <span class="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"></span>
              </h3>
            </header>
            <p class="mt-2 text-gray-700 leading-normal">
              {" "}
              A unique and streamlined developer portfolio site that combines
              the useful aspect of development portfolios with a blog using
              Next.js. Interface is clean and features graphics designed
              personally for use within the site.{" "}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default InterestsSection;
