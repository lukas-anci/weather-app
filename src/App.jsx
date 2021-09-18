import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import getWeather from './http';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await getWeather(query);
    setQuery('');
    setWeather(data);
    console.log('stop');
    console.log('weather cia', weather);
  };

  return (
    <div className="App container">
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
      {typeof weather.main === 'undefined' ? (
        <p>Thers no data yet</p>
      ) : (
        <div>
          <span>{weather.name}</span>
        </div>
      )}
    </div>
  );
}

export default App;
