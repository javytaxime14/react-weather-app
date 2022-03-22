import React from "react";
import "./SearchEngine.css";
import current from "./current.png";
import search from "./search.png";

export default function SearchEngine() {
    return (
        <div className="search-engine">
        <div className="container mt-5">
            <form>
                <div className="form-group">
                    <label htmlFor="search" className="mb-2">What city are you looking for? </label>
                    <input
                    type="text"
                    className="form-control form-control-sm mb-2" 
                    id="search-form"
                    placeholder="Enter a city"
                    />
                </div>
                <button type="submit" className="btn btn-success btn-sm search-button">Search <img src={search} alt="search" className="search-icon" /></button>
                <button type="submit" className="btn btn-success btn-sm location button"> <img src={current} alt="current location" className="current"/> Current Location </button>
            </form>
        </div>
        </div>
    );
}