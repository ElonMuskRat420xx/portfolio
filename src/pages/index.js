
import SkillsSection from "../components/Main/Skills/Skills";
import About from "../components/Main/About/About"
import Hero from "../components/Main/Hero/Hero";

export default function Connect() {
  return (
    <>
      <main className="font-primary hyphens-manual">
      <div className="p-2 mx-auto my-auto print:border-0 page print:max-w-letter print:mx-0 print:my-o xsm:p-8 sm:p-9 md:p-16 lg:mt-6 lg:mb-6 rounded-2xl print:bg-white ">
        <Hero/>
        <SkillsSection />
        </div>
        </main>
    </>
  );
}
