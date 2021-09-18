import './App.css';
import getWeather from './http';

function App() {
  getWeather('kaunas');
  return <div className="App">here will be the weather app</div>;
}

export default App;
