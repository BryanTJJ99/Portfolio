import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import essaysReviews from '@/data/essays-reviews.json';

// Import markdown files dynamically with updated query option
const markdownFiles = import.meta.glob('/src/essays-reviews-markdown/*.md', { query: '?raw', import: 'default'});

function EssaysReviewsPage() {
  const [markdownContent, setMarkdownContent] = useState('');
  const [links, setLinks] = useState([]);

  useEffect(() => {
    // Load links from the JSON file
    setLinks(essaysReviews);
    console.log('Available markdown files:', Object.keys(markdownFiles));
  }, []);

  const fetchMarkdownContent = async (link) => {
    const filePath = `/src/essays-reviews-markdown/${link}.md`;
    const asyncFunction = markdownFiles[filePath];

    if (asyncFunction) {
      try {
        const content = await asyncFunction();
        return content;
      } catch (error) {
        console.error('Error fetching markdown:', error);
        return '## No Content Found';
      }
    } else {
      console.error('Error: No matching markdown file found for path:', filePath);
      return '## No Content Found';
    }
  };

  const handleLinkClick = async (link) => {
    const content = await fetchMarkdownContent(link);
    setMarkdownContent(content);
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row group">
        <div className="flex-1 p-2 border-gray-300 relative">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="block mb-2"
            >
              {link.title}
            </button>
          ))}
          <div className="absolute top-0 bottom-0 right-0 w-0.5 bg-gray-300 opacity-0 transition-opacity duration-300 ease-in-out md:group-hover:opacity-100"></div>
        </div>
        <div className="flex-1 p-2 border-gray-300 relative">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
          <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-gray-300 opacity-0 transition-opacity duration-300 ease-in-out md:group-hover:opacity-100"></div>
        </div>
      </div>
    </div>
  );
}

export default EssaysReviewsPage;
