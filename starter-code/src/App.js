import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './FoodBox';




class App extends Component {

  // state = {
  //   foods: foods
  // }

  // showFoods = () => {
  //   let list = this.state.foods.map((food,i) => {
  //     return <tr key={i}>
  //       <td><img src={food.image} className=""></img></td>
  //       <td>{food.name}</td>
  //       <td>{food.calories}</td>
  //       <td>{food.quantity}</td>
  //       </tr>
  //   })
  //   return list;
  // }


  render() {
    return (
        <div className="App">
           <FoodBox/> 
        </div>
      );
    }
}

export default App;


    //  <div className="App">
    //     <h1>test</h1>
      
    //     <table className="">
    //       <tr>
    //         <th>Picture</th>
    //         <th>Name</th>
    //         <th>calories</th>
    //         <th>quantity</th>
    //       </tr>
    //       {this.showFoods()}
    //     </table>
    //   </div>