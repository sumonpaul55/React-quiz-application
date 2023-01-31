import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

const useQuestions = (videoId) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setquestions] = useState([]);

  useEffect(() => {
    async function fetchquestion() {
      //database Related works
      const db = getDatabase();
      const quizRef = ref(db, "quiz/" + videoId + "/questions");
      const quizQuery = query(quizRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        // Request firebase database
        const snapshot = await get(quizQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setquestions((prevQusetions) => {
            return [...prevQusetions, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchquestion();
  }, [videoId]);

  return {
    loading,
    error,
    questions,
  };
};
export default useQuestions;
