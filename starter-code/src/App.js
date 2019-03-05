import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './FoodBox';
import AddFood from './AddFood';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FoodBox/>
        
        {/* <button onClick={() => this.toggleMovies() }>
            {showOscarAwarded ? 'Hide Oscar Awarded' : 'Show Oscar Awarded'}
        </button> */}
      </div>
    );
  }
}

export default App;