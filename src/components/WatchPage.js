import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/AppSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchparams] = useSearchParams();
  useEffect(() => {
    dispatch(closeMenu());
  });
  return (
    <div className="p-8 ml-10">
      <iframe className="rounded-xl"
        width="900"
        height="500"
        src={"https://www.youtube.com/embed/"+searchparams.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
