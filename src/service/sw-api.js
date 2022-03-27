import axios from "axios";
const BASE_URL = "https://swapi.dev/api/";
const ENDPOINT = "starships/";

export const fetchData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}${ENDPOINT}`);
    const result = response.data.results;
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
