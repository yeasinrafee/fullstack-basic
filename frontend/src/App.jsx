import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get('/api/jokes')
      .then((res) => setJokes(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <>
      <h1>Hello Frontend full-stack basic</h1>
      <p>The are are {jokes.length} jokes.</p>
      {jokes &&
        jokes.map((joke) => (
          <div key={joke.id}>
            <h2>{joke.title}</h2>
            <p>{joke.content}</p>
          </div>
        ))}
    </>
  );
}

export default App;
