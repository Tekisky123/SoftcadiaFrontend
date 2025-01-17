import React from "react";
import "./PageNotFound.css"
import { useNavigate } from "react-router";


const PageNotFound = () => {

  const navigate = useNavigate()

  return (
    <div className="flex-container">
      <div className="text-center">
        <h1>
          <span className="fade-in" id="digit1">
            4
          </span>
          <span className="fade-in" id="digit2">
            0
          </span>
          <span className="fade-in" id="digit3">
            4
          </span>
        </h1>
        <h3 className="fadeIn">PAGE NOT FOUND</h3>
        <button type="button" name="button" onClick={()=>navigate("/")}>
          Return To Home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;