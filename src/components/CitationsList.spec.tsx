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
          Here's a thing.<Citation data={{
            type: "article-journal",
            title: "Test Citation", 
            author: [{ family: "Author1", given: "" }], 
            issued: { 'date-parts': [[2021]] },
            URL: "https://example.com/test-citation"
          }} />
        </p>
        <p>
          Here's another thing.<Citation data={{
            type: "article-journal",
            title: "Second Citation", 
            author: [{ family: "Author2", given: "" }], 
            issued: { 'date-parts': [[2022]] },
            URL: "https://example.com/second-citation"
          }} />
        </p>
        <CitationsList />
      </CitationsProvider>
    );
  
    container = rendered.container;
    console.log('rendered HTML:' + container.innerHTML);
  });

  it('displays the References header', () => {
    expect(screen.getByText('References')).toBeInTheDocument();
  });

  it('displays the first citation with number 1', () => {
    const firstCitationItem = container.querySelector('#citation-1');
    expect(firstCitationItem).toHaveTextContent('[1] Author1. (2021). Test Citation.');
  });
  
  it('displays the second citation with number 2', () => {
    const secondCitationItem = container.querySelector('#citation-2');
    expect(secondCitationItem).toHaveTextContent('[2] Author2. (2022). Second Citation.');
  });

});