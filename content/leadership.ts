import type { StatPart } from "./experience";

export type LeadershipEntry = {
  date: string;
  title: string;
  stats: StatPart[];
  description: string;
};

export const leadership: LeadershipEntry[] = [
  {
    date: "Feb 2026 – now",
    title: "President, Manchester AI Society",
    stats: [
      { value: "2,300+", after: " members · " },
      { value: "+220", after: " active · " },
      { value: "20+", after: " events" },
    ],
    description:
      "Workshops, hackathons and outreach with BNY, UiPath and JetBrains. Led the UoM Network Agent pilot with IT Services and set up a student Red Team to test it against malicious prompts.",
  },
];
