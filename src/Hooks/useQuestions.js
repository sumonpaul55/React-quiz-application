import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

const useQuestion = (videoId) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuistion] = useState([]);

  useEffect(() => {
    async function fetchQuestion() {
      //database Related works
      const db = getDatabase();
      const QuizRef = ref(db, "quiz/" + videoId + "/questions");
      const QuizQuery = query(QuizRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        // Request firebase database
        const snapshot = await get(QuizQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setQuistion((prevquestion) => {
            return [...prevquestion, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchQuestion();
  }, [videoId]);
  return {
    loading,
    error,
    questions,
  };
};
export default useQuestion;
