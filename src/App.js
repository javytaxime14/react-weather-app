import './App.css';
import Variables from './Variables';
import Forecast from './Forecast';
import SearchEngine from './SearchEngine';

export default function App() {
  return (
    <div className="App"> 
    <h1 className='text-center mt-3'> Let's talk about weather! ☀️</h1>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6 mt-3">
            <SearchEngine />
            <p>
              <img src="https://static.meteoblue.com/assets/images/picto/07_day.svg" alt="weather icon" className="mt-4 condition" />
            </p>
            <p><strong className='subtitle'> Weather Description: </strong></p>
            <p><strong className='subtitle'>Current Temperature: </strong></p>
          </div>

          <div className="col-sm-6 mt-5">
          <Forecast />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 mt-5">
            <h2 className='text-center mb-3'>SomeCity, Country</h2>
          </div>
          <div className="col-sm-6 mt-5">
            <Variables />
          </div>
        </div>
      </div>
      <footer className="text-center mt-5">
        <small>
          <a href="https://github.com/javytaxime14/react-weather-app" target="_blank" rel="noreferrer">
          Open-sourced project on GitHub</a>, coded by <a href="https://www.linkedin.com/in/javiera-hidalgo-n%C3%BA%C3%B1ez-87101022a/" target="_blank" rel="noreferrer">Javiera Hidalgo</a> 🦋
        </small>
      </footer>
    </div>
  );
}


