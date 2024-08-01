import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import essaysReviews from '@/data/essays-reviews.json';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import SlideAnimation from '@/animations/SlideAnimation';

// Import markdown files dynamically with updated query option
const markdownFiles = import.meta.glob('/src/essays-reviews-markdown/*.md', { query: '?raw', import: 'default' });

function EssaysReviewsPage() {
  const [markdownContent, setMarkdownContent] = useState('');
  const [links, setLinks] = useState([]);
  const [filter, setFilter] = useState('All');
  const [activeLink, setActiveLink] = useState(null);

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
    setActiveLink(link);
  };

  const filteredLinks = filter === 'All' ? links : links.filter(link => link.type === filter);

  const groupedLinks = filteredLinks.reduce((acc, link) => {
    if (!acc[link.year]) {
      acc[link.year] = [];
    }
    acc[link.year].push(link);
    return acc;
  }, {});

  const sortedYears = Object.keys(groupedLinks).sort((a, b) => b - a);

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
            {sortedYears.map((year) => (
              <div key={year} className="flex border p-4 mb-2">
                <div className="w-1/12 font-bold mt-2 mr-2">{year}</div>
                <div className="w-11/12">
                  {groupedLinks[year].map((link, index) => (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.id)}
                      // className="block border-b py-2 text-left w-full text-blue-500 hover:underline last:border-b-0"
                      className={`block border-b py-2 text-left w-full last:border-b-0 transition-colors duration-200 ease-in-out ${activeLink === link.id ? 'font-bold text-black' : 'text-gray-500 hover:text-gray-700 focus:text-black'}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="flex justify-between">
                        <div>{link.title}</div>
                        <div className="text-right">{link.type}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 p-2 border-gray-300 relative text-left">
          <SlideAnimation key={markdownContent}>
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
          </SlideAnimation>
          <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-gray-300 opacity-0 transition-opacity duration-300 ease-in-out md:group-hover:opacity-100"></div>
        </div>
      </div>
    </div>
  );
}

export default EssaysReviewsPage;
