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
            <p className="mt-2 text-gray-700 leading-normal">
              I have a long-standing interest in restoring and maintaining
              vehicles. I have a strong knowledge of the inner workings of
              vehicles, and I am adept at restoring them to their original
              condition. I am experienced in performing repairs and maintenance,
              as well as diagnosing and troubleshooting any issues that may
              arise. My passion for this field has enabled me to continually
              strive to improve my knowledge and skills, and I take great
              satisfaction in seeing vehicles return to full working order.
            </p>
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
            <p className="mt-2 text-gray-700 leading-normal">
              {" "}
              A unique and streamlined developer portfolio site that combines
              the useful aspect of development portfolios with a blog using
              Next.js. Interface is clean and features graphics designed
              personally for use within the site.{" "}
            </p>
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
            <p className="mt-2 text-gray-700 leading-normal">
              I have a keen interest in macro economics, trading and investing.
              I stay abreast of the latest trends and developments in the field
              and I am passionate about understanding the effects of global
              markets on businesses and individuals. I am knowledgeable in
              researching and analyzing economic data, and I am well-versed in
              the principles of trading and investing. I take great pride in
              being able to apply my knowledge and understanding to make
              informed decisions, and I am committed to continuing to develop my
              skills in this area.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default InterestsSection;
