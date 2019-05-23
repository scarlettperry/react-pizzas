import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  pizza = () => {
    return this.props.pizzas.map(obj=> 
      <Pizza key={obj.id} pizza={obj} selectedPizza={this.props.selectedPizza}/>)
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            this.pizza()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
