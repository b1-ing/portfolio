export type ResearchItem = {
  title: string;
  badge: string;
  meta: string;
  finding: string;
  bullets: string[];
  tags: string[];
};

export const research: ResearchItem[] = [
  {
    title: "Backdoor Attacks on Federated Learning Defences",
    badge: "ONGOING",
    meta: "University of Manchester · Dr. Zhipeng Wang, Dr. Mustafa Mustafa · Sep 2026 – present",
    finding:
      "FilterFL's detector mostly measures a client's class skew, so it flags honest clients more reliably than successful attackers.",
    bullets: [
      "Full-image checkerboard trigger evades FilterFL (CCS 2025) and FLTrust (NDSS 2021) while preserving clean accuracy.",
      "One accepted malicious update entrenches the backdoor, which persists under benign training.",
      "Independent reimplementation and controlled ablations on the CSF3 HPC cluster.",
    ],
    tags: ["Federated Learning", "Adversarial ML", "PyTorch", "HPC"],
  },
  {
    title: "LLM-Agent Simulation of Misinformation Spread",
    badge: "2025",
    meta: "DSTA, Singapore · AI Research Intern · Jun – Aug 2025",
    finding: "82% accuracy hid a fidelity gap: LLM agents amplified emotionally charged posts that real users ignored.",
    bullets: [
      "Simulated hundreds of Reddit users on the open-source OASIS framework.",
      "Designed agent personas and a mock recommendation algorithm; tracked per-post engagement to study virality.",
    ],
    tags: ["LLM Agents", "Social Simulation", "OASIS"],
  },
];
