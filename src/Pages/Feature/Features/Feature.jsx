import React, { useRef } from 'react';
import {useState,useEffect} from "react"
import axios from "axios";
import Navbar from '../../../Component/HomePage/Navbar/navbar';

import {Flex,Grid,Stack} from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom';
import Footers from '../../../Component/HomePage/footersecond/footers';
const Feature=()=>{
  let [data,setdata]=useState([])
  let [mostread,setmostread]=useState([])
  let [writers, setwriters]=useState([])
  let [box,setbox]=useState(new Array(10).fill(Number))
  let[bool,setbool]=useState(true)
  let [otherwriter,setotherwriter]=useState([])
  let [start,setstart]=useState(0)
  let [end,setend]=useState(20)
  let [latestnewsimage,setlatestnewsimage]=useState([])
  let setval=useRef()
  let [datta,setdatta]=useState(0)
  useEffect(()=>{
   let get=()=>{
      axios.get("http://localhost:8080/news").then(r=>{setlatestnewsimage(r.data.featureimage);setotherwriter(r.data.Writers);setdata(r.data.feature);setmostread(r.data.MostRead);setwriters(r.data.writershort)});
   }
   get()
  },[])
 useEffect(()=>{
   
 },[start])
   let funn=(value)=>{
     
      setdatta(value*20)
     
      console.log(datta)
      setstart(value*20)
      setend(start+20)
      
      data++
      
      
       
   }
   let navigate=useNavigate()
   return(
   <div className="newsmain" >
      <Navbar />
      <Flex justifyContent={"center"} style={{width:"100%",background:"white",height:"56px",marginBottom:"50px"}}>
         <Flex alignItems="center" style={{width:"80%",height:"80%"}}>
            <h1 style={{fontFamily:"BentonSans-Bold,Arial,Noto Sans,sans-serif",fontSize:"14px",fontWeight:"700"}} >Features</h1>
            <div style={{width:"2px",height:"24px" ,background:"black",marginLeft:"20px"}}></div>
            <Flex justifyContent={"space-evenly"} alignItems={"center"} width={"40%"} height="70%" >
               <p className="hhov" onClick={()=>navigate("/features")}>Features home</p>
               <p className="hhov" onClick={()=>navigate("/features/Writers")}>Writers  </p>
               <p className="hhov" onClick={()=>navigate("/news")}>The Cricket Monthly</p>
               <p className="hhov" onClick={()=>navigate("/features/gallery")}>Photo Galleries</p>
               
            </Flex>
         </Flex>
      </Flex>
      <Flex  justifyContent={"center"} gap="16px">
         {bool?<Flex border={"1px solid gray"} flexDirection={"column"} className="Latestnews" backgroundColor={"white"} borderRadius={20} >
            <Stack height={68.4} >
               <h1 className="h11">Features</h1>
            </Stack>
            <div className='latestnewsdiv'>
              {
               data.map((elem,index)=>{
                  if(start<index && index<end){
                     return(
                        <>
                        <Flex marginBottom={2} justifyContent={"space-evenly"} alignItems={"center"}  width={916} height={195.75} >
                           <Stack>
                              <img  className="img-responsive"  src={latestnewsimage[index][`image`]} />
                           </Stack>
                           <div className='ddiv'>
                              <h1 className="title">{elem.Title}</h1>
                              <p >{elem.dstextcompacts}</p>
                              <p><Flex><p style={{fontSize:"12px"}} >{elem.dstextcompactxs}</p>   <p style={{marginLeft:"20px",fontSize:"12px"}} >{elem.dstextcompactxs1}</p></Flex>  </p>
   
                           </div>
                          
                         
                        </Flex>
                        <hr></hr>
                        </>
                     )
                  }
                  
               })
              }
            </div>
            
         </Flex>:
         <Flex border={"1px solid gray"} flexDirection={"column"} className="Latestnews" backgroundColor={"white"} borderRadius={20} >
            <Stack height={68.4} >
               <h1 className="h11">ESPNcricinfo Writers Index</h1>
            </Stack>
            <hr></hr>
            <Grid   gridTemplateColumns={"repeat(2,40%)"} columnGap="30px"  >
               {
                  otherwriter.map((elem)=>{
                     return(<Flex  justifyContent={"space-evenly"} alignItems="center"  style={{width:"400px",height:"103px" ,textAlign:"left",}} >
                        <img src={elem.Image} style={{width:"62px",height:"64px",borderRadius:"100%"}}/>
                     <div  style={{width:"60%"}}>
                        <h1 className={"hhov"} style={{fontSize:"16px",fontFamily:"BentonSans-Bold,Arial,Noto Sans,sans-serif",fontWeight:"700"}}>{elem.Title}</h1>
                        <p style={{fontSize:"16px",fontFamily:"BentonSans-Bold,Arial,Noto Sans,sans-serif",color:"#48494A"}}>{elem.Field}</p>
                        <p style={{fontSize:"14px",fontFamily:"BentonSans-Bold,Arial,Noto Sans,sans-serif",color:"#03A9F4"}} >{elem.dstexttightm}</p>
                     </div>
                     
                     </Flex>)
                  })
               }
            </Grid>
         </Flex>}
         <div className="other">
            <div className="MostRead">
               <div className={"MostRead1"}>
                  <h2 className='h11' style={{fontSize:"14px",paddingTop:"10px"}}  >Most Read</h2>
               </div>
               <hr></hr>
               <div>
                     {
                        mostread.map((elem)=>{
                           return(<><Flex justifyContent={"space-around"} heigth={76.8 } marginTop={2} >
                              <div>
                                 <img style={{width:"63px",height:"63px",borderRadius:"5px"}} src={elem.Image} />
                              </div>
                              <div className="container">
                                 <h1>{elem.Title}</h1>
                                 <p><Flex><p style={{fontSize:"12px"}} >{elem.dstextcompactxxs}</p>   <p style={{marginLeft:"20px",fontSize:"12px"}} >{elem.dstextcompactxxs1}</p></Flex>  </p>
                              </div>

                           </Flex></>
                           )
                        })
                     }
               </div>
               
            </div>
            {bool?<div className="Writers">
                     <Flex className={"MostRead1"} alignItems={"center"} justifyContent={"space-between"}>
                        <h2 className='h11' style={{fontSize:"14px",paddingTop:"8px"}}  >Writers</h2>
                        <a href='#' onClick={()=>{navigate("/features/Writers");setbool(false)}}   style={{color:"#03A9F4",marginRight:"10px"}}>see all</a>
                     </Flex>
                     <hr></hr>
                     <div>
                        {
                           writers.map((elem,index)=>{
                              if(index<5){
                                 return<Flex justifyContent={"space-evenly"}>
                                 <div className='dddiv'>
                                    <h1>{elem.Title}</h1>
                                    <p>{elem.other}</p>
                                    <p>{elem.last}</p>
                                    <p></p>
                                 </div>
                                 <img src={elem.Image} style={{width:"62px",height:"64px",borderRadius:"100%"}}/>
                                 </Flex>
                              }
                              
                           })
                        }
                     </div>
            </div>:null}
            
         </div>
      </Flex>
      <Flex className='pagination' justifyContent={"center"} alignItems="CENTER" gap={1}>
         <button onClick={()=>{if(start>0){setstart(prev=>prev-20);setend(prev=>prev-20)}}} style={{padding:"0.5rem" , backgroundColor:"white"}} >Prev</button>
            {
              box.map((elem,index)=>{
               return <button onClick={()=>{funn(index)}} style={{padding:"0.5rem" , backgroundColor:"white"}}>{index}</button>
              })
            }
         <button onClick={()=>{if(end<160){setstart(prev=>prev+20);setend(prev=>prev+20)}}} style={{padding:"0.5rem" , backgroundColor:"white"}}>Next</button>
      </Flex>
      <Footers/>
   </div>
   )
}

export default Feature;