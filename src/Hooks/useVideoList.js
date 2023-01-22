import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

const useVideoList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchVideo() {
      //database Related works
      const db = getDatabase();
      const videoRef = ref(db, "videos");
      const videoquery = query(videoRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        // Required firebase database
        const snapshot = await get(videoquery);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchVideo();
  }, []);
};

export default useVideoList;
