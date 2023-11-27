# gatsby-citations-manager


## Example Gatsby template

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
