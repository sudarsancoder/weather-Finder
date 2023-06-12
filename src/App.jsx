import { useState } from "react";
import "./App.css";
import Inputer from "./components/Inputer";
import axios from "axios";
import Result from "./components/Result";

function App() {
  const [input, setinput] = useState("");
  const [temp, settemp] = useState("");
  const [desc, setdesc] = useState("");
  const [icon, seticon] = useState("");
  const [city, setcity] = useState("");
  // console.log(input, temp, desc, icon);
  const findWeather = async () => {
    const apiKey = "9a579279c1197b73b06e3e49578ab15c";
    const unit = "metric";
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      input +
      "&appid=" +
      apiKey +
      "&units=" +
      unit;

    const response = await axios.get(url);
     console.log(response);
     const city = await response.data.name;
    const temp = await response.data.main.temp;
    const desc = await response.data.weather[0].description;
    const icon = await response.data.weather[0].icon;
    const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
   
    // console.log(temp, desc, imageURL);
    settemp(temp);
    setdesc(desc);
    seticon(imageURL);
    setcity(city);
    setinput("");
  };

  return (
    <div className="App">
      {temp === "" ? (
        <Inputer input={input} setinput={setinput} findWeather={findWeather} />
      ) : (
        <Result temp={temp} desc={desc} icon={icon} settemp={settemp} city={city} />
      )}
    </div>
  );
}

export default App;
