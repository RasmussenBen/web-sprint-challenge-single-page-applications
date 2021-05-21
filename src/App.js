import React from "react";

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

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
