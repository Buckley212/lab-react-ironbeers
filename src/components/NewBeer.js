import React, { useState, useEffect } from 'react';

function NewBeer() {
  const [info, setInfo] = useState({});

  function handleChange(e) {
    let inputField = e.target.id;
    let inputValue = e.target.value;
    if (inputField == 'attenuation_level') {
      inputValue = parseInt(inputValue);
    }
    setInfo({ ...info, [inputField]: inputValue });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    e.persist();

    try {
      let response = await fetch(
        'https://ih-beers-api2.herokuapp.com/beers/new',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(info),
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <form id="newBeer" onSubmit={handleSubmit}>
        <label htmlFor="beerName">Name</label>
        <input
          required={true}
          type="text"
          id="name"
          onChange={handleChange}
        ></input>
        <label htmlFor="tagline">Tagline</label>
        <input
          required={true}
          type="text"
          id="tagline"
          onChange={handleChange}
        ></input>
        <label htmlFor="description">Description</label>
        <textarea
          required={true}
          id="description"
          onChange={handleChange}
        ></textarea>
        <label htmlFor="first_brewed">First Brewed</label>
        <input
          required={true}
          type="text"
          id="first_brewed"
          onChange={handleChange}
        ></input>
        <label htmlFor="brewers_tips">Brewers Tips</label>
        <input
          required={true}
          type="text"
          id="brewers_tips"
          onChange={handleChange}
        ></input>
        <label htmlFor="attenuation_level">Attenuation Level</label>
        <input
          required={true}
          type="number"
          id="attenuation_level"
          onChange={handleChange}
        ></input>
        <label htmlFor="contributed_by">Contributed By</label>
        <input type="text" id="contributed_by" onChange={handleChange}></input>
        <button type="submit" form="newBeer">
          ADD NEW
        </button>
      </form>
    </div>
  );
}

export default NewBeer;