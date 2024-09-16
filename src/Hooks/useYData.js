import { useState, useEffect } from "react";

const useYData = (YOUTUBE_API) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideoData = async () => {
      const data = await fetch(YOUTUBE_API);
      const json = await data.json();
      setVideos(json.items);
            
    };

    getVideoData(); // calling the function inside useEffect
  }, [YOUTUBE_API]); // add YOUTUBE_API as a dependency

  return [videos];
};

export default useYData;
