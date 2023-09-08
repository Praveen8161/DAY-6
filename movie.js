class Movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating || "PG";
    }
    static getPG(...movies){
        return movies.filter((movie) => movie.rating === "PG");
    }
}
const movie1 = new Movie("Casino Royale","Eon Productions","PG-13");

const movie2 = new Movie("Mission Impossible-Dead Reconing","Paramount","PG-13");
const movie3 = new Movie("John Wick","20th Century Studios");
const movie4 = new Movie("Jurassic Park","Universal Pictures");

console.table(Movie.getPG(movie1,movie2,movie3,movie4));





