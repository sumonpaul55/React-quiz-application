import { getDatabase } from "firebase/database";
import { useEffect } from "react";

const useVideoList = () => {
  useEffect(() => {
    async function fetchVideo() {
      const db = getDatabase();
      //database Related works

      console.log(db);
    }
    fetchVideo();
  }, []);
};

export default useVideoList;
