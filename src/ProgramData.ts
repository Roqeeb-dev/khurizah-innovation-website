import type { ElementType } from "react";
import { techData } from "./data/techData";
import { creativeData } from "./data/creativeData";
import { vocationalData } from "./data/vocationalData";

export interface LearningOutcome {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface WeekContent {
  weeks: string;
  title: string;
  topics: string[];
}

export interface Project {
  title: string;
  skillFocus: string;
  outcome: string;
}

export interface Program {
  id: string;
  cover: string;
  icon: ElementType;
  title: string;
  mode: string;
  description: string;
  duration: string;
  skillLevel: string;
  prerequisites: string[];
  learningOutcomes: LearningOutcome[];
  targetAudience: string[];
  programStructure: WeekContent[];
  projects: Project[];
  certificateDescription: string;
  careerApplications: string[];
}

export const programs: Program[] = [
  ...techData,
  ...creativeData,
  ...vocationalData,
];
