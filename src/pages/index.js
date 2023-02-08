
import SkillsSection from "../components/Main/Skills/Skills";
import ExperienceSection from "../components/Main/Experience/Experience";
import EducationSection from "../components/Main/Education/Education";
import InterestsSection from "../components/Main/Interests/Interests";
import AboutSection from "../components/Main/About/Hero";

export default function Connect() {
  return (
    <>
      <main className="font-primary hyphens-manual">
        <div className="max-w-7xl p-2 mx-auto my-auto print:border-0 page print:max-w-letter print:mx-0 print:my-o md:max-w-letter xsm:p-8 sm:p-9 md:p-16 lg:mt-6 lg:mb-6 print:bg-white ">
          <AboutSection/>
          <SkillsSection />
          <ExperienceSection/>
          <EducationSection/>
          <InterestsSection/>
        </div>
      </main>
    </>
  );
}
