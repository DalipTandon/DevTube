import React from "react";
import { useSelector } from "react-redux";

const VideoCard=({info})=>{
    const{snippet,statistics}=info;
    const{channelTitle,title,thumbnails}=snippet;
    const isDark=useSelector((store)=>store.theme.isDark);
    return(
        <div className=" h-64 w-64 p-2 mx-4 my-3 shadow-md cursor-pointer hover:scale-105">
            <img alt="video" className="rounded-md" src={thumbnails.medium.url}/>
        <ul >
            <li className="font-semibold w-full my-1 text-sm">{title}</li>
            <li className={`${isDark?"text-gray-400": "text-gray-800"}`}>{channelTitle}</li>
            <li className={`${isDark?"text-gray-400": "text-gray-800"}`}>{statistics.viewCount} views</li>
            </ul>            
        </div>
    )
}

export default VideoCard;