import React from "react";
import "./Variables.css";
import temp from "./temp.png";
import humidity from "./humidity.png";
import wind from "./wind.png";

export default function Variables() {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
              <div className="col">
                <div className="card w-75 variable">
                  <div className="card-body">
                    <h6 className="card-title"><img src={temp} alt="temperature" className="temp" />
                      Feels like:</h6>
                    <p className="card-text">20°C</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card w-75 variable">
                  <div className="card-body">
                    <h6 className="card-title"><img src={humidity} alt="humidity" className="humidity" />Humidity:</h6>
                    <p className="card-text">30%</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card w-75 variable">
                  <div className="card-body">
                    <h6 className="card-title"><img src={wind} alt="wind" className="wind" />Wind speed:</h6>
                    <p className="card-text">8 km/h</p>
                  </div>
                </div>
              </div>
            </div> 

        );      
    }