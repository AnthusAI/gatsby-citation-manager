// src/components/Citation.tsx
import React, { useContext, useEffect } from 'react';
import { CitationsContext } from '../context/CitationsContext';
import { CitationData } from '../types/CitationData';

interface CitationProps {
  data: CitationData;
}

const Citation: React.FC<CitationProps> = ({ data }) => {
  const context = useContext(CitationsContext);

  // Check if context is not null before destructuring
  if (!context) {
    // Context is null, meaning the component is likely not wrapped in a CitationsProvider
    console.error('Citation must be used within a CitationsProvider');
    return null; // or return an appropriate fallback UI
  }

  const { addCitation, getCitationNumber } = context;

  // Add the citation data to the context when the component mounts
  useEffect(() => {
    addCitation(data);
  }, []); // Empty dependency array means this effect runs once on mount and not again

  // Get the citation number from the context
  const citationNumber = getCitationNumber(data.title);

  return <sup>[{citationNumber}]</sup>;
};

export default Citation;