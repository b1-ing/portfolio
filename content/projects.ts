import type { StatPart } from "./experience";

export type Project = {
  name: string;
  role: string;
  stats: StatPart[];
  description: string;
  screenshot: { src: string; alt: string; placeholder: string };
  /** Links with no URL are hidden. Fill these in once known. */
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    name: "UoMMods",
    role: "· Founder & Developer",
    stats: [
      { value: "~1,000", after: " users · " },
      { value: "5", after: " departments · " },
      { before: "since ", value: "2025" },
    ],
    description:
      "Course-planning platform for University of Manchester students: multi-year planning, prerequisite graphs and module search, with an agentic scraping pipeline (Gemma 3 + Ollama) that extracts programme data from university pages. Led to an invitation to the Deputy CIO's strategic workshop on student systems.",
    screenshot: {
      src: "/images/uommods.png",
      alt: "Screenshot of the UoMMods course planner",
      placeholder: "[UoMMods screenshot, 1600px wide]",
    },
    liveUrl: undefined,
    githubUrl: undefined,
  },
];
