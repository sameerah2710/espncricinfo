import React ,{useEffect, useState}from 'react'
import axios from "axios"
import { Grid,Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../../Component/HomePage/Navbar/navbar'
import Footers from '../../../Component/HomePage/footersecond/footers'

export default function Gallery() {
    let [data,setdata]=useState([])
    useEffect(()=>{
        let get=()=>{
           axios.get("http://localhost:8080/news").then(r=>{setdata(r.data.photogallery)});
        }
        get()
    },[])
    let navigate=useNavigate()
  return (
    <div style={{width:"100%",backgroundColor:"whitesmoke"}}>
      <Navbar/>
      <Flex justifyContent={"center"} style={{width:"100%",background:"white",height:"56px",marginBottom:"50px"}}>
         <Flex alignItems="center" style={{width:"80%",height:"80%"}}>
            <h1 style={{fontFamily:"BentonSans-Bold,Arial,Noto Sans,sans-serif",fontSize:"14px",fontWeight:"700"}} >Features</h1>
            <div style={{width:"2px",height:"24px" ,background:"black",marginLeft:"20px"}}></div>
            <Flex justifyContent={"space-evenly"} alignItems={"center"} width={"40%"} height="70%" >
               <p className="hhov" onClick={()=>navigate("/features")}>Features home</p>
               <p className="hhov" onClick={()=>navigate("/features/Writers")}>Writers  </p>
               <p className="hhov" onClick={()=>navigate("/features")}>The Cricket Monthly</p>
               <p className="hhov" onClick={()=>navigate("/features/gallery")}>Photo Galleries</p>
               
            </Flex>
         </Flex>
      </Flex>
    <Flex width="100%" justifyContent={"center"} alignIems="center">
    <img style={{width:"824px",margin:"auto",height:"464px",marginBottom:"10px", borderRadius:"10px"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1280,q_70/lsci/db/PICTURES/CMS/266000/266042.jpg"/>
    <img style={{borderRadius:"10px",marginRight:"70px",width:"402px",heigth:"268.26px",marginTop:"70px"}} src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_800,q_50/lsci/db/PICTURES/CMS/322300/322312.jpg'/>
    </Flex>
    
    <Grid gridTemplateColumns={"repeat(3,400px)"} justifyContent="center" gap="10px"   >
      {
          data.map((elem)=>{
            return(<img style={{borderRadius:"10px",width:"400px"}} src={elem.image} />)
        })
    }
    </Grid>
    <Footers/>
    </div>
  )
}
