import React from 'react';

export const CustomH1 = ({ node, ...props }) => (
  <h1 className="text-700 p-4 mb-2 text-3xl font-bold" {...props} />
);

export const CustomH2 = ({ node, ...props }) => (
  <h2 className="border-l-4 borde-500 text-700 p-4 mb-2 text-2xl font-semibold" {...props} />
);

export const CustomP = ({ node, ...props }) => (
  <p className="text-700 pl-4 pr-4 mb-4 text-base" {...props} />
);

export const CustomCode = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || '');
  return !inline && match ? (
    <pre className={`bg-gray-900 text-white p-4 rounded-md ${className}`} {...props}>
      <code className={`language-${match[1]}`}>{children}</code>
    </pre>
  ) : (
    <code className={`bg-gray-200 text-red-700 p-1 rounded ${className}`} {...props}>
      {children}
    </code>
  );
};

export const CustomBlockquote = ({ node, ...props }) => (
  <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600" {...props} />
);

export const CustomListItem = ({ node, ...props }) => (
  <li className="ml-4 list-disc" {...props} />
);

export const CustomTable = ({ node, ...props }) => (
  <table className="min-w-full bg-white" {...props} />
);

export const CustomThead = ({ node, ...props }) => (
  <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal" {...props} />
);

export const CustomTbody = ({ node, ...props }) => (
  <tbody className="text-gray-600 text-sm font-light" {...props} />
);

export const CustomTr = ({ node, ...props }) => (
  <tr className="border-b border-gray-200 hover:bg-gray-100" {...props} />
);

export const CustomTh = ({ node, ...props }) => (
  <th className="py-3 px-6 text-left" {...props} />
);

export const CustomTd = ({ node, ...props }) => (
  <td className="py-3 px-6 text-left whitespace-nowrap" {...props} />
);


export const CustomImage = ({ node, src, alt, ...props }) => (
  <img src={src} alt={alt} className="max-w-full h-auto my-4" {...props} />
);