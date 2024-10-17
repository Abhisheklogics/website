'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import axios from 'axios';

export default function Search() {
  const [search, setSearch] = useState('');
  const [applyData, setApplyData] = useState([]);
  const [showApplyData, setShowApplyData] = useState(false); 
  const inputRef = useRef(null);

  useEffect(() => {
    if (search === '') {
      setApplyData([]);
      setShowApplyData(false); 
      return;
    }

    const getDataSearch = async () => {
      try {
        const response = await axios.get(`/api/experiments/Search?Search=${encodeURIComponent(search)}`);
        setApplyData(response.data);
        setShowApplyData(true); 
      } catch (error) {
        console.log(error);
        setApplyData([]); 
        setShowApplyData(false); 
      }
    };

    getDataSearch();
  }, [search]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowApplyData(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    setApplyData([]); 
    setShowApplyData(false); 
  };

  const handleLinkClick = () => {
    setApplyData([]); 
    setShowApplyData(false);
    setSearch(''); 
  };

  return (
    <div className="mt-4 ml-4 md:ml-[30px] md:flex md:justify-evenly md:relative md:top-3">
      <input
        className="w-fit h-9 ml-14 rounded-md p-2 bg-gray-100 shadow-md placeholder-gray-700 font-semibold md:w-[500px]"
        value={search}
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Search the Experiments..."
      />

      {applyData.length > 0 && search !== '' && (
        <div
          className={`absolute  md:mt-10 md:ml-20 w-full bg-white rounded-lg p-3 z-20 shadow-lg md:w-[500px] ${
            showApplyData ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {applyData.map((data) => (
            <div key={data.ExperimentId} className="p-2 border-b border-gray-200 ">
              <Link onClick={handleLinkClick} href={`/raspberry/${data.ExperimentId}`} passHref>
                <div className="flex items-center space-x-3 hover:bg-gray-100 rounded-lg p-2">
                  <img
                    src={data.image1}
                    className="rounded w-12 h-12 object-cover"
                    alt={data.ExperimentName}
                  />
                  <h1 className="text-sm font-medium">{data.ExperimentName}</h1>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
