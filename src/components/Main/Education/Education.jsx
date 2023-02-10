import React from "react";

function EducationSection() {
  return (
    <div className="px-2 py-2 mt-2 font-primary" id="education">
      <div className="flex flex-col justify-left items-left">
        <header className="inline-flex items-baseline justify-between w-full align-top border-b-2 mb-3">
          <div className="block">
            <h2 className="mx-auto my-2 text-4xl font-semibold text-gray-700 leading-snugish">
              Education
            </h2>
          </div>
        </header>
        <div className="grid grid-cols-2 sm:grid-cols-1 text-xl">
          {/* Education Section 1 */}
          <section className="pb-2 mt-2 mb-2 break-inside-avoid">
            <header>
              <h3 className="flex-grow font-semibold text-gray-700 leading-snugish">
                {" "}
                University Of Aberdeen
              </h3>
              <p className="leading-normal  text-gray-550"> 2017 | 2021</p>
            </header>
            <p className="leading-normal  text-gray-650">
              <span className="font-semibold text-gray-650 leading-snugish">
                B-Eng Mechancial Engineering
              </span>
            </p>
          </section>
          {/* Education Section 2 */}
          <section className="pb-2 mt-2 mb-2 break-inside-avoid">
            <header>
              <h3 className="flex-grow font-semibold text-gray-700 leading-snugish">
                {" "}
                North East Scotland College
              </h3>
              <p className="leading-normal  text-gray-550"> 2016 | 2017</p>
            </header>
            <p className="leading-normal  text-gray-650">
              <span className="font-semibold text-gray-650 leading-snugish">
                HNC Electrical Engineering
              </span>
            </p>
          </section>
          {/* Education Section 3 */}
          <section className="pb-2 mt-2 mb-2 break-inside-avoid">
            <header>
              <h3 className="flex-grow font-semibold text-gray-700 leading-snugish">
                {" "}
                ScotCan Offshore Technology Ltd
              </h3>
              <p className="leading-normal  text-gray-550"> 2014 | 2017</p>
            </header>
            <p className="leading-normal  text-gray-650">
              <span className="font-semibold text-gray-650 leading-snugish">
                Apprenticeship Light Motor Vehicle Technician
              </span>
            </p>
          </section>
          {/* Education Section 4 */}
          <section className="pb-2 mt-2 mb-2 break-inside-avoid">
            <header>
              <h3 className="flex-grow font-semibold text-gray-700 leading-snugish">
                {" "}
                North East Scotland College
              </h3>
              <p className="leading-normal  text-gray-550"> 2014 | 2016</p>
            </header>
            <p className="leading-normal  text-gray-650">
              <span className="font-semibold text-gray-650 leading-snugish">
                HND Mechancial Engineering
              </span>
            </p>
          </section>
          {/* Education Section 5 */}
          <section className="pb-2 mt-2 mb-2 break-inside-avoid">
            <header>
              <h3 className="flex-grow font-semibold text-gray-700 leading-snugish">
                {" "}
                Robert Gordon's College
              </h3>
              <p className="leading-normal  text-gray-550"> 2010 | 2014 </p>
            </header>
            <p className="leading-normal  text-gray-650">
              <span className="font-semibold text-gray-650 leading-snugish"></span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default EducationSection;
