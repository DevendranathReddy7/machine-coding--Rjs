import React, { useEffect, useState } from "react";
import "./AutoSuggestion.css";
const AutoSuggestion = (props) => {
  //https://dummyapi.online/api/movies
  const [inputValue, setInputValue] = useState("");
  const [suggestedMovies, setSuggestedMovies] = useState([]);

  const searchHandler = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const getsuggestions = async () => {
      const resp = await fetch("https://dummyapi.online/api/movies");
      const response = await resp.json();
      const suggestedList = response.filter((movie) =>
        movie.movie.includes(inputValue)
      );
      setSuggestedMovies(suggestedList);
    };
    inputValue.length > 2 && getsuggestions();
  }, [inputValue]);

  const suggestionClickHandler = (movie) => {
    setInputValue(movie);
    setSuggestedMovies([]);
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
          {suggestedMovies.map((mov, index) => (
            <p
              key={index}
              className="auto_suggest_li"
              onClick={() => suggestionClickHandler(mov.movie)}
            >
              {mov.movie}
            </p>
          ))}
        </ul>
      )}
    </div>
  );
};
export default AutoSuggestion;
