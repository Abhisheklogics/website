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

export default function Page({ params }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  let fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getData(`/api/experiments/Arduino`, params.Experiment);
      setData(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, [params.Experiment]);

  useEffect(() => {
    fetchData();
  }, [params.Experiment]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }

  if (data.pinDiagramInfo) {
    console.log('hello');
    return (
      <>
        <div className="h-fit w-full p-5 bg-white bg-cover rounded-xl leading-8 text-justify break-words font-light 
        md:h-fit md:w-[790px] md:ml-[310px] md:mt-[-640px] 2xl:ml-[430px] md:p-5 md:bg-white md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap  md:bg-fixed">

        
            <h1 className="text-center capitalize text-2xl">{data.ExperimentName}</h1>

            {data.ExperimentId=='5'|| data.ExperimentId=='4'?<div className="mt-8 ml-[-10px] md:ml-32 md:mt-4">
              <Image
                width={200}
                height={200}
                className="md:ml-20 md:h-52 md:w-80   h-[200px] w-full"
                src={data.image1}
                alt="Experiment Image"
              />
            </div>:<Image
                width={350}
                height={300}
                className=" md:mt-4 md:ml-48"
                src={data.image1}
                alt="Experiment Image"
              />}

            <h2 className="text-sm mt-6 font-bold p-1">{data.madeBy}</h2>
            <p className="mt-2 ">{data.madeByinfo}</p>
            <p className="mt-2 md:mt-2">{data.madeByinfo1}</p>
            <p className="mt-2 md:mt-6">{data.madeByinfo2}</p>
            <h2 className="text-2xl mt-8">{data.overview}</h2>
            <p className="mt-8 md:mt-4">{data.overviewinfo1}</p>
            <p className="mt-8 md:mt-8">{data.overviewinfo2}</p>

            <div className="mt-10 md:ml-20">
             {data.ExperimentId == '1' || data.ExperimentId == '3' || data.ExperimentId == '4' || data.ExperimentId == '5' ||data.ExperimentId == '6' || data.ExperimentId == '7' || data.ExperimentId == '8'  || data.ExperimentId == '9' || data.ExperimentId == '10' || data.ExperimentId =='11'? 
             <Image
                width={500}
                height={440}
                className=" ml-2 bg-none md:ml-24"
                src={data.image2}
                alt="Specifications"
              />: <Image
              width={350}
              height={700}
              className="ml-2 md:h-[360px] md:w-[520px] md:ml-24 bg-none"
              src={data.image2}
              alt="Specifications"
            />}
            
            
            </div>

           
            {data.ExperimentId == '1' || data.ExperimentId == '2' || data.ExperimentId=='3'  || data.ExperimentId=='4' || data.ExperimentId=='5'|| data.ExperimentId=='6'|| data.ExperimentId=='7'|| data.ExperimentId=='8'|| data.ExperimentId=='9'|| data.ExperimentId=='10' || data.ExperimentId=='11' ? (
            <div>
              <h2 className="mt-8 capitalize text-2xl md:mt-6 md:text-2xl">
                {data.pinDiagramInfo}
              </h2>
              <div className="mt-8 capitalize rounded ml-10 md:ml-44 md:mt-10 md:rounded">
                <Image height={300} width={450} src={data.image3} />
              </div>

              <h2 className="mt-8 capitalize text-2xl md:mt-6 md:text-2xl">
                {data.CircuitDiagramInfo}
              </h2>
              <div className="mt-8 md:ml-24 md:mt-10 w-fit h-fit">
                <Image height={400} width={500} src={data.image4} />
              </div>
            </div>
          ) : (
            ''
          )}



          {data.ExperimentId == '12'  ? (
            <div>
              <h2 className="mt-2 capitalize text-2xl md:mt-2 md:text-2xl">
                {data.pinDiagramInfo}
              </h2>
              <div className="ml-32 mt-4 md:ml-32 md:mt-10 md:ml-60">
                <Image height={100} width={350} src={data.image3} />
              </div>
              <div className="mt-2 text-2xl md:mt-6 md:text-2xl md:mt-10 ">
              <h2 >
              Pin Diagram of Push Button
              </h2>
              </div>
              <div className="ml-32 mt-4 md:ml-32 md:mt-4 md:mt-10  md:ml-60 ">
                <Image height={100} width={350} src={data.image4} className="md:mt-10"/>
              </div>
              <h2 className="mt-2  capitalize text-2xl md:mt-2 md:text-2xl">
                {data.CircuitDiagramInfo}
              </h2>
              <div className="ml-32 mt-4 md:ml-60 md:mt-4 ">
                <Image height={100} width={450} src={data.image5} className="md:mt-10"/>
              </div>
            </div>
          ) : (
            ''
          )}

   {data.ExperimentId == '13'  ? (
            <div className="md:mt-10">
              <h2 className="mt-2 text-2xl capitalize md:mt-2 md:text-2xl">
                {data.pinDiagramInfo}
              </h2>
              <div className="ml-32 mt-4 md:ml-32 md:mt-10 md:ml-60">
                <Image height={100} width={350} src={data.image3} />
              </div>
              <div className="mt-2 capitalize text-2xl md:mt-6 md:text-2xl md:mt-10 ">
              <h2 >
              Pin Diagram of Arduino
              </h2>
              </div>
              <div className="ml-32 mt-4 md:ml-32 md:mt-4 md:mt-10  md:ml-60 ">
                <Image height={100} width={350} src={data.image4} className="md:mt-10"/>
              </div>
              <h2 className="mt-2 capitalize text-2xl md:mt-2 md:text-2xl">
                {data.CircuitDiagramInfo}
              </h2>
              <div className="ml-32 mt-4 md:ml-60 md:mt-4 ">
                <Image height={100} width={450} src={data.image5} className="md:mt-10"/>
              </div>
            </div>
          ) : (
            ''
          )}

          
   {data.ExperimentId == '14'  ? (
            <div className="md:mt-20">
              <h2 className="mt-2 capitalize text-2xl md:mt-2 md:text-2xl">
                {data.pinDiagramInfo}
              </h2>
              <div className="ml-32 mt-4 md:ml-32 md:mt-10 md:ml-60">
                <Image height={100} width={400} src={data.image3} />
              </div>
              <div className="mt-2 capitalize text-2xl md:mt-6 md:text-2xl md:mt-10 ">
              <h2 >
              Pin Diagram of Push Button
              </h2>
              </div>
              <div className="ml-32 mt-4 md:ml-32 md:mt-4 md:mt-10  md:ml-60 ">
                <Image height={100} width={300} src={data.image4} className="md:mt-10"/>
              </div>
              <h2 className="mt-2 capitalize text-2xl md:mt-2 md:text-2xl">
                {data.CircuitDiagramInfo}
              </h2>
              <div className="ml-32 mt-4 md:ml-40 md:mt-10 ">
                <Image height={100} width={570} src={data.image5} className="md:mt-10"/>
              </div>
            </div>
          ) : (
            ''
          )}
        {data.ExperimentId=='14'?'':<div><h1 className="text-2xl mt-20">Steps:</h1>
            <div className="leading-10">
              {data.step && <p>{data.step}</p>}
              {data.step1 && <p className="mt-4">1: {data.step1}</p>}
              {data.step2 && <p className="ml-">2: {data.step2}</p>}
              {data.step3 && <p className="ml-">3: {data.step3}</p>}
              {data.step4 && <p className="ml-">4: {data.step4}</p>}
              {data.step5 && <p className="ml-">5: {data.step5}</p>}
              {data.step6 && <p className="ml-">6: {data.step6}</p>}
            </div>
            </div>}


      
            <h2 className="text-2xl mt-10">Code:</h2>
            <CodeBox num={data.ExperimentId} exNam="ard" language={'c'} />

          
            <h3 className="text-2xl mt-6">Result</h3>
            <p className="mt-6">{data.result}</p>
        
        </div>
      </>
    );
  }
}
