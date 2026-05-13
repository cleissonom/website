import type { ProjectEntry } from "@/lib/content"

type ProjectWithStage = Pick<ProjectEntry, "stage">

export function isProjectDetailAvailable(project: ProjectWithStage): boolean {
  return project.stage !== "in-progress"
}
