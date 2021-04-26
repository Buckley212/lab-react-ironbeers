// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Beers = () => {

    const [beers, setBeers] = useState([])

    
    useEffect(() => { //Happens on mount
        console.log('Beers list mounted')

        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers`)
            .then(response => {
                console.log(response.data)
                setBeers(response.data)
            })
        
        return () => console.log('component unmounted')
    },[])


    const newBeers = () =>{
        return beers.map(beer =>{
            return (
                <div>
                    <Link key={beer._id} to={`/beers/${beer._id}`}>
                        <img src={beer.image_url}></img>
                        <h3>{beer.name}</h3>
                        <h4>{beer.tagline}</h4>
                        <p>{beer.contributed_by}</p>
                    </Link>
                </div>
            )
        })
    }

    
    return (
        <div className='Beers'>
            {newBeers()}
        </div>
    )
}

export default Beers;