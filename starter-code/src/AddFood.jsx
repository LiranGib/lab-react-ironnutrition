import React, { Component } from "react";

class AddFood extends Component {

    constructor(props){
        super(props);
  
        this.state = { 
          name: '',
          calories: '',
          image: '',
          quantity: ''
        }
    }

    handleNameInput = (event) => {
      this.setState({
        name: event.target.value
      })
    }
  
    handleCaloriesInput = (event) => {
      this.setState({
        calories: event.target.value
      })
    }
    handleImageInput = (event) => {
      this.setState({
        image: event.target.value
      })
    }
    handleQuantityInput = (event) => {
      this.setState({
        quantity: event.target.value
      })
    }
    
    
    render(){
      return (
        <div>
          <form onSubmit={this.handleFormSubmit}>
              <label>name:</label>
              <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleNameInput(e)}/>
    
              <label>Calories:</label>
              <input type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleCaloriesInput(e)} />
    
              <label>Image:</label>
              <input type="file" name="image" checked={this.state.image} onChange={(e) => this.handleImageInput(e)}/>
              
              <label>Quantity</label>
              <input type="text" name="quantity" value={this.state.quantity} onChange={(e) => this.handleQuantityInput(e)}/>
              
              <input type="submit" value="Submit" />
          </form>
        </div>
      )
    }
  }
  
  export default AddFood;