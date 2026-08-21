import { SiteHeader } from "@/components/SiteHeader";
import { Marquee } from "@/components/Marquee";
import { Hero } from "@/components/Hero";
import { SectionHead } from "@/components/SectionHead";
import { WORK_META } from "@/lib/projects";

export default function Home() {
  return (
    <div className="relative z-10">
      <main className="mx-auto max-w-295 px-8.5 pt-10.5 pb-14.5">
        <SiteHeader />
        <Marquee />

        <div className="mt-9.5">
          <Hero />
        </div>

        {/* The id is what the header's #work link scrolls to */}
        <section id="work">
          <SectionHead title="Selected work" meta={WORK_META} />
          <p className="text-faint font-mono text-sm">
            Project grid goes here next.
          </p>
        </section>
      </main>
    </div>
  );
}
