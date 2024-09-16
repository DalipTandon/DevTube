import React from "react";
import { YOUTUBE_API } from "../utils/config";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useYData from "../Hooks/useYData";


const Videos=()=>{
const[videos]=useYData(YOUTUBE_API);
if (!videos || videos.length === 0) return null;
    return (

        <div className="flex flex-wrap justify-center">
            {videos.map((video)=>{
              return <Link to={"/watch?v="+video.id} key={video.id}><VideoCard info={video} /></Link> 
            })}
        </div>
    )
}

export default Videos;