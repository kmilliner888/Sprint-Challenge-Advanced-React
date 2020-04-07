import React from 'react';

const Players = (props) => {
    console.log('Players props', props)
    return (
        <div className="players-container">
            {props.wwc.wwc.map(player => (
                <div className="players-card" key={player.id}>
                    <h1>{player.name}</h1>
                    <h2>{player.country}</h2>
                    <p>Searches: {player.searches}</p>
                </div>
            ))}

        </div>
    )
};

export default Players;