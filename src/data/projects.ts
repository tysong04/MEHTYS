export interface ProductItem {
  id: string;
  name: string;
  acronym?: string;
  category: string;
  description: string;
  status: 'In Development' | 'Prototype' | 'Research' | 'Planned';
  accessNotice: string;
}

export const productsData: ProductItem[] = [
  {
    id: 'mtcodebridge',
    name: 'MTCodeBridge (MTCB)',
    acronym: 'MTCB',
    category: 'Developer Tool',
    description: 'A developer tool designed to translate code between programming languages while helping users understand the translated output.',
    status: 'In Development',
    accessNotice: 'Access link will be available soon.',
  },
  {
    id: 'mtnote',
    name: 'MTnote',
    category: 'Knowledge Organizer',
    description: 'A knowledge organizer designed to extract, organize and retrieve useful information from exported chat conversations.',
    status: 'In Development',
    accessNotice: 'Access link will be available soon.',
  },
];
