// src/components/CitationsList.tsx
import React, { useContext } from 'react';
import { CitationsContext } from '../context/CitationsContext';
const {Cite} = require('@citation-js/core')
require('@citation-js/plugin-csl')

const CitationsList: React.FC = () => {
  const context = useContext(CitationsContext);

  if (!context) {
    console.error('CitationsList must be used within a CitationsProvider');
    return null;
  }

  const { citations } = context;

  return (
    <div>
      <h2>References</h2>
      <ol>
        {citations.map((citation, index) => {
          const citationData = {
            ...citation,
            keywords: citation.keywords ? citation.keywords.join(', ') : undefined,
          };

          const cite = new Cite(citationData);
          const formattedCitation = cite.format('bibliography', {
            format: 'html',
            template: 'apa',
            lang: 'en-US'
          });

          const parser = new DOMParser();
          const citationDoc = parser.parseFromString(formattedCitation, 'text/html');
          let citationText = citationDoc.querySelector('.csl-entry')?.textContent || '';

          // Remove the URL from the citation text if it exists
          if (citation.URL) {
            citationText = citationText.replace(citation.URL, '');
          }

          return (
            <li key={index} id={`citation-${index + 1}`}>
              {`[${index + 1}] ${citationText}`}
              {citation.URL && (
                <a href={citation.URL} target="_blank" rel="noopener noreferrer">
                  {citation.URL}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default CitationsList;