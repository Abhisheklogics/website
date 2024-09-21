'use client';
import getData from "@/app/apiCall";
import dynamic from "next/dynamic";
import Image from "next/image";
const CodeBox = dynamic(() => import('@/components/code/code'), {
  ssr: false
});
const Loading = dynamic(() => import('@/components/loading/Loading'), {
  ssr: false
});
import {  useCallback, useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  let fetchData=useCallback(async ()=>{
    try {
      setLoading(true);
      const response = await getData(`/api/experiments/Arduino`, 1);
      setData(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  },[data])

  useEffect(() => {
    
    fetchData();
  }, [data]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading /> 
      </div>
    );
  }

  return (
    <>
      <div className="h-fit w-full p-5 bg-white bg-cover rounded-xl leading-8 text-justify break-words font-light 
      md:h-fit md:w-[790px] md:ml-[320px] md:mt-[-640px] 2xl:ml-[430px] md:p-5 md:bg-white md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap ">
       
          <h1 className="text-center capitalize text-2xl md:text-center md:text-2xl">
            {data.ExperimentName}
          </h1>
          <div className="mt-8 ml-[-10px] md:ml-28 md:mt-4">
              <Image
                width={350}
                height={200}
                className="md:ml-20"
                src={data.image1}
                alt="Experiment Image"
              />
            </div>
          <h2 className="text-sm mt-6 md:text-sm md:mt-4 font-bold">{data.madeBy}</h2>
          <p className="mt-2 md:mt-2">{data.madeByinfo1}</p>
          <p className="mt-2 md:mt-6">{data.madeByinfo2}</p>


          <h2 className="text-2xl mt-8 md:text-2xl md:mt-8 ">
            {data.overview}
          </h2>
          <p className="mt-8 md:mt-8">{data.overviewinfo}</p>
          <p className="mt-8 md:mt-4">{data.overviewinfo1}</p>
          <p className="mt-8 md:mt-8">{data.overviewinfo2}</p>

          <div className="mt-10 md:ml-20">
              <Image
                width={600}
                height={400}
                className="md:h-[400px] md:w-[600px] ml-2 bg-none"
                src={data.image2}
                alt="Specifications"
              />
            </div>

            <div>
              <h2 className="mt-8 text-2xl md:mt-6 md:text-2xl">
                {data.pinDiagramInfo}
              </h2>
              <div className="mt-8 rounded ml-10 md:ml-44 md:mt-6 md:rounded">
                <Image height={100} width={450} src={data.image3} />
              </div>

              <h2 className="mt-8 text-2xl md:mt-6 md:text-2xl">
                {data.CircuitDiagramInfo}
              </h2>
              <div className="mt-8 md:ml-24 md:mt-6 w-fit h-fit">
                <Image height={300} width={500} src={data.image4} />
              </div>
            </div>
          

        

          <h1 className="mt-10 text-2xl md:mt-20 md:text-2xl">Steps:</h1>

          {data.step && <p className="mt-10">{data.step}</p>}
          {data.step1 && <p className="mt-8 md:ml-24">1: {data.step1}</p>}
          {data.step2 && <p className="mt-4 md:ml-24">2: {data.step2}</p>}
          {data.step3 && <p className="mt-4 md:ml-24">3: {data.step3}</p>}
          {data.step4 && <p className="mt-4 md:ml-24">4: {data.step4}</p>}
          {data.step5 && <p className="mt-4 md:ml-24">5: {data.step5}</p>}
          {data.step6 && <p className="mt-4 md:ml-24">6: {data.step6}</p>}

          <h2 className="mt-10 text-2xl md:mt-10 md:text-2xl">Code:</h2>
          <CodeBox num={data.ExperimentId} exNam="ard" language={'c'} />

          <h3 className="text-2xl mt-8 md:text-2xl md:mt-6">Result</h3>
          <p className="mt-6 md:mt-8">{data.result}</p>
  
      </div>
    </>
  );
}
