import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input onChange={props.handleFormValue} type="text" className="form-control" placeholder="Pizza Topping" name="topping" value={
              props.pizza.topping
              }/>
        </div>
        <div className="col">
          <select name="size" value={props.pizza.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input name ="Vegetarian" className="form-check-input" type="radio" value="Vegetarian" checked={props.pizza.vegetarian? true:false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input name="Not Vegetarian" className="form-check-input" type="radio" value="Not Vegetarian" checked={!props.pizza.vegetarian? true:false}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={console.log}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
