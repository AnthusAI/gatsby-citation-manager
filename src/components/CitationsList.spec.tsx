import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import CitationsList from "./CitationsList"
import { CitationsProvider } from '../context/CitationsContext';

describe('CitationsList', () => {
  it('renders without crashing', () => {
    render(
      <CitationsProvider>
        <CitationsList />
      </CitationsProvider>
    );
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
