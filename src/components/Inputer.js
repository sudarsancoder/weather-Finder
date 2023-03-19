import React from "react";
import Input from "@material-ui/core/Input";
import { Button } from "@material-ui/core";
import "./Input.css";

function Inputer({ input, setinput, findWeather }) {
  
  const handleChange = (event) => {
    setinput(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    findWeather();
       
  };

  return (
    <div className="inputBox">
      <div className="inputBox_field">
        <h1>Sudarsan Weather App</h1>
        <p>Powered By</p>
        <img
          src="https://sudarsandevelopers.in/wp-content/uploads/2021/06/1200-1600.png"
          alt="logo"
        />
        {/* <br/> */}
        <form>
          <Input
            placeholder="Enter City Name"
            onChange={handleChange}
            value={input}
            autoFocus
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleClick}
          >
            {" "}
            Search{" "}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Inputer;
