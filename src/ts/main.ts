import { IMovie } from "./models/IMovie";
import { searchMovies } from "./services/movieService";

let form = document.querySelector(".searchForm") as HTMLFormElement;
form.addEventListener("submit", async (event: SubmitEvent) => {
  event.preventDefault();
  let searchText: string = (document.getElementById("searchText") as HTMLInputElement
        ).value;
    
        let movies: IMovie[] = await searchMovies(searchText);
        createHtml(movies); //här är en funktion som heter createHtml som skickar värdet movies och vi vet att movies är ett ojekt som har datatypen IMovie.
      }
);

//async behövs för att kunna använda await
//await betyder vänta med att köra denna kod, kör tex IMovie[] först.

const createHtml = (movies: IMovie[]) => {
  let searchResult: HTMLDivElement = document.getElementById(
    "searchResult"
  ) as HTMLDivElement;
  // searchResult.innerHTML = "";
  for (let i = 0; i < movies.length; i++) {
    // searchResult.innerHTML = "";

    let showMovie = document.createElement("div");
    let title = document.createElement("h5");
    let img = document.createElement("img");

    showMovie.classList.add("movie");
    title.classList.add("movie__title");
    img.classList.add("movie__img");

    title.innerHTML = movies[i].Title;
    img.src = movies[i].Poster;

    
    // searchResult.appendChild(searchResult)
    // showMovie.appendChild(searchResult)
    showMovie.appendChild(img);
    showMovie.appendChild(title);
    searchResult.appendChild(showMovie)
    document.body.appendChild(showMovie);
  }
};
