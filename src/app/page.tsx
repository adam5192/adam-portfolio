import { SiteHeader } from "@/components/SiteHeader";
import { Marquee } from "@/components/Marquee";

export default function Home() {
  return (
    <div className="relative z-10">
      <main className="mx-auto max-w-295 px-8.5 pt-10.5 pb-14.5">
        <SiteHeader />
        <Marquee />

        <div className="mt-10">
          <h1 className="font-display text-6xl font-extrabold tracking-tight uppercase">
            Lorem ipsum.
          </h1>
          <p className="text-body mt-4 max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
      </main>
    </div>
  );
}
