import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomBeer = () => {
    
    const [beer, setBeer] = useState({});
  
    useEffect(() => {
      axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((response) => setBeer(response.data))
    }, []);

    const SoloBeer = (beer) => {
        return (
          <div className="beer-details">
            <img src={beer.image_url}></img>
            <h1>{beer.name}</h1>
            <h2>{beer.tagline}</h2>
            <p className="specs">
              {beer.first_brewed} - {beer.attenuation_level}
            </p>
            <p>{beer.description}</p>
            <p className="creator"><b>Created by:</b> {beer.contributed_by}</p>
          </div>
        );
      };

      return (
        <div>
          {SoloBeer(beer)}
        </div>
      );
}
export default RandomBeer;