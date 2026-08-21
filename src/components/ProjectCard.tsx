"use client";

import type { Project } from "@/lib/projects";
import { Plate } from "./Plate";
import { Tags } from "./Tags";
import { Button } from "./Button";
import { useReveal } from "@/hooks/useReveal";

type ProjectCardProps = {
  project: Project;
  index: number;
  onOpen: () => void;
};

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const featured = project.featured === true;
  const ref = useReveal<HTMLElement>();

  return (
    <article
      ref={ref}
      // stagger each card slightly so they dont all land at once
      style={{ "--reveal-delay": `${index * 0.06}s` } as React.CSSProperties}
      className={[
        "reveal",
        // 12 col grid, half width for featured and quarter for the rest
        featured ? "lg:col-span-6" : "lg:col-span-3",
        featured ? "md:col-span-12" : "md:col-span-6",
        "col-span-12",
        "group/card border-line bg-surface relative flex flex-col overflow-hidden rounded border",
        "hover:-translate-x-[4px] hover:-translate-y-[4px]",
        "hover:shadow-[6px_6px_0_var(--color-pink-raw)]",
        "transition-transform duration-200",
      ].join(" ")}
    >
      <Plate
        project={project}
        className={[
          "border-line border-b",
          featured ? "h-[280px]" : "h-[156px]",
          "max-md:h-[200px]",
        ].join(" ")}
      />

      <button
        onClick={onOpen}
        aria-label={`More about ${project.title}`}
        className="border-line bg-surface text-ink hover:bg-pink hover:text-onink absolute top-[10px] right-[10px] z-[6] grid h-[31px] w-[31px] cursor-pointer place-items-center rounded-full border text-sm font-extrabold transition-all duration-150 hover:scale-110 hover:rotate-6"
      >
        i
      </button>

      {featured && (
        <span className="bg-pink text-onink font-mono absolute top-[10px] left-0 z-[6] rounded-r px-[10px] py-[4px] text-[10px] tracking-[0.12em] uppercase">
          Featured
        </span>
      )}
      {project.wip && (
        <span className="bg-ink text-paper font-mono absolute top-[10px] left-0 z-[6] rounded-r px-[10px] py-[4px] text-[10px] tracking-[0.12em] uppercase">
          In progress
        </span>
      )}

      <div className="bg-blue text-onink group-hover/card:bg-pink font-mono flex items-center justify-between gap-2 px-[13px] py-2 text-[11px] tracking-[0.09em] uppercase transition-colors">
        <span>
          {String(index + 1).padStart(2, "0")} / {project.kind}
        </span>
        <span>{project.year}</span>
      </div>

      <div
        className={`flex flex-1 flex-col ${featured ? "p-5" : "px-[14px] pt-[15px] pb-[17px]"}`}
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
            "text-body mb-[14px] leading-[1.62]",
            featured ? "max-w-[52ch] text-[15px]" : "text-[13.5px]",
          ].join(" ")}
        >
          {project.summary}
        </p>

        <Tags tags={project.tags} limit={featured ? undefined : 4} />

        {featured && (
          // mt-auto pins the buttons to the bottom however short the copy is
          <div className="mt-auto flex flex-wrap items-center gap-2 pt-[15px]">
            {project.live ? (
              <Button href={project.live} variant="fill">
                Live ↗
              </Button>
            ) : (
              <Button disabled>Not live yet</Button>
            )}
            <Button href={project.repo}>Code ↗</Button>
            <Button onClick={onOpen}>Details</Button>
          </div>
        )}
      </div>
    </article>
  );
}
