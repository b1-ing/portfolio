import Image from "next/image";
import type { Project } from "@/content/projects";
import { hasPublicAsset } from "@/lib/assets";
import { StatRow } from "./StatRow";

export function FeaturedProject({ project }: { project: Project }) {
  const { screenshot } = project;
  const hasShot = hasPublicAsset(screenshot.src);

  return (
    <article className="flex flex-col gap-4">
      <div className="overflow-hidden rounded-[10px] border border-border bg-surface">
        <div className="flex h-8 items-center gap-1.5 border-b border-border px-3" aria-hidden="true">
          <span className="size-[9px] rounded-full bg-border" />
          <span className="size-[9px] rounded-full bg-border" />
          <span className="size-[9px] rounded-full bg-border" />
        </div>
        {hasShot ? (
          <div className="relative h-[360px]">
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              fill
              sizes="(min-width: 768px) 720px, 100vw"
              className="object-cover object-top"
            />
          </div>
        ) : (
          <div className="flex h-[360px] items-center justify-center text-[13px] text-muted">
            {screenshot.placeholder}
          </div>
        )}
      </div>
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="m-0 text-xl font-bold">
          {project.name} <span className="font-normal text-muted">{project.role}</span>
        </h3>
        <StatRow parts={project.stats} className="text-[13px]" />
      </div>
      <p className="m-0">{project.description}</p>
      {(project.liveUrl || project.githubUrl) && (
        <div className="flex gap-6 text-[15px] font-medium text-accent">
          {project.liveUrl && (
            <a href={project.liveUrl} className="flex min-h-11 items-center">
              Live site →
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} className="flex min-h-11 items-center">
              GitHub →
            </a>
          )}
        </div>
      )}
    </article>
  );
}
