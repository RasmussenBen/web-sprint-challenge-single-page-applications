import React, { useState, useEffect } from "react";
import axios from 'axios';
import * as yup from 'yup';


const initialFormValues = {
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
  

};
export default App;
