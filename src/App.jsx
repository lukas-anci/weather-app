import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import getWeather from './utils/http';
import Main from './components/Main/Main';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await getWeather(query);
    setWeather(data);
    setError(JSON.stringify(data));
    setQuery('');
  };

  return (
    <div className="App container">
      {!error && (
        <p className="define-weather">
          Please enter a city to find what is the weather like
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className="input"
          type="text"
          placeholder="Enter City..."
        />
        <Button>Search</Button>
      </form>

      {typeof weather.main === 'undefined' || weather === [] ? (
        <>
          {Object.keys(error).length < 30 && (
            <p className="error">{error.replace(/['"]+/g, '')}</p>
          )}
        </>
      ) : (
        <Main weather={weather} />
      )}
    </div>
  );
}

export default App;
