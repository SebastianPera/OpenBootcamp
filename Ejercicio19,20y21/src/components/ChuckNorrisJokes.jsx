import { getJoke } from "../services/axios.service";
import { useState } from "react";
import { Button, CircularProgress, IconButton } from "@mui/material";
import { ThumbUp, ThumbDown } from "@mui/icons-material";
import "../styles/styles.scss"

const ChuckNorrisJokes = () => {
  const [joke, setJoke] = useState(null);
  const [like, setLike] = useState(0);
  const [notLike, setNotLike] = useState(0);
  const [loading, setLoading] = useState(false);

  const getRandomJoke = async () => {
    try {
      setLoading(true)
      const { data } = await getJoke();
      setJoke(data);
      setLoading(false)
    } catch (err) {
      console.log(err);
      alert(`Something has gone wrong: ${err}`);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          width: "50%",
        }}
      >
        <h1>Chuck Norris Jokes</h1>
        <p>{joke ? joke.value : "Click the search button"}</p>
        <Button variant="contained" onClick={getRandomJoke} style={{width:'25%', height:'40px'}}>
          {loading ? <CircularProgress size={20} className="loading"/> : "Search Joke"}
        </Button>
        <div>
          <IconButton size="large" onClick={() => setLike(like + 1)}>
            <ThumbUp />
          </IconButton>
          <IconButton size="large" onClick={() => setNotLike(notLike + 1)}>
            <ThumbDown />
          </IconButton>
        </div>
      </div>
      <div>
        <p style={{ fontWeight: "bold" }}>{`Funny jokes: ${like}`}</p>
        <p style={{ fontWeight: "bold" }}>{`Bad jokes: ${notLike}`}</p>
      </div>
    </div>
  );
};

export default ChuckNorrisJokes;
