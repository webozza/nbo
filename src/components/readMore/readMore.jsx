// components/ReadMore.js
import React, { useState } from 'react';

const ReadMore = ({ initialContent, expandedContent }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p>
        {isExpanded ? expandedContent : initialContent}
        <span onClick={toggleContent} style={{ textDecoration: 'underLine', cursor: 'pointer', marginLeft: '8px' }}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </span>
      </p>
    </div>
  );
};

export default ReadMore;
