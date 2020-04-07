import React from 'react';
import axios from 'axios';
import Players from './components/Players';
import SearchForm from './components/SearchForm';
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

  render() {
    return (
      <div className="App">
        <h1>Womens World Cup Players</h1>
        <br></br>
        <SearchForm wwc={this.state} />
        <Players wwc={this.state} />
      </div>
    );
  }
}

export default App;
