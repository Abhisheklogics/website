'use client'

import Link from 'next/link';
import { useState } from "react";
export default function RootLayout({ children }) {
  let [toggle, setToggle] = useState(false);
  const experiments = [
    "With Dht11 Sensor",
    "With HC-SR04 Ultrasonic Sensor",
    "With Sound Sensor",
    "with HW-040 Potentiometer",
    "with IR Receiver",
    "with Servo Motor  ",
   
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
        } md:block relative flex flex-col mt-10 ml-1  2xl:ml-0`}>
     
      <div className="inset-0 md:w-72 md:h-fit bg-white rounded-md shadow-md p-4 mt-10 ml-6 transition-transform">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          All Experiments
        </h1>
        <ul className="space-y-4 md:space-y-2">
          
            <li >
              <Link href={`/esp/${1}`} className="block px-4 py-2 rounded-md text-sm text-blue-950 hover:bg-gray-200">
                
                  {`esp with ${experiments[0]}`}
                
              </Link>
            </li>
            <li >
              <Link href={`/esp/${2}`} className="block px-4 py-2 rounded-md text-sm text-blue-950 hover:bg-gray-200">
                
                  {`esp with ${experiments[1]}`}
                
              </Link>
            </li>
            <li >
              <Link href={`/esp/${4}`} className="block px-4 py-2 rounded-md text-sm text-blue-950 hover:bg-gray-200">
                
                  {`esp with ${experiments[2]}`}
                
              </Link>
            </li>
            <li >
              <Link href={`/esp/${5}`} className="block px-4 py-2 rounded-md text-sm text-blue-950 hover:bg-gray-200">
                
                  {`esp with ${experiments[3]}`}
                
              </Link>
            </li>
            <li >
              <Link href={`/esp/${6}`} className="block px-4 py-2 rounded-md text-sm text-blue-950 hover:bg-gray-200">
                
                  {`esp with ${experiments[4]}`}
                
              </Link>
            </li>
            <li >
              <Link href={`/esp/${7}`} className="block px-4 py-2 rounded-md text-sm text-blue-950 hover:bg-gray-200">
                
                  {`esp with ${experiments[5]}`}
                
              </Link>
            </li>
            <li >
              <Link href={`/esp/${1}`} className="block px-4 py-2 rounded-md text-sm text-blue-950 hover:bg-gray-200">
                
                  {`esp with ${experiments[6]}`}
                
              </Link>
            </li>
        
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Main content goes here */}
      </div>
    </div>
 <div>{children}</div>
 </>
  );
}
