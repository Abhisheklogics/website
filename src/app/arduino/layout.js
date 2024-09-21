'use client'
import Link from "next/link";
import { useState } from "react";

export default function RootLayout({ children }) {
  let [toggle, setToggle] = useState(false);
  


  return (
    <>
     
      <button
        className="md:hidden block bg-blue-500 text-white p-2 rounded-md m-4"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? "Hide Experiments" : "Show Experiments"}
      </button>

      
      <div
        className={`${
          toggle ? "block" : "hidden"
        } md:block relative flex flex-col mt-10 ml-1 md:ml-10 2xl:ml-36`}
      >
        <div className="md:w-72 md:h-[600px] bg-white rounded p-4 shadow">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
            All Experiments
          </h1>
          <ul className="space-y-4 h-[500px] overflow-scroll">
           
              <Link
                
                href={`/arduino/${1}`} 
                className="block px-4 py-2 rounded-md text-sm text-blue-950 hover:bg-gray-200"
              >
                {`Arduino With LED`}
              </Link>
              <Link
                
                href={`/arduino/${2}`} 
                className="block px-4 py-2 rounded-md text-sm text-blue-950 hover:bg-gray-200"
              >
                {`Arduino With 7 SEGEMENT DISPLAY`}
              </Link>
              <Link
                
                href={`/arduino/${3}`} 
                className="block px-4 py-2 rounded-md text-sm text-blue-950 hover:bg-gray-200"
              >
                {`Arduino With TRAFFIC LIGHT`}
              </Link>
              <Link
                
                href={`/arduino/${4}`} 
                className="block px-4 py-2 rounded-md text-sm text-blue-950 hover:bg-gray-200"
              >
                {`Arduino With PIR SENSOR`}
              </Link>
              <Link
                
                href={`/arduino/${5}`} 
                className="block px-4 py-2 rounded-md text-sm text-blue-950 hover:bg-gray-200"
              >
                {`Arduino With SOIL MOISTURE SENSOR`}
              </Link>
              <Link
                
                href={`/arduino/${6}`} 
                className="block px-4 py-2 rounded-md text-sm text-blue-950 hover:bg-gray-200"
              >
                {`Arduino With ULTRASONIC and LED `}
              </Link>
              <Link
                
                href={`/arduino/${7}`} 
                className="block px-4 py-2 rounded-md text-sm text-blue-950 hover:bg-gray-200"
              >
                {`Arduino With LCD`}
              </Link>
              <Link
                
                href={`/arduino/${8}`} 
                className="block px-4 py-2 rounded-md text-sm text-blue-950 hover:bg-gray-200"
              >
                {`Arduino With DC MOTOR`}
              </Link>
              <Link
                
                href={`/arduino/${9}`} 
                className="block px-4 py-2 rounded-md text-sm text-blue-950 hover:bg-gray-200"
              >
                {`Arduino With SERVO MOTOR`}
              </Link>
              <Link
                
                href={`/arduino/${10}`} 
                className="block px-4 py-2 rounded-md text-sm text-blue-950 hover:bg-gray-200"
              >
                {`Arduino With GEAR MOTOR`}
              </Link>
              <Link
                
                href={`/arduino/${11}`} 
                className="block px-4 py-2 rounded-md text-sm text-blue-950 hover:bg-gray-200"
              >
                {`Arduino With OLED `}
              </Link>
              <Link
                
                href={`/arduino/${12}`} 
                className="block px-4 py-2 rounded-md text-sm text-blue-950 hover:bg-gray-200"
              >
                {`Arduino With LED and PUSH BUTTON `}
              </Link>
              <Link
                
                href={`/arduino/${13}`} 
                className="block px-4 py-2 rounded-md text-sm text-blue-950 hover:bg-gray-200"
              >
                {`Arduino With DHT22`}
              </Link>
              <Link
                
                href={`/arduino/${14}`} 
                className="block px-4 py-2 rounded-md text-sm text-blue-950 hover:bg-gray-200"
              >
                {`Arduino With PUSH BUTTON and OLED`}
              </Link>
              
           
          </ul>
        </div>
      </div>

     
     


      
        <div className="hidden md:block md:w-72 h-[350px] md:absolute md:mt-[-620px] md:ml-[1110px]   2xl:ml-[1230px]  bg-white p-4 rounded shadow-sm">
          <h1 className="text-2xl text-gray-800">In this article</h1>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Introduction</li>
            <li>Overview</li>
            <li>Specifications</li>
            <li>Pin Diagram</li>
            <li>Circuit Diagram</li>
            <li>Steps</li>
            <li>Code</li>
            <li>Result</li>
          </ul>
        </div>
        <div className="flex-1 p-4">{children}</div>

             
    </>
  );
}
