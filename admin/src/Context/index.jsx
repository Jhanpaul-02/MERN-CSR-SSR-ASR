import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

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

  async function handleSaveData() {
    try {
      const response = await axios.post("/api/", {
        title: formData.title,
        description: formData.description,
      });
      const result = response.data;
      if (result) {
        setListOfData([...listOfData, result]);
        setFormData({
          title: "",
          description: "",
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <GlobalContext.Provider
      value={{
        loading,
        setLoading,
        formData,
        setFormData,
        handleSaveData,
        listOfData,
        setListOfData,
        fetchOfListOfData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
