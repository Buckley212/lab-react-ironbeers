import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Beers from './Beers';
import axios from 'axios';

const BeerDetails = ({ match }) => {
    
    const [beer, setBeer] = useState({});
  
    useEffect(() => {
      axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${match.params._id}`)
        .then((response) => setBeer(response.data))
    }, [match.params._id]);

    const SingleBeer = (beer) => {
        console.log(`beer`, beer);
        return (
          <div className="beer-details">
            <img src={beer.image_url}></img>
            <h1>{beer.name}</h1>
            <h2>{beer.tagline}</h2>
            <p className="specs">
              {beer.first_brewed} - {beer.attenuation_level}
            </p>
            <p>{beer.description}</p>
            <p className="creator">
              <b>Created by:</b> {beer.contributed_by}
            </p>
          </div>
        );
      };

      return (
        <div>
          {SingleBeer(beer)}
        </div>
      );
}
export default BeerDetails;