import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/config";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
const Videos=()=>{
   const[videos,setVideos]=useState([]);
    useEffect(()=>{
        getVideoData();
    },[])
 
     const getVideoData=async()=>{
        const data=await fetch(YOUTUBE_API);
        const json=await data.json();
        console.log(json);
        setVideos(json.items);
     }
  
    return (

        <div className="flex flex-wrap justify-center">
            {videos.map((video)=>{
              return <Link to={"/watch?v="+video.id}><VideoCard info={video} key={video.categoryId}/></Link> 
            })}
        </div>
    )
}

export default Videos;