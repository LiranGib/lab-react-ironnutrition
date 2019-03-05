import React, { Component } from 'react';
import foods from './foods.json'


class FoodBox extends Component {
    
  state = {
    foods: foods
  }

  showFoods = () => {
    let list = this.state.foods.map((food,i) => {
      return <tr key={i}>
        <td><img src={food.image} className=""></img></td>
        <td>{food.name}</td>
        <td>{food.calories}</td>
        <td>{food.quantity}</td>
        </tr>
    })
    return list;
  }


  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
             <img src={foods.image} />
             </figure>
           </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{foods.name}</strong> <br />
                <small>{foods.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number" 
                  value={foods.quantity}
                />
              </div>
              <div className="control">
                <button className="button is-info">
                +
                </button>
              </div>
            </div>
           </div>
         </article>
        </div>
    );
  }
}

  export default FoodBox;
 
    