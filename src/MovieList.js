import React from "react";
import MovieCard from "./MovieCard";

class MovieList extends React.Component{
    render(){
        const {movies,addStars,remStars,toggleFav,toggleCart} =  this.props;
          
        return(
            <div className="main">
                {movies.map((movie,index) => (
                <MovieCard movies = {movie}
                           key = {movie.id} 
                           addStars={addStars}
                           remStars={remStars}
                           toggleFav={toggleFav}
                           toggleCart={toggleCart}
                          />

            ))}              
            </div>
        )
    }
}

export default MovieList;