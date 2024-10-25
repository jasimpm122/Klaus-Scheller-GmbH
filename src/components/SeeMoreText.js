import React, { useState } from 'react';

const SeeMoreText = ({ text, limit }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  console.log(text,'text::');

  // Ensure text is a string and handle cases where it's not
  const displayedText = typeof text === 'string'
    ? (isExpanded ? text : `${text.slice(0, limit)}...`)
    : 'Invalid text provided';

  return (
    <div>
      <p>{displayedText}</p>
      {typeof text === 'string' && (
       <button className="button"  onClick={toggleExpand}>
          {isExpanded ? 'See Less' : 'See More'}
        </button>
      )}
    </div>
  );
};

export default SeeMoreText;
