import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import getWeather from './http';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(query);
    setQuery('');
    console.log('stop');
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
    </div>
  );
}

export default App;
