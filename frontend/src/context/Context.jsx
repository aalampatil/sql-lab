import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { axiosApi } from "../utils/axiosApi";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [assignmentType, setAssignmentType] = useState("");
  const [current, setCurrent] = useState("");
  const [query, setQuery] = useState("");
  const [challengeData, setChallengeData] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const executeQuery = async (challengeId, query) => {
    try {
      setLoading(true);

      const response = await axiosApi.post("/api/query/execute-query", {
        challengeId,
        query,
      });

      const { success, message, result } = response.data;

      if (success) {
        setResult(result);
        setMessage(message);
      } else {
        setResult(null);
        setMessage("Incorrect");
      }
    } catch (error) {
      console.error(error);
      setResult(null);
      setMessage("Query failed");
    } finally {
      setLoading(false);
    }
  };

  const fetchChallenges = async () => {
    try {
      const response = await axiosApi.get("/api/query/challenges");
      // console.log(response.data);
      if (response.data.success) {
        setChallengeData(response.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchChallenges();
  }, []);

  const value = {
    assignmentType,
    setAssignmentType,
    current,
    setCurrent,
    query,
    setQuery,
    challengeData,
    executeQuery,
    result,
    loading,
    message,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export function UseDataContext() {
  return useContext(DataContext);
}
