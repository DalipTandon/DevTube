import React from "react";
import ButtonList from "./ButtonList";
import Videos from "./Videos";

const VideoContainer=()=>{
    return(
        <div className=" overflow-hidden">
            <ButtonList/>
            <Videos/>
        </div>
    )
}

export default VideoContainer;