import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import essaysReviews from '@/data/essays-reviews.json';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

// Import markdown files dynamically with updated query option
const markdownFiles = import.meta.glob('/src/essays-reviews-markdown/*.md', { query: '?raw', import: 'default' });

function EssaysReviewsPage() {
  const [markdownContent, setMarkdownContent] = useState('');
  const [links, setLinks] = useState([]);
  const [filter, setFilter] = useState('All');

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

  const filteredLinks = filter === 'All' ? links : links.filter(link => link.type === filter);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row group">
        <div className="flex-1 p-2 border-gray-300 relative">
          <div className="flex justify-between items-center mb-4">
            <div>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="p-2 border rounded"
              >
                <option value="All">All</option>
                <option value="Film">Film</option>
                <option value="Text">Text</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            {filteredLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="flex border p-2 text-left w-full text-blue-500 hover:underline"
              >
                <div className="w-1/12">{link.year}</div>
                <div className="w-10/12">{link.title}</div>
                <div className="w-1/12">{link.type}</div>
              </button>
            ))}
          </div>
        </div>
        <div className="flex-1 p-2 border-gray-300 relative text-left">
          <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mb-2" {...props} />,
                h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold mb-2" {...props} />,
                p: ({ node, ...props }) => <p className="text-base mb-2" {...props} />,
                // Add more custom styles for other elements as needed
              }}
          >
            {markdownContent}
          </ReactMarkdown>
          <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-gray-300 opacity-0 transition-opacity duration-300 ease-in-out md:group-hover:opacity-100"></div>
        </div>
      </div>
    </div>
  );
}

export default EssaysReviewsPage;
