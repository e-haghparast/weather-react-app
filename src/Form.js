import React from "react";
import "./form.css";
export default function Form() {
  return (
    <div className="Form">
      <form>
        <div className="row">
          <input
            type="search"
            placeholder="Enter a city.."
            autoFocus="on"
            className="search-city col-9"
          />
          <div className="col-3">
            <input type="submit" value="Search" className="search-button btn w-100" />
          </div>
        </div>
      </form>
    </div>
  );
}
