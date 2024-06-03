import React, { useEffect, useState } from "react";
import "./AutoSuggestion.css";
const AutoSuggestion = (props) => {
  //https://dummyapi.online/api/movies
  const [inputValue, setInputValue] = useState("");
  const [suggestedMovies, setSuggestedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchHandler = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const getsuggestions = async () => {
      setIsLoading(true);
      const resp = await fetch("https://dummyapi.online/api/movies");
      const response = await resp.json();
      const suggestedList = response.filter((movie) =>
        movie.movie.includes(inputValue)
      );
      setSuggestedMovies(suggestedList);
      setIsLoading(false);
    };
    inputValue.length > 2 && getsuggestions();
  }, [inputValue]);

  const suggestionClickHandler = (movie) => {
    setInputValue(movie);
    setSuggestedMovies([]);
  };

  const getresult = (movie, highlight) => {
    const parts = movie.split(new RegExp(`(${highlight})`, "gi"));
    console.log(parts);
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <b key={index} style={{ color: "red" }}>
              {part}
            </b>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <div className="auto_suggest_container">
      <h3>Auto suggestions:</h3>
      <input
        type="text"
        className="auto_suggest_input"
        placeholder="Search for movies"
        onChange={(e) => searchHandler(e)}
        value={inputValue}
      ></input>
      {suggestedMovies.length > 0 && (
        <ul className="auto_suggest_ul">
          {isLoading && <p style={{ color: "black" }}>Loading....</p>}
          {suggestedMovies.map((mov, index) => (
            <p
              key={index}
              className="auto_suggest_li"
              onClick={() => suggestionClickHandler(mov.movie)}
            >
              {getresult(mov.movie, inputValue)}
            </p>
          ))}
        </ul>
      )}
    </div>
  );
};
export default AutoSuggestion;
