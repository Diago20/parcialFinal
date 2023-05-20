import { useState, useEffect } from "react";
import Character from "../character/character";

const characterList = () => {
  const [characters, setcharacters] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setcharacters(data.results);
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="row">
        {characters.map((character) => {
          return (
            <div className="col-md-4" key={character.id}>
              <Character character={character} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default characterList;
