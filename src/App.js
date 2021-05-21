import React, { useState, useEffect } from "react";
import axios from 'axios';
import * as yup from 'yup';
import formSchema from "./formSchema";


const initialOrderValues = {
  name: '',
  size: '',
  sauce: '',
  pepperoni: false,
  sausage: false,
  canadian: false,
  spicySausage: false,
  chicken: false,
  onions: false,
  peppers: false,
  tomatoes: false,
  olives: false,
  garlic: false,
  artichoke: false,
  threeCheese: false,
  pineapple: false,
  extraCheese: false
}

const initialFormErrors = {
  name: '',
  size: '',
  sauce: ''
}

const initialDisabled = true;

const App = () => {
  const [orderValues, setOrderValues] = useState(initialOrderValues);
  const [orderErrors, setOrderErrors] = useState(initialOrderErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  
  const postOrder = order => {
    axios.post('https://reqres.in/api/orders', order)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
      setOrderValues(initialOrderValues)
  }

  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setOrderErrors({...orderErrors, [name]: ''})
      })
      .catch(err => {
        setOrderErrors({...orderErrors, [name]: err.errors[0]})
      })
      setOrderValues({...orderValues, [name]: value})
  }

  const orderSubmit = () => {
    const order = {
      name: orderValues.name.trim(),
      size: orderValues.size.trim(),
      toppings: [
        'pepperoni',
        'sausage',
        'canadian',
        'spicySausage',
        'chicken',
        'onions',
        'peppers',
        'tomatoes',
        'olives',
        'garlic',
        'artichoke',
        'threeCheese',
        'pineapple',
        'extraCheese'
      ].filter(topping => orderValues[topping])
    }
    postOrder(order)
  }

  useEffect(() => {
    formSchema.isValid(orderValues).then(valid => setDisabled(!valid))
  }, [orderValues])

  return (
    <Switch>
      <Route path='/pizza'>
        <Nav />
        <OrderForm values = {orderValues} change = {inputChange} disabled = {disabled} errors = {orderErrors} submit = {orderSubmit} />
      </Route>
      <Route path = '/'>
        <Nav />
        <Home />
      </Route>
    </Switch>
  )
};
export default App;
