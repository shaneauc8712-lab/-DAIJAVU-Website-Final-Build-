
export interface DiagnosticFormData {
  name: string;
  email: string;
  companyName: string;
  goal: 'Build' | 'Fix' | 'Scale' | 'Unclear' | '';
  timeline: string;
  winSummary: string;
  role?: string;
  website?: string;
  phone?: string;
  source: string;
}

export interface OutcomeCard {
  title: string;
  description: string;
  tag: string;
  icons: string[];
}

export interface TimelineStep {
  phase: string;
  definition: string;
  output: string;
}

export interface BlogPost {
  title: string;
  tag: string;
  date: string;
}
