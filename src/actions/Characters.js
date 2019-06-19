import { FETCH_CHARACTERS } from "./types";
import datas from "../constant/characters.json";

//Fetching data from the JSON file for Character Names.
export function fetchCharacters() {
  //console.log("ACTION", datas.characters);
  let augData = datas.characters.map(data => {
    return {
      name: data.name,
      url: data.url,
      id: data.url.slice(0, -1).split("/people/")[1]
    };
  });

  //console.log("augData", augData);

  return {
    type: FETCH_CHARACTERS,
    augData
  };
}
