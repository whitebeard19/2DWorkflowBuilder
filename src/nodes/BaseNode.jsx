import React from 'react';

const BaseNode = ({ title, children }) => {
  return (
    <div className="relative bg-white border border-gray-300 rounded-md p-3 shadow-sm min-w-40">
      <h3 className="text-sm font-semibold mb-2">{title}</h3>
      {children}
    </div>
  );
};

export default BaseNode;
