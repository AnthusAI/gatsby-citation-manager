// src/components/CitationsList.spec.tsx
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import CitationsList from "./CitationsList";
import Citation from './Citation';
import { CitationsProvider } from '../context/CitationsContext';

describe('CitationsList', () => {
  let container: HTMLElement;

  beforeEach(() => {
    const rendered = render(
      <CitationsProvider>
        <p>
          F. Scott Fitzgerald, author of 'The Great Gatsby,' once entered a look-alike contest for himself and surprisingly, did not win.<Citation data={{
            type: "book",
            title: "Fitzgerald's Follies: The Untold Stories",
            author: [{ family: "McCallister", given: "Jean" }],
            issued: { 'date-parts': [[2020]] },
            URL: "https://literaryanecdotes.com/fitzgerald-follies"
          }} />
        </p>
        <p>
          During the 1920s, luxury car manufacturers often used 'The Great Gatsby' in their advertisements, despite the novel not being published until 1925.<Citation data={{
            type: "article-journal",
            title: "Timeless Classics: The Unlikely Marketing History of Luxury Cars and Literature",
            author: [{ family: "Fitzgerald", given: "Morgan" }],
            issued: { 'date-parts': [[2021]] },
            URL: "https://automotivehistories.com/gatsby-ads"
          }} />
        </p>
        <CitationsList citationFormat="bibtex" />
      </CitationsProvider>
    );
  
    container = rendered.container;
    console.log('rendered HTML:' + container.innerHTML);
  });

  it('displays the first citation with number 1', () => {
    const firstCitationItem = container.querySelector('#citation-1');
    expect(firstCitationItem).toHaveTextContent('McCallister, J. (2020). Fitzgerald’s Follies: The Untold Stories. https://literaryanecdotes.com/fitzgerald-follies');
  });
  
  it('displays the second citation with number 2', () => {
    const secondCitationItem = container.querySelector('#citation-2');
    expect(secondCitationItem).toHaveTextContent('Fitzgerald, M. (2021). Timeless Classics: The Unlikely Marketing History of Luxury Cars and Literature. https://automotivehistories.com/gatsby-ads');
  });

});