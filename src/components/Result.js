import { Button } from "@material-ui/core";
import React from "react";
import "./Result.css";

const Result = ({ temp, desc, icon, settemp ,city}) => {
    
  return (
    <div className="result">
      <div className="result_box">
        <header style={{fontSize:"25px"}}>{city}</header>
        <h1>Temperature : {temp}{'\u00b0'}C</h1>
        <p style={{fontSize:"30px"}}>{desc}</p>
        <img src={icon} alt="logo" />
        <br />
        <Button
          variant="contained"
          color="default"
          onClick={() => {
            settemp("");
          }}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default Result;
