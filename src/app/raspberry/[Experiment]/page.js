'use client'
import Image from "next/image";
import dynamic from "next/dynamic";
import getData from "@/app/apiCall";
import { useEffect, useState ,useCallback} from 'react';

const CodeBox = dynamic(() => import('@/components/code/code'), { ssr: false });
const Loading = dynamic(() => import('@/components/loading/Loading'), { ssr: false });

export default function Page({ params }) {
  let [data,setData]=useState([]);
  
  const [loading, setLoading] = useState(false);
  let fetchData=useCallback(async ()=>{
    try {
      setLoading(true);
      const response = await getData(`/api/experiments/Res`, params.Experiment);
      setData(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  },[params.Experiment])

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
  return (
    <>
      <div className="h-fit w-full p-5 bg-white bg-cover rounded-xl leading-10 text-justify break-words 

      md:h-fit md:w-[790px] md:ml-[330px] md:mt-[-630px] 2xl:ml-[430px] md:p-5 md:bg-white md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap ">
      
          <h1 className="text-center text-2xl 
          md:text-center md:text-2xl">{data.ExperimentName}</h1>
          
         {data.ExperimentId != '3'  ?
         <div className="md:ml-32 md:mt-6 mt-6">
            <Image
              className="md:ml-20 "
              src={data.image1}
              alt="Experiment Image"
              width={330}  
              height={300} 
              objectFit="cover"
            />
          </div>:
           <Image
           className="md:ml-44 md:mt-8 md:h-[200px] md:w-[340px]"
           src={data.image1}
           alt="Experiment Image"
           width={200}  
           height={200} 
           objectFit="cover"
         />
          }
          
          <h2 className=" text-sm mt-4 md:text-sm md:mt-2 font-bold ">{data.madeBy}</h2>
          <p className="md:mt-6 mt-6">{data.madeByinfo1}</p>
          <p className="md:mt-6 mt-6">{data.madeByinfo2}</p>
          <h2 className="md:text-2xl md:mt-10 text-2xl  mt-10">{data.overview}</h2>
          <p className="md:mt-10 md:leading-8 mt-10">{data.overviewinfo1}</p>
          <p className="md:mt-10 md:leading-8 mt-10">{data.overviewinfo2}</p>

          <div className="md:leading-10 ">
            <p className="md:mt-10 md:text-2xl mt-10 text-2xl">{data.Material}</p>
            {data.Material1 && <p className="md:ml-10 md:mt-4 mt-4">1: {data.Material1}</p>}
            {data.Material2 && <p className="md:ml-10 md:mt-2 mt-4">2: {data.Material2}</p>}
            {data.Material3 && <p className="md:ml-10 md:mt-2 mt-4">3: {data.Material3}</p>}
            {data.Material4 && <p className="md:ml-10 md:mt-2 mt-4">4: {data.Material4}</p>}
            {data.Material5 && <p className="md:ml-10 md:mt-2 mt-4">5: {data.Material5}</p>}
          </div>

          {data.ExperimentId === '7' && <h2>{data.CircuitDiagramInfo}</h2>}
          
          {data.ExperimentId === '7' || data.ExperimentId != '5' ? (
            <div className="md:ml-20 ">
              <Image
                src={data.image2}
                alt="Specifications"
                width={340}
                height={100}
                loading="lazy"
                className="md:ml-44"
                objectFit="cover"
              />
            </div>
          ) : (
            <div className="md:ml-28 md:mt-12 mt-10">
              <Image
                src={data.image2}
                alt="Specifications"
                width={484}  
                height={320} 
                 className="md:ml-32"
                objectFit="cover"
              />
            </div>
          )}
          
          {data.ExperimentId === '8' && (
            <div className="md:ml-28 md:mt-12">
              <Image
                src={data.image3}
                alt="Pin Diagram"
                width={384}
                height={320}
                objectFit="cover"
              />
            </div>
          )}

          <h2 className={data.ExperimentId === '8' ? "md:text-2xl md:mt-20 text-2xl mt-8" : "md:text-2xl md:mt-16 text-2xl mt-8"}>
            {data.pinDiagramInfo}
          </h2>

          {data.ExperimentId === '8' ? (
            <div className="md:ml-44 md:mt-12">
              <Image
                src={data.image4}
                alt="Pin Diagram"
                width={192}
                height={176}
                objectFit="cover"
              />
            </div>
          ) : (
            <div className="md:ml-36 md:mt-6 mt-10 ">
              <Image
                src={data.image3}
                alt="Pin Diagram"
                width={400}
                height={200}
                className="  ml-6"
                objectFit="cover"
              />
            </div>
          )}

          <h2 className={data.ExperimentId === '8' ? "md:mt-10 md:text-2xl text-2xl mt-4  " : "md:mt-4 md:text-2xl text-2xl mt-4"}>
            {data.CircuitDiagramInfo}
          </h2>

          {data.ExperimentId !== '8' && (
            <div className="md:ml-32 mt-6 ml-4 ml-10 ">
              <Image
                src={data.image4}
                alt="Pin Diagram"
                width={400}
                height={330}
                className=""
                objectFit="cover"
              />
            </div>
          )}

          {data.ExperimentId === '8' && (
            <div className="md:ml-44 md:mt-10">
              <Image
                src={data.image5}
                alt="Circuit Diagram"
                width={192}
                height={240}
                objectFit="cover"
              />
            </div>
          )}

          <h1 className="md:text-2xl md:mt-6 text-2xl mt-8">Steps:</h1>
          <div className="md:leading-10">
            <p className="md:mt-4">{data.step}</p>
            {data.step1 && <p className="md:mt-2 mt-4">1: {data.step1}</p>}
            {data.step2 && <p className="md:mt-2">2: {data.step2}</p>}
            {data.step3 && <p className="md:mt-2">3: {data.step3}</p>}
            {data.step4 && <p className="md:mt-2">4: {data.step4}</p>}
            {data.step5 && <p className="md:mt-2">5: {data.step5}</p>}
            {data.step6 && <p className="md:mt-2">6: {data.step6}</p>}
            {data.step7 && <p className="md:mt-2">7: {data.step7}</p>}
            {data.step8 && <p className="md:mt-2">8: {data.step8}</p>}
          </div>

          <h2 className="md:mt-4 md:text-2xl text-2xl mt-8">Code:</h2>
          <CodeBox num={data.ExperimentId} exNam='Raspberry' language={'c'} />
          
          <h3 className="md:text-2xl md:mt-4 text-2xl mt-8">Result</h3>
          <p className="md:mt-4">{data.result}</p>
       
      </div>
    </>
  );
}
