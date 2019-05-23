import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  constructor(){
    super()
    this.state = {
      pizzas: [],
      pizza: {},
      topping: "",
      size: "",
      vegetarian: ""
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
      .then(resp=>resp.json())
      .then(data => this.setState({
        pizzas: data
      }))
  }

  handleFormValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    
  }

  selectedPizza = (pizza) => {
    console.log("hello", pizza)
    this.setState({
      pizza
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm
          pizza={this.state.pizza}
          handleFormValue={this.handleFormValue}
        />
        <PizzaList
          pizzas={this.state.pizzas}
          selectedPizza={this.selectedPizza}
        />
      </Fragment>
    );
  }
}

export default App;
