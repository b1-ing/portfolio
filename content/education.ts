import type { StatPart } from "./experience";

export type EducationEntry = {
  date: string;
  institution: string;
  degree: string;
  stats: StatPart[];
  modules: string;
};

export const education: EducationEntry[] = [
  {
    date: "2024 – 2027",
    institution: "University of Manchester",
    degree: "BSc Computer Science with Honours · First Class expected",
    stats: [{ before: "Ranked ", value: "1st", after: " of ~250 in Year 2 · average " }, { value: "89.6%" }],
    modules: "Machine Learning 98% · Intro to AI 90% · Distributed Systems 90% · Algorithms & Data Structures 87%",
  },
];
