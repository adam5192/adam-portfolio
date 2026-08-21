import { SiteHeader } from "@/components/SiteHeader";
import { Marquee } from "@/components/Marquee";
import { Hero } from "@/components/Hero";
import { SectionHead } from "@/components/SectionHead";
import { ProjectGrid } from "@/components/ProjectGrid";
import { WORK_META } from "@/lib/projects";

export default function Home() {
  return (
    <div className="relative z-10">
      <main className="mx-auto max-w-[1180px] px-[34px] pt-[42px] pb-[58px] max-md:px-[18px]">
        <SiteHeader />
        <Marquee />

        <div className="mt-[38px]">
          <Hero />
        </div>

        <section id="work">
          <SectionHead title="Selected work" meta={WORK_META} />
          <ProjectGrid />
        </section>
      </main>
    </div>
  );
}
