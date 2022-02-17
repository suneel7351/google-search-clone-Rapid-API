import React, { useState } from "react";
import ResultContext from "./UseResultContext";
import axios from "axios";

export const ResultContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  //   /images,/search,/videos
  const getResults = (type) => {
    setIsLoading(true);

    var options = {
      method: "GET",
      url: `https://google-search3.p.rapidapi.com/api/v1${type}`,
      headers: {
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setResults(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <>
      <ResultContext.Provider
        value={{ isLoading, searchTerm, setSearchTerm, getResults, results }}
      >
        {children}
      </ResultContext.Provider>
    </>
  );
};
