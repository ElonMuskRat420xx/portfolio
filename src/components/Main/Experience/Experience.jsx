import React from "react";

function ExperienceSection() {
  return (
    <div className="px-2 py-2 mt-2 font-primary" id="about">
      <div className="flex flex-col justify-left items-left">
        <header className="inline-flex items-baseline justify-between w-full align-top border-b-2 mb-3">
          <div className="block">
            <h2 className="mx-auto my-2 text-4xl font-semibold text-gray-700 leading-snugish">
              Experience
            </h2>
          </div>
        </header>
        <div className="my-4 text-2xl font-regular">
          {/* Section 1 */}
          <section className="mb-2 break-inside-avoid">
            <header>
              <h3 className="font-semibold text-gray-650 leading-snugish">
                Dana Petroleum (KNOC)
              </h3>
              <p className="leading-normal text-gray-550">
                June 2018 – August 2018 | Internship
              </p>
            </header>
            <ul className="mx-auto my-2 font-regular text-gray-700 leading-snugish">
              <p>
                My experience working with a north sea oil company based in
                Aberdeen was extremely rewarding. As part of the operations
                team, I was directly involved in creating reference
                documentation and scheduling information for offshore technical
                crews for upcoming maintenance tasks. This involved extensive
                research, data analysis, and other duties related to the needs
                of day-to-day operations.
              </p>
              <p>
                I had the opportunity to work closely with the other team
                members to ensure that the reference documentation and
                scheduling information was accurate and comprehensive. I also
                provided staff members with administrative assistance, such as
                records searching and data analysis. This helped to streamline
                the operations process and ensure that the documentation was
                up-to-date and accurate.
              </p>
              <p>
                In addition to this, I was also responsible for creating the
                bi-annual inspection data for vessel top side pressure safety
                systems. This was a complex and challenging task that required a
                high degree of accuracy and attention to detail. I worked
                diligently to ensure that all the necessary information was
                included and presented in an organized and easy-to-understand
                format.
              </p>
              <p>
                Overall, this internship gave me invaluable insight into the
                operations and management of a large-scale production asset. I
                was able to hone my problem-solving, communication, and
                organizational skills, as well as gain an understanding of the
                regulatory and compliance requirements associated with such an
                operation. It was an incredibly enriching experience, and I am
                grateful for the opportunity to have been part of such a dynamic
                team.
              </p>
            </ul>
          </section>
          {/* Section 2 */}
          <section className="mb-2 break-inside-avoid">
            <header>
              <h3 className="font-semibold text-gray-650 leading-snugish">
                William Grant & Sons LTD (Glenfiddich Distillery)
              </h3>
              <p className="leading-normal text-gray-550">
                June 2017 – August 2017 | Placement
              </p>
            </header>
            <ul className="mx-auto my-2 font-regular text-gray-700 leading-snugish">
              <p>
                During my summer placement with a well-known Speyside distiller,
                I had the opportunity to work closely with the general
                maintenance team and gain practical experience across a wide
                range of responsibilities. One of my main duties was playing a
                significant role in the annual plant shutdown. This involved
                assisting with the inspection and repair of specialized
                machinery and instrumentation across the production space.
              </p>
              <p>
                I was also tasked with the construction of a large steel
                partition wall and sliding door to allow for separation within
                the workspaces. This was a complex and challenging task that
                required a high degree of precision and attention to detail. By
                using my fabrication competencies and ability to carry out
                complex tasks with minimal instruction, I was able to complete
                the task successfully and to a high standard.
              </p>
              <p>
                In addition to this, I was also involved in the day-to-day
                operations of the maintenance team. This included
                troubleshooting and repair of production machinery, as well as
                conducting inspections and testing on the equipment. I had to
                ensure that all safety regulations and guidelines were adhered
                to and that the machinery was functioning properly.
              </p>
              <p>
                Overall, this summer placement gave me invaluable insight into
                the operations and maintenance of a large-scale production
                facility. I was able to hone my problem-solving, fabrication,
                and organizational skills, as well as gain an understanding of
                the regulatory and compliance requirements associated with such
                an operation. It was an incredibly enriching experience, and I
                am grateful for the opportunity to have been part of such a
                dynamic team.
              </p>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
