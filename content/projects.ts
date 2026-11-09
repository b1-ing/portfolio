import type { StatPart } from "./experience";

export type Project = {
  name: string;
  role: string;
  stats: StatPart[];
  /** Paragraph and/or bullet list; either may be omitted. */
  description?: string;
  bullets?: string[];
  media: {
    /** Path under /public without an extension. Drop in <base>.png/.jpg/.webp/.gif/.mp4/.webm and it is picked up. */
    base: string;
    alt: string;
    placeholder: string;
    /** CSS aspect-ratio of the media, e.g. "16 / 9". Reserves space so nothing shifts. */
    aspect: string;
  };
  /** Clicking the media or title opens this. Links with no URL are hidden. */
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
    media: {
      base: "/images/uommods",
      alt: "Screenshot of the UoMMods course planner",
      placeholder: "[UoMMods screenshot, 1600px wide]",
      aspect: "1200 / 643",
    },
    liveUrl: "https://uommods.vercel.app/",
    githubUrl: undefined,
  },
  {
    name: "Poker-Bot Competition Platform",
    role: "· GreatUniHack Manchester",
    stats: [
      { before: "Nov 2026 · ", value: "73", after: " teams · " },
      { value: "247", after: " participants" },
    ],
    bullets: [
      "Co-built the platform for a poker-bot competition run as part of GreatUniHack Manchester, drawing 73 teams and 247 participants.",
      "Extended the evaluation backend with game-state logging and robustness and safety checks for untrusted submissions, and added cross-platform support across Windows and Linux.",
      "Built the platform's React frontend, including a delayed live-stream of the final round for a real-time feel, and kept the frontend and backend in sync throughout.",
      "Designed the competition format (two rounds, fixed hand counts) and served as sole judge on event day, handling all submissions and executing matches on an HPC cluster.",
    ],
    media: {
      base: "/images/pokerbot",
      alt: "Poker-Bot Competition Platform",
      placeholder: "[Poker-bot image, GIF or MP4]",
      aspect: "16 / 9",
    },
    liveUrl: "https://poker-arena-site.vercel.app/#/",
    githubUrl: undefined,
  },
];
