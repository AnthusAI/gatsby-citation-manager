import React, { useContext } from 'react';
import { CitationsContext } from '../context/CitationsContext';

const CitationsList: React.FC = () => {
  const context = useContext(CitationsContext);

  // Check if context is not null before destructuring
  if (!context) {
    // Context is null, meaning the component is likely not wrapped in a CitationsProvider
    console.error('CitationsList must be used within a CitationsProvider');
    return null; // or return an appropriate fallback UI
  }

  const { citations } = context;

  return (
    <div>
      <h2>References</h2>
      <ol>
        {citations.map((citation: string, index: number) => (
          <li key={index}>{citation}</li>
        ))}
      </ol>
    </div>
  );
};

export default CitationsList;
