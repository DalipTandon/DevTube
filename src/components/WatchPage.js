import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/AppSlice";
import { useSearchParams } from "react-router-dom";
import LiveContainer from "./LiveContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchparams] = useSearchParams();
  useEffect(() => {
    dispatch(closeMenu());
  });
  return (
    <div className="flex">
    <div className="p-8 ml-10">
      <iframe className="rounded-xl"
        width="900"
        height="500"
        src={"https://www.youtube.com/embed/"+searchparams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div>
        comment section
      </div>
    </div>
    <div className=" w-[500px]" >
      <LiveContainer/>
    </div>
    </div>
  );
};

export default WatchPage;
