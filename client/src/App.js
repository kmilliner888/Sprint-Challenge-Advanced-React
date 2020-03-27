import React from 'react';
import axios from 'axios';
import Players from './components/Players';
import './App.css';

class App extends React.Component {
  state = {
    wwc: [],
    entry: ""
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(response => {
        // console.log("response", response); 
        this.setState({ wwc : response.data})
      })
      .catch(error => console.log("error", error)); 
  };

  handleChanges = e => {
    this.setState({
      entry: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Women's World Cup Players</h1>
        <br></br>
        <div className="search-form-container">
          <input
            type="text"
            placeholder="Search for a player"
            value={this.state.entry}
            onChange={this.handleChanges}
          />
          <button onClick={this.searchPlayer}>Search for Player</button>
        </div>
        <div className="players-container">
          {this.state.wwc.map(player => {
            if (player.name === this.state.entry) {
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
        <Players wwc={this.state} />
      </div>
    );
  }
}

export default App;
