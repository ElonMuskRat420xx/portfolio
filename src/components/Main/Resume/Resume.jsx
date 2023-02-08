import React from "react";

function CV() {
  return (
    <main className="font-primary hyphens-manual">
      <div className="max-w-7xl p-2 mx-auto my-auto print:border-0 page print:max-w-letter print:mx-0 print:my-o md:max-w-letter xsm:p-8 sm:p-9 md:p-16 lg:mt-6 lg:mb-6 rounded-2xl print:bg-white ">
        <header className="inline-flex items-baseline justify-between w-full align-top border-b-2 mb-3">
          <div className="block">
            <h1 className="mb-0 text-5xl font-bold text-gray-750">
              {" "}
              Gregor L K Nelson{" "}
            </h1>
            {/*Job Title-------------------------------------------------------------------------------------------------------*/}
            <h2 className="m-0 ml-2 text-2xl font-semibold text-gray-700 leading-snugish">
              {" "}
              Mechanical &amp; Electrical Engineering Technician{" "}
            </h2>
            {/*Location -------------------------------------------------------------------------------------------------------*/}
            <h3 className="m-0 mt-2 ml-2 mb-2 font-semibold text-md text-gray-550 leading-snugish">
              {" "}
              Aberdeenshire, Scotland (AB54){" "}
            </h3>
          </div>
          <div
            className="justify-between px-2 mt-0 mb-5 text-3xl font-bold leading-none text-gray-200 initials-container bg-gray-750 print:bg-black"
            style={{ paddingBottom: "1.5rem", paddingTop: "1.5rem" }}
          >
            <div className="text-center initial">G</div>
            <div className="text-center initial">L</div>
            <div className="text-center initial">K</div>
          </div>
        </header>
        <div className="col-gap-16 md:col-count-2 print:col-count-2 col-fill-balance">
          {/*-----------------------------------------------------------------------------------*/}
          {/* Contact Information --------------------------------------------------------------*/}
          {/*-----------------------------------------------------------------------------------*/}
          <section className="pb-2 mt-2 first:mt-0">
            <div className="break-inside-avoid">
              <section className="pb-2 border-b-2 break-inside-avoid">
                <ul className="list-inside pr-2 grid grid-cols-2">
                  <li className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700">
                    <a href="tel:+447398462887">
                      <span className="text-lg font-semibold text-gray-700 leading-snugish">
                        Phone:{" "}
                      </span>
                      +44 7398462887{" "}
                    </a>
                  </li>
                  <li className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700">
                    <a href="mailto:gnelson684@gmail.com" className="group">
                      <span className="text-lg font-semibold text-gray-700 leading-snugish">
                        Email:{" "}
                      </span>
                      gnelson684@gmail.com{" "}
                      <span className="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"></span>
                    </a>
                  </li>
                  <li className="mt-2 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700">
                    <span className="text-lg font-semibold text-gray-700 leading-snugish">
                      Nationality:{" "}
                    </span>
                    GB, CA &amp; AU
                  </li>
                  <li className="mt-2 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700">
                    <span className="text-lg font-semibold text-gray-700 leading-snugish">
                      Portfolio:{" "}
                    </span>
                    <a href="https://glkn.xyz">https://glkn.xyz</a>
                  </li>
                </ul>
              </section>
            </div>
          </section>
          {/*-----------------------------------------------------------------------------------*/}
          {/*Summary ---------------------------------------------------------------------------*/}
          {/*-----------------------------------------------------------------------------------*/}
          <section className="pb-2 mt-2 border-b-2 first:mt-0">
            <div className="break-inside-avoid">
              <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
                {" "}
                SUMMARY{" "}
              </h2>
              <section className="mb-2 break-inside-avoid">
                <p className="mt-2 leading-normal text-gray-700 text-md"></p>
                <ul className="mt-2.1 text-md text-gray-700 leading-normal">
                  <li className="pb-2">
                    Highly motivated and skilled engineering technician, Eager
                    to apply technical expertise and problem-solving skills to a
                    challenging and dynamic career. Strong foundation in
                    engineering principles and practical experience gained
                    through internships and projects, confident abilities to
                    make valuable contributions to any team. Proactive and
                    detail-oriented, with excellent communication and analytical
                    skills. Constantly seeking opportunities to learn and grow
                    with a strong desire to take on new challenges and
                    responsibilities.
                  </li>
                  <li className="pb-2">
                    {" "}
                    Diverse range of skills in several applied mechanical and
                    electrical aspects at a practical level. Practised command
                    in the general inspection, maintenance and repair across a
                    range of mechanized systems.{" "}
                  </li>
                  <li>
                    {" "}
                    Robust computational literacy with a diverse knowledge base,
                    including proficiency in scripting, markup, shell, and
                    command languages. Adept in agile methodologies and
                    programming best practices, as well as familiarity with
                    multiple operating systems, software development tools, and
                    networking concepts.{" "}
                  </li>
                </ul>
                <p />
              </section>
            </div>
          </section>
          {/*-----------------------------------------------------------------------------------*/}
          {/*Experience -------------------------------------------------------------------------*/}
          {/*-----------------------------------------------------------------------------------*/}
          <section className="pb-2 mt-2 border-b-2 first:mt-0">
            <div>
              <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
                {" "}
                EXPERIENCE{" "}
              </h2>
              <section className="mb-2 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-650 leading-snugish">
                    {" "}
                    Undergraduate Engineering Placement{" "}
                  </h3>
                  <p className="leading-normal text-md text-gray-550">
                    {" "}
                    June 2018 – September 18 | Dana Petroleum{" "}
                  </p>
                </header>
                <ul className="mt-2.1 text-md text-gray-700 leading-normal">
                  <li>
                    <span className="transform -translate-y-px select-none text-gray-550" />
                    <ul>
                      <li className="pb-2">
                        {" "}
                        Internship for a north sea oil company based in
                        Aberdeen. Working alongside colleagues within the
                        operations team for a key production asset.
                      </li>
                      <li className="pb-2">
                        {" "}
                        Planned and improved reference documentation for
                        offshore technical crews for upcoming maintenance tasks.
                        Directly involved in the creation of scheduling and
                        reference information that formed part of the bi-annual
                        inspection data for vessel top side pressure safety
                        systems.{" "}
                      </li>
                      <li>
                        {" "}
                        Provided staff members administrative assistance with
                        records searching, data analysis, and other tasks
                        related to the needs of day-to-day operations.
                      </li>
                    </ul>
                  </li>
                </ul>
              </section>
              <section className="mb-2 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-650 leading-snugish">
                    {" "}
                    Placement-Workshop Maintenance Technician{" "}
                  </h3>
                  <p className="leading-normal text-md text-gray-550">
                    {" "}
                    May 2017 – August 17 | William Grant &amp; Sons{" "}
                  </p>
                </header>
                <ul className="mt-2.1 text-md text-gray-700 leading-normal">
                  <li>
                    <span className="transform -translate-y-px select-none text-gray-550" />
                    <ul>
                      <li className="pb-2">
                        {" "}
                        Summer placement work for a well known Speyside
                        distiller. Working closely with the general maintenance
                        team on site. Received practical experience across a
                        wide range of responsibilities.{" "}
                      </li>
                      <li className="pb-2">
                        {" "}
                        Played significant role in an annual plant shutdown.
                        Assisted with the inspection and repair of specialized
                        machinery and instrumentation across the production
                        space.
                      </li>
                      <li className="    ">
                        {" "}
                        Tasked with construction of a large steel partition wall
                        and sliding door to allow for separation within the
                        workspaces. Recognized for fabrication competencies and
                        ability to carry out complex tasks with minimal
                        instruction.
                      </li>
                    </ul>
                  </li>
                </ul>
              </section>
              <section className="mb-2 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-650 leading-snugish">
                    {" "}
                    Workshop Mechancial Technician{" "}
                  </h3>
                  <p className="leading-normal text-md text-gray-550">
                    {" "}
                    June 2015 – August 15 | KD Marine Ltd{" "}
                  </p>
                </header>
                <ul className="mt-2.1 text-md text-gray-700 leading-normal">
                  <li>
                    <span className="transform -translate-y-px select-none text-gray-550" />
                    <p className="pb-2">
                      {" "}
                      Summer placement work for an Aberdeen based offshore dive
                      services firm. Working closely in a small team. Received
                      hands on experience in a wide range of tasks.
                    </p>
                    <p>
                      {" "}
                      Assisted in the construction of bespoke surface control
                      panels. Aided in the servicing and maintenance tasks of
                      standby vessels and daughter craft. Supported with light
                      modification and repair of dive launch &amp; recovery
                      framing. General workshop logistics, repair and
                      maintenance duties.{" "}
                    </p>
                  </li>
                </ul>
              </section>
              <section className="mb-2 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold text-gray-650 leading-snugish">
                    {" "}
                    Landscaping &amp; Grounds Keeper{" "}
                  </h3>
                  <p className="leading-normal text-md text-gray-550">
                    {" "}
                    May 2014 – August 14 | Classic Abode{" "}
                  </p>
                </header>
                <ul className="mt-2.1 text-md text-gray-700 leading-normal">
                  <li>
                    <span className="transform -translate-y-px select-none text-gray-550" />
                    <p className="pb-2">
                      {" "}
                      Seasonal worker for a small landscaping company. Assisting
                      the owner in a variety of groundworks projects, including
                      land clearing and levelling, Re-seeding and turfing,
                      Construction of patios and decks, Slabbing pathways and
                      general gardening.
                    </p>
                    <p>
                      {" "}
                      Recognized for a strong work ethic and the ability to deal
                      with customers in a courteous and professional manner.{" "}
                    </p>
                  </li>
                </ul>
              </section>
            </div>
          </section>
          {/*-----------------------------------------------------------------------------------*/}
          {/*Education -------------------------------------------------------------------------*/}
          {/*-----------------------------------------------------------------------------------*/}
          <section className="pb-2 mt-2 border-b-2 first:mt-0">
            <div className="break-inside-avoid">
              <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
                {" "}
                EDUCATION{" "}
              </h2>
              <section className="pb-2 mt-2 mb-2 border-b-2 break-inside-avoid">
                <header>
                  <h3 className="flex-grow text-lg font-semibold text-gray-700 leading-snugish">
                    {" "}
                    Robert Gordon's College{" "}
                  </h3>
                  <p className="leading-normal text-md text-gray-550">
                    {" "}
                    2010 – 2014{" "}
                  </p>
                </header>
              </section>
              {/*-----------------------------------------------------------------------------------*/}
              <section className="pb-2 mt-2 mb-2 border-b-2 break-inside-avoid">
                <header>
                  <h3 className="flex-grow text-lg font-semibold text-gray-700 leading-snugish">
                    {" "}
                    North East Scotland College{" "}
                  </h3>
                  <p className="leading-normal text-md text-gray-550">
                    <span className="font-semibold text-gray-700 text-md leading-snugish" />{" "}
                    HND Mechancial Engineering 2014 – 2016
                  </p>
                </header>
              </section>
              {/*-----------------------------------------------------------------------------------*/}
              <section className="pb-2 mt-2 mb-2 border-b-2 break-inside-avoid">
                <header>
                  <h3 className="flex-grow text-lg font-semibold text-gray-700 leading-snugish">
                    {" "}
                    ScotCan Offshore Technology Ltd{" "}
                  </h3>
                  <p className="leading-normal text-md text-gray-550">
                    <span className="font-semibold text-gray-700 text-md leading-snugish" />{" "}
                    Apprenticeship Light Motor Vehicle Technician L3 2014 – 2017
                  </p>
                </header>
              </section>
              {/*-----------------------------------------------------------------------------------*/}
              <section className="pb-2 mt-2 mb-2 border-b-2 break-inside-avoid">
                <header>
                  <h3 className="flex-grow text-lg font-semibold text-gray-700 leading-snugish">
                    {" "}
                    North East Scotland College{" "}
                  </h3>
                  <p className="leading-normal text-md text-gray-550">
                    <span className="font-semibold text-gray-700 text-md leading-snugish" />{" "}
                    HNC Electrical Engineering 2016 – 2017
                  </p>
                </header>
              </section>
              {/*-----------------------------------------------------------------------------------*/}
              <section className="mt-2 break-inside-avoid">
                <header>
                  <h3 className="flex-grow text-lg font-semibold text-gray-700 leading-snugish">
                    {" "}
                    University Of Aberdeen{" "}
                  </h3>
                </header>
                <p className="leading-normal text-md text-gray-550">
                  <span className="font-semibold text-gray-700 text-md leading-snugish" />{" "}
                  B-Eng Mechancial Engineering 2017 | 2021
                </p>
              </section>
            </div>
          </section>
          {/*-----------------------------------------------------------------------------------*/}
          {/*Projects---------------------------------------------------------------------------*/}
          {/*-----------------------------------------------------------------------------------*/}
          {/* <section className="pb-4 mt-4 border-b-2 first:mt-0"><div className="break-inside-avoid"><h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal"> PROJECTS </h2><section className="pb-2 mb-2 break-inside-avoid"><header><h3 className="text-lg font-semibold text-gray-700 leading-snugish"><a href="https://glk-nelson.xyz" className="group"> Portfolio Website <span className="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"> ↗ </span></a><span className="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"><a href="https://glk-nelson.xyz"><i className="fab fa-github"></i></a></span></h3><p className="leading-normal text-md text-gray-550"> Since 2022 | JSX, React, Next.js, ThreeJS, Tailwind, MDX </p></header><p className="mt-2.1 text-md text-gray-700 leading-normal"> A unique and streamlined personal portfolio site built using Next.js. Interface is clean and features graphics designed personally for use within the site. </p></section></div></section> */}
          {/*Skills-----------------------------------------------------------------------------*/}
          {/*-----------------------------------------------------------------------------------*/}
          <section className="pb-2 mt-2 first:mt-0">
            <div className="break-inside-avoid">
              <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
                {" "}
                SKILLS{" "}
              </h2>
              <section className="mb-2 break-inside-avoid">
                <header>
                  <h3 className="font-semibold text-gray-700 text-lg leading-snugish">
                    {" "}
                    Mechanical{" "}
                  </h3>
                </header>
                <div className="my-1 last:pb-1">
                  <ul className="flex flex-wrap text-mb leading-relaxed -mr-1.6 -mb-1 gap-2">
                    <li className="px-2.5 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                      {" "}
                      Metalworking &amp; Fabrication{" "}
                    </li>
                    <li className="px-2.5 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                      {" "}
                      GMAW/GTAW/SMAW Welding{" "}
                    </li>
                    <li className="px-2.5 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                      {" "}
                      Manual Machining{" "}
                    </li>
                  </ul>
                </div>
              </section>
              <section className="mb-2 break-inside-avoid">
                <header>
                  <h3 className="font-semibold text-gray-700 text-lg leading-snugish">
                    {" "}
                    Engineering{" "}
                  </h3>
                </header>
                <div className="my-1 last:pb-1">
                  <ul className="flex flex-wrap text-mb leading-relaxed -mr-1.6 -mb-1 gap-2">
                    <li className="px-2.5 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                      {" "}
                      Solidworks{" "}
                    </li>
                    <li className="px-2.5 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                      {" "}
                      AutoCAD{" "}
                    </li>
                    <li className="px-2.5 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                      {" "}
                      Fusion 360{" "}
                    </li>
                    <li className="px-2.5 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                      {" "}
                      Matlab/Simulink{" "}
                    </li>
                  </ul>
                </div>
              </section>
              <section className="mb-2 break-inside-avoid">
                <header>
                  <h3 className="font-semibold text-gray-700 text-lg leading-snugish">
                    {" "}
                    Programming &amp; Web Devolpment{" "}
                  </h3>
                </header>
                <div className="my-1 last:pb-1">
                  <ul className="flex flex-wrap text-mb leading-relaxed -mr-1.6 -mb-1 gap-2">
                    <li className="px-2.5 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                      {" "}
                      HTML/CSS{" "}
                    </li>
                    <li className="px-2.5 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                      {" "}
                      Javascript{" "}
                    </li>
                    <li className="px-2.5 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                      {" "}
                      React/Next.JS{" "}
                    </li>
                    <li className="px-2.5 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                      {" "}
                      Python{" "}
                    </li>
                    <li className="px-2.5 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                      {" "}
                      Virtualization/Containers{" "}
                    </li>
                    <li className="px-2.5 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                      {" "}
                      Git/Version Control{" "}
                    </li>
                    <li className="px-2.5 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                      {" "}
                      Linux/Unix CLI{" "}
                    </li>
                    <li className="px-2.5 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                      {" "}
                      Nginx/Apache{" "}
                    </li>
                    <li className="px-2.5 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                      {" "}
                      Bash/Powershell{" "}
                    </li>
                    <li className="px-2.5 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250">
                      {" "}
                      Neovim/Vi
                    </li>
                  </ul>
                </div>
              </section>
              {/*-----------------------------------------------------------------------------------*/}
              <section className="mt-2 first:mt-0">
                <div className="break-inside-avoid">
                  <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
                    {" "}
                    PERSONAL INTERESTS{" "}
                  </h2>
                  <section className="mb-2 break-inside-avoid">
                    <header>
                      <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                        {" "}
                        Automotive{" "}
                      </h3>
                    </header>
                    <ul className="mt-1 text-md text-gray-700 leading-normal">
                      <li>
                        <span className="transform -translate-y-px select-none text-gray-550" />
                        <p>
                          {" "}
                          Vehicle Restoration, Repair, Maintenance &amp;
                          Diagnosis{" "}
                        </p>
                      </li>
                    </ul>
                  </section>
                  <section className="mb-2 break-inside-avoid">
                    <header>
                      <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                        {" "}
                        Finance{" "}
                      </h3>
                    </header>
                    <ul className="mt-1 text-md text-gray-700 leading-normal">
                      <li>
                        <span className="transform -translate-y-px select-none text-gray-550" />
                        <p> Macro Economics, Trading &amp; Investing </p>
                      </li>
                    </ul>
                  </section>
                  <section className="mb-2 break-inside-avoid">
                    <header>
                      <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                        {" "}
                        Technology{" "}
                      </h3>
                    </header>
                    <ul className="mt-1 text-md text-gray-700 leading-normal">
                      <li>
                        <span className="transform -translate-y-px select-none text-gray-550" />
                        <p>
                          {" "}
                          Classical Computing, FOSS Software, Linux, Programming{" "}
                        </p>
                      </li>
                    </ul>
                  </section>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default CV;
