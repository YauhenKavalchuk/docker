import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001')
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <ul>
      {movies.map(({ title, year, director }) => (
        <li key={title}>{title} ({year}) - {director}</li>
      ))}
    </ul>
  );
}

export default App;
