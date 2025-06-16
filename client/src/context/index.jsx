import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [loading, setLoading] = useState(false);

  const [listOfData, setListOfData] = useState([]);

  async function fetchOfListOfData() {
    setLoading(true);
    try {
      const response = await axios.get("/api/");
      const result = response.data;

      console.log(result);
      if (result && result.listOfData && result.listOfData.length) {
        setListOfData(result.listOfData);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchOfListOfData();
  }, []);
  return (
    <GlobalContext.Provider
      value={{ loading, setLoading, listOfData, setListOfData }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
