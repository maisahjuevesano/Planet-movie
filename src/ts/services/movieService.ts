import axios from "axios";
import { IMovie } from "../models/IMovie";
import { IOmdbResponse } from "../models/IOmdbResponse";

export async function searchMovies(searchText: string): Promise<IMovie[]> {
  let response = await axios.get<IOmdbResponse>(
    `http://omdbapi.com?s=${searchText}&apikey=416ed51a`
  );
  console.log(response.data.Search)
  return response.data.Search;
}
