import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import essaysReviews from '@/data/essays-reviews.json';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import SlideAnimation from '@/animations/SlideAnimation';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { CustomH1, CustomH2, CustomP, CustomCode, CustomBlockquote, CustomListItem, CustomTable, CustomThead, CustomTbody, CustomTr, CustomTh, CustomTd } from '@/utils/CustomMarkdownComponents'; // Ensure this path is correct

const markdownFiles = import.meta.glob('/src/essays-reviews-markdown/*.md', { query: '?raw', import: 'default' });

function EssaysReviewsPage() {
  const [markdownContent, setMarkdownContent] = useState('');
  const [links, setLinks] = useState([]);
  const [filter, setFilter] = useState('All');
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
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
    <div className="container mx-auto h-screen flex flex-col md:flex-row">
      <div className="flex-1 p-2 border-gray-300 relative md:overflow-y-auto max-h-full">
        <div className="flex justify-between items-center mb-4">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                {filter}
                <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
              </MenuButton>
            </div>
            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {['All', 'Film', 'Text'].map((option) => (
                    <MenuItem key={option} onClick={() => setFilter(option)}>
                      {({ active }) => (
                        <button
                          className={`block w-full px-4 py-2 text-left text-sm ${
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                          }`}
                        >
                          {option}
                        </button>
                      )}
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Transition>
          </Menu>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          {sortedYears.map((year) => (
            <div key={year} className="flex border p-4 mb-2">
              <div className="w-1/12 font-bold mt-2 mr-2">{year}</div>
              <div className="w-11/12">
                {groupedLinks[year].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`block border-b py-2 text-left w-full last:border-b-0 transition-colors duration-200 ease-in-out ${
                      activeLink === link.id ? 'font-bold text-black' : 'text-gray-500 hover:text-gray-700 focus:text-black'
                    }`}
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
      <div className="flex-1 p-2 border-gray-300 relative text-left md:overflow-auto max-h-full">
        <SlideAnimation key={markdownContent}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: CustomH1,
              h2: CustomH2,
              p: CustomP,
              code: CustomCode,
              blockquote: CustomBlockquote,
              li: CustomListItem,
              table: CustomTable,
              thead: CustomThead,
              tbody: CustomTbody,
              tr: CustomTr,
              th: CustomTh,
              td: CustomTd,
            }}
          >
            {markdownContent}
          </ReactMarkdown>
        </SlideAnimation>
        <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-gray-300 opacity-0 transition-opacity duration-300 ease-in-out md:group-hover:opacity-100"></div>
      </div>
    </div>
  );
}

export default EssaysReviewsPage;
