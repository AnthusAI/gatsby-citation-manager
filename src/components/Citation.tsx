import React, { useContext, useEffect } from 'react';
import { CitationsContext } from '../context/CitationsContext';

interface CitationProps {
  source: string;
}

const Citation: React.FC<CitationProps> = ({ source }) => {
  const context = useContext(CitationsContext);

  if (!context) {
    throw new Error('Citation must be used within a CitationsProvider');
  }

  const { addCitation, getCitationNumber } = context;
  
  useEffect(() => {
    // Add citation source to the global list
    addCitation(source);
  }, [source, addCitation]);

  // Get the citation number for display
  const citationNumber = getCitationNumber(source);

  return <span>{`[${citationNumber}]`}</span>;
};

export default Citation;
