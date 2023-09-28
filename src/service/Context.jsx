import React, { useState, useEffect } from "react";

const Context = React.createContext();

const Provider = ({ children }) => { // Added 'children' prop
  const urlAPI = "http://localhost:3000/api/estateData.json";

  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetchLogements();
  }, []);

  const fetchLogements = async () => {
    try {
      const response = await fetch(urlAPI); // Removed template string
      const data = await response.json();
      setLogements(data);
    } catch (error) {
      console.error("Error fetching logements:", error);
    }
  };

  return (
    <Context.Provider value={logements}>
      {children} {/* Render children components */}
    </Context.Provider>
  );
};

export { Provider, Context }; // Exporting Context for use in other components
