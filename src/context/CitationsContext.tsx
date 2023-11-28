// src/context/CitationsContext.tsx
import React, { createContext, useState, ReactNode } from 'react';
import { CitationData } from '../types/CitationData';

interface CitationsContextType {
  citations: CitationData[];
  addCitation: (data: CitationData) => void;
  getCitationNumber: (title: string) => number;
}

export const CitationsContext = createContext<CitationsContextType | null>(null);

interface CitationsProviderProps {
  children: ReactNode;
}

export const CitationsProvider: React.FC<CitationsProviderProps> = ({ children }) => {
  const [citations, setCitations] = useState<CitationData[]>([]);

  const addCitation = (data: CitationData) => {
    setCitations((prevCitations) => [...prevCitations, data]);
  };

  const getCitationNumber = (title: string) => {
    return citations.findIndex(citation => citation.title === title) + 1;
  };

  return (
    <CitationsContext.Provider value={{ citations, addCitation, getCitationNumber }}>
      {children}
    </CitationsContext.Provider>
  );
};