import React, { createContext, useState, ReactNode } from 'react';

interface CitationsContextType {
  citations: string[];
  addCitation: (source: string) => void;
  getCitationNumber: (source: string) => number;
}

export const CitationsContext = createContext<CitationsContextType | null>(null);

interface CitationsProviderProps {
  children: ReactNode;
}

export const CitationsProvider: React.FC<CitationsProviderProps> = ({ children }) => {
  const [citations, setCitations] = useState<string[]>([]);

  const addCitation = (source: string) => {
    if (!citations.includes(source)) {
      setCitations([...citations, source]);
    }
  };

  const getCitationNumber = (source: string) => {
    return citations.indexOf(source) + 1;
  };

  return (
    <CitationsContext.Provider value={{ citations, addCitation, getCitationNumber }}>
      {children}
    </CitationsContext.Provider>
  );
};
