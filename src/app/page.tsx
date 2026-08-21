import { SiteHeader } from "@/components/SiteHeader";
import { Marquee } from "@/components/Marquee";
import { Hero } from "@/components/Hero";
import { SectionHead } from "@/components/SectionHead";
import { ProjectGrid } from "@/components/ProjectGrid";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { SiteFooter } from "@/components/SiteFooter";
import { WORK_META } from "@/lib/projects";

export default function Home() {
  return (
    // z-10 lifts everything above the grain layer sitting at z-0
    <div id="top" className="relative z-10">
      <main className="mx-auto max-w-[1180px] px-[34px] pt-[42px] pb-[58px] max-md:px-[18px]">
        <SiteHeader />
        <Marquee />

        <div className="mt-[38px]">
          <Hero />
        </div>

        <section id="work" className="scroll-mt-8">
          <SectionHead title="My work" meta={WORK_META} />
          <ProjectGrid />
        </section>

        <section id="about" className="mt-24 scroll-mt-8">
          <SectionHead title="About" meta="Toronto, ON" />
          <About />
        </section>

        <section id="contact" className="mt-24 scroll-mt-8">
          <SectionHead title="Contact" meta="Open to work" />
          <Contact />
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
