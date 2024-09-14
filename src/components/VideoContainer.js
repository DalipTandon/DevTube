import React from "react";
import ButtonList from "./ButtonList";
import Videos from "./Videos";

const VideoContainer=()=>{
    return(
        <div className="col-span-11">
            <ButtonList/>
            <Videos/>
        </div>
    )
}

export default VideoContainer;