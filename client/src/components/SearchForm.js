import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocalStorage } from '../hooks/useLocalStorage';

const SearchForm = () => {

    const [searchPlayer, setSearchPlayer] = useLocalStorage("name");
    const [searchResults, setSearchResults] = useState([]);



    useEffect(() => {
        axios.get('http://localhost:5000/api/players')
      .then(response => {
        // console.log("response", response); 
        setSearchResults(response.data);
      })
      .catch(error => console.log("error", error)); 

    }, [searchPlayer]);

    const handleChanges = e => {
        setSearchPlayer(e.target.value);
    };

    const clearForm = e => {
        e.preventDefault();
        setSearchPlayer('');
    };
    

    return (
        <div>
            <div className="search-form-container">
            <label>Search: 
            <input
                type="text"
                placeholder="Search for a player"
                value={searchPlayer}
                onChange={handleChanges}
            />
            </label>
            <button onClick={clearForm}>Clear</button>
            </div>
            <div className="player-container">
            {searchResults.map(player => {
                if (player.name === searchPlayer) {
                return <div className="players-card" 
                key={player.id}>
                <h1>{player.name}</h1>
                <h2>{player.country}</h2>
                <p>Searches: {player.searches}</p>
                </div>
                } else {
                return "";
                }
            })} 
            </div>
        </div>
    )
};

export default SearchForm;