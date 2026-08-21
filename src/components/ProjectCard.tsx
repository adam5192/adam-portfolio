import type { Project } from "@/lib/projects";
import { Plate } from "./Plate";
import { Tags } from "./Tags";
import { Button } from "./Button";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const featured = project.featured === true;

  return (
    <article
      className={[
        // span-6 = half of 12 cols for featured, span-3 = quarter for the rest
        featured ? "lg:col-span-6" : "lg:col-span-3",
        // tablet: featured goes full width, others go half
        featured ? "md:col-span-12" : "md:col-span-6",
        "col-span-12", // mobile: everything stacks
        "border-ink bg-paper relative flex flex-col overflow-hidden rounded-sm border-2",
        "transition-transform duration-200",
        "hover:-translate-x-[4px] hover:-translate-y-[4px]",
        "hover:shadow-[6px_6px_0_var(--color-pink-raw)]",
        // named group so the plate + band can react to card hover
        "group/card",
      ].join(" ")}
    >
      <Plate
        project={project}
        className={[
          "border-ink border-b-2",
          featured ? "h-[280px]" : "h-[156px]",
          "max-md:h-[200px]",
        ].join(" ")}
      />

      {/* corner flags */}
      {featured && (
        <span className="bg-pink text-onink font-mono absolute top-2.5 left-0 z-6 rounded-r-sm px-2.5 py-1 text-[10px] tracking-[0.12em] uppercase">
          Featured
        </span>
      )}
      {project.wip && (
        <span className="bg-ink text-paper font-mono absolute top-2.5 left-0 z-6 rounded-r-sm px-2.5 py-1 text-[10px] tracking-[0.12em] uppercase">
          In progress
        </span>
      )}

      {/* band - blue normally, pink on card hover.
          note: no mix-blend-mode. it has text in it. */}
      <div className="bg-blue text-onink group-hover/card:bg-pink font-mono flex items-center justify-between gap-2 px-3.25 py-2 text-[11px] tracking-[0.09em] uppercase transition-colors">
        <span>
          {String(index + 1).padStart(2, "0")} / {project.kind}
        </span>
        <span>{project.year}</span>
      </div>

      <div
        className={`flex flex-1 flex-col ${featured ? "p-5" : "px-3.5 pt-3.75 pb-4.25"}`}
      >
        <h3
          className={[
            "font-display mb-2 leading-[1.08] font-extrabold tracking-[-0.02em]",
            featured ? "text-[clamp(26px,3.2vw,34px)]" : "text-[21px]",
          ].join(" ")}
        >
          {project.title}
        </h3>

        <p
          className={[
            "text-body mb-3.5 leading-[1.62]",
            featured ? "max-w-[52ch] text-[15px]" : "text-[13.5px]",
          ].join(" ")}
        >
          {project.summary}
        </p>

        <Tags tags={project.tags} limit={featured ? undefined : 4} />

        {/* featured cards get links inline. mt-auto pins them to
            the bottom no matter how short the copy is */}
        {featured && (
          <div className="mt-auto flex flex-wrap items-center gap-2 pt-3.75">
            {project.live ? (
              <Button href={project.live} variant="fill">
                Live ↗
              </Button>
            ) : (
              <Button disabled>Not live yet</Button>
            )}
            <Button href={project.repo}>Code ↗</Button>
          </div>
        )}
      </div>
    </article>
  );
}
