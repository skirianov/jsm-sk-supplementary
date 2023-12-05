export interface Job {
  id: number,
  uuid: string,
  description: string,
  title: string,
  city: string,
  country: string,
  selectionProcess: string,
  education: string,
  experience: number,
  benefits: string,
  requirements: string,
  referralFee: number,
  maxSalary: number,
  minSalary: number,
  maxEquity: number | null,
  minEquity: number | null,
  state: string,
  isRemote: boolean,
  type: string,
  isPaused: boolean,
  pausedAt: string | null,
  createdAt: string,
  updatedAt: string,
  tags: string[],
  company: {
    name: string,
    logo: string,
    uuid: string,
  },
  inJobBoard: boolean,
  isJobBoardFeatured: boolean,
}

export interface JobBoard {
  positions: Job[],
  affiliateId: string,
}

export interface SkillLevel {
  1: "Junior",
  2: "Mid",
  3: "Senior",
  4: "Lead",
}
