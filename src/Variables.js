import React from "react";
import "./Variables.css";

export default function Variables() {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
              <div className="col">
                <div className="card w-75 variable">
                  <div className="card-body">
                    <h6 className="card-title">Feels like:</h6>
                    <p className="card-text">20°C</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card w-75 variable">
                  <div className="card-body">
                    <h6 className="card-title">Humidity:</h6>
                    <p className="card-text">30%</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card w-75 variable">
                  <div className="card-body">
                    <h6 className="card-title">Wind speed:</h6>
                    <p className="card-text">8 km/h</p>
                  </div>
                </div>
              </div>
            </div> 

        );      
    }