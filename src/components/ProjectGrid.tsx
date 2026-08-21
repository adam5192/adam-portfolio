"use client";

import { PROJECTS } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { Modal } from "./Modal";
import { ProjectModal } from "./ProjectModal";
import { useModal } from "@/hooks/useModal";

export function ProjectGrid() {
  const { openSlug, isOpen, open, close } = useModal();
  const active = PROJECTS.find((p) => p.slug === openSlug);

  return (
    <>
      {/* 12 cols because it divides by 2 3 4 and 6 */}
      <div className="grid grid-cols-12 gap-4">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={i}
            onOpen={() => open(project.slug)}
          />
        ))}
      </div>

      <Modal isOpen={isOpen} onClose={close} labelledBy="project-modal-title">
        {active && <ProjectModal project={active} onClose={close} />}
      </Modal>
    </>
  );
}
