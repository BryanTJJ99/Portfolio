import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
  
  const location = useLocation();
  const navigate = useNavigate();

  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (link, event) => {
    event.preventDefault();  // Prevent the default link behavior
    setActiveLink(link);
    navigate(link);
  };

  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div>
              <h1 className="text-5xl text-left pb-2">Bryan Tan</h1>
              <h1 className="text-xl text-left pb-8">Cathedral of the Pines</h1>
              <hr></hr>
            </div>
            <div className="flex h-16 justify-between mb-5">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  <a
                    href="/feed"
                    onClick={(e) => handleLinkClick('/feed', e)}
                    className={classNames(
                      activeLink === '/feed'
                        ? 'border-indigo-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                      'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                    )}
                  >
                    Feed
                  </a>
                  <a
                    href="/biography"
                    onClick={(e) => handleLinkClick('/biography', e)}
                    className={classNames(
                      activeLink === '/biography'
                        ? 'border-indigo-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                      'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                    )}
                  >
                    Biography
                  </a>
                  <a
                    href="/photography-works"
                    onClick={(e) => handleLinkClick('/photography-works', e)}
                    className={classNames(
                      activeLink === '/photography-works'
                        ? 'border-indigo-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                      'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                    )}
                  >
                    Photography Works
                  </a>
                  <a
                    href="/essays-reviews"
                    onClick={(e) => handleLinkClick('/essays-reviews', e)}
                    className={classNames(
                      activeLink === '/essays-reviews'
                        ? 'border-indigo-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                      'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                    )}
                  >
                    Essays & Reviews
                  </a>
                  <a
                    href="/tech-projects"
                    onClick={(e) => handleLinkClick('/tech-projects', e)}
                    className={classNames(
                      activeLink === '/tech-projects'
                        ? 'border-indigo-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                      'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                    )}
                  >
                    Tech Projects
                  </a>
                  <a
                    href="/contact"
                    onClick={(e) => handleLinkClick('/contact', e)}
                    className={classNames(
                      activeLink === '/contact'
                        ? 'border-indigo-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                      'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                    )}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <a
                href="/feed"
                onClick={(e) => handleLinkClick('/feed', e)}
                className={classNames(
                  activeLink === '/feed'
                    ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700',
                  'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                )}
              >
                Feed
              </a>
              <a
                href="/biography"
                onClick={(e) => handleLinkClick('/biography', e)}
                className={classNames(
                  activeLink === '/biography'
                    ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700',
                  'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                )}
              >
                Biography
              </a>
              <a
                href="/photography-works"
                onClick={(e) => handleLinkClick('/photography-works', e)}
                className={classNames(
                  activeLink === '/photography-works'
                    ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700',
                  'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                )}
              >
                Photography Works
              </a>
              <a
                href="/essays-reviews"
                onClick={(e) => handleLinkClick('/essays-reviews', e)}
                className={classNames(
                  activeLink === '/essays-reviews'
                    ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700',
                  'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                )}
              >
                Essays & Reviews
              </a>
              <a
                href="/tech-projects"
                onClick={(e) => handleLinkClick('/tech-projects', e)}
                className={classNames(
                  activeLink === '/tech-projects'
                    ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700',
                  'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                )}
              >
                Tech Projects
              </a>
              <a
                href="/contact"
                onClick={(e) => handleLinkClick('/contact', e)}
                className={classNames(
                  activeLink === '/contact'
                    ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700',
                  'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                )}
              >
                Contact
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
