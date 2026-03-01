import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { axiosApi } from "../utils/axiosApi";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [assignmentType, setAssignmentType] = useState("");
  const [current, setCurrent] = useState("");
  const [query, setQuery] = useState("");
  const [challengeData, setChallengeData] = useState([]);

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

  const executeQuery = async (challengeId, query) => {
    try {
      const response = await axiosApi.post("/api/query/execute-query", {
        challengeId,
        query,
      });
      console.log(response);
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
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export function UseDataContext() {
  return useContext(DataContext);
}
