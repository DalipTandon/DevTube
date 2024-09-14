import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/config";
import VideoCard from "./VideoCard";
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
              return  <VideoCard info={video} key={video.categoryId}/>
            })}
        </div>
    )
}

export default Videos;