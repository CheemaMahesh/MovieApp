import React from 'react';

class MovieComponent extends React.Component{
    render(){
        return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img src="https://i.ytimg.com/vi/oBqqI6NMeaM/maxresdefault.jpg" alt="Poster"/>
                    </div>
                    <div className="right">
                        <div className="title">The Avengers</div>
                        <div className="plot">Heros with super natural powers saves earth in 2012</div>
                        <div className="price">Rs:100</div>
                        <div className="footer">
                            <div className="rating">8.9</div>
                            <div className="stars">****</div>
                            <button className="favorite-btn">Add to favorites</button>
                            <button className="cart-btn">Add to cart</button>
                        </div>


                    </div>
                </div>

            </div>
        )
    }
}
export default MovieComponent;