export interface CitationData {
    id?: string;
    type: string;
    title: string;
    URL?: string;
    accessed?: {
      'date-parts': number[][]
    };
    author?: {
      family: string;
      given: string;
    }[];
    'container-title'?: string;
    issued?: {
      'date-parts': number[][]
    };
    keywords?: string[];
  }