import "./App.css";
import { useState, useEffect } from "react";
import StarShipCard from "./components/StarShipCard";
import { fetchData } from "./service/sw-api";
function App() {
  const [starships, setStarship] = useState([]);
  useEffect(() => {
    fetchData().then((res) => {
      setStarship(res);
    });
  }, []);
  return (
    <div className="App">
      <header>
        <h1>STAR WARS STARSHIPS</h1>
      </header>
      <div className="container">
        {starships.map((starship, index) => {
          const { name } = starship;
          return <StarShipCard name={name} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
