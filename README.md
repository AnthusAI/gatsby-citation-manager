# Gatsby Citations Manager: Streamlined Citation Handling for MDX

Gatsby Citations Manager is a practical plugin for managing citations in Gatsby-driven MDX content. It automates citation collection and formatting, generating a references list at the end of your documents. This tool allows you to focus more on content creation and less on the nuances of citation management.

Handling citations manually, especially in documents with numerous references, can be prone to errors and time-consuming. This plugin addresses these challenges by providing an automated solution.

Its key advantage lies in its flexibility. Utilizing the Citation.js library, it supports an extensive range of over 9,000 citation styles. This ensures that your citations align with the required academic or stylistic guidelines.

Moreover, the plugin generates simple HTML for your citations and reference lists, giving you control over their presentation. This feature helps in integrating the citations smoothly into your website's design.

The Gatsby Citations Manager is a helpful tool for developers, content creators, or academic writers who regularly work with MDX content and require an efficient citation management system.

## Intallation

Install the package from NPM. Run the following command in your project directory:

    npm install gatsby-citation-manager

Then, integrate the plugin into your Gatsby site. In your Gatsby project's configuration file (gatsby-config.js), add the gatsby-citation-manager plugin:

    module.exports = {
      plugins: [
        // other plugins
        'gatsby-citation-manager',
      ],
    }

## Example usage

### MDX content

    import { Citation, CitationsList } from 'gatsby-citation-manager';

    ## About some stuff
    
    F. Scott Fitzgerald, author of 'The Great Gatsby,' once entered a look-alike contest for himself and surprisingly, did not win.<Citation
      data={{
      type: "book",
      title: "Fitzgerald's Follies: The Untold Stories",
      author: [{ family: "McCallister", given: "Jean" }],
      issued: { 'date-parts': [[2020]] },
      URL: "https://literaryanecdotes.com/fitzgerald-follies"
    }} />

    During the 1920s, luxury car manufacturers often used 'The Great Gatsby' in their advertisements, despite the novel not being published until 1925."<Citation
      data={{
      type: "article-journal",
      title: "Timeless Classics: The Unlikely Marketing History of Luxury Cars and Literature",
      author: [{ family: "Fitzgerald", given: "Morgan" }],
      issued: { 'date-parts': [[2021]] },
      URL: "https://automotivehistories.com/gatsby-ads"
    }} />

    ...

    ## References

    <CitationsList citationFormat="bibtex" />

### HTML output

    ...
    <h2>About some stuff</h2>
    <p>
      F. Scott Fitzgerald, author of 'The Great Gatsby,' once entered a look-alike contest for himself and surprisingly, did not win.<sup><a href="#citation-1">1</a></sup>
    </p>
    <p>
      During the 1920s, luxury car manufacturers often used 'The Great Gatsby' in their advertisements, despite the novel not being published until 1925.<sup><a href="#citation-2">2</a></sup>
    </p>
    <ol>
      <li
        id="citation-1"
      >
        McCallister, J. (2020). Fitzgerald’s Follies: The Untold Stories. 
        <a
          href="https://literaryanecdotes.com/fitzgerald-follies"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://literaryanecdotes.com/fitzgerald-follies
        </a>
      </li>
      <li
        id="citation-2"
      >
        Fitzgerald, M. (2021). Timeless Classics: The Unlikely Marketing History of Luxury Cars and Literature. 
        <a
          href="https://automotivehistories.com/gatsby-ads"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://automotivehistories.com/gatsby-ads
        </a>
      </li>
    </ol>
    ...

## Citation parameters

The `CitationData` interface defines the structure of the data that you can pass to the `<Citation>` component. Here's a breakdown of each property:

- `id`: An optional unique identifier for the citation.
- `type`: The type of the source being cited. This could be 'book', 'article-journal', 'webpage', etc.
- `title`: The title of the source.
- `URL`: The URL of the source, if applicable.
- `accessed`: The date the source was accessed. This should be an object with a `date-parts`` property, which is an array of arrays. Each inner array represents a date, with the year, month, and day in that order.
- `author`: An array of objects representing the authors of the source. Each object should have a family property for the author's family name and a given property for the author's given name.
- `container-title`: The title of the container holding the source. For example, for a journal article, this would be the title of the journal.
- `issued`: The date the source was issued or published. This is formatted the same way as the accessed property.
- `keywords`: An array of keywords related to the source.

Here's an example of how you might use these properties to create a citation for a journal article with multiple authors:

    <Citation
      data={{
        type: "article-journal",
        title: "The Impact of Climate Change on Biodiversity",
        URL: "https://example.com/climate-change-biodiversity",
        accessed: { 'date-parts': [[2022, 3, 15]] },
        author: [
          { family: "Smith", given: "John" },
          { family: "Doe", given: "Jane" }
        ],
        'container-title': "Journal of Environmental Studies",
        issued: { 'date-parts': [[2021, 12, 1]] },
        keywords: ["climate change", "biodiversity"]
      }}
    />

## Example Gatsby template

The MDX needs to be wrapped in the `<CitationsProvider>` context to work.  This component accumulates the citations for the `<CitationsList>` component.

    import React from 'react';
    import { graphql } from 'gatsby';
    import { CitationsProvider } from 'your-plugin-name'; // Replace with your actual plugin name

    const BlogPostTemplate = ({ data }) => {
      // Destructure your blog post data here

      return (
        <CitationsProvider>
          {/* The rest of your blog post layout goes here */}
          <article dangerouslySetInnerHTML={{ __html: data.mdx.body }} />
          {/* You can also include the CitationsList component here if needed */}
        </CitationsProvider>
      );
    };

    export default BlogPostTemplate;

    // Add your GraphQL query here if needed

## Citation formats

The plugin utilizes @citation-js/plugin-csl for formatting, supporting a wide range of citation styles from the CSL style repository. This includes popular styles like APA, MLA, Chicago, Harvard, Vancouver, and IEEE, among others. You can explore all available styles at the [CSL style repository](https://github.com/citation-style-language/styles).

## Demo

I made this plugin originally for this article: [The Dominance of Ones: A Handy Quirk of Numbers](https://anth.us/blog/the-dominance-of-ones/)