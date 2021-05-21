import React from 'react'

export default function OrderForm(props) {
    const {
        values,
        submit,
        change,
        errors,
    } = props

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onChange = event => {
        const { name, value, checked, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <form className = 'form container'>
            <div className = 'form-group submit'>
                <h2>Build Your Own Pizza</h2>

                <button disabled = {disabled}>Add to Order</button>

                <div className = 'errors'>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                </div>
            </div>

            <div className = 'form-group inputs' onSubmit={onSubmit}>
                <label><h3>Your Name</h3>
                    <input
                        value = {values.name}
                        onChange = {onChange}
                        name = 'name'
                        type = 'text'
                    />
                </label>

                <label><h3>Size</h3>
                    <select
                        value = {values.size}
                        onChange = {onChange}
                        name = 'size'>
                            <option value = ''>Select</option>
                            <option value = ''>Small</option>
                            <option value = ''>Medium</option>
                            <option value = ''>Large</option>
                    </select>
                </label>
            </div>

            <div className = 'form-group checkboxes'>
                <label><h3>Select Toppings</h3>
                    <h4>Choose up to 10</h4>
                    
                    <label>Pepperoni
                        <input
                            type = 'checkbox'
                            name = 'Pepperoni'
                            checked = {values.pepperoni}
                            onChange = {onChange}
                        />
                    </label>

                    <label>Sausage
                        <input
                            type = 'checkbox'
                            name = 'Sausage'
                            checked = {values.sausage}
                            onChange = {onChange}
                        />
                    </label>

                    <label>Canadian Bacon
                        <input
                            type = 'checkbox'
                            name = 'Canadian Bacon'
                            checked = {values.canadian}
                            onChange = {onChange}
                        />
                    </label>

                    <label>Spicy Italian Sausage
                        <input
                            type = 'checkbox'
                            name = 'Spicy Italian Sausage'
                            checked = {values.spicySausage}
                            onChange = {onChange}
                        />
                    </label>

                    <label>Grilled Chicken
                        <input
                            type = 'checkbox'
                            name = 'Grilled Chicken'
                            checked = {values.chicken}
                            onChange = {onChange}
                        />
                    </label>

                    <label>Onions
                        <input
                            type = 'checkbox'
                            name = 'Onions'
                            checked = {values.onions}
                            onChange = {onChange}
                        />
                    </label>

                    <label>Green Pepper
                        <input
                            type = 'checkbox'
                            name = 'Green Pepper'
                            checked = {values.peppers}
                            onChange = {onChange}
                        />
                    </label>

                    <label>Diced Tomatoes
                        <input
                            type = 'checkbox'
                            name = 'Diced Tomatoes'
                            checked = {values.tomatoes}
                            onChange = {onChange}
                        />
                    </label>

                    <label>Black Olives
                        <input
                            type = 'checkbox'
                            name = 'Black Olives'
                            checked = {values.olives}
                            onChange = {onChange}
                        />
                    </label>

                    <label>Roasted Garlic
                        <input
                            type = 'checkbox'
                            name = 'Roasted Garlic'
                            checked = {values.garlic}
                            onChange = {onChange}
                        />
                    </label>

                    <label>Artichoke Hearts
                        <input
                            type = 'checkbox'
                            name = 'Artichoke Hearts'
                            checked = {values.artichoke}
                            onChange = {onChange}
                        />
                    </label>

                    <label>Three Cheese
                        <input
                            type = 'checkbox'
                            name = 'Three Cheese'
                            checked = {values.threeCheese}
                            onChange = {onChange}
                        />
                    </label>

                    <label>Pineapple
                        <input
                            type = 'checkbox'
                            name = 'Pineapple'
                            checked = {values.pineapple}
                            onChange = {onChange}
                        />
                    </label>

                    <label>Extra Cheese
                        <input
                            type = 'checkbox'
                            name = 'Extra Cheese'
                            checked = {values.extraCheese}
                            onChange = {onChange}
                        />
                    </label>
                </label>
            </div>
        </form>
    )
}