import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    fetch("http://aniiiiiiimeeeeeeeapiiiii.herokuapp.com/anime/v1/get")
      .then((res) => res.json())
      .then((res) => {
        setAnime(res.data[0]);
        // console.log(res.data)
      });
  }, [setAnime]);

  return (
    <div className="App">
      <h1>{anime.title}</h1>
      <iframe src={anime.trailer} frameborder="0"></iframe>
    </div>
  );
}

export default App;
