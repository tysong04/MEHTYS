export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: 'In Development' | 'Prototype' | 'Research' | 'Planned';
  category: string;
  accessNotice: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: 'code-bridge',
    name: 'Code Bridge',
    tagline: 'Developer Tooling',
    description: 'A code translation tool designed to help developers translate code between programming languages.',
    status: 'In Development',
    category: 'Developer Tools',
    accessNotice: 'Access link will be available soon.',
  },
  {
    id: 'satquery-ai',
    name: 'SatQuery AI',
    tagline: 'Earth Observation & AI',
    description: 'A satellite-data exploration and analysis project using natural-language queries.',
    status: 'Prototype',
    category: 'Applied AI',
    accessNotice: 'Access link will be available soon.',
  },
  {
    id: 'octonote',
    name: 'Octonote',
    tagline: 'Conversation Intelligence',
    description: 'A knowledge organizer designed to extract and organize useful information from chat conversations.',
    status: 'Prototype',
    category: 'Knowledge Systems',
    accessNotice: 'Access link will be available soon.',
  },
  {
    id: 'ai-job-assistant',
    name: 'AI Job Assistant',
    tagline: 'Workflow Automation',
    description: 'A project focused on simplifying job discovery and application workflows.',
    status: 'In Development',
    category: 'Productivity',
    accessNotice: 'Access link will be available soon.',
  },
  {
    id: 'deleg-ai',
    name: 'Deleg-AI',
    tagline: 'Work Distribution',
    description: "An intelligent task delegation concept for matching work with people's skills.",
    status: 'Planned',
    category: 'Coordination Systems',
    accessNotice: 'Access link will be available soon.',
  },
  {
    id: 'instant-workers',
    name: 'Instant Workers',
    tagline: 'Platform Concept',
    description: 'A platform concept connecting customers with skilled local workers.',
    status: 'Planned',
    category: 'Marketplace Systems',
    accessNotice: 'Access link will be available soon.',
  },
];
