import React from 'react';
import { Link } from 'react-router-dom';
import beer from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png';



const Home = () => {
    return (
        <div>
            <div className='article'>
            <Link to="/beers">
                <img src={beer} alt="beer"></img>
                <h3>All Beers</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed risus tempus, fermentum libero scelerisque, congue ex. 
                In placerat nulla eget purus semper pretium. Etiam eget eros diam. Vestibulum magna tortor, fringilla ut tellus ut, suscipit tincidunt metus. 
                Aliquam sit amet enim justo.</p>
            </Link>
            </div>
            <div className='article'>
            <Link to="/random-beer">
                <img src={randomBeer} alt="beer"></img>
                <h3>Random Beer</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed risus tempus, fermentum libero scelerisque, congue ex. 
                In placerat nulla eget purus semper pretium. Etiam eget eros diam. Vestibulum magna tortor, fringilla ut tellus ut, suscipit tincidunt metus. 
                Aliquam sit amet enim justo.</p>
            </Link>
            </div>
            <div className='article'>
            <Link to="/new-beer">
                <img src={newBeer} alt="beer"></img>
                <h3>New Beers</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed risus tempus, fermentum libero scelerisque, congue ex. 
                In placerat nulla eget purus semper pretium. Etiam eget eros diam. Vestibulum magna tortor, fringilla ut tellus ut, suscipit tincidunt metus. 
                Aliquam sit amet enim justo.</p>
            </Link>
            </div>
        </div>
    )
}

export default Home;