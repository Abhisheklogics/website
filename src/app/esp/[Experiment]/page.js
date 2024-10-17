'use client'

import dynamic from "next/dynamic";

const CodeBox=dynamic(()=>import('@/components/code/code'),{
  ssr:false
})
 const Loading=dynamic(()=>import('@/components/loading/Loading'),{
  ssr:false
})
import getData from "@/app/apiCall";
import { useEffect,useState,useCallback } from "react";

export default  function Page({params}) {
  
  let [data,setData]=useState([]);
  
  const [loading, setLoading] = useState(false);
  let fetchData=useCallback(async ()=>{
    try {
      setLoading(true);
      const response = await getData(`/api/experiments/Esp`, params.Experiment);
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
        <div className="h-fit w-full p-5 bg-white bg-cover rounded-xl leading-8 text-justify break-words 
          md:h-fit md:w-[770px] md:text-md  md:ml-[350px] md:mt-[-478px] 
      md:p-5 md:bg-white md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap 
      ">
        <h1 className="  text-center text-2xl md:text-center md:text-2xl
      ">{data.ExperimentName}</h1>
       <div className="md:ml-32 md:mt-6 mt-6"> <img className="md:h-60 md:w-96 md:ml-10" loading="lazy"
      src={data.image1} alt="Experiment Image" /></div>
       <h1 className="md:mt-4  md:text-sm md:ml-2 mt-4  text-sm ml-2 font-bold">madeBy : Aman raj</h1>
        <h2 className="md:text-sm md:mt-2 ">{data.madeBy}</h2>
        <p className="md:mt-2">{data.madeByinfo}</p>
        <h2 className="  md:mt-10 ">{data.overview}</h2>
        <h2 className=" md:text-2xl  md:mt-10 ">Hardware components</h2>
        <p className="md:mt-4">{data.component}</p>

      
        <div className="md:ml-12 md:mt-8">
         
            <img width={590} height={400} loading="lazy" src={data.image2} alt="Specifications" />
         
        </div>

        <h2 className="md:text-2xl md:mt-14 ">{data.pinDiagramInfo}</h2>
       
          
     {data.ExperimentId == '1' ?<div className="md:ml-20  md:h-[300px]">
         
         <img  className='md:mt-2 md:h-[300px] md:w-[420px]' loading="lazy" src={data.image3} alt="Specifications" />
      
     </div>:<div className="md:ml-20  md:h-[300px]">
         
         <img  className='md:mt-10 md:h-60 md:w-[380px] md:ml-32' loading="lazy" src={data.image3} alt="Specifications" />
      
     </div>} 
      


        <h2 className=" md:text-2xl ">{data.CircuitDiagramInfo}</h2>
        
        <div className="md:ml-32 md:mt-10">
         
         <img className="md:h-80 md:w-96 md:ml-24" loading="lazy" src={data.image4} alt="Specifications" />
      
     </div>
        

        <h1 className="md:text-2xl ">Steps:</h1>
        <div className="md:ml-14">
          <p className="md:mt-4 ">{data.step}</p>
          {data.step1 && <p className="md:mt-2 ">1: {data.step1}</p>}
          {data.step2 && <p className="md:mt-2">2: {data.step2}</p>}
          {data.step3 && <p className="md:mt-2">3: {data.step3}</p>}
          {data.step4 && <p className="md:mt-2">4: {data.step4}</p>}
          {data.step5 && <p className="md:mt-2">5: {data.step5}</p>}
          {data.step6 && <p className="md:mt-2">6: {data.step6}</p>}
          {data.step7 && <p className="md:mt-2">7: {data.step7}</p>}
          {data.step8 && <p className="md:mt-2">8: {data.step8}</p>}
          {data.step9 && <p className="md:mt-2">9: {data.step9}</p>}
          {data.step10 && <p className="md:mt-2">10: {data.step10}</p>}
          {data.step11 && <p className="md:mt-2">11: {data.step11}</p>}
          {data.step12 && <p className="md:mt-2">12: {data.step12}</p>}
          {data.step13 && <p className="md:mt-2">13: {data.step13}</p>}
          {data.step14 && <p className="md:mt-2">14: {data.step14}</p>}
          {data.step15 && <p className="md:mt-2">15: {data.step15}</p>}
          {data.step16 && <p className="md:mt-2">16: {data.step16}</p>}
          {data.step17 && <p className="md:mt-2">17: {data.step17}</p>}
          {data.step18 && <p className="md:mt-2">18: {data.step18}</p>}
          {data.step19 && <p className="md:mt-2">19: {data.step19}</p>}
          {data.step20 && <p className="md:mt-2">20: {data.step20}</p>}
          
          
        </div>

        <h2 className="md:mt-4 md:text-2xl ">Code:</h2>
        <CodeBox language={'c'} num={data.ExperimentId} exNam='esp'/>
        
        <h3 className="md:text-2xl  md:mt-6">Result</h3>
        <p className="md:mt-6">{data.result}</p>
      </div>
        </>
    );
  }