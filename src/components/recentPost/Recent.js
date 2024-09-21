'use client'

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const RecentPosts = (props) => {
  const listRef = useRef(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false); 
  const [scrollInterval, setScrollInterval] = useState(null); 
 
  const processedImages = props.image
    ? props.image.map((arr) => {
        if (arr && typeof arr.ExperimentName === 'string') {
          arr.ExperimentName = arr.ExperimentName.replace(/How to|HOW TO|\./g, '');
        }
        return arr;
      })
    : [];

  useEffect(() => {
    const list = listRef.current;
    if (!list || window.innerWidth < 768) return; 

    let scrollAmount = 0;
    const maxScroll = list.scrollHeight - list.clientHeight;

    const scrollList = () => {
      if (!isUserInteracting) {
        scrollAmount += 1;
        if (scrollAmount > maxScroll) {
          scrollAmount = 0;
        }
        list.scrollTo({
          top: scrollAmount,
          behavior: 'smooth',
        });
      }
    };

   
    const interval = setInterval(scrollList, 50);
    setScrollInterval(interval);

    return () => clearInterval(interval);
  }, [isUserInteracting]);

  const handleUserInteractionStart = () => {
    setIsUserInteracting(true);
  };

  const handleUserInteractionEnd = () => {
    setIsUserInteracting(false);
  };

  return (
    <div className="h-[450px] w-[360px] bg-white rounded-md overflow-hidden ml-4 mt-4
      md:h-[450px] md:shadow-lg md:w-[360px] md:bg-white md:mt-[-500px] md:ml-[880px] md:rounded-md">
      
    
      <div className="text-start font-bold text-2xl text-white bg-gradient-to-r from-green-700 to-green-300 rounded-sm p-4">
        <h1>RECENT POST</h1>
      </div>
      
      
      <ul
        className="h-full overflow-auto text-sm"
        ref={listRef}
        onMouseEnter={handleUserInteractionStart}
        onMouseLeave={handleUserInteractionEnd}
        onTouchStart={handleUserInteractionStart}
        onTouchEnd={handleUserInteractionEnd}
      >
        {processedImages.map((image, index) => (
          <Link key={image.ExperimentId} href={`arduino/${image.ExperimentId}`}>
            <li className={`hover:bg-gray-200 mt-10 p-2 ml-2 ${index === 0 ? 'md:mt-6' : ''}`}>
              <img
                src={image.image1}
                className="h-10 w-20"
                alt={image.ExperimentName}
              />
              <p className="mt-[-40px] word-break text-wrap capitalize h-10 p-1 ml-[90px] rounded text-blue-600">
                {image.ExperimentName}
              </p>
              <hr className="mt-2" />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default RecentPosts;
