import React from "react";
import './App.css';
import  MovieList from './MovieList';
import NavBar from './NavBar';
import {movies} from "./moviesData";

class App extends React.Component {
  constructor(){
    super();
    //Creating the state object 
    this.state = {
        movies :movies,
        cartCount:0
    } 
}

handleIncStars=(movie)=>{
const {movies}=this.state;
const mid=movies.indexOf(movie);

if(movies[mid].star<5){
    movies[mid].star+=0.5;
}


this.setState({
    movies:movies
})

}

handleDecStars=(movie)=>{
const {movies}=this.state;
const mid=movies.indexOf(movie);

if(movies[mid].star>0){
    movies[mid].star-=0.5;
}
this.setState({
    movies:movies
})
}

handleFav=(movie)=>{
const {movies}=this.state;
const mid=movies.indexOf(movie);
    movies[mid].fav= !movies[mid].fav;
this.setState({
    movies:movies
})
}

handleCart=(movie)=>{
const {movies}=this.state;
let {cartCount}=this.state;
const mid=movies.indexOf(movie);
    movies[mid].isInCart= !movies[mid].isInCart;
    if(movies[mid].isInCart){
        cartCount+=1;
    }else{
        cartCount-=1;
    }
this.setState({
    movies:movies,
    cartCount
})
}
  render(){

    const {movies}=this.state;
    const {cartCount}=this.state;

    return (
      <>   
      <NavBar cartCount={cartCount}/>
      <MovieList movies={movies}
                  addStars={this.handleIncStars}
                  remStars={this.handleDecStars}
                  toggleFav={this.handleFav}
                  toggleCart={this.handleCart}
                  />
      </>
          );
  }
  
}

export default App;
