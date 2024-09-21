
'use client'
import Link from "next/link";
import { useState } from "react";
export default function RootLayout({ children }) {
  let [toggle, setToggle] = useState(false);
  const experiments = [
    "With LED",
    "With  LCD (Liquid Crystal Display)",
    "With DC Motor",
    "With DHT11 SENSOR",
    "With Ultrasonic sensor",
    "With Pulse Rate Sensor",
    "With PUSH BUTTON",
    "PIR (Passive Infrared ) Sensor",
   
  ];

  return (
  
     
 <>
 <button
        className="md:hidden block bg-blue-500 text-white p-2 rounded-md m-4"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? "Hide Experiments" : "Show Experiments"}
      </button>

<div className={`${
          toggle ? "block" : "hidden"
        } md:block relative flex flex-col mt-10 ml-1  2xl:ml-36`}>
        {/* Sidebar */}
        <div
          className="
             inset-0 md:w-72  bg-white rounded-md md:relative p-4 mt-4 md:ml-12 md:mt-[-20px] 2xl:ml-0
            transition-transform
          "
        >
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
            All Experiments
          </h1>
          <ul className="space-y-4 md:space-y-2 md:h-[500px] overflow-scroll">
            
              <Link
             
                href={`/raspberry/${1}`} // Use dynamic routing
                className="block px-4 py-2 rounded-md text-sm  text-blue-950 hover:bg-gray-200 "
              >
                <li className="click">{`Respberry pi with ${experiments[0]}`}</li>
              </Link>
              <Link
             
             href={`/raspberry/${2}`} // Use dynamic routing
             className="block px-4 py-2 rounded-md text-sm  text-blue-950 hover:bg-gray-200"
           >
             {`Respberry pi with ${experiments[1]}`}
           </Link>
           <Link
             
             href={`/raspberry/${3}`} // Use dynamic routing
             className="block px-4 py-2 rounded-md text-sm  text-blue-950 hover:bg-gray-200"
           >
             {`Respberry pi with ${experiments[2]}`}
           </Link>
           <Link
             
             href={`/raspberry/${4}`} // Use dynamic routing
             className="block px-4 py-2 rounded-md text-sm  text-blue-950 hover:bg-gray-200"
           >
             {`Respberry pi with ${experiments[3]}`}
           </Link>
           <Link
             
             href={`/raspberry/${5}`} // Use dynamic routing
             className="block px-4 py-2 rounded-md text-sm  text-blue-950 hover:bg-gray-200"
           >
             {`Respberry pi with ${experiments[4]}`}
           </Link>
           <Link
             
             href={`/raspberry/${6}`} // Use dynamic routing
             className="block px-4 py-2 rounded-md text-sm  text-blue-950 hover:bg-gray-200"
           >
             {`Respberry pi with ${experiments[5]}`}
           </Link>
           <Link
             
             href={`/raspberry/${7}`} // Use dynamic routing
             className="block px-4 py-2 rounded-md text-sm  text-blue-950 hover:bg-gray-200"
           >
             {`Respberry pi with ${experiments[6]}`}
           </Link>
           <Link
             
             href={`/raspberry/${8}`} // Use dynamic routing
             className="block px-4 py-2 rounded-md text-sm  text-blue-950 hover:bg-gray-200"
           >
             {`Respberry pi with ${experiments[7]}`}
           </Link>
          
          
          
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4"> {/* Adjust as necessary */}
          {/* Main content goes here */}
        </div>
      </div>
      <div className="md:block hidden md:absolute  md:ml-[1100px] md:mt-[-630px] 2xl:ml-[1200px] md:h-[320px] md:w-72 md:bg-white md:p-1 md:rounded">
      <h1 className=" md:mt-2 md:text-2xl md:ml-4">In this article</h1>
        <ul className="md:ml-4 md:mt-4 md:grid md:gap-2 md:text-sm ">
        
          <li>
         Introduction
          </li>
          <li>
         overview
          </li>
          <li>
          Hardware Components
          </li>
          <li>
         Specifications
          </li>
          <li>
          pin Diagram
          </li>
          <li>
          Circuit Diagram
          </li>
          <li>
        Steps
          </li>
          <li>
          Code
          </li>
          <li>
         Result
          </li>
        </ul>
      </div>
   
   
 <div>{children}</div>
 </>
  );
}
