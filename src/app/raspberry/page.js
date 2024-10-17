
'use client'
import getData from "../apiCall";
import Image from "next/image";
import dynamic from "next/dynamic";
const CodeBox=dynamic(()=>import('@/components/code/code'),{
  ssr:false
})
 const Loading=dynamic(()=>import('@/components/loading/Loading'),{
  ssr:false
})

import {useEffect,useState,useCallback} from 'react';


export default function Page() {
  let [data,setData]=useState([]);
  
  const [loading, setLoading] = useState(false);
  let fetchData=useCallback(async ()=>{
    try {
      setLoading(true);
      const response = await getData(`/api/experiments/Res`, 1);
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
       
        <div className="h-fit w-full p-5 bg-white bg-cover rounded-xl leading-10 text-justify break-words 

          md:h-fit md:w-[790px]   md:ml-[330px] md:mt-[-630px]   2xl:ml-[430px]
      md:p-5 md:bg-white md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap 
      ">
         
              <h1 className=" text-center text-2xl 
              md:text-center md:text-2xl 
      ">{data.ExperimentName}</h1>
        <div className=" mt-6
        md:ml-32 md:mt-6"><img  className="h-52 w-full 
        md:h-52 md:w-80 md:ml-20"
         src={data.image1} alt="Experiment Image" /></div>
        <h2 className="text-sm mt-2 font-bold
        md:text-sm md:mt-2">{data.madeBy}</h2>
        <p className="mt-6
        md:mt-6">{data.madeByinfo1}</p>
         <p className="mt-6
        md:mt-6">{data.madeByinfo2}</p>
        <h2 className=" text-2xl  mt-10
        md:text-2xl  md:mt-10">{data.overview}</h2>
        <p className="mt-10
        md:mt-10">{data.overviewinfo1}</p>
         <p className="mt-10
        md:mt-10">{data.overviewinfo2}</p>

        <div>
          <p className="mt-10 text-2xl
          md:mt-10 md:text-2xl">{data.Material}</p>
          {data.Material1 && <p className="mt-4
          md:ml-10 md:mt-4">1: {data.Material1}</p>}
          {data.Material2 && <p className=" mt-2
          md:ml-10 md:mt-2">2: {data.Material2}</p>}
          {data.Material3 && <p className="mt-2
          md:ml-10 md:mt-2">3: {data.Material3}</p>}
          {data.Material4 && <p className=" mt-2
          md:ml-10 md:mt-2">4: {data.Material3}</p>}
          {data.Material5 && <p className=" mt-2
          md:ml-10 md:mt-2">5: {data.Material5}</p>}
        
        </div>
   
            { data.ExperimentId=='7'?<h2>{data.CircuitDiagramInfo} </h2>:''}
            { data.ExperimentId=='7'?<div className="ml-20
            md:ml-20"><Image width={300} height={100} loading="lazy" src={data.image2} alt="Specifications" /></div>:<div className="
            mt-8
            md:ml-28 md:mt-8"><Image width={400} height={100} src={data.image2} alt="Specifications" /></div>}
         
      
           
       
        
        
           {data.ExperimentId =='8' ? <h2 className="text-2xl
           md:text-2xl ">{data.pinDiagramInfo}</h2>:<h2 className="text-2xl mt-8
           md:text-2xl md:mt-8">{data.pinDiagramInfo}</h2>}
      
    
           { data.ExperimentId == '8' ? <div className="ml-20
           md:ml-20"><Image height={200}  width={400} src={data.image3} alt="Pin Diagram" /></div>:<div className="mt-6
           md:ml-36 md:mt-6"><Image height={100}  width={400} src={data.image3} alt="Pin Diagram" /></div>}
    
           { data.ExperimentId =='8' ? <h2 className="mt-4 text-2xl
           md:mt-4 md:text-2xl ">{data.CircuitDiagramInfo}</h2>:<h2 className="mt-4 text-2xl 
           md:mt-4 md:text-2xl ">{data.CircuitDiagramInfo}</h2>}
         
       { data.ExperimentId != '7' ? <div className="
       md:ml-28"><Image height={100}  width={340} src={data.image4} alt="Pin Diagram" /></div>:''}
           {data.ExperimentId == '8' ?<div className="ml-20
           md:ml-20"><Image height={100}  width={300} src={data.image5} alt="Circuit Diagram" /></div>:''}
         

        <h1 className="text-2xl  mt-6
        md:text-2xl  md:mt-6 ">Steps:</h1>
        <div className="leading-10">
          <p className="md:mt-4 ">{data.step}</p>
          {data.step1 && <p className="mt-2
          md:mt-2">1: {data.step1}</p>}
          {data.step2 && <p className="mt-2
          md:mt-2">2: {data.step2}</p>}
          {data.step3 && <p className="mt-2
          md:mt-2">3: {data.step3}</p>}
          {data.step4 && <p className="mt-2
          md:mt-2">4: {data.step4}</p>}
          {data.step5 && <p className="mt-2
          md:mt-2">5: {data.step5}</p>}
          {data.step6 && <p className="mt-2
          md:mt-2">6: {data.step6}</p>}
          {data.step7 && <p className="mt-2
          md:mt-2">7: {data.step7}</p>}
          {data.step8 && <p className="mt-2
          md:mt-2">7: {data.step8}</p>}
        
        
        </div>

        <h2 className="mt-4 text-2xl
        md:mt-4 md:text-2xl">Code:</h2>
     <CodeBox  language={'c'} num={data.ExperimentId} exNam='Raspberry' />
        <h3 className="text-2xl mt-4
        md:text-2xl md:mt-4">Result</h3>
        <p className="mt-4
        md:mt-4">{data.result}</p>
       

      </div>
      
   
      </>
  );
}
