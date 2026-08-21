"use client";

import type { Project } from "@/lib/projects";
import { Plate } from "./Plate";
import { Tags } from "./Tags";
import { Button } from "./Button";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <>
      {/* sticky so the close button stays reachable while scrolling */}
      <div className="bg-blue text-onink font-mono sticky top-0 z-[8] flex items-center justify-between gap-3 px-4 py-[11px] text-[11px] tracking-[0.1em] uppercase">
        <span>
          {project.wip ? "In progress" : "Shipped"} · {project.kind}
        </span>
        <button
          onClick={onClose}
          aria-label="Close"
          className="cursor-pointer text-[19px] leading-none"
        >
          ✕
        </button>
      </div>

      <div className="px-[26px] pt-6 pb-[30px] max-md:px-[17px]">
        {/* the id the dialog points at with aria-labelledby */}
        <h3
          id="project-modal-title"
          className="font-display mb-[7px] text-[clamp(30px,5vw,48px)] leading-[0.95] font-extrabold tracking-[-0.035em] uppercase"
        >
          {project.title}
        </h3>

        <p className="font-mono text-faint mb-5 text-[11.5px] tracking-[0.09em] uppercase">
          {project.year} | {project.role}
        </p>

        <div className="border-line bg-surface mb-[22px] overflow-hidden rounded border">
          {project.video ? (
            // preload none so six videos dont all start downloading on load
            <video
              controls
              preload="none"
              playsInline
              poster={project.image ?? undefined}
              className="block w-full bg-black"
            >
              <source src={project.video} type="video/mp4" />
            </video>
          ) : (
            <Plate project={project} className="h-[min(46vh,360px)]" />
          )}
        </div>

        <p className="text-body mb-[22px] max-w-[64ch] text-[15.5px] leading-[1.72]">
          {project.description}
        </p>

        <div className="border-line mb-6 grid gap-5 border-t pt-5 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
          <div>
            <h4 className="font-mono text-faint mb-2.5 text-[10.5px] font-normal tracking-[0.13em] uppercase">
              Built with
            </h4>
            <Tags tags={project.tags} />
          </div>
          <div>
            <h4 className="font-mono text-faint mb-2.5 text-[10.5px] font-normal tracking-[0.13em] uppercase">
              Role
            </h4>
            <p className="text-body text-sm leading-[1.62]">{project.role}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {project.live ? (
            <Button href={project.live} variant="fill">
              Visit live ↗
            </Button>
          ) : (
            <Button disabled>Not live yet</Button>
          )}
          <Button href={project.repo}>View code ↗</Button>
        </div>
      </div>
    </>
  );
}
