import { getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect } from "react";

const useVideoList = () => {
  useEffect(() => {
    async function fetchVideo() {
      //database Related works
      const db = getDatabase();
      const videoRef = ref(db, "videos");
      const videoquery = query(videoRef, orderByKey());
    }
    fetchVideo();
  }, []);
};

export default useVideoList;
