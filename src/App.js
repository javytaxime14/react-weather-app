import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default function App() {
  return (
    <div className="App"> 
    <h1 className='text-center'> Let's talk about weather! ☀️</h1>
      <div className="container">
        <div className="row">
          <div className="col-6 mt-3">
            <p>Search Engine</p>
            <p>
              <img src="https://https://static.meteoblue.com/assets/images/picto/07_day.svg" alt="weather icon" className="mt-4" />
            </p>
            <p><strong> Weather Description: </strong></p>
            <p><strong>Current Temperature: </strong></p>
          </div>

          <div className="col-6 mt-5">
          <h2>5 Day Forecast:</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-6 mt-5">
            <h2 className='text-center'>SomeCity, Country</h2>
          </div>
          <div className="col-6 mt-2"> {/* Make this section with cards */}  
            <p>Feels Like:</p>
            <p>Humidity:</p>
            <p>Wind Speed:</p>
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


